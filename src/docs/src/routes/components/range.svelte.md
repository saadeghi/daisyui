---
title: Range slider
desc: Range slider is used to select a value by sliding a handle.
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Range">
<input type="range" min="0" max="100" value="40" class="range max-w-xs">
<pre slot="html">{
`<input type="range" min="0" max="100" value="40" class="range">`
}</pre>
</Component>

<Component title="With steps and measure">
<input type="range" min="0" max="100" value="25" class="range max-w-xs" step="25">
<div class="w-full flex justify-between text-xs px-2 max-w-xs">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>
<pre slot="html">{
`<input type="range" min="0" max="100" value="25" class="range" step="25">
<div class="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<input type="range" min="0" max="100" value="40" class="range range-primary max-w-xs">
<pre slot="html">{
`<input type="range" min="0" max="100" value="40" class="range range-primary">`
}</pre>
</Component>

<Component title="Secondary color">
<input type="range" min="0" max="100" value="40" class="range range-secondary max-w-xs">
<pre slot="html">{
`<input type="range" min="0" max="100" value="40" class="range range-secondary">`
}</pre>
</Component>

<Component title="Accent color">
<input type="range" min="0" max="100" value="40" class="range range-accent max-w-xs">
<pre slot="html">{
`<input type="range" min="0" max="100" value="40" class="range range-accent">`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col w-full items-center gap-4">
  <input type="range" min="0" max="100" value="40" class="range range-xs max-w-xs"> 
  <input type="range" min="0" max="100" value="50" class="range range-sm max-w-xs"> 
  <input type="range" min="0" max="100" value="60" class="range range-md max-w-xs"> 
  <input type="range" min="0" max="100" value="70" class="range range-lg max-w-xs">
</div>
<pre slot="html">{
`<input type="range" min="0" max="100" value="40" class="range range-xs"> 
<input type="range" min="0" max="100" value="50" class="range range-sm"> 
<input type="range" min="0" max="100" value="60" class="range range-md"> 
<input type="range" min="0" max="100" value="70" class="range range-lg">`
}</pre>
</Component>
