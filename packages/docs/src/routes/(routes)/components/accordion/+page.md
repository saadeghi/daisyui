---
title: Accordion
desc: Accordion is used for showing and hiding content but only one item can stay open at a time.
layout: components
classnames:
  component:
  - class: collapse
    desc: Collapse
  part:
  - class: collapse-title
    desc: Title part
  - class: collapse-content
    desc: Content part
  modifier:
  - class: collapse-arrow
    desc: Adds arrow icon
  - class: collapse-plus
    desc: Adds plus/minus icon
  - class: collapse-open
    desc: Force open
  - class: collapse-close
    desc: Force close
---

<script>
  import Component from "$components/Component.svelte"
</script>


> :INFO:
>
> Accordion uses the same style as the [collapse component](/components/collapse/) but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.

> :INFO:
>
> All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.


### ~Accordion using radio inputs
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>

```html
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
```


### ~Accordion with arrow icon
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>

```html
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
```


### ~Accordion with plus/minus icon
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>

```html
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
```


### ~Using Accordion and Join together
#### to join the items together and handle border radius automatically

<div class="join join-vertical w-full">
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>

```html
<div class="$$join $$join-vertical w-full">
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="$$collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="$$collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="$$collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>
```
