---
title: Svelte Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Svelte with cleaner components
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Svelte Tailwind CSS" />
</div>
</div>

## Tailwind CSS works naturally in Svelte

Svelte components keep markup, logic, and styles close. Tailwind CSS fits because it lets you style the markup directly without leaving the component file.

That makes common interface work quick. You can build forms, cards, route layouts, empty states, and navigation with one utility system, then use Svelte's scoped styles for local details.

The friction appears when utility strings take over the markup. A Svelte file should make reactive values, actions, events, and form behavior easy to see. Long class lists work against that.

## Svelte files should not spend most of their space on utilities

Svelte templates already carry `{#if}`, `{#each}`, bindings, actions, stores, and transitions. Add long Tailwind CSS strings and the readable component shape starts to fade.

LLMs face the same issue. Repeated utility classes consume tokens that could be used for form actions, accessibility, route data, or component state.

## Svelte + Tailwind CSS + daisyUI

daisyUI adds semantic component classes while leaving Svelte in charge.

- **Cleaner templates**: Use `btn`, `card`, `menu`, `input`, and `alert` for repeated UI.

- **Svelte keeps logic**: Bindings, stores, actions, transitions, and form behavior stay in Svelte.

- **Less AI token waste**: Shorter class names make generated Svelte files easier to review and edit.

- **Tailwind CSS remains available**: Use utilities when a component needs exact layout or custom styling.

Svelte stays concise. daisyUI helps Tailwind CSS stay concise too.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Svelte

The SvelteKit guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/app.css`.

For the exact commands, see [How to install daisyUI with Svelte](/docs/install/sveltekit/).
