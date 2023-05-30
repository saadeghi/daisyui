---
title: Select
desc: Select is used to pick a value from a list of options.
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
  { type:'component', class: 'form-control', desc: 'Container element' },
  { type:'component', class: 'label', desc: 'For helper text' },
  { type:'component', class: 'select', desc: 'For <select> element' },
  { type:'modifier', class: 'select-bordered', desc: 'Adds border to select' },
  { type:'modifier', class: 'select-ghost', desc: 'Adds ghost style to select' },
  { type:'modifier', class: 'select-primary', desc: 'Adds `primary` color to select' },
  { type:'modifier', class: 'select-secondary', desc: 'Adds `secondary` color to select' },
  { type:'modifier', class: 'select-accent', desc: 'Adds `accent` color to select' },
  { type:'modifier', class: 'select-info', desc: 'Adds `info` color to select' },
  { type:'modifier', class: 'select-success', desc: 'Adds `success` color to select' },
  { type:'modifier', class: 'select-warning', desc: 'Adds `warning` color to select' },
  { type:'modifier', class: 'select-error', desc: 'Adds `error` color to select' },
  { type:'responsive', class: 'select-lg', desc: 'Large size for select' },
  { type:'responsive', class: 'select-md', desc: 'Medium (default) size for select' },
  { type:'responsive', class: 'select-sm', desc: 'Small size for select' },
  { type:'responsive', class: 'select-xs', desc: 'Extra small size for select' },
]}"
/>

<Component title="Select">
<select class="select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`
}</pre>
</Component>

<Component title="Select with border">
<select class="select w-full max-w-xs select-bordered">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>`
}</pre>
</Component>

<Component title="Ghost (no background)">
<select class="select w-full max-w-xs select-ghost">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-ghost w-full max-w-xs">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>`
}</pre>
</Component>

<Component title="With form-control and labels">
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Pick the best fantasy franchise</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <select class="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">Pick the best fantasy franchise</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <select class="$$select $$select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`
}</pre>
</Component>

<Component title="Primary color">
<select class="select w-full max-w-xs select-primary">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-primary w-full max-w-xs">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>`
}</pre>
</Component>

<Component title="Secondary color">
<select class="select w-full max-w-xs select-secondary">
  <option disabled selected>Pick your favorite language</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-secondary w-full max-w-xs">
  <option disabled selected>Pick your favorite language</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>`
}</pre>
</Component>

<Component title="Accent color">
<select class="select w-full max-w-xs select-accent">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-accent w-full max-w-xs">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>`
}</pre>
</Component>

<Component title="Info color">
<select class="select w-full max-w-xs select-info">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-info w-full max-w-xs">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>`
}</pre>
</Component>

<Component title="Success color">
<select class="select w-full max-w-xs select-success">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-success w-full max-w-xs">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>`
}</pre>
</Component>

<Component title="Warning color">
<select class="select w-full max-w-xs select-warning">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-warning w-full max-w-xs">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>`
}</pre>
</Component>

<Component title="Error color">
<select class="select w-full max-w-xs select-error">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select $$select-error w-full max-w-xs">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <select class="select select-bordered select-lg w-full max-w-xs">
    <option disabled selected>Large</option>
    <option>Large Apple</option>
    <option>Large Orange</option>
    <option>Large Tomato</option>
  </select>
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Normal</option>
    <option>Normal Apple</option>
    <option>Normal Orange</option>
    <option>Normal Tomato</option>
  </select>
  <select class="select select-bordered select-sm w-full max-w-xs">
    <option disabled selected>Small</option>
    <option>Small Apple</option>
    <option>Small Orange</option>
    <option>Small Tomato</option>
  </select>
  <select class="select select-bordered select-xs w-full max-w-xs">
    <option disabled selected>Tiny</option>
    <option>Tiny Apple</option>
    <option>Tiny Orange</option>
    <option>Tiny Tomato</option>
  </select>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- lg -->
<select class="$$select $$select-bordered $$select-lg w-full max-w-xs">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<!-- md -->
<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Normal</option>
  <option>Normal Apple</option>
  <option>Normal Orange</option>
  <option>Normal Tomato</option>
</select>
<!-- sm -->
<select class="$$select $$select-bordered $$select-sm w-full max-w-xs">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<!-- xs -->
<select class="$$select $$select-bordered $$select-xs w-full max-w-xs">
  <option disabled selected>Tiny</option>
  <option>Tiny Apple</option>
  <option>Tiny Orange</option>
  <option>Tiny Tomato</option>
</select>`
}</pre>
</Component>

<Component title="Disabled">
<select class="select w-full max-w-xs" disabled>
  <option>You can't touch this</option>
</select>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<select class="$$select w-full max-w-xs" disabled>
  <option>You can't touch this</option>
</select>`
}</pre>
</Component>
