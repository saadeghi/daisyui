---
alert: This page is not up to date. Some of the examples might not work as expected.
title: Tabs
desc: Tabs can be used to show a list of links in a tabbed format.
layout: components
classnames:
  component:
  - class: tabs
    desc: Container of multiple tab items
  part:
  - class: tab
    desc: A single tab button (can be button, link, div, radio input, etc)
  - class: tab-content
    desc: Tab content that comes immediately after a tab
  style:
  - class: tabs-box
    desc: box style
  - class: tabs-border
    desc: bottom border style
  - class: tabs-lift
    desc: lift style
  modifier:
  - class: tab-active
    desc: Makes a single tab look active
  - class: tab-disabled
    desc: Makes a single tab look disabled
  placement:
  - class: tabs-top
    desc: Puts tab buttons on top of the tab-content (defult)
  - class: tab-bottom
    desc: Puts tabs on under the tab-content
  size:
  - class: tabs-xs
    desc: Extra small size
  - class: tabs-sm
    desc: Small size
  - class: tabs-md
    desc: Medium size (default)
  - class: tabs-lg
    desc: Large size
  - class: tabs-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Tabs
<div role="tablist" class="tabs">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```


### ~Bordered
<div role="tablist" class="tabs tabs-bordered">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-bordered">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```


### ~Lifted
<div role="tablist" class="tabs tabs-lift">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```


### ~Boxed
<div role="tablist" class="tabs tabs-boxed">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-boxed">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```


### ~Sizes
<div class="flex flex-col items-center gap-6">
  <div role="tablist" class="tabs tabs-lift tabs-xs">
    <button role="tab" class="tab">Tiny</button>
    <button role="tab" class="tab tab-active">Tiny</button>
    <button role="tab" class="tab">Tiny</button>
  </div>
  <div role="tablist" class="tabs tabs-lift tabs-sm">
    <button role="tab" class="tab">Small</button>
    <button role="tab" class="tab tab-active">Small</button>
    <button role="tab" class="tab">Small</button>
  </div>
  <div role="tablist" class="tabs tabs-lift">
    <button role="tab" class="tab">Normal</button>
    <button role="tab" class="tab tab-active">Normal</button>
    <button role="tab" class="tab">Normal</button>
  </div>
  <div role="tablist" class="tabs tabs-lift tabs-lg">
    <button role="tab" class="tab">Large</button>
    <button role="tab" class="tab tab-active">Large</button>
    <button role="tab" class="tab">Large</button>
  </div>
</div>

```html
<!-- xs -->
<div role="tablist" class="$$tabs $$tabs-lift $$tabs-xs">
  <a role="tab" class="$$tab">Tiny</a>
  <a role="tab" class="$$tab $$tab-active">Tiny</a>
  <a role="tab" class="$$tab">Tiny</a>
</div>
<!-- sm -->
<div role="tablist" class="$$tabs $$tabs-lift $$tabs-sm">
  <a role="tab" class="$$tab">Small</a>
  <a role="tab" class="$$tab $$tab-active">Small</a>
  <a role="tab" class="$$tab">Small</a>
</div>
<!-- md -->
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Normal</a>
  <a role="tab" class="$$tab $$tab-active">Normal</a>
  <a role="tab" class="$$tab">Normal</a>
</div>
<!-- lg -->
<div role="tablist" class="$$tabs $$tabs-lift $$tabs-lg">
  <a role="tab" class="$$tab">Large</a>
  <a role="tab" class="$$tab $$tab-active">Large</a>
  <a role="tab" class="$$tab">Large</a>
</div>
```


### ~radio tab bordered + tab content
<div role="tablist" class="tabs tabs-bordered w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
  <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
  <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 1" />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 1</div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    class="$$tab"
    aria-label="Tab 2"
    checked="checked" />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 3" />
  <div role="tabpanel" class="$$tab-content p-10">Tab content 3</div>
</div>
```


### ~radio tab lift + tab content
<div role="tablist" class="tabs tabs-lift w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 pe-32">Tab content 3</div>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 1" />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 1
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    class="$$tab"
    aria-label="Tab 2"
    checked="checked" />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 2
  </div>

  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 3" />
  <div role="tabpanel" class="$$tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 3
  </div>
</div>
```


### ~Tabs with custom color
<div role="tablist" class="tabs tabs-lift">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Tab 1</a>
  <a
    role="tab"
    class="$$tab $$tab-active text-primary [--tab-bg:yellow] [--tab-border-color:orange]">
    Tab 2
  </a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
