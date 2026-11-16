---
title: Calendar
desc: Calendar integrations with daisyUI themes.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/calendar.css
layout: components
classnames:
  component:
    - class: "cally"
      desc: for Cally web component
    - class: "react-day-picker"
      desc: for the DayPicker component
    - class: "vc"
      desc: for Vanilla Calendar Pro
---

<script>
  import { onMount } from "svelte"
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"

  import { prefixClassNames } from "$lib/actions.svelte.js"
  import { prefix } from "$lib/stores"

  let mounted = false
  onMount(() => {
    mounted = true
  })
</script>

<svelte:head>
  <script type="module" src="https://unpkg.com/cally"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@litopis/dom@0.5.2/styles/daisyui.css" />
  <script src="https://cdn.jsdelivr.net/npm/@litopis/elements@0.5.2/dist/index.global.js"></script>
</svelte:head>

> :INFO:
>
> You can also use the native HTML `<input type="date">` for a date picker. [Read more](/components/input/#date-input)

## daisyUI supports 4 calendar libraries

Use Cally, React Day Picker, Vanilla Calendar Pro or Litopis with daisyUI. Styles for the first three libraries are included in daisyUI. Litopis provides a separate daisyUI adapter stylesheet.

- [Cally web component](https://github.com/WickyNilliams/cally) - Works everywhere
- [React Day picker](https://github.com/gpbl/react-day-picker) - React only
- [Vanilla Calendar Pro](https://github.com/uvarov-frontend/vanilla-calendar-pro) - Works everywhere
- [Litopis](https://github.com/dschewchenko/litopis) - Works everywhere

## 1. Cally Calendar

Cally is a web component calendar and it works everywhere. [Read the docs](https://github.com/WickyNilliams/cally)

### ~Cally calendar example
#### Example using daisyUI styles

<calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>

```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<calendar-date class="$$cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
```

### ~Cally date picker example
#### Example using daisyUI styles and daisyUI dropdown

<button popovertarget="cally-popover1" class="input" id="cally1" style="anchor-name:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" class="dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--cally1">
  <calendar-date class="cally" on:change={(e) => document.getElementById('cally1').innerText = e.target.value}>
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div>


```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<button popovertarget="cally-popover1" class="$$input" id="cally1" style="anchor-name:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" class="$$dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--cally1">
  <calendar-date class="$$cally" onchange="document.getElementById('cally1').innerText = this.value">
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div>
```
<div use:prefixClassNames>

## 2. React Day Picker calendar

React Day Picker is a flexible date picker component for React. [Read the docs](https://github.com/gpbl/react-day-picker)

### React Day Picker Example

```:Install
npm i react-day-picker
```
```jsx:file.tsx
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function App() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <>
      <button popoverTarget="rdp-popover" className="$$input" style={{ anchorName: "--rdp" } as React.CSSProperties}>
        {date ? date.toLocaleDateString() : "Pick a date"}
      </button>
      <div popover="auto" id="rdp-popover" className="$$dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
        <DayPicker className="$$react-day-picker" mode="single" selected={date} onSelect={setDate} />
      </div>
    </>
  );
}
```

## 3. Vanilla Calendar Pro

Vanilla Calendar Pro is a JavaScript calendar library. [Read the docs](https://github.com/uvarov-frontend/vanilla-calendar-pro)

### Vanilla Calendar Pro Example

```:Install
npm i vanilla-calendar-pro
```

```html
<div id="calendar" class="$$vc"></div>
```

```js
import { Calendar } from "vanilla-calendar-pro"

const calendar = new Calendar("#calendar")
calendar.init()
```

### Vanilla Calendar Pro CDN Example

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/index.js" defer></script>

<div id="calendar" class="$$vc"></div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const { Calendar } = window.VanillaCalendarPro
    const calendar = new Calendar("#calendar")
    calendar.init()
  })
</script>
```

</div>

## 4. Litopis

Litopis is a date picker library with [DOM bindings](https://dschewchenko.github.io/litopis/integrations/#plain-dom), [Web Components](https://dschewchenko.github.io/litopis/integrations/web-components/) and adapters for [React](https://dschewchenko.github.io/litopis/integrations/react/), [Vue](https://dschewchenko.github.io/litopis/integrations/vue/), [Solid](https://dschewchenko.github.io/litopis/integrations/solid/) and [Svelte](https://dschewchenko.github.io/litopis/integrations/svelte/).

The examples use the Litopis Web Component. Import its daisyUI adapter for the calendar. Add daisyUI's `input` class to the input.

```:Install
npm i @litopis/elements @litopis/dom
```

```js
import "@litopis/elements";
import "@litopis/dom/styles/daisyui.css";
```

### ~Litopis popup date picker example
#### Example using daisyUI styles

<div class="w-full max-w-sm">
  {#if mounted}
    <litopis-date-picker
      label="Departure date"
      name="departure"
      mode="popover"
      format="yyyy-mm-dd"
    >
      <input slot="input" type="text" placeholder="Choose a date" class={`${$prefix}input`} />
    </litopis-date-picker>
  {/if}
</div>

```html
<litopis-date-picker
  label="Departure date"
  name="departure"
  mode="popover"
  format="yyyy-mm-dd"
>
  <input slot="input" type="text" placeholder="Choose a date" class="$$input" />
</litopis-date-picker>
```

### ~Litopis calendar example
#### Inline calendar with a daisyUI input

<div class="w-full max-w-sm">
  {#if mounted}
    <litopis-date-picker
      label="Appointment date"
      name="appointment"
      mode="inline"
      format="yyyy-mm-dd"
    >
      <input
        slot="input"
        type="text"
        placeholder="Choose a date"
        class={`${$prefix}input`}
      />
    </litopis-date-picker>
  {/if}
</div>

```html
<litopis-date-picker
  label="Appointment date"
  name="appointment"
  mode="inline"
  format="yyyy-mm-dd"
>
  <input slot="input" type="text" placeholder="Choose a date" class="$$input" />
</litopis-date-picker>
```
