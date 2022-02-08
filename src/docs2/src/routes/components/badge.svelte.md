---
title: Badge
desc: Badge Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Badge">
<span class="badge">Badge</span>
<pre slot="html">{
`<span class="badge">Badge</span>`
}</pre>
</Component>

<Component title="Badge with brand colors">
<div class="badge">neutral</div>
<div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div>
<pre slot="html">{
`<div class="badge">neutral</div>
<div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div>`
}</pre>
</Component>

<Component title="Outline badge">
<div class="badge badge-outline">neutral</div>
<div class="badge badge-primary badge-outline">primary</div>
<div class="badge badge-secondary badge-outline">secondary</div>
<div class="badge badge-accent badge-outline">accent</div>
<pre slot="html">{
`<div class="badge badge-outline">neutral</div>
<div class="badge badge-primary badge-outline">primary</div>
<div class="badge badge-secondary badge-outline">secondary</div>
<div class="badge badge-accent badge-outline">accent</div>`
}</pre>
</Component>

<Component title="Badge sizes">
<div class="badge badge-lg">987,654</div>
<div class="badge badge-md">987,654</div>
<div class="badge badge-sm">987,654</div>
<div class="badge badge-xs">987,654</div>
<pre slot="html">{
`<div class="badge badge-lg">987,654</div>
<div class="badge badge-md">987,654</div>
<div class="badge badge-sm">987,654</div>
<div class="badge badge-xs">987,654</div>`
}</pre>
</Component>

<Component title="Empty badge">
<div class="badge badge-lg"></div>
<div class="badge badge-md"></div>
<div class="badge badge-sm"></div>
<div class="badge badge-xs"></div>
<pre slot="html">{
`<div class="badge badge-lg"></div>
<div class="badge badge-md"></div>
<div class="badge badge-sm"></div>
<div class="badge badge-xs"></div>`
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
<pre slot="html">{
`<div class="badge badge-info gap-2">
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
</div>`
}</pre>
</Component>

<Component title="Badge in a text" classes="flex-col">

<div>
  <h2 class="text-xl">
    Heading
    <div class="badge badge-lg">NEW</div>
  </h2>
</div>
<div>
  <h2 class="text-lg">
    Heading
    <div class="badge badge-md">NEW</div>
  </h2>
</div>
<div>
  <h2 class="text-base">
    Heading
    <div class="badge badge-sm">NEW</div>
  </h2>
</div>
<div>
  <h2 class="text-sm">
    Heading
    <div class="badge badge-xs">NEW</div>
  </h2>
</div>

<pre slot="html">{
`<button class="btn gap-2">
  Inbox
  <div class="badge">+99</div>
</button>
<button class="btn gap-2">
  Inbox
  <div class="badge badge-outline">+99</div>
</button>`
}</pre>
</Component>

<Component title="Badge in a button">
<button class="btn gap-2">
  Inbox
  <div class="badge">+99</div>
</button>
<button class="btn gap-2">
  Inbox
  <div class="badge badge-secondary">+99</div>
</button>
<pre slot="html">{
`<button class="btn gap-2">
  Inbox
  <div class="badge">+99</div>
</button>
<button class="btn gap-2">
  Inbox
  <div class="badge badge-secondary">+99</div>
</button>`
}</pre>
</Component>
