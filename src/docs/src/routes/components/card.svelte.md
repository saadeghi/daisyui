---
title: Card
desc: Cards are used to group and display content in a way that is easily readable.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'card', desc: 'Container element' },
  { type:'component', class: 'card-title', desc: 'Title of card' },
  { type:'component', class: 'card-body', desc: 'Container for content' },
  { type:'component', class: 'card-actions', desc: 'Container for buttons' },
  { type:'modifier', class: 'card-bordered', desc: 'Adds border to <card>' },
  { type:'modifier', class: 'image-full', desc: 'The image in <figure> element will be the background' },
  { type:'responsive', class: 'card-normal', desc: 'Applies default paddings' },
  { type:'responsive', class: 'card-compact', desc: 'Applies smaller padding' },
  { type:'responsive', class: 'card-side', desc: 'The image in <figure> will be on to the side' },
]}"
/>

<Component title="Card">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Compact card (less padding for `card-body`)">
<div class="card w-96 bg-base-100 card-compact shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card $$card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card $$card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with badge">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">
      Shoes!
      <div class="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">Fashion</div> 
      <div class="$$badge $$badge-outline">Products</div>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">
      Shoes!
      <div className="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <div className="$$badge $$badge-outline">Fashion</div> 
      <div className="$$badge $$badge-outline">Products</div>
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
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <div className="$$card-body">
    <h2 className="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
</div>`
}</pre>
</Component>

<Component title="Card with centered content and paddings">
<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="$$card-body items-center text-center">
    <h2 className="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions">
      <button className="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with image overlay">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Buy Now</button>
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <div className="$$card-body">
    <h2 className="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Buy Now</button>
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-primary text-primary-content">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn">Buy Now</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-primary text-primary-content">
  <div className="$$card-body">
    <h2 className="$$card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn">Buy Now</button>
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-neutral text-neutral-content">
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Accept</button>
      <button class="$$btn $$btn-ghost">Deny</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-neutral text-neutral-content">
  <div className="$$card-body items-center text-center">
    <h2 className="$$card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Accept</button>
      <button className="$$btn $$btn-ghost">Deny</button>
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 bg-base-100 shadow-xl">
  <div class="$$card-body">
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-square $$btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 bg-base-100 shadow-xl">
  <div className="$$card-body">
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-square $$btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card glass" bg="https://placeimg.com/1000/500/arch">
<div class="card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"></figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Learn now!</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Learn now!</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Card with image on side">
<div class="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card $$card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Watch</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card $$card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Watch</button>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Responsive card (vertical on small screen, horizontal on large screen)">
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$card lg:$$card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Listen</button>
    </div>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$card lg:$$card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
  <div className="$$card-body">
    <h2 className="$$card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="$$card-actions justify-end">
      <button className="$$btn $$btn-primary">Listen</button>
    </div>
  </div>
</div>`
}</pre>
</Component>
