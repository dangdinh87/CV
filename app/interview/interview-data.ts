export interface QAItem {
  id: number
  category: string
  subcategory: string
  level: 'beginner' | 'intermediate' | 'advanced'
  q: string
  a: string
}

export const CATEGORIES = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
  'Next.js', 'State Management', 'Node.js', 'Database',
  'Build Tools', 'Testing', 'Performance', 'Security',
  'SEO', 'Golang',
] as const

export type Category = (typeof CATEGORIES)[number]

export const LEVEL_CONFIG = {
  beginner: { label: 'Cơ Bản', bg: 'var(--green-bg)', color: 'var(--green-ink)' },
  intermediate: { label: 'Trung Bình', bg: 'var(--amber-bg)', color: 'var(--amber-ink)' },
  advanced: { label: 'Nâng Cao', bg: 'var(--rose-bg)', color: 'var(--rose-ink)' },
} as const

// Static imports from all data files (~888 Q&A items total)
import { HTML_CSS_DATA } from './data/html-css-data'
import { JS_TS_DATA } from './data/js-ts-data'
import { REACT_NEXTJS_DATA } from './data/react-nextjs-data'
import { TOOLS_MISC_DATA } from './data/tools-misc-data'
import { FPT_EXTRA_DATA } from './data/fpt-extra-data'
import { GOLANG_DATA } from './data/golang-data'
import { FPT_RESEARCHED_DATA } from './data/fpt-researched-data'
import { SEO_DATA } from './data/seo-data'
import { CAREER_NONTECH_DATA } from './data/career-nontech-data'

export const QA_DATA: QAItem[] = [
  ...HTML_CSS_DATA,
  ...JS_TS_DATA,
  ...REACT_NEXTJS_DATA,
  ...TOOLS_MISC_DATA,
  ...FPT_EXTRA_DATA,
  ...GOLANG_DATA,
  ...FPT_RESEARCHED_DATA,
  ...SEO_DATA,
  ...CAREER_NONTECH_DATA,
].sort((a, b) => a.id - b.id)
