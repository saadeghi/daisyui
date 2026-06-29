---
title: Next.js UI library
desc: Build Next.js UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Next.js UI library" />
</div>
</div>

## Next.js UI has a client boundary problem

Next.js lets you mix Server Components, Client Components, layouts, streaming, and API routes. A UI library should respect those boundaries. Many libraries don't.

Some component packages turn simple interface parts into client-side components. A button, badge, or card shouldn't need hydration. When enough of those pieces stack up, the app ships more JavaScript than the screen deserves.

Styling can become another trap. If every project uses the same preset UI library, your Next.js app starts to look familiar in the wrong way. Customizing it may require theme adapters, wrapper components, and CSS overrides that fight the library.

## Next.js + Tailwind CSS + daisyUI

Tailwind CSS already fits Next.js well. daisyUI adds component classes without changing your rendering model.

- **Server Component friendly**: daisyUI classes render as HTML and CSS. They don't force a Client Component boundary.

- **No hidden runtime**: Components like cards, buttons, menus, and alerts don't bring extra JavaScript.

- **Readable app markup**: Use `navbar`, `btn`, `menu`, and `card` in pages and layouts without burying markup inside a third-party component tree.

- **Theme at the document level**: Set a theme with cookies, headers, local storage, or app state. daisyUI reads it from the DOM.

You keep the parts Next.js is good at: routing, rendering, data, and deployment. daisyUI keeps common UI from turning into repetitive CSS work.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Next.js

Next.js uses Tailwind CSS through PostCSS in the current guide. Install Tailwind CSS, `@tailwindcss/postcss`, and daisyUI, then add `@plugin "daisyui"` in `app/globals.css`.

For the exact commands and the Turbopack note, see [How to install daisyUI with Next.js](/docs/install/nextjs/).
