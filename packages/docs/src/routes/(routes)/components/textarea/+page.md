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
    - class: textarea-xs
      desc: Extra small size
    - class: textarea-sm
      desc: Small size
    - class: textarea-md
      desc: Medium size
      default: true
    - class: textarea-lg
      desc: Large size
    - class: textarea-xl
      desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
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
  <div class="label">Optional</div>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Your bio</legend>
  <textarea class="$$textarea h-24" placeholder="Bio"></textarea>
  <div class="$$label">Optional</div>
</fieldset>
```

### ~Textarea colors

<div class="grid gap-4 w-xs">
  <textarea placeholder="Primary" class="textarea textarea-primary"></textarea>
  <textarea placeholder="Secondary" class="textarea textarea-secondary"></textarea>
  <textarea placeholder="Accent" class="textarea textarea-accent"></textarea>
  <textarea placeholder="Neutral" class="textarea textarea-neutral"></textarea>
  <textarea placeholder="Info" class="textarea textarea-info"></textarea>
  <textarea placeholder="Success" class="textarea textarea-success"></textarea>
  <textarea placeholder="Warning" class="textarea textarea-warning"></textarea>
  <textarea placeholder="Error" class="textarea textarea-error"></textarea>
</div>

```html
<textarea placeholder="Primary" class="$$textarea $$textarea-primary"></textarea>
<textarea placeholder="Secondary" class="$$textarea $$textarea-secondary"></textarea>
<textarea placeholder="Accent" class="$$textarea $$textarea-accent"></textarea>
<textarea placeholder="Neutral" class="$$textarea $$textarea-neutral"></textarea>
<textarea placeholder="Info" class="$$textarea $$textarea-info"></textarea>
<textarea placeholder="Success" class="$$textarea $$textarea-success"></textarea>
<textarea placeholder="Warning" class="$$textarea $$textarea-warning"></textarea>
<textarea placeholder="Error" class="$$textarea $$textarea-error"></textarea>
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
