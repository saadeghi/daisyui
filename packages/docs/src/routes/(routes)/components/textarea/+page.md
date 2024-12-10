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

### ~Textarea
<textarea class="textarea" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea" placeholder="Bio"></textarea>
```


### ~Textarea with border
<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-bordered" placeholder="Bio"></textarea>
```


### ~Ghost (no background)
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>
```


### ~With form control and labels
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

```~html
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


### ~Primary color
<textarea class="textarea textarea-primary" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-primary" placeholder="Bio"></textarea>
```


### ~Secondary color
<textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-secondary" placeholder="Bio"></textarea>
```


### ~Accent color
<textarea class="textarea textarea-accent" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-accent" placeholder="Bio"></textarea>
```


### ~Info color
<textarea class="textarea textarea-info" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-info" placeholder="Bio"></textarea>
```


### ~Success color
<textarea class="textarea textarea-success" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-success" placeholder="Bio"></textarea>
```


### ~Warning color
<textarea class="textarea textarea-warning" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-warning" placeholder="Bio"></textarea>
```


### ~Error color
<textarea class="textarea textarea-error" placeholder="Bio"></textarea>

```~html
<textarea class="$$textarea $$textarea-error" placeholder="Bio"></textarea>
```


### ~Sizes
<div class="flex flex-col gap-4 w-full items-center">
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
  <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>

```~html
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


### ~Disabled
<textarea class="textarea" placeholder="Bio" disabled></textarea>

```~html
<textarea class="$$textarea" placeholder="Bio" disabled></textarea>
```
