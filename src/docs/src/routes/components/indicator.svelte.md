---
title: Indicator
desc: Indicators are used to place an element on the corner of another element.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[

]}"
/>

<Component title="Empty badge as indicator">
<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span> 
  <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Badge as indicator">
<div class="indicator">
  <span class="indicator-item badge badge-primary">new</span> 
  <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item badge badge-primary">new</span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="for button">
<div class="indicator">
  <span class="indicator-item badge badge-secondary">99+</span> 
  <button class="btn">inbox</button>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item badge badge-secondary">99+</span> 
  <button class="btn">inbox</button>
</div>`
}</pre>
</Component>

<Component title="for tab">
<div class="tabs">
  <a class="tab tab-lifted">Messages</a> 
  <a class="indicator tab tab-lifted tab-active">
    Notifications 
    <span class="indicator-item badge">8</span>
  </a> 
  <a class="tab tab-lifted">Requests</a>
</div>
<pre slot="html">{
`<div class="tabs">
  <a class="tab tab-lifted">Messages</a> 
  <a class="indicator tab tab-lifted tab-active">
    Notifications 
    <span class="indicator-item badge">8</span>
  </a> 
  <a class="tab tab-lifted">Requests</a>
</div>`
}</pre>
</Component>

<Component title="for avatar">
<div class="avatar indicator">
  <span class="indicator-item badge badge-secondary">typing…</span> 
  <div class="w-20 h-20 rounded-lg">
    <img src="https://api.lorem.space/image/face?w=160&h=160">
  </div>
</div>
<pre slot="html">{
`<div class="avatar indicator">
  <span class="indicator-item badge badge-secondary">typing…</span> 
  <div class="w-20 h-20 rounded-lg">
    <img src="https://api.lorem.space/image/face?w=160&h=160">
  </div>
</div>`
}</pre>
</Component>

<Component title="for an input">
<div class="indicator">
  <span class="indicator-item badge">Required</span>
  <input type="text" placeholder="Your email address" class="input input-bordered">
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item badge">Required</span>
  <input type="text" placeholder="Your email address" class="input input-bordered">
</div>`
}</pre>
</Component>

<Component title="A button as an indicator for a card">
<div class="indicator my-6 mx-10">
  <div class="indicator-item indicator-bottom">
    <button class="btn btn-primary">Apply</button>
  </div> 
  <div class="border card bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Job Title</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="indicator">
  <div class="indicator-item indicator-bottom">
    <button class="btn btn-primary">Apply</button>
  </div> 
  <div class="border card">
    <div class="card-body">
      <h2 class="card-title">Job Title</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="in center of an image">
<div class="indicator">
  <span class="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span> 
  <img class="rounded" src="https://api.lorem.space/image/house?w=300&h=150">
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span> 
  <img src="https://api.lorem.space/image/house?w=300&h=150">
</div>`
}</pre>
</Component>

<Component title="indicator-top (default) indicator-start">
<div class="indicator">
  <span class="indicator-item indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-top (default) indicator-center">
<div class="indicator">
  <span class="indicator-item indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-top (default) indicator-end (default)">
<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-middle indicator-start">
<div class="indicator">
  <span class="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-middle indicator-center">
<div class="indicator">
  <span class="indicator-item indicator-middle indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-middle indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-middle indicator-end (default)">
<div class="indicator">
  <span class="indicator-item indicator-middle badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-middle badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-bottom indicator-start">
<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-start badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-bottom indicator-center">
<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="indicator-bottom indicator-end (default)">
<div class="indicator">
  <span class="indicator-item indicator-bottom badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-bottom badge badge-secondary"></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="multiple indicators">
<div class="indicator">
  <span class="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span>
  <span class="indicator-item indicator-top indicator-center badge badge-secondary">top+center</span>
  <span class="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span>
  <span class="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span>
  <span class="indicator-item indicator-middle indicator-center badge badge-secondary">middle+center</span>
  <span class="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span>
  <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">bott0m+strt</span>
  <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">bottom+center</span>
  <span class="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span>
  <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
</div>
<pre slot="html">{
`<div class="indicator">
  <span class="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span>
  <span class="indicator-item indicator-top indicator-center badge badge-secondary">top+center</span>
  <span class="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span>
  <span class="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span>
  <span class="indicator-item indicator-middle indicator-center badge badge-secondary">middle+center</span>
  <span class="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span>
  <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">bott0m+strt</span>
  <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">bottom+center</span>
  <span class="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span>
  <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
</div>`
}</pre>
</Component>
