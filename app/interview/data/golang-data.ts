import type { QAItem } from '../interview-data'

export const GOLANG_DATA: QAItem[] = [
  // === Go: Cơ Bản (1001-1020) ===
  { id: 1001, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Go (Golang) là gì? Tại sao nên học Go?", a: "Go là ngôn ngữ lập trình do Google tạo ra (2009), biên dịch (compiled), statically typed, cú pháp đơn giản. \n\n**Ưu điểm:** tốc độ gần C/C++, concurrency mạnh (goroutines), binary đơn (không cần runtime), stdlib phong phú, phù hợp cho microservices, cloud tools, APIs.", q_en: "What is Go (Golang)? Why should you learn it?", a_en: "Go is a compiled, statically typed programming language created by Google in 2009, with a clean and simple syntax. Key strengths: near C/C++ performance, powerful built-in concurrency (goroutines), single self-contained binary (no runtime needed), a rich standard library, and excellent fit for microservices, cloud tooling, and APIs." },
  { id: 1002, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Khai báo biến trong Go có mấy cách?", a: "3 cách: (1) `var name string = \"Go\"` (đầy đủ). (2) `var name = \"Go\"` (type inference). (3) `name := \"Go\"` (short declaration, chỉ trong function). `:=` phổ biến nhất. `var` dùng ở package level hoặc khi cần zero value. Go không có `let`/`const` như JS.", q_en: "How many ways can you declare variables in Go?", a_en: "There are 3 ways: (1) `var name string = \"Go\"` (full declaration). (2) `var name = \"Go\"` (type inference). (3) `name := \"Go\"` (short declaration, only inside functions). `:=` is the most common. `var` is used at package level or when you need the zero value explicitly. Go has no `let`/`const` like JavaScript." },
  { id: 1003, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Go có những kiểu dữ liệu cơ bản nào?", a: "Go có các nhóm kiểu dữ liệu cơ bản: nhóm số gồm `int`, `int8/16/32/64`, `float32/64`, `complex64/128`; nhóm văn bản là `string` (immutable, mã hóa UTF-8); và `bool` cho giá trị logic true/false. Ngoài ra còn có `byte` (alias của uint8) dùng cho dữ liệu nhị phân, và `rune` (alias của int32) đại diện cho một ký tự Unicode. Mỗi kiểu đều có zero value mặc định khi khai báo mà không gán giá trị, ví dụ int là 0, string là chuỗi rỗng, bool là false, pointer là nil.", q_en: "What are the basic data types in Go?", a_en: "Go's basic types are grouped as: numeric types (`int`, `int8/16/32/64`, `float32/64`, `complex64/128`); text (`string`, immutable, UTF-8 encoded); and `bool` for true/false logic. There's also `byte` (alias for uint8) for binary data and `rune` (alias for int32) representing a Unicode code point. Every type has a well-defined zero value when declared without initialization: int is 0, string is empty string, bool is false, pointers are nil." },
  { id: 1004, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Zero value trong Go là gì?", a: `Giá trị mặc định khi khai báo biến không khởi tạo — Go đảm bảo mọi biến đều có giá trị hợp lệ (khác JS/undefined, Python/None). Cụ thể:

- int/float → 0
- string → \`""\` (rỗng)
- bool → false
- pointer/slice/map/channel/interface → nil
- struct → zero value của mỗi field

Ý nghĩa: code an toàn hơn, không cần check null/undefined, zero value thường là trạng thái hợp lý (ví dụ: counter bắt đầu từ 0).`, q_en: "What is the zero value in Go?", a_en: `The zero value is the default value assigned to a variable when declared without explicit initialization. Go guarantees every variable has a valid value — unlike JS's \`undefined\` or Python's \`None\`. Specifically:

- int/float → 0
- string → \`""\`
- bool → false
- pointer/slice/map/channel/interface → nil
- struct → zero value of each field

This makes code safer: no null/undefined checks needed, and zero values are usually sensible defaults (e.g., a counter starting at 0).` },
  { id: 1005, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Hàm (function) trong Go khai báo thế nào?", a: `Khai báo hàm cơ bản dùng từ khóa \`func\`. Go hỗ trợ multiple return values và named returns.
\`\`\`go
// Hàm cơ bản
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func swap(a, b int) (x, y int) {
    x, y = b, a
    return
}

// Functions là first-class citizens
add := func(a, b int) int { return a + b }
\`\`\`
Functions là first-class citizens, có thể gán cho biến hoặc truyền như tham số.`, q_en: "How are functions declared in Go?", a_en: `Function declaration uses the \`func\` keyword. Go supports multiple return values and named returns.
\`\`\`go
// Basic function
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func swap(a, b int) (x, y int) {
    x, y = b, a
    return
}

// Functions are first-class citizens
add := func(a, b int) int { return a + b }
\`\`\`
Functions can be assigned to variables or passed as parameters.` },
  { id: 1006, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Multiple return values trong Go dùng khi nào?", a: `Pattern phổ biến nhất: trả \`(result, error)\`. Nếu không cần 1 giá trị, dùng \`_\` (blank identifier). Khác biệt lớn với JS/TS: Go không dùng try/catch mà handle error ngay tại chỗ.
\`\`\`go
// Pattern (result, error)
val, err := strconv.Atoi("123")
if err != nil {
    log.Fatal(err)
}

// Bỏ qua giá trị không cần dùng blank identifier
_, err := doSomething()

// Trả nhiều giá trị tùy ý
func minMax(nums []int) (min, max int) { ... }
min, max := minMax([]int{3, 1, 4, 1, 5})
\`\`\``, q_en: "When are multiple return values used in Go?", a_en: `The most common pattern is returning \`(result, error)\`. Use \`_\` (blank identifier) to discard unwanted values. A key difference from JS/TS: Go does not use try/catch; errors are handled inline at the call site.
\`\`\`go
// (result, error) pattern
val, err := strconv.Atoi("123")
if err != nil {
    log.Fatal(err)
}

// Discard unwanted value with blank identifier
_, err := doSomething()

// Return arbitrary number of values
func minMax(nums []int) (min, max int) { ... }
min, max := minMax([]int{3, 1, 4, 1, 5})
\`\`\`` },
  { id: 1007, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Package và import trong Go hoạt động thế nào?", a: "Mỗi file Go thuộc 1 package (`package main`). `main` package + `func main()` = entry point. Import: `import \"fmt\"` hoặc grouped import. Exported names (public) viết hoa chữ cái đầu: `fmt.Println`. Lowercase = unexported (private trong package).", q_en: "How do packages and imports work in Go?", a_en: "Every Go file belongs to one package (`package main`). The `main` package with `func main()` is the program entry point. Imports: `import \"fmt\"` or grouped imports. Exported (public) identifiers start with a capital letter: `fmt.Println`. Lowercase identifiers are unexported (package-private)." },
  { id: 1008, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Go có class không? Struct là gì?", a: `Go KHÔNG có class. Struct là kiểu dữ liệu composite, methods gắn vào struct qua receiver. Composition thay vì inheritance: embed struct trong struct khác.
\`\`\`go
// Định nghĩa struct
type User struct {
    Name string
    Age  int
}

// Method gắn vào struct qua value receiver
func (u User) Hello() string {
    return "Hello, " + u.Name
}

// Pointer receiver để modify struct
func (u *User) SetName(name string) {
    u.Name = name
}

// Khởi tạo struct
u := User{Name: "Alice", Age: 30}
fmt.Println(u.Hello()) // "Hello, Alice"

// Composition thay inheritance
type Admin struct {
    User        // embed User
    Level int
}
admin := Admin{User: User{Name: "Bob"}, Level: 1}
fmt.Println(admin.Hello()) // kế thừa method của User
\`\`\``, q_en: "Does Go have classes? What is a struct?", a_en: `Go has NO classes. A struct is a composite data type; methods are attached via receivers. Go favors composition over inheritance using struct embedding.
\`\`\`go
// Define a struct
type User struct {
    Name string
    Age  int
}

// Method attached via value receiver
func (u User) Hello() string {
    return "Hello, " + u.Name
}

// Pointer receiver to mutate the struct
func (u *User) SetName(name string) {
    u.Name = name
}

// Instantiate a struct
u := User{Name: "Alice", Age: 30}
fmt.Println(u.Hello()) // "Hello, Alice"

// Composition instead of inheritance
type Admin struct {
    User        // embed User
    Level int
}
admin := Admin{User: User{Name: "Bob"}, Level: 1}
fmt.Println(admin.Hello()) // inherits User's method
\`\`\`` },
  { id: 1009, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Pointer trong Go là gì? Khi nào dùng?", a: `\`*int\` là pointer type, \`&x\` lấy address, \`*p\` dereference. Go không có pointer arithmetic như C. nil pointer gây panic.
\`\`\`go
x := 42
p := &x      // p là *int, trỏ đến x
fmt.Println(*p) // 42 — dereference

*p = 100
fmt.Println(x)  // 100 — modify qua pointer

// Dùng pointer để modify tham số
func increment(n *int) {
    *n++
}
increment(&x)

// Pointer receiver — modify struct gốc
func (u *User) SetAge(age int) {
    u.Age = age
}
\`\`\`
Dùng pointer khi: (1) muốn modify giá trị gốc. (2) struct lớn (tránh copy). (3) method cần modify receiver.`, q_en: "What are pointers in Go? When should you use them?", a_en: `\`*int\` is a pointer type, \`&x\` gets the address, \`*p\` dereferences it. Go has no pointer arithmetic. Dereferencing a nil pointer causes a panic.
\`\`\`go
x := 42
p := &x         // p is *int, points to x
fmt.Println(*p) // 42 — dereference

*p = 100
fmt.Println(x)  // 100 — modified via pointer

// Use pointer to mutate a parameter
func increment(n *int) {
    *n++
}
increment(&x)

// Pointer receiver — mutates the original struct
func (u *User) SetAge(age int) {
    u.Age = age
}
\`\`\`
Use pointers when: (1) you need to modify the original value; (2) working with large structs (avoid copying); (3) a method needs to mutate its receiver.` },
  { id: 1010, category: "Golang", subcategory: "Cơ Bản", level: "beginner", q: "Array và Slice trong Go khác nhau thế nào?", a: "Array: size cố định, value type `[5]int`. Slice: dynamic, reference type `[]int`. Slice dùng phổ biến hơn. `make([]int, 0, 10)` tạo slice capacity 10. `append(slice, item)` thêm phần tử. Slice là view lên underlying array.", q_en: "What is the difference between arrays and slices in Go?", a_en: "Arrays have a fixed size and are value types: `[5]int`. Slices are dynamic and are reference types: `[]int`. Slices are used far more often. `make([]int, 0, 10)` creates a slice with capacity 10. `append(slice, item)` adds an element. A slice is a view over an underlying array." },

  // === Go: Intermediate (1011-1030) ===
  { id: 1011, category: "Golang", subcategory: "Collections", level: "intermediate", q: "Map trong Go hoạt động thế nào?", a: "`m := map[string]int{\"a\": 1}`. Check key tồn tại: `val, ok := m[\"key\"]`. Delete: `delete(m, \"key\")`. Map không thread-safe → dùng `sync.Map` hoặc mutex. Zero value là nil (phải make/literal trước khi dùng). Iteration order không đảm bảo.", q_en: "How do maps work in Go?", a_en: "`m := map[string]int{\"a\": 1}`. Check if key exists: `val, ok := m[\"key\"]`. Delete: `delete(m, \"key\")`. Maps are not thread-safe — use `sync.Map` or a mutex for concurrent access. The zero value is nil (must initialize with `make` or a literal before use). Iteration order is not guaranteed." },
  { id: 1012, category: "Golang", subcategory: "Collections", level: "intermediate", q: "Range loop trong Go dùng thế nào?", a: "`for i, v := range slice { }` (index + value). `for k, v := range map { }` (key + value). `for i, c := range \"hello\" { }` (index + rune). Dùng `_` bỏ qua index/value: `for _, v := range items { }`. Range tạo copy của value, không phải reference.", q_en: "How is the range loop used in Go?", a_en: "`for i, v := range slice { }` (index + value). `for k, v := range map { }` (key + value). `for i, c := range \"hello\" { }` (index + rune). Use `_` to discard index or value: `for _, v := range items { }`. Range creates a copy of the value, not a reference." },
  { id: 1013, category: "Golang", subcategory: "Error Handling", level: "intermediate", q: "Error handling trong Go khác gì JS/Python?", a: `Go không có try/catch/throw. Errors là values, check lỗi ngay sau khi gọi. Explicit > implicit.
\`\`\`go
// Hàm trả (result, error)
func readFile(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("readFile %s: %w", path, err)
    }
    return data, nil
}

// Xử lý lỗi tại nơi gọi
data, err := readFile("config.json")
if err != nil {
    log.Fatal(err)
}

// Custom error
var ErrNotFound = errors.New("not found")

// Wrap và unwrap error
err := fmt.Errorf("service layer: %w", ErrNotFound)
errors.Is(err, ErrNotFound) // true
\`\`\`
\`errors.Is()\`, \`errors.As()\` để check error chain.`, q_en: "How is error handling in Go different from JS/Python?", a_en: `Go has no try/catch/throw. Errors are values; check them immediately after the call. Explicit over implicit.
\`\`\`go
// Function returns (result, error)
func readFile(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("readFile %s: %w", path, err)
    }
    return data, nil
}

// Handle error at the call site
data, err := readFile("config.json")
if err != nil {
    log.Fatal(err)
}

// Custom sentinel error
var ErrNotFound = errors.New("not found")

// Wrap and unwrap errors
err := fmt.Errorf("service layer: %w", ErrNotFound)
errors.Is(err, ErrNotFound) // true
\`\`\`
Use \`errors.Is()\` and \`errors.As()\` to inspect the error chain.` },
  { id: 1014, category: "Golang", subcategory: "Error Handling", level: "intermediate", q: "defer, panic, recover trong Go dùng khi nào?", a: `\`defer\` đảm bảo một function sẽ được gọi khi function chứa nó return (LIFO). \`panic\` dừng chương trình khi gặp lỗi không thể khôi phục. \`recover\` bắt panic bên trong deferred function.
\`\`\`go
// defer — cleanup đảm bảo luôn chạy
func processFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close() // luôn đóng file khi function return

    // xử lý file...
    return nil
}

// panic + recover — bắt lỗi nghiêm trọng
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered: %v", r)
        }
    }()
    return a / b, nil // panic nếu b == 0
}

// defer chạy LIFO
defer fmt.Println("1") // chạy thứ 3
defer fmt.Println("2") // chạy thứ 2
defer fmt.Println("3") // chạy thứ 1
\`\`\`
Trong thực tế, hạn chế dùng panic/recover và ưu tiên trả error thông thường.`, q_en: "When are defer, panic, and recover used in Go?", a_en: `\`defer\` guarantees a function call when the surrounding function returns (LIFO order). \`panic\` immediately stops execution on an unrecoverable error. \`recover\` catches a panic inside a deferred function.
\`\`\`go
// defer — guaranteed cleanup
func processFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close() // always closes the file on return

    // process file...
    return nil
}

// panic + recover — catch critical failures
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered: %v", r)
        }
    }()
    return a / b, nil // panics if b == 0
}

// defers execute LIFO
defer fmt.Println("1") // runs 3rd
defer fmt.Println("2") // runs 2nd
defer fmt.Println("3") // runs 1st
\`\`\`
In practice, minimize panic/recover and prefer returning errors normally.` },
  { id: 1015, category: "Golang", subcategory: "Interface", level: "intermediate", q: "Interface trong Go hoạt động thế nào?", a: `Interface = tập hợp method signatures. Implicit implementation: struct tự động satisfy interface nếu có đủ methods (không cần \`implements\` keyword).
\`\`\`go
// Định nghĩa interface
type Writer interface {
    Write([]byte) (int, error)
}

type Stringer interface {
    String() string
}

// Struct tự động satisfy interface
type MyWriter struct{}

func (w MyWriter) Write(p []byte) (int, error) {
    fmt.Print(string(p))
    return len(p), nil
}

// Dùng interface làm tham số — polymorphism
func save(w Writer, data []byte) error {
    _, err := w.Write(data)
    return err
}

// Empty interface chấp nhận mọi type
func printAny(v any) {
    fmt.Println(v)
}
\`\`\`
\`interface{}\` (hoặc \`any\`) là empty interface chấp nhận mọi type.`, q_en: "How do interfaces work in Go?", a_en: `An interface is a set of method signatures. Implementation is implicit: a struct automatically satisfies an interface if it has all required methods — no \`implements\` keyword.
\`\`\`go
// Define an interface
type Writer interface {
    Write([]byte) (int, error)
}

type Stringer interface {
    String() string
}

// Struct implicitly satisfies the interface
type MyWriter struct{}

func (w MyWriter) Write(p []byte) (int, error) {
    fmt.Print(string(p))
    return len(p), nil
}

// Use interface as parameter — polymorphism
func save(w Writer, data []byte) error {
    _, err := w.Write(data)
    return err
}

// Empty interface accepts any type
func printAny(v any) {
    fmt.Println(v)
}
\`\`\`
The empty interface \`interface{}\` (or \`any\`) accepts any type.` },
  { id: 1016, category: "Golang", subcategory: "Interface", level: "intermediate", q: "Empty interface (any) dùng khi nào?", a: `\`any\` (alias \`interface{}\`) chấp nhận mọi type, nhưng cần type assertion để dùng value cụ thể. Go 1.18+ có generics thay thế nhiều use cases.
\`\`\`go
// JSON parsing trả map[string]any
var result map[string]any
json.Unmarshal(data, &result)

// Type assertion để lấy giá trị
func printValue(i any) {
    // safe assertion
    if s, ok := i.(string); ok {
        fmt.Println("string:", s)
        return
    }
    // type switch cho nhiều types
    switch v := i.(type) {
    case int:
        fmt.Println("int:", v)
    case []any:
        fmt.Println("slice length:", len(v))
    default:
        fmt.Printf("unknown: %T\n", v)
    }
}
\`\`\`
Dùng cho: generic containers, JSON parsing, function nhận nhiều types.`, q_en: "When should you use the empty interface (any) in Go?", a_en: `\`any\` (alias for \`interface{}\`) accepts any type, but you still need a type assertion to use the concrete value. Go 1.18+ generics replace many of these use cases.
\`\`\`go
// JSON parsing returns map[string]any
var result map[string]any
json.Unmarshal(data, &result)

// Type assertion to extract the value
func printValue(i any) {
    // safe assertion
    if s, ok := i.(string); ok {
        fmt.Println("string:", s)
        return
    }
    // type switch for multiple types
    switch v := i.(type) {
    case int:
        fmt.Println("int:", v)
    case []any:
        fmt.Println("slice length:", len(v))
    default:
        fmt.Printf("unknown: %T\n", v)
    }
}
\`\`\`
Use for: generic containers, JSON parsing, functions accepting multiple types.` },
  { id: 1017, category: "Golang", subcategory: "Interface", level: "intermediate", q: "Type assertion và type switch là gì?", a: `Type assertion lấy giá trị cụ thể từ interface. Type switch xử lý nhiều types một cách gọn gàng. Tương tự instanceof trong JS.
\`\`\`go
var i any = "hello"

// Type assertion — panic nếu sai type
s := i.(string)

// Safe type assertion — không panic
s, ok := i.(string)
if ok {
    fmt.Println(s)
}

// Type switch — idiomatic Go
func describe(i any) {
    switch v := i.(type) {
    case string:
        fmt.Printf("string of length %d\n", len(v))
    case int:
        fmt.Printf("int: %d\n", v)
    case bool:
        fmt.Printf("bool: %v\n", v)
    default:
        fmt.Printf("unknown type: %T\n", v)
    }
}
\`\`\``, q_en: "What are type assertions and type switches?", a_en: `Type assertions extract a concrete value from an interface. Type switches handle multiple types cleanly. Similar to \`instanceof\` in JavaScript.
\`\`\`go
var i any = "hello"

// Type assertion — panics if wrong type
s := i.(string)

// Safe type assertion — no panic
s, ok := i.(string)
if ok {
    fmt.Println(s)
}

// Type switch — idiomatic Go
func describe(i any) {
    switch v := i.(type) {
    case string:
        fmt.Printf("string of length %d\n", len(v))
    case int:
        fmt.Printf("int: %d\n", v)
    case bool:
        fmt.Printf("bool: %v\n", v)
    default:
        fmt.Printf("unknown type: %T\n", v)
    }
}
\`\`\`` },
  { id: 1018, category: "Golang", subcategory: "Struct", level: "intermediate", q: "Struct embedding (composition) trong Go?", a: "Nhúng struct trong struct: `type Admin struct { User; Level int }`. Admin kế thừa methods và fields của User. Gọi trực tiếp: `admin.Name` thay vì `admin.User.Name`. Đây là composition, không phải inheritance. Có thể embed nhiều structs, interface cũng embed được.", q_en: "How does struct embedding (composition) work in Go?", a_en: "Embed a struct inside another: `type Admin struct { User; Level int }`. Admin inherits all methods and fields of User. Access directly: `admin.Name` instead of `admin.User.Name`. This is composition, not inheritance. You can embed multiple structs, and interfaces can also be embedded." },
  { id: 1019, category: "Golang", subcategory: "Struct", level: "intermediate", q: "Pointer receiver vs value receiver khác nhau?", a: "Value receiver `func (u User) Name()`: nhận copy, không modify gốc. Pointer receiver `func (u *User) SetName(n string)`: modify struct gốc, không copy. Dùng pointer khi: modify state, struct lớn (tránh copy), consistency (nếu 1 method dùng pointer, nên tất cả dùng). ", q_en: "What is the difference between pointer receivers and value receivers?", a_en: "Value receiver `func (u User) Name()`: receives a copy, cannot modify the original. Pointer receiver `func (u *User) SetName(n string)`: modifies the original struct, avoids copying. Use pointer receivers when: mutating state, working with large structs, or for consistency (if one method uses a pointer receiver, all should)." },
  { id: 1020, category: "Golang", subcategory: "Generics", level: "intermediate", q: "Generics trong Go (1.18+) hoạt động thế nào?", a: "Generics cho phép viết function và type hoạt động với nhiều kiểu dữ liệu mà không cần lặp code, ví dụ `func Map[T any, U any](s []T, f func(T) U) []U` nhận slice bất kỳ và trả về slice đã transform. Type parameters được khai báo trong dấu ngoặc vuông `[]`, kèm constraints để giới hạn kiểu được chấp nhận như `any`, `comparable`, hoặc custom interface constraints kiểu `type Number interface { int | float64 }`. Trước Go 1.18, muốn viết hàm generic phải dùng `interface{}` rồi type assertion, vừa mất type safety vừa verbose; generics giải quyết triệt để vấn đề này.", q_en: "How do generics work in Go 1.18+?", a_en: "Generics let you write functions and types that work with multiple data types without code duplication. For example, `func Map[T any, U any](s []T, f func(T) U) []U` accepts a slice of any type and returns a transformed slice. Type parameters are declared in square brackets `[]` with constraints that restrict accepted types: `any`, `comparable`, or custom interface constraints like `type Number interface { int | float64 }`. Before Go 1.18, generic behavior required `interface{}` with type assertions — sacrificing type safety and readability. Generics solve this cleanly." },

  // === Go: Concurrency (1021-1040) ===
  { id: 1021, category: "Golang", subcategory: "Concurrency", level: "intermediate", q: "Goroutine là gì? Khác thread thế nào?", a: `Goroutine là lightweight thread do Go runtime quản lý. Khác OS thread: goroutine stack default ~8KB, tự grow/shrink; Go scheduler multiplex goroutines lên OS threads (M:N scheduling). Có thể chạy hàng triệu goroutines cùng lúc.
\`\`\`go
func fetchData(url string) {
    resp, err := http.Get(url)
    if err != nil {
        log.Println(err)
        return
    }
    defer resp.Body.Close()
    // xử lý response...
}

func main() {
    urls := []string{"https://a.com", "https://b.com", "https://c.com"}
    for _, url := range urls {
        go fetchData(url) // mỗi request chạy goroutine riêng
    }
    time.Sleep(2 * time.Second) // đợi goroutines (dùng WaitGroup tốt hơn)
}
\`\`\``, q_en: "What is a goroutine? How is it different from a thread?", a_en: `A goroutine is a lightweight thread managed by the Go runtime. It starts with ~8KB stack that grows/shrinks dynamically (OS threads have fixed 1-8MB). The Go scheduler multiplexes goroutines onto OS threads (M:N scheduling). You can run millions concurrently.
\`\`\`go
func fetchData(url string) {
    resp, err := http.Get(url)
    if err != nil {
        log.Println(err)
        return
    }
    defer resp.Body.Close()
    // process response...
}

func main() {
    urls := []string{"https://a.com", "https://b.com", "https://c.com"}
    for _, url := range urls {
        go fetchData(url) // each request runs in its own goroutine
    }
    time.Sleep(2 * time.Second) // wait (use WaitGroup in practice)
}
\`\`\`` },
  { id: 1022, category: "Golang", subcategory: "Concurrency", level: "intermediate", q: "Channel trong Go là gì? Dùng thế nào?", a: `Kênh giao tiếp giữa goroutines. Unbuffered channel: block đến khi cả sender và receiver sẵn sàng. Buffered: không block nếu buffer chưa đầy.
\`\`\`go
// Tạo channel
ch := make(chan int)        // unbuffered
bch := make(chan int, 10)  // buffered capacity 10

// Gửi và nhận
go func() {
    ch <- 42 // send — block đến khi có receiver
}()
val := <-ch // receive — block đến khi có data
fmt.Println(val) // 42

// Directional channels (best practice)
func producer(out chan<- int) { // chỉ gửi
    out <- 1
}
func consumer(in <-chan int) { // chỉ nhận
    fmt.Println(<-in)
}

// Close và range
close(ch)
for v := range ch { // tự dừng khi channel đóng
    fmt.Println(v)
}
\`\`\``, q_en: "What are channels in Go? How are they used?", a_en: `Channels are the communication mechanism between goroutines. An unbuffered channel blocks until both sides are ready; a buffered channel does not block while buffer is not full.
\`\`\`go
// Create channels
ch := make(chan int)        // unbuffered
bch := make(chan int, 10)  // buffered, capacity 10

// Send and receive
go func() {
    ch <- 42 // send — blocks until a receiver is ready
}()
val := <-ch // receive — blocks until data arrives
fmt.Println(val) // 42

// Directional channels (best practice)
func producer(out chan<- int) { // send-only
    out <- 1
}
func consumer(in <-chan int) { // receive-only
    fmt.Println(<-in)
}

// Close and range
close(ch)
for v := range ch { // stops automatically when channel is closed
    fmt.Println(v)
}
\`\`\`` },
  { id: 1023, category: "Golang", subcategory: "Concurrency", level: "intermediate", q: "Buffered vs unbuffered channel khác nhau?", a: "Unbuffered channel (`make(chan int)`) hoạt động đồng bộ: goroutine gửi dữ liệu sẽ bị block cho đến khi có goroutine khác sẵn sàng nhận, đảm bảo hai bên luôn gặp nhau tại thời điểm trao đổi. Buffered channel (`make(chan int, 5)`) có bộ đệm nên goroutine gửi chỉ bị block khi buffer đã đầy, cho phép sender và receiver hoạt động không đồng bộ. Buffered channel thường dùng trong các pattern như producer-consumer, rate limiting, hoặc semaphore để giới hạn số goroutine chạy đồng thời. Khi close channel bằng `close(ch)`, range loop sẽ tự động dừng sau khi đọc hết dữ liệu còn lại trong buffer.", q_en: "What is the difference between buffered and unbuffered channels?", a_en: "An unbuffered channel (`make(chan int)`) is synchronous: the sender blocks until a receiver is ready, guaranteeing a rendezvous. A buffered channel (`make(chan int, 5)`) has a buffer, so the sender only blocks when the buffer is full, allowing sender and receiver to operate asynchronously. Buffered channels are commonly used in producer-consumer, rate limiting, and semaphore patterns. When you `close(ch)`, a range loop automatically stops after draining the remaining buffer." },
  { id: 1024, category: "Golang", subcategory: "Concurrency", level: "intermediate", q: "Select statement dùng để làm gì?", a: "`select { case v := <-ch1: ... case ch2 <- x: ... default: ... }` chờ multiple channel operations, chạy case sẵn sàng đầu tiên. Nếu nhiều case sẵn sàng → chọn random. `default` chạy nếu không case nào sẵn sàng (non-blocking). Dùng cho timeout: `case <-time.After(5*time.Second)`.", q_en: "What is the select statement used for?", a_en: "`select { case v := <-ch1: ... case ch2 <- x: ... default: ... }` waits on multiple channel operations and runs the first one ready. If multiple cases are ready, one is chosen at random. `default` runs immediately if no case is ready (non-blocking). Useful for timeouts: `case <-time.After(5*time.Second)`." },
  { id: 1025, category: "Golang", subcategory: "Concurrency", level: "intermediate", q: "WaitGroup dùng khi nào?", a: `Dùng khi cần đợi nhiều goroutines hoàn thành trước khi tiếp tục. Đơn giản hơn channel cho fan-out/fan-in.
\`\`\`go
var wg sync.WaitGroup

urls := []string{"https://a.com", "https://b.com", "https://c.com"}

for _, url := range urls {
    wg.Add(1) // đăng ký 1 goroutine
    go func(u string) {
        defer wg.Done() // báo hoàn thành khi return
        fetch(u)
    }(url)
}

wg.Wait() // block đến khi tất cả goroutines Done
fmt.Println("all done")
\`\`\`
\`wg.Add(n)\` đăng ký n goroutines. \`wg.Done()\` thường dùng kết hợp defer.`, q_en: "When should you use a WaitGroup?", a_en: `Use it when you need to wait for multiple goroutines to finish before continuing. Simpler than channels for fan-out/fan-in patterns.
\`\`\`go
var wg sync.WaitGroup

urls := []string{"https://a.com", "https://b.com", "https://c.com"}

for _, url := range urls {
    wg.Add(1) // register one goroutine
    go func(u string) {
        defer wg.Done() // signal completion on return
        fetch(u)
    }(url)
}

wg.Wait() // block until all goroutines call Done
fmt.Println("all done")
\`\`\`
\`wg.Add(n)\` registers n goroutines. \`wg.Done()\` is typically deferred.` },
  { id: 1026, category: "Golang", subcategory: "Concurrency", level: "advanced", q: "Mutex và RWMutex dùng khi nào?", a: "`sync.Mutex`: Lock()/Unlock() cho exclusive access (1 goroutine tại 1 thời điểm). `sync.RWMutex`: RLock() cho nhiều readers đồng thời, Lock() cho exclusive write. Dùng khi shared state giữa goroutines. Luôn `defer mu.Unlock()`. Tránh deadlock: lock order nhất quán.", q_en: "When should you use Mutex and RWMutex?", a_en: "`sync.Mutex`: Lock()/Unlock() for exclusive access (one goroutine at a time). `sync.RWMutex`: RLock() allows multiple concurrent readers, Lock() for exclusive writes. Use when goroutines share mutable state. Always `defer mu.Unlock()`. Prevent deadlocks by acquiring locks in a consistent order." },
  { id: 1027, category: "Golang", subcategory: "Concurrency", level: "advanced", q: "Context package dùng để làm gì?", a: `Package \`context\` cung cấp cơ chế truyền deadline, tín hiệu hủy (cancellation), và các giá trị request-scoped xuyên suốt chuỗi goroutine. Nguyên tắc quan trọng: luôn truyền context như tham số đầu tiên của function, không bao giờ lưu context vào struct.
\`\`\`go
// WithTimeout — tự động hủy sau timeout
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel() // luôn gọi cancel để tránh leak

resp, err := http.NewRequestWithContext(ctx, "GET", url, nil)

// WithCancel — hủy thủ công
ctx, cancel := context.WithCancel(context.Background())
go func() {
    time.Sleep(2 * time.Second)
    cancel() // hủy khi không cần kết quả nữa
}()

// Truyền context vào database query
rows, err := db.QueryContext(ctx, "SELECT * FROM users")

// HTTP server — mỗi request mang context riêng
func handler(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context() // tự hủy khi client ngắt kết nối
    result, err := db.QueryContext(ctx, "SELECT ...")
    _ = result
    _ = err
}
\`\`\``, q_en: "What is the context package used for?", a_en: `The \`context\` package propagates deadlines, cancellation signals, and request-scoped values across goroutines. Key rule: always pass context as the first function parameter; never store it in a struct.
\`\`\`go
// WithTimeout — auto-cancels after the deadline
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel() // always call cancel to avoid goroutine leaks

req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)

// WithCancel — manual cancellation
ctx, cancel := context.WithCancel(context.Background())
go func() {
    time.Sleep(2 * time.Second)
    cancel() // cancel when result is no longer needed
}()

// Pass context to a database query
rows, err := db.QueryContext(ctx, "SELECT * FROM users")

// HTTP server — each request has its own context
func handler(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context() // auto-cancelled when client disconnects
    result, err := db.QueryContext(ctx, "SELECT ...")
    _ = result
    _ = err
}
\`\`\`` },
  { id: 1028, category: "Golang", subcategory: "Concurrency", level: "advanced", q: "Worker pool pattern trong Go?", a: "Tạo fixed number goroutines (workers) đọc jobs từ channel: `func worker(jobs <-chan Job, results chan<- Result) { for j := range jobs { results <- process(j) } }`. Main: gửi jobs vào channel, workers xử lý parallel. Giới hạn concurrency, tránh tạo quá nhiều goroutines.", q_en: "What is the worker pool pattern in Go?", a_en: "Create a fixed number of goroutines (workers) that read jobs from a shared channel: `func worker(jobs <-chan Job, results chan<- Result) { for j := range jobs { results <- process(j) } }`. The main goroutine sends jobs to the channel; workers process them in parallel. This bounds concurrency and prevents spawning an unbounded number of goroutines." },
  { id: 1029, category: "Golang", subcategory: "Concurrency", level: "advanced", q: "Race condition trong Go phát hiện và fix thế nào?", a: "Phát hiện: `go run -race main.go` (race detector). Nguyên nhân: nhiều goroutines đọc/ghi shared variable không sync. Fix: (1) Mutex/RWMutex. (2) Channel (share by communicating). (3) sync/atomic cho simple counters. (4) Redesign để tránh shared state. Go philosophy: 'Don't communicate by sharing memory; share memory by communicating.'", q_en: "How do you detect and fix race conditions in Go?", a_en: "Detection: `go run -race main.go` (built-in race detector). Cause: multiple goroutines reading/writing a shared variable without synchronization. Fixes: (1) Mutex/RWMutex; (2) Channels (communicate instead of sharing); (3) sync/atomic for simple counters; (4) Redesign to eliminate shared state. Go philosophy: 'Don't communicate by sharing memory; share memory by communicating.'" },
  { id: 1030, category: "Golang", subcategory: "Concurrency", level: "advanced", q: "Errgroup dùng khi nào?", a: "`golang.org/x/sync/errgroup`: chạy nhiều goroutines, trả lỗi đầu tiên, cancel tất cả khi 1 lỗi. `g, ctx := errgroup.WithContext(ctx); g.Go(func() error { ... }); if err := g.Wait(); err != nil { ... }`. Tốt hơn WaitGroup khi cần error propagation và cancellation.", q_en: "When should you use errgroup?", a_en: "`golang.org/x/sync/errgroup` runs multiple goroutines, returns the first error, and cancels all goroutines when one fails. `g, ctx := errgroup.WithContext(ctx); g.Go(func() error { ... }); if err := g.Wait(); err != nil { ... }`. Better than WaitGroup when you need error propagation and automatic cancellation." },

  // === Go: Web & API (1031-1045) ===
  { id: 1031, category: "Golang", subcategory: "Web & API", level: "beginner", q: "HTTP server cơ bản trong Go viết thế nào?", a: `Stdlib đủ mạnh cho production. Không bắt buộc framework. \`http.ServeMux\` là default router.
\`\`\`go
package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/hello", helloHandler)
    mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        fmt.Fprint(w, "ok")
    })

    srv := &http.Server{
        Addr:         ":8080",
        Handler:      mux,
        ReadTimeout:  5 * time.Second,
        WriteTimeout: 10 * time.Second,
    }
    log.Fatal(srv.ListenAndServe())
}
\`\`\``, q_en: "How do you write a basic HTTP server in Go?", a_en: `The standard library is production-capable — no framework required. \`http.ServeMux\` is the default router.
\`\`\`go
package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/hello", helloHandler)
    mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        fmt.Fprint(w, "ok")
    })

    srv := &http.Server{
        Addr:         ":8080",
        Handler:      mux,
        ReadTimeout:  5 * time.Second,
        WriteTimeout: 10 * time.Second,
    }
    log.Fatal(srv.ListenAndServe())
}
\`\`\`` },
  { id: 1032, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "Gin framework là gì? Khác net/http thế nào?", a: "Gin là HTTP web framework phổ biến nhất trong hệ sinh thái Go, được thiết kế tập trung vào hiệu năng với routing dựa trên radix tree, nhanh hơn đáng kể so với `http.ServeMux` mặc định. So với stdlib net/http, Gin cung cấp sẵn nhiều tính năng thiết yếu: middleware chain, JSON binding và validation tự động, error handling tập trung, và group routes để tổ chức API gọn gàng. Cách dùng cơ bản: `r := gin.Default(); r.GET(\"/users/:id\", getUser); r.Run()`, trong đó `gin.Default()` đã bao gồm sẵn middleware logger và recovery. Các framework thay thế đáng chú ý gồm Echo, Fiber (dựa trên fasthttp), và Chi (tương thích net/http).", q_en: "What is the Gin framework? How does it compare to net/http?", a_en: "Gin is the most popular HTTP web framework in the Go ecosystem, built for performance with radix-tree routing that is significantly faster than the default `http.ServeMux`. Compared to stdlib net/http, Gin provides out-of-the-box: middleware chaining, automatic JSON binding and validation, centralized error handling, and route groups for clean API organization. Basic usage: `r := gin.Default(); r.GET(\"/users/:id\", getUser); r.Run()` — `gin.Default()` includes logger and recovery middleware. Notable alternatives: Echo, Fiber (fasthttp-based), and Chi (net/http compatible)." },
  { id: 1033, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "Middleware trong Go HTTP server viết thế nào?", a: `Middleware trong Go là một wrapper function nhận handler và trả về handler mới, cho phép chèn logic trước hoặc sau khi xử lý request.
\`\`\`go
// Middleware cơ bản — stdlib net/http
func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if !isValidToken(token) {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        next.ServeHTTP(w, r) // gọi handler tiếp theo
    })
}

func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

// Chain middlewares — request đi từ ngoài vào trong
http.Handle("/api", loggingMiddleware(authMiddleware(apiHandler)))

// Gin middleware — đơn giản hơn
r := gin.Default()
r.Use(authMiddleware()) // áp dụng cho tất cả routes
api := r.Group("/api")
api.Use(rateLimitMiddleware()) // áp dụng cho group
\`\`\``, q_en: "How do you write middleware in a Go HTTP server?", a_en: `Middleware in Go is a wrapper function that receives a handler and returns a new handler, inserting logic before or after request processing.
\`\`\`go
// Basic middleware — stdlib net/http
func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if !isValidToken(token) {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        next.ServeHTTP(w, r) // call the next handler
    })
}

func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

// Chain middlewares — request passes outside-in
http.Handle("/api", loggingMiddleware(authMiddleware(apiHandler)))

// Gin middleware — simpler registration
r := gin.Default()
r.Use(authMiddleware())        // applies to all routes
api := r.Group("/api")
api.Use(rateLimitMiddleware()) // applies to this group only
\`\`\`` },
  { id: 1034, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "JSON encode/decode trong Go thế nào?", a: `Go sử dụng package \`encoding/json\`. Struct tags quyết định cách ánh xạ field sang JSON key.
\`\`\`go
// Định nghĩa struct với JSON tags
type User struct {
    Name  string \`json:"name"\`
    Age   int    \`json:"age,omitempty"\` // bỏ qua nếu zero value
    Email string \`json:"-"\`             // luôn bỏ qua khi encode
}

// Marshal — struct → JSON bytes
u := User{Name: "Alice", Age: 30}
data, err := json.Marshal(u)
// {"name":"Alice","age":30}

// Unmarshal — JSON bytes → struct
var u2 User
err = json.Unmarshal(data, &u2)

// HTTP response — dùng Encoder để stream
func handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(User{Name: "Bob", Age: 25})
}

// HTTP request body — dùng Decoder
func createUser(w http.ResponseWriter, r *http.Request) {
    var u User
    if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
}
\`\`\``, q_en: "How does JSON encoding and decoding work in Go?", a_en: `Go uses the \`encoding/json\` package. Struct tags control field-to-key mapping.
\`\`\`go
// Struct with JSON tags
type User struct {
    Name  string \`json:"name"\`
    Age   int    \`json:"age,omitempty"\` // omit if zero value
    Email string \`json:"-"\`             // always omit
}

// Marshal — struct → JSON bytes
u := User{Name: "Alice", Age: 30}
data, err := json.Marshal(u)
// {"name":"Alice","age":30}

// Unmarshal — JSON bytes → struct
var u2 User
err = json.Unmarshal(data, &u2)

// HTTP response — use Encoder to stream (preferred)
func handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(User{Name: "Bob", Age: 25})
}

// HTTP request body — use Decoder
func createUser(w http.ResponseWriter, r *http.Request) {
    var u User
    if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
}
\`\`\`` },
  { id: 1035, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "GORM ORM trong Go dùng thế nào?", a: "GORM là ORM phổ biến nhất trong Go, cung cấp API trực quan để thao tác database: `db.Create(&user)` để insert, `db.First(&user, 1)` để query theo primary key, và `db.Where(\"age > ?\", 18).Find(&users)` cho query có điều kiện. GORM hỗ trợ auto migration (`db.AutoMigrate(&User{})`) để tự tạo/cập nhật bảng theo struct definition, cùng với các associations như BelongsTo, HasMany, ManyToMany và hooks như BeforeCreate, AfterUpdate để chạy logic trước/sau thao tác. Tuy nhiên với các query phức tạp hoặc cần kiểm soát performance chặt, nhiều team chọn dùng sqlx (raw SQL kết hợp auto scanning) hoặc ent (Facebook, code generation) thay thế.", q_en: "How is GORM used in Go?", a_en: "GORM is the most popular ORM in Go, offering an intuitive API: `db.Create(&user)` to insert, `db.First(&user, 1)` to query by primary key, and `db.Where(\"age > ?\", 18).Find(&users)` for conditional queries. GORM supports auto-migration (`db.AutoMigrate(&User{})`) to create/update tables from struct definitions, along with associations (BelongsTo, HasMany, ManyToMany) and lifecycle hooks (BeforeCreate, AfterUpdate). For complex queries or strict performance requirements, many teams prefer sqlx (raw SQL with auto-scanning) or ent (Facebook's code-generation ORM)." },
  { id: 1036, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "Database connection trong Go best practices?", a: "`sql.Open()` trả connection pool (không phải single connection). Set: `db.SetMaxOpenConns(25)`, `db.SetMaxIdleConns(5)`, `db.SetConnMaxLifetime(5*time.Minute)`. KHÔNG `defer db.Close()` mỗi request vì sql.DB là long-lived pool — chỉ close khi app shutdown. Prepared statements cho queries lặp lại. Context timeout cho queries: `db.QueryContext(ctx, query)`.", q_en: "What are the best practices for database connections in Go?", a_en: "`sql.Open()` returns a connection pool, not a single connection. Configure it: `db.SetMaxOpenConns(25)`, `db.SetMaxIdleConns(5)`, `db.SetConnMaxLifetime(5*time.Minute)`. Do NOT `defer db.Close()` on every request — `sql.DB` is a long-lived pool and should only be closed at app shutdown. Use prepared statements for repeated queries. Always pass a context with a timeout: `db.QueryContext(ctx, query)`." },
  { id: 1037, category: "Golang", subcategory: "Web & API", level: "intermediate", q: "Go modules là gì? go.mod hoạt động thế nào?", a: "Go modules là hệ thống quản lý dependency chính thức của Go, khởi tạo bằng `go mod init module-name` để tạo file go.mod chứa tên module và danh sách dependencies. Khi cần thêm thư viện, dùng `go get package@version`, và `go mod tidy` để tự động dọn dẹp các dependency không còn sử dụng cũng như thêm các dependency bị thiếu. File go.sum đóng vai trò lock file (tương tự package-lock.json trong Node.js), lưu checksum chính xác của từng dependency để đảm bảo build reproducible. Go modules còn hỗ trợ replace directive để trỏ sang local module khi phát triển, và sử dụng GOPROXY để tải dependency qua proxy server nhằm tăng tốc và đảm bảo tính sẵn có.", q_en: "What are Go modules? How does go.mod work?", a_en: "Go modules are Go's official dependency management system. Initialize with `go mod init module-name` to create go.mod, which tracks the module name and dependencies. Add libraries with `go get package@version`; run `go mod tidy` to clean up unused dependencies and add missing ones. The go.sum file is a lock file (similar to package-lock.json) storing exact checksums for reproducible builds. Modules also support the `replace` directive for local development and `GOPROXY` for faster, more reliable dependency fetching." },
  { id: 1038, category: "Golang", subcategory: "Web & API", level: "advanced", q: "gRPC trong Go dùng khi nào?", a: "RPC framework dùng Protocol Buffers (protobuf). Nhanh hơn REST (binary encoding, HTTP/2). Dùng khi: microservices internal communication, streaming (bidirectional), cần type safety chặt. Define service trong .proto file → `protoc` generate Go code. Hỗ trợ: unary, server streaming, client streaming, bidirectional.", q_en: "When should you use gRPC in Go?", a_en: "gRPC is an RPC framework using Protocol Buffers (protobuf). It is faster than REST thanks to binary encoding and HTTP/2. Use it for: microservice-to-microservice communication, streaming (bidirectional), and when strong type safety is required. Define your service in a .proto file → `protoc` generates Go code. Supports: unary, server streaming, client streaming, and bidirectional streaming." },
  { id: 1039, category: "Golang", subcategory: "Web & API", level: "advanced", q: "Graceful shutdown trong Go server thế nào?", a: "`srv := &http.Server{Addr: \":8080\"}; go srv.ListenAndServe()`. Signal handler: `quit := make(chan os.Signal, 1); signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM); <-quit`. Shutdown: `ctx, cancel := context.WithTimeout(ctx, 30*time.Second); srv.Shutdown(ctx)`. Đợi requests đang xử lý hoàn thành.", q_en: "How do you implement graceful shutdown in a Go server?", a_en: "`srv := &http.Server{Addr: \":8080\"}; go srv.ListenAndServe()`. Signal handler: `quit := make(chan os.Signal, 1); signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM); <-quit`. Shutdown: `ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second); srv.Shutdown(ctx)`. This waits for in-flight requests to complete before exiting." },
  { id: 1040, category: "Golang", subcategory: "Web & API", level: "advanced", q: "Rate limiter implement trong Go?", a: "Để implement rate limiting trong Go, cách chuẩn là dùng package `golang.org/x/time/rate` với token bucket algorithm: `limiter := rate.NewLimiter(rate.Every(time.Second), 10)` tạo limiter cho phép 10 request mỗi giây. Trong HTTP middleware, kiểm tra `if !limiter.Allow()` và trả về status 429 Too Many Requests nếu vượt giới hạn. Để giới hạn theo từng client (per-IP), cần dùng `map[string]*rate.Limiter` kết hợp với mutex để quản lý limiter riêng cho mỗi IP, đồng thời nên dọn dẹp các limiter cũ theo định kỳ để tránh memory leak. Trong môi trường production nhiều server, nên dùng Redis-based distributed rate limiter để đảm bảo giới hạn nhất quán across tất cả instances.", q_en: "How do you implement a rate limiter in Go?", a_en: "The standard approach uses `golang.org/x/time/rate` with a token bucket: `limiter := rate.NewLimiter(rate.Every(time.Second), 10)` allows 10 requests per second. In HTTP middleware, check `if !limiter.Allow()` and return 429 Too Many Requests if exceeded. For per-client limiting, maintain a `map[string]*rate.Limiter` protected by a mutex, and periodically clean up stale limiters to avoid memory leaks. In a multi-server production environment, use a Redis-based distributed rate limiter to enforce consistent limits across all instances." },

  // === Go: Testing & Tooling (1041-1050) ===
  { id: 1041, category: "Golang", subcategory: "Testing", level: "intermediate", q: "Testing trong Go viết thế nào?", a: `File \`_test.go\`, function \`TestXxx(t *testing.T)\`. Run: \`go test ./...\`. Go không có built-in assert — dùng if/t.Errorf. Table-driven tests là pattern phổ biến.
\`\`\`go
// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    got := Add(2, 3)
    want := 5
    if got != want {
        t.Errorf("Add(2, 3) = %d; want %d", got, want)
    }
}

// Table-driven test
func TestMultiply(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"positive", 3, 4, 12},
        {"zero", 0, 5, 0},
        {"negative", -2, 3, -6},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := Multiply(tt.a, tt.b)
            if got != tt.want {
                t.Errorf("Multiply(%d, %d) = %d; want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}
\`\`\``, q_en: "How do you write tests in Go?", a_en: `Test files end in \`_test.go\`; test functions are \`TestXxx(t *testing.T)\`. Run with: \`go test ./...\`. There is no built-in assert — use if/t.Errorf. Table-driven tests are the idiomatic style.
\`\`\`go
// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    got := Add(2, 3)
    want := 5
    if got != want {
        t.Errorf("Add(2, 3) = %d; want %d", got, want)
    }
}

// Table-driven test
func TestMultiply(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"positive", 3, 4, 12},
        {"zero", 0, 5, 0},
        {"negative", -2, 3, -6},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := Multiply(tt.a, tt.b)
            if got != tt.want {
                t.Errorf("Multiply(%d, %d) = %d; want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}
\`\`\`` },
  { id: 1042, category: "Golang", subcategory: "Testing", level: "intermediate", q: "Table-driven tests trong Go là gì?", a: `Pattern test nhiều cases bằng slice of structs — DRY, dễ thêm cases, idiomatic Go.
\`\`\`go
func TestSquare(t *testing.T) {
    cases := []struct {
        name  string
        input int
        want  int
    }{
        {"positive", 5, 25},
        {"zero", 0, 0},
        {"negative", -3, 9},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            got := Square(tc.input)
            if got != tc.want {
                t.Errorf("Square(%d) = %d; want %d", tc.input, got, tc.want)
            }
        })
    }
}
\`\`\`
Mỗi sub-test chạy độc lập với \`t.Run\`, có thể filter: \`go test -run TestSquare/positive\`.`, q_en: "What are table-driven tests in Go?", a_en: `A pattern that tests multiple cases using a slice of structs — DRY, easy to extend, idiomatic Go.
\`\`\`go
func TestSquare(t *testing.T) {
    cases := []struct {
        name  string
        input int
        want  int
    }{
        {"positive", 5, 25},
        {"zero", 0, 0},
        {"negative", -3, 9},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            got := Square(tc.input)
            if got != tc.want {
                t.Errorf("Square(%d) = %d; want %d", tc.input, got, tc.want)
            }
        })
    }
}
\`\`\`
Each sub-test runs independently with \`t.Run\` and can be filtered: \`go test -run TestSquare/positive\`.` },
  { id: 1043, category: "Golang", subcategory: "Testing", level: "intermediate", q: "Benchmark testing trong Go?", a: `\`func BenchmarkXxx(b *testing.B)\` — Go đo lường performance tự động điều chỉnh số lần chạy.
\`\`\`go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(100, 200)
    }
}

// Benchmark với setup
func BenchmarkSort(b *testing.B) {
    data := generateLargeSlice(10000)
    b.ResetTimer() // bỏ qua thời gian setup
    for i := 0; i < b.N; i++ {
        sort.Ints(data)
    }
}
\`\`\`
\`\`\`bash
go test -bench=.                # chạy tất cả benchmarks
go test -bench=BenchmarkAdd     # chạy benchmark cụ thể
go test -bench=. -benchmem      # hiển thị thêm B/op, allocs/op
benchstat old.txt new.txt       # so sánh 2 kết quả
\`\`\``, q_en: "How does benchmark testing work in Go?", a_en: `\`func BenchmarkXxx(b *testing.B)\` — Go automatically adjusts the iteration count to get a stable measurement.
\`\`\`go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(100, 200)
    }
}

// Benchmark with setup
func BenchmarkSort(b *testing.B) {
    data := generateLargeSlice(10000)
    b.ResetTimer() // exclude setup time
    for i := 0; i < b.N; i++ {
        sort.Ints(data)
    }
}
\`\`\`
\`\`\`bash
go test -bench=.                # run all benchmarks
go test -bench=BenchmarkAdd     # run a specific benchmark
go test -bench=. -benchmem      # also show B/op, allocs/op
benchstat old.txt new.txt       # compare two results
\`\`\`` },
  { id: 1044, category: "Golang", subcategory: "Testing", level: "intermediate", q: "Mock/stub trong Go thế nào?", a: "Go khuyến khích mocking dựa trên interface: ta define một interface nhỏ cho dependency cần mock, sau đó tạo mock struct implement interface đó với behavior tùy chỉnh, ví dụ `type MockDB struct { GetFunc func(id int) (*User, error) }` rồi gọi `m.GetFunc(id)` trong method Get. Cách này tận dụng implicit interface của Go nên không cần sửa code production, chỉ cần đảm bảo mock struct có đủ methods. Các thư viện phổ biến như testify/mock, gomock, hay mockery (tự động generate mock từ interface) giúp giảm boilerplate khi có nhiều methods cần mock. Nguyên tắc quan trọng là chỉ mock ở boundary (database, external API) và tránh mock quá nhiều layer vì sẽ làm test mất ý nghĩa.", q_en: "How do you mock/stub in Go?", a_en: "Go encourages interface-based mocking: define a small interface for the dependency you want to mock, then create a mock struct that implements it with custom behavior, e.g., `type MockDB struct { GetFunc func(id int) (*User, error) }` and call `m.GetFunc(id)` in the Get method. Go's implicit interfaces mean no production code changes are needed — just ensure the mock has the required methods. Libraries like testify/mock, gomock, and mockery (auto-generate mocks from interfaces) reduce boilerplate for large interfaces. Key principle: only mock at boundaries (DB, external APIs); over-mocking internal layers makes tests meaningless." },
  { id: 1045, category: "Golang", subcategory: "Tooling", level: "beginner", q: "Go toolchain có những công cụ nào?", a: "Go đi kèm bộ toolchain rất mạnh ngay từ khi cài đặt: `go build` để compile thành binary, `go run` để compile và chạy luôn, `go test` để chạy unit test và benchmark, và `go fmt` để format code theo chuẩn thống nhất (bắt buộc trong hầu hết project). Về chất lượng code, `go vet` phát hiện các lỗi tiềm ẩn mà compiler không bắt được, còn `golangci-lint` là công cụ linting tổng hợp chạy hàng chục linter cùng lúc. Ngoài ra còn có `go mod` cho quản lý dependency, `go generate` cho code generation, `go doc` để xem documentation, và `go tool pprof` để profiling hiệu năng ứng dụng.", q_en: "What tools are included in the Go toolchain?", a_en: "Go ships with a powerful built-in toolchain: `go build` compiles to a binary, `go run` compiles and runs immediately, `go test` runs unit tests and benchmarks, and `go fmt` formats code to the universal Go style (enforced in most projects). For code quality: `go vet` catches common mistakes the compiler misses, and `golangci-lint` runs dozens of linters simultaneously. Also included: `go mod` for dependency management, `go generate` for code generation, `go doc` for viewing documentation, and `go tool pprof` for performance profiling." },
  { id: 1046, category: "Golang", subcategory: "Tooling", level: "intermediate", q: "Profiling Go application thế nào?", a: "Go có hỗ trợ profiling tích hợp sẵn thông qua package `net/http/pprof`: chỉ cần import `_ \"net/http/pprof\"` là server tự expose các endpoint profiling tại `/debug/pprof/`. Để phân tích CPU, dùng `go test -cpuprofile=cpu.prof` rồi mở bằng `go tool pprof cpu.prof`; tương tự với memory profiling dùng flag `-memprofile=mem.prof` để tìm các hàm allocate nhiều bộ nhớ. Công cụ pprof hỗ trợ xem flame graph trực quan qua `pprof -http=:8080`, giúp nhanh chóng nhận diện hot functions, excessive allocations, và goroutine leaks. Ngoài ra `go tool trace` cho phép xem chi tiết execution trace theo timeline, hữu ích khi debug vấn đề concurrency và latency.", q_en: "How do you profile a Go application?", a_en: "Go has built-in profiling via `net/http/pprof`: just import `_ \"net/http/pprof\"` and the server exposes profiling endpoints at `/debug/pprof/`. For CPU analysis: `go test -cpuprofile=cpu.prof` then open with `go tool pprof cpu.prof`. For memory: `-memprofile=mem.prof` to find high-allocation functions. The pprof tool renders interactive flame graphs via `pprof -http=:8080`, helping identify hot functions, excessive allocations, and goroutine leaks. `go tool trace` provides a detailed timeline for debugging concurrency and latency issues." },

  // === Go: Advanced Patterns (1047-1060) ===
  { id: 1047, category: "Golang", subcategory: "Patterns", level: "advanced", q: "Functional options pattern trong Go?", a: `Functional options tạo API khởi tạo object linh hoạt, dễ mở rộng mà không break code cũ.
\`\`\`go
type Server struct {
    port    int
    timeout time.Duration
    maxConn int
}

// Option là function type
type Option func(*Server)

// Helper functions trả về Option
func WithPort(p int) Option {
    return func(s *Server) { s.port = p }
}

func WithTimeout(d time.Duration) Option {
    return func(s *Server) { s.timeout = d }
}

func WithMaxConn(n int) Option {
    return func(s *Server) { s.maxConn = n }
}

// Constructor apply options
func NewServer(opts ...Option) *Server {
    s := &Server{port: 8080, timeout: 30 * time.Second, maxConn: 100} // defaults
    for _, opt := range opts {
        opt(s)
    }
    return s
}

// Sử dụng — chỉ cần truyền options quan tâm
srv := NewServer(
    WithPort(9090),
    WithTimeout(60 * time.Second),
)
\`\`\``, q_en: "What is the functional options pattern in Go?", a_en: `Functional options create a flexible initialization API that is easy to extend without breaking existing callers.
\`\`\`go
type Server struct {
    port    int
    timeout time.Duration
    maxConn int
}

// Option is a function type
type Option func(*Server)

// Helper functions return an Option
func WithPort(p int) Option {
    return func(s *Server) { s.port = p }
}

func WithTimeout(d time.Duration) Option {
    return func(s *Server) { s.timeout = d }
}

func WithMaxConn(n int) Option {
    return func(s *Server) { s.maxConn = n }
}

// Constructor applies options
func NewServer(opts ...Option) *Server {
    s := &Server{port: 8080, timeout: 30 * time.Second, maxConn: 100} // defaults
    for _, opt := range opts {
        opt(s)
    }
    return s
}

// Usage — only pass the options you care about
srv := NewServer(
    WithPort(9090),
    WithTimeout(60 * time.Second),
)
\`\`\`` },
  { id: 1048, category: "Golang", subcategory: "Patterns", level: "advanced", q: "Builder pattern trong Go?", a: `Builder pattern dùng cho complex object construction với method chaining.
\`\`\`go
type QueryBuilder struct {
    table  string
    wheres []string
    limit  int
    order  string
}

func NewQuery(table string) *QueryBuilder {
    return &QueryBuilder{table: table}
}

func (qb *QueryBuilder) Where(cond string) *QueryBuilder {
    qb.wheres = append(qb.wheres, cond)
    return qb // trả về chính nó để chain
}

func (qb *QueryBuilder) Limit(n int) *QueryBuilder {
    qb.limit = n
    return qb
}

func (qb *QueryBuilder) OrderBy(field string) *QueryBuilder {
    qb.order = field
    return qb
}

func (qb *QueryBuilder) Build() string {
    q := "SELECT * FROM " + qb.table
    if len(qb.wheres) > 0 {
        q += " WHERE " + strings.Join(qb.wheres, " AND ")
    }
    if qb.order != "" {
        q += " ORDER BY " + qb.order
    }
    if qb.limit > 0 {
        q += fmt.Sprintf(" LIMIT %d", qb.limit)
    }
    return q
}

// Method chaining
query := NewQuery("users").
    Where("age > 18").
    Where("active = true").
    OrderBy("created_at DESC").
    Limit(10).
    Build()
\`\`\``, q_en: "What is the builder pattern in Go?", a_en: `The builder pattern is used for complex object construction via method chaining.
\`\`\`go
type QueryBuilder struct {
    table  string
    wheres []string
    limit  int
    order  string
}

func NewQuery(table string) *QueryBuilder {
    return &QueryBuilder{table: table}
}

func (qb *QueryBuilder) Where(cond string) *QueryBuilder {
    qb.wheres = append(qb.wheres, cond)
    return qb // return self for chaining
}

func (qb *QueryBuilder) Limit(n int) *QueryBuilder {
    qb.limit = n
    return qb
}

func (qb *QueryBuilder) OrderBy(field string) *QueryBuilder {
    qb.order = field
    return qb
}

func (qb *QueryBuilder) Build() string {
    q := "SELECT * FROM " + qb.table
    if len(qb.wheres) > 0 {
        q += " WHERE " + strings.Join(qb.wheres, " AND ")
    }
    if qb.order != "" {
        q += " ORDER BY " + qb.order
    }
    if qb.limit > 0 {
        q += fmt.Sprintf(" LIMIT %d", qb.limit)
    }
    return q
}

// Method chaining
query := NewQuery("users").
    Where("age > 18").
    Where("active = true").
    OrderBy("created_at DESC").
    Limit(10).
    Build()
\`\`\`` },
  { id: 1049, category: "Golang", subcategory: "Patterns", level: "advanced", q: "Dependency injection trong Go thế nào?", a: "Dependency injection trong Go thực hiện chủ yếu qua constructor injection: function khởi tạo nhận interface làm tham số, ví dụ `func NewUserService(repo UserRepository) *UserService`, giúp UserService không phụ thuộc vào implementation cụ thể mà chỉ phụ thuộc vào contract (interface). Triết lý Go ưu tiên sự tường minh nên phần lớn project không cần DI framework, chỉ cần truyền dependency thủ công tại main function; tuy nhiên với ứng dụng lớn nhiều dependency lồng nhau, có thể dùng wire (Google, compile-time) hoặc fx (Uber, runtime). Interface nên giữ nhỏ (1-3 methods) theo nguyên tắc Interface Segregation, và khi viết test chỉ cần inject mock implementation vào constructor là xong.", q_en: "How is dependency injection done in Go?", a_en: "DI in Go is primarily done through constructor injection: the initializer function accepts an interface as a parameter, e.g., `func NewUserService(repo UserRepository) *UserService` — UserService depends only on the contract (interface), not a specific implementation. Go's philosophy of explicitness means most projects don't need a DI framework; just wire dependencies manually in main. For large apps with deep dependency trees, use wire (Google, compile-time) or fx (Uber, runtime). Keep interfaces small (1-3 methods) per Interface Segregation, and in tests simply inject a mock implementation into the constructor." },
  { id: 1050, category: "Golang", subcategory: "Patterns", level: "advanced", q: "Singleton pattern trong Go?", a: `\`sync.Once\` đảm bảo chỉ khởi tạo 1 lần dù nhiều goroutines gọi đồng thời — thread-safe.
\`\`\`go
type DB struct {
    conn *sql.DB
}

var (
    instance *DB
    once     sync.Once
)

func GetDB() *DB {
    once.Do(func() {
        conn, err := sql.Open("postgres", dsn)
        if err != nil {
            panic(err)
        }
        instance = &DB{conn: conn}
    })
    return instance
}

// Sử dụng
db := GetDB() // lần đầu: khởi tạo
db2 := GetDB() // lần sau: trả instance cũ, không khởi tạo lại
// db == db2 (cùng pointer)
\`\`\`
Dùng cho: DB connection pool, config, logger.`, q_en: "What is the singleton pattern in Go?", a_en: `\`sync.Once\` guarantees initialization runs exactly once regardless of concurrent callers — thread-safe.
\`\`\`go
type DB struct {
    conn *sql.DB
}

var (
    instance *DB
    once     sync.Once
)

func GetDB() *DB {
    once.Do(func() {
        conn, err := sql.Open("postgres", dsn)
        if err != nil {
            panic(err)
        }
        instance = &DB{conn: conn}
    })
    return instance
}

// Usage
db := GetDB()  // first call: initializes
db2 := GetDB() // subsequent calls: returns existing instance
// db == db2 (same pointer)
\`\`\`
Use for: DB connection pools, configuration, loggers.` },
  { id: 1051, category: "Golang", subcategory: "Patterns", level: "advanced", q: "Pipeline pattern với channels?", a: `Chain stages qua channels — mỗi stage là goroutine, data chảy qua channels.
\`\`\`go
// Stage 1: generator
func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

// Stage 2: transform
func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

// Stage 3: filter
func evens(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            if n%2 == 0 {
                out <- n
            }
        }
        close(out)
    }()
    return out
}

// Compose pipeline
func main() {
    for result := range evens(square(gen(1, 2, 3, 4, 5))) {
        fmt.Println(result) // 4, 16
    }
}
\`\`\`
Fan-out: nhiều goroutines đọc cùng channel. Fan-in: merge nhiều channels thành 1.`, q_en: "What is the pipeline pattern with channels in Go?", a_en: `Chain processing stages through channels — each stage is a goroutine; data flows through.
\`\`\`go
// Stage 1: generator
func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

// Stage 2: transform
func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

// Stage 3: filter
func evens(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            if n%2 == 0 {
                out <- n
            }
        }
        close(out)
    }()
    return out
}

// Compose the pipeline
func main() {
    for result := range evens(square(gen(1, 2, 3, 4, 5))) {
        fmt.Println(result) // 4, 16
    }
}
\`\`\`
Fan-out: multiple goroutines reading from the same channel. Fan-in: merging multiple channels into one.` },
  { id: 1052, category: "Golang", subcategory: "Production", level: "advanced", q: "Go production best practices?", a: "Khi đưa ứng dụng Go lên production, cần đảm bảo structured logging (dùng slog, zap, hoặc zerolog) để log dạng JSON dễ parse bởi log aggregators, graceful shutdown để không mất request đang xử lý, và health check endpoints cho load balancer biết trạng thái service. Về configuration, nên đọc từ environment variables (dùng viper hoặc envconfig), Dockerfile dùng multi-stage build với scratch hoặc distroless base image để giảm attack surface và size xuống còn 5-15MB. Chất lượng code được đảm bảo bằng race detector (`go test -race`) trong CI pipeline và golangci-lint để catch lỗi sớm. Cuối cùng, luôn propagate context xuyên suốt request chain, cấu hình connection pooling hợp lý cho database, và expose metrics qua Prometheus để monitoring hiệu năng.", q_en: "What are Go production best practices?", a_en: "For production Go services: use structured logging (slog, zap, zerolog) outputting JSON for log aggregators; implement graceful shutdown to avoid losing in-flight requests; expose health check endpoints for load balancers. For configuration, read from environment variables (viper, envconfig). Use multi-stage Docker builds with scratch or distroless to reduce attack surface and shrink image size to 5-15MB. Enforce quality via race detector (`go test -race`) in CI and golangci-lint for early error detection. Always propagate context through the full request chain, configure database connection pooling properly, and expose Prometheus metrics for performance monitoring." },
  { id: 1053, category: "Golang", subcategory: "Production", level: "advanced", q: "Docker image cho Go app tối ưu thế nào?", a: "Cách tối ưu nhất là dùng multi-stage build: stage đầu tiên sử dụng image `golang:1.22-alpine` để compile source thành binary, stage thứ hai chỉ dùng `scratch` (image rỗng hoàn toàn) hoặc `gcr.io/distroless/static` rồi copy binary vào, cho ra final image chỉ 5-15MB thay vì hơn 1GB của golang base image. Để binary chạy được trên scratch image, cần set `CGO_ENABLED=0` khi build để tạo static binary không phụ thuộc vào thư viện C bên ngoài. Nên tách layer `COPY go.mod go.sum` và `RUN go mod download` riêng trước khi copy source code, để Docker cache lại dependency layer và chỉ rebuild khi dependency thay đổi, giúp tăng tốc build đáng kể.", q_en: "How do you optimize a Docker image for a Go app?", a_en: "Use multi-stage builds: the first stage uses `golang:1.22-alpine` to compile the binary; the second stage uses `scratch` (empty image) or `gcr.io/distroless/static` and only copies the binary in — yielding a final image of 5-15MB versus 1GB+ for the full golang base image. Set `CGO_ENABLED=0` at build time to produce a fully static binary that runs on scratch without external C libraries. Split `COPY go.mod go.sum` and `RUN go mod download` into their own layer before copying source code so Docker caches the dependency layer and only rebuilds it when dependencies change, significantly speeding up builds." },
  { id: 1054, category: "Golang", subcategory: "Production", level: "intermediate", q: "Structured logging trong Go dùng gì?", a: "Từ Go 1.21, stdlib cung cấp package `log/slog` cho structured logging với cú pháp `slog.Info(\"user created\", \"id\", user.ID, \"email\", user.Email)`, output ra JSON có cấu trúc rõ ràng thay vì chuỗi text khó parse. Slog hỗ trợ các mức log chuẩn (Debug, Info, Warn, Error) và cho phép tùy chỉnh handler để thay đổi format hoặc destination output. Trước khi có slog, cộng đồng Go dùng zap (Uber, tối ưu hiệu năng cao nhất) hoặc zerolog (zero allocation) cho structured logging; cả hai vẫn phổ biến trong production vì có thêm nhiều tính năng nâng cao. Ưu điểm lớn nhất của structured logging là log dạng key-value pairs dễ dàng được index và query bởi các log aggregator như ELK Stack, Datadog, hay Grafana Loki.", q_en: "What do you use for structured logging in Go?", a_en: "Since Go 1.21, the stdlib provides `log/slog` for structured logging: `slog.Info(\"user created\", \"id\", user.ID, \"email\", user.Email)` outputs clean JSON instead of hard-to-parse text. Slog supports standard log levels (Debug, Info, Warn, Error) and allows custom handlers to change format or output destination. Before slog, the community used zap (Uber, highest performance) or zerolog (zero allocation) — both remain popular in production for their advanced features. The key advantage of structured logging is that key-value pairs are easily indexed and queried by log aggregators like ELK Stack, Datadog, or Grafana Loki." },
  { id: 1055, category: "Golang", subcategory: "Production", level: "intermediate", q: "Go vs Node.js khi nào nên chọn Go?", a: "Chọn Go khi: CPU-intensive tasks, high concurrency (100K+ connections), microservices, CLI tools, system programming, cần type safety mạnh. Chọn Node.js khi: full-stack JS, rapid prototyping, npm ecosystem, real-time (Socket.io), team quen JS. Go nhanh hơn ~10-50x cho compute, Node.js ecosystem lớn hơn.", q_en: "Go vs Node.js: when should you choose Go?", a_en: "Choose Go when: CPU-intensive workloads, high concurrency (100K+ connections), microservices, CLI tools, systems programming, or when strong type safety is essential. Choose Node.js when: full-stack JavaScript, rapid prototyping, leveraging the npm ecosystem, real-time features (Socket.io), or when the team is already JavaScript-focused. Go is roughly 10-50x faster for compute-heavy tasks; Node.js has a larger ecosystem." },
]
