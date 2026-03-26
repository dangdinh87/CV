import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/theme-context'
import { LanguageProvider } from './context/language-context'
import { Analytics } from '@vercel/analytics/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const SITE_URL = 'https://luyenphongvan.online'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Luyện Phỏng Vấn — 1100+ Câu Hỏi Phỏng Vấn IT',
    template: '%s | Luyện Phỏng Vấn',
  },
  description:
    'Tổng hợp 1100+ câu hỏi phỏng vấn IT từ cơ bản đến nâng cao. HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Golang, Database, DevOps, Testing, Security, Career & more.',
  keywords: [
    'phỏng vấn', 'interview', 'frontend', 'backend', 'fullstack',
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Golang',
    'luyện phỏng vấn', 'câu hỏi phỏng vấn IT', 'career',
    'phỏng vấn lập trình', 'tuyển dụng IT', 'developer interview',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: 'Luyện Phỏng Vấn',
    title: 'Luyện Phỏng Vấn — 1100+ Câu Hỏi Phỏng Vấn IT',
    description:
      'Tổng hợp 1100+ câu hỏi phỏng vấn IT từ cơ bản đến nâng cao. Luyện tập ngay với HTML, CSS, JS, React, Node.js, Golang, DevOps & more.',
    images: [{ url: '/icon.svg', width: 512, height: 512, alt: 'Luyện Phỏng Vấn' }],
  },
  twitter: {
    card: 'summary',
    title: 'Luyện Phỏng Vấn — 1100+ Câu Hỏi Phỏng Vấn IT',
    description:
      'Tổng hợp 1100+ câu hỏi phỏng vấn IT từ cơ bản đến nâng cao.',
    images: ['/icon.svg'],
  },
  verification: {
    google: 'google583c5c945cf216b2',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Luyện Phỏng Vấn',
              url: SITE_URL,
              description: 'Tổng hợp 1100+ câu hỏi phỏng vấn IT từ cơ bản đến nâng cao',
              inLanguage: 'vi',
            }),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
