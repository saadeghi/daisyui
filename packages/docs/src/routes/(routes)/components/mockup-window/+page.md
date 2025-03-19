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
  import Translate from "$components/Translate.svelte"
</script>

### ~window mockup with border
<div class="mockup-window border border-base-300 w-full">
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>

```html
<div class="$$mockup-window border border-base-300 w-full">
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>
```


### ~window mockup with background color
<div class="mockup-window bg-base-100 border border-base-300 w-full">
  <div class="grid place-content-center h-80">Hello!</div>
</div>

```html
<div class="$$mockup-window bg-base-100 border border-base-300">
  <div class="grid place-content-center h-80">Hello!</div>
</div>
```
