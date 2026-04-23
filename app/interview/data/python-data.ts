import type { QAItem } from "../interview-data";

export const PYTHON_DATA: QAItem[] = [
  // ── Core Language ────────────────────────────────────────────────────────────
  {
    id: 3100,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "Python là ngôn ngữ interpreted hay compiled?",
    a: "Python là interpreted — CPython compile source code sang bytecode (.pyc) rồi PVM (Python Virtual Machine) thực thi, không compile thẳng sang machine code như C/C++. (1) Interpreted: dễ debug, cross-platform (2) Bytecode: nhanh hơn pure interpretation (3) PyPy dùng JIT compiler, nhanh hơn CPython đáng kể.",
    q_en: "Is Python interpreted or compiled?",
    a_en: "Python is interpreted — CPython compiles source to bytecode (.pyc), then the PVM executes it. Not compiled to machine code like C/C++. (1) Interpreted: easy to debug, cross-platform (2) Bytecode: faster than pure interpretation (3) PyPy uses JIT, significantly faster than CPython.",
  },
  {
    id: 3101,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Python quản lý bộ nhớ như thế nào?",
    a: "Python dùng các cơ chế sau:\n- **(1) Reference counting:** Mỗi object đếm số tham chiếu, về 0 thì giải phóng ngay.\n- **(2) Garbage Collector:** (module `gc`) Phát hiện và thu hồi circular references mà reference counting không xử lý được.\n- **(3) Memory Pool:** (PyMalloc) Tối ưu allocation cho objects nhỏ < 512 bytes.\n\n**Pitfall:** Circular reference giữa hai objects sẽ không bao giờ được reference counting giải phóng.",
    q_en: "How does Python manage memory?",
    a_en: "Python uses two mechanisms: (1) Reference counting — each object tracks reference count; reaches 0 → freed immediately (2) Garbage Collector (gc module) — detects circular references that reference counting misses (3) PyMalloc memory pool — optimizes allocation for small objects < 512 bytes. Pitfall: Circular references are never freed by reference counting alone.",
  },
  {
    id: 3102,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "Mutable vs Immutable types trong Python?",
    a: "**Immutable** (không thể thay đổi sau khi tạo): `int`, `float`, `str`, `tuple`, `frozenset`, `bytes`.\n**Mutable** (có thể thay đổi tại chỗ): `list`, `dict`, `set`, `bytearray`.\n\n**Pitfall:** Không dùng mutable làm default argument — `def func(lst=[])` sẽ share cùng list giữa các lần gọi.",
    q_en: "What are mutable vs immutable types in Python?",
    a_en: "Immutable (cannot change after creation): `int`, `float`, `str`, `tuple`, `frozenset`, `bytes`. Mutable (can modify in place): `list`, `dict`, `set`, `bytearray`. Pitfall: Never use mutable as a default argument — `def func(lst=[])` shares the same list across all calls.",
  },
  {
    id: 3103,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "`list`, `tuple`, `set`, `dict` — khi nào dùng cái nào?",
    a: "Dùng `list` khi cần ordered collection có thể thay đổi. Dùng `tuple` cho dữ liệu bất biến, làm dict key, trả về nhiều giá trị từ function. Dùng `set` để loại bỏ duplicate và kiểm tra membership O(1). Dùng `dict` cho key-value lookup O(1). Pitfall: `set` và `dict` không ordered trước Python 3.7; `dict` từ Python 3.7+ giữ insertion order.",
    q_en: "When to use list, tuple, set, dict?",
    a_en: "Use `list` for ordered mutable collections. Use `tuple` for immutable data, dict keys, or returning multiple values. Use `set` to remove duplicates and O(1) membership checks. Use `dict` for O(1) key-value lookups. Pitfall: `set` and `dict` were unordered before Python 3.7; `dict` maintains insertion order from 3.7+.",
  },
  {
    id: 3104,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Generator và `yield` là gì? Tại sao dùng?",
    a: `Generator là function dùng \`yield\` trả về iterator — tính giá trị lazily, từng phần tử khi được yêu cầu. Tiết kiệm bộ nhớ so với list vì không nạp toàn bộ dữ liệu vào RAM.
\`\`\`python
# List — toàn bộ vào RAM
squares_list = [x**2 for x in range(1_000_000)]

# Generator — lazy, từng phần tử khi cần
def squares_gen(n):
    for x in range(n):
        yield x**2

gen = squares_gen(1_000_000)
print(next(gen))  # 0 — chỉ tính khi gọi next()
\`\`\`
Dùng khi: xử lý file lớn, streaming data, infinite sequences.`,
    q_en: "What are generators and `yield`? Why use them?",
    a_en: `\`\`\`python
def squares_gen(n):
    for x in range(n):
        yield x**2  # Pauses here each iteration

gen = squares_gen(1_000_000)
print(next(gen))  # 0 — computed lazily
\`\`\`
Use when: large file processing, streaming data, infinite sequences. Memory-efficient vs list comprehension.`,
  },
  {
    id: 3105,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Decorator là gì? Viết decorator đơn giản.",
    a: `Decorator là higher-order function nhận một function và trả về function mới với hành vi bổ sung — cú pháp \`@decorator\` là syntactic sugar. Dùng \`@functools.wraps\` để giữ metadata của function gốc.
\`\`\`python
import functools, time

def timer(func):
    @functools.wraps(func)  # Giữ __name__, __doc__
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        print(f"{func.__name__}: {time.perf_counter()-start:.4f}s")
        return result
    return wrapper

@timer
def slow():
    time.sleep(1)
\`\`\`
Pitfall: Không dùng \`@functools.wraps\` → mất \`__name__\`, \`__doc__\` của function gốc.`,
    q_en: "What is a decorator? How do you write a simple one?",
    a_en: `Decorator is a higher-order function that wraps another function to add behavior. \`@decorator\` is syntactic sugar.
\`\`\`python
import functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result
    return wrapper
\`\`\`
Pitfall: Always use @functools.wraps — otherwise __name__ and __doc__ are lost.`,
  },
  {
    id: 3106,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Context Manager và `with` statement hoạt động thế nào?",
    a: `Context manager quản lý tài nguyên tự động qua \`__enter__\` và \`__exit__\`. \`with\` đảm bảo cleanup chạy dù có exception hay không.
\`\`\`python
from contextlib import contextmanager

@contextmanager
def db_transaction(session):
    try:
        yield session
        await session.commit()
    except Exception:
        await session.rollback()
        raise

# Class-based
class Timer:
    def __enter__(self):
        import time; self.start = time.perf_counter(); return self
    def __exit__(self, *args):
        self.elapsed = time.perf_counter() - self.start
\`\`\``,
    q_en: "How does the `with` statement and context manager work?",
    a_en: `Context manager handles resource setup/teardown via __enter__ and __exit__. with ensures cleanup runs even on exception.
\`\`\`python
from contextlib import contextmanager

@contextmanager
def managed_resource():
    resource = acquire()
    try:
        yield resource
    finally:
        release(resource)
\`\`\``,
  },
  {
    id: 3108,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Closure là gì? Khác với lambda thế nào?",
    a: `Closure là nested function "ghi nhớ" biến từ enclosing scope dù outer function đã kết thúc. Lambda là anonymous function một dòng — thường dùng cho logic đơn giản tức thời.
\`\`\`python
# Closure — nhớ state
def make_counter(start=0):
    count = [start]
    def counter():
        count[0] += 1
        return count[0]
    return counter

c = make_counter()
print(c(), c(), c())  # 1, 2, 3

# Lambda — function tức thời
double = lambda x: x * 2
\`\`\`
Pitfall: Closure trong vòng lặp — mọi closure đều tham chiếu cùng biến vòng lặp, không phải giá trị tại thời điểm tạo.`,
    q_en: "What is a closure? How does it differ from a lambda?",
    a_en: `Closure is a nested function that remembers variables from its enclosing scope. Lambda is a one-line anonymous function.
\`\`\`python
def make_multiplier(n):
    return lambda x: x * n  # Closure over n

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5), triple(5))  # 10, 15
\`\`\`
Pitfall: Closures in loops capture the loop variable by reference, not by value.`,
  },
  {
    id: 3109,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "Shallow copy vs Deep copy — khác nhau thế nào?",
    a: "Shallow copy tạo object mới nhưng elements bên trong vẫn tham chiếu cùng objects gốc — thay đổi mutable elements sẽ ảnh hưởng cả hai bản. Deep copy tạo hoàn toàn độc lập, copy đệ quy toàn bộ. Dùng `copy.copy()` cho shallow và `copy.deepcopy()` cho deep. Pitfall: `list.copy()`, `list[:]`, `dict.copy()` đều là shallow copy.",
    q_en: "Shallow copy vs deep copy — what's the difference?",
    a_en: "Shallow copy creates a new object but inner elements still reference the same objects — mutating nested elements affects both copies. Deep copy is fully independent, recursively copies everything. Use `copy.copy()` for shallow, `copy.deepcopy()` for deep. Pitfall: `list.copy()`, `list[:]`, `dict.copy()` are all shallow copies.",
  },
  {
    id: 3110,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "Exception handling — `try/except/else/finally` hoạt động thế nào?",
    a: `(1) try — khối code có thể raise exception (2) except — xử lý exception (3) else — chạy nếu KHÔNG có exception trong try (4) finally — LUÔN chạy, dù có exception hay không — dùng để cleanup.
\`\`\`python
try:
    result = 10 / divisor
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError):
    print("Type or value error")
else:
    print(f"Success: {result}")  # Chỉ khi không có exception
finally:
    print("Cleanup")  # Luôn chạy
\`\`\``,
    q_en: "How does `try/except/else/finally` work in Python?",
    a_en: `(1) try — code that may raise an exception (2) except — handles the exception (3) else — runs only if no exception occurred (4) finally — always runs, exception or not.
\`\`\`python
try:
    result = risky_operation()
except SpecificError as e:
    handle(e)
else:
    use(result)   # Only when no exception
finally:
    cleanup()     # Always runs
\`\`\``,
  },
  {
    id: 3111,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "`is` vs `==` — khác nhau gì?",
    a: "`==` so sánh giá trị (gọi `__eq__`). `is` so sánh identity — hai biến có trỏ đến cùng object trong memory không. Pitfall: CPython cache integers nhỏ (-5 đến 256) và string interning — `x = 256; y = 256; x is y` có thể là `True` nhưng `x = 257; y = 257; x is y` có thể là `False`. Chỉ dùng `is` để so sánh với `None`, `True`, `False`.",
    q_en: "`is` vs `==` — what's the difference?",
    a_en: "`==` compares value (calls `__eq__`). `is` compares identity — whether both variables point to the same object in memory. Pitfall: CPython caches small integers (-5 to 256) and interns strings — this makes `is` behave unexpectedly. Only use `is` to compare with `None`, `True`, `False`.",
  },
  {
    id: 3112,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "`functools.lru_cache` hoạt động thế nào? Khi nào dùng?",
    a: `\`lru_cache\` (Least Recently Used cache) là decorator memoize kết quả của function — lần sau gọi cùng args sẽ trả về cache thay vì tính lại. Function phải có hashable arguments.
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n: int) -> int:
    if n < 2: return n
    return fibonacci(n-1) + fibonacci(n-2)

# Không cache (default: cached forever)
@lru_cache(maxsize=None)  # Cache không giới hạn
def expensive_lookup(key): ...

fibonacci.cache_info()   # hits, misses, maxsize, currsize
fibonacci.cache_clear()  # Xóa cache
\`\`\`
Dùng cho: pure functions với expensive computation, recursive algorithms.`,
    q_en: "How does `functools.lru_cache` work? When to use it?",
    a_en: `lru_cache memoizes function results — subsequent calls with same args return cached result instead of recomputing. Arguments must be hashable.
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
\`\`\`
Use for: pure functions with expensive computation, recursive algorithms.`,
  },
  {
    id: 3113,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "f-string, `.format()`, `%` formatting — nên dùng cái nào?",
    a: 'Dùng f-string (Python 3.6+) — nhanh nhất, dễ đọc nhất, hỗ trợ expression trực tiếp. `f"Name: {name!r}, Score: {score:.2f}"`. `.format()` khi cần template string tái sử dụng. `%` formatting là cũ, không nên dùng trong code mới. \n\n**Ví dụ:** `f"2+2={2+2}"` in ra `"2+2=4"` — expression được evaluate ngay trong string.',
    q_en: "f-string, `.format()`, `%` formatting — which to use?",
    a_en: 'Use f-strings (Python 3.6+) — fastest, most readable, supports inline expressions. `f"Name: {name!r}, Score: {score:.2f}"`. Use `.format()` for reusable templates. Avoid `%` formatting in new code. \n\n**Example:** `f"2+2={2+2}"` prints `"2+2=4"` — expressions evaluated inline.',
  },

  // ── OOP ──────────────────────────────────────────────────────────────────────
  {
    id: 3115,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "4 nguyên lý OOP trong Python?",
    a: "(1) Encapsulation — đóng gói data + methods, dùng `_` (protected) và `__` (name mangling) (2) Inheritance — `class Child(Parent)`, hỗ trợ multiple inheritance, dùng `super()` (3) Polymorphism — cùng method tên, hành vi khác nhau tùy class; duck typing (4) Abstraction — ẩn implementation qua `ABC` + `@abstractmethod`. Pitfall: Python không có `private` thật sự — `__attr` chỉ là name mangling, vẫn access được qua `_ClassName__attr`.",
    q_en: "What are the 4 OOP principles in Python?",
    a_en: "(1) Encapsulation — bundle data + methods, use `_` (protected) and `__` (name mangling) (2) Inheritance — `class Child(Parent)`, multiple inheritance supported (3) Polymorphism — same method name, different behavior per class; duck typing (4) Abstraction — hide implementation via `ABC` + `@abstractmethod`. Pitfall: Python has no true private — `__attr` is name mangling, still accessible via `_ClassName__attr`.",
  },
  {
    id: 3116,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "`@classmethod` vs `@staticmethod` vs instance method?",
    a: `Instance method nhận \`self\` — có access vào instance và class. \`@classmethod\` nhận \`cls\` — access class, thường dùng làm factory. \`@staticmethod\` không nhận \`self\` hay \`cls\` — utility function liên quan đến class.
\`\`\`python
class User:
    _count = 0

    def __init__(self, name):
        self.name = name
        User._count += 1

    def greet(self):            # Instance method
        return f"Hi, {self.name}"

    @classmethod
    def from_dict(cls, data):   # Factory — dùng cls thay vì User
        return cls(data['name'])

    @staticmethod
    def validate_name(name):    # Utility — không cần self/cls
        return len(name) >= 2
\`\`\``,
    q_en: "@classmethod vs @staticmethod vs instance method?",
    a_en: `Instance method receives self. @classmethod receives cls — often used as factory. @staticmethod — utility, no self or cls.
\`\`\`python
class Pizza:
    @classmethod
    def from_dict(cls, data):   # Factory pattern
        return cls(data['price'])

    @staticmethod
    def is_valid_price(p):      # Pure utility
        return p > 0
\`\`\``,
  },
  {
    id: 3117,
    category: "Python",
    subcategory: "OOP",
    level: "advanced",
    q: "MRO (Method Resolution Order) là gì? Python giải quyết diamond problem thế nào?",
    a: `MRO xác định thứ tự Python tìm method trong cây kế thừa, dùng thuật toán C3 Linearization. Giải quyết diamond problem bằng cách đảm bảo mỗi class chỉ xuất hiện một lần.
\`\`\`python
class A:
    def method(self): print("A")

class B(A):
    def method(self): super().method(); print("B")

class C(A):
    def method(self): super().method(); print("C")

class D(B, C): pass

D().method()   # A → C → B (theo MRO)
print(D.__mro__)  # D, B, C, A, object
\`\`\`
Xem MRO: \`ClassName.__mro__\` hoặc \`ClassName.mro()\`.`,
    q_en: "What is MRO? How does Python solve the diamond problem?",
    a_en: `MRO defines the order Python searches for methods in the inheritance tree, using C3 Linearization. Solves the diamond problem by ensuring each class appears only once.
\`\`\`python
class D(B, C): pass
print(D.__mro__)  # D → B → C → A → object
D().method()      # Calls in MRO order
\`\`\``,
  },
  {
    id: 3118,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "`@property` decorator dùng thế nào?",
    a: `\`@property\` cho phép define getter/setter/deleter cho attribute, truy cập như attribute thường nhưng có validation logic.
\`\`\`python
class Temperature:
    def __init__(self, celsius: float):
        self._celsius = celsius

    @property
    def celsius(self) -> float:
        return self._celsius

    @celsius.setter
    def celsius(self, value: float):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value

    @property
    def fahrenheit(self) -> float:  # Read-only derived property
        return self._celsius * 9/5 + 32

t = Temperature(25)
t.celsius = 30      # Gọi setter tự động
print(t.fahrenheit) # 86.0
\`\`\``,
    q_en: "How does the `@property` decorator work?",
    a_en: `@property lets you define getter/setter/deleter, accessed like a plain attribute but with validation.
\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self): return self._radius

    @radius.setter
    def radius(self, r):
        if r < 0: raise ValueError()
        self._radius = r

    @property
    def area(self): return 3.14 * self._radius ** 2
\`\`\``,
  },
  {
    id: 3119,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "Abstract class trong Python — dùng thế nào?",
    a: `Dùng \`ABC\` + \`@abstractmethod\` để tạo abstract class. Class con bắt buộc implement tất cả abstract methods, nếu không sẽ không instantiate được.
\`\`\`python
from abc import ABC, abstractmethod

class Repository(ABC):
    @abstractmethod
    async def get_by_id(self, id: int): ...

    @abstractmethod
    async def create(self, data: dict): ...

    def find_all(self):          # Concrete method — có thể kế thừa
        return self.get_all()

class UserRepository(Repository):
    async def get_by_id(self, id): ...   # Bắt buộc implement
    async def create(self, data): ...    # Bắt buộc implement

# Repository()  # TypeError — cannot instantiate abstract class
\`\`\``,
    q_en: "How are abstract classes used in Python?",
    a_en: `Use ABC + @abstractmethod. Subclasses must implement all abstract methods or they cannot be instantiated.
\`\`\`python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self) -> str: ...

class Dog(Animal):
    def speak(self): return "Woof!"

# Animal()  # TypeError — abstract class
Dog()       # OK
\`\`\``,
  },
  {
    id: 3120,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "`@dataclass` là gì? Lợi ích so với class thường?",
    a: `\`@dataclass\` tự động generate \`__init__\`, \`__repr__\`, \`__eq__\` — giảm boilerplate đáng kể.
\`\`\`python
from dataclasses import dataclass, field
from typing import List

@dataclass
class User:
    name: str
    email: str
    age: int = 0
    tags: List[str] = field(default_factory=list)
    # __init__, __repr__, __eq__ tự động được generate!

@dataclass(frozen=True)  # Immutable như tuple
class Point:
    x: float
    y: float

p = Point(1.0, 2.0)
# p.x = 3.0  # FrozenInstanceError
\`\`\`
Ưu điểm so với \`namedtuple\`: có default values, methods, mutable (nếu không frozen).`,
    q_en: "What is `@dataclass`? Benefits over regular classes?",
    a_en: `@dataclass auto-generates __init__, __repr__, __eq__ — reduces boilerplate significantly.
\`\`\`python
@dataclass
class Config:
    host: str = 'localhost'
    port: int = 8080
    debug: bool = False

# Equivalent to writing __init__, __repr__, __eq__ manually
c = Config(port=3000)
print(c)  # Config(host='localhost', port=3000, debug=False)
\`\`\``,
  },
  {
    id: 3121,
    category: "Python",
    subcategory: "OOP",
    level: "advanced",
    q: "`__slots__` là gì? Khi nào nên dùng?",
    a: `\`__slots__\` giới hạn attributes của instance, loại bỏ \`__dict__\` — tiết kiệm bộ nhớ ~40-60% khi có nhiều instances.
\`\`\`python
class PointNormal:
    def __init__(self, x, y):
        self.x, self.y = x, y
# Mỗi instance có __dict__ → ~200 bytes

class PointSlots:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x, self.y = x, y
# Không có __dict__ → ~56 bytes

# p = PointSlots(1, 2)
# p.z = 3  # AttributeError — không thể thêm attribute mới
\`\`\`
Dùng khi: tạo hàng triệu instances nhỏ (data processing, game objects, ML features).`,
    q_en: "What is `__slots__`? When should you use it?",
    a_en: `__slots__ restricts instance attributes, removes __dict__ — saves 40-60% memory with many instances.
\`\`\`python
class Point:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x, self.y = x, y
# p.z = 1  # AttributeError
\`\`\`
Use when creating millions of small instances (data processing, game objects).`,
  },
  {
    id: 3122,
    category: "Python",
    subcategory: "OOP",
    level: "intermediate",
    q: "Các dunder methods quan trọng nhất cần biết?",
    a: `(1) \`__repr__\` — developer repr (eval-safe), \`__str__\` — user-friendly string (2) \`__len__\`, \`__getitem__\`, \`__setitem__\` — sequence protocol (3) \`__enter__\`/\`__exit__\` — context manager (4) \`__eq__\`, \`__lt__\`, \`__hash__\` — comparison và hashability (5) \`__call__\` — cho phép gọi instance như function (6) \`__iter__\`/\`__next__\` — iterator protocol. Pitfall: Khi override \`__eq__\`, Python tự động set \`__hash__ = None\` — phải define \`__hash__\` thủ công nếu muốn dùng object trong set/dict.`,
    q_en: "What are the most important dunder (magic) methods to know?",
    a_en: "(1) `__repr__` — developer repr, `__str__` — user string (2) `__len__`, `__getitem__` — sequence protocol (3) `__enter__`/`__exit__` — context manager (4) `__eq__`, `__hash__` — comparison (5) `__call__` — callable instances (6) `__iter__`/`__next__` — iterator. Pitfall: Overriding `__eq__` sets `__hash__ = None` — must define `__hash__` manually if needed in sets/dicts.",
  },

  // ── Concurrency ───────────────────────────────────────────────────────────────
  {
    id: 3123,
    category: "Python",
    subcategory: "Concurrency",
    level: "intermediate",
    q: "GIL là gì? Ảnh hưởng đến threading và multiprocessing thế nào?",
    a: "GIL (Global Interpreter Lock) là mutex trong CPython đảm bảo chỉ một thread thực thi Python bytecode tại một thời điểm. Ảnh hưởng: (1) I/O-bound tasks — threading vẫn hiệu quả vì GIL được release khi chờ I/O (network, file, DB) (2) CPU-bound tasks — threading KHÔNG cải thiện do GIL → phải dùng `multiprocessing` để bypass GIL và chạy song song thực sự. Pitfall: GIL không có trong Jython và IronPython; Python 3.13+ có thể disable GIL (experimental).",
    q_en: "What is the GIL? How does it affect threading and multiprocessing?",
    a_en: "GIL (Global Interpreter Lock) ensures only one thread runs Python bytecode at a time in CPython. Impact: (1) I/O-bound — threading works fine; GIL released while waiting for I/O (2) CPU-bound — threading gives no speedup; use `multiprocessing` to bypass GIL. Pitfall: PyPy, Jython, IronPython have different GIL behavior; Python 3.13+ can disable GIL experimentally.",
  },
  {
    id: 3124,
    category: "Python",
    subcategory: "Concurrency",
    level: "intermediate",
    q: "Threading vs Multiprocessing vs Asyncio — khi nào dùng cái nào?",
    a: "Dùng `asyncio` cho I/O-bound với nhiều concurrent operations (web APIs, DB queries) — single thread, cooperative concurrency, overhead thấp nhất. Dùng `threading` cho I/O-bound với thư viện blocking không hỗ trợ async. Dùng `multiprocessing` cho CPU-bound (ML training, image processing, data transformation) — bypass GIL, chạy trên nhiều CPU cores thực sự, nhưng overhead cao hơn (IPC, memory). Pitfall: `asyncio` không giúp gì cho CPU-bound — dùng `ProcessPoolExecutor` kết hợp với asyncio.",
    q_en: "Threading vs Multiprocessing vs Asyncio — when to use each?",
    a_en: "Use `asyncio` for I/O-bound with many concurrent ops (web APIs, DB) — single thread, lowest overhead. Use `threading` for I/O-bound with blocking libraries. Use `multiprocessing` for CPU-bound (ML, image processing) — bypasses GIL, true parallelism. Pitfall: asyncio does not help CPU-bound work — combine with ProcessPoolExecutor.",
  },
  {
    id: 3125,
    category: "Python",
    subcategory: "Concurrency",
    level: "intermediate",
    q: "`async/await` và event loop hoạt động thế nào?",
    a: `Event loop quản lý coroutines. Khi coroutine gặp \`await\`, nó tạm dừng và nhường control để event loop chạy coroutine khác. Đây là cooperative concurrency — không phải parallelism thực sự.
\`\`\`python
import asyncio, httpx

async def fetch(url: str) -> dict:
    async with httpx.AsyncClient() as client:
        r = await client.get(url)  # Yield control tại đây
        return r.json()

async def main():
    # Chạy 3 requests đồng thời (concurrent), không phải song song
    results = await asyncio.gather(
        fetch("/users/1"),
        fetch("/users/2"),
        fetch("/users/3"),
    )

asyncio.run(main())
\`\`\``,
    q_en: "How do `async/await` and the event loop work?",
    a_en: `Event loop manages coroutines. When a coroutine hits await, it pauses and yields control to run other coroutines.
\`\`\`python
async def main():
    # Concurrent (not parallel) — all running "at once" via event loop
    results = await asyncio.gather(
        fetch_user(1),
        fetch_user(2),
        fetch_user(3),
    )
\`\`\``,
  },
  {
    id: 3126,
    category: "Python",
    subcategory: "Concurrency",
    level: "advanced",
    q: "`asyncio.gather` vs `asyncio.TaskGroup` — khác nhau gì?",
    a: `\`asyncio.gather\` (Python 3.4+): chạy song song, trả về list kết quả. \`asyncio.TaskGroup\` (Python 3.11+) — recommended cách mới: nếu một task fail, các tasks còn lại bị cancel tự động.
\`\`\`python
# gather — return_exceptions để không propagate lỗi
results = await asyncio.gather(
    task1(), task2(), task3(),
    return_exceptions=True
)

# TaskGroup — structured concurrency (recommended 3.11+)
async with asyncio.TaskGroup() as tg:
    t1 = tg.create_task(task1())
    t2 = tg.create_task(task2())
# Tất cả tasks xong khi thoát context
# Nếu 1 task raise exception → cancel tasks còn lại
print(t1.result(), t2.result())
\`\`\``,
    q_en: "`asyncio.gather` vs `asyncio.TaskGroup` — what's the difference?",
    a_en: `gather (3.4+): runs coroutines concurrently, returns results list. TaskGroup (3.11+, recommended): if one task fails, remaining tasks are cancelled automatically — structured concurrency.
\`\`\`python
async with asyncio.TaskGroup() as tg:
    t1 = tg.create_task(coro1())
    t2 = tg.create_task(coro2())
# All done when context exits; exception cancels others
\`\`\``,
  },
  {
    id: 3127,
    category: "Python",
    subcategory: "Concurrency",
    level: "advanced",
    q: "Race condition là gì? Cách phòng tránh trong asyncio?",
    a: `Race condition xảy ra khi nhiều coroutines đọc-modify-write shared state, kết quả phụ thuộc vào thứ tự thực thi. Giải quyết bằng \`asyncio.Lock\`.
\`\`\`python
# Race condition
counter = 0
async def increment():
    global counter
    current = counter
    await asyncio.sleep(0)  # Yield — có thể bị preempt!
    counter = current + 1   # Ghi lại giá trị cũ

# Fix với Lock
lock = asyncio.Lock()
async def safe_increment():
    async with lock:
        global counter
        counter += 1  # Atomic trong lock context
\`\`\`
Semaphore: giới hạn số coroutines concurrent. \`asyncio.Semaphore(10)\` tối đa 10 concurrent requests.`,
    q_en: "What is a race condition? How to prevent it in asyncio?",
    a_en: `Race condition occurs when multiple coroutines read-modify-write shared state. Fix with asyncio.Lock.
\`\`\`python
lock = asyncio.Lock()
semaphore = asyncio.Semaphore(10)  # Max 10 concurrent

async def safe_update():
    async with lock:
        shared_state += 1

async def rate_limited_fetch(url):
    async with semaphore:
        return await fetch(url)
\`\`\``,
  },

  // ── FastAPI & Backend ─────────────────────────────────────────────────────────
  {
    id: 3128,
    category: "Python",
    subcategory: "FastAPI",
    level: "beginner",
    q: "FastAPI là gì? Ưu điểm so với Flask và Django?",
    a: "FastAPI là modern Python web framework dựa trên Starlette (ASGI) + Pydantic. \n\n**Ưu điểm:** (1) Async native — ~20K RPS, Flask/Django ~4-5K RPS (2) Auto OpenAPI docs — Swagger UI + ReDoc tự động từ type hints (3) Type-based validation — Pydantic validate request/response (4) Dependency Injection built-in (5) ASGI hỗ trợ WebSocket, HTTP/2. Dùng FastAPI cho: microservices, AI/ML serving, real-time APIs. Django vẫn tốt cho enterprise apps với admin panel và nhiều features built-in.",
    q_en: "What is FastAPI? How does it compare to Flask and Django?",
    a_en: "FastAPI is a modern Python framework built on Starlette (ASGI) + Pydantic. \n\n**Advantages:** (1) Async native — ~20K RPS vs Flask/Django ~4-5K RPS (2) Auto OpenAPI docs from type hints (3) Pydantic type-based validation (4) Built-in Dependency Injection (5) WebSocket, HTTP/2 support. Use for: microservices, AI/ML serving, real-time APIs.",
  },
  {
    id: 3129,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "Dependency Injection trong FastAPI hoạt động thế nào?",
    a: `\`Depends()\` inject dependencies vào path operations — tự động resolve, supports chaining và cleanup.
\`\`\`python
from fastapi import Depends

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session   # cleanup sau khi request xong

class Pagination:
    def __init__(self, page: int = 1, size: int = 20):
        self.offset = (page - 1) * size
        self.limit = min(size, 100)

@app.get("/users")
async def list_users(
    db = Depends(get_db),           # Injected automatically
    pg: Pagination = Depends(),     # Class-based DI
    user = Depends(get_current_user)
):
    ...
\`\`\`
\n\n**Lợi ích:** testable (override dependency trong test), reusable, separation of concerns.`,
    q_en: "How does Dependency Injection work in FastAPI?",
    a_en: `Depends() injects dependencies into path operations — auto-resolved, supports chaining and cleanup.
\`\`\`python
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session  # cleanup after request

@app.get("/items")
async def list_items(
    db = Depends(get_db),
    user = Depends(get_current_user),
):
    ...
\`\`\``,
  },
  {
    id: 3130,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "Pydantic validation trong FastAPI hoạt động thế nào?",
    a: `FastAPI dùng Pydantic model để tự động validate request body, query params, path params. Trả về 422 Unprocessable Entity nếu invalid.
\`\`\`python
from pydantic import BaseModel, EmailStr, Field, field_validator

class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    email: EmailStr
    age: int = Field(ge=0, le=150)

    @field_validator('name')
    @classmethod
    def name_alpha(cls, v: str) -> str:
        if not v.replace(' ', '').isalpha():
            raise ValueError('Only letters allowed')
        return v.strip().title()

    model_config = {"from_attributes": True}  # Pydantic v2

@app.post("/users", status_code=201)
async def create_user(user: UserCreate):  # Auto-validated!
    ...
\`\`\``,
    q_en: "How does Pydantic validation work in FastAPI?",
    a_en: `FastAPI uses Pydantic to auto-validate request body, query params, path params. Returns 422 if invalid.
\`\`\`python
from pydantic import BaseModel, Field

class Item(BaseModel):
    name: str = Field(min_length=1)
    price: float = Field(gt=0)
    quantity: int = Field(ge=0)

@app.post("/items")
async def create(item: Item):  # Auto-validated
    ...
\`\`\``,
  },
  {
    id: 3131,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "Middleware trong FastAPI — viết custom middleware thế nào?",
    a: `Middleware chạy trước và sau mỗi request. Dùng \`@app.middleware("http")\` cho custom middleware.
\`\`\`python
import time, uuid
from fastapi import Request

@app.middleware("http")
async def logging_middleware(request: Request, call_next):
    request_id = str(uuid.uuid4())
    start = time.perf_counter()

    response = await call_next(request)

    duration = time.perf_counter() - start
    response.headers["X-Request-ID"] = request_id
    response.headers["X-Duration"] = f"{duration:.4f}"
    return response
\`\`\`
CORS, GZip, TrustedHost — dùng built-in middlewares. Pitfall: Middleware exception handler không bắt HTTP exceptions từ path operations — dùng \`exception_handler\` thay.`,
    q_en: "How do you write custom middleware in FastAPI?",
    a_en: `Middleware runs before/after every request.
\`\`\`python
@app.middleware("http")
async def add_timing(request: Request, call_next):
    start = time.perf_counter()
    response = await call_next(request)
    response.headers["X-Time"] = str(time.perf_counter() - start)
    return response
\`\`\``,
  },
  {
    id: 3132,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "JWT Authentication — implement đầy đủ trong FastAPI?",
    a: `(1) Hash password với bcrypt (2) Tạo JWT token khi login (3) Verify token trong dependency (4) Protect routes với \`Depends(get_current_user)\`.
\`\`\`python
from passlib.context import CryptContext
from jose import jwt, JWTError

pwd = CryptContext(schemes=["bcrypt"])
SECRET = "your-secret-key"

def create_token(user_id: int) -> str:
    return jwt.encode({"sub": str(user_id)}, SECRET, "HS256")

async def get_current_user(token = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET, ["HS256"])
        uid = payload.get("sub")
        if not uid: raise credentials_exception
    except JWTError:
        raise HTTPException(401, "Invalid token")
    return await get_user(int(uid))
\`\`\``,
    q_en: "How do you implement JWT authentication in FastAPI?",
    a_en: `(1) Hash password (bcrypt) (2) Issue JWT on login (3) Verify in dependency (4) Protect routes.
\`\`\`python
async def get_current_user(token = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET, ["HS256"])
    except JWTError:
        raise HTTPException(401)
    return await get_user(payload["sub"])
\`\`\``,
  },
  {
    id: 3133,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "Background Tasks vs Celery — khi nào dùng cái nào?",
    a: "Background Tasks: zero config, in-process, chạy sau khi response trả về client. Dùng cho: email xác nhận đơn giản, logging, non-critical async work. Celery: cần Redis/RabbitMQ broker, distributed workers, retry logic, monitoring với Flower. Dùng cho: payment processing, report generation, critical tasks cần retry. Pitfall: Background Tasks bị mất nếu server restart — Celery persist tasks trong broker.",
    q_en: "Background Tasks vs Celery — when to use each?",
    a_en: "Background Tasks: zero config, in-process, runs after response is sent. Use for: simple emails, logging, non-critical work. Celery: needs Redis/RabbitMQ, distributed workers, retry, Flower monitoring. Use for: payments, reports, critical tasks needing retry. Pitfall: BackgroundTasks are lost on server restart — Celery persists in broker.",
  },
  {
    id: 3134,
    category: "Python",
    subcategory: "FastAPI",
    level: "intermediate",
    q: "CORS là gì? Cấu hình trong FastAPI như thế nào?",
    a: `CORS (Cross-Origin Resource Sharing) là browser security mechanism ngăn requests từ origin khác. Backend phải whitelist các origins được phép.
\`\`\`python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
        "https://yourapp.com",    # Production
    ],
    allow_credentials=True,  # Cần cho cookies/auth headers
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)
\`\`\`
Pitfall: \`allow_origins=["*"]\` với \`allow_credentials=True\` sẽ bị browser từ chối — phải liệt kê explicit origins.`,
    q_en: "What is CORS? How do you configure it in FastAPI?",
    a_en: `CORS is a browser security mechanism preventing requests from different origins. Backend must whitelist allowed origins.
\`\`\`python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://prod.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`
Pitfall: allow_origins=["*"] with allow_credentials=True is rejected by browsers.`,
  },
  {
    id: 3135,
    category: "Python",
    subcategory: "FastAPI",
    level: "advanced",
    q: "Lifespan events — startup/shutdown trong FastAPI 0.95+?",
    a: `Dùng \`@asynccontextmanager\` với \`lifespan\` parameter thay vì \`@app.on_event\` (deprecated).
\`\`\`python
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await database.connect()
    redis_pool = await create_redis_pool()
    app.state.redis = redis_pool

    yield  # App đang chạy

    # Shutdown
    await database.disconnect()
    await redis_pool.aclose()

app = FastAPI(lifespan=lifespan)
\`\`\``,
    q_en: "How do you handle startup/shutdown events in FastAPI 0.95+?",
    a_en: `Use @asynccontextmanager with lifespan param instead of deprecated @app.on_event.
\`\`\`python
@asynccontextmanager
async def lifespan(app: FastAPI):
    await startup()   # Before yield
    yield
    await shutdown()  # After yield

app = FastAPI(lifespan=lifespan)
\`\`\``,
  },

  // ── Database & Testing ────────────────────────────────────────────────────────
  {
    id: 3136,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "N+1 Query Problem là gì? Cách giải quyết với SQLAlchemy?",
    a: `N+1 problem: 1 query lấy N records, rồi N queries nữa để lấy related data. Giải quyết bằng eager loading.
\`\`\`python
# N+1 problem — 1 + N queries
users = await db.execute(select(User))
for user in users.scalars():
    posts = await db.execute(  # 1 query mỗi user!
        select(Post).where(Post.user_id == user.id)
    )

# Fix: selectinload — 2 queries total
from sqlalchemy.orm import selectinload

result = await db.execute(
    select(User).options(selectinload(User.posts))
)
# 1 query lấy tất cả users + 1 query lấy posts cho tất cả user_ids

# joinedload — 1 query với JOIN (tốt khi result set nhỏ)
from sqlalchemy.orm import joinedload
\`\`\``,
    q_en: "What is the N+1 query problem? How to solve it with SQLAlchemy?",
    a_en: `N+1: 1 query fetches N records, then N more queries for related data. Fix with eager loading.
\`\`\`python
# Fix with selectinload (2 queries total)
result = await db.execute(
    select(User).options(selectinload(User.posts))
)

# Or joinedload (1 query with JOIN)
result = await db.execute(
    select(User).options(joinedload(User.profile))
)
\`\`\``,
  },
  {
    id: 3137,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "SQLAlchemy 2.0 async — setup cơ bản thế nào?",
    a: `\`\`\`python
from sqlalchemy.ext.asyncio import (
    create_async_engine, AsyncSession, async_sessionmaker
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

engine = create_async_engine(
    "postgresql+asyncpg://user:pass@localhost/db",
    pool_size=10, max_overflow=20,
)
AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)

class Base(DeclarativeBase): pass

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(unique=True, index=True)
    name: Mapped[str] = mapped_column(nullable=False)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
\`\`\``,
    q_en: "How do you set up SQLAlchemy 2.0 async with FastAPI?",
    a_en: `\`\`\`python
engine = create_async_engine(
    "postgresql+asyncpg://user:pass@localhost/db",
    pool_size=10,
)
AsyncSessionLocal = async_sessionmaker(engine)

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(unique=True)
\`\`\``,
  },
  {
    id: 3138,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "Transaction và ACID properties trong database?",
    a: "(1) Atomicity — tất cả hoặc không: nếu một bước fail, rollback toàn bộ (2) Consistency — DB luôn ở trạng thái hợp lệ trước và sau transaction (3) Isolation — transactions độc lập, không thấy uncommitted changes của nhau (4) Durability — committed data được lưu vĩnh viễn dù system crash. Trong SQLAlchemy async: `async with session.begin()` tự động commit/rollback. Pitfall: Nested transactions cần `savepoints` — SQLAlchemy hỗ trợ qua `session.begin_nested()`.",
    q_en: "What are ACID transaction properties in databases?",
    a_en: "(1) Atomicity — all or nothing: failure → rollback (2) Consistency — DB stays in valid state (3) Isolation — transactions cannot see each other's uncommitted changes (4) Durability — committed data survives crashes. In SQLAlchemy async: `async with session.begin()` auto-commits/rolls back. Pitfall: Nested transactions need savepoints — SQLAlchemy supports via `session.begin_nested()`.",
  },
  {
    id: 3139,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "Testing FastAPI với pytest và TestClient?",
    a: `Dùng \`TestClient\` cho synchronous-style test của async endpoints. Override dependencies để isolate tests.
\`\`\`python
from fastapi.testclient import TestClient
import pytest

def override_get_db():
    yield TestingSessionLocal()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

def test_create_user():
    res = client.post("/users", json={
        "name": "Alice", "email": "alice@test.com"
    })
    assert res.status_code == 201
    assert res.json()["email"] == "alice@test.com"

# Async test
@pytest.mark.asyncio
async def test_async():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        res = await ac.get("/users/1")
    assert res.status_code == 200
\`\`\``,
    q_en: "How do you test FastAPI endpoints with pytest and TestClient?",
    a_en: `\`\`\`python
client = TestClient(app)

def test_endpoint():
    response = client.post("/items", json={"name": "test", "price": 10.0})
    assert response.status_code == 201
    assert response.json()["name"] == "test"

# Override dependencies for isolation
app.dependency_overrides[get_db] = lambda: TestDB()
\`\`\``,
  },
  {
    id: 3140,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "pytest fixtures — `scope` hoạt động thế nào?",
    a: `Fixture scope xác định fixture được tạo và destroy khi nào: \`function\` (default) — mỗi test; \`class\` — mỗi test class; \`module\` — mỗi module; \`session\` — toàn bộ test session.
\`\`\`python
@pytest.fixture(scope="session")
def db_engine():   # Tạo 1 lần cho toàn bộ session
    engine = create_engine(TEST_URL)
    Base.metadata.create_all(engine)
    yield engine
    Base.metadata.drop_all(engine)

@pytest.fixture      # scope="function" — mỗi test
def db(db_engine):
    connection = db_engine.connect()
    transaction = connection.begin()
    session = Session(bind=connection)
    yield session
    session.close()
    transaction.rollback()  # Rollback sau mỗi test — isolation
\`\`\``,
    q_en: "How does pytest fixture `scope` work?",
    a_en: `Fixture scope determines when fixture is created/destroyed: function (default), class, module, session.
\`\`\`python
@pytest.fixture(scope="session")
def engine():
    eng = create_engine(TEST_DB_URL)
    Base.metadata.create_all(eng)
    yield eng
    Base.metadata.drop_all(eng)

@pytest.fixture
def db(engine):
    with engine.connect() as conn:
        tx = conn.begin()
        yield Session(bind=conn)
        tx.rollback()  # Clean state per test
\`\`\``,
  },
  {
    id: 3141,
    category: "Python",
    subcategory: "Database & Testing",
    level: "advanced",
    q: "Indexing trong database — khi nào tạo và khi nào không?",
    a: "Nên tạo index: columns thường xuyên trong WHERE/JOIN/ORDER BY, foreign keys, unique constraints, columns có high cardinality (nhiều unique values). Không tạo index: bảng nhỏ (full scan có thể nhanh hơn), columns ít query, columns có nhiều NULL, columns thường xuyên update/insert (index làm chậm write). Composite index: thứ tự columns quan trọng — `(status, created_at)` giúp query `WHERE status=? ORDER BY created_at` nhưng không giúp query chỉ dùng `created_at`. Pitfall: Quá nhiều index làm chậm INSERT/UPDATE/DELETE.",
    q_en: "Database indexing — when to create and when to avoid?",
    a_en: "Create index: columns frequently in WHERE/JOIN/ORDER BY, foreign keys, high-cardinality columns. Avoid: small tables, rarely-queried columns, frequently updated columns (slows writes). Composite index order matters — `(status, created_at)` helps `WHERE status=? ORDER BY created_at` but not `created_at` alone. Pitfall: Too many indexes slows INSERT/UPDATE/DELETE.",
  },
  {
    id: 3142,
    category: "Python",
    subcategory: "Database & Testing",
    level: "advanced",
    q: "Soft delete vs Hard delete — implement thế nào?",
    a: `Hard delete xóa vĩnh viễn. Soft delete đánh dấu \`deleted_at\`, giữ data để audit trail, undo, foreign key integrity.
\`\`\`python
from datetime import datetime
from typing import Optional

class SoftDeleteMixin:
    deleted_at: Mapped[Optional[datetime]] = mapped_column(default=None)

    @property
    def is_deleted(self) -> bool:
        return self.deleted_at is not None

class User(Base, SoftDeleteMixin):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]

# Query — lọc bỏ deleted records
stmt = select(User).where(User.deleted_at.is_(None))

# Soft delete
user.deleted_at = datetime.utcnow()
\`\`\``,
    q_en: "Soft delete vs hard delete — how to implement soft delete?",
    a_en: `Soft delete marks deleted_at instead of removing data — preserves audit trail.
\`\`\`python
class SoftDeleteMixin:
    deleted_at: Mapped[Optional[datetime]] = mapped_column(default=None)

# Query active records only
stmt = select(User).where(User.deleted_at.is_(None))

# Soft delete
user.deleted_at = datetime.utcnow()
await session.commit()
\`\`\``,
  },
  {
    id: 3143,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "Mocking với `pytest-mock` — cách dùng thế nào?",
    a: `Dùng \`mocker\` fixture từ pytest-mock để mock functions và verify calls.
\`\`\`python
async def test_register_sends_email(mocker):
    # Mock email service
    mock_send = mocker.patch(
        "app.services.email_service.send",
        new_callable=AsyncMock
    )
    mock_send.return_value = True

    await register_user(email="test@test.com")

    mock_send.assert_called_once_with(
        "test@test.com", "Welcome!"
    )

def test_with_side_effect(mocker):
    mock_api = mocker.patch("app.services.external_api.call")
    mock_api.side_effect = [{"status": "ok"}, ConnectionError()]

    assert call_api() == {"status": "ok"}
    with pytest.raises(ConnectionError):
        call_api()
\`\`\``,
    q_en: "How do you use `pytest-mock` for mocking?",
    a_en: `\`\`\`python
def test_service(mocker):
    mock_db = mocker.patch("app.services.get_user")
    mock_db.return_value = {"id": 1, "name": "Alice"}

    result = user_service.get_profile(user_id=1)
    assert result["name"] == "Alice"
    mock_db.assert_called_once_with(1)
\`\`\``,
  },
  {
    id: 3144,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "Alembic migrations — workflow cơ bản?",
    a: `Alembic quản lý database schema migrations. Workflow: tạo migration → review → apply.
\`\`\`bash
# Init
alembic init alembic

# Auto-generate từ model changes
alembic revision --autogenerate -m "add users table"

# Apply
alembic upgrade head

# Rollback 1 bước
alembic downgrade -1

# Xem lịch sử
alembic history
\`\`\`
Trong \`alembic/env.py\`, import tất cả models để autogenerate hoạt động: \`from app.models import Base; target_metadata = Base.metadata\`. Pitfall: Alembic không detect data migrations — phải viết thủ công.`,
    q_en: "What is the basic Alembic migration workflow?",
    a_en: `\`\`\`bash
alembic revision --autogenerate -m "add column"
alembic upgrade head    # Apply latest
alembic downgrade -1    # Rollback one step
alembic history         # View history
\`\`\`
In env.py: import all models so autogenerate detects changes. Pitfall: Data migrations must be written manually.`,
  },
  {
    id: 3145,
    category: "Python",
    subcategory: "Database & Testing",
    level: "advanced",
    q: "Caching strategy trong Python API — Redis pattern?",
    a: `Cache-aside pattern: application kiểm tra cache trước, nếu miss thì query DB và populate cache.
\`\`\`python
import json
from functools import wraps

def cache(key_prefix: str, ttl: int = 300):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            key = f"{key_prefix}:{args}:{kwargs}"
            cached = await redis.get(key)
            if cached:
                return json.loads(cached)

            result = await func(*args, **kwargs)
            await redis.setex(key, ttl, json.dumps(result))
            return result
        return wrapper
    return decorator

@cache("products", ttl=60)
async def get_products():
    return await db.query_products()
\`\`\`
Invalidation: \`redis.delete(key)\` khi data thay đổi.`,
    q_en: "What is the cache-aside pattern? How to implement it with Redis in Python?",
    a_en: `Cache-aside: check cache → miss → query DB → populate cache.
\`\`\`python
async def get_user(user_id: int):
    cached = await redis.get(f"user:{user_id}")
    if cached:
        return json.loads(cached)

    user = await db.get_user(user_id)
    await redis.setex(f"user:{user_id}", 300, json.dumps(user))
    return user
\`\`\``,
  },
  {
    id: 3146,
    category: "Python",
    subcategory: "Database & Testing",
    level: "intermediate",
    q: "Pydantic Settings — cách quản lý config ứng dụng?",
    a: `\`pydantic-settings\` tự động đọc env vars và validate types. Hỗ trợ \`.env\` file.
\`\`\`python
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8"
    )
    app_name: str = "My API"
    debug: bool = False
    database_url: str          # Required — không có default
    secret_key: str
    redis_url: str = "redis://localhost:6379"
    access_token_expire_minutes: int = 30

@lru_cache  # Singleton — đọc .env một lần
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
\`\`\``,
    q_en: "How do you manage app config with Pydantic Settings?",
    a_en: `\`\`\`python
from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    debug: bool = False

    class Config:
        env_file = ".env"

@lru_cache
def get_settings(): return Settings()
\`\`\``,
  },
  {
    id: 3147,
    category: "Python",
    subcategory: "Database & Testing",
    level: "beginner",
    q: "Type hints — tại sao quan trọng trong Python hiện đại?",
    a: "Type hints (PEP 484, Python 3.5+) không enforce lúc runtime nhưng mang lại: (1) IDE autocompletion và refactoring tốt hơn (2) Static analysis với mypy/pyright bắt lỗi trước runtime (3) Documentation tự động — code tự giải thích (4) Pydantic/FastAPI dùng type hints để validation (5) Ít bugs hơn trong team lớn. Pitfall: Type hints không prevent runtime errors — cần `mypy --strict` hoặc `pyright` trong CI pipeline.",
    q_en: "Why are type hints important in modern Python?",
    a_en: "Type hints do not enforce at runtime but provide: (1) Better IDE autocompletion and refactoring (2) Static analysis with mypy/pyright catches bugs early (3) Self-documenting code (4) Pydantic/FastAPI use them for validation (5) Fewer bugs in large teams. Pitfall: Type hints do not prevent runtime errors — run mypy or pyright in CI.",
  },
  {
    id: 3149,
    category: "Python",
    subcategory: "Database & Testing",
    level: "advanced",
    q: "WebSocket trong FastAPI — implement thế nào?",
    a: `WebSocket cho phép two-way real-time communication.
\`\`\`python
from fastapi import WebSocket, WebSocketDisconnect

class ConnectionManager:
    def __init__(self):
        self.active: list[WebSocket] = []

    async def connect(self, ws: WebSocket):
        await ws.accept(); self.active.append(ws)

    def disconnect(self, ws: WebSocket):
        self.active.remove(ws)

    async def broadcast(self, msg: str):
        for ws in self.active:
            await ws.send_text(msg)

manager = ConnectionManager()

@app.websocket("/ws/{client_id}")
async def ws_endpoint(ws: WebSocket, client_id: str):
    await manager.connect(ws)
    try:
        while True:
            data = await ws.receive_text()
            await manager.broadcast(f"{client_id}: {data}")
    except WebSocketDisconnect:
        manager.disconnect(ws)
\`\`\``,
    q_en: "How do you implement WebSockets in FastAPI?",
    a_en: `\`\`\`python
@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            data = await ws.receive_text()
            await ws.send_text(f"Echo: {data}")
    except WebSocketDisconnect:
        pass
\`\`\``,
  },
  {
    id: 3150,
    category: "Python",
    subcategory: "Core Language",
    level: "intermediate",
    q: "`*args` và `**kwargs` là gì? Khi nào dùng?",
    a: `\`*args\` cho phép nhận bất kỳ số positional arguments — nhóm thành tuple. \`**kwargs\` nhận bất kỳ số keyword arguments — nhóm thành dict.
\`\`\`python
def log(level, *args, **kwargs):
    print(f"[{level}]", *args)
    for k, v in kwargs.items():
        print(f"  {k}: {v}")

log("INFO", "Server started", port=8080, debug=True)
# [INFO] Server started
#   port: 8080
#   debug: True

# Unpacking khi gọi function
def create_user(name, email, age):
    ...

data = {"name": "Alice", "email": "a@b.com", "age": 25}
create_user(**data)  # Unpack dict thành kwargs
\`\`\`
Thứ tự params: \`def fn(pos, /, normal, *args, kw_only, **kwargs)\`. Pitfall: \`*args\` và \`**kwargs\` không giữ type information — dùng overloads hoặc TypedDict cho strict typing.`,
    q_en: "What are `*args` and `**kwargs`? When to use them?",
    a_en: `\`*args\` accepts any number of positional arguments — groups them into a tuple. \`**kwargs\` accepts any number of keyword arguments — groups them into a dict.
\`\`\`python
def greet(*names, greeting="Hello"):
    for name in names:
        print(f"{greeting}, {name}!")

greet("Alice", "Bob", greeting="Hi")

# Unpacking
def point(x, y, z): ...
coords = (1, 2, 3)
point(*coords)   # Unpack tuple
\`\`\`
Order of params: \`def fn(positional, /, normal, *args, keyword_only, **kwargs)\`. Pitfall: \`*args\` and \`**kwargs\` lose type info — use overloads or TypedDict for strict typing.`,
  },
  {
    id: 3151,
    category: "Python",
    subcategory: "Core Language",
    level: "beginner",
    q: "`enumerate`, `zip`, `map`, `filter` — dùng khi nào?",
    a: `Các built-ins quan trọng để xử lý collections hiệu quả:
\`\`\`python
# enumerate — loop có index
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")

# zip — gộp nhiều iterables song song
names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# map — transform mỗi element (lazy)
doubled = list(map(lambda x: x * 2, [1, 2, 3]))  # [2, 4, 6]
# Prefer list comprehension: [x*2 for x in [1,2,3]]

# filter — lọc elements (lazy)
evens = list(filter(lambda x: x % 2 == 0, range(10)))
# Prefer: [x for x in range(10) if x % 2 == 0]
\`\`\`
Pitfall: \`map\` và \`filter\` trả về lazy iterators — cần \`list()\` để materialize. Modern Python ưu tiên list comprehension hơn \`map\`/\`filter\` vì dễ đọc hơn.`,
    q_en: "What are `enumerate`, `zip`, `map`, `filter`? When to use them?",
    a_en: `Essential built-ins for working with collections:
\`\`\`python
# enumerate — loop with index
for i, item in enumerate(["a", "b", "c"], start=1):
    print(i, item)

# zip — iterate multiple iterables in parallel
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# map — transform each element (lazy iterator)
squares = list(map(lambda x: x**2, range(5)))  # [0, 1, 4, 9, 16]
# Modern: [x**2 for x in range(5)]

# filter — keep elements matching condition (lazy)
evens = list(filter(lambda x: x % 2 == 0, range(10)))
# Modern: [x for x in range(10) if x % 2 == 0]
\`\`\`
Pitfall: \`map\` and \`filter\` return lazy iterators — call \`list()\` to materialize. Prefer list comprehensions for readability.`,
  },
];
