---
title: UnoCSS UI library
desc: Build UnoCSS UI with daisyUI component classes
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="UnoCSS UI library" />
</div>
</div>

## UnoCSS UI can become too atomic

UnoCSS gives you a flexible atomic CSS engine. That flexibility is useful, but repeated product UI can become noisy when every button, card, alert, and menu is written as a long set of utilities.

Shortcuts help, but then you are building a component vocabulary yourself. Many teams end up with scattered aliases, one-off variants, and repeated class groups that become hard to rename.

Traditional component libraries solve repetition, but often at the cost of a fixed look, outdated CSS, or JavaScript behavior you don't need. UnoCSS users usually want more control than that.

## UnoCSS + daisyUI

daisyUI can add a component layer to UnoCSS through the community `@ameinhardt/unocss-preset-daisy` preset.

- **Component names for repeated UI**: Use `btn`, `card`, `badge`, `alert`, and other daisyUI classes where atomic utilities get repetitive.

- **Utilities for custom detail**: Keep UnoCSS utilities for spacing, layout, responsive states, and product-specific polish.

- **Theme tokens**: daisyUI themes give repeated components a shared color system.

- **Know the preset boundary**: The UnoCSS guide uses an unofficial preset, and not every daisyUI component class is guaranteed to work.

UnoCSS stays the engine. daisyUI adds a higher-level vocabulary for interface parts that repeat.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install daisyUI for UnoCSS

The UnoCSS guide installs UnoCSS, daisyUI, and the unofficial `@ameinhardt/unocss-preset-daisy` package. Add `presetDaisy()` and `presetWind4()` in `unocss.config.js`, then import `uno.css` in your app.

For the exact commands and warning, see [How to install daisyUI with UnoCSS](/docs/install/unocss/).
