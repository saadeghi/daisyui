---
title: Range slider
desc: Range slider is used to select a value by sliding a handle.
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
  { type:'component', class: 'range', desc: 'Range input' },
  { type:'modifier', class: 'range-primary', desc: 'Adds `primary` to range' },
  { type:'modifier', class: 'range-secondary', desc: 'Adds `secondary` to range' },
  { type:'modifier', class: 'range-accent', desc: 'Adds `accent` to range' },
  { type:'modifier', class: 'range-success', desc: 'Adds `success` to range' },
  { type:'modifier', class: 'range-warning', desc: 'Adds `warning` to range' },
  { type:'modifier', class: 'range-info', desc: 'Adds `info` to range' },
  { type:'modifier', class: 'range-error', desc: 'Adds `error` to range' },
  { type:'responsive', class: 'range-lg', desc: 'Large range' },
  { type:'responsive', class: 'range-md', desc: 'Medium range (default)' },
  { type:'responsive', class: 'range-sm', desc: 'Small range' },
  { type:'responsive', class: 'range-xs', desc: 'Extra small range' },
]}"
/>

<Component title="Range">
<input type="range" min="0" max="100" value="40" class="range max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range" />`
}</pre>
</Component>

<Component title="With steps and measure">
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="range max-w-xs" step="25" />
  <div class="w-full flex justify-between text-xs px-2 max-w-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="25" class="$$range" step="25" />
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
<input type="range" min="0" max="100" value="40" class="range range-primary max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />`
}</pre>
</Component>

<Component title="Secondary color">
<input type="range" min="0" max="100" value="40" class="range range-secondary max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />`
}</pre>
</Component>

<Component title="Accent color">
<input type="range" min="0" max="100" value="40" class="range range-accent max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />`
}</pre>
</Component>

<Component title="Success color">
<input type="range" min="0" max="100" value="40" class="range range-success max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />`
}</pre>
</Component>

<Component title="Warning color">
<input type="range" min="0" max="100" value="40" class="range range-warning max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />`
}</pre>
</Component>

<Component title="Info color">
<input type="range" min="0" max="100" value="40" class="range range-info max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />`
}</pre>
</Component>

<Component title="Error color">
<input type="range" min="0" max="100" value="40" class="range range-error max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col w-full items-center gap-4">
  <input type="range" min="0" max="100" value="40" class="range range-xs max-w-xs" /> 
  <input type="range" min="0" max="100" value="50" class="range range-sm max-w-xs" /> 
  <input type="range" min="0" max="100" value="60" class="range range-md max-w-xs" /> 
  <input type="range" min="0" max="100" value="70" class="range range-lg max-w-xs" />
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="range" min="0" max="100" value="40" class="$$range $$range-xs" /> 
<input type="range" min="0" max="100" value="50" class="$$range $$range-sm" /> 
<input type="range" min="0" max="100" value="60" class="$$range $$range-md" /> 
<input type="range" min="0" max="100" value="70" class="$$range $$range-lg" />`
}</pre>
</Component>
