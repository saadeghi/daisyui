---
title: HTMX Tailwind CSS
desc: Use Tailwind CSS and daisyUI with HTMX without class-heavy fragments
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="HTMX Tailwind CSS" />
</div>
</div>

## Tailwind CSS works well with HTMX

HTMX keeps interaction in HTML attributes. Tailwind CSS pairs well with that because it also keeps styling in the markup. You can build server-rendered fragments that carry both behavior and presentation without a client framework.

That directness is useful, especially for forms, filters, tables, and inline updates. A fragment can return from the server ready to display and ready to respond to the next interaction.

The trouble is density. `hx-*` attributes already add meaning to the markup. Long Tailwind CSS class strings beside them can make fragments hard to scan.

## HTMX markup can run out of breathing room

An HTMX button may include a URL, target, swap strategy, indicator, disabled state, and accessibility text. Add a long utility chain and the element becomes hard to edit.

LLMs also spend tokens on both sets of attributes. If the goal is to change server interaction, repeated utility classes become expensive background noise.

## HTMX + Tailwind CSS + daisyUI

daisyUI shortens repeated UI classes while preserving the HTML-first model.

- **Cleaner attributes**: `class="btn btn-primary"` is easier to read beside `hx-post` and `hx-target`.

- **Works with swaps**: daisyUI has no JavaScript binding layer, so HTMX can replace fragments freely.

- **Useful fragment components**: `alert`, `card`, `table`, `modal`, and `loading` cover common server-rendered UI.

- **Tailwind CSS remains precise**: Add utilities for one-off layout and responsive behavior.

HTMX keeps behavior declarative. daisyUI makes Tailwind CSS less noisy in the HTML that carries it.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for HTMX

The HTMX guide uses Tailwind CSS CLI and daisyUI as Node dependencies. Add `@import "tailwindcss"` and `@plugin "daisyui"` to your CSS file, build it, and link the generated CSS from your HTML.

For the exact commands, see [How to install daisyUI with HTMX](/docs/install/htmx/).
