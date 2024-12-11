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

### ~Radio
<input type="radio" name="radio-1" class="radio" checked="checked" />
<input type="radio" name="radio-1" class="radio" />

```html
<input type="radio" name="radio-1" class="$$radio" checked="checked" />
<input type="radio" name="radio-1" class="$$radio" />
```


### ~Primary color
<input type="radio" name="radio-2" class="radio radio-primary" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-primary" />

```html
<input type="radio" name="radio-2" class="$$radio $$radio-primary" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-primary" />
```


### ~Secondary color
<input type="radio" name="radio-3" class="radio radio-secondary" checked="checked" />
<input type="radio" name="radio-3" class="radio radio-secondary" />

```html
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" checked="checked" />
<input type="radio" name="radio-3" class="$$radio $$radio-secondary" />
```


### ~Accent color
<input type="radio" name="radio-4" class="radio radio-accent" checked="checked" />
<input type="radio" name="radio-4" class="radio radio-accent" />

```html
<input type="radio" name="radio-4" class="$$radio $$radio-accent" checked="checked" />
<input type="radio" name="radio-4" class="$$radio $$radio-accent" />
```


### ~Success color
<input type="radio" name="radio-5" class="radio radio-success" checked="checked" />
<input type="radio" name="radio-5" class="radio radio-success" />

```html
<input type="radio" name="radio-5" class="$$radio $$radio-success" checked="checked" />
<input type="radio" name="radio-5" class="$$radio $$radio-success" />
```


### ~Warning color
<input type="radio" name="radio-6" class="radio radio-warning" checked="checked" />
<input type="radio" name="radio-6" class="radio radio-warning" />

```html
<input type="radio" name="radio-6" class="$$radio $$radio-warning" checked="checked" />
<input type="radio" name="radio-6" class="$$radio $$radio-warning" />
```


### ~Info color
<input type="radio" name="radio-7" class="radio radio-info" checked="checked" />
<input type="radio" name="radio-7" class="radio radio-info" />

```html
<input type="radio" name="radio-7" class="$$radio $$radio-info" checked="checked" />
<input type="radio" name="radio-7" class="$$radio $$radio-info" />
```


### ~Error color
<input type="radio" name="radio-8" class="radio radio-error" checked="checked" />
<input type="radio" name="radio-8" class="radio radio-error" />

```html
<input type="radio" name="radio-8" class="$$radio $$radio-error" checked="checked" />
<input type="radio" name="radio-8" class="$$radio $$radio-error" />
```


### ~Disabled
<input type="radio" name="radio-9" class="radio" disabled checked="checked" />
<input type="radio" name="radio-9" class="radio" disabled />

```html
<input type="radio" name="radio-9" class="$$radio" disabled checked="checked" />
<input type="radio" name="radio-9" class="$$radio" disabled />
```


### ~With label and form-control and custom colors!
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
