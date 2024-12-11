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

### ~Range
<input type="range" min="0" max="100" value="40" class="range max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range" />
```


### ~With steps and measure
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


### ~Primary color
<input type="range" min="0" max="100" value="40" class="range range-primary max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />
```


### ~Secondary color
<input type="range" min="0" max="100" value="40" class="range range-secondary max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />
```


### ~Accent color
<input type="range" min="0" max="100" value="40" class="range range-accent max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />
```


### ~Success color
<input type="range" min="0" max="100" value="40" class="range range-success max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />
```


### ~Warning color
<input type="range" min="0" max="100" value="40" class="range range-warning max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />
```


### ~Info color
<input type="range" min="0" max="100" value="40" class="range range-info max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />
```


### ~Error color
<input type="range" min="0" max="100" value="40" class="range range-error max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />
```


### ~Sizes
<div class="flex flex-col w-full items-center gap-4">
  <input type="range" min="0" max="100" value="40" class="range range-xs max-w-xs" />
  <input type="range" min="0" max="100" value="50" class="range range-sm max-w-xs" />
  <input type="range" min="0" max="100" value="60" class="range range-md max-w-xs" />
  <input type="range" min="0" max="100" value="70" class="range range-lg max-w-xs" />
</div>

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-xs" />
<input type="range" min="0" max="100" value="50" class="$$range $$range-sm" />
<input type="range" min="0" max="100" value="60" class="$$range $$range-md" />
<input type="range" min="0" max="100" value="70" class="$$range $$range-lg" />
```


### ~Range with custom color
<input type="range" min="0" max="100" value="40" class="range [--range-shdw:yellow] max-w-xs" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$[--range-shdw:yellow]" />
```
