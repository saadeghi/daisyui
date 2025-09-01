---
title: Hover Gallery
desc: Hover Gallery is container of images. The first image is visible be default and when we hover it horizontally, other images show up. Hover Gallery is useful for product cards in ecommerce sites, portfoilios or in image galleries. Hover Gallery can include up to 10 images.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/hovergallery.css
layout: components
classnames:
  component:
    - class: hover-gallery
      desc: Container <div> or <figure> that includes images
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### How it works

The first image is visible by default, the other image will create invisible columns and hovering each column, reveals that image. For example, here we have 4 images. Try hovering on each column to see 2nd, 3rd and 4th image.

<div class="flex justify-center not-prose">
  <div class="grid *:[grid-area:1/1] rounded-box overflow-hidden">
    <figure class="hover-gallery max-w-60">
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
    </figure>
    <div class="grid grid-cols-3 pointer-events-none font-mono *:to-black/10 *:via-transparent *:from-white/10 *:bg-linear-80 *:grid *:place-content-center text-white text-shadow-lg">
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

  </div>
</div>

### ~Hover Gallery

#### Move your mouse on the image horizontally

<figure class="hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>

```html
<figure class="$$hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>
```

### ~Hover Gallery in a card

<div class="card card-sm bg-base-200 max-w-60 shadow">
  <figure class="hover-gallery">
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
  </figure>
  <div class="card-body">
    <h2 class="card-title flex justify-between">
      daisyUI Hat
      <span class="font-normal">$25</span>
    </h2>
    <p>High Quality classic cap hat with stitch logo</p>
  </div>
</div>

```html
<div class="$$card $$card-sm bg-base-200 max-w-60 shadow">
  <figure class="$$hover-gallery">
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title flex justify-between">
      daisyUI Hat
      <span class="font-normal">$25</span>
    </h2>
    <p>High Quality classic cap hat with stitch logo</p>
  </div>
</div>
```
