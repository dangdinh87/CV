'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../context/language-context'
import { CHANGELOG, CURRENT_VERSION, TYPE_LABEL } from './changelog-data'
import './changelog.css'

const SEEN_KEY = 'cl_seen_version'

function formatDate(dateStr: string, locale: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function ChangelogClient() {
  const { locale } = useLanguage()
  const lang = locale as 'vi' | 'en'

  /* First entry always expanded, rest collapsed */
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const set = new Set<string>()
    if (CHANGELOG.length > 0) set.add(CHANGELOG[0].version)
    return set
  })

  /* Mark current version as seen when user visits this page */
  useEffect(() => {
    localStorage.setItem(SEEN_KEY, CURRENT_VERSION)
  }, [])

  const toggle = (version: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(version)) next.delete(version)
      else next.add(version)
      return next
    })
  }

  return (
    <div className="cl-page">
      {/* Header */}
      <header className="cl-header">
        <div className="cl-header-actions">
          <a href="/" className="cl-back-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            {lang === 'en' ? 'Back' : 'Quay lại'}
          </a>
        </div>
        <div className="cl-current-version">v{CURRENT_VERSION}</div>
        <h1 className="cl-title">{lang === 'en' ? 'Changelog' : 'Nhật ký cập nhật'}</h1>
        <p className="cl-subtitle">{lang === 'en' ? 'Follow the latest updates and improvements' : 'Theo dõi các cập nhật và cải tiến mới nhất'}</p>
      </header>

      {/* Timeline */}
      <div className="cl-container">
        <div className="cl-timeline">
          {CHANGELOG.map((entry, i) => {
            const isOpen = expanded.has(entry.version)
            return (
              <article key={entry.version} className="cl-entry">
                <button className="cl-entry-header" onClick={() => toggle(entry.version)} aria-expanded={isOpen}>
                  <span className="cl-version">v{entry.version}</span>
                  <span className="cl-date">{formatDate(entry.date, lang)}</span>
                  {i === 0 && <span className="cl-latest">{lang === 'en' ? 'Latest' : 'Mới nhất'}</span>}
                  <span className="cl-entry-count">{entry.changes.length}</span>
                  <svg className={`cl-chevron ${isOpen ? 'cl-chevron--open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                {isOpen && (
                  <ul className="cl-changes">
                    {entry.changes.map((change, j) => (
                      <li key={j} className="cl-change">
                        <span className={`cl-badge cl-badge--${change.type}`}>{TYPE_LABEL[change.type][lang]}</span>
                        {change.icons && (
                          <span className="cl-change-icons">
                            {change.icons.map(icon => (
                              <img key={icon} src={icon} alt="" width={18} height={18} className="cl-change-icon" />
                            ))}
                          </span>
                        )}
                        <span>{change.text[lang]}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="iv-footer-wrap">
        <div className="iv-footer">
          <div className="iv-footer-left">
            <div className="iv-footer-brand">
              <img src="/icon.svg" alt="" width={24} height={24} className="iv-footer-icon" />
              <span className="iv-footer-logo">{lang === 'en' ? 'IT Knowledge Hub' : 'Luyện Phỏng Vấn IT'}</span>
            </div>
            <p className="iv-footer-slogan">{lang === 'en'
              ? '1700+ IT interview questions with detailed answers — Frontend, Backend, Java, PHP, C#, Flutter, System Design, DevOps.'
              : '1700+ câu hỏi phỏng vấn IT kèm đáp án chi tiết — Frontend, Backend, Java, PHP, C#, Flutter, System Design, DevOps.'}</p>
            <div className="iv-footer-links">
              <a href="mailto:nguyendangdinh47@gmail.com" className="iv-footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                nguyendangdinh47@gmail.com
              </a>
            </div>
          </div>
          <div className="iv-footer-right">
            <a href="https://launch.j2team.dev/products/luyen-phong-van?utm_source=badge-launched&utm_medium=badge&utm_campaign=badge-luyen-phong-van" target="_blank" rel="noopener noreferrer" className="iv-footer-badge">
              <img src="https://launch.j2team.dev/badge/luyen-phong-van/light" alt="Luyện Phỏng Vấn - Launched on J2TEAM Launch" width="250" height="54" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="iv-footer-copy">&copy; {new Date().getFullYear()} {lang === 'en' ? 'IT Knowledge Hub' : 'Luyện Phỏng Vấn IT'}</div>
      </footer>
    </div>
  )
}
