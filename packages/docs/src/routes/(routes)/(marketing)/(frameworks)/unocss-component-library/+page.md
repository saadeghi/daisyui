---
title: UnoCSS component library
desc: daisyUI is the best Tailwind CSS component library for UnoCSS projects
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
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best UnoCSS component library" />
</div>
</div>

## UnoCSS

UnoCSS has completely changed my perspective on utility-first CSS with its incredible performance and flexibility. It's not just another Tailwind alternative - it's a fundamentally new approach to CSS tooling.

What makes UnoCSS special is that it's an atomic CSS engine rather than a framework. This distinction means it has no preset utilities - you define exactly what you need or use community presets, keeping your CSS bundle as small as possible.

The performance is simply mind-blowing. UnoCSS generates styles on-demand with near-zero runtime overhead, and its HMR (Hot Module Replacement) is almost instantaneous even in large projects.

I particularly love UnoCSS's innovative features like attributify mode (which moves utilities to HTML attributes for cleaner markup), pure CSS icons, and variant groups that eliminate repetition in your class lists.

## UnoCSS + daisyUI

As someone who's used UnoCSS in production, I've found that pairing it with daisyUI through its dedicated preset creates an unbeatable combination for fast, beautiful UI development.

Here's why this integration works so brilliantly:

- **Perfect compatibility**: The daisyUI preset for UnoCSS provides seamless integration, allowing you to use all of daisyUI's components within the UnoCSS ecosystem.

- **Best of both worlds**: You get UnoCSS's atomic flexibility and performance alongside daisyUI's semantic component approach, using each where it makes the most sense.

- **Cleaner markup**: daisyUI's component classes like `btn` and `card` keep your HTML readable even while using UnoCSS's utility approach for custom styling.

- **Theme consistency**: daisyUI's 35+ built-in themes work perfectly with UnoCSS, making it easy to create visually consistent interfaces with multiple theme options.

This powerful combination accelerates development while maintaining the exceptional performance and flexibility that UnoCSS is known for.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install daisyUI for UnoCSS

Getting started with daisyUI in your UnoCSS project is remarkably straightforward.

First, set up a project with UnoCSS if you don't have one already. UnoCSS works with various frameworks like Vue, React, Svelte, or vanilla HTML.

Next, install the daisyUI preset for UnoCSS with a simple npm command. Then add the preset to your UnoCSS configuration with just a few lines of code.

Once configured, you can immediately start using daisyUI's component classes throughout your project while maintaining all the benefits of UnoCSS's atomic approach.

For detailed, UnoCSS-specific installation instructions and configuration options, check out our comprehensive guide: [How to install daisyUI with UnoCSS](/docs/install/unocss/).
