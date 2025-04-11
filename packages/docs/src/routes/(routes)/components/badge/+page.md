---
title: Badge
desc: Badges are used to inform the user of the status of specific data.
layout: components
classnames:
  component:
  - class: badge
    desc: Container element
  style:
  - class: badge-outline
    desc: outline style
  - class: badge-dash
    desc: dash outline style
  - class: badge-soft
    desc: soft style
  - class: badge-ghost
    desc: ghost style
  color:
  - class: badge-neutral
    desc: neutral color
  - class: badge-primary
    desc: primary color
  - class: badge-secondary
    desc: secondary color
  - class: badge-accent
    desc: accent color
  - class: badge-info
    desc: info color
  - class: badge-success
    desc: success color
  - class: badge-warning
    desc: warning color
  - class: badge-error
    desc: error color
  size:
  - class: badge-xs
    desc: extra small size
  - class: badge-sm
    desc: small size
  - class: badge-md
    desc: medium size (default)
  - class: badge-lg
    desc: large size
  - class: badge-xl
    desc: extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Badge
<span class="badge">Badge</span>

```html
<span class="$$badge">Badge</span>
```

### ~Badge sizes
<div class="badge badge-xs">Xsmall</div>
<div class="badge badge-sm">Small</div>
<div class="badge badge-md">Medium</div>
<div class="badge badge-lg">Large</div>
<div class="badge badge-xl">Xlarge</div>

```html
<div class="$$badge $$badge-xs">Xsmall</div>
<div class="$$badge $$badge-sm">Small</div>
<div class="$$badge $$badge-md">Medium</div>
<div class="$$badge $$badge-lg">Large</div>
<div class="$$badge $$badge-xl">Xlarge</div>
```

### ~Badge with colors
<div class="badge badge-primary">Primary</div>
<div class="badge badge-secondary">Secondary</div>
<div class="badge badge-accent">Accent</div>
<div class="badge badge-neutral">Neutral</div>
<div class="badge badge-info">Info</div>
<div class="badge badge-success">Success</div>
<div class="badge badge-warning">Warning</div>
<div class="badge badge-error">Error</div>

```html
<div class="$$badge $$badge-primary">Primary</div>
<div class="$$badge $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-accent">Accent</div>
<div class="$$badge $$badge-neutral">Neutral</div>
<div class="$$badge $$badge-info">Info</div>
<div class="$$badge $$badge-success">Success</div>
<div class="$$badge $$badge-warning">Warning</div>
<div class="$$badge $$badge-error">Error</div>
```

### ~Badge with soft style
<div class="badge badge-soft badge-primary">Primary</div>
<div class="badge badge-soft badge-secondary">Secondary</div>
<div class="badge badge-soft badge-accent">Accent</div>
<div class="badge badge-soft badge-info">Info</div>
<div class="badge badge-soft badge-success">Success</div>
<div class="badge badge-soft badge-warning">Warning</div>
<div class="badge badge-soft badge-error">Error</div>

```html
<div class="$$badge $$badge-soft $$badge-primary">Primary</div>
<div class="$$badge $$badge-soft $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-soft $$badge-accent">Accent</div>
<div class="$$badge $$badge-soft $$badge-info">Info</div>
<div class="$$badge $$badge-soft $$badge-success">Success</div>
<div class="$$badge $$badge-soft $$badge-warning">Warning</div>
<div class="$$badge $$badge-soft $$badge-error">Error</div>
```

### ~Badge with outline style
<div class="badge badge-outline badge-primary">Primary</div>
<div class="badge badge-outline badge-secondary">Secondary</div>
<div class="badge badge-outline badge-accent">Accent</div>
<div class="badge badge-outline badge-info">Info</div>
<div class="badge badge-outline badge-success">Success</div>
<div class="badge badge-outline badge-warning">Warning</div>
<div class="badge badge-outline badge-error">Error</div>

```html
<div class="$$badge $$badge-outline $$badge-primary">Primary</div>
<div class="$$badge $$badge-outline $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-outline $$badge-accent">Accent</div>
<div class="$$badge $$badge-outline $$badge-info">Info</div>
<div class="$$badge $$badge-outline $$badge-success">Success</div>
<div class="$$badge $$badge-outline $$badge-warning">Warning</div>
<div class="$$badge $$badge-outline $$badge-error">Error</div>
```


### ~Badge with dash style
<div class="badge badge-dash badge-primary">Primary</div>
<div class="badge badge-dash badge-secondary">Secondary</div>
<div class="badge badge-dash badge-accent">Accent</div>
<div class="badge badge-dash badge-info">Info</div>
<div class="badge badge-dash badge-success">Success</div>
<div class="badge badge-dash badge-warning">Warning</div>
<div class="badge badge-dash badge-error">Error</div>

```html
<div class="$$badge $$badge-dash $$badge-primary">Primary</div>
<div class="$$badge $$badge-dash $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-dash $$badge-accent">Accent</div>
<div class="$$badge $$badge-dash $$badge-info">Info</div>
<div class="$$badge $$badge-dash $$badge-success">Success</div>
<div class="$$badge $$badge-dash $$badge-warning">Warning</div>
<div class="$$badge $$badge-dash $$badge-error">Error</div>
```

### ~neutral badge with outline or dash style
#### These badges use dark text, only use them on light backgrounds
<div class="bg-white p-6 w-full lg:-my-6 rounded-box flex gap-2 justify-center">
  <div class="badge badge-neutral badge-outline">Outline</div>
  <div class="badge badge-neutral badge-dash">Dash</div>
</div>

```html
<div class="bg-white p-6">
  <div class="$$badge $$badge-neutral $$badge-outline">Outline</div>
  <div class="$$badge $$badge-neutral $$badge-dash">Dash</div>
</div>
```

### ~Badge ghost
<div class="badge badge-ghost">ghost</div>

```html
<div class="$$badge $$badge-ghost">ghost</div>
```

### ~Empty badge
<div class="badge badge-primary badge-lg"></div>
<div class="badge badge-primary badge-md"></div>
<div class="badge badge-primary badge-sm"></div>
<div class="badge badge-primary badge-xs"></div>

```html
<div class="$$badge $$badge-primary $$badge-lg"></div>
<div class="$$badge $$badge-primary $$badge-md"></div>
<div class="$$badge $$badge-primary $$badge-sm"></div>
<div class="$$badge $$badge-primary $$badge-xs"></div>
```


### ~Badge with icon
<div class="badge badge-info">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg>
  Info
</div>
<div class="badge badge-success">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg>
  Success
</div>
<div class="badge badge-warning">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
  Warning
</div>
<div class="badge badge-error">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)" fill="currentColor" stroke-width="0"></rect><path d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z" stroke-width="0" fill="currentColor"></path></g></svg>
  Error
</div>

```html
<div class="$$badge $$badge-info">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg>
  Info
</div>
<div class="$$badge $$badge-success">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg>
  Success
</div>
<div class="$$badge $$badge-warning">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
  Warning
</div>
<div class="$$badge $$badge-error">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)" fill="currentColor" stroke-width="0"></rect><path d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z" stroke-width="0" fill="currentColor"></path></g></svg>
  Error
</div>
```


### ~Badge in a text
<div class="grid">
  <span class="text-xl font-semibold">
    Heading 1
    <span class="badge badge-xl">Badge</span>
  </span>
  <span class="text-lg font-semibold">
    Heading 2
    <span class="badge badge-lg">Badge</span>
  </span>
  <span class="text-base font-semibold">
    Heading 3
    <span class="badge badge-md">Badge</span>
  </span>
  <span class="text-sm font-semibold">
    Heading 4
    <span class="badge badge-sm">Badge</span>
  </span>
  <span class="text-xs font-semibold">
    Heading 5
    <span class="badge badge-xs">Badge</span>
  </span>
  <p class="text-xs">
    Paragraph
    <span class="badge badge-xs">Badge</span>
  </p>
</div>

```html
<h1 class="text-xl font-semibold">
  Heading 1 <span class="$$badge $$badge-xl">Badge</span>
</h1>

<h2 class="text-lg font-semibold">
  Heading 2 <span class="$$badge $$badge-lg">Badge</span>
</h2>

<h3 class="text-base font-semibold">
  Heading 3 <span class="$$badge $$badge-md">Badge</span>
</h3>

<h4 class="text-sm font-semibold">
  Heading 4 <span class="$$badge $$badge-sm">Badge</span>
</h4>

<h5 class="text-xs font-semibold">
  Heading 5 <span class="$$badge $$badge-xs">Badge</span>
</h5>

<p class="text-xs">
  Paragraph <span class="$$badge $$badge-xs">Badge</span>
</p>
```


### ~Badge in a button
<button class="btn">
  Inbox
  <div class="badge badge-sm">+99</div>
</button>
<button class="btn">
  Inbox
  <div class="badge badge-sm badge-secondary">+99</div>
</button>

```html
<button class="$$btn">
  Inbox <div class="$$badge $$badge-sm">+99</div>
</button>

<button class="$$btn">
  Inbox <div class="$$badge $$badge-sm $$badge-secondary">+99</div>
</button>
```
