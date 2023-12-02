---
title: Skeleton
desc: Skeleton is a component that can be used to show a loading state of a component.
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
  { type: 'component', class: 'skeleton', desc: 'Shows a div with loading animation' },
]}"
/>

<Component title="Skeleton">
<div class="skeleton w-32 h-32"></div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="skeleton w-32 h-32"></div>`
}</pre>
</Component>

<Component title="Skeleton - circle with content">
<div class="flex flex-col gap-4 w-52">
  <div class="flex gap-4 items-center">
    <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div class="flex flex-col gap-4">
      <div class="skeleton h-4 w-20"></div>
      <div class="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="skeleton h-32 w-full"></div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col gap-4 w-52">
  <div class="flex gap-4 items-center">
    <div class="$$skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div class="flex flex-col gap-4">
      <div class="$$skeleton h-4 w-20"></div>
      <div class="$$skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="$$skeleton h-32 w-full"></div>
</div>`
}</pre>
</Component>

<Component title="Skeleton - rectangle with content">
<div class="flex flex-col gap-4 w-52">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex flex-col gap-4 w-52">
  <div class="$$skeleton h-32 w-full"></div>
  <div class="$$skeleton h-4 w-28"></div>
  <div class="$$skeleton h-4 w-full"></div>
  <div class="$$skeleton h-4 w-full"></div>
</div>`
}</pre>
</Component>
