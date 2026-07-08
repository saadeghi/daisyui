---
title: HTMX component library
desc: Use daisyUI as a Tailwind CSS component library for HTMX projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "HTMX")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best HTMX component library" />
</div>
</div>

## HTMX

HTMX lets you add AJAX, CSS transitions, WebSocket, and Server-Sent Event behavior with HTML attributes.

Instead of writing client-side code to fetch JSON and update the DOM, you can put attributes like `hx-get`, `hx-post`, and `hx-target` on HTML elements. The server returns HTML fragments, and HTMX swaps them into the page.

That model works especially well for teams building server-rendered apps in Django, Rails, Laravel, Go, Phoenix, Express, or any stack that can return HTML.

## HTMX + daisyUI

daisyUI fits HTMX because both work directly in HTML. HTMX handles interaction. daisyUI handles component styling.

The pairing keeps the page simple:

- **Attribute-friendly markup**: `class="btn btn-primary"` sits cleanly beside `hx-post`, `hx-target`, and `hx-swap`.

- **No JavaScript conflict**: daisyUI doesn't hook into DOM updates, so HTMX can swap fragments freely.

- **Good server-rendered defaults**: Buttons, forms, alerts, tables, menus, and modals cover the UI patterns HTMX apps reach for often.

- **Simple theme changes**: Return a layout or fragment with a different `data-theme` value and daisyUI updates the UI through CSS.

You can build interactive screens while keeping most logic on the server and most styling in reusable component classes.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for HTMX

HTMX doesn't require a specific build tool, so daisyUI setup depends on your backend.

If you already compile Tailwind CSS, install daisyUI and add `@plugin "daisyui"` to your CSS file. If you use static files only, follow the standalone setup.

After setup, use daisyUI classes in the same HTML where you use HTMX attributes.

For installation instructions that work with any backend, see [How to install daisyUI with HTMX](/docs/install/htmx/).
