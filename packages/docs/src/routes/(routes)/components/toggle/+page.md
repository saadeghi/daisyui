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

<Component title="Toggle">
<input type="checkbox" class="toggle" checked="checked" />
{#snippet html()}

```html
<input type="checkbox" class="$$toggle" checked="checked" />
```

{/snippet}
</Component>

<Component title="With label and form-control">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="toggle" checked="checked" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" class="$$toggle" checked="checked" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Checkboxes with brand colors">
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
{#snippet html()}

```html
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-primary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-secondary" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="label cursor-pointer">
      <span class="label-text">Remember me</span>
      <input type="checkbox" class="$$toggle $$toggle-accent" checked="checked" />
    </label>
  </div>
</div>
```

{/snippet}
</Component>

<Component title="Checkboxes with state colors">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-success" checked="checked" />
  <input type="checkbox" class="toggle toggle-warning" checked="checked" />
  <input type="checkbox" class="toggle toggle-info" checked="checked" />
  <input type="checkbox" class="toggle toggle-error" checked="checked" />
</div>
{#snippet html()}

```html
<input type="checkbox" class="$$toggle $$toggle-success" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-warning" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-info" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-error" checked="checked" />
```

{/snippet}
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" class="toggle toggle-xs" checked="checked" />
  <input type="checkbox" class="toggle toggle-sm" checked="checked" />
  <input type="checkbox" class="toggle toggle-md" checked="checked" />
  <input type="checkbox" class="toggle toggle-lg" checked="checked" />
</div>
{#snippet html()}

```html
<input type="checkbox" class="$$toggle $$toggle-xs" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-sm" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-md" checked="checked" />
<input type="checkbox" class="$$toggle $$toggle-lg" checked="checked" />
```

{/snippet}
</Component>

<Component title="Disabled">
<input type="checkbox" class="toggle" disabled />
{#snippet html()}

```html
<input type="checkbox" class="$$toggle" disabled />
```

{/snippet}
</Component>

<Component title="Disabled and checked">
<input type="checkbox" class="toggle" disabled checked="checked" />
{#snippet html()}

```html
<input type="checkbox" class="$$toggle" disabled checked="checked" />
```

{/snippet}
</Component>

<Component title="Indeterminate">
<input type="checkbox" class="toggle" bind:indeterminate onclick={(e)=>{e.preventDefault();}} />
{#snippet html()}

```html
<!-- You can make a toggle indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="$$toggle" id="my-toggle" />
```

{/snippet}
</Component>

<Component title="Toggle with custom color">
<input type="checkbox" class="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500" checked="checked" />
{#snippet html()}

```html
<input
  type="checkbox"
  class="$$toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
  checked="checked" />
```

{/snippet}
</Component>
