---
title: UnoCSS Tailwind CSS
desc: Use Tailwind-style utilities and daisyUI component classes with UnoCSS
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "UnoCSS")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="UnoCSS Tailwind CSS" />
</div>
</div>

## Tailwind-style utilities are powerful in UnoCSS

UnoCSS can generate Tailwind-style utilities on demand through presets. That gives teams a fast styling loop and a flexible way to define the utility language they want.

This approach is useful when you want utility-first CSS without being locked into one fixed toolchain. You can combine presets, shortcuts, icons, variants, and custom rules.

The challenge is repetition. A pure utility approach can make every button, card, badge, and alert repeat the same class groups. Shortcuts help, but then you maintain your own component vocabulary.

## Atomic CSS can still waste tokens

Atomic classes are small, but repeated atomic classes add up. In markup, they consume attention. In AI-assisted coding, they consume context window space.

When an LLM edits a page using UnoCSS utilities, it may spend more tokens preserving repeated visual details than understanding the component structure. That makes generated code harder to review.

## UnoCSS + daisyUI

daisyUI can provide component classes through the community UnoCSS preset.

- **Shorter repeated UI**: Use `btn`, `card`, `badge`, `alert`, and related classes where utility groups repeat.

- **Keep atomic control**: Use UnoCSS utilities for layout, spacing, breakpoints, and special cases.

- **Less generated noise**: AI tools can write meaningful component markup instead of long repeated utility strings.

- **Know the preset limits**: The UnoCSS guide uses the unofficial `@ameinhardt/unocss-preset-daisy` package, and not every daisyUI class is guaranteed to work.

UnoCSS remains the utility engine. daisyUI adds a compact vocabulary for repeated UI.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install daisyUI for UnoCSS

The UnoCSS guide installs UnoCSS, daisyUI, and the unofficial `@ameinhardt/unocss-preset-daisy` package. Add `presetDaisy()` and `presetWind4()` in `unocss.config.js`, then import `uno.css` in your app.

For the exact commands and warning, see [How to install daisyUI with UnoCSS](/docs/install/unocss/).
