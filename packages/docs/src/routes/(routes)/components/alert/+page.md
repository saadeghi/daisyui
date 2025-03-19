---
title: Alert
desc: Alert informs users about important events.
layout: components
classnames:
  component:
  - class: alert
    desc: Container element
  style:
  - class: alert-outline
    desc: outline style
  - class: alert-dash
    desc: dash outline style
  - class: alert-soft
    desc: soft style
  color:
  - class: alert-info
    desc: info color
  - class: alert-success
    desc: success color
  - class: alert-warning
    desc: warning color
  - class: alert-error
    desc: error color
  direction:
  - class: alert-vertical
    desc: Vertical layout, good for mobile
  - class: alert-horizontal
    desc: Horizontal layout, good for desktop
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Alert
<div role="alert" class="alert w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>12 unread messages. Tap to see.</span>
</div>

```html
<div role="alert" class="$$alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>12 unread messages. Tap to see.</span>
</div>
```


### ~Info color
<div role="alert" class="alert w-full alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>New software update available.</span>
</div>

```html
<div role="alert" class="$$alert $$alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>New software update available.</span>
</div>
```


### ~Success color
<div role="alert" class="alert w-full alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</div>

```html
<div role="alert" class="$$alert $$alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>
```


### ~Warning color
<div role="alert" class="alert w-full alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Warning: Invalid email address!</span>
</div>

```html
<div role="alert" class="$$alert $$alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: Invalid email address!</span>
</div>
```


### ~Error color
<div role="alert" class="alert w-full alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Task failed successfully.</span>
</div>

```html
<div role="alert" class="$$alert $$alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Task failed successfully.</span>
</div>
```

### ~Alert soft style
<div role="alert" class="alert w-full alert-info alert-soft">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert w-full alert-success alert-soft">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert w-full alert-warning alert-soft">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert w-full alert-error alert-soft">
  <span>Error! Task failed successfully.</span>
</div>


```html
<div role="alert" class="$$alert $$alert-info $$alert-soft">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-soft">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-soft">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-soft">
  <span>Error! Task failed successfully.</span>
</div>
```


### ~Alert outline style
<div role="alert" class="alert w-full alert-info alert-outline">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert w-full alert-success alert-outline">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert w-full alert-warning alert-outline">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert w-full alert-error alert-outline">
  <span>Error! Task failed successfully.</span>
</div>

```html
<div role="alert" class="$$alert $$alert-info $$alert-outline">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-outline">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-outline">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-outline">
  <span>Error! Task failed successfully.</span>
</div>
```


### ~Alert dash style
<div role="alert" class="alert w-full alert-info alert-dash">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert w-full alert-success alert-dash">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert w-full alert-warning alert-dash">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert w-full alert-error alert-dash">
  <span>Error! Task failed successfully.</span>
</div>

```html
<div role="alert" class="$$alert $$alert-info $$alert-dash">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-dash">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-dash">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-dash">
  <span>Error! Task failed successfully.</span>
</div>
```


### ~Alert with buttons + responsive
<div role="alert" class="alert w-full alert-vertical sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button class="btn btn-sm">Deny</button>
    <button class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>

```html
<div role="alert" class="$$alert $$alert-vertical sm:$$alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button class="$$btn $$btn-sm">Deny</button>
    <button class="$$btn $$btn-sm $$btn-primary">Accept</button>
  </div>
</div>
```


### ~Alert with title and description
<div role="alert" class="alert w-full alert-vertical sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>
    <h3 class="font-bold">New message!</h3>
    <div class="text-xs">You have 1 unread message</div>
  </div>
  <button class="btn btn-sm">See</button>
</div>

```html
<div role="alert" class="$$alert $$alert-vertical sm:$$alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 class="font-bold">New message!</h3>
    <div class="text-xs">You have 1 unread message</div>
  </div>
  <button class="$$btn $$btn-sm">See</button>
</div>
```
