---
title: File Input
desc: File Input is a an input field for uploading files.
layout: components
classnames:
  component:
    - class: file-input
      desc: For <input type="file"> element
  style:
    - class: file-input-ghost
      desc: ghost style
  color:
    - class: file-input-neutral
      desc: neutral color
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
      desc: Medium size
      default: true
    - class: file-input-lg
      desc: Large size
    - class: file-input-xl
      desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~File input

<input type="file" class="file-input" />

```html
<input type="file" class="$$file-input" />
```

### ~File input ghost

<input type="file" class="file-input file-input-ghost" />

```html
<input type="file" class="$$file-input $$file-input-ghost" />
```

### ~With fieldset and label

<fieldset class="fieldset">
  <legend class="fieldset-legend">Pick a file</legend>
  <input type="file" class="file-input" />
  <label class="label">Max size 2MB</label>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Pick a file</legend>
  <input type="file" class="$$file-input" />
  <label class="$$label">Max size 2MB</label>
</fieldset>
```

### ~Sizes

<div class="flex flex-col gap-4 w-full items-center">
  <input type="file" class="file-input file-input-xs" />
  <input type="file" class="file-input file-input-sm" />
  <input type="file" class="file-input file-input-md" />
  <input type="file" class="file-input file-input-lg" />
  <input type="file" class="file-input file-input-xl" />
</div>

```html
<input type="file" class="$$file-input $$file-input-xs" />

<input type="file" class="$$file-input $$file-input-sm" />

<input type="file" class="$$file-input $$file-input-md" />

<input type="file" class="$$file-input $$file-input-lg" />

<input type="file" class="$$file-input $$file-input-xl" />
```

### ~Primary color

<div class="grid gap-2">
  <input type="file" class="file-input file-input-primary" />
  <input type="file" class="file-input file-input-secondary" />
  <input type="file" class="file-input file-input-accent" />
  <input type="file" class="file-input file-input-neutral" />
  <input type="file" class="file-input file-input-info" />
  <input type="file" class="file-input file-input-success" />
  <input type="file" class="file-input file-input-warning" />
  <input type="file" class="file-input file-input-error" />
</div>

```html
<input type="file" class="$$file-input $$file-input-primary" />
<input type="file" class="$$file-input $$file-input-secondary" />
<input type="file" class="$$file-input $$file-input-accent" />
<input type="file" class="$$file-input $$file-input-neutral" />
<input type="file" class="$$file-input $$file-input-info" />
<input type="file" class="$$file-input $$file-input-success" />
<input type="file" class="$$file-input $$file-input-warning" />
<input type="file" class="$$file-input $$file-input-error" />
```

### ~Disabled

<input type="file" placeholder="You can't touch this" class="file-input" disabled />

```html
<input type="file" placeholder="You can't touch this" class="$$file-input" disabled />
```
