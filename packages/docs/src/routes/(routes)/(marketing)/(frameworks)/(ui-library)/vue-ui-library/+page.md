---
title: Vue UI library
desc: Build Vue UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Vue UI library" />
</div>
</div>

## Vue UI libraries can take over too much

Vue single-file components already give you a clean place for template, script, and styles. A UI library should support that model. Some libraries replace it with their own component API, global plugin setup, and theme system.

That can make the first screen quick, then make the fifth screen harder. You need one small variation on a select, modal, or card, and suddenly you are reading library internals instead of writing Vue.

The default look is another issue. If the library has a strong visual signature, your Vue app can look like a demo unless you spend time undoing it.

## Vue + Tailwind CSS + daisyUI

Tailwind CSS gives Vue components direct styling control. daisyUI adds component classes without replacing Vue components.

- **Use your own components**: Build Vue components with props, slots, emits, and composables. Add daisyUI classes inside them.

- **No Vue plugin required for UI behavior**: daisyUI is CSS, so Vue keeps control of interactivity.

- **Less template noise**: `btn`, `card`, `modal`, `input`, and `menu` keep common elements readable.

- **Theme through state or layout**: Persist a selected daisyUI theme and apply it at the app root.

This gives Vue teams a UI library that feels more like a styling system than a component cage.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Vue

The Vue guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/style.css`.

For the exact commands, see [How to install daisyUI with Vue](/docs/install/vue/).
