'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/language-context'

const BUYMEACOFFEE_URL = 'https://buymeacoffee.com/deannguyen872k'

function MomoIcon({ size = 20 }: { size?: number }) {
  return <img src="/icons/momo-logo.svg" alt="MoMo" width={size} height={size} />
}

export function DonateModal({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage()
  const [showMomoQR, setShowMomoQR] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (showMomoQR) setShowMomoQR(false)
      else onClose()
    }
  }, [onClose, showMomoQR])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <div className="iv-contribute-overlay" onClick={showMomoQR ? () => setShowMomoQR(false) : onClose} />
      <div className="iv-contribute-modal iv-donate-modal">
        <div className="iv-contribute-header">
          <h3>{showMomoQR ? 'MoMo QR' : (locale === 'en' ? 'Support Project' : 'Ủng Hộ Dự Án')}</h3>
          <button className="iv-contribute-close" onClick={showMomoQR ? () => setShowMomoQR(false) : onClose} aria-label={locale === 'en' ? 'Close' : 'Đóng'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {showMomoQR ? (
          <div className="iv-donate-qr-wrap">
            <img src="/momo-qr.png" alt="MoMo QR - Nguyễn Đăng Định" className="iv-donate-qr-img" />
            <button className="iv-donate-qr-back" onClick={() => setShowMomoQR(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
              {locale === 'en' ? 'Back' : 'Quay lại'}
            </button>
          </div>
        ) : (
          <>
            <p className="iv-donate-desc">
              {locale === 'en'
                ? 'If this has been helpful to you, a coffee helps me stay motivated to keep improving the quality every day.'
                : 'Nếu cảm thấy giúp ích cho bạn, một ly cà phê giúp mình có thêm động lực cải thiện chất lượng trang web mỗi ngày.'}
            </p>

            <div className="iv-donate-buttons">
              <a
                href={BUYMEACOFFEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-coffee"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
                </svg>
                Buy Me a Coffee
              </a>
              <a
                href="https://me.momo.vn/ReI4uqFoFMujsGUVFmFl"
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-momo"
                onClick={() => fetch('/api/donate-notify', { method: 'POST' }).catch(() => {})}
              >
                <MomoIcon size={20} />
                MoMo
              </a>
              <a
                href="https://t.me/+cvU8QIEmuY5iMDQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="iv-donate-btn iv-donate-btn-telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                {locale === 'en' ? 'Join Telegram Group' : 'Tham gia nhóm Telegram'}
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
