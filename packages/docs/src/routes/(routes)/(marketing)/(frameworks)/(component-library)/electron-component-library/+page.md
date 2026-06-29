---
title: Electron component library
desc: Use daisyUI as a CSS component library for Electron apps
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Electron component library" />
</div>
</div>

## Electron

Electron is a framework for building desktop applications with JavaScript, HTML, and CSS.

It combines Chromium for the application UI with Node.js APIs for desktop integration. That makes it possible to build apps for Windows, macOS, and Linux with one web-based codebase.

Electron is a practical choice when a product needs local files, native menus, tray behavior, desktop notifications, auto updates, or cross-platform distribution while keeping the UI in familiar web technologies.

## Electron + daisyUI

daisyUI is a good fit for Electron because it styles the renderer process without adding another JavaScript UI runtime. You can use it with plain HTML, React, Vue, Svelte, or any other renderer stack.

The practical benefits are clear:

- **CSS-only components**: daisyUI doesn't add state management, event handling, or browser-side component logic.

- **Desktop UI coverage**: Buttons, menus, tabs, drawers, modals, tables, and forms cover many common app-shell patterns.

- **Consistent cross-platform styling**: Your interface can stay visually consistent while Electron handles OS-level features.

- **Light and dark themes**: daisyUI themes make desktop preferences and app-specific themes easier to support.

Electron gives you desktop reach. daisyUI helps the renderer look finished without spending weeks on base UI styles.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Electron

Set up Tailwind CSS in the renderer side of your Electron app, install daisyUI, and add `@plugin "daisyui"` to the CSS file that imports Tailwind CSS.

For Electron-specific installation instructions, see [How to install daisyUI with Electron](/docs/install/electron/).
