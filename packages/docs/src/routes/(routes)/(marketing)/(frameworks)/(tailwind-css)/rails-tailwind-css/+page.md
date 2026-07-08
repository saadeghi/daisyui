---
title: Ruby on Rails Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Rails with cleaner ERB
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Rails")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Rails Tailwind CSS" />
</div>
</div>

## Tailwind CSS fits the Rails way

Rails rewards building useful HTML quickly. Tailwind CSS supports that by letting you style ERB, partials, helpers, and view components without leaving the file to invent CSS names.

For product teams, that is a strong default. You can build forms, tables, dashboards, account pages, and admin screens with one styling language. Tailwind CSS also works well with Turbo and Stimulus because it stays out of behavior.

The maintenance issue shows up later. ERB gets packed with utilities. A partial that should show a simple component can become a dense strip of spacing, color, border, focus, and responsive classes.

## Rails views need readable intent

Rails templates already contain paths, helpers, translations, Turbo frames, conditional rendering, and model data. Long Tailwind CSS class strings make those details harder to review.

AI tools pay the same tax. Repeated utilities consume LLM context, especially in generated view components and partials. That leaves fewer tokens for understanding routes, models, and user flows.

## Rails + Tailwind CSS + daisyUI

daisyUI gives Rails a shorter UI vocabulary while keeping Tailwind CSS available.

- **Cleaner ERB**: Use `btn`, `card`, `table`, `alert`, and `navbar` for repeated UI.

- **Hotwire stays in charge**: Turbo and Stimulus manage behavior. daisyUI only styles elements.

- **Less generated noise**: AI-generated Rails views can use semantic component classes instead of huge utility chains.

- **Full Tailwind CSS control**: Add utilities for custom layout, spacing, and responsive detail whenever needed.

Rails keeps the server-rendered workflow. daisyUI keeps repeated interface code easier to read.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Ruby on Rails

The Rails guide starts with the Tailwind CSS Rails gem, then offers Node dependency, bundle file, and CDN options for daisyUI. The Node and bundle-file paths use `@plugin "daisyui"` or local daisyUI plugin files.

For the exact setup, see [How to install daisyUI with Ruby on Rails](/docs/install/rails/).
