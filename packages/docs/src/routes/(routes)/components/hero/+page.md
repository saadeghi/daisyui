---
alert: This page is not up to date. Some of the examples might not work as expected.
title: Hero
desc: Hero is a component for displaying a large box or image with a title and description.
layout: components
classnames:
  component:
  - class: hero
    desc: Hero container
  part:
  - class: hero-content
    desc: content part
  - class: hero-overlay
    desc: Overlay that covers the background image
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Centered hero
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h3 class="text-5xl font-bold">Hello there</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```


### ~Hero with figure
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component" />
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```


### ~Hero with figure but reverse order
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component" />
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```


### ~Hero with form
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h3 class="text-5xl font-bold">Login now!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label" for="input1">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required id="input1" />
        </div>
        <div class="form-control">
          <label class="label" for="input2">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required for="input2" />
          <label class="label">
            <button class="label-text-alt link link-hover">Forgot password?</button>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="$$card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="$$card-body">
        <div class="$$form-control">
          <label class="$$label">
            <span class="$$label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="$$input $$input-bordered" required />
        </div>
        <div class="$$form-control">
          <label class="$$label">
            <span class="$$label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="$$input $$input-bordered" required />
          <label class="$$label">
            <a href="#" class="$$label-text-alt $$link $$link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="$$form-control mt-6">
          <button class="$$btn $$btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
```


### ~Hero with overlay image
<div class="hero min-h-[30rem] rounded" style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
  <div class="hero-overlay rounded"></div>
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

```html
<div
  class="$$hero min-h-screen"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
  <div class="$$hero-overlay"></div>
  <div class="$$hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
```jsx
<div
  class="$$hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div class="$$hero-overlay"></div>
  <div class="$$hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
