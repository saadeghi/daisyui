---
title: Fieldset
desc: Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and label as a description.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/fieldset.css
layout: components
classnames:
  component:
    - class: fieldset
      desc: for the fieldset container
    - class: label
      desc: label for inputs
  part:
    - class: fieldset-legend
      desc: for the title of the fieldset
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Fieldset fieldset-legend and label

<fieldset class="fieldset w-xs">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="label">You can edit page title later on from settings</p>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$label">You can edit page title later on from settings</p>
</fieldset>
```

### ~Fieldset with background and border

<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="label">You can edit page title later on from settings</p>
</fieldset>

```html
<fieldset class="$$fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$label">You can edit page title later on from settings</p>
</fieldset>
```

### ~Fieldset with multiple inputs

<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Page details</legend>
 
  <label for="title" class="label">Title</label>
  <input type="text" id="title" class="input" placeholder="My awesome page" />

  <label for="slug" class="label">Slug</label>
  <input type="text" id="slug" class="input" placeholder="my-awesome-page" />

  <label for="author" class="label">Author</label>
  <input type="text" id="author" class="input" placeholder="Name" />
</fieldset>

```html
<fieldset class="$$fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="$$fieldset-legend">Page details</legend>

  <label for="title" class="$$label">Title</label>
  <input type="text" id="title" class="$$input" placeholder="My awesome page" />

  <label for="slug" class="$$label">Slug</label>
  <input type="text" id="slug" class="$$input" placeholder="my-awesome-page" />

  <label for="author" class="$$label">Author</label>
  <input type="text" id="author" class="$$input" placeholder="Name" />
</fieldset>
```

### ~Fieldset with multiple join items

<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Settings</legend>
  <div class="join">
    <input type="text" class="input join-item" placeholder="Product name" />
    <button class="btn join-item">save</button>
  </div>
</fieldset>

```html
<fieldset class="$$fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="$$fieldset-legend">Settings</legend>
  <div class="$$join">
    <input type="text" class="$$input $$join-item" placeholder="Product name" />
    <button class="$$btn $$join-item">save</button>
  </div>
</fieldset>
```

### ~Login form with fieldset

<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="fieldset-legend">Login</legend>

  <label for="email" class="label">Email</label>
  <input type="email" id="email" class="input" placeholder="Email" />

  <label for="password" class="label">Password</label>
  <input type="password" id="password" class="input" placeholder="Password" />

  <button class="btn btn-neutral mt-4">Login</button>
</fieldset>

```html
<fieldset class="$$fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="$$fieldset-legend">Login</legend>

  <label for="email" class="$$label">Email</label>
  <input type="email" id="email" class="$$input" placeholder="Email" />

  <label for="password" class="$$label">Password</label>
  <input type="password" id="password" class="$$input" placeholder="Password" />

  <button class="$$btn $$btn-neutral mt-4">Login</button>
</fieldset>
```
