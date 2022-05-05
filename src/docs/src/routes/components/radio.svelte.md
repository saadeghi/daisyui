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
  { type:'modifier', class: 'radio', desc: 'For radio input' },
  { type:'modifier', class: 'radio-primary', desc: 'Adds `primary` to radio' },
  { type:'modifier', class: 'radio-secondary', desc: 'Adds `secondary` to radio' },
  { type:'modifier', class: 'radio-accent', desc: 'Adds `accent` to radio' },
  { type:'modifier', class: 'radio-lg', desc: 'Large radio' },
  { type:'modifier', class: 'radio-md', desc: 'Medium radio (default)' },
  { type:'modifier', class: 'radio-sm', desc: 'Small radio' },
  { type:'modifier', class: 'radio-xs', desc: 'Extra small radio' },
]}"
/>

<Component title="Checkbox">
<input type="radio" name="radio-1" class="radio" checked />
<input type="radio" name="radio-1" class="radio" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="$$radio" name="radio-1" class="radio" checked />
<input type="$$radio" name="radio-1" class="radio" />`
}</pre>
</Component>

<Component title="Primary color">
<input type="radio" name="radio-2" class="radio radio-primary" checked />
<input type="radio" name="radio-2" class="radio radio-primary" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="$$radio" name="radio-2" class="radio radio-primary" checked />
<input type="$$radio" name="radio-2" class="radio radio-primary" />`
}</pre>
</Component>

<Component title="Secondary color">
<input type="radio" name="radio-3" class="radio radio-secondary" checked />
<input type="radio" name="radio-3" class="radio radio-secondary" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="$$radio" name="radio-3" class="radio radio-secondary" checked />
<input type="$$radio" name="radio-3" class="radio radio-secondary" />`
}</pre>
</Component>

<Component title="Accent color">
<input type="radio" name="radio-4" class="radio radio-accent" checked />
<input type="radio" name="radio-4" class="radio radio-accent" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="$$radio" name="radio-4" class="radio radio-accent" checked />
<input type="$$radio" name="radio-4" class="radio radio-accent" />`
}</pre>
</Component>

<Component title="Disabled">
<input type="radio" name="radio-5" class="radio" disabled checked />
<input type="radio" name="radio-5" class="radio" disabled />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<input type="$$radio" name="radio-5" class="radio" disabled checked />
<input type="$$radio" name="radio-5" class="radio" disabled />`
}</pre>
</Component>

<Component title="With label and form-control and custom colors!">
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Red pill</span> 
      <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">blue pill</span> 
      <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
    </label>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Red pill</span> 
    <input type="radio" name="radio-6" class="$$radio checked:bg-red-500" checked />
  </label>
</div>
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">blue pill</span> 
    <input type="radio" name="radio-6" class="$$radio checked:bg-blue-500" checked />
  </label>
</div>`
}</pre>
</Component>
