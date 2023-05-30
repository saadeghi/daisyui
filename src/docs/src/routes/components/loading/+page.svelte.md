---
title: Loading
desc: Loading shows an animation to indicate that something is loading.
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
  { type:'component', class: 'loading', desc: 'loading element' },
  { type:'modifier', class: 'loading-spinner', desc: 'Shows the spinner animation' },
  { type:'modifier', class: 'loading-dots', desc: 'Shows the dots animation' },
  { type:'modifier', class: 'loading-ring', desc: 'Shows the ring animation' },
  { type:'modifier', class: 'loading-ball', desc: 'Shows the ball animation' },
  { type:'modifier', class: 'loading-bars', desc: 'Shows the bars animation' },
  { type:'modifier', class: 'loading-infinity', desc: 'Shows the infinity animation' },
]}"
/>

<Component title="Loading spinner">
<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner loading-md"></span>
<span class="loading loading-spinner loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-spinner $$loading-xs"></span>
<span class="$$loading $$loading-spinner $$loading-sm"></span>
<span class="$$loading $$loading-spinner $$loading-md"></span>
<span class="$$loading $$loading-spinner $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading dots">
<span class="loading loading-dots loading-xs"></span>
<span class="loading loading-dots loading-sm"></span>
<span class="loading loading-dots loading-md"></span>
<span class="loading loading-dots loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-dots $$loading-xs"></span>
<span class="$$loading $$loading-dots $$loading-sm"></span>
<span class="$$loading $$loading-dots $$loading-md"></span>
<span class="$$loading $$loading-dots $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading ring">
<span class="loading loading-ring loading-xs"></span>
<span class="loading loading-ring loading-sm"></span>
<span class="loading loading-ring loading-md"></span>
<span class="loading loading-ring loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-ring $$loading-xs"></span>
<span class="$$loading $$loading-ring $$loading-sm"></span>
<span class="$$loading $$loading-ring $$loading-md"></span>
<span class="$$loading $$loading-ring $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading ball">
<span class="loading loading-ball loading-xs"></span>
<span class="loading loading-ball loading-sm"></span>
<span class="loading loading-ball loading-md"></span>
<span class="loading loading-ball loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-ball $$loading-xs"></span>
<span class="$$loading $$loading-ball $$loading-sm"></span>
<span class="$$loading $$loading-ball $$loading-md"></span>
<span class="$$loading $$loading-ball $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading bars">
<span class="loading loading-bars loading-xs"></span>
<span class="loading loading-bars loading-sm"></span>
<span class="loading loading-bars loading-md"></span>
<span class="loading loading-bars loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-bars $$loading-xs"></span>
<span class="$$loading $$loading-bars $$loading-sm"></span>
<span class="$$loading $$loading-bars $$loading-md"></span>
<span class="$$loading $$loading-bars $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading infinity">
<span class="loading loading-infinity loading-xs"></span>
<span class="loading loading-infinity loading-sm"></span>
<span class="loading loading-infinity loading-md"></span>
<span class="loading loading-infinity loading-lg"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-infinity $$loading-xs"></span>
<span class="$$loading $$loading-infinity $$loading-sm"></span>
<span class="$$loading $$loading-infinity $$loading-md"></span>
<span class="$$loading $$loading-infinity $$loading-lg"></span>`
}</pre>
</Component>

<Component title="Loading with colors">
<span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>
<span class="loading loading-spinner text-neutral"></span>
<span class="loading loading-spinner text-info"></span>
<span class="loading loading-spinner text-success"></span>
<span class="loading loading-spinner text-warning"></span>
<span class="loading loading-spinner text-error"></span>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<span class="$$loading $$loading-spinner text-primary"></span>
<span class="$$loading $$loading-spinner text-secondary"></span>
<span class="$$loading $$loading-spinner text-accent"></span>
<span class="$$loading $$loading-spinner text-neutral"></span>
<span class="$$loading $$loading-spinner text-info"></span>
<span class="$$loading $$loading-spinner text-success"></span>
<span class="$$loading $$loading-spinner text-warning"></span>
<span class="$$loading $$loading-spinner text-error"></span>`
}</pre>
</Component>
