---
title: HTMX component library
desc: daisyUI is the best Tailwind CSS component library for HTMX projects
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

HTMX has been a breath of fresh air in the JavaScript ecosystem by embracing the original simplicity of the web while enabling modern interactivity.

What makes HTMX fascinating is its HTML-first approach. Instead of writing JavaScript to fetch data and update the DOM, you simply add attributes like `hx-get` or `hx-post` to your HTML elements, and HTMX handles the rest.

I've used HTMX on several projects and love how it follows the "hypermedia-driven application" pattern. Your server returns HTML fragments rather than JSON, which feels surprisingly natural and eliminates entire categories of frontend complexity.

The library weighs just ~14KB (minified and gzipped), yet provides access to AJAX, CSS transitions, WebSockets, and Server-Sent Events directly from your HTML. This approach creates maintainable applications with a clear separation between structure and behavior.

## HTMX + daisyUI

As someone who's built multiple HTMX applications, I can confidently say that daisyUI is the perfect Tailwind CSS component library for HTMX projects.

Here's why this combination works so beautifully:

- **HTML-first harmony**: Both technologies prioritize HTML as the primary interface. daisyUI's semantic class names like `card` and `modal` fit naturally alongside HTMX's `hx-` attributes.

- **Zero JavaScript conflict**: daisyUI is pure CSS with no JavaScript dependencies, so it won't interfere with HTMX's event system or DOM updates.

- **Progressive enhancement**: Both technologies embrace progressive enhancement, making your applications more robust and accessible.

- **Dynamic theming**: daisyUI's 35+ built-in themes can be easily switched using HTMX triggers, allowing for dynamic theme changes without custom JavaScript.

This powerful combination gives you beautiful, interactive interfaces with remarkably little code, embracing the web platform rather than fighting against it.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for HTMX

Setting up daisyUI with HTMX is refreshingly simple.

Since HTMX works with any backend technology (whether it's Node.js, Python, Ruby, PHP, or anything else), you can integrate Tailwind CSS and daisyUI into your existing build process.

If you're starting a new project, choose your preferred backend, set up Tailwind CSS according to their documentation, and add daisyUI as a plugin with just a few lines of configuration.

Once configured, you can immediately start using daisyUI's component classes alongside HTMX attributes, creating beautiful, interactive interfaces with minimal code.

For detailed installation instructions that work with any backend, check out our comprehensive guide: [How to install daisyUI with HTMX](/docs/install/htmx/).
