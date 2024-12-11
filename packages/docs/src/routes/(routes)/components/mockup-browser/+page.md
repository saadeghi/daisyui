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
</script>

### ~browser mockup with border
<div class="border mockup-browser border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input border border-base-300">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>

```html
<div class="$$mockup-browser border-base-300 border">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input border-base-300 border">https://daisyui.com</div>
  </div>
  <div class="border-base-300 flex justify-center border-t px-4 py-16">Hello!</div>
</div>
```


### ~browser mockup with background color
<div class="border mockup-browser bg-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>

```html
<div class="$$mockup-browser bg-base-300 border">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
</div>
```
