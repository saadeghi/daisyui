---
title: Radial progress
desc: Radial progress can be used to show the progress of a task or to show the passing of time.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

Radial progress needs `--value` CSS variable to work.  
To change the size, use `--size` CSS variable which has a default value of `4rem`.  
To change the thickness, use `--thickness` CSS variable which is 10% of the size by default.

<div class="alert alert-info">
  For radial progress we use div instead of progress tag because Browsers are unable to show the text inside progress tag and Firefox doesn't show the pesudo elements inside progress bar at all.
</div>

<ClassTable
data="{[
  { type:'component', class: 'radial-progress', desc: 'Shows a radial progress' },
]}"
/>

<Component title="Radial progress">
<div class="radial-progress" style="--value:70;">70%</div>
<pre slot="html">{
`<div class="radial-progress" style="--value:70;">70%</div>`
}</pre>
</Component>

<Component title="Different values">
<div class="radial-progress" style="--value:0;">0%</div>
<div class="radial-progress" style="--value:20;">20%</div>
<div class="radial-progress" style="--value:60;">60%</div>
<div class="radial-progress" style="--value:80;">80%</div>
<div class="radial-progress" style="--value:100;">100%</div>
<pre slot="html">{
`<div class="radial-progress" style="--value:0;">0%</div>
<div class="radial-progress" style="--value:20;">20%</div>
<div class="radial-progress" style="--value:60;">60%</div>
<div class="radial-progress" style="--value:80;">80%</div>
<div class="radial-progress" style="--value:100;">100%</div>`
}</pre>
</Component>

<Component title="Custom color">
<div class="radial-progress text-primary" style="--value:70;">70%</div>
<pre slot="html">{
`<div class="radial-progress text-primary" style="--value:70;">70%</div>`
}</pre>
</Component>

<Component title="With background color and border">
<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;">70%</div>
<pre slot="html">{
`<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;">70%</div>`
}</pre>
</Component>

<Component title="Custom size and custom thickness">
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;">80%</div>
<pre slot="html">{
`<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;">80%</div>`
}</pre>
</Component>
