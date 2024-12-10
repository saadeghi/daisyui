---
title: Phone mockup
desc: Phone mockup shows a mockup of an iPhone.
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
</script>

<Component title="iPhone mockup">
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$mockup-phone">
  <div class="$$camera"></div>
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="With color">
<div class="mockup-phone border-primary">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
{#snippet html()}

```html
<div class="$$mockup-phone border-primary">
  <div class="$$camera"></div>
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>
```

{/snippet}
</Component>
