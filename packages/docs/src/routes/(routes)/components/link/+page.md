---
title: Link
desc: Link adds the missing underline style to links.
layout: components
classnames:
  component:
  - class: link
    desc: Adds underline
  style:
  - class: link-hover
    desc: Only shows underline on hover
  color:
  - class: link-neutral
    desc: neutral color
  - class: link-primary
    desc: primary color
  - class: link-secondary
    desc: secondary color
  - class: link-accent
    desc: accent color
  - class: link-success
    desc: success color
  - class: link-info
    desc: info color
  - class: link-warning
    desc: warning color
  - class: link-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Link
<button class="link">Click me</button>

```html
<a class="$$link">Click me</a>
```


### ~Link
<p>Tailwind CSS resets the style of links by default.
  <br/>
  Add "link" class to make it look like a
  <button class="link">normal link</button> again.
</p>

```html
<p>
  Tailwind CSS resets the style of links by default.
  <br />
  Add "link" class to make it look like a
  <a class="$$link">normal link</a>
  again.
</p>
```


### ~Primary color
<button class="link link-primary">Click me</button>

```html
<a class="$$link $$link-primary">Click me</a>
```


### ~Secondary color
<button class="link link-secondary">Click me</button>

```html
<a class="$$link $$link-secondary">Click me</a>
```


### ~Accent color
<button class="link link-accent">Click me</button>

```html
<a class="$$link $$link-accent">Click me</a>
```


### ~Neutral color
<button class="link link-neutral">Click me</button>

```html
<a class="$$link $$link-neutral">Click me</a>
```


### ~Success color
<button class="link link-success">Click me</button>

```html
<a class="$$link $$link-success">Click me</a>
```


### ~Info color
<button class="link link-info">Click me</button>

```html
<a class="$$link $$link-info">Click me</a>
```


### ~Warning color
<button class="link link-warning">Click me</button>

```html
<a class="$$link $$link-warning">Click me</a>
```


### ~Error color
<button class="link link-error">Click me</button>

```html
<a class="$$link $$link-error">Click me</a>
```


### ~Show underline only on hover
<button class="link link-hover">Click me</button>

```html
<a class="$$link $$link-hover">Click me</a>
```
