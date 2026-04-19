import type { QAItem } from "../interview-data";

export const JS_TS_DATA: QAItem[] = [
  {
    id: 299,
    category: "JavaScript",
    subcategory: "Khác",
    level: "beginner",
    q: "Làm thế nào để sao chép (clone) một object trong JavaScript?",
    a: "Có 2 loại sao chép: Shallow clone (sao chép nông) và Deep clone (sao chép sâu).\n\n**Shallow clone:** Dùng spread operator `const clone = { ...obj }` hoặc `Object.assign({}, obj)`. Chỉ sao chép các thuộc tính ở level đầu, nếu thuộc tính là object/array thì vẫn giữ tham chiếu cũ.\n\n**Deep clone:** Tạo bản sao hoàn toàn độc lập.\n- Cách cũ: `JSON.parse(JSON.stringify(obj))` (nhược điểm: mất hàm, undefined, Symbol, Date thành chuỗi).\n- Cách mới: Dùng `structuredClone(obj)` (hỗ trợ Date, Map, Set, nhưng vẫn không clone được hàm).",
    q_en: "How do you clone an object in JavaScript?",
    a_en: "There are 2 types of cloning: Shallow clone and Deep clone.\n\n**Shallow clone:** Use the spread operator `const clone = { ...obj }` or `Object.assign({}, obj)`. It only copies top-level properties; if a property is an object/array, it keeps the old reference.\n\n**Deep clone:** Creates a completely independent copy.\n- Old way: `JSON.parse(JSON.stringify(obj))` (cons: loses functions, undefined, Symbols, turns Dates into strings).\n- New way: Use `structuredClone(obj)` (supports Dates, Maps, Sets, but still cannot clone functions).",
  },
  // === JavaScript: Kiểu Dữ Liệu & Biến (201-210) ===
  {
    id: 201,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Sự khác biệt giữa var, let và const là gì?",
    a: "\n\n**var:** function scope, hoisting (giá trị undefined), có thể khai báo lại — dễ gây bug, tránh dùng.\n\n**let:** block scope, Temporal Dead Zone (TDZ — không truy cập trước khai báo), có thể gán lại.\n\n**const:** block scope, TDZ, KHÔNG gán lại — nhưng object/array bên trong vẫn mutable.\n\n**Best practice:** mặc định dùng const, chỉ let khi cần reassign, không bao giờ dùng var.",
    q_en: "What is the difference between var, let, and const?",
    a_en: "\n\n**var:** function scope, hoisting (value is undefined), can be re-declared — prone to bugs, avoid using it.\n\n**let:** block scope, Temporal Dead Zone (TDZ — cannot access before declaration), can be reassigned.\n\n**const:** block scope, TDZ, CANNOT be reassigned — but objects/arrays inside are still mutable.\n\n**Best practice:** use const by default, only let when reassignment is needed, never use var.",
  },
  {
    id: 202,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "JavaScript có những kiểu dữ liệu nguyên thủy (primitive types) nào?",
    a: "JavaScript có 7 kiểu nguyên thủy: string, number, boolean, null, undefined, Symbol (ES6) và BigInt (ES2020). Các kiểu này được lưu theo giá trị (value), không phải tham chiếu (reference). \n\n**Ví dụ:** `let a = 5; let b = a; b = 10;` thì a vẫn là 5 vì number là primitive. Khác với object và array là reference types — nếu sửa object qua biến b, biến a cũng bị ảnh hưởng. Mẹo phỏng vấn: typeof null trả về 'object' là bug lịch sử, không phải null là object.",
    q_en: "What are the primitive data types in JavaScript?",
    a_en: "JavaScript has 7 primitive types: string, number, boolean, null, undefined, Symbol (ES6), and BigInt (ES2020). These types are stored by value, not by reference. \n\n**Example:** `let a = 5; let b = a; b = 10;` — a is still 5 because number is a primitive. This is different from objects and arrays which are reference types — modifying an object via variable b also affects a. Interview tip: typeof null returns 'object' is a historical bug, null is not actually an object.",
  },
  {
    id: 203,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Tại sao typeof null trả về 'object'?",
    a: "Đây là bug lịch sử từ JavaScript 1.0 (1995). Trong thiết kế ban đầu, các giá trị được biểu diễn bằng type tag + value: objects có tag 0, và null là con trỏ null (0x00) nên cũng có tag 0, bị nhầm là object. Bug này không được sửa để tránh phá vỡ hàng triệu dòng code cũ trên web. Cách kiểm tra null đúng: dùng `=== null` thay vì typeof. Đây là câu hỏi phỏng vấn kinh điển để test kiến thức về quirks của JS.",
    q_en: "Why does typeof null return 'object'?",
    a_en: "This is a historical bug from JavaScript 1.0 (1995). In the original design, values were represented with a type tag + value: objects had tag 0, and null was a null pointer (0x00) so it also had tag 0, causing it to be mistaken for an object. This bug was never fixed to avoid breaking millions of lines of legacy web code. The correct way to check for null is using `=== null` instead of typeof. This is a classic interview question to test knowledge of JS quirks.",
  },
  {
    id: 204,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Sự khác biệt giữa undefined và null là gì?",
    a: "\n\n**undefined:** là giá trị mặc định khi biến được khai báo nhưng chưa gán giá trị.\n\n**null:** là giá trị do lập trình viên chủ động gán để biểu thị 'không có giá trị'.\n\n**So sánh:** `undefined === undefined` là true, nhưng `null == undefined` là true còn `null === undefined` là false.",
    q_en: "What is the difference between undefined and null?",
    a_en: "\n\n**undefined:** is the default value when a variable is declared but not yet assigned.\n\n**null:** is a value intentionally assigned by the programmer to represent 'no value'.\n\n**Comparison:** `undefined === undefined` is true, `null == undefined` is true but `null === undefined` is false.",
  },
  {
    id: 205,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "intermediate",
    q: "Symbol trong JavaScript là gì và dùng để làm gì?",
    a: "Symbol là kiểu dữ liệu nguyên thủy tạo ra giá trị duy nhất (unique). Mỗi Symbol() tạo ra một giá trị không bao giờ bằng nhau dù có cùng description. Symbol thường dùng làm key cho object property để tránh xung đột tên, hoặc tạo các well-known symbols như Symbol.iterator.",
    q_en: "What is Symbol in JavaScript and what is it used for?",
    a_en: "Symbol is a primitive data type that creates a unique value. Each Symbol() call produces a value that never equals another, even with the same description. Symbols are commonly used as object property keys to avoid name collisions, or to create well-known symbols like Symbol.iterator.",
  },
  {
    id: 206,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "intermediate",
    q: "BigInt trong JavaScript là gì? Khi nào nên dùng?",
    a: "BigInt là kiểu dữ liệu cho phép biểu diễn số nguyên lớn hơn Number.MAX_SAFE_INTEGER (2^53 - 1). Khai báo bằng cách thêm n sau số (ví dụ: 9007199254740993n) hoặc dùng BigInt(). Dùng khi cần tính toán với số nguyên rất lớn như ID database 64-bit hay mật mã học.",
    q_en: "What is BigInt in JavaScript? When should you use it?",
    a_en: "BigInt is a data type that allows representing integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1). Declared by appending n after a number (e.g., 9007199254740993n) or using BigInt(). Use it when you need to compute with very large integers such as 64-bit database IDs or cryptography.",
  },
  {
    id: 207,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Toán tử == và === khác nhau như thế nào?",
    a: "== là so sánh lỏng (loose equality), tự động chuyển đổi kiểu (type coercion) trước khi so sánh. === là so sánh chặt (strict equality), kiểm tra cả giá trị lẫn kiểu dữ liệu. Luôn nên dùng === để tránh những kết quả không mong muốn như 0 == '0' là true.",
    q_en: "What is the difference between == and ===?",
    a_en: "== is loose equality, which performs type coercion before comparing. === is strict equality, checking both value and type. Always use === to avoid unexpected results like 0 == '0' being true.",
  },
  {
    id: 208,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Type coercion (ép kiểu tự động) trong JavaScript là gì?",
    a: "Type coercion là quá trình JavaScript tự động chuyển đổi kiểu dữ liệu khi thực hiện phép tính. Với `+`, nếu có string thì ưu tiên nối chuỗi: `'5' + 3 = '53'`. Với `-`, `*`, `/` thì ép về number: `'5' - 3 = 2`. Bẫy nổi tiếng: `[] + [] = ''`, `[] + {} = '[object Object]'`. Cách phòng: luôn dùng `===` thay `==`, dùng `Number()`, `String()`, `Boolean()` để ép kiểu tường minh thay để JS tự làm.",
    q_en: "What is type coercion in JavaScript?",
    a_en: "Type coercion is JavaScript's automatic conversion of data types during operations. With `+`, if a string is involved, string concatenation takes priority: `'5' + 3 = '53'`. With `-`, `*`, `/` it coerces to number: `'5' - 3 = 2`. Famous traps: `[] + [] = ''`, `[] + {} = '[object Object]'`. Prevention: always use `===` instead of `==`, use `Number()`, `String()`, `Boolean()` for explicit type conversion rather than relying on JS.",
  },
  {
    id: 209,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "beginner",
    q: "Truthy và falsy values trong JavaScript là gì?",
    a: "Falsy values là các giá trị bị chuyển thành false trong ngữ cảnh boolean, gồm đúng 8 giá trị: false, 0, -0, 0n, '', null, undefined, NaN. Tất cả giá trị còn lại đều truthy — kể cả những giá trị dễ nhầm như '0' (string), [] (mảng rỗng), {} (object rỗng). Bẫy phổ biến: `if (arr.length)` hoạt động vì 0 là falsy, nhưng `if (obj)` luôn true dù obj là object rỗng. Dùng `Boolean(val)` hoặc `!!val` để chuyển về boolean tường minh.",
    q_en: "What are truthy and falsy values in JavaScript?",
    a_en: "Falsy values are those that convert to false in a boolean context, exactly 8 values: false, 0, -0, 0n, '', null, undefined, NaN. All remaining values are truthy — including easily confused ones like '0' (string), [] (empty array), {} (empty object). Common trap: `if (arr.length)` works because 0 is falsy, but `if (obj)` is always true even for an empty object. Use `Boolean(val)` or `!!val` for explicit boolean conversion.",
  },
  {
    id: 210,
    category: "JavaScript",
    subcategory: "Kiểu Dữ Liệu & Biến",
    level: "intermediate",
    q: "NaN là gì? Tại sao NaN !== NaN?",
    a: "NaN (Not a Number) là giá trị đặc biệt xuất hiện khi phép tính số học thất bại: `parseInt('abc')`, `0/0`, `Math.sqrt(-1)`. Theo chuẩn IEEE 754, NaN không bằng bất kỳ giá trị nào kể cả chính nó — `NaN === NaN` là false. Dùng `Number.isNaN(val)` để kiểm tra chính xác (không dùng `isNaN()` vì hàm global này ép kiểu trước: `isNaN('hello')` trả về true). Bẫy: `typeof NaN` trả về `'number'` — NaN vẫn là kiểu number, chỉ là giá trị không hợp lệ.",
    q_en: "What is NaN? Why is NaN !== NaN?",
    a_en: "NaN (Not a Number) is a special value that appears when an arithmetic operation fails: `parseInt('abc')`, `0/0`, `Math.sqrt(-1)`. Per the IEEE 754 standard, NaN is not equal to any value, including itself — `NaN === NaN` is false. Use `Number.isNaN(val)` to check accurately (avoid the global `isNaN()` which coerces first: `isNaN('hello')` returns true). Trap: `typeof NaN` returns `'number'` — NaN is still of type number, just an invalid value.",
  },

  // === JavaScript: Hoisting & Closure (211-225) ===
  {
    id: 211,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "beginner",
    q: "Hoisting trong JavaScript là gì?",
    a: "Hoisting là cơ chế JavaScript đưa khai báo biến và hàm lên đầu phạm vi (scope) trước khi thực thi. var được hoisted và khởi tạo với undefined, function declaration được hoisted hoàn toàn. let và const được hoisted nhưng không khởi tạo, tạo ra Temporal Dead Zone.",
    q_en: "What is hoisting in JavaScript?",
    a_en: "Hoisting is JavaScript's mechanism of moving variable and function declarations to the top of their scope before execution. var is hoisted and initialized with undefined; function declarations are fully hoisted. let and const are hoisted but not initialized, creating a Temporal Dead Zone.",
  },
  {
    id: 212,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Temporal Dead Zone (TDZ) là gì?",
    a: "Temporal Dead Zone (TDZ) là khoảng thời gian từ khi block bắt đầu đến khi biến `let`/`const` được khai báo. Trong TDZ, việc truy cập biến sẽ ném `ReferenceError` dù biến đã được hoisted.\n\n**Ví dụ:**\n```javascript\n// Trúng TDZ, báo lỗi ReferenceError\n/* truy cập x */ let x = 5;\n```\n\n**Lợi ích:** TDZ giúp phát hiện sớm các lỗi dùng biến trước khi khai báo — một điểm yếu của `var` (chỉ trả về `undefined` và gây bug khó tìm). Khi phỏng vấn, hãy nhấn mạnh rằng biến `let`/`const` **vẫn được hoisted** nhưng không được khởi tạo giá trị mặc định.",
    q_en: "What is the Temporal Dead Zone (TDZ)?",
    a_en: "The TDZ is the period from when a block begins until a let/const variable is declared. Accessing the variable in the TDZ throws a ReferenceError even though it has been hoisted. \n\n**Example:** `console.log(x); let x = 5;` throws ReferenceError, while var only returns undefined. TDZ helps catch bugs where a variable is used before being declared — something var allows but which causes hard-to-find bugs. When asked about TDZ in interviews, remember to note the variable is still hoisted but not yet initialized.",
  },
  {
    id: 213,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Scope chain trong JavaScript hoạt động như thế nào?",
    a: "Scope chain là cơ chế JavaScript tìm kiếm biến từ scope hiện tại ra ngoài đến global scope. Khi không tìm thấy biến trong scope hiện tại, JS tìm trong scope cha, rồi tiếp tục lên cho đến global. Nếu không tìm thấy ở global, ném ReferenceError.",
    q_en: "How does the scope chain work in JavaScript?",
    a_en: "The scope chain is JavaScript's mechanism for looking up variables from the current scope outward to the global scope. When a variable is not found in the current scope, JS looks in the parent scope, continuing upward to global. If not found at global, a ReferenceError is thrown.",
  },
  {
    id: 214,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Closure là gì? Cho ví dụ thực tế.",
    a: `Closure là hàm 'nhớ' được biến từ lexical scope bên ngoài, ngay cả sau khi hàm ngoài đã return.
\`\`\`javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c = makeCounter();
c(); // 1
c(); // 2
\`\`\`
Hàm trả về vẫn truy cập \`count\`. \n\n**Ứng dụng thực tế:** private variables (encapsulation), factory functions, event handlers giữ state, debounce/throttle, React hooks (useState bên trong dùng closure).`,
    q_en: "What is a closure? Give a practical example.",
    a_en: `A closure is a function that 'remembers' variables from its outer lexical scope, even after the outer function has returned.
\`\`\`javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c = makeCounter();
c(); // 1
c(); // 2
\`\`\`
The returned function still accesses \`count\`. Practical uses: private variables (encapsulation), factory functions, event handlers holding state, debounce/throttle, React hooks (useState internally uses closures).`,
  },
  {
    id: 215,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Lexical scope là gì?",
    a: "Lexical scope (static scope) nghĩa là phạm vi của biến được xác định tại thời điểm viết code, không phải lúc chạy. Hàm con có thể truy cập biến của hàm cha nơi nó được định nghĩa, không phải nơi nó được gọi. Đây là nền tảng của closure trong JavaScript.",
    q_en: "What is lexical scope?",
    a_en: "Lexical scope (static scope) means that the scope of a variable is determined at write time, not at runtime. An inner function can access variables from the outer function where it was defined, not where it is called. This is the foundation of closures in JavaScript.",
  },
  {
    id: 216,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "advanced",
    q: "Closure có thể gây memory leak như thế nào?",
    a: "Closure giữ tham chiếu đến scope ngoài, ngăn garbage collector giải phóng bộ nhớ. Vấn đề xảy ra khi closure không cần thiết giữ tham chiếu đến đối tượng lớn hoặc DOM node đã bị xóa. Cách phòng tránh: xóa event listeners không dùng, null hóa tham chiếu, tránh closures trong vòng lặp không cần thiết.",
    q_en: "How can closures cause memory leaks?",
    a_en: "Closures hold references to the outer scope, preventing garbage collection from freeing memory. Problems arise when unnecessary closures hold references to large objects or already-removed DOM nodes. Prevention: remove unused event listeners, null out references, avoid closures inside loops when not needed.",
  },
  {
    id: 217,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "advanced",
    q: "Module pattern sử dụng closure như thế nào?",
    a: "Module pattern dùng IIFE và closure để tạo private state. Hàm bên trong có thể truy cập biến private của IIFE nhưng code bên ngoài không thể. Pattern này cho phép encapsulation trước khi ES modules được giới thiệu, tạo API public qua returned object.",
    q_en: "How does the module pattern use closures?",
    a_en: "The module pattern uses IIFEs and closures to create private state. Inner functions can access the IIFE's private variables, but outside code cannot. This pattern enables encapsulation before ES modules were introduced, exposing a public API via the returned object.",
  },
  {
    id: 218,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "beginner",
    q: "Sự khác biệt giữa function scope và block scope là gì?",
    a: "Function scope: biến khai báo bằng `var` chỉ tồn tại trong hàm chứa nó, mọi block `{}` bên trong đều dùng chung. Block scope: biến `let`/`const` chỉ tồn tại trong khối `{}` gần nhất — if, for, while, hay bất kỳ `{}` nào. Ví dụ rò rỉ var: `for (var i = 0; i < 3; i++) {}; console.log(i)` in ra 3 vì i thoát ra ngoài for. Với `let`, biến i không tồn tại ngoài vòng lặp. Đây là lý do chính để tránh dùng var trong code hiện đại.",
    q_en: "What is the difference between function scope and block scope?",
    a_en: "Function scope: variables declared with `var` only exist within the enclosing function; all inner `{}` blocks share the same scope. Block scope: `let`/`const` variables only exist within the nearest `{}` block — if, for, while, or any `{}`. Example of var leaking: `for (var i = 0; i < 3; i++) {}; console.log(i)` prints 3 because i escapes the for loop. With `let`, i does not exist outside the loop. This is the main reason to avoid var in modern code.",
  },
  {
    id: 219,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Vấn đề classic về closure trong vòng lặp with var là gì?",
    a: `Khi dùng \`var\` trong vòng lặp for, tất cả callback chia sẻ cùng tham chiếu đến biến i — vì var là function scope, chỉ có một biến i duy nhất.
\`\`\`javascript
// Bug: in ra 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// Fix 1: dùng let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0 1 2
}

// Fix 2: IIFE capture giá trị
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}
\`\`\`
Đây là câu hỏi phỏng vấn cổ điển về closure.`,
    q_en: "What is the classic closure-in-loop problem with var?",
    a_en: `When using \`var\` in a for loop, all callbacks share the same reference to variable i — because var is function-scoped, there is only one i.
\`\`\`javascript
// Bug: prints 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// Fix 1: use let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0 1 2
}

// Fix 2: IIFE to capture the value
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}
\`\`\`
This is a classic interview question about closures.`,
  },
  {
    id: 220,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Sự khác biệt giữa function declaration và function expression trong hoisting là gì?",
    a: "Function declaration được hoisted hoàn toàn (cả tên và thân hàm), có thể gọi trước khi khai báo. Function expression chỉ hoisted phần khai báo biến (với var là undefined), không thể gọi trước khi gán. Điều này ảnh hưởng đến thứ tự khai báo trong code.",
    q_en: "What is the difference between function declarations and function expressions in terms of hoisting?",
    a_en: "Function declarations are fully hoisted (both name and body), so they can be called before they are declared. Function expressions only hoist the variable declaration (undefined with var), and cannot be called before assignment. This affects the ordering of declarations in your code.",
  },
  {
    id: 221,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "advanced",
    q: "Garbage collection trong JavaScript hoạt động như thế nào liên quan đến closure?",
    a: "JavaScript dùng mark-and-sweep algorithm: đánh dấu tất cả đối tượng có thể truy cập từ root (global), sau đó dọn dẹp những gì không được đánh dấu. Closure ngăn GC vì giữ reference đến outer scope. V8 engine tối ưu bằng cách chỉ giữ những biến thực sự được dùng trong closure.",
    q_en: "How does garbage collection in JavaScript relate to closures?",
    a_en: "JavaScript uses a mark-and-sweep algorithm: it marks all objects reachable from roots (global), then cleans up unmarked ones. Closures prevent GC by holding references to the outer scope. The V8 engine optimizes this by only keeping variables that are actually used within the closure.",
  },
  {
    id: 222,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Partial application và closure liên quan với nhau như thế nào?",
    a: "Partial application tạo hàm mới bằng cách cố định một số argument của hàm gốc, nhờ closure để nhớ các argument đó. \n\n**Ví dụ:** `const multiply = (a, b) => a * b; const double = (b) => multiply(2, b);` — double dùng closure để nhớ a=2. Khác currying ở chỗ partial application cố định nhiều argument cùng lúc. Hữu ích khi cần tạo hàm chuyên biệt từ hàm chung, ví dụ tạo logger với prefix cố định hay validator với rules cố định.",
    q_en: "How do partial application and closures relate?",
    a_en: "Partial application creates a new function by fixing some arguments of the original function, using closures to remember those arguments. \n\n**Example:** `const multiply = (a, b) => a * b; const double = (b) => multiply(2, b);` — double uses a closure to remember a=2. It differs from currying in that partial application fixes multiple arguments at once. Useful for creating specialized functions from general ones, such as a logger with a fixed prefix or a validator with fixed rules.",
  },
  {
    id: 223,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "advanced",
    q: "Tại sao var trong global scope tạo property trên window object?",
    a: "Trong browser, var khai báo ở global scope được thêm vào window object vì global execution context gắn với window. let và const ở global scope không thêm vào window, chúng nằm trong script scope riêng biệt. Đây là lý do tránh dùng var ở global scope.",
    q_en: "Why does var in global scope create a property on the window object?",
    a_en: "In the browser, var declarations at global scope are added to the window object because the global execution context is tied to window. Variables declared with let and const at global scope are not added to window; they exist in a separate script scope. This is another reason to avoid var in the global scope.",
  },
  {
    id: 224,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "intermediate",
    q: "Closures có ảnh hưởng đến performance không?",
    a: "Closure có overhead nhỏ về bộ nhớ vì phải lưu trữ tham chiếu đến outer scope. Tuy nhiên, V8 engine tối ưu tốt và overhead thường không đáng kể trong thực tế. Vấn đề chỉ xuất hiện khi tạo hàng nghìn closure giữ reference đến đối tượng lớn.",
    q_en: "Do closures affect performance?",
    a_en: "Closures have a small memory overhead because they must store references to the outer scope. However, the V8 engine optimizes this well and the overhead is usually negligible in practice. Problems only arise when thousands of closures are created holding references to large objects.",
  },
  {
    id: 225,
    category: "JavaScript",
    subcategory: "Hoisting & Closure",
    level: "advanced",
    q: "Stale closure là gì và cách phòng tránh?",
    a: "Stale closure xảy ra khi closure nắm giữ giá trị cũ của biến thay vì giá trị mới nhất. Thường gặp trong React hooks khi useEffect capture state cũ. Cách phòng: thêm dependency vào dependency array, dùng useRef để lưu giá trị mới nhất, hoặc dùng functional update trong setState.",
    q_en: "What is a stale closure and how do you prevent it?",
    a_en: "A stale closure occurs when a closure captures an old value of a variable instead of the latest one. Commonly encountered in React hooks when useEffect captures stale state. Prevention: add the dependency to the dependency array, use useRef to store the latest value, or use functional updates in setState.",
  },

  // === JavaScript: Functions (226-240) ===
  {
    id: 226,
    category: "JavaScript",
    subcategory: "Functions",
    level: "beginner",
    q: "Sự khác biệt giữa function declaration, function expression và arrow function là gì?",
    a: "Function declaration: hoisted hoàn toàn, có tên trong stack trace. Function expression: gán vào biến, không hoisted. Arrow function: cú pháp ngắn gọn, không có this riêng, không thể dùng làm constructor. Arrow function kế thừa this từ lexical scope bên ngoài.",
    q_en: "What is the difference between function declarations, function expressions, and arrow functions?",
    a_en: "Function declaration: fully hoisted, has a name in stack traces. Function expression: assigned to a variable, not hoisted. Arrow function: concise syntax, no own `this`, cannot be used as a constructor. Arrow functions inherit `this` from the enclosing lexical scope.",
  },
  {
    id: 227,
    category: "JavaScript",
    subcategory: "Functions",
    level: "beginner",
    q: "Callback function là gì? Tại sao JavaScript dùng callbacks?",
    a: "Callback là hàm được truyền vào hàm khác như argument để được gọi lại sau — ví dụ: `setTimeout(() => console.log('done'), 1000)` truyền arrow function làm callback. JavaScript dùng callbacks vì là single-threaded: thay vì chặn (block) chờ tác vụ dài như đọc file hay gọi API, JS đăng ký callback và tiếp tục chạy code khác, khi tác vụ xong thì gọi callback. Đây là nền tảng của lập trình bất đồng bộ trong JS, dù ngày nay đã có Promise và async/await thay thế cho các trường hợp phức tạp.",
    q_en: "What is a callback function? Why does JavaScript use callbacks?",
    a_en: "A callback is a function passed into another function as an argument to be called later — for example: `setTimeout(() => console.log('done'), 1000)` passes an arrow function as a callback. JavaScript uses callbacks because it is single-threaded: instead of blocking while waiting for long tasks like file reads or API calls, JS registers a callback and continues running other code, then invokes the callback when the task completes. This is the foundation of asynchronous programming in JS, though today Promises and async/await replace callbacks for complex cases.",
  },
  {
    id: 228,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Higher-order function là gì? Cho ví dụ.",
    a: "Higher-order function là hàm nhận hàm khác làm argument hoặc trả về hàm. \n\n**Ví dụ:** map(), filter(), reduce() là HOF nhận callback. Hàm tạo middleware trong Express cũng là HOF. HOF là nền tảng của lập trình hàm (functional programming) trong JavaScript.",
    q_en: "What is a higher-order function? Give an example.",
    a_en: "A higher-order function is a function that takes another function as an argument or returns a function. Examples: map(), filter(), reduce() are HOFs that accept callbacks. Express middleware factories are also HOFs. HOFs are the foundation of functional programming in JavaScript.",
  },
  {
    id: 229,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "IIFE (Immediately Invoked Function Expression) là gì và dùng để làm gì?",
    a: "IIFE là hàm được định nghĩa và gọi ngay lập tức: `(function() { const secret = 42; })()` — biến secret không lọt ra global scope. Cú pháp arrow function: `(() => { ... })()`. Trước ES6, IIFE là cách duy nhất để tạo scope riêng vì chỉ có function scope. Dùng để: tránh ô nhiễm global scope, thực thi code khởi tạo một lần, tạo module pattern với private state. Ngày nay ít dùng hơn do có ES modules và block scope với `let`/`const`, nhưng vẫn hay gặp trong code cũ.",
    q_en: "What is an IIFE (Immediately Invoked Function Expression) and what is it used for?",
    a_en: "An IIFE is a function that is defined and called immediately: `(function() { const secret = 42; })()` — the variable secret does not leak into the global scope. Arrow function syntax: `(() => { ... })()`. Before ES6, IIFEs were the only way to create a private scope since only function scope existed. Uses: avoid polluting global scope, run initialization code once, create a module pattern with private state. Less common today due to ES modules and block scope with `let`/`const`, but still encountered in legacy code.",
  },
  {
    id: 230,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Pure function là gì? Tại sao pure functions quan trọng?",
    a: "Pure function là hàm luôn trả về kết quả giống nhau với cùng input và không có side effects — không thay đổi state ngoài, không gọi API, không modify argument truyền vào. \n\n**Ví dụ:** `const add = (a, b) => a + b` là pure, còn `const push = (arr, val) => { arr.push(val); return arr; }` là impure vì modify arr gốc. Pure functions dễ test (không cần mock), dễ debug, hỗ trợ memoization và là nền tảng của functional programming. Trong React, components và reducers nên là pure functions.",
    q_en: "What is a pure function? Why are pure functions important?",
    a_en: "A pure function always returns the same result for the same input and has no side effects — it does not change external state, make API calls, or modify passed-in arguments. \n\n**Example:** `const add = (a, b) => a + b` is pure, while `const push = (arr, val) => { arr.push(val); return arr; }` is impure because it modifies the original arr. Pure functions are easy to test (no mocking needed), easy to debug, support memoization, and are the foundation of functional programming. In React, components and reducers should be pure functions.",
  },
  {
    id: 231,
    category: "JavaScript",
    subcategory: "Functions",
    level: "advanced",
    q: "Currying là gì? Cho ví dụ và trường hợp dùng thực tế.",
    a: "Currying chuyển hàm nhiều argument thành chuỗi hàm mỗi hàm nhận một argument: f(a,b,c) thành f(a)(b)(c). \n\n**Ví dụ:** `const multiply = (a) => (b) => a * b; const double = multiply(2); double(5) // 10`. Dùng cho partial application, compose functions, tạo hàm chuyên biệt.",
    q_en: "What is currying? Give an example and a real-world use case.",
    a_en: "Currying transforms a multi-argument function into a chain of functions each taking one argument: f(a,b,c) becomes f(a)(b)(c). \n\n**Example:** `const multiply = (a) => (b) => a * b; const double = multiply(2); double(5) // 10`. Used for partial application, composing functions, and creating specialized functions.",
  },
  {
    id: 232,
    category: "JavaScript",
    subcategory: "Functions",
    level: "advanced",
    q: "Memoization là gì? Cài đặt memoization đơn giản như thế nào?",
    a: "Memoization là kỹ thuật cache kết quả của hàm dựa trên input để tránh tính toán lại. Cài đặt: dùng Map hoặc object lưu {input: result}, kiểm tra cache trước khi tính. Hiệu quả với pure functions có tính toán nặng hoặc đệ quy như Fibonacci.",
    q_en: "What is memoization? How do you implement a simple memoize function?",
    a_en: "Memoization is a technique that caches function results based on input to avoid recomputation. Implementation: use a Map or object to store {input: result}, check the cache before computing. Effective with pure functions that involve heavy computation or recursion like Fibonacci.",
  },
  {
    id: 233,
    category: "JavaScript",
    subcategory: "Functions",
    level: "beginner",
    q: "Default parameters trong JavaScript là gì?",
    a: "Default parameters cho phép gán giá trị mặc định cho tham số khi không truyền vào hoặc truyền undefined: function greet(name = 'World'). Default value được evaluate tại runtime mỗi lần gọi hàm, không phải lúc định nghĩa, nên có thể là expression hoặc hàm gọi.",
    q_en: "What are default parameters in JavaScript?",
    a_en: "Default parameters allow assigning default values to parameters when they are not passed or are undefined: function greet(name = 'World'). Default values are evaluated at runtime each time the function is called, not at definition time, so they can be expressions or function calls.",
  },
  {
    id: 234,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Rest parameters (...args) là gì? Khác gì arguments object?",
    a: "Rest parameters `(...args)` thu thập tất cả tham số còn lại thành Array thực sự: `function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }`. Khác `arguments` object ở 3 điểm: rest là Array thật (có `map`, `filter`...) trong khi arguments chỉ là array-like; rest chỉ chứa các params chưa được đặt tên, còn arguments chứa tất cả; arrow functions không có `arguments` nhưng có rest params. Bẫy: rest param phải là tham số cuối cùng — `(a, ...rest, b)` là syntax error.",
    q_en: "What are rest parameters (...args)? How do they differ from the arguments object?",
    a_en: "Rest parameters `(...args)` collect all remaining parameters into a real Array: `function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }`. They differ from the `arguments` object in 3 ways: rest is a true Array (has `map`, `filter`, etc.) while arguments is only array-like; rest only contains unnamed parameters while arguments contains all; arrow functions do not have `arguments` but do have rest params. Trap: the rest parameter must be the last parameter — `(a, ...rest, b)` is a syntax error.",
  },
  {
    id: 235,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Function composition là gì?",
    a: "Function composition là tạo hàm mới bằng cách kết hợp nhiều hàm, output của hàm này là input của hàm kia: `compose(f, g)(x) = f(g(x))`. \n\n**Ví dụ:** `const process = compose(trim, toLowerCase, removeSpaces)` tạo pipeline xử lý string. Implement bằng reduce: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)`. `pipe` là ngược chiều (trái sang phải, dễ đọc hơn). Hữu ích để tạo data transformation pipelines không cần biến trung gian, code theo functional style.",
    q_en: "What is function composition?",
    a_en: "Function composition creates a new function by combining multiple functions where the output of one becomes the input of another: `compose(f, g)(x) = f(g(x))`. \n\n**Example:** `const process = compose(trim, toLowerCase, removeSpaces)` creates a string processing pipeline. Implemented with reduce: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)`. `pipe` is the reverse direction (left to right, easier to read). Useful for creating data transformation pipelines without intermediate variables in a functional style.",
  },
  {
    id: 236,
    category: "JavaScript",
    subcategory: "Functions",
    level: "beginner",
    q: "Sự khác biệt giữa return và không có return trong arrow function là gì?",
    a: "Arrow function một dòng không có `{}` tự động return (implicit return): `x => x * 2`. Nếu có `{}` phải dùng return tường minh: `x => { return x * 2; }`. Bẫy phổ biến nhất: return object literal phải bọc trong ngoặc đơn `x => ({ value: x })` — nếu không có `()`, JS hiểu `{}` là function body chứ không phải object, hàm sẽ trả về undefined. Hay gặp khi dùng `.map()` để transform array thành array of objects.",
    q_en: "What is the difference between return and no return in arrow functions?",
    a_en: "Single-line arrow functions without `{}` automatically return (implicit return): `x => x * 2`. With `{}`, you must use an explicit return: `x => { return x * 2; }`. The most common trap: returning an object literal requires wrapping in parentheses `x => ({ value: x })` — without `()`, JS interprets `{}` as a function body, not an object, and the function returns undefined. Frequently encountered when using `.map()` to transform an array into an array of objects.",
  },
  {
    id: 237,
    category: "JavaScript",
    subcategory: "Functions",
    level: "advanced",
    q: "Generator function là gì? Dùng khi nào?",
    a: `Generator function dùng \`function*\` và \`yield\`, trả về iterator có thể pause và resume. Mỗi lần gọi \`next()\` thực thi đến yield tiếp theo và trả về \`{value, done}\`.
\`\`\`javascript
function* counter() {
  let n = 0;
  while (true) {
    yield n++;
  }
}
const gen = counter();
gen.next(); // { value: 0, done: false }
gen.next(); // { value: 1, done: false }
\`\`\`
Dùng để tạo infinite sequences, lazy evaluation, hoặc kiểm soát luồng bất đồng bộ (trước khi có async/await).`,
    q_en: "What is a generator function? When should you use one?",
    a_en: `Generator functions use \`function*\` and \`yield\`, returning an iterator that can be paused and resumed. Each call to \`next()\` executes to the next yield and returns \`{value, done}\`.
\`\`\`javascript
function* counter() {
  let n = 0;
  while (true) {
    yield n++;
  }
}
const gen = counter();
gen.next(); // { value: 0, done: false }
gen.next(); // { value: 1, done: false }
\`\`\`
Used to create infinite sequences, lazy evaluation, or control asynchronous flow (before async/await existed).`,
  },
  {
    id: 238,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Callback hell là gì? Các giải pháp để tránh?",
    a: "Callback hell là khi nhiều callbacks lồng nhau tạo code hình kim tự tháp, khó đọc và maintain — ví dụ: `getUser(id, (user) => getPosts(user, (posts) => getComments(posts[0], (comments) => ...)))`. Dễ xảy ra khi xử lý nhiều tác vụ async phụ thuộc nhau theo kiểu cũ. Giải pháp theo thứ tự ưu tiên: dùng async/await (rõ nhất), Promise chaining, hoặc named functions thay anonymous callbacks. Trong dự án thực tế, async/await là tiêu chuẩn hiện đại và nên dùng mặc định.",
    q_en: "What is callback hell? What are solutions to avoid it?",
    a_en: "Callback hell is when multiple nested callbacks create pyramid-shaped code that is hard to read and maintain — for example: `getUser(id, (user) => getPosts(user, (posts) => getComments(posts[0], (comments) => ...)))`. It occurs when handling many sequential async tasks in the old style. Solutions in order of preference: use async/await (clearest), Promise chaining, or named functions instead of anonymous callbacks. In real projects, async/await is the modern standard and should be the default.",
  },
  {
    id: 239,
    category: "JavaScript",
    subcategory: "Functions",
    level: "advanced",
    q: "Tail call optimization là gì?",
    a: "Tail call là khi hàm return kết quả của một lần gọi hàm khác trực tiếp. Tail call optimization (TCO) cho phép engine tái sử dụng stack frame thay vì tạo mới, tránh stack overflow trong đệ quy. ES6 quy định TCO nhưng chỉ Safari thực sự implement đầy đủ.",
    q_en: "What is tail call optimization?",
    a_en: "A tail call is when a function directly returns the result of calling another function. Tail call optimization (TCO) allows the engine to reuse the stack frame instead of creating a new one, preventing stack overflow in recursion. ES6 specifies TCO but only Safari actually implements it fully.",
  },
  {
    id: 240,
    category: "JavaScript",
    subcategory: "Functions",
    level: "intermediate",
    q: "Function arity là gì?",
    a: "Arity là số lượng tham số mà hàm khai báo — truy cập qua `fn.length`. \n\n**Lưu ý:** `.length` chỉ đếm params trước default value hoặc rest param, ví dụ `(a, b = 1, ...c) => {}` có length là 1. Tên gọi: unary (1 arg), binary (2 args), ternary (3), variadic (không cố định). Arity quan trọng trong currying (cần biết bao nhiêu arg để auto-curry) và function composition. Bẫy phỏng vấn: `[1,2,3].map(parseInt)` trả về `[1, NaN, NaN]` vì parseInt nhận 2 args và map truyền vào (value, index).",
    q_en: "What is function arity?",
    a_en: "Arity is the number of parameters a function declares — accessible via `fn.length`. \n\n**Note:** `.length` only counts params before default values or rest params, e.g., `(a, b = 1, ...c) => {}` has length 1. Names: unary (1 arg), binary (2 args), ternary (3), variadic (variable). Arity matters in currying (need to know how many args to auto-curry) and function composition. Interview trap: `[1,2,3].map(parseInt)` returns `[1, NaN, NaN]` because parseInt takes 2 args and map passes (value, index).",
  },

  // === JavaScript: this & Binding (241-250) ===
  {
    id: 241,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "intermediate",
    q: "Quy tắc xác định giá trị của this trong JavaScript là gì?",
    a: "this được xác định theo 4 quy tắc ưu tiên giảm dần: 1) new binding (constructor), 2) explicit binding (call/apply/bind), 3) implicit binding (method call obj.fn()), 4) default binding (global/undefined trong strict mode). Arrow functions không có this riêng, kế thừa từ lexical scope.",
    q_en: "What are the rules for determining the value of this in JavaScript?",
    a_en: "this is determined by 4 rules in decreasing priority: 1) new binding (constructor), 2) explicit binding (call/apply/bind), 3) implicit binding (method call obj.fn()), 4) default binding (global/undefined in strict mode). Arrow functions have no own this; they inherit from lexical scope.",
  },
  {
    id: 242,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "beginner",
    q: "strict mode ảnh hưởng đến this như thế nào?",
    a: "Trong strict mode, this ở hàm thông thường là undefined thay vì global object (window/global). Điều này giúp phát hiện lỗi khi vô tình gọi hàm như function thay vì method. Kích hoạt bằng 'use strict'; ở đầu file hoặc hàm. ES modules tự động bật strict mode.",
    q_en: "How does strict mode affect this?",
    a_en: "In strict mode, this inside a regular function is undefined instead of the global object (window/global). This helps catch bugs when a function is accidentally called as a function rather than a method. Enable with 'use strict'; at the top of a file or function. ES modules automatically enable strict mode.",
  },
  {
    id: 243,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "intermediate",
    q: "Sự khác biệt giữa call(), apply() và bind() là gì?",
    a: "`call(thisArg, arg1, arg2)` gọi hàm ngay với this chỉ định, truyền args riêng lẻ. `apply(thisArg, [arg1, arg2])` gọi ngay nhưng truyền args dạng array — mẹo nhớ: apply = array. `bind(thisArg)` trả về hàm mới với this cố định, không gọi ngay. Ví dụ thực tế: `const greet = function(greeting) { return greeting + ' ' + this.name; }; greet.call({name: 'An'}, 'Hello')` trả về 'Hello An'. bind thường dùng khi truyền method như callback: `btn.addEventListener('click', obj.method.bind(obj))`.",
    q_en: "What is the difference between call(), apply(), and bind()?",
    a_en: "`call(thisArg, arg1, arg2)` calls the function immediately with a specified this, passing args individually. `apply(thisArg, [arg1, arg2])` calls immediately but passes args as an array — memory tip: apply = array. `bind(thisArg)` returns a new function with a fixed this, does not call immediately. Practical example: `const greet = function(greeting) { return greeting + ' ' + this.name; }; greet.call({name: 'An'}, 'Hello')` returns 'Hello An'. bind is typically used when passing a method as a callback: `btn.addEventListener('click', obj.method.bind(obj))`.",
  },
  {
    id: 244,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "intermediate",
    q: "Tại sao arrow function không phù hợp làm method trong object?",
    a: "Arrow function không có this riêng, kế thừa this từ lexical scope nơi nó được định nghĩa (thường là global hoặc module). Khi dùng làm method, this không trỏ đến object chứa method. Dùng function thông thường cho methods, arrow function cho callbacks bên trong method.",
    q_en: "Why is an arrow function unsuitable as an object method?",
    a_en: "Arrow functions have no own this; they inherit this from the lexical scope where they are defined (often global or module). When used as a method, this does not point to the containing object. Use regular functions for methods, and arrow functions for callbacks inside methods.",
  },
  {
    id: 245,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "intermediate",
    q: "Constructor function và new keyword hoạt động như thế nào?",
    a: "Khi gọi `new MyFunc()`, JS thực hiện 4 bước: 1) Tạo object rỗng mới, 2) Gán `MyFunc.prototype` làm prototype của object đó, 3) Chạy constructor với `this` là object mới, 4) Tự động return `this` — trừ khi constructor return tường minh một object khác. \n\n**Ví dụ:** `function Person(name) { this.name = name; } const p = new Person('An')` tạo object `{name: 'An'}` với `Person.prototype` trong prototype chain. Bẫy: quên `new` sẽ khiến `this` trỏ vào global object (hoặc undefined ở strict mode), gây bug khó tìm.",
    q_en: "How do constructor functions and the new keyword work?",
    a_en: "When `new MyFunc()` is called, JS performs 4 steps: 1) Create a new empty object, 2) Set `MyFunc.prototype` as the object's prototype, 3) Run the constructor with `this` as the new object, 4) Automatically return `this` — unless the constructor explicitly returns another object. \n\n**Example:** `function Person(name) { this.name = name; } const p = new Person('An')` creates `{name: 'An'}` with `Person.prototype` in the prototype chain. Trap: forgetting `new` causes `this` to point to the global object (or undefined in strict mode), causing hard-to-find bugs.",
  },
  {
    id: 246,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "advanced",
    q: "Method borrowing (method stealing) là gì?",
    a: "Method borrowing là dùng call/apply để mượn method của một object áp dụng cho object khác. \n\n**Ví dụ:** Array.prototype.slice.call(arrayLike) để chuyển array-like thành array thực. Hoặc Object.prototype.toString.call(value) để lấy kiểu dữ liệu chính xác.",
    q_en: "What is method borrowing (method stealing)?",
    a_en: "Method borrowing uses call/apply to borrow a method from one object and apply it to another. \n\n**Example:** Array.prototype.slice.call(arrayLike) to convert an array-like to a real array. Or Object.prototype.toString.call(value) to get the accurate data type.",
  },
  {
    id: 247,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "advanced",
    q: "Hard binding là gì?",
    a: "Hard binding là tạo wrapper function gọi hàm gốc với this cố định bằng apply/call, đảm bảo this không thay đổi. bind() tạo hard binding. Tuy nhiên, `new` operator là ngoại lệ duy nhất — new sẽ bỏ qua this đã bind và tạo instance mới.",
    q_en: "What is hard binding?",
    a_en: "Hard binding creates a wrapper function that calls the original function with a fixed this via apply/call, ensuring this never changes. bind() creates a hard binding. However, the `new` operator is the only exception — new will override the bound this and create a new instance.",
  },
  {
    id: 248,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "beginner",
    q: "this trong class JavaScript là gì?",
    a: "Trong class, this trong constructor và methods trỏ đến instance được tạo. Tuy nhiên, khi truyền method như callback, mất this binding. Giải pháp: dùng arrow function trong class fields (class fields tự bind), hoặc bind trong constructor, hoặc dùng .bind() khi truyền callback.",
    q_en: "What is this in a JavaScript class?",
    a_en: "In a class, this inside the constructor and methods points to the created instance. However, when passing a method as a callback, the this binding is lost. Solutions: use arrow functions in class fields (class fields auto-bind), bind in the constructor, or use .bind() when passing the callback.",
  },
  {
    id: 249,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "intermediate",
    q: "Event handler và this hoạt động như thế nào?",
    a: "Khi gắn event handler bằng addEventListener, this trong handler trỏ đến DOM element nhận event. Nếu handler là arrow function, this kế thừa từ context bên ngoài. Khi dùng class methods làm event handler cần bind hoặc dùng arrow function để giữ this của instance.",
    q_en: "How do event handlers and this work?",
    a_en: "When attaching an event handler with addEventListener, this inside the handler points to the DOM element receiving the event. If the handler is an arrow function, this inherits from the outer context. When using class methods as event handlers, you need to bind or use an arrow function to preserve the instance's this.",
  },
  {
    id: 250,
    category: "JavaScript",
    subcategory: "this & Binding",
    level: "advanced",
    q: "Soft binding là gì và khác hard binding như thế nào?",
    a: "Soft binding cho phép ghi đè this binding (khác hard binding không thể ghi đè) nhưng fallback về giá trị mặc định thay vì global. Implement bằng cách kiểm tra this trong wrapper: nếu là global/undefined thì dùng default. Ít dùng thực tế, chủ yếu trong thư viện.",
    q_en: "What is soft binding and how does it differ from hard binding?",
    a_en: "Soft binding allows overriding the this binding (unlike hard binding which cannot be overridden) but falls back to a default value instead of global. Implemented by checking this in a wrapper: if it is global/undefined, use the default. Rarely used in practice, mainly in libraries.",
  },

  // === JavaScript: Prototype (251-260) ===
  {
    id: 251,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "Prototype chain trong JavaScript là gì?",
    a: "Mỗi object có [[Prototype]] internal slot trỏ đến prototype object. Khi truy cập property không tìm thấy trên object, JS tìm lên prototype, rồi prototype của prototype, cho đến khi gặp null. Đây là cơ chế kế thừa của JavaScript, khác với class-based inheritance.",
    q_en: "What is the prototype chain in JavaScript?",
    a_en: "Every object has an [[Prototype]] internal slot pointing to a prototype object. When a property is not found on an object, JS looks up the prototype, then the prototype's prototype, until reaching null. This is JavaScript's inheritance mechanism, different from class-based inheritance.",
  },
  {
    id: 252,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "beginner",
    q: "__proto__ và prototype khác nhau như thế nào?",
    a: "__proto__ là accessor property trên object instance trỏ đến prototype của nó. prototype là property trên function (constructor), là object sẽ được gán cho __proto__ của instance khi dùng new. Object.getPrototypeOf() là cách chuẩn để truy cập __proto__.",
    q_en: "What is the difference between __proto__ and prototype?",
    a_en: "__proto__ is an accessor property on an object instance pointing to its prototype. prototype is a property on functions (constructors), and is the object that will be assigned to an instance's __proto__ when using new. Object.getPrototypeOf() is the standard way to access __proto__.",
  },
  {
    id: 253,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "Object.create() hoạt động như thế nào?",
    a: "Object.create(proto) tạo object mới với [[Prototype]] được set thành proto. Cho phép kế thừa trực tiếp từ object cụ thể mà không cần constructor. Object.create(null) tạo object không có prototype nào, dùng làm pure dictionary. Đây là cách implement prototypal inheritance thuần túy.",
    q_en: "How does Object.create() work?",
    a_en: "Object.create(proto) creates a new object with its [[Prototype]] set to proto. It allows direct inheritance from a specific object without a constructor. Object.create(null) creates an object with no prototype, useful as a pure dictionary. This is the way to implement pure prototypal inheritance.",
  },
  {
    id: 254,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "Prototypal inheritance khác class-based inheritance như thế nào?",
    a: "Class-based inheritance (Java, C++) tạo bản sao của class blueprint. Prototypal inheritance: objects kế thừa trực tiếp từ objects khác qua prototype chain, không có blueprint. JavaScript classes (ES6) chỉ là syntactic sugar trên prototypal inheritance, bên dưới vẫn dùng prototype.",
    q_en: "How does prototypal inheritance differ from class-based inheritance?",
    a_en: "Class-based inheritance (Java, C++) creates copies of a class blueprint. Prototypal inheritance: objects inherit directly from other objects via the prototype chain, with no blueprint. JavaScript classes (ES6) are just syntactic sugar over prototypal inheritance — under the hood it still uses prototypes.",
  },
  {
    id: 255,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "instanceof operator hoạt động như thế nào?",
    a: "instanceof kiểm tra xem prototype của constructor có xuất hiện trong prototype chain của object không: obj instanceof Constructor kiểm tra Constructor.prototype có trong chain của obj. Có thể tùy chỉnh bằng Symbol.hasInstance. Không đáng tin cậy khi làm việc với nhiều realms (iframe, vm).",
    q_en: "How does the instanceof operator work?",
    a_en: "instanceof checks whether the constructor's prototype appears in the object's prototype chain: obj instanceof Constructor checks if Constructor.prototype is in obj's chain. Can be customized via Symbol.hasInstance. Not reliable when working across multiple realms (iframes, vm).",
  },
  {
    id: 256,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "advanced",
    q: "hasOwnProperty() và in operator khác nhau như thế nào?",
    a: "hasOwnProperty() kiểm tra property có trực tiếp trên object hay không, không kiểm tra prototype chain. in operator kiểm tra cả object lẫn toàn bộ prototype chain. Object.hasOwn() là cách mới hơn, an toàn hơn hasOwnProperty() vì không bị ghi đè.",
    q_en: "How do hasOwnProperty() and the in operator differ?",
    a_en: "hasOwnProperty() checks whether a property exists directly on the object, not in the prototype chain. The in operator checks both the object and the entire prototype chain. Object.hasOwn() is the newer, safer alternative to hasOwnProperty() because it cannot be overridden.",
  },
  {
    id: 257,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "advanced",
    q: "Prototype pollution là gì và cách phòng tránh?",
    a: "Prototype pollution xảy ra khi kẻ tấn công thêm property vào Object.prototype, ảnh hưởng đến tất cả objects. Thường qua merge/clone functions không an toàn (obj[key] = value với key là __proto__). Phòng tránh: dùng Object.create(null), kiểm tra key, dùng Map thay object, freeze prototype.",
    q_en: "What is prototype pollution and how do you prevent it?",
    a_en: "Prototype pollution occurs when an attacker adds properties to Object.prototype, affecting all objects. Often happens through unsafe merge/clone functions (obj[key] = value where key is __proto__). Prevention: use Object.create(null), validate keys, use Map instead of plain objects, freeze the prototype.",
  },
  {
    id: 258,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "Object.setPrototypeOf() có hiệu suất tốt không?",
    a: "Object.setPrototypeOf() thay đổi prototype sau khi tạo object, gây ảnh hưởng nghiêm trọng đến hiệu suất vì V8 engine không thể tối ưu hóa (hidden classes bị vô hiệu hóa). Tốt hơn là dùng Object.create() khi tạo để set prototype ngay từ đầu.",
    q_en: "Is Object.setPrototypeOf() good for performance?",
    a_en: "Object.setPrototypeOf() changes the prototype after an object is created, causing a serious performance impact because V8 cannot optimize (hidden classes are invalidated). It is better to use Object.create() at creation time to set the prototype from the start.",
  },
  {
    id: 259,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "advanced",
    q: "Mixin pattern trong JavaScript là gì?",
    a: "Mixin là cách thêm behavior vào object/class mà không dùng kế thừa đơn. Implement bằng Object.assign() để copy methods vào prototype, hoặc dùng higher-order functions nhận class và trả về class mở rộng. Giải quyết vấn đề diamond problem của đa kế thừa.",
    q_en: "What is the mixin pattern in JavaScript?",
    a_en: "A mixin is a way to add behavior to an object/class without using single inheritance. Implemented via Object.assign() to copy methods onto a prototype, or using higher-order functions that receive a class and return an extended class. Solves the diamond problem of multiple inheritance.",
  },
  {
    id: 260,
    category: "JavaScript",
    subcategory: "Prototype",
    level: "intermediate",
    q: "Tại sao không nên extend built-in prototypes?",
    a: "Extending built-in prototypes (Array.prototype.myMethod) có thể xung đột với future JavaScript features, gây bug trong thư viện bên thứ ba chia sẻ environment, và khó debug. Thay vào đó dùng utility functions, subclassing với class extends, hoặc wrapper classes.",
    q_en: "Why should you not extend built-in prototypes?",
    a_en: "Extending built-in prototypes (Array.prototype.myMethod) can conflict with future JavaScript features, cause bugs in third-party libraries sharing the same environment, and be difficult to debug. Instead, use utility functions, subclassing with class extends, or wrapper classes.",
  },

  // === JavaScript: ES6+ (261-280) ===
  {
    id: 261,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "Destructuring assignment là gì? Cho ví dụ với array và object.",
    a: "Destructuring cho phép giải nén giá trị từ array/object vào biến riêng lẻ. Array: const [a, b] = [1, 2]. Object: const {name, age} = person. Hỗ trợ default values, alias, và nested destructuring. Rất hữu ích với function parameters và khi làm việc với API responses.",
    q_en: "What is destructuring assignment? Give examples with arrays and objects.",
    a_en: "Destructuring allows unpacking values from arrays/objects into separate variables. Array: const [a, b] = [1, 2]. Object: const {name, age} = person. Supports default values, aliases, and nested destructuring. Very useful with function parameters and when working with API responses.",
  },
  {
    id: 262,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "Spread operator (...) và rest parameters (...) khác nhau như thế nào?",
    a: "Spread mở rộng iterable thành từng phần tử riêng lẻ (dùng trong function calls, array literals, object literals). Rest thu thập nhiều phần tử thành một array (dùng trong function parameters). Cú pháp giống nhau nhưng ngữ cảnh ngược nhau: spread 'mở ra', rest 'thu lại'.",
    q_en: "How do the spread operator (...) and rest parameters (...) differ?",
    a_en: "Spread expands an iterable into individual elements (used in function calls, array literals, object literals). Rest collects multiple elements into an array (used in function parameters). Same syntax but opposite purpose: spread 'spreads out', rest 'gathers together'.",
  },
  {
    id: 263,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "Template literals là gì? Có những tính năng gì?",
    a: "Template literals dùng backtick thay dấu nháy, hỗ trợ: interpolation ${expression}, multi-line strings không cần \\n, tagged templates (cho styled-components, SQL query builders). Tagged templates là function nhận template strings và expressions làm arguments.",
    q_en: "What are template literals? What features do they have?",
    a_en: "Template literals use backticks instead of quotes, supporting: interpolation ${expression}, multi-line strings without \\\\n, and tagged templates (used by styled-components, SQL query builders). Tagged templates are functions that receive template strings and expressions as arguments.",
  },
  {
    id: 264,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "Class trong ES6 là gì? Có điểm gì khác với function constructor?",
    a: `Class là cú pháp OOP rõ ràng hơn để tạo objects.
\`\`\`javascript
class Animal {
  #name; // private field
  constructor(name) {
    this.#name = name;
  }
  speak() {
    return this.#name + ' speaks';
  }
  static create(name) {
    return new Animal(name);
  }
}
const a = Animal.create('Cat');
a.speak(); // 'Cat speaks'
\`\`\`
Khác function constructor: class không thể gọi không có \`new\` (throw TypeError), methods không enumerable (không xuất hiện trong for...in), và phải khai báo trước khi dùng (không hoisted). Bên dưới vẫn dùng prototype chain — class chỉ là syntactic sugar.`,
    q_en: "What are ES6 classes? How do they differ from function constructors?",
    a_en: `Classes are a clearer OOP syntax for creating objects.
\`\`\`javascript
class Animal {
  #name; // private field
  constructor(name) {
    this.#name = name;
  }
  speak() {
    return this.#name + ' speaks';
  }
  static create(name) {
    return new Animal(name);
  }
}
const a = Animal.create('Cat');
a.speak(); // 'Cat speaks'
\`\`\`
Differences from function constructors: classes cannot be called without \`new\` (throws TypeError), methods are non-enumerable (do not appear in for...in), and they must be declared before use (not hoisted). Under the hood they still use prototype chains — classes are just syntactic sugar.`,
  },
  {
    id: 265,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Private class fields (#) là gì?",
    a: "Private fields khai báo với # prefix chỉ có thể truy cập trong class: #name. Không thể truy cập từ bên ngoài kể cả subclass, ném SyntaxError. Đây là private thực sự (khác convention _ prefix), được implement ở engine level. Cũng có private methods (#method()) và static private.",
    q_en: "What are private class fields (#)?",
    a_en: "Private fields declared with the # prefix can only be accessed within the class: #name. They cannot be accessed from outside, including from subclasses, throwing a SyntaxError. This is true privacy (unlike the convention of _ prefix), implemented at the engine level. Private methods (#method()) and static private fields are also supported.",
  },
  {
    id: 266,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "for...of và for...in khác nhau như thế nào?",
    a: "for...in lặp qua enumerable property names của object (và prototype chain). for...of lặp qua values của iterable objects (Array, String, Map, Set, Generator). for...of thường dùng cho arrays, for...in cho objects. Tránh for...in với arrays do có thể lặp qua inherited properties.",
    q_en: "What is the difference between for...of and for...in?",
    a_en: "for...in iterates over enumerable property names of an object (including the prototype chain). for...of iterates over the values of iterable objects (Array, String, Map, Set, Generator). for...of is typically used with arrays, for...in with objects. Avoid for...in with arrays as it may iterate over inherited properties.",
  },
  {
    id: 267,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Map và WeakMap khác nhau như thế nào?",
    a: "Map lưu key-value với key là bất kỳ type nào, iterable, có size. WeakMap chỉ nhận objects làm key, không iterable, không có size. Key trong WeakMap là weak reference: nếu object bị garbage collect, entry tự động bị xóa. WeakMap dùng để associate data với object mà không ngăn GC.",
    q_en: "What is the difference between Map and WeakMap?",
    a_en: "Map stores key-value pairs where keys can be any type, is iterable, and has a size. WeakMap only accepts objects as keys, is not iterable, and has no size property. Keys in WeakMap are weak references: if the object is garbage collected, the entry is automatically removed. WeakMap is used to associate data with an object without preventing garbage collection.",
  },
  {
    id: 268,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Set và WeakSet là gì?",
    a: "Set lưu collection của unique values bất kỳ type nào, iterable, có size. WeakSet chỉ chứa objects, không iterable, weak references (tránh memory leak). Set dùng để loại bỏ duplicate, kiểm tra membership nhanh. WeakSet dùng để track objects mà không ngăn GC.",
    q_en: "What are Set and WeakSet?",
    a_en: "Set stores a collection of unique values of any type, is iterable, and has a size. WeakSet only contains objects, is not iterable, and uses weak references (to avoid memory leaks). Set is used to remove duplicates and for fast membership checks. WeakSet is used to track objects without preventing garbage collection.",
  },
  {
    id: 269,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Optional chaining (?.) và nullish coalescing (??) là gì?",
    a: "Optional chaining `obj?.prop` trả về undefined thay vì throw TypeError nếu obj là null/undefined — ví dụ `user?.address?.city` an toàn kể cả khi user hoặc address là null. Nullish coalescing `a ?? b` trả về b chỉ khi a là null/undefined, khác `||` vốn trả về b với mọi falsy (0, '', false). Kết hợp cả hai: `user?.profile?.age ?? 18` để lấy tuổi hoặc default 18. Bẫy: `0 || 5` trả về 5 nhưng `0 ?? 5` trả về 0 — dùng ?? khi 0 hoặc chuỗi rỗng là giá trị hợp lệ.",
    q_en: "What are optional chaining (?.) and nullish coalescing (??) operators?",
    a_en: "Optional chaining `obj?.prop` returns undefined instead of throwing a TypeError if obj is null/undefined — for example `user?.address?.city` is safe even when user or address is null. Nullish coalescing `a ?? b` returns b only when a is null/undefined, unlike `||` which returns b for any falsy value (0, '', false). Combined: `user?.profile?.age ?? 18` to get age or default to 18. Trap: `0 || 5` returns 5 but `0 ?? 5` returns 0 — use ?? when 0 or empty string are valid values.",
  },
  {
    id: 270,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "ES modules (import/export) là gì?",
    a: "ES modules là hệ thống module chính thức của JavaScript. export để export bindings, import để import. Static analysis: imports/exports được phân tích tại parse time, không thể dynamic (dùng import() cho dynamic). Module có own scope, strict mode by default, live bindings.",
    q_en: "What are ES modules (import/export)?",
    a_en: "ES modules are JavaScript's official module system. export exports bindings, import imports them. Static analysis: imports/exports are analyzed at parse time and cannot be dynamic (use import() for dynamic imports). Modules have their own scope, strict mode by default, and live bindings.",
  },
  {
    id: 271,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Proxy và Reflect trong ES6 là gì?",
    a: "Proxy bọc object và chặn các operation (get, set, has, deleteProperty...) bằng handler traps. Reflect cung cấp methods tương ứng với các traps. Dùng để tạo reactive objects (Vue 3), validation, logging, lazy initialization, hay implement Observable.",
    q_en: "What are Proxy and Reflect in ES6?",
    a_en: "Proxy wraps an object and intercepts operations (get, set, has, deleteProperty...) via handler traps. Reflect provides methods corresponding to the traps. Used to create reactive objects (Vue 3), validation, logging, lazy initialization, or to implement Observable.",
  },
  {
    id: 272,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "advanced",
    q: "Symbol.iterator và iterable protocol là gì?",
    a: "Iterable protocol yêu cầu object có method Symbol.iterator trả về iterator object (có next() trả về {value, done}). Arrays, Strings, Maps, Sets implement sẵn. Custom iterables cho phép dùng for...of, spread, destructuring. Generator functions tự động tạo iterable.",
    q_en: "What are Symbol.iterator and the iterable protocol?",
    a_en: "The iterable protocol requires an object to have a Symbol.iterator method that returns an iterator object (with next() returning {value, done}). Arrays, Strings, Maps, and Sets implement this by default. Custom iterables allow using for...of, spread, and destructuring. Generator functions automatically create iterables.",
  },
  {
    id: 273,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "advanced",
    q: "Tagged template literals hoạt động như thế nào?",
    a: "Tagged template là hàm gọi với template: tag`text ${expr}`. Hàm nhận (strings, ...values) - strings là mảng các phần text tĩnh, values là các expressions. Dùng trong styled-components (CSS-in-JS), sql template literals (prevent injection), i18n, highlight code.",
    q_en: "How do tagged template literals work?",
    a_en: "A tagged template is a function called with a template: tag`text ${expr}`. The function receives (strings, ...values) — strings is an array of static text parts, values are the expressions. Used in styled-components (CSS-in-JS), SQL template literals (injection prevention), i18n, and code highlighting.",
  },
  {
    id: 274,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Object.assign() và spread operator khi copy object khác nhau như thế nào?",
    a: "Cả hai đều shallow copy. Object.assign() copy vào object đích hiện có, trigger setters. Spread tạo plain object mới, không trigger setters. Object.assign() copy enumerable own properties bao gồm cả Symbol. Với nested objects, cả hai chỉ copy reference, không deep copy.",
    q_en: "How do Object.assign() and the spread operator differ when copying objects?",
    a_en: "Both perform shallow copies. Object.assign() copies into an existing target object and triggers setters. Spread creates a new plain object without triggering setters. Object.assign() copies enumerable own properties including Symbols. For nested objects, both only copy the reference — neither performs a deep copy.",
  },
  {
    id: 275,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Array destructuring với swap variables hoạt động như thế nào?",
    a: "Destructuring cho phép swap không cần temp variable: `[a, b] = [b, a]`. Cú pháp này tạo array mới từ [b, a] rồi destructure vào a và b cùng lúc, khác hoàn toàn cách truyền thống phải dùng biến tạm `let tmp = a; a = b; b = tmp`. Quan trọng trong thuật toán sắp xếp (như bubble sort) vì giúp code ngắn gọn và ít lỗi hơn. Phỏng vấn hay hỏi về destructuring nâng cao — nên biết cả nested destructuring và default values.",
    q_en: "How does array destructuring variable swapping work?",
    a_en: "Destructuring allows swapping without a temporary variable: `[a, b] = [b, a]`. This syntax creates a new array from [b, a] and destructures into a and b simultaneously, completely unlike the traditional approach requiring a temp variable `let tmp = a; a = b; b = tmp`. Important in sorting algorithms (like bubble sort) for shorter, less error-prone code. Interviews often ask about advanced destructuring — also know nested destructuring and default values.",
  },
  {
    id: 276,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "advanced",
    q: "Logical assignment operators (&&=, ||=, ??=) là gì?",
    a: "Logical assignment kết hợp phép logic với phép gán. `&&=` gán chỉ khi bên trái truthy: `user.name &&= user.name.trim()` — chỉ trim nếu name có giá trị. `||=` gán khi bên trái falsy: `config.timeout ||= 3000` để đặt default. `??=` gán chỉ khi null/undefined (an toàn hơn ||= vì không ghi đè 0 hay ''): `options.retries ??= 3`. Sự khác biệt quan trọng với ||= và ??=: nếu giá trị là 0 hoặc chuỗi rỗng, ||= sẽ ghi đè còn ??= thì không.",
    q_en: "What are logical assignment operators (&&=, ||=, ??=)?",
    a_en: "Logical assignment combines logical operations with assignment. `&&=` assigns only when the left side is truthy: `user.name &&= user.name.trim()` — only trims if name has a value. `||=` assigns when the left side is falsy: `config.timeout ||= 3000` to set a default. `??=` assigns only when null/undefined (safer than ||= since it will not overwrite 0 or ''): `options.retries ??= 3`. Key difference between ||= and ??=: if the value is 0 or empty string, ||= will overwrite it but ??= will not.",
  },
  {
    id: 277,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "advanced",
    q: "Array.from() vs spread operator khi chuyển đổi array-like là gì?",
    a: "Array.from(arrayLike) và [...arrayLike] đều tạo array từ iterable. Array.from() mạnh hơn: nhận array-like không phải iterable (có length và indexed), có tham số mapFn để transform, xử lý undefined holes. Spread yêu cầu đúng iterable protocol.",
    q_en: "What is the difference between Array.from() and the spread operator when converting array-likes?",
    a_en: "Array.from(arrayLike) and [...arrayLike] both create arrays from iterables. Array.from() is more powerful: it accepts array-like objects that are not iterable (having length and indexed elements), has a mapFn parameter for transformation, and handles undefined holes. Spread requires the proper iterable protocol.",
  },
  {
    id: 278,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "Object shorthand properties và computed property names là gì?",
    a: "Shorthand: nếu tên biến trùng key thì viết `{name}` thay `{name: name}` — rất phổ biến khi return object từ hàm: `return {id, name, email}`. Computed property names dùng [] để tính key động: `{[fieldName]: value}` cho phép key là biểu thức bất kỳ. Ví dụ thực tế: `const update = (key, val) => ({...state, [key]: val})` để update state theo key động. Cả hai tính năng này xuất hiện rất nhiều trong React và Redux code.",
    q_en: "What are object shorthand properties and computed property names?",
    a_en: "Shorthand: when the variable name matches the key, write `{name}` instead of `{name: name}` — very common when returning objects from functions: `return {id, name, email}`. Computed property names use [] to compute a key dynamically: `{[fieldName]: value}` allows any expression as a key. Practical example: `const update = (key, val) => ({...state, [key]: val})` to update state with a dynamic key. Both features appear frequently in React and Redux code.",
  },
  {
    id: 279,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "beginner",
    q: "String methods mới trong ES6+ như padStart, padEnd, includes, startsWith là gì?",
    a: "`includes(str)` kiểm tra có chứa substring không (thay indexOf !== -1). `startsWith(str)` / `endsWith(str)` kiểm tra đầu/cuối chuỗi. `padStart(len, char)` / `padEnd(len, char)` thêm ký tự vào đầu/cuối cho đủ độ dài — ví dụ `'5'.padStart(3, '0')` cho ra `'005'`, hữu ích để format số thứ tự. `trimStart()` / `trimEnd()` xóa whitespace một phía. `replaceAll(old, new)` thay thế tất cả occurrences, khác `replace()` chỉ thay lần đầu. Những methods này giúp code ngắn và dễ đọc hơn nhiều so với regex.",
    q_en: "What are the new String methods in ES6+ like padStart, padEnd, includes, startsWith?",
    a_en: "`includes(str)` checks if a string contains a substring (replaces indexOf !== -1). `startsWith(str)` / `endsWith(str)` checks the beginning/end of a string. `padStart(len, char)` / `padEnd(len, char)` pads the start/end to a specified length — e.g., `'5'.padStart(3, '0')` gives `'005'`, useful for formatting ordinal numbers. `trimStart()` / `trimEnd()` removes whitespace from one side. `replaceAll(old, new)` replaces all occurrences, unlike `replace()` which only replaces the first. These methods make code much shorter and more readable than regular expressions.",
  },
  {
    id: 280,
    category: "JavaScript",
    subcategory: "ES6+",
    level: "intermediate",
    q: "at() method cho Array và String là gì?",
    a: "`at(index)` truy cập phần tử với hỗ trợ negative index: `arr.at(-1)` lấy phần tử cuối, `arr.at(-2)` lấy phần tử áp cuối. Thay cho `arr[arr.length - 1]` vốn dài và dễ nhầm khi tính toán. Hoạt động với Array, String và TypedArray, không thay đổi mảng gốc. Không thể dùng cú pháp bracket `arr[-1]` vì JS sẽ coi -1 là string key của object, không phải index âm — đây là bẫy phỏng vấn phổ biến.",
    q_en: "What is the at() method for Array and String?",
    a_en: "`at(index)` accesses an element with support for negative indices: `arr.at(-1)` gets the last element, `arr.at(-2)` the second-to-last. Replaces `arr[arr.length - 1]` which is verbose and error-prone to compute. Works with Array, String, and TypedArray, and does not modify the original. You cannot use bracket syntax `arr[-1]` because JS treats -1 as a string key of the object, not a negative index — a common interview trap.",
  },

  // === JavaScript: Promise & Async (281-300) ===
  {
    id: 281,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "beginner",
    q: "Promise là gì? Có những trạng thái nào?",
    a: "Promise đại diện cho kết quả của một tác vụ bất đồng bộ sẽ có trong tương lai. Ba trạng thái: pending (đang chờ), fulfilled (thành công với giá trị), rejected (thất bại với lý do). Một khi fulfilled/rejected, trạng thái không thay đổi (immutable). Dùng .then()/.catch()/.finally() để handle.",
    q_en: "What is a Promise? What states does it have?",
    a_en: "A Promise represents the eventual result of an asynchronous operation. Three states: pending (waiting), fulfilled (succeeded with a value), rejected (failed with a reason). Once fulfilled or rejected, the state is immutable. Use .then()/.catch()/.finally() to handle it.",
  },
  {
    id: 282,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "beginner",
    q: ".then(), .catch() và .finally() hoạt động như thế nào?",
    a: "`.then(onFulfilled, onRejected)` nhận callback khi promise fulfilled hoặc rejected. `.catch(onRejected)` là shorthand cho `.then(null, onRejected)` — chỉ xử lý lỗi. `.finally(callback)` chạy dù fulfilled hay rejected, không nhận value, dùng để cleanup (ẩn loading spinner, đóng connection). Tất cả đều trả về Promise mới nên có thể chain tiếp. Bẫy phổ biến: không thêm `.catch()` ở cuối chain dẫn đến unhandled rejection — luôn kết thúc chain bằng `.catch()` trong production code.",
    q_en: "How do .then(), .catch(), and .finally() work?",
    a_en: "`.then(onFulfilled, onRejected)` accepts callbacks for when a promise is fulfilled or rejected. `.catch(onRejected)` is shorthand for `.then(null, onRejected)` — only handles errors. `.finally(callback)` runs regardless of fulfilled or rejected, receives no value, and is used for cleanup (hiding a loading spinner, closing a connection). All return a new Promise and can be chained. Common trap: not adding `.catch()` at the end of a chain leads to unhandled rejections — always end chains with `.catch()` in production code.",
  },
  {
    id: 283,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Promise.all(), Promise.race(), Promise.allSettled() và Promise.any() khác nhau như thế nào?",
    a: `So sánh 4 combinators của Promise:
\`\`\`javascript
const p1 = fetch('/api/a');
const p2 = fetch('/api/b');

// all(): fail-fast nếu có 1 reject
const [a, b] = await Promise.all([p1, p2]);

// race(): lấy kết quả đầu tiên (fulfilled hoặc rejected)
const first = await Promise.race([p1, p2]);

// allSettled(): chờ tất cả, không reject
const results = await Promise.allSettled([p1, p2]);
// results[0] = { status: 'fulfilled', value: ... }
// results[1] = { status: 'rejected', reason: ... }

// any(): fulfilled đầu tiên, reject chỉ khi tất cả reject
const fastest = await Promise.any([p1, p2]);
\`\`\``,
    q_en: "What is the difference between Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any()?",
    a_en: `Comparing the 4 Promise combinators:
\`\`\`javascript
const p1 = fetch('/api/a');
const p2 = fetch('/api/b');

// all(): fail-fast if any rejects
const [a, b] = await Promise.all([p1, p2]);

// race(): takes the first result (fulfilled or rejected)
const first = await Promise.race([p1, p2]);

// allSettled(): waits for all, never rejects
const results = await Promise.allSettled([p1, p2]);
// results[0] = { status: 'fulfilled', value: ... }
// results[1] = { status: 'rejected', reason: ... }

// any(): first to fulfill, rejects only if all reject
const fastest = await Promise.any([p1, p2]);
\`\`\``,
  },
  {
    id: 284,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Event loop trong JavaScript hoạt động như thế nào?",
    a: `JS single-threaded nhưng xử lý async nhờ event loop. Quy trình: (1) Chạy hết sync code trên Call Stack. (2) Xử lý hết Microtask queue. (3) Browser có thể render. (4) Lấy 1 Macrotask. (5) Quay lại bước 2.
\`\`\`javascript
console.log('1 sync');

setTimeout(() => console.log('4 macrotask'), 0);

Promise.resolve()
  .then(() => console.log('2 microtask'))
  .then(() => console.log('3 microtask 2'));

console.log('1b sync');
// Output: 1 sync → 1b sync → 2 microtask → 3 microtask 2 → 4 macrotask
\`\`\`
Microtasks luôn ưu tiên hơn macrotasks — \`Promise.resolve().then()\` chạy trước \`setTimeout(fn, 0)\`.`,
    q_en: "How does the JavaScript event loop work?",
    a_en: `JS is single-threaded but handles async via the event loop. The process: (1) Run all sync code on the Call Stack. (2) Process all Microtask queue entries. (3) Browser may render. (4) Take 1 Macrotask. (5) Go back to step 2.
\`\`\`javascript
console.log('1 sync');

setTimeout(() => console.log('4 macrotask'), 0);

Promise.resolve()
  .then(() => console.log('2 microtask'))
  .then(() => console.log('3 microtask 2'));

console.log('1b sync');
// Output: 1 sync → 1b sync → 2 microtask → 3 microtask 2 → 4 macrotask
\`\`\`
Microtasks always have priority over macrotasks — \`Promise.resolve().then()\` runs before \`setTimeout(fn, 0)\`.`,
  },
  {
    id: 285,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Microtask và macrotask khác nhau như thế nào?",
    a: "Microtasks: Promise callbacks (.then, .catch), queueMicrotask(), MutationObserver. Macrotasks (tasks): setTimeout, setInterval, setImmediate (Node.js), I/O callbacks, UI rendering. Sau mỗi macrotask, tất cả microtasks trong queue được xử lý hết. Thứ tự: sync code → microtasks → render → macrotask → ...",
    q_en: "What is the difference between microtasks and macrotasks?",
    a_en: "Microtasks: Promise callbacks (.then, .catch), queueMicrotask(), MutationObserver. Macrotasks (tasks): setTimeout, setInterval, setImmediate (Node.js), I/O callbacks, UI rendering. After each macrotask, all microtasks in the queue are processed. Order: sync code → microtasks → render → macrotask → ...",
  },
  {
    id: 286,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "beginner",
    q: "async/await là gì? Tại sao nó dễ hơn Promise chains?",
    a: `async/await là syntactic sugar trên Promises. \`async function\` luôn trả về Promise. \`await\` dừng thực thi cho đến khi Promise resolve.
\`\`\`javascript
// Promise chain
function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(res => res.json())
    .catch(err => console.error(err));
}

// async/await — dễ đọc hơn
async function fetchUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    const user = await res.json();
    const posts = await fetch(\`/api/posts/\${user.id}\`);
    return posts.json();
  } catch (err) {
    console.error(err);
  }
}
\`\`\`
Code trông như synchronous nhưng vẫn non-blocking. Dễ đọc hơn, dễ debug hơn, xử lý lỗi với try/catch tự nhiên hơn.`,
    q_en: "What is async/await? Why is it easier than Promise chains?",
    a_en: `async/await is syntactic sugar on top of Promises. An \`async function\` always returns a Promise. \`await\` pauses execution until the Promise resolves.
\`\`\`javascript
// Promise chain
function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(res => res.json())
    .catch(err => console.error(err));
}

// async/await — easier to read
async function fetchUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    const user = await res.json();
    const posts = await fetch(\`/api/posts/\${user.id}\`);
    return posts.json();
  } catch (err) {
    console.error(err);
  }
}
\`\`\`
Code looks synchronous but is still non-blocking. Easier to read, easier to debug, and error handling with try/catch is more natural.`,
  },
  {
    id: 287,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Xử lý lỗi trong async/await như thế nào?",
    a: `Dùng try/catch bọc await expressions. Lỗi từ rejected Promise được catch như exception.
\`\`\`javascript
async function loadData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error('Failed:', err.message);
    return null;
  } finally {
    hideLoading(); // luôn chạy
  }
}

// Hoặc chain .catch() bên ngoài
loadData().catch(err => console.error(err));

// Parallel: cần Promise.all để catch cả hai
const [a, b] = await Promise.all([fetchA(), fetchB()]);
\`\`\``,
    q_en: "How do you handle errors in async/await?",
    a_en: `Use try/catch to wrap await expressions. Errors from rejected Promises are caught like exceptions.
\`\`\`javascript
async function loadData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error('Failed:', err.message);
    return null;
  } finally {
    hideLoading(); // always runs
  }
}

// Or chain .catch() from the outside
loadData().catch(err => console.error(err));

// Parallel: use Promise.all to catch both errors
const [a, b] = await Promise.all([fetchA(), fetchB()]);
\`\`\``,
  },
  {
    id: 288,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Debounce và throttle là gì? Khi nào dùng cái nào?",
    a: "Debounce: chỉ gọi hàm sau khi ngừng trigger một khoảng thời gian (dùng cho search input, resize). Throttle: gọi hàm tối đa một lần trong khoảng thời gian nhất định (dùng cho scroll, mousemove). Debounce = 'đợi nghỉ', throttle = 'giới hạn tần suất'.",
    q_en: "What are debounce and throttle? When do you use each?",
    a_en: "Debounce: only calls the function after triggering has stopped for a given time period (use for search input, resize). Throttle: calls the function at most once per given time interval (use for scroll, mousemove). Debounce = 'wait for a pause', throttle = 'limit frequency'.",
  },
  {
    id: 289,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Promise executor chạy synchronously hay asynchronously?",
    a: "Promise executor (function truyền vào new Promise()) chạy synchronously ngay lập tức. Nhưng callbacks .then()/.catch() luôn chạy asynchronously (microtask queue), kể cả khi Promise đã resolve. Điều này đảm bảo behavior nhất quán dù Promise resolve sync hay async.",
    q_en: "Does the Promise executor run synchronously or asynchronously?",
    a_en: "The Promise executor (the function passed to new Promise()) runs synchronously, immediately. However, .then()/.catch() callbacks always run asynchronously (in the microtask queue), even when the Promise is already resolved. This ensures consistent behavior whether the Promise resolves synchronously or asynchronously.",
  },
  {
    id: 290,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Promise chaining và error propagation hoạt động như thế nào?",
    a: "Trong chain, error propagate đến .catch() gần nhất tiếp theo. Sau .catch(), chain tiếp tục bình thường. Trả về rejected promise hoặc throw trong .then() cũng tiếp tục propagate. Nếu không có .catch(), unhandledRejection event được fired (crash trong Node.js).",
    q_en: "How do Promise chaining and error propagation work?",
    a_en: "In a chain, errors propagate to the nearest subsequent .catch(). After .catch(), the chain continues normally. Returning a rejected promise or throwing inside .then() continues the propagation. Without a .catch(), an unhandledRejection event is fired (crashes Node.js).",
  },
  {
    id: 291,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Async iteration (for await...of) là gì?",
    a: "for await...of lặp qua async iterable - objects implement Symbol.asyncIterator trả về async iterator. Mỗi iteration await giá trị tiếp theo. Dùng với streams, pagination APIs, WebSocket messages. Async generators (async function*) tạo async iterables dễ dàng.",
    q_en: "What is async iteration (for await...of)?",
    a_en: "for await...of iterates over async iterables — objects that implement Symbol.asyncIterator returning an async iterator. Each iteration awaits the next value. Used with streams, paginated APIs, and WebSocket messages. Async generators (async function*) easily create async iterables.",
  },
  {
    id: 292,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "setTimeout(fn, 0) có thực sự chạy ngay không?",
    a: "Không, setTimeout(fn, 0) vẫn đưa callback vào macrotask queue, chạy sau khi call stack rỗng và tất cả microtasks xử lý xong. Thực tế delay tối thiểu thường là 4ms trong browser (HTML spec). Dùng queueMicrotask() nếu muốn chạy sớm hơn (sau sync code nhưng trước I/O).",
    q_en: "Does setTimeout(fn, 0) actually run immediately?",
    a_en: "No, setTimeout(fn, 0) still puts the callback in the macrotask queue, running after the call stack is empty and all microtasks have been processed. In practice the minimum delay is typically 4ms in browsers (HTML spec). Use queueMicrotask() if you want to run sooner (after sync code but before I/O).",
  },
  {
    id: 293,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Abort controller dùng để hủy fetch request như thế nào?",
    a: "AbortController tạo controller và signal. Truyền signal vào fetch options, khi gọi controller.abort() request bị hủy với AbortError. Quan trọng khi component unmount (React useEffect cleanup), search với debounce, hay race conditions. Cũng dùng được với các APIs khác nhận AbortSignal.",
    q_en: "How do you use AbortController to cancel a fetch request?",
    a_en: "AbortController creates a controller and a signal. Pass the signal in fetch options; when controller.abort() is called, the request is cancelled with an AbortError. Important when a component unmounts (React useEffect cleanup), with debounced search, or race conditions. Also works with other APIs that accept an AbortSignal.",
  },
  {
    id: 294,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Promise.resolve() và Promise.reject() dùng để làm gì?",
    a: "Promise.resolve(value) trả về Promise đã fulfilled với value (nếu value là Promise/thenable, unwrap nó). Promise.reject(reason) trả về Promise đã rejected. Hữu ích để tạo Promise ngay lập tức, normalize value (có thể là Promise hoặc plain value), và trong testing.",
    q_en: "What are Promise.resolve() and Promise.reject() used for?",
    a_en: "Promise.resolve(value) returns a Promise already fulfilled with the value (if value is a Promise/thenable, it unwraps it). Promise.reject(reason) returns an already-rejected Promise. Useful for creating Promises immediately, normalizing values (which may be a Promise or plain value), and in testing.",
  },
  {
    id: 295,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Thenable là gì?",
    a: "Thenable là object có method .then(). Promise resolution procedure unwrap thenables: khi resolve với thenable, gọi .then() của nó. Cho phép interop giữa các Promise implementations khác nhau. Nếu thenable throw trong .then(), Promise bị rejected. Đây là cách jQuery Deferred hoạt động với native Promises.",
    q_en: "What is a thenable?",
    a_en: "A thenable is an object with a .then() method. The Promise resolution procedure unwraps thenables: when resolving with a thenable, it calls its .then(). This enables interoperability between different Promise implementations. If a thenable throws inside .then(), the Promise is rejected. This is how jQuery Deferred objects work with native Promises.",
  },
  {
    id: 296,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Race condition trong async JavaScript là gì và cách xử lý?",
    a: "Race condition xảy ra khi nhiều async operations chạy đồng thời và kết quả phụ thuộc vào thứ tự hoàn thành. \n\n**Cách xử lý:** dùng AbortController hủy requests cũ, track request ID và bỏ qua responses không mới nhất, dùng debounce, hoặc mutex/semaphore pattern.",
    q_en: "What is a race condition in async JavaScript and how do you handle it?",
    a_en: "A race condition occurs when multiple async operations run concurrently and the result depends on which one finishes first. Solutions: use AbortController to cancel stale requests, track a request ID and discard outdated responses, use debounce, or implement a mutex/semaphore pattern.",
  },
  {
    id: 297,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "async/await với parallel execution như thế nào?",
    a: `await tuần tự từng operation sẽ chậm hơn. Chạy song song bằng cách tạo tất cả Promises trước rồi mới await.
\`\`\`javascript
// Sequential — chậm (mỗi request phải chờ cái trước)
const user = await fetchUser(id);
const posts = await fetchPosts(id); // chờ user xong mới gọi

// Parallel — nhanh hơn
const [user, posts] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
]);

// Tránh await trong loop (serial)
for (const id of ids) {
  await fetchItem(id); // BAD: 1 by 1
}

// Dùng Promise.all cho parallel
const items = await Promise.all(ids.map(id => fetchItem(id)));
\`\`\``,
    q_en: "How do you use async/await with parallel execution?",
    a_en: `Sequentially awaiting each operation is slower. Run in parallel by creating all Promises first, then awaiting them.
\`\`\`javascript
// Sequential — slow (each request waits for the previous)
const user = await fetchUser(id);
const posts = await fetchPosts(id); // waits for user first

// Parallel — much faster
const [user, posts] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
]);

// Avoid await inside loops (serial)
for (const id of ids) {
  await fetchItem(id); // BAD: 1 by 1
}

// Use Promise.all for parallel
const items = await Promise.all(ids.map(id => fetchItem(id)));
\`\`\``,
  },
  {
    id: 298,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "intermediate",
    q: "Unhandled promise rejection là gì? Cách xử lý?",
    a: "Unhandled rejection xảy ra khi Promise bị rejected mà không có .catch() handler. Trong Node.js v15+ sẽ terminate process theo mặc định (cấu hình qua --unhandled-rejections flag), trong browser hiện warning. Xử lý: luôn thêm .catch(), dùng process.on('unhandledRejection'), window.addEventListener('unhandledrejection'). Tốt nhất: luôn handle errors tại source.",
    q_en: "What is an unhandled promise rejection? How do you handle it?",
    a_en: "An unhandled rejection occurs when a Promise is rejected without a .catch() handler. In Node.js v15+ this terminates the process by default (configurable via --unhandled-rejections flag); in browsers it shows a warning. Handle by: always adding .catch(), using process.on('unhandledRejection'), or window.addEventListener('unhandledrejection'). Best practice: always handle errors at the source.",
  },
  {
    id: 299,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Task scheduling trong JavaScript: requestAnimationFrame và requestIdleCallback là gì?",
    a: "requestAnimationFrame(cb) chạy callback trước lần repaint tiếp theo (~16ms), dùng cho animations để sync với display refresh. requestIdleCallback(cb) chạy khi browser idle giữa frames, dùng cho non-urgent tasks như analytics, prefetch. Cả hai quan trọng cho performance.",
    q_en: "What are requestAnimationFrame and requestIdleCallback in JavaScript task scheduling?",
    a_en: "requestAnimationFrame(cb) schedules a callback before the next repaint (~16ms), used for animations to sync with the display refresh rate. requestIdleCallback(cb) runs when the browser is idle between frames, used for non-urgent tasks like analytics and prefetching. Both are important for performance.",
  },
  {
    id: 300,
    category: "JavaScript",
    subcategory: "Promise & Async",
    level: "advanced",
    q: "Long tasks và JavaScript performance liên quan đến event loop như thế nào?",
    a: "Tasks chiếm hơn 50ms là long tasks, block main thread, gây jank (giật). Giải pháp: chia nhỏ tasks với setTimeout(0) hoặc scheduler.yield() (mới), sử dụng Web Workers cho heavy computation, dùng requestIdleCallback cho background tasks. Chrome DevTools performance tab hiển thị long tasks.",
    q_en: "How do long tasks relate to JavaScript performance and the event loop?",
    a_en: "Tasks taking more than 50ms are long tasks that block the main thread and cause jank (stuttering). Solutions: break tasks into chunks with setTimeout(0) or scheduler.yield() (newer), use Web Workers for heavy computation, and use requestIdleCallback for background tasks. Chrome DevTools performance tab displays long tasks.",
  },

  // === JavaScript: DOM & APIs (301-320) ===
  {
    id: 301,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "DOM là gì? JavaScript tương tác với DOM như thế nào?",
    a: "DOM (Document Object Model) là biểu diễn dạng cây của HTML document, mỗi element là một node. JavaScript tương tác qua document API: querySelector, createElement, appendChild, setAttribute... DOM manipulation là synchronous, thay đổi DOM ngay lập tức reflect trên page.",
    q_en: "What is the DOM? How does JavaScript interact with it?",
    a_en: "The DOM (Document Object Model) is a tree representation of an HTML document where each element is a node. JavaScript interacts via the document API: querySelector, createElement, appendChild, setAttribute... DOM manipulation is synchronous; changes are immediately reflected on the page.",
  },
  {
    id: 302,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "Sự khác biệt giữa getElementById, querySelector và querySelectorAll là gì?",
    a: "getElementById trả về element đầu tiên có id, nhanh nhất. querySelector trả về element đầu tiên khớp CSS selector. querySelectorAll trả về NodeList tất cả elements khớp (static, không live). getElementsByClassName và getElementsByTagName trả về HTMLCollection (live). querySelectorAll phổ biến nhất vì linh hoạt.",
    q_en: "What is the difference between getElementById, querySelector, and querySelectorAll?",
    a_en: "getElementById returns the first element with the given id and is the fastest. querySelector returns the first element matching a CSS selector. querySelectorAll returns a NodeList of all matching elements (static, not live). getElementsByClassName and getElementsByTagName return a live HTMLCollection. querySelectorAll is most commonly used for its flexibility.",
  },
  {
    id: 303,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Event bubbling và event capturing là gì?",
    a: "Events propagate qua 3 phase: capturing (từ window xuống target), target, bubbling (từ target lên window). Mặc định addEventListener ở bubbling phase (useCapture = false). Capturing ít dùng nhưng xử lý trước bubbling. stopPropagation() dừng propagation, stopImmediatePropagation() dừng cả handlers cùng element.",
    q_en: "What are event bubbling and event capturing?",
    a_en: "Events propagate through 3 phases: capturing (from window down to target), target, and bubbling (from target up to window). addEventListener defaults to bubbling phase (useCapture = false). Capturing is less used but fires before bubbling. stopPropagation() stops propagation; stopImmediatePropagation() also stops other handlers on the same element.",
  },
  {
    id: 304,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Event delegation là gì? Tại sao nó hiệu quả?",
    a: "Event delegation gắn một event listener lên parent thay vì nhiều listeners trên từng child. Dựa vào event bubbling, check event.target để xác định element nào được click. Hiệu quả hơn cho dynamic content (không cần re-attach), ít memory hơn, code sạch hơn.",
    q_en: "What is event delegation? Why is it efficient?",
    a_en: "Event delegation attaches a single event listener to a parent instead of multiple listeners on each child. It relies on event bubbling and checks event.target to identify which element was clicked. More efficient for dynamic content (no need to re-attach), uses less memory, and results in cleaner code.",
  },
  {
    id: 305,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "preventDefault() và stopPropagation() khác nhau như thế nào?",
    a: "preventDefault() ngăn hành vi mặc định của browser (submit form, follow link, check checkbox) nhưng không dừng propagation. stopPropagation() ngăn event bubble/capture lên/xuống DOM tree nhưng không ngăn default behavior. Có thể dùng cả hai cùng lúc.",
    q_en: "What is the difference between preventDefault() and stopPropagation()?",
    a_en: "preventDefault() prevents the browser's default behavior (form submit, following a link, checking a checkbox) but does not stop propagation. stopPropagation() prevents the event from bubbling/capturing up/down the DOM tree but does not prevent the default behavior. Both can be used together.",
  },
  {
    id: 306,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Fetch API là gì? Khác XMLHttpRequest như thế nào?",
    a: "Fetch API là interface Promise-based hiện đại cho HTTP requests. Khác XHR: Promise thay callbacks, cleaner API, hỗ trợ service workers, streams. \n\n**Lưu ý:** Fetch không reject khi HTTP error (404, 500), chỉ reject với network failure - cần check response.ok. XHR hỗ trợ progress events và request cancellation dễ hơn.",
    q_en: "What is the Fetch API? How does it differ from XMLHttpRequest?",
    a_en: "The Fetch API is a modern, Promise-based interface for HTTP requests. Differences from XHR: uses Promises instead of callbacks, cleaner API, supports service workers and streams. \n\n**Note:** Fetch does not reject on HTTP errors (404, 500); it only rejects on network failure — you need to check response.ok. XHR has easier support for progress events and request cancellation.",
  },
  {
    id: 307,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "localStorage và sessionStorage khác nhau như thế nào?",
    a: "localStorage: persist qua sessions, chỉ bị xóa manually hoặc qua code, shared across tabs cùng origin. sessionStorage: xóa khi đóng tab/window, riêng biệt cho từng tab. Cả hai đồng bộ (synchronous), chỉ lưu string, giới hạn ~5MB. Dùng JSON.stringify/parse để lưu objects.",
    q_en: "What is the difference between localStorage and sessionStorage?",
    a_en: "localStorage: persists across sessions, only cleared manually or via code, shared across tabs of the same origin. sessionStorage: cleared when the tab/window is closed, separate for each tab. Both are synchronous, only store strings, and have a ~5MB limit. Use JSON.stringify/parse to store objects.",
  },
  {
    id: 308,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Web Workers là gì? Khi nào nên dùng?",
    a: "Web Workers chạy JavaScript trong background thread riêng biệt, không block main thread. Giao tiếp qua postMessage. Không truy cập được DOM. Dùng cho: heavy computation (image processing, encryption, data parsing), keeping UI responsive. SharedArrayBuffer cho phép share memory giữa workers.",
    q_en: "What are Web Workers? When should you use them?",
    a_en: "Web Workers run JavaScript in a separate background thread, not blocking the main thread. Communication is via postMessage. They cannot access the DOM. Use for: heavy computation (image processing, encryption, data parsing), keeping the UI responsive. SharedArrayBuffer allows sharing memory between workers.",
  },
  {
    id: 309,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "IntersectionObserver API là gì và dùng để làm gì?",
    a: "IntersectionObserver theo dõi khi element đi vào/ra viewport hoặc ancestor element. Asynchronous, không block main thread, hiệu quả hơn scroll event listeners. Dùng cho: lazy loading images, infinite scroll, animations triggered by scroll, tracking ad visibility.",
    q_en: "What is the IntersectionObserver API and what is it used for?",
    a_en: "IntersectionObserver tracks when an element enters or exits the viewport or an ancestor element. It is asynchronous, does not block the main thread, and is more efficient than scroll event listeners. Used for: lazy loading images, infinite scroll, scroll-triggered animations, and tracking ad visibility.",
  },
  {
    id: 310,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "MutationObserver là gì?",
    a: "MutationObserver theo dõi thay đổi trên DOM tree (attribute changes, child additions/removals, text changes). Asynchronous, callbacks chạy như microtask. Hữu ích khi làm việc với third-party code thay đổi DOM, implement undo/redo, hay real-time updates. ResizeObserver theo dõi thay đổi kích thước element.",
    q_en: "What is MutationObserver?",
    a_en: "MutationObserver watches for changes to the DOM tree (attribute changes, child additions/removals, text changes). Asynchronous, with callbacks running as microtasks. Useful when working with third-party code that changes the DOM, implementing undo/redo, or real-time updates. ResizeObserver watches for element size changes.",
  },
  {
    id: 311,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "Cookie, localStorage và sessionStorage khác nhau như thế nào về bảo mật và sử dụng?",
    a: "Cookies gửi kèm mọi HTTP request (có thể dùng HttpOnly để ngăn JS access, Secure cho HTTPS only). LocalStorage/sessionStorage chỉ accessible qua JS, không gửi với requests. Cookies cho session, auth tokens. LocalStorage cho user preferences, cache. Tránh lưu sensitive data trong localStorage vì XSS.",
    q_en: "How do cookies, localStorage, and sessionStorage differ in terms of security and usage?",
    a_en: "Cookies are sent with every HTTP request (can use HttpOnly to prevent JS access, Secure for HTTPS only). localStorage/sessionStorage are only accessible via JS and not sent with requests. Cookies are for sessions and auth tokens. localStorage is for user preferences and caching. Avoid storing sensitive data in localStorage due to XSS risks.",
  },
  {
    id: 312,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Custom events trong JavaScript là gì?",
    a: "CustomEvent cho phép tạo events tùy chỉnh: new CustomEvent('myEvent', {detail: {data}}). Dispatch với element.dispatchEvent(event). Bubbles và cancelable tùy chỉnh được. Dùng cho component communication không dùng framework, pub/sub pattern trong vanilla JS.",
    q_en: "What are custom events in JavaScript?",
    a_en: "CustomEvent lets you create custom events: new CustomEvent('myEvent', {detail: {data}}). Dispatch with element.dispatchEvent(event). Bubbling and cancelable behavior are configurable. Used for component communication without a framework, and for pub/sub patterns in vanilla JS.",
  },
  {
    id: 313,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "requestAnimationFrame là gì và tại sao nên dùng thay setTimeout cho animations?",
    a: "requestAnimationFrame(callback) lên lịch callback trước repaint tiếp theo (~60fps). Tự pause khi tab ẩn (tiết kiệm CPU/battery), sync với display refresh rate, smooth hơn setTimeout. Trả về ID để cancelAnimationFrame. Callback nhận timestamp để tính delta time.",
    q_en: "What is requestAnimationFrame and why should you use it instead of setTimeout for animations?",
    a_en: "requestAnimationFrame(callback) schedules a callback before the next repaint (~60fps). It automatically pauses when the tab is hidden (saving CPU/battery), syncs with the display refresh rate, and is smoother than setTimeout. Returns an ID for cancelAnimationFrame. The callback receives a timestamp for calculating delta time.",
  },
  {
    id: 314,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "advanced",
    q: "Service Workers là gì?",
    a: "Service Worker là script chạy trong background, tách khỏi web page, không có DOM access. Có thể intercept network requests (cache strategy), enable offline functionality, background sync, push notifications. Là nền tảng của PWA. Chỉ hoạt động trên HTTPS, có lifecycle riêng (install, activate, fetch).",
    q_en: "What are Service Workers?",
    a_en: "A Service Worker is a script running in the background, separate from the web page, with no DOM access. It can intercept network requests (caching strategies), enable offline functionality, background sync, and push notifications. It is the foundation of PWAs. Only works over HTTPS and has its own lifecycle (install, activate, fetch).",
  },
  {
    id: 315,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "Sự khác biệt giữa textContent, innerText và innerHTML là gì?",
    a: "innerHTML: get/set HTML markup (nguy cơ XSS nếu set user input). textContent: get/set text của tất cả nodes kể cả ẩn, không trigger reflow. innerText: chỉ lấy text hiển thị (aware of CSS), trigger reflow để tính style. textContent nhanh nhất và an toàn nhất cho text manipulation.",
    q_en: "What is the difference between textContent, innerText, and innerHTML?",
    a_en: "innerHTML: gets/sets HTML markup (XSS risk if setting user input). textContent: gets/sets text of all nodes including hidden ones, does not trigger reflow. innerText: only gets visible text (CSS-aware), triggers reflow to compute styles. textContent is the fastest and safest for text manipulation.",
  },
  {
    id: 316,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "DocumentFragment là gì và tại sao nó tốt cho performance?",
    a: "DocumentFragment là node nhẹ không thuộc DOM chính. Thêm nhiều elements vào fragment, rồi append fragment một lần vào DOM. Tránh nhiều reflow/repaint vì DOM chỉ cập nhật một lần. Khi fragment được append, nó trở nên rỗng và children chuyển vào DOM.",
    q_en: "What is DocumentFragment and why is it good for performance?",
    a_en: "DocumentFragment is a lightweight node not part of the main DOM. Add multiple elements to the fragment, then append the fragment to the DOM once. This avoids multiple reflows/repaints because the DOM updates only once. When the fragment is appended, it becomes empty and its children move into the DOM.",
  },
  {
    id: 317,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "advanced",
    q: "Broadcast Channel API là gì?",
    a: "Broadcast Channel cho phép giao tiếp giữa các browsing contexts (tabs, windows, iframes) cùng origin. Dùng new BroadcastChannel('name') và postMessage/onmessage. Khác localStorage events (chỉ fire ở tabs khác), Broadcast Channel fire ở tất cả subscribers. Dùng cho sync state giữa tabs.",
    q_en: "What is the Broadcast Channel API?",
    a_en: "Broadcast Channel enables communication between browsing contexts (tabs, windows, iframes) of the same origin. Use new BroadcastChannel('name') and postMessage/onmessage. Unlike localStorage events (only fire in other tabs), Broadcast Channel fires for all subscribers. Used for syncing state across tabs.",
  },
  {
    id: 318,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "beginner",
    q: "Sự khác biệt giữa window, document và navigator là gì?",
    a: "window: global object trong browser, chứa tất cả global APIs (alert, setTimeout, location). document: DOM tree của trang hiện tại, child của window. navigator: thông tin về browser/OS (userAgent, language, online status, geolocation). window.screen chứa info về màn hình.",
    q_en: "What is the difference between window, document, and navigator?",
    a_en: "window: the global object in the browser, containing all global APIs (alert, setTimeout, location). document: the DOM tree of the current page, a child of window. navigator: information about the browser/OS (userAgent, language, online status, geolocation). window.screen contains screen information.",
  },
  {
    id: 319,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "intermediate",
    q: "History API (pushState, replaceState) là gì?",
    a: "History API cho phép thay đổi URL và lịch sử navigation mà không reload page. pushState() thêm entry mới vào history, replaceState() thay đổi entry hiện tại. popstate event fires khi navigate back/forward. Là nền tảng của client-side routing trong SPAs.",
    q_en: "What is the History API (pushState, replaceState)?",
    a_en: "The History API allows changing the URL and navigation history without reloading the page. pushState() adds a new entry to history; replaceState() changes the current entry. The popstate event fires when navigating back/forward. It is the foundation of client-side routing in SPAs.",
  },
  {
    id: 320,
    category: "JavaScript",
    subcategory: "DOM & APIs",
    level: "advanced",
    q: "IndexedDB là gì? Khi nào dùng thay localStorage?",
    a: "IndexedDB là database NoSQL trong browser hỗ trợ: lưu structured data (objects, files, blobs), indexes, transactions, large data. Asynchronous, không block main thread. Dùng khi cần: lưu > 5MB, query phức tạp, offline-first apps. Phức tạp hơn localStorage nhiều, có thể dùng thư viện như Dexie.js.",
    q_en: "What is IndexedDB? When should you use it instead of localStorage?",
    a_en: "IndexedDB is a NoSQL browser database that supports: storing structured data (objects, files, blobs), indexes, transactions, and large data. It is asynchronous and does not block the main thread. Use it when you need: storing more than 5MB, complex queries, or offline-first apps. It is much more complex than localStorage; consider using a library like Dexie.js.",
  },

  // === TypeScript: Types Cơ Bản (321-335) ===
  {
    id: 321,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "TypeScript là gì và tại sao nên dùng TypeScript thay JavaScript?",
    a: "TypeScript là superset của JavaScript có static typing, compile sang JS. \n\n**Lợi ích:** phát hiện lỗi tại compile time, IDE support tốt hơn (autocomplete, refactoring), code tự documentation hóa. Không thay thế JS mà enhance nó. Hữu ích nhất ở dự án lớn, team, và codebases cần maintain lâu dài.",
    q_en: "What is TypeScript and why should you use it instead of JavaScript?",
    a_en: "TypeScript is a superset of JavaScript with static typing that compiles to JS. \n\n**Benefits:** catching errors at compile time, better IDE support (autocomplete, refactoring), self-documenting code. It does not replace JS but enhances it. Most useful in large projects, team environments, and codebases that need long-term maintenance.",
  },
  {
    id: 322,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "Type annotation trong TypeScript là gì?",
    a: "Type annotation là khai báo kiểu tường minh cho biến, parameter, return value: let name: string = 'John'. TypeScript cũng có type inference tự suy luận kiểu từ giá trị gán. Annotation thường chỉ cần cho function parameters, return types, và khi inference không đủ thông tin.",
    q_en: "What is type annotation in TypeScript?",
    a_en: "Type annotation is an explicit type declaration for variables, parameters, and return values: let name: string = 'John'. TypeScript also has type inference to automatically infer types from assigned values. Annotations are usually only needed for function parameters, return types, and when inference lacks sufficient information.",
  },
  {
    id: 323,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "any, unknown và never khác nhau như thế nào?",
    a: "any: tắt type checking, không an toàn, tránh dùng. unknown: type-safe any, phải kiểm tra type trước khi dùng, không thể assign cho typed variable mà không narrow. never: không bao giờ có giá trị, dùng cho hàm luôn throw, hoặc exhaustive checks. unknown >> any về safety.",
    q_en: "What is the difference between any, unknown, and never?",
    a_en: "any: disables type checking, not type-safe, avoid using. unknown: type-safe any, must check type before using, cannot be assigned to a typed variable without narrowing. never: never has a value, used for functions that always throw or for exhaustive checks. unknown is safer than any.",
  },
  {
    id: 324,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "Union types và intersection types là gì?",
    a: "Union type `A | B`: value có thể là A hoặc B — ví dụ `string | number` cho phép cả hai. Intersection type `A & B`: value phải có tất cả properties của A lẫn B — ví dụ `type AdminUser = User & { adminRole: string }` tạo type có đủ fields của User cộng thêm adminRole. Union dùng khi một giá trị có thể là nhiều loại (parameter linh hoạt), intersection dùng khi cần combine nhiều interface/type lại. Bẫy: intersection của 2 primitive types không tương thích (như `string & number`) cho ra type `never`.",
    q_en: "What are union types and intersection types?",
    a_en: "Union type `A | B`: a value can be either A or B — e.g., `string | number` allows both. Intersection type `A & B`: a value must have all properties of both A and B — e.g., `type AdminUser = User & { adminRole: string }` creates a type with all User fields plus adminRole. Use union when a value can be multiple types (flexible parameters), intersection when you need to combine multiple interfaces/types. Trap: intersection of two incompatible primitive types (like `string & number`) results in the type `never`.",
  },
  {
    id: 325,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "Literal types trong TypeScript là gì?",
    a: "Literal types là type chính xác là một giá trị cụ thể: `type Direction = 'left' | 'right' | 'up' | 'down'` — chỉ chấp nhận đúng 4 giá trị đó. Kết hợp với union tạo enum-like types mà không có runtime overhead của enum thật. Ví dụ thực tế: `type Status = 'loading' | 'success' | 'error'` cho API state. Bẫy: TypeScript suy luận `let dir = 'left'` là `string`, không phải literal — dùng `const` hoặc `as const` để giữ literal type. Là nền tảng của discriminated unions và type narrowing.",
    q_en: "What are literal types in TypeScript?",
    a_en: "Literal types are types that are exactly a specific value: `type Direction = 'left' | 'right' | 'up' | 'down'` — only those 4 values are accepted. Combined with union, they create enum-like types without the runtime overhead of real enums. Practical example: `type Status = 'loading' | 'success' | 'error'` for API state. Trap: TypeScript infers `let dir = 'left'` as `string`, not as a literal — use `const` or `as const` to preserve the literal type. They are the foundation of discriminated unions and type narrowing.",
  },
  {
    id: 326,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "void khác undefined như thế nào trong TypeScript?",
    a: "void là return type của hàm không trả về giá trị có nghĩa. undefined là giá trị cụ thể. Function type (cb: () => void) cho phép cb trả về bất kỳ giá trị gì mà không dùng result. Function implementation () => undefined phải return undefined tường minh. void linh hoạt hơn cho callbacks.",
    q_en: "How does void differ from undefined in TypeScript?",
    a_en: "void is the return type for a function that does not return a meaningful value. undefined is a specific value. A function type (cb: () => void) allows cb to return any value without the result being used. A function implementation `() => undefined` must explicitly return undefined. void is more flexible for callbacks.",
  },
  {
    id: 327,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "Type narrowing là gì? Các cách narrow type trong TypeScript?",
    a: "Type narrowing là thu hẹp type trong code branch dựa trên kiểm tra. Cách narrow: typeof, instanceof, in operator, equality check, truthiness check, type predicates (is), assertion functions, discriminated unions. TypeScript tự động narrow trong if/else, switch, ternary.",
    q_en: "What is type narrowing? What are the ways to narrow a type in TypeScript?",
    a_en: "Type narrowing is the process of refining a type within a code branch based on checks. Ways to narrow: typeof, instanceof, in operator, equality checks, truthiness checks, type predicates (is), assertion functions, discriminated unions. TypeScript automatically narrows within if/else, switch, and ternary expressions.",
  },
  {
    id: 328,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "as keyword (type assertion) là gì? Khi nào dùng?",
    a: "Type assertion value as Type nói với TS 'trust me, tôi biết kiểu này'. Không kiểm tra runtime, chỉ compile time. Dùng khi TS không thể infer (DOM queries, JSON.parse). Tránh dùng để cast bừa bãi - sẽ mất type safety. as unknown as Type (double assertion) là dấu hiệu code có vấn đề.",
    q_en: "What is the as keyword (type assertion)? When should you use it?",
    a_en: "Type assertion `value as Type` tells TS 'trust me, I know this type'. It does not check at runtime, only at compile time. Use when TS cannot infer the type (DOM queries, JSON.parse). Avoid using it to cast arbitrarily — you lose type safety. `as unknown as Type` (double assertion) is a sign of a code problem.",
  },
  {
    id: 329,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "Non-null assertion operator (!) là gì?",
    a: "! sau expression nói với TS rằng value không phải null/undefined: document.getElementById('id')!. Hữu ích khi biết chắc value tồn tại nhưng TS không thể prove. Tránh lạm dụng vì có thể gây runtime error. Tốt hơn là dùng optional chaining hoặc explicit null check.",
    q_en: "What is the non-null assertion operator (!)?",
    a_en: "The ! after an expression tells TS that the value is not null/undefined: document.getElementById('id')!. Useful when you know for certain a value exists but TS cannot prove it. Avoid overusing it as it can cause runtime errors. It is better to use optional chaining or an explicit null check.",
  },
  {
    id: 330,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "Tuple type trong TypeScript là gì?",
    a: "Tuple là array với số lượng và kiểu phần tử cố định: type Point = [number, number]. Phần tử có thể có tên: type Entry = [key: string, value: number]. Hỗ trợ optional (?) và rest elements. Thường dùng cho function return nhiều giá trị, CSV rows, React useState.",
    q_en: "What is a tuple type in TypeScript?",
    a_en: "A tuple is an array with a fixed number and type of elements: type Point = [number, number]. Elements can have names: type Entry = [key: string, value: number]. Supports optional (?) and rest elements. Commonly used for functions returning multiple values, CSV rows, and React useState.",
  },
  {
    id: 331,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "Enum trong TypeScript là gì? Numeric vs string enum khác nhau thế nào?",
    a: "Enum khai báo tập hợp named constants. Numeric enum: tự động assign 0,1,2... Có thể reverse lookup (Direction[0] = 'Up'). String enum: mỗi member phải assign string value tường minh, không có reverse lookup nhưng dễ debug hơn. Const enum: inlined tại compile time, không sinh runtime code.",
    q_en: "What are enums in TypeScript? How do numeric and string enums differ?",
    a_en: "Enums declare a set of named constants. Numeric enums: automatically assign 0, 1, 2... and support reverse lookup (Direction[0] = 'Up'). String enums: each member must explicitly assign a string value, no reverse lookup but easier to debug. Const enums: inlined at compile time, producing no runtime code.",
  },
  {
    id: 332,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "satisfies operator trong TypeScript là gì?",
    a: "satisfies (TS 4.9) kiểm tra type mà không mở rộng type declaration. Khác as: satisfies vẫn infer type cụ thể nhất có thể và báo lỗi nếu không match. \n\n**Ví dụ:** const config = {...} satisfies Config - TS check config đúng Config nhưng giữ literal types của values.",
    q_en: "What is the satisfies operator in TypeScript?",
    a_en: "satisfies (TS 4.9) validates a type without widening the type declaration. Unlike as: satisfies still infers the most specific type possible and reports an error if it does not match. \n\n**Example:** `const config = {...} satisfies Config` — TS checks config is a valid Config but preserves the literal types of values.",
  },
  {
    id: 333,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "advanced",
    q: "Declaration merging trong TypeScript là gì?",
    a: "Declaration merging cho phép nhiều declarations cùng tên merge lại. Interface merging: hai interface cùng tên tự động merge properties (open interface). Namespace merging: thêm properties vào namespace có sẵn. Module augmentation: thêm types vào modules bên ngoài (ví dụ extend Express Request). Chỉ interface mới merge, không phải type alias.",
    q_en: "What is declaration merging in TypeScript?",
    a_en: "Declaration merging allows multiple declarations with the same name to be merged. Interface merging: two interfaces with the same name automatically merge their properties (open interface). Namespace merging: adds properties to an existing namespace. Module augmentation: adds types to external modules (e.g., extend Express Request). Only interfaces merge, not type aliases.",
  },
  {
    id: 334,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "intermediate",
    q: "const assertion (as const) là gì?",
    a: "as const biến values thành readonly literal types cụ thể nhất. Array thành readonly tuple, object properties thành readonly literal types. \n\n**Ví dụ:** const dirs = ['left', 'right'] as const tạo type readonly ['left', 'right'] thay string[]. Hữu ích để tạo strongly-typed constants.",
    q_en: "What is a const assertion (as const)?",
    a_en: "as const transforms values into the most specific readonly literal types. Arrays become readonly tuples, object properties become readonly literal types. \n\n**Example:** `const dirs = ['left', 'right'] as const` creates type `readonly ['left', 'right']` instead of `string[]`. Useful for creating strongly-typed constants.",
  },
  {
    id: 335,
    category: "TypeScript",
    subcategory: "Types Cơ Bản",
    level: "beginner",
    q: "TypeScript strict mode bao gồm những gì?",
    a: "strict: true bật nhiều checks: strictNullChecks (null/undefined không assign cho typed vars), strictFunctionTypes, strictPropertyInitialization, noImplicitAny, noImplicitThis, strictBindCallApply. Luôn bật strict: true cho dự án mới. Khi migrate JS sang TS có thể bật từng flag dần.",
    q_en: "What does TypeScript strict mode include?",
    a_en: "strict: true enables multiple checks: strictNullChecks (null/undefined cannot be assigned to typed vars), strictFunctionTypes, strictPropertyInitialization, noImplicitAny, noImplicitThis, strictBindCallApply. Always enable strict: true for new projects. When migrating from JS to TS, you can enable flags incrementally.",
  },

  // === TypeScript: Interface & Type (336-345) ===
  {
    id: 336,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "beginner",
    q: "interface và type alias khác nhau như thế nào? Khi nào dùng cái nào?",
    a: "Interface: có thể extend và merge (declaration merging), chỉ describe object shapes. Type alias: linh hoạt hơn (union, intersection, primitives, tuples, conditional types), không merge. Quy tắc: dùng interface cho public API và khi cần extend, dùng type cho unions/intersections và khi cần advanced type features.",
    q_en: "What is the difference between interface and type alias? When do you use each?",
    a_en: "Interface: can be extended and merged (declaration merging), only describes object shapes. Type alias: more flexible (unions, intersections, primitives, tuples, conditional types), does not merge. Rule of thumb: use interface for public APIs and when extension is needed, use type for unions/intersections and advanced type features.",
  },
  {
    id: 337,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "beginner",
    q: "Cách extend interface và type trong TypeScript?",
    a: "Interface: interface Child extends Parent { ... } và extends nhiều: extends A, B. Type: type Combined = A & B (intersection). Interface có thể extend type và ngược lại. Extends kiểm tra compatibility (không thể re-declare incompatible property), còn & intersection merge tất cả.",
    q_en: "How do you extend interfaces and types in TypeScript?",
    a_en: "Interface: `interface Child extends Parent { ... }` and multiple extends: `extends A, B`. Type: `type Combined = A & B` (intersection). An interface can extend a type and vice versa. extends checks compatibility (you cannot re-declare an incompatible property), while & intersection merges everything.",
  },
  {
    id: 338,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "intermediate",
    q: "Index signature trong TypeScript là gì?",
    a: "Index signature cho phép object có keys không biết trước: { [key: string]: value }. Tất cả explicit properties phải compatible với index signature type. string index signature làm tất cả properties phải match kiểu. Dùng Record<string, ValueType> thay thế khi cần, rõ ràng hơn.",
    q_en: "What is an index signature in TypeScript?",
    a_en: "An index signature allows objects to have unknown keys in advance: `{ [key: string]: value }`. All explicit properties must be compatible with the index signature type. A string index signature requires all properties to match its type. Use `Record<string, ValueType>` as a clearer alternative when needed.",
  },
  {
    id: 339,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "beginner",
    q: "Optional properties (?) và readonly properties là gì?",
    a: "Optional property (prop?: Type) có thể có hoặc không, type là Type | undefined khi access. readonly property không thể reassign sau khởi tạo (chỉ compile time, không phải runtime deep freeze). Readonly<T> làm tất cả properties readonly. readonly arrays: ReadonlyArray<T> hoặc readonly T[].",
    q_en: "What are optional properties (?) and readonly properties?",
    a_en: "Optional property (prop?: Type) may or may not be present; the type is `Type | undefined` when accessed. readonly property cannot be reassigned after initialization (compile time only, not a runtime deep freeze). `Readonly<T>` makes all properties readonly. Readonly arrays: `ReadonlyArray<T>` or `readonly T[]`.",
  },
  {
    id: 340,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "intermediate",
    q: "Discriminated unions là gì? Tại sao hữu ích?",
    a: `Discriminated union là union trong đó mỗi member có common literal property (discriminant). TypeScript narrow type tự động khi check discriminant.
\`\`\`typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
  }
}
\`\`\`
Giúp type-safe handling cases khác nhau, TypeScript sẽ báo lỗi nếu thiếu case.`,
    q_en: "What are discriminated unions? Why are they useful?",
    a_en: `A discriminated union is a union where each member has a common literal property (the discriminant). TypeScript automatically narrows the type when checking the discriminant.
\`\`\`typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
  }
}
\`\`\`
Provides type-safe handling of different cases — TypeScript reports an error if a case is missing.`,
  },
  {
    id: 341,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "intermediate",
    q: "Function type trong interface và type alias như thế nào?",
    a: "Interface: call signature {(arg: Type): ReturnType} hoặc method signature {method(arg: Type): ReturnType}. Type alias: type Fn = (arg: Type) => ReturnType. Overloads trong interface: khai báo nhiều call signatures. Function interfaces cũng có thể có properties (như jQuery $ function).",
    q_en: "What do function types look like in interfaces and type aliases?",
    a_en: "Interface: call signature `{(arg: Type): ReturnType}` or method signature `{method(arg: Type): ReturnType}`. Type alias: `type Fn = (arg: Type) => ReturnType`. Overloads in interface: declare multiple call signatures. Function interfaces can also have properties (like the jQuery $ function).",
  },
  {
    id: 342,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "advanced",
    q: "Module augmentation là gì?",
    a: "Module augmentation cho phép thêm types vào module đã có: declare module 'express' { interface Request { user?: User } }. Dùng để extend third-party types mà không fork. Cần import module đó (ambient augmentation vs global augmentation). Rất hữu ích cho middleware patterns.",
    q_en: "What is module augmentation?",
    a_en: "Module augmentation allows adding types to an existing module: `declare module 'express' { interface Request { user?: User } }`. Used to extend third-party types without forking. Requires importing the module (ambient augmentation vs global augmentation). Very useful for middleware patterns.",
  },
  {
    id: 343,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "intermediate",
    q: "Recursive types trong TypeScript là gì?",
    a: "TypeScript hỗ trợ recursive type aliases: type TreeNode = { value: number; children: TreeNode[] }. Hữu ích cho tree structures, nested JSON, linked lists. Type alias có thể tự tham chiếu. Interface luôn hỗ trợ recursive (vì là named type), type alias cũng hỗ trợ từ TS 3.7.",
    q_en: "What are recursive types in TypeScript?",
    a_en: "TypeScript supports recursive type aliases: `type TreeNode = { value: number; children: TreeNode[] }`. Useful for tree structures, nested JSON, and linked lists. Type aliases can reference themselves. Interfaces have always supported recursion (as named types); type aliases also support it since TS 3.7.",
  },
  {
    id: 344,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "advanced",
    q: "Branded types (nominal types) trong TypeScript là gì?",
    a: "TypeScript dùng structural typing (shape giống nhau là tương thích). Branded types tạo nominal typing: type UserId = string & {readonly _brand: 'UserId'}. Ngăn nhầm lẫn giữa các string types semantically khác nhau (UserId vs Email). Tạo via type assertion một lần qua factory function.",
    q_en: "What are branded types (nominal types) in TypeScript?",
    a_en: "TypeScript uses structural typing (same shape = compatible). Branded types create nominal typing: `type UserId = string & {readonly _brand: 'UserId'}`. This prevents confusing semantically different string types (UserId vs Email). Created via a type assertion once, through a factory function.",
  },
  {
    id: 345,
    category: "TypeScript",
    subcategory: "Interface & Type",
    level: "intermediate",
    q: "Excess property checking trong TypeScript là gì?",
    a: "TypeScript kiểm tra extra properties khi assign object literal trực tiếp vào typed variable. Nếu type không có property đó, báo lỗi. Nhưng assign qua biến trung gian không bị check. Behavior này giúp phát hiện typos trong config objects. Workaround: index signature hoặc type assertion.",
    q_en: "What is excess property checking in TypeScript?",
    a_en: "TypeScript checks for extra properties when assigning an object literal directly to a typed variable. If the type does not have that property, an error is reported. However, assigning via an intermediate variable bypasses this check. This behavior helps catch typos in config objects. Workarounds: use an index signature or a type assertion.",
  },

  // === TypeScript: Generics (346-360) ===
  {
    id: 346,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Generics trong TypeScript là gì? Tại sao cần thiết?",
    a: `Generics cho phép tạo components (functions, classes, interfaces) hoạt động với nhiều kiểu dữ liệu mà vẫn type-safe. Thay dùng \`any\`, dùng type parameter \`<T>\`.
\`\`\`typescript
// Không generic — mất type info
function identity(arg: any): any { return arg; }

// Generic — type-safe
function identity<T>(arg: T): T { return arg; }

const n = identity(42);    // n: number
const s = identity('hi');  // s: string

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const res: ApiResponse<User[]> = await fetchUsers();
\`\`\`
Tái sử dụng code mà không mất type information.`,
    q_en: "What are generics in TypeScript? Why are they necessary?",
    a_en: `Generics allow creating components (functions, classes, interfaces) that work with multiple types while remaining type-safe. Instead of using \`any\`, use a type parameter \`<T>\`.
\`\`\`typescript
// Non-generic — loses type info
function identity(arg: any): any { return arg; }

// Generic — type-safe
function identity<T>(arg: T): T { return arg; }

const n = identity(42);    // n: number
const s = identity('hi');  // s: string

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const res: ApiResponse<User[]> = await fetchUsers();
\`\`\`
Reuse code without losing type information.`,
  },
  {
    id: 347,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Generic constraints (extends) trong TypeScript là gì?",
    a: `Constraints giới hạn type parameter phải extend một type cụ thể, ngăn dùng với types không compatible.
\`\`\`typescript
// Không có constraint — không access được .length
function getLength<T>(arg: T): number {
  return arg.length; // Error!
}

// Có constraint
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length; // OK
}

// keyof constraint — type-safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const name = getProperty({ name: 'An', age: 25 }, 'name'); // string

// Multiple constraints
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
\`\`\``,
    q_en: "What are generic constraints (extends) in TypeScript?",
    a_en: `Constraints limit a type parameter to extend a specific type, preventing use with incompatible types.
\`\`\`typescript
// Without constraint — cannot access .length
function getLength<T>(arg: T): number {
  return arg.length; // Error!
}

// With constraint
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length; // OK
}

// keyof constraint — type-safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const name = getProperty({ name: 'An', age: 25 }, 'name'); // string

// Multiple constraints
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
\`\`\``,
  },
  {
    id: 348,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "keyof operator là gì?",
    a: "`keyof T` trả về union type của tất cả keys của T: `keyof {a: number, b: string}` cho ra `'a' | 'b'`. Dùng với generics để type-safe property access: `function get<T, K extends keyof T>(obj: T, key: K): T[K]` đảm bảo key tồn tại và return đúng kiểu. `keyof typeof obj` lấy keys của object value (không phải type). Hay gặp trong utility types như `Pick`, `Record`, và khi build form hay table components cần truy cập dynamic property một cách an toàn.",
    q_en: "What is the keyof operator?",
    a_en: "`keyof T` returns a union type of all keys of T: `keyof {a: number, b: string}` gives `'a' | 'b'`. Used with generics for type-safe property access: `function get<T, K extends keyof T>(obj: T, key: K): T[K]` ensures the key exists and returns the correct type. `keyof typeof obj` gets the keys of an object value (not a type). Commonly seen in utility types like `Pick`, `Record`, and when building form or table components that need dynamic property access safely.",
  },
  {
    id: 349,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Mapped types trong TypeScript là gì?",
    a: `Mapped types tạo type mới bằng cách biến đổi properties của type khác: \`{ [K in keyof T]: ... }\`.
\`\`\`typescript
// Giải thích cách hoạt động qua ví dụ
type User = { id: number; name: string; email: string };

// Tương đương Partial<T>
type MyPartial<T> = { [K in keyof T]?: T[K] };

// Tương đương Readonly<T>
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

// Biến đổi value type
type Nullable<T> = { [K in keyof T]: T[K] | null };

// Xóa modifier: -readonly, -?
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };

// Remap key với as
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};
\`\`\`
Là nền tảng của nhiều built-in utility types (Partial, Readonly, Record, Pick, Omit).`,
    q_en: "What are mapped types in TypeScript?",
    a_en: `Mapped types create new types by transforming properties of another type: \`{ [K in keyof T]: ... }\`.
\`\`\`typescript
// Understanding through examples
type User = { id: number; name: string; email: string };

// Equivalent to Partial<T>
type MyPartial<T> = { [K in keyof T]?: T[K] };

// Equivalent to Readonly<T>
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

// Transform value types
type Nullable<T> = { [K in keyof T]: T[K] | null };

// Remove modifiers: -readonly, -?
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };

// Remap key with as
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};
\`\`\`
They are the foundation of many built-in utility types (Partial, Readonly, Record, Pick, Omit).`,
  },
  {
    id: 350,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Conditional types trong TypeScript là gì?",
    a: `Conditional types: \`T extends U ? X : Y\`. Evaluate tại compile time dựa vào type relationship.
\`\`\`typescript
// Cơ bản
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// Distributive: tự động phân phối trên union
type NonNullable<T> = T extends null | undefined ? never : T;
type C = NonNullable<string | null | undefined>; // string

// Infer: extract type từ bên trong
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type D = ReturnType<() => number>; // number

// Thực tế: flatten array type
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type E = Flatten<string[]>; // string
type F = Flatten<number>;   // number
\`\`\`
Nền tảng của Exclude, Extract, NonNullable, ReturnType, và nhiều utility types.`,
    q_en: "What are conditional types in TypeScript?",
    a_en: `Conditional types: \`T extends U ? X : Y\`. Evaluated at compile time based on the type relationship.
\`\`\`typescript
// Basic
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// Distributive: automatically distributes over unions
type NonNullable<T> = T extends null | undefined ? never : T;
type C = NonNullable<string | null | undefined>; // string

// Infer: extract a type from inside another
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type D = ReturnType<() => number>; // number

// Practical: flatten an array type
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type E = Flatten<string[]>; // string
type F = Flatten<number>;   // number
\`\`\`
The foundation of Exclude, Extract, NonNullable, ReturnType, and many other utility types.`,
  },
  {
    id: 351,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "infer keyword trong conditional types là gì?",
    a: `\`infer\` khai báo type variable trong conditional type để 'capture' type được infer. Chỉ dùng trong \`extends\` clause.
\`\`\`typescript
// Extract return type của function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type R = ReturnType<() => Promise<string>>; // Promise<string>

// Extract params
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
type P = Parameters<(a: string, b: number) => void>; // [string, number]

// Extract element type từ array
type UnwrapArray<T> = T extends (infer U)[] ? U : T;
type U = UnwrapArray<string[]>; // string

// Extract từ Promise
type Awaited<T> = T extends Promise<infer V> ? Awaited<V> : T;
type V = Awaited<Promise<Promise<number>>>; // number
\`\`\`
Cho phép extract nested types từ complex types một cách type-safe.`,
    q_en: "What is the infer keyword in conditional types?",
    a_en: `\`infer\` declares a type variable inside a conditional type to capture an inferred type. It can only be used in the \`extends\` clause.
\`\`\`typescript
// Extract the return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type R = ReturnType<() => Promise<string>>; // Promise<string>

// Extract params
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
type P = Parameters<(a: string, b: number) => void>; // [string, number]

// Extract element type from array
type UnwrapArray<T> = T extends (infer U)[] ? U : T;
type U = UnwrapArray<string[]>; // string

// Extract from Promise
type Awaited<T> = T extends Promise<infer V> ? Awaited<V> : T;
type V = Awaited<Promise<Promise<number>>>; // number
\`\`\`
Allows extracting nested types from complex types in a type-safe way.`,
  },
  {
    id: 352,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Default type parameters là gì?",
    a: "Generic type parameters có thể có default: function create<T = string>(). Nếu không cung cấp type argument, dùng default. Hữu ích cho optional configuration, React components (T = {}), backward-compatible API changes. Default phải compatible với constraint nếu có.",
    q_en: "What are default type parameters?",
    a_en: "Generic type parameters can have defaults: `function create<T = string>()`. If no type argument is provided, the default is used. Useful for optional configuration, React components (T = {}), and backward-compatible API changes. The default must be compatible with the constraint, if one exists.",
  },
  {
    id: 353,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Variance trong TypeScript generics là gì?",
    a: "Variance mô tả how subtype relationships propagate qua generic types. Covariant (read-only): Array<Dog> compatible với Array<Animal>. Contravariant (write-only): function input types. Invariant: mutable containers. TypeScript dùng structural subtyping và có variance checking cho function types (in/out keywords từ TS 4.7).",
    q_en: "What is variance in TypeScript generics?",
    a_en: "Variance describes how subtype relationships propagate through generic types. Covariant (read-only): Array<Dog> is compatible with Array<Animal>. Contravariant (write-only): function input types. Invariant: mutable containers. TypeScript uses structural subtyping and has variance checking for function types (in/out keywords from TS 4.7).",
  },
  {
    id: 354,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Generic classes trong TypeScript là gì?",
    a: "Class có thể generic: class Stack<T> { items: T[] = []; push(item: T) {...} pop(): T {...} }. Type parameter available trong toàn bộ class. Static members không thể dùng class type parameter. Khi instantiate: new Stack<number>() hoặc để TS infer từ constructor args.",
    q_en: "What are generic classes in TypeScript?",
    a_en: "Classes can be generic: `class Stack<T> { items: T[] = []; push(item: T) {...} pop(): T {...} }`. The type parameter is available throughout the class. Static members cannot use the class type parameter. When instantiating: `new Stack<number>()` or let TS infer from constructor args.",
  },
  {
    id: 355,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Template literal types trong TypeScript là gì?",
    a: "Template literal types tạo string types từ combinations: type Greeting = `Hello ${string}`. Kết hợp với union: type Direction = 'top' | 'bottom'; type Padding = `padding-${Direction}`. Cực kỳ mạnh cho type-safe event names, CSS properties, API endpoints. Intrinsic types: Uppercase, Lowercase, Capitalize, Uncapitalize.",
    q_en: "What are template literal types in TypeScript?",
    a_en: "Template literal types create string types from combinations: `type Greeting = \\`Hello ${string}\\``. Combined with unions: `type Direction = 'top' | 'bottom'; type Padding = \\`padding-${Direction}\\``. Extremely powerful for type-safe event names, CSS properties, and API endpoints. Intrinsic types: Uppercase, Lowercase, Capitalize, Uncapitalize.",
  },
  {
    id: 356,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Recursive conditional types là gì?",
    a: "Recursive conditional types là kiểu điều kiện tự gọi lại chính nó, cho phép duyệt qua các nested types ở mọi cấp độ, ví dụ: type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T sẽ biến tất cả properties thành optional ở mọi tầng lồng nhau. TypeScript giới hạn độ sâu đệ quy (thường khoảng 50 levels) để tránh infinite loop trong quá trình type checking. Kỹ thuật này rất hữu ích để xây dựng các utility types phức tạp như DeepReadonly, DeepRequired, hay Flatten để biến đổi cấu trúc dữ liệu lồng nhau một cách type-safe.",
    q_en: "What are recursive conditional types?",
    a_en: "Recursive conditional types are conditional types that call themselves, allowing traversal through nested types at every level. For example: `type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T` makes all properties optional at every nesting level. TypeScript limits recursion depth (typically around 50 levels) to prevent infinite loops during type checking. This technique is very useful for building complex utility types like DeepReadonly, DeepRequired, or Flatten for type-safely transforming nested data structures.",
  },
  {
    id: 357,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Utility type Parameters<T> và ConstructorParameters<T> là gì?",
    a: "Parameters<T> là utility type trích xuất tuple chứa kiểu của tất cả tham số từ một function type T, ví dụ Parameters<typeof Math.max> cho ra [number, number]. ConstructorParameters<T> hoạt động tương tự nhưng dành cho constructor của class, trả về tuple các kiểu tham số khi khởi tạo đối tượng. Bên trong, cả hai đều sử dụng infer keyword trong conditional type: T extends (...args: infer P) => any ? P : never để suy luận ra kiểu tham số. Chúng đặc biệt hữu ích khi cần forward arguments sang hàm khác, tạo wrapper functions, hoặc xây dựng higher-order functions mà vẫn giữ nguyên type safety.",
    q_en: "What are the utility types Parameters<T> and ConstructorParameters<T>?",
    a_en: "Parameters<T> is a utility type that extracts a tuple of the types of all parameters from a function type T, for example `Parameters<typeof Math.max>` gives `[number, number]`. ConstructorParameters<T> works similarly but for class constructors, returning a tuple of the types used when instantiating the object. Internally, both use the infer keyword in a conditional type: `T extends (...args: infer P) => any ? P : never`. They are especially useful when forwarding arguments to another function, creating wrapper functions, or building higher-order functions while preserving full type safety.",
  },
  {
    id: 358,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Variadic tuple types là gì?",
    a: "Variadic tuples (TS 4.0) cho phép spread generic types trong tuples: type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]. Cải thiện typing cho rest parameters và tuple manipulation. Cho phép model patterns như function composition với typed args chính xác.",
    q_en: "What are variadic tuple types?",
    a_en: "Variadic tuples (TS 4.0) allow spreading generic types in tuples: `type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]`. Improves typing for rest parameters and tuple manipulation. Enables modeling patterns like function composition with accurately typed args.",
  },
  {
    id: 359,
    category: "TypeScript",
    subcategory: "Generics",
    level: "intermediate",
    q: "Generic functions với multiple type parameters như thế nào?",
    a: "Hàm có thể có nhiều type params: function zip<T, U>(arr1: T[], arr2: U[]): [T, U][]. Relationships giữa params được mô tả qua constraints và conditional types. Inference hoạt động independently cho mỗi param. Đặt tên rõ ràng (TKey, TValue) thay chỉ T, U, V khi có nhiều params.",
    q_en: "How do generic functions with multiple type parameters work?",
    a_en: "Functions can have multiple type params: `function zip<T, U>(arr1: T[], arr2: U[]): [T, U][]`. Relationships between params are described through constraints and conditional types. Inference works independently for each param. Use descriptive names (TKey, TValue) instead of just T, U, V when there are multiple params.",
  },
  {
    id: 360,
    category: "TypeScript",
    subcategory: "Generics",
    level: "advanced",
    q: "Higher-kinded types trong TypeScript có thể simulate như thế nào?",
    a: "TypeScript không có native HKTs nhưng có thể simulate qua type maps (interface URItoKind) và lookup: type Kind<F, A>. Thư viện fp-ts dùng pattern này. HKTs cho phép abstract over type constructors (Functor, Monad). Phức tạp nhưng cần thiết cho functional programming patterns mạnh.",
    q_en: "How can higher-kinded types be simulated in TypeScript?",
    a_en: "TypeScript does not have native HKTs but they can be simulated via type maps (interface URItoKind) and lookups: `type Kind<F, A>`. The fp-ts library uses this pattern. HKTs allow abstracting over type constructors (Functor, Monad). Complex but necessary for advanced functional programming patterns.",
  },

  // === TypeScript: Utility Types (361-375) ===
  {
    id: 361,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "beginner",
    q: "Partial<T> và Required<T> là gì?",
    a: "Partial<T> làm tất cả properties của T thành optional. Required<T> làm tất cả optional thành required. Hữu ích: Partial cho update payloads (không cần gửi toàn bộ object), Required để enforce tất cả fields có giá trị sau validation. Chỉ shallow: không ảnh hưởng nested types.",
    q_en: "What are Partial<T> and Required<T>?",
    a_en: "Partial<T> makes all properties of T optional. Required<T> makes all optional properties required. Useful: Partial for update payloads (no need to send the entire object), Required to enforce all fields have values after validation. Both are shallow: they do not affect nested types.",
  },
  {
    id: 362,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "beginner",
    q: "Record<K, V> là gì? Khác index signature như thế nào?",
    a: "Record<Keys, Value> tạo object type với specific keys và value type: Record<string, number>. Khác index signature: Keys phải là specific union hoặc string/number/symbol. Record<'a' | 'b', number> yêu cầu cả 'a' lẫn 'b' phải có (không optional). Rõ ràng hơn và type-safe hơn index signature.",
    q_en: "What is Record<K, V>? How does it differ from an index signature?",
    a_en: "Record<Keys, Value> creates an object type with specific keys and a value type: `Record<string, number>`. Differs from index signatures: Keys must be a specific union or string/number/symbol. `Record<'a' | 'b', number>` requires both 'a' and 'b' to be present (not optional). Clearer and more type-safe than index signatures.",
  },
  {
    id: 363,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "beginner",
    q: "Pick<T, K> và Omit<T, K> là gì?",
    a: "Pick<T, K> tạo type chỉ với subset of properties K từ T: `Pick<User, 'id' | 'name'>` chỉ giữ lại id và name. Omit<T, K> là ngược lại: tạo type với tất cả properties trừ K, ví dụ `Omit<User, 'password'>` để không lộ mật khẩu trong response. Hữu ích cho DTOs, API response shaping, và form state management khi chỉ cần một phần của type. Mẹo: dùng Omit khi cần loại ít field, Pick khi cần giữ ít field — chọn cái nào viết ngắn hơn.",
    q_en: "What are Pick<T, K> and Omit<T, K>?",
    a_en: "Pick<T, K> creates a type with only a subset of properties K from T: `Pick<User, 'id' | 'name'>` keeps only id and name. Omit<T, K> is the opposite: creates a type with all properties except K, e.g., `Omit<User, 'password'>` to avoid exposing the password in a response. Useful for DTOs, API response shaping, and form state management when only part of a type is needed. Tip: use Omit when excluding few fields, Pick when keeping few fields — choose whichever is shorter to write.",
  },
  {
    id: 364,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "Exclude<T, U> và Extract<T, U> là gì?",
    a: "`Exclude<T, U>` loại bỏ khỏi union T những types có thể assign cho U: `Exclude<'a'|'b'|'c', 'a'>` cho ra `'b'|'c'`. `Extract<T, U>` ngược lại — giữ lại những types assign được cho U: `Extract<string|number|boolean, string|number>` cho ra `string|number`. Ví dụ thực tế: `type NonString<T> = Exclude<T, string>` để lọc string ra khỏi union. Mẹo nhớ: Exclude = loại ra (exclude từ vocabulary), Extract = trích ra phần giao nhau. Nền tảng của NonNullable<T> chính là `Exclude<T, null | undefined>`.",
    q_en: "What are Exclude<T, U> and Extract<T, U>?",
    a_en: "`Exclude<T, U>` removes from union T the types assignable to U: `Exclude<'a'|'b'|'c', 'a'>` gives `'b'|'c'`. `Extract<T, U>` is the opposite — keeps the types assignable to U: `Extract<string|number|boolean, string|number>` gives `string|number`. Practical example: `type NonString<T> = Exclude<T, string>` to filter strings from a union. Memory tip: Exclude = remove, Extract = keep the intersection. NonNullable<T> is built on: `Exclude<T, null | undefined>`.",
  },
  {
    id: 365,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "ReturnType<T> và Awaited<T> là gì?",
    a: "`ReturnType<T>` lấy return type của function T mà không cần khai báo lại: `type Result = ReturnType<typeof fetchUser>` tự động theo dõi khi hàm thay đổi. `Awaited<T>` unwrap Promise đệ quy: `Awaited<Promise<string>>` cho ra `string`, `Awaited<Promise<Promise<number>>>` cho ra `number`. Kết hợp cả hai cho async functions: `type Data = Awaited<ReturnType<typeof fetchData>>`. Rất hữu ích trong large codebases để tránh type duplication và đảm bảo types luôn đồng bộ với implementation.",
    q_en: "What are ReturnType<T> and Awaited<T>?",
    a_en: "`ReturnType<T>` extracts the return type of function T without re-declaring it: `type Result = ReturnType<typeof fetchUser>` automatically stays up to date when the function changes. `Awaited<T>` recursively unwraps Promises: `Awaited<Promise<string>>` gives `string`, `Awaited<Promise<Promise<number>>>` gives `number`. Combine both for async functions: `type Data = Awaited<ReturnType<typeof fetchData>>`. Very useful in large codebases to avoid type duplication and keep types in sync with implementations.",
  },
  {
    id: 366,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "NonNullable<T> là gì?",
    a: "`NonNullable<T>` loại bỏ `null` và `undefined` khỏi type T: `NonNullable<string | null | undefined>` cho ra `string`. Tương đương với `Exclude<T, null | undefined>`. Hay dùng sau khi đã kiểm tra null ở runtime nhưng TypeScript vẫn chưa tự narrow được — ví dụ kết quả từ `Array.find()` có type `T | undefined`, sau khi guard check có thể cast về `NonNullable`. Với strictNullChecks bật, đây là utility cần thiết để làm việc với optional values an toàn.",
    q_en: "What is NonNullable<T>?",
    a_en: "`NonNullable<T>` removes `null` and `undefined` from type T: `NonNullable<string | null | undefined>` gives `string`. Equivalent to `Exclude<T, null | undefined>`. Often used after null checking at runtime when TypeScript has not automatically narrowed the type — for example, `Array.find()` returns `T | undefined`, and after a guard check you can cast it to `NonNullable`. With strictNullChecks enabled, this utility is essential for safely working with optional values.",
  },
  {
    id: 367,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "Readonly<T> và ReadonlyArray<T> là gì?",
    a: "Readonly<T> làm tất cả properties của T thành readonly (shallow). ReadonlyArray<T> là array không thể modify (push, pop, sort không available). Dùng với as const, Redux state, functional programming. Deep readonly cần custom type: DeepReadonly<T> với recursive mapped type.",
    q_en: "What are Readonly<T> and ReadonlyArray<T>?",
    a_en: "Readonly<T> makes all properties of T readonly (shallow). ReadonlyArray<T> is an array that cannot be modified (push, pop, sort are unavailable). Used with as const, Redux state, and functional programming. Deep readonly requires a custom type: DeepReadonly<T> using a recursive mapped type.",
  },
  {
    id: 368,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "advanced",
    q: "InstanceType<T> và ThisParameterType<T> là gì?",
    a: "InstanceType<T> lấy type của instance khi dùng new T(): InstanceType<typeof MyClass> = MyClass. Hữu ích với factory patterns và generic class handling. ThisParameterType<T> lấy type của this parameter trong function, OmitThisParameter<T> loại bỏ nó.",
    q_en: "What are InstanceType<T> and ThisParameterType<T>?",
    a_en: "InstanceType<T> extracts the type of an instance when using `new T()`: `InstanceType<typeof MyClass>` = MyClass. Useful with factory patterns and generic class handling. ThisParameterType<T> extracts the type of the this parameter in a function; OmitThisParameter<T> removes it.",
  },
  {
    id: 369,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "Hãy implement Partial<T> từ đầu để hiểu cách hoạt động.",
    a: `Dùng mapped type iterate qua tất cả keys của T, thêm \`?\` để optional.
\`\`\`typescript
// Partial<T>: tất cả optional
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Required<T>: dấu - xóa optional modifier
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

// Readonly<T>
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Pick<T, K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Record<K, V>
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

// Kiểm tra
type User = { id: number; name: string; email?: string };
type PartialUser = MyPartial<User>;
// { id?: number; name?: string; email?: string }
\`\`\`
Hiểu cách này giúp tạo custom utility types bất kỳ.`,
    q_en: "Implement Partial<T> from scratch to understand how it works.",
    a_en: `Uses a mapped type to iterate over all keys of T and adds \`?\` to make them optional.
\`\`\`typescript
// Partial<T>: all optional
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Required<T>: minus removes the optional modifier
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

// Readonly<T>
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Pick<T, K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Record<K, V>
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

// Verify
type User = { id: number; name: string; email?: string };
type PartialUser = MyPartial<User>;
// { id?: number; name?: string; email?: string }
\`\`\`
Understanding this helps you create any custom utility type.`,
  },
  {
    id: 370,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "advanced",
    q: "Mutable<T> (ngược của Readonly) tạo như thế nào?",
    a: "TypeScript không có built-in Mutable nhưng có thể tạo: type Mutable<T> = { -readonly [K in keyof T]: T[K] }. Dấu - trước readonly xóa readonly modifier. Hữu ích khi cần temporarily mutate readonly objects (trong test setup chẳng hạn). Cũng có thể combine: type WritablePick<T, K extends keyof T>.",
    q_en: "How do you create Mutable<T> (the opposite of Readonly)?",
    a_en: "TypeScript has no built-in Mutable but you can create one: `type Mutable<T> = { -readonly [K in keyof T]: T[K] }`. The minus before readonly removes the readonly modifier. Useful when you need to temporarily mutate readonly objects (e.g., in test setup). Can also be combined: `type WritablePick<T, K extends keyof T>`.",
  },
  {
    id: 371,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "const enum và regular enum khác nhau về runtime như thế nào?",
    a: "Regular enum compile thành JS object (có runtime overhead, hỗ trợ reverse lookup). Const enum inline tất cả values tại compile time (không sinh runtime code, không có reverse lookup). Const enum không dùng được với declaration files và isolatedModules. Prefer string literal unions thay enum trong nhiều trường hợp.",
    q_en: "How do const enum and regular enum differ at runtime?",
    a_en: "Regular enums compile to JS objects (runtime overhead, supports reverse lookup). Const enums inline all values at compile time (no runtime code generated, no reverse lookup). Const enums cannot be used with declaration files and isolatedModules. In many cases, prefer string literal unions over enums.",
  },
  {
    id: 372,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "advanced",
    q: "Deep partial và deep readonly type tạo như thế nào?",
    a: "DeepPartial được tạo bằng recursive conditional type: nếu T là object thì áp dụng optional modifier cho mỗi key và đệ quy vào giá trị con, ngược lại trả về T nguyên bản (type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T). DeepReadonly cần xử lý riêng trường hợp array bằng cách kiểm tra T extends (infer U)[] trước để chuyển thành ReadonlyArray<DeepReadonly<U>>, sau đó mới xử lý object bằng cách thêm readonly modifier cho tất cả keys và đệ quy tiếp. Việc tách riêng logic cho array là bắt buộc vì array có semantics khác với object thông thường, nếu không sẽ mất đi các array methods và tính đúng đắn của kiểu dữ liệu.",
    q_en: "How do you create deep partial and deep readonly types?",
    a_en: "DeepPartial is created using a recursive conditional type: if T is an object, apply the optional modifier to each key and recurse into child values, otherwise return T as-is (`type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T`). DeepReadonly needs to handle arrays separately by checking `T extends (infer U)[]` first to convert them to `ReadonlyArray<DeepReadonly<U>>`, then handle objects by adding readonly to all keys and recursing. Separating array logic is mandatory because arrays have different semantics from plain objects, otherwise array methods and type correctness would be lost.",
  },
  {
    id: 373,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "Parameters và ReturnType kết hợp như thế nào để tạo hàm wrapper?",
    a: "Dùng Parameters<T> và ReturnType<T> để type hàm wrapper giữ nguyên signature: function wrapper<T extends (...args: any) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>. Hoặc dùng spread trong tuple: (...args: Parameters<T>) để forward args chính xác.",
    q_en: "How do Parameters and ReturnType combine to create a wrapper function?",
    a_en: "Use Parameters<T> and ReturnType<T> to type a wrapper function that preserves the original signature: `function wrapper<T extends (...args: any) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>`. Or use spread in a tuple: `(...args: Parameters<T>)` to forward args accurately.",
  },
  {
    id: 374,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "advanced",
    q: "Template literal utility types (Uppercase, Lowercase, Capitalize, Uncapitalize) là gì?",
    a: "Bốn intrinsic string manipulation types: Uppercase<S> chuyển toàn bộ thành hoa, Lowercase về thường, Capitalize chữ đầu thành hoa, Uncapitalize ngược lại. Dùng để tạo type-safe string transformations: type EventHandler<T extends string> = `on${Capitalize<T>}`.",
    q_en: "What are the template literal utility types (Uppercase, Lowercase, Capitalize, Uncapitalize)?",
    a_en: "Four intrinsic string manipulation types: Uppercase<S> converts all characters to uppercase, Lowercase to lowercase, Capitalize makes the first character uppercase, Uncapitalize does the opposite. Used to create type-safe string transformations: `type EventHandler<T extends string> = \\`on${Capitalize<T>}\\``.",
  },
  {
    id: 375,
    category: "TypeScript",
    subcategory: "Utility Types",
    level: "intermediate",
    q: "ThisType<T> utility type là gì?",
    a: "ThisType<T> chỉ có effect khi --noImplicitThis bật. Dùng trong object literal để set context type của this bên trong methods. Không ảnh hưởng kết quả type, chỉ affect type của this trong scope đó. Dùng bởi Vue 2 options API để type this trong component options.",
    q_en: "What is the ThisType<T> utility type?",
    a_en: "ThisType<T> only has an effect when --noImplicitThis is enabled. Used in object literals to set the context type of this inside methods. It does not affect the resulting type, only the type of this within that scope. Used by Vue 2's options API to type this within component options.",
  },

  // === TypeScript: Advanced (376-400) ===
  {
    id: 376,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Type guards là gì? Các loại type guards trong TypeScript?",
    a: "Type guards thu hẹp type trong code branch. Loại: 1) typeof ('string', 'number'...), 2) instanceof (class instances), 3) in operator (property check), 4) equality (==, ===), 5) user-defined (function với return type is Type), 6) assertion functions (asserts condition). User-defined guards rất mạnh để custom narrowing.",
    q_en: "What are type guards? What types of type guards exist in TypeScript?",
    a_en: "Type guards narrow a type within a code branch. Types: 1) typeof ('string', 'number'...), 2) instanceof (class instances), 3) in operator (property check), 4) equality (==, ===), 5) user-defined (function with return type `is Type`), 6) assertion functions (asserts condition). User-defined guards are very powerful for custom narrowing.",
  },
  {
    id: 377,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "User-defined type guards (type predicates) là gì?",
    a: `Function type với return type \`param is Type\`. Khi function return true, TS narrow type của param.
\`\`\`typescript
// Type predicate
function isString(val: unknown): val is string {
  return typeof val === 'string';
}

// Sử dụng
function process(val: string | number) {
  if (isString(val)) {
    val.toUpperCase(); // val: string
  } else {
    val.toFixed(2);   // val: number
  }
}

// Thực tế: kiểm tra object shape
interface Cat { meow(): void }
interface Dog { bark(): void }

function isCat(animal: Cat | Dog): animal is Cat {
  return 'meow' in animal;
}

// Array filter với type guard
const items: (string | null)[] = ['a', null, 'b'];
const strings = items.filter((x): x is string => x !== null);
// strings: string[]
\`\`\`
Nguy hiểm: TS tin type predicate hoàn toàn, implementation sai sẽ gây runtime bug mà không có compile error.`,
    q_en: "What are user-defined type guards (type predicates)?",
    a_en: `A function with a return type of \`param is Type\`. When the function returns true, TS narrows the type of the param.
\`\`\`typescript
// Type predicate
function isString(val: unknown): val is string {
  return typeof val === 'string';
}

// Usage
function process(val: string | number) {
  if (isString(val)) {
    val.toUpperCase(); // val: string
  } else {
    val.toFixed(2);   // val: number
  }
}

// Practical: check object shape
interface Cat { meow(): void }
interface Dog { bark(): void }

function isCat(animal: Cat | Dog): animal is Cat {
  return 'meow' in animal;
}

// Array filter with type guard
const items: (string | null)[] = ['a', null, 'b'];
const strings = items.filter((x): x is string => x !== null);
// strings: string[]
\`\`\`
Dangerous: TS fully trusts the type predicate; a wrong implementation causes runtime bugs without compile errors.`,
  },
  {
    id: 378,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Decorators trong TypeScript là gì?",
    a: "Decorators là function đặc biệt apply lên class/method/property/accessor/parameter để modify behavior. Dùng @decorator syntax. TS 5.0+ hỗ trợ TC39 Stage 3 decorators natively (không cần flag). Legacy decorators (Angular, NestJS) vẫn dùng experimentalDecorators: true — hai loại không tương thích. Decorator factories: @Log() trả về decorator function.",
    q_en: "What are decorators in TypeScript?",
    a_en: "Decorators are special functions applied to classes/methods/properties/accessors/parameters to modify behavior. Use @decorator syntax. TS 5.0+ supports TC39 Stage 3 decorators natively (no flag needed). Legacy decorators (Angular, NestJS) still use experimentalDecorators: true — the two types are incompatible. Decorator factories: @Log() returns a decorator function.",
  },
  {
    id: 379,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Decorator metadata và reflect-metadata là gì?",
    a: "Reflect Metadata API cho phép đọc/ghi metadata trên class/method tại runtime. TypeScript emit metadata khi emitDecoratorMetadata: true (design:type, design:paramtypes, design:returntype). Dùng bởi dependency injection frameworks (Angular, NestJS) để resolve constructor params tự động.",
    q_en: "What are decorator metadata and reflect-metadata?",
    a_en: "The Reflect Metadata API allows reading/writing metadata on classes/methods at runtime. TypeScript emits metadata when emitDecoratorMetadata: true (design:type, design:paramtypes, design:returntype). Used by dependency injection frameworks (Angular, NestJS) to automatically resolve constructor parameters.",
  },
  {
    id: 380,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Function overloads trong TypeScript là gì?",
    a: "Function overloads khai báo nhiều function signatures trước implementation: ít nhất 2 overload signatures + 1 implementation signature. Implementation phải compatible với tất cả overloads. Dùng khi function return type hoặc parameters khác nhau tùy input types. Giúp caller có type info chính xác cho mỗi usage.",
    q_en: "What are function overloads in TypeScript?",
    a_en: "Function overloads declare multiple function signatures before the implementation: at least 2 overload signatures + 1 implementation signature. The implementation must be compatible with all overloads. Used when a function's return type or parameters differ depending on the input types. Gives callers accurate type information for each usage.",
  },
  {
    id: 381,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Declaration files (.d.ts) là gì?",
    a: "Declaration files chứa type declarations không có implementation (ambient declarations). Dùng để type third-party libraries không viết bằng TS. @types/ packages trên npm. Tự viết .d.ts khi cần declare types cho JS code hoặc global variables. declare module, declare global để augment types.",
    q_en: "What are declaration files (.d.ts)?",
    a_en: "Declaration files contain type declarations without implementations (ambient declarations). Used to type third-party libraries not written in TS. Available as @types/ packages on npm. Write your own .d.ts when you need to declare types for JS code or global variables. Use declare module, declare global to augment types.",
  },
  {
    id: 382,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "tsconfig.json các options quan trọng nhất là gì?",
    a: "Trong tsconfig.json, strict: true là option quan trọng nhất vì nó bật toàn bộ strict type-checking bao gồm strictNullChecks, noImplicitAny và strictFunctionTypes. target xác định phiên bản ES output (ví dụ ES2020), module chọn hệ thống module (ESNext, CommonJS), và moduleResolution quyết định cách TypeScript tìm kiếm file khi import (node, bundler). Ngoài ra, paths cho phép cấu hình path aliases (ví dụ @/components), isolatedModules bắt buộc khi dùng bundlers như Vite hoặc esbuild vì chúng compile từng file riêng lẻ, và sourceMap: true giúp debug bằng cách map code đã compile về source TypeScript gốc.",
    q_en: "What are the most important tsconfig.json options?",
    a_en: "In tsconfig.json, strict: true is the most important option as it enables all strict type-checking including strictNullChecks, noImplicitAny, and strictFunctionTypes. target specifies the ES output version (e.g., ES2020), module selects the module system (ESNext, CommonJS), and moduleResolution determines how TypeScript resolves files when importing (node, bundler). Additionally, paths enables path aliases (e.g., @/components), isolatedModules is required when using bundlers like Vite or esbuild since they compile each file individually, and sourceMap: true aids debugging by mapping compiled code back to the original TypeScript source.",
  },
  {
    id: 383,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Conditional types với distributive behavior là gì? Cách disable?",
    a: "Distributive conditional types xảy ra khi type parameter T đứng trơn (naked) trong điều kiện extends: TypeScript sẽ tự động tách union ra và áp dụng điều kiện cho từng thành phần, ví dụ (A | B) extends U ? X : Y sẽ thành (A extends U ? X : Y) | (B extends U ? X : Y). Hành vi này thường gây kết quả bất ngờ, ví dụ type IsNever<T> = T extends never ? true : false sẽ trả về never thay vì true khi T = never vì union rỗng không có phần tử nào để distribute. Để disable distributive behavior, ta wrap type parameter trong tuple: [T] extends [U] ? X : Y, lúc này TypeScript sẽ so sánh toàn bộ union như một khối thay vì phân tách từng thành phần.",
    q_en: "What is the distributive behavior of conditional types? How do you disable it?",
    a_en: "Distributive conditional types occur when a type parameter T appears naked (unwrapped) in the extends condition: TypeScript automatically splits unions and applies the condition to each member, so `(A | B) extends U ? X : Y` becomes `(A extends U ? X : Y) | (B extends U ? X : Y)`. This often produces unexpected results, for example `type IsNever<T> = T extends never ? true : false` returns never instead of true when T = never because the empty union has no members to distribute over. To disable distributive behavior, wrap the type parameter in a tuple: `[T] extends [U] ? X : Y`, which causes TypeScript to compare the entire union as a block rather than splitting it into parts.",
  },
  {
    id: 384,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "TypeScript với React: generics trong components là gì?",
    a: "Generic components: function List<T>({items}: {items: T[]}) - nhưng trong .tsx cần disambiguate: <T,>({items}) hoặc <T extends unknown>. Generic components cần với tables, select components, form fields. React.FC<Props> vs function declaration - prefer function declaration cho flexibility.",
    q_en: "What are generics in React components in TypeScript?",
    a_en: "Generic components: `function List<T>({items}: {items: T[]})` — in .tsx files you need to disambiguate: `<T,>({items})` or `<T extends unknown>`. Generic components are necessary for tables, select components, and form fields. React.FC<Props> vs function declaration — prefer function declarations for flexibility.",
  },
  {
    id: 385,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "TypeScript với React: typing hooks như thế nào?",
    a: "useState: useState<Type>(init) khi init không đủ thông tin. useRef: useRef<HTMLElement>(null) cho DOM refs, useRef<T>(initialValue) cho mutable values. useReducer: type actions với discriminated unions. Custom hooks: return type thường được infer, nhưng có thể explicit để stable API.",
    q_en: "How do you type React hooks with TypeScript?",
    a_en: "useState: use `useState<Type>(init)` when init does not provide enough information for inference. useRef: `useRef<HTMLElement>(null)` for DOM refs, `useRef<T>(initialValue)` for mutable values. useReducer: type actions with discriminated unions. Custom hooks: return types are usually inferred, but can be made explicit for a stable API.",
  },
  {
    id: 386,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "TypeScript với React: typing events là gì?",
    a: "React.ChangeEvent<HTMLInputElement> cho onChange, React.MouseEvent<HTMLButtonElement> cho onClick, React.FormEvent<HTMLFormElement> cho onSubmit. Nếu không nhớ chính xác: event.target, hover lên event trong IDE, hoặc dùng React.SyntheticEvent rộng hơn. event.target as HTMLInputElement để access value.",
    q_en: "How do you type React events in TypeScript?",
    a_en: "React.ChangeEvent<HTMLInputElement> for onChange, React.MouseEvent<HTMLButtonElement> for onClick, React.FormEvent<HTMLFormElement> for onSubmit. If you cannot remember the exact type: check event.target, hover over the event in your IDE, or use the broader React.SyntheticEvent. Use `event.target as HTMLInputElement` to access value.",
  },
  {
    id: 387,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Assertion functions trong TypeScript là gì?",
    a: "Assertion functions type với 'asserts condition' hoặc 'asserts param is Type'. Khi function return (không throw), TS assume assertion đúng và narrow type. Dùng cho validation functions, invariant checks: function assert(cond: unknown): asserts cond { if (!cond) throw new Error() }.",
    q_en: "What are assertion functions in TypeScript?",
    a_en: "Assertion functions have a type of 'asserts condition' or 'asserts param is Type'. When the function returns (without throwing), TS assumes the assertion holds and narrows the type. Used for validation functions and invariant checks: `function assert(cond: unknown): asserts cond { if (!cond) throw new Error() }`.",
  },
  {
    id: 388,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "NoInfer<T> utility type là gì?",
    a: "NoInfer<T> (TS 5.4) ngăn TypeScript infer type từ một argument cụ thể, forcing inference từ các arguments khác. Giải quyết vấn đề khi có multiple inference sites conflict. \n\n**Ví dụ:** hàm với default value - không muốn default value ảnh hưởng inference của type parameter chính.",
    q_en: "What is the NoInfer<T> utility type?",
    a_en: "NoInfer<T> (TS 5.4) prevents TypeScript from inferring a type from a specific argument, forcing inference from other arguments. Solves the problem of conflicting inference sites. \n\n**Example:** a function with a default value — you do not want the default value to influence inference of the main type parameter.",
  },
  {
    id: 389,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Tại sao TypeScript dùng structural typing thay nominal typing?",
    a: "Structural typing (duck typing) kiểm tra shape/structure thay tên type. Hai types tương thích nếu có cùng properties. Phù hợp hơn với JavaScript (dynamic, object literal heavy). Nominal typing cần kiểm tra theo tên class/type. TypeScript kết hợp: structural làm mặc định + branded types cho nominal khi cần.",
    q_en: "Why does TypeScript use structural typing instead of nominal typing?",
    a_en: "Structural typing (duck typing) checks shape/structure rather than type names. Two types are compatible if they have the same properties. This fits JavaScript better (dynamic, object-literal heavy). Nominal typing requires checking by class/type name. TypeScript combines both: structural by default + branded types for nominal typing when needed.",
  },
  {
    id: 390,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Type compatibility và assignability trong TypeScript hoạt động như thế nào?",
    a: "A assignable cho B nếu A có tất cả (và có thể nhiều hơn) properties của B. Subtype có thể assign cho supertype. Function parameters: contravariant (param type của subtype phải rộng hơn hoặc bằng). Return type: covariant (return type của subtype phải hẹp hơn hoặc bằng). strictFunctionTypes enforce contravariance.",
    q_en: "How do type compatibility and assignability work in TypeScript?",
    a_en: "A is assignable to B if A has all (and possibly more) properties of B. A subtype can be assigned to a supertype. Function parameters: contravariant (the param type of a subtype must be the same or wider). Return type: covariant (the return type of a subtype must be the same or narrower). strictFunctionTypes enforces contravariance.",
  },
  {
    id: 391,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "const type parameters (TS 5.0) là gì?",
    a: "const type parameters: function identity<const T>(val: T): T. Giúp infer literal types mà không cần as const. Trước đây cần as const để get literal types, giờ generics tự infer. Hữu ích cho config objects, routing definitions, và bất kỳ nơi nào muốn preserve literal types.",
    q_en: "What are const type parameters (TS 5.0)?",
    a_en: "Const type parameters: `function identity<const T>(val: T): T`. Infers literal types without needing as const. Previously, as const was required to get literal types; now generics can infer them automatically. Useful for config objects, routing definitions, and anywhere you want to preserve literal types.",
  },
  {
    id: 392,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Discriminated unions vs class hierarchy khi nào dùng cái nào?",
    a: "Discriminated unions: prefer khi data-centric, cần exhaustive matching, serializable (Redux actions, API responses). Class hierarchy: khi cần behavior với data, encapsulation, OOP patterns. Functional code thường prefer discriminated unions vì pattern matching dễ hơn. TypeScript exhausiveness checking qua never type.",
    q_en: "When should you use discriminated unions vs class hierarchies?",
    a_en: "Discriminated unions: prefer when data-centric, need exhaustive matching, or the data must be serializable (Redux actions, API responses). Class hierarchy: when you need behavior bundled with data, encapsulation, or OOP patterns. Functional code typically prefers discriminated unions because pattern matching is easier. TypeScript exhaustiveness checking uses the never type.",
  },
  {
    id: 393,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Exhaustiveness checking trong TypeScript là gì?",
    a: `Sau khi handle tất cả cases trong discriminated union, assign default case sang variable type \`never\`. Nếu có case chưa handle, TS báo lỗi.
\`\`\`typescript
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    case 'RESET':     return 0;
    default:
      // Nếu thêm 'SET' vào Action mà không handle, dòng này báo lỗi
      const exhaustive: never = action;
      throw new Error(\`Unhandled action: \${exhaustive}\`);
  }
}

// Hoặc dùng helper function
function assertNever(x: never): never {
  throw new Error('Unexpected value: ' + x);
}
\`\`\`
Pattern này đảm bảo thêm case mới vào union sẽ bị catch ngay tại compile time.`,
    q_en: "What is exhaustiveness checking in TypeScript?",
    a_en: `After handling all cases of a discriminated union, assign the default case to a variable of type \`never\`. If any case is unhandled, TS reports an error.
\`\`\`typescript
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    case 'RESET':     return 0;
    default:
      // If 'SET' is added to Action without handling it, this line errors
      const exhaustive: never = action;
      throw new Error(\`Unhandled action: \${exhaustive}\`);
  }
}

// Or use a helper function
function assertNever(x: never): never {
  throw new Error('Unexpected value: ' + x);
}
\`\`\`
This pattern ensures that adding a new case to the union is caught immediately at compile time.`,
  },
  {
    id: 394,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "using declarations và Symbol.dispose (TS 5.2) là gì?",
    a: "using declaration là tính năng từ đề xuất TC39 Explicit Resource Management, được TypeScript 5.2 hỗ trợ, cho phép tự động giải phóng tài nguyên khi biến ra khỏi scope mà không cần viết try/finally thủ công, ví dụ: using file = openFile() sẽ tự gọi cleanup khi kết thúc block. Object được gán cho using phải implement method [Symbol.dispose]() để TypeScript biết cách giải phóng, còn với tài nguyên bất đồng bộ thì dùng await using kết hợp với [Symbol.asyncDispose](). Tính năng này đặc biệt hữu ích cho việc quản lý file handles, database connections, và event listeners vì đảm bảo tài nguyên luôn được dọn dẹp đúng cách ngay cả khi có exception xảy ra.",
    q_en: "What are using declarations and Symbol.dispose (TS 5.2)?",
    a_en: "The using declaration is a feature from the TC39 Explicit Resource Management proposal, supported in TypeScript 5.2, that automatically disposes of resources when a variable goes out of scope without needing manual try/finally, for example: `using file = openFile()` automatically calls cleanup when the block ends. The object assigned to using must implement a `[Symbol.dispose]()` method so TypeScript knows how to release it; for async resources, use `await using` combined with `[Symbol.asyncDispose]()`. This feature is especially useful for managing file handles, database connections, and event listeners because it guarantees resources are always cleaned up correctly even when exceptions occur.",
  },
  {
    id: 395,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Path aliases trong TypeScript (paths config) là gì?",
    a: "paths trong tsconfig.json map import paths: '@components/*': ['src/components/*']. Giúp import ngắn hơn thay relative paths dài. Cần configure cả bundler (Vite, Webpack) vì TS compiler chỉ handle types, không transform imports. Dùng @ prefix là convention phổ biến.",
    q_en: "What are path aliases in TypeScript (paths config)?",
    a_en: "paths in tsconfig.json maps import paths: `'@components/*': ['src/components/*']`. Gives shorter imports instead of long relative paths. Requires configuring both TS and the bundler (Vite, Webpack) because the TS compiler only handles types and does not transform imports. The @ prefix is a common convention.",
  },
  {
    id: 396,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Isolated modules và tại sao Vite/esbuild yêu cầu nó?",
    a: "isolatedModules: true yêu cầu mỗi file có thể compile standalone (không cần cross-file type information). Vite/esbuild strip types từng file riêng (nhanh hơn) thay full type checking. Hạn chế: không dùng const enum, namespace, và phải export type tường minh (import type). TS vẫn type check đầy đủ khi build.",
    q_en: "What is isolatedModules and why do Vite/esbuild require it?",
    a_en: "isolatedModules: true requires each file to be compilable standalone (without cross-file type information). Vite/esbuild strip types from each file individually (faster) rather than doing a full type check. Limitations: const enums, namespaces, and implicit type re-exports cannot be used — explicit `import type` is required. TS still performs a full type check during build.",
  },
  {
    id: 397,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "TypeScript project references là gì?",
    a: "Project references trong tsconfig cho phép chia large codebase thành nhiều TS projects có thể build independently và incrementally. Mỗi project có tsconfig với references. tsc --build (hoặc -b) xây dựng theo dependency order. Cải thiện build time và IDE performance cho monorepos.",
    q_en: "What are TypeScript project references?",
    a_en: "Project references in tsconfig allow splitting a large codebase into multiple TS projects that can be built independently and incrementally. Each project has a tsconfig with references. `tsc --build` (or -b) builds in dependency order. Improves build time and IDE performance in monorepos.",
  },
  {
    id: 398,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Type-only imports và exports là gì?",
    a: "Type-only imports (import type { Foo } from './foo') chỉ import thông tin kiểu dữ liệu và bị xóa hoàn toàn khỏi code JavaScript sau khi compile, không tạo ra bất kỳ runtime import nào. Điều này đặc biệt quan trọng khi bật isolatedModules (bắt buộc với Vite, esbuild) vì các bundler này compile từng file riêng lẻ và không thể biết một import là type hay value. Tương tự, export type { Foo } dùng để re-export chỉ type information, giúp ngăn circular dependency issues vì không tạo side effects ở runtime. Từ TypeScript 5.0+, ta có thể mix type và value imports trong cùng một statement: import { type Foo, bar } from './module', trong đó chỉ bar được giữ lại sau compile.",
    q_en: "What are type-only imports and exports?",
    a_en: "Type-only imports (`import type { Foo } from './foo'`) only import type information and are completely erased from the compiled JavaScript, producing no runtime import. This is particularly important with isolatedModules (required for Vite and esbuild) because those bundlers compile each file individually and cannot tell whether an import is a type or a value. Similarly, `export type { Foo }` re-exports only type information, helping prevent circular dependency issues since there are no runtime side effects. From TypeScript 5.0+, you can mix type and value imports in a single statement: `import { type Foo, bar } from './module'`, where only bar is retained after compilation.",
  },
  {
    id: 399,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "Ambient declarations là gì?",
    a: "Ambient declarations (declare keyword) nói với TS về types tồn tại ở runtime nhưng không qua import: declare const jQuery: any. declare module, declare namespace, declare global để mô tả global APIs, third-party libs, hay augment existing types. .d.ts files chứa toàn bộ ambient declarations.",
    q_en: "What are ambient declarations?",
    a_en: "Ambient declarations (the declare keyword) tell TS about types that exist at runtime but are not imported: `declare const jQuery: any`. Use declare module, declare namespace, declare global to describe global APIs, third-party libraries, or to augment existing types. .d.ts files consist entirely of ambient declarations.",
  },
  {
    id: 400,
    category: "TypeScript",
    subcategory: "Advanced",
    level: "advanced",
    q: "TypeScript performance: tại sao type checking có thể chậm và cách cải thiện?",
    a: "Type checking chậm do: complex conditional types, deep recursion, large union types, excessive use of infer. Cải thiện: bật incremental compilation, dùng project references, skipLibCheck: true, tránh deeply recursive types, prefer interface over type cho object shapes (merge tốt hơn), dùng tsc --diagnostics để profile.",
    q_en: "Why can TypeScript type checking be slow, and how do you improve it?",
    a_en: "Type checking can be slow due to: complex conditional types, deep recursion, large union types, and excessive use of infer. Improvements: enable incremental compilation, use project references, set skipLibCheck: true, avoid deeply recursive types, prefer interface over type for object shapes (merges better), and use `tsc --diagnostics` to profile.",
  },
];
