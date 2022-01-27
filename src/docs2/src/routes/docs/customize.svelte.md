---
title: Customize daisyUI components
desc:
published: true
---

daisyUI components comes with many variants necessary for design systems and you won't usually need to customize anything  
But you can still customize components in many ways.

- Let's say, you want to customize this button:

```html
<button class="btn">Button</button>
```

<button class="btn">Button</button>

1. You can use daisyUI utility classes:

```html
<button class="btn btn-primary">Three</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>
```

<button class="btn btn-primary">Three</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>

2. You can use Tailwind's utility classes:

```html
<button class="btn rounded-full">One</button>
<button class="btn rounded-none px-16">Two</button>
```

<button class="rounded-full btn">One</button>
<button class="px-16 rounded-none btn">Two</button>

3. You can customize components on your CSS file, using Tailwind's @apply directive.

```css
.btn {
  @apply rounded-full;
}
```

4. You can also:

- [add your own theme](/docs/add-themes)
- opt-out of daisyUI's design decisions [only use a unstyled (skeleton) version of daisyUI](/docs/config).
