---
title: How to update daisyUI from version 3 to version 4
desc: This upgrade guide helps you easily update daisyUI to version 4 without breaking anything.
published: true
date: 2023-11-23
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/daisyui-4-update-guide.webp
tags:
  - Guides
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## daisyUI 4 breaking changes

Since the launch of daisyUI 3 in July 2023, my focus has been on pushing the boundaries and enhancing the daisyUI experience. New features in CSS opened doors to new possibilities for daisyUI and now with the release of daisyUI 4, we can enjoy all the new features and improvements.

This latest release marks a huge leap forward in design, functionality, accessibility, and efficiency of daisyUI. For a detailed overview of the improvements, explore the [daisyUI changelogs page](https://daisyui.com/docs/changelog/).
But the most important thing for upgrading an existing project to a new major version is breaking changes. Here in this guide, we go step by step to update daisyUI from version 3 to version 4.

## 1. Update daisyUI package

First, you need to update the daisyUI package to the latest version. You can do this by running the following command in your terminal:

```
npm i -D daisyui@latest
```

## 2. daisyUI color variables

daisyUI 4 uses [the new OKLCH color system](https://oklch.com/) under the hood. That means all color CSS variables (like `--p`, `--s`, etc) now have OKLCH values instead of HSL values.
( [Read more about OKLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) )

- If you use daisyUI colors with Tailwind CSS class names (like `bg-primary`) you don't have to do anything.
- If you use the CSS variables directly in your project (like `.myclass{ color: hsl(var(--p)) }` ) you need to use them with oklch function (like `.myclass{ color: oklch(var(--p)) }`) now.

Here's the primary color of light theme in daisyUI 3 and 4:

<div class="grid sm:grid-cols-2 gap-x-4">
<div class="text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```css
/* the values were HSL */
--p: 251.47 100% 56%;
```

</div>
<div>

```css
/* the values are OKLCH */
--p: 0.4912 0.3096 275.75;
```

</div>
</div>

So for using daisyUI color CSS variables directly inside your project, change the color functions from `hsl()` to `oklch()` like this:

<div class="grid sm:grid-cols-2 gap-x-4">
<div class="text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```css
/* Using hsl() function */
color: hsl(var(--p));
```

</div>
<div>

```css
/* Using oklch() function */
color: oklch(var(--p));
```

</div>
</div>

## 3. All `*-focus` colors are removed

All `*-focus` colors like `primary-focus` color in daisyUI 3 did was using the same `bg-primary` color with a darker shade.
Now thanks to the new `color-mix()` CSS function we do the same dynamically and it gives us more control on the the colors. For example take a look at this amazing class name. It mixes primary color with black to make it 7% darker:

```css
bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]
                   │              │       │
                   │              │       │
                   │              │       │
                   │              │       ╰── black with 7% opacity = 7% darker
                   │              │
                   │              ╰── primary color
                   │
                   ╰── OKLAB gives a better result
```

So if you used `*-focus` colors in your project and you want the exact same result, you can use the new `color-mix()` function in arbitrary class names like this:

<div class="grid">
<div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```jsx
class="bg-primary-focus"
class="bg-secondary-focus"
class="bg-accent-focus"
class="bg-neutral-focus"
```

</div>
<div>

```jsx
class="bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--s)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--a)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--n)),black_7%)]"
```

</div>
</div>

## 4. Extending themes

There's a change in property names in `daisyui/src/theming/themes.js` file.
If you're customizing built-in daisyUI themes, change it:

<div class="grid">
<div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```js
daisyui: {
  themes: [
    {
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        primary: "blue",
      },
    },
  ],
},
```

</div>
<div>

```js
daisyui: {
  themes: [
    {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "blue",
      },
    },
  ],
},
```

</div>
</div>

## 5. RTL

daisyUI 4 components use [logical CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) instead of directional rules (`mr-*`, `pl-*`, etc).
All components now support LTR/RTL in runtime without any config or plugin. You just need `<html dir=rtl>` and everything will be RTL on runtime.
You can safely remove `rtl: true` config and `tailwindcss-flip` plugin from your project (If you're using logical Tailwind CSS utility classes and you don't need the plugin for your own directional Tailwind CSS classes)

<div class="grid">
<div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```js
module.exports = {
  //...
  plugins: [require("daisyui"), require("tailwindcss-flip")],
  daisyui: {
    rtl: true,
  },
}
```

</div>
<div>

```js
module.exports = {
  //...
  plugins: [require("daisyui")],
  daisyui: {},
}
```

</div>
</div>

## 6. Tab

- these modifier classes for `tab` are removed:
  - `tab-lifted`
  - `tab-bordered`
  - `tab-lg`
  - `tab-md`
  - `tab-sm`
  - `tab-xs`
- Use the following modifier classes for the parent `tabs` class instead:
  - `tabs-lifted`
  - `tabs-bordered`
  - `tabs-lg`
  - `tabs-md`
  - `tabs-sm`
  - `tabs-xs`

<div class="grid">
<div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div>
<div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div>
<div>

```html
<div class="tabs">
  <a class="tab tab-lg tab-lifted">Tab 1</a>
  <a class="tab tab-lg tab-lifted tab-active">Tab 2</a>
  <a class="tab tab-lg tab-lifted">Tab 3</a>
  <a class="tab tab-lg tab-lifted">Tab 4</a>
</div>
```

</div>
<div>

```html
<div class="tabs tabs-lg tabs-lifted">
  <a class="tab">Tab 1</a>
  <a class="tab tab-active">Tab 2</a>
  <a class="tab">Tab 3</a>
  <a class="tab">Tab 4</a>
</div>
```

</div>
</div>

## 7. Button

Buttons are not uppercase by default anymore. You can add `uppercase` class if you want to make them uppercase.

## Conclusion

That's it! You can now enjoy the new daisyUI 4 [features and improvements](https://daisyui.com/docs/changelog/) in your project.
If you have questions specific about the upgrade, ask it in [this GitHub discussion](https://github.com/saadeghi/daisyui/discussions/2507) and if you found a bug, report it in [daisyUI GitHub issues](https://github.com/saadeghi/daisyui/issues)

I'm excited to see all the amazing things you'll build with daisyUI 4.
