### Input
Use a text input as a simple input field.

[Input documentation](https://daisyui.com/components/input/)

#### Class names
- component: `input`
- style: `input-ghost`
- color: `input-neutral`, `input-primary`, `input-secondary`, `input-accent`, `input-info`, `input-success`, `input-warning`, `input-error`
- size: `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

#### Syntax
```html
<input type="{type}" placeholder="Type here" class="input {MODIFIER}" />
```

#### Rules
- `{MODIFIER}` is optional. It can include one class name from each style, color, and size category.
- You can use it with all input field types, such as text, password, or email.
- If the input contains more than one element, use the `input` class on the parent element.
