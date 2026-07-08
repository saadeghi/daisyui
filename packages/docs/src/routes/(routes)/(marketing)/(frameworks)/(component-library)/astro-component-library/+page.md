---
title: Astro component library
desc: Use daisyUI as a Tailwind CSS component library for Astro projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Astro component library" />
</div>
</div>

## Astro

Astro is a web framework for content-driven sites such as marketing pages, docs, blogs, portfolios, and ecommerce content.

Its core idea is to ship less JavaScript. Astro renders pages to HTML by default and lets you add interactive islands only where the page needs browser-side behavior.

Astro also lets you bring React, Vue, Svelte, Solid, and other component frameworks into the same project. That makes it useful when a mostly static site still needs a few interactive pieces.

## Astro + daisyUI

daisyUI matches Astro's HTML-first approach. Most daisyUI components are plain markup plus CSS classes, so they work in `.astro` files and inside framework islands.

The fit is straightforward:

- **CSS-only components**: daisyUI doesn't add hydration work to pages that Astro can serve as static HTML.

- **Consistent styling across islands**: The same `btn`, `card`, `badge`, and `menu` classes work in Astro markup and in React, Vue, Svelte, or Solid components.

- **Good docs and marketing primitives**: Alerts, cards, tabs, accordions, mockups, and typography-friendly components cover many content-site patterns.

- **Theme control in HTML**: Themes use DOM attributes and CSS variables, which fits Astro layouts well.

Astro keeps pages lean. daisyUI gives those pages a finished interface without turning every section into a JavaScript component.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Astro

Setting up daisyUI in Astro uses the Tailwind CSS Vite plugin.

Create an Astro project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` in your CSS file.

After setup, daisyUI classes work in `.astro` templates and in any framework components you use.

For Astro-specific installation instructions, see [How to install daisyUI with Astro](/docs/install/astro/).
