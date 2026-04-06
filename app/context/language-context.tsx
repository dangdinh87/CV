'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, type TranslationKey } from '../data/translations'

type Locale = 'en' | 'vi'

/** Parse **bold** markers into <strong> elements */
function parseRichText(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

interface LanguageContextValue {
  locale: Locale
  toggleLocale: () => void
  /** Returns plain string */
  t: (key: TranslationKey) => string
  /** Returns React node with **bold** parsed into <strong> */
  tr: (key: TranslationKey) => React.ReactNode
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'vi',
  toggleLocale: () => {},
  t: (key) => translations.vi[key],
  tr: (key) => translations.vi[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('vi')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'en' || saved === 'vi') setLocale(saved)
  }, [])

  const toggleLocale = () => {
    setLocale(prev => {
      const next = prev === 'en' ? 'vi' : 'en'
      localStorage.setItem('locale', next)
      return next
    })
  }

  const t = (key: TranslationKey): string => translations[locale][key]
  const tr = (key: TranslationKey): React.ReactNode => parseRichText(translations[locale][key])

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
