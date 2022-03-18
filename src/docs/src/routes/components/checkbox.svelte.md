---
title: Checkbox
desc: Checkboxes are used to select or deselect a value.
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
  { type:'component', class: 'checkbox', desc: 'For checkbox' },
  { type:'modifier', class: 'checkbox-primary', desc: 'Adds `primary` to checkbox' },
  { type:'modifier', class: 'checkbox-secondary', desc: 'Adds `secondary` to checkbox' },
  { type:'modifier', class: 'checkbox-accent', desc: 'Adds `accent` to checkbox' },
  { type:'responsive', class: 'checkbox-lg', desc: 'Large checkbox' },
  { type:'responsive', class: 'checkbox-md', desc: 'Medium checkbox (default)' },
  { type:'responsive', class: 'checkbox-sm', desc: 'Small checkbox' },
  { type:'responsive', class: 'checkbox-xs', desc: 'Extra small checkbox' },
]}"
/>

<Component title="Checkbox">
<input type="checkbox" checked="checked" class="checkbox">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" checked="checked" class="$$checkbox">`
}</pre>
</Component>

<Component title="With label and form-control">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox">
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="$$checkbox">
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="$$checkbox checkbox-primary">
  </label>
</div>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary">
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-secondary">
  </label>
</div>`
}</pre>
</Component>

<Component title="Accent color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-accent">
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-accent">
  </label>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" checked="checked" class="checkbox checkbox-xs"> 
  <input type="checkbox" checked="checked" class="checkbox checkbox-sm"> 
  <input type="checkbox" checked="checked" class="checkbox checkbox-md"> 
  <input type="checkbox" checked="checked" class="checkbox checkbox-lg">
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xs"> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-sm"> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-md"> 
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-lg">`
}</pre>
</Component>

<Component title="Disabled">
<input type="checkbox" disabled="disabled" class="checkbox">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$checkbox" disabled>`
}</pre>
</Component>

<Component title="Disabled and checked">
<input type="checkbox" disabled="disabled" class="checkbox" checked="checked">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="checkbox" class="$$checkbox" disabled checked>`
}</pre>
</Component>


<Component title="Indeterminate">
<input type="checkbox" class="checkbox" bind:indeterminate on:click|preventDefault={()=>{}}>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="$$checkbox" id="my-checkbox">`
}</pre>
</Component>
