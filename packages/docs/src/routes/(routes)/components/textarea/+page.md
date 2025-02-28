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
  - class: textarea-neutral
    desc: neutral color
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
    desc: Medium size
    default: true
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

```html
<textarea class="$$textarea" placeholder="Bio"></textarea>
```

### ~Ghost (no background)
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>

```html
<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>
```


### ~With form control and labels
<fieldset class="fieldset w-xs">
  <legend class="fieldset-legend">Your bio</legend>
  <textarea class="textarea h-24" placeholder="Bio"></textarea>
  <div class="fieldset-label">Optional</div>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Your bio</legend>
  <textarea class="$$textarea h-24" placeholder="Bio"></textarea>
  <div class="$$fieldset-label">Optional</div>
</fieldset>
```

### ~Textarea colors
<div class="grid gap-4 w-xs">
  <textarea type="text" placeholder="Primary" class="textarea textarea-primary"></textarea>
  <textarea type="text" placeholder="Secondary" class="textarea textarea-secondary"></textarea>
  <textarea type="text" placeholder="Accent" class="textarea textarea-accent"></textarea>
  <textarea type="text" placeholder="Neutral" class="textarea textarea-neutral"></textarea>
  <textarea type="text" placeholder="Info" class="textarea textarea-info"></textarea>
  <textarea type="text" placeholder="Success" class="textarea textarea-success"></textarea>
  <textarea type="text" placeholder="Warning" class="textarea textarea-warning"></textarea>
  <textarea type="text" placeholder="Error" class="textarea textarea-error"></textarea>
</div>

```html
<textarea type="text" placeholder="Primary" class="$$textarea $$textarea-primary"></textarea>
<textarea type="text" placeholder="Secondary" class="$$textarea $$textarea-secondary"></textarea>
<textarea type="text" placeholder="Accent" class="$$textarea $$textarea-accent"></textarea>
<textarea type="text" placeholder="Neutral" class="$$textarea $$textarea-neutral"></textarea>
<textarea type="text" placeholder="Info" class="$$textarea $$textarea-info"></textarea>
<textarea type="text" placeholder="Success" class="$$textarea $$textarea-success"></textarea>
<textarea type="text" placeholder="Warning" class="$$textarea $$textarea-warning"></textarea>
<textarea type="text" placeholder="Error" class="$$textarea $$textarea-error"></textarea>
```

### ~Sizes
<div class="flex flex-col gap-4 w-full items-center">
  <textarea placeholder="Xsmall" class="textarea textarea-xs"></textarea>
  <textarea placeholder="Small" class="textarea textarea-sm"></textarea>
  <textarea placeholder="Medium" class="textarea textarea-md"></textarea>
  <textarea placeholder="Large" class="textarea textarea-lg"></textarea>
  <textarea placeholder="Xlarge" class="textarea textarea-xl"></textarea>
</div>

```html
<textarea placeholder="Bio" class="$$textarea $$textarea-xs"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-sm"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-md"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-lg"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-xl"></textarea>
```


### ~Disabled
<textarea class="textarea" placeholder="Bio" disabled></textarea>

```html
<textarea class="$$textarea" placeholder="Bio" disabled></textarea>
```
