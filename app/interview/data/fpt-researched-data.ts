import type { QAItem } from '../interview-data'

export const FPT_RESEARCHED_DATA: QAItem[] = [
  // React Thực Chiến - Hooks & State Management Deep Dive
  {
    id: 935,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Khi nào nên dùng useCallback vs useMemo trong React? Cho ví dụ cụ thể từ dự án thực tế.",
    a: "useCallback dùng để giữ nguyên reference của một function qua các lần render, thường dùng khi truyền callback xuống child component đã được bọc React.memo() để tránh re-render không cần thiết. useMemo dùng để cache lại giá trị tính toán nặng, ví dụ như filtered list hoặc sorted data, chỉ tính lại khi dependency thay đổi. Trong dự án thực tế, useCallback hay dùng cho handleClick hoặc onChange prop, còn useMemo dùng cho danh sách đã lọc hoặc tính toán phức tạp trong component lớn. Lưu ý không nên lạm dụng vì bản thân memoization cũng có chi phí — chỉ dùng khi thực sự cần tối ưu."
  },
  {
    id: 936,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Giải thích lỗi 'missing dependency' trong useEffect. Tại sao phải thêm dependency array? Khi nào không cần?",
    a: "React cảnh báo 'missing dependency' khi bạn sử dụng một biến bên trong useEffect nhưng không khai báo nó trong dependency array, vì lúc đó effect sẽ dùng giá trị cũ do stale closure. Nếu không truyền dependency array, effect sẽ chạy sau mỗi lần render. Nếu truyền mảng rỗng [], effect chỉ chạy một lần sau khi component mount. Khi thêm biến vào mảng, effect sẽ chạy lại mỗi khi biến đó thay đổi — đây là cách đúng để đồng bộ side effect với state hoặc props."
  },
  {
    id: 937,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Làm sao xử lý race condition trong async useEffect? Ví dụ: user type vào search box rồi xóa hết, request cũ về trước request mới.",
    a: "Race condition xảy ra khi nhiều request bất đồng bộ được gửi đi và response trả về không đúng thứ tự, khiến UI hiển thị dữ liệu sai. Cách xử lý phổ biến nhất là dùng AbortController trong cleanup function của useEffect: tạo controller, truyền signal vào fetch, và return hàm abort trong cleanup. Ví dụ: const controller = new AbortController(); fetch(url, {signal: controller.signal}); return () => controller.abort(). Ngoài ra có thể dùng thư viện như TanStack Query vì nó tự động xử lý caching, deduplication và cancellation."
  },
  {
    id: 938,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Sự khác biệt giữa controlled vs uncontrolled component trong React form. Nên dùng cái nào?",
    a: "Controlled component là component mà giá trị input được quản lý bởi React state thông qua value và onChange — cho phép kiểm soát hoàn toàn dữ liệu và validate real-time. Uncontrolled component dùng ref để lấy giá trị trực tiếp từ DOM khi cần, ví dụ lúc submit form — đơn giản hơn nhưng ít kiểm soát hơn. Trong thực tế, controlled component phù hợp cho form phức tạp cần validate, format hoặc hiển thị điều kiện. Uncontrolled component phù hợp cho form đơn giản hoặc khi tích hợp với thư viện bên ngoài không hỗ trợ React state."
  },
  {
    id: 939,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Prop drilling là gì? Làm sao giải quyết vấn đề này trong dự án lớn?",
    a: "Prop drilling là tình trạng phải truyền props qua nhiều tầng component trung gian, dù những component đó không thực sự sử dụng props đó — chỉ đóng vai trò chuyển tiếp. Điều này làm code khó bảo trì và khó refactor. Giải pháp phổ biến gồm: (1) Context API cho state toàn cục đơn giản như theme hoặc user info, (2) Redux hoặc Zustand cho state phức tạp cần nhiều nơi truy cập, (3) composition pattern — truyền JSX làm children thay vì truyền data qua props. Nên chọn giải pháp phù hợp với quy mô dự án, không nên dùng Redux cho mọi trường hợp."
  },

  // React Thực Chiến - Performance & Optimization
  {
    id: 940,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Tại sao list rendering cần key prop? Sử dụng index làm key có vấn đề gì?",
    a: "Key prop giúp React nhận diện phần tử nào đã thay đổi, được thêm mới, hoặc bị xóa trong danh sách để cập nhật DOM hiệu quả thông qua thuật toán reconciliation. Dùng index làm key sẽ gây lỗi nghiêm trọng khi danh sách bị sắp xếp lại hoặc xóa phần tử, vì index sẽ gán nhầm cho item khác khiến state và input bị lẫn lộn. Ví dụ nếu xóa phần tử đầu tiên, tất cả index sẽ dịch lên và React nghĩ chỉ phần tử cuối bị xóa. Luôn dùng unique ID từ dữ liệu (database ID, UUID) làm key để đảm bảo chính xác."
  },
  {
    id: 941,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Lazy loading & code splitting trong React. Khi nào cần? Cách implement?",
    a: "Lazy loading là kỹ thuật chỉ tải component khi thực sự cần thiết, giúp giảm kích thước bundle ban đầu và tăng tốc trang. Cách implement: dùng React.lazy() kết hợp Suspense, ví dụ const Dashboard = lazy(() => import('./Dashboard')) rồi bọc trong <Suspense fallback={<Loading />}>. Thường áp dụng cho route component, modal nặng, hoặc tab ít được xem. Đánh đổi là người dùng sẽ thấy loading delay khi truy cập lần đầu, nhưng bù lại initial load nhanh hơn đáng kể."
  },
  {
    id: 942,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Cách optimize infinite scroll list. Giải thích virtual scrolling concept.",
    a: "Virtual scrolling là kỹ thuật chỉ render những item đang hiển thị trong viewport, còn những item ngoài tầm nhìn sẽ bị loại khỏi DOM. Nhờ vậy dù danh sách có hàng chục ngàn item, trình duyệt chỉ cần xử lý vài chục DOM node tại một thời điểm, tiết kiệm bộ nhớ và giữ hiệu năng mượt mà. Các thư viện phổ biến để implement gồm react-window và @tanstack/react-virtual. Đánh đổi là code phức tạp hơn, khó styling các item có chiều cao động, và cần tính toán vị trí scroll chính xác."
  },
  {
    id: 943,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Explain React.memo() & memo() hook. Khi nào nên dùng?",
    a: "React.memo() là higher-order component bọc quanh functional component để bỏ qua re-render nếu props không thay đổi, so sánh bằng shallow comparison. Nên dùng khi: child component có chi phí render cao, parent re-render thường xuyên mà props của child ít thay đổi. Cần lưu ý rằng shallow comparison chỉ so sánh tham chiếu, nên nếu truyền object hoặc function mới mỗi lần render thì memo sẽ vô hiệu — vì vậy nên kết hợp với useCallback và useMemo. Không nên dùng memo cho mọi component vì bản thân việc so sánh props cũng tốn chi phí."
  },

  // JS Tricky - Closures & Scope
  {
    id: 944,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Giải thích closure trong JavaScript. Viết code để minh họa closure problem trong loop.",
    a: "Closure là khả năng của một function bên trong truy cập được các biến của function bên ngoài, ngay cả khi function bên ngoài đã thực thi xong. Vấn đề kinh điển là dùng var trong vòng lặp: tất cả callback đều chia sẻ cùng một biến i, nên khi callback được gọi thì i đã là giá trị cuối cùng. Giải pháp là dùng let thay cho var vì let có block scope, hoặc dùng IIFE để tạo scope riêng cho mỗi vòng lặp. Trong React, closure cũng là nguyên nhân gây ra stale state trong useEffect khi không khai báo đúng dependency array."
  },
  {
    id: 945,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "this binding trong JavaScript có bao nhiêu cách? Arrow function vs regular function?",
    a: "JavaScript có 5 cách binding this: (1) default binding — this trỏ về global object (window) hoặc undefined trong strict mode, (2) implicit binding — this là object gọi method đó, (3) explicit binding — dùng call(), apply(), bind() để chỉ định this, (4) new binding — this trỏ về instance mới khi dùng constructor, (5) arrow function — không có this riêng mà kế thừa this từ scope bên ngoài (lexical this). Sự khác biệt lớn nhất: regular function có this động tùy cách gọi, còn arrow function luôn giữ this cố định từ nơi nó được khai báo. Trong React class component, phải bind method trong constructor hoặc dùng arrow function để this trỏ đúng về component instance."
  },
  {
    id: 946,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Hoisting trong JavaScript. var vs let vs const về hoisting?",
    a: "Hoisting là cơ chế JavaScript đưa phần khai báo biến và function lên đầu scope trước khi thực thi code. Với var, biến được hoisted và khởi tạo là undefined, nên truy cập trước khai báo sẽ được undefined thay vì lỗi. Với let và const, biến cũng được hoisted nhưng nằm trong Temporal Dead Zone (TDZ) — truy cập trước khai báo sẽ báo ReferenceError. Ngoài ra var có scope ở mức function, còn let và const có scope ở mức block. Best practice là dùng const mặc định, chỉ dùng let khi cần gán lại giá trị, và tránh dùng var."
  },
  {
    id: 947,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Event bubbling vs event capturing. stopPropagation() vs preventDefault() khác gì?",
    a: "Event bubbling là quá trình event lan truyền từ phần tử con lên phần tử cha (từ trong ra ngoài), còn event capturing là quá trình ngược lại — từ phần tử cha xuống phần tử con (từ ngoài vào trong). stopPropagation() dùng để ngăn event lan truyền tiếp đến các phần tử khác, nhưng hành động mặc định của event vẫn xảy ra. preventDefault() dùng để ngăn hành động mặc định của trình duyệt (như submit form, chuyển trang khi click link) nhưng event vẫn tiếp tục lan truyền bình thường. Trong thực tế thường dùng kết hợp cả hai tùy theo nhu cầu, ví dụ ngăn submit form và ngăn event bubble lên parent."
  },
  {
    id: 948,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Prototype inheritance trong JavaScript. Phân biệt constructor function vs class?",
    a: "Prototype inheritance là cơ chế kế thừa trong JavaScript, trong đó mỗi object đều có một prototype chain — khi truy cập property không tồn tại, JavaScript sẽ tìm ngược lên prototype chain. Constructor function là cách truyền thống để tạo object bằng từ khóa new, gán property trong function và method trên prototype. Class là syntactic sugar được giới thiệu từ ES6, bản chất vẫn dùng prototype nhưng cú pháp rõ ràng hơn với constructor, extends, super. Cả hai đều tạo instance và prototype chain giống nhau, nhưng class dễ đọc và quen thuộc hơn cho người từ ngôn ngữ OOP khác."
  },

  // TypeScript Gotchas
  {
    id: 949,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Generic type trong TypeScript. Giải thích <T extends Base>?",
    a: "Generic là kiểu dữ liệu tham số hóa, cho phép viết function hoặc class có thể hoạt động với nhiều kiểu khác nhau mà vẫn giữ được type safety. Cú pháp <T extends Base> nghĩa là T phải tương thích với kiểu Base — tức T phải có ít nhất các property mà Base yêu cầu. Ví dụ <T extends {name: string}> đảm bảo T luôn có property name kiểu string, nhưng có thể có thêm property khác. Generic rất hữu ích khi viết API wrapper, utility function, hoặc component props trong React mà cần tái sử dụng với nhiều kiểu dữ liệu khác nhau."
  },
  {
    id: 950,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Utility types trong TypeScript: Pick vs Omit vs Partial. Khi nào dùng?",
    a: "Pick<T, Keys> dùng để tạo type mới chỉ chứa một số property được chọn từ type gốc, ví dụ Pick<User, 'name' | 'email'> chỉ lấy name và email. Omit<T, Keys> ngược lại, tạo type mới bằng cách loại bỏ một số property, ví dụ Omit<User, 'password'> bỏ password. Partial<T> biến tất cả property thành optional, hữu ích cho update form khi chỉ cần cập nhật một vài trường. Ngoài ra còn có Record<Keys, Value> để tạo object type từ tập key và kiểu value. Các utility type này giúp tái sử dụng type gốc mà không phải khai báo lại, giảm trùng lặp code."
  },
  {
    id: 951,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Type vs Interface trong TypeScript. Khi nào dùng cái nào?",
    a: "Interface dùng để mô tả hình dạng (shape) của object, có thể extend và khai báo lại nhiều lần để merge thêm property (declaration merging). Type alias linh hoạt hơn, có thể biểu diễn union type, tuple, intersection, và các kiểu phức tạp mà interface không làm được. Trong React, thường dùng interface cho component props vì dễ extend và rõ ràng, còn type cho union type hoặc utility type. Quy tắc chung: dùng interface khi cần extend hoặc implement, dùng type khi cần union, mapped type, hoặc conditional type."
  },
  {
    id: 952,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "as const vs assertion types. Difference giữa string vs Literal type?",
    a: "as const là cách khai báo để TypeScript hiểu tất cả giá trị là readonly và thu hẹp kiểu về literal type thay vì kiểu chung. Ví dụ const x = 'hello' as const sẽ có kiểu 'hello' thay vì string, và object sẽ có tất cả property là readonly. String type chấp nhận bất kỳ chuỗi nào, còn literal type chỉ chấp nhận đúng giá trị cụ thể đó. as const rất hữu ích khi khai báo hằng số, config object, hoặc mảng giá trị cố định để TypeScript có thể suy luận kiểu chính xác hơn và bắt lỗi tại compile time."
  },
  {
    id: 953,
    category: "TypeScript",
    subcategory: "TypeScript Gotchas",
    level: "intermediate",
    q: "Discriminated Union trong TypeScript. Cách implement type-safe reducer?",
    a: "Discriminated Union là kiểu union mà mỗi thành viên có một property chung (discriminator) dùng để phân biệt và thu hẹp kiểu. Ví dụ type Action = {type: 'ADD', payload: Item} | {type: 'DELETE', id: number} — khi kiểm tra action.type, TypeScript tự động biết payload tương ứng. Pattern này rất phổ biến trong reducer vì giúp đảm bảo type safety: switch trên action.type sẽ tự động thu hẹp kiểu cho từng case, tránh truy cập sai property. So với việc kiểm tra nhiều property riêng lẻ, discriminated union an toàn hơn và dễ mở rộng hơn khi thêm action mới."
  },

  // CSS Layout
  {
    id: 954,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Flexbox vs Grid. Khi nào dùng cái nào? Tại sao?",
    a: "Flexbox là hệ thống layout một chiều, phân bố item dọc theo một trục (hàng hoặc cột), phù hợp cho navigation bar, danh sách item, hoặc căn chỉnh đơn giản. CSS Grid là hệ thống layout hai chiều, cho phép định nghĩa cả hàng và cột cùng lúc, phù hợp cho layout trang, dashboard, hoặc bố cục phức tạp. Trong thực tế thường kết hợp cả hai: Grid cho bố cục tổng thể của trang, Flexbox cho layout bên trong từng component. Quy tắc đơn giản: nếu chỉ cần sắp xếp theo một hướng thì dùng Flexbox, nếu cần kiểm soát cả hai chiều thì dùng Grid."
  },
  {
    id: 955,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "BFC (Block Formatting Context) là gì? Cách trigger BFC?",
    a: "BFC (Block Formatting Context) là một vùng layout độc lập trong CSS, nơi các phần tử bên trong không ảnh hưởng đến layout bên ngoài và ngược lại. Cách tạo BFC gồm: overflow: auto hoặc hidden, display: flex hoặc grid, position: absolute hoặc fixed, float: left hoặc right. BFC hữu ích để giải quyết nhiều vấn đề CSS phổ biến như: ngăn margin collapse giữa parent và child, chứa float element bên trong container, và ngăn text bọc quanh float element. Hiểu BFC giúp debug layout CSS hiệu quả hơn nhiều."
  },
  {
    id: 956,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Margin collapsing trong CSS. Tại sao margin: 20px cộng với margin: 30px không bằng 50px?",
    a: "Margin collapsing là hiện tượng margin dọc (vertical) của hai block-level element liền kề bị gộp lại thành một margin duy nhất, lấy giá trị lớn hơn — nên margin 20px + 30px chỉ còn 30px chứ không phải 50px. Margin ngang (horizontal) không bị collapse. Để ngăn collapse, có thể tạo BFC bằng overflow: hidden hoặc dùng padding thay thế. Ngoài ra flexbox và grid cũng không bị margin collapse, nên khi dùng display: flex hoặc grid thì margin luôn cộng đúng như mong đợi."
  },
  {
    id: 957,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "CSS Grid template areas. Làm sao layout dashboard responsive mà không thay đổi HTML?",
    a: "CSS Grid template-areas cho phép đặt tên cho các vùng trong grid và gán phần tử vào bằng property grid-area, tạo ra layout trực quan và dễ đọc. Ví dụ: grid-template-areas: 'header header' 'sidebar main' 'footer footer' rồi gán mỗi phần tử với grid-area: header, grid-area: sidebar, v.v. Để responsive, chỉ cần dùng @media query thay đổi grid-template-areas mà không cần sửa HTML — ví dụ trên mobile chuyển thành layout một cột. Đây là ưu điểm lớn nhất: thay đổi bố cục hoàn toàn chỉ bằng CSS, giữ nguyên cấu trúc HTML, dễ bảo trì và dễ hiểu."
  },
  {
    id: 958,
    category: "CSS",
    subcategory: "CSS Layout",
    level: "intermediate",
    q: "Stacking context trong CSS. Tại sao z-index không work?",
    a: "Stacking context là hệ thống phân lớp trong CSS, mỗi context tạo ra một hệ thống z-index riêng biệt. Các thuộc tính tạo stacking context mới gồm: position kết hợp z-index, opacity nhỏ hơn 1, transform, filter, và nhiều thuộc tính khác. z-index không hoạt động thường vì hai phần tử nằm trong hai stacking context khác nhau — lúc này z-index chỉ so sánh trong cùng context, không xuyên qua được context cha. Giải pháp là kiểm tra stacking context của các phần tử cha, điều chỉnh cho chúng nằm cùng context, hoặc sắp xếp lại thứ tự HTML."
  },

  // Node.js Thực Tế
  {
    id: 959,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Node.js single-threaded. Tại sao vẫn handle multiple request? Event loop explain.",
    a: "Node.js chạy JavaScript trên một thread duy nhất, nhưng vẫn xử lý được nhiều request đồng thời nhờ cơ chế non-blocking I/O và event loop. Khi có tác vụ I/O (đọc file, gọi database, HTTP request), Node.js giao cho libuv xử lý trong thread pool riêng và tiếp tục nhận request mới. Khi tác vụ I/O hoàn thành, callback được đưa vào event queue và event loop sẽ đẩy lên call stack khi stack trống. Tuy nhiên, nếu có tác vụ tính toán nặng (CPU-intensive) thì sẽ block main thread, lúc này cần dùng Worker Threads để chạy song song."
  },
  {
    id: 960,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Callback vs Promise vs async/await. Cách handle error trong mỗi?",
    a: "Callback là cách xử lý bất đồng bộ đầu tiên trong JavaScript, nhưng dễ dẫn đến callback hell khi lồng nhiều tầng và khó xử lý lỗi vì phải kiểm tra error ở mỗi callback. Promise cải thiện bằng cách dùng .then() để chain và .catch() để bắt lỗi tập trung, nhưng vẫn có thể dài dòng. Async/await là cú pháp mới nhất, dùng try/catch để bắt lỗi giống code đồng bộ, dễ đọc và debug nhất. Khuyến nghị: dùng async/await làm mặc định, Promise.all() khi cần chạy song song nhiều request, và Promise.allSettled() khi muốn biết kết quả của tất cả request dù có lỗi."
  },
  {
    id: 961,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Middleware trong Express. Explain order, next() function, error handling middleware.",
    a: "Middleware trong Express là function nhận vào (req, res, next), có thể xử lý request, chỉnh sửa req/res, hoặc chuyển tiếp cho middleware tiếp theo bằng cách gọi next(). Thứ tự khai báo middleware rất quan trọng vì request đi qua từng middleware theo đúng thứ tự đó. Error handling middleware đặc biệt có 4 tham số (err, req, res, next) và phải đặt ở cuối cùng để bắt lỗi từ tất cả middleware phía trước. Thứ tự best practice thường là: logger -> CORS -> body parser -> authentication -> route handler -> error handler."
  },
  {
    id: 962,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Cách secure Node.js API. CORS, rate limiting, input validation?",
    a: "CORS (Cross-Origin Resource Sharing) dùng để kiểm soát domain nào được phép gọi API, cấu hình bằng middleware cors() với whitelist domain cụ thể thay vì cho phép tất cả. Rate limiting ngăn chặn brute force và DDoS bằng cách giới hạn số request trong một khoảng thời gian, dùng express-rate-limit kết hợp helmet để thêm các security header. Input validation rất quan trọng — dùng thư viện như Zod hoặc Joi để validate và sanitize dữ liệu từ người dùng trước khi xử lý. Ngoài ra cần dùng JWT hoặc session cho authentication, phân quyền role-based cho authorization, và luôn dùng HTTPS trong production."
  },
  {
    id: 963,
    category: "Node.js",
    subcategory: "Node.js Thực Tế",
    level: "intermediate",
    q: "Environment variable trong Node.js. Tại sao cần? .env file?",
    a: "Environment variable dùng để lưu trữ cấu hình thay đổi theo từng môi trường (development, staging, production) như database URL, API key, port number, mà không cần thay đổi code. File .env chứa các biến này cho môi trường phát triển local, và package dotenv sẽ tự động load chúng vào process.env. Tuyệt đối không được commit file .env lên git vì chứa thông tin nhạy cảm — thay vào đó tạo file .env.example chỉ chứa tên biến không có giá trị để người khác biết cần cấu hình gì. Trên production, environment variable được cấu hình trực tiếp trên hosting platform như Vercel, AWS, hoặc Docker."
  },

  // Coding Live / Algorithm
  {
    id: 964,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement debounce function. Giải thích use case trong React input search.",
    a: "Debounce là kỹ thuật trì hoãn việc thực thi function cho đến khi người dùng ngừng thao tác trong một khoảng thời gian nhất định. Cách implement: function trả về closure, mỗi lần gọi sẽ clearTimeout cũ và đặt setTimeout mới — chỉ khi hết thời gian chờ mà không bị gọi lại thì function mới thực sự chạy. Use case phổ biến nhất là search input: thay vì gọi API mỗi lần nhấn phím, debounce sẽ đợi người dùng ngừng gõ rồi mới gọi, giảm đáng kể số request. Trong React, cần dùng useCallback kết hợp useRef để giữ reference của timeout qua các lần render."
  },
  {
    id: 965,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement throttle function. Khi nào cần throttle vs debounce?",
    a: "Throttle là kỹ thuật giới hạn function chỉ được thực thi tối đa một lần trong mỗi khoảng thời gian nhất định, bất kể được gọi bao nhiêu lần. Khác với debounce (đợi ngừng gọi mới chạy), throttle đảm bảo function vẫn được gọi đều đặn. Dùng throttle cho các sự kiện cần phản hồi liên tục như scroll, resize, hoặc mouse move — vì người dùng cần thấy cập nhật thường xuyên. Dùng debounce cho các sự kiện chỉ cần kết quả cuối cùng như search input hoặc form validation — vì chỉ cần xử lý sau khi người dùng hoàn tất thao tác."
  },
  {
    id: 966,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "FizzBuzz coding challenge. Viết code, optimize, handle edge case.",
    a: "FizzBuzz là bài toán kinh điển: lặp từ 1 đến n, in 'Fizz' nếu chia hết cho 3, 'Buzz' nếu chia hết cho 5, 'FizzBuzz' nếu chia hết cho cả hai, còn lại in số đó. Cách cơ bản dùng vòng lặp kết hợp toán tử modulo (%), kiểm tra chia hết cho 15 trước rồi mới kiểm tra 3 và 5 riêng. Edge case cần xử lý: n bằng 0, số âm, hoặc input không phải số. Cách tiếp cận nâng cao có thể dùng functional programming với map/filter, hoặc dùng string concatenation để tránh kiểm tra 15 riêng biệt."
  },
  {
    id: 967,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Implement simple LRU cache. Explain HashMap + LinkedList data structure.",
    a: "LRU (Least Recently Used) Cache là cấu trúc dữ liệu loại bỏ phần tử ít được sử dụng gần đây nhất khi cache đầy. Cách implement kết hợp HashMap để truy cập O(1) và Doubly Linked List để duy trì thứ tự sử dụng. Khi get một phần tử, di chuyển nó lên cuối list (mới dùng nhất). Khi put phần tử mới mà cache đầy, xóa phần tử ở đầu list (ít dùng nhất). LRU cache được ứng dụng rộng rãi trong thực tế như cache API response, memoization kết quả tính toán, và database query cache."
  },
  {
    id: 968,
    category: "JavaScript",
    subcategory: "Coding Live",
    level: "intermediate",
    q: "Flatten nested array (different depth). Recursive vs iterative approach?",
    a: "Flatten nested array là bài toán biến mảng lồng nhiều tầng thành mảng phẳng một tầng. Cách recursive đơn giản và dễ hiểu: duyệt từng phần tử, nếu là mảng thì gọi đệ quy, nếu không thì thêm vào kết quả. Cách iterative dùng stack để tránh tràn stack khi mảng lồng quá sâu, phù hợp với dữ liệu lớn. JavaScript có sẵn method Array.flat(Infinity) để làm phẳng hoàn toàn, hoặc flat(n) để phẳng n tầng. Kỹ thuật flatten hay gặp trong thực tế khi xử lý cấu trúc cây, merge config nhiều tầng, hoặc normalize dữ liệu lồng nhau."
  },

  // Kiến Thức Tổng Hợp
  {
    id: 974,
    category: "Build Tools",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Module bundler: webpack vs Vite. Tại sao Vite nhanh hơn?",
    a: "Webpack bundle toàn bộ code thành một hoặc nhiều file trước khi serve, nên startup trong development khá chậm, đặc biệt với dự án lớn. Vite tận dụng ES Module native của trình duyệt để serve code trực tiếp mà không cần bundle trong development, kết hợp esbuild (viết bằng Go) để xử lý nhanh gấp nhiều lần. Khi build production, Vite dùng Rollup để tạo bundle tối ưu. Đánh đổi: Vite mới hơn nên hệ sinh thái plugin nhỏ hơn webpack, nhưng đang phát triển rất nhanh. Dự án mới nên chọn Vite, dự án cũ đã ổn định thì webpack vẫn là lựa chọn an toàn."
  },
  {
    id: 975,
    category: "Testing",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Testing strategy. Unit vs integration vs E2E. Pyramid?",
    a: "Test pyramid gồm ba tầng: (1) Unit test ở đáy — nhiều nhất, chạy nhanh, test từng function hoặc component riêng lẻ bằng Jest hoặc Vitest. (2) Integration test ở giữa — test sự tương tác giữa các component hoặc module bằng Testing Library. (3) E2E test ở đỉnh — ít nhất, chạy chậm nhất, test toàn bộ luồng người dùng bằng Cypress hoặc Playwright. Chiến lược hợp lý: unit test phủ rộng logic nghiệp vụ, integration test cho các luồng quan trọng, E2E chỉ cho critical path như đăng nhập, thanh toán. Mục tiêu là có feedback nhanh từ unit test và độ tin cậy cao từ E2E."
  },
  {
    id: 976,
    category: "Security",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Security concern trong frontend. XSS, CSRF, Content Security Policy?",
    a: "XSS (Cross-Site Scripting) là lỗ hổng cho phép kẻ tấn công chèn mã script độc hại vào trang web, phòng tránh bằng cách sanitize input từ người dùng — React tự động escape HTML nên đã an toàn phần lớn. CSRF (Cross-Site Request Forgery) là tấn công giả mạo request từ trang khác, ngăn chặn bằng CSRF token và SameSite cookie. Content Security Policy (CSP) là HTTP header giới hạn nguồn tài nguyên được phép tải, ngăn chặn inline script và nguồn không tin cậy. Ngoài ra cần dùng HTTPS để mã hóa truyền tải, đặt cookie với flag SameSite và HttpOnly, và tuyệt đối không để lộ secret trong code frontend."
  },
  {
    id: 977,
    category: "Performance",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Web performance metric. LCP, FID, CLS, TTFB explain.",
    a: "LCP (Largest Contentful Paint) đo thời gian phần tử lớn nhất hiển thị trên màn hình, phản ánh tốc độ tải trực quan. FID (First Input Delay) đo độ trễ từ lúc người dùng tương tác lần đầu đến khi trình duyệt phản hồi, phản ánh mức độ tương tác được của trang. CLS (Cumulative Layout Shift) đo mức độ dịch chuyển layout bất ngờ, ảnh hưởng đến trải nghiệm ổn định thị giác. TTFB (Time to First Byte) đo thời gian từ lúc gửi request đến khi nhận byte đầu tiên từ server. Để tối ưu: lazy load hình ảnh, code splitting, minify tài nguyên, cache hiệu quả, dùng CDN, và tối ưu server response time."
  },
  {
    id: 978,
    category: "State Management",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "State management: Redux vs Zustand vs Context. Khi nào dùng?",
    a: "Redux là thư viện quản lý state mạnh mẽ với kiến trúc rõ ràng (action, reducer, store), phù hợp cho ứng dụng lớn có state phức tạp và cần debug bằng DevTools. Zustand nhẹ hơn nhiều, cú pháp đơn giản, không cần boilerplate, phù hợp cho ứng dụng vừa và nhỏ. Context API là giải pháp có sẵn của React, phù hợp cho state đơn giản như theme, ngôn ngữ, hoặc user info — nhưng không nên dùng cho state thay đổi thường xuyên vì sẽ re-render toàn bộ consumer. Lựa chọn: ứng dụng nhỏ dùng Context, vừa dùng Zustand, lớn và phức tạp dùng Redux — xu hướng hiện tại Zustand đang được ưa chuộng nhờ sự đơn giản."
  },
  {
    id: 979,
    category: "Performance",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Browser rendering pipeline. Critical rendering path?",
    a: "Browser rendering pipeline gồm các bước: (1) parse HTML thành DOM tree, (2) parse CSS thành CSSOM tree, (3) kết hợp DOM và CSSOM thành render tree, (4) tính toán layout (vị trí, kích thước), (5) paint (vẽ pixel), (6) composite (ghép các layer). Critical rendering path là chuỗi bước tối thiểu trình duyệt phải hoàn thành trước khi hiển thị trang — CSS và JavaScript mặc định sẽ block quá trình render. Tối ưu bằng cách: inline critical CSS, defer hoặc async cho JavaScript, giảm kích thước CSS/JS, và dùng DevTools Coverage để tìm code không sử dụng."
  },
  {
    id: 980,
    category: "Build Tools",
    subcategory: "Kiến Thức Tổng Hợp",
    level: "intermediate",
    q: "Microservices vs monolith frontend architecture. Federated module?",
    a: "Monolith frontend là kiến trúc một repo chứa toàn bộ code frontend, đơn giản nhưng khó scale khi team lớn vì mọi thay đổi đều phải deploy cùng lúc. Micro-frontend chia frontend thành nhiều ứng dụng nhỏ độc lập, mỗi team quản lý và deploy riêng. Module Federation của webpack cho phép các ứng dụng chia sẻ dependency tại runtime, mỗi app có thể load component từ app khác mà không cần build chung. Đánh đổi là tăng độ phức tạp về infrastructure, versioning, và trải nghiệm nhất quán — chỉ phù hợp cho tổ chức lớn có nhiều team phát triển song song."
  },

  // React Thực Chiến - Advanced Patterns
  {
    id: 981,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Custom Hook pattern. Viết custom hook để manage form state. Testing?",
    a: "Custom Hook là cách trích xuất logic tái sử dụng từ component thành function riêng, tên bắt đầu bằng 'use'. Ví dụ useForm(initialValues) trả về {values, handleChange, reset, errors} để quản lý state và validation của form. Để test custom hook, dùng renderHook từ @testing-library/react-hooks để test hành vi của hook một cách độc lập mà không cần mount component. Lợi ích chính: tách biệt logic khỏi UI, dễ test, và nhiều component có thể dùng chung — ví dụ useForm có thể dùng cho cả form đăng ký và form chỉnh sửa profile."
  },
  {
    id: 982,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Error boundary trong React. Cách implement, use case?",
    a: "Error boundary là component đặc biệt dùng để bắt lỗi JavaScript trong cây component con, ngăn không cho toàn bộ ứng dụng bị crash trắng màn hình. Cách implement: tạo class component với method componentDidCatch và static getDerivedStateFromError, khi có lỗi sẽ hiển thị fallback UI thay vì crash. Lưu ý error boundary không bắt được lỗi trong: event handler, code bất đồng bộ (setTimeout, Promise), server-side rendering, và lỗi của chính error boundary. Use case phổ biến: bọc quanh từng section quan trọng của trang để khi một phần lỗi thì các phần khác vẫn hoạt động bình thường, kèm nút retry để người dùng thử lại."
  },
  {
    id: 983,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Compound component pattern. Tại sao hữu ích? Implement example?",
    a: "Compound component là pattern trong đó component cha quản lý state nội bộ và chia sẻ cho các component con thông qua Context, tạo nên một nhóm component hoạt động cùng nhau. Ví dụ: <Tabs> là cha quản lý tab đang active, <Tab> và <TabPanel> là con truy cập state qua context để hiển thị đúng nội dung. Lợi ích lớn nhất là API linh hoạt — người dùng component có thể sắp xếp, thêm bớt component con tùy ý mà không cần truyền hàng loạt props phức tạp (tránh prop explosion). Pattern này phổ biến trong các thư viện UI như Radix UI, Headless UI, dùng kết hợp React.cloneElement hoặc Context."
  },
  {
    id: 984,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Render prop vs HOC pattern. Modern React dùng gì?",
    a: "Render prop là pattern component nhận một function làm prop (hoặc children) và gọi function đó với dữ liệu cần thiết để render UI. HOC (Higher-Order Component) là function nhận một component và trả về component mới đã được bổ sung logic. Cả hai đều giúp tái sử dụng logic, nhưng dễ gây wrapper hell khi lồng nhiều tầng và khó debug. Trong React hiện đại, Custom Hook là giải pháp thay thế tốt hơn vì cho phép chia sẻ logic trực tiếp mà không cần bọc thêm component, code phẳng và dễ đọc hơn. Tuy nhiên render prop và HOC vẫn xuất hiện trong nhiều thư viện cũ nên cần hiểu để đọc code."
  },
  {
    id: 985,
    category: "React",
    subcategory: "React Thực Chiến",
    level: "intermediate",
    q: "Suspense trong React. Fallback, error boundary, data fetching?",
    a: "Suspense là cơ chế cho phép React tạm dừng render một component và hiển thị fallback UI (ví dụ loading spinner) cho đến khi component đó sẵn sàng. Hiện tại Suspense hoạt động tốt nhất với React.lazy() cho lazy loading component và với các framework như Next.js, Remix cho data fetching phía server. Khi kết hợp với Error Boundary, Suspense xử lý trạng thái loading còn Error Boundary xử lý trạng thái lỗi, tạo nên trải nghiệm hoàn chỉnh cho người dùng. Trong tương lai, React sẽ mở rộng Suspense cho data fetching phía client, nhưng hiện tại nên dùng thư viện như TanStack Query hoặc SWR cho use case đó."
  },

  // JS Tricky - Advanced
  {
    id: 986,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "WeakMap vs Map trong JavaScript. Memory leak impact?",
    a: "Map giữ strong reference đến key, nghĩa là dù không còn biến nào trỏ đến key object thì garbage collector vẫn không thu hồi được bộ nhớ. WeakMap chỉ cho phép object làm key và giữ weak reference — khi không còn reference nào khác đến key object thì garbage collector sẽ tự động thu hồi, ngăn ngừa memory leak. Use case phổ biến của WeakMap: lưu trữ dữ liệu private gắn với object, metadata cho DOM node, hoặc cache mà tự động dọn dẹp khi object bị hủy. Hạn chế của WeakMap là không thể duyệt (iterate) qua các phần tử và không có property size."
  },
  {
    id: 987,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Symbol trong JavaScript. Khi nào dùng? Built-in symbol?",
    a: "Symbol là kiểu dữ liệu primitive tạo ra giá trị duy nhất và không trùng lặp, mỗi lần gọi Symbol() đều tạo ra giá trị mới. Công dụng chính là tạo property key không bị xung đột tên với property khác, hữu ích khi thêm metadata vào object mà không ảnh hưởng code hiện có. JavaScript có sẵn nhiều well-known symbol như Symbol.iterator (cho phép object dùng for...of), Symbol.hasInstance (tùy chỉnh instanceof), Symbol.toStringTag (tùy chỉnh toString). Trong thực tế ít khi tự tạo Symbol, nhưng hiểu well-known symbol giúp nắm sâu hơn cách JavaScript hoạt động bên trong."
  },
  {
    id: 988,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Proxy và Reflect trong JavaScript. Intercepting operation?",
    a: "Proxy cho phép tạo một đối tượng đại diện bọc quanh object gốc, chặn và tùy chỉnh các thao tác cơ bản như get, set, delete, has, và nhiều thao tác khác thông qua handler trap. Reflect là object cung cấp các method tương ứng với mỗi trap của Proxy, dùng để thực hiện thao tác mặc định bên trong trap. Use case thực tế: validation dữ liệu khi set property, logging tự động khi truy cập property, lazy initialization, hoặc computed property. Vue 3 dùng Proxy làm nền tảng cho hệ thống reactivity của mình. Lưu ý Proxy có chi phí hiệu năng và khó debug hơn object thường."
  },
  {
    id: 989,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Microtask vs Macrotask trong event loop. Promise.then priority?",
    a: "Trong event loop, có hai loại hàng đợi: microtask queue (chứa Promise.then, async/await, queueMicrotask) và macrotask queue (chứa setTimeout, setInterval, I/O callback). Sau khi call stack trống, event loop sẽ xử lý hết toàn bộ microtask queue trước, rồi mới lấy một macrotask từ macrotask queue để xử lý. Vì vậy Promise.then luôn chạy trước setTimeout dù setTimeout đặt delay là 0. Ví dụ thực tế: nếu đặt setTimeout bên trong Promise, setTimeout sẽ chỉ chạy sau khi tất cả promise chain đã hoàn thành — hiểu điều này giúp debug thứ tự thực thi code bất đồng bộ chính xác hơn."
  },
  {
    id: 990,
    category: "JavaScript",
    subcategory: "JS Tricky",
    level: "intermediate",
    q: "Array method efficiency. map vs forEach vs reduce performance?",
    a: "forEach dùng để duyệt mảng và thực hiện side effect, không trả về mảng mới nên không tốn bộ nhớ phân bổ thêm. map tạo và trả về mảng mới với cùng độ dài, tốn thêm bộ nhớ do phải cấp phát mảng — dùng khi cần biến đổi dữ liệu. reduce tích lũy các phần tử thành một giá trị duy nhất (số, object, mảng khác), linh hoạt nhất nhưng khó đọc nếu logic phức tạp. Về hiệu năng, forEach nhanh nhất do không cấp phát mảng mới, map chậm hơn một chút. Quy tắc chọn: chỉ duyệt thì dùng forEach, biến đổi mảng thì dùng map, tích lũy giá trị thì dùng reduce."
  }
]
