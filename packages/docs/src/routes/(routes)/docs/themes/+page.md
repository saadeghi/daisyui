---
alert: This page is not up to date. Some of the examples might not work as expected.
title: daisyUI themes
desc: How to use daisyUI themes?
published: true
---

<script>
  import ThemePreviews from "$components/ThemePreviews.svelte"
  import Translate from "$components/Translate.svelte"
  export let data
</script>

<Translate text="daisyUI comes with a number of themes, which you can use with no extra effort." />
<Translate text="Each theme defines a set of colors which will be used on all daisyUI elements." />

<Translate text="To use a theme, add its name in <span class=badge>tailwind.config.js</span> and activate it by adding <span class=badge>data-theme</span> attribute to <span class=badge>HTML</span> tag:" />

```css:app.css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```

```html:index.html
<html data-theme="cupcake"></html>
```

> :INFO:  <span><Translate text="I suggest using <a href='https://github.com/saadeghi/theme-change'>theme-change</a>, so you can switch themes and save selected theme in local storage." /></span>

## <Translate text="List of themes" />

<Translate text="Try them:" />

<ThemePreviews themes={data.themes}/>

```css:app.css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, abyss, silk;
}
```

<Translate text="The default theme is <code>light</code> (or <code>dark</code> for dark mode)" />
<Translate text="but you can <a href='https://daisyui.com/docs/config/'>change the default theme from tailwind.config.js</a>" />

## <Translate text="How to remove unused themes?" />

<Translate text="You can include only the themes you want in your project." />  
<Translate text="This will reduce the size of your CSS file." />  
<Translate text="In the below example" />

- <Translate text="<code>cupcake</code> will be the default theme for light mode" />
- <Translate text="<code>dark</code> will be the default theme for dark mode" />
- <Translate text="<code>cmyk</code> can be applied on any HTML tag with <code>data-theme='cmyk'</code>" />

```css:app.css
@plugin "daisyui" {
  themes: cupcake --default, dark --prefersdark, cmyk;
}
```

## <Translate text="How to disable all themes?" />

<Translate text="If you only want the default light and dark themes, set <code>themes</code> config to false." />

```css:app.css
@plugin "daisyui" {
themes: light --default;
}
```

<Translate text="If you don't want to include any themes and disable all colors, set <code>themes</code> config to an empty array." />

```css:app.css
@plugin "daisyui" {
  themes: false;
}
```

## <Translate text="How to use a theme only for a section of a page?" />

<Translate text="Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme." />
<Translate text="You can nest themes and there is no limit!" />

<Translate text="You can force a section of your HTML to only use a specific theme." />

```html:index.html
<html data-theme="dark">
  <div data-theme="light">
    This div will always use light theme
    <span data-theme="retro">This span will always use retro theme!</span>
  </div>
</html>
```

## <Translate text="How to add a new custom theme?" />

<Translate text="You can add a new theme from <code>tailwind.config.js</code> file." />
<Translate text="In the below example, I added a new theme called <code>mytheme</code> and I'm also including <code>dark</code> and <code>cupcake</code> themes." />

- <Translate text="The first theme (<code>mytheme</code>) will be the default theme." />
- <Translate text="<code>dark</code> theme will be the default theme for dark mode." />

<Translate text="In the below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a <code>primary</code> button)." />

> :INFO: <Translate text="You can also add <a href='/docs/colors/' class='link'>optional color names</a> to have full control over all colors." />

```css:app.css
@plugin "daisyui/theme" {
  name: "mytheme";
  default: false; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  /* border radius */
  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;

  /* base sizes */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  /* border size */
  --border: 1px;

  /* effects */
  --gloss: 1;
  --noise: 0;
}
```

## <Translate text="Custom CSS for a daisyUI theme" />

<Translate text="You can apply custom style to a daisyUI themes using CSS:" />

```css:app.css
[data-theme="mytheme"] .btn {
  border-width: 2px;
  border-color: black;
}
```

## <Translate text="How to customize an existing theme?" />

<Translate text="In your tailwind.config.js, you can require an existing daisyUI theme and override some colors." />
<Translate text="In the below example, I require and spread <code>light</code> theme and change its <code>primary</code> and <code>secondary</code> colors:" />

```css:app.css
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: blue;
  --color-secondary: teal;
}
```

## <Translate text="How to add custom styles for a specific theme?" />

<Translate text="You can write custom style for your elements only for a specific theme." />
<Translate text="In this example, .my-btn class only will have this style on light theme." />

```css:app.css
[data-theme="light"] {
  .my-btn: {
    background-color: #1EA1F1;
    border-color: #1EA1F1;
  }
  .my-btn:hover: {
    background-color: #1C96E1;
    border-color: #1C96E1;
  }
}
```

## <Translate text="How to apply Tailwind's 'dark:' selector for specific themes" />

<Translate text="daisyUI can be configured to use Tailwind's `dark:` prefix" />
<Translate text="For example if you want a padding only for a daisyUI dark theme you can use `dark:p-10`"/>

<Translate text="In the example below, 'night' is darkmode theme so we add it to `@variant dark`"/>

```css:app.css
@plugin "daisyui" {
  themes: winter --default, night --prefersdark;
}

@variant dark (&:where([data-theme=night], [data-theme=night] *));
```
```html:index.html
<div class="p-10 dark:p-20">
  I will have 10 padding on winter theme and 20 padding on night theme
</div>
```
