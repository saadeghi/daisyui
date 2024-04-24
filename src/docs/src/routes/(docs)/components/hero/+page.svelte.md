---
title: Hero
desc: Hero is a component for displaying a large box or image with a title and description.
published: true
layout: components
---

<script>
  import Component from "$components/Component.svelte"
  import ClassTable from "$components/ClassTable.svelte"
  import ComponentPageTabs from "$components/ComponentPageTabs.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<!-- <ComponentPageTabs/> -->

<ClassTable
data="{[
  { type:'component', class: 'hero', desc: 'Container element' },
  { type:'component', class: 'hero-content', desc: 'Container for content' },
  { type:'component', class: 'hero-overlay', desc: 'Overlay that covers the background image' },
]}"
/>

<Component title="Centered hero">
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h3 class="text-5xl font-bold">Hello there</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with figure">
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component" />
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with figure but reverse order">
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with form">
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen bg-base-200">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="$$card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
</div>`
}</pre>
</Component>

<Component title="Hero with overlay image">
<div class="hero min-h-[30rem] rounded" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="hero-overlay rounded bg-opacity-60"></div>
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="$$hero-overlay bg-opacity-60"></div>
  <div class="$$hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`<div class="$$hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div class="$$hero-overlay bg-opacity-60"></div>
  <div class="$$hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>
