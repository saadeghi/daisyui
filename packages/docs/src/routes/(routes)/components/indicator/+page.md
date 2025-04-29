---
title: Indicator
desc: Indicators are used to place an element on the corner of another element.
layout: components
classnames:
  component:
    - class: indicator
      desc: Container element
  part:
    - class: indicator-item
      desc: will be placed on the corner of sibling
  placement:
    - class: indicator-start
      desc: align horizontally to the start
    - class: indicator-center
      desc: align horizontally to the center
    - class: indicator-end
      desc: align horizontally to the end
      default: true
    - class: indicator-top
      desc: align vertically to top
      default: true
    - class: indicator-middle
      desc: align vertically to middle
    - class: indicator-bottom
      desc: align vertically to bottom
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Status Indicator

<div class="indicator">
  <span class="indicator-item status status-success"></span>
  <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$status $$status-success"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~Badge as indicator

<div class="indicator">
  <span class="indicator-item badge badge-primary">New</span>
  <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-primary">New</span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~for button

<div class="indicator">
  <span class="indicator-item badge badge-secondary">12</span>
  <button class="btn">inbox</button>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">12</span>
  <button class="$$btn">inbox</button>
</div>
```

### ~for tab

<div class="tabs tabs-lift">
  <button class="tab">Messages</button>
  <button class="indicator tab tab-active">
    Notifications
    <span class="indicator-item badge">8</span>
  </button>
  <button class="tab">Requests</button>
</div>

```html
<div class="$$tabs $$tabs-lift">
  <a class="$$tab">Messages</a>
  <a class="$$indicator $$tab $$tab-active">
    Notifications
    <span class="$$indicator-item $$badge">8</span>
  </a>
  <a class="$$tab">Requests</a>
</div>
```

### ~for avatar

<div class="avatar indicator">
  <span class="indicator-item badge badge-secondary">Justice</span>
  <div class="w-20 h-20 rounded-lg">
    <img alt="Tailwind CSS examples" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>

```html
<div class="$$avatar $$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">Justice</span>
  <div class="h-20 w-20 rounded-lg">
    <img
      alt="Tailwind CSS examples"
      src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
    />
  </div>
</div>
```

### ~for an input

<div class="indicator">
  <span class="indicator-item badge">Required</span>
  <input type="text" placeholder="Your email address" class="input input-bordered" />
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge">Required</span>
  <input type="text" placeholder="Your email address" class="$$input $$input-bordered" />
</div>
```

### ~A button as an indicator for a card

<div class="indicator my-6 mx-10">
  <div class="indicator-item indicator-bottom">
    <button class="btn btn-primary">Apply</button>
  </div>
  <div class="border border-base-300 shadow-sm card bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>

```html
<div class="$$indicator">
  <div class="$$indicator-item $$indicator-bottom">
    <button class="$$btn $$btn-primary">Apply</button>
  </div>
  <div class="$$card border-base-300 border shadow-sm">
    <div class="$$card-body">
      <h2 class="$$card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
```

### ~in center of an image

<div class="indicator max-w-xs">
  <span class="indicator-item indicator-center indicator-middle badge">Only available for Pro users</span>
  <img alt="Tailwind CSS examples" class="rounded" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$indicator-middle">
    Only available for Pro users
  </span>
  <img
    alt="Tailwind CSS examples"
    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  />
</div>
```

### ~indicator-top (default) indicator-start

<div class="indicator">
  <span class="indicator-item indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-start $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-top (default) indicator-center

<div class="indicator">
  <span class="indicator-item indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-top (default) indicator-end (default)

<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-middle indicator-start

<div class="indicator">
  <span class="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-middle $$indicator-start $$badge $$badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-middle indicator-center

<div class="indicator">
  <span class="indicator-item indicator-middle indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-middle $$indicator-center $$badge $$badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-middle indicator-end (default)

<div class="indicator">
  <span class="indicator-item indicator-middle badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-middle $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-bottom indicator-start

<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-bottom $$indicator-start $$badge $$badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-bottom indicator-center

<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-bottom $$indicator-center $$badge $$badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~indicator-bottom indicator-end (default)

<div class="indicator">
  <span class="indicator-item indicator-bottom badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-bottom $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### ~multiple indicators

<div class="indicator">
  <span class="indicator-item indicator-top indicator-start badge">↖︎</span>
  <span class="indicator-item indicator-top indicator-center badge">↑</span>
  <span class="indicator-item indicator-top indicator-end badge">↗︎</span>
  <span class="indicator-item indicator-middle indicator-start badge">←</span>
  <span class="indicator-item indicator-middle indicator-center badge">●</span>
  <span class="indicator-item indicator-middle indicator-end badge">→</span>
  <span class="indicator-item indicator-bottom indicator-start badge">↙︎</span>
  <span class="indicator-item indicator-bottom indicator-center badge">↓</span>
  <span class="indicator-item indicator-bottom indicator-end badge">↘︎</span>
  <div class="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
</div>

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-top $$indicator-start $$badge">↖︎</span>
  <span class="$$indicator-item $$indicator-top $$indicator-center $$badge">↑</span>
  <span class="$$indicator-item $$indicator-top $$indicator-end $$badge">↗︎</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-start $$badge">←</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-center $$badge">●</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-end $$badge">→</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-start $$badge">↙︎</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-center $$badge">↓</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-end $$badge">↘︎</span>
  <div class="bg-base-300 grid h-32 w-60 place-items-center">Box</div>
</div>
```

### ~Responsive

#### changes position based on resolution

<div class="indicator">
  <span class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"></span>
  <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
</div>

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-start sm:$$indicator-middle md:$$indicator-bottom lg:$$indicator-center xl:$$indicator-end $$badge $$badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
