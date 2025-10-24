---
title: Collapse
desc: Collapse is used for showing and hiding content.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/collapse.css
layout: components
classnames:
  component:
    - class: collapse
      desc: Collapse
  part:
    - class: collapse-title
      desc: Title part
    - class: collapse-content
      desc: Content part
  modifier:
    - class: collapse-arrow
      desc: Adds arrow icon
    - class: collapse-plus
      desc: Adds plus/minus icon
    - class: collapse-open
      desc: Force open
    - class: collapse-close
      desc: Force close
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> Also see [accordion](/components/accordion/) examples

> :INFO:
>
> If you want the collapsed content to be searcheable in browser use the [Collapse using details and summary tag](#-collapse-using-details-and-summary-tag)

### ~Collapse with focus

#### This collapse works with focus. When div loses focus, it gets closed

<div tabindex="0" class="collapse bg-base-100 border border-base-300">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Collapse with checkbox

#### This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.

<div class="collapse bg-base-100 border border-base-300">
  <input type="checkbox" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div class="$$collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~ Collapse using details and summary tag

#### collapse-open and collapse-close doesn't work with this method. You can add/remove open attribute to the details instead

<details class="collapse bg-base-100 border border-base-300">
  <summary class="collapse-title font-semibold">How do I create an account?</summary>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</details>

```html
<details class="$$collapse bg-base-100 border-base-300 border">
  <summary class="$$collapse-title font-semibold">How do I create an account?</summary>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</details>
```

### ~Without border and background color

<div tabindex="0" class="collapse">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~With arrow icon

<div tabindex="0" class="collapse bg-base-100 border border-base-300 collapse-arrow">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse $$collapse-arrow bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~With arrow plus/minus icon

<div tabindex="0" class="collapse bg-base-100 border border-base-300 collapse-plus">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse $$collapse-plus bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Moving collapse icon to the start
#### We can move the icon using utility classes like `after:start-5 after:end-auto` and we can customize the padding like `pe-4 ps-12`

<div tabindex="0" class="collapse bg-base-100 border border-base-300 collapse-arrow">
  <div class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse $$collapse-arrow bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Force open

<div tabindex="0" class="collapse collapse-open bg-base-100 border border-base-300">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse $$collapse-open bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">I have collapse-open class</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Force close

<div tabindex="0" class="collapse collapse-close bg-base-100 border border-base-300">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div tabindex="0" class="$$collapse $$collapse-close bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">I have collapse-open class</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Custom colors for collapse that works with focus

#### Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused

<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

```html
<div
  tabindex="0"
  class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content $$collapse"
>
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### ~Custom colors for collapse that works with checkbox

#### Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked

<div class="collapse bg-base-100 border border-base-300">
  <input type="checkbox" class="peer" />
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    How do I create an account?
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>

```html
<div class="bg-base-100 border-base-300 $$collapse border">
  <input type="checkbox" class="peer" />
  <div
    class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    How do I create an account?
  </div>
  <div
    class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
