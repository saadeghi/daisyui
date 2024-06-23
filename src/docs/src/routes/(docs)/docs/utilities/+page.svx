---
title: Utility classes and CSS variables
desc: Additional utility classes and CSS variables that daisyUI uses for components and themes
published: true
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <Translate text="Color utility classes" />

<Translate text="All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color. For example you can use `primary` color with any of Tailwind CSS color utilities." />

```json
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

// You can also change the opacity
bg-primary/50
```

## <Translate text="Border radius" />

<Translate text="These extended border radius are being used in daisyUI components. The values depend on the theme so you can have a different design decision about border radius of elements based on the active theme. You can use any Tailwind CSS border radius class for these names as well. Like `rounded-r-box` or `rounded-tr-btn`" />

<div class="flex gap-4 py-6 justify-between max-w-3xl">
  <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-box">rounded-box</div>
  <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-btn">rounded-btn</div>
  <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-badge">rounded-badge</div>
</div>

```json
rounded-box     // var(--rounded-box)
                // for large sized components like card, modal, etc.

rounded-btn     // var(--rounded-btn)
                // for medium sized components like button, input, etc.

rounded-badge   // var(--rounded-badge)
                // for small sized components like badge, etc.
```

## <Translate text="Glass" />

<Translate text="These glass class to give elements a matte glass effect" />

<div class="rounded p-10 max-w-3xl " style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
<div class="glass w-full h-40 rounded-box grid place-content-center">Glass</div>
</div>

```html
<div class="glass">Glass</div>
```

## <Translate text="CSS variables" />

<Translate text="These CSS variables are being used internally. You can customize them in your custom theme in `tailwind.config.js` or you can even customize them with a class name like `[--animation-btn:0]`" />

```json
"--rounded-box": "1rem",          // border radius rounded-box utility class, used in card and other large boxes
"--rounded-btn": "0.5rem",        // border radius rounded-btn utility class, used in buttons and similar element
"--rounded-badge": "1.9rem",      // border radius rounded-badge utility class, used in badges and similar
"--animation-btn": "0.25s",       // duration of animation when you click on button
"--animation-input": "0.2s",      // duration of animation for inputs like checkbox, toggle, radio, etc
"--btn-focus-scale": "0.95",      // scale transform of button when you focus on it
"--border-btn": "1px",            // border width of buttons
"--tab-border": "1px",            // border width of tabs
"--tab-radius": "0.5rem",         // border radius of tabs
```

## <Translate text="Component specific CSS variables" />

<Translate text="These CSS variables are being used internally for a specific component" />

```json
tab
  --tab-border // border width of tab
  --tab-border-color // border color of tab
  --tab-padding // horizontal padding of tab
  --tab-bg // background color of tabs-lifted
  --tab-radius // border radius of tabs-lifted
  --tab-corner-bg // background color of tabs-lifted corner
  --circle-pos // position of circle in the corner of tabs-lifted
  --tab-grad // radial-gradient size in the corner of tabs-lifted

countdown
  --value // value of countdown

radial-progress
  --value // value of progress circle
  --size // size of progress circle
  --thickness // thickness of progress circle

tooltip
  --tooltip-color // background color of tooltip
  --tooltip-text-color // text color of tooltip
  --tooltip-offset // offset of tooltip from target element
  --tooltip-tail // size of tooltip tail
  --tooltip-tail-offset // offset of tooltip tail from target element

checkbox
  --chkbg // background color of checkbox
  --chkfg // foreground color of checkbox

toggle
  --tglbg // background color of toggle
  --handleoffset // offset of toggle handle

range
  --filler-size // size of range thumb
  --filler-offset // offset of range thumb
  --range-shdw // shadow color of range thumb

glass
  --glass-blur // blur value of glass effect
  --glass-opacity // opacity of glass effect
  --glass-border-opacity // opacity of glass border
  --glass-reflex-degree // degree of glass reflex
  --glass-reflex-opacity // opacity of glass reflex
  --glass-text-shadow-opacity // opacity of text shadow
```
