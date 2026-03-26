'use client'

import { useState } from 'react'
import { CATEGORIES } from './interview-data'

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

export function ContributeForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.question.trim()) { setErrorMsg('Vui lòng nhập câu hỏi'); return }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Gửi thất bại')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Lỗi kết nối')
    }
  }

  return (
    <>
      <div className="iv-contribute-overlay" onClick={onClose} />
      <div className="iv-contribute-modal">
        <div className="iv-contribute-header">
          <h3>Đóng Góp Câu Hỏi</h3>
          <button className="iv-contribute-close" onClick={onClose} aria-label="Đóng">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {status === 'success' ? (
          <div className="iv-contribute-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green-ink)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <p>Cảm ơn bạn đã đóng góp!</p>
            <p className="iv-contribute-sub">Câu hỏi sẽ được review và thêm vào bộ sưu tập.</p>
            <button className="iv-contribute-btn" onClick={onClose}>Đóng</button>
          </div>
        ) : (
          <form className="iv-contribute-form" onSubmit={handleSubmit}>
            <div className="iv-contribute-row">
              <div className="iv-contribute-field">
                <label>Tên <span className="iv-optional">(tùy chọn)</span></label>
                <input type="text" value={form.name} onChange={set('name')} placeholder="Ẩn danh" />
              </div>
              <div className="iv-contribute-field">
                <label>Email <span className="iv-optional">(tùy chọn)</span></label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" />
              </div>
            </div>

            <div className="iv-contribute-field">
              <label>Chủ đề</label>
              <select value={form.category} onChange={set('category')}>
                <option value="">-- Chọn chủ đề --</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div className="iv-contribute-field">
              <label>Câu hỏi <span className="iv-required">*</span></label>
              <textarea
                value={form.question}
                onChange={set('question')}
                placeholder="Nhập câu hỏi phỏng vấn..."
                rows={3}
                required
              />
            </div>

            <div className="iv-contribute-field">
              <label>Gợi ý đáp án <span className="iv-optional">(tùy chọn)</span></label>
              <textarea
                value={form.answer}
                onChange={set('answer')}
                placeholder="Nếu bạn có gợi ý đáp án..."
                rows={4}
              />
            </div>

            <div className="iv-contribute-field">
              <label>Link tham khảo <span className="iv-optional">(tùy chọn)</span></label>
              <textarea
                value={form.links}
                onChange={set('links')}
                placeholder="Dán link bài viết, video, tài liệu hữu ích... (mỗi link 1 dòng)"
                rows={3}
              />
            </div>

            <div className="iv-contribute-field">
              <label>Ghi chú <span className="iv-optional">(tùy chọn)</span></label>
              <input type="text" value={form.note} onChange={set('note')} placeholder="Nguồn, level gợi ý..." />
            </div>

            {errorMsg && <div className="iv-contribute-error">{errorMsg}</div>}

            <div className="iv-contribute-actions">
              <button type="button" className="iv-contribute-btn iv-btn-secondary" onClick={onClose}>Hủy</button>
              <button type="submit" className="iv-contribute-btn iv-btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Đang gửi...' : 'Gửi đóng góp'}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
