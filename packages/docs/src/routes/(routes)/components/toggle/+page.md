---
alert: This page is not up to date. Some of the examples might not work as expected.
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
    desc: Medium size (default)
  - class: toggle-lg
    desc: Large size
  - class: toggle-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  let indeterminate = true;
</script>

### ~Toggle
<input type="checkbox" class="toggle" checked="checked" />

```html
<input type="checkbox" class="$$toggle" checked="checked" />
```


### ~With label and form-control
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="toggle" checked="checked" />
  </label>
</div>

```html
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" class="$$toggle" checked="checked" />
  </label>
</div>
```


### ~Checkboxes with brand colors
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="toggle toggle-primary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="toggle toggle-secondary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="toggle toggle-accent" checked="checked" />
    </label>
  </div>
</div>

```html
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="$$label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-primary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="$$label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-secondary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="$$label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-accent" checked="checked" />
    </label>
  </div>
</div>
```


### ~Checkboxes with state colors
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-success" checked="checked" />
  <input type="checkbox" class="toggle toggle-warning" checked="checked" />
  <input type="checkbox" class="toggle toggle-info" checked="checked" />
  <input type="checkbox" class="toggle toggle-error" checked="checked" />
</div>

```html
<input type="checkbox" class="$$toggle $$toggle-success" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-warning" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-info" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-error" checked="checked" />
```


### ~Sizes
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-xs" checked="checked" />
  <input type="checkbox" class="toggle toggle-sm" checked="checked" />
  <input type="checkbox" class="toggle toggle-md" checked="checked" />
  <input type="checkbox" class="toggle toggle-lg" checked="checked" />
</div>

```html
<input type="checkbox" class="$$toggle $$toggle-xs" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-sm" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-md" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-lg" checked="checked" />
```


### ~Disabled
<input type="checkbox" class="toggle" disabled />

```html
<input type="checkbox" class="$$toggle" disabled />
```


### ~Disabled and checked
<input type="checkbox" class="toggle" disabled checked="checked" />

```html
<input type="checkbox" class="$$toggle" disabled checked="checked" />
```


### ~Indeterminate
<input type="checkbox" class="toggle" bind:indeterminate onclick={(e)=>{e.preventDefault();}} />

```html
<!-- You can make a toggle indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="$$toggle" id="my-toggle" />
```


### ~Toggle with custom color
<input type="checkbox" class="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500" checked="checked" />

```html
<input
  type="checkbox"
  class="$$toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
  checked="checked" />
```
