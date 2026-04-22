## 2024-05-20 - Missing ARIA labels on Icon-Only Buttons
**Learning:** Found an accessibility pattern where icon-only buttons (like the hamburger menu button in the hero section) rely purely on `title` attributes instead of proper `aria-label`s. In addition, interactive toggle elements missed `aria-expanded` attributes which are crucial for screen reader users to understand the component's state.
**Action:** When adding or auditing icon-only buttons in the application, ensure `aria-label` is always set (using appropriate localization) and any stateful toggles implement the relevant ARIA attributes (e.g. `aria-expanded`).

## 2024-05-21 - Stateful Toggle Accessibility with `aria-pressed`
**Learning:** Found an accessibility pattern where custom interactive elements acting as toggles (e.g., settings chips, difficulty level filters, bookmark actions) rely solely on visual classes (like `.active`) to indicate state. This leaves screen reader users unaware of the currently selected options.
**Action:** When implementing or auditing custom toggle buttons that mimic checkboxes or radio buttons, ensure the `aria-pressed` attribute is dynamically bound to the boolean state of the toggle to programmatically communicate its active/inactive status.
