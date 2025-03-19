---
title: Calendar
desc: Calendar includes styles for different calendar libraries.
layout: components
classnames:
  component:
  - class: 'cally'
    desc: for Cally web component
  - class: 'pika-single'
    desc: for the input field that opens Pikaday calendar
  - class: 'react-day-picker'
    desc: for the DayPicker component
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
- [Pikaday](https://github.com/Pikaday/Pikaday) - Works everywhere
- [React Day picker](https://github.com/gpbl/react-day-picker) - React only

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

## 2. Pikaday Calendar

Pikaday is a JS datepicker library and you can use it from CDN or as a JS dependency [Read the docs](https://github.com/Pikaday/Pikaday)

### Pikaday CDN Example

```html:html
<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script>
<input type="text" class="$$input $$pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
</script>
```

### Pikaday Svelte Example

```:Install
npm i pikaday
```
```svelte:file.svelte
<script>
  import Pikaday from "pikaday";
  let myDatepicker;
  $effect(() => {
    if (myDatepicker) {
      const picker = new Pikaday({
        field: myDatepicker
      });
      return () => picker.destroy();
    }
  });
</script>

<input type="text" class="$$input $$pika-single"  bind:this={myDatepicker} value="Pick a day" />
```

### Pikaday Vue Example

```:Install
npm i pikaday
```
```vue:file.vue
<script>
import Pikaday from "pikaday";
export default {
  mounted: function() {
    const picker = new Pikaday({
      field: this.$refs.myDatepicker
    });
  }
};
</script>
<template>
  <input type="text" class="$$input $$pika-single" ref="myDatepicker" value="Pick a day"/>
</template>
```

### Pikaday React Example

```:Install
npm i pikaday
```
```jsx:file.tsx
import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

export default function App() {
  const myDatepicker = useRef(null);
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current
    });
    return () => picker.destroy();
  }, []);
  return (
    <input type="text" className="$$input $$pika-single" defaultValue="Pick a date" ref={myDatepicker} />
  );
}
```
## 3. React Day Picker calendar

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

</div>
