export type ChangeType = 'feature' | 'improve' | 'fix' | 'category' | 'content'

export interface Change {
  type: ChangeType
  text: { vi: string; en: string }
  /** Icon paths from /public/icons/ to display alongside the change */
  icons?: string[]
}

export interface ChangelogEntry {
  version: string
  date: string
  changes: Change[]
}

export const CURRENT_VERSION = '1.10.0'

/* Badge labels shown to end-users */
export const TYPE_LABEL: Record<ChangeType, { vi: string; en: string }> = {
  feature:  { vi: 'Tính năng',    en: 'Feature' },
  improve:  { vi: 'Cải tiến',     en: 'Improved' },
  fix:      { vi: 'Sửa lỗi',     en: 'Bug fix' },
  category: { vi: 'Danh mục mới', en: 'New category' },
  content:  { vi: 'Nội dung',     en: 'Content' },
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '1.10.0',
    date: '2026-04-13',
    changes: [
      { type: 'category', icons: ['/icons/nestjs.svg'], text: { vi: 'Thêm danh mục NestJS — 21 câu hỏi về Modules, Controllers, DI, Guards, Pipes, Interceptors, Filters, JWT Auth, TypeORM, Microservices, WebSockets, CQRS', en: 'Added NestJS category — 21 questions on Modules, Controllers, DI, Guards, Pipes, Interceptors, Filters, JWT Auth, TypeORM, Microservices, WebSockets, CQRS' } },
      { type: 'category', icons: ['/icons/python.svg'], text: { vi: 'Thêm danh mục Python — 49 câu hỏi về Core Language, OOP, Async/Await, FastAPI, và hệ sinh thái Python hiện đại', en: 'Added Python category — 49 questions on Core Language, OOP, Async, FastAPI, and the modern Python ecosystem' } },
      { type: 'category', icons: ['/icons/vuejs.svg'], text: { vi: 'Thêm danh mục Vue.js — 50 câu hỏi về Vue 3, Composition API, Pinia, Vue Router, và performance optimization', en: 'Added Vue.js category — 50 questions on Vue 3, Composition API, Pinia, Vue Router, and performance optimization' } },
      { type: 'feature', text: { vi: 'Syntax highlighting cho code block — tích hợp highlight.js với theme Catppuccin Mocha, hỗ trợ 15+ ngôn ngữ (Python, Go, TypeScript, JSX, SQL, ...)', en: 'Syntax highlighting for code blocks — integrated highlight.js with Catppuccin Mocha theme, supporting 15+ languages (Python, Go, TypeScript, JSX, SQL, ...)' } },
      { type: 'improve', text: { vi: 'Cải thiện format 73 câu hỏi với code block đa dòng có syntax highlighting — JS/TS, React/Next.js, Golang, Design Patterns', en: 'Improved format for 73 questions with multi-line syntax-highlighted code blocks — JS/TS, React/Next.js, Golang, Design Patterns' } },
      { type: 'improve', text: { vi: 'Sidebar danh mục được nhóm theo section: Frontend / Backend / Mobile / Kiến trúc / Messaging / Hạ tầng / Chất lượng / Sự nghiệp', en: 'Sidebar categories grouped into sections: Frontend / Backend / Mobile / Architecture / Messaging / Infrastructure / Quality / Career' } },
    ],
  },
  {
    version: '1.9.0',
    date: '2026-04-07',
    changes: [
      { type: 'category', icons: ['/icons/rabbitmq.svg'], text: { vi: 'Thêm danh mục RabbitMQ — 58 câu hỏi về Exchange, Queue, Dead Letter, Clustering, và Spring AMQP', en: 'Added RabbitMQ category — 58 questions on Exchange, Queue, Dead Letter, Clustering, and Spring AMQP' } },
      { type: 'category', icons: ['/icons/android.svg'], text: { vi: 'Thêm danh mục Android — 67 câu hỏi về Kotlin, Jetpack Compose, Architecture, Coroutines, và KMP', en: 'Added Android category — 67 questions on Kotlin, Jetpack Compose, Architecture, Coroutines, and KMP' } },
      { type: 'fix', text: { vi: 'Sửa lỗi format hiển thị câu trả lời', en: 'Fixed answer display formatting issues' } },
    ],
  },
  {
    version: '1.8.0',
    date: '2026-04-06',
    changes: [
      { type: 'category', icons: ['/icons/java.svg', '/icons/php.svg', '/icons/laravel.svg', '/icons/csharp.svg', '/icons/flutter.svg'], text: { vi: 'Thêm 307 câu hỏi phỏng vấn mới cho 5 danh mục: Java, PHP, Laravel, C#, Flutter — song ngữ Việt-Anh, cập nhật xu hướng 2026', en: 'Added 307 new interview questions for 5 categories: Java, PHP, Laravel, C#, Flutter — bilingual, updated for 2026 trends' } },
      { type: 'category', icons: ['/icons/java.svg'], text: { vi: 'Java: Core, Collections, OOP, Concurrency, JVM, Spring Boot, Virtual Threads, GraalVM (88 câu)', en: 'Java: Core, Collections, OOP, Concurrency, JVM, Spring Boot, Virtual Threads, GraalVM (88 questions)' } },
      { type: 'category', icons: ['/icons/php.svg', '/icons/laravel.svg'], text: { vi: 'PHP & Laravel: PHP 8.4, Enums, Fibers, Eloquent, Livewire 3, Pest, Reverb (72 câu)', en: 'PHP & Laravel: PHP 8.4, Enums, Fibers, Eloquent, Livewire 3, Pest, Reverb (72 questions)' } },
      { type: 'category', icons: ['/icons/csharp.svg'], text: { vi: 'C#: .NET 9, LINQ, Minimal APIs, Blazor, Native AOT, Entity Framework, gRPC (71 câu)', en: 'C#: .NET 9, LINQ, Minimal APIs, Blazor, Native AOT, Entity Framework, gRPC (71 questions)' } },
      { type: 'category', icons: ['/icons/flutter.svg'], text: { vi: 'Flutter: Dart 3, Impeller, BLoC, Riverpod, Flutter Web/WASM, Shorebird (76 câu)', en: 'Flutter: Dart 3, Impeller, BLoC, Riverpod, Flutter Web/WASM, Shorebird (76 questions)' } },
    ],
  },
  {
    version: '1.7.0',
    date: '2026-04-05',
    changes: [
      { type: 'feature', text: { vi: 'Ủng hộ dự án qua MoMo hoặc chuyển khoản ngân hàng — giúp duy trì và phát triển kho câu hỏi', en: 'Support the project via MoMo or bank transfer — help maintain and grow the question bank' } },
      { type: 'feature', text: { vi: 'Trang Changelog — theo dõi các cập nhật mới nhất ngay tại đây', en: 'Changelog page — track the latest updates right here' } },
    ],
  },
  {
    version: '1.6.0',
    date: '2026-04-01',
    changes: [
      { type: 'category', icons: ['/icons/java.svg', '/icons/flutter.svg'], text: { vi: 'Thêm danh mục Java và Flutter — câu hỏi đang được chuẩn bị, sắp ra mắt', en: 'Added Java and Flutter categories — questions are being prepared, coming soon' } },
      { type: 'fix', text: { vi: 'Code trong tiêu đề câu hỏi giờ hiển thị đúng định dạng', en: 'Code in question titles now displays correctly' } },
    ],
  },
  {
    version: '1.5.0',
    date: '2026-03-28',
    changes: [
      { type: 'improve', text: { vi: 'Đóng góp câu hỏi trực tiếp qua GitHub — chỉ cần tạo Pull Request', en: 'Contribute questions directly via GitHub — just create a Pull Request' } },
      { type: 'improve', text: { vi: 'Thanh tìm kiếm dễ nhìn và dễ dùng hơn', en: 'Search bar is more visible and easier to use' } },
    ],
  },
  {
    version: '1.4.0',
    date: '2026-03-25',
    changes: [
      { type: 'feature', text: { vi: 'Tìm kiếm nhanh với kết quả được highlight, hỗ trợ cả tiếng Việt và tiếng Anh', en: 'Fast search with highlighted results, supports both Vietnamese and English' } },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-03-20',
    changes: [
      { type: 'category', icons: ['/icons/system-design.svg', '/icons/devops.svg', '/icons/database.svg', '/icons/network.svg', '/icons/aws-cloud.svg', '/icons/golang.svg', '/icons/design-patterns.svg'], text: { vi: 'Thêm 7 danh mục: System Design, DevOps, Database, Networking, AWS, Golang, Design Patterns', en: 'Added 7 categories: System Design, DevOps, Database, Networking, AWS, Golang, Design Patterns' } },
      { type: 'feature', text: { vi: 'Hỗ trợ song ngữ Việt - Anh toàn bộ trang, chuyển đổi bất cứ lúc nào', en: 'Full bilingual Vietnamese - English support, switch anytime' } },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-03-15',
    changes: [
      { type: 'feature', text: { vi: 'Lọc câu hỏi theo danh mục và độ khó (Junior / Mid / Senior)', en: 'Filter questions by category and difficulty (Junior / Mid / Senior)' } },
      { type: 'feature', text: { vi: 'Đánh dấu yêu thích và theo dõi câu đã học — tiến độ được lưu lại', en: 'Bookmark favorites and track learned questions — progress is saved' } },
      { type: 'content', text: { vi: '105 câu trả lời được bổ sung giải thích chi tiết hơn', en: '105 answers enriched with more detailed explanations' } },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-03-10',
    changes: [
      { type: 'feature', text: { vi: 'Ra mắt với hơn 1000 câu hỏi phỏng vấn IT kèm đáp án chi tiết', en: 'Launched with 1000+ IT interview questions and detailed answers' } },
      { type: 'feature', text: { vi: 'Chế độ sáng / tối — tự động theo hệ thống hoặc chuyển đổi thủ công', en: 'Light / dark mode — auto-detects system preference or switch manually' } },
    ],
  },
]
