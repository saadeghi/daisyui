---
title: Text Input
desc: Text Input is a simple input field.
layout: components
classnames:
  component:
  - class: input
    desc: For <input type="text"> tag or a wrapper of <input type="text"> tag
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
<input type="text" placeholder="Type here" class="input" />

```html
<input type="text" placeholder="Type here" class="$$input" />
```

### ~Text input with icon inside
#### We can use input class for the parent and put anything inside it

<div class="grid gap-4 w-xs">
  <label class="input">
    <input type="text" class="grow" placeholder="Search" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
  </label>
  <label class="input">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    <input type="text" class="grow" placeholder="Email" />
  </label>
  <label class="input">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    <input type="text" class="grow" placeholder="Username" />
  </label>
  <label class="input">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
    <input type="password" class="grow" value="password" />
  </label>
</div>

```html
<label class="$$input">
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
<label class="$$input">
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
<label class="$$input">
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
<label class="$$input">
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

<div class="grid gap-4 w-xs">
  <label class="input">
    Name
    <input type="text" class="grow" placeholder="Daisy" />
  </label>
  <label class="input">
    Email
    <input type="text" class="grow" placeholder="daisy@site.com" />
  </label>
  <label class="input">
    <input type="text" class="grow" placeholder="Search" />
    <kbd class="kbd kbd-sm">⌘</kbd>
    <kbd class="kbd kbd-sm">K</kbd>
  </label>
  <label class="input">
    <input type="text" class="grow" placeholder="Search" />
    <span class="badge badge-info badge-xs">Optional</span>
  </label>
</div>

```html
<label class="$$input">
  Name
  <input type="text" class="grow" placeholder="Daisy" />
</label>
<label class="$$input">
  Email
  <input type="text" class="grow" placeholder="daisy@site.com" />
</label>
<label class="$$input">
  <input type="text" class="grow" placeholder="Search" />
  <kbd class="$$kbd $$kbd-sm">⌘</kbd>
  <kbd class="$$kbd $$kbd-sm">K</kbd>
</label>
<label class="$$input">
  <input type="text" class="grow" placeholder="Search" />
  <span class="$$badge $$badge-info $$badge-xs">Optional</span>
</label>
```


### ~Ghost (no background)
<input type="text" placeholder="Type here" class="input input-ghost" />

```html
<input type="text" placeholder="Type here" class="$$input $$input-ghost" />
```


### ~With fieldset and fieldset-legend
<fieldset class="fieldset w-xs">
  <legend class="fieldset-legend">What is your name?</legend>
  <input type="text" class="input" placeholder="Type here" />
  <div class="fieldset-label">Optional</div>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">What is your name?</legend>
  <input type="text" class="$$input" placeholder="Type here" />
  <div class="$$fieldset-label">Optional</div>
</fieldset>
```


### ~Input colors
<div class="grid gap-4 w-xs">
  <input type="text" placeholder="Primary" class="input input-primary" />
  <input type="text" placeholder="Secondary" class="input input-secondary" />
  <input type="text" placeholder="Accent" class="input input-accent" />
  <input type="text" placeholder="Info" class="input input-info" />
  <input type="text" placeholder="Success" class="input input-success" />
  <input type="text" placeholder="Warning" class="input input-warning" />
  <input type="text" placeholder="Error" class="input input-error" />
</div>

```html
<input type="text" placeholder="Primary" class="$$input $$input-primary" />
<input type="text" placeholder="Secondary" class="$$input $$input-secondary" />
<input type="text" placeholder="Accent" class="$$input $$input-accent" />
<input type="text" placeholder="Info" class="$$input $$input-info" />
<input type="text" placeholder="Success" class="$$input $$input-success" />
<input type="text" placeholder="Warning" class="$$input $$input-warning" />
<input type="text" placeholder="Error" class="$$input $$input-error" />
```

### ~Sizes
<div class="grid gap-4 w-xs">
  <input type="text" placeholder="Xsmall" class="input input-xs" />
  <input type="text" placeholder="Small" class="input input-sm" />
  <input type="text" placeholder="Medium" class="input input-md" />
  <input type="text" placeholder="Large" class="input input-lg" />
  <input type="text" placeholder="Xlarge" class="input input-xl" />
</div>

```html
<input type="text" placeholder="Xsmall" class="$$input $$input-xs" />

<input type="text" placeholder="Small" class="$$input $$input-sm" />

<input type="text" placeholder="Medium" class="$$input $$input-md" />

<input type="text" placeholder="Large" class="$$input $$input-lg" />

<input type="text" placeholder="Xlarge" class="$$input $$input-xl" />
```


### ~Disabled
<input type="text" placeholder="You can't touch this" class="input" disabled />

```html
<input type="text" placeholder="You can't touch this" class="$$input" disabled />
```
