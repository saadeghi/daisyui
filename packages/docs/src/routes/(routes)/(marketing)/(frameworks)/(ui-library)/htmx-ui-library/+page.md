---
title: HTMX UI library
desc: Build HTMX UI with Tailwind CSS and daisyUI
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="HTMX UI library" />
</div>
</div>

## HTMX UI needs good HTML, not a component runtime

HTMX works by adding behavior to HTML. That makes the choice of UI library important. If the library expects a JavaScript component tree, it works against the reason you picked HTMX.

Server-rendered fragments need styling that survives swaps. They also need classes that read well beside `hx-get`, `hx-post`, `hx-target`, and `hx-swap`. A pile of utility classes can become noisy in templates that already carry interaction attributes.

Old CSS libraries can be worse. They bring global styles, dated form controls, and JavaScript plugins that don't understand HTMX swaps.

## HTMX + Tailwind CSS + daisyUI

Tailwind CSS gives you control. daisyUI adds higher-level classes that sit neatly beside HTMX attributes.

- **HTML-first styling**: Write `class="btn btn-primary"` next to `hx-post` without introducing a component framework.

- **Safe with fragment swaps**: daisyUI doesn't bind JavaScript to DOM nodes, so HTMX can replace HTML freely.

- **Useful server-rendered components**: Forms, alerts, tables, cards, modals, and menus cover many HTMX screens.

- **Themes from server state**: Return a layout or fragment with a different theme attribute and let CSS update the UI.

HTMX handles interaction through HTML. daisyUI keeps that HTML readable and styled.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for HTMX

The HTMX guide uses Tailwind CSS CLI and daisyUI as Node dependencies. Add `@import "tailwindcss"` and `@plugin "daisyui"` to your CSS file, build it, and link the generated CSS from your HTML.

For the exact commands, see [How to install daisyUI with HTMX](/docs/install/htmx/).
