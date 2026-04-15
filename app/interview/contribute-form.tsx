'use client'

import { useState, useEffect, useCallback } from 'react'
import { CATEGORIES } from './interview-data'
import { useLanguage } from '../context/language-context'

interface FormData {
  name: string
  email: string
  category: string
  question: string
  answer: string
  note: string
  links: string
}

const INITIAL: FormData = { name: '', email: '', category: '', question: '', answer: '', note: '', links: '' }

type ContributeTab = 'question' | 'feature' | 'contribute'

const GITHUB_REPO = 'https://github.com/dangdinh87/luyen-phong-van-online'

export function ContributeForm({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage()
  const [tab, setTab] = useState<ContributeTab>('question')
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (tab === 'question' && !form.question.trim()) { setErrorMsg(locale === 'en' ? 'Please enter a question' : 'Vui lòng nhập câu hỏi'); return }
    if (tab === 'feature' && !form.question.trim()) { setErrorMsg(locale === 'en' ? 'Please enter a feature description' : 'Vui lòng nhập mô tả tính năng'); return }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: tab }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
        setErrorMsg(data.error || (locale === 'en' ? 'Submission failed' : 'Gửi thất bại'))
      }
    } catch {
      setStatus('error')
      setErrorMsg(locale === 'en' ? 'Connection error' : 'Lỗi kết nối')
    }
  }

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

        <div className="iv-contribute-tabs">
          <button
            className={`iv-contribute-tab ${tab === 'question' ? 'active' : ''}`}
            onClick={() => { setTab('question'); setStatus('idle'); setErrorMsg('') }}
          >
            {locale === 'en' ? 'Question' : 'Câu hỏi'}
          </button>
          <button
            className={`iv-contribute-tab ${tab === 'feature' ? 'active' : ''}`}
            onClick={() => { setTab('feature'); setStatus('idle'); setErrorMsg('') }}
          >
            {locale === 'en' ? 'Feature' : 'Tính năng'}
          </button>
          <button
            className={`iv-contribute-tab ${tab === 'contribute' ? 'active' : ''}`}
            onClick={() => { setTab('contribute'); setStatus('idle'); setErrorMsg('') }}
          >
            {locale === 'en' ? 'Contribute' : 'Đóng góp PR'}
          </button>
        </div>

        {tab === 'contribute' ? (
          <div className="iv-contribute-github-tab">
            <p className="iv-donate-desc">
              {locale === 'en'
                ? 'Contribute directly to the project on GitHub — submit a PR or create an issue.'
                : 'Đóng góp trực tiếp vào dự án trên GitHub — tạo PR hoặc tạo issue.'}
            </p>

            <div className="iv-donate-buttons">
              <a
                href={`${GITHUB_REPO}/issues/new`}
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-issue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {locale === 'en' ? 'Create Issue' : 'Tạo Issue'}
              </a>
              <a
                href={`${GITHUB_REPO}/fork`}
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-pr"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
                </svg>
                {locale === 'en' ? 'Fork & Create PR' : 'Fork & Tạo PR'}
              </a>
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {locale === 'en' ? 'View Repository' : 'Xem Repository'}
              </a>
            </div>
          </div>
        ) : status === 'success' ? (
          <div className="iv-contribute-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green-ink)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <p>{locale === 'en' ? 'Thank you for contributing!' : 'Cảm ơn bạn đã đóng góp!'}</p>
            <p className="iv-contribute-sub">{locale === 'en' ? 'Your submission will be reviewed and added.' : 'Câu hỏi sẽ được review và thêm vào bộ sưu tập.'}</p>
            <button className="iv-contribute-btn" onClick={onClose}>{locale === 'en' ? 'Close' : 'Đóng'}</button>
          </div>
        ) : (
          <form className="iv-contribute-form" onSubmit={handleSubmit}>
            {tab === 'question' ? (
              <>
                <div className="iv-contribute-row">
                  <div className="iv-contribute-field">
                    <label htmlFor="q_name">{locale === 'en' ? 'Name' : 'Tên'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                    <input id="q_name" type="text" value={form.name} onChange={set('name')} placeholder="Ẩn danh" />
                  </div>
                  <div className="iv-contribute-field">
                    <label htmlFor="q_email">Email <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                    <input id="q_email" type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" />
                  </div>
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="q_category">{locale === 'en' ? 'Topic' : 'Chủ đề'}</label>
                  <select id="q_category" value={form.category} onChange={set('category')}>
                    <option value="">{locale === 'en' ? '-- Select topic --' : '-- Chọn chủ đề --'}</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="Khác">{locale === 'en' ? 'Other' : 'Khác'}</option>
                  </select>
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="q_question">{locale === 'en' ? 'Question' : 'Câu hỏi'} <span className="iv-required">*</span></label>
                  <textarea
                    id="q_question"
                    value={form.question}
                    onChange={set('question')}
                    placeholder={locale === 'en' ? 'Enter a question or knowledge...' : 'Nhập câu hỏi hoặc kiến thức...'}
                    rows={3}
                    required
                  />
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="q_answer">{locale === 'en' ? 'Suggested answer' : 'Gợi ý đáp án'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                  <textarea
                    id="q_answer"
                    value={form.answer}
                    onChange={set('answer')}
                    placeholder={locale === 'en' ? 'If you have a suggested answer...' : 'Nếu bạn có gợi ý đáp án...'}
                    rows={4}
                  />
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="q_note">{locale === 'en' ? 'Note' : 'Ghi chú'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                  <input id="q_note" type="text" value={form.note} onChange={set('note')} placeholder={locale === 'en' ? 'Source, suggested level...' : 'Nguồn, level gợi ý...'} />
                </div>
              </>
            ) : (
              <>
                <div className="iv-contribute-row">
                  <div className="iv-contribute-field">
                    <label htmlFor="f_name">{locale === 'en' ? 'Name' : 'Tên'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                    <input id="f_name" type="text" value={form.name} onChange={set('name')} placeholder="Ẩn danh" />
                  </div>
                  <div className="iv-contribute-field">
                    <label htmlFor="f_email">Email <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                    <input id="f_email" type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" />
                  </div>
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="f_question">{locale === 'en' ? 'Feature description' : 'Mô tả tính năng'} <span className="iv-required">*</span></label>
                  <textarea
                    id="f_question"
                    value={form.question}
                    onChange={set('question')}
                    placeholder={locale === 'en' ? 'What feature would you like? Describe in detail...' : 'Bạn muốn website có thêm tính năng gì? Mô tả chi tiết...'}
                    rows={4}
                    required
                  />
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="f_answer">{locale === 'en' ? 'Reason / Benefits' : 'Lý do / Lợi ích'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                  <textarea
                    id="f_answer"
                    value={form.answer}
                    onChange={set('answer')}
                    placeholder={locale === 'en' ? 'How would this feature help learning?' : 'Tính năng này giúp ích gì cho việc học/ôn tập?'}
                    rows={3}
                  />
                </div>

                <div className="iv-contribute-field">
                  <label htmlFor="f_links">{locale === 'en' ? 'Reference link' : 'Link tham khảo'} <span className="iv-optional">{locale === 'en' ? '(optional)' : '(tùy chọn)'}</span></label>
                  <textarea
                    id="f_links"
                    value={form.links}
                    onChange={set('links')}
                    placeholder={locale === 'en' ? 'Example links, screenshots...' : 'Link ví dụ từ website khác, ảnh minh họa...'}
                    rows={2}
                  />
                </div>
              </>
            )}

            {errorMsg && <div className="iv-contribute-error">{errorMsg}</div>}

            <div className="iv-contribute-actions">
              <button type="button" className="iv-contribute-btn iv-btn-secondary" onClick={onClose}>{locale === 'en' ? 'Cancel' : 'Hủy'}</button>
              <button type="submit" className="iv-contribute-btn iv-btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? (locale === 'en' ? 'Sending...' : 'Đang gửi...') : (locale === 'en' ? 'Submit' : 'Gửi đóng góp')}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
