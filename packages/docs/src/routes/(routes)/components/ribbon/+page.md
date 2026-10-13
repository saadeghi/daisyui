---
title: Ribbon
desc: Ribbon is a corner label for cards and boxes, useful for showing a badge like "NEW" or "SALE" on a corner of an element.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/ribbon.css
layout: components
classnames:
  component:
  - class: ribbon
    desc: Ribbon label, place it inside an element that has relative position
  modifier:
  - class: ribbon-start
    desc: Sticks to the start side instead of the end side
  color:
  - class: ribbon-neutral
    desc: neutral color
  - class: ribbon-primary
    desc: primary color
  - class: ribbon-secondary
    desc: secondary color
  - class: ribbon-accent
    desc: accent color
  - class: ribbon-info
    desc: info color
  - class: ribbon-success
    desc: success color
  - class: ribbon-warning
    desc: warning color
  - class: ribbon-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Ribbon
#### Put the ribbon inside a card or any element that has relative position. It sticks to the top end corner and folds over the edge
<div class="card bg-base-100 w-72 shadow-sm">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>The ribbon sits on the top end corner of the card</p>
  </div>
  <span class="ribbon">NEW</span>
</div>

```html
<div class="$$card bg-base-100 w-72 shadow-sm">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card title</h2>
    <p>The ribbon sits on the top end corner of the card</p>
  </div>
  <span class="$$ribbon">NEW</span>
</div>
```

### ~Ribbon at the start side
<div class="card bg-base-100 w-72 shadow-sm">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>ribbon-start sticks the ribbon to the start side</p>
  </div>
  <span class="ribbon ribbon-start ribbon-primary">SALE</span>
</div>

```html
<div class="$$card bg-base-100 w-72 shadow-sm">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card title</h2>
    <p>ribbon-start sticks the ribbon to the start side</p>
  </div>
  <span class="$$ribbon $$ribbon-start $$ribbon-primary">SALE</span>
</div>
```

### ~Ribbon colors
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-primary">Primary</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-secondary">Secondary</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-accent">Accent</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-info">Info</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-success">Success</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-warning">Warning</span></div>
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon ribbon-error">Error</span></div>

```html
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-primary">Primary</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-secondary">Secondary</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-accent">Accent</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-info">Info</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-success">Success</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-warning">Warning</span>
</div>
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon $$ribbon-error">Error</span>
</div>
```

### ~Custom position
#### Use top utility classes to move the ribbon vertically
<div class="bg-base-200 rounded-box relative h-24 w-52"><span class="ribbon top-10 ribbon-error">-50%</span></div>

```html
<div class="bg-base-200 rounded-box relative h-24 w-52">
  <span class="$$ribbon top-10 $$ribbon-error">-50%</span>
</div>
```
