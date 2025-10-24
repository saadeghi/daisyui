---
title: Accordion
desc: Accordion is used for showing and hiding content but only one item can stay open at a time.
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
> Accordion uses the same style as the [collapse component](/components/collapse/) but it works with radio inputs or details elements. You can control which item to be open by checking/unchecking the hidden radio input or setting the open attribute on details element.

> :INFO:
>
> All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs or details elements on each set.

> :INFO:
>
> If you want the collapsed content to be searcheable in browser use the [Accordion using details](#accordion-using-details)


### ~Accordion using radio inputs
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>

```html
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```


### ~Accordion using details
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
  <summary class="collapse-title font-semibold">How do I create an account?</summary>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</details>
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="collapse-title font-semibold">I forgot my password. What should I do?</summary>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</details>
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="collapse-title font-semibold">How do I update my profile information?</summary>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</details>

```html
<details class="$$collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
  <summary class="$$collapse-title font-semibold">How do I create an account?</summary>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</details>
<details class="$$collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="$$collapse-title font-semibold">I forgot my password. What should I do?</summary>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</details>
<details class="$$collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="$$collapse-title font-semibold">How do I update my profile information?</summary>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</details>
```


### ~Accordion with arrow icon
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>

```html
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```


### ~Accordion with plus/minus icon
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>

```html
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```


### ~Using Accordion and Join together
#### to join the items together and handle border radius automatically

<div class="join join-vertical bg-base-100">
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="collapse-title font-semibold">How do I create an account?</div>
    <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">How do I update my profile information?</div>
    <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>

```html
<div class="$$join $$join-vertical bg-base-100">
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="$$collapse-title font-semibold">How do I create an account?</div>
    <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
    <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>
```
