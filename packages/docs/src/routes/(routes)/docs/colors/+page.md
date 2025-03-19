---
title: Colors
desc: How to use daisyUI colors?
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <Translate text="Introduction" />

<Translate text="daisyUI is fully themeable and colorable," />
<Translate text="So instead of using constant color utility classes like:" />

- <span class="badge badge-xs bg-green-500"></span> bg-green-500
- <span class="badge badge-xs bg-orange-600"></span> bg-orange-600
- <span class="badge badge-xs bg-blue-700"></span> bg-blue-700
- <Translate text="etc." />

<Translate text="It's suggested to use semantic color utility classes like:" />

- <span class="badge badge-xs bg-primary"></span> bg-primary
- <span class="badge badge-xs bg-secondary"></span> bg-secondary
- <span class="badge badge-xs bg-accent"></span> bg-accent
- <Translate text="etc." />

<Translate text="Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied." />

## <Translate text="Benefits" />

<Translate text="Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces." />
<Translate text="Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables." />

Example of theming a div with hardcoded color values

<div class="lg:grid lg:grid-cols-2 gap-4">
<div>

*Using hardcoded color names*

<div class="p-10 bg-zinc-100 rounded-2xl">
  <div class="p-6 bg-zinc-50 border-2 border-zinc-200 text-zinc-800 rounded-lg [text-wrap:balance]">
    This is a hardcoded dark text on a light background,
    it needs double the amount of class names to support dark mode.
  </div>
</div>

```html
<div class="bg-zinc-100">
  <div class="bg-zinc-50 border-zinc-200 text-zinc-800">
    This is a hardcoded dark text on a light background,
    it needs double the amount of class names to support dark mode.
  </div>
</div>
```
- 🪦 Fixed color names, hardcoded based on the value
- 🚫 No automatic dark mode
- 😵‍💫 You have to add dark-mode colors for every element
- 💸 high maintenance cost
- 🐢 slow development
- 😩 hard to change a theme
- ⛓️‍💥 high chance of inconsistency
- 😰 You are limited to 2 themes only: light and dark


</div>
<div>

*Using semantic color names*

<div class="p-10 bg-base-200 rounded-2xl">
  <div class="p-6 bg-base-100 border-2 border-base-300 text-base-content rounded-lg [text-wrap:balance]">
    This is dark text on a light background,
    which switches to light text on a dark background in dark mode.
  </div>
</div>

```html
<div class="bg-base-200">
  <div class="bg-base-100 border-base-300 text-base-content">
    This is dark text on a light background,
    which switches to light text on a dark background in dark mode.
  </div>
</div>
```
- 🎯 Semantic names, based on the purpose of the color
- ✨ Automatic dark mode
- 🌓 No need to add any dark-mode class names
- 🤑 Zero maintenance cost to add a theme
- 🚀 Fast development
- ⚡️ Easy to change themes
- 📘 All colors are consistent based on the design system
- ♾️ Unlimited themes, easy to switch

</div>
</div>


## <Translate text="List of all daisyUI color names" />

<Translate text="You can use these color names in your theme or in utility classes." />

<div class="overflow-x-auto">
<div class="whitespace-nowrap">

|                                                  | Color name        | CSS variable                | Where to use                                                       |
|--------------------------------------------------|-------------------|-----------------------------|--------------------------------------------------------------------|
| <span class="badge bg-primary"></span>           | primary           | `--color-primary`           | Primary brand color, The main color of your brand                  |
| <span class="badge bg-primary-content"></span>   | primary-content   | `--color-primary-content`   | Foreground content color to use on `primary` color <br/><br/>      |
| <span class="badge bg-secondary"></span>         | secondary         | `--color-secondary`         | Secondary brand color, The optional, secondary color of your brand |
| <span class="badge bg-secondary-content"></span> | secondary-content | `--color-secondary-content` | Foreground content color to use on `secondary` color <br/><br/>    |
| <span class="badge bg-accent"></span>            | accent            | `--color-accent`            | Accent brand color, The optional, accent color of your brand       |
| <span class="badge bg-accent-content"></span>    | accent-content    | `--color-accent-content`    | Foreground content color to use on `accent` color <br/><br/>       |
| <span class="badge bg-neutral"></span>           | neutral           | `--color-neutral`           | Neutral dark color, For not-saturated parts of UI                  |
| <span class="badge bg-neutral-content"></span>   | neutral-content   | `--color-neutral-content`   | Foreground content color to use on neutral color <br/><br/>        |
| <span class="badge bg-base-100"></span>          | base-100          | `--color-base-100`          | Base surface color of page, used for blank backgrounds             |
| <span class="badge bg-base-200"></span>          | base-200          | `--color-base-200`          | Base color, darker shade, to create elevations                     |
| <span class="badge bg-base-300"></span>          | base-300          | `--color-base-300`          | Base color, even more darker shade, to create elevations           |
| <span class="badge bg-base-content"></span>      | base-content      | `--color-base-content`      | Foreground content color to use on `base` color <br/><br/>         |
| <span class="badge bg-info"></span>              | info              | `--color-info`              | Info color, For informative/helpful messages                       |
| <span class="badge bg-info-content"></span>      | info-content      | `--color-info-content`      | Foreground content color to use on `info` color                    |
| <span class="badge bg-success"></span>           | success           | `--color-success`           | Success color, For success/safe messages                           |
| <span class="badge bg-success-content"></span>   | success-content   | `--color-success-content`   | Foreground content color to use on `success` color                 |
| <span class="badge bg-warning"></span>           | warning           | `--color-warning`           | Warning color, For warning/caution messages                        |
| <span class="badge bg-warning-content"></span>   | warning-content   | `--color-warning-content`   | Foreground content color to use on `warning` color                 |
| <span class="badge bg-error"></span>             | error             | `--color-error`             | Error color, For error/danger/destructive messages                 |
| <span class="badge bg-error-content"></span>     | error-content     | `--color-error-content`     | Foreground content color to use on `error` color                   |

</div>
</div>

## <Translate text="How to use" />

<Translate text="Some daisyUI components come with modifier class names and that modifier class name will apply a color." />

<Translate text="For example" />:

```html
<button class="btn btn-primary">Button</button>
```

<Translate text="Or" />:

```html
<input type="checkbox" class="checkbox checkbox-secondary" />
```

These components automatically set the correct background color, text color, border color, etc as needed so you don't need to set those colors manually. For example `btn-primary` sets `primary` color for background and border, and sets `primary-content` color for the text automatically as default. You can customize them using utility classes if you want to change the color.

<Translate text="You can also use color names in utility classes just like Tailwind's original color names." />
<Translate text="These are utility classes that can be used with a color name:" />

| CSS Class                  |                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `bg-{COLOR_NAME}`          | Also available on CDN [/colors/properties.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties.css)                   |
| `text-{COLOR_NAME}`        | Also available on CDN [/colors/properties.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties.css)                   |
| `border-{COLOR_NAME}`      | Also available on CDN [/colors/properties.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties.css)                   |
| `from-{COLOR_NAME}`        | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `via-{COLOR_NAME}`         | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `to-{COLOR_NAME}`          | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `ring-{COLOR_NAME}`        | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `fill-{COLOR_NAME}`        | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `stroke-{COLOR_NAME}`      | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `shadow-{COLOR_NAME}`      | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `outline-{COLOR_NAME}`     | Also available on CDN [/colors/properties-extended.css](https://cdn.jsdelivr.net/npm/daisyui@5/colors/properties-extended.css) |
| `divide-{COLOR_NAME}`      |                                                                                                                                   |
| `accent-{COLOR_NAME}`      |                                                                                                                                   |
| `caret-{COLOR_NAME}`       |                                                                                                                                   |
| `decoration-{COLOR_NAME}`  |                                                                                                                                   |
| `placeholder-{COLOR_NAME}` |                                                                                                                                   |
| `ring-offset-{COLOR_NAME}` |                                                                                                                                   |


So you can use `bg-primary`, `border-secondary`, etc. Read more about [daisyUI color utility classes](/docs/utilities).

## Color opacity and muted colors

`base-content` is the text color of the page by default. It's a dark color on light themes and it's a light color on dark themes. 

<div class="grid md:grid-cols-2 gap-10">
  <div class="relative bg-base-100 p-10 border border-base-content/10 rounded-box" data-theme="nord">
    <div class="badge badge-xs absolute end-2 top-2">nord theme</div>
    <div class="text-base-content">text-base-content</div>
  </div>
  <div class="relative bg-base-100 p-10 border border-base-content/10 rounded-box" data-theme="dracula">
    <div class="badge badge-xs absolute end-2 top-2">dracula theme</div>
    <div class="text-base-content">text-base-content</div>
  </div>
</div>

Sometimes we need a muted text. something with less contrast. The best way to do this is using Tailwind CSS color opacity modifier by adding a `/50` (or any other value) to the end of color name. Like `text-base-content/50`

<div class="grid md:grid-cols-2 gap-10">
  <div class="relative bg-base-100 p-10 border border-base-content/10 rounded-box" data-theme="nord">
    <div class="badge badge-xs absolute end-2 top-2">nord theme</div>
    <div class="text-base-content">text-base-content</div>
    <div class="text-base-content/70">text-base-content/70</div>
    <div class="text-base-content/50">text-base-content/50</div>
    <div class="text-base-content/30">text-base-content/30</div>
  </div>
  <div class="relative bg-base-100 p-10 border border-base-content/10 rounded-box" data-theme="dracula">
    <div class="badge badge-xs absolute end-2 top-2">dracula theme</div>
    <div class="text-base-content">text-base-content</div>
    <div class="text-base-content/70">text-base-content/70</div>
    <div class="text-base-content/50">text-base-content/50</div>
    <div class="text-base-content/30">text-base-content/30</div>
  </div>
</div>

The advantage of using opacity is that it gives a constant result on all themes, for all colors.  
You can use it with any opacity value, you can use it for any color. For example primary-content:

<div class="grid md:grid-cols-2 gap-10">
  <div class="relative bg-primary p-10 border border-primary-content/10 rounded-box" data-theme="nord">
    <div class="badge badge-xs absolute end-2 top-2">nord theme</div>
    <div class="text-primary-content">text-primary-content</div>
    <div class="text-primary-content/50">text-primary-content/50</div>
  </div>
  <div class="relative bg-primary p-10 border border-primary-content/10 rounded-box" data-theme="dracula">
    <div class="badge badge-xs absolute end-2 top-2">dracula theme</div>
    <div class="text-primary-content">text-primary-content</div>
    <div class="text-primary-content/50">text-primary-content/50</div>
  </div>
</div>
