import type { QAItem } from "../interview-data";

export const VUEJS_DATA: QAItem[] = [
  // ── Core Concepts ────────────────────────────────────────────────────────────
  {
    id: 3200,
    category: "Vue.js",
    subcategory: "Core Concepts",
    level: "beginner",
    q: "Vue.js là gì? Khác React/Angular thế nào?",
    a: "Vue.js là progressive JavaScript framework để xây dựng UI. (1) So với React: Vue có template syntax rõ ràng hơn, two-way binding tích hợp sẵn, learning curve thấp hơn; React dùng JSX, unidirectional flow, hệ sinh thái lớn hơn (2) So với Angular: Vue nhẹ hơn, ít opinionated hơn; Angular là full framework với DI, OOP, TypeScript bắt buộc (3) Progressive: có thể dùng để add vào một phần app hoặc build full SPA.",
    q_en: "What is Vue.js? How does it differ from React/Angular?",
    a_en: "Vue.js is a progressive JavaScript framework for building UIs. (1) Vs React: Vue has cleaner template syntax, built-in two-way binding, lower learning curve; React uses JSX, unidirectional flow, larger ecosystem (2) Vs Angular: Vue is lighter and less opinionated; Angular is a full framework with mandatory DI, OOP, TypeScript (3) Progressive: can enhance parts of an app or build full SPAs.",
  },
  {
    id: 3201,
    category: "Vue.js",
    subcategory: "Core Concepts",
    level: "beginner",
    q: "Options API vs Composition API — khác nhau gì?",
    a: "Options API (Vue 2 style): tổ chức code theo loại (data, methods, computed, watch). Composition API (Vue 3): tổ chức code theo logic concern, dùng `setup()` hoặc `<script setup>`. (1) Composition API dễ tái sử dụng logic hơn qua composables (2) TypeScript support tốt hơn trong Composition API (3) Options API vẫn được hỗ trợ đầy đủ trong Vue 3. Khuyến nghị dùng Composition API với `<script setup>` cho project mới.",
    q_en: "Options API vs Composition API — what is the difference?",
    a_en: "Options API (Vue 2 style): organizes code by type (data, methods, computed, watch). Composition API (Vue 3): organizes by logic concern using `setup()` or `<script setup>`. (1) Composition API enables better logic reuse via composables (2) Better TypeScript support in Composition API (3) Options API is still fully supported in Vue 3. Recommended: Composition API with `<script setup>` for new projects.",
  },
  {
    id: 3202,
    category: "Vue.js",
    subcategory: "Core Concepts",
    level: "beginner",
    q: "`<script setup>` là gì? Lợi ích so với `setup()` thông thường?",
    a: "`<script setup>` là syntactic sugar cho Composition API — tất cả code bên trong tự động expose ra template mà không cần `return`. (1) Gọn hơn: không cần `export default`, không cần `return` (2) Hiệu năng tốt hơn: compiler tối ưu hóa tốt hơn (3) TypeScript integration tốt hơn (4) `defineProps`, `defineEmits`, `defineExpose` thay cho options props/emits. **Pitfall:** biến và function trong `<script setup>` khác file KHÔNG cần export — tự exposed.",
    q_en: "What is `<script setup>`? Benefits over regular `setup()`?",
    a_en: "`<script setup>` is syntactic sugar for Composition API — all top-level bindings are automatically exposed to the template without needing `return`. (1) Less boilerplate: no `export default`, no `return` (2) Better performance: compiler optimizations (3) Better TypeScript integration (4) `defineProps`, `defineEmits`, `defineExpose` replace option-based equivalents. **Pitfall:** unlike regular `setup()`, there is no `return` — everything is auto-exposed.",
  },
  {
    id: 3203,
    category: "Vue.js",
    subcategory: "Core Concepts",
    level: "beginner",
    q: "Virtual DOM trong Vue hoạt động thế nào?",
    a: "Vue dùng Virtual DOM — một JavaScript object tree đại diện cho DOM thực. Khi state thay đổi: (1) Vue tạo VDOM tree mới (2) Diff algorithm so sánh old và new VDOM (3) Chỉ patch những thay đổi thực sự lên DOM thật. Vue 3 cải thiện với compiler-informed optimizations: biết trước node nào static, dynamic để skip diff. \n\n**Lợi ích:** batch updates, tránh layout thrashing, dễ test.",
    q_en: "How does the Virtual DOM work in Vue?",
    a_en: "Vue uses a Virtual DOM — a JavaScript object tree representing the real DOM. When state changes: (1) Vue creates a new VDOM tree (2) Diff algorithm compares old and new VDOM (3) Only patches real differences to the actual DOM. Vue 3 improves with compiler-informed optimizations: it knows which nodes are static vs dynamic and skips unnecessary diffs. \n\n**Benefits:** batched updates, avoids layout thrashing, easier to test.",
  },
  {
    id: 3204,
    category: "Vue.js",
    subcategory: "Core Concepts",
    level: "intermediate",
    q: "Single File Component (SFC) là gì?",
    a: 'SFC (`.vue` file) gom template, script, style vào một file duy nhất — tiện lợi cho development. Cấu trúc: `<template>` (HTML), `<script setup>` (logic), `<style scoped>` (CSS). (1) `scoped` attribute: CSS chỉ áp dụng cho component đó, tránh conflict (2) Compiler (Vite/webpack) parse và compile SFC thành JavaScript (3) Hỗ trợ lang attribute: `<script lang="ts">`, `<style lang="scss">`. **Pitfall:** `scoped` CSS không ảnh hưởng lên child components — dùng `:deep()` nếu cần.',
    q_en: "What is a Single File Component (SFC)?",
    a_en: 'SFC (`.vue` file) combines template, script, and style in one file — convenient for development. Structure: `<template>` (HTML), `<script setup>` (logic), `<style scoped>` (CSS). (1) `scoped` attribute: CSS only applies to that component, avoids conflicts (2) Compiler (Vite/webpack) parses and compiles SFC to JavaScript (3) Supports lang attribute: `<script lang="ts">`, `<style lang="scss">`. **Pitfall:** `scoped` CSS does not affect child components — use `:deep()` if needed.',
  },

  // ── Directives ───────────────────────────────────────────────────────────────
  {
    id: 3205,
    category: "Vue.js",
    subcategory: "Directives",
    level: "beginner",
    q: "Các directive phổ biến trong Vue: v-if, v-show, v-for, v-model, v-bind, v-on?",
    a: "`v-if` / `v-else` / `v-else-if`: điều kiện render, xóa/tạo DOM thật. `v-show`: ẩn bằng `display:none`, DOM vẫn tồn tại. `v-for`: loop render, luôn cần `:key`. `v-model`: two-way binding cho input. `v-bind` (`:attr`): bind attribute động. `v-on` (`@event`): gắn event listener. **Pitfall:** v-if và v-for không nên dùng trên cùng element — v-if ưu tiên cao hơn v-for trong Vue 3, dùng `<template v-for>` bọc bên ngoài.",
    q_en: "Common Vue directives: v-if, v-show, v-for, v-model, v-bind, v-on?",
    a_en: "`v-if`/`v-else`/`v-else-if`: conditional render, creates/destroys DOM. `v-show`: hides via `display:none`, DOM stays. `v-for`: loop render, always requires `:key`. `v-model`: two-way binding for inputs. `v-bind` (`:attr`): dynamic attribute binding. `v-on` (`@event`): attaches event listeners. **Pitfall:** never use `v-if` and `v-for` on the same element — in Vue 3 `v-if` has higher priority; wrap with `<template v-for>` instead.",
  },
  {
    id: 3206,
    category: "Vue.js",
    subcategory: "Directives",
    level: "beginner",
    q: "v-if vs v-show — khi nào dùng cái nào?",
    a: "`v-if`: xóa hoàn toàn DOM khi false — chi phí cao khi toggle thường xuyên, nhưng không render child khi không cần (lazy). `v-show`: chỉ toggle `display:none` — DOM luôn được render, chi phí thấp khi toggle. Dùng `v-show` khi element cần toggle thường xuyên. Dùng `v-if` khi điều kiện ít thay đổi, hoặc khi child component có side-effects cần tránh khởi tạo.",
    q_en: "v-if vs v-show — when to use which?",
    a_en: "`v-if`: fully removes DOM when false — high toggle cost but skips rendering children when not needed (lazy). `v-show`: only toggles `display:none` — DOM always rendered, low toggle cost. Use `v-show` when toggling frequently. Use `v-if` when the condition rarely changes, or when child components have side-effects that should not be initialized.",
  },
  {
    id: 3207,
    category: "Vue.js",
    subcategory: "Directives",
    level: "intermediate",
    q: "Tại sao `:key` trong `v-for` quan trọng?",
    a: 'Vue dùng `:key` để identify mỗi vnode khi diff — giúp tái sử dụng và reorder DOM nodes đúng cách thay vì re-render toàn bộ. (1) Thiếu key: Vue dùng "in-place patch" — có thể gây lỗi với stateful components hoặc animation (2) Dùng index làm key: không nên khi list có thể bị sort/filter — index thay đổi gây re-render sai (3) Dùng unique stable ID (e.g., `item.id`) là best practice.',
    q_en: "Why is `:key` in `v-for` important?",
    a_en: 'Vue uses `:key` to identify each vnode during diffing — enabling proper DOM node reuse and reordering instead of full re-renders. (1) Missing key: Vue uses "in-place patch" — can cause bugs with stateful components or animations (2) Using index as key: avoid when list can be sorted/filtered — index changes cause incorrect re-renders (3) Use unique stable IDs (e.g., `item.id`) as best practice.',
  },
  {
    id: 3208,
    category: "Vue.js",
    subcategory: "Directives",
    level: "intermediate",
    q: "v-model hoạt động thế nào? Custom v-model?",
    a: `\`v-model\` là shorthand: \`:modelValue\` + \`@update:modelValue\`. Mặc định cho input:
\`\`\`vue
<!-- Tương đương -->
<input v-model="name" />
<input :value="name" @input="name = $event.target.value" />
\`\`\`
Custom component v-model:
\`\`\`javascript
// Child component
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
// Template: :value="modelValue" @input="emit('update:modelValue', $event)"
\`\`\`
Vue 3 hỗ trợ multiple v-model: \`v-model:title\`, \`v-model:content\` với props tương ứng.`,
    q_en: `How does v-model work? Custom v-model?`,
    a_en: `\`v-model\` is shorthand: \`:modelValue\` + \`@update:modelValue\`. Default for input:
\`\`\`vue
<!-- Equivalent -->
<input v-model="name" />
<input :value="name" @input="name = $event.target.value" />
\`\`\`
Custom component v-model:
\`\`\`javascript
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
// Template: :value="modelValue" @input="emit('update:modelValue', $event)"
\`\`\`
Vue 3 supports multiple v-models: \`v-model:title\`, \`v-model:content\` with matching props.`,
  },

  // ── Reactivity ───────────────────────────────────────────────────────────────
  {
    id: 3209,
    category: "Vue.js",
    subcategory: "Reactivity",
    level: "intermediate",
    q: "Reactivity system trong Vue 3 hoạt động thế nào?",
    a: "Vue 3 dùng ES6 `Proxy` để intercept get/set operations trên reactive objects. Khi đọc property trong effect (computed, watcher, render): dependency được track. Khi set property: trigger cập nhật tất cả dependents. Cải tiến so với Vue 2 (dùng `Object.defineProperty`): (1) Detect thêm/xóa property động (2) Detect array index changes và `.length` (3) Lazy — không cần walk toàn bộ object tree upfront.",
    q_en: "How does the reactivity system work in Vue 3?",
    a_en: "Vue 3 uses ES6 `Proxy` to intercept get/set operations on reactive objects. When a property is read inside an effect (computed, watcher, render): dependency is tracked. When a property is set: all dependents are triggered. Improvements over Vue 2 (which used `Object.defineProperty`): (1) Detects dynamic property additions/deletions (2) Detects array index changes and `.length` modifications (3) Lazy — no need to walk the full object tree upfront.",
  },
  {
    id: 3210,
    category: "Vue.js",
    subcategory: "Reactivity",
    level: "intermediate",
    q: "`ref` vs `reactive` — khác nhau gì? Dùng khi nào?",
    a: `\`ref\`: wrap bất kỳ giá trị nào (primitives, objects) thành reactive container — truy cập qua \`.value\` trong script, tự unwrap trong template.
\`reactive\`: wrap object/array thành reactive Proxy — truy cập trực tiếp, không cần \`.value\`.
Nên dùng \`ref\` cho primitives và khi cần reassign; \`reactive\` khi làm việc với complex object có nhiều properties.
**Pitfall:** destructure từ \`reactive\` sẽ mất reactivity — dùng \`toRefs()\`:
\`\`\`javascript
const state = reactive({ count: 0, name: 'Vue' })
const { count, name } = toRefs(state) // giữ reactivity
\`\`\``,
    q_en: `\`ref\` vs \`reactive\` — what's the difference? When to use each?`,
    a_en: `\`ref\`: wraps any value (primitives or objects) into a reactive container — accessed via \`.value\` in script, auto-unwrapped in template.
\`reactive\`: wraps objects/arrays into a reactive Proxy — accessed directly, no \`.value\` needed.
Use \`ref\` for primitives and when you need to reassign; use \`reactive\` for complex objects with many properties.
**Pitfall:** destructuring from \`reactive\` loses reactivity — use \`toRefs()\`:
\`\`\`javascript
const state = reactive({ count: 0, name: 'Vue' })
const { count, name } = toRefs(state) // preserves reactivity
\`\`\``,
  },
  {
    id: 3211,
    category: "Vue.js",
    subcategory: "Reactivity",
    level: "intermediate",
    q: "`computed` vs `watch` vs `watchEffect` — dùng khi nào?",
    a: "`computed`: derive giá trị từ reactive state, kết quả được cache, chỉ recompute khi dependency thay đổi — dùng để transform/calculate data cho template. `watch`: observe cụ thể một hoặc vài sources, có access vào old/new value, lazy by default — dùng khi cần side effect (API call, DOM manipulation) khi data thay đổi. `watchEffect`: auto-track tất cả reactive dependencies dùng bên trong, chạy ngay khi mount — dùng khi không cần old value và muốn auto-dependency detection.",
    q_en: "`computed` vs `watch` vs `watchEffect` — when to use each?",
    a_en: "`computed`: derives a value from reactive state, result is cached, recomputes only when dependencies change — use for transforming/calculating data for the template. `watch`: observes specific sources, accesses old/new values, lazy by default — use for side effects (API calls, DOM manipulation) when data changes. `watchEffect`: auto-tracks all reactive dependencies used inside, runs immediately on mount — use when old value is not needed and auto-dependency detection is desired.",
  },

  // ── Composition API ──────────────────────────────────────────────────────────
  {
    id: 3213,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "Composable là gì? So sánh với Mixins?",
    a: `Composable là function dùng Composition API để đóng gói và tái sử dụng stateful logic. \n\n**Ví dụ:**
\`\`\`javascript
// useFetch.js
export function useFetch(url) {
  const data = ref(null)
  const loading = ref(true)
  fetch(url).then(r => r.json()).then(d => { data.value = d; loading.value = false })
  return { data, loading }
}
\`\`\`
So với Mixins: (1) Không có naming collision — return value rõ ràng (2) Source rõ ràng — biết data từ đâu (3) Có thể nhận arguments (dynamic) (4) Không có implicit state sharing. Mixins bị deprecated trong Vue 3.`,
    q_en: "What is a Composable? Compare with Mixins.",
    a_en: `A composable is a function using Composition API to encapsulate and reuse stateful logic. \n\n**Example:**
\`\`\`javascript
// useFetch.js
export function useFetch(url) {
  const data = ref(null)
  const loading = ref(true)
  fetch(url).then(r => r.json()).then(d => { data.value = d; loading.value = false })
  return { data, loading }
}
\`\`\`
Vs Mixins: (1) No naming collisions — explicit return values (2) Clear source — know where data comes from (3) Can accept arguments (dynamic) (4) No implicit state sharing. Mixins are deprecated in Vue 3.`,
  },
  {
    id: 3214,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "Lifecycle hooks trong Composition API?",
    a: `Trong \`<script setup>\`, lifecycle hooks được import và dùng như functions:
\`\`\`javascript
import { onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue'

onMounted(() => { console.log('mounted') })
onUnmounted(() => { /* cleanup */ })
\`\`\`
Mapping từ Options API: \`beforeCreate\`/\`created\` → code trong \`setup()\` chạy thay thế, \`mounted\` → \`onMounted\`, \`updated\` → \`onUpdated\`, \`unmounted\` → \`onUnmounted\`, \`beforeMount\` → \`onBeforeMount\`. **Pitfall:** \`onMounted\` trong SSR (Nuxt) không chạy server-side — dùng cho browser-only code.`,
    q_en: "Lifecycle hooks in Composition API?",
    a_en: `In \`<script setup>\`, lifecycle hooks are imported and used as functions:
\`\`\`javascript
import { onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue'

onMounted(() => { console.log('mounted') })
onUnmounted(() => { /* cleanup */ })
\`\`\`
Mapping from Options API: \`beforeCreate\`/\`created\` → code in \`setup()\` runs instead. \`mounted\` → \`onMounted\`, \`updated\` → \`onUpdated\`, \`unmounted\` → \`onUnmounted\`. **Pitfall:** \`onMounted\` in SSR (Nuxt) does not run server-side — use for browser-only code.`,
  },
  {
    id: 3215,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "`provide` / `inject` là gì? Khi nào dùng?",
    a: `\`provide\` / \`inject\` cho phép truyền data qua component tree mà không cần props drilling. Parent provide, bất kỳ descendant nào có thể inject:
\`\`\`javascript
// Parent
import { provide, ref } from 'vue'
const theme = ref('dark')
provide('theme', theme)

// Child (bất kỳ cấp)
import { inject } from 'vue'
const theme = inject('theme', 'light') // 'light' là default
\`\`\`
Dùng khi: (1) Shared state cho subtree (theme, locale, auth) (2) Plugin/library cung cấp context. **Pitfall:** khó debug hơn props vì data flow không explicit — dùng Symbol key để tránh naming collision.`,
    q_en: "What are `provide` / `inject`? When to use?",
    a_en: `\`provide\` / \`inject\` passes data through the component tree without prop drilling. Parent provides, any descendant can inject:
\`\`\`javascript
// Parent
import { provide, ref } from 'vue'
const theme = ref('dark')
provide('theme', theme)

// Any child
import { inject } from 'vue'
const theme = inject('theme', 'light') // 'light' is default
\`\`\`
Use when: (1) Shared state for a subtree (theme, locale, auth) (2) Plugin/library providing context. **Pitfall:** harder to debug than props since data flow is not explicit — use Symbol keys to avoid naming collisions.`,
  },
  {
    id: 3216,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "`defineProps` và `defineEmits` trong `<script setup>`?",
    a: `\`defineProps\` khai báo props mà component nhận, \`defineEmits\` khai báo events mà component emit:
\`\`\`javascript
// TypeScript style (recommended)
const props = defineProps<{
  title: string
  count?: number
}>()

const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'close'): void
}>()

// Dùng
emit('update', 42)
\`\`\`
**Pitfall:** \`defineProps\` không thể destructure trực tiếp mà giữ reactivity trong Vue 3.4 trở về trước — dùng \`toRefs(props)\`. Từ Vue 3.5+: destructure props với \`const { title } = defineProps()\` giữ reactivity.`,
    q_en: "`defineProps` and `defineEmits` in `<script setup>`?",
    a_en: `\`defineProps\` declares the props a component receives; \`defineEmits\` declares events it can emit:
\`\`\`javascript
// TypeScript style (recommended)
const props = defineProps<{
  title: string
  count?: number
}>()

const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'close'): void
}>()

// Usage
emit('update', 42)
\`\`\`
**Pitfall:** In Vue ≤ 3.4, destructuring \`defineProps\` loses reactivity — use \`toRefs(props)\`. From Vue 3.5+: destructuring props with \`const { title } = defineProps()\` preserves reactivity.`,
  },

  // ── Component Communication ──────────────────────────────────────────────────
  {
    id: 3217,
    category: "Vue.js",
    subcategory: "Component Communication",
    level: "beginner",
    q: "Các cách truyền data giữa components trong Vue?",
    a: "(1) Props (parent → child): dữ liệu đi xuống, one-way (2) Emits (child → parent): event đi lên, gọi `emit()` (3) v-model: two-way binding, kết hợp props + emits (4) provide/inject: ancestor → descendant, bỏ qua intermediaries (5) Pinia/Vuex: global state store cho app-wide state (6) Event bus (ít dùng trong Vue 3): `mitt` library. **Pitfall:** tránh emit từ child để trực tiếp modify prop của parent — luôn emit event để parent tự update.",
    q_en: "Ways to communicate between components in Vue?",
    a_en: "(1) Props (parent → child): data flows down, one-way (2) Emits (child → parent): events flow up, call `emit()` (3) v-model: two-way binding via props + emits (4) provide/inject: ancestor → descendant, skipping intermediaries (5) Pinia/Vuex: global state store for app-wide state (6) Event bus (less common in Vue 3): `mitt` library. **Pitfall:** never mutate a prop directly from a child — always emit an event and let the parent update.",
  },
  {
    id: 3218,
    category: "Vue.js",
    subcategory: "Component Communication",
    level: "intermediate",
    q: "Slots là gì? Named slots và scoped slots?",
    a:
      `Slots cho phép parent inject content vào template của child component. Default slot: ` +
      '`<slot />`. Named slots: `<slot name="header" />` — parent dùng `<template #header>`. Scoped slot: child truyền data lên parent qua slot:\n' +
      `\`\`\`vue
<!-- Child -->
<slot :item="item" :index="i" />

<!-- Parent -->
<template #default="{ item, index }">
  <span>{{ index }}: {{ item.name }}</span>
</template>
\`\`\`
Dùng scoped slots khi child biết cách lấy data nhưng parent quyết định cách render (render prop pattern).`,
    q_en: "What are slots? Named slots and scoped slots?",
    a_en:
      `Slots let a parent inject content into a child component's template. Default slot: ` +
      '`<slot />`. Named slots: `<slot name="header" />` — parent uses `<template #header>`. Scoped slot: child passes data up to parent through slot:\n' +
      `\`\`\`vue
<!-- Child -->
<slot :item="item" :index="i" />

<!-- Parent -->
<template #default="{ item, index }">
  <span>{{ index }}: {{ item.name }}</span>
</template>
\`\`\`
Use scoped slots when child knows how to get data but parent decides how to render it (render prop pattern).`,
  },
  {
    id: 3219,
    category: "Vue.js",
    subcategory: "Component Communication",
    level: "intermediate",
    q: "`defineExpose` trong `<script setup>` là gì?",
    a: 'Trong `<script setup>`, component instance mặc định không expose properties ra ngoài (không access được qua template ref). `defineExpose` cho phép explicitly expose các methods/properties để parent gọi qua `ref`. \n\n**Ví dụ:** `defineExpose({ focus, reset })` — parent gọi `childRef.value.focus()`. Dùng khi cần imperative control (focus, scroll, reset form). **Pitfall:** không expose quá nhiều — tránh biến component thành "god object", ưu tiên event-based communication.',
    q_en: "What is `defineExpose` in `<script setup>`?",
    a_en: 'In `<script setup>`, component instances do not expose properties by default (not accessible via template ref). `defineExpose` explicitly exposes methods/properties for parent access via `ref`. \n\n**Example:** `defineExpose({ focus, reset })` — parent calls `childRef.value.focus()`. Use for imperative control (focus, scroll, form reset). **Pitfall:** do not over-expose — avoid turning components into "god objects"; prefer event-based communication.',
  },

  // ── Vue Router ───────────────────────────────────────────────────────────────
  {
    id: 3220,
    category: "Vue.js",
    subcategory: "Vue Router",
    level: "beginner",
    q: "Vue Router cơ bản: cách setup và navigate?",
    a: `Vue Router là official router cho Vue.js — quản lý navigation, URL history, route matching.
\`\`\`javascript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/user/:id', component: User },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})
\`\`\`
Navigate: \`<RouterLink to="/about">\` trong template, hoặc \`router.push('/about')\` trong script. \`<RouterView />\` là nơi component được render.`,
    q_en: "Vue Router basics: setup and navigation?",
    a_en: `Vue Router is the official router for Vue.js — manages navigation, URL history, route matching.
\`\`\`javascript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/user/:id', component: User },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})
\`\`\`
Navigate: \`<RouterLink to="/about">\` in template, or \`router.push('/about')\` in script. \`<RouterView />\` is where matched components render.`,
  },
  {
    id: 3221,
    category: "Vue.js",
    subcategory: "Vue Router",
    level: "intermediate",
    q: "Navigation guards là gì? beforeEach, beforeEnter, beforeRouteEnter?",
    a: `Navigation guards cho phép control navigation — xác thực, redirect, cancel.
\`\`\`javascript
// Global guard
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { name: 'Login' }  // redirect
  }
})

// Per-route guard
{ path: '/admin', component: Admin, beforeEnter: (to, from) => { ... } }
\`\`\`
In-component guards (Options API): \`beforeRouteEnter\`, \`beforeRouteUpdate\`, \`beforeRouteLeave\`. Trong Composition API dùng \`onBeforeRouteLeave\`, \`onBeforeRouteUpdate\`. Return \`false\` để cancel, return route location để redirect, return \`undefined\`/\`true\` để proceed.`,
    q_en: "What are navigation guards? beforeEach, beforeEnter, beforeRouteEnter?",
    a_en: `Navigation guards let you control navigation — auth checks, redirects, cancellation.
\`\`\`javascript
// Global guard
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { name: 'Login' }  // redirect
  }
})

// Per-route guard
{ path: '/admin', component: Admin, beforeEnter: (to, from) => { ... } }
\`\`\`
In-component guards (Options API): \`beforeRouteEnter\`, \`beforeRouteUpdate\`, \`beforeRouteLeave\`. In Composition API use \`onBeforeRouteLeave\`, \`onBeforeRouteUpdate\`. Return \`false\` to cancel, a route location to redirect, or \`undefined\`/\`true\` to proceed.`,
  },
  {
    id: 3222,
    category: "Vue.js",
    subcategory: "Vue Router",
    level: "intermediate",
    q: "Dynamic routes và lazy loading routes?",
    a: `Dynamic segment: \`path: '/user/:id'\` — đọc qua \`route.params.id\`. Lazy loading với dynamic import:
\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/user/:id',
    component: () => import('./views/User.vue'),
    // Named chunk group
    component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
  }
]
\`\`\`
Lazy loading: component chỉ được download khi navigate đến route đó — giảm initial bundle size. **Pitfall:** đọc \`route.params.id\` trong \`<script setup>\`: dùng \`const route = useRoute()\`.`,
    q_en: "Dynamic routes and lazy loading routes?",
    a_en: `Dynamic segment: \`path: '/user/:id'\` — read via \`route.params.id\`. Lazy loading with dynamic import:
\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/user/:id',
    // Named chunk group
    component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
  }
]
\`\`\`
Lazy loading: component is only downloaded when navigating to that route — reduces initial bundle size. **Pitfall:** to read \`route.params.id\` in \`<script setup>\`: use \`const route = useRoute()\`.`,
  },

  // ── Pinia ────────────────────────────────────────────────────────────────────
  {
    id: 3223,
    category: "Vue.js",
    subcategory: "Pinia",
    level: "beginner",
    q: "Pinia là gì? Tại sao thay thế Vuex?",
    a: "Pinia là official state management library cho Vue 3 — thay thế Vuex. \n\n**Ưu điểm:** (1) Composition API-friendly, không cần mutations (2) TypeScript support tốt hơn nhiều (3) Không có nested modules, mỗi store là một module độc lập (4) Bundle nhỏ hơn (~1KB) (5) Devtools support, hot-reload (6) Server-side rendering support. Vuex 5 đã bị dừng phát triển — Pinia là future.",
    q_en: "What is Pinia? Why replace Vuex?",
    a_en: "Pinia is the official state management library for Vue 3 — replacing Vuex. \n\n**Advantages:** (1) Composition API-friendly, no mutations needed (2) Significantly better TypeScript support (3) No nested modules — each store is an independent module (4) Smaller bundle (~1KB) (5) Devtools support, hot-reload (6) SSR support. Vuex 5 development was halted — Pinia is the future.",
  },
  {
    id: 3224,
    category: "Vue.js",
    subcategory: "Pinia",
    level: "intermediate",
    q: "Cách tạo và dùng Pinia store?",
    a: `\`\`\`javascript
// stores/counter.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function reset() { count.value = 0 }

  return { count, double, increment, reset }
})
\`\`\`
\`\`\`javascript
// Trong component
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
store.increment()
console.log(store.count, store.double)
\`\`\`
**Pitfall:** destructure store mất reactivity — dùng \`storeToRefs\`: \`const { count, double } = storeToRefs(store)\` (methods thì destructure thường).`,
    q_en: "How to create and use a Pinia store?",
    a_en: `\`\`\`javascript
// stores/counter.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function reset() { count.value = 0 }

  return { count, double, increment, reset }
})
\`\`\`
\`\`\`javascript
// In component
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
store.increment()
console.log(store.count, store.double)
\`\`\`
**Pitfall:** destructuring store loses reactivity — use \`storeToRefs\`: \`const { count, double } = storeToRefs(store)\` (methods can be destructured normally).`,
  },
  {
    id: 3225,
    category: "Vue.js",
    subcategory: "Pinia",
    level: "intermediate",
    q: "`storeToRefs` là gì? Tại sao cần?",
    a: "Pinia store là reactive object — destructuring trực tiếp sẽ mất reactivity (tương tự `reactive()`). `storeToRefs()` convert state và getters thành refs để destructure an toàn: `const { count, name } = storeToRefs(store)`. Methods (actions) không cần `storeToRefs` — destructure thường: `const { increment } = store`. **Pitfall:** nếu dùng `storeToRefs` với methods, chúng trở thành refs — không gọi được như function.",
    q_en: "What is `storeToRefs`? Why is it needed?",
    a_en: "A Pinia store is a reactive object — direct destructuring loses reactivity (same as `reactive()`). `storeToRefs()` converts state and getters into refs for safe destructuring: `const { count, name } = storeToRefs(store)`. Actions (methods) do not need `storeToRefs` — destructure normally: `const { increment } = store`. **Pitfall:** if `storeToRefs` is applied to actions, they become refs and cannot be called as functions.",
  },
  {
    id: 3226,
    category: "Vue.js",
    subcategory: "Pinia",
    level: "advanced",
    q: "Persist Pinia store với localStorage?",
    a: `Dùng plugin \`pinia-plugin-persistedstate\`:
\`\`\`javascript
// main.ts
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// store
export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  return { token }
}, {
  persist: {
    storage: localStorage,
    pick: ['token'],  // chỉ persist token
  }
})
\`\`\`
**Pitfall:** không persist sensitive data trong localStorage (dễ bị XSS đọc). Dùng \`sessionStorage\` hoặc HTTP-only cookies cho auth tokens.`,
    q_en: "How to persist Pinia store with localStorage?",
    a_en: `Use \`pinia-plugin-persistedstate\`:
\`\`\`javascript
// main.ts
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// store
export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  return { token }
}, {
  persist: {
    storage: localStorage,
    pick: ['token'],  // only persist token
  }
})
\`\`\`
**Pitfall:** do not persist sensitive data in localStorage (easily read via XSS). Use \`sessionStorage\` or HTTP-only cookies for auth tokens.`,
  },

  // ── Performance & Advanced ───────────────────────────────────────────────────
  {
    id: 3227,
    category: "Vue.js",
    subcategory: "Performance",
    level: "intermediate",
    q: "`v-memo` directive là gì?",
    a: `\`v-memo\` skip re-render một subtree nếu array dependency không thay đổi — tương tự \`React.memo\` nhưng ở template level:
\`\`\`vue
<div v-for="item in list" :key="item.id" v-memo="[item.id, item.selected]">
  <!-- Chỉ re-render khi id hoặc selected thay đổi -->
  <ExpensiveComponent :item="item" />
</div>
\`\`\`
Dùng cho: (1) Long lists với expensive child renders (2) Chỉ một vài properties ảnh hưởng đến render. **Pitfall:** không lạm dụng — dependency array phải đầy đủ, thiếu dependency sẽ gây stale render.`,
    q_en: "What is the `v-memo` directive?",
    a_en: `\`v-memo\` skips re-rendering a subtree when its dependency array has not changed — similar to \`React.memo\` but at the template level:
\`\`\`vue
<div v-for="item in list" :key="item.id" v-memo="[item.id, item.selected]">
  <!-- Only re-renders when id or selected changes -->
  <ExpensiveComponent :item="item" />
</div>
\`\`\`
Use for: (1) Long lists with expensive child renders (2) When only a few properties affect rendering. **Pitfall:** do not overuse — the dependency array must be complete; missing a dependency causes stale renders.`,
  },
  {
    id: 3228,
    category: "Vue.js",
    subcategory: "Performance",
    level: "intermediate",
    q: "KeepAlive component là gì?",
    a: `\`<KeepAlive>\` cache component instance khi unmount — state được giữ nguyên khi switch lại:
\`\`\`vue
<KeepAlive :include="['FormStep1', 'FormStep2']" :max="5">
  <component :is="currentTab" />
</KeepAlive>
\`\`\`
Lifecycle hooks cho cached components: \`onActivated\` (khi cache hit, component show lại), \`onDeactivated\` (khi bị hide, không unmount). Dùng cho: tab views, multi-step forms, expensive components cần giữ state. **Pitfall:** cached components vẫn chiếm bộ nhớ — dùng \`:max\` để limit, tránh cache tất cả.`,
    q_en: "What is the KeepAlive component?",
    a_en: `\`<KeepAlive>\` caches component instances when unmounted — state is preserved when switching back:
\`\`\`vue
<KeepAlive :include="['FormStep1', 'FormStep2']" :max="5">
  <component :is="currentTab" />
</KeepAlive>
\`\`\`
Lifecycle hooks for cached components: \`onActivated\` (on cache hit, component shown again), \`onDeactivated\` (when hidden, not unmounted). Use for: tab views, multi-step forms, expensive components needing state preservation. **Pitfall:** cached components still consume memory — use \`:max\` to limit, avoid caching everything.`,
  },
  {
    id: 3229,
    category: "Vue.js",
    subcategory: "Performance",
    level: "advanced",
    q: "Teleport component là gì? Use case?",
    a: `\`<Teleport>\` render content vào một DOM node nằm ngoài component tree — nhưng vẫn là con về mặt logic (data flow, events hoạt động bình thường):
\`\`\`vue
<Teleport to="body">
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">...</div>
  </div>
</Teleport>
\`\`\`
Use cases: (1) Modals, drawers, tooltips — tránh z-index/overflow issues (2) Notifications/toasts — render ở root level (3) Bất kỳ UI cần break khỏi parent overflow/stacking context. **Pitfall:** Teleport content vẫn share reactive state với parent component — props, emits, provide/inject hoạt động bình thường.`,
    q_en: "What is the Teleport component? Use cases?",
    a_en: `\`<Teleport>\` renders content into a DOM node outside the component tree — while remaining a logical child (data flow, events work normally):
\`\`\`vue
<Teleport to="body">
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">...</div>
  </div>
</Teleport>
\`\`\`
Use cases: (1) Modals, drawers, tooltips — avoids z-index/overflow issues (2) Notifications/toasts — rendered at root level (3) Any UI needing to break out of parent overflow/stacking context. **Pitfall:** Teleport content still shares reactive state with the parent component — props, emits, provide/inject work normally.`,
  },
  {
    id: 3230,
    category: "Vue.js",
    subcategory: "Performance",
    level: "advanced",
    q: "Suspense component là gì?",
    a: `\`<Suspense>\` cho phép render fallback content trong khi async component đang resolve — xử lý async setup():
\`\`\`vue
<Suspense>
  <template #default>
    <AsyncDashboard />  <!-- async setup() -->
  </template>
  <template #fallback>
    <LoadingSpinner />
  </template>
</Suspense>
\`\`\`
\`AsyncDashboard\` có thể có \`async setup()\` với await bên trong. \`<Suspense>\` catch async và show fallback cho đến khi resolve. Tích hợp với \`<KeepAlive>\` và lazy components. **Pitfall:** Suspense còn experimental trong một số edge cases — test kỹ khi dùng với SSR.`,
    q_en: "What is the Suspense component?",
    a_en: `\`<Suspense>\` renders fallback content while async components resolve — handles async \`setup()\`:
\`\`\`vue
<Suspense>
  <template #default>
    <AsyncDashboard />  <!-- async setup() -->
  </template>
  <template #fallback>
    <LoadingSpinner />
  </template>
</Suspense>
\`\`\`
\`AsyncDashboard\` can have \`async setup()\` with awaits inside. \`<Suspense>\` catches the async and shows fallback until resolved. Integrates with \`<KeepAlive>\` and lazy components. **Pitfall:** Suspense is still experimental in some edge cases — test thoroughly with SSR.`,
  },
  {
    id: 3231,
    category: "Vue.js",
    subcategory: "Performance",
    level: "intermediate",
    q: "Lazy loading components trong Vue?",
    a: `Dùng dynamic import để lazy load component — chỉ download khi cần:
\`\`\`javascript
import { defineAsyncComponent } from 'vue'

// Basic
const HeavyChart = defineAsyncComponent(() =>
  import('./components/HeavyChart.vue')
)

// Với loading/error states
const AsyncComp = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200,      // delay trước khi show loading
  timeout: 3000,   // timeout sau 3s
})
\`\`\`
Kết hợp với \`<Suspense>\` để handle loading state elegantly.`,
    q_en: "Lazy loading components in Vue?",
    a_en: `Use dynamic import to lazy load components — only download when needed:
\`\`\`javascript
import { defineAsyncComponent } from 'vue'

// Basic
const HeavyChart = defineAsyncComponent(() =>
  import('./components/HeavyChart.vue')
)

// With loading/error states
const AsyncComp = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200,      // delay before showing loading
  timeout: 3000,   // timeout after 3s
})
\`\`\`
Combine with \`<Suspense>\` to handle loading state elegantly.`,
  },
  {
    id: 3232,
    category: "Vue.js",
    subcategory: "Performance",
    level: "intermediate",
    q: "Fragments trong Vue 3?",
    a: 'Vue 3 hỗ trợ multiple root nodes trong template (fragments) — Vue 2 yêu cầu single root. Điều này giúp: (1) Không cần wrapper `<div>` không cần thiết (2) Cấu trúc DOM sạch hơn (3) Tránh CSS side effects từ wrapper. \n\n**Ví dụ:** `<template><header/><main/><footer/></template>` hoạt động trong Vue 3. **Pitfall:** attributes inheritance (fallthrough) với multiple root nodes cần `v-bind="$attrs"` explicit để control nơi attrs được apply.',
    q_en: "Fragments in Vue 3?",
    a_en: 'Vue 3 supports multiple root nodes in templates (fragments) — Vue 2 required a single root. \n\n**Benefits:** (1) No unnecessary wrapper `<div>` elements (2) Cleaner DOM structure (3) Avoids CSS side effects from wrappers. \n\n**Example:** `<template><header/><main/><footer/></template>` works in Vue 3. **Pitfall:** attribute inheritance (fallthrough) with multiple root nodes requires explicit `v-bind="$attrs"` to control where attrs are applied.',
  },

  // ── Advanced Topics ───────────────────────────────────────────────────────────
  {
    id: 3233,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Custom directives trong Vue 3?",
    a: `Custom directive cho phép reuse DOM manipulation logic. Trong \`<script setup>\`:
\`\`\`javascript
// vFocus — auto-focus element khi mount
const vFocus = {
  mounted: (el) => el.focus()
}

// vTooltip với value
const vTooltip = {
  mounted(el, binding) {
    el.title = binding.value
    el.style.cursor = 'help'
  },
  updated(el, binding) {
    el.title = binding.value
  }
}
\`\`\`
\`\`\`vue
<input v-focus />
<span v-tooltip="'Hover me'">?</span>
\`\`\`
Directive hooks: \`created\`, \`beforeMount\`, \`mounted\`, \`beforeUpdate\`, \`updated\`, \`beforeUnmount\`, \`unmounted\`.`,
    q_en: "Custom directives in Vue 3?",
    a_en: `Custom directives allow reusing DOM manipulation logic. In \`<script setup>\`:
\`\`\`javascript
// vFocus — auto-focus element on mount
const vFocus = {
  mounted: (el) => el.focus()
}

// vTooltip with value
const vTooltip = {
  mounted(el, binding) {
    el.title = binding.value
    el.style.cursor = 'help'
  },
  updated(el, binding) {
    el.title = binding.value
  }
}
\`\`\`
\`\`\`vue
<input v-focus />
<span v-tooltip="'Hover me'">?</span>
\`\`\`
Directive hooks: \`created\`, \`beforeMount\`, \`mounted\`, \`beforeUpdate\`, \`updated\`, \`beforeUnmount\`, \`unmounted\`.`,
  },
  {
    id: 3234,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Vue 3 vs Vue 2 — những thay đổi lớn nhất?",
    a: "(1) Composition API + `<script setup>` — thay thế Options API (vẫn supported) (2) Reactivity dùng Proxy thay Object.defineProperty — detect thêm/xóa property (3) Fragments, Teleport, Suspense — component mới (4) Multiple v-model trên component (5) `createApp()` thay `new Vue()` — tách instance tốt hơn (6) TypeScript support tốt hơn (7) Vite thay Webpack làm default build tool (8) Pinia thay Vuex (9) Bundle nhỏ hơn nhờ tree-shaking tốt hơn (10) v-if ưu tiên hơn v-for (ngược Vue 2).",
    q_en: "Vue 3 vs Vue 2 — biggest changes?",
    a_en: "(1) Composition API + `<script setup>` replacing Options API (still supported) (2) Reactivity uses Proxy instead of Object.defineProperty — detects property additions/deletions (3) Fragments, Teleport, Suspense — new components (4) Multiple v-models on components (5) `createApp()` replacing `new Vue()` — better instance isolation (6) Better TypeScript support (7) Vite replacing Webpack as default build tool (8) Pinia replacing Vuex (9) Smaller bundles via better tree-shaking (10) `v-if` now has higher priority than `v-for` (opposite of Vue 2).",
  },
  {
    id: 3235,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "SSR với Nuxt.js — Vue SSR hoạt động thế nào?",
    a: "Nuxt.js là meta-framework cho Vue với SSR/SSG built-in. SSR flow: (1) Request đến server (2) Nuxt render Vue app thành HTML string (3) HTML được gửi cho client (4) Client hydration — Vue attach event listeners lên server-rendered HTML. \n\n**Lợi ích:** SEO tốt hơn, faster First Contentful Paint. **Pitfall:** (1) `window`/`document` không có ở server — wrap trong `onMounted` hoặc check `process.client` (2) State mismatch giữa server và client gây hydration error (3) `onMounted` không chạy server-side.",
    q_en: "SSR with Nuxt.js — how does Vue SSR work?",
    a_en: "Nuxt.js is the meta-framework for Vue with built-in SSR/SSG. SSR flow: (1) Request hits server (2) Nuxt renders Vue app to HTML string (3) HTML sent to client (4) Client hydration — Vue attaches event listeners to server-rendered HTML. \n\n**Benefits:** better SEO, faster First Contentful Paint. **Pitfall:** (1) `window`/`document` unavailable on server — wrap in `onMounted` or check `process.client` (2) Server/client state mismatch causes hydration errors (3) `onMounted` does not run server-side.",
  },
  {
    id: 3236,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Plugin trong Vue là gì? Cách tạo?",
    a: `Plugin là object hoặc function với method \`install\` — thêm global functionality vào Vue app:
\`\`\`javascript
// plugins/myPlugin.ts
export const MyPlugin = {
  install(app, options) {
    // Global component
    app.component('BaseButton', BaseButton)
    // Global directive
    app.directive('focus', { mounted: el => el.focus() })
    // Global property
    app.config.globalProperties.$http = axios
    // Provide global value
    app.provide('config', options)
  }
}

// main.ts
app.use(MyPlugin, { apiUrl: '...' })
\`\`\`
Dùng plugin cho: i18n, router, store, UI libraries (PrimeVue, Naive UI).`,
    q_en: "What is a Vue plugin? How to create one?",
    a_en: `A plugin is an object or function with an \`install\` method — adds global functionality to a Vue app:
\`\`\`javascript
// plugins/myPlugin.ts
export const MyPlugin = {
  install(app, options) {
    // Global component
    app.component('BaseButton', BaseButton)
    // Global directive
    app.directive('focus', { mounted: el => el.focus() })
    // Global property
    app.config.globalProperties.$http = axios
    // Provide global value
    app.provide('config', options)
  }
}

// main.ts
app.use(MyPlugin, { apiUrl: '...' })
\`\`\`
Use plugins for: i18n, router, store, UI libraries (PrimeVue, Naive UI).`,
  },
  {
    id: 3237,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Error handling trong Vue: errorCaptured và onErrorCaptured?",
    a: `Vue cung cấp error boundary mechanism qua \`errorCaptured\` (Options API) / \`onErrorCaptured\` (Composition API):
\`\`\`javascript
// App.vue — global error boundary
import { onErrorCaptured } from 'vue'

onErrorCaptured((err, instance, info) => {
  console.error('Caught:', err, info)
  // Return false để prevent propagation
  return false
})
\`\`\`
Global handler: \`app.config.errorHandler = (err, instance, info) => { ... }\`. Error types caught: lifecycle hooks, event handlers, async errors trong setup, child component errors. **Pitfall:** không catch errors trong async callbacks không thuộc Vue (setTimeout, fetch handlers) — cần try/catch thủ công.`,
    q_en: "Error handling in Vue: errorCaptured and onErrorCaptured?",
    a_en: `Vue provides an error boundary mechanism via \`errorCaptured\` (Options API) / \`onErrorCaptured\` (Composition API):
\`\`\`javascript
// App.vue — global error boundary
import { onErrorCaptured } from 'vue'

onErrorCaptured((err, instance, info) => {
  console.error('Caught:', err, info)
  // Return false to prevent propagation
  return false
})
\`\`\`
Global handler: \`app.config.errorHandler = (err, instance, info) => { ... }\`. Errors caught: lifecycle hooks, event handlers, async errors in setup, child component errors. **Pitfall:** does NOT catch errors in non-Vue async callbacks (setTimeout, fetch handlers) — need manual try/catch.`,
  },
  {
    id: 3238,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Render functions và h() trong Vue 3?",
    a: `Render function thay template bằng JavaScript thuần — linh hoạt hơn cho dynamic rendering:
\`\`\`javascript
import { h, defineComponent } from 'vue'

export default defineComponent({
  props: ['tag', 'content'],
  render() {
    return h(this.tag || 'div', { class: 'dynamic' }, this.content)
  }
})

// Trong <script setup> với useSlots()
import { h, useSlots } from 'vue'
const slots = useSlots()
// return () => h('div', slots.default?.())
\`\`\`
Dùng khi: (1) Component cần tag động không thể express qua template (2) Library code cần flexibility (3) Tái sử dụng render logic phức tạp. Template vẫn được khuyến nghị cho business logic thông thường.`,
    q_en: "Render functions and h() in Vue 3?",
    a_en: `Render functions replace templates with pure JavaScript — more flexible for dynamic rendering:
\`\`\`javascript
import { h, defineComponent } from 'vue'

export default defineComponent({
  props: ['tag', 'content'],
  render() {
    return h(this.tag || 'div', { class: 'dynamic' }, this.content)
  }
})

// In <script setup> with useSlots()
import { h, useSlots } from 'vue'
const slots = useSlots()
// return () => h('div', slots.default?.())
\`\`\`
Use when: (1) Component needs dynamic tags impossible to express in templates (2) Library code needing flexibility (3) Reusing complex render logic. Templates are still recommended for typical business logic.`,
  },
  {
    id: 3239,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "Testing Vue components với Vitest và Vue Test Utils?",
    a: `\`\`\`javascript
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('increments when button clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialCount: 0 }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('1')
    expect(wrapper.emitted('update')).toBeTruthy()
  })

  it('renders slot content', () => {
    const wrapper = mount(Counter, {
      slots: { default: '<span>Label</span>' }
    })
    expect(wrapper.find('span').exists()).toBe(true)
  })
})
\`\`\`
Dùng \`shallowMount\` để stub child components. Test behavior, không test implementation details.`,
    q_en: "Testing Vue components with Vitest and Vue Test Utils?",
    a_en: `\`\`\`javascript
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('increments when button clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialCount: 0 }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('1')
    expect(wrapper.emitted('update')).toBeTruthy()
  })

  it('renders slot content', () => {
    const wrapper = mount(Counter, {
      slots: { default: '<span>Label</span>' }
    })
    expect(wrapper.find('span').exists()).toBe(true)
  })
})
\`\`\`
Use \`shallowMount\` to stub child components. Test behavior, not implementation details.`,
  },
  {
    id: 3240,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "`nextTick` là gì? Khi nào dùng?",
    a: `Vue batch DOM updates — không update ngay khi state thay đổi, mà queue updates và flush async. \`nextTick\` cho phép chờ DOM được update xong:
\`\`\`javascript
import { nextTick, ref } from 'vue'

const count = ref(0)

async function handleClick() {
  count.value++
  // DOM chưa update ở đây
  await nextTick()
  // DOM đã update — giờ có thể đọc DOM hoặc scroll
  console.log(document.querySelector('.count')?.textContent)
}
\`\`\`
Dùng khi: (1) Cần đọc DOM sau khi state update (2) Focus element sau khi v-if toggle (3) Scroll sau khi append item vào list.`,
    q_en: "What is `nextTick`? When to use it?",
    a_en: `Vue batches DOM updates — doesn't update immediately when state changes, queues updates and flushes async. \`nextTick\` waits for DOM to finish updating:
\`\`\`javascript
import { nextTick, ref } from 'vue'

const count = ref(0)

async function handleClick() {
  count.value++
  // DOM not yet updated here
  await nextTick()
  // DOM is now updated — safe to read DOM or scroll
  console.log(document.querySelector('.count')?.textContent)
}
\`\`\`
Use when: (1) Need to read DOM after state update (2) Focus an element after v-if toggle (3) Scroll after appending items to a list.`,
  },
  {
    id: 3241,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Vue DevTools — debug reactive state như thế nào?",
    a: 'Vue DevTools (browser extension hoặc Vite plugin) cho phép: (1) Inspect component tree và hierarchy (2) Xem reactive state của từng component (3) Track events được emit (4) Timeline để xem state changes theo thời gian (5) Pinia store inspector — xem state, actions, getters (6) Router history và current route. Tips: đặt tên cho stores (`defineStore("counterStore", ...)`) để dễ tìm. Dùng `vueuse/core` DevTools integration để debug composables. **Pitfall:** DevTools chỉ hoạt động với dev build — không có trên production.',
    q_en: "Vue DevTools — how to debug reactive state?",
    a_en: 'Vue DevTools (browser extension or Vite plugin) lets you: (1) Inspect component tree and hierarchy (2) View reactive state of each component (3) Track emitted events (4) Timeline to see state changes over time (5) Pinia store inspector — state, actions, getters (6) Router history and current route. Tips: name your stores (`defineStore("counterStore", ...)`) for easy lookup. Use `vueuse/core` DevTools integration to debug composables. **Pitfall:** DevTools only works with dev builds — not available in production.',
  },
  {
    id: 3242,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "VueUse là gì? Các composables phổ biến?",
    a: "VueUse là collection composables utility dùng Vue Composition API — hơn 200 composables sẵn có. Phổ biến: `useMouse()` (track mouse position), `useLocalStorage()` (reactive localStorage), `useEventListener()` (auto cleanup listener), `useFetch()` (fetch với loading/error state), `useIntersectionObserver()` (lazy load), `useDark()` (dark mode toggle), `useDebounce()` / `useThrottle()`, `useBreakpoints()` (responsive), `onClickOutside()`. \n\n**Lợi ích:** tránh viết boilerplate, tự cleanup trong `onUnmounted`, TypeScript support đầy đủ.",
    q_en: "What is VueUse? Popular composables?",
    a_en: "VueUse is a collection of utility composables built with Vue Composition API — 200+ composables available. Popular: `useMouse()` (track mouse position), `useLocalStorage()` (reactive localStorage), `useEventListener()` (auto-cleanup listener), `useFetch()` (fetch with loading/error state), `useIntersectionObserver()` (lazy loading), `useDark()` (dark mode toggle), `useDebounce()` / `useThrottle()`, `useBreakpoints()` (responsive), `onClickOutside()`. \n\n**Benefits:** avoids boilerplate, auto-cleanup in `onUnmounted`, full TypeScript support.",
  },
  {
    id: 3243,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Transition và TransitionGroup trong Vue?",
    a: `\`<Transition>\` apply CSS classes khi element enter/leave:
\`\`\`vue
<Transition name="fade">
  <p v-if="show">Hello</p>
</Transition>
\`\`\`
\`\`\`css
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
\`\`\`
\`<TransitionGroup>\` cho list animations — thêm \`move\` class:
\`\`\`vue
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</TransitionGroup>
\`\`\`
Modes: \`mode="out-in"\` (old leaves trước, new enters sau) — tránh flickering khi swap components.`,
    q_en: "Transition and TransitionGroup in Vue?",
    a_en: `\`<Transition>\` applies CSS classes when elements enter/leave:
\`\`\`vue
<Transition name="fade">
  <p v-if="show">Hello</p>
</Transition>
\`\`\`
\`\`\`css
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
\`\`\`
\`<TransitionGroup>\` for list animations — adds \`move\` class:
\`\`\`vue
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</TransitionGroup>
\`\`\`
Modes: \`mode="out-in"\` (old leaves first, new enters after) — prevents flickering when swapping components.`,
  },
  {
    id: 3244,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Cách handle forms phức tạp trong Vue — VeeValidate hoặc FormKit?",
    a: `Native Vue form handling tốt cho forms đơn giản. Cho forms phức tạp với validation:
**VeeValidate** — field-level validation, tích hợp với Yup/Zod:
\`\`\`javascript
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({ email: yup.string().email().required() })
})
const { value: email, errorMessage } = useField('email')
\`\`\`
**FormKit** — built-in inputs, validation, i18n, theming. Dùng VeeValidate khi cần tích hợp UI library riêng. Dùng FormKit khi muốn all-in-one solution với consistent UI.`,
    q_en: "Handling complex forms in Vue — VeeValidate or FormKit?",
    a_en: `Native Vue form handling is fine for simple forms. For complex forms with validation:
**VeeValidate** — field-level validation, integrates with Yup/Zod:
\`\`\`javascript
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({ email: yup.string().email().required() })
})
const { value: email, errorMessage } = useField('email')
\`\`\`
**FormKit** — built-in inputs, validation, i18n, theming. Use VeeValidate when integrating your own UI library. Use FormKit for an all-in-one solution with consistent UI.`,
  },
  {
    id: 3245,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Vue 3 performance optimization best practices?",
    a: "(1) `v-memo` cho long lists với expensive renders (2) `shallowRef`/`shallowReactive` cho large data structures không cần deep reactivity (3) Lazy load routes và components với dynamic import (4) `<KeepAlive>` cho frequently toggled components (5) Dùng `computed` thay `methods` để cache kết quả (6) Tránh unnecessary watchers — prefer computed (7) `v-once` cho content không thay đổi (8) Tránh inline handlers phức tạp trong template (9) Tree-shaking — import chỉ những gì cần từ Vue (10) Analyze bundle với `rollup-plugin-visualizer`.",
    q_en: "Vue 3 performance optimization best practices?",
    a_en: "(1) `v-memo` for long lists with expensive renders (2) `shallowRef`/`shallowReactive` for large data structures without need for deep reactivity (3) Lazy-load routes and components with dynamic import (4) `<KeepAlive>` for frequently toggled components (5) Use `computed` instead of `methods` to cache results (6) Avoid unnecessary watchers — prefer computed (7) `v-once` for content that never changes (8) Avoid complex inline handlers in templates (9) Tree-shaking — import only what you need from Vue (10) Analyze bundles with `rollup-plugin-visualizer`.",
  },
  {
    id: 3246,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "`toRef`, `toRefs`, `toValue` — dùng khi nào?",
    a: `\`toRef\`: tạo ref từ một property của reactive object — giữ reactive connection:
\`\`\`javascript
const state = reactive({ count: 0, name: 'Vue' })
const countRef = toRef(state, 'count') // linked to state.count
\`\`\`
\`toRefs\`: convert toàn bộ reactive object thành object of refs — dùng khi destructure:
\`\`\`javascript
const { count, name } = toRefs(state)
\`\`\`
\`toValue\` (Vue 3.3+): unwrap ref hoặc getter — dùng trong composables để accept cả ref và plain value:
\`\`\`javascript
function useFeature(id: MaybeRefOrGetter<string>) {
  const resolvedId = toValue(id) // unwrap nếu là ref
}
\`\`\``,
    q_en: "`toRef`, `toRefs`, `toValue` — when to use?",
    a_en: `\`toRef\`: creates a ref from a property of a reactive object — maintains reactive connection:
\`\`\`javascript
const state = reactive({ count: 0, name: 'Vue' })
const countRef = toRef(state, 'count') // linked to state.count
\`\`\`
\`toRefs\`: converts the entire reactive object into an object of refs — use when destructuring:
\`\`\`javascript
const { count, name } = toRefs(state)
\`\`\`
\`toValue\` (Vue 3.3+): unwraps a ref or getter — use in composables to accept both ref and plain values:
\`\`\`javascript
function useFeature(id: MaybeRefOrGetter<string>) {
  const resolvedId = toValue(id) // unwraps if ref
}
\`\`\``,
  },
  {
    id: 3248,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "intermediate",
    q: "accessiblity (a11y) trong Vue — best practices?",
    a: '(1) Dùng semantic HTML trong templates (`<button>` không phải `<div @click>`) (2) `:aria-label`, `:aria-expanded`, `:aria-live` với dynamic content (3) Focus management với `nextTick` và `el.focus()` sau modal open/close (4) `v-bind="$attrs"` để inherit aria attrs (5) `axe-core` hoặc `vue-axe` plugin để audit a11y trong dev (6) Keyboard navigation — test với Tab, Enter, Esc (7) Color contrast ratio ≥ 4.5:1 cho text. Dùng `eslint-plugin-vuejs-accessibility` để lint a11y issues.',
    q_en: "Accessibility (a11y) in Vue — best practices?",
    a_en: '(1) Use semantic HTML in templates (`<button>` not `<div @click>`) (2) `:aria-label`, `:aria-expanded`, `:aria-live` for dynamic content (3) Focus management via `nextTick` and `el.focus()` after modal open/close (4) `v-bind="$attrs"` to inherit aria attrs (5) `axe-core` or `vue-axe` plugin for dev a11y auditing (6) Keyboard navigation — test with Tab, Enter, Esc (7) Color contrast ratio ≥ 4.5:1 for text. Use `eslint-plugin-vuejs-accessibility` to lint a11y issues.',
  },
  {
    id: 3249,
    category: "Vue.js",
    subcategory: "Advanced",
    level: "advanced",
    q: "Vite vs Vue CLI — tại sao Vite là default hiện tại?",
    a: "Vite thay thế Vue CLI (dựa trên Webpack) làm official build tool cho Vue 3. Lý do: (1) Dev server nhanh hơn rất nhiều — dùng native ES modules, không bundle khi dev (2) Cold start gần như instant — không pre-bundle toàn bộ app (3) HMR (Hot Module Replacement) cực nhanh (4) Production build dùng Rollup — output nhỏ và efficient (5) Plugin ecosystem phong phú, tương thích Rollup plugins (6) Hỗ trợ Vue SFC, TypeScript, JSX out-of-the-box. Vue CLI vẫn nhận security patches nhưng không phát triển tính năng mới.",
    q_en: "Vite vs Vue CLI — why is Vite the current default?",
    a_en: "Vite replaces Vue CLI (Webpack-based) as the official build tool for Vue 3. Reasons: (1) Much faster dev server — uses native ES modules, no bundling during dev (2) Near-instant cold start — does not pre-bundle the entire app (3) Extremely fast HMR (Hot Module Replacement) (4) Production builds use Rollup — small, efficient output (5) Rich plugin ecosystem, compatible with Rollup plugins (6) Supports Vue SFCs, TypeScript, JSX out-of-the-box. Vue CLI still receives security patches but no new feature development.",
  },
  {
    id: 3250,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "Template refs — cách truy cập DOM element và child component trong Vue 3?",
    a: `Template ref cho phép truy cập DOM element hoặc component instance trực tiếp:
\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

// Ref cho DOM element
const inputEl = ref<HTMLInputElement | null>(null)

// Ref cho component instance
const modalRef = ref<InstanceType<typeof Modal> | null>(null)

onMounted(() => {
  inputEl.value?.focus()  // Auto-focus khi mount
})

function openModal() {
  modalRef.value?.open()  // Gọi method của child component
}
</script>

<template>
  <input ref="inputEl" type="text" />
  <Modal ref="modalRef" />
</template>
\`\`\`
**Pitfall:** \`ref.value\` là \`null\` trước khi component mount — luôn kiểm tra trong \`onMounted\` hoặc dùng optional chaining \`ref.value?.method()\`.`,
    q_en: "Template refs — how to access DOM elements and child components in Vue 3?",
    a_en: `Template refs give direct access to DOM elements or component instances:
\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

const inputEl = ref<HTMLInputElement | null>(null)
const childRef = ref<InstanceType<typeof ChildComp> | null>(null)

onMounted(() => {
  inputEl.value?.focus()
})
</script>

<template>
  <input ref="inputEl" />
  <ChildComp ref="childRef" />
</template>
\`\`\`
**Pitfall:** \`ref.value\` is \`null\` before mount — always access inside \`onMounted\` or use optional chaining \`ref.value?.method()\`.`,
  },
  {
    id: 3251,
    category: "Vue.js",
    subcategory: "Composition API",
    level: "intermediate",
    q: "Cách fetch async data đúng cách trong Vue 3 Composition API?",
    a: `\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])
const loading = ref(true)
const error = ref(null)

// Pattern 1: onMounted (phổ biến nhất)
onMounted(async () => {
  try {
    const res = await fetch('/api/users')
    users.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})

// Pattern 2: Composable reusable
// useFetch.ts — tái sử dụng ở nhiều components
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <ul v-else>
    <li v-for="u in users" :key="u.id">{{ u.name }}</li>
  </ul>
</template>
\`\`\`
**Pitfall:** không gọi \`async setup()\` trực tiếp mà không có \`<Suspense>\` bọc ngoài — dùng \`onMounted\` hoặc composable thay. Với Nuxt: dùng \`useFetch()\` / \`useAsyncData()\` để SSR-compatible.`,
    q_en: "How to properly fetch async data in Vue 3 Composition API?",
    a_en: `\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/api/data')
    data.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
\`\`\`
**Pitfall:** do not use \`async setup()\` without a \`<Suspense>\` wrapper — use \`onMounted\` or a composable instead. In Nuxt: use \`useFetch()\` / \`useAsyncData()\` for SSR compatibility.`,
  },
];
