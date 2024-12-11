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
</script>

### ~Link
<button class="link">I'm a simple link</button>

```html
<a class="$$link">I'm a simple link</a>
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
<button class="link link-primary">I'm a simple link</button>

```html
<a class="$$link $$link-primary">I'm a simple link</a>
```


### ~Secondary color
<button class="link link-secondary">I'm a simple link</button>

```html
<a class="$$link $$link-secondary">I'm a simple link</a>
```


### ~Accent color
<button class="link link-accent">I'm a simple link</button>

```html
<a class="$$link $$link-accent">I'm a simple link</a>
```


### ~Neutral color
<button class="link link-neutral">I'm a simple link</button>

```html
<a class="$$link $$link-neutral">I'm a simple link</a>
```


### ~Success color
<button class="link link-success">I'm a simple link</button>

```html
<a class="$$link $$link-success">I'm a simple link</a>
```


### ~Info color
<button class="link link-info">I'm a simple link</button>

```html
<a class="$$link $$link-info">I'm a simple link</a>
```


### ~Warning color
<button class="link link-warning">I'm a simple link</button>

```html
<a class="$$link $$link-warning">I'm a simple link</a>
```


### ~Error color
<button class="link link-error">I'm a simple link</button>

```html
<a class="$$link $$link-error">I'm a simple link</a>
```


### ~Show underline only on hover
<button class="link link-hover">I'm a simple link</button>

```html
<a class="$$link $$link-hover">I'm a simple link</a>
```
