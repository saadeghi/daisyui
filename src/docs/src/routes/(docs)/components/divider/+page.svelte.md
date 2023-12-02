---
title: Divider
desc: Divider will be used to separate content vertically or horizontally.
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
{ type:'component', class: 'divider', desc: 'Put a divider line between two elements' },
{ type:'modifier', class: 'divider-neutral', desc: 'Applies neutral color to the divider line' },
{ type:'modifier', class: 'divider-primary', desc: 'Applies primary color to the divider line' },
{ type:'modifier', class: 'divider-secondary', desc: 'Applies secondary color to the divider line' },
{ type:'modifier', class: 'divider-accent', desc: 'Applies accent color to the divider line' },
{ type:'modifier', class: 'divider-success', desc: 'Applies success color to the divider line' },
{ type:'modifier', class: 'divider-warning', desc: 'Applies warning color to the divider line' },
{ type:'modifier', class: 'divider-info', desc: 'Applies info color to the divider line' },
{ type:'modifier', class: 'divider-error', desc: 'Applies error color to the divider line' },
{ type:'responsive', class: 'divider-vertical', desc: 'Divide elements on top of each other (default)' },
{ type:'responsive', class: 'divider-horizontal', desc: 'Divide elements next to each other' },
{ type:'responsive', class: 'divider-start', desc: 'Pushes the divider text to the start' },
{ type:'responsive', class: 'divider-end', desc: 'Pushes the divider text to the end' },
]}"
/>

<Component title="Divider">
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider">OR</div>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full border-opacity-50">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div class="$$divider">OR</div>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Divider horizontal">
<div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="divider divider-horizontal">OR</div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex w-full">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <div class="$$divider $$divider-horizontal">OR</div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Divider with no text">
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider"></div> 
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="$$divider"></div> 
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="responsive (lg:divider-horizontal)">
<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="divider lg:divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div class="$$divider lg:$$divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>`
}</pre>
</Component>

<Component title="Divider with colors">
<div class="flex flex-col w-full">
  <div class="divider">Default</div>
  <div class="divider divider-neutral">Neutral</div>
  <div class="divider divider-primary">Primary</div>
  <div class="divider divider-secondary">Secondary</div>
  <div class="divider divider-accent">Accent</div>
  <div class="divider divider-success">Success</div>
  <div class="divider divider-warning">Warning</div>
  <div class="divider divider-info">Info</div>
  <div class="divider divider-error">Error</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full">
  <div class="$$divider">Default</div>
  <div class="$$divider $$divider-neutral">Neutral</div>
  <div class="$$divider $$divider-primary">Primary</div>
  <div class="$$divider $$divider-secondary">Secondary</div>
  <div class="$$divider $$divider-accent">Accent</div>
  <div class="$$divider $$divider-success">Success</div>
  <div class="$$divider $$divider-warning">Warning</div>
  <div class="$$divider $$divider-info">Info</div>
  <div class="$$divider $$divider-error">Error</div>
</div>`
}</pre>
</Component>

<Component title="Divider in different positions">
<div class="flex flex-col w-full">
  <div class="divider divider-start">Start</div>
  <div class="divider">Default</div>
  <div class="divider divider-end">End</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col w-full">
  <div class="$$divider $$divider-start">Start</div>
  <div class="$$divider">Default</div>
  <div class="$$divider $$divider-end">End</div>
</div>`
}</pre>
</Component>

<Component title="Divider in different positions (horizontal)">
<div class="flex w-full justify-center h-52">
  <div class="divider divider-horizontal divider-start">Start</div>
  <div class="divider divider-horizontal">Default</div>
  <div class="divider divider-horizontal divider-end">End</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex w-full">
  <div class="$$divider $$divider-start">Start</div>
  <div class="$$divider">Default</div>
  <div class="$$divider $$divider-end">End</div>
</div>`
}</pre>
</Component>
