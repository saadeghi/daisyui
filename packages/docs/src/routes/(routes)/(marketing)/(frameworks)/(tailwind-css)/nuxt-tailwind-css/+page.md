---
title: Nuxt Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Nuxt with cleaner pages and layouts
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Nuxt Tailwind CSS" />
</div>
</div>

## Tailwind CSS works across Nuxt routes

Nuxt apps mix pages, layouts, server routes, components, and rendering modes. Tailwind CSS gives all those pieces one styling language.

That flexibility is useful. A marketing route, dashboard, settings screen, and content page can share the same utility system without adopting a separate component framework.

The issue is accumulation. Nuxt layouts and pages can become class-heavy, especially around navigation, cards, menus, forms, and responsive wrappers.

## Nuxt files need room for app structure

Nuxt code often includes route-level data, state, middleware, layouts, and async rendering concerns. Long utility chains add visual noise around those details.

LLMs also have to parse that noise. When an AI tool edits a Nuxt page, repeated Tailwind CSS strings eat tokens that could describe route behavior, data fetching, and accessibility.

## Nuxt + Tailwind CSS + daisyUI

daisyUI gives Nuxt projects shorter classes for repeated interface patterns.

- **Cleaner layouts**: Use `navbar`, `drawer`, `menu`, `card`, and `footer` for app shells.

- **Rendering-mode friendly**: daisyUI is CSS, so it works in server-rendered, static, and client-rendered parts.

- **More useful AI context**: Shorter UI markup gives LLMs more room for Nuxt-specific logic.

- **Tailwind CSS stays available**: Use utilities for custom grids, spacing, and responsive details.

Nuxt handles the application. Tailwind CSS handles styling. daisyUI keeps repeated UI concise.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Nuxt

The Nuxt guide installs Tailwind CSS, `@tailwindcss/vite`, and daisyUI, adds the Tailwind CSS Vite plugin in `nuxt.config.ts`, and puts `@plugin "daisyui"` in `app/assets/css/main.css`.

For the exact commands, see [How to install daisyUI with Nuxt](/docs/install/nuxt/).
