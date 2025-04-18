---
title: Checkbox
desc: Checkboxes are used to select or deselect a value.
layout: components
classnames:
  component:
    - class: checkbox
      desc: Checkbox
  color:
    - class: checkbox-primary
      desc: primary color
    - class: checkbox-secondary
      desc: secondary color
    - class: checkbox-accent
      desc: accent color
    - class: checkbox-neutral
      desc: neutral color
    - class: checkbox-success
      desc: success color
    - class: checkbox-warning
      desc: warning color
    - class: checkbox-info
      desc: info color
    - class: checkbox-error
      desc: error color
  size:
    - class: checkbox-xs
      desc: Extra small size
    - class: checkbox-sm
      desc: Small size
    - class: checkbox-md
      desc: Medium size
      default: true
    - class: checkbox-lg
      desc: Large size
    - class: checkbox-xl
      desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
  let indeterminate = true;
</script>

### ~Checkbox

<input type="checkbox" checked="checked" class="checkbox" />

```html
<input type="checkbox" checked="checked" class="$$checkbox" />
```

### ~With fieldset and label

<fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <legend class="fieldset-legend">Login options</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Remember me
  </label>
</fieldset>

```html
<fieldset class="$$fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend class="$$fieldset-legend">Login options</legend>
  <label class="$$label">
    <input type="checkbox" checked="checked" class="$$checkbox" />
    Remember me
  </label>
</fieldset>
```

### ~Sizes

<input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
<input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
<input type="checkbox" checked="checked" class="checkbox checkbox-md" />
<input type="checkbox" checked="checked" class="checkbox checkbox-lg" />
<input type="checkbox" checked="checked" class="checkbox checkbox-xl" />

```html
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xs" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-sm" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-md" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-lg" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xl" />
```

### ~Colors

<input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
<input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
<input type="checkbox" checked="checked" class="checkbox checkbox-neutral" />
<input type="checkbox" checked="checked" class="checkbox checkbox-info" />
<input type="checkbox" checked="checked" class="checkbox checkbox-success" />
<input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
<input type="checkbox" checked="checked" class="checkbox checkbox-error" />

```html
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-primary" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-secondary" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-accent" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-neutral" />

<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-info" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-success" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-warning" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-error" />
```

### ~Disabled

<input type="checkbox" disabled="disabled" class="checkbox" />
<input type="checkbox" disabled="disabled" class="checkbox" checked="checked" />

```html
<input type="checkbox" class="$$checkbox" disabled />
<input type="checkbox" class="$$checkbox" disabled checked="checked" />
```

### ~Indeterminate

<input type="checkbox" class="checkbox" bind:indeterminate onclick={(e)=>{e.preventDefault()}} />

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="$$checkbox" id="my-checkbox" />
```

### ~Checkbox with custom colors

<input type="checkbox" checked="checked" class="checkbox border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500 " />

```html
<input
  type="checkbox"
  checked="checked"
  class="$$checkbox border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
```
