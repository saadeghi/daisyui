---
title: Phone mockup
desc: Phone mockup shows a mockup of an iPhone.
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
  { type:'component', class: 'mockup-phone', desc: 'Container element' },
]}"
/>

<Component title="iPhone mockup">
<div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$mockup-phone">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`
}</pre>
</Component>

<Component title="With color">
<div class="mockup-phone border-primary">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$mockup-phone border-primary">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`
}</pre>
</Component>
