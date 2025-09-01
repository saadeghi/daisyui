---
title: Mask
desc: Mask crops the content of the element to common shapes.
layout: components
classnames:
  component:
  - class: mask
    desc: Masks the content with shape
  style:
  - class: mask-squircle
    desc: squircle
  - class: mask-heart
    desc: heart
  - class: mask-hexagon
    desc: hexagon vertical
  - class: mask-hexagon-2
    desc: hexagon horizontal
  - class: mask-decagon
    desc: decagon
  - class: mask-pentagon
    desc: pentagon
  - class: mask-diamond
    desc: diamond
  - class: mask-square
    desc: square
  - class: mask-circle
    desc: circle
  - class: mask-star
    desc: star
  - class: mask-star-2
    desc: star (bold)
  - class: mask-triangle
    desc: triangle pointing top
  - class: mask-triangle-2
    desc: triangle pointing down
  - class: mask-triangle-3
    desc: triangle pointing left
  - class: mask-triangle-4
    desc: triangle pointing right
  modifier:
  - class: mask-half-1
    desc: Crops only the first half of mask
  - class: mask-half-2
    desc: Crops only the second half of mask
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Squircle
<img alt="Squircle CSS mask" class="mask mask-squircle w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-squircle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Heart
<img alt="Heart CSS mask" class="mask mask-heart w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-heart"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Hexagon
<img alt="Hexagon CSS mask" class="mask mask-hexagon w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-hexagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Hexagon-2 (horizontal hexagon)
<img alt="Hexagon-2 CSS mask" class="mask mask-hexagon-2 w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-hexagon-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Decagon
<img alt="Decagon CSS mask" class="mask mask-decagon w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-decagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Pentagon
<img alt="Pentagon CSS mask" class="mask mask-pentagon w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-pentagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Diamond
<img alt="Diamond CSS mask" class="mask mask-diamond w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-diamond"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Square
<img alt="Square CSS mask" class="mask mask-square w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-square"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Circle
<img alt="Circle CSS mask" class="mask mask-circle w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-circle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```

### ~Star
<img alt="Star CSS mask" class="mask mask-star w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-star"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Star-2 (bold star)
<img alt="Star-2 CSS mask" class="mask mask-star-2 w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-star-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Triangle (pointing top)
<img alt="Triangle CSS mask" class="mask mask-triangle w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-triangle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Triangle-2 (pointing down)
<img alt="Triangle-2 CSS mask" class="mask mask-triangle-2 w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-triangle-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Triangle-3 (pointing left)
<img alt="Triangle-3 CSS mask" class="mask mask-triangle-3 w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-triangle-3"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```


### ~Triangle-4 (pointing right)
<img alt="Triangle-4 CSS mask" class="mask mask-triangle-4 w-40 h-40" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />

```html
<img
  class="$$mask $$mask-triangle-4"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
