---
title: Toggle
desc: Toggle is a checkbox that is styled to look like a switch button.
layout: components
classnames:
  component:
    - class: toggle
      desc: For <input type="checkbox">
  color:
    - class: toggle-primary
      desc: primary color
    - class: toggle-secondary
      desc: secondary color
    - class: toggle-accent
      desc: accent color
    - class: toggle-neutral
      desc: neutral color
    - class: toggle-success
      desc: success color
    - class: toggle-warning
      desc: warning color
    - class: toggle-info
      desc: info color
    - class: toggle-error
      desc: error color
  size:
    - class: toggle-xs
      desc: Extra small size
    - class: toggle-sm
      desc: Small size
    - class: toggle-md
      desc: Medium size
      default: true
    - class: toggle-lg
      desc: Large size
    - class: toggle-xl
      desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
  let indeterminate = true;
</script>

### ~Toggle

<input type="checkbox" checked="checked" class="toggle" />

```html
<input type="checkbox" checked="checked" class="$$toggle" />
```

### ~With fieldset and label

<fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <legend class="fieldset-legend">Login options</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="toggle" />
    Remember me
  </label>
</fieldset>

```html
<fieldset class="$$fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend class="$$fieldset-legend">Login options</legend>
  <label class="$$label">
    <input type="checkbox" checked="checked" class="$$toggle" />
    Remember me
  </label>
</fieldset>
```

### ~Sizes

<input type="checkbox" checked="checked" class="toggle toggle-xs" />
<input type="checkbox" checked="checked" class="toggle toggle-sm" />
<input type="checkbox" checked="checked" class="toggle toggle-md" />
<input type="checkbox" checked="checked" class="toggle toggle-lg" />
<input type="checkbox" checked="checked" class="toggle toggle-xl" />

```html
<input type="checkbox" checked="checked" class="$$toggle $$toggle-xs" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-sm" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-md" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-lg" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-xl" />
```

### ~Colors

<input type="checkbox" checked="checked" class="toggle toggle-primary" />
<input type="checkbox" checked="checked" class="toggle toggle-secondary" />
<input type="checkbox" checked="checked" class="toggle toggle-accent" />
<input type="checkbox" checked="checked" class="toggle toggle-neutral" />
<input type="checkbox" checked="checked" class="toggle toggle-info" />
<input type="checkbox" checked="checked" class="toggle toggle-success" />
<input type="checkbox" checked="checked" class="toggle toggle-warning" />
<input type="checkbox" checked="checked" class="toggle toggle-error" />

```html
<input type="checkbox" checked="checked" class="$$toggle $$toggle-primary" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-secondary" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-accent" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-neutral" />

<input type="checkbox" checked="checked" class="$$toggle $$toggle-info" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-success" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-warning" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-error" />
```

### ~Disabled

<input type="checkbox" disabled="disabled" class="toggle" />
<input type="checkbox" disabled="disabled" class="toggle" checked="checked" />

```html
<input type="checkbox" class="$$toggle" disabled />
<input type="checkbox" class="$$toggle" disabled checked="checked" />
```

### ~Indeterminate

<input type="checkbox" class="toggle" bind:indeterminate onclick={(e)=>{e.preventDefault()}} />

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="$$toggle" id="my-toggle" />
```

### ~Toggle with icons inside

#### Use toggle class for a label, put a checkbox and 2 icons inside it.

<label class="toggle text-base-content">
  <input type="checkbox">
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
  <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
</label>

```html
<label class="$$toggle text-base-content">
  <input type="checkbox" />
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="4"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </g>
  </svg>
  <svg
    aria-label="disabled"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
</label>
```

### ~Toggle with custom colors

<input type="checkbox" checked="checked" class="toggle border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500 " />

```html
<input
  type="checkbox"
  checked="checked"
  class="$$toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
```
