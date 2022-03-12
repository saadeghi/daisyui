---
title: Text Input
desc: Text Input is a simple input field.
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
  { type:'component', class: 'form-control', desc: 'Container element' },
  { type:'component', class: 'label', desc: 'For helper text' },
  { type:'component', class: 'input', desc: 'For <input> element' },
  { type:'modifier', class: 'input-bordered', desc: 'Adds border to input' },
  { type:'modifier', class: 'input-ghost', desc: 'Adds ghost style to checkbox' },
  { type:'modifier', class: 'input-primary', desc: 'Adds `primary` color to input' },
  { type:'modifier', class: 'input-secondary', desc: 'Adds `secondary` color to input' },
  { type:'modifier', class: 'input-accent', desc: 'Adds `accent` color to input' },
  { type:'modifier', class: 'input-info', desc: 'Adds `info` color to input' },
  { type:'modifier', class: 'input-success', desc: 'Adds `success` color to input' },
  { type:'modifier', class: 'input-warning', desc: 'Adds `warning` color to input' },
  { type:'modifier', class: 'input-error', desc: 'Adds `error` color to input' },
  { type:'responsive', class: 'input-lg', desc: 'Large size for input' },
  { type:'responsive', class: 'input-md', desc: 'Medium (default) size for input' },
  { type:'responsive', class: 'input-sm', desc: 'Small size for input' },
  { type:'responsive', class: 'input-xs', desc: 'Extra small size for input' },
]}"
/>

<Component title="Text input">
<input type="text" placeholder="Type here" class="input w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input w-full max-w-xs">`
}</pre>
</Component>

<Component title="Text input with border">
<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs">`
}</pre>
</Component>

<Component title="Ghost (no background)">
<input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-ghost w-full max-w-xs">`
}</pre>
</Component>

<Component title="With form-control and labels">
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">What is your name?</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-primary w-full max-w-xs">`
}</pre>
</Component>

<Component title="Secondary color">
<input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-secondary w-full max-w-xs">`
}</pre>
</Component>

<Component title="Accent color">
<input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-accent w-full max-w-xs">`
}</pre>
</Component>

<Component title="Info color">
<input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-info w-full max-w-xs">`
}</pre>
</Component>

<Component title="Success color">
<input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-success w-full max-w-xs">`
}</pre>
</Component>

<Component title="Warning color">
<input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-warning w-full max-w-xs">`
}</pre>
</Component>

<Component title="Error color">
<input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs">
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-error w-full max-w-xs">`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs">
  <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs">
  <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs">
  <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs">
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- lg -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-xs w-full max-w-xs">
<!-- md -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-sm w-full max-w-xs">
<!-- sm -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-md w-full max-w-xs">
<!-- xs -->
<input type="text" placeholder="Type here" class="$$input $$input-bordered $$input-lg w-full max-w-xs">`
}</pre>
</Component>

<Component title="Disabled">
<input type="text" placeholder="You can't touch this" class="input input-bordered w-full max-w-xs" disabled>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="text" placeholder="You can't touch this" class="$$input $$input-bordered w-full max-w-xs" disabled>`
}</pre>
</Component>
