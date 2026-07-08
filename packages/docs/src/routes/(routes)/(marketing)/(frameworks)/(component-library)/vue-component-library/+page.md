---
title: Vue component library
desc: Use daisyUI as a Tailwind CSS component library for Vue projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Vue")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Vue component library" />
</div>
</div>

## Vue

Vue is a progressive JavaScript framework for building user interfaces.

You can use Vue for a small interactive widget, a single-page application, or a full-stack project through frameworks like Nuxt. Its single-file components keep template, script, and styles close together while still supporting a strong ecosystem.

Vue's reactivity system updates the UI when state changes, and its template syntax stays close to HTML. That makes it approachable for teams that want component structure without hiding the page markup.

## Vue + daisyUI

daisyUI works well with Vue because it gives Vue templates a clean component-class layer. Vue handles reactivity, props, events, slots, routing, and data. daisyUI handles the CSS.

The pairing is simple:

- **No competing component runtime**: daisyUI doesn't ship Vue components or global plugins.

- **Readable templates**: `btn`, `card`, `modal`, `menu`, and `input` keep Vue components easier to scan.

- **Works with slots and components**: Use daisyUI classes inside your own Vue components instead of adopting a fixed component API.

- **Themeable apps**: Vue state, route layouts, or persisted user settings can control daisyUI themes.

You keep the flexibility of Vue while avoiding a custom design system for every project.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Vue

Setting up daisyUI with Vue uses Vite and Tailwind CSS.

Create a Vue project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` to your CSS file.

After setup, use daisyUI classes directly in Vue templates and components.

For Vue-specific installation instructions, see [How to install daisyUI with Vue](/docs/install/vue/).
