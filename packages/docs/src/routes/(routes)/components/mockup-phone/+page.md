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

> :INFO:
>
> The `mockup-phone` component does not set its own width.
> You must control the width from the wrapper (e.g., `w-full`, `w-[320px]`, or `max-w-sm`).
> The component will then maintain the correct `390 / 845` aspect ratio automatically.  
> This design keeps the component flexible: it adapts to any wrapper width while preserving the phone’s proportions and styling.

### ~iPhone mockup
<div class="mockup-phone w-[390px]">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display text-white grid place-content-center">It's Glowtime.</div>
</div>

```html
<div class="$$mockup-phone w-[390px]">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display text-white grid place-content-center">It's Glowtime.</div>
</div>
```


### ~With color and wallpaper
<div class="mockup-phone border-primary w-[390px]">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp"/>
  </div>
</div>

```html
<div class="$$mockup-phone border-primary w-[390px]">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp"/>
  </div>
</div>
```
