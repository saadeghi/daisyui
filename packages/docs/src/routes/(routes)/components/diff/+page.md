---
title: Diff
desc: Diff component shows a side-by-side comparison of two items.
layout: components
classnames:
  component:
  - class: diff
    desc: Container element
  part:
  - class: diff-item-1
    desc: First item
  - class: diff-item-2
    desc: Second item
  - class: diff-resizer
    desc: The resizer control
# browserSupport:
    chrome: 105
    firefox: 110
    safari: 16
    iossafari: null
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Diff
<div class="diff rounded-field aspect-16/9">
  <div class="diff-item-1">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div class="diff-item-2">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div class="diff-resizer"></div>
</div>

```~html
<div class="$$diff aspect-16/9">
  <div class="$$diff-item-1">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div class="$$diff-item-2">
    <img
      alt="daisy"
      src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div class="$$diff-resizer"></div>
</div>
```


### ~Diff text
<div class="diff rounded-field aspect-16/9">
  <div class="diff-item-1">
    <div class="bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="diff-item-2">
    <div class="bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="diff-resizer"></div>
</div>

```~html
<div class="$$diff aspect-16/9">
  <div class="$$diff-item-1">
    <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div class="$$diff-item-2">
    <div class="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div class="$$diff-resizer"></div>
</div>
```

