---
title: Ruby on Rails component library
desc: Use daisyUI as a Tailwind CSS component library for Ruby on Rails projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Rails component library" />
</div>
</div>

## Ruby on Rails

Ruby on Rails is a full-stack web framework built around convention over configuration.

Rails gives you routing, controllers, views, models, migrations, mailers, jobs, caching, testing, and asset tooling in one cohesive framework. That makes it a strong choice for teams that want to ship server-rendered product features without assembling a custom stack for every project.

Rails also pairs well with progressive enhancement. ERB, Turbo, Stimulus, and Hotwire let you build responsive interfaces while keeping much of the application flow on the server.

## Ruby on Rails + daisyUI

daisyUI works well with Rails because it styles regular HTML. You can use it in ERB templates, partials, Rails view components, Turbo frames, and Stimulus-driven interactions.

That gives Rails apps a useful UI layer:

- **Readable ERB**: `btn`, `card`, `navbar`, `table`, and `alert` keep view templates easier to understand.

- **Hotwire-friendly styling**: Turbo and Stimulus can manage updates and behavior while daisyUI handles the component appearance.

- **No extra JavaScript framework required**: daisyUI doesn't force React, Vue, or a browser-side component runtime into your Rails app.

- **Themeable screens**: Apply a theme at the layout level and reuse it across admin panels, dashboards, and customer-facing views.

Rails keeps the application structure opinionated. daisyUI gives the views a consistent set of styled components.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Ruby on Rails

Rails can use daisyUI through the Tailwind CSS Rails setup or with standalone CSS files.

For the Tailwind CSS path, install daisyUI and add `@plugin "daisyui"` to the stylesheet that imports Tailwind CSS.

After the CSS builds, use daisyUI classes in ERB, partials, helpers, and view components.

For Rails-specific installation options, see [How to install daisyUI with Ruby on Rails](/docs/install/rails/).
