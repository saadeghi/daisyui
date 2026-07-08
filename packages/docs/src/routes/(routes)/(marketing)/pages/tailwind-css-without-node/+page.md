---
title: Tailwind CSS without Node
desc: Use Tailwind CSS and daisyUI without a local Node build step through the browser CDN for prototypes and simple HTML pages.
layout: contentLanding
keywords: tailwind css without node, tailwindcss without npm, standalone tailwindcss, daisyui without node.js, Tailwind CDN
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## Tailwind CSS without Node is useful for quick HTML work

Most production Tailwind CSS projects use a build step. That is the right choice when you need bundling, minification, source control around dependencies, and a repeatable deployment.

Sometimes you only need a [quick HTML prototype](/pages/css-library-for-html/), a demo page, a school project, or a server-rendered page where adding a Node pipeline would slow the work down.

## The CDN path

Tailwind CSS provides a browser build for quick use in HTML. daisyUI also publishes CDN files. Together, they let you test Tailwind utilities and daisyUI components without installing packages locally.

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Then write normal markup:

```html
<main class="min-h-screen grid place-items-center bg-base-200 p-6">
  <button class="btn btn-primary">Hello</button>
</main>
```

## Know the tradeoff

The browser setup is excellent for prototypes and learning. For production apps, a [build setup](/pages/install-tailwind-css-vite/) gives you stronger control over performance, dependency versions, and generated CSS.
