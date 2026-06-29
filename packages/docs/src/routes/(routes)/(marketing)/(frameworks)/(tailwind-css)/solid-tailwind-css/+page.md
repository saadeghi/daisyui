---
title: Solid.js Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Solid.js with cleaner JSX
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Solid.js Tailwind CSS" />
</div>
</div>

## Tailwind CSS gives Solid precise styling

Solid gives you precise UI updates. Tailwind CSS pairs well with that because it gives each element precise visual rules without a separate stylesheet layer.

You can build reactive forms, dashboards, menus, and content sections directly in JSX. Tailwind CSS keeps styling explicit, which works well with Solid's direct approach to DOM updates.

The downside is visual clutter. Solid components often contain signals, derived values, event handlers, and conditional rendering. Long utility strings compete with the reactive code.

## Solid JSX should keep behavior visible

Fine-grained reactivity is easiest to understand when the signal flow is visible. Repeated Tailwind CSS class strings make components harder to inspect.

LLMs also lose room. If a generated Solid component contains huge class lists, the model spends tokens preserving styling instead of reasoning about signals, memos, and events.

## Solid + Tailwind CSS + daisyUI

daisyUI gives Solid shorter class names for common UI pieces.

- **Cleaner JSX**: Use `btn`, `card`, `tabs`, `input`, and `alert` where utility chains repeat.

- **Solid keeps behavior**: Signals, effects, stores, and events remain in your components.

- **Less token waste**: Shorter markup gives AI tools more context for reactive logic.

- **Tailwind CSS stays flexible**: Add utilities beside daisyUI classes for exact layout and state details.

Solid keeps updates precise. daisyUI keeps Tailwind CSS from making components harder to read.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Solid.js

The Solid guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/index.css`.

For the SolidStart path, see [How to install daisyUI with Solid.js](/docs/install/solid-start/).
