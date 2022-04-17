---
title: daisyUI themes
desc: How to use daisyUI themes?
published: true
---

<script>
  import ThemePreviews from "@components/ThemePreviews.svelte"
  import Translate from "@components/Translate.svelte"
</script>

<Translate text="daisyUI comes with a number of themes, which you can use with no extra effort." />  
<Translate text="Each theme defines a set of colors which will be used on all daisyUI elements." />

<Translate text="To use a theme, add <code>data-theme</code> attribute to your <code><html></code> tag:" />

```html
<html data-theme="cupcake"></html>
```

> <Translate text="I suggest using <a href='https://github.com/saadeghi/theme-change'><code>theme-change</code></a>, so you can switch themes and save selected theme in local storage." />

## <Translate text="List of themes" />

<Translate text="Try them:" />

<ThemePreviews/>

```js
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
```

<Translate text="The default theme is <code>light</code> (or <code>dark</code> for dark mode)" />  
<Translate text="but you can <a href='https://daisyui.com/docs/config'>change the default theme from tailwind.config.js</a>" />

## <Translate text="How to remove unused themes?" />

<Translate text="You can only include the themes you want in your project." />  
<Translate text="This will reduce the size of your CSS file." />  
<Translate text="In below example" />

- <Translate text="<code>cupcake</code> will be the default theme for light mode" />
- <Translate text="<code>dark</code> will be the default theme for dark mode" />
- <Translate text="<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>" />

```js
module.exports = {
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}
```

## <Translate text="How to disable all themes?" />

<Translate text="If you only want the default <code>light</code> theme, set <code>themes</code> config to false." />

```js
module.exports = {
  //...
  daisyui: {
    themes: false,
  },
}
```

<Translate text="If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array." />

```js
module.exports = {
  //...
  daisyui: {
    themes: [],
  },
}
```

## <Translate text="How to use a theme only for a section of page?" />

<Translate text="Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme." />  
<Translate text="You can nest themes and there is no limit!" />

<Translate text="You can force a section of your HTML to only use a specific theme." />

```html
<html data-theme="dark">
  <div data-theme="light">
    This div will always use light theme
    <span data-theme="retro">This span will always use retro theme!</span>
  </div>
</html>
```

## <Translate text="How to add a new custom theme?" />

<Translate text="You can add a new theme from <code>tailwind.config.js</code> file." />  
<Translate text="In below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes." />

- <Translate text="The first theme (<code>mytheme</code>) will be the default theme." />
- <Translate text="<code>dark</code> theme will be the default theme for dark mode." />

<Translate text="In below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button)." />

<div class="alert alert-info text-sm mb-2 max-w-3xl not-prose">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <p>
      You can also add <a href='/docs/colors' class="link">optional color names</a> to have full control over all colors.
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

## <Translate text="CSS variables in daisyUI themes" />

<Translate text="There are a few optional CSS variables that you can use in daisyUI themes to customize design decisions for each theme:" />

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

## <Translate text="Custom CSS for a daisyUI theme" />

<Translate text="You can apply custom style to a daisyUI themes using CSS:" />

```css
[data-theme="mytheme"] .btn {
  border-width: 2px;
  border-color: black;
}
```

## <Translate text="How to customize an existing theme?" />

<Translate text="In your tailwind.config.js, you can require an existing daisyUI theme and override some colors." />  
<Translate text="In below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>primary-focus</code> colors:" />

```js
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}
```
