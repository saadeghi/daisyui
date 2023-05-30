---
title: Link
desc: Link adds the missing underline style to links.
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
  { type:'component', class: 'link', desc: 'Adds underline to a text' },
  { type:'modifier', class: 'link-neutral', desc: 'Link with `neutral` color' },
  { type:'modifier', class: 'link-primary', desc: 'Link with `primary` color' },
  { type:'modifier', class: 'link-secondary', desc: 'Link with `secondary` color' },
  { type:'modifier', class: 'link-accent', desc: 'Link with `accent` color' },
  { type:'modifier', class: 'link-success', desc: 'Link with `success` color' },
  { type:'modifier', class: 'link-info', desc: 'Link with `info` color' },
  { type:'modifier', class: 'link-warning', desc: 'Link with `warning` color' },
  { type:'modifier', class: 'link-error', desc: 'Link with `error` color' },
  { type:'modifier', class: 'link-hover', desc: 'Only show underline on hover' },
]}"
/>

<Component title="Link">
<a class="link">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Link">
<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a 
  <a class="link">normal link</a> again.
</p>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a 
  <a class="$$link">normal link</a> again.
</p>`
}</pre>
</Component>

<Component title="Primary color">
<a class="link link-primary">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-primary">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Secondary color">
<a class="link link-secondary">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-secondary">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Accent color">
<a class="link link-accent">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-accent">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Neutral color">
<a class="link link-neutral">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-neutral">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Success color">
<a class="link link-success">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-success">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Info color">
<a class="link link-info">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-info">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Warning color">
<a class="link link-warning">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-warning">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Error color">
<a class="link link-error">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-error">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Show underline only on hover">
<a class="link link-hover">I'm a simple link</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-hover">I'm a simple link</a>`
}</pre>
</Component>
