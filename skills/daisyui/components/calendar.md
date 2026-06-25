### calendar

Calendar includes styles for different calendar libraries

[calendar docs](https://daisyui.com/components/calendar/)

#### Class names

- component
  - `cally (for Cally web component)`
  - `react-day-picker (for the DayPicker component)`
  - `vc (for Vanilla Calendar Pro)`

#### Syntax

For Cally:

```html
<calendar-date class="cally">{CONTENT}</calendar-date>
```

For React Day Picker:

```html
<DayPicker className="react-day-picker"></DayPicker>
```

For Vanilla Calendar Pro:

```html
<div id="calendar" class="vc"></div>
```

```js
import { Calendar } from "vanilla-calendar-pro"

const calendar = new Calendar("#calendar")
calendar.init()
```

Or using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/index.js" defer></script>
<div id="calendar" class="vc"></div>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const { Calendar } = window.VanillaCalendarPro
    const calendar = new Calendar("#calendar")
    calendar.init()
  })
</script>
```

#### Rules

- daisyUI supports Cally, React Day Picker and Vanilla Calendar Pro
