---
title: Tooltip
desc: Tooltip can be used to show a message when hovering over an element.
layout: components
classnames:
  component:
  - class: tooltip
    desc: Container element
  placement:
  - class: tooltip-top
    desc: Put tooltip on top
  - class: tooltip-bottom
    desc: Put tooltip on bottom
  - class: tooltip-left
    desc: Put tooltip on left
  - class: tooltip-right
    desc: Put tooltip on right
  modifier:
  - class: tooltip-open
    desc: Force open tooltip
  color:
  - class: tooltip-primary
    desc: primary color
  - class: tooltip-secondary
    desc: secondary color
  - class: tooltip-accent
    desc: accent color
  - class: tooltip-info
    desc: info color
  - class: tooltip-success
    desc: success color
  - class: tooltip-warning
    desc: warning color
  - class: tooltip-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Tooltip">
<div class="my-6">
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```

{/snippet}
</Component>

<Component title="Force open">
<div class="my-6">
  <div class="tooltip tooltip-open" data-tip="hello">
    <button class="btn">Force open</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open" data-tip="hello">
  <button class="$$btn">Force open</button>
</div>
```

{/snippet}
</Component>

<Component title="Top">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
    <button class="btn">Top</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button class="$$btn">Top</button>
</div>
```

{/snippet}
</Component>

<Component title="Bottom">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
    <button class="btn">Bottom</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button class="$$btn">Bottom</button>
</div>
```

{/snippet}
</Component>

<Component title="Left">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
    <button class="btn">Left</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button class="$$btn">Left</button>
</div>
```

{/snippet}
</Component>

<Component title="Right">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
    <button class="btn">Right</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button class="$$btn">Right</button>
</div>
```

{/snippet}
</Component>

<Component title="Primary color">
<div class="my-6">
  <div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
    <button class="btn btn-primary">primary</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button class="$$btn $$btn-primary">primary</button>
</div>
```

{/snippet}
</Component>

<Component title="Secondary color">
<div class="my-6">
  <div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
    <button class="btn btn-secondary">secondary</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button class="$$btn $$btn-secondary">secondary</button>
</div>
```

{/snippet}
</Component>

<Component title="Accent color">
<div class="my-6">
  <div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
    <button class="btn btn-accent">accent</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button class="$$btn $$btn-accent">accent</button>
</div>
```

{/snippet}
</Component>

<Component title="Info color">
<div class="my-6">
  <div data-tip="info" class="tooltip tooltip-open tooltip-info">
    <button class="btn btn-info">info</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button class="$$btn $$btn-info">info</button>
</div>
```

{/snippet}
</Component>

<Component title="Success color">
<div class="my-6">
  <div data-tip="success" class="tooltip tooltip-open tooltip-success">
    <button class="btn btn-success">success</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button class="$$btn $$btn-success">success</button>
</div>
```

{/snippet}
</Component>

<Component title="Warning color">
<div class="my-6">
  <div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
    <button class="btn btn-warning">warning</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button class="$$btn $$btn-warning">warning</button>
</div>
```

{/snippet}
</Component>

<Component title="Error color">
<div class="my-6">
  <div data-tip="error" class="tooltip tooltip-open tooltip-error">
    <button class="btn btn-error">error</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button class="$$btn $$btn-error">error</button>
</div>
```

{/snippet}
</Component>

<Component title="Responsive tooltip. only show for large screen">
<div class="my-6">
  <div class="lg:tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
{#snippet html()}

```html
<div class="$$lg:tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```

{/snippet}
</Component>
