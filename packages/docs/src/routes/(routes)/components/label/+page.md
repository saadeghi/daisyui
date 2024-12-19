---
title: Label
desc: Label is used to provide a name or title for an input field. Label can be placed before or after the field.
layout: components
classnames:
  component:
  - class: label
    desc: For labeling input fields
  style:
  - class: label-floating
    desc: Floating label style
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Label for input
<label class="input">
  <span class="label">https://</span>
  <input type="text" placeholder="URL" />
</label>

```html
<label class="$$input">
  <span class="$$label">https://</span>
  <input type="text" placeholder="URL" />
</label>
```
### ~Label for input at the end
<label class="input">
  <input type="text" placeholder="domain name" />
  <span class="label">.com</span>
</label>

```html
<label class="$$input">
  <input type="text" placeholder="domain name" />
  <span class="$$label">.com</span>
</label>
```

### ~Label for select
<label class="select">
  <span class="label">Type</span>
  <select>
    <option>Personal</option>
    <option>Business</option>
  </select>
</label>

```html
<label class="$$select">
  <span class="$$label">Type</span>
  <select>
    <option>Personal</option>
    <option>Business</option>
  </select>
</label>
```

### ~Label for date input
<label class="input">
  <span class="label">Publish date</span>
  <input type="date" />
</label>

```html
<label class="$$input">
  <span class="$$label">Publish date</span>
  <input type="date" />
</label>
```



### ~Floating Label
<div class="label-floating w-full max-w-xs">
  <span>Your name</span>
  <input type="text" placeholder="Your name" class="input input-md" />
</div>

```html
<div class="$$label-floating">
  <span>Your name</span>
  <input type="text" placeholder="Your name" class="$$input $$input-md" />
</div>
```

### ~Floating Label with Different Sizes
<div class="grid gap-4 w-xs">
  <div class="label-floating">
    <input type="text" placeholder="Extra Small" class="input input-xs" />
    <span>Extra Small</span>
  </div>
  <div class="label-floating">
    <input type="text" placeholder="Small" class="input input-sm" />
    <span>Small</span>
  </div>
  <div class="label-floating">
    <input type="text" placeholder="Medium" class="input input-md" />
    <span>Medium</span>
  </div>
  <div class="label-floating">
    <input type="text" placeholder="Large" class="input input-lg" />
    <span>Large</span>
  </div>
  <div class="label-floating">
    <input type="text" placeholder="Extra Large" class="input input-xl" />
    <span>Extra Large</span>
  </div>
</div>

```html
<div class="$$label-floating">
  <input type="text" placeholder="" class="$$input $$input-xs" />
  <span>Extra Small</span>
</div>
<div class="$$label-floating">
  <input type="text" placeholder="" class="$$input $$input-sm" />
  <span>Small</span>
</div>
<div class="$$label-floating">
  <input type="text" placeholder="" class="$$input $$input-md" />
  <span>Medium</span>
</div>
<div class="$$label-floating">
  <input type="text" placeholder="" class="$$input $$input-lg" />
  <span>Large</span>
</div>
<div class="$$label-floating">
  <input type="text" placeholder="" class="$$input $$input-xl" />
  <span>Extra Large</span>
</div>
```
