---
title: Range slider
desc: Range slider is used to select a value by sliding a handle.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/range.css
layout: components
classnames:
  component:
  - class: range
    desc: For <input type="range"> tag
  - class: range-dual
    desc: Track shared by 2 range inputs
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
  direction:
  - class: range-vertical
    desc: Vertical slider
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
  class="$$range text-blue-300 [--$$range-bg:orange] [--$$range-thumb:blue] [--$$range-fill:0]" />
```


### ~Vertical
<input type="range" min="0" max="100" value="40" class="range range-vertical" />

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-vertical" />
```

> :WARNING:
>
> Every `range-dual` needs its own parent element. If two dual ranges share a parent, their handles will interfere with each other. Use a `fieldset` with `display: contents` as a semantic wrapper that does not affect layout.

### ~Dual range
#### Two range inputs share one track. Keep each `range-dual` in its own parent element, and apply the same size and color classes to `range-dual` and to each input. In Firefox, set `--range-val-1` and `--range-val-2` on the `range-dual` element from JavaScript, using each handle's position from 0 to 1.
<fieldset class="contents">
  <div class="range-dual range-primary">
    <input type="range" min="0" max="100" value="40" class="range range-primary" />
    <input type="range" min="0" max="100" value="90" class="range range-primary" />
  </div>
</fieldset>

```html
<fieldset class="contents">
  <div class="$$range-dual $$range-primary">
    <input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />
    <input type="range" min="0" max="100" value="90" class="$$range $$range-primary" />
  </div>
</fieldset>
```

### ~Dual range with one handle disabled
<fieldset class="contents">
  <div class="range-dual range-success range-lg">
    <input type="range" min="0" max="100" value="10" class="range range-success range-lg" disabled />
    <input type="range" min="0" max="100" value="70" class="range range-success range-lg" />
  </div>
</fieldset>

```html
<fieldset class="contents">
  <div class="$$range-dual $$range-success $$range-lg">
    <input type="range" min="0" max="100" value="10" class="$$range $$range-success $$range-lg" disabled />
    <input type="range" min="0" max="100" value="70" class="$$range $$range-success $$range-lg" />
  </div>
</fieldset>
```

### ~Dual range disabled
<fieldset class="contents">
  <div class="range-dual range-info range-sm">
    <input type="range" min="0" max="100" value="10" class="range range-info range-sm" disabled />
    <input type="range" min="0" max="100" value="60" class="range range-info range-sm" disabled />
  </div>
</fieldset>

```html
<fieldset class="contents">
  <div class="$$range-dual $$range-info $$range-sm">
    <input type="range" min="0" max="100" value="10" class="$$range $$range-info $$range-sm" disabled />
    <input type="range" min="0" max="100" value="60" class="$$range $$range-info $$range-sm" disabled />
  </div>
</fieldset>
```

### ~Dual range with custom color and no fill
<fieldset class="contents">
  <div class="range-dual text-blue-300 [--range-bg:orange] [--range-fill:0]">
    <input type="range" min="0" max="100" value="20" class="range [--range-thumb:blue]" />
    <input type="range" min="0" max="100" value="80" class="range [--range-thumb:blue]" />
  </div>
</fieldset>

```html
<fieldset class="contents">
  <div class="$$range-dual text-blue-300 [--$$range-bg:orange] [--$$range-fill:0]">
    <input type="range" min="0" max="100" value="20" class="$$range [--$$range-thumb:blue]" />
    <input type="range" min="0" max="100" value="80" class="$$range [--$$range-thumb:blue]" />
  </div>
</fieldset>
```
