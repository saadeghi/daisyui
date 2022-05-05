---
title: Collapse
desc: Collapse is used for showing and hiding content.
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
  { type:'component', class: 'collapse', desc: 'Container element' },
  { type:'component', class: 'collapse-title', desc: 'Title element' },
  { type:'component', class: 'collapse-content', desc: 'Container for content' },
  { type:'modifier', class: 'collapse-arrow', desc: 'Adds arrow icon' },
  { type:'modifier', class: 'collapse-plus', desc: 'Adds plus/minus icon' },
  { type:'modifier', class: 'collapse-open', desc: 'Force open' },
  { type:'modifier', class: 'collapse-close', desc: 'Force close' },
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Collapse with checkbox" desc="This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.">
<div tabindex="0" class="collapse">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse">
  <input type="checkbox" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content"> 
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse $$collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse $$collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse $$collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="$$collapse-content"> 
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="$$collapse $$collapse-close border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Custom colors for collapse that works with focus" desc="Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused">
<div tabindex="0" class="collapse group">
  <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    Focus me to see content
  </div>
  <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="collapse group">
  <div class="$$collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    Focus me to see content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Custom colors for collapse that works with checkbox" desc="Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked">
<div tabindex="0" class="collapse">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div tabindex="0" class="collapse">
  <input type="checkbox" class="peer" /> 
  <div class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`
}</pre>
</Component>
