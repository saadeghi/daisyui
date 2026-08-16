### Card
Use cards to group and show content.

[Card documentation](https://daisyui.com/components/card/)

#### Class names
- component: `card`
- part: `card-title`, `card-body`, `card-actions`
- style: `card-border`, `card-dash`
- modifier: `card-side`, `image-full`
- size: `card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`

#### Syntax
```html
<div class="card {MODIFIER}">
  <figure><img src="{image-url}" alt="{alt-text}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{CONTENT}</p>
    <div class="card-actions">{actions}</div>
  </div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one size class name.
- `<figure>` and `<div class="card-body">` are optional.
- For responsive layouts, use `sm:card-side`.
- If the image is after `card-body`, it is at the bottom of the card.
