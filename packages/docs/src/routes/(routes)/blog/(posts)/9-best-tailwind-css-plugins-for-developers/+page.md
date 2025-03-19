---
title: 9 essential Tailwind CSS plugins for developers
desc: In this post we will take a look at the list of best Tailwind CSS plugins to use in your next project
published: true
date: 2023-10-12
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/9-best-tailwind-css-plugins-for-developers.webp
tags:
  - Reviews
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Tailwind CSS is a utility-first CSS framework that is rapidly growing in popularity and there are many plugins that can boost your workflow and make your life easier.

**Let's begin!**

### How to install Tailwind CSS plugins?

Installing Tailwind CSS plugins is easy.

1. First you install the package. For example to install daisyUI plugin, you run:

```
npm i daisyui
```

2. Then you add the plugin to `tailwind.config.js` file in `plugins` array:

```js
module.exports = {
  plugins: [require("daisyui")],
}
```

### Here's the list of best Tailwind CSS plugins:

![daisyUI is the best Tailwind CSS component library](https://img.daisyui.com/images/blog/daisyui-tailwind-components.webp)

## 1. daisyUI

[daisyUI](https://daisyui.com/) is a free component library for Tailwind CSS that adds component class names to Tailwind CSS.
It helps you to build websites faster. daisyUI uses human-friendly and descriptive class names like `btn`, `card`, `toggle`, `alert`, `modal` etc. which helps you use less class names and keep your HTML clean.
daisyUI also comes with a lot of built-in themes and dark mode support so you don't have to write any additional class names to enable dark mode. It works out of the box.

Learn more about daisyUI:

- [Official docs](https://daisyui.com/)
- [GitHub](https://github.com/saadeghi/daisyui)

![tailwindcss/typography Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-typography.webp)

## 2. tailwindcss/typography

[tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) is the official Tailwind CSS plugin that adds default styles for all your text content.
 Typography plugin is made by the Tailwind CSS team and it's a must-have plugin for any Tailwind CSS project especially if you are building a blog or a website with a lot of text content. It plays well with Markdown content since all you have to do is to add `prose` class to your container and it will automatically style all your text content.

Learn more about Typography plugin:

- [Official docs](https://tailwindcss.com/docs/typography-plugin)
- [GitHub](https://github.com/tailwindlabs/tailwindcss-typography)

![tailwindcss/container-queries Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-container-queries.webp)

## 3. tailwindcss/container-queries

Another plugin from Tailwind team, [tailwindcss/container-queries](https://tailwindcss.com/docs/plugins#container-queries) adds the new cool CSS feature called [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries) to Tailwind CSS. Container queries are similar to media queries but instead of checking the screen size, they check the size of the container. This is useful if you want to change the layout of your website based on the size of the container.

Container queries are [supported by all modern browsers](https://caniuse.com/css-container-query-units) and soon the class names will be added to Tailwind CSS core, but for now you can use this plugin to implement container queries in your project.

Learn more about tailwindcss/container-queries

- [Official docs](https://tailwindcss.com/docs/plugins#container-queries)
- [GitHub](https://github.com/tailwindlabs/tailwindcss-container-queries)

![tailwindcss-flip Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-flip.webp)

## 4. tailwindcss-flip

[tailwindcss-flip](https://github.com/cvrajeesh/tailwindcss-flip) is a Tailwind CSS plugin that mirrors all your CSS properties to the opposite direction. For example if you have `mr-6` instead of `margin-right`, it will give you `margin-left`. This is useful if you want to support RTL languages like Arabic, Persian, Hebrew etc. Using tailwindcss-flip is effortless. All you have to do is to install it and add `dir="rtl"` to `<html>` tag.

Read more about tailwindcss-flip:

- [GitHub](https://github.com/cvrajeesh/tailwindcss-flip)

![tailwindcss-animate Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-animate.webp)

## 5. tailwindcss-animate

[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) adds animation class names to Tailwind CSS. It's much easier to use this plugin than adding your own animations in `tailwind.config.js` file. All you have to do is to install it and add `animate-<animation-name>` class to your element.

Learn more about tailwindcss-animate:

- [GitHub](https://github.com/jamiebuilds/tailwindcss-animate)

![tailwind-scrollbar-hide Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwind-scrollbar-hide.webp)

## 6. tailwind-scrollbar-hide

[tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide) plugin simply adds new utility class names to Tailwind CSS to hide scrollbars.

Learn more about tailwind-scrollbar-hide:

- [GitHub](https://github.com/reslear/tailwind-scrollbar-hide)

![tailwindcss/forms Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-forms.webp)

## 7. tailwindcss/forms

[tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) is a plugin from Tailwind team that adds default styles for all your form elements. Just be careful that if you're using this plugin along with any component library (like daisyUI), you should [enable `strategy: 'class'`](https://github.com/tailwindlabs/tailwindcss-forms#using-only-global-styles-or-only-classes) for this plugin so it only adds styles to elements you choose. Otherwise it will have conflicts because both plugins add styles to the same elements.

Learn more about tailwindcss/forms

- [GitHub](https://github.com/tailwindlabs/tailwindcss-forms)

![tailwindcss-opentype Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-opentype.webp)

## 8. tailwindcss-opentype

[tailwindcss-opentype](https://tailwindcss-opentype.netlify.app/) is a plugin that adds OpenType features to Tailwind CSS. If the fonts you're using has features like ligatures, kerning, alternate glyphs, etc. you definitely need this plugin to get most out of your fonts.

Read more about tailwindcss-opentype:

- [Official docs](https://tailwindcss-opentype.netlify.app/)
- [GitHub](https://github.com/stormwarning/tailwindcss-opentype)

![tailwindcss-3d Tailwind CSS plugin](https://img.daisyui.com/images/blog/tailwindcss-3d.webp)

## 9. tailwindcss-3d

[tailwindcss-3d](https://github.com/sambauers/tailwindcss-3d) adds 3D transforms to Tailwind CSS. It's useful if you want to have 3D transformations to elements. The good thing about tailwindcss-3d plugin is that the utility classes are independent. You can use utility classes for `x, y, z` axis separately.

Learn more about tailwindcss-3d:

- [GitHub](https://github.com/sambauers/tailwindcss-3d)

## Conclusion

Tailwind CSS plugins are a great way to extend Tailwind CSS and add new features to it.
You can search for more plugins on GitHub and NPM but if you didn't find what you're looking for, you can also create your own plugin using [Tailwind CSS API](https://tailwindcss.com/docs/plugins#adding-utilities)!

Thanks for reading!
