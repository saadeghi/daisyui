---
title: File Input
desc: File Input is a an input field for uploading files.
layout: components
classnames:
  component:
  - class: file-input
    desc: For <input> element
  style:
  - class: file-input-ghost
    desc: ghost style
  color:
  - class: file-input-primary
    desc: primary color
  - class: file-input-secondary
    desc: secondary color
  - class: file-input-accent
    desc: accent color
  - class: file-input-info
    desc: info color
  - class: file-input-success
    desc: success color
  - class: file-input-warning
    desc: warning color
  - class: file-input-error
    desc: error color
  size:
  - class: file-input-xs
    desc: Extra small size
  - class: file-input-sm
    desc: Small size
  - class: file-input-md
    desc: Medium size (default)
  - class: file-input-lg
    desc: Large size
  - class: file-input-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="File input">
<input type="file" class="file-input w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="File input with border">
<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Ghost (no background)">
<input type="file" class="file-input file-input-ghost w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input $$file-input-ghost w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="With form-control and labels">
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Pick a file</span>
    <span class="label-text-alt">Alt label</span>
  </div>
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </div>
</label>
{#snippet html()}

```html
<label class="$$form-control w-full max-w-xs">
  <div class="$$label">
    <span class="$$label-text">Pick a file</span>
    <span class="$$label-text-alt">Alt label</span>
  </div>
  <input type="file" class="$$file-input $$file-input-bordered w-full max-w-xs" />
  <div class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </div>
</label>
```

{/snippet}
</Component>

<Component title="Primary color">
<input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" />
{#snippet html()}

```html
<input
  type="file"
  class="$$file-input $$file-input-bordered $$file-input-primary w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Secondary color">
<input type="file" class="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
{#snippet html()}

```html
<input
  type="file"
  class="$$file-input $$file-input-bordered $$file-input-secondary w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Accent color">
<input type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input $$file-input-bordered $$file-input-accent w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Info color">
<input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input $$file-input-bordered $$file-input-info w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Success color">
<input type="file" class="file-input file-input-bordered file-input-success w-full max-w-xs" />
{#snippet html()}

```html
<input
  type="file"
  class="$$file-input $$file-input-bordered $$file-input-success w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Warning color">
<input type="file" class="file-input file-input-bordered file-input-warning w-full max-w-xs" />
{#snippet html()}

```html
<input
  type="file"
  class="$$file-input $$file-input-bordered $$file-input-warning w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Error color">
<input type="file" class="file-input file-input-bordered file-input-error w-full max-w-xs" />
{#snippet html()}

```html
<input type="file" class="$$file-input $$file-input-bordered $$file-input-error w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-md w-full max-w-xs" />
  <input type="file" class="file-input file-input-bordered file-input-lg w-full max-w-xs" />
</div>
{#snippet html()}

```html
<!-- xs -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-xs w-full max-w-xs" />
<!-- sm -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-sm w-full max-w-xs" />
<!-- md -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-md w-full max-w-xs" />
<!-- lg -->
<input type="file" class="$$file-input $$file-input-bordered $$file-input-lg w-full max-w-xs" />
```

{/snippet}
</Component>

<Component title="Disabled">
<input type="file" placeholder="You can't touch this" class="file-input file-input-bordered w-full max-w-xs" disabled />
{#snippet html()}

```html
<input
  type="file"
  placeholder="You can't touch this"
  class="$$file-input $$file-input-bordered w-full max-w-xs"
  disabled />
```

{/snippet}
</Component>
