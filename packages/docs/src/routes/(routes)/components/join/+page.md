---
title: Join
desc: Join is a container for grouping multiple items, it can be used to group buttons, inputs, etc. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.
layout: components
classnames:
  component:
  - class: join
    desc: For grouping multiple items
  - class: join-item
    desc: Item inside join. Can be a button, input, etc.
  direction:
  - class: join-vertical
    desc: Show items vertically
  - class: join-horizontal
    desc: Show items horizontally
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Join
<div class="join">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>

```html
<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```


### ~Group items vertically
<div class="join join-vertical">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>

```html
<div class="$$join $$join-vertical">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```


### ~Responsive: it's vertical on small screen and horizontal on large screen
<div class="join join-vertical lg:join-horizontal">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>

```html
<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```


### ~With extra elements in the group
#### Even if join-item is not a direct child of the group, it still gets the style

<div class="join">
  <div>
    <div>
      <input class="input join-item w-[5.3rem] md:w-52" placeholder="Search"/>
    </div>
  </div>
  <select class="select join-item w-[5.8rem] md:w-auto">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="indicator">
    <span class="indicator-item badge badge-secondary">new</span>
    <button class="btn join-item">Search</button>
  </div>
</div>

```html
<div class="$$join">
  <div>
    <div>
      <input class="$$input $$join-item" placeholder="Search" />
    </div>
  </div>
  <select class="$$select $$join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="$$indicator">
    <span class="$$indicator-item $$badge $$badge-secondary">new</span>
    <button class="$$btn $$join-item">Search</button>
  </div>
</div>
```


### ~Custom border radius
<div class="join">
  <input class="input join-item w-36 lg:w-52" placeholder="Email"/>
  <button class="btn join-item rounded-r-full">Subscribe</button>
</div>

```html
<div class="$$join">
  <input class="$$input $$join-item" placeholder="Email" />
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>
```


### ~Join radio inputs with btn style
<div class="join">
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 3" />
</div>

```html
<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>
```
