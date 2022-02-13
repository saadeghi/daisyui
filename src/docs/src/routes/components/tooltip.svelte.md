---
title: Tooltip
desc: Tooltip can be used to show a message when hovering over an element.
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

<Component title="Tooltip">
<div class="my-6">
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
<pre slot="html">{
`<div class="tooltip" data-tip="hello">
  <button class="btn">Hover me</button>
</div>`
}</pre>
</Component>

<Component title="Force open">
<div class="my-6">
  <div class="tooltip tooltip-open" data-tip="hello">
    <button class="btn">Force open</button>
  </div>
</div>
<pre slot="html">{
`<div class="tooltip tooltip-open" data-tip="hello">
  <button class="btn">Force open</button>
</div>`
}</pre>
</Component>

<Component title="Bottom">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
    <button class="btn">Bottom</button>
  </div>
</div>
<pre slot="html">{
`<div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
  <button class="btn">Bottom</button>
</div>`
}</pre>
</Component>

<Component title="Left">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
    <button class="btn">Left</button>
  </div>
</div>
<pre slot="html">{
`<div class="tooltip tooltip-open tooltip-left" data-tip="hello">
  <button class="btn">Left</button>
</div>`
}</pre>
</Component>

<Component title="Right">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
    <button class="btn">Right</button>
  </div>
</div>
<pre slot="html">{
`<div class="tooltip tooltip-open tooltip-right" data-tip="hello">
  <button class="btn">Right</button>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<div class="my-6">
  <div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
    <button class="btn btn-primary">primary</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
  <button class="btn btn-primary">primary</button>
</div>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="my-6">
  <div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
    <button class="btn btn-secondary">secondary</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
  <button class="btn btn-secondary">secondary</button>
</div>`
}</pre>
</Component>

<Component title="Accent color">
<div class="my-6">
  <div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
    <button class="btn btn-accent">accent</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
  <button class="btn btn-accent">accent</button>
</div>`
}</pre>
</Component>

<Component title="Info color">
<div class="my-6">
  <div data-tip="info" class="tooltip tooltip-open tooltip-info">
    <button class="btn btn-info">info</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="info" class="tooltip tooltip-open tooltip-info">
  <button class="btn btn-info">info</button>
</div>`
}</pre>
</Component>

<Component title="Success color">
<div class="my-6">
  <div data-tip="success" class="tooltip tooltip-open tooltip-success">
    <button class="btn btn-success">success</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="success" class="tooltip tooltip-open tooltip-success">
  <button class="btn btn-success">success</button>
</div>`
}</pre>
</Component>

<Component title="Warning color">
<div class="my-6">
  <div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
    <button class="btn btn-warning">warning</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
  <button class="btn btn-warning">warning</button>
</div>`
}</pre>
</Component>

<Component title="Error color">
<div class="my-6">
  <div data-tip="error" class="tooltip tooltip-open tooltip-error">
    <button class="btn btn-error">error</button>
  </div>
</div>
<pre slot="html">{
`<div data-tip="error" class="tooltip tooltip-open tooltip-error">
  <button class="btn btn-error">error</button>
</div>`
}</pre>
</Component>
