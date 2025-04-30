---
title: Electron component library
desc: daisyUI is the best component library for Electron
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  export let data
</script>

<div class="mx-auto max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-64 w-full [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Electron")?.logo}
</div>
</div>

## Electron

Electron is a framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS. Developed by GitHub, it combines Chromium for rendering and Node.js for backend functionality, allowing developers to create native-like desktop experiences with web skills. Electron applications run on Windows, macOS, and Linux with a single codebase, making it popular for tools like Visual Studio Code, Slack, Discord, and many other desktop applications that maintain consistent functionality across operating systems.

## Electron + daisyUI

daisyUI is an excellent component library for Electron applications because it provides a comprehensive set of beautifully designed UI components that create a cohesive desktop experience across platforms. Since daisyUI is purely CSS-based with zero JavaScript dependencies, it maintains Electron's performance without adding additional overhead. Electron developers can use daisyUI's semantic class names to create consistent interfaces while leveraging Electron's native capabilities. The library's 35+ built-in themes enable easy implementation of light/dark mode switching and custom branding, which are essential for desktop applications. This combination significantly accelerates development of professional-looking desktop applications while maintaining the flexibility that makes Electron powerful.

## Install Tailwind CSS and daisyUI for Electron

Setting up daisyUI with Electron is straightforward. After creating an Electron project, you'll need to install and configure Tailwind CSS and add daisyUI as a plugin. This simple setup allows you to immediately start using daisyUI's component classes in your Electron application's HTML templates.

For detailed installation instructions, check out our comprehensive guide at [How to install daisyUI with Electron](/docs/install/electron/).
