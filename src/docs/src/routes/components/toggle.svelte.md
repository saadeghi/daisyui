---
title: Toggle
desc: Toggle is a checkbox that is styled to look like a switch button.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
  let indeterminate = true;
</script>

<ClassTable
data="{[
  { type:'component', class: 'form-control', desc: 'Container element' },
  { type:'component', class: 'toggle', desc: 'For checkbox' },
  { type:'modifier', class: 'toggle-primary', desc: 'Adds `primary` to toggle' },
  { type:'modifier', class: 'toggle-secondary', desc: 'Adds `secondary` to toggle' },
  { type:'modifier', class: 'toggle-accent', desc: 'Adds `accent` to toggle' },
  { type:'responsive', class: 'toggle-lg', desc: 'Large toggle' },
  { type:'responsive', class: 'toggle-md', desc: 'Medium toggle (default)' },
  { type:'responsive', class: 'toggle-sm', desc: 'Small toggle' },
  { type:'responsive', class: 'toggle-xs', desc: 'Extra small toggle' },
]}"
/>

<Component title="Toggle">
<input type="checkbox" class="toggle" checked>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$toggle" checked>`
}</pre>
</Component>

<Component title="With label and form-control">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle" checked>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" class="$$toggle" checked>
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle toggle-primary" checked>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" class="$$toggle $$toggle-primary" checked>
  </label>
</div>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle toggle-secondary" checked>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" class="$$toggle $$toggle-secondary" checked>
  </label>
</div>`
}</pre>
</Component>

<Component title="Accent color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle toggle-accent" checked>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" class="$$toggle $$toggle-accent" checked>
  </label>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-xs" checked>
  <input type="checkbox" class="toggle toggle-sm" checked>
  <input type="checkbox" class="toggle toggle-md" checked>
  <input type="checkbox" class="toggle toggle-lg" checked>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$toggle $$toggle-xs" checked>
<input type="checkbox" class="$$toggle $$toggle-sm" checked>
<input type="checkbox" class="$$toggle $$toggle-md" checked>
<input type="checkbox" class="$$toggle $$toggle-lg" checked>`
}</pre>
</Component>

<Component title="Disabled">
<input type="checkbox" class="toggle" disabled>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$toggle" disabled>`
}</pre>
</Component>

<Component title="Disabled and checked">
<input type="checkbox" class="toggle" disabled checked>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$toggle" disabled checked>`
}</pre>
</Component>

<Component title="Indeterminate">
<input type="checkbox" class="toggle" bind:indeterminate on:click|preventDefault={()=>{}}>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- You can make a toggle indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="$$toggle" id="my-toggle">`
}</pre>
</Component>
