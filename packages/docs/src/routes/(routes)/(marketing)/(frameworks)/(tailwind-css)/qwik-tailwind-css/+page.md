---
title: Qwik Tailwind CSS
desc: Use Tailwind CSS and daisyUI in Qwik without class-heavy JSX
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Qwik")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Qwik Tailwind CSS" />
</div>
</div>

## Tailwind CSS fits Qwik's HTML-first output

Qwik focuses on sending useful HTML and loading JavaScript when interaction needs it. Tailwind CSS fits that idea because styling stays as CSS classes on the markup.

That makes UI work direct. You can style route layouts, forms, cards, navigation, and interactive islands without introducing a component library that owns behavior.

The challenge is repeated utility text. Qwik components already contain signals, loaders, actions, event handlers, and route data. Long class strings can hide the parts that make Qwik code important.

## Qwik components should protect context

In Qwik, every piece of JavaScript deserves attention because the framework is careful about when code loads. Markup filled with repeated Tailwind CSS utilities makes that harder to review.

AI tools face the same problem. LLMs spend tokens on class strings when they should focus on resumability boundaries, actions, and event behavior.

## Qwik + Tailwind CSS + daisyUI

daisyUI shortens repeated UI patterns while staying CSS-only.

- **No extra hydration work**: daisyUI classes don't add JavaScript behavior.

- **Cleaner JSX**: Use `btn`, `card`, `input`, `alert`, and `menu` for common UI.

- **Qwik keeps control**: Signals, loaders, actions, and events remain Qwik code.

- **Tailwind CSS remains exact**: Add utilities for layout, responsive behavior, and one-off styling.

Qwik keeps JavaScript intentional. daisyUI keeps Tailwind CSS markup smaller.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Qwik

The Qwik guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then put `@plugin "daisyui"` in `src/index.css`.

For the exact commands, see [How to install daisyUI with Qwik](/docs/install/qwik/).
