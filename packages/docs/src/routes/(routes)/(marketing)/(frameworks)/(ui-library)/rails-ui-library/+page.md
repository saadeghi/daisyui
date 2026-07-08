---
title: Ruby on Rails UI library
desc: Build Ruby on Rails UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Rails UI library" />
</div>
</div>

## Rails UI works well when HTML stays visible

Rails teams often build product screens with ERB, partials, helpers, Turbo, and Stimulus. That stack rewards clear HTML. A UI library can slow it down when it hides markup behind a component API designed for another framework.

Heavy component packages also bring more JavaScript than a server-rendered Rails page needs. A dropdown or tab list should not turn the whole view into a front-end application.

Design sameness is another problem. Many Rails apps end up with the same admin theme look because the UI kit decides too much. Once that happens, customization means overriding classes instead of shaping the interface.

## Rails + Tailwind CSS + daisyUI

Tailwind CSS gives Rails a flexible styling base. daisyUI adds component classes that work with ERB, Turbo frames, and Stimulus controllers.

- **Plain HTML stays plain**: Use `btn`, `card`, `navbar`, `table`, and `alert` in ERB without adopting a browser-side component runtime.

- **Hotwire keeps behavior**: Turbo and Stimulus can manage updates and interactions while daisyUI handles appearance.

- **Multiple install paths**: Rails can use daisyUI through a Node dependency, bundled files, or CDN depending on the project.

- **Themes without rewrites**: Set `data-theme` in the layout and let repeated UI follow the same design tokens.

Rails remains a server-rendered app when you want it to be. daisyUI gives the views a cleaner UI vocabulary.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Ruby on Rails

The Rails guide starts with the Tailwind CSS Rails gem, then offers Node dependency, bundle file, and CDN options for daisyUI. The Node and bundle-file paths use `@plugin "daisyui"` or a local daisyUI plugin file in `app/assets/tailwind/application.css`.

For the exact setup, see [How to install daisyUI with Ruby on Rails](/docs/install/rails/).
