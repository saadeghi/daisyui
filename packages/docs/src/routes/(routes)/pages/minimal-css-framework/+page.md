---
title: daisyUI is a minimal CSS framework
desc: Why daisyUI is the simple, minimal alternative to heavy component libraries and complex CSS frameworks
layout: contentLanding
keywords: minimal css framework, lightweight css framework, no dependencies, small bundle size, performance focused, bloat-free
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Building modern UIs often means dealing with a lot of bloat. Many component libraries are tied to a specific framework, come with a pile of dependencies, and add a lot of weight to your project. You end up with:

- Huge bundle sizes that slow down your site
- Dozens of dependencies to keep updated (and hope they don't break)
- Locked-in markup that's hard to reuse outside that framework
- Complex build steps and configuration

All of this makes your project harder to manage and slows down your workflow.

## Why daisyUI is different

daisyUI is a minimal CSS framework built on top of Tailwind CSS. It gives you the building blocks you need, like buttons, cards, and alerts, without the baggage:

- No JavaScript required
- No framework lock-in (works with any frontend stack)
- Tiny footprint compared to big libraries
- Simple class names that are easy to remember
- No extra dependencies to manage


## See the difference: before and after daisyUI


Here's what a real-world button with dark mode support looks like with plain Tailwind CSS:

```html
<button
  class="bg-zinc-100 border font-semibold text-zinc-900 
  text-sm px-4 duration-200 py-2.5 transition-all hover:border-zinc-300 
  hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 
  focus-visible:outline-zinc-900 active:translate-y-[0.5px] inline-flex gap-2 
  rounded-sm active:border-zinc-300 active:bg-zinc-200 active:shadow-none 
  text-center align-middle cursor-pointer border-zinc-200 dark:border-zinc-700 
  dark:bg-neutral-700 dark:text-zinc-300 dark:hover:border-zinc-950 
  dark:hover:bg-zinc-950 dark:focus-visible:outline-zinc-200 
  dark:active:border-zinc-950 dark:active:bg-zinc-900"
>
  Click Me
</button>
```

And here's the same button with daisyUI:

```html
<button class="btn">Click Me</button>
```

With daisyUI, you get the same features, hover, focus, disabled states, and more, without the wall of class names. Your code is easier to read and maintain. daisyUI is so easy to use, even a beginner can use it for a school project.

If you want a minimal, practical way to build UIs, without the headaches, daisyUI is a great choice.
