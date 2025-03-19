---
title: Browser mockup
desc: Browser mockup shows a box that looks like a browser window.
layout: components
classnames:
  component:
  - class: mockup-browser
    desc: Browser mockup
  part:
  - class: mockup-browser-toolbar
    desc: Toolbar part which can include addressbar, etc
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~browser mockup with border
<div class="mockup-browser border border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>

```html
<div class="$$mockup-browser border-base-300 border w-full">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>
```


### ~browser mockup with background color
<div class="mockup-browser bg-base-100 w-full border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center h-80">Hello!</div>
</div>

```html
<div class="$$mockup-browser border border-base-300 w-full">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center h-80">Hello!</div>
</div>
```
