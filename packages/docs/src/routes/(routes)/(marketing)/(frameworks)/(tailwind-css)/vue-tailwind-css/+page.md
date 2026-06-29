---
title: Vue Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Vue without class-heavy templates
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Vue Tailwind CSS" />
</div>
</div>

## Tailwind CSS fits Vue single-file components

Vue single-file components already keep template, script, and style close together. Tailwind CSS fits that workflow because styling can live directly on the elements it affects.

For teams moving fast, this is a strong model. You can build responsive layouts, form states, navigation, and cards without switching into a separate CSS naming exercise.

But Vue templates can become noisy. Directives, slots, props, events, and conditional rendering already carry meaning. Long utility strings make the template harder to read.

## Vue templates should not be mostly class strings

When an element has `v-if`, `v-for`, `:class`, `@click`, ARIA attributes, and a long Tailwind CSS class list, the important behavior gets harder to find.

AI tools pay the same cost. LLMs consume tokens reading and rewriting utility chains instead of focusing on props, emits, state, and data flow.

## Vue + Tailwind CSS + daisyUI

daisyUI gives Vue a shorter component-class layer on top of Tailwind CSS.

- **Cleaner templates**: Use `btn`, `card`, `modal`, `input`, and `menu` for common UI.

- **Vue owns interaction**: Props, emits, slots, composables, and state stay in your Vue components.

- **Less token waste**: Shorter class names give LLMs more context for real component logic.

- **Tailwind CSS remains flexible**: Add utilities for layout, spacing, transitions, and edge cases.

Vue keeps the component model. daisyUI keeps Tailwind CSS from turning templates into long style strings.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Vue

The Vue guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/style.css`.

For the exact commands, see [How to install daisyUI with Vue](/docs/install/vue/).
