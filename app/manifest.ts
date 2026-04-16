import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luyện Phỏng Vấn IT — 1800+ Câu Hỏi Có Đáp Án',
    short_name: 'Luyện Phỏng Vấn IT',
    description:
      '1800+ câu hỏi phỏng vấn IT có đáp án chi tiết. Frontend, Backend, Fullstack — React, Java, PHP, C#, Flutter, System Design, DevOps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
