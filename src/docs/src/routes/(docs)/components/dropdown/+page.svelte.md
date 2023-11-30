---
title: Dropdown
desc: Dropdown can open a menu or any other element when the button is clicked.
published: true
layout: components
---

<script>
  import Component from "$components/Component.svelte"
  import ClassTable from "$components/ClassTable.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'dropdown', desc: 'Container element' },
  { type:'component', class: 'dropdown-content', desc: 'Container for content' },
  { type:'modifier', class: 'dropdown-end', desc: 'Aligns to end' },
  { type:'modifier', class: 'dropdown-top', desc: 'Open from top' },
  { type:'modifier', class: 'dropdown-bottom', desc: 'Open from bottom' },
  { type:'modifier', class: 'dropdown-left', desc: 'Open from left' },
  { type:'modifier', class: 'dropdown-right', desc: 'Open from right' },
  { type:'modifier', class: 'dropdown-hover', desc: 'Opens on hover too' },
  { type:'modifier', class: 'dropdown-open', desc: 'Force open' },
]}"
/>

### Method 1: using details and summary tags

<Component title="Dropdown menu using <details> tag" desc="Stays open until gets clicked again. Or you can close it using JS by removing the `open` attribute">
<details class="dropdown mb-32">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</details>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<details class="$$dropdown">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow $$menu $$dropdown-content z-[1] bg-base-100 $$rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`
}</pre>
</Component>

### Method 2: Using CSS focus

<div class="alert text-sm mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      We can't use &lt;button&gt; here because Safari has <a rel="noopener noreferrer" target="_blank" href="https://bugs.webkit.org/show_bug.cgi?id=22261">a bug</a> that prevents the button from being focused. <br/>&lt;div role="button" tabindex="0"&gt; is a workaround for this bug. <br/>It is accessible and works in all browsers.
    </div>
</div>

<Component title="Dropdown menu">
<div>
  <div class="text-sm mb-4 text-center">Click outside to close</div>
  <div class="dropdown mb-32">
    <div tabindex="0" role="button" class="m-1 btn">Click to open</div>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><button>Item 1</button></li>
      <li><button>Item 2</button></li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

### Positions

<Component title="Dropdown / aligns to end">
<div class="dropdown dropdown-end mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown top">
<div class="dropdown dropdown-top mt-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-top">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown top / aligns to end">
<div class="dropdown dropdown-top dropdown-end mt-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-top $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown bottom">
<div class="dropdown dropdown-bottom mb-32">
  <div tabindex="0" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-bottom">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown bottom / aligns to end">
<div class="dropdown dropdown-bottom dropdown-end mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-bottom $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown left">
<div class="dropdown dropdown-left mb-16">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-left">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown left / aligns to end">
<div class="dropdown dropdown-left dropdown-end mt-16">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-left $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown right">
<div class="dropdown dropdown-right mb-16">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-right">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

<Component title="Dropdown right / aligns to end">
<div class="dropdown dropdown-right dropdown-end mt-16">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-right $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

### Open on hover

<Component title="Dropdown on hover">
<div class="dropdown dropdown-hover mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Hover</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-hover">
  <div tabindex="0" role="button" class="$$btn m-1">Hover</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

### Force open

<Component title="Force open">
<div class="dropdown dropdown-open mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Button</div>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown $$dropdown-open">
  <div tabindex="0" role="button" class="$$btn m-1">Button</div>
  <ul class="$$dropdown-content z-[1] $$menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>`
}</pre>
</Component>

### More examples

<Component title="Card as dropdown">
<div class="dropdown mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <div tabindex="0" class="w-64 p-2 shadow card card-compact dropdown-content z-[1] bg-primary text-primary-content">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <div tabindex="0" class="$$dropdown-content z-[1] $$card $$card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div class="$$card-body">
      <h3 class="$$card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Dropdown in navbar">
<div class="navbar mb-40 bg-base-300 rounded-box w-full">
  <div class="flex-1 px-2 lg:flex-none">
    <button class="text-lg font-bold">daisyUI</button>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <button class="btn btn-ghost rounded-btn">Button</button>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Dropdown</div>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-4">
          <li><button>Item 1</button></li> 
          <li><button>Item 2</button></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$navbar bg-base-300 rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
    <a class="text-lg font-bold">daisyUI</a>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <a class="$$btn $$btn-ghost rounded-btn">Button</a>
      <div class="$$dropdown $$dropdown-end">
        <div tabindex="0" role="button" class="$$btn $$btn-ghost rounded-btn">Dropdown</div>
        <ul class="$$menu $$dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
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
    <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div tabindex="0" class="shadow card compact dropdown-content z-[1] bg-base-100 rounded-box w-64">
      <div class="card-body">
        <h2 class="card-title">You needed more info?</h2> 
        <p>Here is a description!</p>
      </div>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`A normal text and a helper dropdown
<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn $$btn-circle $$btn-ghost $$btn-xs text-infodiv">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div tabindex="0" class="$$card $$compact $$dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
    <div class="$$card-body">
      <h2 class="$$card-title">You needed more info?</h2> 
      <p>Here is a description!</p>
    </div>
  </div>
</div>`
}</pre>
</Component>
