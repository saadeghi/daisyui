---
title: Tabs
desc: Tabs can be used to show a list of links in a tabbed format.
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
<div role="tablist" class="tabs">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Bordered">
<div role="tablist" class="tabs tabs-bordered">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-bordered">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Lifted">
<div role="tablist" class="tabs tabs-lifted">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-lifted">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Boxed">
<div role="tablist" class="tabs tabs-boxed">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-boxed">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-6">
  <div role="tablist" class="tabs tabs-lifted tabs-xs">
    <button role="tab" class="tab">Tiny</button>
    <button role="tab" class="tab tab-active">Tiny</button>
    <button role="tab" class="tab">Tiny</button>
  </div>
  <div role="tablist" class="tabs tabs-lifted tabs-sm">
    <button role="tab" class="tab">Small</button>
    <button role="tab" class="tab tab-active">Small</button>
    <button role="tab" class="tab">Small</button>
  </div>
  <div role="tablist" class="tabs tabs-lifted">
    <button role="tab" class="tab">Normal</button>
    <button role="tab" class="tab tab-active">Normal</button>
    <button role="tab" class="tab">Normal</button>
  </div>
  <div role="tablist" class="tabs tabs-lifted tabs-lg">
    <button role="tab" class="tab">Large</button>
    <button role="tab" class="tab tab-active">Large</button>
    <button role="tab" class="tab">Large</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- xs -->
<div role="tablist" class="$$tabs $$tabs-lifted $$tabs-xs">
  <a role="tab" class="$$tab">Tiny</a>
  <a role="tab" class="$$tab $$tab-active">Tiny</a>
  <a role="tab" class="$$tab">Tiny</a>
</div>
<!-- sm -->
<div role="tablist" class="$$tabs $$tabs-lifted $$tabs-sm">
  <a role="tab" class="$$tab">Small</a>
  <a role="tab" class="$$tab $$tab-active">Small</a>
  <a role="tab" class="$$tab">Small</a>
</div>
<!-- md -->
<div role="tablist" class="$$tabs $$tabs-lifted">
  <a role="tab" class="$$tab">Normal</a>
  <a role="tab" class="$$tab $$tab-active">Normal</a>
  <a role="tab" class="$$tab">Normal</a>
</div>
<!-- lg -->
<div role="tablist" class="$$tabs $$tabs-lifted $$tabs-lg">
  <a role="tab" class="$$tab">Large</a>
  <a role="tab" class="$$tab $$tab-active">Large</a>
  <a role="tab" class="$$tab">Large</a>
</div>`
}</pre>
</Component>

<Component title="radio tab bordered + tab content">
<div role="tablist" class="tabs tabs-bordered w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
  <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked />
  <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
  <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
</div>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 1" />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 2" checked />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 3" />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 3</div>
</div>`
}</pre>
</Component>

<Component title="radio tab lifted + tab content">
<div role="tablist" class="tabs tabs-lifted w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 3</div>
</div>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 1" />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 2" checked />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 3" />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
</div>`
}</pre>
</Component>

<Component title="Tabs with custom color">
<div role="tablist" class="tabs tabs-lifted">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div role="tablist" class="$$tabs $$tabs-lifted">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>`
}</pre>
</Component>
