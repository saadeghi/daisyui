---
title: Tooltip
desc: Tooltip can be used to show a message when hovering over an element.
layout: components
classnames:
  component:
  - class: tooltip
    desc: Container element
  part:
  - class: tooltip-content
    desc: Optional. Setting a div as the content of the tooltip instead of the `data-tip` text
  placement:
  - class: tooltip-top
    desc: Put tooltip on top
    default: true
  - class: tooltip-bottom
    desc: Put tooltip on bottom
  - class: tooltip-left
    desc: Put tooltip on left
  - class: tooltip-right
    desc: Put tooltip on right
  modifier:
  - class: tooltip-open
    desc: Force open tooltip
  color:
  - class: tooltip-neutral
    desc: neutral color
  - class: tooltip-primary
    desc: primary color
  - class: tooltip-secondary
    desc: secondary color
  - class: tooltip-accent
    desc: accent color
  - class: tooltip-info
    desc: info color
  - class: tooltip-success
    desc: success color
  - class: tooltip-warning
    desc: warning color
  - class: tooltip-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Tooltip
<div class="my-6">
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>

```html
<div class="$$tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```

### ~Tooltip with tooltip-content
<div class="my-6 mt-12">
  <div class="tooltip">
    <div class="tooltip-content">
      <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
    </div>
    <button class="btn">Hover me</button>
  </div>
</div>

```html
<div class="$$tooltip">
  <div class="$$tooltip-content">
    <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
  </div>
  <button class="$$btn">Hover me</button>
</div>
```


### ~Force open
<div class="my-6">
  <div class="tooltip tooltip-open" data-tip="hello">
    <button class="btn">Force open</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open" data-tip="hello">
  <button class="$$btn">Force open</button>
</div>
```


### ~Top
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
    <button class="btn">Top</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button class="$$btn">Top</button>
</div>
```


### ~Bottom
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
    <button class="btn">Bottom</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button class="$$btn">Bottom</button>
</div>
```


### ~Left
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
    <button class="btn">Left</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button class="$$btn">Left</button>
</div>
```


### ~Right
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
    <button class="btn">Right</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button class="$$btn">Right</button>
</div>
```


### ~Neutral color
<div class="my-6">
  <div data-tip="neutral" class="tooltip tooltip-open tooltip-neutral">
    <button class="btn btn-neutral">neutral</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-neutral" data-tip="neutral">
  <button class="$$btn $$btn-neutral">neutral</button>
</div>
```


### ~Primary color
<div class="my-6">
  <div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
    <button class="btn btn-primary">primary</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button class="$$btn $$btn-primary">primary</button>
</div>
```


### ~Secondary color
<div class="my-6">
  <div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
    <button class="btn btn-secondary">secondary</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button class="$$btn $$btn-secondary">secondary</button>
</div>
```


### ~Accent color
<div class="my-6">
  <div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
    <button class="btn btn-accent">accent</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button class="$$btn $$btn-accent">accent</button>
</div>
```


### ~Info color
<div class="my-6">
  <div data-tip="info" class="tooltip tooltip-open tooltip-info">
    <button class="btn btn-info">info</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button class="$$btn $$btn-info">info</button>
</div>
```


### ~Success color
<div class="my-6">
  <div data-tip="success" class="tooltip tooltip-open tooltip-success">
    <button class="btn btn-success">success</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button class="$$btn $$btn-success">success</button>
</div>
```


### ~Warning color
<div class="my-6">
  <div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
    <button class="btn btn-warning">warning</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button class="$$btn $$btn-warning">warning</button>
</div>
```


### ~Error color
<div class="my-6">
  <div data-tip="error" class="tooltip tooltip-open tooltip-error">
    <button class="btn btn-error">error</button>
  </div>
</div>

```html
<div class="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button class="$$btn $$btn-error">error</button>
</div>
```


### ~Responsive tooltip. only show for large screen
<div class="my-6">
  <div class="lg:tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>

```html
<div class="$$lg:tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```
