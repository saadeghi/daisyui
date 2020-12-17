# Theming guide
DaisyUI is themeable, powered by CSS variables.

[![](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/colors.png)](#) 

## Why we're not using default colors?
`Tailwind CSS` provides a wide range of colors and it won't limit your choice when you're styling your page but DaisyUI is about focusing on design systems and if you're creating a design system, you need to define your brand colors, set a design guideline and only use the chosen colors.  
Instead of using tailwind's general-purpose colors line `blue-600`, `green-200` or `gray-100` we use semantic role names like `primary`, `content-300` or `info`. This way, we can assign a color value to each role just use the role name in our markup (like `<div class='bg-primary'>`). Your markup doesn't care what color is `primary` and you can change primary color of your whole project using a CSS variable.  
This gives us the opportunity to create multiple themes using a few CSS variables.

## Color role names

|  | Name | CSS variable | Example | Description |
| - | - | - | - | - |
| **Base color** |
| <span style="color:hsl(0, 0%, 100%)">████</span> | default | `--d` | `bg-default` | The base color of your design system |
| **Brand colors** |
| <span style="color:hsl(259, 94%, 61%)">████</span> | primary-lighten | `--p1` | `bg-primary-lighten` | Brand color (lighten) |
| <span style="color:hsl(259, 94%, 51%)">████</span> | primary | `--p2` | `bg-primary` | Brand color |
| <span style="color:hsl(259, 94%, 41%)">████</span> | primary-darken | `--p3` | `bg-primary-darken` | Brand color (darken) |
| <span style="color:hsl(314, 100%, 57%)">████</span> | secondary-lighten | `--s1` | `bg-secondary-lighten` | Secondary color (lighten) |
| <span style="color:hsl(314, 100%, 47%)">████</span> | secondary | `--s2` | `bg-secondary` | Secondary color |
| <span style="color:hsl(314, 100%, 37%)">████</span> | secondary-darken | `--s3` | `bg-secondary-darken` | Secondary color (darken) |
| <span style="color:hsl(174, 60%, 61%)">████</span> | accent-lighten | `--a1` | `bg-accent-lighten` | Accent color (lighten) |
| <span style="color:hsl(174, 60%, 51%)">████</span> | accent | `--a2` | `bg-accent` | Accent color |
| <span style="color:hsl(174, 60%, 41%)">████</span> | accent-darken | `--a3` | `bg-accent-darken` | Accent color (darken) |
| **Content colors** |
| <span style="color:hsl(220, 14%, 96%)">████</span> | content-100 | `--c1` | `bg-content-100` | Neutral colors, for content |
| <span style="color:hsl(228, 14%, 93%)">████</span> | content-200 | `--c2` | `bg-content-200` |  |
| <span style="color:hsl(220, 15%, 84%)">████</span> | content-300 | `--c3` | `bg-content-300` |  |
| <span style="color:hsl(218, 14%, 65%)">████</span> | content-400 | `--c4` | `bg-content-400` |  |
| <span style="color:hsl(220, 14%, 46%)">████</span> | content-500 | `--c5` | `bg-content-500` |  |
| <span style="color:hsl(220, 14%, 37%)">████</span> | content-600 | `--c6` | `bg-content-600` |  |
| <span style="color:hsl(219, 14%, 28%)">████</span> | content-700 | `--c7` | `bg-content-700` |  |
| <span style="color:hsl(222, 13%, 19%)">████</span> | content-800 | `--c8` | `bg-content-800` |  |
| <span style="color:hsl(223, 14%, 10%)">████</span> | content-900 | `--c9` | `bg-content-900` |  |
| <span style="color:hsl(0, 0%, 100%)">████</span> | content-primary | `--cp` | `bg-content-primary` | Foreground contnet color to use on a `primary` color |
| <span style="color:hsl(0, 0%, 100%)">████</span> | content-secondary | `--cs` | `bg-content-secondary` | Foreground contnet color to use on a `secondary` color |
| <span style="color:hsl(0, 0%, 100%)">████</span> | content-accent | `--ca` | `bg-content-accent` | Foreground contnet color to use on an `accent` color |
| **State colors** |
| <span style="color:hsl(207, 90%, 54%)">████</span> | info | `--in` | `bg-info` | For showing an `info` message|
| <span style="color:hsl(174, 100%, 29%)">████</span> | success | `--su` | `bg-success` | For showing a `success` message|
| <span style="color:hsl(36, 100%, 50%)">████</span> | warning | `--wa` | `bg-warning` | For showing a `warning` message|
| <span style="color:hsl(14, 100%, 57%)">████</span> | error | `--er` | `bg-error` | For showing an `error` message|


## HSL Colors
DaisyUI uses HSL color system for better theming. Every color variable must be the 3 values of HSL (hue, saturation, lightness) 

Example:
```css
/*
3 values are Hue, Saturation, Lightness
Will be used for hsl() CSS color 
*/
--p2: 340, 82%, 52%;

```

## How to customize themes
You can set up 3 values of H,S,L for each color in your CSS file. It can be your main Tailwind `CSS` file or a file you `@import` to your main CSS file

```css

:root {
  --d: 0, 0%, 100%; /* default color */

  --p1: 340, 82%, 62%; /* Primary color - light */
  --p2: 340, 82%, 52%; /* Primary color - normal */
  --p3: 340, 82%, 42%; /* Primary color - dark */

  --s1: 262, 52%, 56%; /* Secondary color - light */
  --s2: 262, 52%, 46%; /* Secondary color - normal */
  --s3: 262, 52%, 36%; /* Secondary color - dark */

  --a1: 199, 98%, 58%; /* Accent color - light */
  --a2: 199, 98%, 48%; /* Accent color - normal */
  --a3: 199, 98%, 38%; /* Accent color - dark */

  --c1: 220, 14%, 96%; /* Content colors */
  --c2: 228, 14%, 93%;
  --c3: 220, 15%, 84%;
  --c4: 218, 14%, 65%;
  --c5: 220, 14%, 46%;
  --c6: 220, 14%, 37%;
  --c7: 219, 14%, 28%;
  --c8: 222, 13%, 19%;
  --c9: 223, 14%, 10%;

  --cp: 0, 0%, 100%; /* Foreground content color to use on a primary color */
  --cs: 0, 0%, 100%; /* Foreground content color to use on a secondary color */
  --ca: 0, 0%, 100%; /* Foreground content color to use on a accent color */

  --in: 207, 90%, 54%; /* Info */
  --su: 174, 100%, 29%; /* Success */
  --wa: 36, 100%, 50%; /* Warning */
  --er: 14, 100%, 57%; /* Error */
}

/* Let's add a second theme */

[data-theme='dark'] {
  --d: 223, 14%, 10%;

  --c9: 210, 20%, 98%;
  --c8: 220, 14%, 96%;
  --c7: 228, 14%, 93%;
  --c6: 220, 15%, 84%;
  --c5: 218, 14%, 65%;
  --c4: 220, 14%, 46%;
  --c3: 220, 14%, 37%;
  --c2: 219, 14%, 28%;
  --c1: 222, 13%, 19%;
}
```

As you can see, we are not overwriting brand colors for `dark` theme and only changing `default` color and `content` colors so it's the same theme with dark mode. The lightest colors are now the darkest ones and the text colors are light instead.

You can add more themes
```css
[data-theme='retro'] {
  --d: 45, 47%, 80%;

  --p2: 3, 74%, 66%;
  --p1: 3, 74%, 76%;
  --p3: 3, 74%, 56%;

  --s2: 145, 27%, 62%;
  --s1: 145, 27%, 72%;
  --s3: 145, 27%, 52%;

  --a2: 49, 67%, 66%;
  --a1: 49, 67%, 76%;
  --a3: 49, 67%, 56%;

  --cp: 345, 5%, 15%;
  --cs: 345, 5%, 15%;
  --ca: 345, 5%, 15%;

  --c9: 345, 5%, 15%;
  --c8: 41, 13%, 24%;
  --c7: 42, 17%, 42%;
  --c6: 41, 19%, 47%;
  --c5: 42, 20%, 52%;
  --c4: 42, 26%, 57%;
  --c3: 42, 36%, 65%;
  --c2: 45, 37%, 72%;
  --c1: 46, 42%, 76%;
}
```

## Respecting default color scheme
If you want to show dark mode for people who are using a dark mode on their OS:
```css
@media (prefers-color-scheme: dark){
  /* your dark theme here */
}
```

## How to active/change themes theme?
You just need to add `data-theme='dark'` to your `<body>`.
Easiest way to handle it with JavaScript is to this tiny library: [↗︎ theme-change](https://github.com/saadeghi/theme-change)

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
