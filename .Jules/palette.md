## 2024-05-20 - Missing ARIA labels on Icon-Only Buttons
**Learning:** Found an accessibility pattern where icon-only buttons (like the hamburger menu button in the hero section) rely purely on `title` attributes instead of proper `aria-label`s. In addition, interactive toggle elements missed `aria-expanded` attributes which are crucial for screen reader users to understand the component's state.
**Action:** When adding or auditing icon-only buttons in the application, ensure `aria-label` is always set (using appropriate localization) and any stateful toggles implement the relevant ARIA attributes (e.g. `aria-expanded`).

## 2024-05-20 - Missing ARIA pressed state on Toggle Buttons
**Learning:** Found an accessibility pattern where interactive toggle buttons (like Bookmark and Learned buttons in the Q&A card) visually indicate state via CSS classes but lack semantic state communication for screen readers (missing `aria-pressed`). This pattern is critical for accessibility in a heavily interactive learning tool.
**Action:** When adding or auditing toggle buttons that have an active/inactive state, always include `aria-pressed={state}` alongside the visual indicator so that screen readers can communicate the correct state to the user.
