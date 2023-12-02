---
title: Browser mockup
desc: Browser mockup shows a box that looks like a browser window.
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
  { type:'component', class: 'mockup-browser', desc: 'Container element' },
  { type:'component', class: 'mockup-browser-toolbar', desc: 'The toolbar that can include addressbar or other things' },
]}"
/>

<Component title="browser mockup with border">
<div class="border mockup-browser border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input border border-base-300">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$mockup-browser border border-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input border border-base-300">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`
}</pre>
</Component>

<Component title="browser mockup with background color">
<div class="border mockup-browser bg-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$mockup-browser border bg-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`
}</pre>
</Component>
