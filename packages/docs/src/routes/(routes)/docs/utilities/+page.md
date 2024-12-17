---
title: Utility classes and CSS variables
desc: daisyUI provides a few useful utility classes and CSS variables to help you use the library more effectively.
published: true
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <Translate text="Color utility classes" />

All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color.  
For example you can use `primary` color with any of Tailwind CSS color utilities.

```
bg-primary
to-primary
via-primary
from-primary
text-primary
ring-primary
fill-primary
caret-primary
stroke-primary
border-primary
divide-primary
accent-primary
shadow-primary
outline-primary
decoration-primary
placeholder-primary
ring-offset-primary
```
For example you can use `bg-primary` to set the background color to the primary color and `text-primary-content` to set the text color to the primary color.

```html
<div class="bg-primary text-primary-content">Primary color</div>
```
You can also control the opacity of the color like

```html
<div class="bg-primary text-primary-content/60">Primary-content color with 60% opacity</div>
```

## <Translate text="Border radius" />

Tailwind CSS provides fixed values for border radius, such as `rounded-sm`, `rounded-lg`, `rounded-xl`, etc.  
daisyUI provides a few more border radius values which are tokenized for components and can be customized based on the theme.

Change the theme to see the border radius changes:

<div class="grid sm:grid-cols-3 gap-4">
  <div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-box">rounded-box</div>
  <div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-field">rounded-field</div>
  <div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-selector">rounded-selector</div>
</div>

```json
rounded-box     
// var(--radius-box) for large sized components like card, modal, alert, etc.

rounded-field   
// var(--radius-field) for medium sized components like button, input, select, tab, etc.

rounded-selector
// var(--radius-selector) for small sized components like checkbox, toggle, badge, etc.
```

## <Translate text="Glass" />

<Translate text="These glass class to give elements a matte glass effect" />

<div class="rounded-box p-10 " style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
<div class="glass h-40 rounded-box grid place-content-center">Glass</div>
</div>

```html
<div class="glass">Glass</div>
```

## Theme CSS variables

These CSS variables can be customized for each themes

```json
/* colors */
--color-primary: oklch(55% 0.3 240);            /* Primary brand color */
--color-primary-content: oklch(98% 0.01 240);   /* Foreground content color to use on primary color */

--color-secondary: oklch(70% 0.25 200);         /* Secondary brand color */
--color-secondary-content: oklch(98% 0.01 200); /* Foreground content color to use on secondary color */

--color-accent: oklch(65% 0.25 160);            /* Accent brand color */
--color-accent-content: oklch(98% 0.01 160);    /* Foreground content color to use on accent color */

--color-neutral: oklch(50% 0.05 240);           /* Neutral dark color */
--color-neutral-content: oklch(98% 0.01 240);   /* Foreground content color to use on neutral color */

--color-base-100: oklch(98% 0.02 240);          /* Base color of page, used for blank backgrounds */
--color-base-200: oklch(95% 0.03 240);          /* Base color, darker shade */
--color-base-300: oklch(92% 0.04 240);          /* Base color, even more darker shade */
--color-base-content: oklch(20% 0.05 240);      /* Foreground content color to use on base color */

--color-info: oklch(70% 0.2 220);               /* Info color */
--color-info-content: oklch(98% 0.01 220);      /* Foreground content color to use on info color */

--color-success: oklch(65% 0.25 140);           /* Success color */
--color-success-content: oklch(98% 0.01 140);   /* Foreground content color to use on success color */

--color-warning: oklch(80% 0.25 80);            /* Warning color */
--color-warning-content: oklch(20% 0.05 80);    /* Foreground content color to use on warning color */

--color-error: oklch(65% 0.3 30);               /* Error color */
--color-error-content: oklch(98% 0.01 30);      /* Foreground content color to use on error color */

/* border radius */
--radius-selector: 1rem;                         /* border radius for selectors. like checkbox, toggle, badge, etc */
--radius-field: 0.25rem;                         /* border radius for fields. like input, select, tab, etc */
--radius-box: 0.5rem;                            /* border radius for boxes. like card, modal, alert, etc */

/* base sizes */
--size-selector: 0.25rem;                        /* base scale size for selectors. like checkbox, toggle, badge, etc */
--size-field: 0.25rem;                           /* base scale size for fields. like input, select, tab, etc */

/* border size */
--border: 1px;                                   /* border width of all components */

/* effects */
--gloss: 1;                                      /* (binary) Adds a gloss effect for relevant components */
--noise: 0;                                      /* (binary) Adds a background noise effect for relevant components */
}
```

## <Translate text="Component specific CSS variables" />

These CSS variables are being used internally for a specific components.

> :INFO: 
> 
> These variables are for internal use. Some of them may be modified or removed in future versions, in which case your custom styles might lose their effect.

```json
Alert
  --alert-color // color of the alert
Badge
  --badge-color // color of the badge
  --size // size of the badge
Button
  --btn-color // background color of the button
  --btn-fg // foreground color of the button
  --btn-shadow // shadow of the button
  --btn-gradient // gradient of the button
  --btn-p // padding of the button
  --size // size of the button
Checkbox
  --size // size of the checkbox
Countdown
  --value // value of the countdown
Dropdown
  --anchor-v // vertical position of the anchor
  --anchor-h // horizontal position of the anchor
File input
  --input-color // color of the file input
  --size // size of the file input
Indicator
  --indicator-t // top position of the indicator
  --indicator-b // bottom position of the indicator
  --indicator-s // start position of the indicator
  --indicator-e // end position of the indicator
  --indicator-y // vertical position of the indicator
  --indicator-x // horizontal position of the indicator
Input
  --input-color // color of the input
  --size // size of the input
Kbd
  --size // size of the kbd
List
  --list-grid-cols // grid columns of the list
Modal
  --modal-tl //top left border radius of the modal
  --modal-tr //top right border radius of the modal
  --modal-bl //bottom left border radius of the modal
  --modal-br //bottom right border radius of the modal
Radial progress
  --value // value of the radial progress
  --size // size of the radial progress
  --thickness // thickness of the radial progress
  --radialprogress // for calculating the radial progress position
Radio
  --size // size of the radio
Range
  --range-shdw // box shadow of the range slider
  --track-shdw  // box shadow of the range slider track
  --range-thumb // color of the range slider thumb
  --range-p // padding of the range slider
  --size // size of the range slider
Select
  --input-color // color of the input
  --size // size of the select
Tab
  --tabs-height // height of the tabs
  --tabs-direction // direction of the tabs
  --tab-p // padding of the tab
  --tab-bg // background color of the tab
  --tab-border-color // border color of the tab
  --tab-radius-ss // start start border radius of the tab
  --tab-radius-se // start end border radius of the tab
  --tab-radius-es // end start border radius of the tab
  --tab-radius-ee // end end border radius of the tab
  --tab-order // border of the tab
  --tab-radius-min // minimum border radius of the lift tab
  --tab-paddings // all padding values of the lift tab
  --tab-border-colors // all border color values of the lift tab
  --tab-corner-width // corner width of the lift tab
  --tab-corner-height // corner height of the lift tab
  --tab-corner-width // corner width of the lift tab
  --tab-corner-position // corner position of the lift tab
  --tab-inset // inset position of the lift tab
  --radius-start // border radiuse for the corner of the lift tab
  --radius-end // border radiuse for the corner of the lift tab
  --tabcontent-margin // margin of the tab content
  --tabcontent-radius-ss // start start border radius of the tab content
  --tabcontent-radius-se // start end border radius of the tab content
  --tabcontent-radius-es // end start border radius of the tab content
  --tabcontent-radius-ee // end end border radius of the tab content
  --tabcontent-order // order of the tab content
Textarea
  --input-color // color of the input
  --size // size of the textarea
Timeline
  --timeline-row-start // start position of the timeline row
  --timeline-row-end // end position of the timeline row
  --timeline-col-start // start position of the timeline column
  --timeline-col-end // end position of the timeline column
Toast
  --toast-x // horizontal position of the toast
  --toast-y // vertical position of the toast
toggle
  --toggle-p // padding of the toggle
  --size // size of the toggle
Tooltip
  --tt-bg // background color of the tooltip
  --tt-off // offset of the tooltip
  --tt-tailw // position of the tooltip tail
glass
  --glass-blur // blur of the glass effect
  --glass-opacity // opacity of the glass effect
  --glass-reflect-degree // degree of the glass reflection
  --glass-reflect-opacity // opacity of the glass reflection
  --glass-border-opacity // opacity of the glass border
  --glass-text-shadow-opacity // opacity of the glass text shadow
Join
  --join-ss // start start border radius of the join
  --join-se // start end border radius of the join
  --join-es // end start border radius of the join
  --join-ee // end end border radius of the join
```
