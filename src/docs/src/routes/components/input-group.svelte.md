---
title: Input group
desc: Input group puts an input next to a text or a button.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'input-group', desc: 'Container for grouping elements' },
  { type:'modifier', class: 'input-group-lg', desc: 'Large size for input-group wrapper' },
  { type:'modifier', class: 'input-group-md', desc: 'Medium (default) size for input-group wrapper' },
  { type:'modifier', class: 'input-group-sm', desc: 'Small size for input-group wrapper' },
  { type:'modifier', class: 'input-group-xs', desc: 'Extra small size for input-group wrapper' },
  { type:'modifier', class: 'input-group-vertical', desc: 'Vertical direction for input-group items' },
]}"
/>

<Component title="Group label and text input horizontally">
<div class="form-control">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <label class="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <label class="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered">
  </label>
</div>`
}</pre>
</Component>

<Component title="Group text input and label horizontally">
<div class="form-control">
  <label class="label">
    <span class="label-text">Enter amount</span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="0.01" class="input input-bordered">
    <span>BTC</span>
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="label">
    <span class="label-text">Enter amount</span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="0.01" class="input input-bordered">
    <span>BTC</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="label on both sides">
<div class="form-control">
  <label class="label">
    <span class="label-text">Enter amount</span>
  </label>
  <label class="input-group">
    <span>Price</span>
    <input type="text" placeholder="10" class="input input-bordered">
    <span>USD</span>
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="label">
    <span class="label-text">Enter amount</span>
  </label>
  <label class="input-group">
    <span>Price</span>
    <input type="text" placeholder="10" class="input input-bordered">
    <span>USD</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="Group label and text input vertically">
<div class="form-control">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <label class="input-group input-group-vertical">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <label class="input-group input-group-vertical">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered">
  </label>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 items-center">
  <div class="form-control">
    <label class="input-group input-group-lg">
      <span>LG</span>
      <input type="text" placeholder="Type here" class="input input-bordered input-lg">
    </label>
  </div>
  <div class="form-control">
    <label class="input-group input-group-md">
      <span>MD</span>
      <input type="text" placeholder="Type here" class="input input-bordered input-md">
    </label>
  </div>
  <div class="form-control">
    <label class="input-group input-group-sm">
      <span>SM</span>
      <input type="text" placeholder="Type here" class="input input-bordered input-sm">
    </label>
  </div>
  <div class="form-control">
    <label class="input-group input-group-xs">
      <span>XS</span>
      <input type="text" placeholder="Type here" class="input input-bordered input-xs">
    </label>
  </div>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="input-group input-group-lg">
    <span>LG</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-lg">
  </label>
</div>
<div class="form-control">
  <label class="input-group input-group-md">
    <span>MD</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-md">
  </label>
</div>
<div class="form-control">
  <label class="input-group input-group-sm">
    <span>SM</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-sm">
  </label>
</div>
<div class="form-control">
  <label class="input-group input-group-xs">
    <span>XS</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs">
  </label>
</div>`
}</pre>
</Component>

<Component title="Group text input and button">
<div class="form-control">
  <div class="input-group">
    <input type="text" placeholder="Search…" class="input input-bordered">
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
<pre slot="html">{
`<div class="form-control">
  <div class="input-group">
    <input type="text" placeholder="Search…" class="input input-bordered">
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>`
}</pre>
</Component>

<Component title="Group select and button">
<div class="form-control">
  <div class="input-group">
    <select class="select select-bordered">
      <option disabled selected>Pick category</option>
      <option>T-shirts</option>
      <option>Mugs</option>
    </select>
    <button class="btn">Go</button>
  </div>
</div>
<pre slot="html">{
`<div class="form-control">
  <div class="input-group">
    <select class="select select-bordered">
      <option disabled selected>Pick category</option>
      <option>T-shirts</option>
      <option>Mugs</option>
    </select>
    <button class="btn">Go</button>
  </div>
</div>`
}</pre>
</Component>
