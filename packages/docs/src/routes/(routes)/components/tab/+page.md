---
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
    desc: Puts tab buttons on top of the tab-content (default)
  - class: tabs-bottom
    desc: Puts tabs on under the tab-content
  size:
  - class: tabs-xs
    desc: Extra small size
  - class: tabs-sm
    desc: Small size
  - class: tabs-md
    desc: Medium size
    default: true
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


### ~Border
<div role="tablist" class="tabs tabs-border">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-border">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```


### ~Lift
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


### ~Tab box
<div role="tablist" class="tabs tabs-box">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-box">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```

### ~Tab box using radio inputs
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
</div>

```html
<!-- name of each tab group should be unique -->
<div role="tablist" class="$$tabs $$tabs-box">
  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 2" checked="checked" />
  <input type="radio" name="my_tabs_1" role="tab" class="$$tab" aria-label="Tab 3" />
</div>
```

### ~Sizes
<div class="flex flex-col items-center gap-6">
  <div role="tablist" class="tabs tabs-lift tabs-xs">
    <button role="tab" class="tab">Xsmall</button>
    <button role="tab" class="tab tab-active">Xsmall</button>
    <button role="tab" class="tab">Xsmall</button>
  </div>
  <div role="tablist" class="tabs tabs-lift tabs-sm">
    <button role="tab" class="tab">Small</button>
    <button role="tab" class="tab tab-active">Small</button>
    <button role="tab" class="tab">Small</button>
  </div>
  <div role="tablist" class="tabs tabs-lift">
    <button role="tab" class="tab">Medium</button>
    <button role="tab" class="tab tab-active">Medium</button>
    <button role="tab" class="tab">Medium</button>
  </div>
  <div role="tablist" class="tabs tabs-lift tabs-lg">
    <button role="tab" class="tab">Large</button>
    <button role="tab" class="tab tab-active">Large</button>
    <button role="tab" class="tab">Large</button>
  </div>
  <div role="tablist" class="tabs tabs-lift tabs-xl">
    <button role="tab" class="tab">Xlarge</button>
    <button role="tab" class="tab tab-active">Xlarge</button>
    <button role="tab" class="tab">Xlarge</button>
  </div>
</div>

```html

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-xs">
  <a role="tab" class="$$tab">Xsmall</a>
  <a role="tab" class="$$tab $$tab-active">Xsmall</a>
  <a role="tab" class="$$tab">Xsmall</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-sm">
  <a role="tab" class="$$tab">Small</a>
  <a role="tab" class="$$tab $$tab-active">Small</a>
  <a role="tab" class="$$tab">Small</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Medium</a>
  <a role="tab" class="$$tab $$tab-active">Medium</a>
  <a role="tab" class="$$tab">Medium</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-lg">
  <a role="tab" class="$$tab">Large</a>
  <a role="tab" class="$$tab $$tab-active">Large</a>
  <a role="tab" class="$$tab">Large</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-xl">
  <a role="tab" class="$$tab">Xlarge</a>
  <a role="tab" class="$$tab $$tab-active">Xlarge</a>
  <a role="tab" class="$$tab">Xlarge</a>
</div>
```


### ~radio tab border + tab content
<div role="tablist" class="tabs tabs-border w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>

```html
<!-- name of each tab group should be unique -->
<div role="tablist" class="$$tabs $$tabs-border">
  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>
```


### ~radio tab lift + tab content
<div role="tablist" class="tabs tabs-lift w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>
  <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
  <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>

```html
<!-- name of each tab group should be unique -->
<div role="tablist" class="$$tabs $$tabs-lift">
  <input type="radio" name="my_tabs_3" role="tab" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" role="tab" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_3" role="tab" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```



### ~radio tab lift + tab content on bottom
<div role="tablist" class="tabs tabs-bottom tabs-lift w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_4" role="tab" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>
  <input type="radio" name="my_tabs_4" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
  <input type="radio" name="my_tabs_4" role="tab" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>

```html
<!-- name of each tab group should be unique -->
<div role="tablist" class="$$tabs $$tabs-lift $$tabs-bottom">
  <input type="radio" name="my_tabs_4" role="tab" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_4" role="tab" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_4" role="tab" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```



### ~radio tab box + tab content
<div role="tablist" class="tabs tabs-box w-full my-10 lg:mx-10">
  <input type="radio" name="my_tabs_5" role="tab" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>
  <input type="radio" name="my_tabs_5" role="tab" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
  <input type="radio" name="my_tabs_5" role="tab" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>

```html
<!-- name of each tab group should be unique -->
<div role="tablist" class="$$tabs $$tabs-box">
  <input type="radio" name="my_tabs_5" role="tab" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_5" role="tab" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_5" role="tab" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```


### ~Tabs with custom color
<div role="tablist" class="tabs tabs-lift">
  <button role="tab" class="tab">Tab 1</button>
  <button role="tab" class="tab tab-active [--tab-bg:orange] [--tab-border-color:red] text-primary">Tab 2</button>
  <button role="tab" class="tab">Tab 3</button>
</div>

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active text-primary [--tab-bg:orange] [--tab-border-color:red]"> Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
