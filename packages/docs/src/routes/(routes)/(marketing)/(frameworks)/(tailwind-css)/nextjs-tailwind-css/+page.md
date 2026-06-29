---
title: Next.js Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Next.js without class-heavy pages
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Next.js")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Next.js Tailwind CSS" />
</div>
</div>

## Tailwind CSS belongs in Next.js projects

Next.js projects need styling that works across layouts, Server Components, Client Components, static pages, and dynamic routes. Tailwind CSS is a strong choice because it keeps styling predictable without forcing a component runtime.

You can style a route segment, product page, account screen, or dashboard directly in the markup. The same utility system works whether the component renders on the server or the client.

But Tailwind CSS can make Next.js files dense. A layout with navigation, cards, forms, and menus may become a wall of utilities. The problem gets worse when a team copies the same button and card class strings across many components.

## Class-heavy markup wastes attention and tokens

Next.js code already carries important boundaries: server or client, data loading, route params, actions, cookies, and streaming states. Long class strings compete with that information.

AI tools feel the same pressure. When an LLM edits a Next.js page, repeated Tailwind CSS utilities burn context window space. More tokens go into reading `flex items-center gap-2 rounded-* px-* py-*` than understanding what the page does.

## Next.js + Tailwind CSS + daisyUI

daisyUI reduces repeated styling text while staying compatible with the Next.js rendering model.

- **Works in Server Components**: daisyUI classes are CSS classes, not client-side components.

- **Shorter layouts**: Use `navbar`, `menu`, `drawer`, `card`, and `btn` for repeated structure.

- **Better AI edits**: Less class noise gives LLMs more room for route logic, data shape, and accessibility.

- **Keep Tailwind CSS control**: Add utilities when a section needs exact spacing, grid behavior, or responsive changes.

Next.js keeps the app architecture. Tailwind CSS stays flexible. daisyUI makes repeated UI easier to read.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Next.js

The Next.js guide uses PostCSS. Install Tailwind CSS, `@tailwindcss/postcss`, and daisyUI, configure PostCSS, then add `@plugin "daisyui"` in `app/globals.css`.

For the exact commands and Turbopack note, see [How to install daisyUI with Next.js](/docs/install/nextjs/).
