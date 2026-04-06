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
                ? 'A cup of coffee helps me stay motivated to improve quality every day.'
                : 'Một ly cà phê giúp mình có thêm động lực cải thiện chất lượng mỗi ngày.'}
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
              >
                <MomoIcon size={20} />
                MoMo
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
