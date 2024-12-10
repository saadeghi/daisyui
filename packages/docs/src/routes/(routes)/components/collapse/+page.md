---
title: Collapse
desc: Collapse is used for showing and hiding content.
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
  import Translate from "$components/Translate.svelte"
</script>

<div class="alert text-sm mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div><Translate text="Also see <a href='/components/accordion/' class='link'>accordion</a> examples" /></div>
</div>

### ~Collapse with focus
#### This collapse works with focus. When div loses focus, it gets closed

<div tabindex="0" class="collapse bg-base-200">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse bg-base-200">
  <div class="$$collapse-title text-xl font-medium">Focus me to see content</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~Collapse with checkbox
#### This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.

<div class="collapse bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>

```~html
<div class="$$collapse bg-base-200">
  <input type="checkbox" />
  <div class="$$collapse-title text-xl font-medium">Click me to show/hide content</div>
  <div class="$$collapse-content">
    <p>hello</p>
  </div>
</div>
```


### ~ Collapse using details and summary tag
#### collapse-open and collapse-close doesn't work with this method. You can add/remove open attribute to the details instead

<details class="collapse bg-base-200">
  <summary class="collapse-title text-xl font-medium">Click to open/close</summary>
  <div class="collapse-content">
    <p>content</p>
  </div>
</details>

```~html
<details class="$$collapse bg-base-200">
  <summary class="$$collapse-title text-xl font-medium">Click to open/close</summary>
  <div class="$$collapse-content">
    <p>content</p>
  </div>
</details>
```


<div class="alert text-sm mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>Using <code>&lt;details&gt;</code> tag, we can't have animations because <code>&lt;details&gt;</code> tag doesn't allow CSS transitions.</div>
</div>

### ~With border and background color
<div tabindex="0" class="collapse border border-base-300 bg-base-200">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse border-base-300 bg-base-200 border">
  <div class="$$collapse-title text-xl font-medium">Focus me to see content</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~With arrow icon
<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-arrow">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse $$collapse-arrow border-base-300 bg-base-200 border">
  <div class="$$collapse-title text-xl font-medium">Focus me to see content</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~With arrow plus/minus icon
<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-plus">
  <div class="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse $$collapse-plus border-base-300 bg-base-200 border">
  <div class="$$collapse-title text-xl font-medium">Focus me to see content</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~Force open
<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-200">
  <div class="collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse $$collapse-open border-base-300 bg-base-200 border">
  <div class="$$collapse-title text-xl font-medium">I have collapse-open class</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~Force close
<div tabindex="0" class="collapse collapse-close border border-base-300 bg-base-200">
  <div class="collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div tabindex="0" class="$$collapse $$collapse-close border-base-300 bg-base-200 border">
  <div class="$$collapse-title text-xl font-medium">I have collapse-close class</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~Custom colors for collapse that works with focus
#### Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused

<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
  <div class="collapse-title">
    Focus me to see content
  </div>
  <div class="collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>

```~html
<div
  tabindex="0"
  class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
  <div class="$$collapse-title">Focus me to see content</div>
  <div class="$$collapse-content">
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>
```


### ~Custom colors for collapse that works with checkbox
#### Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked

<div class="collapse bg-base-200">
  <input type="checkbox" class="peer" />
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    <p>hello</p>
  </div>
</div>

```~html
<div class="bg-base-200 collapse">
  <input type="checkbox" class="peer" />
  <div
    class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div
    class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    <p>hello</p>
  </div>
</div>
```
