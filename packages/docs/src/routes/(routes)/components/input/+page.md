---
alert: This page is not up to date. Some of the examples might not work as expected.
title: Text Input
desc: Text Input is a simple input field.
layout: components
classnames:
  component:
  - class: input
    desc: For <input> tag or a wrapper of <input> tag
  style:
  - class: input-ghost
    desc: ghost style
  color:
  - class: input-primary
    desc: primary color
  - class: input-secondary
    desc: secondary color
  - class: input-accent
    desc: accent color
  - class: input-info
    desc: info color
  - class: input-success
    desc: success color
  - class: input-warning
    desc: warning color
  - class: input-error
    desc: error color
  size:
  - class: input-xs
    desc: Extra small size
  - class: input-sm
    desc: Small size
  - class: input-md
    desc: Medium size (default)
  - class: input-lg
    desc: Large size
  - class: input-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~Text input
<input type="text" placeholder="Type here" class="input w-full max-w-xs" />

```html
<input type="text" placeholder="Type here" class="$$input w-full max-w-xs" />
```


### ~Text input with border
<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

```html
<input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs" />
```


### ~Text input with icon inside
#### We can use input class for the parent and put anything inside it

<div class="flex flex-col gap-4">
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    <input type="text" class="grow" placeholder="Email" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    <input type="text" class="grow" placeholder="Username" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
    <input type="password" class="grow" value="password" />
  </label>
</div>

```html
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clip-rule="evenodd" />
  </svg>
</label>
<label class="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" class="grow" placeholder="Email" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" class="grow" placeholder="Username" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clip-rule="evenodd" />
  </svg>
  <input type="password" class="grow" value="password" />
</label>
```


### ~Text input with text label inside
#### We can use input class for the parent and put anything inside it

<div class="flex flex-col gap-4">
  <label class="input input-bordered flex items-center gap-2">
    Name
    <input type="text" class="grow" placeholder="Daisy" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Email
    <input type="text" class="grow" placeholder="daisy@site.com" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <kbd class="kbd kbd-sm">⌘</kbd>
    <kbd class="kbd kbd-sm">K</kbd>
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <span class="badge badge-info">Optional</span>
  </label>
</div>

```html
<label class="input input-bordered flex items-center gap-2">
  Name
  <input type="text" class="grow" placeholder="Daisy" />
</label>
<label class="input input-bordered flex items-center gap-2">
  Email
  <input type="text" class="grow" placeholder="daisy@site.com" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <kbd class="kbd kbd-sm">⌘</kbd>
  <kbd class="kbd kbd-sm">K</kbd>
</label>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <span class="badge badge-info">Optional</span>
</label>
```


### ~Ghost (no background)
<input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" />

```html
<input type="text" placeholder="Type here" class="$$input $$input-ghost w-full max-w-xs" />
```


### ~With form-control and labels
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Bottom Left label</span>
    <span class="label-text-alt">Bottom Right label</span>
  </div>
</label>

```html
<label class="$$form-control w-full max-w-xs">
  <div class="$$label">
    <span class="$$label-text">What is your name?</span>
    <span class="$$label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="$$input $$input-bordered w-full max-w-xs" />
  <div class="$$label">
    <span class="$$label-text-alt">Bottom Left label</span>
    <span class="$$label-text-alt">Bottom Right label</span>
  </div>
</label>
```


### ~Primary color
<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-primary w-full max-w-xs" />
```


### ~Secondary color
<input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-secondary w-full max-w-xs" />
```


### ~Accent color
<input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-accent w-full max-w-xs" />
```


### ~Info color
<input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-info w-full max-w-xs" />
```


### ~Success color
<input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-success w-full max-w-xs" />
```


### ~Warning color
<input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-warning w-full max-w-xs" />
```


### ~Error color
<input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs" />

```html
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-error w-full max-w-xs" />
```


### ~Sizes
<div class="flex flex-col gap-4 w-full items-center">
  <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
  <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
  <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" />
  <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />
</div>

```html
<!-- xs -->
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-xs w-full max-w-xs" />
<!-- sm -->
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-sm w-full max-w-xs" />
<!-- md -->
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-md w-full max-w-xs" />
<!-- lg -->
<input
  type="text"
  placeholder="Type here"
  class="$$input $$input-bordered $$input-lg w-full max-w-xs" />
```


### ~Disabled
<input type="text" placeholder="You can't touch this" class="input input-bordered w-full max-w-xs" disabled />

```html
<input
  type="text"
  placeholder="You can't touch this"
  class="$$input $$input-bordered w-full max-w-xs"
  disabled />
```
