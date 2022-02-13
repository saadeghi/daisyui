---
title: Textarea
desc: Textarea allows users to enter text in multiple lines.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[

]}"
/>

<Component title="Textarea">
<textarea class="textarea" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Textarea with border">
<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Ghost (no background)">
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>`
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
<pre slot="html">{
`<div class="form-control">
  <label class="label">
    <span class="label-text">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </label> 
  <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
  <label class="label">
    <span class="label-text-alt">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </label> 
</div>`
}</pre>
</Component>

<Component title="Primary color">
<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Secondary color">
<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Accent color">
<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Info color">
<textarea class="textarea textarea-info" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-info" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Success color">
<textarea class="textarea textarea-success" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-success" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Warning color">
<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Error color">
<textarea class="textarea textarea-error" placeholder="Bio"></textarea>
<pre slot="html">{
`<textarea class="textarea textarea-error" placeholder="Bio"></textarea>`
}</pre>
</Component>

<Component title="Disabled">
<textarea class="textarea" placeholder="Bio" disabled></textarea>
<pre slot="html">{
`<textarea class="textarea" placeholder="Bio"></textarea>`
}</pre>
</Component>
