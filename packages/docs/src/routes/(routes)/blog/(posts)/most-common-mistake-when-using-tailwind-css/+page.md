---
title: The most common mistake when using Tailwind CSS (and how to fix it)
desc: While working on daisyUI, I see a lot of people making this mistake when using Tailwind CSS.
published: true
date: 2023-9-14
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/tailwind-mistake.webp
tags:
  - Guides
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

As a maintainer of daisyUI, I help people on GitHub issues and GitHub discussions every day. I see a lot of people making this mistake when using Tailwind CSS. It's so simple to avoid but I find it so common among developers.

## The mistake

Here's how we simply use Tailwind CSS class names in HTML:

```html
<div class="bg-red-500"></div>
<div class="bg-green-500"></div>
<div class="bg-blue-500"></div>
```

However it would be cool if we do some totally necessary engineering and make it more dynamic. So we do something like this:

```html
<div class="bg-{{ color }}-500"></div>
```

You might even want to do the same thing with daisyUI class names:

```html
<div class="btn btn-{{ type }}"></div>
instead of
<div class="btn-primary"></div>
```

It's cool, right?
It even works in dev environment.

Everything is fine...
😠 until we build our app for production and you realize the color is not working anymore

## Why it doesn't work?

Tailwind CSS scans your HTML files and looks for class names. Then it generates a CSS file based on the class names it finds. It's that simple. Because the string `bg-red-500` does not exist in `bg-{{ color }}-500`, it simply won't generate the CSS for it.

Read more about [using dynamic class names with Tailwind CSS](https://tailwindcss.com/docs/content-configuration#dynamic-class-names).

## But it was working in dev environment!

Yes, it was working because you probably first had `bg-red-500` in your file, you saved the file and `.bg-red-500` class name got added to your CSS. Then you changed it to `bg-{{ color }}-500` and saved the file again. `bg-red-500` is not in your HTML anymore, but it's still in your CSS file. So it works in dev environment, but not in production.

## But some class names work and some don't!

Probably because you used those class names the correct way (as a string like `bg-red-500`) in another file.

## Solutions

How to fix it?

Simply **do not** use dynamic class names like `bg-{{ color }}-500`. Make sure the whole class name as a string exists in your file.

```jsx
let color = 'bg-red-500'
<div class="{{ color }}"></div>
```

If you really have to do that, You have 3 ways:

### Solution 1: Add the class names somewhere in the file

Map the required class names somewhere in your file. It can be an object, a comment or anything.

### Solution 2: A safelist file

List all the required class names in a safelist file and add it to your `tailwind.config.js` file as `content`

```js
module.exports = {
  content: ["./path/safelist.txt"],
  // ...
}
```

`./path/safelist.txt` file can be simply like this:

```txt
bg-red-500
bg-green-500
bg-blue-500
```

### Solution 3: Safelist config

Safelist all the required class names in your `tailwind.config.js` file.

```js
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  // ...
  safelist: ["bg-red-500", "bg-green-500", "bg-blue-500"],
  // ...
}
```

You can also use regex patterns in safelist:

```js
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  // ...
  safelist: [
    "bg-teal-700",
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/,
    },
  ],
  // ...
}
```

Read more about [Tailwind CSS safelist](https://tailwindcss.com/docs/content-configuration#safelisting-classes).
