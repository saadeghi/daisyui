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

### ~Button
<button class="btn">Default</button>

```html
<button class="$$btn">Default</button>
```

### ~Button sizes
<button class="btn btn-xs">Xsmall</button>
<button class="btn btn-sm">Small</button>
<button class="btn">Medium</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Xlarge</button>

```html
<button class="$$btn $$btn-xs">Xsmall</button>
<button class="$$btn $$btn-sm">Small</button>
<button class="$$btn">Medium</button>
<button class="$$btn $$btn-lg">Large</button>
<button class="$$btn $$btn-xl">Xlarge</button>
```

### ~Responsive button
#### This button will have different sizes on different browser viewpoints

<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>

```html
<button class="$$btn $$btn-xs sm:$$btn-sm md:$$btn-md lg:$$btn-lg xl:$$btn-xl">Responsive</button>
```

### ~Buttons colors
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>

```html
<button class="$$btn $$btn-primary">Primary</button>
<button class="$$btn $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-accent">Accent</button>
<button class="$$btn $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-info">Info</button>
<button class="$$btn $$btn-success">Success</button>
<button class="$$btn $$btn-warning">Warning</button>
<button class="$$btn $$btn-error">Error</button>
```

### ~Soft buttons
<button class="btn btn-soft btn-primary">Primary</button>
<button class="btn btn-soft btn-secondary">Secondary</button>
<button class="btn btn-soft btn-accent">Accent</button>
<button class="btn btn-soft btn-neutral">Neutral</button>
<button class="btn btn-soft btn-info">Info</button>
<button class="btn btn-soft btn-success">Success</button>
<button class="btn btn-soft btn-warning">Warning</button>
<button class="btn btn-soft btn-error">Error</button>

```html
<button class="$$btn $$btn-soft $$btn-primary">Primary</button>
<button class="$$btn $$btn-soft $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-soft $$btn-accent">Accent</button>
<button class="$$btn $$btn-soft $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-soft $$btn-info">Info</button>
<button class="$$btn $$btn-soft $$btn-success">Success</button>
<button class="$$btn $$btn-soft $$btn-warning">Warning</button>
<button class="$$btn $$btn-soft $$btn-error">Error</button>
```

### ~Outline buttons
<button class="btn btn-outline btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Secondary</button>
<button class="btn btn-outline btn-accent">Accent</button>
<button class="btn btn-outline btn-neutral">Neutral</button>
<button class="btn btn-outline btn-info">Info</button>
<button class="btn btn-outline btn-success">Success</button>
<button class="btn btn-outline btn-warning">Warning</button>
<button class="btn btn-outline btn-error">Error</button>

```html
<button class="$$btn $$btn-outline $$btn-primary">Primary</button>
<button class="$$btn $$btn-outline $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-outline $$btn-accent">Accent</button>
<button class="$$btn $$btn-outline $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-outline $$btn-info">Info</button>
<button class="$$btn $$btn-outline $$btn-success">Success</button>
<button class="$$btn $$btn-outline $$btn-warning">Warning</button>
<button class="$$btn $$btn-outline $$btn-error">Error</button>
```

### ~Dash buttons
<button class="btn btn-dash btn-primary">Primary</button>
<button class="btn btn-dash btn-secondary">Secondary</button>
<button class="btn btn-dash btn-accent">Accent</button>
<button class="btn btn-dash btn-neutral">Neutral</button>
<button class="btn btn-dash btn-info">Info</button>
<button class="btn btn-dash btn-success">Success</button>
<button class="btn btn-dash btn-warning">Warning</button>
<button class="btn btn-dash btn-error">Error</button>

```html
<button class="$$btn $$btn-dash $$btn-primary">Primary</button>
<button class="$$btn $$btn-dash $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-dash $$btn-accent">Accent</button>
<button class="$$btn $$btn-dash $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-dash $$btn-info">Info</button>
<button class="$$btn $$btn-dash $$btn-success">Success</button>
<button class="$$btn $$btn-dash $$btn-warning">Warning</button>
<button class="$$btn $$btn-dash $$btn-error">Error</button>
```

### ~Active buttons
<button class="btn btn-active btn-primary">Primary</button>
<button class="btn btn-active btn-secondary">Secondary</button>
<button class="btn btn-active btn-neutral">Neutral</button>
<button class="btn btn-active btn-accent">Accent</button>
<button class="btn btn-active btn-info">Info</button>
<button class="btn btn-active btn-success">Success</button>
<button class="btn btn-active btn-warning">Warning</button>
<button class="btn btn-active btn-error">Error</button>

```html
<button class="$$btn $$btn-active">Default</button>
<button class="$$btn $$btn-active $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-active $$btn-primary">Primary</button>
<button class="$$btn $$btn-active $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-active $$btn-accent">Accent</button>
<button class="$$btn $$btn-active $$btn-info">Info</button>
<button class="$$btn $$btn-active $$btn-success">Success</button>
<button class="$$btn $$btn-active $$btn-warning">Warning</button>
<button class="$$btn $$btn-active $$btn-error">Error</button>
```

### ~Buttons ghost and button link
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

```html
<button class="$$btn $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-link">Link</button>
```


### ~Wide button
<button class="btn btn-wide">Wide</button>

```html
<button class="$$btn $$btn-wide">Wide</button>
```

### ~Buttons with any HTML tags

<a href="/components/button/#buttons-with-any-html-tags" role="button" class="btn">Link</a>
<button type="submit" class="btn">Button</button>
<input type="button" value="Input" class="btn" />
<input type="submit" value="Submit" class="btn" />
<form style="display:contents">
  <input type="radio" aria-label="Radio" class="btn" />
  <input type="checkbox" aria-label="Checkbox" class="btn" />
  <input type="reset" value="Reset" class="btn">
</form>

```html
<a role="button" class="$$btn">Link</a>
<button type="submit" class="$$btn">Button</button>
<input type="button" value="Input" class="$$btn" />
<input type="submit" value="Submit" class="$$btn" />
<input type="radio" aria-label="Radio" class="$$btn" />
<input type="checkbox" aria-label="Checkbox" class="$$btn" />
<input type="reset" value="Reset" class="$$btn" />
```


### ~Disabled buttons
<button class="btn" disabled="disabled">Disabled using attribute</button>
<button class="btn btn-disabled" tabindex="-1" aria-disabled="true">Disabled using class name</button>

```html
<button class="$$btn" disabled="disabled">Disabled using attribute</button>
<button class="$$btn $$btn-disabled" tabindex="-1" role="button" aria-disabled="true">
  Disabled using class name
</button>
```


### ~Circle button and square button
#### square aspect ratio or with rounded corners
<button class="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button class="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>

```html
<button class="$$btn $$btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button class="$$btn $$btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
```


### ~Button with Icon
<button class="btn">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</button>
<button class="btn">
  Like
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>

```html
<button class="$$btn">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</button>
<button class="$$btn">
  Like
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
```

### ~Button block
<button class="btn btn-block">block</button>

```html
<button class="$$btn $$btn-block">block</button>
```


### ~Button with loading spinner
<button class="btn btn-square">
  <span class="loading loading-spinner"></span>
</button>
<button class="btn">
  <span class="loading loading-spinner"></span>
  loading
</button>

```html
<button class="$$btn $$btn-square">
  <span class="$$loading $$loading-spinner"></span>
</button>

<button class="$$btn">
  <span class="$$loading $$loading-spinner"></span>
  loading
</button>
```
