---
title: Angular component library
desc: Use daisyUI as a Tailwind CSS component library for Angular projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Angular")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Angular component library" />
</div>
</div>

## Angular

Angular is a TypeScript-first framework from Google for building client-side applications at scale.

It includes routing, forms, dependency injection, templates, build tooling, and testing support as part of one framework. That opinionated structure helps teams keep large codebases consistent.

Recent Angular versions also focus on standalone components, signals, server-side rendering, hydration, and a faster CLI workflow. The result is a framework that gives front-end teams clear conventions without requiring every tool to be assembled by hand.

## Angular + daisyUI

daisyUI fits Angular because it styles regular HTML in Angular templates. Angular keeps control of components, inputs, outputs, forms, validation, routing, and dependency injection.

The combination gives Angular teams a practical UI layer:

- **No competing runtime**: daisyUI is CSS, so it doesn't add another component lifecycle or state model beside Angular.

- **Readable templates**: `btn`, `input`, `table`, `tabs`, and `alert` make Angular templates easier to scan than repeated utility-only markup.

- **Form-friendly styling**: Angular reactive forms and template-driven forms can keep their validation logic while daisyUI handles the visual states.

- **Theme tokens**: Built-in themes and CSS variables make it easier to keep internal tools, admin panels, and customer-facing apps visually consistent.

For Angular projects, daisyUI reduces the amount of design-system CSS you have to maintain yourself.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Angular

Setting up daisyUI in Angular uses Tailwind CSS through PostCSS.

Create an Angular project with the Angular CLI, install Tailwind CSS, PostCSS, and daisyUI, then add `@import "tailwindcss"` and `@plugin "daisyui"` to your stylesheet.

Once configured, daisyUI classes work directly in Angular templates.

For Angular-specific installation steps, see [How to install daisyUI with Angular](/docs/install/angular/).
