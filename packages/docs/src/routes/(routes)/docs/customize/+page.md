---
title: Customize daisyUI components
desc: How to customize daisyUI?
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<p><Translate text="daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything." /></p>

<p><Translate text="But you can still customize components in many ways." /></p>

- <Translate text="Let's say, you want to customize this button:" />

```html
<button class="btn">Button</button>
```

<button class="btn">Button</button>

1. <Translate text="You can use daisyUI utility classes:" />

```html
<button class="btn btn-primary">One</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>
```

<button class="btn btn-primary">One</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>

2. <Translate text="You can use Tailwind's utility classes:" />

```html
<button class="btn rounded-full">One</button>
<button class="btn rounded-none px-16">Two</button>
```

<button class="rounded-full btn">One</button>
<button class="px-16 rounded-none btn">Two</button>

3. <Translate text="You can customize components on your CSS file, using Tailwind's @apply directive:" />

```postcss
@utility btn {
  @apply rounded-full;
}
```
