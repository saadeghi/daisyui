---
title: Card
desc: Cards are used to group and display content in a way that is easily readable.
layout: components
classnames:
  component:
  - class: card
    desc: Card
  part:
  - class: card-title
    desc: Title part
  - class: card-body
    desc: Body part (content)
  - class: card-actions
    desc: Actions part (buttons, etc.)
  style:
  - class: card-border
    desc: Adds border to <card>
  - class: card-dash
    desc: dash style
  modifier:
  - class: card-side
    desc: The image in <figure> will be on to the side
  - class: image-full
    desc: The image in <figure> element will be the background
  size:
  - class: card-xs
    desc: Extra small size
  - class: card-sm
    desc: Small size
  - class: card-md
    desc: Medium size (default)
  - class: card-lg
    desc: Large size
  - class: card-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


### ~Card
<div class="card w-96 bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### ~Pricing Card
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

```html
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
      <button class="$$btn $$btn-primary $$btn-block">Subscribe</button>
    </div>
  </div>
</div>
```


### ~Card sizes
<div class="grid gap-6">
  <div class="card w-96 bg-base-100 card-xs shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Xsmall Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 card-sm shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Small Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 card-md shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Medium Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 card-lg shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Large Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 card-xl shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Xlarge Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$card w-96 bg-base-100 $$card-xs shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Xsmall Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-sm shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Small Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-md shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-lg shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Large Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-xl shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Xlarge Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### ~Card with a card-border
<div class="card card-border w-96 bg-base-100">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card $$card-border bg-base-100 w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### ~Card with a dash border
<div class="card card-dash w-96 bg-base-100">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card $$card-dash bg-base-100 w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```


### ~Card with badge
<div class="card w-96 bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">
      Card Title
      <div class="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">Fashion</div>
      <div class="$$badge $$badge-outline">Products</div>
    </div>
  </div>
</div>
```


### ~Card with bottom image
<div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
```


### ~Card with centered content and paddings
<div class="card w-96 bg-base-100 shadow-sm">
  <figure class="px-10 pt-10">
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="rounded-box" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```


### ~Card with image overlay
<div class="card w-96 bg-base-100 shadow-sm image-full">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-base-100 $$image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```


### ~Card with no image
<div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```


### ~Card with custom color
<div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end card-actions">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-primary text-primary-content w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn">Buy Now</button>
    </div>
  </div>
</div>
```


### ~Centered card with neutral color
<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>

```html
<div class="$$card bg-neutral text-neutral-content w-96">
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Accept</button>
      <button class="$$btn $$btn-ghost">Deny</button>
    </div>
  </div>
</div>
```


### ~Card with action on top
<div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="justify-end card-actions">
      <button class="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-square $$btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
```


### ~Card with image on side
<div class="card card-side bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

```html
<div class="$$card $$card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Watch</button>
    </div>
  </div>
</div>
```


### ~Responsive card (vertical on small screen, horizontal on large screen)
<div class="card lg:card-side bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>

```html
<div class="$$card lg:$$card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Listen</button>
    </div>
  </div>
</div>
```
