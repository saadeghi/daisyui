---
title: Hero
desc: Hero Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

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
<pre slot="html">{
`<div class="hero min-h-screen bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with figure">
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl"> 
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl"> 
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with figure but reverse order">
<div class="hero min-h-[30rem] rounded bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl"> 
    <div>
      <h3 class="text-5xl font-bold">Box Office News!</h3>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl"> 
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
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
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" class="input input-bordered">
        </div> 
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label> 
          <input type="text" placeholder="password" class="input input-bordered"> 
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> 
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" class="input input-bordered">
        </div> 
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label> 
          <input type="text" placeholder="password" class="input input-bordered"> 
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> 
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Hero with overlay image">
<div class="hero min-h-[30rem] rounded" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
  <div class="hero-overlay rounded bg-opacity-60"></div> 
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
  <div class="hero-overlay bg-opacity-60"></div> 
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>`
}</pre>
</Component>
