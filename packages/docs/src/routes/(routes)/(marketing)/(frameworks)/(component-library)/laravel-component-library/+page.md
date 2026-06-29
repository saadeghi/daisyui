---
title: Laravel component library
desc: Use daisyUI as a Tailwind CSS component library for Laravel projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Laravel")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Laravel component library" />
</div>
</div>

## Laravel

Laravel is a PHP framework for building web applications with expressive routing, Blade templates, database tooling, queues, caching, events, jobs, and authentication workflows.

Laravel's strength is the way those pieces fit together. A typical project can move from routes to controllers, models, migrations, jobs, and views without pulling in a new library for every core feature.

Blade is especially useful for server-rendered UI. It gives Laravel developers layouts, components, slots, conditionals, loops, and reusable view patterns while staying close to HTML.

## Laravel + daisyUI

daisyUI works well with Laravel because it gives Blade templates a component-class vocabulary without requiring a separate JavaScript UI framework.

The fit is strongest in day-to-day product screens:

- **Blade-friendly markup**: Classes like `btn`, `card`, `input`, `table`, and `modal` read well in Blade components and layouts.

- **Works with Livewire and Alpine**: Keep interactivity in Laravel-friendly tools while daisyUI handles the styling.

- **CSS-only styling**: daisyUI adds no client-side state layer, so it won't compete with your chosen Laravel front-end stack.

- **Themeable layouts**: Store a theme in session, a cookie, or a user setting and apply it at the root layout.

That keeps Laravel productive on both sides: server features stay in Laravel, and repeated UI doesn't need custom CSS for every screen.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Laravel

Laravel's current front-end tooling uses Vite, which makes daisyUI setup direct.

Create a Laravel project, install daisyUI, and add `@plugin "daisyui"` to the CSS file where Tailwind CSS is imported.

Then use daisyUI classes in Blade views, Blade components, Livewire components, or Inertia pages.

For Laravel-specific installation instructions, see [How to install daisyUI with Laravel](/docs/install/laravel/).
