---
title: Lit component library
desc: Use daisyUI as a Tailwind CSS component library for Lit projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Lit component library" />
</div>
</div>

## Lit

Lit is a library for building fast, lightweight web components.

It builds on Custom Elements, shadow DOM, templates, and other web platform features. That means Lit components can work inside many environments instead of being tied to one application framework.

Lit adds a small reactive layer, declarative templates, scoped styles, and update scheduling on top of those standards. It is a good fit when you want reusable components that can be shared across apps.

## Lit + daisyUI

daisyUI works with Lit when you want the visual language of a component library while keeping the component API in web components.

The combination has a clear split:

- **CSS component classes**: daisyUI gives you `btn`, `card`, `input`, `menu`, and other classes you can use in Lit templates.

- **No runtime conflict**: daisyUI doesn't add JavaScript, so Lit remains responsible for properties, events, updates, and rendering.

- **Reusable styles**: Shared daisyUI classes help components from different packages feel like one product.

- **Themeable host apps**: Apply a daisyUI theme on the document or host container and let Lit components inherit the design tokens where appropriate.

Lit keeps your components portable. daisyUI keeps the styling system consistent.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Lit

Setting up daisyUI in Lit usually means configuring it in the build system that serves your components.

For a Vite-based Lit project, install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, then add `@plugin "daisyui"` to your CSS file.

After setup, use daisyUI classes in Lit templates and keep behavior in your web component code.

For Lit-specific installation instructions and examples, see [How to install daisyUI with Lit](/docs/install/lit/).
