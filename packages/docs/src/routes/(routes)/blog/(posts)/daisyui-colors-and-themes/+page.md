---
title: All about daisyUI color system and comparing it to Tailwind CSS color names
desc: Why use semantic color names instead of Tailwind CSS color shades? Accessing to all color shades or using a color system... Which one is better?
published: true
date: 2023-9-11
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/semantic-colors.webp
tags:
  - Reviews
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Tailwind CSS as a general purpose utility-first CSS framework, provides all the color shades you may need for your website. Basically every shade of every color. However it's not a good idea to have all those colors in your website. You should choose a few colors and use them consistently across your website.

A good design practice is to have a color system with semantic color names.
A standard approach is to have brand color names like `primary`, `secondary`, `accent`, and state colors like `success`, `warning`, `error`, `info`. In addition to some neutral color shades for the background, text, and border colors.
![Semantic colors](https://img.daisyui.com/images/blog/daisyui-semantic-colors.webp)
daisyUI offers a limited set of semantic color names where can have any value (thanks to CSS variables).

Using this color system your website can have a different look and feel by simply changing the color values once. You don't need to change the color of each element individually.

Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like primary, secondary, etc. and we only use those specific colors in our interfaces. Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.

Read more about [daisyUI color system](https://daisyui.com/docs/colors).
