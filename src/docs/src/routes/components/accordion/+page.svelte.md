---
title: Accordion
desc: Accordion is used for showing and hiding content but only one item can stay open at a time.
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

<div class="alert text-sm mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>Accordion uses the same style as the <a href="/components/collapse/" class="link">collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.</div>
</div>

<div class="alert text-sm mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.</div>
</div>

<Component title="Accordion using radio inputs">
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Accordion with arrow icon">
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Accordion with plus/minus icon">
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Using Accordion and Join together" desc="to join the items together and handle border radius automatically">
<div class="join join-vertical w-full">
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join $$join-vertical w-full">
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>`
}</pre>
</Component>
