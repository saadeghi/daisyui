---
title: Select
desc: Select is used to pick a value from a list of options.
layout: components
classnames:
  component:
  - class: select
    desc: For <select> element
  style:
  - class: select-ghost
    desc: ghost style
  color:
  - class: select-neutral
    desc: neutral color
  - class: select-primary
    desc: primary color
  - class: select-secondary
    desc: secondary color
  - class: select-accent
    desc: accent color
  - class: select-info
    desc: info color
  - class: select-success
    desc: success color
  - class: select-warning
    desc: warning color
  - class: select-error
    desc: error color
  size:
  - class: select-xs
    desc: Extra small size
  - class: select-sm
    desc: Small size
  - class: select-md
    desc: Medium size (default)
  - class: select-lg
    desc: Large size
  - class: select-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Select
<select class="select">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

```html
<select class="$$select">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
```

### ~Ghost (no background)
<select class="select select-ghost">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>

```html
<select class="$$select $$select-ghost">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>
```


### ~With fieldset and fieldset-labels
<fieldset class="fieldset w-xs">
  <legend class="fieldset-legend">Pick the best fantasy franchise</legend>
  <select class="select">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <span class="fieldset-label">Optional</span>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Pick the best fantasy franchise</legend>
  <select class="$$select">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <span class="$$fieldset-label">Optional</span>
</fieldset>
```


### ~Primary color
<select class="select select-primary">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>

```html
<select class="$$select $$select-primary">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
```


### ~Secondary color
<select class="select select-secondary">
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

```html
<select class="$$select $$select-secondary">
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
```


### ~Accent color
<select class="select select-accent">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>

```html
<select class="$$select $$select-accent">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>
```


### ~Neutral color
<select class="select select-neutral">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>

```html
<select class="$$select $$select-neutral">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>
```

### ~Info color
<select class="select select-info">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>

```html
<select class="$$select $$select-info">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>
```


### ~Success color
<select class="select select-success">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>

```html
<select class="$$select $$select-success">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>
```


### ~Warning color
<select class="select select-warning">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>

```html
<select class="$$select $$select-warning">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>
```


### ~Error color
<select class="select select-error">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>

```html
<select class="$$select $$select-error">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>
```


### ~Sizes
<div class="flex flex-col gap-4 w-full items-center">
  <select class="select select-xs">
    <option disabled selected>Xsmall</option>
    <option>Xsmall Apple</option>
    <option>Xsmall Orange</option>
    <option>Xsmall Tomato</option>
  </select>
  <select class="select select-sm">
    <option disabled selected>Small</option>
    <option>Small Apple</option>
    <option>Small Orange</option>
    <option>Small Tomato</option>
  </select>
  <select class="select select-md">
    <option disabled selected>Medium</option>
    <option>Medium Apple</option>
    <option>Medium Orange</option>
    <option>Medium Tomato</option>
  </select>
  <select class="select select-lg">
    <option disabled selected>Large</option>
    <option>Large Apple</option>
    <option>Large Orange</option>
    <option>Large Tomato</option>
  </select>
  <select class="select select-xl">
    <option disabled selected>Xlarge</option>
    <option>Xlarge Apple</option>
    <option>Xlarge Orange</option>
    <option>Xlarge Tomato</option>
  </select>
</div>

```html
<select class="$$select $$select-xs">
  <option disabled selected>Xsmall</option>
  <option>Xsmall Apple</option>
  <option>Xsmall Orange</option>
  <option>Xsmall Tomato</option>
</select>
<select class="$$select $$select-sm">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<select class="$$select $$select-md">
  <option disabled selected>Medium</option>
  <option>Medium Apple</option>
  <option>Medium Orange</option>
  <option>Medium Tomato</option>
</select>
<select class="$$select $$select-lg">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<select class="$$select $$select-xl">
  <option disabled selected>Xlarge</option>
  <option>Xlarge Apple</option>
  <option>Xlarge Orange</option>
  <option>Xlarge Tomato</option>
</select>
```


### ~Disabled
<select class="select" disabled>
  <option>You can't touch this</option>
</select>

```html
<select class="$$select" disabled>
  <option>You can't touch this</option>
</select>
```
