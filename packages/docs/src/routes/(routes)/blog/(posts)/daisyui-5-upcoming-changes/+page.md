---
title: What to expect from daisyUI 5?
desc: An overview of of daisyUI 5 upcoming changes and features
published: true
date: 2024-07-02
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/daisyui-5-flowers.webp
tags:
  - News
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

daisyUI 5 is in development and it will be released after Tailwind CSS 4 is released. Here's what you can expect from daisyUI 5 and how it will be different from the current version.

# Compatibility with Tailwind CSS 4

Tailwind CSS 4 is in development and I can't wait for it to be released. You can read the [official announcement](https://tailwindcss.com/blog/tailwindcss-v4-alpha) on the Tailwind CSS blog, but here are some of the highlights:

- New engine which is faster, smaller and more efficient
- Tailwind CSS 4 will use modern CSS features like `@layer`, `@property`, `color-mix()`, `@starting-style` , anchor positioning, container queries, and more
- Automatic content detection: No need for listing all your markup files in a config file. Tailwind CSS will automatically detect the class names in all your markup files and generate the necessary CSS.
- No need for `tailwind.config.js` file. Everything will be done directly in the CSS file.
- Tailwind CSS 4 will use CSS variables for colors and all other tokens.

Read more at [Tailwind CSS blog](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

# Upcoming Tailwind CSS 4 plugins API

Plugins API for Tailwind CSS 4 is still in development. Currently it's not possible to use daisyUI with the alpha version of Tailwind CSS 4, but as soon as the new API is released, we will update daisyUI to be compatible with it.

Plugins in Tailwind CSS 3 and below were expected to be CSS-in-JS. But it is expected to be pure CSS files in Tailwind CSS 4.

![tailwind css 4 plugins api syntax tweet](https://img.daisyui.com/images/blog/tailwind-css-4-plugins-api-syntax-tweet.webp)

This will make it easier to use daisyUI as a plugin in your Tailwind CSS project, and it will also make it easier for us to maintain and update daisyUI since it will be a pure CSS file, without any build process to convert CSS to CSS-in-JS.

>With the current alpha version of Tailwind CSS 4, technically you can import the whole CSS file of daisyUI in your project but it won't act as a Tailwind CSS plugin.
Which means it will include all unused class names in your production CSS file.
And you won't be able to use Tailwind CSS responsive prefixes like `lg:` with daisyUI class names. Because of this, it's important to use daisyUI as a Tailwind CSS plugin.
So let's wait for the new Tailwind CSS 4 plugins API to be released.

# No JS config

![Tailwind CSS 4 config](https://img.daisyui.com/images/blog/rip-tailwind-config-js.webp)


If Tailwind CSS 4 is going to allow importing CSS files as plugins, we won't need a JS config file for daisyUI. Everything will be done in the CSS file.

You will be able to include the daisyUI CSS file as a Tailwind CSS plugin using the CSS `@import` rule.

# Pure CSS files for each component and each theme

Previously, daisyUI was using a build process to convert the CSS files to CSS-in-JS. But with the upcoming Tailwind CSS 4 plugins API, we will be able to include pure CSS files for each component and each theme in the daisyUI source code.
This will make it possible to use specific components of daisyUI in your project without including the whole CSS file.

# Native CSS nesting

Native CSS nesting is now supported in all modern browsers.

Instead of using Post CSS nesting, we will use native CSS nesting in the upcoming version of daisyUI. This will reduce the size of the CSS files dramatically.

# No forced color format conversion

Colors in Tailwind CSS 4 will be defined as CSS variables and Tailwind CSS will use CSS `color-mix()` function to change the opacity of the colors. This means we won't need to convert the colors to a specific format to be used in Tailwind CSS.
daisyUI built-in themes will keep using OKLCH color format as it is currently the most ergonomic P3 color format, but you can use any color format for your custom themes and we won't convert them to OKLCH in the production CSS file just to be compatible with Tailwind CSS opacity utilities.

A challenge for daisyUI 5 will be to generate the optional colors (like `*-content`) as before because:
- We're not going to process the color values using JS in the build time if we're not going to use pure CSS files
- CSS `color-contrast()` function is [not supported in browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast) yet
- CSS `color-contrast()` function is [not supported in Lightning CSS](https://github.com/parcel-bundler/lightningcss/issues/99) (The CSS parser used by Tailwind CSS 4) yet.

# Less (or zero?) dependencies

daisyUI currently uses 4 dependencies:

- `postcss-js` to convert CSS to CSS-in-JS because Tailwind CSS 3 and below only accept CSS-in-JS syntax as plugins
- `culori` to convert colors
- `picocolors` for console colors
- `css-selector-tokenizer` for adding prefixes

If daisyUI package is going to include pure CSS files only, we can safely remove all these dependencies.
I'm not still sure how we can add prefixes to the daisyUI class names if we're not going to process the styles using Post CSS, But I will find a way.

# Container queries for responsive components

Container queries are now supported in all modern browsers. We will use them for components that need to be responsive based on their container width by default.

# CSS Popover API and anchor positioning

![daisyUI 5 dropdown popover API](https://img.daisyui.com/images/blog/daisyui-5-dropdown-popover.webp)


We've been using CSS `:focus` or `<details>` element for dropdowns in daisyUI as they were the best no-JS options we had at the time. The problem with them is, without using JS there's no way to close a dropdown by both clicking outside OR clicking the button. You had to choose one.
But now we have a new option: Native HTML [popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is now [supported in all modern browsers](https://caniuse.com/mdn-api_htmlelement_popover) and we will use it for dropdowns in daisyUI. There's also [CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) which can help about the positioning of the dropdowns, preventing them from going out of the viewport.

# Design improvements

Most components will have small design improvements. Not going to break your current design, but will make them all look better.

# New components

There will be new components in daisyUI 5. I will announce them when they are ready.

# Themes

daisyUI currently has 32 built-in themes. Probably we will have even more built-in themes in daisyUI 5.

And each of the existing themes will be a simple CSS file that you can include in your project (or you can include them all using one import rule). It feels good when everything is simple a CSS file, right?

# Smaller CSS size

![Reduce Tailwind CSS file size](https://img.daisyui.com/images/blog/css-file-size-daisyui-5.webp)

This year a lot of new CSS features got available in all modern browsers. And with the new Tailwind CSS 4 changes we will be able to make daisyUI styles simpler and the CSS files smaller.

# Customizable sizing for components

We will use CSS variables for the size value of component. This will make it easier to customize the size of all components in your project by changing a few CSS variables, instead of adding utility classes to each component.

This feature will give you more control over the size of the components and will make it even easier to have full control over the design of your project.

# Backward compatibility

daisyUI 5 will be compatible with Tailwind CSS 4 and all modern browsers.

daisyUI 4 will still be available for those who can't upgrade to Tailwind CSS 4 or if they want to support old browsers.

We will make sure that the upgrade process from daisyUI 4 to daisyUI 5 is as smooth as possible, and we will provide a migration guide.

# Conclusion

daisyUI 5 will be a major update, it will adapt to the new features of Tailwind CSS 4 and the new CSS features that are now available in all modern browsers. I'm excited for the release of Tailwind CSS 4 and I will make sure that daisyUI 5 is going to be ready as soon as possible after the release of Tailwind CSS 4.

Subscribe to the daisyUI newsletter to get notified about the updates.
