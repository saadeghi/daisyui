---
title: Utility classes and CSS variables
desc: daisyUI provides a few useful utility classes and CSS variables to help you use the library more effectively.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <Translate text="Color utility classes" />

All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color.  
For example you can use `primary` color with any of Tailwind CSS color utilities.

Read more about [color names](/docs/colors).

| Class Name            | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `bg-primary`          | Sets the background color to the primary color              |
| `to-primary`          | Sets the ending color for a gradient to the primary color   |
| `via-primary`         | Sets the middle color for a gradient to the primary color   |
| `from-primary`        | Sets the starting color for a gradient to the primary color |
| `text-primary`        | Sets the text color to the primary color                    |
| `ring-primary`        | Sets the ring color to the primary color                    |
| `fill-primary`        | Sets the fill color for SVG elements to the primary color   |
| `caret-primary`       | Sets the caret color to the primary color                   |
| `stroke-primary`      | Sets the stroke color for SVG elements to the primary color |
| `border-primary`      | Sets the border color to the primary color                  |
| `divide-primary`      | Sets the color for dividing borders to the primary color    |
| `accent-primary`      | Sets the accent color to the primary color                  |
| `shadow-primary`      | Sets the shadow color to the primary color                  |
| `outline-primary`     | Sets the outline color to the primary color                 |
| `decoration-primary`  | Sets the text decoration color to the primary color         |
| `placeholder-primary` | Sets the placeholder text color to the primary color        |
| `ring-offset-primary` | Sets the ring offset color to the primary color             |

You can use `bg-primary` to set the background color to the primary color and `text-primary-content` to set the text color to the primary color.

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

| Class Name         | CSS Variable             | Description                                                       |
| ------------------ | ------------------------ | ----------------------------------------------------------------- |
| `rounded-box`      | `var(--radius-box)`      | For large sized components like card, modal, alert, etc.          |
| `rounded-field`    | `var(--radius-field)`    | For medium sized components like button, input, select, tab, etc. |
| `rounded-selector` | `var(--radius-selector)` | For small sized components like checkbox, toggle, badge, etc.     |

## <Translate text="Glass" />

`glass` creates a glass effect on the element.

<div class="rounded-box p-10 " style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
<div class="glass h-40 rounded-box grid place-content-center">Glass</div>
</div>

```html
<div class="glass">Glass</div>
```

## Theme CSS variables

These CSS variables can be customized for each themes. Read more about [color names](/docs/colors).

| CSS Variable                | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `--color-primary`           | Primary brand color                                             |
| `--color-primary-content`   | Foreground content color to use on primary color                |
| `--color-secondary`         | Secondary brand color                                           |
| `--color-secondary-content` | Foreground content color to use on secondary color              |
| `--color-accent`            | Accent brand color                                              |
| `--color-accent-content`    | Foreground content color to use on accent color                 |
| `--color-neutral`           | Neutral dark color                                              |
| `--color-neutral-content`   | Foreground content color to use on neutral color                |
| `--color-base-100`          | Base color of page, used for blank backgrounds                  |
| `--color-base-200`          | Base color, darker shade                                        |
| `--color-base-300`          | Base color, even more darker shade                              |
| `--color-base-content`      | Foreground content color to use on base color                   |
| `--color-info`              | Info color                                                      |
| `--color-info-content`      | Foreground content color to use on info color                   |
| `--color-success`           | Success color                                                   |
| `--color-success-content`   | Foreground content color to use on success color                |
| `--color-warning`           | Warning color                                                   |
| `--color-warning-content`   | Foreground content color to use on warning color                |
| `--color-error`             | Error color                                                     |
| `--color-error-content`     | Foreground content color to use on error color                  |
| `--radius-selector`         | Border radius for selectors like checkbox, toggle, badge, etc   |
| `--radius-field`            | Border radius for fields like input, select, tab, etc           |
| `--radius-box`              | Border radius for boxes like card, modal, alert, etc            |
| `--size-selector`           | Base scale size for selectors like checkbox, toggle, badge, etc |
| `--size-field`              | Base scale size for fields like input, select, tab, etc         |
| `--border`                  | Border width of all components                                  |
| `--depth`                   | (binary) Adds a depth effect for relevant components            |
| `--noise`                   | (binary) Adds a background noise effect for relevant components |

## <Translate text="Component specific CSS variables" />

For advanced use: These CSS variables are being used internally for a specific components. You probably won't need to customize them, but you can if you want to.

If you are using a prefix for daisyUI, these CSS variables will be prefixed with that prefix as well. For example if prefix is `daisy-`, The `--alert-color` CSS variable will be `--daisy-alert-color`.

> :INFO:
>
> These variables are for internal use. They are not subject of semantic versioning and some of them may be modified or removed in future minor versions, in which case your custom styles might lose their effect, so if you want to modify these variables and your UI really depends on the customized value, make sure you are using a fixed version of daisyUI, not the latest version.

| Component       | CSS Variable                  | Description                                              |
| --------------- | ----------------------------- | -------------------------------------------------------- |
| Alert           | `--alert-color`               | color of the alert                                       |
| Badge           | `--badge-color`               | color of the badge                                       |
|                 | `--size`                      | size of the badge                                        |
| Button          | `--btn-color`                 | background color of the button                           |
|                 | `--btn-fg`                    | foreground color of the button                           |
|                 | `--btn-shadow`                | shadow of the button                                     |
|                 | `--btn-noise`                 | noise background of the button if enabled                |
|                 | `--btn-p`                     | padding of the button                                    |
|                 | `--size`                      | size of the button                                       |
| Card            | `--card-p`                    | padding of the card body                                 |
|                 | `--card-fs`                   | font size of the card body                               |
|                 | `--cardtitle-fs`              | font size of the card title                              |
| Checkbox        | `--size`                      | size of the checkbox                                     |
| Countdown       | `--value`                     | value of the countdown                                   |
| Divider         | `--divider-m`                 | margin of the divider                                    |
| Dropdown        | `--anchor-v`                  | vertical position of the anchor                          |
|                 | `--anchor-h`                  | horizontal position of the anchor                        |
| File input      | `--input-color`               | color of the file input                                  |
|                 | `--size`                      | size of the file input                                   |
| Indicator       | `--indicator-t`               | top position of the indicator                            |
|                 | `--indicator-b`               | bottom position of the indicator                         |
|                 | `--indicator-s`               | start position of the indicator                          |
|                 | `--indicator-e`               | end position of the indicator                            |
|                 | `--indicator-y`               | vertical position of the indicator                       |
|                 | `--indicator-x`               | horizontal position of the indicator                     |
| Input           | `--input-color`               | color of the input                                       |
|                 | `--size`                      | size of the input                                        |
| Kbd             | `--size`                      | size of the kbd                                          |
| List            | `--list-grid-cols`            | grid columns of the list                                 |
| Menu            | `--menu-active-fg`            | foreground color of the active menu item                 |
|                 | `--menu-active-bg`            | background color of the active menu item                 |
| Modal           | `--modal-tl`                  | top left border radius of the modal                      |
|                 | `--modal-tr`                  | top right border radius of the modal                     |
|                 | `--modal-bl`                  | bottom left border radius of the modal                   |
|                 | `--modal-br`                  | bottom right border radius of the modal                  |
| Radial progress | `--value`                     | value of the radial progress                             |
|                 | `--size`                      | size of the radial progress                              |
|                 | `--thickness`                 | thickness of the radial progress                         |
|                 | `--radialprogress`            | for calculating the radial progress position             |
| Radio           | `--size`                      | size of the radio                                        |
| Range           | `--range-bg`                  | background color of the range slider thumb               |
|                 | `--range-thumb`               | color of the range slider thumb                          |
|                 | `--range-thumb-size`          | size of the range slider thumb                           |
|                 | `--range-progress`            | color of the range slider progress                       |
|                 | `--range-fill`                | binary, whether to fill the range slider progress or not |
|                 | `--range-p`                   | padding of the range slider thumb                        |
|                 | `--size`                      | size of the range slider                                 |
| Select          | `--input-color`               | color of the input                                       |
|                 | `--size`                      | size of the select                                       |
| Tab             | `--tabs-height`               | height of the tabs                                       |
|                 | `--tabs-direction`            | direction of the tabs                                    |
|                 | `--tab-p`                     | padding of the tab                                       |
|                 | `--tab-bg`                    | background color of the tab                              |
|                 | `--tab-border-color`          | border color of the tab                                  |
|                 | `--tab-radius-ss`             | start start border radius of the tab                     |
|                 | `--tab-radius-se`             | start end border radius of the tab                       |
|                 | `--tab-radius-es`             | end start border radius of the tab                       |
|                 | `--tab-radius-ee`             | end end border radius of the tab                         |
|                 | `--tab-order`                 | Order of the tab                                         |
|                 | `--tab-radius-min`            | minimum border radius of the lift tab                    |
|                 | `--tab-paddings`              | all padding values of the lift tab                       |
|                 | `--tab-border-colors`         | all border color values of the lift tab                  |
|                 | `--tab-corner-width`          | corner width of the lift tab                             |
|                 | `--tab-corner-height`         | corner height of the lift tab                            |
|                 | `--tab-corner-width`          | corner width of the lift tab                             |
|                 | `--tab-corner-position`       | corner position of the lift tab                          |
|                 | `--tab-inset`                 | inset position of the lift tab                           |
|                 | `--radius-start`              | border radius for the corner of the lift tab             |
|                 | `--radius-end`                | border radius for the corner of the lift tab             |
|                 | `--tabcontent-margin`         | margin of the tab content                                |
|                 | `--tabcontent-radius-ss`      | start start border radius of the tab content             |
|                 | `--tabcontent-radius-se`      | start end border radius of the tab content               |
|                 | `--tabcontent-radius-es`      | end start border radius of the tab content               |
|                 | `--tabcontent-radius-ee`      | end end border radius of the tab content                 |
|                 | `--tabcontent-order`          | order of the tab content                                 |
| Textarea        | `--input-color`               | color of the input                                       |
|                 | `--size`                      | size of the textarea                                     |
| Timeline        | `--timeline-row-start`        | start position of the timeline row                       |
|                 | `--timeline-row-end`          | end position of the timeline row                         |
|                 | `--timeline-col-start`        | start position of the timeline column                    |
|                 | `--timeline-col-end`          | end position of the timeline column                      |
| Toast           | `--toast-x`                   | horizontal position of the toast                         |
|                 | `--toast-y`                   | vertical position of the toast                           |
| Toggle          | `--toggle-p`                  | padding of the toggle                                    |
|                 | `--size`                      | size of the toggle                                       |
| Tooltip         | `--tt-bg`                     | background color of the tooltip                          |
|                 | `--tt-off`                    | offset of the tooltip                                    |
|                 | `--tt-tailw`                  | position of the tooltip tail                             |
| Glass           | `--glass-blur`                | blur of the glass effect                                 |
|                 | `--glass-opacity`             | opacity of the glass effect                              |
|                 | `--glass-reflect-degree`      | degree of the glass reflection                           |
|                 | `--glass-reflect-opacity`     | opacity of the glass reflection                          |
|                 | `--glass-border-opacity`      | opacity of the glass border                              |
|                 | `--glass-text-shadow-opacity` | opacity of the glass text shadow                         |
| Join            | `--join-ss`                   | start start border radius of the join                    |
|                 | `--join-se`                   | start end border radius of the join                      |
|                 | `--join-es`                   | end start border radius of the join                      |
|                 | `--join-ee`                   | end end border radius of the join                        |

### Examples of customizing component specific CSS variables

1. Customizing `--alert-color` using a utility class:

   ```html:html
   <div class="alert [--alert-color:blue]">
     <span>12 unread messages. Tap to see.</span>
   </div>
   ```

2. Customizing `--alert-color` from CSS:

   ```postcss:css
   @import "tailwindcss";
   @plugin "daisyui";

   .alert {
     --alert-color: blue;
   }
   ```
