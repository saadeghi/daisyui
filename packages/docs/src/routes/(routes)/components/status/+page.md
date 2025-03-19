---
title: Status
desc: Status is a really small icon to visually show the current status of an element, like online, offline, error, etc.
layout: components
classnames:
  component:
  - class: status
    desc: Status icon
  color:
  - class: status-neutral
    desc: neutral color
  - class: status-primary
    desc: primary color
  - class: status-secondary
    desc: secondary color
  - class: status-accent
    desc: accent color
  - class: status-info
    desc: info color
  - class: status-success
    desc: success color
  - class: status-warning
    desc: warning color
  - class: status-error
    desc: error color
  size:
  - class: status-xs
    desc: extra small size
  - class: status-sm
    desc: small size
  - class: status-md
    desc: medium size
    default: true
  - class: status-lg
    desc: large size
  - class: status-xl
    desc: extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Status
<span class="status"></span>

```html
<span class="$$status"></span>
```

### ~Status sizes
<div aria-label="status" class="status status-xs"></div>
<div aria-label="status" class="status status-sm"></div>
<div aria-label="status" class="status status-md"></div>
<div aria-label="status" class="status status-lg"></div>
<div aria-label="status" class="status status-xl"></div>

```html
<div aria-label="status" class="$$status $$status-xs"></div>
<div aria-label="status" class="$$status $$status-sm"></div>
<div aria-label="status" class="$$status $$status-md"></div>
<div aria-label="status" class="$$status $$status-lg"></div>
<div aria-label="status" class="$$status $$status-xl"></div>
```

### ~Status with colors
<div aria-label="status" class="status status-primary"></div>
<div aria-label="status" class="status status-secondary"></div>
<div aria-label="status" class="status status-accent"></div>
<div aria-label="status" class="status status-neutral"></div>

<div aria-label="info" class="status status-info"></div>
<div aria-label="success" class="status status-success"></div>
<div aria-label="warning" class="status status-warning"></div>
<div aria-label="error" class="status status-error"></div>

```html
<div aria-label="status" class="$$status $$status-primary"></div>
<div aria-label="status" class="$$status $$status-secondary"></div>
<div aria-label="status" class="$$status $$status-accent"></div>
<div aria-label="status" class="$$status $$status-neutral"></div>

<div aria-label="info" class="$$status $$status-info"></div>
<div aria-label="success" class="$$status $$status-success"></div>
<div aria-label="warning" class="$$status $$status-warning"></div>
<div aria-label="error" class="$$status $$status-error"></div>
```
### ~Status with ping animation

<div class="inline-grid *:[grid-area:1/1]">
  <div class="status status-error animate-ping"></div>
  <div class="status status-error"></div>
</div> Server is down

```html
<div class="inline-grid *:[grid-area:1/1]">
  <div class="$$status $$status-error animate-ping"></div>
  <div class="$$status $$status-error"></div>
</div> Server is down
```
### ~Status with bounce animation

<div class="status status-info animate-bounce"></div> Unread messages

```html
<div class="$$status $$status-info animate-bounce"></div> Unread messages
```
