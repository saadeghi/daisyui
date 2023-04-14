---
title: Tooltip
desc: Tooltip can be used to show a message when hovering over an element.
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
  { type:'responsive', class: 'tooltip', desc: 'Container element' },
  { type:'component', class: 'tooltip-open', desc: 'Force open tooltip' },
  { type:'responsive', class: 'tooltip-top', desc: 'Put tooltip on top' },
  { type:'responsive', class: 'tooltip-bottom', desc: 'Put tooltip on bottom' },
  { type:'responsive', class: 'tooltip-left', desc: 'Put tooltip on left' },
  { type:'responsive', class: 'tooltip-right', desc: 'Put tooltip on right' },
  { type:'modifier', class: 'tooltip-primary', desc: 'Adds `primary` color to tooltip' },
  { type:'modifier', class: 'tooltip-secondary', desc: 'Adds `secondary` color to tooltip' },
  { type:'modifier', class: 'tooltip-accent', desc: 'Adds `accent` color to tooltip' },
  { type:'modifier', class: 'tooltip-info', desc: 'Adds `info` color to tooltip' },
  { type:'modifier', class: 'tooltip-success', desc: 'Adds `success` color to tooltip' },
  { type:'modifier', class: 'tooltip-warning', desc: 'Adds `warning` color to tooltip' },
  { type:'modifier', class: 'tooltip-error', desc: 'Adds `error` color to tooltip' },
]}"
/>

<Component title="Tooltip">
<div class="my-6">
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip" data-tip="hello">
  <button className="$$btn">Hover me</button>
</div>`
}</pre>
</Component>

<Component title="Force open">
<div class="my-6">
  <div class="tooltip tooltip-open" data-tip="hello">
    <button class="btn">Force open</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open" data-tip="hello">
  <button class="$$btn">Force open</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open" data-tip="hello">
  <button className="$$btn">Force open</button>
</div>`
}</pre>
</Component>

<Component title="Top">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
    <button class="btn">Top</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button class="$$btn">Top</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button className="$$btn">Top</button>
</div>`
}</pre>
</Component>

<Component title="Bottom">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
    <button class="btn">Bottom</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button class="$$btn">Bottom</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button className="$$btn">Bottom</button>
</div>`
}</pre>
</Component>

<Component title="Left">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
    <button class="btn">Left</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button class="$$btn">Left</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button className="$$btn">Left</button>
</div>`
}</pre>
</Component>

<Component title="Right">
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
    <button class="btn">Right</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button class="$$btn">Right</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button className="$$btn">Right</button>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<div class="my-6">
  <div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
    <button class="btn btn-primary">primary</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button class="$$btn $$btn-primary">primary</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button className="$$btn $$btn-primary">primary</button>
</div>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="my-6">
  <div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
    <button class="btn btn-secondary">secondary</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button class="$$btn $$btn-secondary">secondary</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button className="$$btn $$btn-secondary">secondary</button>
</div>`
}</pre>
</Component>

<Component title="Accent color">
<div class="my-6">
  <div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
    <button class="btn btn-accent">accent</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button class="$$btn $$btn-accent">accent</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button className="$$btn $$btn-accent">accent</button>
</div>`
}</pre>
</Component>

<Component title="Info color">
<div class="my-6">
  <div data-tip="info" class="tooltip tooltip-open tooltip-info">
    <button class="btn btn-info">info</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button class="$$btn $$btn-info">info</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button className="$$btn $$btn-info">info</button>
</div>`
}</pre>
</Component>

<Component title="Success color">
<div class="my-6">
  <div data-tip="success" class="tooltip tooltip-open tooltip-success">
    <button class="btn btn-success">success</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button class="$$btn $$btn-success">success</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button className="$$btn $$btn-success">success</button>
</div>`
}</pre>
</Component>

<Component title="Warning color">
<div class="my-6">
  <div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
    <button class="btn btn-warning">warning</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button class="$$btn $$btn-warning">warning</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button className="$$btn $$btn-warning">warning</button>
</div>`
}</pre>
</Component>

<Component title="Error color">
<div class="my-6">
  <div data-tip="error" class="tooltip tooltip-open tooltip-error">
    <button class="btn btn-error">error</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button class="$$btn $$btn-error">error</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button className="$$btn $$btn-error">error</button>
</div>`
}</pre>
</Component>

<Component title="Responsive tooltip. only show for large screen">
<div class="my-6">
  <div class="lg:tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$lg:tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$lg:tooltip" data-tip="hello">
  <button className="$$btn">Hover me</button>
</div>`
}</pre>
</Component>
