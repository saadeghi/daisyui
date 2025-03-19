---
title: How to make a bidirectional site using Tailwind CSS and daisyUI
desc: Learn how to use CSS logical properties to make a bidirectional website using Tailwind CSS and daisyUI
published: true
date: 2024-03-01
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/bidirectional.webp
tags:
  - Guides
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

For years, making a bidirectional website was a pain. We had to make a LTR style first, then we had to override all the directional styles to make it RTL. But with the introduction of CSS logical properties, it's now easier than ever to make a bidirectional website.

## CSS Logical Properties

[CSS logical properties](https://web.dev/learn/css/logical-properties) are a set of properties that are used to define the logical direction of the content, rather than the physical direction.

To use CSS logical properties, you just need to replace directional properties with logical properties. For example, instead of using `margin-left`, you can use `margin-inline-start`. This way, the margin will be on the start side of the content, regardless of the direction of the content.

## It's even easier with Tailwind CSS and daisyUI

[Tailwind CSS (3.3+) already supports CSS logical properties](https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties). This means that you can use logical properties in your Tailwind CSS classes.

And [daisyUI 4](https://github.com/saadeghi/daisyui/discussions/2507) fully adapts to the logical properties and makes it even easier to make a bidirectional website.

All daisyUI components are now bidirectional by default. It means we don't use `left` or `right` anymore, we use `start` and `end` instead and it will automatically adapt to the direction of the content.

## Step 1

You need to use Tailwind CSS logical class names instead of directional class names.
Here's a list of some of the most common logical class names.

| ❌ Don't use | ✅ Use    |
| ------------ | --------- |
| `left-*`     | `start-*` |
| `right-*`    | `end-*`   |
| `ml-*`       | `ms-*`    |
| `mr-*`       | `me-*`    |
| `pl-*`       | `ps-*`    |
| `pr-*`       | `pe-*`    |

You can find the full list in the [Tailwind CSS blog](https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties).

## Step 2

Add `dir=rtl` to the root element of your website for RTL languages. This will automatically change the direction of the content based on the language of the content.

## Step 3

That's it! Now whenever your website is RTL, all spacing and alignments will be automatically adjusted to the RTL direction. daisyUI components are bidirectional by default, so you don't need to do anything else.

## Conclusion

Making a bidirectional website is now easier than ever.
Try to make it a habit to use logical class names (like `ps-4` ,`ms-4`,…) instead of directional class names (like `pl-4`, `ml-4`,… ) in your CSS and you'll see how easy it is to make a bidirectional website.
