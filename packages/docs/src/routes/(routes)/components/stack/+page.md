---
title: Stack
desc: Stack visually puts elements on top of each other.
layout: components
classnames:
  component:
  - class: stack
    desc: Puts the children elements on top of each other
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~3 divs without stack
<div>
  <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
  <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
  <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
</div>

```html
<div>
  <div class="bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">1</div>
  <div class="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">2</div>
  <div class="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">
    3
  </div>
</div>
```


### ~3 divs with stack
<div class="stack mb-4">
  <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
  <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
  <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
</div>

```html
<div class="$$stack">
  <div class="bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">1</div>
  <div class="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">2</div>
  <div class="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">
    3
  </div>
</div>
```


### ~stacked images
<div class="stack mb-4">
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS example 1" class="rounded w-28" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS example 2" class="rounded w-28" />
  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS example 3" class="rounded w-28" />
</div>

```html
<div class="$$stack">
  <img
    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    class="rounded" />
  <img
    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    class="rounded" />
  <img
    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    class="rounded" />
</div>
```


### ~stacked cards
<div class="stack mb-4">
  <div class="text-center border border-base-content card w-36 bg-base-100">
    <div class="card-body">A</div>
  </div>
  <div class="text-center border border-base-content card w-36 bg-base-100">
    <div class="card-body">B</div>
  </div>
  <div class="text-center border border-base-content card w-36 bg-base-100">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack">
  <div class="border-base-content $$card bg-base-100 w-36 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 w-36 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 w-36 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```


### ~stacked cards with shadow
<div class="stack mb-4">
  <div class="text-center shadow-md w-36 card bg-base-200">
    <div class="card-body">A</div>
  </div>
  <div class="text-center shadow w-36 card bg-base-200">
    <div class="card-body">B</div>
  </div>
  <div class="text-center shadow-sm w-36 card bg-base-200">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack">
  <div class="$$card bg-base-200 w-36 text-center shadow-md">
    <div class="$$card-body">A</div>
  </div>
  <div class="$$card bg-base-200 w-36 text-center shadow">
    <div class="$$card-body">B</div>
  </div>
  <div class="$$card bg-base-200 w-36 text-center shadow-sm">
    <div class="$$card-body">C</div>
  </div>
</div>
```


### ~stacked cards
<div class="stack mb-4">
  <div class="shadow-md card bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="shadow card bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="shadow-sm card bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>

```html
<div class="$$stack">
  <div class="$$card bg-primary text-primary-content shadow-md">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card bg-primary text-primary-content shadow">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card bg-primary text-primary-content shadow-sm">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
```
