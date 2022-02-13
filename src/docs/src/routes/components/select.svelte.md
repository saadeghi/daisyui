---
title: Select
desc: Select is used to pick a value from a list of options.
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

<Component title="Select">
<select class="select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
<pre slot="html">{
`<select class="select w-full max-w-xs">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-bordered">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-ghost">
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
<pre slot="html">{
`<div class="form-control w-full max-w-xs">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-primary">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-secondary">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-accent">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-info">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-success">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-warning">
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
<pre slot="html">{
`<select class="select w-full max-w-xs select-error">
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
<pre slot="html">{
`<!-- lg -->
<select class="select select-bordered select-lg w-full max-w-xs">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<!-- md -->
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Normal</option>
  <option>Normal Apple</option>
  <option>Normal Orange</option>
  <option>Normal Tomato</option>
</select>
<!-- sm -->
<select class="select select-bordered select-sm w-full max-w-xs">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<!-- xs -->
<select class="select select-bordered select-xs w-full max-w-xs">
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
<pre slot="html">{
`<select class="select w-full max-w-xs" disabled>
  <option>You can't touch this</option>
</select>`
}</pre>
</Component>
