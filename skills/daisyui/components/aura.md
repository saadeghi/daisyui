### aura
Aura is a border light effect that can wrap around any component. It is a great way to add a cool, eye-catching visual effect to your components. Aura is useful for the most important button, card, or div that you want to highlight.
[aura docs](https://daisyui.com/components/aura/)

#### Class names
- component: `aura`
- style: `aura-dual`, `aura-rainbow`, `aura-holo`, `aura-gold`, `aura-silver`, `aura-glow`
- size: `aura-xs`, `aura-sm`, `aura-md`, `aura-lg`, `aura-xl`

#### Syntax
```html
<div class="aura {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/size class names
- you can set custom colors using `text-*` color classes. For example, `text-primary` will use the primary color for the aura
- you can set custom background color using `bg-*` color classes. For example, `bg-secondary` will use the secondary color for the background of the aura
- you can set custom animation duration using `duration-*` classes. For example, `duration-1000` will set the animation duration to 1 second
- aura must have one direct child element
- aura is good for a button, or a card or a div that you want to highlight
- do not use aura for multiple elements on the same page because it can be visually overwhelming
