# Theming guide
DaisyUI is fully themeable, powered by CSS variables.

[![](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/colors.png)](#) 

## Colors
If you want to use your custom colors, you need to define the color values in your css. Colors must be themeable so we're using CSS Variables. 

Instead of using color names, we use the semantic role name for colors so we can change them anytime on any theme.
##### Base color
- `--d` is the base color of your design system. It's usually a white background color (or a dark color for dark themes)
##### Brand colors
- `--p2` is the main brand color.
  - `--p1`
  - `--p3`
- `--s2` is the second color of your theme.
  - `--s1`
  - `--s3`
- `--a2` is the accent color that can be used in some situations.
  - `--a1`
  - `--a3`
##### Content colors
- `--c1 ~ 900` 9 shade of neutral colors used for content mainly
- `--cp` foreground content for primary elements
- `--cs` foreground content for secondary elements
- `--ca` foreground content for accent elements
##### State colors
- `--in` color variant
- `--su` color variant
- `--wa` color variant
- `--er` color variant

## HSL Colors
DaisyUI uses HSL color system for better theming. Every color variable must be the 3 values of HSL (hue, saturation, lightness) 

## Example
You can set up 3 values of H,S,L for each color in your CSS file. It can be your main Tailwind `CSS` file or a file you `@import` to your main CSS file

```css

:root {

  --d: 0, 0%, 100%;

  --p2: 340, 82%, 52%;
  --p1: 340, 82%, 62%;
  --p3: 340, 82%, 42%;

  --s2: 262, 52%, 46%;
  --s1: 262, 52%, 56%;
  --s3: 262, 52%, 36%;

  --a2: 199, 98%, 48%;
  --a1: 199, 98%, 58%;
  --a3: 199, 98%, 38%;

  --cp: 0, 0%, 100%;
  --cs: 0, 0%, 100%;
  --ca: 0, 0%, 100%;

  --c1: 220, 14%, 96%;
  --c2: 228, 14%, 93%;
  --c3: 220, 15%, 84%;
  --c4: 218, 14%, 65%;
  --c5: 220, 14%, 46%;
  --c6: 220, 14%, 37%;
  --c7: 219, 14%, 28%;
  --c8: 222, 13%, 19%;
  --c9: 223, 14%, 10%;

  --in: 207, 90%, 54%;
  --su: 174, 100%, 29%;
  --wa: 36, 100%, 50%;
  --er: 14, 100%, 57%;
}

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

As you can see, we are keeping brand colors for `dark` theme and only changing `default` color and `content` colors so it's the same theme with dark mode. The lightest colors are now the darkest ones and the text colors are light instead.

You can add any other themes
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

## How to change theme?
You just need to add `data-theme='dark'` to your `<body>`.
Easiest way to handle it with JavaScript is to this tiny library: [↗︎ theme-change](https://github.com/saadeghi/theme-change)

## Fixing PurgeCSS issue
⚠️ If you're using [Purge CSS](https://purgecss.com/), you might need to [safe list](https://purgecss.com/safelisting.html#in-the-css-directly) your CSS using the comments below because your secondary themes will be purged
```
/*! purgecss start ignore */

[data-theme='dark'] {
  ...
}

/*! purgecss end ignore */
```

---
