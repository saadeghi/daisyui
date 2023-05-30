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

<div class="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <div>
    <div class="font-bold">Deprecated</div>
    <div>This component is deprecated and will be removed in the next major version. Use <a class="link" href="/components/join">Join</a> instead.</div>
  </div>
</div>

<ClassTable
data="{[
  { type:'component', class: 'btn-group', desc: 'Container for grouping multiple buttons' },
  { type:'responsive', class: 'btn-group-horizontal', desc: 'Show buttons horizontally (default)' },
  { type:'responsive', class: 'btn-group-vertical', desc: 'Show buttons vertically' },
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

<Component title="Button group vertical">
<div class="btn-group btn-group-vertical">
  <button class="btn btn-active">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$btn-group btn-group-vertical">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`
}</pre>
</Component>

<Component title="Responsive - Vertical for small screen, Horizontal on large screen">
<div class="btn-group btn-group-vertical lg:btn-group-horizontal">
  <button class="btn btn-active">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$btn-group btn-group-vertical lg:btn-group-horizontal">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`
}</pre>
</Component>

<Component title="Button group with radio buttons">
<div class="btn-group">
  <input type="radio" name="options" data-title="1" class="btn" />
  <input type="radio" name="options" data-title="2" checked="checked" class="btn" />
  <input type="radio" name="options" data-title="3" class="btn" />
  <input type="radio" name="options" data-title="4" class="btn" />
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$btn-group">
  <input type="radio" name="options" data-title="1" class="$$btn" />
  <input type="radio" name="options" data-title="2" class="$$btn" checked />
  <input type="radio" name="options" data-title="3" class="$$btn" />
  <input type="radio" name="options" data-title="4" class="$$btn" />
</div>`
}</pre>
</Component>
