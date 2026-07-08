---
title: React Tailwind CSS
desc: Use Tailwind CSS and daisyUI in React without noisy JSX
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "React")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="React Tailwind CSS" />
</div>
</div>

## Tailwind CSS is a strong fit for React

React gives you component boundaries. Tailwind CSS gives those components a direct styling language. You can build a button, form, dashboard card, table row, or onboarding screen without leaving JSX to name a CSS file.

That directness is why Tailwind CSS works so well in React projects. Styles stay near the element. Responsive states, hover states, layout rules, and color decisions are visible where the UI is built.

The tradeoff appears as the app grows. JSX fills with long class strings. A simple button can carry twenty tokens. A form row can carry more styling text than meaningful markup.

## Tailwind CSS class names become expensive

Long utility chains are not only harder for humans to scan. They also cost tokens when AI tools read and write your code. Every `px-4`, `rounded-md`, `border`, `hover:bg-*`, and `dark:*` class consumes context that could describe state, accessibility, or real component logic.

In React, that matters because components already contain props, conditionals, handlers, and data mapping. When half the file is repeated styling text, both people and LLMs spend more attention on class maintenance than product behavior.

## React + Tailwind CSS + daisyUI

daisyUI keeps Tailwind CSS as the foundation, then gives common UI patterns shorter names.

- **Shorter JSX**: Replace repeated utility chains with classes like `btn`, `card`, `input`, `alert`, and `navbar`.

- **React keeps behavior**: State, events, effects, validation, and routing stay in React.

- **Less AI token waste**: LLMs can work with meaningful component markup instead of rewriting the same style strings again and again.

- **Tailwind CSS still works**: Add utilities beside daisyUI classes whenever a component needs custom layout or polish.

You get the flexibility of Tailwind CSS with a smaller, clearer vocabulary for repeated UI.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for React

The React guide uses Vite. Install Tailwind CSS, `@tailwindcss/vite`, and daisyUI, add the Tailwind CSS Vite plugin, then add `@plugin "daisyui"` to your CSS file.

For the exact commands, see [How to install daisyUI with React](/docs/install/react/).
