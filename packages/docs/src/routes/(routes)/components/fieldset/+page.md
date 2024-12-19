---
title: Fieldset
desc: Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and fieldset-label as a description.
layout: components
classnames:
  component:
  - class: fieldset
    desc: for the fieldset container
  part:
  - class: fieldset-legend
    desc: for the title of the fieldset
  - class: fieldset-label
    desc: for the description of the fieldset
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Fieldset fieldset-legend and fieldset-label
<fieldset class="fieldset w-xs">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="fieldset-label">You can edit page title later on from settings</p>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$fieldset-label">You can edit page title later on from settings</p>
</fieldset>
```

### ~Fieldset with background and border
<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="fieldset-label">You can edit page title later on from settings</p>
</fieldset>

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$fieldset-label">You can edit page title later on from settings</p>
</fieldset>
```

### ~Fieldset with multiple inputs
<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Page details</legend>
  <label class="fieldset-label">Title</label>
  <input type="text" class="input" placeholder="My awesome page" />
  <label class="fieldset-label">Slug</label>
  <input type="text" class="input" placeholder="my-awesome-page" />
  <label class="fieldset-label">Author</label>
  <input type="text" class="input" placeholder="Name" />
</fieldset>

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Page details</legend>
  
  <label class="$$fieldset-label">Title</label>
  <input type="text" class="$$input" placeholder="My awesome page" />
  
  <label class="$$fieldset-label">Slug</label>
  <input type="text" class="$$input" placeholder="my-awesome-page" />
  
  <label class="$$fieldset-label">Author</label>
  <input type="text" class="$$input" placeholder="Name" />
</fieldset>
```

### ~Login form with fieldset
<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Login</legend>
  <label class="fieldset-label">Email</label>
  <input type="email" class="input" placeholder="Email" />
  <label class="fieldset-label">Password</label>
  <input type="password" class="input" placeholder="Password" />
  <button class="btn btn-neutral mt-4">Login</button>
</fieldset>

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Login</legend>
  
  <label class="$$fieldset-label">Email</label>
  <input type="email" class="$$input" placeholder="Email" />
  
  <label class="$$fieldset-label">Password</label>
  <input type="password" class="$$input" placeholder="Password" />
  
  <button class="$$btn $$btn-neutral mt-4">Login</button>
</fieldset>
```
