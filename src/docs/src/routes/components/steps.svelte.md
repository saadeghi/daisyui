---
title: Steps
desc: Steps can be used to show a list of steps in a process.
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
  { type:'component', class: 'steps', desc: 'Container of step items' },
  { type:'component', class: 'step', desc: 'A step item' },
  { type:'modifier', class: 'step-primary', desc: 'Adds `primary` color to step' },
  { type:'modifier', class: 'step-secondary', desc: 'Adds `secondary` color to step' },
  { type:'modifier', class: 'step-accent', desc: 'Adds `accent` color to step' },
  { type:'modifier', class: 'step-info', desc: 'Adds `info` color to step' },
  { type:'modifier', class: 'step-success', desc: 'Adds `success` color to step' },
  { type:'modifier', class: 'step-warning', desc: 'Adds `warning` color to step' },
  { type:'modifier', class: 'step-error', desc: 'Adds `error` color to step' },
  { type:'responsive', class: 'steps-vertical', desc: 'makes `steps` vertical' },
  { type:'responsive', class: 'steps-horizontal', desc: 'makes `steps` horizontal' },
]}"
/>

<Component title="Horizontal">
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>`
}</pre>
</Component>

<Component title="Vertical">
<ul class="steps steps-vertical">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<ul class="steps steps-vertical">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>`
}</pre>
</Component>

<Component title="responsive (vertical on small screen, horizontal on large screen)">
<ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>`
}</pre>
</Component>

<Component title="With data-content">
<ul class="steps">
  <li data-content="?" class="step step-neutral">Step 1</li>
  <li data-content="!" class="step step-neutral">Step 2</li>
  <li data-content="✓" class="step step-neutral">Step 3</li>
  <li data-content="✕" class="step step-neutral">Step 4</li>
  <li data-content="★" class="step step-neutral">Step 5</li>
  <li data-content="" class="step step-neutral">Step 6</li>
  <li data-content="●" class="step step-neutral">Step 7</li>
</ul>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<ul class="steps">
  <li data-content="?" class="step step-neutral">Step 1</li>
  <li data-content="!" class="step step-neutral">Step 2</li>
  <li data-content="✓" class="step step-neutral">Step 3</li>
  <li data-content="✕" class="step step-neutral">Step 4</li>
  <li data-content="★" class="step step-neutral">Step 5</li>
  <li data-content="" class="step step-neutral">Step 6</li>
  <li data-content="●" class="step step-neutral">Step 7</li>
</ul>`
}</pre>
</Component>

<Component title="Custom colors">
<ul class="steps">
  <li class="step step-info">Fly to moon</li>
  <li class="step step-info">Shrink the moon</li>
  <li class="step step-info">Grab the moon</li>
  <li data-content="?" class="step step-error">Sit on toilet</li>
</ul>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<ul class="steps">
  <li class="step step-info">Fly to moon</li>
  <li class="step step-info">Shrink the moon</li>
  <li class="step step-info">Grab the moon</li>
  <li data-content="?" class="step step-error">Sit on toilet</li>
</ul>`
}</pre>
</Component>

<Component title="With scrollable wrapper">
<div class="overflow-x-auto">
  <ul class="steps">
    <li class="step">start</li>
    <li class="step step-secondary">2</li>
    <li class="step step-secondary">3</li>
    <li class="step step-secondary">4</li>
    <li class="step">5</li>
    <li class="step step-accent">6</li>
    <li class="step step-accent">7</li>
    <li class="step">8</li>
    <li class="step step-error">9</li>
    <li class="step step-error">10</li>
    <li class="step">11</li>
    <li class="step">12</li>
    <li class="step step-warning">13</li>
    <li class="step step-warning">14</li>
    <li class="step">15</li>
    <li class="step step-neutral">16</li>
    <li class="step step-neutral">17</li>
    <li class="step step-neutral">18</li>
    <li class="step step-neutral">19</li>
    <li class="step step-neutral">20</li>
    <li class="step step-neutral">21</li>
    <li class="step step-neutral">22</li>
    <li class="step step-neutral">23</li>
    <li class="step step-neutral">end</li>
  </ul>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="overflow-x-auto">
  <ul class="steps">
    <li class="step">start</li>
    <li class="step step-secondary">2</li>
    <li class="step step-secondary">3</li>
    <li class="step step-secondary">4</li>
    <li class="step">5</li>
    <li class="step step-accent">6</li>
    <li class="step step-accent">7</li>
    <li class="step">8</li>
    <li class="step step-error">9</li>
    <li class="step step-error">10</li>
    <li class="step">11</li>
    <li class="step">12</li>
    <li class="step step-warning">13</li>
    <li class="step step-warning">14</li>
    <li class="step">15</li>
    <li class="step step-neutral">16</li>
    <li class="step step-neutral">17</li>
    <li class="step step-neutral">18</li>
    <li class="step step-neutral">19</li>
    <li class="step step-neutral">20</li>
    <li class="step step-neutral">21</li>
    <li class="step step-neutral">22</li>
    <li class="step step-neutral">23</li>
    <li class="step step-neutral">end</li>
  </ul>
</div>`
}</pre>
</Component>
