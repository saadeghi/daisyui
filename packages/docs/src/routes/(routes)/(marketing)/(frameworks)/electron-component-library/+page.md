---
title: Electron component library
desc: daisyUI is the best component library for Electron
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

Electron is a framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS. Developed by GitHub, it combines Chromium for rendering and Node.js for backend functionality, allowing developers to create native-like desktop experiences with web skills. Electron applications run on Windows, macOS, and Linux with a single codebase, making it popular for tools like Visual Studio Code, Slack, Discord, and many other desktop applications that maintain consistent functionality across operating systems.

## Electron + daisyUI

daisyUI is an excellent component library for Electron applications because it provides a comprehensive set of beautifully designed UI components that create a cohesive desktop experience across platforms. Since daisyUI is purely CSS-based with zero JavaScript dependencies, it maintains Electron's performance without adding additional overhead. Electron developers can use daisyUI's semantic class names to create consistent interfaces while leveraging Electron's native capabilities. The library's 35+ built-in themes enable easy implementation of light/dark mode switching and custom branding, which are essential for desktop applications. This combination significantly accelerates development of professional-looking desktop applications while maintaining the flexibility that makes Electron powerful.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Electron

Setting up daisyUI with Electron is straightforward. After creating an Electron project, you'll need to install and configure Tailwind CSS and add daisyUI as a plugin. This simple setup allows you to immediately start using daisyUI's component classes in your Electron application's HTML templates.

For detailed installation instructions, check out our comprehensive guide at [How to install daisyUI with Electron](/docs/install/electron/).
