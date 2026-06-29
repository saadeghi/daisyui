---
title: Svelte UI library
desc: Build Svelte UI with Tailwind CSS and daisyUI
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "SvelteKit")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Svelte UI library" />
</div>
</div>

## Svelte UI should stay close to the component file

Svelte keeps markup, logic, and styles close together. A UI library can disrupt that if it replaces simple markup with a heavy component API or pushes customization into a separate theme system.

That friction shows up when a product needs small variations. A card needs a different header. A form field needs custom error placement. A modal needs SvelteKit form actions. Suddenly the library abstraction feels heavier than the UI itself.

Old CSS patterns can also clash with Svelte's scoped styles. Global overrides grow, and the design starts to depend on selector order instead of clear tokens.

## Svelte + Tailwind CSS + daisyUI

Tailwind CSS fits Svelte's component workflow. daisyUI adds component classes you can use directly in Svelte templates.

- **No Svelte runtime from daisyUI**: Styling doesn't add stores, actions, lifecycle code, or component wrappers.

- **Scoped styles still matter**: Use daisyUI for shared UI pieces and Svelte styles for local details.

- **Compact templates**: `btn`, `card`, `menu`, `input`, and `alert` keep repeated markup short.

- **Theme from the layout**: Set `data-theme` in a SvelteKit layout and let routes inherit the design tokens.

Svelte handles the component logic. daisyUI gives the UI a flexible base without taking over the file.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Svelte

The SvelteKit guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/app.css`.

For the exact commands, see [How to install daisyUI with Svelte](/docs/install/sveltekit/).
