---
title: Button
desc: Buttons allow the user to take actions or make choices.
layout: components
showComponentPageTabs: true
classnames:
  component:
  - class: 'btn'
    desc: Button
  color:
  - class: btn-neutral
    desc: neutral color
  - class: btn-primary
    desc: primary color
  - class: btn-secondary
    desc: secondary color
  - class: btn-accent
    desc: accent color
  - class: btn-info
    desc: info color
  - class: btn-success
    desc: success color
  - class: btn-warning
    desc: warning color
  - class: btn-error
    desc: error color
  style:
  - class: btn-outline
    desc: outline style
  - class: btn-soft
    desc: soft style
  - class: btn-ghost
    desc: ghost style
  - class: btn-link
    desc: looks like a link
  - class: btn-active
    desc: looks active
  - class: btn-disabled
    desc: looks disabled
  size:
  - class: btn-xs
    desc: Extra small size
  - class: btn-sm
    desc: Small size
  - class: btn-md
    desc: Medium size (default)
  - class: btn-lg
    desc: Large size
  - class: btn-xl
    desc: Extra large size
  modifier:
  - class: btn-wide
    desc: more horizontal padding
  - class: btn-block
    desc: Full width
  - class: btn-square
    desc: 1:1 ratio
  - class: btn-circle
    desc: 1:1 ratio with rounded corners
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Button">
<button class="btn">Button</button>
{#snippet html()}

```html
<button class="$$btn">Button</button>
```

{/snippet}
</Component>

<Component title="Buttons with brand colors">
<button class="btn">Button</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
{#snippet html()}

```html
<button class="$$btn">Button</button>
<button class="$$btn $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-primary">Primary</button>
<button class="$$btn $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-accent">Accent</button>
<button class="$$btn $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-link">Link</button>
```

{/snippet}
</Component>

<Component title="Active buttons">
<button class="btn btn-active">Default</button>
<button class="btn btn-active btn-neutral">Neutral</button>
<button class="btn btn-active btn-primary">Primary</button>
<button class="btn btn-active btn-secondary">Secondary</button>
<button class="btn btn-active btn-accent">Accent</button>
<button class="btn btn-active btn-ghost">Ghost</button>
<button class="btn btn-active btn-link">Link</button>
{#snippet html()}

```html
<button class="$$btn $$btn-active">Default</button>
<button class="$$btn $$btn-active $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-active $$btn-primary">Primary</button>
<button class="$$btn $$btn-active $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-active $$btn-accent">Accent</button>
<button class="$$btn $$btn-active $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-active $$btn-link">Link</button>
```

{/snippet}
</Component>

<Component title="Buttons with state colors">
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
{#snippet html()}

```html
<button class="$$btn $$btn-info">Info</button>
<button class="$$btn $$btn-success">Success</button>
<button class="$$btn $$btn-warning">Warning</button>
<button class="$$btn $$btn-error">Error</button>
```

{/snippet}
</Component>

<Component title="Outline buttons">
<button class="btn btn-outline">Default</button>
<button class="btn btn-outline btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Secondary</button>
<button class="btn btn-outline btn-accent">Accent</button>
{#snippet html()}

```html
<button class="$$btn $$btn-outline">Default</button>
<button class="$$btn $$btn-outline $$btn-primary">Primary</button>
<button class="$$btn $$btn-outline $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-outline $$btn-accent">Accent</button>
```

{/snippet}
</Component>

<Component title="Outline buttons with state colors">
<button class="btn btn-outline btn-info">Info</button>
<button class="btn btn-outline btn-success">Success</button>
<button class="btn btn-outline btn-warning">Warning</button>
<button class="btn btn-outline btn-error">Error</button>
{#snippet html()}

```html
<button class="$$btn $$btn-outline $$btn-info">Info</button>
<button class="$$btn $$btn-outline $$btn-success">Success</button>
<button class="$$btn $$btn-outline $$btn-warning">Warning</button>
<button class="$$btn $$btn-outline $$btn-error">Error</button>
```

{/snippet}
</Component>

<Component title="Button sizes">
<button class="btn btn-lg">Large</button>
<button class="btn">Normal</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Tiny</button>
{#snippet html()}

```html
<button class="$$btn $$btn-lg">Large</button>
<button class="$$btn">Normal</button>
<button class="$$btn $$btn-sm">Small</button>
<button class="$$btn $$btn-xs">Tiny</button>
```

{/snippet}
</Component>

<Component title="Responsive button" desc="This button will have different sizes on different browser viewpoints">
<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
{#snippet html()}

```html
<button class="$$btn $$btn-xs sm:$$btn-sm md:$$btn-md lg:$$btn-lg">Responsive</button>
```

{/snippet}
</Component>

<Component title="Wide button">
<button class="btn btn-wide">Wide</button>
{#snippet html()}

```html
<button class="$$btn $$btn-wide">Wide</button>
```

{/snippet}
</Component>

<Component title="Glass button" bg="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp">
<button class="btn glass">Glass button</button>
{#snippet html()}

```html
<button class="$$btn $$glass">Glass button</button>
```

{/snippet}
</Component>

<Component title="Buttons with different HTML tags" desc="You can use `btn` class on <button>, <input>, <a>, etc...">
<a href="/components/button/#buttons-with-different-html-tags" role="button" class="btn">Link</a>
<button type="submit" class="btn">Button</button>
<input type="button" value="Input" class="btn" />
<input type="submit" value="Submit" class="btn" />
<input type="radio" aria-label="Radio" class="btn" />
<input type="checkbox" aria-label="Checkbox" class="btn" />
<input type="reset" value="Reset" class="btn">
{#snippet html()}

```html
<a role="button" class="$$btn">Link</a>
<button type="submit" class="$$btn">Button</button>
<input type="button" value="Input" class="$$btn" />
<input type="submit" value="Submit" class="$$btn" />
<input type="radio" aria-label="Radio" class="$$btn" />
<input type="checkbox" aria-label="Checkbox" class="$$btn" />
<input type="reset" value="Reset" class="$$btn" />
```

{/snippet}
</Component>

<Component title="Disabled buttons">
<button class="btn" disabled="disabled">Disabled using attribute</button>
<button class="btn btn-disabled" tabindex="-1" aria-disabled="true">Disabled using class name</button>
{#snippet html()}

```html
<button class="$$btn" disabled="disabled">Disabled using attribute</button>
<button class="$$btn $$btn-disabled" tabindex="-1" role="button" aria-disabled="true">
  Disabled using class name
</button>
```

{/snippet}
</Component>

<Component title="Square button">
<button class="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
{#snippet html()}

```html
<button class="$$btn $$btn-square">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
<button class="$$btn $$btn-square $$btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

{/snippet}
</Component>

<Component title="Circle button">
<button class="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
{#snippet html()}

```html
<button class="$$btn $$btn-circle">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
<button class="$$btn $$btn-circle $$btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

{/snippet}
</Component>

<Component title="Icon at start">
<button class="btn">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button>
{#snippet html()}

```html
<button class="$$btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  Button
</button>
```

{/snippet}
</Component>

<Component title="Icon at end">
<button class="btn">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
{#snippet html()}

```html
<button class="$$btn">
  Button
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
```

{/snippet}
</Component>

<Component title="Button block">
<button class="btn btn-block">block</button>
{#snippet html()}

```html
<button class="$$btn $$btn-block">block</button>
```

{/snippet}
</Component>

<Component title="Button with loading spinner">
<button class="btn btn-square">
  <span class="loading loading-spinner"></span>
</button>
{#snippet html()}

```html
<button class="$$btn $$btn-square">
  <span class="$$loading $$loading-spinner"></span>
</button>
```

{/snippet}
</Component>

<Component title="Button with loading spinner and text">
<button class="btn">
  <span class="loading loading-spinner"></span>
  loading
</button>
{#snippet html()}

```html
<button class="$$btn">
  <span class="$$loading $$loading-spinner"></span>
  loading
</button>
```

{/snippet}
</Component>

<Component title="Button without click animation">
<button class="btn no-animation">I don't have click animation</button>
{#snippet html()}

```html
<button class="$$btn no-animation">I don't have click animation</button>
```

{/snippet}
</Component>
