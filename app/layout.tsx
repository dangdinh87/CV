import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/theme-context'
import { LanguageProvider } from './context/language-context'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

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
    default: '1100+ Câu Hỏi Phỏng Vấn IT 2026 Có Đáp Án — Luyện Phỏng Vấn Online',
    template: '%s | Luyện Phỏng Vấn IT',
  },
  description:
    'Tổng hợp 1100+ câu hỏi phỏng vấn IT có đáp án chi tiết. Frontend, Backend, Fullstack — React, JavaScript, TypeScript, Node.js, Next.js, System Design, Database, DevOps. Từ Junior đến Senior. Luyện tập miễn phí online.',
  keywords: [
    'câu hỏi phỏng vấn IT', 'phỏng vấn lập trình viên', 'ôn tập phỏng vấn',
    'câu hỏi phỏng vấn frontend', 'câu hỏi phỏng vấn backend', 'phỏng vấn fullstack',
    'phỏng vấn React', 'phỏng vấn JavaScript', 'phỏng vấn TypeScript',
    'phỏng vấn Node.js', 'phỏng vấn Next.js', 'phỏng vấn Golang',
    'phỏng vấn system design', 'phỏng vấn database', 'phỏng vấn DevOps',
    'câu hỏi phỏng vấn AWS', 'luyện phỏng vấn IT 2026', 'tuyển dụng lập trình viên',
    'chuẩn bị phỏng vấn IT', 'ôn thi phỏng vấn',
    'phỏng vấn junior developer', 'phỏng vấn senior developer',
    'developer interview questions', 'coding interview Vietnamese',
  ],
  alternates: {
    canonical: SITE_URL,
    languages: { 'vi': SITE_URL, 'en': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Luyện Phỏng Vấn IT',
    title: '1100+ Câu Hỏi Phỏng Vấn IT 2026 Có Đáp Án — Luyện Phỏng Vấn Online',
    description:
      'Luyện phỏng vấn IT miễn phí. 1100+ câu hỏi Frontend, Backend, Fullstack — React, JavaScript, TypeScript, Node.js, System Design, DevOps. Từ Junior đến Senior.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: '1100+ Câu Hỏi Phỏng Vấn IT 2026 Có Đáp Án' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1100+ Câu Hỏi Phỏng Vấn IT 2026 Có Đáp Án',
    description:
      'Luyện phỏng vấn IT miễn phí — Frontend, Backend, Fullstack. React, JavaScript, Node.js, System Design, DevOps. Junior đến Senior.',
    images: ['/opengraph-image'],
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
  other: {
    'google-site-verification': 'google583c5c945cf216b2',
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
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
              name: 'Luyện Phỏng Vấn IT',
              alternateName: ['Câu Hỏi Phỏng Vấn IT', 'Ôn Tập Phỏng Vấn IT', 'IT Interview Questions'],
              url: SITE_URL,
              description: '1100+ câu hỏi phỏng vấn IT có đáp án chi tiết. Frontend, Backend, Fullstack — từ Junior đến Senior.',
              inLanguage: ['vi', 'en'],
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'What is the CAP theorem in system design?', acceptedAnswer: { '@type': 'Answer', text: 'The CAP theorem states that a distributed system can only guarantee two of three properties: Consistency, Availability, and Partition Tolerance. In practice, since network partitions are unavoidable, you must choose between CP (consistency + partition tolerance) or AP (availability + partition tolerance).' } },
                { '@type': 'Question', name: 'What are the SOLID principles?', acceptedAnswer: { '@type': 'Answer', text: 'SOLID stands for: Single Responsibility (one class, one job), Open/Closed (open to extend, closed to modify), Liskov Substitution (subtypes must behave like parents), Interface Segregation (don\'t force unused implementations), and Dependency Inversion (depend on abstractions, not concretions).' } },
                { '@type': 'Question', name: 'Sự khác biệt giữa var, let và const trong JavaScript là gì?', acceptedAnswer: { '@type': 'Answer', text: 'var có function scope và bị hoisting, let có block scope và không thể re-declare, const có block scope và không thể re-assign. Nên dùng const mặc định, let khi cần thay đổi giá trị, tránh dùng var.' } },
                { '@type': 'Question', name: 'What is Apache Kafka and when should you use it?', acceptedAnswer: { '@type': 'Answer', text: 'Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant real-time data pipelines. Use Kafka when you need to process millions of events per second with message replay capability, event sourcing, or decouple microservices.' } },
                { '@type': 'Question', name: 'Redis là gì và tại sao nó nhanh?', acceptedAnswer: { '@type': 'Answer', text: 'Redis là in-memory data store sử dụng single-threaded event loop để xử lý commands, loại bỏ overhead của locking. Tất cả data lưu trong RAM nên latency cực thấp (sub-millisecond). Redis hỗ trợ nhiều data structures: String, Hash, List, Set, Sorted Set, Stream.' } },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Luyện Phỏng Vấn IT',
              url: SITE_URL,
              description: '1100+ câu hỏi phỏng vấn IT có đáp án, dành cho developer Việt Nam',
              availableLanguage: ['Vietnamese', 'English'],
              teaches: ['Frontend Development', 'Backend Development', 'System Design', 'Design Patterns', 'DevOps', 'Cloud Computing', 'Database', 'Networking'],
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
