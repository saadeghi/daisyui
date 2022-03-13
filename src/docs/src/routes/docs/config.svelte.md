---
title: Config
desc: How to change the default configuration of daisyUI?
published: true
---

<script>
  import Translate from "@components/Translate.svelte"
</script>

<Translate text="daisyUI can be configured from your <code>tailwind.config.js</code> file." />  
<Translate text="Default config" />:

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
    prefix: "",
    darkTheme: "dark",
  },
}
```

## <Translate text="Config values explained" />:

- ### styled

  `Boolean (default: true)`

  <Translate text="If it's true, components will have colors and style so you won't need to design anything." />  
  <Translate text="If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton." />

- ### themes

  `Boolean or array (default: true)`

  <Translate text="If it's true, all themes will be included." />
  <Translate text="If it's false, only light (default) theme will be available." />  
  <Translate text="If it's an array, only themes in the array will be included and the first theme will be the default theme." />
  <Translate text="Read more about <a href='/docs/themes'>themes</a>" />

- ### base

  `Boolean (default: true)`

  <Translate text="If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added" />

- ### utils

  `Boolean (default: true)`

  <Translate text="If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added" />

- ### logs

  `Boolean (default: true)`

  <Translate text="If it's true, daisyUI shows logs in terminal while CSS is building" />

- ### rtl

  `Boolean (default: false)`

  <Translate text="If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag." />
  <Translate text="If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically." />

- ### darkTheme

  `String (default: "dark")`

  <Translate text="Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme." />

- ### prefix

  `String (default: "")`

  <Translate text="Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes)." />
  <Translate text="For example: <code>btn</code> will become <code>prefix-btn</code>." />  
  <Translate text="If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts." />
  <Translate text="Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes." />  
  <Translate text="If you use daisyUI `prefix` option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>." />
