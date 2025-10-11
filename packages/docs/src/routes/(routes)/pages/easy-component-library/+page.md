---
title: daisyUI is an easy component library
desc: Why daisyUI is the easiest Tailwind CSS component library for real-world projects
layout: contentLanding
keywords: easy component library, simple component library, easy to use, user-friendly components, hassle-free styling
---

<script>
  import Translate from "$components/Translate.svelte"
</script>


Making a website look good is harder than it sounds, especially when you're new to web development. There are a bunch of ways to style your site, but each one comes with its own headaches.

## The usual problems

- **Writing CSS from scratch** takes forever and your designs end up looking different on every page.
- **Bootstrap and similar frameworks** make your site look like everyone else's, and changing things is a pain.
- **Tailwind CSS** is powerful, but your HTML turns into a wall of class names that's hard to read.
- **Component libraries tied to a framework** add extra dependencies and lock you in, so you can't easily reuse your code elsewhere.

All of this makes building websites feel more complicated than it should be.


## Why daisyUI is actually easy

daisyUI is a Tailwind CSS plugin that skips the usual pain. Here's what makes it different:

### 1. Class names that make sense

You get simple names like `btn`, `card`, and `alert`. Your HTML is short and easy to read:

```html
<button class="btn">Click Me</button>
```

### 2. No JavaScript needed

Everything is just CSS. You don't have to mess with JavaScript to get things like dropdowns working:

```html
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Menu</label>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### 3. Use it anywhere

It works with plain HTML, React, Vue, Svelte, whatever you want. You're not locked in.

### 4. Themes are easy

Switch your site's look by changing a single attribute. There are 35+ built-in themes:

```html
<html data-theme="dark">
  <!-- your content -->
</html>
```

### 5. Fits your skill level

If you're new, just use the components as they are. If you want to customize, add Tailwind classes. It grows with you. If you want something even more lightweight, check out daisyUI is a minimal CSS framework.

## How to start

1. Install daisyUI in your Tailwind CSS project:

```bash
npm i -D daisyui
```

2. Add daisyUI to your CSS:

```css
@import "tailwindcss";
@plugin "daisyui";
```

For more details, check the [daisyUI installation guide](/docs/install/).

With daisyUI, you can focus on building your site instead of fighting with your tools.
