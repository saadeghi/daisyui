---
title: Astro UI library
desc: Build Astro UI with Tailwind CSS and daisyUI
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Astro")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Astro UI library" />
</div>
</div>

## Astro UI should not hydrate every section

Astro is strongest when pages ship as HTML and CSS, with JavaScript added only where interaction needs it. A UI library can ruin that advantage if it turns ordinary page sections into hydrated widgets.

Content sites also need variety. Docs, landing pages, changelog pages, pricing sections, and dashboards all need different rhythms. A fixed component kit can make every page look boxed-in and generic.

Then comes customization. If the UI library uses old CSS patterns or hard-coded component themes, a simple visual change can spread across many files.

## Astro + Tailwind CSS + daisyUI

Tailwind CSS works naturally in Astro. daisyUI adds component classes that keep Astro pages HTML-first.

- **No hydration cost for static UI**: daisyUI components are CSS classes, so static Astro sections stay static.

- **Works across islands**: Use the same `btn`, `card`, `badge`, and `tabs` classes in `.astro` files and in React, Vue, Svelte, or Solid islands.

- **Good for content pages**: Alerts, accordions, mockups, stats, and cards cover many editorial and docs patterns.

- **Easy theme control**: Set a daisyUI theme in your Astro layout and let pages inherit the design tokens.

Astro keeps JavaScript selective. daisyUI gives the page a consistent UI system without forcing everything into a framework component.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Astro

Astro uses the Tailwind CSS Vite plugin in the current guide. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Vite plugin in `astro.config.mjs`, then add `@plugin "daisyui"` to your CSS file.

For the exact commands, see [How to install daisyUI with Astro](/docs/install/astro/).
