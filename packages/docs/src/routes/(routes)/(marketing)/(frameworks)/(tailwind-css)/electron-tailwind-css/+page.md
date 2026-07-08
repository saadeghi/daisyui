---
title: Electron Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Electron with cleaner renderer markup
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Electron")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Electron Tailwind CSS" />
</div>
</div>

## Tailwind CSS is useful in Electron renderers

Electron lets you build desktop UI with web technologies. Tailwind CSS fits the renderer process because it gives you a consistent styling language for panels, menus, dialogs, forms, and app shells.

That flexibility matters. Desktop apps need compact controls, theme support, and layouts that feel different from a marketing site. Tailwind CSS lets you tune those details without committing to a heavy component package.

But renderer files can get noisy. A desktop toolbar or preferences screen can accumulate long class lists for spacing, states, themes, and layout.

## Desktop UI markup should stay compact

Electron already has enough moving parts: main process code, preload scripts, renderer code, security policy, build steps, and OS-specific behavior. Renderer markup filled with repeated Tailwind CSS utilities adds another maintenance layer.

AI tools also pay for that verbosity. When a model edits a renderer file, class strings consume tokens that could describe menus, IPC boundaries, accessibility, or app state.

## Electron + Tailwind CSS + daisyUI

daisyUI gives Electron renderers shorter component classes while keeping Tailwind CSS available.

- **Cleaner app shells**: Use `navbar`, `menu`, `tabs`, `drawer`, `modal`, and `btn`.

- **No extra UI runtime**: daisyUI is CSS, so it doesn't add renderer-side state or event systems.

- **Theme support**: Apply light, dark, or custom themes to match app settings.

- **Keep precise utilities**: Tailwind CSS still handles custom sizing, layout, and platform-specific details.

Electron gives you desktop reach. daisyUI makes Tailwind CSS easier to maintain inside the renderer.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Electron

The Electron guide uses Tailwind CSS CLI. Install Electron, Tailwind CSS CLI, and daisyUI, put `@import "tailwindcss"` and `@plugin "daisyui"` in `src/input.css`, then build the CSS into `public/output.css`.

For the exact commands, see [How to install daisyUI with Electron](/docs/install/electron/).
