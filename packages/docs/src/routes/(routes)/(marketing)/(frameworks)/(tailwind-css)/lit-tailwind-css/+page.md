---
title: Lit Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Lit with shorter web component styles
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Lit")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Lit Tailwind CSS" />
</div>
</div>

## Tailwind CSS gives Lit components a flexible style layer

Lit is about small, reusable web components. Tailwind CSS gives those components a direct styling system without inventing a CSS API for every part.

That is useful when a component needs to travel across apps. Utility classes make visual rules explicit, and Tailwind CSS can live in the same build pipeline as the component library or host app.

The hard part is repetition. A Lit template can become crowded when every button, input, card, and alert carries long utility strings inside template literals.

## Lit templates need less repeated styling text

Lit components already contain properties, events, slots, and rendering conditions. Long class strings make those pieces harder to see. With shadow DOM, you also need to be deliberate about how compiled CSS reaches the component.

LLMs are sensitive to this too. A web component with repeated Tailwind CSS utilities consumes context quickly, especially when the model also needs to preserve imports, reactive properties, and event names.

## Lit + Tailwind CSS + daisyUI

daisyUI gives Lit components a shorter vocabulary for common UI while keeping Tailwind CSS available for custom details.

- **Shorter templates**: Use `btn`, `card`, `input`, `badge`, and `alert` for repeated component parts.

- **Lit keeps behavior**: Properties, events, slots, and rendering remain in Lit.

- **Works with the documented CSS path**: The install guide shows how to make compiled CSS available to shadow DOM elements.

- **Better AI context**: Less repeated styling text leaves more room for component API and behavior.

Lit stays portable. daisyUI keeps Tailwind CSS from taking over every template.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Lit

The Lit guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, put `@plugin "daisyui"` in `src/index.css`, then make the CSS available inside your Lit element.

For the exact commands and shadow DOM example, see [How to install daisyUI with Lit](/docs/install/lit/).
