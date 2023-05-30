---
title: Radio
desc: Radio buttons allow the user to select one option from a set.
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
  { type:'component', class: 'radio', desc: 'For radio input' },
  { type:'modifier', class: 'radio-primary', desc: 'Adds `primary` to radio' },
  { type:'modifier', class: 'radio-secondary', desc: 'Adds `secondary` to radio' },
  { type:'modifier', class: 'radio-accent', desc: 'Adds `accent` to radio' },
  { type:'modifier', class: 'radio-success', desc: 'Adds `success` to radio' },
  { type:'modifier', class: 'radio-warning', desc: 'Adds `warning` to radio' },
  { type:'modifier', class: 'radio-info', desc: 'Adds `info` to radio' },
  { type:'modifier', class: 'radio-error', desc: 'Adds `error` to radio' },
  { type:'responsive', class: 'radio-lg', desc: 'Large radio' },
  { type:'responsive', class: 'radio-md', desc: 'Medium radio (default)' },
  { type:'responsive', class: 'radio-sm', desc: 'Small radio' },
  { type:'responsive', class: 'radio-xs', desc: 'Extra small radio' },
]}"
/>

<Component title="Radio">
<input type="radio" name="radio-1" class="radio" checked />
<input type="radio" name="radio-1" class="radio" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-1" class="$$radio" checked />
<input type="radio" name="radio-1" class="$$radio" />`
}</pre>
</Component>

<Component title="Primary color">
<input type="radio" name="radio-2" class="radio radio-primary" checked />
<input type="radio" name="radio-2" class="radio radio-primary" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-2" class="$$radio $$radio-primary" checked />
<input type="radio" name="radio-2" class="$$radio $$radio-primary" />`
}</pre>
</Component>

<Component title="Secondary color">
<input type="radio" name="radio-3" class="radio radio-secondary" checked />
<input type="radio" name="radio-3" class="radio radio-secondary" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-3" class="$$radio $$radio-secondary" checked />
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" />`
}</pre>
</Component>

<Component title="Accent color">
<input type="radio" name="radio-4" class="radio radio-accent" checked />
<input type="radio" name="radio-4" class="radio radio-accent" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-4" class="$$radio $$radio-accent" checked />
<input type="radio" name="radio-4" class="$$radio $$radio-accent" />`
}</pre>
</Component>

<Component title="Success color">
<input type="radio" name="radio-5" class="radio radio-success" checked />
<input type="radio" name="radio-5" class="radio radio-success" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-5" class="$$radio $$radio-success" checked />
<input type="radio" name="radio-5" class="$$radio $$radio-success" />`
}</pre>
</Component>

<Component title="Warning color">
<input type="radio" name="radio-6" class="radio radio-warning" checked />
<input type="radio" name="radio-6" class="radio radio-warning" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-6" class="$$radio $$radio-warning" checked />
<input type="radio" name="radio-6" class="$$radio $$radio-warning" />`
}</pre>
</Component>

<Component title="Info color">
<input type="radio" name="radio-7" class="radio radio-info" checked />
<input type="radio" name="radio-7" class="radio radio-info" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-7" class="$$radio $$radio-info" checked />
<input type="radio" name="radio-7" class="$$radio $$radio-info" />`
}</pre>
</Component>

<Component title="Error color">
<input type="radio" name="radio-8" class="radio radio-error" checked />
<input type="radio" name="radio-8" class="radio radio-error" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-8" class="$$radio $$radio-error" checked />
<input type="radio" name="radio-8" class="$$radio $$radio-error" />`
}</pre>
</Component>

<Component title="Disabled">
<input type="radio" name="radio-9" class="radio" disabled checked />
<input type="radio" name="radio-9" class="radio" disabled />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="radio" name="radio-9" class="$$radio" disabled checked />
<input type="radio" name="radio-9" class="$$radio" disabled />`
}</pre>
</Component>

<Component title="With label and form-control and custom colors!">
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Red pill</span> 
      <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Blue pill</span> 
      <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
    </label>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Red pill</span> 
    <input type="radio" name="radio-10" class="$$radio checked:bg-red-500" checked />
  </label>
</div>
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Blue pill</span> 
    <input type="radio" name="radio-10" class="$$radio checked:bg-blue-500" checked />
  </label>
</div>`
}</pre>
</Component>
