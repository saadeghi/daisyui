---
title: Code mockup
desc: Code mockup is used to show a block of code in a box that looks like a code editor.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'mockup-code', desc: 'Container element' },
]}"
/>

<Component title="mockup code with line prefix">
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>`
}</pre>
</Component>

<Component title="Multi line">
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre> 
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>`
}</pre>
</Component>

<Component title="Highlighted line">
<div class="mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" class="bg-warning text-warning"><code>Error!</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" class="bg-warning text-warning"><code>Error!</code></pre>
</div>`
}</pre>
</Component>

<Component title="Long line will scroll">
<div class="mockup-code">
  <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code">
  <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>`
}</pre>
</Component>

<Component title="Without prefix">
<div class="mockup-code">
  <pre><code>without prefix</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code">
  <pre><code>without prefix</code></pre>
</div>`
}</pre>
</Component>

<Component title="With color">
<div class="mockup-code bg-primary text-primary">
  <pre><code>can be any color!</code></pre>
</div>
<pre slot="html">{
`<div class="mockup-code bg-primary text-primary">
  <pre><code>can be any color!</code></pre>
</div>`
}</pre>
</Component>
