---
title: Theme Controller
desc: If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.
layout: components
classnames:
  component:
  - class: theme-controller
    desc: For a checkbox or radio input that must change the page theme
browserSupport:
  chrome: 105
  firefox: 121
  safari: 15.4
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"

  let checkbox = false
  let radio = 'default'
</script>

> :INFO:
>
> Theme Controller changes the theme using CSS only.  
> You can then use JS to save the input state in the server or localStorage if you want it to persist on page refresh.  
> Here's a React example to save checkbox state in local storage: [Stackblitz](https://stackblitz.com/edit/react-checkbox-localstorage?file=src%2FApp.js)

### ~Theme Controller using a toggle
<input type="checkbox" value="synthwave" bind:checked={checkbox} class="toggle theme-controller"/>

```html
<input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
```


### ~Theme Controller using a checkbox
<input type="checkbox" value="synthwave" bind:checked={checkbox} class="checkbox theme-controller"/>

```html
<input type="checkbox" value="synthwave" class="$$checkbox $$theme-controller" />
```


### ~Theme Controller using a swap
<label class="swap swap-rotate">

  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" bind:checked={checkbox} value="synthwave" class="theme-controller" />

  <!-- sun icon -->
  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

  <!-- moon icon -->
  <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

</label>

```html
<label class="$$swap $$swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="$$theme-controller" value="synthwave" />

  <!-- sun icon -->
  <svg
    class="$$swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <!-- moon icon -->
  <svg
    class="$$swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
```


### ~Theme Controller using a toggle with text
<label class="flex cursor-pointer gap-2">
  <span class="label-text">Default</span>
  <input type="checkbox" value="synthwave" bind:checked={checkbox} class="toggle theme-controller"/>
  <span class="label-text">Synthwave</span>
</label>

```html
<label class="flex cursor-pointer gap-2">
  <span class="$$label-text">Current</span>
  <input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
  <span class="$$label-text">Synthwave</span>
</label>
```


### ~Theme Controller using a toggle with icons
<label class="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" bind:checked={checkbox} class="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

```html
<label class="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
```


### ~Theme Controller using a toggle with icons inside
<label class="toggle text-base-content">
  <input type="checkbox" value="synthwave" bind:checked={checkbox} class="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>

```html
<label class="$$toggle text-base-content">
  <input type="checkbox" value="synthwave" class="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
```


### ~Theme Controller using a toggle with custom colors
<input type="checkbox" value="synthwave" bind:checked={checkbox} class="toggle theme-controller bg-blue-600 text-blue-200 border-blue-700 checked:bg-yellow-100 checked:text-yellow-600 checked:border-yellow-400"/>

```html
<input
  type="checkbox"
  value="synthwave"
  class="$$toggle $$theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
```


### ~Theme Controller using a radio input
<fieldset class="fieldset">
  <label class="flex gap-2 cursor-pointer items-center">
    <input bind:group={radio} type="radio" name="theme-radios" class="radio radio-sm theme-controller" value="default"/>
    Default
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input bind:group={radio} type="radio" name="theme-radios" class="radio radio-sm theme-controller" value="retro"/>
    Retro
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input bind:group={radio} type="radio" name="theme-radios" class="radio radio-sm theme-controller" value="cyberpunk"/>
    Cyberpunk
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input bind:group={radio} type="radio" name="theme-radios" class="radio radio-sm theme-controller" value="valentine"/>
    Valentine
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input bind:group={radio} type="radio" name="theme-radios" class="radio radio-sm theme-controller" value="aqua"/>
    Aqua
  </label>
</fieldset>

```html
<fieldset class="$$fieldset">
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="default"/>
    Default
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="retro"/>
    Retro
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="cyberpunk"/>
    Cyberpunk
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="valentine"/>
    Valentine
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="aqua"/>
    Aqua
  </label>
</fieldset>
```


### ~Theme Controller using a radio button
<div class="join join-vertical">
  <input bind:group={radio} type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Default" value="default"/>
  <input bind:group={radio} type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Retro" value="retro"/>
  <input bind:group={radio} type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Cyberpunk" value="cyberpunk"/>
  <input bind:group={radio} type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Valentine" value="valentine"/>
  <input bind:group={radio} type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Aqua" value="aqua"/>
</div>

```html
<div class="$$join $$join-vertical">
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Default"
    value="default" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Retro"
    value="retro" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Cyberpunk"
    value="cyberpunk" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Valentine"
    value="valentine" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Aqua"
    value="aqua" />
</div>
```


### ~Theme Controller using a dropdown
<div class="dropdown mb-72">
  <div tabindex="0" role="button" class="btn m-1">
    Theme
    <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabindex="0" class="dropdown-content z-1 p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input bind:group={radio} type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block justify-start btn-ghost" aria-label="Default" value="default"/></li>
    <li><input bind:group={radio} type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block justify-start btn-ghost" aria-label="Retro" value="retro"/></li>
    <li><input bind:group={radio} type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block justify-start btn-ghost" aria-label="Cyberpunk" value="cyberpunk"/></li>
    <li><input bind:group={radio} type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block justify-start btn-ghost" aria-label="Valentine" value="valentine"/></li>
    <li><input bind:group={radio} type="radio" name="theme-dropdown" class="theme-controller w-full btn btn-sm btn-block justify-start btn-ghost" aria-label="Aqua" value="aqua"/></li>
  </ul>
</div>

```html
<div class="$$dropdown mb-72">
  <div tabindex="0" role="button" class="$$btn m-1">
    Theme
    <svg
      width="12px"
      height="12px"
      class="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabindex="0" class="$$dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Retro"
        value="retro" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Cyberpunk"
        value="cyberpunk" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Valentine"
        value="valentine" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua" />
    </li>
  </ul>
</div>
```
