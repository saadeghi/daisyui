### button
Buttons allow the user to take actions

[button docs](https://daisyui.com/components/button/)

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
- {MODIFIER} is optional and can have one of each color/style/behavior/size/modifier class names
- btn can be used on any html tags such as `<button>`, `<a>`, `<input>`
- btn can have an icon before or after the text
- set `tabindex="-1" role="button" aria-disabled="true"` if you want to disable the button using a class name
