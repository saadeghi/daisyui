---
title: Diff
desc: Diff component shows a side-by-side comparison of two items.
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

<BrowserSupport data="{{
chrome:105,
firefox:110,
safari:16,
iossafari: null,
}}"/>

<!-- <ComponentPageTabs/> -->

<ClassTable
data="{[
  { type: 'component', class: 'diff', desc: 'Container element' },
  { type: 'component', class: 'diff-item-1', desc: 'First item' },
  { type: 'component', class: 'diff-item-2', desc: 'Second item' },
  { type: 'component', class: 'diff-resizer', desc: 'The resizer control' },
]}"
/>

<Component title="Diff">
<div class="diff rounded-btn aspect-[16/9]">
  <div class="diff-item-1">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
  </div>
  <div class="diff-item-2">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg" />
  </div>
  <div class="diff-resizer"></div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$diff aspect-[16/9]">
  <div class="$$diff-item-1">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
  </div>
  <div class="$$diff-item-2">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg" />
  </div>
  <div class="$$diff-resizer"></div>
</div>`
}</pre>
</Component>

<Component title="Diff text">
<div class="diff rounded-btn aspect-[16/9]">
  <div class="diff-item-1">
    <div class="bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="diff-item-2">
    <div class="bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="diff-resizer"></div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$diff aspect-[16/9]">
  <div class="$$diff-item-1">
    <div class="bg-primary text-primary-content text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="$$diff-item-2">
    <div class="bg-base-200 text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="$$diff-resizer"></div>
</div>`
}</pre>
</Component>
