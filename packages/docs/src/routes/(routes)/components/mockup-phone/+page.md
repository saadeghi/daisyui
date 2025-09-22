---
title: Phone mockup
desc: Phone mockup shows a mockup of an iPhone.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/mockup.css
layout: components
classnames:
  component:
  - class: mockup-phone
    desc: Phone mockup
  part:
  - class: mockup-phone-camera
    desc: Camera part
  - class: mockup-phone-display
    desc: Display part
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~iPhone mockup

<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display text-white bg-neutral-900 grid place-content-center">It's Glowtime.</div>
</div>

```html
<div class="$$mockup-phone">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display text-white grid place-content-center bg-neutral-900">
    It's Glowtime.
  </div>
</div>
```

### ~With color and wallpaper

<div class="mockup-phone border-[#ff8938]">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp?1"/>
  </div>
</div>

```html
<div class="$$mockup-phone border-[#ff8938]">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
  </div>
</div>
```
