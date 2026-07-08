---
title: Electron UI library
desc: Build Electron UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Electron UI library" />
</div>
</div>

## Electron UI has desktop constraints

Electron apps live in a browser engine, but users judge them like desktop software. The UI needs dense controls, menus, panels, forms, dialogs, status areas, and theme support without feeling like a random web page in a window.

Many UI libraries bring web-app assumptions into that environment. They ship animations, layout defaults, and JavaScript behavior that make sense for a website but feel clumsy in a desktop app.

Bundle size matters too. Electron already includes Chromium. Adding a heavy UI runtime on top of a renderer stack can make startup and memory use worse than it needs to be.

## Electron + Tailwind CSS + daisyUI

Tailwind CSS and daisyUI work in Electron's renderer process like they work in a browser page.

- **CSS-only UI layer**: daisyUI doesn't add another renderer runtime or state model.

- **Desktop-friendly pieces**: Menus, tabs, drawers, modals, buttons, forms, and tables cover common app shells.

- **Works with any renderer stack**: Use daisyUI with plain HTML, React, Vue, Svelte, or another renderer approach.

- **Theme support**: Light and dark themes can follow app preferences or user settings.

Electron handles native capabilities. daisyUI keeps the renderer UI consistent without increasing JavaScript complexity.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Electron

The Electron guide uses Tailwind CSS CLI. Install Electron, Tailwind CSS CLI, and daisyUI, put `@import "tailwindcss"` and `@plugin "daisyui"` in `src/input.css`, then build the CSS into `public/output.css`.

For the exact commands, see [How to install daisyUI with Electron](/docs/install/electron/).
