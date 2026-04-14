import type { QAItem } from '../interview-data'

export const FPT_RESEARCHED_DATA: QAItem[] = [
  // React Thực Chiến - Hooks & State Management Deep Dive
  {
    id: 935,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Khi nào nên dùng useCallback vs useMemo trong React? Cho ví dụ cụ thể từ dự án thực tế.",
    a: "useCallback dùng để giữ nguyên reference của một function qua các lần render, thường dùng khi truyền callback xuống child component đã được bọc React.memo() để tránh re-render không cần thiết. useMemo dùng để cache lại giá trị tính toán nặng, ví dụ như filtered list hoặc sorted data, chỉ tính lại khi dependency thay đổi. Trong dự án thực tế, useCallback hay dùng cho handleClick hoặc onChange prop, còn useMemo dùng cho danh sách đã lọc hoặc tính toán phức tạp trong component lớn. Lưu ý không nên lạm dụng vì bản thân memoization cũng có chi phí — chỉ dùng khi thực sự cần tối ưu.",
    q_en: "When should you use useCallback vs useMemo in React? Give a concrete real-project example.",
    a_en: "useCallback preserves a function's reference across renders — use it when passing a callback to a child component wrapped in React.memo() to avoid unnecessary re-renders. useMemo caches the result of an expensive computation (e.g., a filtered or sorted list) and only recalculates when a dependency changes. In real projects: useCallback for handleClick or onChange props passed to memoized children; useMemo for filtered lists or complex calculations in large components. Don't overuse either — memoization itself has a cost; only apply it when you've identified an actual performance problem."
  },
  {
    id: 936,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Giải thích lỗi 'missing dependency' trong useEffect. Tại sao phải thêm dependency array? Khi nào không cần?",
    a: "React cảnh báo 'missing dependency' khi bạn sử dụng một biến bên trong useEffect nhưng không khai báo nó trong dependency array, vì lúc đó effect sẽ dùng giá trị cũ do stale closure. Nếu không truyền dependency array, effect sẽ chạy sau mỗi lần render. Nếu truyền mảng rỗng [], effect chỉ chạy một lần sau khi component mount. Khi thêm biến vào mảng, effect sẽ chạy lại mỗi khi biến đó thay đổi — đây là cách đúng để đồng bộ side effect với state hoặc props.",
    q_en: "Explain the 'missing dependency' warning in useEffect. Why add a dependency array? When is it not needed?",
    a_en: "React warns 'missing dependency' when you use a variable inside useEffect but don't declare it in the dependency array — the effect will read a stale value due to closure. Without a dependency array, the effect runs after every render. With an empty array [], it runs only once after mount. Adding variables to the array causes the effect to re-run whenever those variables change — this is the correct way to keep side effects in sync with state or props."
  },
  {
    id: 937,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Làm sao xử lý race condition trong async useEffect? \n\n**Ví dụ:** user type vào search box rồi xóa hết, request cũ về trước request mới.",
    a: "Race condition xảy ra khi nhiều request bất đồng bộ được gửi đi và response trả về không đúng thứ tự, khiến UI hiển thị dữ liệu sai. Cách xử lý phổ biến nhất là dùng AbortController trong cleanup function của useEffect: tạo controller, truyền signal vào fetch, và return hàm abort trong cleanup. \n\n**Ví dụ:** const controller = new AbortController(); fetch(url, {signal: controller.signal}); return () => controller.abort(). Ngoài ra có thể dùng thư viện như TanStack Query vì nó tự động xử lý caching, deduplication và cancellation.",
    q_en: "How do you handle race conditions in async useEffect? \n\n**Example:** user types in a search box then clears it, and the old request resolves after the new one.",
    a_en: "A race condition happens when multiple async requests are in-flight and responses arrive out of order, causing the UI to display stale data. The most common fix is using AbortController in the useEffect cleanup: create a controller, pass its signal to fetch, and abort in the cleanup. \n\n**Example:** `const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort()`. Alternatively, use TanStack Query, which handles caching, request deduplication, and cancellation automatically."
  },
  {
    id: 938,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Sự khác biệt giữa controlled vs uncontrolled component trong React form. Nên dùng cái nào?",
    a: "Controlled component là component mà giá trị input được quản lý bởi React state thông qua value và onChange — cho phép kiểm soát hoàn toàn dữ liệu và validate real-time. Uncontrolled component dùng ref để lấy giá trị trực tiếp từ DOM khi cần, ví dụ lúc submit form — đơn giản hơn nhưng ít kiểm soát hơn. Trong thực tế, controlled component phù hợp cho form phức tạp cần validate, format hoặc hiển thị điều kiện. Uncontrolled component phù hợp cho form đơn giản hoặc khi tích hợp với thư viện bên ngoài không hỗ trợ React state.",
    q_en: "What is the difference between controlled and uncontrolled components in React forms? Which should you use?",
    a_en: "A controlled component has its input value managed by React state via `value` and `onChange` — giving you full control over the data and enabling real-time validation. An uncontrolled component uses a ref to read the value directly from the DOM on demand (e.g., at submit time) — simpler but less control. In practice: controlled components are better for complex forms needing validation, formatting, or conditional display. Uncontrolled components are fine for simple forms or when integrating with third-party libraries that don't support React state."
  },
  {
    id: 939,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Prop drilling là gì? Làm sao giải quyết vấn đề này trong dự án lớn?",
    a: "Prop drilling là tình trạng phải truyền props qua nhiều tầng component trung gian, dù những component đó không thực sự sử dụng props đó — chỉ đóng vai trò chuyển tiếp. Điều này làm code khó bảo trì và khó refactor. Giải pháp phổ biến gồm: (1) Context API cho state toàn cục đơn giản như theme hoặc user info, (2) Redux hoặc Zustand cho state phức tạp cần nhiều nơi truy cập, (3) composition pattern — truyền JSX làm children thay vì truyền data qua props. Nên chọn giải pháp phù hợp với quy mô dự án, không nên dùng Redux cho mọi trường hợp.",
    q_en: "What is prop drilling? How do you solve it in a large project?",
    a_en: "Prop drilling is when you must pass props through multiple intermediate component layers that don't actually use those props — they just forward them. This makes the code hard to maintain and refactor. Common solutions: (1) Context API for simple global state like theme or user info; (2) Redux or Zustand for complex state accessed in many places; (3) composition pattern — pass JSX as children instead of passing data through props. Choose the solution appropriate for your project scale; Redux is not the right answer for every case."
  },

  // React Thực Chiến - Performance & Optimization
  {
    id: 940,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Tại sao list rendering cần key prop? Sử dụng index làm key có vấn đề gì?",
    a: "Key prop giúp React nhận diện phần tử nào đã thay đổi, được thêm mới, hoặc bị xóa trong danh sách để cập nhật DOM hiệu quả thông qua thuật toán reconciliation. Dùng index làm key sẽ gây lỗi nghiêm trọng khi danh sách bị sắp xếp lại hoặc xóa phần tử, vì index sẽ gán nhầm cho item khác khiến state và input bị lẫn lộn. Ví dụ nếu xóa phần tử đầu tiên, tất cả index sẽ dịch lên và React nghĩ chỉ phần tử cuối bị xóa. Luôn dùng unique ID từ dữ liệu (database ID, UUID) làm key để đảm bảo chính xác.",
    q_en: "Why does list rendering need a key prop? What is wrong with using the index as a key?",
    a_en: "The key prop helps React identify which items in a list have changed, been added, or removed, enabling efficient DOM updates through the reconciliation algorithm. Using the index as a key causes serious bugs when the list is reordered or items are deleted, because indices get reassigned to different items — causing state and input fields to become mixed up. For example, deleting the first item shifts all indices up, so React thinks only the last item was removed. Always use a unique, stable ID from your data (database ID, UUID) as the key."
  },
  {
    id: 941,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Lazy loading & code splitting trong React. Khi nào cần? Cách implement?",
    a: "Lazy loading là kỹ thuật chỉ tải component khi thực sự cần thiết, giúp giảm kích thước bundle ban đầu và tăng tốc trang. Cách implement: dùng React.lazy() kết hợp Suspense, ví dụ const Dashboard = lazy(() => import('./Dashboard')) rồi bọc trong <Suspense fallback={<Loading />}>. Thường áp dụng cho route component, modal nặng, hoặc tab ít được xem. Đánh đổi là người dùng sẽ thấy loading delay khi truy cập lần đầu, nhưng bù lại initial load nhanh hơn đáng kể.",
    q_en: "Lazy loading and code splitting in React. When is it needed? How do you implement it?",
    a_en: "Lazy loading only loads a component when it is actually needed, reducing the initial bundle size and speeding up the page. Implementation: use React.lazy() with Suspense — e.g., `const Dashboard = lazy(() => import('./Dashboard'))` wrapped in `<Suspense fallback={<Loading />}>`. Apply to route-level components, heavy modals, or rarely-viewed tabs. The tradeoff is a loading delay on first visit, but the initial page load is significantly faster."
  },
  {
    id: 942,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Cách optimize infinite scroll list. Giải thích virtual scrolling concept.",
    a: "Virtual scrolling là kỹ thuật chỉ render những item đang hiển thị trong viewport, còn những item ngoài tầm nhìn sẽ bị loại khỏi DOM. Nhờ vậy dù danh sách có hàng chục ngàn item, trình duyệt chỉ cần xử lý vài chục DOM node tại một thời điểm, tiết kiệm bộ nhớ và giữ hiệu năng mượt mà. Các thư viện phổ biến để implement gồm react-window và @tanstack/react-virtual. Đánh đổi là code phức tạp hơn, khó styling các item có chiều cao động, và cần tính toán vị trí scroll chính xác.",
    q_en: "How do you optimize an infinite scroll list? Explain the virtual scrolling concept.",
    a_en: "Virtual scrolling renders only the items currently visible in the viewport, removing off-screen items from the DOM. This means the browser only processes a few dozen DOM nodes at any time, regardless of the total list size — saving memory and keeping performance smooth. Popular libraries: react-window and @tanstack/react-virtual. Tradeoffs: more complex code, harder to style items with dynamic heights, and requires accurate scroll position calculations."
  },
  {
    id: 943,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Explain React.memo() & memo() hook. Khi nào nên dùng?",
    a: "React.memo() là higher-order component bọc quanh functional component để bỏ qua re-render nếu props không thay đổi, so sánh bằng shallow comparison. Nên dùng khi: child component có chi phí render cao, parent re-render thường xuyên mà props của child ít thay đổi. Cần lưu ý rằng shallow comparison chỉ so sánh tham chiếu, nên nếu truyền object hoặc function mới mỗi lần render thì memo sẽ vô hiệu — vì vậy nên kết hợp với useCallback và useMemo. Không nên dùng memo cho mọi component vì bản thân việc so sánh props cũng tốn chi phí.",
    q_en: "Explain React.memo(). When should you use it?",
    a_en: "React.memo() is a higher-order component that wraps a functional component to skip re-rendering when props haven't changed, using shallow comparison. Use it when: the child has an expensive render, and its parent re-renders frequently while its props rarely change. \n\n**Note:** shallow comparison only checks references — if you pass a new object or function on every render, memo is ineffective. Always combine with useCallback and useMemo. Do not memo every component; the comparison itself has a cost."
  },

  // JS Tricky - Closures & Scope
  {
    id: 944,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Giải thích closure trong JavaScript. Viết code để minh họa closure problem trong loop.",
    a: "Closure là khả năng của một function bên trong truy cập được các biến của function bên ngoài, ngay cả khi function bên ngoài đã thực thi xong. Vấn đề kinh điển là dùng var trong vòng lặp: tất cả callback đều chia sẻ cùng một biến i, nên khi callback được gọi thì i đã là giá trị cuối cùng. Giải pháp là dùng let thay cho var vì let có block scope, hoặc dùng IIFE để tạo scope riêng cho mỗi vòng lặp. Trong React, closure cũng là nguyên nhân gây ra stale state trong useEffect khi không khai báo đúng dependency array.",
    q_en: "Explain closures in JavaScript. Write code to illustrate the classic closure problem in a loop.",
    a_en: "A closure is the ability of an inner function to access variables from its outer function's scope, even after the outer function has finished executing. The classic problem: using `var` in a loop — all callbacks share the same `i` variable, so by the time any callback executes, `i` has already reached its final value. The fix: use `let` instead of `var` (block scope), or use an IIFE to create a new scope per iteration. In React, closures are also the cause of stale state inside useEffect when the dependency array is incorrect."
  },
  {
    id: 945,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "this binding trong JavaScript có bao nhiêu cách? Arrow function vs regular function?",
    a: "JavaScript có 5 cách binding this: (1) default binding — this trỏ về global object (window) hoặc undefined trong strict mode, (2) implicit binding — this là object gọi method đó, (3) explicit binding — dùng call(), apply(), bind() để chỉ định this, (4) new binding — this trỏ về instance mới khi dùng constructor, (5) arrow function — không có this riêng mà kế thừa this từ scope bên ngoài (lexical this). Sự khác biệt lớn nhất: regular function có this động tùy cách gọi, còn arrow function luôn giữ this cố định từ nơi nó được khai báo. Trong React class component, phải bind method trong constructor hoặc dùng arrow function để this trỏ đúng về component instance.",
    q_en: "How many ways can `this` be bound in JavaScript? Arrow function vs regular function?",
    a_en: "JavaScript has 5 binding rules for `this`: (1) Default binding — `this` is the global object (window) or undefined in strict mode. (2) Implicit binding — `this` is the object calling the method. (3) Explicit binding — use call(), apply(), or bind() to specify `this`. (4) new binding — `this` is the new instance created by a constructor. (5) Arrow function — has no own `this`; it inherits `this` from the surrounding lexical scope. Key difference: regular functions have a dynamic `this` depending on how they are called; arrow functions always have a fixed `this` from where they were defined. In React class components, you must bind methods in the constructor or use arrow functions to ensure `this` points to the component instance."
  },
  {
    id: 946,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Hoisting trong JavaScript. var vs let vs const về hoisting?",
    a: "Hoisting là cơ chế JavaScript đưa phần khai báo biến và function lên đầu scope trước khi thực thi code. Với var, biến được hoisted và khởi tạo là undefined, nên truy cập trước khai báo sẽ được undefined thay vì lỗi. Với let và const, biến cũng được hoisted nhưng nằm trong Temporal Dead Zone (TDZ) — truy cập trước khai báo sẽ báo ReferenceError. Ngoài ra var có scope ở mức function, còn let và const có scope ở mức block. Best practice là dùng const mặc định, chỉ dùng let khi cần gán lại giá trị, và tránh dùng var.",
    q_en: "What is hoisting in JavaScript? How do var, let, and const differ in terms of hoisting?",
    a_en: "Hoisting is JavaScript's mechanism of moving variable and function declarations to the top of their scope before code executes. With `var`: the variable is hoisted and initialized to `undefined`, so accessing it before its declaration gives `undefined` instead of an error. With `let` and `const`: variables are also hoisted but exist in the Temporal Dead Zone (TDZ) — accessing them before declaration throws a ReferenceError. Additionally, `var` is function-scoped while `let` and `const` are block-scoped. Best practice: use `const` by default, `let` only when reassignment is needed, and avoid `var`."
  },
  {
    id: 947,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Event bubbling vs event capturing. stopPropagation() vs preventDefault() khác gì?",
    a: "Event bubbling là quá trình event lan truyền từ phần tử con lên phần tử cha (từ trong ra ngoài), còn event capturing là quá trình ngược lại — từ phần tử cha xuống phần tử con (từ ngoài vào trong). stopPropagation() dùng để ngăn event lan truyền tiếp đến các phần tử khác, nhưng hành động mặc định của event vẫn xảy ra. preventDefault() dùng để ngăn hành động mặc định của trình duyệt (như submit form, chuyển trang khi click link) nhưng event vẫn tiếp tục lan truyền bình thường. Trong thực tế thường dùng kết hợp cả hai tùy theo nhu cầu, ví dụ ngăn submit form và ngăn event bubble lên parent.",
    q_en: "Event bubbling vs event capturing. How are stopPropagation() and preventDefault() different?",
    a_en: "Event bubbling propagates an event from a child element up to its parent (inside out). Event capturing is the reverse — from the parent down to the target (outside in). stopPropagation() prevents the event from continuing to propagate to other elements, but the browser's default action still occurs. preventDefault() prevents the browser's default action (e.g., form submission, following a link) but the event continues to propagate normally. In practice, use both together as needed — for example, preventing both form submission and event bubbling to a parent." },
  {
    id: 948,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Prototype inheritance trong JavaScript. Phân biệt constructor function vs class?",
    a: "Prototype inheritance là cơ chế kế thừa trong JavaScript, trong đó mỗi object đều có một prototype chain — khi truy cập property không tồn tại, JavaScript sẽ tìm ngược lên prototype chain. Constructor function là cách truyền thống để tạo object bằng từ khóa new, gán property trong function và method trên prototype. Class là syntactic sugar được giới thiệu từ ES6, bản chất vẫn dùng prototype nhưng cú pháp rõ ràng hơn với constructor, extends, super. Cả hai đều tạo instance và prototype chain giống nhau, nhưng class dễ đọc và quen thuộc hơn cho người từ ngôn ngữ OOP khác.",
    q_en: "What is prototype inheritance in JavaScript? How do constructor functions and classes differ?",
    a_en: "Prototype inheritance is JavaScript's inheritance model: every object has a prototype chain — when you access a property that doesn't exist on an object, JavaScript walks up the chain to find it. Constructor functions are the traditional approach: use `new` to create an object, assign properties inside the function, and attach methods to the prototype. Classes (ES6) are syntactic sugar over the same prototype mechanism but with cleaner syntax: `constructor`, `extends`, `super`. Both produce the same prototype chain and instances, but classes are more readable and familiar to developers coming from OOP languages."
  },

  // TypeScript Gotchas
  {
    id: 949,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Generic type trong TypeScript. Giải thích <T extends Base>?",
    a: "Generic là kiểu dữ liệu tham số hóa, cho phép viết function hoặc class có thể hoạt động với nhiều kiểu khác nhau mà vẫn giữ được type safety. Cú pháp <T extends Base> nghĩa là T phải tương thích với kiểu Base — tức T phải có ít nhất các property mà Base yêu cầu. Ví dụ <T extends {name: string}> đảm bảo T luôn có property name kiểu string, nhưng có thể có thêm property khác. Generic rất hữu ích khi viết API wrapper, utility function, hoặc component props trong React mà cần tái sử dụng với nhiều kiểu dữ liệu khác nhau.",
    q_en: "What are generic types in TypeScript? Explain <T extends Base>.",
    a_en: "Generics are parameterized types that let you write functions or classes that work with multiple types while preserving type safety. The syntax `<T extends Base>` means T must be assignable to Base — i.e., T must have at least the properties Base requires. \n\n**Example:** `<T extends { name: string }>` guarantees T always has a `name: string` property, but may have additional ones. Generics are invaluable for writing API wrappers, utility functions, and reusable React component props that need to work with different data shapes."
  },
  {
    id: 950,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Utility types trong TypeScript: Pick vs Omit vs Partial. Khi nào dùng?",
    a: "Pick<T, Keys> dùng để tạo type mới chỉ chứa một số property được chọn từ type gốc, ví dụ Pick<User, 'name' | 'email'> chỉ lấy name và email. Omit<T, Keys> ngược lại, tạo type mới bằng cách loại bỏ một số property, ví dụ Omit<User, 'password'> bỏ password. Partial<T> biến tất cả property thành optional, hữu ích cho update form khi chỉ cần cập nhật một vài trường. Ngoài ra còn có Record<Keys, Value> để tạo object type từ tập key và kiểu value. Các utility type này giúp tái sử dụng type gốc mà không phải khai báo lại, giảm trùng lặp code.",
    q_en: "TypeScript utility types: Pick vs Omit vs Partial. When do you use each?",
    a_en: "`Pick<T, Keys>` creates a new type with only the selected properties from T — e.g., `Pick<User, 'name' | 'email'>` keeps only name and email. `Omit<T, Keys>` is the opposite: creates a type by removing specified properties — e.g., `Omit<User, 'password'>` strips the password. `Partial<T>` makes all properties optional, useful for update payloads where only a subset of fields is being changed. Also useful: `Record<Keys, Value>` to create an object type from a set of keys and a value type. These utility types let you reuse existing types without redeclaring them, reducing duplication."
  },
  {
    id: 951,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Type vs Interface trong TypeScript. Khi nào dùng cái nào?",
    a: "Interface dùng để mô tả hình dạng (shape) của object, có thể extend và khai báo lại nhiều lần để merge thêm property (declaration merging). Type alias linh hoạt hơn, có thể biểu diễn union type, tuple, intersection, và các kiểu phức tạp mà interface không làm được. Trong React, thường dùng interface cho component props vì dễ extend và rõ ràng, còn type cho union type hoặc utility type. Quy tắc chung: dùng interface khi cần extend hoặc implement, dùng type khi cần union, mapped type, hoặc conditional type.",
    q_en: "Type vs Interface in TypeScript. When should you use each?",
    a_en: "Interface describes the shape of an object, supports extension, and can be declared multiple times for declaration merging. Type aliases are more flexible: they can represent union types, tuples, intersections, and complex constructs that interfaces cannot. In React: prefer `interface` for component props (easy to extend and intent is clear); prefer `type` for union types or utility types. General rule: use `interface` when extending or implementing; use `type` for unions, mapped types, or conditional types."
  },
  {
    id: 952,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "as const vs assertion types. Difference giữa string vs Literal type?",
    a: "as const là cách khai báo để TypeScript hiểu tất cả giá trị là readonly và thu hẹp kiểu về literal type thay vì kiểu chung. Ví dụ const x = 'hello' as const sẽ có kiểu 'hello' thay vì string, và object sẽ có tất cả property là readonly. String type chấp nhận bất kỳ chuỗi nào, còn literal type chỉ chấp nhận đúng giá trị cụ thể đó. as const rất hữu ích khi khai báo hằng số, config object, hoặc mảng giá trị cố định để TypeScript có thể suy luận kiểu chính xác hơn và bắt lỗi tại compile time.",
    q_en: "What is as const in TypeScript? What is the difference between a string type and a literal type?",
    a_en: "`as const` tells TypeScript to treat all values as readonly and narrow their types to literal types instead of general ones. For example, `const x = 'hello' as const` gives `x` the type `'hello'` rather than `string`, and an object becomes fully readonly. A `string` type accepts any string; a literal type like `'hello'` only accepts that exact value. `as const` is very useful for constants, config objects, and fixed-value arrays where you want TypeScript to infer the most precise types and catch mistakes at compile time."
  },
  {
    id: 953,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Discriminated Union trong TypeScript. Cách implement type-safe reducer?",
    a: "Discriminated Union là kiểu union mà mỗi thành viên có một property chung (discriminator) dùng để phân biệt và thu hẹp kiểu. Ví dụ type Action = {type: 'ADD', payload: Item} | {type: 'DELETE', id: number} — khi kiểm tra action.type, TypeScript tự động biết payload tương ứng. Pattern này rất phổ biến trong reducer vì giúp đảm bảo type safety: switch trên action.type sẽ tự động thu hẹp kiểu cho từng case, tránh truy cập sai property. So với việc kiểm tra nhiều property riêng lẻ, discriminated union an toàn hơn và dễ mở rộng hơn khi thêm action mới.",
    q_en: "What is a Discriminated Union in TypeScript? How do you implement a type-safe reducer?",
    a_en: "A Discriminated Union is a union type where each member has a common discriminant property used to narrow the type. \n\n**Example:** `type Action = { type: 'ADD', payload: Item } | { type: 'DELETE', id: number }` — when you check `action.type`, TypeScript automatically knows which payload is available. This pattern is popular in reducers because it ensures type safety: a switch on `action.type` narrows the type in each case, preventing accidental property access. Compared to checking multiple properties separately, discriminated unions are safer and easier to extend when adding new action types."
  },

  // CSS Layout
  {
    id: 954,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Flexbox vs Grid. Khi nào dùng cái nào? Tại sao?",
    a: "Flexbox là hệ thống layout một chiều, phân bố item dọc theo một trục (hàng hoặc cột), phù hợp cho navigation bar, danh sách item, hoặc căn chỉnh đơn giản. CSS Grid là hệ thống layout hai chiều, cho phép định nghĩa cả hàng và cột cùng lúc, phù hợp cho layout trang, dashboard, hoặc bố cục phức tạp. Trong thực tế thường kết hợp cả hai: Grid cho bố cục tổng thể của trang, Flexbox cho layout bên trong từng component. Quy tắc đơn giản: nếu chỉ cần sắp xếp theo một hướng thì dùng Flexbox, nếu cần kiểm soát cả hai chiều thì dùng Grid.",
    q_en: "Flexbox vs Grid. When should you use each and why?",
    a_en: "Flexbox is a one-dimensional layout system that distributes items along a single axis (row or column) — great for navigation bars, item lists, or simple alignment. CSS Grid is two-dimensional, letting you define both rows and columns simultaneously — ideal for full page layouts, dashboards, and complex arrangements. In practice, use both together: Grid for the overall page layout, Flexbox inside individual components. Simple rule: if you only need to arrange items in one direction, use Flexbox; if you need control over both dimensions, use Grid."
  },
  {
    id: 955,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "BFC (Block Formatting Context) là gì? Cách trigger BFC?",
    a: "BFC (Block Formatting Context) là một vùng layout độc lập trong CSS, nơi các phần tử bên trong không ảnh hưởng đến layout bên ngoài và ngược lại. Cách tạo BFC gồm: overflow: auto hoặc hidden, display: flex hoặc grid, position: absolute hoặc fixed, float: left hoặc right. BFC hữu ích để giải quyết nhiều vấn đề CSS phổ biến như: ngăn margin collapse giữa parent và child, chứa float element bên trong container, và ngăn text bọc quanh float element. Hiểu BFC giúp debug layout CSS hiệu quả hơn nhiều.",
    q_en: "What is BFC (Block Formatting Context)? How do you trigger one?",
    a_en: "A BFC (Block Formatting Context) is an independent layout region in CSS where elements inside don't affect the layout outside and vice versa. Ways to create a BFC: `overflow: auto` or `hidden`, `display: flex` or `grid`, `position: absolute` or `fixed`, `float: left` or `right`. BFC is useful for: preventing margin collapse between parent and child, containing floated elements inside a container, and preventing text from wrapping around floated elements. Understanding BFC makes CSS layout debugging significantly easier."
  },
  {
    id: 956,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Margin collapsing trong CSS. Tại sao margin: 20px cộng với margin: 30px không bằng 50px?",
    a: "Margin collapsing là hiện tượng margin dọc (vertical) của hai block-level element liền kề bị gộp lại thành một margin duy nhất, lấy giá trị lớn hơn — nên margin 20px + 30px chỉ còn 30px chứ không phải 50px. Margin ngang (horizontal) không bị collapse. Để ngăn collapse, có thể tạo BFC bằng overflow: hidden hoặc dùng padding thay thế. Ngoài ra flexbox và grid cũng không bị margin collapse, nên khi dùng display: flex hoặc grid thì margin luôn cộng đúng như mong đợi.",
    q_en: "What is margin collapsing in CSS? Why doesn't margin: 20px + margin: 30px equal 50px?",
    a_en: "Margin collapsing is when the vertical margins of two adjacent block-level elements merge into a single margin equal to the larger of the two — so 20px + 30px becomes 30px, not 50px. Horizontal margins do not collapse. To prevent collapsing, create a BFC with `overflow: hidden` or use padding instead. Flexbox and Grid containers also never experience margin collapse, so in `display: flex` or `display: grid` contexts, margins always add up as expected."
  },
  {
    id: 957,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "CSS Grid template areas. Làm sao layout dashboard responsive mà không thay đổi HTML?",
    a: "CSS Grid template-areas cho phép đặt tên cho các vùng trong grid và gán phần tử vào bằng property grid-area, tạo ra layout trực quan và dễ đọc. \n\n**Ví dụ:** grid-template-areas: 'header header' 'sidebar main' 'footer footer' rồi gán mỗi phần tử với grid-area: header, grid-area: sidebar, v.v. Để responsive, chỉ cần dùng @media query thay đổi grid-template-areas mà không cần sửa HTML — ví dụ trên mobile chuyển thành layout một cột. Đây là ưu điểm lớn nhất: thay đổi bố cục hoàn toàn chỉ bằng CSS, giữ nguyên cấu trúc HTML, dễ bảo trì và dễ hiểu.",
    q_en: "What are CSS Grid template areas? How do you make a responsive dashboard layout without changing the HTML?",
    a_en: "CSS Grid `template-areas` lets you name regions in the grid and assign elements to them via `grid-area`, creating a visual and readable layout definition. \n\n**Example:** `grid-template-areas: 'header header' 'sidebar main' 'footer footer'` with each element assigned `grid-area: header`, `grid-area: sidebar`, etc. For responsive behavior, simply use a `@media` query to change `grid-template-areas` — no HTML changes needed, just rearrange the named areas. This is the biggest advantage: completely change the layout with CSS alone while keeping the HTML unchanged — easy to maintain and understand."
  },
  {
    id: 958,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Stacking context trong CSS. Tại sao z-index không work?",
    a: "Stacking context là hệ thống phân lớp trong CSS, mỗi context tạo ra một hệ thống z-index riêng biệt. Các thuộc tính tạo stacking context mới gồm: position kết hợp z-index, opacity nhỏ hơn 1, transform, filter, và nhiều thuộc tính khác. z-index không hoạt động thường vì hai phần tử nằm trong hai stacking context khác nhau — lúc này z-index chỉ so sánh trong cùng context, không xuyên qua được context cha. Giải pháp là kiểm tra stacking context của các phần tử cha, điều chỉnh cho chúng nằm cùng context, hoặc sắp xếp lại thứ tự HTML.",
    q_en: "What is a stacking context in CSS? Why does z-index sometimes not work?",
    a_en: "A stacking context is a layering system in CSS; each context creates its own independent z-index scope. Properties that create a new stacking context include: `position` + `z-index`, `opacity` less than 1, `transform`, `filter`, and several others. z-index stops working as expected when two elements are in different stacking contexts — z-index only compares within the same context and cannot cross into a parent context. The fix: inspect the stacking contexts of ancestor elements, adjust them so both elements share the same context, or reorder the HTML."
  },

  // Node.js Thực Tế
  {
    id: 959,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Node.js single-threaded. Tại sao vẫn handle multiple request? Event loop explain.",
    a: "Node.js chạy JavaScript trên một thread duy nhất, nhưng vẫn xử lý được nhiều request đồng thời nhờ cơ chế non-blocking I/O và event loop. Khi có tác vụ I/O (đọc file, gọi database, HTTP request), Node.js giao cho libuv xử lý trong thread pool riêng và tiếp tục nhận request mới. Khi tác vụ I/O hoàn thành, callback được đưa vào event queue và event loop sẽ đẩy lên call stack khi stack trống. Tuy nhiên, nếu có tác vụ tính toán nặng (CPU-intensive) thì sẽ block main thread, lúc này cần dùng Worker Threads để chạy song song.",
    q_en: "Node.js is single-threaded. Why can it still handle multiple requests? Explain the event loop.",
    a_en: "Node.js runs JavaScript on a single thread but handles many concurrent requests through non-blocking I/O and the event loop. When an I/O task occurs (file read, database call, HTTP request), Node.js delegates it to libuv's thread pool and immediately continues accepting new requests. When the I/O completes, the callback is placed in the event queue; the event loop pushes it onto the call stack when the stack is empty. However, CPU-intensive tasks block the main thread — in those cases, use Worker Threads to run computation in parallel."
  },
  {
    id: 960,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Callback vs Promise vs async/await. Cách handle error trong mỗi?",
    a: "Callback là cách xử lý bất đồng bộ đầu tiên trong JavaScript, nhưng dễ dẫn đến callback hell khi lồng nhiều tầng và khó xử lý lỗi vì phải kiểm tra error ở mỗi callback. Promise cải thiện bằng cách dùng .then() để chain và .catch() để bắt lỗi tập trung, nhưng vẫn có thể dài dòng. Async/await là cú pháp mới nhất, dùng try/catch để bắt lỗi giống code đồng bộ, dễ đọc và debug nhất. Khuyến nghị: dùng async/await làm mặc định, Promise.all() khi cần chạy song song nhiều request, và Promise.allSettled() khi muốn biết kết quả của tất cả request dù có lỗi.",
    q_en: "Callback vs Promise vs async/await. How do you handle errors in each?",
    a_en: "Callbacks are the original async pattern but lead to callback hell when deeply nested, and error handling requires checking at every callback level. Promises improve this with `.then()` chaining and centralized `.catch()` for errors, though they can still be verbose. Async/await is the most readable: use try/catch to handle errors just like synchronous code. Recommendation: use async/await as the default; use `Promise.all()` to run multiple requests in parallel; use `Promise.allSettled()` when you need the results of all requests even if some fail."
  },
  {
    id: 961,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Middleware trong Express. Explain order, next() function, error handling middleware.",
    a: "Middleware trong Express là function nhận vào (req, res, next), có thể xử lý request, chỉnh sửa req/res, hoặc chuyển tiếp cho middleware tiếp theo bằng cách gọi next(). Thứ tự khai báo middleware rất quan trọng vì request đi qua từng middleware theo đúng thứ tự đó. Error handling middleware đặc biệt có 4 tham số (err, req, res, next) và phải đặt ở cuối cùng để bắt lỗi từ tất cả middleware phía trước. Thứ tự best practice thường là: logger -> CORS -> body parser -> authentication -> route handler -> error handler.",
    q_en: "Middleware in Express. Explain execution order, the next() function, and error handling middleware.",
    a_en: "Express middleware is a function that receives (req, res, next), processes the request, modifies req/res, or passes control to the next middleware by calling `next()`. The order in which middleware is declared is critical — requests flow through each one in that exact order. Error handling middleware is special: it takes 4 parameters (err, req, res, next) and must be registered last to catch errors from all preceding middleware. Best practice order: logger → CORS → body parser → authentication → route handler → error handler."
  },
  {
    id: 962,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Cách secure Node.js API. CORS, rate limiting, input validation?",
    a: "CORS (Cross-Origin Resource Sharing) dùng để kiểm soát domain nào được phép gọi API, cấu hình bằng middleware cors() với whitelist domain cụ thể thay vì cho phép tất cả. Rate limiting ngăn chặn brute force và DDoS bằng cách giới hạn số request trong một khoảng thời gian, dùng express-rate-limit kết hợp helmet để thêm các security header. Input validation rất quan trọng — dùng thư viện như Zod hoặc Joi để validate và sanitize dữ liệu từ người dùng trước khi xử lý. Ngoài ra cần dùng JWT hoặc session cho authentication, phân quyền role-based cho authorization, và luôn dùng HTTPS trong production.",
    q_en: "How do you secure a Node.js API? CORS, rate limiting, input validation?",
    a_en: "CORS controls which domains can call the API — configure the cors() middleware with a specific whitelist instead of allowing all origins. Rate limiting protects against brute-force and DDoS by restricting the number of requests in a time window — use express-rate-limit combined with helmet to add security headers. Input validation is essential — use Zod or Joi to validate and sanitize user input before processing. Additionally: use JWT or sessions for authentication, role-based authorization, and always enforce HTTPS in production."
  },
  {
    id: 963,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Environment variable trong Node.js. Tại sao cần? .env file?",
    a: "Environment variable dùng để lưu trữ cấu hình thay đổi theo từng môi trường (development, staging, production) như database URL, API key, port number, mà không cần thay đổi code. File .env chứa các biến này cho môi trường phát triển local, và package dotenv sẽ tự động load chúng vào process.env. Tuyệt đối không được commit file .env lên git vì chứa thông tin nhạy cảm — thay vào đó tạo file .env.example chỉ chứa tên biến không có giá trị để người khác biết cần cấu hình gì. Trên production, environment variable được cấu hình trực tiếp trên hosting platform như Vercel, AWS, hoặc Docker.",
    q_en: "What are environment variables in Node.js? Why are they needed? What about .env files?",
    a_en: "Environment variables store configuration that changes per environment (development, staging, production) — such as database URLs, API keys, and port numbers — without modifying code. The .env file holds these values for local development; the dotenv package automatically loads them into process.env. Never commit .env to git since it contains sensitive secrets — instead, create a .env.example with only the variable names (no real values) so teammates know what to configure. In production, set environment variables directly on the hosting platform (Vercel, AWS, Docker)."
  },

  // Coding Live / Algorithm
  {
    id: 964,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement debounce function. Giải thích use case trong React input search.",
    a: "Debounce là kỹ thuật trì hoãn việc thực thi function cho đến khi người dùng ngừng thao tác trong một khoảng thời gian nhất định. Cách implement: function trả về closure, mỗi lần gọi sẽ clearTimeout cũ và đặt setTimeout mới — chỉ khi hết thời gian chờ mà không bị gọi lại thì function mới thực sự chạy. Use case phổ biến nhất là search input: thay vì gọi API mỗi lần nhấn phím, debounce sẽ đợi người dùng ngừng gõ rồi mới gọi, giảm đáng kể số request. Trong React, cần dùng useCallback kết hợp useRef để giữ reference của timeout qua các lần render.",
    q_en: "Implement a debounce function. Explain its use case in a React search input.",
    a_en: "Debounce delays function execution until the user has stopped performing an action for a set amount of time. Implementation: the function returns a closure; each call clears the previous timeout and sets a new one — the original function only executes when the wait period expires without another call. The most common use case is a search input: instead of calling the API on every keystroke, debounce waits until the user stops typing before firing, dramatically reducing the request count. In React, use useCallback combined with useRef to preserve the timeout reference across renders."
  },
  {
    id: 965,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement throttle function. Khi nào cần throttle vs debounce?",
    a: "Throttle là kỹ thuật giới hạn function chỉ được thực thi tối đa một lần trong mỗi khoảng thời gian nhất định, bất kể được gọi bao nhiêu lần. Khác với debounce (đợi ngừng gọi mới chạy), throttle đảm bảo function vẫn được gọi đều đặn. Dùng throttle cho các sự kiện cần phản hồi liên tục như scroll, resize, hoặc mouse move — vì người dùng cần thấy cập nhật thường xuyên. Dùng debounce cho các sự kiện chỉ cần kết quả cuối cùng như search input hoặc form validation — vì chỉ cần xử lý sau khi người dùng hoàn tất thao tác.",
    q_en: "Implement a throttle function. When should you use throttle vs debounce?",
    a_en: "Throttle limits a function to execute at most once per time interval, regardless of how many times it is called. Unlike debounce (which waits for a pause before firing), throttle ensures the function still fires at a regular cadence. Use throttle for events that need continuous feedback like scroll, resize, or mousemove — the user needs to see updates frequently. Use debounce for events where only the final result matters, like search inputs or form validation — you only need to process after the user has finished their action."
  },
  {
    id: 966,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "FizzBuzz coding challenge. Viết code, optimize, handle edge case.",
    a: "FizzBuzz là bài toán kinh điển: lặp từ 1 đến n, in 'Fizz' nếu chia hết cho 3, 'Buzz' nếu chia hết cho 5, 'FizzBuzz' nếu chia hết cho cả hai, còn lại in số đó. Cách cơ bản dùng vòng lặp kết hợp toán tử modulo (%), kiểm tra chia hết cho 15 trước rồi mới kiểm tra 3 và 5 riêng. Edge case cần xử lý: n bằng 0, số âm, hoặc input không phải số. Cách tiếp cận nâng cao có thể dùng functional programming với map/filter, hoặc dùng string concatenation để tránh kiểm tra 15 riêng biệt.",
    q_en: "FizzBuzz coding challenge. Write the code, optimize it, and handle edge cases.",
    a_en: "FizzBuzz: iterate from 1 to n — print 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if divisible by both, otherwise print the number. The basic approach uses a loop with the modulo (%) operator — check divisibility by 15 first, then 3 and 5 separately. Edge cases to handle: n equals 0, negative numbers, or non-numeric input. Advanced approaches: functional programming with map, or string concatenation (build the string and fall back to the number) to avoid a separate check for 15."
  },
  {
    id: 967,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement simple LRU cache. Explain HashMap + LinkedList data structure.",
    a: "LRU (Least Recently Used) Cache là cấu trúc dữ liệu loại bỏ phần tử ít được sử dụng gần đây nhất khi cache đầy. Cách implement kết hợp HashMap để truy cập O(1) và Doubly Linked List để duy trì thứ tự sử dụng. Khi get một phần tử, di chuyển nó lên cuối list (mới dùng nhất). Khi put phần tử mới mà cache đầy, xóa phần tử ở đầu list (ít dùng nhất). LRU cache được ứng dụng rộng rãi trong thực tế như cache API response, memoization kết quả tính toán, và database query cache.",
    q_en: "Implement a simple LRU cache. Explain the HashMap + LinkedList data structure.",
    a_en: "An LRU (Least Recently Used) cache evicts the least recently accessed item when it reaches capacity. Implementation combines a HashMap for O(1) access and a Doubly Linked List to maintain usage order. On get: move the accessed item to the tail (most recently used). On put when full: remove the item at the head (least recently used) then insert the new item at the tail. LRU caches are widely used in practice: caching API responses, memoizing computation results, and database query caches."
  },
  {
    id: 968,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Flatten nested array (different depth). Recursive vs iterative approach?",
    a: "Flatten nested array là bài toán biến mảng lồng nhiều tầng thành mảng phẳng một tầng. Cách recursive đơn giản và dễ hiểu: duyệt từng phần tử, nếu là mảng thì gọi đệ quy, nếu không thì thêm vào kết quả. Cách iterative dùng stack để tránh tràn stack khi mảng lồng quá sâu, phù hợp với dữ liệu lớn. JavaScript có sẵn method Array.flat(Infinity) để làm phẳng hoàn toàn, hoặc flat(n) để phẳng n tầng. Kỹ thuật flatten hay gặp trong thực tế khi xử lý cấu trúc cây, merge config nhiều tầng, hoặc normalize dữ liệu lồng nhau.",
    q_en: "Flatten a nested array (to various depths). Recursive vs iterative approach?",
    a_en: "Flattening converts a deeply nested array into a single-level array. The recursive approach is simple and readable: iterate each element — if it's an array, recurse into it; otherwise add it to the result. The iterative approach uses a stack to avoid stack overflow with very deeply nested data, making it suitable for large inputs. JavaScript provides `Array.flat(Infinity)` to flatten completely, or `flat(n)` to flatten n levels deep. Flattening is common in practice: processing tree structures, merging multi-level configs, or normalizing nested API data."
  },

  // Kiến Thức Tổng Hợp
  {
    id: 974,
    category: "Build Tools",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Module bundler: webpack vs Vite. Tại sao Vite nhanh hơn?",
    a: "Webpack bundle toàn bộ code thành một hoặc nhiều file trước khi serve, nên startup trong development khá chậm, đặc biệt với dự án lớn. Vite tận dụng ES Module native của trình duyệt để serve code trực tiếp mà không cần bundle trong development, kết hợp esbuild (viết bằng Go) để xử lý nhanh gấp nhiều lần. Khi build production, Vite dùng Rollup để tạo bundle tối ưu. Đánh đổi: Vite mới hơn nên hệ sinh thái plugin nhỏ hơn webpack, nhưng đang phát triển rất nhanh. Dự án mới nên chọn Vite, dự án cũ đã ổn định thì webpack vẫn là lựa chọn an toàn.",
    q_en: "Module bundlers: webpack vs Vite. Why is Vite faster?",
    a_en: "Webpack bundles all code into one or more files before serving, making development startup slow, especially for large projects. Vite leverages the browser's native ES Module support to serve files directly without bundling during development, using esbuild (written in Go) for extremely fast transforms. For production builds, Vite uses Rollup to generate optimized bundles. Tradeoff: Vite is newer so its plugin ecosystem is smaller than webpack's, but it is growing rapidly. New projects should choose Vite; stable existing projects can safely stay on webpack."
  },
  {
    id: 975,
    category: "Testing",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Testing strategy. Unit vs integration vs E2E. Pyramid?",
    a: "Test pyramid gồm ba tầng: (1) Unit test ở đáy — nhiều nhất, chạy nhanh, test từng function hoặc component riêng lẻ bằng Jest hoặc Vitest. (2) Integration test ở giữa — test sự tương tác giữa các component hoặc module bằng Testing Library. (3) E2E test ở đỉnh — ít nhất, chạy chậm nhất, test toàn bộ luồng người dùng bằng Cypress hoặc Playwright. Chiến lược hợp lý: unit test phủ rộng logic nghiệp vụ, integration test cho các luồng quan trọng, E2E chỉ cho critical path như đăng nhập, thanh toán. Mục tiêu là có feedback nhanh từ unit test và độ tin cậy cao từ E2E.",
    q_en: "Testing strategy: Unit vs Integration vs E2E. What is the testing pyramid?",
    a_en: "The test pyramid has three layers: (1) Unit tests at the base — the most numerous, fastest to run, testing individual functions or components with Jest or Vitest. (2) Integration tests in the middle — testing interactions between components or modules with Testing Library. (3) E2E tests at the top — fewest in number, slowest, testing full user flows with Cypress or Playwright. Sound strategy: unit tests for broad business logic coverage, integration tests for important flows, E2E only for critical paths like login and checkout. The goal: fast feedback from unit tests and high confidence from E2E."
  },
  {
    id: 976,
    category: "Security",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Security concern trong frontend. XSS, CSRF, Content Security Policy?",
    a: "XSS (Cross-Site Scripting) là lỗ hổng cho phép kẻ tấn công chèn mã script độc hại vào trang web, phòng tránh bằng cách sanitize input từ người dùng — React tự động escape HTML nên đã an toàn phần lớn. CSRF (Cross-Site Request Forgery) là tấn công giả mạo request từ trang khác, ngăn chặn bằng CSRF token và SameSite cookie. Content Security Policy (CSP) là HTTP header giới hạn nguồn tài nguyên được phép tải, ngăn chặn inline script và nguồn không tin cậy. Ngoài ra cần dùng HTTPS để mã hóa truyền tải, đặt cookie với flag SameSite và HttpOnly, và tuyệt đối không để lộ secret trong code frontend.",
    q_en: "What are the key security concerns in frontend development? XSS, CSRF, Content Security Policy?",
    a_en: "XSS (Cross-Site Scripting) allows attackers to inject malicious scripts into a page — prevent it by sanitizing user input. React auto-escapes HTML, so most cases are already covered. CSRF (Cross-Site Request Forgery) forges requests from another origin — prevent it with CSRF tokens and SameSite cookies. Content Security Policy (CSP) is an HTTP header that restricts the sources from which resources can load, blocking inline scripts and untrusted origins. Also: use HTTPS to encrypt traffic, set cookies with SameSite and HttpOnly flags, and never expose secrets in frontend code."
  },
  {
    id: 977,
    category: "Performance",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Web performance metric. LCP, FID, CLS, TTFB explain.",
    a: "LCP (Largest Contentful Paint) đo thời gian phần tử lớn nhất hiển thị trên màn hình, phản ánh tốc độ tải trực quan. FID (First Input Delay) đo độ trễ từ lúc người dùng tương tác lần đầu đến khi trình duyệt phản hồi, phản ánh mức độ tương tác được của trang. CLS (Cumulative Layout Shift) đo mức độ dịch chuyển layout bất ngờ, ảnh hưởng đến trải nghiệm ổn định thị giác. TTFB (Time to First Byte) đo thời gian từ lúc gửi request đến khi nhận byte đầu tiên từ server. Để tối ưu: lazy load hình ảnh, code splitting, minify tài nguyên, cache hiệu quả, dùng CDN, và tối ưu server response time.",
    q_en: "Web performance metrics. Explain LCP, FID, CLS, TTFB.",
    a_en: "LCP (Largest Contentful Paint) measures how long the largest visible element takes to render — reflects perceived load speed. FID (First Input Delay) measures the delay from first user interaction to browser response — reflects interactivity. CLS (Cumulative Layout Shift) measures unexpected layout movement — affects visual stability. TTFB (Time to First Byte) measures the time from sending a request to receiving the first byte from the server. To optimize: lazy-load images, code splitting, minify assets, effective caching, CDN usage, and optimize server response time."
  },
  {
    id: 978,
    category: "State Management",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "State management: Redux vs Zustand vs Context. Khi nào dùng?",
    a: "Redux là thư viện quản lý state mạnh mẽ với kiến trúc rõ ràng (action, reducer, store), phù hợp cho ứng dụng lớn có state phức tạp và cần debug bằng DevTools. Zustand nhẹ hơn nhiều, cú pháp đơn giản, không cần boilerplate, phù hợp cho ứng dụng vừa và nhỏ. Context API là giải pháp có sẵn của React, phù hợp cho state đơn giản như theme, ngôn ngữ, hoặc user info — nhưng không nên dùng cho state thay đổi thường xuyên vì sẽ re-render toàn bộ consumer. Lựa chọn: ứng dụng nhỏ dùng Context, vừa dùng Zustand, lớn và phức tạp dùng Redux — xu hướng hiện tại Zustand đang được ưa chuộng nhờ sự đơn giản.",
    q_en: "State management: Redux vs Zustand vs Context. When should you use each?",
    a_en: "Redux is a powerful state management library with a clear architecture (action, reducer, store) — great for large apps with complex state that benefit from DevTools debugging. Zustand is much lighter, minimal boilerplate, simple API — suitable for small to medium apps. Context API is React's built-in solution, suited for simple, infrequently-changing state like theme, locale, or user info — do not use it for frequently-changing state as it re-renders all consumers. Recommendation: small apps use Context, medium apps use Zustand, large and complex apps use Redux. Current trend: Zustand is increasingly preferred for its simplicity."
  },
  {
    id: 979,
    category: "Performance",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Browser rendering pipeline. Critical rendering path?",
    a: "Browser rendering pipeline gồm các bước: (1) parse HTML thành DOM tree, (2) parse CSS thành CSSOM tree, (3) kết hợp DOM và CSSOM thành render tree, (4) tính toán layout (vị trí, kích thước), (5) paint (vẽ pixel), (6) composite (ghép các layer). Critical rendering path là chuỗi bước tối thiểu trình duyệt phải hoàn thành trước khi hiển thị trang — CSS và JavaScript mặc định sẽ block quá trình render. Tối ưu bằng cách: inline critical CSS, defer hoặc async cho JavaScript, giảm kích thước CSS/JS, và dùng DevTools Coverage để tìm code không sử dụng.",
    q_en: "What is the browser rendering pipeline? What is the critical rendering path?",
    a_en: "The browser rendering pipeline: (1) Parse HTML into a DOM tree, (2) Parse CSS into a CSSOM tree, (3) Combine DOM + CSSOM into a render tree, (4) Calculate layout (position and size), (5) Paint (draw pixels), (6) Composite (layer compositing). The critical rendering path is the minimum sequence of steps the browser must complete before showing anything — CSS and JavaScript are render-blocking by default. Optimize by: inlining critical CSS, using `defer` or `async` on scripts, reducing CSS/JS size, and using DevTools Coverage to find unused code."
  },
  {
    id: 980,
    category: "Build Tools",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Microservices vs monolith frontend architecture. Federated module?",
    a: "Monolith frontend là kiến trúc một repo chứa toàn bộ code frontend, đơn giản nhưng khó scale khi team lớn vì mọi thay đổi đều phải deploy cùng lúc. Micro-frontend chia frontend thành nhiều ứng dụng nhỏ độc lập, mỗi team quản lý và deploy riêng. Module Federation của webpack cho phép các ứng dụng chia sẻ dependency tại runtime, mỗi app có thể load component từ app khác mà không cần build chung. Đánh đổi là tăng độ phức tạp về infrastructure, versioning, và trải nghiệm nhất quán — chỉ phù hợp cho tổ chức lớn có nhiều team phát triển song song.",
    q_en: "Microservices vs monolith frontend architecture. What is Module Federation?",
    a_en: "A monolith frontend is a single repo containing all frontend code — simple but hard to scale with large teams since every change requires a coordinated deploy. Micro-frontends split the frontend into multiple independent apps, each managed and deployed by a separate team. Webpack's Module Federation allows apps to share dependencies at runtime — each app can load components from another without a shared build step. The tradeoffs are increased infrastructure complexity, versioning challenges, and consistent UX — this approach is only appropriate for large organizations with multiple parallel teams."
  },

  // React Thực Chiến - Advanced Patterns
  {
    id: 981,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Custom Hook pattern. Viết custom hook để manage form state. Testing?",
    a: "Custom Hook là cách trích xuất logic tái sử dụng từ component thành function riêng, tên bắt đầu bằng 'use'. Ví dụ useForm(initialValues) trả về {values, handleChange, reset, errors} để quản lý state và validation của form. Để test custom hook, dùng renderHook từ @testing-library/react-hooks để test hành vi của hook một cách độc lập mà không cần mount component. Lợi ích chính: tách biệt logic khỏi UI, dễ test, và nhiều component có thể dùng chung — ví dụ useForm có thể dùng cho cả form đăng ký và form chỉnh sửa profile.",
    q_en: "The Custom Hook pattern. Write a custom hook to manage form state. How do you test it?",
    a_en: "A Custom Hook extracts reusable logic from a component into a standalone function prefixed with 'use'. \n\n**Example:** `useForm(initialValues)` returns `{ values, handleChange, reset, errors }` to manage form state and validation. To test a custom hook, use `renderHook` from @testing-library/react — it lets you test the hook's behavior in isolation without mounting a full component. Key benefits: separates logic from UI, easy to test, and shareable across multiple components — e.g., a single `useForm` hook for both registration and profile edit forms."
  },
  {
    id: 982,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Error boundary trong React. Cách implement, use case?",
    a: "Error boundary là component đặc biệt dùng để bắt lỗi JavaScript trong cây component con, ngăn không cho toàn bộ ứng dụng bị crash trắng màn hình. Cách implement: tạo class component với method componentDidCatch và static getDerivedStateFromError, khi có lỗi sẽ hiển thị fallback UI thay vì crash. Lưu ý error boundary không bắt được lỗi trong: event handler, code bất đồng bộ (setTimeout, Promise), server-side rendering, và lỗi của chính error boundary. Use case phổ biến: bọc quanh từng section quan trọng của trang để khi một phần lỗi thì các phần khác vẫn hoạt động bình thường, kèm nút retry để người dùng thử lại.",
    q_en: "Error boundaries in React. How do you implement them, and what are the use cases?",
    a_en: "An error boundary is a special component that catches JavaScript errors in its child component tree, preventing a full app crash (blank screen). Implementation: a class component with `componentDidCatch` and `static getDerivedStateFromError` — when an error occurs, it renders a fallback UI instead of crashing. \n\n**Note:** error boundaries do NOT catch errors in: event handlers, async code (setTimeout, Promises), server-side rendering, or the boundary itself. Common use case: wrap each major page section independently — if one section errors, the rest of the page still works. Include a retry button so users can recover."
  },
  {
    id: 983,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Compound component pattern. Tại sao hữu ích? Implement example?",
    a: "Compound component là pattern trong đó component cha quản lý state nội bộ và chia sẻ cho các component con thông qua Context, tạo nên một nhóm component hoạt động cùng nhau. \n\n**Ví dụ:** <Tabs> là cha quản lý tab đang active, <Tab> và <TabPanel> là con truy cập state qua context để hiển thị đúng nội dung. Lợi ích lớn nhất là API linh hoạt — người dùng component có thể sắp xếp, thêm bớt component con tùy ý mà không cần truyền hàng loạt props phức tạp (tránh prop explosion). Pattern này phổ biến trong các thư viện UI như Radix UI, Headless UI, dùng kết hợp React.cloneElement hoặc Context.",
    q_en: "The compound component pattern. Why is it useful? Show an implementation example.",
    a_en: "The compound component pattern has a parent component manage internal state and share it with child components through Context, forming a group of components that work together. \n\n**Example:** `<Tabs>` manages the active tab; `<Tab>` and `<TabPanel>` access that state via context to display the correct content. The biggest benefit is a flexible API — consumers can arrange, add, or remove child components freely without passing a long list of complex props (avoiding prop explosion). This pattern is popular in UI libraries like Radix UI and Headless UI, implemented with Context or React.cloneElement."
  },
  {
    id: 984,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Render prop vs HOC pattern. Modern React dùng gì?",
    a: "Render prop là pattern component nhận một function làm prop (hoặc children) và gọi function đó với dữ liệu cần thiết để render UI. HOC (Higher-Order Component) là function nhận một component và trả về component mới đã được bổ sung logic. Cả hai đều giúp tái sử dụng logic, nhưng dễ gây wrapper hell khi lồng nhiều tầng và khó debug. Trong React hiện đại, Custom Hook là giải pháp thay thế tốt hơn vì cho phép chia sẻ logic trực tiếp mà không cần bọc thêm component, code phẳng và dễ đọc hơn. Tuy nhiên render prop và HOC vẫn xuất hiện trong nhiều thư viện cũ nên cần hiểu để đọc code.",
    q_en: "Render prop vs HOC pattern. What does modern React use instead?",
    a_en: "Render props: a component accepts a function as a prop (or as children) and calls it with the data needed to render UI. HOC (Higher-Order Component): a function that takes a component and returns a new component with added logic. Both enable logic reuse but can cause wrapper hell with deep nesting and are hard to debug. In modern React, Custom Hooks are the preferred replacement — they share logic directly without adding component layers, resulting in flatter, more readable code. Render props and HOCs still appear in older libraries, so understanding them is important for reading legacy code."
  },
  {
    id: 985,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Suspense trong React. Fallback, error boundary, data fetching?",
    a: "Suspense là cơ chế cho phép React tạm dừng render một component và hiển thị fallback UI (ví dụ loading spinner) cho đến khi component đó sẵn sàng. Hiện tại Suspense hoạt động tốt nhất với React.lazy() cho lazy loading component và với các framework như Next.js, Remix cho data fetching phía server. Khi kết hợp với Error Boundary, Suspense xử lý trạng thái loading còn Error Boundary xử lý trạng thái lỗi, tạo nên trải nghiệm hoàn chỉnh cho người dùng. Trong tương lai, React sẽ mở rộng Suspense cho data fetching phía client, nhưng hiện tại nên dùng thư viện như TanStack Query hoặc SWR cho use case đó.",
    q_en: "What is Suspense in React? Explain fallback, error boundary integration, and data fetching.",
    a_en: "Suspense lets React pause rendering a component and show a fallback UI (e.g., a loading spinner) until the component is ready. Currently it works best with React.lazy() for component lazy loading and within frameworks like Next.js and Remix for server-side data fetching. Combined with Error Boundary — Suspense handles the loading state while Error Boundary handles errors — they create a complete async UI experience. In the future React will extend Suspense for client-side data fetching, but for now use TanStack Query or SWR for that use case."
  },

  // JS Tricky - Advanced
  {
    id: 986,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "WeakMap vs Map trong JavaScript. Memory leak impact?",
    a: "Map giữ strong reference đến key, nghĩa là dù không còn biến nào trỏ đến key object thì garbage collector vẫn không thu hồi được bộ nhớ. WeakMap chỉ cho phép object làm key và giữ weak reference — khi không còn reference nào khác đến key object thì garbage collector sẽ tự động thu hồi, ngăn ngừa memory leak. Use case phổ biến của WeakMap: lưu trữ dữ liệu private gắn với object, metadata cho DOM node, hoặc cache mà tự động dọn dẹp khi object bị hủy. Hạn chế của WeakMap là không thể duyệt (iterate) qua các phần tử và không có property size.",
    q_en: "WeakMap vs Map in JavaScript. How do they impact memory leaks?",
    a_en: "Map holds strong references to its keys — even if no other variable points to a key object, the garbage collector cannot reclaim it. WeakMap only accepts objects as keys and holds weak references — when no other references to the key object exist, the garbage collector automatically reclaims the memory, preventing leaks. Common WeakMap use cases: storing private data associated with an object, DOM node metadata, or auto-cleaning caches that expire when the object is destroyed. WeakMap limitation: it is not iterable and has no `size` property."
  },
  {
    id: 987,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Symbol trong JavaScript. Khi nào dùng? Built-in symbol?",
    a: "Symbol là kiểu dữ liệu primitive tạo ra giá trị duy nhất và không trùng lặp, mỗi lần gọi Symbol() đều tạo ra giá trị mới. Công dụng chính là tạo property key không bị xung đột tên với property khác, hữu ích khi thêm metadata vào object mà không ảnh hưởng code hiện có. JavaScript có sẵn nhiều well-known symbol như Symbol.iterator (cho phép object dùng for...of), Symbol.hasInstance (tùy chỉnh instanceof), Symbol.toStringTag (tùy chỉnh toString). Trong thực tế ít khi tự tạo Symbol, nhưng hiểu well-known symbol giúp nắm sâu hơn cách JavaScript hoạt động bên trong.",
    q_en: "What are Symbols in JavaScript? When do you use them? What are the built-in symbols?",
    a_en: "Symbol is a primitive type that creates a unique, non-duplicable value — every call to `Symbol()` produces a new one. Their main use is creating property keys that cannot collide with other property names, useful for attaching metadata to objects without affecting existing code. JavaScript includes several well-known symbols: `Symbol.iterator` (enables `for...of` on objects), `Symbol.hasInstance` (customizes `instanceof`), `Symbol.toStringTag` (customizes `toString`). You rarely create your own Symbols in practice, but understanding well-known symbols gives deeper insight into how JavaScript works internally."
  },
  {
    id: 988,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Proxy và Reflect trong JavaScript. Intercepting operation?",
    a: "Proxy cho phép tạo một đối tượng đại diện bọc quanh object gốc, chặn và tùy chỉnh các thao tác cơ bản như get, set, delete, has, và nhiều thao tác khác thông qua handler trap. Reflect là object cung cấp các method tương ứng với mỗi trap của Proxy, dùng để thực hiện thao tác mặc định bên trong trap. Use case thực tế: validation dữ liệu khi set property, logging tự động khi truy cập property, lazy initialization, hoặc computed property. Vue 3 dùng Proxy làm nền tảng cho hệ thống reactivity của mình. Lưu ý Proxy có chi phí hiệu năng và khó debug hơn object thường.",
    q_en: "What are Proxy and Reflect in JavaScript? How do you intercept operations?",
    a_en: "Proxy lets you create a wrapper around an object to intercept and customize fundamental operations like get, set, delete, and has, through handler traps. Reflect provides methods that correspond to each Proxy trap, allowing you to perform the default operation inside a trap. Real-world use cases: data validation on property set, automatic logging on property access, lazy initialization, and computed properties. Vue 3 uses Proxy as the foundation of its reactivity system. \n\n**Note:** Proxy carries a performance cost and is harder to debug than plain objects."
  },
  {
    id: 989,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Microtask vs Macrotask trong event loop. Promise.then priority?",
    a: "Trong event loop, có hai loại hàng đợi: microtask queue (chứa Promise.then, async/await, queueMicrotask) và macrotask queue (chứa setTimeout, setInterval, I/O callback). Sau khi call stack trống, event loop sẽ xử lý hết toàn bộ microtask queue trước, rồi mới lấy một macrotask từ macrotask queue để xử lý. Vì vậy Promise.then luôn chạy trước setTimeout dù setTimeout đặt delay là 0. Ví dụ thực tế: nếu đặt setTimeout bên trong Promise, setTimeout sẽ chỉ chạy sau khi tất cả promise chain đã hoàn thành — hiểu điều này giúp debug thứ tự thực thi code bất đồng bộ chính xác hơn.",
    q_en: "Microtask vs Macrotask in the event loop. What is the priority of Promise.then?",
    a_en: "The event loop has two queues: the microtask queue (Promise.then, async/await, queueMicrotask) and the macrotask queue (setTimeout, setInterval, I/O callbacks). After the call stack empties, the event loop drains the entire microtask queue before picking the next macrotask. This is why Promise.then always runs before setTimeout even when the timeout delay is 0. Practical implication: a setTimeout placed inside a Promise chain will only execute after all promise callbacks have resolved — understanding this helps debug async execution order precisely."
  },
  {
    id: 990,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Array method efficiency. map vs forEach vs reduce performance?",
    a: "forEach dùng để duyệt mảng và thực hiện side effect, không trả về mảng mới nên không tốn bộ nhớ phân bổ thêm. map tạo và trả về mảng mới với cùng độ dài, tốn thêm bộ nhớ do phải cấp phát mảng — dùng khi cần biến đổi dữ liệu. reduce tích lũy các phần tử thành một giá trị duy nhất (số, object, mảng khác), linh hoạt nhất nhưng khó đọc nếu logic phức tạp. Về hiệu năng, forEach nhanh nhất do không cấp phát mảng mới, map chậm hơn một chút. Quy tắc chọn: chỉ duyệt thì dùng forEach, biến đổi mảng thì dùng map, tích lũy giá trị thì dùng reduce.",
    q_en: "Array method efficiency. How do map, forEach, and reduce compare in performance?",
    a_en: "forEach iterates an array and performs side effects — it returns nothing, so no additional memory is allocated for a new array. map creates and returns a new array of the same length — slightly slower due to array allocation; use it when transforming data. reduce accumulates elements into a single value (number, object, or another array) — the most flexible but can be hard to read with complex logic. Performance-wise: forEach is fastest since it skips array allocation; map is marginally slower. Rule of thumb: use forEach for side effects, map for data transformation, reduce for accumulation."
  }
]
