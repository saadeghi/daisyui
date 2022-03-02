---
title: Divider
desc: Divider will be used to separate content vertically or horizontally.
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
  { type:'component', class: 'divider', desc: 'Put a divider line between two elements' },
  { type:'responsive', class: 'divider-vertical', desc: 'Divide elements on top of each other (default)' },
  { type:'responsive', class: 'divider-horizontal', desc: 'Divide elements next to each other' },
]}"
/>

<Component title="Divider">
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider">OR</div>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full border-opacity-50">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider">OR</div>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Divider horizontal">
<div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider divider-horizontal">OR</div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider divider-horizontal">OR</div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Divider with no text">
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider"></div> 
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider"></div> 
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="responsive (lg:divider-horizontal)">
<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider lg:divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider lg:divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>
