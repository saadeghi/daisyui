### Collapse
Use the collapse component to show and hide content.

[Collapse documentation](https://daisyui.com/components/collapse/)

#### Class names
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### Syntax
```html
<div tabindex="0" class="collapse {MODIFIER}">
  <div class="collapse-title">{title}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can be one of the modifier class names.
- As an alternative to `tabindex="0"`, use `<input type="checkbox">` as the first child.
- You can also use `details` and `summary` tags.
