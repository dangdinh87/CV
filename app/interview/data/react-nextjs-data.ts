import type { QAItem } from '../interview-data'

export const REACT_NEXTJS_DATA: QAItem[] = [
  // === React - JSX & Cơ Bản (401-415) ===
  { id: 401, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "JSX là gì và tại sao React sử dụng nó?", a: "JSX (JavaScript XML) là cú pháp mở rộng của JavaScript cho phép viết HTML bên trong JavaScript. React sử dụng JSX vì nó giúp mô tả UI trực quan hơn, kết hợp logic và markup trong cùng một file component. Babel transpile JSX thành các lời gọi React.createElement() trước khi chạy trên trình duyệt.", q_en: "What is JSX and why does React use it?", a_en: "JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript. React uses JSX because it makes describing UI more intuitive by combining logic and markup in the same component file. Babel transpiles JSX into React.createElement() calls before the code runs in the browser." },
  { id: 402, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "JSX được transpile thành gì? Hãy cho ví dụ minh họa.", a: "JSX được Babel transpile thành React.createElement(type, props, ...children). \n\n**Ví dụ:** `<h1 className='title'>Hello</h1>` trở thành `React.createElement('h1', { className: 'title' }, 'Hello')`. Kể từ React 17, có thể sử dụng JSX mà không cần import React nhờ transform tự động.", q_en: "What does JSX compile to? Give an example.", a_en: "Babel transpiles JSX into React.createElement(type, props, ...children) calls. For example, `<h1 className='title'>Hello</h1>` becomes `React.createElement('h1', { className: 'title' }, 'Hello')`. Since React 17, you can use JSX without importing React thanks to the automatic JSX transform." },
  { id: 403, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Conditional rendering trong React được thực hiện như thế nào?", a: "Có nhiều cách: toán tử ba ngôi `isLoggedIn ? <Dashboard /> : <Login />`, toán tử && `isLoading && <Spinner />`, hoặc if/else bên ngoài return. Trong thực tế, ternary dùng cho toggle giữa 2 component, && dùng để hiển thị/ẩn một component. Cần tránh `count && <List />` vì nếu count=0, React render số 0 thay vì không render gì.", q_en: "How is conditional rendering handled in React?", a_en: "There are several approaches: the ternary operator `isLoggedIn ? <Dashboard /> : <Login />`, the logical AND `isLoading && <Spinner />`, or an if/else block outside the return statement. In practice, ternary is used to toggle between two components, and && is used to show or hide a single component. Avoid `count && <List />` because if count is 0, React renders the number 0 instead of nothing." },
  { id: 404, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "React Fragment là gì và khi nào nên sử dụng?", a: "React Fragment (`<React.Fragment>` hoặc `<>`) cho phép nhóm nhiều phần tử mà không thêm node DOM thừa. Sử dụng khi component cần trả về nhiều phần tử cùng cấp, ví dụ trong table rows hay danh sách. Cú pháp rút gọn `<>...</>` không hỗ trợ thuộc tính key, cần dùng `<React.Fragment key={id}>` khi render danh sách.", q_en: "What is a React Fragment and when should you use it?", a_en: "React Fragment (`<React.Fragment>` or `<>`) lets you group multiple elements without adding an extra DOM node. Use it when a component needs to return several sibling elements, such as table rows or list items. The shorthand `<>...</>` does not support the key attribute, so use `<React.Fragment key={id}>` when rendering lists." },
  { id: 405, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Key prop trong React là gì và tại sao nó quan trọng?", a: "Key là prop đặc biệt giúp React xác định phần tử nào trong danh sách đã thay đổi, được thêm hoặc bị xóa. React sử dụng key để tối ưu hóa quá trình reconciliation, tránh re-render không cần thiết. Key phải là chuỗi hoặc số duy nhất trong cùng cấp độ, không nên dùng index khi danh sách có thể thay đổi thứ tự.", q_en: "What is the key prop in React and why does it matter?", a_en: "The key prop is a special attribute that helps React identify which items in a list have changed, been added, or been removed. React uses keys to optimize the reconciliation process and avoid unnecessary re-renders. Keys must be unique strings or numbers among siblings; avoid using the array index as a key when the list order can change." },
  { id: 406, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Tại sao phải dùng className thay vì class trong JSX?", a: "JSX được biên dịch thành JavaScript, và `class` là từ khóa dành riêng trong JS để khai báo lớp ES6. Do đó React dùng `className` để ánh xạ đến thuộc tính `class` của DOM, tránh xung đột cú pháp. Tương tự, thuộc tính `for` của label được thay bằng `htmlFor`. Lỗi thường gặp khi copy HTML sang JSX là quên đổi các thuộc tính này.", q_en: "Why must you use className instead of class in JSX?", a_en: "JSX compiles to JavaScript, and `class` is a reserved keyword in JS for ES6 class declarations. React therefore uses `className` to map to the DOM `class` attribute and avoid a syntax conflict. Similarly, the label `for` attribute becomes `htmlFor`. A common mistake when copying HTML into JSX is forgetting to rename these attributes." },
  { id: 407, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Làm thế nào để render danh sách trong JSX?", a: "Dùng Array.map() để chuyển đổi mảng dữ liệu thành mảng JSX elements. Mỗi phần tử cần có thuộc tính key duy nhất để React theo dõi. \n\n**Ví dụ:** `{items.map(item => <li key={item.id}>{item.name}</li>)}`. Tránh dùng index làm key nếu thứ tự danh sách có thể thay đổi.", q_en: "How do you render a list in JSX?", a_en: "Use Array.map() to transform a data array into an array of JSX elements. Each element needs a unique key attribute for React to track it. \n\n**Example:** `{items.map(item => <li key={item.id}>{item.name}</li>)}`. Avoid using the array index as a key if the list order can change." },
  { id: 408, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Sự khác nhau giữa biểu thức và câu lệnh trong JSX là gì?", a: "JSX chỉ chấp nhận biểu thức (expressions) trong `{}`, không nhận câu lệnh (statements) như if, for, while vì JSX được transpile thành lời gọi hàm. \n\n**Ví dụ:** `{items.map(i => <li key={i.id}>{i.name}</li>)}` hợp lệ, nhưng `{for(...)}` thì không. Dùng ternary cho điều kiện, map/filter để lặp. Nếu logic phức tạp, tính toán bên ngoài return rồi dùng biến trong JSX.", q_en: "What is the difference between expressions and statements in JSX?", a_en: "JSX only accepts expressions inside `{}`, not statements like if, for, or while — because JSX compiles to function calls that must return a value. For example, `{items.map(i => <li key={i.id}>{i.name}</li>)}` is valid, but `{for(...)}` is not. Use the ternary operator for conditions and map/filter for iteration. For complex logic, compute values before the return and use variables in JSX." },
  { id: 409, category: "React", subcategory: "JSX & Cơ Bản", level: "intermediate", q: "Inline styles trong JSX hoạt động như thế nào?", a: "Trong JSX, inline style nhận vào một object JavaScript với camelCase property thay vì kebab-case CSS. \n\n**Ví dụ:** `style={{ backgroundColor: 'red', fontSize: '16px' }}`. Giá trị số tự động được thêm đơn vị px, nhưng một số thuộc tính như zIndex, opacity nhận số thuần. Double braces là do brace ngoài là JSX expression, brace trong là object.", q_en: "How do inline styles work in JSX?", a_en: "In JSX, the style attribute takes a JavaScript object with camelCase property names instead of CSS kebab-case. \n\n**Example:** `style={{ backgroundColor: 'red', fontSize: '16px' }}`. Numeric values automatically get a px unit appended, though some properties like zIndex and opacity accept plain numbers. The double braces occur because the outer brace is the JSX expression container and the inner brace is the object literal." },
  { id: 410, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Event handling trong JSX khác gì so với HTML thông thường?", a: "Trong JSX, tên event dùng camelCase (onClick, onChange, onSubmit) thay vì lowercase. Handler là function reference, không phải string. Để ngăn hành vi mặc định, gọi e.preventDefault() trong handler thay vì return false. React sử dụng synthetic events để đảm bảo tính nhất quán giữa các trình duyệt.", q_en: "How does event handling in JSX differ from standard HTML?", a_en: "In JSX, event names use camelCase (onClick, onChange, onSubmit) instead of lowercase. The handler is a function reference, not a string. To prevent default browser behavior, call e.preventDefault() inside the handler rather than returning false. React wraps native events in SyntheticEvents to ensure cross-browser consistency." },
  { id: 411, category: "React", subcategory: "JSX & Cơ Bản", level: "intermediate", q: "Self-closing tags trong JSX được dùng như thế nào?", a: "Mọi JSX element đều phải được đóng — kể cả các thẻ HTML vốn tự đóng trong HTML5. Các thẻ không có nội dung con dùng self-closing syntax: `<br />`, `<img src='...' />`, `<MyComponent />`. Đây là yêu cầu bắt buộc, khác HTML5 nơi `<br>` không cần dấu đóng. Lỗi phổ biến khi chuyển template HTML sang JSX là quên thêm dấu `/` trước `>`.", q_en: "How are self-closing tags used in JSX?", a_en: "Every JSX element must be explicitly closed, including tags that are self-closing in HTML5. Elements with no children use the self-closing syntax: `<br />`, `<img src='...' />`, `<MyComponent />`. This is a strict requirement in JSX, unlike HTML5 where `<br>` needs no closing slash. A common mistake when converting HTML templates to JSX is forgetting to add the `/` before `>`." },
  { id: 412, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Spread operator trong JSX props được dùng như thế nào?", a: "Dùng `{...props}` để truyền tất cả thuộc tính của một object xuống component con. \n\n**Ví dụ:** `<Button {...buttonProps} />` tương đương với liệt kê từng prop riêng lẻ. Hữu ích khi cần forward props nhưng cần cẩn thận vì có thể truyền props không mong muốn.", q_en: "How is the spread operator used with JSX props?", a_en: "Use `{...props}` to pass all properties of an object down to a child component. For example, `<Button {...buttonProps} />` is equivalent to listing each prop individually. This is useful for forwarding props, but be careful since it can pass unintended props to the component." },
  { id: 413, category: "React", subcategory: "JSX & Cơ Bản", level: "intermediate", q: "JSX có hỗ trợ comment không? Cú pháp như thế nào?", a: "JSX hỗ trợ comment dùng cú pháp `{/* nội dung comment */}` bên trong markup. Comment JS thông thường `//` hay `/* */` không dùng được trực tiếp giữa các JSX tags vì chúng không phải expressions. \n\n**Ví dụ:** `<div>{/* TODO: thêm loading */}<Button /></div>`. Lỗi hay gặp là dùng `// comment` ngay bên trong JSX khiến Babel báo lỗi parse.", q_en: "Does JSX support comments? What is the syntax?", a_en: "JSX supports comments using the `{/* comment content */}` syntax inside markup. Regular JS comments (`//` or `/* */`) cannot be used directly between JSX tags because they are not expressions. \n\n**Example:** `<div>{/* TODO: add loading */}<Button /></div>`. A frequent mistake is using `// comment` directly inside JSX, which causes a Babel parse error." },
  { id: 414, category: "React", subcategory: "JSX & Cơ Bản", level: "beginner", q: "Sự khác biệt giữa null, undefined, false và chuỗi rỗng khi render trong JSX là gì?", a: "React bỏ qua và không render null, undefined, false — đây là cơ chế cho conditional rendering. Chuỗi rỗng `''` cũng không hiển thị gì. Tuy nhiên số `0` sẽ được render thành chữ số 0 trên màn hình — đây là lỗi hay gặp khi viết `{count && <List />}` và count bằng 0. Cách fix: dùng ternary `{count > 0 ? <List /> : null}` để luôn trả về boolean hoặc null.", q_en: "What is the difference between null, undefined, false, and an empty string when rendering in JSX?", a_en: "React ignores and does not render null, undefined, or false — this is what enables conditional rendering. An empty string `''` also renders nothing visible. However, the number `0` will actually render as the character 0 on screen — a common bug when writing `{count && <List />}` and count equals 0. The fix is to use a ternary: `{count > 0 ? <List /> : null}` so the expression always resolves to a boolean or null." },
  { id: 415, category: "React", subcategory: "JSX & Cơ Bản", level: "intermediate", q: "Tại sao mỗi component React chỉ có thể return một element duy nhất ở cấp cao nhất?", a: "Vì JSX được transpile thành một lời gọi hàm React.createElement() đơn, và hàm chỉ có thể return một giá trị. Để return nhiều element, dùng Fragment (`<>...</>`) hoặc bọc trong một wrapper element như `<div>`. Fragment là lựa chọn tốt hơn vì không thêm node DOM không cần thiết.", q_en: "Why can a React component only return a single root element?", a_en: "Because JSX compiles to a single React.createElement() call, and a function can only return one value. To return multiple elements, wrap them in a Fragment (`<>...</>`) or a container element like `<div>`. Fragments are the better choice because they do not add unnecessary DOM nodes." },

  // === React - Components (416-430) ===
  { id: 416, category: "React", subcategory: "Components", level: "beginner", q: "Sự khác nhau giữa Function Component và Class Component là gì?", a: "Function Component là hàm JavaScript trả về JSX, đơn giản và ngắn gọn hơn. Class Component kế thừa từ React.Component, có lifecycle methods và this context. Kể từ React 16.8 với Hooks, Function Component có thể làm mọi thứ Class Component làm được và được khuyến khích sử dụng. Class Component vẫn tồn tại nhưng không còn được khuyến nghị cho code mới.", q_en: "What is the difference between a Function Component and a Class Component?", a_en: "A Function Component is a plain JavaScript function that returns JSX — simpler and more concise. A Class Component extends React.Component and has lifecycle methods and a this context. Since React 16.8 introduced Hooks, Function Components can do everything Class Components can, and are the recommended approach. Class Components still work but are no longer recommended for new code." },
  { id: 417, category: "React", subcategory: "Components", level: "beginner", q: "props.children là gì và cách sử dụng như thế nào?", a: "props.children là nội dung được truyền giữa thẻ mở và đóng của component. \n\n**Ví dụ:** `<Card><p>Nội dung</p></Card>` thì Card nhận `<p>Nội dung</p>` qua props.children và render bằng `{props.children}`. Dùng để tạo wrapper component linh hoạt như Card, Modal, Layout mà không cần biết trước nội dung bên trong. Nếu không truyền gì, children là undefined — nên khai báo defaultProps hoặc kiểm tra trước khi render.", q_en: "What is props.children and how do you use it?", a_en: "props.children is the content passed between a component's opening and closing tags. For example, in `<Card><p>Content</p></Card>`, the Card component receives `<p>Content</p>` via props.children and renders it with `{props.children}`. Use it to build flexible wrapper components like Card, Modal, or Layout without needing to know the inner content in advance. If nothing is passed, children is undefined — check for it or provide a default before rendering." },
  { id: 418, category: "React", subcategory: "Components", level: "beginner", q: "Default props trong React được khai báo như thế nào?", a: "Trong Function Component, khai báo default values trực tiếp trong destructuring: `function Button({ color = 'blue', size = 'md' }) {}` — cách ngắn gọn và được khuyến nghị. Trong Class Component dùng `Button.defaultProps = { color: 'blue' }` sau khai báo class. Với TypeScript, định nghĩa interface cho props rồi đặt default trong destructuring giúp vừa type-safe vừa có default. defaultProps trong function component đã bị deprecate từ React 18.3.", q_en: "How do you declare default props in React?", a_en: "In a Function Component, declare default values directly in the destructuring parameters: `function Button({ color = 'blue', size = 'md' }) {}` — this is the concise, recommended approach. In a Class Component, use `Button.defaultProps = { color: 'blue' }` after the class declaration. With TypeScript, define an interface for props and set defaults in destructuring for both type safety and default values. Note that defaultProps on function components was deprecated in React 18.3." },
  { id: 419, category: "React", subcategory: "Components", level: "intermediate", q: "Pure Component là gì và nó khác gì Component thông thường?", a: "Pure Component trong Class Component là React.PureComponent, tự động implement shouldComponentUpdate với shallow comparison của props và state. Trong Function Component, tương đương là React.memo() wrap component. Hữu ích để tránh re-render không cần thiết khi props không thay đổi. Shallow comparison có thể bỏ qua thay đổi của nested objects.", q_en: "What is a Pure Component and how does it differ from a regular Component?", a_en: "In class-based React, a Pure Component is React.PureComponent, which automatically implements shouldComponentUpdate with a shallow comparison of props and state. The Function Component equivalent is wrapping with React.memo(). Both are useful for preventing unnecessary re-renders when props have not actually changed. Be aware that shallow comparison can miss changes inside nested objects." },
  { id: 420, category: "React", subcategory: "Components", level: "beginner", q: "Controlled Component là gì trong React?", a: "Controlled Component là component mà giá trị của form element (input, textarea, select) được kiểm soát bởi React state. Mỗi thay đổi của input gọi onChange handler để cập nhật state, và value của input được bind với state. Đây là cách được khuyến nghị vì cho phép validate và xử lý dữ liệu trước khi submit.", q_en: "What is a Controlled Component in React?", a_en: "A Controlled Component is one where the value of a form element (input, textarea, select) is fully controlled by React state. Every change in the input triggers an onChange handler that updates state, and the input's value is bound back to that state. This is the recommended approach because it lets you validate and transform data before submission." },
  { id: 421, category: "React", subcategory: "Components", level: "intermediate", q: "Component composition là gì và tại sao nên dùng thay vì inheritance?", a: "Composition là kỹ thuật xây dựng component phức tạp từ các component đơn giản hơn thay vì kế thừa. React khuyến khích composition vì nó linh hoạt hơn, dễ test hơn và tránh các vấn đề của prototype chain. Patterns như children prop, render props, và slots đều là biểu hiện của composition.", q_en: "What is component composition and why is it preferred over inheritance?", a_en: "Composition is the technique of building complex components from simpler ones rather than using inheritance. React favors composition because it is more flexible, easier to test, and avoids the pitfalls of prototype chains. Patterns like the children prop, render props, and slots are all expressions of composition." },
  { id: 422, category: "React", subcategory: "Components", level: "beginner", q: "Tên component React phải bắt đầu bằng chữ hoa. Tại sao vậy?", a: "React dùng quy ước này để phân biệt DOM elements (lowercase) với React components (uppercase). `<div>` được render như HTML element, `<Button>` được render như custom React component. Nếu component bắt đầu bằng chữ thường, React sẽ coi đó là DOM element và tìm kiếm trong HTML spec.", q_en: "React component names must start with a capital letter. Why?", a_en: "React uses this convention to distinguish native DOM elements (lowercase) from custom React components (uppercase). `<div>` is rendered as an HTML element, while `<Button>` is rendered as a custom React component. If a component name starts with a lowercase letter, React treats it as a DOM element and looks it up in the HTML spec." },
  { id: 423, category: "React", subcategory: "Components", level: "intermediate", q: "Displayname trong React component dùng để làm gì?", a: "displayName là thuộc tính string dùng để đặt tên hiển thị cho component trong React DevTools. Mặc định React dùng tên hàm, nhưng với HOC hay arrow function ẩn danh, tên sẽ hiện là 'Anonymous' gây khó debug. Gán tường minh: `withAuth.displayName = 'withAuth(Button)'` để DevTools hiển thị đúng tên. Rất hữu ích khi trace re-render trong Profiler tab.", q_en: "What is displayName used for in a React component?", a_en: "displayName is a string property used to set a component's label in React DevTools. By default React uses the function name, but with HOCs or anonymous arrow functions the name shows as 'Anonymous', making debugging hard. Assign it explicitly: `withAuth.displayName = 'withAuth(Button)'` so DevTools shows the correct name. This is especially helpful when tracing re-renders in the Profiler tab." },
  { id: 424, category: "React", subcategory: "Components", level: "intermediate", q: "Sự khác nhau giữa React.Component và React.PureComponent là gì?", a: "React.Component không có bất kỳ tối ưu hóa re-render nào mặc định. React.PureComponent tự động implement shouldComponentUpdate với shallow comparison props và state, ngăn re-render khi props/state không thay đổi. Tuy nhiên, PureComponent có thể bỏ sót update nếu dùng mutate thay vì immutable update.", q_en: "What is the difference between React.Component and React.PureComponent?", a_en: "React.Component has no re-render optimization by default — it re-renders on every setState or parent render. React.PureComponent automatically implements shouldComponentUpdate with a shallow comparison of props and state, preventing re-renders when nothing has changed. However, PureComponent can miss updates if you mutate objects directly instead of using immutable updates." },
  { id: 425, category: "React", subcategory: "Components", level: "advanced", q: "Forwardref trong React là gì và khi nào cần dùng?", a: `React.forwardRef cho phép component nhận ref từ parent và forward xuống DOM element hoặc component con bên trong. Cần thiết khi muốn parent có thể trực tiếp access DOM node của child, ví dụ để focus input hay measure element.
\`\`\`tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <label>
      {label}
      <input ref={ref} {...props} />
    </label>
  )
)
Input.displayName = 'Input'

// Parent sử dụng ref để focus programmatically
const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return <Input ref={emailRef} label="Email" type="email" />
}
\`\`\``, q_en: "What is forwardRef in React and when do you need it?", a_en: `React.forwardRef lets a component receive a ref from its parent and pass it down to a DOM element or inner component. It is needed when the parent must directly access a child's DOM node — for example, to focus an input or measure an element.
\`\`\`tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <label>
      {label}
      <input ref={ref} {...props} />
    </label>
  )
)
Input.displayName = 'Input'

// Parent uses the ref to programmatically focus the input
const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return <Input ref={emailRef} label="Email" type="email" />
}
\`\`\`` },
  { id: 426, category: "React", subcategory: "Components", level: "beginner", q: "Stateless và stateful component khác nhau như thế nào?", a: "Stateless (presentational) component chỉ nhận props và render UI thuần túy, không giữ state nội bộ — dễ test vì output chỉ phụ thuộc vào input. \n\n**Ví dụ:** `<Button label='Save' onClick={fn} />`. Stateful (container) component quản lý state và business logic, thường fetch data và pass xuống. Phân biệt này mờ dần từ khi Hooks ra đời — function component giờ có thể có state qua useState và vẫn được coi là một loại component duy nhất.", q_en: "How do stateless and stateful components differ?", a_en: "A stateless (presentational) component only receives props and renders pure UI with no internal state — easy to test because output depends solely on input. \n\n**Example:** `<Button label='Save' onClick={fn} />`. A stateful (container) component manages state and business logic, typically fetching data and passing it down. This distinction has blurred since Hooks — function components can now hold state via useState while still being considered a single unified component type." },
  { id: 427, category: "React", subcategory: "Components", level: "intermediate", q: "Compound Components pattern là gì?", a: "Compound Components là pattern cho phép các component liên quan chia sẻ state ngầm qua Context. \n\n**Ví dụ:** `<Select>`, `<Select.Option>` chia sẻ state selected value mà không cần props drilling. Pattern này tạo API linh hoạt, cho phép user sắp xếp sub-components theo ý muốn trong khi vẫn duy trì shared state.", q_en: "What is the Compound Components pattern?", a_en: "Compound Components is a pattern where related components implicitly share state through Context. For example, `<Select>` and `<Select.Option>` share the selected value state without prop drilling. The pattern creates a flexible API that lets consumers arrange sub-components however they like while the shared state is maintained behind the scenes." },
  { id: 428, category: "React", subcategory: "Components", level: "intermediate", q: "Sự khác biệt giữa mount, update và unmount trong vòng đời component là gì?", a: "Mount là khi component được thêm vào DOM lần đầu tiên. Update xảy ra khi props hoặc state thay đổi, khiến component re-render. Unmount là khi component bị xóa khỏi DOM. Các lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) hoặc useEffect hook xử lý các giai đoạn này.", q_en: "What is the difference between mount, update, and unmount in a component's lifecycle?", a_en: "Mount is when a component is added to the DOM for the first time. Update occurs when props or state change, causing the component to re-render. Unmount is when the component is removed from the DOM. Lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) or the useEffect hook handle each of these phases." },
  { id: 429, category: "React", subcategory: "Components", level: "advanced", q: "Component colocation là gì và tại sao nó được khuyến nghị?", a: "Colocation là nguyên tắc đặt code gần nơi nó được sử dụng nhất - state, event handlers, styles của component nên nằm trong cùng file hoặc thư mục. Giúp code dễ hiểu và maintain hơn, giảm cognitive load khi chỉnh sửa một feature. \n\n**Ví dụ:** đặt query data fetching trong component cần dữ liệu thay vì ở global store.", q_en: "What is component colocation and why is it recommended?", a_en: "Colocation is the principle of keeping code close to where it is used — a component's state, event handlers, and styles should live in the same file or folder. This makes code easier to understand and maintain, reducing cognitive load when editing a feature. For example, placing data-fetching logic inside the component that needs it rather than in a global store." },
  { id: 430, category: "React", subcategory: "Components", level: "beginner", q: "React component có thể return gì ngoài JSX?", a: "Component có thể return: JSX element, null (không render gì), array of elements, string, number, Portal, Fragment. Return null hữu ích để ẩn component mà không thay đổi cấu trúc. Array cần có key cho mỗi element. String và number được render trực tiếp như text node.", q_en: "What can a React component return besides JSX?", a_en: "A component can return: a JSX element, null (renders nothing), an array of elements, a string, a number, a Portal, or a Fragment. Returning null is useful for hiding a component without altering the tree structure. Arrays require a key on each element. Strings and numbers are rendered directly as text nodes." },

  // === React - Props & State (431-445) ===
  { id: 431, category: "React", subcategory: "Props & State", level: "beginner", q: "Sự khác nhau cơ bản giữa props và state trong React là gì?", a: "Props là dữ liệu được truyền từ component cha xuống con, read-only và không thể thay đổi bởi component nhận. State là dữ liệu nội bộ của component, có thể thay đổi theo thời gian và kích hoạt re-render. Props giống như tham số hàm, state giống như biến cục bộ của component.", q_en: "What is the fundamental difference between props and state in React?", a_en: "Props are data passed from a parent component to a child, read-only and immutable by the receiving component. State is a component's internal data that can change over time and triggers a re-render when updated. Props are like function parameters; state is like a component's local variables." },
  { id: 432, category: "React", subcategory: "Props & State", level: "intermediate", q: "Lifting state up là gì và khi nào cần thực hiện?", a: "Lifting state up là kỹ thuật di chuyển state lên component cha chung gần nhất khi nhiều component cần chia sẻ cùng dữ liệu. \n\n**Ví dụ:** `TemperatureInput` Celsius và Fahrenheit đều cần cùng nhiệt độ — state được đặt ở component cha, truyền xuống qua props và cập nhật qua callback `onTemperatureChange`. Cần làm khi hai sibling component mất đồng bộ. Nếu phải lift quá nhiều tầng, hãy xem xét Context hoặc state manager.", q_en: "What is lifting state up and when should you do it?", a_en: "Lifting state up means moving state to the nearest common parent when multiple components need to share the same data. For example, Celsius and Fahrenheit TemperatureInput components both need the same temperature value — the state lives in the parent, flows down via props, and is updated via an `onTemperatureChange` callback. Do it when two sibling components fall out of sync. If you need to lift through too many layers, consider Context or a state management library." },
  { id: 433, category: "React", subcategory: "Props & State", level: "beginner", q: "setState trong Class Component hoạt động như thế nào?", a: "setState() không cập nhật state ngay lập tức mà queue update và React có thể batch nhiều setState lại. Tham số có thể là object mới hoặc updater function `(prevState) => newState`. Dùng updater function khi cần dựa vào giá trị state hiện tại để tránh race condition.", q_en: "How does setState work in a Class Component?", a_en: "setState() does not update state immediately — it queues the update and React may batch multiple setState calls together. The argument can be a new state object or an updater function `(prevState) => newState`. Use the updater function form when the new state depends on the current state value to avoid race conditions." },
  { id: 434, category: "React", subcategory: "Props & State", level: "intermediate", q: "Immutability trong React state là gì và tại sao quan trọng?", a: "Immutability nghĩa là không trực tiếp mutate state mà tạo object/array mới. React dùng shallow comparison để detect thay đổi, nếu mutate trực tiếp React sẽ không nhận ra sự thay đổi và không re-render. Dùng spread operator `{...state, field: value}` hoặc Array.map/filter để tạo bản sao mới.", q_en: "What is immutability in React state and why does it matter?", a_en: "Immutability means never mutating state directly, but always creating a new object or array. React uses shallow comparison to detect changes — if you mutate in place, React won't recognize the change and won't re-render. Use the spread operator `{...state, field: value}` or Array.map/filter to produce new copies." },
  { id: 435, category: "React", subcategory: "Props & State", level: "intermediate", q: "Làm thế nào để cập nhật nested state objects một cách đúng đắn?", a: "Dùng spread operator để tạo bản sao ở mỗi cấp: `setState(prev => ({ ...prev, user: { ...prev.user, name: 'new' } }))`. Với nested sâu, xem xét dùng Immer library cho phép viết code mutate nhưng tạo immutable update dưới hood. Cấu trúc state phẳng (flat) cũng giúp tránh vấn đề này.", q_en: "How do you correctly update nested state objects?", a_en: "Use the spread operator to create a shallow copy at each level: `setState(prev => ({ ...prev, user: { ...prev.user, name: 'new' } }))`. For deeply nested structures, consider the Immer library, which lets you write mutating-style code while producing immutable updates under the hood. Keeping state as flat as possible also avoids this problem entirely." },
  { id: 436, category: "React", subcategory: "Props & State", level: "beginner", q: "Khi nào nên dùng props và khi nào nên dùng state?", a: "Dùng state cho dữ liệu thay đổi theo tương tác của người dùng hoặc theo thời gian (form values, toggle, data từ API). Dùng props để truyền dữ liệu và callbacks từ cha xuống con. Nếu dữ liệu không thay đổi và chỉ đọc từ ngoài, đó là props. Nếu component tự quản lý, đó là state.", q_en: "When should you use props and when should you use state?", a_en: "Use state for data that changes in response to user interaction or over time (form values, toggles, API data). Use props to pass data and callbacks from a parent to a child. If data is read-only and comes from outside, it is a prop. If the component manages it internally, it is state." },
  { id: 437, category: "React", subcategory: "Props & State", level: "intermediate", q: "Derived state là gì và những vấn đề thường gặp?", a: "Derived state là state được tính toán từ props. Vấn đề: khi dùng getDerivedStateFromProps sai cách, component có thể mất state khi props thay đổi. React khuyến nghị: tính toán giá trị derived trong render thay vì lưu vào state, hoặc dùng fully controlled/uncontrolled với key prop để reset. Tránh anti-pattern copy props vào state.", q_en: "What is derived state and what are the common pitfalls?", a_en: "Derived state is state computed from props. The problem: misusing getDerivedStateFromProps can cause a component to lose state when props change. React recommends computing derived values during render instead of storing them in state, or using a fully controlled or uncontrolled component with a key prop to reset it. Avoid the anti-pattern of copying props into state." },
  { id: 438, category: "React", subcategory: "Props & State", level: "advanced", q: "State batching trong React là gì? Thay đổi trong React 18?", a: "State batching là React gộp nhiều setState calls lại và chỉ re-render một lần. Trong React 17, chỉ batch trong event handlers. React 18 giới thiệu Automatic Batching, batch cả trong setTimeout, Promise, và native event handlers. Dùng `flushSync()` để opt-out batching khi cần update ngay lập tức.", q_en: "What is state batching in React? What changed in React 18?", a_en: "State batching means React groups multiple setState calls together and triggers only one re-render. In React 17, batching only happened inside event handlers. React 18 introduced Automatic Batching, which extends batching to setTimeout, Promises, and native event handlers as well. Use `flushSync()` to opt out of batching when you need an immediate update." },
  { id: 439, category: "React", subcategory: "Props & State", level: "beginner", q: "Tại sao không nên trực tiếp mutate state trong React?", a: "Mutating state trực tiếp không trigger re-render vì React compare object references, không phải deep values. Điều này gây ra bugs khó debug khi UI không cập nhật dù data đã thay đổi. Luôn tạo object/array mới khi cập nhật state: `setState([...prevArr, newItem])` thay vì `arr.push(newItem); setState(arr)`.", q_en: "Why should you never directly mutate state in React?", a_en: "Directly mutating state does not trigger a re-render because React compares object references, not deep values. This leads to hard-to-debug bugs where the UI does not update even though the data has changed. Always create a new object or array when updating state: `setState([...prevArr, newItem])` instead of `arr.push(newItem); setState(arr)`." },
  { id: 440, category: "React", subcategory: "Props & State", level: "intermediate", q: "Unidirectional data flow trong React nghĩa là gì?", a: "Dữ liệu trong React chỉ chảy một chiều từ cha xuống con qua props, không bao giờ ngược lại. Con muốn cập nhật state cha phải gọi callback được truyền xuống — ví dụ `<Input onChange={handleChange} />` và cha xử lý trong `handleChange`. Pattern này giúp dễ trace bug vì chỉ có một nguồn dữ liệu duy nhất (single source of truth), tránh circular data flow như two-way binding của Angular 1. Khi app lớn, kết hợp với Context hay Redux để quản lý state toàn cục.", q_en: "What does unidirectional data flow mean in React?", a_en: "Data in React flows in one direction only — from parent to child via props, never the other way. For a child to update parent state, it must call a callback passed down to it, e.g. `<Input onChange={handleChange} />` where the parent handles state in `handleChange`. This pattern makes bugs easier to trace because there is a single source of truth, avoiding circular data flow like Angular 1's two-way binding. For large apps, combine with Context or Redux for global state management." },
  { id: 441, category: "React", subcategory: "Props & State", level: "advanced", q: "Khi nào state update là synchronous, khi nào là asynchronous?", a: "State updates luôn được schedule (không thực sự async/sync), React quyết định khi nào flush updates. Trong React 18 với automatic batching, hầu hết updates được defer. Dùng `flushSync()` để force synchronous update. Trong useEffect và event handlers nên luôn sử dụng functional updater form để tránh stale closure.", q_en: "When are state updates synchronous vs asynchronous?", a_en: "State updates are always scheduled — they are neither truly synchronous nor asynchronous; React decides when to flush them. In React 18 with automatic batching, most updates are deferred. Use `flushSync()` to force an immediate synchronous update. Inside useEffect and event handlers, always prefer the functional updater form to avoid stale closure bugs." },
  { id: 442, category: "React", subcategory: "Props & State", level: "beginner", q: "PropTypes là gì và cách sử dụng trong React?", a: "PropTypes là thư viện riêng (`prop-types` package, tách khỏi React core từ v15.5) để validate kiểu dữ liệu của props runtime. Định nghĩa: `Component.propTypes = { name: PropTypes.string.isRequired }`. Hiện nay TypeScript được ưa chuộng hơn vì kiểm tra compile-time, nhưng PropTypes vẫn hữu ích trong project JS. React sẽ warn trong console development khi prop không đúng kiểu.", q_en: "What are PropTypes and how are they used in React?", a_en: "PropTypes is a standalone library (the `prop-types` package, separated from the React core since v15.5) for runtime prop type validation. Define them as: `Component.propTypes = { name: PropTypes.string.isRequired }`. TypeScript is now preferred for compile-time checking, but PropTypes are still useful in plain JavaScript projects. React logs a console warning in development when a prop does not match its declared type." },
  { id: 443, category: "React", subcategory: "Props & State", level: "intermediate", q: "Làm thế nào để chia sẻ state giữa các component không có quan hệ cha-con?", a: "Các cách: dùng Context API để chia sẻ state ở global scope, dùng state management library (Redux, Zustand, Jotai), hoặc lifting state up đến ancestor chung rồi pass xuống qua props. Với component xa nhau trong tree, Context hoặc state management library là giải pháp tốt nhất.", q_en: "How do you share state between components that have no parent-child relationship?", a_en: "Options include: the Context API to share state globally, a state management library (Redux, Zustand, Jotai), or lifting state up to the closest common ancestor and passing it down via props. For components far apart in the tree, Context or a state management library is the cleanest solution." },
  { id: 444, category: "React", subcategory: "Props & State", level: "intermediate", q: "Controlled vs Uncontrolled components khác nhau như thế nào?", a: "Controlled component: giá trị form được kiểm soát bởi React state, phải có onChange handler, phù hợp khi cần validation hay transform dữ liệu. Uncontrolled component: giá trị lưu trong DOM, dùng ref để đọc, đơn giản hơn cho form không cần real-time validation. React khuyến nghị Controlled trong hầu hết trường hợp.", q_en: "How do Controlled and Uncontrolled components differ?", a_en: "Controlled component: the form value is managed by React state, requires an onChange handler, and is suited for validation or data transformation. Uncontrolled component: the value lives in the DOM and is read via a ref when needed, simpler for forms that do not require real-time validation. React recommends the Controlled approach in most cases." },
  { id: 445, category: "React", subcategory: "Props & State", level: "advanced", q: "Tại sao không nên khởi tạo state từ props trực tiếp?", a: "Khởi tạo state từ props (`useState(props.value)`) chỉ chạy một lần khi mount, khi props thay đổi state sẽ không cập nhật theo. Đây là anti-pattern gây ra bugs khó phát hiện. Nếu cần derived state từ props, hoặc tính toán trong render, hoặc dùng useEffect để sync, hoặc làm component fully controlled.", q_en: "Why should you avoid initializing state directly from props?", a_en: "Initializing state from props (`useState(props.value)`) only runs once on mount — when props change later, the state does not update. This is an anti-pattern that causes subtle, hard-to-find bugs. If you need derived state from props, either compute it during render, sync it with useEffect, or make the component fully controlled." },

  // === React - Lifecycle (446-455) ===
  { id: 446, category: "React", subcategory: "Lifecycle", level: "beginner", q: "componentDidMount được gọi khi nào và dùng để làm gì?", a: "componentDidMount được gọi một lần duy nhất ngay sau khi component được gắn vào DOM lần đầu. Đây là nơi thích hợp để: fetch dữ liệu từ API, đăng ký event listeners, khởi tạo thư viện cần DOM như D3 hay Google Maps. Tương đương `useEffect(() => { fetchData(); }, [])` trong function component. \n\n**Lưu ý:** gọi setState bên trong sẽ trigger thêm một lần render nhưng user không thấy trạng thái trung gian.", q_en: "When is componentDidMount called and what is it used for?", a_en: "componentDidMount is called exactly once, right after the component is inserted into the DOM for the first time. It is the right place to fetch data from an API, register event listeners, or initialize DOM-dependent libraries like D3 or Google Maps. The equivalent in function components is `useEffect(() => { fetchData(); }, [])`. \n\n**Note:** calling setState inside it triggers an extra render, but the user does not see the intermediate state." },
  { id: 447, category: "React", subcategory: "Lifecycle", level: "intermediate", q: "componentDidUpdate hoạt động như thế nào và khi nào nên dùng?", a: "componentDidUpdate(prevProps, prevState) được gọi sau mỗi lần re-render (trừ lần đầu mount). So sánh prevProps/prevState với giá trị hiện tại để quyết định có nên thực hiện side effects không. Luôn wrap code trong điều kiện `if (prevProps.id !== this.props.id)` để tránh infinite loop.", q_en: "How does componentDidUpdate work and when should you use it?", a_en: "componentDidUpdate(prevProps, prevState) is called after every re-render except the initial mount. Compare prevProps or prevState against current values to decide whether to perform a side effect. Always wrap your code in a condition like `if (prevProps.id !== this.props.id)` to avoid creating an infinite loop." },
  { id: 448, category: "React", subcategory: "Lifecycle", level: "beginner", q: "componentWillUnmount dùng để làm gì?", a: "componentWillUnmount được gọi ngay trước khi component bị xóa khỏi DOM — đây là nơi bắt buộc phải cleanup để tránh memory leak. \n\n**Ví dụ:** `clearInterval(this.timerId)`, hủy WebSocket subscription, gọi `controller.abort()` để cancel fetch đang chạy. Không được gọi setState ở đây vì component không còn tồn tại. Tương đương hàm cleanup `return () => clearInterval(id)` trả về trong useEffect.", q_en: "What is componentWillUnmount used for?", a_en: "componentWillUnmount is called just before the component is removed from the DOM — this is where you must clean up to avoid memory leaks. Examples: `clearInterval(this.timerId)`, unsubscribing from a WebSocket, or calling `controller.abort()` to cancel an in-flight fetch. Do not call setState here since the component no longer exists. The equivalent in function components is the cleanup function returned from useEffect: `return () => clearInterval(id)`." },
  { id: 449, category: "React", subcategory: "Lifecycle", level: "intermediate", q: "getDerivedStateFromProps là gì và khi nào nên tránh dùng?", a: "getDerivedStateFromProps là static method được gọi trước mỗi lần render để sync state với props. Nên tránh dùng vì dẫn đến code phức tạp và dễ gây bugs. Thay thế tốt hơn: tính giá trị derived trong render, dùng fully controlled component, hoặc dùng key prop để reset component khi cần. React team cũng khuyến cáo hạn chế dùng.", q_en: "What is getDerivedStateFromProps and when should you avoid it?", a_en: "getDerivedStateFromProps is a static method called before every render to sync state with props. It should generally be avoided because it leads to complex code and subtle bugs. Better alternatives: compute derived values during render, use a fully controlled component, or use the key prop to reset the component when needed. The React team itself recommends using it sparingly." },
  { id: 450, category: "React", subcategory: "Lifecycle", level: "advanced", q: "shouldComponentUpdate hoạt động như thế nào và khi nào nên dùng?", a: "shouldComponentUpdate(nextProps, nextState) trả về boolean, quyết định component có re-render hay không. Mặc định return true. Dùng để tối ưu performance bằng cách skip render khi props/state không thực sự thay đổi. React.PureComponent tự động implement với shallow comparison. Với function components, dùng React.memo thay thế.", q_en: "How does shouldComponentUpdate work and when should you use it?", a_en: "shouldComponentUpdate(nextProps, nextState) returns a boolean that tells React whether to re-render the component. It defaults to true. Use it to optimize performance by skipping renders when props or state have not meaningfully changed. React.PureComponent implements this automatically with a shallow comparison. For function components, use React.memo instead." },
  { id: 451, category: "React", subcategory: "Lifecycle", level: "advanced", q: "getSnapshotBeforeUpdate dùng để làm gì?", a: "getSnapshotBeforeUpdate(prevProps, prevState) được gọi ngay trước khi DOM được cập nhật, cho phép capture thông tin từ DOM trước khi thay đổi. Giá trị trả về được pass vào componentDidUpdate như tham số thứ ba. Hay dùng để giữ scroll position trong chat app khi có message mới.", q_en: "What is getSnapshotBeforeUpdate used for?", a_en: "getSnapshotBeforeUpdate(prevProps, prevState) is called right before the DOM is updated, allowing you to capture information from the DOM before the change takes effect. Its return value is passed as the third argument to componentDidUpdate. A classic use case is preserving scroll position in a chat app when new messages are added." },
  { id: 452, category: "React", subcategory: "Lifecycle", level: "intermediate", q: "componentDidCatch và Error Boundary liên quan như thế nào?", a: "componentDidCatch(error, info) là lifecycle method cho phép Class Component bắt lỗi từ component con trong render phase. Kết hợp với getDerivedStateFromError để tạo Error Boundary - component bắt lỗi và hiển thị fallback UI. Function components không thể là Error Boundary, phải dùng class hoặc thư viện như react-error-boundary.", q_en: "How are componentDidCatch and Error Boundaries related?", a_en: "componentDidCatch(error, info) is the lifecycle method that lets a Class Component catch errors thrown in its child component tree during the render phase. Combined with getDerivedStateFromError, it forms an Error Boundary — a component that catches errors and renders a fallback UI instead of crashing. Function components cannot be Error Boundaries; you must use a class component or a library like react-error-boundary." },
  { id: 453, category: "React", subcategory: "Lifecycle", level: "intermediate", q: "Thứ tự lifecycle methods khi component mount, update, unmount là gì?", a: "Mount: constructor → getDerivedStateFromProps → render → DOM update → componentDidMount. Update: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → DOM update → componentDidUpdate. Unmount: componentWillUnmount → component bị xóa. Với concurrent mode, render phase có thể bị interrupt.", q_en: "What is the order of lifecycle methods during mount, update, and unmount?", a_en: "Mount: constructor → getDerivedStateFromProps → render → DOM update → componentDidMount. Update: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → DOM update → componentDidUpdate. Unmount: componentWillUnmount → component removed. In Concurrent Mode, the render phase can be interrupted and restarted." },
  { id: 454, category: "React", subcategory: "Lifecycle", level: "advanced", q: "Strict Mode ảnh hưởng đến lifecycle như thế nào?", a: "React.StrictMode trong development gọi một số lifecycle methods và hooks hai lần (mount, unmount, re-mount) để phát hiện side effects không thuần. componentDidMount và componentDidUpdate được gọi hai lần trong dev, nhưng một lần trong production. Hữu ích để catch bugs do side effects trong render phase.", q_en: "How does Strict Mode affect lifecycle methods?", a_en: "In development, React.StrictMode intentionally calls certain lifecycle methods and hooks twice (mount → unmount → remount) to detect impure side effects. componentDidMount and componentDidUpdate run twice in dev but only once in production. This helps catch bugs caused by side effects leaking into the render phase." },
  { id: 455, category: "React", subcategory: "Lifecycle", level: "beginner", q: "Constructor trong Class Component dùng để làm gì?", a: "Constructor trong Class Component dùng để khởi tạo state (`this.state = { count: 0 }`) và bind event handlers (`this.handleClick = this.handleClick.bind(this)`). Phải gọi `super(props)` trước tiên để React gán this.props đúng cách — bỏ qua bước này gây lỗi khó debug. Không được gọi fetch hay side effects ở đây, để vào componentDidMount. Trong Function Component, constructor không cần vì useState và arrow functions thay thế hoàn toàn.", q_en: "What is the constructor used for in a Class Component?", a_en: "The constructor in a Class Component is used to initialize state (`this.state = { count: 0 }`) and bind event handlers (`this.handleClick = this.handleClick.bind(this)`). You must call `super(props)` first so React assigns this.props correctly — skipping it causes hard-to-debug errors. Do not perform fetches or side effects here; put those in componentDidMount. In Function Components, the constructor is unnecessary because useState and arrow functions replace it entirely." },

  // === React - useState & useEffect (456-475) ===
  { id: 456, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "useState hook hoạt động như thế nào?", a: `useState nhận giá trị khởi tạo và trả về mảng gồm state hiện tại và setter function. Khi gọi setter, React schedule re-render với giá trị mới. Setter có thể nhận giá trị mới trực tiếp hoặc updater function để tránh stale closure.
\`\`\`tsx
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 trực tiếp</button>
      <button onClick={() => setCount(prev => prev + 1)}>+1 updater</button>
    </div>
  )
}
\`\`\``, q_en: "How does the useState hook work?", a_en: `useState accepts an initial value and returns an array containing the current state and a setter function. Calling the setter schedules a re-render with the new value. The setter can receive the new value directly or an updater function to avoid stale closure issues.
\`\`\`tsx
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>direct</button>
      <button onClick={() => setCount(prev => prev + 1)}>updater fn</button>
    </div>
  )
}
\`\`\`` },
  { id: 457, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "useEffect hook dùng để làm gì?", a: "useEffect thực hiện side effects trong function components: fetch data, subscriptions, DOM manipulation, timers. Nhận callback function và dependency array. Chạy sau mỗi render (mặc định), sau render khi dependencies thay đổi (có deps array), hoặc chỉ một lần sau mount (deps array rỗng `[]`).", q_en: "What is the useEffect hook used for?", a_en: "useEffect performs side effects in function components: fetching data, setting up subscriptions, manipulating the DOM, and managing timers. It accepts a callback and a dependency array. It runs after every render by default, after renders where specific dependencies changed (when a deps array is provided), or only once after mount (with an empty `[]` array)." },
  { id: 458, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "Dependency array trong useEffect có ý nghĩa gì?", a: "Dependency array kiểm soát khi nào effect chạy lại. Không có array: chạy sau mỗi render. Array rỗng `[]`: chỉ chạy sau mount, tương đương componentDidMount. Array có giá trị `[a, b]`: chạy khi a hoặc b thay đổi. React ESLint plugin exhaustive-deps giúp phát hiện missing dependencies.", q_en: "What is the purpose of the dependency array in useEffect?", a_en: "The dependency array controls when the effect re-runs. No array: runs after every render. Empty array `[]`: runs only after the initial mount, equivalent to componentDidMount. Array with values `[a, b]`: runs whenever a or b changes. The React ESLint plugin's exhaustive-deps rule helps catch missing dependencies." },
  { id: 459, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Cleanup function trong useEffect là gì và khi nào cần dùng?", a: `Cleanup function là function được return từ useEffect, chạy trước khi effect chạy lại hoặc component unmount. Dùng để hủy subscriptions, clearTimeout, cancel fetch requests tránh memory leaks và stale updates.
\`\`\`tsx
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  const subscription = eventSource.subscribe(handler)

  // cleanup: chạy khi unmount hoặc trước khi effect chạy lại
  return () => {
    clearInterval(timer)
    subscription.unsubscribe()
  }
}, [])
\`\`\``, q_en: "What is the cleanup function in useEffect and when do you need it?", a_en: `The cleanup function is the function returned from useEffect. It runs before the effect re-runs or before the component unmounts. Use it to cancel subscriptions, clear timeouts, or abort fetch requests to prevent memory leaks and stale updates.
\`\`\`tsx
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  const subscription = eventSource.subscribe(handler)

  // cleanup: runs on unmount or before re-running the effect
  return () => {
    clearInterval(timer)
    subscription.unsubscribe()
  }
}, [])
\`\`\`` },
  { id: 460, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Làm thế nào để thực hiện async operations trong useEffect?", a: `Không thể trực tiếp dùng async function làm effect callback vì nó trả về Promise, nhưng cleanup phải return void. Giải pháp: khai báo async function bên trong effect rồi gọi nó. Luôn xử lý cleanup để cancel request nếu component unmount.
\`\`\`tsx
useEffect(() => {
  const controller = new AbortController()

  const fetchData = async () => {
    try {
      const res = await fetch('/api/data', { signal: controller.signal })
      const json = await res.json()
      setData(json)
    } catch (err) {
      if (err.name !== 'AbortError') setError(err)
    }
  }

  fetchData()

  return () => controller.abort()
}, [url])
\`\`\``, q_en: "How do you perform async operations inside useEffect?", a_en: `You cannot use an async function directly as the effect callback because it returns a Promise, but the cleanup must return void or nothing. Declare an async function inside the effect and call it immediately. Always handle cleanup to cancel the request if the component unmounts.
\`\`\`tsx
useEffect(() => {
  const controller = new AbortController()

  const fetchData = async () => {
    try {
      const res = await fetch('/api/data', { signal: controller.signal })
      const json = await res.json()
      setData(json)
    } catch (err) {
      if (err.name !== 'AbortError') setError(err)
    }
  }

  fetchData()

  return () => controller.abort()
}, [url])
\`\`\`` },
  { id: 461, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Làm sao tránh infinite loop trong useEffect?", a: "Infinite loop xảy ra khi effect cập nhật state mà state đó lại là dependency của effect. Giải pháp: kiểm tra dependency array có chính xác không, dùng functional updater `setCount(c => c + 1)` thay vì reference state trong effect, tách effect thành nhiều effect với dependencies khác nhau, hoặc dùng useRef để lưu giá trị mà không trigger re-render.", q_en: "How do you avoid infinite loops in useEffect?", a_en: "An infinite loop occurs when the effect updates state that is also listed as a dependency, causing it to re-run forever. Solutions: verify the dependency array is correct, use the functional updater `setCount(c => c + 1)` instead of referencing state directly inside the effect, split a large effect into multiple focused ones, or use useRef to store a value without triggering a re-render." },
  { id: 462, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "Làm thế nào để fetch data với useEffect?", a: "Tạo async function bên trong effect, gọi fetch, set state với kết quả, và xử lý loading/error states. Dùng cleanup function để cancel request nếu component unmount (AbortController). Với React 18 và StrictMode, effect chạy hai lần trong dev nên cần idempotent cleanup. Hoặc dùng React Query/SWR để data fetching tốt hơn.", q_en: "How do you fetch data with useEffect?", a_en: "Declare an async function inside the effect, call fetch, set state with the result, and handle loading/error states. Use a cleanup function with AbortController to cancel the request if the component unmounts. With React 18 Strict Mode, effects run twice in development, so cleanup must be idempotent. For production apps, React Query or SWR handle data fetching more robustly." },
  { id: 463, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Stale closure trong useEffect là gì và cách tránh?", a: "Stale closure xảy ra khi effect capture giá trị cũ của state hoặc props vì closure bị tạo lúc render trước. Giải pháp: thêm dependencies bị thiếu vào array, dùng useRef để lưu giá trị mới nhất không cần re-run effect, hoặc dùng functional updater `setState(prev => ...)` để không cần reference state trong closure.", q_en: "What is a stale closure in useEffect and how do you avoid it?", a_en: "A stale closure occurs when an effect captures an outdated value of state or props because the closure was created during a previous render. Solutions: add the missing values to the dependency array, use useRef to always access the latest value without re-running the effect, or use the functional updater form `setState(prev => ...)` so you do not need to reference state inside the closure." },
  { id: 464, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "Có thể có nhiều useState và useEffect trong một component không?", a: "Có thể và khuyến khích chia nhỏ state và effects theo logic. Nhiều useState giúp tách riêng state values, nhiều useEffect giúp tách side effects theo concern. React đảm bảo thứ tự hooks giữ nguyên giữa các renders (hooks không được gọi conditionally). Mỗi useEffect nên có một mục đích rõ ràng.", q_en: "Can a component have multiple useState and useEffect calls?", a_en: "Yes, and it is encouraged — split state and effects by logical concern. Multiple useState calls keep state values separate; multiple useEffect calls separate side effects by responsibility. React guarantees the hook call order is the same between renders, which is why hooks must never be called conditionally. Each useEffect should have one clear purpose." },
  { id: 465, category: "React", subcategory: "useState & useEffect", level: "advanced", q: "Lazy initialization của useState là gì và khi nào dùng?", a: "Truyền function vào useState thay vì giá trị trực tiếp: `useState(() => computeExpensiveValue())`. Function này chỉ chạy một lần khi mount, không chạy lại mỗi render. Hữu ích khi khởi tạo state từ localStorage hay tính toán phức tạp: `useState(() => JSON.parse(localStorage.getItem('key')))`.", q_en: "What is lazy initialization of useState and when should you use it?", a_en: "Pass a function to useState instead of a direct value: `useState(() => computeExpensiveValue())`. This initializer function runs only once on mount, not on every re-render. Use it when the initial state requires an expensive computation or a side effect like reading from localStorage: `useState(() => JSON.parse(localStorage.getItem('key')))`." },
  { id: 466, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Khi nào useEffect chạy trong React 18 Strict Mode?", a: "Trong React 18 Strict Mode development, mỗi component mount-unmount-mount lại để test cleanup. Effect chạy: mount (lần 1) → cleanup → mount (lần 2). Giúp phát hiện bugs do missing cleanup. Production không bị ảnh hưởng. Code đúng cần idempotent: connect/disconnect subscription, fetch với cancel, v.v.", q_en: "When does useEffect run in React 18 Strict Mode?", a_en: "In React 18 Strict Mode during development, each component goes through mount → unmount → remount to test cleanup correctness. The effect sequence is: run on mount (first) → cleanup → run on remount (second). This helps catch missing cleanup bugs. Production is not affected. Correct code must be idempotent: connect/disconnect subscriptions, fetch with cancellation, etc." },
  { id: 467, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Sự khác biệt giữa useEffect và useLayoutEffect là gì?", a: "useEffect chạy asynchronously sau khi trình duyệt paint, không block UI. useLayoutEffect chạy synchronously sau DOM mutations nhưng trước khi trình duyệt paint, có thể block paint. Dùng useLayoutEffect khi cần đọc layout DOM và synchronously re-render để tránh visual flicker (ví dụ tooltips). Mặc định dùng useEffect.", q_en: "What is the difference between useEffect and useLayoutEffect?", a_en: "useEffect runs asynchronously after the browser has painted, so it does not block the UI. useLayoutEffect runs synchronously after DOM mutations but before the browser paints, which can block painting. Use useLayoutEffect when you need to read DOM layout and synchronously trigger a re-render to avoid visual flicker (e.g., tooltip positioning). Default to useEffect for everything else." },
  { id: 468, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "useState có thể lưu trữ kiểu dữ liệu nào?", a: "useState có thể lưu bất kỳ giá trị JavaScript nào: primitives (string, number, boolean), objects, arrays, functions, null, undefined. Với objects và arrays, phải cập nhật immutably (tạo bản sao mới) để trigger re-render. Tránh lưu dữ liệu có thể tính toán từ state khác (derived state) để tránh state sync bugs.", q_en: "What types of data can useState store?", a_en: "useState can store any JavaScript value: primitives (string, number, boolean), objects, arrays, functions, null, and undefined. For objects and arrays, you must update immutably (create a new copy) to trigger a re-render. Avoid storing data that can be computed from other state (derived state) to prevent state synchronization bugs." },
  { id: 469, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Batching updates trong function component với hooks?", a: "React 18 tự động batch tất cả state updates kể cả trong async code (setTimeout, Promise, fetch callbacks). Nhiều useState calls trong event handler hay useEffect chỉ gây một lần re-render. Dùng `flushSync` từ react-dom để force immediate re-render khi cần. Đây là improvement lớn so với React 17 chỉ batch trong event handlers.", q_en: "How does update batching work in function components with hooks?", a_en: "React 18 automatically batches all state updates, including those inside async code (setTimeout, Promises, fetch callbacks). Multiple useState calls in an event handler or useEffect produce only one re-render. Use `flushSync` from react-dom to force an immediate re-render when necessary. This is a significant improvement over React 17, which only batched updates inside event handlers." },
  { id: 470, category: "React", subcategory: "useState & useEffect", level: "advanced", q: "useInsertionEffect là gì và khi nào dùng?", a: "useInsertionEffect chạy trước bất kỳ DOM mutations nào, trước cả useLayoutEffect. Được tạo ra dành cho CSS-in-JS libraries để inject styles trước khi component render, tránh flash of unstyled content. Không nên dùng trong application code thông thường, chỉ dành cho library authors.", q_en: "What is useInsertionEffect and when should it be used?", a_en: "useInsertionEffect fires before any DOM mutations, even before useLayoutEffect. It was designed specifically for CSS-in-JS libraries to inject styles before components render, preventing a flash of unstyled content. It should not be used in application code — it is intended only for library authors." },
  { id: 471, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Làm thế nào để share stateful logic giữa nhiều components với useEffect?", a: "Trích xuất logic vào custom hook - function bắt đầu bằng 'use'. Custom hook có thể gọi useState, useEffect và các hooks khác. Component sử dụng custom hook sẽ có state riêng biệt, không chia sẻ instance. \n\n**Ví dụ:** useWindowSize(), useDebounce(), useFetch() đều là custom hooks phổ biến.", q_en: "How do you share stateful logic across multiple components using useEffect?", a_en: "Extract the logic into a custom hook — a function whose name starts with 'use'. The custom hook can call useState, useEffect, and other hooks. Each component that uses the hook gets its own isolated state instance; state is not shared. Common examples include useWindowSize(), useDebounce(), and useFetch()." },
  { id: 472, category: "React", subcategory: "useState & useEffect", level: "beginner", q: "useState setter function có bao giờ thay đổi reference không?", a: "Không — setter function từ useState luôn có cùng reference (identity) giữa các lần render, React đảm bảo điều này. Vì vậy không cần và không nên thêm setter vào dependency array của useEffect, tránh chạy effect thừa. Khác với hàm thông thường tự khai báo trong component body — những hàm đó được tạo mới mỗi render. Đây là lý do useCallback cần cho hàm callback tự viết nhưng không cần cho state setter.", q_en: "Does the useState setter function ever change its reference between renders?", a_en: "No — React guarantees that the setter function from useState always has the same reference (identity) across renders. Therefore you do not need to include setters in a useEffect dependency array, which would cause unnecessary effect runs. This is unlike regular functions declared in the component body, which are recreated on every render. That is why useCallback is needed for custom callbacks but not for state setters." },
  { id: 473, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Khi nào React bail out (bỏ qua) re-render khi gọi setState?", a: "React bail out nếu giá trị mới giống hệt giá trị hiện tại (sử dụng Object.is comparison). \n\n**Ví dụ:** `setCount(count)` với cùng value sẽ không trigger re-render. Tuy nhiên React vẫn có thể render component một lần để verify trước khi bail out hoàn toàn. Hữu ích để tối ưu performance.", q_en: "When does React bail out of a re-render after a setState call?", a_en: "React bails out when the new value is identical to the current value, using Object.is comparison. For example, `setCount(count)` with the same value will not trigger a re-render. However, React may still render the component once to verify before bailing out completely. This built-in optimization helps avoid unnecessary work." },
  { id: 474, category: "React", subcategory: "useState & useEffect", level: "advanced", q: "useEffect với object dependencies có vấn đề gì?", a: "Object dependencies tạo infinite loop vì mỗi render tạo object literal mới có reference khác, React compare by reference không phải by value. Giải pháp: destructure primitive values từ object làm deps `[obj.id, obj.name]`, dùng useMemo để memoize object, hoặc dùng useRef để lưu object. Tương tự với array và function dependencies.", q_en: "What problem arises when using object values as useEffect dependencies?", a_en: "Object dependencies cause infinite loops because every render creates a new object literal with a different reference, and React compares by reference not by value. Solutions: destructure primitive values from the object and use those as deps `[obj.id, obj.name]`, memoize the object with useMemo, or store it in a useRef. The same issue applies to array and function dependencies." },
  { id: 475, category: "React", subcategory: "useState & useEffect", level: "intermediate", q: "Cách đúng để fetch data và xử lý race conditions trong useEffect?", a: "Dùng AbortController để cancel fetch request cũ khi effect re-run: `const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort()`. Hoặc dùng boolean flag `let cancelled = false` trong cleanup. React Query và SWR tự động handle race conditions.", q_en: "What is the correct way to fetch data and handle race conditions in useEffect?", a_en: "Use AbortController to cancel the previous request when the effect re-runs: `const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort()`. Alternatively, use a boolean cancelled flag and check it in the cleanup. React Query and SWR handle race conditions automatically and are the recommended choice for production apps." },

  // === React - Advanced Hooks (476-495) ===
  { id: 476, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useContext hook là gì và cách sử dụng?", a: `useContext nhận Context object và trả về value hiện tại từ Provider gần nhất bên trên. Khi value của Provider thay đổi, mọi component gọi useContext đó đều re-render. Pitfall: nếu không có Provider bên trên, trả về giá trị default từ createContext.
\`\`\`tsx
// 1. Tạo context
const ThemeContext = createContext<'light' | 'dark'>('light')

// 2. Provider bọc cây component
const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
)

// 3. Consume ở bất kỳ component con nào
const Toolbar = () => {
  const theme = useContext(ThemeContext)
  return <div className={theme}>Current theme: {theme}</div>
}
\`\`\``, q_en: "What is the useContext hook and how do you use it?", a_en: `useContext accepts a Context object and returns the current value from the nearest Provider above in the tree. When the Provider's value changes, every component calling that useContext will re-render. Pitfall: if there is no Provider above, it returns the default value from createContext.
\`\`\`tsx
// 1. Create context
const ThemeContext = createContext<'light' | 'dark'>('light')

// 2. Provider wraps the component tree
const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
)

// 3. Consume in any descendant component
const Toolbar = () => {
  const theme = useContext(ThemeContext)
  return <div className={theme}>Current theme: {theme}</div>
}
\`\`\`` },
  { id: 477, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useReducer khác gì useState và khi nào nên dùng?", a: `useReducer phù hợp khi state logic phức tạp với nhiều sub-values, hoặc nhiều actions khác nhau cập nhật state theo cách khác nhau. Giống Redux pattern với dispatch/action/reducer.
\`\`\`tsx
type State = { count: number; step: number }
type Action = { type: 'increment' } | { type: 'setStep'; payload: number }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + state.step }
    case 'setStep':   return { ...state, step: action.payload }
    default:          return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })
  return (
    <>
      <p>Count: {state.count}, Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
\`\`\``, q_en: "How does useReducer differ from useState and when should you use it?", a_en: `useReducer is a better fit when state logic is complex with multiple sub-values, or many different actions update state in distinct ways. It mirrors the Redux pattern with dispatch/action/reducer.
\`\`\`tsx
type State = { count: number; step: number }
type Action = { type: 'increment' } | { type: 'setStep'; payload: number }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + state.step }
    case 'setStep':   return { ...state, step: action.payload }
    default:          return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })
  return (
    <>
      <p>Count: {state.count}, Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
\`\`\`` },
  { id: 478, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useMemo hook dùng để làm gì? Khi nào nên dùng?", a: `useMemo memoize kết quả tính toán tốn kém, chỉ tính lại khi dependencies thay đổi. Dùng khi có tính toán expensive mà không muốn chạy lại mỗi render, hoặc cần stable object reference. Không nên dùng quá mức vì có overhead riêng.
\`\`\`tsx
const ProductList = ({ products, filter }: Props) => {
  // tính toán chỉ chạy lại khi products hoặc filter thay đổi
  const filtered = useMemo(
    () => products.filter(p => p.category === filter),
    [products, filter]
  )

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>
}
\`\`\``, q_en: "What is the useMemo hook for and when should you use it?", a_en: `useMemo memoizes the result of an expensive computation, recalculating only when dependencies change. Use it when a calculation is costly and you want to skip it on every render, or you need a stable object reference for an effect or React.memo prop. Do not overuse it — memoization has its own overhead.
\`\`\`tsx
const ProductList = ({ products, filter }: Props) => {
  // recalculates only when products or filter changes
  const filtered = useMemo(
    () => products.filter(p => p.category === filter),
    [products, filter]
  )

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>
}
\`\`\`` },
  { id: 479, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useCallback hook dùng để làm gì? Khác gì useMemo?", a: `useCallback memoize function để giữ stable reference giữa renders. Dùng khi truyền callback xuống child component được wrap bởi React.memo, hoặc khi function là dependency của useEffect.
\`\`\`tsx
const Parent = () => {
  const [count, setCount] = useState(0)

  // không dùng useCallback: handleClick mới mỗi render → Child luôn re-render
  // dùng useCallback: reference ổn định → Child skip re-render nếu props khác không đổi
  const handleClick = useCallback(() => {
    console.log('clicked')
  }, []) // deps rỗng vì không dùng state/props trong fn

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Parent count: {count}</button>
      <MemoChild onClick={handleClick} />
    </>
  )
}

const MemoChild = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('Child render')
  return <button onClick={onClick}>Child</button>
})
\`\`\``, q_en: "What is the useCallback hook for? How does it differ from useMemo?", a_en: `useCallback memoizes a function to maintain a stable reference between renders. Use it when passing a callback to a child component wrapped with React.memo, or when a function is a dependency of useEffect.
\`\`\`tsx
const Parent = () => {
  const [count, setCount] = useState(0)

  // without useCallback: handleClick is new every render → Child always re-renders
  // with useCallback: stable reference → Child skips re-render if other props unchanged
  const handleClick = useCallback(() => {
    console.log('clicked')
  }, []) // empty deps because fn doesn't use any state/props

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Parent count: {count}</button>
      <MemoChild onClick={handleClick} />
    </>
  )
}

const MemoChild = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('Child render')
  return <button onClick={onClick}>Child</button>
})
\`\`\`` },
  { id: 480, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useRef hook có những công dụng gì?", a: `useRef trả về mutable ref object với \`.current\` property không trigger re-render khi thay đổi. Hai công dụng chính: (1) truy cập DOM element trực tiếp để focus/measure; (2) lưu giá trị mutable giữa renders mà không cần re-render.
\`\`\`tsx
const FormExample = () => {
  // (1) DOM ref: focus input khi mount
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  // (2) mutable value: lưu timerId mà không trigger re-render
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const start = () => { timerRef.current = setInterval(tick, 1000) }
  const stop  = () => { if (timerRef.current) clearInterval(timerRef.current) }

  return <input ref={inputRef} placeholder="auto-focused" />
}
\`\`\``, q_en: "What are the main uses of the useRef hook?", a_en: `useRef returns a mutable ref object whose \`.current\` property does not trigger a re-render when changed. Two primary uses: (1) directly accessing a DOM element to focus or measure it; (2) storing a mutable value that persists across renders without causing a re-render.
\`\`\`tsx
const FormExample = () => {
  // (1) DOM ref: focus input on mount
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  // (2) mutable value: store timerId without triggering re-render
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const start = () => { timerRef.current = setInterval(tick, 1000) }
  const stop  = () => { if (timerRef.current) clearInterval(timerRef.current) }

  return <input ref={inputRef} placeholder="auto-focused" />
}
\`\`\`` },
  { id: 481, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useId hook là gì và khi nào dùng?", a: "useId (React 18) tạo unique ID ổn định giữa server và client, giải quyết hydration mismatch khi dùng Math.random() hay counter. Dùng cho: nối input với label qua id/htmlFor, ARIA attributes cần unique IDs. Không dùng làm key trong danh sách. Prefix với CSS prefix nếu cần: `id={id + '-input'}`.", q_en: "What is the useId hook and when should you use it?", a_en: "useId (React 18) generates a stable unique ID that is consistent between server and client, solving hydration mismatches caused by Math.random() or counters. Use it for: linking inputs to labels via id/htmlFor, and ARIA attributes that require unique IDs. Do not use it as a list key. You can suffix it for multiple related elements: `id={id + '-input'}`." },
  { id: 482, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useLayoutEffect khác useEffect như thế nào và khi nào dùng?", a: "useLayoutEffect chạy synchronously sau DOM update nhưng trước browser paint, blocking. useEffect chạy asynchronously sau paint, non-blocking. Dùng useLayoutEffect khi: cần đọc layout và synchronously set style/position để tránh visual flicker, ví dụ tooltip positioning. Server rendering: useLayoutEffect không chạy trên server, cần fallback.", q_en: "How does useLayoutEffect differ from useEffect and when should you use it?", a_en: "useLayoutEffect runs synchronously after DOM updates but before the browser paints — it is blocking. useEffect runs asynchronously after the paint — non-blocking. Use useLayoutEffect when you need to read DOM layout and synchronously apply styles or positions to prevent visual flicker, such as for tooltip positioning. \n\n**Note:** useLayoutEffect does not run on the server during SSR, so you may need a fallback." },
  { id: 483, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useTransition hook dùng để làm gì?", a: `useTransition (React 18) cho phép đánh dấu state update là non-urgent, React có thể interrupt và ưu tiên urgent updates trước. Trả về \`[isPending, startTransition]\`. Dùng khi filtering danh sách lớn, heavy re-renders mà không muốn block UI.
\`\`\`tsx
const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // urgent: cập nhật input ngay lập tức
    setQuery(e.target.value)

    // non-urgent: React có thể defer để giữ UI responsive
    startTransition(() => {
      setResults(heavyFilter(e.target.value))
    })
  }

  return (
    <>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <span>Filtering...</span>}
      <ul>{results.map(r => <li key={r}>{r}</li>)}</ul>
    </>
  )
}
\`\`\``, q_en: "What is the useTransition hook used for?", a_en: `useTransition (React 18) lets you mark a state update as non-urgent, allowing React to interrupt it and prioritize more urgent updates first. It returns \`[isPending, startTransition]\`. Use it for filtering large lists or heavy re-renders where you do not want to block UI.
\`\`\`tsx
const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // urgent: update input immediately
    setQuery(e.target.value)

    // non-urgent: React can defer this to keep UI responsive
    startTransition(() => {
      setResults(heavyFilter(e.target.value))
    })
  }

  return (
    <>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <span>Filtering...</span>}
      <ul>{results.map(r => <li key={r}>{r}</li>)}</ul>
    </>
  )
}
\`\`\`` },
  { id: 484, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useDeferredValue hook là gì?", a: "useDeferredValue (React 18) trả về phiên bản deferred của giá trị, React có thể giữ giá trị cũ khi render expensive component trong khi urgent update hoàn thành. Khác useTransition: không wrap update code, wrap giá trị result. Tốt khi không control code cập nhật state (nhận từ props). Kết hợp với React.memo để maximize benefit.", q_en: "What is the useDeferredValue hook?", a_en: "useDeferredValue (React 18) returns a deferred version of a value — React can keep showing the old value while an expensive component re-renders and urgent updates complete first. Unlike useTransition, you wrap the resulting value rather than the update code. It is ideal when you do not control the code that updates state (e.g., the value comes from props). Combine with React.memo to maximize the benefit." },
  { id: 485, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useImperativeHandle hook dùng để làm gì?", a: "useImperativeHandle kết hợp với forwardRef để tùy chỉnh những gì parent nhìn thấy qua ref, thay vì expose toàn bộ DOM node. \n\n**Ví dụ:** expose chỉ `focus()` và `scrollIntoView()` thay vì toàn bộ input element. Giúp đóng gói internal implementation, chỉ expose API cần thiết. Dùng khi cần imperative API từ component.", q_en: "What is useImperativeHandle used for?", a_en: "useImperativeHandle is used with forwardRef to customize what the parent sees through a ref, rather than exposing the full DOM node. For example, you can expose only `focus()` and `scrollIntoView()` instead of the entire input element. This encapsulates the internal implementation and surfaces only the necessary API. Use it when a component needs to provide an imperative interface to its parent." },
  { id: 486, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useDebugValue hook dùng để làm gì?", a: "useDebugValue hiển thị label tùy chỉnh cho custom hook trong React DevTools. Hữu ích khi debug complex custom hooks để thấy state hiện tại. Nhận giá trị hoặc format function (để lazy format chỉ khi DevTools mở). Chỉ cần dùng trong custom hooks được chia sẻ, không cần cho internal hooks.", q_en: "What is useDebugValue used for?", a_en: "useDebugValue displays a custom label for a custom hook in React DevTools. It is useful for debugging complex custom hooks so you can see their current state at a glance. It accepts a value or a format function (for lazy formatting that only runs when DevTools is open). Only add it to shared custom hooks — it is unnecessary for internal implementation hooks." },
  { id: 487, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useSyncExternalStore hook là gì?", a: "useSyncExternalStore (React 18) là hook chính thức để subscribe external stores (Redux, Zustand, browser APIs) đảm bảo consistent reads trong concurrent mode. Thay thế manual subscription trong useEffect. Nhận subscribe function và getSnapshot function. Libraries như Redux đã migrate sang hook này thay vì useEffect-based subscription.", q_en: "What is the useSyncExternalStore hook?", a_en: "useSyncExternalStore (React 18) is the official hook for subscribing to external stores (Redux, Zustand, browser APIs) while guaranteeing consistent reads in Concurrent Mode. It replaces manual subscription patterns inside useEffect. It takes a subscribe function and a getSnapshot function. Libraries like Redux have migrated to this hook instead of useEffect-based subscriptions." },
  { id: 488, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "Quy tắc của Hooks (Rules of Hooks) là gì?", a: "Hai quy tắc bắt buộc: (1) Chỉ gọi hooks ở top level — không trong vòng lặp, điều kiện hay hàm lồng, vì React theo dõi hooks theo thứ tự gọi mỗi render. (2) Chỉ gọi hooks trong function component hoặc custom hook, không trong class hay hàm JS thông thường. Vi phạm gây lỗi runtime khó debug. Cài `eslint-plugin-react-hooks` để bắt lỗi ngay lúc viết code thay vì lúc chạy.", q_en: "What are the Rules of Hooks?", a_en: "There are two mandatory rules: (1) Only call hooks at the top level — never inside loops, conditions, or nested functions — because React tracks hooks by their call order on each render. (2) Only call hooks inside function components or custom hooks, not in classes or regular JS functions. Violations cause hard-to-debug runtime errors. Install `eslint-plugin-react-hooks` to catch violations at write time rather than at runtime." },
  { id: 489, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "Tại sao hooks không thể gọi conditionally?", a: "React theo dõi hooks theo thứ tự gọi trong mỗi render. Nếu gọi conditional, thứ tự thay đổi giữa các renders và React không biết hook nào tương ứng với state nào. Lỗi sẽ xảy ra và state bị sai. Thay vào đó, đặt conditional bên trong hook nếu cần: `useEffect(() => { if (condition) { ... } }, [condition])`.", q_en: "Why can hooks not be called conditionally?", a_en: "React tracks hooks by their call order on each render. If a hook is called conditionally, the order can differ between renders and React loses track of which hook corresponds to which state, causing incorrect behavior and errors. Instead, place the condition inside the hook: `useEffect(() => { if (condition) { ... } }, [condition])`." },
  { id: 490, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useOptimistic hook (React 19) là gì?", a: "useOptimistic cho phép hiển thị state tạm thời (optimistic) ngay lập tức khi user hành động, trước khi server response. Nếu action thất bại, tự động rollback về state thực. Cú pháp: `const [optimisticMessages, addOptimistic] = useOptimistic(messages, (state, newMsg) => [...state, newMsg])`. Cải thiện perceived performance.", q_en: "What is the useOptimistic hook in React 19?", a_en: "useOptimistic lets you immediately show a temporary optimistic state when the user takes an action, before the server responds. If the action fails, it automatically rolls back to the real state. Syntax: `const [optimisticMessages, addOptimistic] = useOptimistic(messages, (state, newMsg) => [...state, newMsg])`. This significantly improves perceived performance." },
  { id: 491, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useActionState hook (React 19) là gì?", a: "useActionState (trước là useFormState trong React DOM) quản lý state của form action, trả về `[state, dispatch, isPending]`. Tích hợp với Server Actions trong Next.js. Thay thế pattern thủ công quản lý loading/error state khi submit form. Tự động handle pending state và error state từ action.", q_en: "What is the useActionState hook in React 19?", a_en: "useActionState (previously useFormState in React DOM) manages the state of a form action and returns `[state, dispatch, isPending]`. It integrates with Server Actions in Next.js. It replaces the manual pattern of managing loading and error state around form submissions, automatically handling the pending and error states returned from the action." },
  { id: 492, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "Cách tối ưu useContext để tránh re-render không cần thiết?", a: "Khi context value thay đổi, mọi consumer re-render dù chỉ dùng một phần. Tối ưu: tách context thành nhiều context nhỏ hơn theo concern, memoize context value với useMemo, dùng context selector pattern hay thư viện như use-context-selector. Ngoài ra, split static và dynamic context riêng biệt.", q_en: "How do you optimize useContext to prevent unnecessary re-renders?", a_en: "When a context value changes, every consumer re-renders even if it only uses a small part of the value. Optimizations: split context into smaller, focused contexts by concern, memoize the context value with useMemo, use the context selector pattern or a library like use-context-selector, and separate static from dynamic context into different providers." },
  { id: 493, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "useReducer kết hợp useContext để thay thế Redux như thế nào?", a: "Pattern: tạo Context với value là `{ state, dispatch }`, dùng useReducer quản lý state, bọc app trong Provider. Consumers dùng useContext để lấy state và dispatch actions. Phù hợp cho state management vừa và nhỏ. Khác Redux: không có middleware, devtools kém hơn, không serialize actions. Redux vẫn tốt hơn cho large apps.", q_en: "How do you combine useReducer and useContext to replace Redux?", a_en: "The pattern: create a Context whose value is `{ state, dispatch }`, use useReducer to manage state, and wrap the app in the Provider. Consumers call useContext to access state and dispatch actions. This works well for medium-sized state management. Differences from Redux: no middleware, weaker DevTools, no action serialization. Redux is still the better choice for large, complex applications." },
  { id: 494, category: "React", subcategory: "Advanced Hooks", level: "advanced", q: "useEvent hook (RFC) giải quyết vấn đề gì?", a: "useEvent RFC đã withdrawn, thay bằng `useEffectEvent` (experimental React 18.3+). Giải quyết: cần function stable reference nhưng luôn đọc props/state mới nhất. useCallback tạo stable ref nhưng stale closure. Workaround hiện tại: dùng useRef để lưu function mới nhất, hoặc chờ useEffectEvent stable.", q_en: "What problem was the useEvent hook (RFC) trying to solve?", a_en: "The useEvent RFC was withdrawn and replaced by `useEffectEvent` (experimental in React 18.3+). The problem it solves: needing a function with a stable reference that always reads the latest props and state. useCallback provides a stable reference but creates a stale closure. The current workaround is using useRef to store the latest function, or waiting for useEffectEvent to stabilize." },
  { id: 495, category: "React", subcategory: "Advanced Hooks", level: "intermediate", q: "Sự khác biệt giữa useMemo và React.memo là gì?", a: "useMemo là hook memoize giá trị/kết quả tính toán bên trong component. React.memo là HOC memoize toàn bộ component, skip re-render khi props không thay đổi (shallow comparison). Kết hợp cả hai: dùng React.memo cho component, useCallback cho callback props để React.memo hoạt động hiệu quả.", q_en: "What is the difference between useMemo and React.memo?", a_en: "useMemo is a hook that memoizes a computed value or calculation result inside a component. React.memo is a Higher-Order Component that memoizes an entire component, skipping re-renders when props have not changed (shallow comparison). Use both together: wrap the component with React.memo and wrap callback props with useCallback so React.memo's comparison works correctly." },

  // === React - Custom Hooks (496-505) ===
  { id: 496, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "Custom hook là gì và cách tạo?", a: "Custom hook là JavaScript function bắt đầu bằng 'use' có thể gọi các hooks khác. Dùng để tái sử dụng stateful logic giữa components. Mỗi component sử dụng custom hook có state instance riêng biệt, không chia sẻ. \n\n**Ví dụ:** `function useLocalStorage(key, initial) { const [value, setValue] = useState(...); return [value, setValue]; }`.", q_en: "What is a custom hook and how do you create one?", a_en: "A custom hook is a JavaScript function whose name starts with 'use' and which can call other hooks. It is used to share stateful logic between components. Each component that uses the hook gets its own isolated state instance — state is not shared. \n\n**Example:** `function useLocalStorage(key, initial) { const [value, setValue] = useState(...); return [value, setValue]; }`." },
  { id: 497, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "Tại sao custom hook phải bắt đầu bằng 'use'?", a: "Quy ước 'use' prefix là contract với React và linter: nó nói với React rằng function này có thể gọi hooks bên trong. ESLint plugin react-hooks/rules-of-hooks chỉ kiểm tra functions có prefix 'use'. Không bắt đầu bằng 'use' có nghĩa là function không tuân theo rules of hooks và linter sẽ không cảnh báo nếu vi phạm.", q_en: "Why must a custom hook start with 'use'?", a_en: "The 'use' prefix is a contract with React and the linter: it signals that this function may call hooks inside. The ESLint plugin react-hooks/rules-of-hooks only enforces the Rules of Hooks on functions prefixed with 'use'. Without the prefix, the function is not treated as a hook and the linter will not warn about violations inside it." },
  { id: 498, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "Khi nào nên tách logic vào custom hook so với utility function?", a: "Dùng custom hook khi logic cần: React hooks (useState, useEffect, v.v.), React lifecycle, hay stateful behavior. Dùng utility function (pure function) khi: chỉ xử lý data transformation, validation, formatting - không cần React context. Custom hook gọi được từ components, utility function gọi từ bất cứ đâu.", q_en: "When should you extract logic into a custom hook vs a utility function?", a_en: "Use a custom hook when the logic requires React hooks (useState, useEffect, etc.), React lifecycle behavior, or stateful behavior. Use a plain utility function (pure function) when the logic only handles data transformation, validation, or formatting — no React context needed. Custom hooks can only be called from components; utility functions can be called from anywhere." },
  { id: 499, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "Viết custom hook useDebounce như thế nào?", a: "useDebounce delay việc cập nhật value cho đến khi user ngừng thay đổi trong khoảng thời gian nhất định: `function useDebounce(value, delay) { const [debounced, setDebounced] = useState(value); useEffect(() => { const timer = setTimeout(() => setDebounced(value), delay); return () => clearTimeout(timer); }, [value, delay]); return debounced; }`.", q_en: "How do you implement a useDebounce custom hook?", a_en: "useDebounce delays updating the value until the user stops changing it for a specified duration: `function useDebounce(value, delay) { const [debounced, setDebounced] = useState(value); useEffect(() => { const timer = setTimeout(() => setDebounced(value), delay); return () => clearTimeout(timer); }, [value, delay]); return debounced; }`." },
  { id: 500, category: "React", subcategory: "Custom Hooks", level: "advanced", q: "Làm thế nào để test custom hooks?", a: "Dùng @testing-library/react với `renderHook` utility: `const { result } = renderHook(() => useMyHook()); expect(result.current.value).toBe(expected)`. Để test interactions: `act(() => { result.current.setValue('new') })`. Với async hooks dùng `waitFor`. `renderHook` tạo component test wrapper để hooks có React context đầy đủ.", q_en: "How do you test custom hooks?", a_en: "Use @testing-library/react with the `renderHook` utility: `const { result } = renderHook(() => useMyHook()); expect(result.current.value).toBe(expected)`. To test interactions: `act(() => { result.current.setValue('new') })`. For async hooks use `waitFor`. `renderHook` creates a test component wrapper so hooks have full React context." },
  { id: 501, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "usePrevious hook làm gì và cách implement?", a: `usePrevious lưu giá trị trước đó của một value sử dụng useRef. Sau mỗi render, ref được cập nhật với value hiện tại nhưng function trả về ref.current (value từ render trước).
\`\`\`tsx
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  // useEffect không có deps chạy sau MỖI render
  // → ghi ref SAU khi render hiện tại đã xong
  // → lần render tiếp theo, ref.current là giá trị CŨ
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// Ví dụ sử dụng
const Counter = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <p>
      Current: {count}, Previous: {prevCount ?? 'none'}
    </p>
  )
}
\`\`\``, q_en: "What does the usePrevious hook do and how do you implement it?", a_en: `usePrevious stores the previous value of a variable using useRef. After each render the ref is updated with the current value, but the function returns ref.current — the value from the previous render.
\`\`\`tsx
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  // useEffect with no deps runs after EVERY render
  // → writes to ref AFTER the current render completes
  // → on the next render, ref.current holds the OLD value
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// Usage example
const Counter = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <p>
      Current: {count}, Previous: {prevCount ?? 'none'}
    </p>
  )
}
\`\`\`` },
  { id: 502, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "useFetch custom hook nên xử lý những trường hợp nào?", a: "useFetch nên handle: loading state, error state, data state, abort on unmount (AbortController), refetch capability, caching tùy chọn. Nên tránh: không xử lý race conditions, không handle 4xx/5xx HTTP errors riêng biệt. Thực tế, dùng React Query hoặc SWR tốt hơn tự viết vì chúng xử lý tất cả edge cases.", q_en: "What cases should a useFetch custom hook handle?", a_en: "useFetch should handle: loading state, error state, data state, aborting on unmount (AbortController), a refetch capability, and optional caching. Common pitfalls to avoid: not handling race conditions and not distinguishing 4xx/5xx HTTP errors. In practice, React Query or SWR are better choices than writing your own because they handle all edge cases out of the box." },
  { id: 503, category: "React", subcategory: "Custom Hooks", level: "advanced", q: "Composition của custom hooks là gì?", a: "Custom hooks có thể gọi custom hooks khác, tạo composable layers. \n\n**Ví dụ:** useUser gọi useFetch, useCache, useAuth. Pattern này giống function composition, cho phép xây dựng complex behaviors từ simple hooks. Giữ mỗi hook single-responsibility, tránh hooks quá fat có nhiều trách nhiệm không liên quan.", q_en: "What is custom hook composition?", a_en: "Custom hooks can call other custom hooks, creating composable layers. For example, useUser can call useFetch, useCache, and useAuth internally. This mirrors function composition and allows building complex behaviors from simple, focused hooks. Keep each hook single-responsibility — avoid bloated hooks with multiple unrelated concerns." },
  { id: 504, category: "React", subcategory: "Custom Hooks", level: "intermediate", q: "Custom hook có thể return gì?", a: "Custom hook có thể return bất cứ thứ gì: object `{ value, setValue }`, array `[value, handler]` (như useState), single value, function, hay void. Convention: return array khi có 2 giá trị đơn giản (như useState), return object khi có nhiều named values. Tên phải mô tả ý nghĩa rõ ràng.", q_en: "What can a custom hook return?", a_en: "A custom hook can return anything: an object `{ value, setValue }`, an array `[value, handler]` (like useState), a single value, a function, or void. Convention: return an array for two simple values (mirroring useState), return a named object when there are multiple values to expose. Names should clearly describe their meaning." },
  { id: 505, category: "React", subcategory: "Custom Hooks", level: "advanced", q: "Patterns hay được dùng trong custom hooks là gì?", a: "Các patterns phổ biến: (1) State + Actions pattern (return state và handlers), (2) Observer pattern (subscribe/unsubscribe), (3) Factory pattern (nhận config tạo ra hook instance khác nhau), (4) Composition (gọi nhiều hooks nhỏ), (5) Bridge pattern (kết nối external library với React world). usehooks.com là nguồn tham khảo tốt.", q_en: "What patterns are commonly used when building custom hooks?", a_en: "Common patterns: (1) State + Actions — return state and handlers together; (2) Observer — subscribe/unsubscribe to external sources; (3) Factory — accept config to produce different hook instances; (4) Composition — call multiple smaller hooks internally; (5) Bridge — connect an external library to the React world. usehooks.com is a great reference for well-tested implementations." },

  // === React - Context & Router (506-520) ===
  { id: 506, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Context API trong React là gì và giải quyết vấn đề gì?", a: `Context API cho phép chia sẻ dữ liệu (theme, language, auth, user) qua component tree mà không cần pass props qua từng cấp trung gian (props drilling). Gồm ba phần: createContext, Provider, useContext.
\`\`\`tsx
// auth-context.tsx
interface AuthCtx { user: User | null; logout: () => void }
const AuthContext = createContext<AuthCtx | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const logout = () => setUser(null)
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook để dùng an toàn
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}

// Dùng trong component
const Header = () => {
  const { user, logout } = useAuth()
  return <button onClick={logout}>Logout {user?.name}</button>
}
\`\`\``, q_en: "What is the Context API in React and what problem does it solve?", a_en: `The Context API lets you share data (theme, language, auth, user info) across the component tree without passing props through every intermediate level (prop drilling). It has three parts: createContext, Provider, and useContext.
\`\`\`tsx
// auth-context.tsx
interface AuthCtx { user: User | null; logout: () => void }
const AuthContext = createContext<AuthCtx | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const logout = () => setUser(null)
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Safe hook with guard
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}

// Usage in any descendant
const Header = () => {
  const { user, logout } = useAuth()
  return <button onClick={logout}>Logout {user?.name}</button>
}
\`\`\`` },
  { id: 507, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Provider và Consumer trong Context API hoạt động như thế nào?", a: "Provider bọc phần tree cần access context, cung cấp value: `<ThemeContext.Provider value={theme}>`. Consumer là cách cũ để đọc context dùng render props pattern. useContext hook là cách hiện đại thay Consumer, ngắn gọn hơn nhiều. Khi Provider value thay đổi, tất cả consumers re-render.", q_en: "How do Provider and Consumer work in the Context API?", a_en: "Provider wraps the part of the tree that needs access to the context and supplies the value: `<ThemeContext.Provider value={theme}>`. Consumer is the legacy way to read context using the render props pattern. The useContext hook is the modern replacement for Consumer and is much more concise. When the Provider value changes, all consumers re-render." },
  { id: 508, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Khi nào nên dùng Context thay vì props drilling?", a: "Dùng Context khi: dữ liệu cần ở nhiều levels sâu (theme, locale, auth), data được nhiều components dùng, props chỉ passed qua để forward (không dùng ở cấp trung gian). Không nên dùng cho state thay đổi thường xuyên vì gây nhiều re-renders. Props drilling 2-3 cấp thì không cần Context.", q_en: "When should you use Context instead of prop drilling?", a_en: "Use Context when: data is needed many levels deep (theme, locale, auth), many components need the same data, or props are only being passed through intermediate levels without being used there. Avoid Context for frequently changing state because it causes many re-renders. Prop drilling across 2-3 levels does not warrant Context." },
  { id: 509, category: "React", subcategory: "Context & Router", level: "intermediate", q: "React Router là gì và cách hoạt động?", a: "React Router là thư viện routing phổ biến nhất cho React SPA. Dựa trên history API của browser, sync URL với component tree. Components chính: BrowserRouter (provider), Routes/Route (mapping URL đến component), Link (navigation không reload). Phiên bản v6 thay đổi nhiều so với v5 với nested routes và outlet.", q_en: "What is React Router and how does it work?", a_en: "React Router is the most popular routing library for React SPAs. It uses the browser's history API to keep the URL in sync with the component tree. Core components: BrowserRouter (the provider), Routes/Route (map URLs to components), and Link (navigate without a full page reload). Version 6 introduced significant changes from v5, including improved nested routes and the Outlet component." },
  { id: 510, category: "React", subcategory: "Context & Router", level: "beginner", q: "Sự khác biệt giữa Link và anchor tag trong React Router?", a: "Link component của React Router ngăn browser reload trang, thay vào đó cập nhật history và render component tương ứng - đây là SPA behavior. Anchor tag `<a href>` thực hiện full page reload, reset React state hoàn toàn. Dùng Link cho internal navigation, anchor tag cho external links.", q_en: "What is the difference between Link and an anchor tag in React Router?", a_en: "React Router's Link component prevents a full browser reload — it updates the history and renders the matching component instead, preserving SPA behavior. An `<a href>` tag causes a full page reload that completely resets React state. Use Link for internal navigation and anchor tags for external links." },
  { id: 511, category: "React", subcategory: "Context & Router", level: "intermediate", q: "useParams hook trong React Router dùng để làm gì?", a: "useParams trả về object chứa các dynamic segment của URL route đang active. Ví dụ route `/users/:id` khi truy cập `/users/42` thì `const { id } = useParams()` trả về `id = '42'`. Lưu ý giá trị luôn là string, cần tự convert nếu cần number: `Number(id)`. Với TypeScript dùng `useParams<{ id: string }>()` để type-safe. Nếu dùng ngoài Router context sẽ trả về object rỗng.", q_en: "What is the useParams hook in React Router used for?", a_en: "useParams returns an object containing the dynamic segments of the currently active URL route. For example, with route `/users/:id` when visiting `/users/42`, `const { id } = useParams()` returns `id = '42'`. Note that values are always strings — convert manually if you need a number: `Number(id)`. With TypeScript use `useParams<{ id: string }>()` for type safety. If called outside a Router context it returns an empty object." },
  { id: 512, category: "React", subcategory: "Context & Router", level: "intermediate", q: "useNavigate hook trong React Router v6 dùng như thế nào?", a: "useNavigate trả về navigate function để programmatically điều hướng: `navigate('/path')`, `navigate(-1)` (back), `navigate('/path', { replace: true })`. Thay thế cho useHistory trong v5. Dùng khi cần navigate sau form submit, sau auth login, hay trong event handlers không phải JSX.", q_en: "How do you use the useNavigate hook in React Router v6?", a_en: "useNavigate returns a navigate function for programmatic navigation: `navigate('/path')`, `navigate(-1)` (go back), `navigate('/path', { replace: true })`. It replaces useHistory from v5. Use it when you need to navigate after a form submission, after a successful login, or inside event handlers rather than JSX." },
  { id: 513, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Nested routes trong React Router v6 hoạt động như thế nào?", a: "Nested routes dùng `<Outlet />` component để render child routes. Parent route render layout, Outlet là nơi child route render: `<Route path='/dashboard' element={<DashboardLayout />}><Route index element={<Overview />} /><Route path='settings' element={<Settings />} /></Route>`. Child route paths relative, không cần lặp lại parent path.", q_en: "How do nested routes work in React Router v6?", a_en: "Nested routes use the `<Outlet />` component as a slot where child routes render. The parent route renders the shared layout and Outlet marks where the child content appears: `<Route path='/dashboard' element={<DashboardLayout />}><Route index element={<Overview />} /><Route path='settings' element={<Settings />} /></Route>`. Child route paths are relative — no need to repeat the parent path." },
  { id: 514, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Protected routes trong React Router được implement như thế nào?", a: "Tạo wrapper component kiểm tra auth rồi redirect nếu chưa đăng nhập: `function PrivateRoute({ children }) { const { user } = useAuth(); return user ? children : <Navigate to='/login' state={{ from: location }} replace />; }`. Truyền `state={{ from: location }}` để sau khi login có thể redirect về trang user định vào. Dùng trong Route: `<Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />`. Navigate replace thay Redirect của React Router v5.", q_en: "How do you implement protected routes in React Router?", a_en: "Create a wrapper component that checks authentication and redirects if the user is not logged in: `function PrivateRoute({ children }) { const { user } = useAuth(); return user ? children : <Navigate to='/login' state={{ from: location }} replace />; }`. Pass `state={{ from: location }}` so after login the user can be redirected back to their intended page. Use it in a Route: `<Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />`. The Navigate component replaces the Redirect from React Router v5." },
  { id: 515, category: "React", subcategory: "Context & Router", level: "beginner", q: "useLocation hook trong React Router trả về gì?", a: "useLocation trả về object location hiện tại gồm: pathname (đường dẫn), search (query string dạng `?tab=profile`), hash, và state (data truyền qua navigate). Ví dụ đọc query param: `new URLSearchParams(location.search).get('tab')`. Dùng để track analytics khi pathname đổi, hoặc lưu intended URL trước khi redirect login: `navigate('/login', { state: { from: location } })` rồi sau login `navigate(state.from)`.", q_en: "What does the useLocation hook return in React Router?", a_en: "useLocation returns the current location object containing: pathname (the path), search (query string like `?tab=profile`), hash, and state (data passed via navigate). Example of reading a query param: `new URLSearchParams(location.search).get('tab')`. Use it to track analytics when pathname changes, or to save the intended URL before redirecting to login: `navigate('/login', { state: { from: location } })`, then after login `navigate(state.from)`." },
  { id: 516, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Multiple contexts trong một app được tổ chức như thế nào?", a: "Tổ chức nhiều context bằng cách: tạo nhiều Provider riêng biệt, nest chúng lại (thứ tự từ ngoài vào trong), hoặc tạo AppProviders component bọc tất cả providers. Mỗi context chịu trách nhiệm một concern (AuthContext, ThemeContext, CartContext). Tránh god context chứa tất cả global state.", q_en: "How do you organize multiple contexts in an app?", a_en: "Organize multiple contexts by: creating separate, focused Providers, nesting them (outermost to innermost), or creating a single AppProviders component that wraps all providers together. Each context should own one concern (AuthContext, ThemeContext, CartContext). Avoid a single god context that holds all global state." },
  { id: 517, category: "React", subcategory: "Context & Router", level: "advanced", q: "Context re-render optimization là gì?", a: "Khi context value object được tạo mới mỗi render, tất cả consumers re-render dù giá trị thực không đổi. Fix: memoize value với useMemo `useMemo(() => ({ user, logout }), [user])`, tách state context và dispatch context riêng, dùng libraries như jotai/zustand tránh context re-render issues. Structural sharing giúp nhưng không đủ.", q_en: "What is context re-render optimization?", a_en: "When a context value object is recreated on every render, all consumers re-render even if the actual values have not changed. Fixes: memoize the value with useMemo `useMemo(() => ({ user, logout }), [user])`, split state and dispatch into separate contexts, or use libraries like Jotai or Zustand that avoid context re-render issues altogether. Structural sharing helps but is not sufficient on its own." },
  { id: 518, category: "React", subcategory: "Context & Router", level: "intermediate", q: "Default value của createContext dùng khi nào?", a: "Default value của `React.createContext(defaultValue)` chỉ dùng khi component consume context không có Provider nào bên trên. Hữu ích cho testing (không cần wrap với Provider) và cho components hoạt động độc lập. Trong production, thường luôn có Provider nên default value ít khi được dùng.", q_en: "When is the default value of createContext actually used?", a_en: "The default value in `React.createContext(defaultValue)` is only used when a consuming component has no Provider anywhere above it in the tree. This is useful for testing (no need to wrap with a Provider) and for components that can work in isolation. In production there is almost always a Provider present, so the default value is rarely reached." },
  { id: 519, category: "React", subcategory: "Context & Router", level: "intermediate", q: "React Router SearchParams (query strings) được xử lý như thế nào?", a: "Dùng useSearchParams hook: `const [searchParams, setSearchParams] = useSearchParams()`. Đọc: `searchParams.get('tab')`. Cập nhật: `setSearchParams({ tab: 'new' })` hay `setSearchParams(prev => { prev.set('tab', 'new'); return prev; })`. Phù hợp cho filter, pagination state cần share qua URL.", q_en: "How are query strings (SearchParams) handled in React Router?", a_en: "Use the useSearchParams hook: `const [searchParams, setSearchParams] = useSearchParams()`. Read a value: `searchParams.get('tab')`. Update: `setSearchParams({ tab: 'new' })` or `setSearchParams(prev => { prev.set('tab', 'new'); return prev; })`. This is ideal for filter and pagination state that needs to be shareable via URL." },
  { id: 520, category: "React", subcategory: "Context & Router", level: "advanced", q: "Data loading với React Router v6.4+ loader functions là gì?", a: "React Router v6.4 giới thiệu loader function cho Route để fetch data trước khi render component: `{ path: '/users/:id', loader: ({ params }) => fetchUser(params.id), element: <UserDetail /> }`. Dùng `useLoaderData()` trong component để access data. Xử lý loading/error states qua errorElement. Tương tự Next.js data fetching pattern.", q_en: "What are loader functions for data loading in React Router v6.4+?", a_en: "React Router v6.4 introduced loader functions on Route definitions to fetch data before the component renders: `{ path: '/users/:id', loader: ({ params }) => fetchUser(params.id), element: <UserDetail /> }`. Access the data in the component with `useLoaderData()`. Handle loading and error states via the errorElement property. This is conceptually similar to Next.js data fetching patterns." },

  // === React - Forms & Error (521-535) ===
  { id: 521, category: "React", subcategory: "Forms & Error", level: "beginner", q: "Controlled component trong form là gì?", a: "Controlled component là input có giá trị được kiểm soát hoàn toàn bởi React state. Value bind với state, onChange cập nhật state: `<input value={name} onChange={e => setName(e.target.value)} />`. Mọi thay đổi đi qua React, cho phép validate, transform, hay conditional disable dễ dàng.", q_en: "What is a controlled component in a form?", a_en: "A controlled component is an input whose value is fully managed by React state. The value is bound to state and onChange updates it: `<input value={name} onChange={e => setName(e.target.value)} />`. Every change flows through React, making it easy to validate, transform, or conditionally disable the input." },
  { id: 522, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Uncontrolled component và useRef trong form là gì?", a: "Uncontrolled component lưu giá trị trong DOM, không sync với React state. Dùng ref để đọc khi cần (submit): `const inputRef = useRef(null); <input ref={inputRef} />`. Kể từ React 19, useRef yêu cầu truyền giá trị khởi tạo (thường là null cho DOM refs). Đơn giản hơn cho form không cần real-time validation, nhưng khó tích hợp với validation libraries.", q_en: "What is an uncontrolled component and how does useRef fit into forms?", a_en: "An uncontrolled component stores its value in the DOM rather than syncing with React state. Use a ref to read the value when needed (e.g., on submit): `const inputRef = useRef(null); <input ref={inputRef} />`. Since React 19, useRef requires an initial value (typically null for DOM refs). This is simpler for forms that do not need real-time validation, but harder to integrate with validation libraries." },
  { id: 523, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Formik là gì và tại sao sử dụng nó?", a: "Formik là thư viện quản lý form state, validation, và submission trong React. Xử lý: touched/dirty states, error messages, submission handling, field-level và form-level validation. Giảm boilerplate code đáng kể so với quản lý state thủ công. Tích hợp tốt với Yup cho schema validation.", q_en: "What is Formik and why would you use it?", a_en: "Formik is a library for managing form state, validation, and submission in React. It handles: touched/dirty states, error messages, submission flow, and both field-level and form-level validation. It significantly reduces boilerplate compared to manual state management and integrates well with Yup for schema-based validation." },
  { id: 524, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "React Hook Form khác Formik như thế nào?", a: "React Hook Form dùng uncontrolled components và refs thay vì state, nên ít re-renders hơn (performance tốt hơn). API đơn giản hơn với register, handleSubmit, formState. Bundle size nhỏ hơn Formik. Formik dễ học hơn với explicit controlled pattern. RHF được cộng đồng ưa chuộng hơn cho performance-critical forms.", q_en: "How does React Hook Form differ from Formik?", a_en: "React Hook Form uses uncontrolled components and refs instead of state, resulting in fewer re-renders and better performance. Its API is simpler: register, handleSubmit, formState. Bundle size is smaller than Formik. Formik is easier to learn with its explicit controlled pattern. The community generally prefers RHF for performance-critical forms." },
  { id: 525, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Form validation trong React được thực hiện như thế nào?", a: "Các cách: (1) Manual: check trong onChange/onSubmit, lưu errors vào state. (2) HTML5 built-in: required, minLength, pattern attributes. (3) Formik + Yup: declarative schema validation. (4) React Hook Form với resolver (Yup, Zod). Dùng Zod cho type-safe validation kết hợp TypeScript là best practice hiện đại.", q_en: "How is form validation done in React?", a_en: "Several approaches: (1) Manual — check values in onChange/onSubmit and store errors in state. (2) HTML5 built-in — required, minLength, pattern attributes. (3) Formik + Yup — declarative schema validation. (4) React Hook Form with a resolver (Yup or Zod). Using Zod for type-safe validation combined with TypeScript is the modern best practice." },
  { id: 526, category: "React", subcategory: "Forms & Error", level: "beginner", q: "onSubmit handler trong React form ngăn reload page như thế nào?", a: "Gọi `event.preventDefault()` ở đầu onSubmit handler để chặn browser reload trang — đây là hành vi mặc định của HTML form khi submit. \n\n**Ví dụ:** `function handleSubmit(e) { e.preventDefault(); callApi(formData); }`. Sau đó xử lý validate, gọi API và cập nhật state tự do trong JS. Nếu dùng React Hook Form, `handleSubmit(onSubmit)` wrapper tự động gọi preventDefault nên không cần làm thủ công.", q_en: "How does an onSubmit handler prevent a page reload in a React form?", a_en: "Call `event.preventDefault()` at the top of the onSubmit handler to block the browser's default form submission behavior, which causes a full page reload. \n\n**Example:** `function handleSubmit(e) { e.preventDefault(); callApi(formData); }`. You can then freely validate, call APIs, and update state. When using React Hook Form, the `handleSubmit(onSubmit)` wrapper calls preventDefault automatically." },
  { id: 527, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Error Boundary là gì và cách tạo?", a: "Error Boundary là React component bắt JavaScript errors trong component tree con và hiển thị fallback UI thay vì crash toàn app. Chỉ có thể tạo với Class Component implement `getDerivedStateFromError` (set error state) và `componentDidCatch` (log error). Thư viện react-error-boundary cung cấp `ErrorBoundary` component tiện dụng hơn.", q_en: "What is an Error Boundary and how do you create one?", a_en: "An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the whole app. It can only be created with a Class Component that implements `getDerivedStateFromError` (to set the error state) and `componentDidCatch` (to log the error). The react-error-boundary library provides a convenient `ErrorBoundary` component for function-component-based projects." },
  { id: 528, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Error Boundary không bắt được lỗi nào?", a: "Error Boundary không bắt: errors trong event handlers (phải try/catch thủ công), async code (setTimeout, Promises), server-side rendering, errors trong chính Error Boundary component. Chỉ bắt errors trong render phase, lifecycle methods, constructors của component tree bên dưới.", q_en: "What errors does an Error Boundary NOT catch?", a_en: "Error Boundaries do not catch: errors inside event handlers (use try/catch manually), errors in async code (setTimeout, Promises), server-side rendering errors, or errors thrown by the Error Boundary component itself. They only catch errors that occur during the render phase, lifecycle methods, and constructors of the component tree below them." },
  { id: 529, category: "React", subcategory: "Forms & Error", level: "advanced", q: "Làm thế nào để handle form với file upload trong React?", a: "Input type file phải là uncontrolled (không dùng value, dùng onChange để đọc files). Đọc files qua `e.target.files` (FileList object). Tạo FormData để gửi: `const fd = new FormData(); fd.append('file', file)`. Hiển thị preview với `URL.createObjectURL(file)`. Nhớ revoke URL sau khi dùng để tránh memory leak.", q_en: "How do you handle file uploads in a React form?", a_en: "File inputs must be uncontrolled — do not use the value attribute; use onChange to read the files instead. Access files via `e.target.files` (a FileList object). Build a FormData payload to send: `const fd = new FormData(); fd.append('file', file)`. Show a preview with `URL.createObjectURL(file)`. Always revoke the object URL afterward to prevent memory leaks." },
  { id: 530, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Dynamic form fields (thêm xóa input fields) được implement như thế nào?", a: "Lưu array of field objects trong state. Render với map, mỗi field có unique id làm key. Thêm: `setFields(prev => [...prev, { id: uuid(), value: '' }])`. Xóa: `setFields(prev => prev.filter(f => f.id !== id))`. React Hook Form cung cấp useFieldArray hook xử lý pattern này với performance tốt hơn.", q_en: "How do you implement dynamic form fields (add/remove inputs)?", a_en: "Store an array of field objects in state. Render them with map, giving each a unique id as the key. Add: `setFields(prev => [...prev, { id: uuid(), value: '' }])`. Remove: `setFields(prev => prev.filter(f => f.id !== id))`. React Hook Form provides the useFieldArray hook that handles this pattern with better performance." },
  { id: 531, category: "React", subcategory: "Forms & Error", level: "beginner", q: "Làm thế nào để handle select, checkbox, radio trong React?", a: "Select: value bind với state, onChange cập nhật. Multi-select: value nhận array, onChange đọc selectedOptions. Checkbox: dùng `checked` thay `value`, onChange nhận `e.target.checked`. Radio group: mỗi radio có value, checked so sánh với state, onChange set state với value. Controlled pattern áp dụng tương tự cho tất cả.", q_en: "How do you handle select, checkbox, and radio inputs in React?", a_en: "Select: bind value to state and update in onChange. Multi-select: value accepts an array, onChange reads selectedOptions. Checkbox: use the `checked` attribute instead of `value`, onChange receives `e.target.checked`. Radio group: each radio has a value, checked compares it to state, and onChange sets state to that value. The controlled pattern applies consistently to all of these." },
  { id: 532, category: "React", subcategory: "Forms & Error", level: "advanced", q: "Optimistic UI trong form submission là gì?", a: "Optimistic UI cập nhật UI ngay lập tức trước khi server confirm, giả định success. Nếu server thất bại, rollback về state trước. Cải thiện perceived performance. Implement: update local state trước khi gọi API, trong catch block rollback state và hiển thị error. React 19 useOptimistic hook simplifies pattern này.", q_en: "What is Optimistic UI in form submission?", a_en: "Optimistic UI updates the UI immediately before the server confirms, assuming success. If the server fails, it rolls back to the previous state. This improves perceived performance significantly. Implementation: update local state before calling the API; in the catch block, roll back state and show the error. The React 19 useOptimistic hook simplifies this pattern." },
  { id: 533, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Form accessibility (a11y) trong React cần lưu ý gì?", a: "Cần: label liên kết với input qua htmlFor/id hoặc aria-label, error messages có aria-describedby, required fields có aria-required hoặc required attribute, disabled buttons không dùng pointer-events:none mà dùng disabled attribute, focus management khi modal mở/đóng. React ARIA library từ Adobe cung cấp accessible primitives.", q_en: "What accessibility (a11y) considerations are important for React forms?", a_en: "Key requirements: link labels to inputs via htmlFor/id or aria-label, associate error messages with aria-describedby, mark required fields with aria-required or the required attribute, disable buttons with the disabled attribute rather than pointer-events:none, and manage focus when modals open and close. Adobe's React ARIA library provides battle-tested accessible primitives." },
  { id: 534, category: "React", subcategory: "Forms & Error", level: "intermediate", q: "Zod integration với React Hook Form như thế nào?", a: "Dùng @hookform/resolvers/zod với zodResolver: `const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })`. Define schema: `const schema = z.object({ email: z.string().email(), age: z.number().min(18) })`. Errors type-safe từ Zod được truyền vào formState.errors. Cách tiếp cận hiện đại nhất cho type-safe forms.", q_en: "How do you integrate Zod with React Hook Form?", a_en: "Use @hookform/resolvers/zod with zodResolver: `const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })`. Define the schema: `const schema = z.object({ email: z.string().email(), age: z.number().min(18) })`. Type-safe errors from Zod flow directly into formState.errors. This is the most modern approach for building fully type-safe forms." },
  { id: 535, category: "React", subcategory: "Forms & Error", level: "advanced", q: "Server-side form validation vs client-side validation khi nào dùng cái nào?", a: "Client-side validation: UX tốt hơn, instant feedback, giảm unnecessary server requests. KHÔNG thể thay thế server-side vì user có thể bypass. Server-side validation: bắt buộc cho security, validate business rules phức tạp, kiểm tra database constraints. Best practice: cả hai - client để UX, server để security và correctness.", q_en: "When should you use server-side vs client-side form validation?", a_en: "Client-side validation: better UX, instant feedback, fewer unnecessary server requests. It CANNOT replace server-side validation because users can bypass it. Server-side validation: mandatory for security, enforcing complex business rules, and checking database constraints. Best practice: use both — client-side for UX, server-side for security and correctness." },

  // === React - Performance & Patterns (536-550) ===
  { id: 536, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "React.memo là gì và cách hoạt động?", a: `React.memo là HOC memoize function component, skip re-render nếu props không thay đổi (shallow comparison). Nên dùng khi component render expensive và props ít thay đổi. Cần kết hợp với useCallback cho function props để có hiệu quả.
\`\`\`tsx
// Row chỉ re-render khi data hoặc onDelete thực sự thay đổi
const Row = React.memo(({ data, onDelete }: RowProps) => {
  console.log('Row render:', data.id)
  return (
    <tr>
      <td>{data.name}</td>
      <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
    </tr>
  )
})

const Table = ({ items }: { items: Item[] }) => {
  // useCallback để giữ stable reference, tránh Row re-render mỗi khi Table render
  const handleDelete = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  return (
    <table>
      {items.map(item => <Row key={item.id} data={item} onDelete={handleDelete} />)}
    </table>
  )
}
\`\`\``, q_en: "What is React.memo and how does it work?", a_en: `React.memo is a Higher-Order Component that memoizes a function component, skipping re-renders when props have not changed (shallow comparison). Use it when the component is expensive to render and props change infrequently. Combine with useCallback for function props to make the comparison effective.
\`\`\`tsx
// Row only re-renders when data or onDelete actually changes
const Row = React.memo(({ data, onDelete }: RowProps) => {
  console.log('Row render:', data.id)
  return (
    <tr>
      <td>{data.name}</td>
      <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
    </tr>
  )
})

const Table = ({ items }: { items: Item[] }) => {
  // useCallback keeps a stable reference, preventing Row re-renders on every Table render
  const handleDelete = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  return (
    <table>
      {items.map(item => <Row key={item.id} data={item} onDelete={handleDelete} />)}
    </table>
  )
}
\`\`\`` },
  { id: 537, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "React.lazy và Suspense dùng để làm gì?", a: `React.lazy cho phép lazy load component, chỉ download JavaScript khi component cần render. Suspense hiển thị fallback UI trong khi component đang load. Giúp code splitting, giảm initial bundle size.
\`\`\`tsx
import { lazy, Suspense } from 'react'

// Bundle của HeavyChart chỉ download khi cần
const HeavyChart = lazy(() => import('./HeavyChart'))

const Dashboard = () => {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Load Chart</button>
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  )
}
\`\`\``, q_en: "What are React.lazy and Suspense used for?", a_en: `React.lazy enables lazy loading of a component — its JavaScript is only downloaded when the component needs to render. Suspense shows a fallback UI while the component loads. Together they enable code splitting and reduce initial bundle size.
\`\`\`tsx
import { lazy, Suspense } from 'react'

// HeavyChart bundle is only downloaded when needed
const HeavyChart = lazy(() => import('./HeavyChart'))

const Dashboard = () => {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Load Chart</button>
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  )
}
\`\`\`` },
  { id: 538, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Virtual DOM trong React là gì?", a: "Virtual DOM là representation trong memory của DOM thực. Khi state thay đổi, React tạo Virtual DOM mới, so sánh (diff) với Virtual DOM cũ, tính ra minimal set of changes, rồi áp dụng vào DOM thực (reconciliation). Giúp tối ưu DOM operations tốn kém, nhưng không phải lúc nào cũng nhanh hơn direct DOM manipulation.", q_en: "What is the Virtual DOM in React?", a_en: "The Virtual DOM is an in-memory representation of the real DOM. When state changes, React creates a new Virtual DOM tree, diffs it against the previous one, computes the minimal set of changes, and applies them to the real DOM (reconciliation). This optimizes expensive DOM operations, though it is not always faster than direct DOM manipulation for simple cases." },
  { id: 539, category: "React", subcategory: "Performance & Patterns", level: "advanced", q: "React Fiber là gì?", a: "React Fiber là reimplementation của React's reconciliation algorithm (React 16+). Cho phép chia nhỏ rendering work thành units, có thể pause, resume, hay abort. Enables: incremental rendering, priority-based updates, concurrent features (Suspense, useTransition). Giải quyết vấn đề previous stack reconciler không thể interrupt render.", q_en: "What is React Fiber?", a_en: "React Fiber is a complete reimplementation of React's reconciliation algorithm introduced in React 16. It breaks rendering work into small units that can be paused, resumed, or aborted. This enables incremental rendering, priority-based updates, and all concurrent features like Suspense and useTransition. It solved the core problem with the previous stack reconciler, which could not interrupt a render once started." },
  { id: 540, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "HOC (Higher Order Component) là gì?", a: "HOC là function nhận component và return component mới được enhanced: `function withAuth(Component) { return function AuthWrapper(props) { ... } }`. Pattern phổ biến cho: authentication, logging, data fetching, với-conditional rendering. Hiện nay Hooks thường thay thế nhiều use cases của HOC vì đơn giản và composable hơn.", q_en: "What is a Higher Order Component (HOC)?", a_en: "A HOC is a function that takes a component and returns a new enhanced component: `function withAuth(Component) { return function AuthWrapper(props) { ... } }`. Common use cases: authentication guards, logging, data fetching, and conditional rendering. Hooks have replaced many HOC use cases today because they are simpler and more composable." },
  { id: 541, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Render props pattern là gì?", a: "Render props là technique chia sẻ code giữa components dùng prop là function trả về React element. Component nhận function prop gọi nó với internal state/logic: `<Mouse render={({ x, y }) => <Cat x={x} y={y} />} />`. Linh hoạt hơn HOC vì tránh naming collisions. Custom hooks giờ thường là giải pháp cleaner hơn.", q_en: "What is the render props pattern?", a_en: "Render props is a technique for sharing code between components using a prop that is a function returning a React element. The component calls the function prop with its internal state or logic: `<Mouse render={({ x, y }) => <Cat x={x} y={y} />} />`. It is more flexible than HOCs because it avoids naming collisions. Custom hooks are now generally the cleaner alternative." },
  { id: 542, category: "React", subcategory: "Performance & Patterns", level: "advanced", q: "Reconciliation algorithm trong React hoạt động như thế nào?", a: "React dùng heuristic O(n) algorithm thay vì O(n³) để diff trees: (1) Elements khác type → destroy và rebuild hoàn toàn. (2) Cùng type → compare props, update chỉ những gì thay đổi. (3) Lists dùng key để match elements giữa renders. Hiểu algorithm giúp tránh bugs và tối ưu performance.", q_en: "How does React's reconciliation algorithm work?", a_en: "React uses an O(n) heuristic algorithm instead of the theoretically optimal O(n³) to diff trees: (1) Elements of different types — destroy and rebuild completely. (2) Same type — compare props and update only what changed. (3) Lists — use the key prop to match elements between renders. Understanding this algorithm helps you avoid bugs and write more performant component trees." },
  { id: 543, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Code splitting trong React được thực hiện như thế nào?", a: "Code splitting chia bundle thành nhiều chunks, load on demand. React.lazy + dynamic import là cách chính. Route-level splitting phổ biến nhất: mỗi route là lazy-loaded component. Webpack/Vite tự động tạo chunks tách biệt. next/dynamic trong Next.js cho SSR-compatible lazy loading.", q_en: "How is code splitting implemented in React?", a_en: "Code splitting divides the bundle into multiple chunks that load on demand. React.lazy with dynamic import is the primary approach. Route-level splitting is the most common: each route is a lazy-loaded component. Webpack and Vite automatically create separate chunks. In Next.js, use next/dynamic for SSR-compatible lazy loading." },
  { id: 544, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Windowing/virtualization trong React là gì?", a: "Virtualization chỉ render items hiện trong viewport, không render toàn bộ danh sách hàng nghìn items. Thư viện: react-window (lightweight), react-virtualized (feature-rich). Giảm DOM nodes từ hàng nghìn xuống chỉ ~20-50. Cần thiết khi render danh sách lớn (>100 items) gây performance issues.", q_en: "What is windowing/virtualization in React?", a_en: "Virtualization renders only the items currently visible in the viewport instead of the entire list of thousands. Libraries: react-window (lightweight) and react-virtualized (feature-rich). This reduces DOM nodes from thousands down to roughly 20-50 at any moment. It is essential when rendering large lists (100+ items) that cause noticeable performance issues." },
  { id: 545, category: "React", subcategory: "Performance & Patterns", level: "beginner", q: "React DevTools dùng để làm gì?", a: "React DevTools là browser extension cho phép: inspect component tree, xem props và state, profile renders để tìm bottlenecks, highlight components khi re-render. Profiler tab ghi lại render timing, giúp identify slow components. Kết hợp với React.memo và useCallback để tối ưu dựa trên dữ liệu thực tế.", q_en: "What is React DevTools used for?", a_en: "React DevTools is a browser extension that lets you: inspect the component tree, view props and state, profile renders to find performance bottlenecks, and highlight which components re-render. The Profiler tab records render timing and helps identify slow components. Use it together with React.memo and useCallback to optimize based on real data rather than guesswork." },
  { id: 546, category: "React", subcategory: "Performance & Patterns", level: "advanced", q: "Concurrent Mode trong React là gì?", a: "Concurrent Mode (React 18) cho phép React làm việc trên nhiều versions của UI đồng thời, prioritize urgent updates. Rendering có thể interrupt để handle urgent updates. Cho phép features như Suspense for data fetching, useTransition, useDeferredValue. Enabled bằng createRoot thay vì ReactDOM.render.", q_en: "What is Concurrent Mode in React?", a_en: "Concurrent Mode (React 18) allows React to work on multiple versions of the UI simultaneously and prioritize urgent updates. Rendering can be interrupted to handle more urgent work first. It enables features like Suspense for data fetching, useTransition, and useDeferredValue. It is activated by using createRoot instead of the legacy ReactDOM.render." },
  { id: 547, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Tại sao không nên tạo component trong component (inline components)?", a: "Định nghĩa component bên trong component khác tạo new component type mỗi render, React unmount/remount thay vì update, gây mất state và performance issues. Luôn khai báo components ở top-level module, hoặc ngoài parent component. Nếu cần data từ parent, truyền qua props hoặc dùng children pattern.", q_en: "Why should you avoid defining components inside other components (inline components)?", a_en: "Defining a component inside another component creates a new component type on every render. React sees it as a different component each time and unmounts/remounts instead of updating, causing state loss and performance issues. Always declare components at the module's top level. If they need data from the parent, pass it via props or use the children pattern." },
  { id: 548, category: "React", subcategory: "Performance & Patterns", level: "advanced", q: "Suspense for data fetching hoạt động như thế nào?", a: "Component throw Promise khi data chưa ready, Suspense catch Promise và show fallback, khi Promise resolve React retry render component. Hiện tại chính thức support với React.lazy và frameworks như Next.js (Server Components), React Query experimental. Cho phép colocate loading states với components cần data.", q_en: "How does Suspense for data fetching work?", a_en: "A component throws a Promise when its data is not yet ready. Suspense catches the Promise and shows the fallback UI. When the Promise resolves, React retries rendering the component. Currently officially supported with React.lazy and frameworks like Next.js (Server Components) and React Query (experimental). It allows loading states to be colocated with the components that need the data." },
  { id: 549, category: "React", subcategory: "Performance & Patterns", level: "intermediate", q: "Key prop dùng để reset component state như thế nào?", a: "Thay đổi key của component khiến React unmount component cũ và mount component mới hoàn toàn, reset tất cả state. Kỹ thuật hữu ích để: reset form sau submit `<Form key={formKey} />`, reset uncontrolled component khi data source thay đổi. Đây là cách React có ý muốn để 'reset' component state từ bên ngoài.", q_en: "How can the key prop be used to reset component state?", a_en: "Changing a component's key causes React to unmount the old instance and mount a completely new one, resetting all state. This is useful for: resetting a form after submission `<Form key={formKey} />`, or resetting an uncontrolled component when its data source changes. This is the intentional React pattern for resetting a component's state from outside." },
  { id: 550, category: "React", subcategory: "Performance & Patterns", level: "advanced", q: "React Server Components khác Client Components như thế nào?", a: "Server Components render trên server, không có state/effects/event handlers, có thể trực tiếp access database và file system, không thêm bundle size JavaScript. Client Components (với 'use client') chạy trên browser, có interactivity. Server Components được giới thiệu trong React 18 và là nền tảng của Next.js App Router.", q_en: "How do React Server Components differ from Client Components?", a_en: "Server Components render entirely on the server, have no state/effects/event handlers, can directly access databases and the file system, and add zero JavaScript to the client bundle. Client Components (marked with 'use client') run in the browser and support full interactivity. Server Components were introduced in React 18 and are the foundation of the Next.js App Router." },

  // === Next.js - App Router (551-560) ===
  { id: 551, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "App Router khác Pages Router trong Next.js như thế nào?", a: "App Router (Next.js 13+) dùng thư mục `app/`, hỗ trợ React Server Components mặc định, có nested layouts, loading/error states tích hợp. Pages Router dùng thư mục `pages/`, mọi component là Client Component, có getStaticProps/getServerSideProps. App Router là tương lai của Next.js với nhiều tính năng mới.", q_en: "How does the App Router differ from the Pages Router in Next.js?", a_en: "The App Router (Next.js 13+) uses the `app/` directory, supports React Server Components by default, and has built-in nested layouts and loading/error states. The Pages Router uses the `pages/` directory, treats every component as a Client Component, and uses getStaticProps/getServerSideProps for data fetching. The App Router is the future of Next.js with far more capabilities." },
  { id: 552, category: "Next.js", subcategory: "App Router", level: "beginner", q: "File-based routing trong Next.js App Router hoạt động như thế nào?", a: "Trong thư mục `app/`, mỗi thư mục đại diện cho một route segment. `page.tsx` là component hiển thị cho route đó. `[param]` là dynamic segment. `(group)` là route group không ảnh hưởng URL. `[...slug]` là catch-all. File conventions: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx.", q_en: "How does file-based routing work in the Next.js App Router?", a_en: "Inside the `app/` directory, each folder represents a route segment. A `page.tsx` file makes that segment publicly accessible. `[param]` folders create dynamic segments. `(group)` folders create route groups without affecting the URL. `[...slug]` creates catch-all routes. Special file conventions: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx." },
  { id: 553, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "Layouts trong Next.js App Router là gì?", a: "Layout là UI chia sẻ giữa nhiều pages, preserve state khi navigate (không remount). `layout.tsx` nhận `children` prop. Nested layouts: layout lồng trong layout tạo hierarchy. Root layout (`app/layout.tsx`) bắt buộc phải có, wrap toàn app. Khác với template.tsx: template remount mỗi navigate.", q_en: "What are layouts in the Next.js App Router?", a_en: "A layout is shared UI that wraps multiple pages and preserves its state across navigations (it does not remount). `layout.tsx` receives a `children` prop. Layouts can be nested to create a hierarchy. The root layout (`app/layout.tsx`) is required and wraps the entire app. Unlike layout.tsx, template.tsx remounts on every navigation." },
  { id: 554, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "loading.tsx và Suspense trong Next.js App Router?", a: "`loading.tsx` tự động tạo Suspense boundary bọc page hoặc layout, hiển thị loading UI ngay lập tức khi navigate. Streaming: Next.js stream HTML từng phần, user thấy nội dung nhanh hơn thay vì đợi toàn trang. Instant loading states không cần manually thêm Suspense và fallback UI.", q_en: "How do loading.tsx and Suspense work in the Next.js App Router?", a_en: "`loading.tsx` automatically creates a Suspense boundary around a page or layout, showing a loading UI instantly on navigation. Next.js streams HTML in chunks so users see content progressively rather than waiting for the full page. This gives instant loading states without manually adding Suspense and fallback UI." },
  { id: 555, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "error.tsx và not-found.tsx trong Next.js hoạt động như thế nào?", a: "`error.tsx` phải là Client Component, nhận `error` và `reset` props, hiển thị khi có lỗi trong segment. `not-found.tsx` hiển thị khi gọi `notFound()` từ server component hoặc khi URL không match route nào. Global error.tsx ở root app/ bắt lỗi kể cả trong root layout.", q_en: "How do error.tsx and not-found.tsx work in Next.js?", a_en: "`error.tsx` must be a Client Component; it receives `error` and `reset` props and is shown when an error occurs within its route segment. `not-found.tsx` renders when `notFound()` is called from a server component or when no route matches the URL. A global error.tsx at the root of `app/` catches errors even inside the root layout." },
  { id: 556, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "Route Groups trong Next.js là gì?", a: "Route Groups dùng ngoặc đơn `(groupName)` để tổ chức routes mà không ảnh hưởng URL. \n\n**Ví dụ:** `(auth)/login` và `(auth)/register` share cùng layout auth nhưng URL vẫn là `/login` và `/register`. Useful để: apply layout cho subset of routes, organize large codebases theo features.", q_en: "What are Route Groups in Next.js?", a_en: "Route Groups use parentheses `(groupName)` to organize routes without affecting the URL. For example, `(auth)/login` and `(auth)/register` share the same auth layout but the URLs remain `/login` and `/register`. Useful for: applying a layout to a subset of routes, and organizing large codebases by feature." },
  { id: 557, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "Dynamic routes và catch-all routes trong Next.js App Router?", a: "Dynamic routes trong App Router sử dụng cú pháp folder name trong ngoặc vuông, ví dụ app/blog/[slug]/page.tsx sẽ match URL /blog/anything và truy cập giá trị qua params.slug trong component. Catch-all routes dùng cú pháp ba chấm app/[...slug]/page.tsx để match nhiều segments cùng lúc như /a/b/c, lúc này params.slug là một mảng ['a', 'b', 'c']. Optional catch-all routes app/[[...slug]]/page.tsx hoạt động tương tự nhưng còn match cả root route khi không có segment nào. Khi dùng TypeScript, ta nên định nghĩa kiểu cho params trong PageProps để đảm bảo type safety, ví dụ { params: { slug: string } } cho dynamic route hoặc { params: { slug: string[] } } cho catch-all.", q_en: "How do dynamic routes and catch-all routes work in the Next.js App Router?", a_en: "Dynamic routes use bracket folder names: `app/blog/[slug]/page.tsx` matches `/blog/anything` and exposes the value as `params.slug`. Catch-all routes use spread syntax `app/[...slug]/page.tsx` to match multiple segments like `/a/b/c`, where `params.slug` is the array `['a', 'b', 'c']`. Optional catch-all routes `app/[[...slug]]/page.tsx` also match the root route when no segments are present. With TypeScript, type the params in PageProps for type safety: `{ params: { slug: string } }` for dynamic routes or `{ params: { slug: string[] } }` for catch-all." },
  { id: 558, category: "Next.js", subcategory: "App Router", level: "advanced", q: "Parallel Routes và Intercepting Routes trong Next.js là gì?", a: "Parallel Routes dùng `@slot` convention để render nhiều pages cùng lúc trong cùng layout (ví dụ modal + page). Intercepting Routes (`(.)path`, `(..)path`) cho phép intercept route và hiển thị trong context hiện tại (như Instagram photo modal). Phù hợp cho modal workflows phức tạp không mất URL sharability.", q_en: "What are Parallel Routes and Intercepting Routes in Next.js?", a_en: "Parallel Routes use the `@slot` folder convention to render multiple pages simultaneously within the same layout (e.g., a modal alongside a page). Intercepting Routes (`(.)path`, `(..)path`) let you intercept a navigation and display the target route in the current context — like Instagram's photo modal. Both patterns are ideal for complex modal workflows that need shareable URLs." },
  { id: 559, category: "Next.js", subcategory: "App Router", level: "beginner", q: "Metadata trong Next.js App Router được định nghĩa như thế nào?", a: "Export `metadata` object hoặc `generateMetadata` function từ page.tsx hoặc layout.tsx. Tự động merge metadata từ parent layouts. `export const metadata = { title: 'Page Title', description: '...' }`. `generateMetadata` là async function nhận params để tạo dynamic metadata cho dynamic routes. Thay thế cho next/head.", q_en: "How is metadata defined in the Next.js App Router?", a_en: "Export a `metadata` object or a `generateMetadata` function from page.tsx or layout.tsx. Metadata is automatically merged from parent layouts. `export const metadata = { title: 'Page Title', description: '...' }`. `generateMetadata` is an async function that receives params, enabling dynamic metadata for dynamic routes. This replaces the old next/head approach." },
  { id: 560, category: "Next.js", subcategory: "App Router", level: "intermediate", q: "generateStaticParams trong Next.js App Router dùng để làm gì?", a: "generateStaticParams export từ dynamic route page để pre-generate static paths tại build time, tương đương getStaticPaths trong Pages Router. `export async function generateStaticParams() { return posts.map(p => ({ slug: p.slug })) }`. Kết hợp với Static Generation để tạo static pages cho mọi possible value.", q_en: "What is generateStaticParams used for in the Next.js App Router?", a_en: "generateStaticParams is exported from a dynamic route page to pre-generate static paths at build time, equivalent to getStaticPaths in the Pages Router. `export async function generateStaticParams() { return posts.map(p => ({ slug: p.slug })) }`. Combined with Static Generation, it creates static pages for every possible parameter value." },

  // === Next.js - Server/Client Components (561-570) ===
  { id: 561, category: "Next.js", subcategory: "Server/Client Components", level: "intermediate", q: "React Server Components là gì?", a: `Server Components render hoàn toàn trên server, HTML được gửi xuống client. Không có JavaScript bundle gửi xuống client. Có thể trực tiếp access database, file system, server-only APIs. Không hỗ trợ: state, effects, event handlers, browser APIs. Mặc định trong App Router.
\`\`\`tsx
// app/products/page.tsx — Server Component (mặc định)
// Có thể dùng async/await trực tiếp, access DB, không cần useEffect
async function ProductsPage() {
  // Chạy trên server, không ship JS xuống client
  const products = await db.products.findMany()

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} — {p.price} VND</li>
      ))}
    </ul>
  )
}

export default ProductsPage
\`\`\``, q_en: "What are React Server Components?", a_en: `Server Components render entirely on the server and send HTML to the client. No JavaScript bundle is shipped to the client. They can directly access databases, the file system, and server-only APIs. They do not support: state, effects, event handlers, or browser APIs. They are the default in the App Router.
\`\`\`tsx
// app/products/page.tsx — Server Component (default)
// Can use async/await directly, access DB, no need for useEffect
async function ProductsPage() {
  // Runs on server only, no JS shipped to client
  const products = await db.products.findMany()

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} — {p.price} USD</li>
      ))}
    </ul>
  )
}

export default ProductsPage
\`\`\`` },
  { id: 562, category: "Next.js", subcategory: "Server/Client Components", level: "beginner", q: "'use client' directive trong Next.js dùng khi nào?", a: `\`'use client'\` đặt ở đầu file để đánh dấu component là Client Component. Cần thiết khi component dùng: useState, useEffect, event handlers, browser APIs. Đặt boundary tại component cần interactivity, không cần wrap toàn app.
\`\`\`tsx
// components/like-button.tsx
'use client'  // ← bắt buộc vì dùng useState và onClick

import { useState } from 'react'

export function LikeButton({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      ❤️ {count}
    </button>
  )
}

// app/post/page.tsx — Server Component, không cần 'use client'
import { LikeButton } from '@/components/like-button'

export default async function PostPage() {
  const post = await fetchPost()
  return (
    <article>
      <h1>{post.title}</h1>
      {/* Server Component chứa Client Component — OK */}
      <LikeButton initialCount={post.likes} />
    </article>
  )
}
\`\`\``, q_en: "When should you use the 'use client' directive in Next.js?", a_en: `Place \`'use client'\` at the top of a file to mark it as a Client Component. It is required when the component uses: useState, useEffect, event handlers, or browser APIs. Place the boundary at the component that needs interactivity; there is no need to wrap the entire app.
\`\`\`tsx
// components/like-button.tsx
'use client'  // ← required because we use useState and onClick

import { useState } from 'react'

export function LikeButton({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      ❤️ {count}
    </button>
  )
}

// app/post/page.tsx — Server Component, no 'use client' needed
import { LikeButton } from '@/components/like-button'

export default async function PostPage() {
  const post = await fetchPost()
  return (
    <article>
      <h1>{post.title}</h1>
      {/* Server Component can include Client Components — OK */}
      <LikeButton initialCount={post.likes} />
    </article>
  )
}
\`\`\`` },
  { id: 563, category: "Next.js", subcategory: "Server/Client Components", level: "intermediate", q: "Server Component có thể import Client Component không và ngược lại?", a: "Server Component có thể import và render Client Component - đây là hướng dependency bình thường. Ngược lại: Client Component KHÔNG thể import Server Component vì server component sẽ bị client-ize. Nhưng Server Component có thể truyền Server Component làm children/props cho Client Component (pattern được phép).", q_en: "Can a Server Component import a Client Component and vice versa?", a_en: "A Server Component can import and render a Client Component — this is the normal dependency direction. The reverse is not allowed: a Client Component CANNOT import a Server Component because the server component would be pulled into the client bundle. However, a Server Component can pass another Server Component as children or props to a Client Component — this pattern is permitted." },
  { id: 564, category: "Next.js", subcategory: "Server/Client Components", level: "intermediate", q: "Khi nào nên dùng Server Component, khi nào dùng Client Component?", a: "Server Component khi cần: data fetching, access backend resources, keep sensitive info (API keys), reduce client bundle. Client Component khi cần: onClick, onChange event handlers, useState/useEffect, browser APIs, real-time updates, custom hooks. Default là Server, chỉ dùng 'use client' khi thực sự cần interactivity.", q_en: "When should you use a Server Component vs a Client Component?", a_en: "Use a Server Component when you need: data fetching, access to backend resources, keeping sensitive data (API keys) off the client, or reducing the client bundle. Use a Client Component when you need: onClick/onChange event handlers, useState/useEffect, browser APIs, real-time updates, or custom hooks. Default to Server; only add 'use client' when interactivity is truly required." },
  { id: 565, category: "Next.js", subcategory: "Server/Client Components", level: "advanced", q: "Server Component props phải tuân theo quy tắc gì?", a: "Props từ Server sang Client Component phải serializable (có thể convert to JSON): strings, numbers, booleans, arrays, plain objects. Không thể truyền: functions, class instances, Symbols, Date objects (trực tiếp), React elements cũng có hạn chế. JSX làm children có thể pass. Cần serialize Date thành string trước khi pass.", q_en: "What rules must Server Component props follow?", a_en: "Props passed from a Server Component to a Client Component must be serializable (convertible to JSON): strings, numbers, booleans, arrays, and plain objects. You cannot pass: functions, class instances, Symbols, or Date objects directly. JSX as children can be passed. Serialize Dates to strings before passing them as props." },
  { id: 566, category: "Next.js", subcategory: "Server/Client Components", level: "intermediate", q: "Context API có hoạt động với Server Components không?", a: `Context API không hoạt động trong Server Components vì context phụ thuộc React runtime trên client. Chỉ Client Components mới có thể dùng Context. Để share data trong Server Components, truyền qua props hoặc dùng Next.js built-ins. Tạo Context Provider là Client Component và wrap children.
\`\`\`tsx
// providers/theme-provider.tsx — phải là Client Component
'use client'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext<'light' | 'dark'>('light')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// app/layout.tsx — Server Component bọc Provider
import { ThemeProvider } from '@/providers/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
\`\`\``, q_en: "Does the Context API work with Server Components?", a_en: `The Context API does not work in Server Components because context depends on the React runtime on the client. Only Client Components can use Context. To share data in Server Components, pass it via props or use Next.js built-ins. Create the Context Provider as a Client Component and wrap the children inside it.
\`\`\`tsx
// providers/theme-provider.tsx — must be a Client Component
'use client'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext<'light' | 'dark'>('light')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// app/layout.tsx — Server Component wrapping the Provider
import { ThemeProvider } from '@/providers/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
\`\`\`` },
  { id: 567, category: "Next.js", subcategory: "Server/Client Components", level: "advanced", q: "Taint API trong React và Next.js là gì?", a: "React Taint API (experimental) cho phép đánh dấu objects và values là sensitive để ngăn vô tình pass xuống Client Components. `taintObjectReference(message, object)` và `taintUniqueValue(message, object, value)`. \n\n**Ví dụ:** taint user password, API keys. Giúp prevent server-side secrets leak xuống client bundle.", q_en: "What is the Taint API in React and Next.js?", a_en: "The React Taint API (experimental) lets you mark objects and values as sensitive to prevent accidentally passing them to Client Components. `taintObjectReference(message, object)` and `taintUniqueValue(message, object, value)`. For example: taint a user's password or an API key. This helps prevent server-side secrets from leaking into the client bundle." },
  { id: 568, category: "Next.js", subcategory: "Server/Client Components", level: "intermediate", q: "Third-party libraries và Server Components có vấn đề gì?", a: "Nhiều npm packages cũ dùng browser APIs hay React client features mà không có 'use client'. Giải pháp: tạo wrapper Client Component import library đó, thêm 'use client' ở wrapper. Next.js có boundary tự động cho packages với 'use client' trong package.json exports. Kiểm tra compatibility trước khi dùng library mới.", q_en: "What issues can arise with third-party libraries and Server Components?", a_en: "Many older npm packages use browser APIs or React client features without including a 'use client' directive. \n\n**Solution:** create a wrapper Client Component that imports the library and add 'use client' to the wrapper. Next.js automatically handles packages that declare 'use client' in their package.json exports. Always check library compatibility before adding a new dependency." },
  { id: 569, category: "Next.js", subcategory: "Server/Client Components", level: "beginner", q: "Server-only và client-only packages trong Next.js là gì?", a: "`server-only` package throw error tại build time nếu vô tình import server code vào client bundle. `client-only` throw nếu import client code trên server. Dùng: `import 'server-only'` đầu file chứa database connections, API keys. Giúp catch mistakes sớm thay vì runtime errors hay security issues.", q_en: "What are the server-only and client-only packages in Next.js?", a_en: "The `server-only` package throws a build-time error if server code is accidentally imported into the client bundle. `client-only` throws if client code is imported on the server. Usage: add `import 'server-only'` at the top of files containing database connections or API keys. This catches mistakes early rather than discovering them as runtime errors or security vulnerabilities." },
  { id: 570, category: "Next.js", subcategory: "Server/Client Components", level: "advanced", q: "React Server Components streaming và progressive rendering là gì?", a: "Next.js stream HTML theo từng phần thay vì đợi toàn page ready. Server components có thể wrap trong Suspense, phần xung quanh stream trước, khi data ready phần trong Suspense stream tiếp. User thấy content nhanh hơn. TTFB tốt hơn. Cần design components để render độc lập và không block lẫn nhau.", q_en: "What is streaming and progressive rendering with React Server Components?", a_en: "Next.js streams HTML in chunks rather than waiting for the full page to be ready. Server components wrapped in Suspense allow the surrounding content to stream first; when data is ready, the Suspense content streams next. Users see content faster and TTFB improves. Design components to render independently so they do not block each other." },

  // === Next.js - Rendering (571-580) ===
  { id: 571, category: "Next.js", subcategory: "Rendering", level: "beginner", q: "SSR (Server-Side Rendering) trong Next.js là gì?", a: "SSR render HTML trên server cho mỗi request, trả về fully-rendered HTML cho browser. Tốt cho: SEO, trang có data thay đổi thường xuyên theo user, first paint nhanh. Trong App Router: mặc định Server Components là SSR. Pages Router: dùng `getServerSideProps`. \n\n**Nhược điểm:** server phải xử lý nhiều, TTFB cao hơn SSG.", q_en: "What is SSR (Server-Side Rendering) in Next.js?", a_en: "SSR renders HTML on the server for every request and delivers fully-rendered HTML to the browser. It is great for: SEO, pages with frequently changing per-user data, and fast first paint. In the App Router, Server Components are SSR by default. In the Pages Router, use `getServerSideProps`. Downsides: higher server load and higher TTFB compared to SSG." },
  { id: 572, category: "Next.js", subcategory: "Rendering", level: "beginner", q: "SSG (Static Site Generation) trong Next.js là gì?", a: "SSG tạo HTML tại build time, serve static files từ CDN. Cực kỳ nhanh, không cần server processing mỗi request. Phù hợp cho: blog, documentation, marketing pages, data ít thay đổi. Pages Router: không có getServerSideProps. App Router: dùng `export const dynamic = 'force-static'`. \n\n**Nhược điểm:** phải rebuild để cập nhật content.", q_en: "What is SSG (Static Site Generation) in Next.js?", a_en: "SSG generates HTML at build time and serves static files from a CDN. It is extremely fast with no per-request server processing. Best for: blogs, documentation, marketing pages, and data that changes infrequently. In the App Router use `export const dynamic = 'force-static'`. Downside: you must rebuild to update content." },
  { id: 573, category: "Next.js", subcategory: "Rendering", level: "intermediate", q: "ISR (Incremental Static Regeneration) là gì?", a: "ISR kết hợp SSG và SSR: trang được generate tĩnh, nhưng sau `revalidate` seconds có thể regenerate lại. User đầu tiên sau revalidate nhận stale content, trigger background regeneration. User sau nhận fresh content. Pages Router: `return { revalidate: 60 }` trong getStaticProps. App Router: `export const revalidate = 60` hoặc `fetch(url, { next: { revalidate: 60 } })`.", q_en: "What is ISR (Incremental Static Regeneration)?", a_en: "ISR blends SSG and SSR: pages are statically generated but can be regenerated in the background after a `revalidate` interval. The first user after the interval receives stale content and triggers a background regeneration; subsequent users get the fresh version. Pages Router: `return { revalidate: 60 }` in getStaticProps. App Router: `export const revalidate = 60` or `fetch(url, { next: { revalidate: 60 } })`." },
  { id: 574, category: "Next.js", subcategory: "Rendering", level: "intermediate", q: "On-demand revalidation trong Next.js là gì?", a: "On-demand revalidation cho phép invalidate cache và regenerate pages ngay lập tức thay vì đợi timeout. Pages Router: `res.revalidate('/path')` trong API route. App Router: `revalidatePath('/path')` hoặc `revalidateTag('posts')` trong Server Action hoặc Route Handler. Phù hợp khi CMS webhook trigger cần update content ngay.", q_en: "What is on-demand revalidation in Next.js?", a_en: "On-demand revalidation lets you invalidate the cache and regenerate pages immediately rather than waiting for a timer. Pages Router: call `res.revalidate('/path')` inside an API route. App Router: call `revalidatePath('/path')` or `revalidateTag('posts')` inside a Server Action or Route Handler. Ideal when a CMS webhook fires and content needs to update right away." },
  { id: 575, category: "Next.js", subcategory: "Rendering", level: "intermediate", q: "fetch cache trong Next.js App Router hoạt động như thế nào?", a: "Next.js extend native fetch với caching: `fetch(url)` mặc định `no-store` từ Next.js 15+ (trước đó cache), `{ cache: 'force-cache' }` để opt-in cache, `{ next: { revalidate: 60 } }` revalidate sau 60 giây. `{ next: { tags: ['posts'] } }` tag để invalidate theo tag. Data cache tách biệt với Full Route Cache.", q_en: "How does fetch caching work in the Next.js App Router?", a_en: "Next.js extends the native fetch API with caching options: `fetch(url)` defaults to `no-store` from Next.js 15+ (it was cached in earlier versions), `{ cache: 'force-cache' }` opts into caching, and `{ next: { revalidate: 60 } }` revalidates after 60 seconds. `{ next: { tags: ['posts'] } }` assigns a tag for targeted invalidation. The Data Cache is separate from the Full Route Cache." },
  { id: 576, category: "Next.js", subcategory: "Rendering", level: "advanced", q: "Next.js có những loại cache nào?", a: "Next.js có 4 loại cache: (1) Request Memoization: dedup fetch calls trong cùng request tree. (2) Data Cache: persist fetch results giữa requests và deployments. (3) Full Route Cache: cache rendered HTML và RSC payload trên server. (4) Router Cache: client-side cache của RSC payload, prefetch routes.", q_en: "What types of caching does Next.js have?", a_en: "Next.js has 4 caching layers: (1) Request Memoization — deduplicates fetch calls within the same server request tree. (2) Data Cache — persists fetch results across requests and deployments. (3) Full Route Cache — caches rendered HTML and the RSC payload on the server. (4) Router Cache — client-side cache of the RSC payload used for prefetching routes." },
  { id: 577, category: "Next.js", subcategory: "Rendering", level: "intermediate", q: "Sự khác biệt giữa dynamic và static rendering trong App Router?", a: "Static rendering: render lúc build time, cache và serve từ CDN. Dynamic rendering: render mỗi request, không cache. Tự động dynamic khi dùng: await cookies(), await headers(), searchParams, hay fetch với cache: 'no-store'. Explicit: `export const dynamic = 'force-dynamic'` hoặc `'force-static'`. Opt-in static càng nhiều càng tốt cho performance.", q_en: "What is the difference between dynamic and static rendering in the App Router?", a_en: "Static rendering: happens at build time, cached and served from a CDN. Dynamic rendering: happens per request, not cached. A route becomes dynamic automatically when it uses: `await cookies()`, `await headers()`, `searchParams`, or fetch with `cache: 'no-store'`. Be explicit with `export const dynamic = 'force-dynamic'` or `'force-static'`. Prefer static rendering whenever possible for best performance." },
  { id: 578, category: "Next.js", subcategory: "Rendering", level: "beginner", q: "getStaticProps và getServerSideProps khác nhau như thế nào?", a: "getStaticProps chạy tại build time, data embed vào static HTML, tốc độ cực nhanh, tốt cho data ít thay đổi. getServerSideProps chạy mỗi request, data luôn fresh, nhưng chậm hơn vì phải đợi server. Cả hai chỉ có trong Pages Router. App Router thay thế bằng Server Components với fetch cache options.", q_en: "How do getStaticProps and getServerSideProps differ?", a_en: "getStaticProps runs at build time, embeds data into the static HTML, is extremely fast, and is best for data that changes infrequently. getServerSideProps runs on every request so data is always fresh, but it is slower because the server must respond first. Both are Pages Router only. The App Router replaces them with Server Components and fetch cache options." },
  { id: 579, category: "Next.js", subcategory: "Rendering", level: "intermediate", q: "Streaming SSR trong Next.js hoạt động như thế nào?", a: "Streaming SSR gửi HTML từng phần xuống browser ngay khi ready thay vì đợi toàn trang. Dùng HTTP chunked transfer encoding. Kết hợp với Suspense: phần ngoài Suspense stream trước, phần trong stream khi data ready. Giảm Time to First Byte và First Contentful Paint. Enabled mặc định trong App Router.", q_en: "How does Streaming SSR work in Next.js?", a_en: "Streaming SSR sends HTML chunks to the browser as soon as they are ready, rather than waiting for the full page. It uses HTTP chunked transfer encoding. Combined with Suspense: content outside Suspense boundaries streams first; content inside streams when its data is ready. This reduces Time to First Byte and First Contentful Paint. It is enabled by default in the App Router." },
  { id: 580, category: "Next.js", subcategory: "Rendering", level: "advanced", q: "Partial Prerendering (PPR) trong Next.js là gì?", a: "Partial Prerendering (experimental, Next.js 14) cho phép combine static shell và dynamic holes trong cùng một page. Static parts được prerender và cached, dynamic parts (trong Suspense) được stream khi request. User nhận static shell ngay lập tức, dynamic content load sau. Tốt nhất của SSG và SSR trong một trang.", q_en: "What is Partial Prerendering (PPR) in Next.js?", a_en: "Partial Prerendering (experimental, introduced in Next.js 14) combines a static shell with dynamic holes on a single page. Static parts are prerendered and cached; dynamic parts (inside Suspense boundaries) are streamed on each request. Users receive the static shell instantly and dynamic content loads in afterward — the best of SSG and SSR on a single page." },

  // === Next.js - API & Server Actions (581-590) ===
  { id: 581, category: "Next.js", subcategory: "API & Server Actions", level: "beginner", q: "Route Handlers (API Routes) trong Next.js App Router là gì?", a: `Route Handlers là cách tạo API endpoints trong App Router bằng cách đặt file route.ts trong thư mục app/. Mỗi HTTP method được export dưới dạng named function riêng biệt. Sử dụng Web APIs chuẩn (Request/Response) thay vì req/res của Node.js.
\`\`\`typescript
// app/api/users/route.ts → endpoint: /api/users

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') ?? 1)
  const users = await db.users.findMany({ skip: (page - 1) * 10, take: 10 })
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const user = await db.users.create({ data: body })
  return NextResponse.json(user, { status: 201 })
}
\`\`\``, q_en: "What are Route Handlers (API Routes) in the Next.js App Router?", a_en: `Route Handlers are how you create API endpoints in the App Router by placing a route.ts file inside any directory under app/. Each HTTP method is exported as a named function. They use standard Web APIs (Request/Response) instead of Node.js req/res.
\`\`\`typescript
// app/api/users/route.ts → endpoint: /api/users

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') ?? 1)
  const users = await db.users.findMany({ skip: (page - 1) * 10, take: 10 })
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const user = await db.users.create({ data: body })
  return NextResponse.json(user, { status: 201 })
}
\`\`\`` },
  { id: 582, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Server Actions trong Next.js là gì?", a: `Server Actions là async functions chạy trên server, được gọi từ Client Components hoặc forms. Khai báo với \`'use server'\` directive. Cho phép mutate data trực tiếp mà không cần tạo API endpoint riêng.
\`\`\`tsx
// actions/post-actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  await db.posts.create({ title })
  revalidatePath('/posts') // làm mới cache trang sau khi mutate
}

// components/new-post-form.tsx
'use client'
import { createPost } from '@/actions/post-actions'

export function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Post title" />
      <button type="submit">Create</button>
    </form>
  )
}
\`\`\``, q_en: "What are Server Actions in Next.js?", a_en: `Server Actions are async functions that run on the server and can be called from Client Components or HTML forms. Declare them with the \`'use server'\` directive. They allow mutating data directly without building a separate API endpoint.
\`\`\`tsx
// actions/post-actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  await db.posts.create({ title })
  revalidatePath('/posts') // bust the cache after mutating
}

// components/new-post-form.tsx
'use client'
import { createPost } from '@/actions/post-actions'

export function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Post title" />
      <button type="submit">Create</button>
    </form>
  )
}
\`\`\`` },
  { id: 583, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Cách sử dụng Server Actions với HTML forms?", a: "Gán Server Action vào form action attribute: `<form action={createPost}>`. Form submit tự động gọi Server Action với FormData. Không cần JavaScript client-side (progressive enhancement). Trong action: `const title = formData.get('title')`. Kết hợp với useFormState (React 18) hoặc useActionState (React 19) để track state.", q_en: "How do you use Server Actions with HTML forms?", a_en: "Assign a Server Action to the form's action attribute: `<form action={createPost}>`. On submit, the Server Action is automatically called with the FormData — no client-side JavaScript required (progressive enhancement). Inside the action: `const title = formData.get('title')`. Combine with useFormState (React 18) or useActionState (React 19) to track submission state." },
  { id: 584, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Revalidation sau mutation trong Server Actions?", a: "Sau khi mutate data trong Server Action, cần revalidate cache để UI cập nhật: `revalidatePath('/posts')` invalidate cached route, `revalidateTag('posts')` invalidate theo tag. `redirect('/path')` để điều hướng sau action thành công.", q_en: "How do you revalidate after a mutation in a Server Action?", a_en: "After mutating data in a Server Action, revalidate the cache so the UI reflects the change: `revalidatePath('/posts')` invalidates a specific cached route, and `revalidateTag('posts')` invalidates all cache entries with that tag. Use `redirect('/path')` to navigate after a successful action." },
  { id: 585, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Error handling trong Server Actions như thế nào?", a: "Server Actions có thể throw errors sẽ được catch bởi nearest error.tsx. Với useFormState/useActionState, return error object thay vì throw: `return { error: 'Invalid input' }`. Dùng try/catch trong action để handle expected errors (validation, not found) và return user-friendly error states.", q_en: "How do you handle errors in Server Actions?", a_en: "Server Actions can throw errors, which will be caught by the nearest error.tsx boundary. When using useFormState/useActionState, return an error object instead of throwing: `return { error: 'Invalid input' }`. Use try/catch inside the action to handle expected errors (validation failures, not-found cases) and return user-friendly error state objects." },
  { id: 586, category: "Next.js", subcategory: "API & Server Actions", level: "advanced", q: "Security considerations khi dùng Server Actions?", a: "Server Actions tự động có CSRF protection từ Next.js. Tuy nhiên vẫn cần: validate và sanitize inputs (không trust FormData), authenticate user trong action (check session), authorize permissions, rate limiting. Server Actions là public API endpoints dù không có URL, nên treat như REST endpoints về security.", q_en: "What are the security considerations when using Server Actions?", a_en: "Next.js automatically provides CSRF protection for Server Actions. However you still need to: validate and sanitize all inputs (never trust FormData blindly), authenticate the user inside the action (check the session), verify authorization/permissions, and consider rate limiting. Server Actions are effectively public API endpoints even without a URL — treat them with the same security rigor as REST endpoints." },
  { id: 587, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Middleware trong Next.js App Router là gì?", a: "Middleware là `middleware.ts` ở root, chạy trên Edge runtime trước mọi request. Dùng để: authentication/authorization, redirect, rewrite URL, add/modify headers, A/B testing. Return NextResponse để điều khiển response. Dùng `matcher` config để chỉ định routes áp dụng. Nhẹ và nhanh vì Edge runtime.", q_en: "What is Middleware in the Next.js App Router?", a_en: "Middleware is a `middleware.ts` file at the project root that runs on the Edge runtime before every request. Use it for: authentication/authorization checks, redirects, URL rewrites, adding/modifying response headers, and A/B testing. Return a NextResponse to control the response. Use the `matcher` config to target specific routes. It is fast and lightweight because it runs on the Edge." },
  { id: 588, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Cookies và Headers trong Next.js Server Components và Actions?", a: "Import từ next/headers, cả hai đều là async kể từ Next.js 15+: `const cookieStore = await cookies()` và `const headersList = await headers()`. Đọc cookie: `cookieStore.get('session')`, `cookieStore.set('session', value)`. Đọc header: `headersList.get('user-agent')`. Trong Server Components: read-only. Trong Server Actions và Route Handlers: có thể read và write.", q_en: "How do you work with cookies and headers in Next.js Server Components and Actions?", a_en: "Import from next/headers. Both are async since Next.js 15+: `const cookieStore = await cookies()` and `const headersList = await headers()`. Read a cookie: `cookieStore.get('session')`. Set a cookie: `cookieStore.set('session', value)`. Read a header: `headersList.get('user-agent')`. In Server Components they are read-only. In Server Actions and Route Handlers you can both read and write." },
  { id: 589, category: "Next.js", subcategory: "API & Server Actions", level: "intermediate", q: "Optimistic updates với Server Actions và useOptimistic?", a: "useOptimistic (React 19) kết hợp với Server Actions: cập nhật UI ngay trước khi action hoàn thành, rollback nếu fail. `const [optimistic, addOptimistic] = useOptimistic(data, updateFn)`. Trong action handler: `addOptimistic(newItem)` trước `await serverAction()`. Tạo snappy UX dù có network latency.", q_en: "How do you implement optimistic updates with Server Actions and useOptimistic?", a_en: "useOptimistic (React 19) pairs naturally with Server Actions: update the UI immediately before the action completes and roll back automatically if it fails. `const [optimistic, addOptimistic] = useOptimistic(data, updateFn)`. In the action handler: call `addOptimistic(newItem)` before `await serverAction()`. This creates a snappy UX even with network latency." },
  { id: 590, category: "Next.js", subcategory: "API & Server Actions", level: "advanced", q: "Edge Runtime vs Node.js Runtime trong Next.js là gì?", a: "Node.js Runtime: đầy đủ Node.js APIs, có thể dùng npm packages, phù hợp cho heavy computation. Edge Runtime: V8 engine không có Node.js APIs, giới hạn package support, nhưng cực kỳ nhanh (chạy gần user), cold start gần 0. Middleware mặc định Edge. Route Handlers có thể chọn: `export const runtime = 'edge'` hoặc `'nodejs'`.", q_en: "What is the difference between Edge Runtime and Node.js Runtime in Next.js?", a_en: "Node.js Runtime: full Node.js API access, any npm package can be used, suited for heavy computation. Edge Runtime: V8 engine without Node.js APIs, limited package support, but extremely fast (runs close to the user) with near-zero cold starts. Middleware uses Edge by default. Route Handlers can opt in: `export const runtime = 'edge'` or `'nodejs'`." },

  // === Next.js - Optimization (591-600) ===
  { id: 591, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "next/image component mang lại lợi ích gì?", a: "next/image tự động: resize và optimize images theo viewport, serve WebP/AVIF modern formats, lazy load mặc định, prevent Cumulative Layout Shift (CLS) với width/height hoặc fill. Cần cung cấp width và height hoặc fill prop. Cấu hình allowed domains trong next.config. Tích hợp CDN support sẵn.", q_en: "What benefits does the next/image component provide?", a_en: "next/image automatically: resizes and optimizes images for each viewport, serves modern WebP/AVIF formats, lazy loads by default, and prevents Cumulative Layout Shift (CLS) when you provide width/height or the fill prop. Configure allowed remote domains in next.config. CDN support is built in." },
  { id: 592, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "next/font trong Next.js hoạt động như thế nào?", a: "next/font tự động: download Google Fonts tại build time (không request runtime đến Google), host fonts trên cùng server, zero layout shift với automatic size adjustment, privacy tốt hơn. Dùng: `import { Inter } from 'next/font/google'; const inter = Inter({ subsets: ['latin'] })`. Apply qua className. Hỗ trợ local fonts qua next/font/local.", q_en: "How does next/font work in Next.js?", a_en: "next/font automatically: downloads Google Fonts at build time (no runtime requests to Google), self-hosts them on the same server, eliminates layout shift with automatic size adjustment, and improves privacy. Usage: `import { Inter } from 'next/font/google'; const inter = Inter({ subsets: ['latin'] })`. Apply via className. Local fonts are supported through next/font/local." },
  { id: 593, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "Link prefetching trong Next.js là gì và cách control?", a: "Next.js tự động prefetch routes khi Link component vào viewport (production). Tải JS chunk và data cho route đó trước khi user click, tạo instant navigation. Disable: `<Link prefetch={false}>`. App Router prefetch RSC payload. Control cụ thể: prefetch attribute hoặc router.prefetch(). Giúp navigation cảm giác instantaneous.", q_en: "What is Link prefetching in Next.js and how do you control it?", a_en: "Next.js automatically prefetches routes when a Link component enters the viewport in production — loading the JS chunk and data before the user clicks, making navigation feel instant. Disable it with `<Link prefetch={false}>`. The App Router prefetches the RSC payload. For finer control use the prefetch attribute or `router.prefetch()`." },
  { id: 594, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "next/script component và loading strategies là gì?", a: "next/script tối ưu loading third-party scripts. Strategies: `beforeInteractive` (trước hydration, cho critical scripts), `afterInteractive` (sau hydration, default), `lazyOnload` (idle time), `worker` (web worker với Partytown). Tránh dùng thẻ script thông thường trong App Router, dùng next/script thay thế.", q_en: "What is the next/script component and what are its loading strategies?", a_en: "next/script optimizes third-party script loading. Strategies: `beforeInteractive` (before hydration, for critical scripts), `afterInteractive` (after hydration, the default), `lazyOnload` (during browser idle time), `worker` (offload to a web worker via Partytown). Avoid raw script tags in the App Router — use next/script instead." },
  { id: 595, category: "Next.js", subcategory: "Optimization", level: "advanced", q: "Bundle analyzer trong Next.js được dùng như thế nào?", a: "Dùng @next/bundle-analyzer để visualize bundle size. Cấu hình trong next.config.js với withBundleAnalyzer wrapper. Chạy `ANALYZE=true npm run build` để tạo report HTML. Giúp identify: large dependencies, duplicate code, unnecessary imports. Sau đó tối ưu: dynamic imports, tree-shaking, replace heavy libraries.", q_en: "How do you use the bundle analyzer in Next.js?", a_en: "Use @next/bundle-analyzer to visualize bundle sizes. Configure it in next.config.js with the withBundleAnalyzer wrapper. Run `ANALYZE=true npm run build` to generate an HTML report. It helps identify: large dependencies, duplicate code, and unnecessary imports. Follow up by applying dynamic imports, tree-shaking, and replacing heavy libraries with lighter alternatives." },
  { id: 596, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "Middleware proxy pattern trong Next.js như thế nào?", a: "Middleware có thể rewrite requests đến API khác: `NextResponse.rewrite(new URL('/api/proxy', request.url))`. Hoặc trong next.config.js dùng `rewrites` array để proxy: `{ source: '/api/:path*', destination: 'https://backend.com/:path*' }`. Hữu ích để: hide API endpoints, implement BFF (Backend For Frontend), avoid CORS issues.", q_en: "How does the Middleware proxy pattern work in Next.js?", a_en: "Middleware can rewrite requests to a different API: `NextResponse.rewrite(new URL('/api/proxy', request.url))`. Alternatively, use the `rewrites` array in next.config.js: `{ source: '/api/:path*', destination: 'https://backend.com/:path*' }`. Useful for: hiding internal API endpoints, implementing a Backend For Frontend (BFF), and avoiding CORS issues." },
  { id: 597, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "Core Web Vitals và Next.js tối ưu chúng như thế nào?", a: "Next.js tối ưu: LCP (Largest Contentful Paint) qua image optimization, priority images; CLS (Cumulative Layout Shift) qua next/image với dimensions, next/font với size-adjust; FID/INP (Interaction to Next Paint) qua code splitting, lazy loading, Concurrent Mode. `next/analytics` báo cáo Core Web Vitals production.", q_en: "What are Core Web Vitals and how does Next.js optimize them?", a_en: "Next.js optimizes: LCP (Largest Contentful Paint) via image optimization and the priority prop on above-the-fold images; CLS (Cumulative Layout Shift) via next/image dimensions and next/font's automatic size-adjust; FID/INP (Interaction to Next Paint) via code splitting, lazy loading, and Concurrent Mode. Use `@vercel/analytics` to report Core Web Vitals from production." },
  { id: 598, category: "Next.js", subcategory: "Optimization", level: "advanced", q: "Turbopack là gì và lợi ích của nó trong Next.js?", a: "Turbopack là Rust-based bundler thay thế Webpack trong Next.js (stable cho dev trong Next.js 15). Nhanh hơn đáng kể cho local development: incremental builds, chỉ compile những gì thay đổi. HMR (Hot Module Replacement) cực nhanh ngay cả với large codebases. Production bundling vẫn đang trong development.", q_en: "What is Turbopack and what are its benefits in Next.js?", a_en: "Turbopack is a Rust-based bundler that replaces Webpack in Next.js (stable for dev in Next.js 15). It is significantly faster for local development thanks to incremental builds that only recompile what changed. HMR (Hot Module Replacement) is extremely fast even in large codebases. Production bundling support is still in development." },
  { id: 599, category: "Next.js", subcategory: "Optimization", level: "intermediate", q: "Environment variables trong Next.js được xử lý như thế nào?", a: "`.env.local` cho local development (git-ignored). `.env.production`, `.env.development` cho môi trường cụ thể. `NEXT_PUBLIC_` prefix expose biến xuống client bundle - KHÔNG đặt secrets với prefix này. Không có prefix: chỉ server-side. Trong App Router: server components đọc trực tiếp `process.env.VAR`. Client: chỉ NEXT_PUBLIC_ vars.", q_en: "How are environment variables handled in Next.js?", a_en: "`.env.local` is for local development and is git-ignored. `.env.production` and `.env.development` are for specific environments. The `NEXT_PUBLIC_` prefix exposes a variable to the client bundle — never put secrets there. Variables without the prefix are server-side only. In the App Router, Server Components read `process.env.VAR` directly. On the client, only `NEXT_PUBLIC_` variables are available." },
  { id: 600, category: "Next.js", subcategory: "Optimization", level: "advanced", q: "Internationalization (i18n) trong Next.js được implement như thế nào?", a: "App Router: không có built-in i18n, dùng middleware để detect locale từ Accept-Language header, redirect đến locale-prefixed routes `/en/about`. Dùng libraries: next-intl, next-i18next. Tạo `[locale]` dynamic segment, load messages tương ứng. Pages Router có built-in i18n config với `i18n: { locales, defaultLocale }` trong next.config.", q_en: "How is internationalization (i18n) implemented in Next.js?", a_en: "App Router: there is no built-in i18n — use Middleware to detect the locale from the Accept-Language header and redirect to locale-prefixed routes like `/en/about`. Popular libraries: next-intl and next-i18next. Create a `[locale]` dynamic segment and load the corresponding message files. The Pages Router has built-in i18n config via `i18n: { locales, defaultLocale }` in next.config." },
]
