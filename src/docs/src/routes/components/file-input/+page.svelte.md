---
title: File Input
desc: File Input is a an input field for uploading files.
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
  { type:'component', class: 'file-input', desc: 'For <input> element' },
  { type:'modifier', class: 'file-input-bordered', desc: 'Adds border to input' },
  { type:'modifier', class: 'file-input-ghost', desc: 'Adds ghost style to input' },
  { type:'modifier', class: 'file-input-primary', desc: 'Adds `primary` color to input' },
  { type:'modifier', class: 'file-input-secondary', desc: 'Adds `secondary` color to input' },
  { type:'modifier', class: 'file-input-accent', desc: 'Adds `accent` color to input' },
  { type:'modifier', class: 'file-input-info', desc: 'Adds `info` color to input' },
  { type:'modifier', class: 'file-input-success', desc: 'Adds `success` color to input' },
  { type:'modifier', class: 'file-input-warning', desc: 'Adds `warning` color to input' },
  { type:'modifier', class: 'file-input-error', desc: 'Adds `error` color to input' },
  { type:'responsive', class: 'file-input-lg', desc: 'Large size for input' },
  { type:'responsive', class: 'file-input-md', desc: 'Medium (default) size for input' },
  { type:'responsive', class: 'file-input-sm', desc: 'Small size for input' },
  { type:'responsive', class: 'file-input-xs', desc: 'Extra small size for input' },
]}"
/>

<Component title="File input">
<input type="file" class="file-input w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input w-full max-w-xs" />`
}</pre>
</Component>

<Component title="File input with border">
<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Ghost (no background)">
<input type="file" class="file-input file-input-ghost w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-ghost w-full max-w-xs" />`
}</pre>
</Component>

<Component title="With form-control and labels">
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Pick a file</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">Pick a file</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-primary w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Secondary color">
<input type="file" class="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-secondary w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Accent color">
<input type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-accent w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Info color">
<input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-info w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Success color">
<input type="file" class="file-input file-input-bordered file-input-success w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-success w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Warning color">
<input type="file" class="file-input file-input-bordered file-input-warning w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-warning w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Error color">
<input type="file" class="file-input file-input-bordered file-input-error w-full max-w-xs" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" class="$$file-input $$file-input-bordered $$file-input-error w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-md w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-lg w-full max-w-xs" />
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`
<!-- xs -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-xs w-full max-w-xs" />
<!-- sm -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-sm w-full max-w-xs" />
<!-- md -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-md w-full max-w-xs" />
<!-- lg -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-lg w-full max-w-xs" />`
}</pre>
</Component>

<Component title="Disabled">
<input type="file" placeholder="You can't touch this" class="file-input file-input-bordered w-full max-w-xs" disabled />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="file" placeholder="You can't touch this" class="$$file-input $$file-input-bordered w-full max-w-xs" disabled />`
}</pre>
</Component>
