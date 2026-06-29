---
title: Svelte component library
desc: Use daisyUI as a Tailwind CSS component library for Svelte projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Svelte component library" />
</div>
</div>

## Svelte

Svelte is a component framework that shifts much of its work to compile time.

You write components with HTML, CSS, and JavaScript in one file, and Svelte compiles them into efficient browser code. SvelteKit adds routing, server rendering, form actions, data loading, and deployment adapters for full applications.

Svelte's syntax keeps common UI tasks concise: reactive values, scoped styles, transitions, actions, and stores are part of the standard workflow.

## Svelte + daisyUI

daisyUI fits Svelte because it gives Svelte components a ready set of CSS classes while Svelte keeps ownership of state and behavior.

That makes the markup practical:

- **No extra JavaScript layer**: daisyUI doesn't add components, stores, actions, or lifecycle code.

- **Readable templates**: Classes like `btn`, `card`, `menu`, `input`, and `alert` keep repeated UI compact.

- **Scoped CSS still works**: Use daisyUI for base component styling and Svelte styles for component-specific details.

- **Themeable layouts**: Set a daisyUI theme in a SvelteKit layout and let pages and components inherit it.

Svelte keeps component logic concise. daisyUI keeps the visual layer from becoming a pile of custom CSS.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Svelte

Getting started with daisyUI in SvelteKit uses the current Tailwind CSS Vite setup.

Create a SvelteKit project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` to your CSS file.

After setup, use daisyUI classes in Svelte components, routes, and layouts.

For Svelte-specific installation instructions, see [How to install daisyUI with Svelte](/docs/install/sveltekit/).
