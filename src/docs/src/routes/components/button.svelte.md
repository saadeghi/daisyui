---
title: Button
desc: Buttons allows user to take actions or make choices.
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
  { type:'component', class: 'btn', desc: 'Button' },
  { type:'modifier', class: 'btn-primary', desc: 'Button with `primary` color' },
  { type:'modifier', class: 'btn-secondary', desc: 'Button with `secondary` color' },
  { type:'modifier', class: 'btn-accent', desc: 'Button with `accent` color' },
  { type:'modifier', class: 'btn-info', desc: 'Button with `info` color' },
  { type:'modifier', class: 'btn-success', desc: 'Button with `success` color' },
  { type:'modifier', class: 'btn-warning', desc: 'Button with `warning` color' },
  { type:'modifier', class: 'btn-error', desc: 'Button with `error` color' },
  { type:'modifier', class: 'btn-ghost', desc: 'Button with ghost style' },
  { type:'modifier', class: 'btn-link', desc: 'Button styled as a link' },
  { type:'modifier', class: 'btn-outline', desc: 'Transparent Button with colored border' },
  { type:'modifier', class: 'btn-active', desc: 'Force button to show active state' },
  { type:'modifier', class: 'btn-disabled', desc: 'Force button to show disabled state' },
  { type:'modifier', class: 'glass', desc: 'Button with a glass effect' },
  { type:'modifier', class: 'loading', desc: 'Shows loading spinner' },
  { type:'modifier', class: 'no-animation', desc: 'Disables click animation' },
  { type:'responsive', class: 'btn-lg', desc: 'Large button' },
  { type:'responsive', class: 'btn-md', desc: 'Medium button (default)' },
  { type:'responsive', class: 'btn-sm', desc: 'Small button' },
  { type:'responsive', class: 'btn-xs', desc: 'Extra small button' },
  { type:'responsive', class: 'btn-wide', desc: 'Wide button (more horizontal padding)' },
  { type:'responsive', class: 'btn-block', desc: 'Full width button' },
  { type:'responsive', class: 'btn-circle', desc: 'Circle button with a 1:1 ratio' },
  { type:'responsive', class: 'btn-square', desc: 'Square button with a 1:1 ratio' },
]}"
/>

<Component title="Button">
<button class="btn">Button</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn">Button</button>`
}</pre>
</Component>

<Component title="Buttons with brand colors">
<button class="btn">Button</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn">Button</button>
<button class="$$btn $$btn-primary">Button</button>
<button class="$$btn $$btn-secondary">Button</button>
<button class="$$btn $$btn-accent">Button</button>
<button class="$$btn $$btn-ghost">Button</button>
<button class="$$btn $$btn-link">Button</button>`
}</pre>
</Component>

<Component title="Active buttons">
<button class="btn btn-active">Button</button>
<button class="btn btn-active btn-primary">Primary</button>
<button class="btn btn-active btn-secondary">Secondary</button>
<button class="btn btn-active btn-accent">Accent</button>
<button class="btn btn-active btn-ghost">Ghost</button>
<button class="btn btn-active btn-link">Link</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-active">Button</button>
<button class="$$btn $$btn-active $$btn-primary">Button</button>
<button class="$$btn $$btn-active $$btn-secondary">Button</button>
<button class="$$btn $$btn-active $$btn-accent">Button</button>
<button class="$$btn $$btn-active $$btn-ghost">Button</button>
<button class="$$btn $$btn-active $$btn-link">Button</button>`
}</pre>
</Component>

<Component title="Buttons with state colors">
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-info">Info</button>
<button class="$$btn $$btn-success">Success</button>
<button class="$$btn $$btn-warning">Warning</button>
<button class="$$btn $$btn-error">Error</button>`
}</pre>
</Component>

<Component title="Outline buttons">
<button class="btn btn-outline">Button</button>
<button class="btn btn-outline btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Secondary</button>
<button class="btn btn-outline btn-accent">Accent</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-outline">Button</button>
<button class="$$btn $$btn-outline $$btn-primary">Button</button>
<button class="$$btn $$btn-outline $$btn-secondary">Button</button>
<button class="$$btn $$btn-outline $$btn-accent">Button</button>`
}</pre>
</Component>

<Component title="Outline buttons with state colors">
<button class="btn btn-outline btn-info">Info</button>
<button class="btn btn-outline btn-success">Success</button>
<button class="btn btn-outline btn-warning">Warning</button>
<button class="btn btn-outline btn-error">Error</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-outline $$btn-info">Info</button>
<button class="$$btn $$btn-outline $$btn-success">Success</button>
<button class="$$btn $$btn-outline $$btn-warning">Warning</button>
<button class="$$btn $$btn-outline $$btn-error">Error</button>`
}</pre>
</Component>

<Component title="Button sizes">
<button class="btn btn-lg">Large</button>
<button class="btn">Normal</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Tiny</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-lg">Large</button>
<button class="$$btn">Normal</button>
<button class="$$btn $$btn-sm">Small</button>
<button class="$$btn $$btn-xs">Tiny</button>`
}</pre>
</Component>

<Component title="Responsive button" desc="This button will have different sizes on different browser viewpoints">
<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-xs sm:$$btn-sm md:$$btn-md lg:$$btn-lg">Responsive</button>`
}</pre>
</Component>

<Component title="Wide button">
<button class="btn btn-wide">Wide</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-wide">Wide</button>`
}</pre>
</Component>

<Component title="Glass button" bg="https://api.lorem.space/image/house?w=1000&h=300">
<button class="btn glass">Glass button</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$glass">Glass button</button>`
}</pre>
</Component>

<Component title="Buttons with different HTML tags" desc="You can use `btn` class on <button>, <input>, <a>, etc...">
<a role="button" class="btn">Link</a>
<button type="submit" class="btn">Button</button>
<input type="button" value="Input" class="btn">
<input type="submit" value="Submit" class="btn">
<input type="reset" value="Reset" class="btn"><pre slot="html" use:replace={{ to: $prefix }}>{
`<a role="button" class="$$btn">Link</a>
<button type="submit" class="$$btn">Button</button>
<input type="button" value="Input" class="$$btn">
<input type="submit" value="Submit" class="$$btn">
<input type="reset" value="Reset" class="$$btn">`
}</pre>
</Component>

<Component title="Disabled buttons">
<button class="btn" disabled="disabled">Disabled using attribute</button>
<button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button><pre slot="html" use:replace={{to: $prefix }}>{
`<button class="$$btn" disabled="disabled">Disabled using attribute</button>
<button class="$$btn $$btn-disabled" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button>`
}</pre>
</Component>

<Component title="Square button">
<button class="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="$$btn $$btn-square $$btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>`
}</pre>
</Component>

<Component title="Circle button">
<button class="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button class="$$btn $$btn-circle $$btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>`
}</pre>
</Component>

<Component title="Icon at start">
<button class="btn gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button>`
}</pre>
</Component>

<Component title="Icon at end">
<button class="btn gap-2">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn gap-2">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>`
}</pre>
</Component>

<Component title="Button block">
<button class="btn btn-block">block</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-block">block</button>`
}</pre>
</Component>

<Component title="Button with loading spinner">
<button class="btn btn-square loading"></button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$btn-square $$loading"></button>`
}</pre>
</Component>

<Component title="Button with loading spinner and text">
<button class="btn loading">loading</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn $$loading">loading</button>`
}</pre>
</Component>

<Component title="Button without click animation">
<button class="btn no-animation">I don't have click animation</button><pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn no-animation">I don't have click animation</button>`
}</pre>
</Component>
