---
title: Textarea
desc: Textarea allows users to enter text in multiple lines.
layout: components
classnames:
  component:
  - class: textarea
  desc: For <textarea> element
  style:
  - class: textarea-ghost
    desc: ghost style
  color:
  - class: textarea-primary
    desc: primary color
  - class: textarea-secondary
    desc: secondary color
  - class: textarea-accent
    desc: accent color
  - class: textarea-info
    desc: info color
  - class: textarea-success
    desc: success color
  - class: textarea-warning
    desc: warning color
  - class: textarea-error
    desc: error color
  size:
  - class: table-xs
    desc: Extra small size
  - class: table-sm
    desc: Small size
  - class: table-md
    desc: Medium size (default)
  - class: table-lg
    desc: Large size
  - class: table-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Textarea">
<textarea class="textarea" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Textarea with border">
<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-bordered" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Ghost (no background)">
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="With form control and labels">
<label class="form-control">
  <div class="label">
    <span class="label-text">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </div>
  <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
  <div class="label">
    <span class="label-text-alt">Your bio</span>
    <span class="label-text-alt">Alt label</span>
  </div>
</label>
{#snippet html()}

```html
<label class="$$form-control">
  <div class="$$label">
    <span class="$$label-text">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </div>
  <textarea class="$$textarea $$textarea-bordered h-24" placeholder="Bio"></textarea>
  <div class="$$label">
    <span class="$$label-text-alt">Your bio</span>
    <span class="$$label-text-alt">Alt label</span>
  </div>
</label>
```

{/snippet}
</Component>

<Component title="Primary color">
<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-primary" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Secondary color">
<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-secondary" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Accent color">
<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-accent" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Info color">
<textarea class="textarea textarea-info" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-info" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Success color">
<textarea class="textarea textarea-success" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-success" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Warning color">
<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-warning" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Error color">
<textarea class="textarea textarea-error" placeholder="Bio"></textarea>
{#snippet html()}

```html
<textarea class="$$textarea $$textarea-error" placeholder="Bio"></textarea>
```

{/snippet}
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-4 w-full items-center">
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>

{#snippet html()}

```html
<!-- xs -->
<textarea
  placeholder="Bio"
  class="$$textarea $$textarea-bordered $$textarea-xs w-full max-w-xs"></textarea>
<!-- sm -->
<textarea
  placeholder="Bio"
  class="$$textarea $$textarea-bordered $$textarea-sm w-full max-w-xs"></textarea>
<!-- md -->
<textarea
  placeholder="Bio"
  class="$$textarea $$textarea-bordered $$textarea-md w-full max-w-xs"></textarea>
<!-- lg -->
<textarea
  placeholder="Bio"
  class="$$textarea $$textarea-bordered $$textarea-lg w-full max-w-xs"></textarea>
```

{/snippet}
</Component>

<Component title="Disabled">
<textarea class="textarea" placeholder="Bio" disabled></textarea>
{#snippet html()}

```html
<textarea class="$$textarea" placeholder="Bio" disabled></textarea>
```

{/snippet}
</Component>
