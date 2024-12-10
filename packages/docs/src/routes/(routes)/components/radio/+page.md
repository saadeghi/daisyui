---
title: Radio
desc: Radio buttons allow the user to select one option from a set.
layout: components
classnames:
  component:
  - class: radio
    desc: For radio input
  color:
  - class: radio-primary
    desc: primary color
  - class: radio-secondary
    desc: secondary color
  - class: radio-accent
    desc: accent color
  - class: radio-success
    desc: success color
  - class: radio-warning
    desc: warning color
  - class: radio-info
    desc: info color
  - class: radio-error
    desc: error color
  size:
  - class: radio-xs
    desc: Extra small size
  - class: radio-sm
    desc: Small size
  - class: radio-md
    desc: Medium size (default)
  - class: radio-lg
    desc: Large size
  - class: radio-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Radio">
<input type="radio" name="radio-1" class="radio" checked="checked" />
<input type="radio" name="radio-1" class="radio" />
{#snippet html()}

```html
<input type="radio" name="radio-1" class="$$radio" checked="checked" />
<input type="radio" name="radio-1" class="$$radio" />
```

{/snippet}
</Component>

<Component title="Primary color">
<input type="radio" name="radio-2" class="radio radio-primary" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-primary" />
{#snippet html()}

```html
<input type="radio" name="radio-2" class="$$radio $$radio-primary" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-primary" />
```

{/snippet}
</Component>

<Component title="Secondary color">
<input type="radio" name="radio-3" class="radio radio-secondary" checked="checked" />
<input type="radio" name="radio-3" class="radio radio-secondary" />
{#snippet html()}

```html
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" checked="checked" />
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" />
```

{/snippet}
</Component>

<Component title="Accent color">
<input type="radio" name="radio-4" class="radio radio-accent" checked="checked" />
<input type="radio" name="radio-4" class="radio radio-accent" />
{#snippet html()}

```html
<input type="radio" name="radio-4" class="$$radio $$radio-accent" checked="checked" />
<input type="radio" name="radio-4" class="$$radio $$radio-accent" />
```

{/snippet}
</Component>

<Component title="Success color">
<input type="radio" name="radio-5" class="radio radio-success" checked="checked" />
<input type="radio" name="radio-5" class="radio radio-success" />
{#snippet html()}

```html
<input type="radio" name="radio-5" class="$$radio $$radio-success" checked="checked" />
<input type="radio" name="radio-5" class="$$radio $$radio-success" />
```

{/snippet}
</Component>

<Component title="Warning color">
<input type="radio" name="radio-6" class="radio radio-warning" checked="checked" />
<input type="radio" name="radio-6" class="radio radio-warning" />
{#snippet html()}

```html
<input type="radio" name="radio-6" class="$$radio $$radio-warning" checked="checked" />
<input type="radio" name="radio-6" class="$$radio $$radio-warning" />
```

{/snippet}
</Component>

<Component title="Info color">
<input type="radio" name="radio-7" class="radio radio-info" checked="checked" />
<input type="radio" name="radio-7" class="radio radio-info" />
{#snippet html()}

```html
<input type="radio" name="radio-7" class="$$radio $$radio-info" checked="checked" />
<input type="radio" name="radio-7" class="$$radio $$radio-info" />
```

{/snippet}
</Component>

<Component title="Error color">
<input type="radio" name="radio-8" class="radio radio-error" checked="checked" />
<input type="radio" name="radio-8" class="radio radio-error" />
{#snippet html()}

```html
<input type="radio" name="radio-8" class="$$radio $$radio-error" checked="checked" />
<input type="radio" name="radio-8" class="$$radio $$radio-error" />
```

{/snippet}
</Component>

<Component title="Disabled">
<input type="radio" name="radio-9" class="radio" disabled checked="checked" />
<input type="radio" name="radio-9" class="radio" disabled />
{#snippet html()}

```html
<input type="radio" name="radio-9" class="$$radio" disabled checked="checked" />
<input type="radio" name="radio-9" class="$$radio" disabled />
```

{/snippet}
</Component>

<Component title="With label and form-control and custom colors!">
<div class="flex flex-col">
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Red pill</span>
      <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="checked" />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Blue pill</span>
      <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked="checked" />
    </label>
  </div>
</div>
{#snippet html()}

```html
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Red pill</span>
    <input type="radio" name="radio-10" class="$$radio checked:bg-red-500" checked="checked" />
  </label>
</div>
<div class="$$form-control">
  <label class="$$label cursor-pointer">
    <span class="$$label-text">Blue pill</span>
    <input type="radio" name="radio-10" class="$$radio checked:bg-blue-500" checked="checked" />
  </label>
</div>
```

{/snippet}
</Component>
