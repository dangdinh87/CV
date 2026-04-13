/** Category group definitions — maps raw data categories into logical groups */

export interface CategoryGroup {
  label: string
  /** Path to SVG icon in /public/icons/ */
  icon: string
  /** All raw `category` values from data files that belong to this group */
  members: string[]
  /** If true, show "Sắp ra mắt" badge instead of question count */
  comingSoon?: boolean
  /** Date category was added (ISO string). Shows "NEW" badge for 30 days after this date. */
  addedDate?: string
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    label: 'HTML',
    icon: '/icons/html.svg',
    members: [
      'HTML', 'HTML5', 'Semantic', 'Forms', 'Headers', 'Accessibility',
    ],
  },
  {
    label: 'CSS',
    icon: '/icons/css.svg',
    members: [
      'CSS', 'Box Model', 'Display & Position', 'Flexbox', 'Grid',
      'Selectors', 'Responsive', 'Modern CSS', 'CSS Layout', 'Animations',
    ],
  },
  {
    label: 'JavaScript',
    icon: '/icons/javascript.svg',
    members: [
      'JavaScript', 'Kiểu Dữ Liệu & Biến', 'Hoisting & Closure', 'Functions',
      'this & Binding', 'Prototype', 'ES6+', 'Promise & Async', 'Async',
      'DOM & APIs', 'Event Loop', 'JS Tricky', 'Coding Challenge', 'Coding Live',
    ],
  },
  {
    label: 'TypeScript',
    icon: '/icons/typescript.svg',
    members: [
      'TypeScript', 'Types Cơ Bản', 'Interface', 'Interface & Type',
      'Generics', 'Utility Types', 'TypeScript Gotchas',
    ],
  },
  {
    label: 'React',
    icon: '/icons/react.svg',
    members: [
      'React', 'JSX & Cơ Bản', 'Components', 'Props & State',
      'Hooks & State', 'useState & useEffect', 'Advanced Hooks', 'Custom Hooks',
      'Lifecycle', 'Context & Router', 'Forms & Error',
      'Performance & Patterns', 'Patterns', 'React Thực Chiến',
      'React Query',
    ],
  },
  {
    label: 'Next.js',
    icon: '/icons/nextjs.svg',
    members: [
      'Next.js', 'App Router', 'Server/Client Components', 'Rendering',
      'API & Server Actions', 'Next.js SEO',
    ],
  },
  {
    label: 'State Management',
    icon: '/icons/state-management.svg',
    members: [
      'State Management', 'Redux', 'RTK', 'Zustand', 'Recoil', 'Jotai',
    ],
  },
  {
    label: 'Node.js',
    icon: '/icons/nodejs.svg',
    members: [
      'Node.js', 'Node.js Deep', 'Node.js Thực Tế', 'Express',
      'Streams', 'Buffers', 'File System',
    ],
  },
  {
    label: 'Golang',
    icon: '/icons/golang.svg',
    members: [
      'Golang', 'Concurrency', 'Struct', 'Collections',
    ],
  },
  {
    label: 'Java',
    icon: '/icons/java.svg',
    members: ['Java', 'Spring Boot', 'JVM', 'Java Collections'],
    addedDate: '2026-04-06',
  },
  {
    label: 'PHP',
    icon: '/icons/php.svg',
    members: ['PHP'],
    addedDate: '2026-04-06',
  },
  {
    label: 'Laravel',
    icon: '/icons/laravel.svg',
    members: ['Laravel'],
    addedDate: '2026-04-06',
  },
  {
    label: 'C#',
    icon: '/icons/csharp.svg',
    members: ['C#', 'ASP.NET', 'Entity Framework'],
    addedDate: '2026-04-06',
  },
  {
    label: 'Flutter',
    icon: '/icons/flutter.svg',
    members: ['Flutter', 'Dart', 'Flutter Widgets', 'Flutter State'],
    addedDate: '2026-04-06',
  },
  {
    label: 'Android',
    icon: '/icons/android.svg',
    members: ['Android', 'Kotlin', 'Jetpack Compose'],
    addedDate: '2026-04-07',
  },
  {
    label: 'Python',
    icon: '/icons/python.svg',
    members: ['Python'],
    addedDate: '2026-04-13',
  },
  {
    label: 'Vue.js',
    icon: '/icons/vuejs.svg',
    members: ['Vue.js'],
    addedDate: '2026-04-13',
  },
  {
    label: 'NestJS',
    icon: '/icons/nestjs.svg',
    members: ['NestJS'],
    addedDate: '2026-04-13',
  },
  {
    label: 'Backend & API',
    icon: '/icons/backend-api.svg',
    members: [
      'HTTP', 'CORS', 'Web & API', 'Environment', 'Error Handling',
    ],
  },
  {
    label: 'Database',
    icon: '/icons/database.svg',
    members: [
      'Database', 'Database Design', 'SQL Cơ Bản', 'NoSQL', 'ORM', 'Caching',
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: '/icons/devops.svg',
    members: [
      'Build Tools', 'Webpack', 'Vite', 'Babel', 'SWC',
      'Package Managers', 'Monorepo', 'Tooling',
      'Git', 'CI/CD', 'Docker', 'DevOps',
    ],
  },
  {
    label: 'Testing',
    icon: '/icons/testing.svg',
    members: [
      'Testing', 'Jest', 'Vitest', 'Cypress', 'Playwright',
      'TDD/BDD', 'Test Pyramid', 'Debug & Scenario', 'Debugging',
    ],
  },
  {
    label: 'Performance & SEO',
    icon: '/icons/performance.svg',
    members: [
      'Performance', 'Optimization', 'Core Web Vitals', 'Web Perf',
      'Lazy Loading', 'Code Splitting', 'Performance SEO',
      'SEO',
    ],
  },
  {
    label: 'Bảo Mật',
    icon: '/icons/security.svg',
    members: [
      'Security', 'Authentication', 'Auth', 'XSS & CSRF', 'CSP',
    ],
  },
  {
    label: 'System Design',
    icon: '/icons/system-design.svg',
    members: [
      'System Design', 'Fundamentals', 'Scaling', 'Architecture Patterns',
      'Data & Storage', 'Interview Scenarios',
    ],
  },
  {
    label: 'Design Patterns',
    icon: '/icons/design-patterns.svg',
    members: [
      'Design Patterns', 'SOLID', 'Creational', 'Structural', 'Behavioral',
    ],
  },
  {
    label: 'Kafka',
    icon: '/icons/kafka.svg',
    members: [
      'Kafka',
    ],
  },
  {
    label: 'Redis',
    icon: '/icons/redis.svg',
    members: [
      'Redis',
    ],
  },
  {
    label: 'RabbitMQ',
    icon: '/icons/rabbitmq.svg',
    members: ['RabbitMQ'],
    addedDate: '2026-04-07',
  },
  {
    label: 'Network',
    icon: '/icons/network.svg',
    members: [
      'Network', 'OSI & TCP/IP', 'Web & API Networking',
    ],
  },
  {
    label: 'Operating System',
    icon: '/icons/os.svg',
    members: [
      'Operating System', 'Process & Thread', 'Memory & Storage',
    ],
  },
  {
    label: 'AWS & Cloud',
    icon: '/icons/aws-cloud.svg',
    members: [
      'AWS & Cloud', 'Compute & Networking', 'Storage & Database',
      'Security & DevOps', 'Architecture',
    ],
  },
  {
    label: 'Career & Non-Tech',
    icon: '/icons/career.svg',
    members: [
      'Career & Non-Tech',
    ],
  },
]

/** Build a lookup: raw category or group label → group label */
const _categoryToGroup = new Map<string, string>()
/** Map: group label → CategoryGroup */
export const GROUP_MAP = new Map<string, CategoryGroup>()
/** Map: group label → Set of member categories */
export const GROUP_MEMBER_SETS = new Map<string, Set<string>>()

for (const group of CATEGORY_GROUPS) {
  GROUP_MAP.set(group.label, group)
  GROUP_MEMBER_SETS.set(group.label, new Set(group.members))
  // Group label itself should map to its label
  _categoryToGroup.set(group.label, group.label)
  for (const member of group.members) {
    _categoryToGroup.set(member, group.label)
  }
}

/** Resolve raw category to its group label. Unmapped categories fall into "Khác" */
export function getGroupLabel(rawCategory: string): string {
  return _categoryToGroup.get(rawCategory) ?? 'Khác'
}

/** All group labels in display order */
export const GROUP_LABELS = CATEGORY_GROUPS.map(g => g.label)

/** Group label → icon lookup */
export const GROUP_ICONS = Object.fromEntries(
  CATEGORY_GROUPS.map(g => [g.label, g.icon])
) as Record<string, string>
