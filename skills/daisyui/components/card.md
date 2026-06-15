### card
Cards are used to group and display content

[card docs](https://daisyui.com/components/card/)

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
- {MODIFIER} is optional and can have one of the modifier class names and one of the size class names
- `<figure>` and `<div class="card-body">` are optional
- can use `sm:card-horizontal` for responsive layouts
- If image is placed after `card-body`, the image will be placed at the bottom
