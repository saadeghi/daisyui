---
title: Config
desc: How to change the default configuration of daisyUI?
published: true
---

daisyUI can be configured from your `tailwind.config.js` file.  
Default config:

```js
module.exports = {
  //...

  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
}
```

## Config values explained:

- ### styled

  `Boolean (default: true)`

  If it's true, components will have colors and style so you won't need to design anything.  
  If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.

- ### themes

  `Boolean or array (default: true)`

  If it's true, all themes will be included.
  If it's false, only light (default) theme will be available.  
  If it's an array, only themes in the array will be included and the first theme will be the default theme.
  Read more about [themes](/docs/themes)

- ### base

  `Boolean (default: true)`

  If it's true, [a few base styles](https://github.com/saadeghi/daisyui/blob/master/src/base) will be added

- ### utils

  `Boolean (default: true)`

  If it's true, [responsive and utility classes](https://github.com/saadeghi/daisyui/tree/master/src/utilities) will be added

- ### logs

  `Boolean (default: true)`

  If it's true, daisyUI shows logs in terminal while CSS is building

- ### rtl

  `Boolean (default: false)`

  If it's true, your theme will be right-to-left. You need to add `dir="rtl"` to your body tag.  
  If you're using daisyUI with RTL option, I suggest using [tailwindcss-flip](https://github.com/cvrajeesh/tailwindcss-flip) plugin because to flip all your Tailwind utilities automatically.

- ### darkTheme

  `String (default: "dark")`

  Allows us to pick another theme for system's auto dark mode. By default, `dark` theme (or a custom theme named `dark`) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.

<!-- - ### prefix

  `String (default: "")`

  Adds a prefix to class name for all daisyUI components and their associated utilities.
  For example: `btn` will become `prefix-btn`.
  If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.
  Utility classes like color names (e.g. `bg-primary`) or border-radius (e.g. `rounded-box`) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.
  If you use daisyUI `prefix` option (like `daisy-`) and Tailwind CSS `prefix` option (like `tw-`) together, classnames will be prefixed like this: `tw-daisy-btn`. -->
