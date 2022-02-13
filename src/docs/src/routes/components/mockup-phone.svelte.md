---
title: Phone mockup
desc: Phone mockup shows a mockup of an iPhone.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[

]}"
/>

<Component title="iPhone mockup">
<div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
<pre slot="html">{
`<div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
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
<pre slot="html">{
`<div class="mockup-phone border-primary">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>`
}</pre>
</Component>
