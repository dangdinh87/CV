import type { Metadata } from 'next'
import { ChangelogClient } from './changelog-client'

export const metadata: Metadata = {
  title: 'Nhật ký thay đổi — Changelog',
  description: 'Theo dõi các cập nhật và thay đổi mới nhất của Luyện Phỏng Vấn IT. Track all notable changes and updates.',
}

export default function ChangelogPage() {
  return <ChangelogClient />
}
