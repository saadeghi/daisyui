---
title: Window mockup
desc: Window mockup shows a box that looks like an operating system window.
layout: components
classnames:
  component:
  - class: mockup-window
    desc: OS window mockup
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="window mockup with border">
<div class="border mockup-window border-base-300 w-full">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>
{#snippet html()}

```html
<div class="$$mockup-window border-base-300 border">
  <div class="border-base-300 flex justify-center border-t px-4 py-16">Hello!</div>
</div>
```

{/snippet}
</Component>

<Component title="window mockup with background color">
<div class="border mockup-window bg-base-300 w-full">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>
{#snippet html()}

```html
<div class="$$mockup-window bg-base-300 border">
  <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
</div>
```

{/snippet}
</Component>
