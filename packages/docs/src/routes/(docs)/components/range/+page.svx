---
title: Range slider
desc: Range slider is used to select a value by sliding a handle.
layout: components
classnames:
  component:
  - class: range
    desc: For <input> tag
  color:
  - class: range-primary
    desc: primary color
  - class: range-secondary
    desc: secondary color
  - class: range-accent
    desc: accent color
  - class: range-success
    desc: success color
  - class: range-warning
    desc: warning color
  - class: range-info
    desc: info color
  - class: range-error
    desc: error color
  size:
  - class: range-xs
    desc: Extra small size
  - class: range-sm
    desc: Small size
  - class: range-md
    desc: Medium size (default)
  - class: range-lg
    desc: Large size
  - class: range-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Range">
<input type="range" min="0" max="100" value="40" class="range max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range" />
```

{/snippet}
</Component>

<Component title="With steps and measure">
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="range max-w-xs" step="25" />
  <div class="w-full flex justify-between text-xs px-2 max-w-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
</div>
{#snippet html()}

```html
<input type="range" min="0" max="100" value="25" class="$$range" step="25" />
<div class="flex w-full justify-between px-2 text-xs">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>
```

{/snippet}
</Component>

<Component title="Primary color">
<input type="range" min="0" max="100" value="40" class="range range-primary max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />
```

{/snippet}
</Component>

<Component title="Secondary color">
<input type="range" min="0" max="100" value="40" class="range range-secondary max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />
```

{/snippet}
</Component>

<Component title="Accent color">
<input type="range" min="0" max="100" value="40" class="range range-accent max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />
```

{/snippet}
</Component>

<Component title="Success color">
<input type="range" min="0" max="100" value="40" class="range range-success max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />
```

{/snippet}
</Component>

<Component title="Warning color">
<input type="range" min="0" max="100" value="40" class="range range-warning max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />
```

{/snippet}
</Component>

<Component title="Info color">
<input type="range" min="0" max="100" value="40" class="range range-info max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />
```

{/snippet}
</Component>

<Component title="Error color">
<input type="range" min="0" max="100" value="40" class="range range-error max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />
```

{/snippet}
</Component>

<Component title="Sizes">
<div class="flex flex-col w-full items-center gap-4">
  <input type="range" min="0" max="100" value="40" class="range range-xs max-w-xs" />
  <input type="range" min="0" max="100" value="50" class="range range-sm max-w-xs" />
  <input type="range" min="0" max="100" value="60" class="range range-md max-w-xs" />
  <input type="range" min="0" max="100" value="70" class="range range-lg max-w-xs" />
</div>
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-xs" />
<input type="range" min="0" max="100" value="50" class="$$range $$range-sm" />
<input type="range" min="0" max="100" value="60" class="$$range $$range-md" />
<input type="range" min="0" max="100" value="70" class="$$range $$range-lg" />
```

{/snippet}
</Component>

<Component title="Range with custom color">
<input type="range" min="0" max="100" value="40" class="range [--range-shdw:yellow] max-w-xs" />
{#snippet html()}

```html
<input type="range" min="0" max="100" value="40" class="$$range $$[--range-shdw:yellow]" />
```

{/snippet}
</Component>
