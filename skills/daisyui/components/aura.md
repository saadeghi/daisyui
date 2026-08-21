### Aura
An aura adds a light effect around the border of a component. Use it to make an important button, card, or div easy to see.
[Aura documentation](https://daisyui.com/components/aura/)

#### Class names
- component: `aura`
- style: `aura-dual`, `aura-rainbow`, `aura-holo`, `aura-gold`, `aura-silver`, `aura-glow`
- size: `aura-xs`, `aura-sm`, `aura-md`, `aura-lg`, `aura-xl`

#### Syntax
```html
<div class="aura {MODIFIER}">{CONTENT}</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one class name from each style and size category.
- To set a custom color, use a `text-*` color class. For example, `text-primary` sets the aura to the primary color.
- To set a custom background color, use a `bg-*` color class. For example, `bg-secondary` sets a secondary-color background.
- To set a custom animation time, use a `duration-*` class. For example, `duration-1000` sets the animation time to one second.
- An aura must have one direct child element.
- Use an aura for an important button, card, or div.
- Do not use an aura for more than one element on the same page. More than one aura can make the page difficult to view.
