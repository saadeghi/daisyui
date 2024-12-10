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
    desc: Medium size (default)
  - class: checkbox-lg
    desc: Large size
  - class: checkbox-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  let indeterminate = true;
</script>

<Component title="Checkbox">
<input type="checkbox" checked="checked" class="checkbox" />
{#snippet html()}

```html
<input type="checkbox" checked="checked" class="$$checkbox" />
```

{/snippet}
</Component>

<Component title="With label and form-control">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Primary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox checkbox-primary" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Secondary color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-secondary" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Accent color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-accent" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Success color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-success" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-success" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Warning color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-warning" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Info color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-info" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-info" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Error color">
<div class="form-control w-52">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="checkbox checkbox-error" />
  </label>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$cursor-pointer $$label">
    <span class="$$label-text">Remember me</span>
    <input type="checkbox" checked="checked" class="$$checkbox $$checkbox-error" />
  </label>
</div>
```

{/snippet}
</Component>

<Component title="Sizes">
<div class="flex flex-col items-center gap-2">
  <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
  <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
  <input type="checkbox" checked="checked" class="checkbox checkbox-md" />
  <input type="checkbox" checked="checked" class="checkbox checkbox-lg" />
</div>
{#snippet html()}

```html
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xs" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-sm" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-md" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-lg" />
```

{/snippet}
</Component>

<Component title="Disabled">
<input type="checkbox" disabled="disabled" class="checkbox" />
{#snippet html()}

```html
<input type="checkbox" class="$$checkbox" disabled />
```

{/snippet}
</Component>

<Component title="Disabled and checked">
<input type="checkbox" disabled="disabled" class="checkbox" checked="checked" />
{#snippet html()}

```html
<input type="checkbox" class="$$checkbox" disabled checked="checked" />
```

{/snippet}
</Component>

<Component title="Indeterminate">
<input type="checkbox" class="checkbox" bind:indeterminate onclick={(e)=>{e.preventDefault()}} />
{#snippet html()}

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="$$checkbox" id="my-checkbox" />
```

{/snippet}
</Component>

<Component title="Checkbox with custom colors">
<input type="checkbox" checked="checked" class="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:var(--color-indigo-600)] [--chkfg:orange]" />
<input type="checkbox" checked="checked" class="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
{#snippet html()}

```html
<input
  type="checkbox"
  checked="checked"
  class="$$checkbox border-orange-400 [--chkbg:var(--color-indigo-600)] [--chkfg:orange] checked:border-indigo-800" />
<input
  type="checkbox"
  checked="checked"
  class="$$checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
```

{/snippet}
</Component>
