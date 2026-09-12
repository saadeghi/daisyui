### Ribbon
Use the ribbon component to show a corner label like "NEW" or "SALE" on a card or a box.

[Ribbon documentation](https://daisyui.com/components/ribbon/)

#### Class names
- component: `ribbon`
- modifier: `ribbon-start`
- color: `ribbon-neutral`, `ribbon-primary`, `ribbon-secondary`, `ribbon-accent`, `ribbon-info`, `ribbon-success`, `ribbon-warning`, `ribbon-error`

#### Syntax
```html
<div class="card">
  {card content}
  <span class="ribbon {MODIFIER}">{text}</span>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one color class name.
- Put the ribbon inside an element that has relative position, like a card. It sticks to the top end corner and `ribbon-start` moves it to the start side.
- Move the ribbon vertically with top utility classes, like `top-10`.
- The ribbon side flips automatically in RTL layouts.
