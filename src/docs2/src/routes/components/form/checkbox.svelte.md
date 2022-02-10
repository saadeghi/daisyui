---
title: Checkbox
desc: Checkbox Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Checkbox">
<input type="checkbox" checked="checked" class="checkbox">
<pre slot="html">{
`<input type="checkbox" checked="checked" class="checkbox">`
}</pre>
</Component>

<Component title="With lable and form-control">
<div class="form-control w-40">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox">
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<div class="form-control w-40">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
  </label>
</div>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="form-control w-40">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary">
  </label>
</div>`
}</pre>
</Component>

<Component title="Accent color">
<div class="form-control w-40">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" class="checkbox checkbox-accent">
  </label>
</div>
<pre slot="html">{
`<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-accent">
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
<pre slot="html">{
`<input type="checkbox" checked="checked" class="checkbox checkbox-xs"> 
<input type="checkbox" checked="checked" class="checkbox checkbox-sm"> 
<input type="checkbox" checked="checked" class="checkbox checkbox-md"> 
<input type="checkbox" checked="checked" class="checkbox checkbox-lg">`
}</pre>
</Component>

<Component title="Disabled">
<input type="checkbox" disabled="disabled" class="checkbox">
<pre slot="html">{
`<input type="checkbox" disabled="disabled" class="checkbox">`
}</pre>
</Component>

<Component title="Disabled and checked">
<input type="checkbox" disabled="disabled" class="checkbox" checked="checked">
<pre slot="html">{
`<input type="checkbox" disabled="disabled" class="checkbox" checked="checked">`
}</pre>
</Component>
