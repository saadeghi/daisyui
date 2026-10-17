---
title: Diff
desc: Diff component shows a side-by-side comparison of two items.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/diff.css
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
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> The `diff-resizer` range input moves the divider in browsers with scroll-driven animations. In other browsers, drag the knob on the divider (the native resize handle of `diff-item-1` sits there). The input is hidden from the keyboard (`tabindex="-1"`); focus the `diff` container to show the first item, then `diff-item-1` to show the second one. Markup that uses an empty `diff-resizer` div keeps working.

### ~Diff
<figure class="diff rounded-field aspect-16/9" tabindex="0">
  <div class="diff-item-1" role="img" tabindex="0">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div class="diff-item-2" role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <input type="range" min="0" max="100" value="50" class="diff-resizer" tabindex="-1" aria-label="Adjust the diff divider position" />
</figure>

```html
<figure class="$$diff aspect-16/9" tabindex="0">
  <div class="$$diff-item-1" role="img" tabindex="0">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div class="$$diff-item-2" role="img">
    <img
      alt="daisy"
      src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <input type="range" min="0" max="100" value="50" class="$$diff-resizer" tabindex="-1" aria-label="Adjust the diff divider position" />
</figure>
```


### ~Diff text
<figure class="diff rounded-field aspect-16/9" tabindex="0">
  <div class="diff-item-1" role="img" tabindex="0">
    <div class="bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="diff-item-2" role="img">
    <div class="bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <input type="range" min="0" max="100" value="50" class="diff-resizer" tabindex="-1" aria-label="Adjust the diff divider position" />
</figure>

```html
<figure class="$$diff aspect-16/9" tabindex="0">
  <div class="$$diff-item-1" role="img" tabindex="0">
    <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div class="$$diff-item-2" role="img">
    <div class="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <input type="range" min="0" max="100" value="50" class="$$diff-resizer" tabindex="-1" aria-label="Adjust the diff divider position" />
</figure>
```
