---
title: Textarea
desc: Textarea allows users to enter text in multiple lines.
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
  { type:'modifier', class: 'label', desc: 'For helper text' },
  { type:'modifier', class: 'textarea', desc: 'For <textarea> element' },
  { type:'modifier', class: 'textarea-bordered', desc: 'Adds border to textarea' },
  { type:'modifier', class: 'textarea-ghost', desc: 'Adds ghost style to textarea' },
  { type:'modifier', class: 'textarea-primary', desc: 'Adds `primary` color to textarea' },
  { type:'modifier', class: 'textarea-secondary', desc: 'Adds `secondary` color to textarea' },
  { type:'modifier', class: 'textarea-accent', desc: 'Adds `accent` color to textarea' },
  { type:'modifier', class: 'textarea-info', desc: 'Adds `info` color to textarea' },
  { type:'modifier', class: 'textarea-success', desc: 'Adds `success` color to textarea' },
  { type:'modifier', class: 'textarea-warning', desc: 'Adds `warning` color to textarea' },
  { type:'modifier', class: 'textarea-error', desc: 'Adds `error` color to textarea' },
  { type:'responsive', class: 'textarea-lg', desc: 'Large size for textarea' },
  { type:'responsive', class: 'textarea-md', desc: 'Medium (default) size for textarea' },
  { type:'responsive', class: 'textarea-sm', desc: 'Small size for textarea' },
  { type:'responsive', class: 'textarea-xs', desc: 'Extra small size for textarea' },
]}"
/>

<Component title="Textarea">
<textarea class="textarea" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Textarea with border">
<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-bordered" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-bordered" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Ghost (no background)">
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="With form control and labels">
<div class="form-control">
  <label class="label">
    <span class="label-text">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
  <label class="label">
    <span class="label-text-alt">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control">
  <label class="$$label">
    <span class="$$label-text">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <textarea class="$$textarea $$textarea-bordered h-24" placeholder="Bio"></textarea>
  <label class="$$label">
    <span class="$$label-text-alt">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$form-control">
  <label className="$$label">
    <span className="$$label-text">Your bio</span>
    <span className="$$label-text-alt">Alt label</span>
  </label>
  <textarea className="$$textarea $$textarea-bordered h-24" placeholder="Bio"></textarea>
  <label className="$$label">
    <span className="$$label-text-alt">Your bio</span>
    <span className="$$label-text-alt">Alt label</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-primary" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-primary" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Secondary color">
<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-secondary" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-secondary" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Accent color">
<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-accent" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-accent" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Info color">
<textarea class="textarea textarea-info" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-info" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-info" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Success color">
<textarea class="textarea textarea-success" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-success" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-success" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Warning color">
<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-warning" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-warning" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Error color">
<textarea class="textarea textarea-error" placeholder="Bio"></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea $$textarea-error" placeholder="Bio"></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea $$textarea-error" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>

<pre slot="html" use:replace={{ to: $prefix }}>{
`
<!-- xs -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-xs w-full max-w-xs" ></textarea>
<!-- sm -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-sm w-full max-w-xs" ></textarea>
<!-- md -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-md w-full max-w-xs" ></textarea>
<!-- lg -->
<textarea placeholder="Bio" class="$$textarea $$textarea-bordered $$textarea-lg w-full max-w-xs" ></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`
<!-- xs -->
<textarea placeholder="Bio" className="$$textarea $$textarea-bordered $$textarea-xs w-full max-w-xs" ></textarea>
<!-- sm -->
<textarea placeholder="Bio" className="$$textarea $$textarea-bordered $$textarea-sm w-full max-w-xs" ></textarea>
<!-- md -->
<textarea placeholder="Bio" className="$$textarea $$textarea-bordered $$textarea-md w-full max-w-xs" ></textarea>
<!-- lg -->
<textarea placeholder="Bio" className="$$textarea $$textarea-bordered $$textarea-lg w-full max-w-xs" ></textarea>`
}</pre>
</Component>

<Component title="Disabled">
<textarea class="textarea" placeholder="Bio" disabled></textarea>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<textarea class="$$textarea" placeholder="Bio" disabled></textarea>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<textarea className="$$textarea" placeholder="Bio" disabled></textarea>`
}</pre>
</Component>
