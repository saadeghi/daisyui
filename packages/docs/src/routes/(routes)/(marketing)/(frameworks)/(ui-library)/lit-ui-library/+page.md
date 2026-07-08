---
title: Lit UI library
desc: Build Lit UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Lit UI library" />
</div>
</div>

## Lit UI should stay portable

Lit is often chosen for web components that need to work across apps. A UI library can undermine that if it assumes a single framework, a global component registry, or a runtime that only makes sense in one application shell.

Styling adds another wrinkle. Shadow DOM can isolate styles, which is useful, but it also means a UI library must be deliberate about how CSS reaches each element. Old global CSS kits do not map cleanly to that model.

Many ready-made libraries also make every component look familiar. For shared web components, that becomes a problem because the same component may need to fit several brands or host apps.

## Lit + Tailwind CSS + daisyUI

Tailwind CSS gives Lit projects utility control. daisyUI adds component classes that can be included in the CSS you make available to your Lit elements.

- **Keep Lit as the component API**: Properties, events, slots, and rendering stay in Lit.

- **No JavaScript dependency from daisyUI**: The UI layer is CSS, so it doesn't compete with Lit's reactive updates.

- **Works with shadow DOM setup**: The install guide shows how to import compiled CSS into a Lit element with `unsafeCSS`.

- **Host-level themes**: daisyUI themes can help shared components adapt to different products.

Lit keeps the component portable. daisyUI gives it a practical set of styled primitives.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Lit

The Lit guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Vite plugin, put `@plugin "daisyui"` in `src/index.css`, then make the CSS available inside your Lit element.

For the exact commands and shadow DOM example, see [How to install daisyUI with Lit](/docs/install/lit/).
