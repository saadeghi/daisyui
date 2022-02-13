---
title: Window mockup
desc: Window mockup shows a box that looks like an operating system window.
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="window mockup with border">
<div class="border mockup-window border-base-300 w-full">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>
<pre slot="html">{
`<div class="border mockup-window border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`
}</pre>
</Component>

<Component title="window mockup with background color">
<div class="border mockup-window bg-base-300 w-full">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>
<pre slot="html">{
`<div class="border mockup-window bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`
}</pre>
</Component>
