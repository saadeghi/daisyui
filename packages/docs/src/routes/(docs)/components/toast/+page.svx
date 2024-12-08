---
title: Toast
desc: Toast is a wrapper to stack elements, positioned on the corner of page.
layout: components
classnames:
  component:
  - class: toast
    desc: Container element that sticks to the corner of page
  placement:
  - class: toast-start
    desc: align horizontally to the left
  - class: toast-center
    desc: align horizontally to the center
  - class: toast-end
    desc: align horizontally to the right (default)
  - class: toast-top
    desc: align vertically to top
  - class: toast-middle
    desc: align vertically to middle
  - class: toast-bottom
    desc: align vertically to bottom (default)
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="toast with alert inside">
<div class="w-full h-64 relative">
  <div class="toast absolute">
    <div class="alert alert-info">
      <span>New message arrived.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast">
  <div class="$$alert $$alert-info">
    <span>New message arrived.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-top toast-start">
<div class="w-full h-64 relative">
  <div class="toast toast-top toast-start absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-top $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-top toast-center">
<div class="w-full h-64 relative">
  <div class="toast toast-top toast-center absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-top $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-top toast-end">
<div class="w-full h-64 relative">
  <div class="toast toast-top toast-end absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-top $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-start toast-middle">
<div class="w-full h-64 relative">
  <div class="toast toast-start toast-middle absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-start $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-center toast-middle">
<div class="w-full h-64 relative">
  <div class="toast toast-center toast-middle absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-center $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-end toast-middle">
<div class="w-full h-64 relative">
  <div class="toast toast-end toast-middle absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-end $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-start toast-bottom (default)">
<div class="w-full h-64 relative">
  <div class="toast toast-start absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-center toast-bottom (default)">
<div class="w-full h-64 relative">
  <div class="toast toast-center absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="toast-end (default) toast-bottom (default)">
<div class="w-full h-64 relative">
  <div class="toast toast-end absolute">
    <div class="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div class="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$toast $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

{/snippet}
</Component>
