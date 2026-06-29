---
title: Nuxt UI library
desc: Build Nuxt UI with Tailwind CSS and daisyUI
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Nuxt")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Nuxt UI library" />
</div>
</div>

## Nuxt UI must work across rendering modes

Nuxt apps can include server-rendered pages, static routes, client-only areas, API routes, and app layouts. A UI library should not assume every component runs the same way.

Some UI kits make simple markup depend on client-side plugins. Others hard-code a design language that appears in every Nuxt project using the same kit. Both choices create friction when a product needs its own voice.

Customization is also harder when the library owns behavior and style at the same time. You change a dropdown's look and accidentally touch how it opens.

## Nuxt + Tailwind CSS + daisyUI

Tailwind CSS works through Vite in Nuxt. daisyUI adds component classes that work in pages, layouts, and Vue components.

- **Rendering-friendly CSS**: daisyUI classes work with server rendering, static generation, and client-rendered components.

- **No global behavior plugin**: Nuxt keeps control of data, routing, state, and hydration.

- **Cleaner layouts**: `navbar`, `drawer`, `menu`, `card`, and `footer` help app shells stay readable.

- **Theme from Nuxt state or cookies**: Apply a daisyUI theme in the root layout and let routes inherit it.

Nuxt handles the app structure. daisyUI helps the UI stay flexible and recognizable as your own.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Nuxt

The Nuxt guide installs Tailwind CSS, `@tailwindcss/vite`, and daisyUI, adds the Tailwind CSS Vite plugin in `nuxt.config.ts`, and puts `@plugin "daisyui"` in `app/assets/css/main.css`.

For the exact commands, see [How to install daisyUI with Nuxt](/docs/install/nuxt/).
