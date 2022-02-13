---
title: Toggle
desc: Toggle is a checkbox that is styled to look like a switch button.
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

<Component title="Toggle">
<input type="checkbox" class="toggle" checked>
<pre slot="html">{
`<input type="checkbox" class="toggle"> checked`
}</pre>
</Component>

<Component title="With lable and form-control">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle" checked>
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="toggle" checked>
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
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="toggle toggle-primary" checked>
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
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="toggle toggle-secondary" checked>
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
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="toggle toggle-accent" checked>
  </label>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-xs">  
  <input type="checkbox" class="toggle toggle-sm">  
  <input type="checkbox" class="toggle toggle-md">  
  <input type="checkbox" class="toggle toggle-lg" checked>
</div>
<pre slot="html">{
`<input type="checkbox" class="toggle toggle-xs">  
<input type="checkbox" class="toggle toggle-sm">  
<input type="checkbox" class="toggle toggle-md">  
<input type="checkbox" class="toggle toggle-lg"> checked`
}</pre>
</Component>

<Component title="Disabled">
<input type="checkbox" disabled="disabled" class="toggle">
<pre slot="html">{
`<input type="checkbox" disabled="disabled" class="toggle">`
}</pre>
</Component>

<Component title="Disabled and checked">
<input type="checkbox" disabled="disabled" class="toggle" checked>
<pre slot="html">{
`<input type="checkbox" disabled="disabled" class="toggle"> checked`
}</pre>
</Component>
