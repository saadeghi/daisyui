---
title: Collapse
desc: Collapse is used for showing and hiding content.
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

<Component title="Collapse with focus" desc="This collapse works with focus. When div loses focus, it gets closed">
<div tabindex="0" class="collapse"> 
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse"> 
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Collapse with checkbox" desc="This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.">
<div tabindex="0" class="collapse">
  <input type="checkbox"> 
  <div class="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse">
  <input type="checkbox"> 
  <div class="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="With border and background color">
<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="With arrow icon">
<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="With arrow plus/minus icon">
<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box collapse-plus">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box collapse-plus">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Force open">
<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Force close">
<div tabindex="0" class="collapse collapse-close border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html">{
`<div tabindex="0" class="collapse collapse-close border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>
