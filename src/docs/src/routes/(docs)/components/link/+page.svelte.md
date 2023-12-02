---
title: Link
desc: Link adds the missing underline style to links.
published: true
layout: components
---

<script>
  import Component from "$components/Component.svelte"
  import ClassTable from "$components/ClassTable.svelte"
  import ComponentPageTabs from "$components/ComponentPageTabs.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<!-- <ComponentPageTabs/> -->

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
<button class="link">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Link">
<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a 
  <button class="link">normal link</button> again.
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
<button class="link link-primary">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-primary">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Secondary color">
<button class="link link-secondary">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-secondary">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Accent color">
<button class="link link-accent">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-accent">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Neutral color">
<button class="link link-neutral">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-neutral">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Success color">
<button class="link link-success">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-success">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Info color">
<button class="link link-info">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-info">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Warning color">
<button class="link link-warning">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-warning">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Error color">
<button class="link link-error">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-error">I'm a simple link</a>`
}</pre>
</Component>

<Component title="Show underline only on hover">
<button class="link link-hover">I'm a simple link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<a class="$$link $$link-hover">I'm a simple link</a>`
}</pre>
</Component>
