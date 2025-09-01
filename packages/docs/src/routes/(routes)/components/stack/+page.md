---
title: Stack
desc: Stack visually puts elements on top of each other.
layout: components
classnames:
  component:
  - class: stack
    desc: Puts the children elements on top of each other
  modifier:
  - class: stack-top
    desc: Aligns the children elements to the top
  - class: stack-bottom
    desc: Aligns the children elements to the bottom
    default: true
  - class: stack-start
    desc: Aligns the children elements to the start (horizontally)
  - class: stack-end
    desc: Aligns the children elements to the end (horizontally)
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> You can use `w-*` and `h-*` classes to set the width and height of the stack, making all items the same size.

### ~3 divs in a stack
<div class="stack h-20 w-32">
  <div class="grid rounded-box bg-primary text-primary-content place-content-center">1</div>
  <div class="grid rounded-box bg-accent text-accent-content place-content-center">2</div>
  <div class="grid rounded-box bg-secondary text-secondary-content place-content-center">3</div>
</div>

```html
<div class="$$stack h-20 w-32">
  <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
  <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
  <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">
    3
  </div>
</div>
```

### ~stacked images
<div class="stack mb-4 w-48">
  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS example 1" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS example 2" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS example 3" class="rounded-box" />
</div>

```html
<div class="$$stack w-48">
  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="rounded-box" />
</div>
```


### ~stacked cards
<div class="stack mb-4 size-28">
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">A</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">B</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```

### ~stacked cards (top direction)
<div class="stack stack-top mb-4 size-28">
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">A</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">B</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack $$stack-top size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```


### ~stacked cards (start direction)
<div class="stack stack-start mb-4 size-28">
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">A</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">B</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack $$stack-start size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```



### ~stacked cards (end direction)
<div class="stack stack-end mb-4 size-28">
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">A</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">B</div>
  </div>
  <div class="text-center border border-base-content card bg-base-100">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack $$stack-end size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```


### ~stacked cards with shadow
<div class="stack mb-4">
  <div class="text-center shadow-md card bg-base-200">
    <div class="card-body">A</div>
  </div>
  <div class="text-center shadow card bg-base-200">
    <div class="card-body">B</div>
  </div>
  <div class="text-center shadow-sm card bg-base-200">
    <div class="card-body">C</div>
  </div>
</div>

```html
<div class="$$stack">
  <div class="$$card bg-base-200 text-center shadow-md">
    <div class="$$card-body">A</div>
  </div>
  <div class="$$card bg-base-200 text-center shadow">
    <div class="$$card-body">B</div>
  </div>
  <div class="$$card bg-base-200 text-center shadow-sm">
    <div class="$$card-body">C</div>
  </div>
</div>
```


### ~stacked cards
<div class="stack mb-4">
  <div class="shadow-md bg-base-100 card">
    <div class="card-body">
      <h2 class="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="shadow-md bg-base-100 card">
    <div class="card-body">
      <h2 class="card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="shadow-md bg-base-100 card">
    <div class="card-body">
      <h2 class="card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>

```html
<div class="$$stack">
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
```
