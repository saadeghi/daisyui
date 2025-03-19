---
title: FAQ
desc: Frequently Asked Questions – Common problems and how to fix
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## Class names are not working
- Make sure you're not using [dynamic class names](https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names) (half-variable like `btn-{$color}`). If you do this, there is no way for Tailwind CSS to find your class names.
- Try using `@source` [Explicitly register sources](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources)  

## CSS files is too big
Using Tailwind CSS and daisyUI, it is expected for CSS files to be very small. Ideally only the class names you used must be in the CSS file. Sometimes (specially in monorepos) it is possible that [Tailwind CSS automatic class name detection](https://tailwindcss.com/docs/detecting-classes-in-source-files) finds some unwanted strings in your project and generate styles for them. To avoid this, you can [disable automatic detection](https://tailwindcss.com/docs/detecting-classes-in-source-files#disabling-automatic-detection) and register your source files using `@source` directive.

## checkbox/toggle/radio styles are broken
Probably you're using `@tailwindcss/forms` (or another style or plugin) that is affecting form elements.  
daisyUI applies styles to class names but `@tailwindcss/forms` by default, applies styles to all form elements.  
If you really need `@tailwindcss/forms` alongside with daisyUI (which I doubt, because both are doing the same job) consider using its [`strategy: 'class'` config](https://github.com/tailwindlabs/tailwindcss-forms#using-only-global-styles-or-only-classes) so it only applies style to the elements with specific class name (not all form elements)

## Themes are not working
- [Add the themes you want](https://daisyui.com/docs/themes/#enable-a-built-in-theme)
- Enable a theme using [`data-theme`](https://daisyui.com/docs/themes/#enable-a-built-in-theme) on your `<html>` tag:  
- If you're using a custom theme make sure you're using [all the required CSS variables](https://daisyui.com/docs/themes/#how-to-add-a-new-custom-theme)

## Tailwind's `dark:` prefix is not working
With daisyUI, you don't need to manually set colors using [`dark:` variant](https://daisyui.com/docs/colors/)  
As long as you use [daisyUI colors](https://daisyui.com/docs/colors/) they will work on all themes, light or dark.  
If you really want to use Tailwind's `dark:` variant, [here's how to do it](https://daisyui.com/docs/themes/#how-to-apply-tailwinds-dark-selector-for-specific-themes).
