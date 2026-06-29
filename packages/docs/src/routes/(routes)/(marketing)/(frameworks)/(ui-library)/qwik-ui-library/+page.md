---
title: Qwik UI library
desc: Build Qwik UI with Tailwind CSS and daisyUI
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Qwik")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Qwik UI library" />
</div>
</div>

## Qwik UI should protect resumability

Qwik is designed to avoid eager hydration. That makes UI library choice unusually important. If a library turns common UI into JavaScript widgets, it can weaken the loading model you picked Qwik for.

The problem often hides in harmless-looking components. A badge, card, tab, or dropdown may pull in a runtime package, event wiring, and styles that assume a different framework.

Visual customization can become another drain. When every component ships with a rigid theme, your Qwik app risks looking like the library rather than your product.

## Qwik + Tailwind CSS + daisyUI

Tailwind CSS works through Vite in Qwik. daisyUI adds CSS component classes without adding hydration work.

- **No JavaScript cost for styling**: daisyUI doesn't add runtime behavior to buttons, cards, forms, or layout pieces.

- **Qwik keeps interactions**: Signals, actions, loaders, and events remain part of your Qwik code.

- **Readable JSX**: `btn`, `card`, `input`, `alert`, and `menu` keep components concise.

- **Themeable route layouts**: Set a daisyUI theme at the document or layout level and let Qwik components inherit it.

Qwik stays focused on resumability. daisyUI gives the interface a useful component vocabulary.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Qwik

The Qwik guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/index.css`.

For the exact commands, see [How to install daisyUI with Qwik](/docs/install/qwik/).
