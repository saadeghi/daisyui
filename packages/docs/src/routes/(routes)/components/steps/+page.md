---
title: Steps
desc: Steps can be used to show a list of steps in a process.
layout: components
classnames:
  component:
  - class: steps
    desc: Container of multiple step nodes
  part:
  - class: step
    desc: A single step node
  - class: step-icon
    desc: For custom icon inside step
  color:
  - class: step-neutral
    desc: neutral color
  - class: step-primary
    desc: primary color
  - class: step-secondary
    desc: secondary color
  - class: step-accent
    desc: accent color
  - class: step-info
    desc: info color
  - class: step-success
    desc: success color
  - class: step-warning
    desc: warning color
  - class: step-error
    desc: error color
  direction:
  - class: steps-vertical
    desc: Makes steps vertical (default)
  - class: steps-horizontal
    desc: Makes steps horizontal
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Horizontal
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>

```html
<ul class="$$steps">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```


### ~Vertical
<ul class="steps steps-vertical">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>

```html
<ul class="$$steps $$steps-vertical">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```


### ~responsive (vertical on small screen, horizontal on large screen)
<ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>

```html
<ul class="$$steps $$steps-vertical lg:$$steps-horizontal">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```

### ~With custom content in step-icon
<ul class="steps">
  <li class="step step-neutral">
    <span class="step-icon">😕</span>Step 1
  </li>
  <li class="step step-neutral">
    <span class="step-icon">😃</span>Step 2
  </li>
  <li class="step">
    <span class="step-icon">😍</span>Step 3
  </li>
</ul>

```html
<ul class="$$steps">
  <li class="$$step $$step-neutral">
    <span class="$$step-icon">😕</span>Step 1
  </li>
  <li class="$$step $$step-neutral">
    <span class="$$step-icon">😃</span>Step 2
  </li>
  <li class="$$step">
    <span class="$$step-icon">😍</span>Step 3
  </li>
</ul>
```

### ~With data-content
<ul class="steps">
  <li data-content="?" class="step step-neutral">Step 1</li>
  <li data-content="!" class="step step-neutral">Step 2</li>
  <li data-content="✓" class="step step-neutral">Step 3</li>
  <li data-content="✕" class="step step-neutral">Step 4</li>
  <li data-content="★" class="step step-neutral">Step 5</li>
  <li data-content="" class="step step-neutral">Step 6</li>
  <li data-content="●" class="step step-neutral">Step 7</li>
</ul>

```html
<ul class="$$steps">
  <li data-content="?" class="$$step $$step-neutral">Step 1</li>
  <li data-content="!" class="$$step $$step-neutral">Step 2</li>
  <li data-content="✓" class="$$step $$step-neutral">Step 3</li>
  <li data-content="✕" class="$$step $$step-neutral">Step 4</li>
  <li data-content="★" class="$$step $$step-neutral">Step 5</li>
  <li data-content="" class="$$step $$step-neutral">Step 6</li>
  <li data-content="●" class="$$step $$step-neutral">Step 7</li>
</ul>
```


### ~Custom colors
<ul class="steps">
  <li class="step step-info">Fly to moon</li>
  <li class="step step-info">Shrink the moon</li>
  <li class="step step-info">Grab the moon</li>
  <li data-content="?" class="step step-error">Sit on toilet</li>
</ul>

```html
<ul class="$$steps">
  <li class="$$step $$step-info">Fly to moon</li>
  <li class="$$step $$step-info">Shrink the moon</li>
  <li class="$$step $$step-info">Grab the moon</li>
  <li class="$$step $$step-error" data-content="?">Sit on toilet</li>
</ul>
```


### ~With scrollable wrapper
<div class="overflow-x-auto">
  <ul class="steps">
    <li class="step">start</li>
    <li class="step step-secondary">2</li>
    <li class="step step-secondary">3</li>
    <li class="step step-secondary">4</li>
    <li class="step">5</li>
    <li class="step step-accent">6</li>
    <li class="step step-accent">7</li>
    <li class="step">8</li>
    <li class="step step-error">9</li>
    <li class="step step-error">10</li>
    <li class="step">11</li>
    <li class="step">12</li>
    <li class="step step-warning">13</li>
    <li class="step step-warning">14</li>
    <li class="step">15</li>
    <li class="step step-neutral">16</li>
    <li class="step step-neutral">17</li>
    <li class="step step-neutral">18</li>
    <li class="step step-neutral">19</li>
    <li class="step step-neutral">20</li>
    <li class="step step-neutral">21</li>
    <li class="step step-neutral">22</li>
    <li class="step step-neutral">23</li>
    <li class="step step-neutral">end</li>
  </ul>
</div>

```html
<div class="overflow-x-auto">
  <ul class="$$steps">
    <li class="$$step">start</li>
    <li class="$$step $$step-secondary">2</li>
    <li class="$$step $$step-secondary">3</li>
    <li class="$$step $$step-secondary">4</li>
    <li class="$$step">5</li>
    <li class="$$step $$step-accent">6</li>
    <li class="$$step $$step-accent">7</li>
    <li class="$$step">8</li>
    <li class="$$step $$step-error">9</li>
    <li class="$$step $$step-error">10</li>
    <li class="$$step">11</li>
    <li class="$$step">12</li>
    <li class="$$step $$step-warning">13</li>
    <li class="$$step $$step-warning">14</li>
    <li class="$$step">15</li>
    <li class="$$step $$step-neutral">16</li>
    <li class="$$step $$step-neutral">17</li>
    <li class="$$step $$step-neutral">18</li>
    <li class="$$step $$step-neutral">19</li>
    <li class="$$step $$step-neutral">20</li>
    <li class="$$step $$step-neutral">21</li>
    <li class="$$step $$step-neutral">22</li>
    <li class="$$step $$step-neutral">23</li>
    <li class="$$step $$step-neutral">end</li>
  </ul>
</div>
```
