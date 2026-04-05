'use client'

import { useEffect, useCallback } from 'react'
import { useLanguage } from '../context/language-context'

const REPO_URL = 'https://github.com/dangdinh87/luyen-phong-van-online'

export function ContributeForm({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage()

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const items = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
      title: locale === 'en' ? 'Add Questions' : 'Thêm câu hỏi',
      desc: locale === 'en'
        ? 'Add new Q&A to data files in app/interview/data/'
        : 'Thêm câu hỏi & đáp án vào các file data trong app/interview/data/',
      url: `${REPO_URL}/tree/main/app/interview/data`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: locale === 'en' ? 'Report Issues' : 'Báo lỗi / Góp ý',
      desc: locale === 'en'
        ? 'Report bugs, wrong answers, or suggest improvements'
        : 'Báo lỗi sai đáp án, đề xuất cải thiện giao diện hoặc tính năng',
      url: `${REPO_URL}/issues/new`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
        </svg>
      ),
      title: locale === 'en' ? 'Create Pull Request' : 'Tạo Pull Request',
      desc: locale === 'en'
        ? 'Fork the repo, make changes, and submit a PR'
        : 'Fork repo, chỉnh sửa và gửi Pull Request trực tiếp',
      url: `${REPO_URL}/fork`,
    },
  ]

  return (
    <>
      <div className="iv-contribute-overlay" onClick={onClose} />
      <div className="iv-contribute-modal">
        <div className="iv-contribute-header">
          <h3>{locale === 'en' ? 'Contribute' : 'Đóng Góp'}</h3>
          <button className="iv-contribute-close" onClick={onClose} aria-label={locale === 'en' ? 'Close' : 'Đóng'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <p className="iv-contribute-desc">
          {locale === 'en'
            ? 'This is an open-source project. Contribute directly on GitHub!'
            : 'Đây là dự án mã nguồn mở. Đóng góp trực tiếp trên GitHub!'}
        </p>

        <div className="iv-contribute-links">
          {items.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="iv-contribute-link-card"
            >
              <div className="iv-contribute-link-icon">{item.icon}</div>
              <div>
                <div className="iv-contribute-link-title">{item.title}</div>
                <div className="iv-contribute-link-desc">{item.desc}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iv-contribute-link-arrow">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          ))}
        </div>

        <div className="iv-contribute-footer">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="iv-contribute-repo-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {locale === 'en' ? 'View on GitHub' : 'Xem trên GitHub'}
          </a>
        </div>
      </div>
    </>
  )
}
