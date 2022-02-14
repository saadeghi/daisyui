---
title: How to use daisyUI themes
desc: How to use daisyUI themes?
published: true
---

<script>
  import ThemeChange from "@components/ThemeChange.svelte"
</script>

daisyUI comes with a number of themes, which you can use with no extra effort.  
Each theme defines a set of colors which will be used on all daisyUI elements.

To use a theme, you need `data-theme` attribute to your `<html>` tag:

```html
<html data-theme="cupcake"></html>
```

> I suggest using [`theme-change`](https://github.com/saadeghi/theme-change), so you can switch themes and save selected theme in local storage.

## List of themes

Try them: <ThemeChange dropdownClasses="not-prose" btnClasses="btn-sm inline-flex gap-2" contentClasses="mt-10 border border-base-content border-opacity-5" />

```js
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk"],
  },
}
```

The default theme is `light` (or `dark` for dark mode)  
but you can [change the default theme from tailwind.config.js](https://daisyui.com/docs/config)

## How to remove unused themes?

You can only include the themes you want in your project.  
This will reduce the size of your CSS file.  
In below example

- `cupcake` will be the default theme for light mode
- `dark` will be the default theme for dark mode
- `cmyk` can be applied on any HTML tag with `data-theme="cupcake"`

```js
module.exports = {
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}
```

## How to disable all themes?

If you don't want to include themes and you only want the default `light` theme, you need to disable `themes` config.

```js
module.exports = {
  //...
  daisyui: {
    themes: false,
  },
}
```

## How to use a theme only for a section of page?

Add `data-theme="THEME_NAME"` to any element and everything inside will have your theme.  
You can nest themes and there is no limit!

You can force a section of your HTML to only use a specific theme.

```html
<html data-theme="dark">
  <div data-theme="light">
    This div will always use light theme
    <span data-theme="retro">This span will always use retro theme!</span>
  </div>
</html>
```

## How to add a new custom theme?

You can add a new theme from `tailwind.config.js`.  
In below example, I added a new theme called `mytheme` and I'm also using `dark` and `cupcake` themes.  
The first theme (`mytheme`) will be the default theme

```json5
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          "primary-focus": "#8462f4",
          "primary-content": "#ffffff",

          secondary: "#f6d860",
          "secondary-focus": "#f3cc30",
          "secondary-content": "#ffffff",

          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",

          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
```

<div class="alert alert-info max-w-3xl">Currently only hex colors are supported.</div>

## How to customize an existing theme?

In your tailwind.config.js, you can require an existing daisyUI theme and override its colors.  
In below example, I get `dark` theme and change its `primary` and `primary-focus` colors to red:

```js
const { "[data-theme=dark]": darkTheme } = require("daisyui/colors/themes")

module.exports = {
  //...
  daisyui: {
    themes: [
      {
        dark: {
          ...darkTheme,
          primary: "#FF0000",
          "primary-focus": "#D60000",
        },
      },
    ],
  },
}
```

## Theme generator

You can use [this theme generator](https://themes.ionevolve.com/) to generate your own themes.
