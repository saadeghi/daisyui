---
title: Tabs
desc: Tabs can be used to show a list of links in a tabbed format.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'tabs', desc: 'Container of tab items' },
  { type:'component', class: 'tab', desc: 'A tab item' },
  { type:'modifier', class: 'tab-active', desc: 'For the active tab' },
  { type:'modifier', class: 'tab-bordered', desc: 'Adds bottom border to tab item' },
  { type:'modifier', class: 'tab-lifted', desc: 'Adds lifted style to tab item' },
  { type:'modifier', class: 'tabs-boxed', desc: 'Adds a box style to tabs container' },
  { type:'responsive', class: 'tab-xs', desc: 'Shows tab in extra small size' },
  { type:'responsive', class: 'tab-sm', desc: 'Shows tab in small size' },
  { type:'responsive', class: 'tab-md', desc: 'Shows tab in medium (default) size' },
  { type:'responsive', class: 'tab-lg', desc: 'Shows tab in large size' },
]}"
/>

<Component title="Tabs">
<div class="tabs">
  <a class="tab">Tab 1</a> 
  <a class="tab tab-active">Tab 2</a> 
  <a class="tab">Tab 3</a>
</div>
<pre slot="html">{
`<div class="tabs">
  <a class="tab">Tab 1</a> 
  <a class="tab tab-active">Tab 2</a> 
  <a class="tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Bordered">
<div class="tabs">
  <a class="tab tab-bordered">Tab 1</a> 
  <a class="tab tab-bordered tab-active">Tab 2</a> 
  <a class="tab tab-bordered">Tab 3</a>
</div>
<pre slot="html">{
`<div class="tabs">
  <a class="tab tab-bordered">Tab 1</a> 
  <a class="tab tab-bordered tab-active">Tab 2</a> 
  <a class="tab tab-bordered">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Lifted">
<div class="tabs">
  <a class="tab tab-lifted">Tab 1</a> 
  <a class="tab tab-lifted tab-active">Tab 2</a> 
  <a class="tab tab-lifted">Tab 3</a>
</div>
<pre slot="html">{
`<div class="tabs">
  <a class="tab tab-lifted">Tab 1</a> 
  <a class="tab tab-lifted tab-active">Tab 2</a> 
  <a class="tab tab-lifted">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Boxed">
<div class="tabs tabs-boxed">
  <a class="tab">Tab 1</a> 
  <a class="tab tab-active">Tab 2</a> 
  <a class="tab">Tab 3</a>
</div>
<pre slot="html">{
`<div class="tabs tabs-boxed">
  <a class="tab">Tab 1</a> 
  <a class="tab tab-active">Tab 2</a> 
  <a class="tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-6">
  <div class="tabs">
    <a class="tab tab-xs tab-lifted">Tiny</a> 
    <a class="tab tab-xs tab-lifted tab-active">Tiny</a> 
    <a class="tab tab-xs tab-lifted">Tiny</a>
  </div>
  <div class="tabs">
    <a class="tab tab-sm tab-lifted">Small</a> 
    <a class="tab tab-sm tab-lifted tab-active">Small</a> 
    <a class="tab tab-sm tab-lifted">Small</a>
  </div>
  <div class="tabs">
    <a class="tab tab-lifted">Normal</a> 
    <a class="tab tab-lifted tab-active">Normal</a> 
    <a class="tab tab-lifted">Normal</a>
  </div>
  <div class="tabs">
    <a class="tab tab-lg tab-lifted">Large</a> 
    <a class="tab tab-lg tab-lifted tab-active">Large</a> 
    <a class="tab tab-lg tab-lifted">Large</a>
  </div>
</div>
<pre slot="html">{
`<!-- xs -->
<div class="tabs">
  <a class="tab tab-xs tab-lifted">Tiny</a> 
  <a class="tab tab-xs tab-lifted tab-active">Tiny</a> 
  <a class="tab tab-xs tab-lifted">Tiny</a>
</div>
<!-- sm -->
<div class="tabs">
  <a class="tab tab-sm tab-lifted">Small</a> 
  <a class="tab tab-sm tab-lifted tab-active">Small</a> 
  <a class="tab tab-sm tab-lifted">Small</a>
</div>
<!-- md -->
<div class="tabs">
  <a class="tab tab-lifted">Normal</a> 
  <a class="tab tab-lifted tab-active">Normal</a> 
  <a class="tab tab-lifted">Normal</a>
</div>
<!-- lg -->
<div class="tabs">
  <a class="tab tab-lg tab-lifted">Large</a> 
  <a class="tab tab-lg tab-lifted tab-active">Large</a> 
  <a class="tab tab-lg tab-lifted">Large</a>
</div>`
}</pre>
</Component>
