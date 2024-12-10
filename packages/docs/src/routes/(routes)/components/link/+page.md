---
title: Link
desc: Link adds the missing underline style to links.
layout: components
classnames:
  component:
  - class: link
    desc: Adds underline
  style:
  - class: link-hover
    desc: Only shows underline on hover
  color:
  - class: link-neutral
    desc: neutral color
  - class: link-primary
    desc: primary color
  - class: link-secondary
    desc: secondary color
  - class: link-accent
    desc: accent color
  - class: link-success
    desc: success color
  - class: link-info
    desc: info color
  - class: link-warning
    desc: warning color
  - class: link-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Link">
<button class="link">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Link">
<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a
  <button class="link">normal link</button> again.
</p>
{#snippet html()}

```html
<p>
  Tailwind CSS resets the style of links by default.
  <br />
  Add "link" class to make it look like a
  <a class="$$link">normal link</a>
  again.
</p>
```

{/snippet}
</Component>

<Component title="Primary color">
<button class="link link-primary">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-primary">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Secondary color">
<button class="link link-secondary">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-secondary">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Accent color">
<button class="link link-accent">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-accent">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Neutral color">
<button class="link link-neutral">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-neutral">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Success color">
<button class="link link-success">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-success">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Info color">
<button class="link link-info">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-info">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Warning color">
<button class="link link-warning">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-warning">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Error color">
<button class="link link-error">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-error">I'm a simple link</a>
```

{/snippet}
</Component>

<Component title="Show underline only on hover">
<button class="link link-hover">I'm a simple link</button>
{#snippet html()}

```html
<a class="$$link $$link-hover">I'm a simple link</a>
```

{/snippet}
</Component>
