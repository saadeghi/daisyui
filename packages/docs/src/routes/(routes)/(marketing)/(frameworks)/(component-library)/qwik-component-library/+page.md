---
title: Qwik component library
desc: Use daisyUI as a Tailwind CSS component library for Qwik projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Qwik")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Qwik component library" />
</div>
</div>

## Qwik

Qwik is a web framework built around resumability and fine-grained lazy loading.

Instead of eagerly hydrating the whole page, Qwik serializes the application state into the HTML and loads JavaScript when an interaction needs it. This model helps large pages stay interactive without sending all application code up front.

Qwik also uses JSX, file-based routing through Qwik City, and Vite-based tooling, so it feels familiar while using a different execution model.

## Qwik + daisyUI

daisyUI works well with Qwik because it doesn't add JavaScript to hydrate. It gives you component classes while Qwik stays in charge of resumability, events, and lazy-loaded code.

That matters for Qwik projects:

- **No hydration cost**: daisyUI is CSS, so buttons, cards, forms, and navigation don't add client logic unless your Qwik component needs it.

- **Readable JSX**: Semantic classes keep Qwik components clear without long utility chains everywhere.

- **Behavior stays in Qwik**: Signals, tasks, loaders, actions, and events remain part of the Qwik app model.

- **Themeable HTML**: daisyUI themes can be set on the document or route layout and inherited by Qwik components.

Qwik keeps the JavaScript loading model lean. daisyUI keeps the interface layer fast to build.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Qwik

Setting up daisyUI with Qwik uses Vite.

Create a Qwik project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` to your global CSS file.

After setup, daisyUI classes work in Qwik components and route layouts.

For Qwik-specific installation instructions, see [How to install daisyUI with Qwik](/docs/install/qwik/).
