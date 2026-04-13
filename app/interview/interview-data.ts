export interface QAItem {
  id: number
  category: string
  subcategory: string
  level: 'beginner' | 'intermediate' | 'advanced'
  q: string
  a: string
  /** English question (optional, for bilingual support) */
  q_en?: string
  /** English answer (optional, for bilingual support) */
  a_en?: string
}

export const CATEGORIES = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
  'Next.js', 'State Management', 'Node.js', 'Database',
  'Build Tools', 'Testing', 'Performance', 'Security',
  'SEO', 'Golang', 'Python', 'Vue.js',
  'System Design', 'Design Patterns', 'Kafka', 'Redis',
  'Network', 'Operating System', 'AWS & Cloud',
] as const

export type Category = (typeof CATEGORIES)[number]

export const LEVEL_CONFIG = {
  beginner: { label: 'Cơ Bản', label_en: 'Basic', bg: '#2563EB', color: '#fff' },
  intermediate: { label: 'Trung Bình', label_en: 'Medium', bg: '#e58e07', color: '#fff' },
  advanced: { label: 'Nâng Cao', label_en: 'Advanced', bg: '#f43f5e', color: '#fff' },
} as const

// Static imports from all data files
import { HTML_CSS_DATA } from './data/html-css-data'
import { JS_TS_DATA } from './data/js-ts-data'
import { REACT_NEXTJS_DATA } from './data/react-nextjs-data'
import { TOOLS_MISC_DATA } from './data/tools-misc-data'
import { FPT_EXTRA_DATA } from './data/fpt-extra-data'
import { GOLANG_DATA } from './data/golang-data'
import { FPT_RESEARCHED_DATA } from './data/fpt-researched-data'
import { SEO_DATA } from './data/seo-data'
import { CAREER_NONTECH_DATA } from './data/career-nontech-data'
import { SYSTEM_DESIGN_DATA } from './data/system-design-data'
import { DESIGN_PATTERNS_DATA } from './data/design-patterns-data'
import { KAFKA_REDIS_DATA } from './data/kafka-redis-data'
import { NETWORKING_OS_DATA } from './data/networking-os-data'
import { AWS_CLOUD_DATA } from './data/aws-cloud-data'
import { PHP_LARAVEL_DATA } from './data/php-laravel-data'
import { JAVA_DATA } from './data/java-data'
import { CSHARP_DATA } from './data/csharp-data'
import { FLUTTER_DATA } from './data/flutter-data'
import { ANDROID_DATA } from './data/android-data'
import { RABBITMQ_DATA } from './data/rabbitmq-data'
import { PYTHON_DATA } from './data/python-data'
import { VUEJS_DATA } from './data/vuejs-data'

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
  ...SYSTEM_DESIGN_DATA,
  ...DESIGN_PATTERNS_DATA,
  ...KAFKA_REDIS_DATA,
  ...NETWORKING_OS_DATA,
  ...AWS_CLOUD_DATA,
  ...PHP_LARAVEL_DATA,
  ...JAVA_DATA,
  ...CSHARP_DATA,
  ...FLUTTER_DATA,
  ...ANDROID_DATA,
  ...RABBITMQ_DATA,
  ...PYTHON_DATA,
  ...VUEJS_DATA,
].sort((a, b) => a.id - b.id)
