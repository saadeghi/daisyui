---
title: Avatar
desc: Avatars are used to show a thumbnail representation of an individual or business in the interface.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'avatar', desc: 'Container element' },
  { type:'component', class: 'avatar-group', desc: 'Container for grouping multiple avatars' },
  { type:'modifier', class: 'online', desc: 'shows a green dot as online indicator' },
  { type:'modifier', class: 'offline', desc: 'shows a gray dot as online indicator' },
  { type:'modifier', class: 'placeholder', desc: 'to show some letters as avatar placeholder' },
]}"
/>

<Component title="Avatar">
<div class="avatar">
  <div class="w-24 rounded">
    <img src="https://api.lorem.space/image/face?hash=75101" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar">
  <div class="w-24 rounded">
    <img src="https://api.lorem.space/image/face?hash=92048">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar in custom sizes">
<div class="avatar">
  <div class="w-24 rounded">
    <img src="https://api.lorem.space/image/face?hash=71470" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-16 rounded">
    <img src="https://api.lorem.space/image/face?hash=88712" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-12 rounded">
    <img src="https://api.lorem.space/image/face?hash=15164" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-8 rounded">
    <img src="https://api.lorem.space/image/face?hash=79498" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar">
  <div class="w-32 rounded">
    <img src="https://api.lorem.space/image/face?hash=88560">
  </div>
</div>
<div class="avatar">
  <div class="w-20 rounded">
    <img src="https://api.lorem.space/image/face?hash=80245" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-16 rounded">
    <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-8 rounded">
    <img src="https://api.lorem.space/image/face?hash=33791" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar rounded">
<div class="avatar">
  <div class="w-24 rounded-xl">
    <img src="https://api.lorem.space/image/face?hash=71060" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=70084" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar">
  <div class="w-24 rounded-xl">
    <img src="https://api.lorem.space/image/face?hash=64318">
  </div>
</div>
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=92310">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with mask">
<div class="avatar">
  <div class="w-24 mask mask-squircle">
    <img src="https://api.lorem.space/image/face?hash=8877" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-hexagon">
    <img src="https://api.lorem.space/image/face?hash=79960" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-triangle">
    <img src="https://api.lorem.space/image/face?hash=70860" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar">
  <div class="w-24 mask mask-squircle">
    <img src="https://api.lorem.space/image/face?hash=47449">
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-hexagon">
    <img src="https://api.lorem.space/image/face?hash=55350">
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-triangle">
    <img src="https://api.lorem.space/image/face?hash=60857">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar group">
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=11722" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=75704" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=86780" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=92365" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=53273">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=91831">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=27312">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=26448">
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar group with counter">
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=71251" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=58372" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=26576" alt="Tailwind-CSS-Avatar-component">
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=4818">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=40311">
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=84348">
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with ring">
<div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://api.lorem.space/image/face?hash=558" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://api.lorem.space/image/face?hash=3174">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with presense indicator">
<div class="avatar online">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=67053" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<div class="avatar offline">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=92699" alt="Tailwind-CSS-Avatar-component">
  </div>
</div>
<pre slot="html">{
`<div class="avatar online">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=28212">
  </div>
</div>
<div class="avatar offline">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=40361">
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar placeholder">
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> 
<div class="avatar online placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
    <span class="text-xl">JO</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>MX</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span class="text-xs">AA</span>
  </div>
</div>
<pre slot="html">{
`<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> 
<div class="avatar online placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
    <span class="text-xl">JO</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>MX</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span class="text-xs">AA</span>
  </div>
</div>`
}</pre>
</Component>
