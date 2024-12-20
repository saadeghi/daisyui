---
title: Upgrade daisyUI from v4 to v5
desc: daisyUI 5 is a major update with many new features and improvements. This guide will help you upgrade your project from daisyUI 4 to daisyUI 5.


---

## 1. Core

### Tailwind CSS 4 compatible

daisyUI 5 works with Tailwind CSS 4. See [Tailwind CSS upgrade guide](https://tailwindcss.com/)

With Tailwind CSS 4, you can now import daisyUI as a plugin in the CSS file.

<div class="before-after">

```js:Before
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('daisyui');
  ],
}
```
```css:After
/* app.css */
@import "tailwindcss";
@plugin "daisyui";
```
</div>

### Zero dependencies

daisyUI 5 has no dependencies. It doesn't add any dependencies to your node_modules.

<div class="before-after">

```js:Before
Dependencies - 1123.72 kB total
  ├╴ culori - 1060 kB
  ├╴ picocolors - 6.22 kB
  ├╴ postcss-js - 12.2 kB
  ╰╴ css-selector-tokenizer - 45.3 kB
```
```js:After
No dependencies - 0 kB

```
</div>

### Smaller package size

daisyUI 5 NPM package is 61% smaller in size.

<dl class="before-after">
  <dt>Before</dt>
  <dd>
    <div>
      Install size – 4.7 MB
      <br/>
      <progress class="progress progress-error" value="4.7" max="5.1"></progress>
    </div>
  </dd>
  <dt>After</dt>
  <dd>
    <div>
      Install size – 1.8 MB
      <br/>
      <progress class="progress progress-success" value="1.8" max="5.1"></progress>
    </div>
  </dd>
</dl>

daisyUI 5 CDN file, including all possible class names, is 75% smaller in size

<dl class="before-after">
  <dt>Before</dt>
  <dd>
    <div>
      full.css – 137 kB compressed
      <br/>
      <progress class="progress progress-error" value="137" max="145"></progress>
    </div>
  </dd>
  <dt>After</dt>
  <dd>
    <div>
      daisyui.css – 34 kB compressed
      <br/>
      <progress class="progress progress-success" value="34" max="145"></progress>
    </div>
  </dd>
</dl>

### Readable, flexible, customizable colors variables

With Tailwind CSS 3 and daisyUI 4, we had to extract the color values of each color into CSS variables, and pass it to CSS alongside a special `<alpha-value>` variable so Tailwind could generate opacity variables for each utility color.

Tailwind CSS 4 doesn't have this limitation because it uses CSS `color-mix()` to control the opacity.

With daisyUI 5 we can finally put the whole color inside CSS variables. All color formats are supported, no transformation is needed no JS object is needed.

We also updated the variable names to be more readable in the output CSS:

<div class="before-after">

```css:Before
/* hard to read, hard to customize */
{
--b1: 100% 0 0;
--b2: 96.1151% 0 0;
--b3: 92.4169% .00108 197.137559;
--bc: 27.8078% .029596 256.847952;
--p: 49.12% .3096 275.75;
--pc: 89.824% .06192 275.75;
--s: 69.71% .329 342.55;
--sc: 98.71% .0106 342.55;
--a: 76.76% .184 183.61;
--ac: 15.352% .0368 183.61;
--n: 32.1785% .02476 255.701624;
--nc: 89.4994% .011585 252.096176;
--in: 72.06% .191 231.6;
--inc: 0% 0 0;
--su: 64.8% .15 160;
--suc: 0% 0 0;
--wa: 84.71% .199 83.87;
--wac: 0% 0 0;
--er: 71.76% .221 22.18;
--erc: 0% 0 0;
}
```
```css:After
/* standard color format, easy to customize in browser */
{
--color-base-100: oklch(100% 0 0);
--color-base-200: oklch(96.115% 0 0);
--color-base-300: oklch(92.416% 0.001 197.137);
--color-base-content: oklch(27.807% 0.029 256.847);
--color-primary: oklch(49.12% 0.309 275.75);
--color-primary-content: oklch(89.824% 0.061 275.75);
--color-secondary: oklch(69.71% 0.329 342.55);
--color-secondary-content: oklch(98.71% 0.01 342.55);
--color-accent: oklch(76.76% 0.184 183.61);
--color-accent-content: oklch(15.352% 0.036 183.61);
--color-neutral: oklch(20% 0.024 255.701);
--color-neutral-content: oklch(89.499% 0.011 252.096);
--color-info: oklch(72.06% 0.191 231.6);
--color-info-content: oklch(0% 0 0);
--color-success: oklch(64.8% 0.15 160);
--color-success-content: oklch(0% 0 0);
--color-warning: oklch(84.71% 0.199 83.87);
--color-warning-content: oklch(0% 0 0);
--color-error: oklch(71.76% 0.221 22.18);
--color-error-content: oklch(0% 0 0);
}
```
</div>

## 2. What's new in daisyUI 5

### New core features

New features in the library core:

#### Native CSS nesting

CSS nesting is now supported on all browsers. daisyUI 5 uses CSS nesting which prevents duplication of CSS rules and results smaller CSS size in your browser!

#### Micro CSS files for No-Build projects

For server-side redered projects (Rails, Django, PHP, etc) or projects that don't have a JS build step (HTMX, Alpine.js, WordPress, etc), it's now possible to use specific parts of daisyUI without including the entire library or even without Tailwind CSS.

For example if you only want to use daisyUI toggle component, include a tiny CSS file that only contains the styles for the toggle component:

<div class="before-after">

```:Before
Not possible
```
```:After
https://cdn.jsdelivr.net/npm/daisyui@5.0.0-alpha.39/components/toggle.css
```
</div>

All components, all themes, and basically every single part of daisyUI library is now available as compressed. minified CSS files on CDN.

Also, with the 75% smaller daisyui.css (formerly full.css) CDN file, it is now safe and efficient to use the CDN file in production. The compressed CSS file, is now only 34 kB only thanks to native CSS nesting and huge amount of optimizations in daisyUI 5.

#### Include/Exclude

Now for the first time, it's possbile to include/exclude specific parts of daisyUI library. For example if you only want to use the "Toggle" component, you can include only the "Toggle" component and exclude everything else!

<div class="before-after">

```:Before
Not possible
```
```css:After
@plugin "daisyui" {
  include: toggle;
}
```
</div>
Or if you want to exclude a specific part of the library, you can do that too!
<div class="before-after">

```:Before
Not possible
```
```css:After
@plugin "daisyui" {
  exclude: scrollbar;
}
```
</div>

#### ESM

daisyUI 5 is now ESM (ECMAScript Module) compatible. Which means you can import and use specific parts of the library if you need to.

#### Native prefixing

daisyUI 5 can now prefix class names without a dependency.

#### New "X-Large" size
All components that previously had `xs`, `sm`, `md`, and `lg` size modifiers now also support a new `xl` size modifier. This gives you more control over the size of components and allows you to create more flexible and responsive designs.

#### Effects

daisyUI 5 introduces a new set of effects that can be enabled or disabled globally or per theme. These effects change the look and feel of relevant components, like buttons, checkbox, toggle, etc.

Currently, the following effects are available:
- `--gloss`: adds a clean, subtle gloss effect to the components, making them look more visually appealing
- `--noise`: adds a slight noise effect to the components, giving them a more textured look

These effects can be enabled or disabled using a CSS variable.

#### Size scale adjustment

With addition of the new `xl` size modifier, the size scale of components has been adjusted to make it more consistent. The new size scale is more harmonious and visually appealing.

#### Size scale modification

Component size scales are now customizable. Previously, customizing the size of components required a lot of manual work.  
Now everything is tokenized with CSS variables, You can define the size scale of the components globally or per theme, making them shorter or taller, based on your design needs.

#### Border size modification

Border size of buttons, inputs, tab, et are now customizable globally or per theme.

#### New `soft` and `dash` variants

Components like button, badge, alert now have `soft` and `dash` variants. `soft` variant makes the component look softer and `dash` variant adds a dashed border to the component.

### All modifiers are responsive

daisyUI 5 makes all modifiers responsive by default. This means you can use responsive modifiers like `md:`, `lg:`, etc. with all component modifier classes, not just a selected few.

### No more forced color format conversion

Before Tailwind CSS 4, color values of utility classes had to be generated at build time so the only way to have CSS variables for colors and being able to use Tailwind CSS opacity modifiers was to use a specific color format and pass it tailwind to generate the opacity variables.  
Tailwind CSS 4 now uses CSS variables for colors and `color-mix()` to control the opacity. This means we can use any color format we want and no transformation is needed.  
daisyUI built-in themes still use OKLCH color format and I would recommend using OKLCH for custom themes too, but you can use any color format you want and neither daisyUI nor Tailwind CSS will convert it to another format at build time.

### Themes

#### Adjusted themes

Most daisyUI themes have been adjusted to look better and more consistent. color contrast and accessibility got even better and the colors are more harmonious. These changes make the color more visually appealing and easier to read.

#### New themes

daisyUI 5 includes 3 new themes:

- cappuccino: A warm, cozy, light theme with a touch of brown and beige
- abyss: A deep dark green, teal and phosphorus color palette
- silk: A bright, clean and bold theme with fluorescent text colors

### Components
#### New components

daisyUI 5 introduces new components to help you build websites faster.

##### List

List is is useful for vertical layout to display information in rows. Imagine a list of products, list of people, list of articles, etc.

##### Status

Status is a really small icon to visually show the current status of an element, like online, offline, error, etc.

Available in 5 sizes: `xs`, `sm`, `md`, `lg`, and `xl`.

##### Fieldset

Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and fieldset-label as a description.

##### Label

Label provides a name or title for an input field. Label can be placed before or after the field. floating-label is a label that floats above the field when the field is focused.

##### Filter

Filter is a group of radio buttons. Choosing one of the options will hide the others and shows a reset button next to the chosen option.

##### Calendar

daisyUI 5 provides all the necessary styles for 3 popular calendar/datepicker libraries: Cally, Pikaday, and React Day Picker.  
This means you can use any of these libraries the style will be compatible with daisyUI colors and styles.

- Cally is a web component calendar datepicker and it works everywhere
- Pikaday is a simple and easy-to-use JS datepicker and it works everywhere
- React Day Picker is a flexible date picker for React

##### Validator

Validator class changes the color of form elements to `error` or `success` based on input's validation rules. It can also show a hint text below the input if it's invalid.

##### Dock

A replacement for "bottom navigation" component. Dock is a horizontal navigation bar that sticks to the bottom of the screen, new design, new look and more customizable.

Available in 5 sizes: `xs`, `sm`, `md`, `lg`, and `xl`.

#### New component features

All components have been updated with new features and improvements. Most components are adjusted to look better and more consistent. A lot of CSS variables are now available for customization.

##### Button

New `soft` and `dash` variants. `soft` variant makes the button look softer and `dash` variant adds a dashed border to the button.

New behavior for hover state of btn-ghost and btn-outline: Now hover state of these buttons shows the original style, making it fully compatible with other modifiers like `btn-primary` etc.

New `btn-xl` size added.

Sizes adjusted to be more consistent with other components.

Tab size scale is now customizable.

##### Dropdown

Dropdown now supports the new HTML popover API and the new CSS anchor positioning.  
Finally HTML has a native way to create popovers and daisyUI dropdown is now compatible with it.  
Also the new CSS anchor positioning API makes it possible to position the dropdown relative to any element on the page.  
Existing methods like details/summary, and CSS focus are still available to use.

New `dropdown-center` modifier added. Makes it possible to position the dropdown in the center of the anchor element, vertically or horizontally.

##### Modal

New `modal-start` and `modal-end` modifiers added. Makes it possible to position the modal at the start or end of the screen horizontally.  
New `modal-top` in addition to `modal-bottom` modifier makes it possible to position the modal at the top of the screen as well as the bottom.

##### Badge

New `soft` and `dash` variants. `soft` variant makes the badge look softer and `dash` variant adds a dashed border to the badge.

Sizes adjusted to be more consistent with other components.

Tab size scale is now customizable.

##### Card

Now you can make radio cards by adding a radio input as the direct child of the card.

Card is now available in 5 sizes: `xs`, `sm`, `md`, `lg`, and `xl`.

New `card-dash` variant added. Adds a dashed border to the card.

##### Chat bubble

Improved chat bubble tail to have clean visual appearance.

##### Diff

Previously `Diff` was now supported for iOS Safari and it was working with lag in Firefox. Now it shows the content with a tab on iOS Safari and works smoothly in Firefox.

##### Kbd

New `kbd-xl` size added.

Sizes adjusted to be more consistent with other components.

##### Stat

Adjusted styles to be more customizable using utility classes.

##### Table

New `table-xl` size added.

Sizes adjusted to be more consistent with other components.

##### Menu

New `menu-xl` size added.

Sizes adjusted to be more consistent with other components.

##### Tab

Refactored the layout. Many bugs fixed.

New style for the `tabs-border`

New `tab-xl` size added.

Tab size scale adjusted to be more consistent with other components.

Tab size scale is now customizable.

New `tabs-top` and `tabs-bottom` modifiers added. Makes it possible to position the tabs at the top or bottom of the content.

##### Alert










### Components
#### Button



#### Accordion
#### Alert
#### Artboard
#### Avatar
#### Badge
#### Bottom Navigation
#### Breadcrumbs

#### Card
#### Carousel
#### Chat
#### Checkbox
#### Collapse
#### Countdown
#### Diff
#### Divider
#### Drawer
#### Dropdown
#### File Input
#### Footer
#### Fieldset
#### Hero
#### Indicator
#### Input
#### Join
#### Kbd
#### Link
#### Loading
#### Mask
#### Menu
#### Mockup Browser
#### Mockup Code
#### Mockup Phone
#### Mockup Window
#### Modal
#### Navbar
#### Pagination
#### Progress
#### Radial Progress
#### Radio
#### Range
#### Rating
#### Select
#### Skeleton
#### Stack
#### Stat
#### Steps
#### Swap
#### Tab
#### Table
#### Textarea
#### Theme Controller
#### Timeline
#### Toast
#### Toggle
#### Tooltip


<style>
  :global(.before-after) {
    display: grid;
    gap: .5rem;
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    >:global(:is(.remark-code-title,dt)){
      opacity: 0.6;
      letter-spacing: 0.2em;
      padding-inline: .5rem;
      margin-bottom: -.5rem;
      @media (width >= 64rem) {
        text-align: center;
        grid-row-start: 1;
      }
    }
    >:global(dd){
      display: flex;
      padding: 1rem;
      background-color: var(--color-base-200);
      min-height: 5rem;
      border-radius: var(--radius-box);
      align-items: center;
      justify-content: center;
      gap: .5rem;
    }
  }
</style>
