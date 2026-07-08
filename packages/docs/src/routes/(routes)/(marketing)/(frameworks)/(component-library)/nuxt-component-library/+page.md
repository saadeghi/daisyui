---
title: Nuxt component library
desc: Use daisyUI as a Tailwind CSS component library for Nuxt projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Nuxt component library" />
</div>
</div>

## Nuxt

Nuxt is a Vue framework for building server-rendered, statically generated, and client-rendered applications.

It gives Vue projects file-based routing, layouts, server routes, middleware, modules, auto imports, and Nitro for server-side deployment targets. The framework conventions reduce setup work while still leaving room for app-specific decisions.

Nuxt's rendering modes are useful when one application needs marketing pages, authenticated dashboards, dynamic routes, and API endpoints in the same codebase.

## Nuxt + daisyUI

daisyUI fits Nuxt because it gives Vue templates ready-made component classes without adding a second component framework.

The benefits show up in common Nuxt code:

- **Vue template readability**: `btn`, `card`, `navbar`, `tabs`, and `dropdown` keep Nuxt components easier to scan.

- **Rendering-mode friendly**: daisyUI styles plain HTML, so it works with server rendering, static generation, and client-rendered parts.

- **No extra client runtime**: daisyUI doesn't add JavaScript, plugins, or global providers to your Nuxt app.

- **Theme control**: Use Nuxt state, cookies, or server-rendered attributes to set daisyUI themes.

Nuxt handles the application model. daisyUI gives the interface a reusable component language.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Nuxt

Getting started with daisyUI in Nuxt uses the Tailwind CSS module flow.

Create a Nuxt project, add the Nuxt Tailwind CSS module, install daisyUI, and register it from your CSS with `@plugin "daisyui"`.

After setup, use daisyUI classes in pages, layouts, and Vue components.

For Nuxt-specific installation instructions, see [How to install daisyUI with Nuxt](/docs/install/nuxt/).
