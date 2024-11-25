---
title: Upgrade daisyUI from v4 to v5
desc: daisyUI 5 is a major update with many new features and improvements. This guide will help you upgrade your project from daisyUI 4 to daisyUI 5.


---

## Core

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

daisyUI 5 NPM package is 52% smaller in size.

<dl class="before-after">
  <dt>Before</dt>
  <dd>
    <div>
      Install size – 3.8 MB
      <br/>
      <progress class="progress progress-error" value="3.8" max="4"></progress>
    </div>
  </dd>
  <dt>After</dt>
  <dd>
    <div>
      Install size – 1.8 MB
      <br/>
      <progress class="progress progress-success" value="1.8" max="4"></progress>
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
      daisyui.css – 33 kB compressed
      <br/>
      <progress class="progress progress-success" value="33" max="145"></progress>
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
```
```css:After
/* easy to read, easy to customize even in browser */
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
```
</div>

## What's new in daisyUI 5

### Native CSS nesting

CSS nesting is now supported on all browsers. daisyUI 5 uses CSS nesting which prevents duplication of CSS rules and results smaller CSS size in your browser!

### New "X-Large" size
All components that previously had <span class="badge badge-soft">xs</span>, <span class="badge badge-soft">sm</span>, <span class="badge badge-soft">md</span>, and <span class="badge badge-soft">lg</span> size modifiers now also support a new <span class="badge badge-soft">xl</span> size modifier. This gives you more control over the size of components and allows you to create more flexible and responsive designs.

### Atomic CSS files for "No-Build" projects

For server-side redered projects (Rails, Django, PHP, etc) or projects that don't have a build step (HTMX, Alpine.js, WordPress, etc), it's now possible to use specific parts of daisyUI without including the entire library or even without Tailwind CSS.

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

### Include/Exclude

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
    font-size: 0.75rem;
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
