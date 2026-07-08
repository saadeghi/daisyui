---
title: UnoCSS component library
desc: Use daisyUI components with UnoCSS projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "UnoCSS")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best UnoCSS component library" />
</div>
</div>

## UnoCSS

UnoCSS is an on-demand atomic CSS engine.

It generates CSS from the utilities you use and relies on presets to define the utility rules. That makes UnoCSS flexible: a project can mimic Tailwind-style utilities, use attributify mode, add icons, define shortcuts, or create a custom design language.

Because generation happens on demand, UnoCSS is a good fit for teams that want utility-first styling without accepting one fixed utility set.

## UnoCSS + daisyUI

daisyUI can be used with UnoCSS through the daisyUI UnoCSS preset. This is different from the Tailwind CSS plugin setup; UnoCSS reads daisyUI through its own preset system.

The combination gives you both layers:

- **Semantic component classes**: Use daisyUI classes like `btn`, `card`, `badge`, and `alert` for common UI.

- **Atomic styling where needed**: Use UnoCSS utilities for layout, one-off spacing, custom states, and project-specific details.

- **Less repeated markup**: Component classes reduce the utility chains on elements that repeat across the app.

- **Theme tokens**: daisyUI themes give your UnoCSS project a consistent color system for components.

UnoCSS stays flexible. daisyUI gives repeated interface parts a stable, readable vocabulary.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install daisyUI for UnoCSS

Getting started with daisyUI in UnoCSS uses the daisyUI preset for UnoCSS.

Set up UnoCSS in your project, install the daisyUI UnoCSS package, and add the preset to your UnoCSS configuration.

After setup, daisyUI component classes work beside your UnoCSS utilities.

For UnoCSS-specific installation instructions and configuration options, see [How to install daisyUI with UnoCSS](/docs/install/unocss/).
