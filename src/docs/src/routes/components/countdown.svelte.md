---
title: Countdown
desc: Countdown gives you a transition effect of changing numbers
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"

  import { onMount } from "svelte"
  let counter = 59
  function count(){
    if (counter > 0) {
      counter--
      setTimeout(count, 1000)
    }else{
      counter = 59
      setTimeout(count, 1000)
    }
  }
  onMount(() => {
    count()
  })
</script>

You need to change to `--value` CSS variable using JS. Value must be a number between 0 and 99

<ClassTable
data="{[
  { type:'component', class: 'countdown', desc: 'Container element' },
]}"
/>

<Component title="Countdown">
<span class="countdown">
  <span style="--value:{counter};"></span>
</span>
<pre slot="html">{
`<span class="countdown">
  <span style="--value:${counter};"></span>
</span>`
}</pre>
</Component>

<Component title="Large text">
<span class="countdown font-mono text-6xl">
  <span style="--value:{counter};"></span>
</span>
<pre slot="html">{
`<span class="countdown font-mono text-6xl">
  <span style="--value:${counter};"></span>
</span>`
}</pre>
</Component>

<Component title="Clock countdown">
<span class="font-mono text-2xl countdown">
  <span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="--value:{counter};"></span>s
</span>
<pre slot="html">{
`<span class="font-mono text-2xl countdown">
  <span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="--value:${counter};"></span>s
</span>`
}</pre>
</Component>

<Component title="Clock countdown with colons">
<span class="font-mono text-2xl countdown">
  <span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="--value:{counter};"></span>
</span>
<pre slot="html">{
`<span class="font-mono text-2xl countdown">
  <span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="--value:${counter};"></span>
</span>`
}</pre>
</Component>

<Component title="Large text with labels">
<div class="flex gap-5">
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:24;"></span>
    </span>
    minutes
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:{counter};"></span>
    </span>
    sec
  </div>
</div>
<pre slot="html">{
`<div class="flex gap-5">
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`
}</pre>
</Component>

<Component title="Large text with labels under">
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:{counter};"></span>
    </span>
    sec
  </div>
</div>
<pre slot="html">{
`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`
}</pre>
</Component>

<Component title="In boxes">
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:{counter};"></span>
    </span>
    sec
  </div>
</div>
<pre slot="html">{
`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:${counter};"></span>
    </span>
    sec
  </div>
</div>`
}</pre>
</Component>
