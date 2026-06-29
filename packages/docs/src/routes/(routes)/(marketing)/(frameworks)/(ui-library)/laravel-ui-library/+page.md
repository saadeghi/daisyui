---
title: Laravel UI library
desc: Build Laravel UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Laravel UI library" />
</div>
</div>

## Laravel UI should not fight Blade

Laravel projects often start with Blade, Vite, forms, auth screens, dashboards, and admin pages. The UI layer needs to work with that stack, not pull the whole app toward a separate front-end framework.

Some component libraries make that difficult. They ship JavaScript-heavy widgets, assume a SPA architecture, or lock the design into a recognizable template. You can still customize them, but the work drifts into wrappers and overrides.

Blade components need a lighter path. A button component should not need a browser-side runtime. A form field should accept Laravel validation errors without adapting to someone else's component model.

## Laravel + Tailwind CSS + daisyUI

Laravel already has a clean CSS entry point through Vite. Tailwind CSS and daisyUI fit into that workflow without changing how Blade, Livewire, Alpine, or Inertia handle behavior.

- **Blade-first markup**: `btn`, `card`, `input`, `table`, and `modal` work directly in Blade views and components.

- **No forced JavaScript layer**: daisyUI styles the element. Laravel, Livewire, Alpine, or Inertia can handle the interaction.

- **Themeable app shells**: Put a daisyUI theme on the layout and reuse it across dashboards, account pages, and admin screens.

- **Less custom CSS drift**: Repeated UI parts get shared component classes instead of one-off style files.

You keep Laravel's productivity while giving the interface room to look like your product, not a default template.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Laravel

The Laravel guide installs daisyUI as a dev dependency, then adds `@plugin "daisyui"` to `resources/css/app.css` alongside Tailwind CSS and Laravel `@source` paths.

For the exact commands, see [How to install daisyUI with Laravel](/docs/install/laravel/).
