---
title: Range slider
desc: Range slider is used to select a value by sliding a handle.
layout: components
classnames:
  component:
  - class: range
    desc: For <input type="range"> tag
  color:
  - class: range-neutral
    desc: neutral color
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
    desc: Medium size
    default: true
  - class: range-lg
    desc: Large size
  - class: range-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Range
<input type="range" min="0" max="100" value="40" class="range" />

```html
<input type="range" min="0" max="100" value="40" class="$$range" />
```


### ~With steps and measure
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="range" step="25" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>

```html
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="$$range" step="25" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>
```


### ~Neutral color
<input type="range" min="0" max="100" value="40" class="range range-neutral" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-neutral" />
```


### ~Primary color
<input type="range" min="0" max="100" value="40" class="range range-primary" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />
```


### ~Secondary color
<input type="range" min="0" max="100" value="40" class="range range-secondary" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />
```


### ~Accent color
<input type="range" min="0" max="100" value="40" class="range range-accent" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />
```


### ~Success color
<input type="range" min="0" max="100" value="40" class="range range-success" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />
```


### ~Warning color
<input type="range" min="0" max="100" value="40" class="range range-warning" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />
```


### ~Info color
<input type="range" min="0" max="100" value="40" class="range range-info" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />
```


### ~Error color
<input type="range" min="0" max="100" value="40" class="range range-error" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />
```


### ~Sizes
<div class="flex flex-col gap-4 w-full max-w-xs">
  <input type="range" min="0" max="100" value="30" class="range range-xs" />
  <input type="range" min="0" max="100" value="40" class="range range-sm" />
  <input type="range" min="0" max="100" value="50" class="range range-md" />
  <input type="range" min="0" max="100" value="60" class="range range-lg" />
  <input type="range" min="0" max="100" value="70" class="range range-xl" />
</div>

```html
<input type="range" min="0" max="100" value="30" class="$$range $$range-xs" />
<input type="range" min="0" max="100" value="40" class="$$range $$range-sm" />
<input type="range" min="0" max="100" value="50" class="$$range $$range-md" />
<input type="range" min="0" max="100" value="60" class="$$range $$range-lg" />
<input type="range" min="0" max="100" value="70" class="$$range $$range-xl" />
```


### ~Range with custom color and no fill
<input type="range" min="0" max="100" value="40" class="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />

```html
<input type="range" min="0" max="100" value="40" 
  class="$$range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
```
