---
title: Radio
desc: Radio buttons allow the user to select one option from a set.
layout: components
classnames:
  component:
  - class: radio
    desc: For radio input
  color:
  - class: radio-neutral
    desc: neutral color
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
    desc: Medium size
    default: true
  - class: radio-lg
    desc: Large size
  - class: radio-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> Each set of radio inputs should have unique `name` attributes to avoid conflicts with other sets of radio inputs on the same page.


### ~Radio
<input type="radio" name="radio-1" class="radio" checked="checked" />
<input type="radio" name="radio-1" class="radio" />

```html
<input type="radio" name="radio-1" class="$$radio" checked="checked" />
<input type="radio" name="radio-1" class="$$radio" />
```

### ~Radio sizes
<input type="radio" name="radio-2" class="radio radio-xs" checked="checked" />
<input type="radio" name="radio-2.1" class="radio radio-sm" checked="checked" />
<input type="radio" name="radio-2.2" class="radio radio-md" checked="checked" />
<input type="radio" name="radio-2.3" class="radio radio-lg" checked="checked" />
<input type="radio" name="radio-2.4" class="radio radio-xl" checked="checked" />

```html
<input type="radio" name="radio-2" class="$$radio $$radio-xs" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-sm" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-md" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-lg" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-xl" checked="checked" />
```


### ~Neutral color
<input type="radio" name="radio-3" class="radio radio-neutral" checked="checked" />
<input type="radio" name="radio-3" class="radio radio-neutral" />

```html
<input type="radio" name="radio-3" class="$$radio $$radio-neutral" checked="checked" />
<input type="radio" name="radio-3" class="$$radio $$radio-neutral" />
```


### ~Primary color
<input type="radio" name="radio-4" class="radio radio-primary" checked="checked" />
<input type="radio" name="radio-4" class="radio radio-primary" />

```html
<input type="radio" name="radio-4" class="$$radio $$radio-primary" checked="checked" />
<input type="radio" name="radio-4" class="$$radio $$radio-primary" />
```


### ~Secondary color
<input type="radio" name="radio-5" class="radio radio-secondary" checked="checked" />
<input type="radio" name="radio-5" class="radio radio-secondary" />

```html
<input type="radio" name="radio-5" class="$$radio $$radio-secondary" checked="checked" />
<input type="radio" name="radio-5" class="$$radio $$radio-secondary" />
```


### ~Accent color
<input type="radio" name="radio-6" class="radio radio-accent" checked="checked" />
<input type="radio" name="radio-6" class="radio radio-accent" />

```html
<input type="radio" name="radio-6" class="$$radio $$radio-accent" checked="checked" />
<input type="radio" name="radio-6" class="$$radio $$radio-accent" />
```


### ~Success color
<input type="radio" name="radio-7" class="radio radio-success" checked="checked" />
<input type="radio" name="radio-7" class="radio radio-success" />

```html
<input type="radio" name="radio-7" class="$$radio $$radio-success" checked="checked" />
<input type="radio" name="radio-7" class="$$radio $$radio-success" />
```


### ~Warning color
<input type="radio" name="radio-8" class="radio radio-warning" checked="checked" />
<input type="radio" name="radio-8" class="radio radio-warning" />

```html
<input type="radio" name="radio-8" class="$$radio $$radio-warning" checked="checked" />
<input type="radio" name="radio-8" class="$$radio $$radio-warning" />
```


### ~Info color
<input type="radio" name="radio-9" class="radio radio-info" checked="checked" />
<input type="radio" name="radio-9" class="radio radio-info" />

```html
<input type="radio" name="radio-9" class="$$radio $$radio-info" checked="checked" />
<input type="radio" name="radio-9" class="$$radio $$radio-info" />
```


### ~Error color
<input type="radio" name="radio-10" class="radio radio-error" checked="checked" />
<input type="radio" name="radio-10" class="radio radio-error" />

```html
<input type="radio" name="radio-10" class="$$radio $$radio-error" checked="checked" />
<input type="radio" name="radio-10" class="$$radio $$radio-error" />
```


### ~Disabled
<input type="radio" name="radio-11" class="radio" disabled checked="checked" />
<input type="radio" name="radio-11" class="radio" disabled />

```html
<input type="radio" name="radio-11" class="$$radio" disabled checked="checked" />
<input type="radio" name="radio-11" class="$$radio" disabled />
```


### ~Radio with custom colors
<input type="radio" name="radio-12" class="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" checked="checked" />
<input type="radio" name="radio-12" class="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" checked="checked" />

```html
<input
  type="radio" name="radio-12" checked="checked"
  class="$$radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" />
<input
  type="radio" name="radio-12" checked="checked"
  class="$$radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
```
