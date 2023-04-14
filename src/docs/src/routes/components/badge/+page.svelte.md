---
title: Badge
desc: Badges are used to inform the user of the status of specific data.
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
  { type:'component', class: 'badge', desc: 'Container element' },
  { type:'modifier', class: 'badge-neutral', desc: 'badge with `neutral` color' },
  { type:'modifier', class: 'badge-primary', desc: 'badge with `primary` color' },
  { type:'modifier', class: 'badge-secondary', desc: 'badge with `secondary` color' },
  { type:'modifier', class: 'badge-accent', desc: 'badge with `accent` color' },
  { type:'modifier', class: 'badge-ghost', desc: 'badge with `ghost` color' },
  { type:'modifier', class: 'badge-info', desc: 'badge with `info` color' },
  { type:'modifier', class: 'badge-success', desc: 'badge with `success` color' },
  { type:'modifier', class: 'badge-warning', desc: 'badge with `warning` color' },
  { type:'modifier', class: 'badge-error', desc: 'badge with `error` color' },
  { type:'modifier', class: 'badge-outline', desc: 'transparent badge with [colorful] border' },
  { type:'responsive', class: 'badge-lg', desc: 'badge with large size' },
  { type:'responsive', class: 'badge-md', desc: 'badge with medium size (default)' },
  { type:'responsive', class: 'badge-sm', desc: 'badge with small size' },
  { type:'responsive', class: 'badge-xs', desc: 'badge with extra small size' },
]}"
/>

<Component title="Badge">
<span class="badge">Badge</span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$badge">Badge</span>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<span className="$$badge">Badge</span>`
}</pre>
</Component>

<Component title="Badge with brand colors">
<div class="badge">default</div>
<div class="badge badge-neutral">neutral</div>
<div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$badge">default</div>
<div class="$$badge $$badge-neutral">neutral</div>
<div class="$$badge $$badge-primary">primary</div>
<div class="$$badge $$badge-secondary">secondary</div>
<div class="$$badge $$badge-accent">accent</div>
<div class="$$badge $$badge-ghost">ghost</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$badge">default</div>
<div className="$$badge $$badge-neutral">neutral</div>
<div className="$$badge $$badge-primary">primary</div>
<div className="$$badge $$badge-secondary">secondary</div>
<div className="$$badge $$badge-accent">accent</div>
<div className="$$badge $$badge-ghost">ghost</div>`
}</pre>
</Component>

<Component title="Outline badge">
<div class="badge badge-outline">default</div>
<div class="badge badge-primary badge-outline">primary</div>
<div class="badge badge-secondary badge-outline">secondary</div>
<div class="badge badge-accent badge-outline">accent</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$badge $$badge-outline">default</div>
<div class="$$badge $$badge-primary $$badge-outline">primary</div>
<div class="$$badge $$badge-secondary $$badge-outline">secondary</div>
<div class="$$badge $$badge-accent $$badge-outline">accent</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$badge $$badge-outline">default</div>
<div className="$$badge $$badge-primary $$badge-outline">primary</div>
<div className="$$badge $$badge-secondary $$badge-outline">secondary</div>
<div className="$$badge $$badge-accent $$badge-outline">accent</div>`
}</pre>
</Component>

<Component title="Badge sizes">
<div class="badge badge-lg">987,654</div>
<div class="badge badge-md">987,654</div>
<div class="badge badge-sm">987,654</div>
<div class="badge badge-xs">987,654</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$badge $$badge-lg">987,654</div>
<div class="$$badge $$badge-md">987,654</div>
<div class="$$badge $$badge-sm">987,654</div>
<div class="$$badge $$badge-xs">987,654</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$badge $$badge-lg">987,654</div>
<div className="$$badge $$badge-md">987,654</div>
<div className="$$badge $$badge-sm">987,654</div>
<div className="$$badge $$badge-xs">987,654</div>`
}</pre>
</Component>

<Component title="Empty badge">
<div class="badge badge-primary badge-lg"></div>
<div class="badge badge-primary badge-md"></div>
<div class="badge badge-primary badge-sm"></div>
<div class="badge badge-primary badge-xs"></div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$badge $$badge-primary $$badge-lg"></div>
<div class="$$badge $$badge-primary $$badge-md"></div>
<div class="$$badge $$badge-primary $$badge-sm"></div>
<div class="$$badge $$badge-primary $$badge-xs"></div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$badge $$badge-primary $$badge-lg"></div>
<div className="$$badge $$badge-primary $$badge-md"></div>
<div className="$$badge $$badge-primary $$badge-sm"></div>
<div className="$$badge $$badge-primary $$badge-xs"></div>`
}</pre>
</Component>

<Component title="Badge with state colors">
<div class="badge badge-info gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info
</div>
<div class="badge badge-success gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  success
</div>
<div class="badge badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  warning
</div>
<div class="badge badge-error gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  error
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$badge $$badge-info gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info
</div>
<div class="$$badge $$badge-success gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  success
</div>
<div class="$$badge $$badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  warning
</div>
<div class="$$badge $$badge-error gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  error
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$badge $$badge-info gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info
</div>
<div className="$$badge $$badge-success gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  success
</div>
<div className="$$badge $$badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  warning
</div>
<div className="$$badge $$badge-error gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  error
</div>`
}</pre>
</Component>

<Component title="Badge in a text" classes="flex-col">
<h2 class="text-xl">
  Heading
  <span class="badge badge-lg">NEW</span>
</h2>
<h3 class="text-lg">
  Heading
  <span class="badge badge-md">NEW</span>
</h3>
<h4 class="text-base">
  Heading
  <span class="badge badge-sm">NEW</span>
</h4>
<h5 class="text-sm">
  Heading
  <span class="badge badge-xs">NEW</span>
</h5>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<h2 class="text-xl">
  Heading
  <span class="badge badge-lg">NEW</span>
</h2>
<h3 class="text-lg">
  Heading
  <span class="badge badge-md">NEW</span>
</h3>
<h4 class="text-base">
  Heading
  <span class="badge badge-sm">NEW</span>
</h4>
<h5 class="text-sm">
  Heading
  <span class="badge badge-xs">NEW</span>
</h5>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<h2 className="text-xl">
  Heading
  <span className="badge badge-lg">NEW</span>
</h2>
<h3 className="text-lg">
  Heading
  <span className="badge badge-md">NEW</span>
</h3>
<h4 className="text-base">
  Heading
  <span className="badge badge-sm">NEW</span>
</h4>
<h5 className="text-sm">
  Heading
  <span className="badge badge-xs">NEW</span>
</h5>`
}</pre>
</Component>

<Component title="Badge in a button">
<button class="btn">
  Inbox
  <div class="badge">+99</div>
</button>
<button class="btn">
  Inbox
  <div class="badge badge-secondary">+99</div>
</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn">
  Inbox
  <div class="$$badge">+99</div>
</button>
<button class="$$btn">
  Inbox
  <div class="$$badge $$badge-secondary">+99</div>
</button>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<button className="$$btn">
  Inbox
  <div className="$$badge">+99</div>
</button>
<button className="$$btn">
  Inbox
  <div className="$$badge $$badge-secondary">+99</div>
</button>`
}</pre>
</Component>
