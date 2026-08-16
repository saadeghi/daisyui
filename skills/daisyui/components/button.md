### Button
Use buttons to start actions.

[Button documentation](https://daisyui.com/components/button/)

#### Class names
- component: `btn`
- color: `btn-neutral`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-info`, `btn-success`, `btn-warning`, `btn-error`
- style: `btn-outline`, `btn-dash`, `btn-soft`, `btn-ghost`, `btn-link`
- behavior: `btn-active`, `btn-disabled`
- size: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- modifier: `btn-wide`, `btn-block`, `btn-square`, `btn-circle`

#### Syntax
```html
<button class="btn {MODIFIER}">Button</button>
```
#### Rules
- `{MODIFIER}` is optional. It can include one class name from each color, style, behavior, size, and modifier category.
- You can use `btn` on HTML elements such as `<button>`, `<a>`, and `<input>`.
- A `btn` element can have an icon before or after the text.
- If you use a class name to disable the button, set `tabindex="-1" role="button" aria-disabled="true"`.
