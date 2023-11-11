---
title: Tabs
desc: Tabs can be used to show a list of links in a tabbed format.
published: true
layout: components
---

<script>
  import Component from "$components/Component.svelte"
  import ClassTable from "$components/ClassTable.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'tabs', desc: 'Container of tab items' },
  { type:'modifier', class: 'tabs-boxed', desc: 'Adds a box style to tabs container' },
  { type:'modifier', class: 'tabs-bordered', desc: 'Adds bottom border to tab item' },
  { type:'modifier', class: 'tabs-lifted', desc: 'Adds lifted style to tab item' },
  { type:'responsive', class: 'tabs-xs', desc: 'Shows tab in extra small size' },
  { type:'responsive', class: 'tabs-sm', desc: 'Shows tab in small size' },
  { type:'responsive', class: 'tabs-md', desc: 'Shows tab in medium (default) size' },
  { type:'responsive', class: 'tabs-lg', desc: 'Shows tab in large size' },
  { type:'component', class: 'tab', desc: 'A tab item' },
  { type:'modifier', class: 'tab-active', desc: 'For the active tab' },
  { type:'modifier', class: 'tab-disabled', desc: 'For a visually disabled tab' },
  { type:'component', class: 'tab-content', desc: 'Tab content that comes immediately after a tab' },
]}"
/>

<Component title="Tabs">
<div class="tabs">
  <button class="tab">Tab 1</button>
  <button class="tab tab-active">Tab 2</button>
  <button class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs">
  <a class="$$tab">Tab 1</a>
  <a class="$$tab $$tab-active">Tab 2</a>
  <a class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Bordered">
<div class="tabs tabs-bordered">
  <button class="tab">Tab 1</button>
  <button class="tab tab-active">Tab 2</button>
  <button class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs $$tabs-bordered">
  <a class="$$tab">Tab 1</a>
  <a class="$$tab $$tab-active">Tab 2</a>
  <a class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Lifted">
<div class="tabs tabs-lifted">
  <button class="tab">Tab 1</button>
  <button class="tab tab-active">Tab 2</button>
  <button class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs $$tabs-lifted">
  <a class="$$tab">Tab 1</a>
  <a class="$$tab $$tab-active">Tab 2</a>
  <a class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Boxed">
<div class="tabs tabs-boxed">
  <button class="tab">Tab 1</button>
  <button class="tab tab-active">Tab 2</button>
  <button class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs $$tabs-boxed">
  <a class="$$tab">Tab 1</a>
  <a class="$$tab $$tab-active">Tab 2</a>
  <a class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-6">
  <div class="tabs tabs-lifted tabs-xs">
    <button class="tab">Tiny</button>
    <button class="tab tab-active">Tiny</button>
    <button class="tab">Tiny</button>
  </div>
  <div class="tabs tabs-lifted tabs-sm">
    <button class="tab">Small</button>
    <button class="tab tab-active">Small</button>
    <button class="tab">Small</button>
  </div>
  <div class="tabs tabs-lifted">
    <button class="tab">Normal</button>
    <button class="tab tab-active">Normal</button>
    <button class="tab">Normal</button>
  </div>
  <div class="tabs tabs-lifted tabs-lg">
    <button class="tab">Large</button>
    <button class="tab tab-active">Large</button>
    <button class="tab">Large</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- xs -->
<div class="$$tabs $$tabs-lifted $$tabs-xs">
  <a class="$$tab">Tiny</a>
  <a class="$$tab $$tab-active">Tiny</a>
  <a class="$$tab">Tiny</a>
</div>
<!-- sm -->
<div class="$$tabs $$tabs-lifted $$tabs-sm">
  <a class="$$tab">Small</a>
  <a class="$$tab $$tab-active">Small</a>
  <a class="$$tab">Small</a>
</div>
<!-- md -->
<div class="$$tabs $$tabs-lifted">
  <a class="$$tab">Normal</a>
  <a class="$$tab $$tab-active">Normal</a>
  <a class="$$tab">Normal</a>
</div>
<!-- lg -->
<div class="$$tabs $$tabs-lifted $$tabs-lg">
  <a class="$$tab">Large</a>
  <a class="$$tab $$tab-active">Large</a>
  <a class="$$tab">Large</a>
</div>`
}</pre>
</Component>

<Component title="radio tab bordered + tab content">
<div class="tabs tabs-bordered w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 1" />
  <div class="tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 2" checked />
  <div class="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 3" />
  <div class="tab-content p-10">Tab content 3</div>
</div>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs $$tabs-bordered">
  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 2" checked />
  <div class="$$tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content p-10">Tab content 3</div>
</div>`
}</pre>
</Component>

<Component title="radio tab lifted + tab content">
<div class="tabs tabs-lifted w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 2" checked />
  <div class="tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 3</div>
</div>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$tabs $$tabs-lifted">
  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 2" checked />
  <div class="$$tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 rounded-box p-10">Tab content 3</div>
</div>`
}</pre>
</Component>
