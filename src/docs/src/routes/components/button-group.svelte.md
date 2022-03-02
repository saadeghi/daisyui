---
title: Button group
desc: Button group shows buttons next to each other.
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
  { type:'component', class: 'btn-group', desc: 'Container for grouping multiple buttons' },
]}"
/>

<Component title="Button group">
<div class="btn-group">
  <button class="btn btn-active">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$btn-group">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`
}</pre>
</Component>

<Component title="Button group with radio buttons">
<div class="btn-group">
  <input type="radio" name="options" data-title="1" class="btn">
  <input type="radio" name="options" data-title="2" checked="checked" class="btn">
  <input type="radio" name="options" data-title="3" class="btn">
  <input type="radio" name="options" data-title="4" class="btn">
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$btn-group">
  <input type="radio" name="options" data-title="1" class="$$btn">
  <input type="radio" name="options" data-title="2" class="$$btn" checked>
  <input type="radio" name="options" data-title="3" class="$$btn">
  <input type="radio" name="options" data-title="4" class="$$btn">
</div>`
}</pre>
</Component>
