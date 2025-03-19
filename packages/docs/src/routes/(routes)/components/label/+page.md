---
title: Label
desc: Label is used to provide a name or title for an input field. Label can be placed before or after the field.
layout: components
classnames:
  component:
  - class: label
    desc: For styling the text next to an input field (or select)
  - class: floating-label
    desc: For the parent of an input field (or select) and a span that floats above the input field when the field is focused
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
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
<label class="floating-label w-full max-w-xs">
  <span>Your Email</span>
  <input type="email" placeholder="mail@site.com" class="input input-md" />
</label>

```html
<label class="$$floating-label">
  <span>Your Email</span>
  <input type="text" placeholder="mail@site.com" class="$$input $$input-md" />
</label>
```

### ~Floating Label with Different Sizes
<div class="grid gap-4 w-xs">
  <label class="floating-label">
    <input type="text" placeholder="Extra Small" class="input input-xs" />
    <span>Extra Small</span>
  </label>
  <label class="floating-label">
    <input type="text" placeholder="Small" class="input input-sm" />
    <span>Small</span>
  </label>
  <label class="floating-label">
    <input type="text" placeholder="Medium" class="input input-md" />
    <span>Medium</span>
  </label>
  <label class="floating-label">
    <input type="text" placeholder="Large" class="input input-lg" />
    <span>Large</span>
  </label>
  <label class="floating-label">
    <input type="text" placeholder="Extra Large" class="input input-xl" />
    <span>Extra Large</span>
  </label>
</div>

```html
<label class="$$floating-label">
  <input type="text" placeholder="Extra Small" class="$$input $$input-xs" />
  <span>Extra Small</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Small" class="$$input $$input-sm" />
  <span>Small</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Medium" class="$$input $$input-md" />
  <span>Medium</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Large" class="$$input $$input-lg" />
  <span>Large</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Extra Large" class="$$input $$input-xl" />
  <span>Extra Large</span>
</label>
```
