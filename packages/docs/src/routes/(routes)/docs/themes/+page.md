---
title: daisyUI themes
desc: How to use daisyUI themes?
---

<script>
  import ThemePreviews from "$components/ThemePreviews.svelte"
  import Translate from "$components/Translate.svelte"
  export let data
</script>

daisyUI comes with {data.themes.length} built-in themes that instantly transform your website's entire look - a time-saver that lets you focus on building rather than deciding on colors.  
You can also create your own custom themes or customize built-in themes.

You can manage themes by adding brackets in front of `@plugin "daisyui"` in your CSS file.

```diff:app.css
  @import "tailwindcss";
- @plugin "daisyui";
+ @plugin "daisyui" {
+   themes: light --default, dark --prefersdark;
+ }
```
- `themes` is a comma-separated list of theme names you want to enable.
- You can set `--default` flag for a theme to make it the default theme.
- You can also set `--prefersdark` flag for a theme to make it the default theme for dark mode (prefers-color-scheme: dark).

## Enable a built-in theme

By default, `light` and `dark` themes are enabled. Let's enable `cupcake` theme:  

```css:app.css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```
And set `cupcake` theme for the page:
```html:index.html
<html data-theme="cupcake"></html>
```

> :INFO:  <span><Translate text="I suggest using <a href='https://github.com/saadeghi/theme-change'>theme-change</a>, so you can switch themes and save selected theme in local storage." /></span>

## <Translate text="List of themes" />

<Translate text="Try them:" />

<ThemePreviews themes={data.themes}/>

## Enable all themes

Enable all {data.themes.length} built-in themes by setting `themes` to `all`:

```css:app.css
@import "tailwindcss";
@plugin "daisyui" {
  themes: all;
}
```

## Disable a theme

To disable `dark` theme for example, remove it from the list. Now only light theme is included:

```diff:app.css
 @import "tailwindcss";
 @plugin "daisyui" {
-  themes: light --default, dark --prefersdark;
+  themes: light --default;
 }
```

If for some reason you want to disable all themes and remove all daisyUI colors, set `themes` to `false`:

```css:app.css
@import "tailwindcss";
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

To add a new theme, use `@plugin "daisyui/theme" {}` in your CSS file, with the following structure:

```css:app.css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true; /* set as default */
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
  --depth: 1;
  --noise: 0;
}
```

If you're using CDN and you want to use a custom theme, use it like this:

```css:app.css
:root:has(input.theme-controller[value=mytheme]:checked),[data-theme="mytheme"] { /* mytheme is the name of the custom theme */
  color-scheme: light;
  --color-base-100: oklch(98% 0.02 240);
  /* ...rest of CSS variables like above example */
}
```

## <Translate text="How to customize an existing theme?" />

To customize a built-in theme, you can use the same structure as adding a new theme, but with the same name as the built-in theme. For example, to customize the `light` theme:

```css:app.css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: blue;
  --color-secondary: teal;
}
```
All the other values will be inherited from the original theme.

## <Translate text="How to add custom styles for a specific theme?" />

<Translate text="You can write custom style for your elements only for a specific theme." />
<Translate text="In this example, .my-btn class only will have this style on light theme." />

```css:app.css
[data-theme="light"] {
  .my-btn {
    background-color: #1EA1F1;
    border-color: #1EA1F1;
  }
  .my-btn:hover {
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
@import "tailwindcss";
@plugin "daisyui" {
  themes: winter --default, night --prefersdark;
}

@custom-variant dark (&:where([data-theme=night], [data-theme=night] *));
```
```html:index.html
<div class="p-10 dark:p-20">
  I will have 10 padding on winter theme and 20 padding on night theme
</div>
```
