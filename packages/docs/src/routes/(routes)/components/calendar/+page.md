---
title: Calendar
desc: Calendar includes styles for different calendar libraries.
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
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"

  import { prefixClassNames } from "$lib/actions.svelte.js"
</script>

<svelte:head>
  <script type="module" src="https://unpkg.com/cally"></script>
</svelte:head>

> :INFO:
>
> You can also use the native HTML `<input type="date">` for a date picker. [Read more](/components/input/#date-input)

## daisyUI supports 3 calendar libraries

daisyUI includes styles for 3 popular calendar libraries.  
Use any of them, based on your needs.  
You don't need to import the CSS files for these libraries. daisyUI will style them automatically.

- [Cally web component](https://github.com/WickyNilliams/cally) - Works everywhere
- [React Day picker](https://github.com/gpbl/react-day-picker) - React only
- [Vanilla Calendar Pro](https://github.com/uvarov-frontend/vanilla-calendar-pro) - Works everywhere

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

<button popovertarget="cally-popover1" class="input input-border" id="cally1" style="anchor-name:--cally1">
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

<button popovertarget="cally-popover1" class="$$input $$input-border" id="cally1" style="anchor-name:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" class="$$dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--cally1">
  <calendar-date class="$$cally" onchange={document.getElementById('cally1').innerText = this.value}>
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
      <button popoverTarget="rdp-popover" className="$$input $$input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
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
