---
title: Astro Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Astro with less class noise
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Astro Tailwind CSS" />
</div>
</div>

## Tailwind CSS is a natural fit for Astro

Astro pages are close to HTML. Tailwind CSS fits that model because it lets you style sections, layouts, and content blocks directly in `.astro` files.

For docs, landing pages, blogs, and product pages, that speed matters. You can build responsive sections without moving between markup and separate CSS files. Tailwind CSS also works inside framework islands when a page needs React, Vue, Svelte, or Solid.

Still, content-heavy Astro files can become crowded. A pricing card, feature grid, hero, callout, and footer can turn into long sequences of utilities. The content becomes harder to read.

## Astro markup should leave room for content

Astro pages often contain the words users read. When class strings dominate the file, editing copy, checking heading order, or reviewing links takes more effort.

LLMs run into the same issue. AI tools spend tokens reading repeated layout and color utilities before they reach the actual content. That is the wrong tradeoff for content-driven sites.

## Astro + Tailwind CSS + daisyUI

daisyUI keeps Tailwind CSS in your Astro project while giving repeated interface pieces shorter class names.

- **Cleaner content pages**: Use `hero`, `card`, `alert`, `stats`, `tabs`, and `footer` for common sections.

- **No hydration cost**: daisyUI is CSS, so static Astro pages stay static.

- **Works inside islands**: The same classes work in Astro markup and framework components.

- **AI-friendly files**: Shorter markup gives LLMs more context for content, structure, and accessibility.

Tailwind CSS stays the styling engine. daisyUI helps Astro pages stay readable.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Astro

The Astro guide uses the Tailwind CSS Vite plugin. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Vite plugin in `astro.config.mjs`, then add `@plugin "daisyui"` to your CSS file.

For the exact commands, see [How to install daisyUI with Astro](/docs/install/astro/).
