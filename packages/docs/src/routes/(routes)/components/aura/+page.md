---
title: Aura
desc: Aura is a border light effect that can wrap around any component. It is a great way to add a cool, eye-catching visual effect to your components. Aura is useful for the most important button, card, or div that you want to highlight.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/aura.css
layout: components
classnames:
  component:
  - class: aura
    desc: Container element to add a light effect aura around an element. By default it's a rotating border
  style:
  - class: aura-dual
    desc: Uses two light effects
  - class: aura-rainbow
    desc: Uses rainbow colors for the light effect
  - class: aura-holo
    desc: Uses holographic colors for the light effect
  - class: aura-gold
    desc: Uses gold colors for the light effect
  - class: aura-silver
    desc: Uses silver colors for the light effect
  - class: aura-glow
    desc: Uses a glowing effect for the light instead of a rotating border
  size:
  - class: aura-xs
    desc: Extra small size
  - class: aura-sm
    desc: Small size
  - class: aura-md
    desc: Medium size (default)
  - class: aura-lg
    desc: Large size
  - class: aura-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Aura
#### Aura around a card
<div class="aura">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has aura</p>
    </div>
  </div>
</div>
```

### ~Aura around a button
<div class="aura">
  <button class="btn">button with aura</button>
</div>

```html
<div class="$$aura">
  <button class="$$btn">button with aura</button>
</div>
```

### ~Aura dual
<div class="aura aura-dual">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has dual aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-dual">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has dual aura</p>
    </div>
  </div>
</div>
```


### ~Aura rainbow
<div class="aura aura-rainbow">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has rainbow aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-rainbow">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has rainbow aura</p>
    </div>
  </div>
</div>
```

### ~Aura holo
<div class="aura aura-holo">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has holo aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-holo">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has holo aura</p>
    </div>
  </div>
</div>
```

### ~Aura glow
<div class="aura aura-glow">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has glow aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-glow">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has glow aura</p>
    </div>
  </div>
</div>
```

### ~Aura gold
<div class="aura aura-gold">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has gold aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-gold">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has gold aura</p>
    </div>
  </div>
</div>
```


### ~Aura silver
<div class="aura aura-silver">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has silver aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-silver">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>This card has silver aura</p>
    </div>
  </div>
</div>
```



### ~Aura with custom color
<div class="aura text-orange-600">
    <div class="card bg-base-100 text-base-content">
    <div class="card-body">
      <p>This card has custom color aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura text-orange-600">
    <div class="$$card bg-base-100 text-base-content">
    <div class="$$card-body">
      <p>This card has custom color aura</p>
    </div>
  </div>
</div>
```

### ~Aura with custom color and custom background color
<div class="aura text-orange-600 bg-yellow-200">
    <div class="card bg-base-100 text-base-content">
    <div class="card-body">
      <p>This card has custom color and background aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura text-orange-600 bg-yellow-200">
    <div class="$$card bg-base-100 text-base-content">
    <div class="$$card-body">
      <p>This card has custom color and background aura</p>
    </div>
  </div>
</div>
```


### ~Aura rainbow around a pricing card
<div class="aura aura-rainbow">
  <div class="card w-96 bg-base-100 shadow-sm">
    <div class="card-body">
      <span class="badge badge-xs badge-warning">Most Popular</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">Premium</h2>
        <span class="text-xl">$29/mo</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>High-resolution image generation</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Customizable style templates</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Batch processing capabilities</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>AI-driven image enhancements</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Seamless cloud integration</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Real-time collaboration tools</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">Subscribe</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-rainbow">
  <div class="$$card w-96 bg-base-100 shadow-sm">
    <div class="$$card-body">
      <span class="$$badge $$badge-xs $$badge-warning">Most Popular</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">Premium</h2>
        <span class="text-xl">$29/mo</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>High-resolution image generation</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Customizable style templates</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Batch processing capabilities</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>AI-driven image enhancements</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Seamless cloud integration</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Real-time collaboration tools</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">Subscribe</button>
      </div>
    </div>
  </div>
</div>
```

### ~Aura sizes

<div class="flex flex-wrap items-center gap-4">
  <div class="aura aura-xs">
    <button class="btn">XS</button>
  </div>
  <div class="aura aura-sm">
    <button class="btn">SM</button>
  </div>
  <div class="aura">
    <button class="btn">MD</button>
  </div>
  <div class="aura aura-lg">
    <button class="btn">LG</button>
  </div>
  <div class="aura aura-xl">
    <button class="btn">XL</button>
  </div>
</div>

```html
<div class="$$aura $$aura-xs">
  <button class="$$btn">XS</button>
</div>
<div class="$$aura $$aura-sm">
  <button class="$$btn">SM</button>
</div>
<div class="$$aura">
  <button class="$$btn">MD</button>
</div>
<div class="$$aura $$aura-lg">
  <button class="$$btn">LG</button>
</div>
<div class="$$aura $$aura-xl">
  <button class="$$btn">XL</button>
</div>
```

### ~Aura with custom animation duration
<div class="aura aura-rainbow duration-2000">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>2000ms duration aura</p>
    </div>
  </div>
</div>

```html
<div class="$$aura $$aura-rainbow duration-2000">
  <div class="$$card bg-base-100">
    <div class="$$card-body">
      <p>2000ms duration aura</p>
    </div>
  </div>
</div>
```
