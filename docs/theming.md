# Theming guide
DaisyUI is themeable, powered by CSS variables.

## Table of contents
- [Why we're not using default colors?](#why-were-not-using-default-colors)
- [Semantic color names](#semantic-color-names)
- [HSL format](#hsl-format)
- [Using default themes](#using-default-themes)
  - [List of default themes](#list-of-default-themes)
  - [Using default themes from npm package](#using-default-themes-from-npm-package)
  - [Using default themes from CDN](#using-default-themes-from-CDN)
  - [Set up custom border radius for each theme](#set-up-custom-border-radius-for-each-theme)
- [How to customize themes](#how-to-customize-themes)
- [Respecting OS color scheme](#respecting-os-color-scheme)
- [How to enable/change themes theme?](#how-to-enablechange-themes)
- [Force a specific theme for a section](#force-a-specific-theme-for-a-section)
- [Fixing PurgeCSS issue](#fixing-purgecss-issue)

[![](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/colors.png)](#) 

## Why we're not using default colors?
`Tailwind CSS` provides a wide range of colors and it won't limit your choice when you're styling your page but DaisyUI is about focusing on design systems and if you're creating a design system, you need to define your brand colors, set a design guideline and only use the chosen colors.  
Instead of using tailwind's general-purpose colors like `blue-600`, `green-200` or `gray-100` we use semantic role names like `primary`, `content-300` or `info`. This way, we can assign a color value to each role, then use the role name in our markup (like `<div class='bg-primary'>`). Your markup doesn't care what color is `primary` and you can change primary color of your whole project using a CSS variable.  
This gives us the opportunity to create multiple themes using a few CSS variables.

## Semantic color names

|  | Name | CSS variable | Example | Description |
| - | - | - | - | - |
| **Base color** |
| ![#ffffff](http://via.placeholder.com/15/ffffff/000000?text=+) | default | `--d` | `bg-default` | The base color of your design system |
| **Brand colors** |
| ![#793ef9](http://via.placeholder.com/15/793ef9/000000?text=+) | primary-lighten | `--p1` | `bg-primary-lighten` | Brand color (lighten) |
| ![#570df8](http://via.placeholder.com/15/570df8/000000?text=+) | primary | `--p2` | `bg-primary` | Brand color |
| ![#4506cb](http://via.placeholder.com/15/4506cb/000000?text=+) | primary-darken | `--p3` | `bg-primary-darken` | Brand color (darken) |
| ![#ff24cc](http://via.placeholder.com/15/ff24cc/000000?text=+) | secondary-lighten | `--s1` | `bg-secondary-lighten` | Secondary color (lighten) |
| ![#f000b8](http://via.placeholder.com/15/f000b8/000000?text=+) | secondary | `--s2` | `bg-secondary` | Secondary color |
| ![#bd0091](http://via.placeholder.com/15/bd0091/000000?text=+) | secondary-darken | `--s3` | `bg-secondary-darken` | Secondary color (darken) |
| ![#60d7cb](http://via.placeholder.com/15/60d7cb/000000?text=+) | accent-lighten | `--a1` | `bg-accent-lighten` | Accent color (lighten) |
| ![#37cdbe](http://via.placeholder.com/15/37cdbe/000000?text=+) | accent | `--a2` | `bg-accent` | Accent color |
| ![#2aa79b](http://via.placeholder.com/15/2aa79b/000000?text=+) | accent-darken | `--a3` | `bg-accent-darken` | Accent color (darken) |
| **Content colors** |
| ![#f3f4f6](http://via.placeholder.com/15/f3f4f6/000000?text=+) | content-100 | `--c1` | `bg-content-100` | Neutral colors, for content |
| ![#ebecf0](http://via.placeholder.com/15/ebecf0/000000?text=+) | content-200 | `--c2` | `bg-content-200` |  |
| ![#d0d4dc](http://via.placeholder.com/15/d0d4dc/000000?text=+) | content-300 | `--c3` | `bg-content-300` |  |
| ![#99a2b2](http://via.placeholder.com/15/99a2b2/000000?text=+) | content-400 | `--c4` | `bg-content-400` |  |
| ![#657086](http://via.placeholder.com/15/657086/000000?text=+) | content-500 | `--c5` | `bg-content-500` |  |
| ![#515a6c](http://via.placeholder.com/15/515a6c/000000?text=+) | content-600 | `--c6` | `bg-content-600` |  |
| ![#3d4451](http://via.placeholder.com/15/3d4451/000000?text=+) | content-700 | `--c7` | `bg-content-700` |  |
| ![#2a2e37](http://via.placeholder.com/15/2a2e37/000000?text=+) | content-800 | `--c8` | `bg-content-800` |  |
| ![#16181d](http://via.placeholder.com/15/16181d/000000?text=+) | content-900 | `--c9` | `bg-content-900` |  |
| ![#ffffff](http://via.placeholder.com/15/ffffff/000000?text=+) | content-primary | `--cp` | `bg-content-primary` | Foreground color to use on `primary` |
| ![#ffffff](http://via.placeholder.com/15/ffffff/000000?text=+) | content-secondary | `--cs` | `bg-content-secondary` | Foreground color to use on `secondary` |
| ![#ffffff](http://via.placeholder.com/15/ffffff/000000?text=+) | content-accent | `--ca` | `bg-content-accent` | Foreground color to use on `accent` |
| **State colors** |
| ![#2094f3](http://via.placeholder.com/15/2094f3/000000?text=+) | info | `--in` | `bg-info` | For showing an `info` message|
| ![#009485](http://via.placeholder.com/15/009485/000000?text=+) | success | `--su` | `bg-success` | For showing a `success` message|
| ![#ff9900](http://via.placeholder.com/15/ff9900/000000?text=+) | warning | `--wa` | `bg-warning` | For showing a `warning` message|
| ![#ff5724](http://via.placeholder.com/15/ff5724/000000?text=+) | error | `--er` | `bg-error` | For showing an `error` message|


## HSL format
DaisyUI uses HSL color system for better theming. Every color variable must be the 3 values of HSL (hue, saturation, lightness) 

Example:
```css
/*
3 values are Hue, Saturation, Lightness
Will be used for hsl() CSS color 
*/
--p2: 340 82% 52%;

```

## Using default themes
DaisyUI gives you a few (optional) color themes.
You can see default themes at [daisyui.netlify.app](https://daisyui.netlify.app/)  

#### List of default themes
- `dark`
- `light`
- `black`
- `cyberpunk`
- `dracula`
- `valentine`
- `retro`
- `synthwave`

#### Using default themes from npm package
On `tailwind.config.js` file, you need to safelist `/data-theme$/` for purge options *and* you need to add `require('daisyui/themes')` to tailwind plugins.  
This adds [themes.css](https://unpkg.com/daisyui@latest/dist/themes.css) to your CSS file and also prevents purging inactive themes.  
```js
module.exports = {
  purge: {
    content: ['PATH_TO_YOU_FILES'],
    options: {
      safelist: [
        /data-theme$/, // 👈 
      ]
    },
  },
  plugins: [
    require('daisyui/styled'),
    require('daisyui/themes'), // 👈
  ],
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
}
```
and you need to add `data-theme='YOUR_THEME_NAME'` to `<html>` tag.  
```
<html data-theme="dark">
```
I suggest using [them-change](https://github.com/saadeghi/theme-change) for this, so you can switch themes and save selected theme in local storage.

#### Using default themes from CDN
Alternatively you can load default themes from cdn
```
<link href="https://unpkg.com/daisyui@latest/dist/themes.css" rel="stylesheet" type="text/css" />
```

## How to customize themes
You can set up 3 values of H,S,L for each color in your CSS file. It can be your main Tailwind `CSS` file or a file you `@import` to your main CSS file.  
You can easily do this on [DaisyUI Color Generator](https://daisyui.netlify.app/core/colors)

```css

:root {
  --d: 0 0% 100%; /* default color */

  --p1: 340 82% 62%; /* Primary color - light */
  --p2: 340 82% 52%; /* Primary color - normal */
  --p3: 340 82% 42%; /* Primary color - dark */

  --s1: 262 52% 56%; /* Secondary color - light */
  --s2: 262 52% 46%; /* Secondary color - normal */
  --s3: 262 52% 36%; /* Secondary color - dark */

  --a1: 199 98% 58%; /* Accent color - light */
  --a2: 199 98% 48%; /* Accent color - normal */
  --a3: 199 98% 38%; /* Accent color - dark */

  --c1: 220 14% 96%; /* Content colors */
  --c2: 228 14% 93%;
  --c3: 220 15% 84%;
  --c4: 218 14% 65%;
  --c5: 220 14% 46%;
  --c6: 220 14% 37%;
  --c7: 219 14% 28%;
  --c8: 222 13% 19%;
  --c9: 223 14% 10%;

  --cp: 0 0% 100%; /* Foreground content color to use on a primary color */
  --cs: 0 0% 100%; /* Foreground content color to use on a secondary color */
  --ca: 0 0% 100%; /* Foreground content color to use on a accent color */

  --in: 207 90% 54%; /* Info */
  --su: 174 100% 29%; /* Success */
  --wa: 36 100% 50%; /* Warning */
  --er: 14 100% 57%; /* Error */
}

/* Let's add a second theme */

[data-theme='dark'] {
  --d: 223 14% 10%;

  --c9: 210 20% 98%;
  --c8: 220 14% 96%;
  --c7: 228 14% 93%;
  --c6: 220 15% 84%;
  --c5: 218 14% 65%;
  --c4: 220 14% 46%;
  --c3: 220 14% 37%;
  --c2: 219 14% 28%;
  --c1: 222 13% 19%;
}
```

As you can see, we are not overwriting brand colors for `dark` theme and only changing `default` color and `content` colors so it's the same theme with dark mode. The lightest colors are now the darkest ones and the text colors are light instead.

You can add more themes
```css
[data-theme='retro'] {
  --d: 45 47% 80%;

  --p2: 3 74% 66%;
  --p1: 3 74% 76%;
  --p3: 3 74% 56%;

  --s2: 145 27% 62%;
  --s1: 145 27% 72%;
  --s3: 145 27% 52%;

  --a2: 49 67% 66%;
  --a1: 49 67% 76%;
  --a3: 49 67% 56%;

  --cp: 345 5% 15%;
  --cs: 345 5% 15%;
  --ca: 345 5% 15%;

  --c9: 345 5% 15%;
  --c8: 41 13% 24%;
  --c7: 42 17% 42%;
  --c6: 41 19% 47%;
  --c5: 42 20% 52%;
  --c4: 42 26% 57%;
  --c3: 42 36% 65%;
  --c2: 45 37% 72%;
  --c1: 46 42% 76%;
}
```
#### Set up custom border radius for each theme
You can also customize border-radius of elements for each theme. DaisyUI components use 3 additional border-radius values:  
```css
  --rounded-box: 1rem; /* used for cards and other big elements */
  --rounded-btn: 0.5rem; /* used for buttons and similar elements */
  --rounded-badge: 9999px; /* used for badges and other small elements */
```

## Respecting OS color scheme
If you want to show dark mode for people who are using a dark mode on their OS:
```css
@media (prefers-color-scheme: dark){
  :root{
    --d: 223 14% 10%;
    /* ...rest of colors */
  }
}
```

## How to enable/change themes?
You just need to add `data-theme='dark'` to your `<html>`.
Easiest way to handle it with JavaScript is to this tiny library: [↗︎ theme-change](https://github.com/saadeghi/theme-change)

## Force a specific theme for a section
You can force a section of your HTML to only use a specific theme.
```html
<html data-theme="dark">
  
  <div data-theme="light">
    This div will always use light theme
      <span data-theme="retro">
        This span will always use retro theme!
      </span>
  </div>

</html>
```
There is *no limit* on how deep you can go. Every HTML element can have its own theme!

## Fixing PurgeCSS issue
If you're using [Purge CSS](https://purgecss.com/), you might need to [safe list](https://purgecss.com/safelisting.html#in-the-css-directly) your CSS using the comments below because your secondary themes will be purged.  
Use CSS comments:
```css
/*! purgecss start ignore */
[data-theme='dark'] {
  ...
}
/*! purgecss end ignore */
```
Or add this to your PurgeCSS config:
```js
options: {
  safelist: [
    /data-theme$/,
  ],
},
```

---
