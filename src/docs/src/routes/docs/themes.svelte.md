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
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade"],
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

If you only want the default `light` theme, set `themes` config to false.

```js
module.exports = {
  //...
  daisyui: {
    themes: false,
  },
}
```

If you don't want to include any themes and disable all colors, set `themes` config to an empty array.

```js
module.exports = {
  //...
  daisyui: {
    themes: [],
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

You can add a new theme from `tailwind.config.js` file.  
In below example, I added a new theme called `mytheme` and I'm also including `dark` and `cupcake` themes.

- The first theme (`mytheme`) will be the default theme.
- `dark` theme will be the default theme for dark mode.

In below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a `primary` button).

<div class="alert alert-info text-sm mb-2 max-w-3xl not-prose">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <p>
      You can also add <a href="/docs/colors" class="link">optional color names</a> to have full control over all colors.
    </p>
  </div>
</div>

```js
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
```

## CSS variables in daisyUI themes

There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:

```js
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
}
```

## Custom CSS for a daisyUI theme

You can apply custom style to a daisyUI themes using CSS:

```css
[data-theme="mytheme"] .btn {
  border-width: 2px;
  border-color: black;
}
```

## How to customize an existing theme?

In your tailwind.config.js, you can require an existing daisyUI theme and override some colors.  
In below example, I require and spread `light` theme and change its `primary` and `primary-focus` colors:

```js
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}
```
