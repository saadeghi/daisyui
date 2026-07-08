---
title: Next.js component library
desc: Use daisyUI as a Tailwind CSS component library for Next.js projects
layout: contentLanding
---

<script>
  import Translate from "$components/Translate.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  export let data
</script>

<div class="mx-auto not-prose max-w-4xl py-12 p-6 from-base-300 rounded-box outline-base-content/5 mt-12 mb-6 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6">
<div class="max-w-96 items-center w-full grid grid-cols-2 gap-6 lg:gap-12 [&>svg]:w-full [&>svg]:h-auto mx-auto">
{@html data.frameworksData.find(item => item.name === "Next.js")?.logo}
<img class="w-full h-auto" src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="Best Next.js component library" />
</div>
</div>

## Next.js

Next.js is a React framework created by Vercel for building full-stack web applications.

Its App Router gives you file-based routing, layouts, nested routes, loading states, and error boundaries as part of the project structure. Next.js also supports API routes, middleware, image optimization, and production-focused build tooling.

The main advantage is rendering flexibility. A Next.js app can use Server Components, Client Components, static rendering, dynamic rendering, streaming, and server actions where each feature makes sense.

## Next.js + daisyUI

daisyUI fits Next.js because it doesn't require a client-side component runtime. It gives you CSS classes for common UI parts while Next.js handles routing, rendering, data loading, and interactivity.

That makes the pairing practical:

- **Server Component friendly**: daisyUI classes render as plain HTML and CSS, so static and server-rendered UI doesn't need extra client JavaScript.

- **Client behavior stays explicit**: Use Client Components only where you need state, effects, or browser APIs. daisyUI won't force that boundary.

- **Cleaner page markup**: `btn`, `navbar`, `menu`, `card`, and `modal` make layout and component intent easier to read in `page.tsx` and shared components.

- **Simple theming**: Theme switching can live in cookies, headers, local storage, or app state while daisyUI reads the theme from the DOM.

You get a component vocabulary without giving up the rendering model that makes Next.js useful.

<div dir="ltr" class="left-[50%] rtl:left-[-50%] relative translate-x-[-50%] rtl:translate-x-[50%] my-12 w-[calc(100vw-2rem)]">
  <Testimonials items={data.testimonials} limit="6" />
</div>

## Install Tailwind CSS and daisyUI for Next.js

Getting started with daisyUI in Next.js follows the current Tailwind CSS setup.

Create a project with `create-next-app`, install daisyUI with Tailwind CSS, and add `@plugin "daisyui"` in your global CSS file after `@import "tailwindcss"`.

Then use daisyUI classes in Server Components, Client Components, layouts, and pages like any other CSS class.

For step-by-step installation instructions, see [How to install daisyUI with Next.js](/docs/install/nextjs/).
