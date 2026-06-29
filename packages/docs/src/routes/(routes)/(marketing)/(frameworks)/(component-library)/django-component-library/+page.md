---
title: Django component library
desc: Use daisyUI as a Tailwind CSS component library for Django projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Django")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Django component library" />
</div>
</div>

## Django

Django is a Python web framework built around clear conventions and a batteries-included philosophy.

It includes routing, templates, forms, authentication, security features, an ORM, migrations, and the Django admin. For teams building data-heavy applications, that full stack matters because fewer core pieces need to be chosen and wired together.

Django's template system also remains a strong fit for server-rendered pages. You can render useful HTML on the server, add interactivity where needed, and keep business workflows close to Python.

## Django + daisyUI

daisyUI works well with Django because it doesn't require a front-end framework. You can use component classes directly in Django templates, forms, partials, and admin-adjacent pages.

The useful parts are practical:

- **Template-friendly classes**: `btn`, `input`, `select`, `table`, and `alert` keep Django templates readable.

- **Works with server-rendered HTML**: daisyUI styles markup Django already renders, whether the page uses plain templates, HTMX, or small client-side scripts.

- **Good fit for forms**: Django can handle validation and errors while daisyUI handles form layout and states.

- **Theme persistence**: Store a selected theme in a session, cookie, or user profile and apply it at the layout level.

You get polished UI without converting a Django app into a JavaScript application.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Django

Setting up daisyUI in Django depends on how you manage static assets.

For a Node-based setup, install Tailwind CSS and daisyUI, add `@plugin "daisyui"` to your CSS, and compile the output into Django's static files.

For a Python-only setup, the standalone daisyUI files can work with Django's static-file pipeline.

For Django-specific installation options, see [How to install daisyUI with Django](/docs/install/django/).
