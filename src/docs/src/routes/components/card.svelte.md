---
title: Card
desc: Cards are used to group and display content in a way that is easily readable.
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Card">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Compact card (less padding for `card-body`)">
<div class="card w-96 bg-base-100 card-compact shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with badge">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with bottom image">
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
</div>`
}</pre>
</Component>

<Component title="Card with centered content and paddings">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl">
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl">
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with image overlay">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with no image">
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with custom color">
<div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Centered card with neutral color">
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
<pre slot="html">{
`<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with action on top">
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="justify-end card-actions">
      <button class="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="justify-end card-actions">
      <button class="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card glass" bg="https://api.lorem.space/image/house?w=1000&h=500">
<div class="card w-96 glass">
  <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"></figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card w-96 glass">
  <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"></figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with image on side">
<div class="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Responsive card (vertical on small screen, horizontal on large screen)">
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>`
}</pre>
</Component>
