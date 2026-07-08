---
title: Solid.js UI library
desc: Build Solid.js UI with Tailwind CSS and daisyUI
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Solid")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Solid.js UI library" />
</div>
</div>

## Solid UI should not hide fine-grained control

Solid gives you precise reactivity. A UI library should not blur that with a thick component layer that owns state, effects, and event timing.

Some libraries bring patterns from other frameworks. They may work in Solid, but they often make simple controls feel indirect. Instead of writing JSX and signals, you adapt to a component API built around someone else's assumptions.

Styling can also get too uniform. If the default theme is hard to reshape, every Solid project using the same kit starts to share the same visual accent.

## Solid + Tailwind CSS + daisyUI

Tailwind CSS gives Solid projects precise styling. daisyUI adds component classes while Solid keeps the reactive model.

- **No extra runtime**: daisyUI is CSS, so Solid controls signals, effects, events, and rendering.

- **Clear JSX**: `btn`, `card`, `tabs`, `input`, and `alert` make repeated UI readable.

- **Your components stay yours**: Build Solid components around the behavior you need, then style the markup with daisyUI.

- **Theme through attributes**: Use route layouts, server output, or Solid state to set the active theme.

Solid gives you control over updates. daisyUI helps you avoid rebuilding the same UI styles from scratch.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Solid.js

The Solid guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/index.css`.

For the SolidStart path, see [How to install daisyUI with Solid.js](/docs/install/solid-start/).
