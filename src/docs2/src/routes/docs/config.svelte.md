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
  },
}
```

## Config values explained:

- ### styled `default: true`

  If it's true, components will have colors and style so you won't need to design anything.  
  If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.

- ### themes `default: true`

  If it's true, all themes will be included.
  If it's false, only light theme will be available.  
  Read more about [themes](/docs/themes)

- ### base `default: true`

  If it's true, [a few base styles](https://github.com/saadeghi/daisyui/blob/master/src/base) will be added

- ### utils `default: true`

  If it's true, [responsive and utility classes](https://github.com/saadeghi/daisyui/tree/master/src/utilities) will be added

- ### logs `default: true`

  If it's true, daisyUI shows logs in terminal while CSS is building

- ### rtl `default: false`

  If it's true, your theme will be right-to-left. You need to add `dir="rtl"` to your body tag.  
  If you're using daisyUI with RTL option, I suggest using [tailwindcss-flip](https://github.com/cvrajeesh/tailwindcss-flip) plugin because to flip all your Tailwind utilities automatically.
