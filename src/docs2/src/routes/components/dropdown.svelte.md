---
title: Dropdown
desc: Dropdown Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Dropdown menu">
<div class="dropdown mb-32">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown / aligns to end">
<div class="dropdown dropdown-end mb-32">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-end">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown top">
<div class="dropdown dropdown-top mt-32">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-top">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown top / aligns to end">
<div class="dropdown dropdown-top dropdown-end mt-32">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-top dropdown-end">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown left">
<div class="dropdown dropdown-left mb-16">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-left">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown left / aligns to end">
<div class="dropdown dropdown-left dropdown-end mt-16">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-left dropdown-end">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown right">
<div class="dropdown dropdown-right mb-16">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-right">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown right / aligns to end">
<div class="dropdown dropdown-right dropdown-end mt-16">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-right dropdown-end">
  <button class="m-1 btn">Click</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown on hover">
<div class="dropdown dropdown-hover mb-32">
  <button class="m-1 btn">Hover</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-hover">
  <button class="m-1 btn">Hover</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Force open">
<div class="dropdown dropdown-open mb-32">
  <button class="m-1 btn">Button</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<pre slot="html">{
`<div class="dropdown dropdown-open">
  <button class="m-1 btn">Button</button>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Card as dropdown">
<div class="dropdown mb-32">
  <button class="m-1 btn">Click</button>
  <div tabindex="0" class="w-64 p-2 shadow card card-compact dropdown-content bg-primary text-primary-content">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="dropdown">
  <button class="m-1 btn">Click</button>
  <div tabindex="0" class="w-64 p-2 shadow card card-compact dropdown-content bg-primary text-primary-content">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Dropdown in navbar">
<div class="navbar mb-40 bg-base-300 rounded-box w-full">
  <div class="flex-1 px-2 lg:flex-none">
    <a class="text-lg font-bold">daisyUI</a>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <a class="btn btn-ghost rounded-btn">Button</a>
      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost rounded-btn">Dropdown</button>
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="navbar bg-base-300 rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
    <a class="text-lg font-bold">daisyUI</a>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <a class="btn btn-ghost rounded-btn">Button</a>
      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost rounded-btn">Dropdown</button>
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Helper dropdown">
<div class="mb-28 mt-6 flex gap-1 items-center">
  A normal text and a helper dropdown
  <div class="dropdown dropdown-end">
    <button class="btn btn-circle btn-ghost btn-xs text-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </button>
    <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-64">
      <div class="card-body">
        <h2 class="card-title">You needed more info?</h2> 
        <p>Here is a description!</p>
      </div>
    </div>
  </div>
</div>
<pre slot="html">{
`A normal text and a helper dropdown
<div class="dropdown dropdown-end">
  <button class="btn btn-circle btn-ghost btn-xs text-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </button>
  <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-64">
    <div class="card-body">
      <h2 class="card-title">You needed more info?</h2> 
      <p>Here is a description!</p>
    </div>
  </div>
</div>`
}</pre>
</Component>
