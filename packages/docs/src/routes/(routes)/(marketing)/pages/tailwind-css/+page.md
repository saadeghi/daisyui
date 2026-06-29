---
title: Tailwind CSS
desc: Why Tailwind CSS is the most practical way to build scalable UIs, and how daisyUI makes it even better
layout: contentLanding
keywords: CSS framework, utility-first
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Building user interfaces for the web can get messy fast. You start with a few styles, but as your project grows, things get complicated:

## The usual headaches

- Writing custom CSS for every component takes too much time and leads to inconsistent designs.
- Using big frameworks like Bootstrap makes your site look generic, and customizing is a hassle.
- Copy-pasting styles between files creates a maintenance nightmare.
- CSS files get bloated, and you never know which classes are safe to delete.

All of this slows you down and makes scaling your UI harder than it should be.

## Why Tailwind CSS is different

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you use small, reusable utility classes right in your HTML. This approach solves a lot of problems:

- **No more naming things**: You don't have to invent class names for every style.
- **Consistent design**: Utility classes are based on your design system, so everything matches.
- **Less custom CSS**: Most of your styling happens in your markup, so your CSS files stay tiny.
- **Easy to refactor**: Want to change a color or spacing? Just update the class in your HTML.
- **Scales with your project**: Works for small sites and huge apps alike.

Here's what a really simple button looks like with Tailwind CSS:

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Click Me</button>
```

You get full control, and your styles are always in sync with your design system.


## Make Tailwind CSS even easier with daisyUI

Tailwind CSS is powerful, but writing out lots of utility classes can get repetitive. daisyUI helps with that.

daisyUI is a plugin for Tailwind CSS that gives you ready-made component classes like `btn`, `card`, and `alert`. It makes your HTML cleaner and your workflow faster:

```html
<button class="btn">Click Me</button>
```

You still get all the flexibility of Tailwind, but with less typing and more readable code. Plus, daisyUI comes with themes, so you can change your site's look with a single attribute.

If you want to build scalable UIs quickly, and enjoy the process, Tailwind CSS and daisyUI are a great combo.
