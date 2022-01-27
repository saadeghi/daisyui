---
title: How to add daisyUI themes
desc:
published: true
---

daisyUI comes with a number of themes, which you can use with no extra effort.  
Each theme defines a set of colors which will be used on all daisyUI elements.

To use a theme, you need `data-theme` attribute to your `<html>` tag:

```html
<html data-theme="cupcake"></html>
```

> I suggest using [`theme-change`](https://github.com/saadeghi/theme-change), so you can switch themes and save selected theme in local storage.

## List of themes:

```
light
dark
cupcake
bumblebee
emerald
corporate
synthwave
retro
cyberpunk
valentine
halloween
garden
forest
aqua
lofi
pastel
fantasy
wireframe
black
luxury
dracula
cmyk
```

The default theme is `light` (or `dark` for dark mode)  
but you can [change the default theme from tailwind.config.js](https://daisyui.com/docs/config)

To make your own theme, see [add themes](https://daisyui.com/docs/add-themes) page

## How to use only the themes you want?

You can only include the themes you want in your project.  
This will reduce the size of your CSS file.

```js
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake", "cmyk"],
  },
}
```

## How to disable themes?

If you don't want to include themes, you need to disable `themes` config.

```js
module.exports = {
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
