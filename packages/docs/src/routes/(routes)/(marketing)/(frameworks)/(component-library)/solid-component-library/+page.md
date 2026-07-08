---
title: Solid.js component library
desc: Use daisyUI as a Tailwind CSS component library for Solid.js projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Solid component library" />
</div>
</div>

## Solid.js

Solid is a JavaScript framework for building reactive user interfaces with fine-grained updates.

It uses JSX, but it doesn't use a virtual DOM in the same way React does. Solid tracks reactive dependencies directly and updates the affected DOM nodes when state changes.

That model keeps component code familiar while making updates precise. SolidStart adds routing, server functions, and full-stack app structure for teams that want a framework around Solid.

## Solid.js + daisyUI

daisyUI works well with Solid because it stays out of the reactive layer. Solid controls state, signals, effects, routing, and events. daisyUI provides component classes.

The split is useful:

- **No extra runtime**: daisyUI doesn't add JavaScript on top of Solid's fine-grained reactivity.

- **Readable JSX**: `btn`, `card`, `menu`, `input`, and `alert` keep components easy to scan.

- **Behavior stays explicit**: Dialog state, validation, filters, and menus remain Solid code instead of hidden library behavior.

- **Themeable UI**: Use Solid state or server-rendered attributes to control daisyUI themes.

Solid keeps interactions precise. daisyUI helps you avoid rebuilding every base component style.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Solid.js

Setting up daisyUI in Solid uses Vite or SolidStart.

Create a Solid project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` to your CSS file.

After setup, use daisyUI classes in Solid components and route layouts.

For Solid-specific installation instructions, see [How to install daisyUI with Solid.js](/docs/install/solid-start/).
