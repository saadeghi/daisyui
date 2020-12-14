# Theming guide
DaisyUI is fully themeable, powered by CSS variables.

[![](https://raw.githubusercontent.com/saadeghi/files/main/daisyui/colors.png)](#) 

## Colors
If you want to use your custom colors, you need to define the color values in your css. Colors must be themeable so we're using CSS Variables. 

Instead of using color names, we use the semantic role name for colors so we can change them anytime on any theme.
##### Base color
- `--color-default` is the base color of your design system. It's usually a white background color (or a dark color for dark themes)
##### Brand colors
- `--color-primary` is the main brand color.
  - `--color-primary-lighten`
  - `--color-primary-darken`
- `--color-secondary` is the second color of your theme.
  - `--color-secondary-lighten`
  - `--color-secondary-darken`
- `--color-accent` is the accent color that can be used in some situations.
  - `--color-accent-lighten`
  - `--color-accent-darken`
##### Content colors
- `--color-content-100 ~ 900` 9 shade of neutral colors used for content mainly
- `--color-content-primary` foreground content for primary elements
- `--color-content-secondary` foreground content for secondary elements
- `--color-content-accent` foreground content for accent elements
##### State colors
- `--color-info` color variant
- `--color-success` color variant
- `--color-warning` color variant
- `--color-error` color variant

## HSL Colors
DaisyUI uses HSL color system for better theming. Every color variable must be the 3 values of HSL (hue, saturation, lightness) 

## Example
You can set up 3 values of H,S,L for each color in your CSS file. It can be your main Tailwind `CSS` file or a file you `@import` to your main CSS file

```

:root {

  --color-default: 0, 0%, 100%;

  --color-primary: 340, 82%, 52%;
  --color-primary-lighten: 340, 82%, 62%;
  --color-primary-darken: 340, 82%, 42%;

  --color-secondary: 262, 52%, 46%;
  --color-secondary-lighten: 262, 52%, 56%;
  --color-secondary-darken: 262, 52%, 36%;

  --color-accent: 199, 98%, 48%;
  --color-accent-lighten: 199, 98%, 58%;
  --color-accent-darken: 199, 98%, 38%;

  --color-content-primary: 0, 0%, 100%;
  --color-content-secondary: 0, 0%, 100%;
  --color-content-accent: 0, 0%, 100%;

  --color-content-100: 220, 14%, 96%;
  --color-content-200: 228, 14%, 93%;
  --color-content-300: 220, 15%, 84%;
  --color-content-400: 218, 14%, 65%;
  --color-content-500: 220, 14%, 46%;
  --color-content-600: 220, 14%, 37%;
  --color-content-700: 219, 14%, 28%;
  --color-content-800: 222, 13%, 19%;
  --color-content-900: 223, 14%, 10%;

  --color-info: 207, 90%, 54%;
  --color-success: 174, 100%, 29%;
  --color-warning: 36, 100%, 50%;
  --color-error: 14, 100%, 57%;
}

[data-theme='dark'] {
  --color-default: 223, 14%, 10%;

  --color-content-900: 210, 20%, 98%;
  --color-content-800: 220, 14%, 96%;
  --color-content-700: 228, 14%, 93%;
  --color-content-600: 220, 15%, 84%;
  --color-content-500: 218, 14%, 65%;
  --color-content-400: 220, 14%, 46%;
  --color-content-300: 220, 14%, 37%;
  --color-content-200: 219, 14%, 28%;
  --color-content-100: 222, 13%, 19%;
}
```

As you can see, we are keeping brand colors for `dark` theme and only changing `default` color and `content` colors so it's the same theme with dark mode. The lightest colors are now the darkest ones and the text colors are light instead.

You can add any other themes
```
[data-theme='retro'] {
  --color-default: 45, 47%, 80%;

  --color-primary: 3, 74%, 66%;
  --color-primary-lighten: 3, 74%, 76%;
  --color-primary-darken: 3, 74%, 56%;

  --color-secondary: 145, 27%, 62%;
  --color-secondary-lighten: 145, 27%, 72%;
  --color-secondary-darken: 145, 27%, 52%;

  --color-accent: 49, 67%, 66%;
  --color-accent-lighten: 49, 67%, 76%;
  --color-accent-darken: 49, 67%, 56%;

  --color-content-primary: 345, 5%, 15%;
  --color-content-secondary: 345, 5%, 15%;
  --color-content-accent: 345, 5%, 15%;

  --color-content-900: 345, 5%, 15%;
  --color-content-800: 41, 13%, 24%;
  --color-content-700: 42, 17%, 42%;
  --color-content-600: 41, 19%, 47%;
  --color-content-500: 42, 20%, 52%;
  --color-content-400: 42, 26%, 57%;
  --color-content-300: 42, 36%, 65%;
  --color-content-200: 45, 37%, 72%;
  --color-content-100: 46, 42%, 76%;
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
