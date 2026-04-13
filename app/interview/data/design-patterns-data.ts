import type { QAItem } from '../interview-data'

export const DESIGN_PATTERNS_DATA: QAItem[] = [
  // ── SOLID ──────────────────────────────────────────────────────────────────
  {
    id: 2101,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "beginner",
    q: "Single Responsibility Principle (SRP) là gì và tại sao nó quan trọng?",
    a: "SRP quy định mỗi class/module chỉ nên có một lý do để thay đổi, tức là chỉ chịu trách nhiệm cho một chức năng duy nhất. Ví dụ trong TypeScript: thay vì một class `UserService` vừa xử lý business logic vừa ghi log vừa gửi email, ta tách thành `UserService`, `Logger`, `EmailService` riêng biệt. Lợi ích là code dễ test (mỗi unit test tập trung vào một chức năng), dễ maintain và thay đổi mà không ảnh hưởng các phần khác. Khi một class có quá nhiều method không liên quan nhau hoặc file dài hàng nghìn dòng, đó là dấu hiệu vi phạm SRP. Áp dụng SRP không có nghĩa là mỗi class chỉ có một method — mà là các method phải phục vụ cùng một mục đích cao cấp.",
    q_en: "What is the Single Responsibility Principle (SRP) and why does it matter?",
    a_en: "SRP states that each class or module should have only one reason to change — meaning it is responsible for only a single piece of functionality. In TypeScript, instead of a `UserService` that handles business logic, writes logs, and sends emails all at once, you split it into `UserService`, `Logger`, and `EmailService`. The benefits are easier testing (each unit test focuses on one thing), simpler maintenance, and isolated changes that don't ripple through unrelated parts of the codebase. A class with many unrelated methods or a file thousands of lines long is a classic SRP violation. Applying SRP doesn't mean a class can only have one method — it means all its methods must serve the same high-level purpose.",
  },
  {
    id: 2102,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "beginner",
    q: "Open/Closed Principle (OCP) là gì? Cho ví dụ thực tế.",
    a: "OCP quy định một module phải mở để mở rộng (open for extension) nhưng đóng để sửa đổi (closed for modification) — tức là thêm tính năng mới mà không cần chỉnh sửa code hiện có. Ví dụ trong TypeScript: thay vì dùng `if/else` kiểm tra loại discount trong `calculatePrice()`, ta định nghĩa interface `DiscountStrategy` với method `apply(price: number): number`, rồi tạo các class `SeasonalDiscount`, `LoyaltyDiscount` implement interface đó; khi thêm loại discount mới, chỉ cần tạo class mới. OCP thường được triển khai qua Strategy pattern, Template Method hoặc polymorphism. Vi phạm OCP thường biểu hiện ở những đoạn `switch/case` hay `if/else if` dài dần theo thời gian khi thêm tính năng. Áp dụng OCP giúp giảm nguy cơ gây regression bug khi thêm feature.",
    q_en: "What is the Open/Closed Principle (OCP)? Give a real-world example.",
    a_en: "OCP states that a module should be open for extension but closed for modification — you add new features without changing existing code. In TypeScript, instead of using `if/else` to check discount types inside `calculatePrice()`, you define a `DiscountStrategy` interface with an `apply(price: number): number` method, then create `SeasonalDiscount` and `LoyaltyDiscount` classes that implement it; adding a new discount type only requires creating a new class. OCP is typically implemented through the Strategy pattern, Template Method, or polymorphism. Violations often show up as `switch/case` or `if/else if` chains that grow longer with every new feature. Applying OCP reduces the risk of regression bugs when adding functionality.",
  },
  {
    id: 2103,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "intermediate",
    q: "Liskov Substitution Principle (LSP) là gì? Khi nào bị vi phạm?",
    a: "LSP quy định rằng các object của subclass phải có thể thay thế object của superclass mà không làm hỏng tính đúng đắn của chương trình. Ví dụ vi phạm kinh điển: class `Rectangle` có `setWidth/setHeight`, class `Square extends Rectangle` override cả hai để giữ tỷ lệ — khi code gọi `setWidth(5)` trên `Square` kỳ vọng height không đổi nhưng thực tế height cũng thay đổi, phá vỡ kỳ vọng. Dấu hiệu vi phạm LSP: subclass override method rồi throw exception, hoặc kiểm tra `instanceof` trước khi gọi method. Cách sửa: tách interface, dùng composition thay inheritance, hoặc tái thiết kế hierarchy. LSP giúp đảm bảo code sử dụng interface không cần biết về implementation cụ thể.",
    q_en: "What is the Liskov Substitution Principle (LSP)? When is it violated?",
    a_en: "LSP states that objects of a subclass must be substitutable for objects of the superclass without breaking program correctness. The classic violation: `Rectangle` has `setWidth/setHeight`, and `Square extends Rectangle` overrides both to keep the aspect ratio — when code calls `setWidth(5)` on a `Square` and expects height to remain unchanged, it silently breaks. Warning signs of LSP violations include subclasses overriding a method to throw an exception, or callers checking `instanceof` before invoking a method. Fixes include splitting interfaces, favoring composition over inheritance, or redesigning the hierarchy. LSP ensures that code depending on an interface doesn't need to know about concrete implementations.",
  },
  {
    id: 2104,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "intermediate",
    q: "Interface Segregation Principle (ISP) là gì? Ví dụ trong TypeScript?",
    a: "ISP quy định không nên bắt client implement những interface mà nó không sử dụng — thay vì một interface lớn, hãy tách thành nhiều interface nhỏ, chuyên biệt. Ví dụ: thay vì `interface Animal { fly(): void; swim(): void; run(): void }` bắt `Dog` phải implement `fly()`, ta tách thành `Flyable`, `Swimmable`, `Runnable` rồi `class Dog implements Runnable, Swimmable`. Trong TypeScript, ISP rất tự nhiên vì có thể dùng intersection types và multiple interface implementation. Dấu hiệu vi phạm: class implement interface nhưng để các method trống hoặc throw `NotImplementedException`. ISP đặc biệt quan trọng khi thiết kế API/SDK public — interface nhỏ giúp người dùng dễ hiểu và ít bị breaking change hơn.",
    q_en: "What is the Interface Segregation Principle (ISP)? Example in TypeScript?",
    a_en: "ISP states that clients should not be forced to implement interfaces they don't use — instead of one large interface, split it into smaller, focused ones. For example, instead of `interface Animal { fly(): void; swim(): void; run(): void }` forcing `Dog` to implement `fly()`, split into `Flyable`, `Swimmable`, and `Runnable`, then `class Dog implements Runnable, Swimmable`. TypeScript makes ISP natural through intersection types and multiple interface implementation. A clear violation is a class that implements an interface but leaves certain methods empty or throws `NotImplementedException`. ISP is especially important when designing public APIs or SDKs — smaller interfaces are easier to understand and less prone to breaking changes.",
  },
  {
    id: 2105,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "intermediate",
    q: "Dependency Inversion Principle (DIP) là gì? Liên quan gì đến Dependency Injection?",
    a: "DIP có hai quy tắc: (1) module high-level không nên phụ thuộc module low-level, cả hai nên phụ thuộc abstraction; (2) abstraction không nên phụ thuộc detail, mà detail phụ thuộc abstraction. Ví dụ: `UserService` không nên `new MySQLDatabase()` trực tiếp mà nhận `DatabaseInterface` qua constructor — `class UserService { constructor(private db: DatabaseInterface) {} }`. Dependency Injection (DI) là cơ chế triển khai DIP: thay vì class tự tạo dependency, dependency được inject từ bên ngoài (qua constructor, setter, hoặc DI container như NestJS IoC). Lợi ích: dễ swap implementation (đổi từ MySQL sang PostgreSQL không cần sửa UserService), dễ mock trong unit test. DIP là nền tảng của các framework như NestJS, Spring, Angular.",
    q_en: "What is the Dependency Inversion Principle (DIP)? How does it relate to Dependency Injection?",
    a_en: "DIP has two rules: (1) high-level modules should not depend on low-level modules — both should depend on abstractions; (2) abstractions should not depend on details — details should depend on abstractions. For example, `UserService` should not `new MySQLDatabase()` directly but instead receive a `DatabaseInterface` via constructor: `class UserService { constructor(private db: DatabaseInterface) {} }`. Dependency Injection (DI) is the mechanism that implements DIP: instead of a class creating its own dependencies, they are injected from outside (via constructor, setter, or a DI container like NestJS IoC). Benefits include easy implementation swapping (switching MySQL to PostgreSQL without touching UserService) and simple mocking in unit tests. DIP is the foundation of frameworks like NestJS, Spring, and Angular.",
  },
  {
    id: 2106,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "beginner",
    q: "DRY, KISS, YAGNI là gì? Khi nào nên áp dụng và khi nào không?",
    a: "DRY (Don't Repeat Yourself): mỗi piece of knowledge chỉ nên có một đại diện duy nhất trong hệ thống — trùng lặp logic nên được extract thành function/module tái sử dụng. KISS (Keep It Simple, Stupid): ưu tiên giải pháp đơn giản nhất có thể hoạt động, tránh over-engineering. YAGNI (You Aren't Gonna Need It): không viết code cho tính năng chưa cần ngay bây giờ. Khi nào KHÔNG áp dụng DRY quá mức: đôi khi hai đoạn code trông giống nhau nhưng thuộc về hai domain khác nhau, việc ép DRY tạo ra coupling không cần thiết ('wrong abstraction' — Sandi Metz). YAGNI đặc biệt quan trọng trong startup/agile — code thừa tăng độ phức tạp và maintenance cost. Ba nguyên tắc này bổ trợ nhau và nên cân bằng với SOLID.",
    q_en: "What are DRY, KISS, and YAGNI? When should — and shouldn't — you apply them?",
    a_en: "DRY (Don't Repeat Yourself): every piece of knowledge should have a single, authoritative representation in the system — duplicated logic should be extracted into reusable functions or modules. KISS (Keep It Simple, Stupid): prefer the simplest solution that works; avoid over-engineering. YAGNI (You Aren't Gonna Need It): don't write code for features that aren't needed right now. When NOT to over-apply DRY: sometimes two pieces of code look similar but belong to different domains, and forcing DRY creates unnecessary coupling (the 'wrong abstraction' problem — Sandi Metz). YAGNI is especially critical in startups and agile teams — unused code adds complexity and maintenance overhead. These three principles complement each other and should be balanced with SOLID.",
  },
  {
    id: 2107,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "beginner",
    q: "Tại sao SOLID quan trọng trong phát triển phần mềm thực tế?",
    a: "SOLID giúp viết code có khả năng bảo trì cao (maintainable), dễ mở rộng (extensible) và dễ test (testable) — ba yếu tố quyết định tuổi thọ của một dự án phần mềm. Khi team scale up, SOLID giúp nhiều developer làm việc song song trên cùng codebase mà ít conflict hơn vì các module có ranh giới rõ ràng. SOLID cũng giảm technical debt: vi phạm SOLID thường dẫn đến 'spaghetti code' cực kỳ khó refactor về sau. Tuy nhiên, áp dụng SOLID có trade-off: tăng số lượng file/class, có thể gây over-engineering nếu áp dụng mù quáng cho codebase nhỏ. Nguyên tắc thực tế: áp dụng SOLID khi codebase có dấu hiệu đau (khó test, khó sửa, nhiều bug regression) chứ không phải từ đầu cho mọi project.",
    q_en: "Why does SOLID matter in real-world software development?",
    a_en: "SOLID helps produce maintainable, extensible, and testable code — the three factors that determine a software project's longevity. As a team scales, SOLID enables multiple developers to work in parallel on the same codebase with fewer conflicts because module boundaries are clearly defined. SOLID also reduces technical debt: SOLID violations typically lead to spaghetti code that is extremely difficult to refactor later. That said, applying SOLID has trade-offs: it increases the number of files and classes, and can cause over-engineering if applied blindly to small codebases. The practical rule: apply SOLID when the codebase shows pain signals (hard to test, hard to change, frequent regression bugs) rather than mandating it from day one on every project.",
  },
  {
    id: 2108,
    category: "Design Patterns",
    subcategory: "SOLID",
    level: "intermediate",
    q: "Làm thế nào để áp dụng SOLID trong dự án Next.js/React thực tế?",
    a: "Trong React/Next.js, SRP áp dụng cho component (mỗi component một trách nhiệm), custom hook (tách logic ra khỏi UI), và service layer (tách API call ra file riêng). OCP áp dụng qua component composition và render props/children thay vì if/else trong component. DIP áp dụng qua dependency injection pattern trong custom hook: `useUserService(api: ApiClient)` nhận API client từ ngoài thay vì hard-code. ISP áp dụng khi thiết kế props interface — không truyền prop không cần thiết. Ví dụ thực tế: tách `UserProfile` thành `UserAvatar`, `UserInfo`, `UserActions` components (SRP); dùng `AuthContext` inject `authService` vào app (DIP); tạo `useFormValidation(validators: Validator[])` nhận validators từ ngoài (OCP + DIP). SOLID trong frontend thường ít formal hơn backend nhưng nguyên tắc vẫn có giá trị tương đương.",
    q_en: "How do you apply SOLID principles in a real Next.js/React project?",
    a_en: "In React/Next.js, SRP applies to components (each component owns one concern), custom hooks (extracting logic out of the UI), and the service layer (keeping API calls in dedicated files). OCP applies through component composition and render props/children instead of if/else inside components. DIP applies via dependency injection in custom hooks: `useUserService(api: ApiClient)` receives an API client from outside rather than hard-coding it. ISP applies when designing props interfaces — don't pass props a component doesn't need. Concrete examples: splitting `UserProfile` into `UserAvatar`, `UserInfo`, and `UserActions` (SRP); using `AuthContext` to inject `authService` into the app (DIP); creating `useFormValidation(validators: Validator[])` that receives validators from outside (OCP + DIP). SOLID in frontend is typically less formal than in backend, but the principles carry equal value.",
  },

  // ── Creational ─────────────────────────────────────────────────────────────
  {
    id: 2109,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Singleton pattern là gì? Vấn đề của nó trong môi trường hiện đại?",
    a: `Singleton đảm bảo một class chỉ có duy nhất một instance và cung cấp global access point đến instance đó. Triển khai TypeScript:
\`\`\`typescript
class DatabaseConnection {
  private static instance: DatabaseConnection
  private constructor() {}
  static getInstance() {
    if (!this.instance) this.instance = new DatabaseConnection()
    return this.instance
  }
}
\`\`\`
Vấn đề: (1) khó unit test vì global state — mock singleton phức tạp; (2) trong Node.js multi-worker hoặc serverless, mỗi worker/function instance có Singleton riêng, không đảm bảo 'single' instance toàn hệ thống; (3) vi phạm SRP và DIP khi class tự quản lý lifecycle của mình; (4) hidden dependency — code dùng \`Database.getInstance()\` thay vì inject rõ ràng. Thay thế tốt hơn: dùng DI container (NestJS, InversifyJS) quản lý scope của dependency. Singleton hợp lý cho: logger, config manager trong môi trường single-process.`,
    q_en: "What is the Singleton pattern? What problems does it cause in modern environments?",
    a_en: `Singleton ensures a class has only one instance and provides a global access point to it. TypeScript implementation:
\`\`\`typescript
class DatabaseConnection {
  private static instance: DatabaseConnection
  private constructor() {}
  static getInstance() {
    if (!this.instance) this.instance = new DatabaseConnection()
    return this.instance
  }
}
\`\`\`
Problems: (1) hard to unit test due to global state — mocking a singleton is complex; (2) in Node.js multi-worker or serverless environments, each worker/function has its own Singleton instance, so 'single instance' across the whole system isn't guaranteed; (3) violates SRP and DIP when a class manages its own lifecycle; (4) hidden dependency — code calls \`Database.getInstance()\` instead of receiving it via injection. Better alternative: use a DI container (NestJS, InversifyJS) to manage dependency scope. Singleton is reasonable for loggers and config managers in single-process environments.`,
  },
  {
    id: 2110,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Factory Method pattern là gì? Khác gì Simple Factory?",
    a: `Factory Method định nghĩa interface để tạo object nhưng để subclass quyết định class nào sẽ được instantiate — class cha không hard-code class con cụ thể. Ví dụ TypeScript:
\`\`\`typescript
abstract class Notification {
  abstract createSender(): Sender
  send(msg: string) {
    this.createSender().send(msg)
  }
}
class EmailNotification extends Notification {
  createSender() { return new EmailSender() }
}
\`\`\`
Khác với Simple Factory (không phải GoF pattern): Simple Factory chỉ là một method/class có logic \`if/else\` tạo object — dễ hiểu nhưng vi phạm OCP vì phải sửa khi thêm type mới. Factory Method tuân thủ OCP vì thêm type mới chỉ cần tạo subclass mới. Dùng Factory Method khi: framework cần cho phép extension mà không biết trước loại object sẽ tạo; khi muốn user override cách tạo object. Không dùng khi: hierarchy đơn giản, Simple Factory đủ dùng.`,
    q_en: "What is the Factory Method pattern? How does it differ from Simple Factory?",
    a_en: `Factory Method defines an interface for creating an object but lets subclasses decide which class to instantiate — the parent class doesn't hard-code a specific concrete class. TypeScript example:
\`\`\`typescript
abstract class Notification {
  abstract createSender(): Sender
  send(msg: string) {
    this.createSender().send(msg)
  }
}
class EmailNotification extends Notification {
  createSender() { return new EmailSender() }
}
\`\`\`
Difference from Simple Factory (not a GoF pattern): Simple Factory is just a method or class with \`if/else\` logic that creates objects — easy to understand but violates OCP because you must modify it to add new types. Factory Method follows OCP because adding a new type only requires creating a new subclass. Use Factory Method when a framework needs to allow extension without knowing the exact object type in advance, or when you want callers to override how objects are created. Skip it when the hierarchy is simple and Simple Factory is sufficient.`,
  },
  {
    id: 2111,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Abstract Factory pattern là gì? Khi nào nên dùng thay Factory Method?",
    a: "Abstract Factory cung cấp interface để tạo ra các 'family' of related objects mà không cần specify concrete class. Ví dụ: `interface UIFactory { createButton(): Button; createCheckbox(): Checkbox; }` với `WindowsUIFactory` và `MacUIFactory` implement — đảm bảo Button và Checkbox luôn cùng theme. Khác Factory Method: Factory Method tạo một loại product, Abstract Factory tạo nhiều loại product có quan hệ với nhau. Dùng Abstract Factory khi: cần đảm bảo consistency giữa các component liên quan (UI theme, cross-platform widgets, database driver + connection pool); khi hệ thống cần support nhiều 'variant' và bạn muốn swap toàn bộ variant cùng lúc. Không dùng khi: chỉ có một loại product cần tạo (Factory Method đủ); khi family chỉ có một variant. Trong React, pattern này xuất hiện dưới dạng Context + Provider cung cấp nhiều service liên quan.",
    q_en: "What is the Abstract Factory pattern? When should you use it instead of Factory Method?",
    a_en: "Abstract Factory provides an interface for creating a family of related objects without specifying their concrete classes. Example: `interface UIFactory { createButton(): Button; createCheckbox(): Checkbox; }` with `WindowsUIFactory` and `MacUIFactory` implementing it — guaranteeing that Button and Checkbox always share the same theme. Difference from Factory Method: Factory Method creates one type of product; Abstract Factory creates multiple related product types. Use Abstract Factory when you need consistency among related components (UI themes, cross-platform widgets, database driver + connection pool), or when the system must support multiple 'variants' and you want to swap the entire variant at once. Skip it when only one product type needs to be created (Factory Method is enough) or when the family has only one variant. In React, this pattern appears as a Context + Provider that supplies several related services.",
  },
  {
    id: 2112,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Builder pattern là gì? Ưu điểm so với constructor có nhiều tham số?",
    a: `Builder tách quá trình xây dựng object phức tạp thành các bước riêng biệt, cho phép tạo nhiều biểu diễn khác nhau của cùng một object. Ví dụ TypeScript với method chaining:
\`\`\`typescript
const query = new QueryBuilder()
  .select('*')
  .from('users')
  .where('age > 18')
  .orderBy('name')
  .limit(10)
  .build()
// thay vì: new Query('*', 'users', 'age > 18', 'name', 10, undefined, undefined)
\`\`\`
Ưu điểm so với constructor nhiều tham số: không cần nhớ thứ tự tham số, tham số optional không cần truyền \`undefined\`, code readable hơn, có thể validate từng bước. Dùng khi: object có nhiều optional parameter (Telescoping Constructor anti-pattern); khi quá trình khởi tạo phức tạp có nhiều bước; khi cần tạo nhiều variant của cùng object. Trong Go, Builder thường implement bằng functional options pattern: \`NewServer(WithPort(8080), WithTimeout(30*time.Second))\`.`,
    q_en: "What is the Builder pattern? What advantages does it have over constructors with many parameters?",
    a_en: `Builder separates the construction of a complex object into discrete steps, enabling different representations of the same object. TypeScript example with method chaining:
\`\`\`typescript
const query = new QueryBuilder()
  .select('*')
  .from('users')
  .where('age > 18')
  .orderBy('name')
  .limit(10)
  .build()
// instead of: new Query('*', 'users', 'age > 18', 'name', 10, undefined, undefined)
\`\`\`
Advantages over many-parameter constructors: no need to remember parameter order, optional parameters don't require passing \`undefined\`, code is more readable, and each step can be validated individually. Use it when an object has many optional parameters (Telescoping Constructor anti-pattern), when initialization involves multiple complex steps, or when you need to produce different variants of the same object. In Go, Builder is commonly implemented via the functional options pattern: \`NewServer(WithPort(8080), WithTimeout(30*time.Second))\`.`,
  },
  {
    id: 2113,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Prototype pattern là gì? Khi nào dùng trong JavaScript/TypeScript?",
    a: "Prototype cho phép copy (clone) object hiện có mà không phụ thuộc vào class của nó — tạo object mới bằng cách sao chép prototype. JavaScript đặc biệt phù hợp vì có prototype-based inheritance tự nhiên. Ví dụ: `const config = { timeout: 3000, retries: 3 }; const apiConfig = { ...config, baseURL: '/api' }` — spread operator là Shallow Prototype. Dùng khi: khởi tạo object tốn kém (DB query, file I/O) và muốn clone thay vì tạo mới; khi có nhiều preset configuration chỉ khác nhau vài thuộc tính. Chú ý Shallow vs Deep clone: `Object.assign()` và spread `{...}` chỉ shallow clone, object nested vẫn shared reference — dùng `structuredClone()` (ES2022) hoặc `JSON.parse(JSON.stringify())` cho deep clone. Không dùng khi object có circular reference hoặc function (JSON.stringify sẽ mất).",
    q_en: "What is the Prototype pattern? When should you use it in JavaScript/TypeScript?",
    a_en: "Prototype allows cloning an existing object without depending on its class — creating new objects by copying a prototype. JavaScript is especially well-suited for this because of its native prototype-based inheritance. Example: `const config = { timeout: 3000, retries: 3 }; const apiConfig = { ...config, baseURL: '/api' }` — the spread operator is a shallow Prototype clone. Use it when object initialization is expensive (DB queries, file I/O) and you'd rather clone than recreate; or when you have many preset configurations that differ by only a few properties. Be aware of shallow vs deep clone: `Object.assign()` and spread `{...}` only shallow clone, so nested objects still share references — use `structuredClone()` (ES2022) or `JSON.parse(JSON.stringify())` for deep clones. Avoid it when objects have circular references or functions, since `JSON.stringify` will lose those.",
  },
  {
    id: 2114,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Object Pool pattern là gì? Ứng dụng thực tế trong Node.js/Go?",
    a: "Object Pool duy trì một tập các object đã được khởi tạo sẵn để tái sử dụng thay vì tạo/hủy liên tục — tối ưu cho object tốn kém để khởi tạo. Ứng dụng phổ biến nhất: database connection pool — thay vì tạo connection mới cho mỗi request, pool duy trì N connections sẵn sàng. Trong Node.js với `pg` (PostgreSQL): `const pool = new Pool({ max: 10, min: 2, idleTimeoutMillis: 30000 })` — pool tự quản lý lifecycle của connections. Trong Go, `sync.Pool` được dùng cho object allocation thường xuyên: `var bufPool = sync.Pool{ New: func() interface{} { return new(bytes.Buffer) } }`. Dùng khi: object expensive to create (DB connections, thread, large buffers); high throughput applications. Không dùng khi: object khởi tạo nhanh, pool overhead > benefit; khi pool quá nhỏ gây contention; khi object có state phức tạp khó reset.",
    q_en: "What is the Object Pool pattern? Real-world use cases in Node.js and Go?",
    a_en: "Object Pool maintains a set of pre-initialized objects ready for reuse instead of continuously creating and destroying them — optimal for objects that are expensive to initialize. The most common use case is a database connection pool: instead of creating a new connection for every request, the pool keeps N connections ready. In Node.js with `pg` (PostgreSQL): `const pool = new Pool({ max: 10, min: 2, idleTimeoutMillis: 30000 })` — the pool manages connection lifecycle automatically. In Go, `sync.Pool` is used for frequently allocated objects: `var bufPool = sync.Pool{ New: func() interface{} { return new(bytes.Buffer) } }`. Use it when objects are expensive to create (DB connections, threads, large buffers) and throughput is high. Avoid it when object initialization is fast and pool overhead outweighs the benefit, when the pool is too small and causes contention, or when objects have complex state that is difficult to reset.",
  },
  {
    id: 2115,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Dependency Injection (DI) là gì? Các loại DI và framework hỗ trợ?",
    a: `DI là technique mà object nhận dependencies từ bên ngoài thay vì tự tạo — là cơ chế triển khai DIP. Ba loại DI:
\`\`\`typescript
// (1) Constructor Injection (phổ biến nhất)
class UserService {
  constructor(private userRepo: UserRepository) {}
}

// (2) Setter/Property Injection (cho optional dependency)
class UserService {
  setRepository(repo: UserRepository) { this.repo = repo }
}

// (3) Method Injection (chỉ cần cho một operation)
class UserService {
  getUser(id: string, repo: UserRepository) { return repo.find(id) }
}
\`\`\`
Framework DI: NestJS dùng IoC container với decorators \`@Injectable()\`, \`@Inject()\` — tự động resolve dependency tree. Trong Go không có framework DI phổ biến, thường dùng manual DI qua \`wire\` (Google) hoặc constructor functions. Lợi ích: loose coupling, dễ test (inject mock), dễ swap implementation. Anti-pattern: Service Locator (class tự gọi \`container.get('UserRepo')\`) — tạo hidden dependency.`,
    q_en: "What is Dependency Injection (DI)? What are the types of DI and what frameworks support it?",
    a_en: `DI is the technique where an object receives its dependencies from the outside rather than creating them — it is the mechanism that implements DIP. Three types of DI:
\`\`\`typescript
// (1) Constructor Injection (most common)
class UserService {
  constructor(private userRepo: UserRepository) {}
}

// (2) Setter/Property Injection (for optional dependencies)
class UserService {
  setRepository(repo: UserRepository) { this.repo = repo }
}

// (3) Method Injection (dependency needed for one operation)
class UserService {
  getUser(id: string, repo: UserRepository) { return repo.find(id) }
}
\`\`\`
DI frameworks: NestJS uses an IoC container with \`@Injectable()\` and \`@Inject()\` decorators that automatically resolve the dependency tree. Go has no dominant DI framework; manual DI via \`wire\` (Google) or plain constructor functions is the norm. Benefits: loose coupling, easy testing (inject mocks), easy implementation swapping. Anti-pattern: Service Locator (a class calling \`container.get('UserRepo')\`) — creates hidden dependencies.`,
  },
  {
    id: 2116,
    category: "Design Patterns",
    subcategory: "Creational",
    level: "intermediate",
    q: "Khi nào nên dùng Creational patterns? Cách chọn pattern phù hợp?",
    a: "Creational patterns giải quyết vấn đề tạo object một cách linh hoạt. Cách chọn: dùng **Singleton** khi cần đúng một instance shared toàn app (logger, config) — nhưng ưu tiên DI container thay vì Singleton tự implement; dùng **Factory Method** khi framework cần cho phép subclass override cách tạo object; dùng **Abstract Factory** khi cần tạo nhóm object liên quan phải consistent với nhau; dùng **Builder** khi object có nhiều optional params hoặc construction process phức tạp nhiều bước; dùng **Prototype** khi clone nhanh hơn tạo mới; dùng **Object Pool** khi object expensive to create và cần reuse. Quy tắc thực tế: bắt đầu simple (new Constructor()), refactor sang pattern khi thấy pain point rõ ràng. Over-engineering với patterns từ đầu là sai lầm phổ biến — YAGNI áp dụng cho cả design patterns.",
    q_en: "When should you use Creational patterns? How do you choose the right one?",
    a_en: "Creational patterns solve the problem of creating objects flexibly. How to choose: use **Singleton** when exactly one shared instance is needed app-wide (logger, config) — but prefer a DI container over a hand-rolled Singleton; use **Factory Method** when a framework needs to let subclasses override how objects are created; use **Abstract Factory** when creating a group of related objects that must be consistent with each other; use **Builder** when an object has many optional parameters or a complex multi-step construction process; use **Prototype** when cloning is faster than creating from scratch; use **Object Pool** when objects are expensive to create and need to be reused. Practical rule: start simple (`new Constructor()`), and refactor to a pattern only when a clear pain point emerges. Over-engineering with patterns from the start is a common mistake — YAGNI applies to design patterns too.",
  },

  // ── Structural ─────────────────────────────────────────────────────────────
  {
    id: 2117,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Adapter pattern là gì? Ví dụ thực tế trong TypeScript?",
    a: `Adapter cho phép các interface incompatible làm việc cùng nhau bằng cách bọc một object trong wrapper cung cấp interface mà client kỳ vọng. Ví dụ thực tế: tích hợp third-party payment SDK:
\`\`\`typescript
interface PaymentProvider {
  charge(cents: number): Promise<Receipt>
}

class PayPalAdapter implements PaymentProvider {
  constructor(private sdk: PayPalSDK) {}
  charge(cents: number) {
    return this.sdk.makePayment(cents / 100, 'USD')
  }
}
\`\`\`
Hai loại Adapter: Object Adapter (composition, prefer này) và Class Adapter (multiple inheritance — không có trong TS/JS). Dùng khi: tích hợp legacy code hoặc third-party library có interface không phù hợp; khi không thể sửa source code của class cần adapt. Trong frontend, Adapter thường dùng để normalize API response format khác nhau về một schema thống nhất.`,
    q_en: "What is the Adapter pattern? Real-world example in TypeScript?",
    a_en: `Adapter allows incompatible interfaces to work together by wrapping an object in a wrapper that exposes the interface the client expects. Real-world example: integrating a third-party payment SDK:
\`\`\`typescript
interface PaymentProvider {
  charge(cents: number): Promise<Receipt>
}

class PayPalAdapter implements PaymentProvider {
  constructor(private sdk: PayPalSDK) {}
  charge(cents: number) {
    return this.sdk.makePayment(cents / 100, 'USD')
  }
}
\`\`\`
Two variants: Object Adapter (composition — preferred) and Class Adapter (multiple inheritance — not available in TS/JS). Use it when integrating legacy code or a third-party library whose interface doesn't match yours, or when you can't modify the source of the class being adapted. In frontend development, Adapter is often used to normalize different API response formats into a unified schema.`,
  },
  {
    id: 2118,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Bridge pattern là gì? Khác gì Adapter?",
    a: `Bridge tách abstraction khỏi implementation để cả hai có thể thay đổi độc lập — giải quyết 'Cartesian product' explosion khi có nhiều dimension. Ví dụ: \`Shape\` (Circle, Square) × \`Renderer\` (SVGRenderer, CanvasRenderer) = 4 class nếu dùng inheritance, nhưng với Bridge chỉ cần 2+2 class:
\`\`\`typescript
class Circle {
  constructor(private renderer: Renderer, private radius: number) {}
  draw() {
    this.renderer.renderCircle(this.radius)
  }
}
class Square {
  constructor(private renderer: Renderer, private side: number) {}
  draw() {
    this.renderer.renderSquare(this.side)
  }
}
\`\`\`
Khác Adapter: Adapter giải quyết incompatibility giữa existing interfaces (fix sau); Bridge thiết kế từ đầu để tách abstraction-implementation (design upfront). Dùng Bridge khi: muốn tránh class explosion do kết hợp nhiều dimension; khi abstraction và implementation cần thay đổi độc lập; khi muốn share implementation giữa nhiều object. Không dùng khi: chỉ có một dimension biến đổi — over-engineering.`,
    q_en: "What is the Bridge pattern? How does it differ from Adapter?",
    a_en: `Bridge decouples abstraction from implementation so that the two can vary independently — solving the class explosion that occurs when combining multiple dimensions. Example: \`Shape\` (Circle, Square) × \`Renderer\` (SVGRenderer, CanvasRenderer) = 4 classes with inheritance, but Bridge only requires 2 + 2 classes:
\`\`\`typescript
class Circle {
  constructor(private renderer: Renderer, private radius: number) {}
  draw() {
    this.renderer.renderCircle(this.radius)
  }
}
class Square {
  constructor(private renderer: Renderer, private side: number) {}
  draw() {
    this.renderer.renderSquare(this.side)
  }
}
\`\`\`
Difference from Adapter: Adapter resolves incompatibility between existing interfaces (a retrofit fix); Bridge is designed upfront to separate abstraction from implementation. Use Bridge when you want to avoid class explosion from combining multiple dimensions, when abstraction and implementation need to evolve independently, or when you want to share an implementation across multiple objects. Avoid it when only one dimension varies — that's over-engineering.`,
  },
  {
    id: 2119,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Composite pattern là gì? Khi nào dùng?",
    a: `Composite cho phép compose objects thành tree structures để biểu diễn part-whole hierarchies — client xử lý individual objects và compositions đồng nhất qua cùng một interface. Ví dụ: file system:
\`\`\`typescript
interface FileSystemItem {
  getSize(): number
}

class File implements FileSystemItem {
  constructor(private size: number) {}
  getSize() { return this.size }
}

class Folder implements FileSystemItem {
  private children: FileSystemItem[] = []
  add(item: FileSystemItem) { this.children.push(item) }
  getSize() {
    return this.children.reduce((sum, c) => sum + c.getSize(), 0)
  }
}
\`\`\`
Client gọi \`getSize()\` trên cả File và Folder mà không cần biết loại. Trong React, component tree là ứng dụng tự nhiên của Composite — component con và cha đều là React component. Dùng khi: cần biểu diễn tree hierarchy; khi muốn client treat leaf và composite đồng nhất. Không dùng khi: hierarchy phẳng hoặc interface chung quá generic, khó type-safe.`,
    q_en: "What is the Composite pattern? When should you use it?",
    a_en: `Composite lets you compose objects into tree structures to represent part-whole hierarchies — clients treat individual objects and compositions uniformly through a single interface. Example: a file system:
\`\`\`typescript
interface FileSystemItem {
  getSize(): number
}

class File implements FileSystemItem {
  constructor(private size: number) {}
  getSize() { return this.size }
}

class Folder implements FileSystemItem {
  private children: FileSystemItem[] = []
  add(item: FileSystemItem) { this.children.push(item) }
  getSize() {
    return this.children.reduce((sum, c) => sum + c.getSize(), 0)
  }
}
\`\`\`
The client calls \`getSize()\` on both files and folders without needing to know the type. In React, the component tree is a natural application of Composite — leaf and parent components are both React components. Use it when you need to represent a tree hierarchy or when you want clients to treat leaves and composites uniformly. Avoid it when the hierarchy is flat or when a shared interface is too generic to be type-safe.`,
  },
  {
    id: 2120,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Decorator pattern là gì? Khác gì Inheritance? Ví dụ trong TypeScript?",
    a: `Decorator đính kèm thêm behavior vào object tại runtime bằng cách bọc chúng trong decorator objects — thay thế cho inheritance khi cần linh hoạt. Ví dụ TypeScript:
\`\`\`typescript
interface Coffee { cost(): number }

class SimpleCoffee implements Coffee {
  cost() { return 10 }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 2 }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 1 }
}

// Stack decorators:
const myCoffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()))
myCoffee.cost() // 13
\`\`\`
Khác Inheritance: Decorator thêm behavior tại runtime và có thể stack nhiều lớp; inheritance static tại compile time và có thể gây explosion. TypeScript \`@decorator\` syntax là Decorator pattern nhưng dành cho class/method metadata, không hẳn là GoF Decorator. Dùng khi: cần thêm behavior mà không muốn sửa class gốc; khi cần combine nhiều behavior tùy chọn. Không dùng khi: decorator stack quá sâu gây khó debug.`,
    q_en: "What is the Decorator pattern? How does it differ from Inheritance? TypeScript example?",
    a_en: `Decorator attaches additional behavior to an object at runtime by wrapping it in decorator objects — an alternative to inheritance when flexibility is needed. TypeScript example:
\`\`\`typescript
interface Coffee { cost(): number }

class SimpleCoffee implements Coffee {
  cost() { return 10 }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 2 }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 1 }
}

// Stack decorators:
const myCoffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()))
myCoffee.cost() // 13
\`\`\`
Difference from Inheritance: Decorator adds behavior at runtime and allows stacking multiple layers; inheritance is static at compile time and can cause class explosion. TypeScript's \`@decorator\` syntax is related to the Decorator concept but serves class/method metadata, which is not exactly the GoF Decorator. Use it when you need to add behavior without modifying the original class, or when you need to combine several optional behaviors. Avoid it when the decorator stack becomes too deep, making debugging difficult.`,
  },
  {
    id: 2121,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Facade pattern là gì? Ứng dụng trong frontend development?",
    a: "Facade cung cấp simplified interface cho một hệ thống phức tạp, subsystem hoặc library — giảm dependency giữa client code và internals phức tạp. Ví dụ: thay vì client gọi trực tiếp 5 service (AuthService, UserService, ProfileService, CacheService, LogService), ta tạo `UserFacade` với method đơn giản như `getUserProfile(id)` tự phối hợp các service. Trong frontend: custom hook là Facade xuất sắc — `useAuth()` ẩn đi chi tiết của JWT storage, API call, state management; component chỉ gọi `const { user, login, logout } = useAuth()`. Facade không ngăn client access subsystem trực tiếp nếu cần — khác với Proxy. Dùng khi: có subsystem phức tạp cần đơn giản hóa; khi muốn layer hóa architecture (presentation → service facade → domain). Không dùng khi: tạo ra 'God Facade' ôm quá nhiều thứ — vi phạm SRP.",
    q_en: "What is the Facade pattern? How is it applied in frontend development?",
    a_en: "Facade provides a simplified interface to a complex system, subsystem, or library — reducing the coupling between client code and complex internals. Example: instead of a client calling five services directly (AuthService, UserService, ProfileService, CacheService, LogService), you create a `UserFacade` with a simple method like `getUserProfile(id)` that coordinates the services internally. In frontend: custom hooks are an excellent Facade — `useAuth()` hides the details of JWT storage, API calls, and state management; the component just calls `const { user, login, logout } = useAuth()`. Facade doesn't prevent clients from accessing the subsystem directly if needed — unlike Proxy. Use it when a complex subsystem needs simplification or when you want to layer your architecture (presentation → service facade → domain). Avoid it when the result is a 'God Facade' that absorbs too many responsibilities — a violation of SRP.",
  },
  {
    id: 2122,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Proxy pattern là gì? Các loại Proxy phổ biến?",
    a: `Proxy cung cấp surrogate object thay thế cho object khác — control access đến object gốc và có thể thêm logic trước/sau. Các loại phổ biến: (1) **Virtual Proxy** (lazy initialization): chỉ tạo object nặng khi thực sự cần — ví dụ lazy load image; (2) **Protection Proxy** (access control): kiểm tra permission trước khi delegate; (3) **Caching Proxy**: cache result của expensive operation; (4) **Logging Proxy**: ghi log mọi request đến object. JavaScript \`Proxy\` object là triển khai native:
\`\`\`javascript
const handler = {
  get(obj, prop) {
    console.log(\`Getting \${String(prop)}\`)
    return obj[prop]
  }
}
const proxy = new Proxy(target, handler)
\`\`\`
Trong NestJS, Guards và Interceptors là Proxy pattern. Khác Decorator: Proxy thường quản lý lifecycle của subject; Decorator thêm behavior mà client biết. Dùng khi: cần access control, lazy init, caching, logging mà không sửa class gốc.`,
    q_en: "What is the Proxy pattern? What are the common types of Proxy?",
    a_en: `Proxy provides a surrogate object that acts on behalf of another object — controlling access to the original and optionally adding logic before or after. Common types: (1) **Virtual Proxy** (lazy initialization): creates a heavy object only when truly needed — e.g., lazy-loading an image; (2) **Protection Proxy** (access control): checks permissions before delegating; (3) **Caching Proxy**: caches the result of expensive operations; (4) **Logging Proxy**: records every request to the object. JavaScript's native \`Proxy\` object is an implementation of this:
\`\`\`javascript
const handler = {
  get(obj, prop) {
    console.log(\`Getting \${String(prop)}\`)
    return obj[prop]
  }
}
const proxy = new Proxy(target, handler)
\`\`\`
In NestJS, Guards and Interceptors are the Proxy pattern. Difference from Decorator: Proxy typically manages the subject's lifecycle; Decorator adds behavior that the client is aware of. Use it when you need access control, lazy initialization, caching, or logging without modifying the original class.`,
  },
  {
    id: 2123,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Flyweight pattern là gì? Khi nào nên dùng?",
    a: "Flyweight giảm memory usage bằng cách chia sẻ state chung (intrinsic state) giữa nhiều objects tương tự — chỉ lưu state riêng (extrinsic state) trong object cụ thể. Ví dụ game: render 10,000 cây trong rừng — thay vì mỗi `Tree` object lưu texture/mesh riêng, tạo `TreeType` flyweight lưu shared data, `Tree` chỉ lưu position/scale. Trong JavaScript: string interning, Symbol, React key reconciliation có elements của Flyweight. Dùng khi: app cần số lượng rất lớn objects tương đồng và memory là bottleneck; khi phần lớn state object có thể externalized. Không dùng khi: số lượng object ít; khi overhead quản lý flyweight > memory saved; khi extrinsic state phức tạp hơn lợi ích. Flyweight tăng code complexity đáng kể — chỉ dùng khi profiling chứng minh memory là vấn đề thực sự.",
    q_en: "What is the Flyweight pattern? When should you use it?",
    a_en: "Flyweight reduces memory usage by sharing common state (intrinsic state) among many similar objects — only the unique state (extrinsic state) is stored per object. Game example: rendering 10,000 trees in a forest — instead of each `Tree` object storing its own texture and mesh, a `TreeType` flyweight holds the shared data while `Tree` only stores position and scale. In JavaScript: string interning, Symbols, and React key reconciliation contain elements of Flyweight. Use it when an app needs a very large number of similar objects and memory is a bottleneck, or when most of an object's state can be externalized. Avoid it when the object count is small, when flyweight management overhead exceeds memory savings, or when the extrinsic state is more complex than the benefit justifies. Flyweight adds significant code complexity — only apply it when profiling confirms memory is genuinely the problem.",
  },
  {
    id: 2124,
    category: "Design Patterns",
    subcategory: "Structural",
    level: "intermediate",
    q: "Khi nào nên dùng Structural patterns? Cách chọn đúng?",
    a: "Structural patterns giải quyết cách compose class và object thành larger structures. Chọn theo use case: dùng **Adapter** khi cần tích hợp incompatible interface (thường là third-party lib); dùng **Bridge** khi thiết kế mới cần tách abstraction-implementation để scale độc lập; dùng **Composite** khi dữ liệu có dạng tree và cần treat leaf/branch đồng nhất; dùng **Decorator** khi cần thêm behavior tại runtime mà không sửa class gốc; dùng **Facade** khi cần đơn giản hóa subsystem phức tạp cho client; dùng **Proxy** khi cần control access hoặc add cross-cutting concern (logging, caching, auth); dùng **Flyweight** khi memory optimization critical với nhiều objects tương đồng. Quy tắc: nhiều pattern Structural có thể kết hợp — Facade có thể dùng bên trong các Proxy; Decorator và Composite hay đi cùng nhau trong UI tree.",
    q_en: "When should you use Structural patterns? How do you choose the right one?",
    a_en: "Structural patterns address how to compose classes and objects into larger structures. Choose by use case: use **Adapter** when integrating an incompatible interface (typically a third-party library); use **Bridge** when a new design needs to separate abstraction from implementation so they can scale independently; use **Composite** when data forms a tree and you need to treat leaves and branches uniformly; use **Decorator** when you need to add behavior at runtime without modifying the original class; use **Facade** when a complex subsystem needs a simpler interface for clients; use **Proxy** when you need access control or want to add a cross-cutting concern (logging, caching, auth) without touching the original; use **Flyweight** when memory optimization is critical and there are large numbers of similar objects. Rule of thumb: many Structural patterns can be combined — a Facade can be backed by Proxies; Decorator and Composite often appear together in UI trees.",
  },

  // ── Behavioral ─────────────────────────────────────────────────────────────
  {
    id: 2125,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Observer pattern là gì? Ứng dụng trong JavaScript/React?",
    a: `Observer định nghĩa one-to-many dependency: khi một object (Subject/Observable) thay đổi state, tất cả dependents (Observers) được notify tự động. Ví dụ TypeScript:
\`\`\`typescript
class EventEmitter {
  private listeners = new Map<string, Function[]>()

  on(event: string, cb: Function) {
    if (!this.listeners.has(event)) this.listeners.set(event, [])
    this.listeners.get(event)!.push(cb)
  }

  emit(event: string, data?: unknown) {
    this.listeners.get(event)?.forEach(cb => cb(data))
  }
}
\`\`\`
Trong JavaScript: \`EventEmitter\` của Node.js, \`addEventListener\` trong DOM, RxJS Observable đều là Observer pattern. React: \`useEffect\` với dependency array là lazy Observer; Redux store notify components khi state thay đổi. Pub/Sub là biến thể: thêm message broker trung gian, subject và observer không biết nhau trực tiếp (khác Observer thuần). Dùng khi: cần event-driven architecture; khi một thay đổi trigger nhiều phản ứng không biết trước. Không dùng khi: dependency graph phức tạp gây 'observer hell' — khó trace execution flow.`,
    q_en: "What is the Observer pattern? How is it applied in JavaScript/React?",
    a_en: `Observer defines a one-to-many dependency: when a Subject/Observable changes state, all its dependents (Observers) are notified automatically. TypeScript example:
\`\`\`typescript
class EventEmitter {
  private listeners = new Map<string, Function[]>()

  on(event: string, cb: Function) {
    if (!this.listeners.has(event)) this.listeners.set(event, [])
    this.listeners.get(event)!.push(cb)
  }

  emit(event: string, data?: unknown) {
    this.listeners.get(event)?.forEach(cb => cb(data))
  }
}
\`\`\`
In JavaScript: Node.js \`EventEmitter\`, DOM \`addEventListener\`, and RxJS \`Observable\` are all implementations of Observer. In React: \`useEffect\` with a dependency array is a lazy Observer; the Redux store notifies components when state changes. Pub/Sub is a variant: a message broker is added in the middle so that subjects and observers don't know about each other directly (unlike pure Observer). Use it when building event-driven architecture or when a single change should trigger multiple unpredictable reactions. Avoid it when the dependency graph becomes complex enough to create 'observer hell', making execution flow hard to trace.`,
  },
  {
    id: 2126,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Strategy pattern là gì? So sánh với if/else và switch/case?",
    a: `Strategy định nghĩa family of algorithms, encapsulate mỗi cái, và làm chúng interchangeable — cho phép algorithm thay đổi độc lập với client sử dụng nó. Ví dụ TypeScript:
\`\`\`typescript
interface SortStrategy {
  sort(data: number[]): number[]
}

class QuickSort implements SortStrategy {
  sort(data: number[]) { /* ... */ return data }
}

class MergeSort implements SortStrategy {
  sort(data: number[]) { /* ... */ return data }
}

class Sorter {
  constructor(private strategy: SortStrategy) {}
  sort(data: number[]) { return this.strategy.sort(data) }
}
\`\`\`
So với if/else: Strategy tuân thủ OCP — thêm algorithm mới không cần sửa \`Sorter\`; if/else vi phạm OCP, dài dần theo thời gian. Dùng Strategy khi: có nhiều variant của một algorithm; khi muốn swap algorithm tại runtime; khi muốn isolate algorithm logic để dễ test riêng từng cái. Trong React, strategy hay xuất hiện dưới dạng render props hoặc component props nhận function: \`<DataTable sortFn={quickSort} filterFn={fuzzyFilter} />\`. Không dùng khi chỉ có 2-3 strategy ít thay đổi — if/else đủ đơn giản hơn.`,
    q_en: "What is the Strategy pattern? How does it compare to if/else and switch/case?",
    a_en: `Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable — allowing the algorithm to vary independently from the client that uses it. TypeScript example:
\`\`\`typescript
interface SortStrategy {
  sort(data: number[]): number[]
}

class QuickSort implements SortStrategy {
  sort(data: number[]) { /* ... */ return data }
}

class MergeSort implements SortStrategy {
  sort(data: number[]) { /* ... */ return data }
}

class Sorter {
  constructor(private strategy: SortStrategy) {}
  sort(data: number[]) { return this.strategy.sort(data) }
}
\`\`\`
Compared to if/else: Strategy follows OCP — adding a new algorithm doesn't require modifying \`Sorter\`; if/else violates OCP and grows longer over time. Use Strategy when there are multiple variants of an algorithm, when you want to swap the algorithm at runtime, or when you want to isolate algorithm logic for independent testing. In React, Strategy often appears as render props or function props: \`<DataTable sortFn={quickSort} filterFn={fuzzyFilter} />\`. Skip it when there are only 2–3 strategies that rarely change — a simple if/else is more readable.`,
  },
  {
    id: 2127,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Command pattern là gì? Ứng dụng Undo/Redo?",
    a: `Command encapsulate một request thành object, cho phép parameterize clients với different requests, queue/log requests, và support undoable operations. Cấu trúc:
\`\`\`typescript
interface Command {
  execute(): void
  undo(): void
}

class CommandManager {
  private historyStack: Command[] = []
  private redoStack: Command[] = []

  run(cmd: Command) {
    cmd.execute()
    this.historyStack.push(cmd)
    this.redoStack = []
  }

  undo() {
    const cmd = this.historyStack.pop()
    if (cmd) { cmd.undo(); this.redoStack.push(cmd) }
  }

  redo() {
    const cmd = this.redoStack.pop()
    if (cmd) { cmd.execute(); this.historyStack.push(cmd) }
  }
}
\`\`\`
Ứng dụng thực tế: text editor (Ctrl+Z), transaction trong database, task queue (Bull, BullMQ), HTTP request retry. Trong Redux, mỗi \`dispatch(action)\` là Command — \`redux-undo\` library implement Undo/Redo bằng Command pattern. Dùng khi: cần undo/redo, transaction, audit log, retry; khi muốn queue và schedule requests. Không dùng khi: simple method call đủ dùng — Command overhead không cần thiết.`,
    q_en: "What is the Command pattern? How is Undo/Redo implemented with it?",
    a_en: `Command encapsulates a request as an object, allowing clients to be parameterized with different requests, to queue or log requests, and to support undoable operations. Structure:
\`\`\`typescript
interface Command {
  execute(): void
  undo(): void
}

class CommandManager {
  private historyStack: Command[] = []
  private redoStack: Command[] = []

  run(cmd: Command) {
    cmd.execute()
    this.historyStack.push(cmd)
    this.redoStack = []
  }

  undo() {
    const cmd = this.historyStack.pop()
    if (cmd) { cmd.undo(); this.redoStack.push(cmd) }
  }

  redo() {
    const cmd = this.redoStack.pop()
    if (cmd) { cmd.execute(); this.historyStack.push(cmd) }
  }
}
\`\`\`
Real-world uses: text editors (Ctrl+Z), database transactions, task queues (Bull, BullMQ), HTTP request retry. In Redux, every \`dispatch(action)\` is a Command — the \`redux-undo\` library implements Undo/Redo using this pattern. Use it when you need undo/redo, transactions, audit logs, or retries, or when you want to queue and schedule requests. Skip it when a simple method call suffices — Command overhead isn't always justified.`,
  },
  {
    id: 2128,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Template Method pattern là gì? Khác Strategy ở điểm nào?",
    a: `Template Method định nghĩa skeleton của algorithm trong method của superclass, để subclass override các bước cụ thể mà không thay đổi cấu trúc tổng thể. Ví dụ:
\`\`\`typescript
abstract class DataProcessor {
  // Template method — skeleton cố định
  process() {
    this.readData()
    this.parseData()
    this.analyze()
    this.report()
  }

  abstract readData(): void
  abstract parseData(): void

  analyze() { console.log('Analyzing...') }   // hook có default
  report() { console.log('Done') }
}

class CSVProcessor extends DataProcessor {
  readData() { /* đọc file CSV */ }
  parseData() { /* parse CSV */ }
}
\`\`\`
Khác Strategy: Template Method dùng inheritance (lúc compile time); Strategy dùng composition (lúc runtime). Template Method khi biết trước structure cố định nhưng detail thay đổi theo subclass; Strategy khi muốn thay đổi toàn bộ algorithm tại runtime. Dùng khi: nhiều class share cùng algorithm skeleton nhưng differ ở implementation chi tiết; khi muốn tránh code duplication trong step chung. Không dùng khi: cần thay đổi algorithm tại runtime (dùng Strategy); khi hierarchy quá sâu gây khó hiểu flow.`,
    q_en: "What is the Template Method pattern? How does it differ from Strategy?",
    a_en: `Template Method defines the skeleton of an algorithm in a superclass method, letting subclasses override specific steps without changing the overall structure. Example:
\`\`\`typescript
abstract class DataProcessor {
  // Template method — fixed skeleton
  process() {
    this.readData()
    this.parseData()
    this.analyze()
    this.report()
  }

  abstract readData(): void
  abstract parseData(): void

  analyze() { console.log('Analyzing...') }  // hook with default
  report() { console.log('Done') }
}

class CSVProcessor extends DataProcessor {
  readData() { /* read CSV file */ }
  parseData() { /* parse CSV rows */ }
}
\`\`\`
Difference from Strategy: Template Method uses inheritance (fixed at compile time); Strategy uses composition (swappable at runtime). Use Template Method when the structure is fixed but the details vary by subclass; use Strategy when you need to swap the entire algorithm at runtime. Apply it when multiple classes share the same algorithm skeleton but differ in implementation details, or when you want to avoid code duplication in shared steps. Avoid it when you need runtime algorithm changes (use Strategy instead) or when deep inheritance hierarchies make the flow hard to follow.`,
  },
  {
    id: 2129,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Chain of Responsibility là gì? Ứng dụng trong Express.js middleware?",
    a: `Chain of Responsibility cho phép pass request qua chain of handlers — mỗi handler quyết định xử lý hoặc pass cho handler tiếp theo. Express.js middleware là ví dụ hoàn hảo: \`app.use(authMiddleware, rateLimitMiddleware, validationMiddleware, routeHandler)\` — mỗi middleware gọi \`next()\` để pass request. Ví dụ TypeScript:
\`\`\`typescript
interface Handler {
  setNext(h: Handler): Handler
  handle(request: number): string | null
}

abstract class AbstractHandler implements Handler {
  protected nextHandler?: Handler

  setNext(h: Handler) {
    this.nextHandler = h
    return h
  }

  handle(r: number): string | null {
    return this.nextHandler?.handle(r) ?? null
  }
}

class AuthHandler extends AbstractHandler {
  handle(r: number) {
    if (r < 0) return 'Unauthorized'
    return super.handle(r)
  }
}
\`\`\`
Dùng khi: nhiều object có thể handle request và muốn decouple sender từ receiver; khi handlers nên được configurable hoặc reorderable tại runtime. Khác Observer: Chain of Responsibility chỉ một handler xử lý; Observer notify tất cả. Không dùng khi: chain quá dài gây performance issue; khi không rõ handler nào sẽ xử lý gây khó debug.`,
    q_en: "What is Chain of Responsibility? How is it applied in Express.js middleware?",
    a_en: `Chain of Responsibility allows a request to pass through a chain of handlers — each handler decides whether to process it or pass it to the next. Express.js middleware is a perfect example: \`app.use(authMiddleware, rateLimitMiddleware, validationMiddleware, routeHandler)\` — each middleware calls \`next()\` to pass the request along. TypeScript example:
\`\`\`typescript
interface Handler {
  setNext(h: Handler): Handler
  handle(request: number): string | null
}

abstract class AbstractHandler implements Handler {
  protected nextHandler?: Handler

  setNext(h: Handler) {
    this.nextHandler = h
    return h
  }

  handle(r: number): string | null {
    return this.nextHandler?.handle(r) ?? null
  }
}

class AuthHandler extends AbstractHandler {
  handle(r: number) {
    if (r < 0) return 'Unauthorized'
    return super.handle(r)
  }
}
\`\`\`
Use it when multiple objects may handle a request and you want to decouple the sender from the receiver, or when handlers should be configurable and reorderable at runtime. Difference from Observer: Chain of Responsibility has only one handler process the request; Observer notifies all observers. Avoid it when the chain is too long and causes performance issues, or when it's unclear which handler will act, making debugging difficult.`,
  },
  {
    id: 2130,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "State pattern là gì? Khác FSM (Finite State Machine) ở đâu?",
    a: "State pattern cho phép object thay đổi behavior khi state nội tại thay đổi — object dường như thay đổi class. Thay vì `if (state === 'idle') ... else if (state === 'loading') ...` khắp codebase, mỗi state là một class với behavior riêng. Ví dụ: `TrafficLight` có states `RedState`, `GreenState`, `YellowState` — mỗi state implement `interface TrafficLightState { next(light: TrafficLight): void; getColor(): string }`. State pattern và FSM (Finite State Machine) rất gần nhau: FSM là concept toán học (states, transitions, inputs), State pattern là implementation OOP của FSM. Thư viện XState cho JavaScript implement FSM/Statechart theo cách declarative, phù hợp hơn State pattern thuần cho complex flows. Dùng khi: object có behavior phụ thuộc rõ ràng vào state; khi state transitions phức tạp và cần maintainable. Không dùng khi: chỉ 2-3 states đơn giản — enum + switch/case readable hơn.",
    q_en: "What is the State pattern? How does it differ from a Finite State Machine (FSM)?",
    a_en: "The State pattern allows an object to change its behavior when its internal state changes — the object appears to change its class. Instead of scattering `if (state === 'idle') ... else if (state === 'loading') ...` throughout the codebase, each state is a class with its own behavior. Example: `TrafficLight` has `RedState`, `GreenState`, and `YellowState` — each implementing `interface TrafficLightState { next(light: TrafficLight): void; getColor(): string }`. The State pattern and FSM (Finite State Machine) are closely related: FSM is a mathematical concept (states, transitions, inputs); the State pattern is an OOP implementation of FSM. The XState library for JavaScript implements FSM/Statecharts declaratively and is better suited than the pure State pattern for complex flows. Use it when an object's behavior clearly depends on its state and when state transitions are complex enough to warrant maintainability. Skip it when there are only 2–3 simple states — an enum + switch/case is more readable.",
  },
  {
    id: 2131,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "advanced",
    q: "Mediator pattern là gì? Khác Observer và tại sao quan trọng trong microservices?",
    a: "Mediator giảm chaotic dependencies giữa objects bằng cách làm chúng communicate qua mediator object thay vì trực tiếp — từ many-to-many thành many-to-one. Ví dụ UI: thay vì các form components tham chiếu nhau trực tiếp, chúng communicate qua `FormMediator` quản lý validation và enable/disable logic. Trong microservices: Message Broker (RabbitMQ, Kafka) là Mediator — service A không gọi service B trực tiếp mà publish message lên broker, broker route đến service B. Khác Observer: Observer cho phép Subject notify Observers (biết có observers); Mediator giúp objects communicate mà không biết về nhau. Trong NestJS: `EventEmitter2`, CQRS `CommandBus`, `EventBus` là Mediator. Lợi ích microservices: loose coupling giữa services, dễ scale từng service độc lập, có thể add consumer mới mà không thay đổi producer. Không dùng khi: Mediator trở thành 'God Object' biết quá nhiều — tạo single point of failure.",
    q_en: "What is the Mediator pattern? How does it differ from Observer, and why does it matter in microservices?",
    a_en: "Mediator reduces chaotic dependencies between objects by having them communicate through a mediator object instead of directly — turning many-to-many into many-to-one. UI example: instead of form components holding direct references to each other, they communicate through a `FormMediator` that manages validation and enable/disable logic. In microservices: a Message Broker (RabbitMQ, Kafka) is a Mediator — service A doesn't call service B directly but publishes a message to the broker, which routes it to service B. Difference from Observer: Observer lets a Subject notify known Observers; Mediator lets objects communicate without knowing about each other. In NestJS: `EventEmitter2`, the CQRS `CommandBus`, and `EventBus` are Mediators. Microservices benefits: loose coupling between services, each service scales independently, and new consumers can be added without changing the producer. Avoid it when the Mediator becomes a 'God Object' that knows too much — creating a single point of failure.",
  },
  {
    id: 2132,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "Iterator pattern là gì? JavaScript Iterator Protocol hoạt động ra sao?",
    a: `Iterator cung cấp cách access tuần tự các elements của collection mà không expose underlying representation. JavaScript triển khai Iterator Protocol tự nhiên: object là iterator nếu có \`next()\` method trả về \`{ value, done }\`. Ví dụ custom iterator:
\`\`\`typescript
class Range {
  constructor(private start: number, private end: number) {}

  [Symbol.iterator]() {
    let current = this.start
    const end = this.end
    return {
      next() {
        return current <= end
          ? { value: current++, done: false as const }
          : { value: undefined, done: true as const }
      }
    }
  }
}

// Dùng trong for...of, spread, destructuring:
const range = new Range(1, 5)
for (const n of range) console.log(n) // 1 2 3 4 5
console.log([...new Range(1, 3)]) // [1, 2, 3]
\`\`\`
Generator functions (\`function*\`) là sugar syntax tạo iterator/iterable. Dùng khi: cần traverse collection mà không expose structure; khi muốn lazy evaluation (generate values on demand — tiết kiệm memory cho large datasets). Trong React, Suspense và streaming server rendering dùng iterator concept.`,
    q_en: "What is the Iterator pattern? How does the JavaScript Iterator Protocol work?",
    a_en: `Iterator provides a way to sequentially access elements of a collection without exposing its underlying representation. JavaScript implements the Iterator Protocol natively: an object is an iterator if it has a \`next()\` method that returns \`{ value, done }\`. Custom iterator example:
\`\`\`typescript
class Range {
  constructor(private start: number, private end: number) {}

  [Symbol.iterator]() {
    let current = this.start
    const end = this.end
    return {
      next() {
        return current <= end
          ? { value: current++, done: false as const }
          : { value: undefined, done: true as const }
      }
    }
  }
}

// Works with for...of, spread, and destructuring:
const range = new Range(1, 5)
for (const n of range) console.log(n) // 1 2 3 4 5
console.log([...new Range(1, 3)]) // [1, 2, 3]
\`\`\`
Generator functions (\`function*\`) are syntactic sugar for creating iterators/iterables. Use it when you need to traverse a collection without exposing its structure, or when you want lazy evaluation (generating values on demand to save memory with large datasets). In React, Suspense and streaming server rendering use iterator concepts.`,
  },
  {
    id: 2133,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "advanced",
    q: "Visitor pattern là gì? Khi nào đây là lựa chọn đúng?",
    a: "Visitor cho phép thêm operation mới vào object structure mà không cần sửa class của các objects đó — tách algorithm khỏi data structure nó operates on. Cấu trúc: `interface Visitor { visitCircle(c: Circle): void; visitRectangle(r: Rectangle): void }` — mỗi shape có `accept(visitor: Visitor)` gọi đúng visit method. Vấn đề Visitor giải quyết: khi có stable object hierarchy (ít thêm class mới) nhưng cần thêm nhiều operations mới — với Visitor, thêm operation = thêm Visitor class mới mà không sửa Shape classes. Trade-off vs SOLID: Visitor tuân thủ OCP cho operations nhưng vi phạm OCP cho elements — khi thêm `Triangle`, phải sửa tất cả Visitor. Dùng khi: AST (Abstract Syntax Tree) processing — compiler, code analyzer, transformer; document model với nhiều export format. TypeScript compiler dùng Visitor cho AST traversal. Không dùng khi: object hierarchy thay đổi thường xuyên; khi chỉ cần 1-2 operations — polymorphism đơn giản hơn.",
    q_en: "What is the Visitor pattern? When is it the right choice?",
    a_en: "Visitor allows you to add new operations to an object structure without modifying the classes of the objects — it separates the algorithm from the data structure it operates on. Structure: `interface Visitor { visitCircle(c: Circle): void; visitRectangle(r: Rectangle): void }` — each shape has an `accept(visitor: Visitor)` method that calls the correct visit method. The problem Visitor solves: when you have a stable object hierarchy (few new classes added) but need to add many new operations — with Visitor, adding an operation means adding a new Visitor class without touching the Shape classes. SOLID trade-off: Visitor follows OCP for operations but violates OCP for elements — adding a `Triangle` requires modifying every Visitor. Use it for AST (Abstract Syntax Tree) processing — compilers, code analyzers, transformers — or for document models with many export formats. The TypeScript compiler uses Visitor for AST traversal. Avoid it when the object hierarchy changes frequently, or when only 1–2 operations are needed — simple polymorphism is cleaner.",
  },
  {
    id: 2134,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "intermediate",
    q: "MVC, MVP, MVVM là gì? Sự khác biệt và ứng dụng trong frontend hiện đại?",
    a: "Ba architectural patterns tách UI logic: **MVC** (Model-View-Controller): Controller xử lý input, update Model, View render Model — Controller và View biết nhau; truyền thống trong server-side (Rails, Laravel, Express). **MVP** (Model-View-Presenter): Presenter xử lý logic thay Controller, View passive hơn chỉ nhận data từ Presenter và forward events — testable hơn vì Presenter pure class, không phụ thuộc UI. **MVVM** (Model-View-ViewModel): ViewModel expose Observable state, View bind tự động qua data binding — Vue.js, Angular, WPF, React với hooks. Trong React hiện đại: Component = View, Custom Hook = ViewModel (logic + state), Service/Store = Model. Sự khác biệt chính: data flow direction — MVC hai chiều; MVVM data binding tự động; MVP qua interface contract. Chọn: server-side → MVC; Angular/Vue → MVVM natural; React → MVVM với hooks; legacy Android → MVP.",
    q_en: "What are MVC, MVP, and MVVM? Key differences and applications in modern frontend?",
    a_en: "Three architectural patterns for separating UI logic: **MVC** (Model-View-Controller): the Controller handles input and updates the Model, the View renders the Model — Controller and View know about each other; traditional in server-side frameworks (Rails, Laravel, Express). **MVP** (Model-View-Presenter): the Presenter replaces the Controller; the View is more passive, only receiving data from the Presenter and forwarding events — more testable because the Presenter is a plain class with no UI dependency. **MVVM** (Model-View-ViewModel): the ViewModel exposes observable state; the View binds automatically via data binding — Vue.js, Angular, WPF, React with hooks. In modern React: Component = View, Custom Hook = ViewModel (logic + state), Service/Store = Model. Key differences: data flow direction — MVC is bidirectional; MVVM uses automatic data binding; MVP relies on interface contracts. Choose: server-side → MVC; Angular/Vue → MVVM naturally; React → MVVM with hooks; legacy Android → MVP.",
  },
  {
    id: 2135,
    category: "Design Patterns",
    subcategory: "Behavioral",
    level: "advanced",
    q: "Anti-patterns cần tránh trong software development là gì? Ví dụ thực tế?",
    a: "Anti-patterns là solutions thoạt nhìn hợp lý nhưng thực ra gây hại về lâu dài. Phổ biến nhất: (1) **God Object/Class**: một class biết và làm quá nhiều — vi phạm SRP, khó test, bottleneck khi scale; (2) **Spaghetti Code**: logic phân tán, tangled dependencies, không có structure rõ ràng — thường do thiếu planning; (3) **Golden Hammer**: dùng quen một tool/pattern cho mọi vấn đề dù không phù hợp (ví dụ: dùng Redis cho mọi caching kể cả in-memory đủ); (4) **Premature Optimization**: tối ưu trước khi có evidence về bottleneck — lãng phí thời gian, tăng complexity; (5) **Copy-Paste Programming**: vi phạm DRY, bug fix ở một chỗ không fix chỗ khác; (6) **Magic Numbers/Strings**: hardcode `if (status === 3)` thay vì `if (status === OrderStatus.SHIPPED)`; (7) **Shotgun Surgery**: một thay đổi require sửa nhiều class nhỏ — ngược lại God Object; (8) **Callback Hell** trong JavaScript: Promise chain và async/await giải quyết. Nhận biết: code smell là dấu hiệu sớm của anti-pattern.",
    q_en: "What are the most important anti-patterns to avoid in software development? Real-world examples?",
    a_en: "Anti-patterns are solutions that seem reasonable at first but cause long-term harm. The most common ones: (1) **God Object/Class**: a class that knows and does too much — violates SRP, hard to test, becomes a bottleneck at scale; (2) **Spaghetti Code**: scattered logic, tangled dependencies, no clear structure — usually caused by lack of planning; (3) **Golden Hammer**: defaulting to a familiar tool or pattern for every problem even when it doesn't fit (e.g., using Redis for all caching even when in-memory would do); (4) **Premature Optimization**: optimizing before there is evidence of a bottleneck — wastes time and adds complexity; (5) **Copy-Paste Programming**: violates DRY — a bug fixed in one place goes unfixed in all the copies; (6) **Magic Numbers/Strings**: hardcoding `if (status === 3)` instead of `if (status === OrderStatus.SHIPPED)`; (7) **Shotgun Surgery**: one change requires edits across many small classes — the opposite of God Object; (8) **Callback Hell** in JavaScript: resolved by Promise chaining and async/await. Recognition tip: code smells are early warning signs of an anti-pattern taking hold.",
  },
]
