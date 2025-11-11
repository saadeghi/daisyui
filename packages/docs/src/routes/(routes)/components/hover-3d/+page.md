---
title: Hover 3D Card
desc: Hover 3D is a wrapper component that adds a 3D hover effect to its content. When we hover over the component, it tilts and rotates based on the mouse position, creating an interactive 3D effect.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/hover3d.css
layout: components
classnames:
  component:
  - class: hover-3d
    desc: Hover 3D wrapper component
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


`hover-3d` works by placing 8 hover zones on top of the content. Each zone detects mouse movement and applies a slight rotation to the content based on the mouse position within that zone. The combined effect of all 8 zones creates a smooth and responsive 3D tilt effect as the user moves their mouse over the component.

Only use non-interactive content inside the `hover-3d` wrapper. If you want to make the entire card clickable, use a link for the whole `hover-3d` component instead of putting interactive elements like buttons or links inside it.

### ~3D image hover effect
#### Hover to see the 3D effect
<div class="hover-3d my-12 mx-2">
  <figure class="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="Tailwind CSS 3D card" />
  </figure>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

```html
<div class="hover-3d">
  <!-- content -->
  <figure class="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### ~3D card hover effect
#### The whole card can be a link
<div class="hover-3d my-12 mx-2 cursor-pointer">
  <div class="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div class="card-body font-mono">
      <div class="flex justify-between mb-10">
        <div class="font-bold">BANK OF LATVERIA</div>
        <div class="text-5xl opacity-10">❁</div>
      </div>
      <div class="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
      <div class="flex justify-between">
        <div>
          <div class="text-xs opacity-20">CARD HOLDER</div>
          <div>VICTOR VON D.</div>
        </div>
        <div>
          <div class="text-xs opacity-20">EXPIRES</div>
          <div>29/08</div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

```html
<a href="" class="$$hover-3d my-12 mx-2 cursor-pointer">
  
  <!-- content -->
  <div class="$$card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div class="$$card-body">
      <div class="flex justify-between mb-10">
        <div class="font-bold">BANK OF LATVERIA</div>
        <div class="text-5xl opacity-10">❁</div>
      </div>
      <div class="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
      <div class="flex justify-between">
        <div>
          <div class="text-xs opacity-20">CARD HOLDER</div>
          <div>VICTOR VON D.</div>
        </div>
        <div>
          <div class="text-xs opacity-20">EXPIRES</div>
          <div>29/08</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>
```

### ~3D hover effect for image gallery
#### Hover to see the 3D effect
<div class="flex max-sm:flex-col gap-10 p-10 max-sm:w-70">
  <div class="hover-3d">
    <figure class="rounded-xl">
      <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
    </figure>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="hover-3d">
    <figure class="rounded-xl">
      <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
    </figure>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="hover-3d">
    <figure class="rounded-xl">
      <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS Card 3D effect" />
    </figure>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

```html
<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
