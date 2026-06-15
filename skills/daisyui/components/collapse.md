### collapse
Collapse is used for showing and hiding content

[collapse docs](https://daisyui.com/components/collapse/)

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
- {MODIFIER} is optional and can have one of the modifier class names
- instead of `tabindex="0"`, you can use  `<input type="checkbox">` as a first child
- Can also be a details/summary tag
