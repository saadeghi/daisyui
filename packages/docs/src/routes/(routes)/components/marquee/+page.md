---
title: Marquee
desc: Marquee scrolls its content in an infinite loop. It pauses for reduced motion preference and scrolls the other way in RTL layouts automatically.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/marquee.css
layout: components
classnames:
  component:
  - class: marquee
    desc: Marquee container, needs two copies of the content
  modifier:
  - class: marquee-reverse
    desc: Scrolls the other way
  - class: marquee-vertical
    desc: Scrolls vertically
  - class: marquee-pause-hover
    desc: Pauses the animation on hover
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Marquee
#### Put two copies of the content inside the marquee, so the loop is seamless. Hide the second copy from screen readers using aria-hidden
<div class="marquee bg-base-200 rounded-box max-w-md">
  <div class="gap-8 pe-8 py-3">
    <span class="badge badge-neutral">daisyUI</span>
    <span class="badge badge-primary">Tailwind CSS</span>
    <span class="badge badge-secondary">Components</span>
    <span class="badge badge-accent">Themes</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span class="badge badge-neutral">daisyUI</span>
    <span class="badge badge-primary">Tailwind CSS</span>
    <span class="badge badge-secondary">Components</span>
    <span class="badge badge-accent">Themes</span>
  </div>
</div>

```html
<div class="$$marquee">
  <div class="gap-8 pe-8 py-3">
    <span class="$$badge $$badge-neutral">daisyUI</span>
    <span class="$$badge $$badge-primary">Tailwind CSS</span>
    <span class="$$badge $$badge-secondary">Components</span>
    <span class="$$badge $$badge-accent">Themes</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span class="$$badge $$badge-neutral">daisyUI</span>
    <span class="$$badge $$badge-primary">Tailwind CSS</span>
    <span class="$$badge $$badge-secondary">Components</span>
    <span class="$$badge $$badge-accent">Themes</span>
  </div>
</div>
```

### ~Reverse direction, pause on hover
<div class="marquee marquee-reverse marquee-pause-hover bg-base-200 rounded-box max-w-md">
  <div class="gap-8 pe-8 py-3">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
    <span>Four</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
    <span>Four</span>
  </div>
</div>

```html
<div class="$$marquee $$marquee-reverse $$marquee-pause-hover">
  <div class="gap-8 pe-8 py-3">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
    <span>Four</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
    <span>Four</span>
  </div>
</div>
```

### ~Vertical marquee
<div class="marquee marquee-vertical bg-base-200 rounded-box h-32 w-64">
  <div class="gap-4 pb-4 px-4">
    <span>Great component library</span>
    <span>Love the themes</span>
    <span>So easy to use</span>
  </div>
  <div class="gap-4 pb-4 px-4" aria-hidden="true">
    <span>Great component library</span>
    <span>Love the themes</span>
    <span>So easy to use</span>
  </div>
</div>

```html
<div class="$$marquee $$marquee-vertical h-32">
  <div class="gap-4 pb-4 px-4">
    <span>Great component library</span>
    <span>Love the themes</span>
    <span>So easy to use</span>
  </div>
  <div class="gap-4 pb-4 px-4" aria-hidden="true">
    <span>Great component library</span>
    <span>Love the themes</span>
    <span>So easy to use</span>
  </div>
</div>
```

### ~Custom speed
#### Set the duration of one full loop using the --marquee-duration CSS variable
<div class="marquee [--marquee-duration:5s] bg-base-200 rounded-box max-w-md">
  <div class="gap-8 pe-8 py-3">
    <span>fast</span>
    <span>faster</span>
    <span>fastest</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span>fast</span>
    <span>faster</span>
    <span>fastest</span>
  </div>
</div>

```html
<div class="$$marquee [--marquee-duration:5s]">
  <div class="gap-8 pe-8 py-3">
    <span>fast</span>
    <span>faster</span>
    <span>fastest</span>
  </div>
  <div class="gap-8 pe-8 py-3" aria-hidden="true">
    <span>fast</span>
    <span>faster</span>
    <span>fastest</span>
  </div>
</div>
```
