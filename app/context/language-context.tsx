'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Locale = 'en' | 'vi'

const translations = {
  en: {
    // Header
    jobTitle: 'Frontend Developer',
    yoe: '3+ YoE',
    // Contact labels
    birth: 'Birth',
    email: 'Email',
    phone: 'Phone',
    github: 'Github',
    address: 'Address',
    linkedin: 'LinkedIn',
    // Section headers
    overview: 'Overview',
    workExperienceCompany: 'Work Experience — Company',
    workExperienceFreelance: 'Work Experience — Freelance',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    personalProjects: 'Personal Projects',
    certificates: 'Certificates',
    // Project table labels
    client: 'Client',
    descriptions: 'Descriptions',
    numberOfMembers: 'Number of members',
    position: 'Position',
    responsibilities: 'Responsibilities',
    technologyInUse: 'Technology in use',
    // Skills table categories
    programmingLanguage: 'Programming Language',
    cssFramework: 'CSS Framework',
    webFramework: 'Web Framework',
    aiDevTools: 'AI & Dev Tools',
    ide: 'IDE',
    database: 'Database',
    sourceControl: 'Source Control',
    summary: 'Summary',
  },
  vi: {
    // Header
    jobTitle: 'Lập Trình Viên Frontend',
    yoe: '3+ năm KN',
    // Contact labels
    birth: 'Ngày sinh',
    email: 'Email',
    phone: 'Điện thoại',
    github: 'Github',
    address: 'Địa chỉ',
    linkedin: 'LinkedIn',
    // Section headers
    overview: 'Tổng quan',
    workExperienceCompany: 'Kinh nghiệm — Công ty',
    workExperienceFreelance: 'Kinh nghiệm — Freelance',
    education: 'Học vấn',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    personalProjects: 'Dự án cá nhân',
    certificates: 'Chứng chỉ',
    // Project table labels
    client: 'Khách hàng',
    descriptions: 'Mô tả',
    numberOfMembers: 'Số thành viên',
    position: 'Vị trí',
    responsibilities: 'Trách nhiệm',
    technologyInUse: 'Công nghệ sử dụng',
    // Skills table categories
    programmingLanguage: 'Ngôn ngữ lập trình',
    cssFramework: 'CSS Framework',
    webFramework: 'Web Framework',
    aiDevTools: 'AI & Công cụ Dev',
    ide: 'IDE',
    database: 'Cơ sở dữ liệu',
    sourceControl: 'Quản lý mã nguồn',
    summary: 'Tóm tắt',
  },
} as const

type TranslationKey = keyof typeof translations.en

interface LanguageContextValue {
  locale: Locale
  toggleLocale: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  toggleLocale: () => {},
  t: (key) => translations.en[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    // Temporarily force English as default; we'll re-enable switching later.
    setLocale('en')
    localStorage.setItem('locale', 'en')
  }, [])

  const toggleLocale = () => {
    setLocale(prev => {
      const next = prev === 'en' ? 'vi' : 'en'
      localStorage.setItem('locale', next)
      return next
    })
  }

  const t = (key: TranslationKey): string => translations[locale][key]

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
