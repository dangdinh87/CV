## 2024-05-20 - Missing ARIA labels on Icon-Only Buttons
**Learning:** Found an accessibility pattern where icon-only buttons (like the hamburger menu button in the hero section) rely purely on `title` attributes instead of proper `aria-label`s. In addition, interactive toggle elements missed `aria-expanded` attributes which are crucial for screen reader users to understand the component's state.
**Action:** When adding or auditing icon-only buttons in the application, ensure `aria-label` is always set (using appropriate localization) and any stateful toggles implement the relevant ARIA attributes (e.g. `aria-expanded`).

## 2025-04-23 - Custom UI Toggles Require ARIA States
**Learning:** Custom UI filter chips and setting toggles (e.g. `iv-settings-chip`) that functionally replace native radio buttons or checkboxes visually show their state via `active` CSS classes, but this state is completely invisible to screen readers unless an explicit `aria-pressed` or `aria-expanded` attribute is used.
**Action:** Always add `aria-pressed={isActive}` to custom toggle buttons to programmatically communicate their active state to assistive technologies, complying with the memory instruction.
