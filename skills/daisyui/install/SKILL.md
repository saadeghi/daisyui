---
name: daisyui-install
description: Installation instructions for daisyUI 5
---

## Install daisyUI 5
[Installation guide](https://daisyui.com/docs/install/)
1. You must use Tailwind CSS 4 with daisyUI 5.
2. The `tailwind.config.js` file is deprecated in Tailwind CSS v4. Do not use `tailwind.config.js`. If Tailwind CSS v4 is a Node.js dependency, add only `@import "tailwindcss";` to the CSS file.
3. To install daisyUI 5, run `npm i -D daisyui@latest`. Then, add `@plugin "daisyui";` to the CSS file.
4. Install daisyUI as a dependency when possible. If you have a specific reason to use a CDN instead, use the Tailwind CSS and daisyUI CDN files:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```
5. If Tailwind CSS and daisyUI are Node.js dependencies, use this CSS file:
```css
@import "tailwindcss";
@plugin "daisyui";
```

### CDN

For a browser setup with no installation, load the precompiled daisyUI CSS and the Tailwind browser build:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

The main CDN file includes the light and dark themes. To load all built-in themes, use:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
```

You can also combine separate daisyUI CSS modules from the CDN. The CDN files do not include the `is-drawer-open:` and `is-drawer-close:` variants.

### Standalone and framework-specific setup

- If you use the Tailwind CSS standalone executable without Node.js, use the [standalone guide](https://daisyui.com/docs/install/standalone/).
- For other installations, select the guide for the applicable framework or build tool:
  [11ty](https://daisyui.com/docs/install/11ty/),
  [Angular](https://daisyui.com/docs/install/angular/),
  [Astro](https://daisyui.com/docs/install/astro/),
  [Bun](https://daisyui.com/docs/install/bun/),
  [Tailwind CLI](https://daisyui.com/docs/install/cli/),
  [Dioxus](https://daisyui.com/docs/install/dioxus/),
  [Django](https://daisyui.com/docs/install/django/),
  [Electron](https://daisyui.com/docs/install/electron/),
  [Elysia](https://daisyui.com/docs/install/elysia/),
  [Ember](https://daisyui.com/docs/install/ember/),
  [Fresh](https://daisyui.com/docs/install/fresh/),
  [HTMX](https://daisyui.com/docs/install/htmx/),
  [Laravel](https://daisyui.com/docs/install/laravel/),
  [Lit](https://daisyui.com/docs/install/lit/),
  [Next.js](https://daisyui.com/docs/install/nextjs/),
  [Nuxt](https://daisyui.com/docs/install/nuxt/),
  [Phoenix](https://daisyui.com/docs/install/phoenix/),
  [PostCSS](https://daisyui.com/docs/install/postcss/),
  [Preact](https://daisyui.com/docs/install/preact/),
  [Qwik](https://daisyui.com/docs/install/qwik/),
  [Rails](https://daisyui.com/docs/install/rails/),
  [React](https://daisyui.com/docs/install/react/),
  [React Router](https://daisyui.com/docs/install/reactrouter/),
  [Rsbuild](https://daisyui.com/docs/install/rsbuild/),
  [Solid](https://daisyui.com/docs/install/solid/),
  [SolidStart](https://daisyui.com/docs/install/solid-start/),
  [SvelteKit](https://daisyui.com/docs/install/sveltekit/),
  [UnoCSS](https://daisyui.com/docs/install/unocss/),
  [Vike](https://daisyui.com/docs/install/vike/),
  [Vite](https://daisyui.com/docs/install/vite/),
  [Vue](https://daisyui.com/docs/install/vue/),
  [Waku](https://daisyui.com/docs/install/waku/),
  [WordPress](https://daisyui.com/docs/install/wordpress/),
  [Yew](https://daisyui.com/docs/install/yew/), or
  [Zola](https://daisyui.com/docs/install/zola/).

Use the file paths and integration steps in the selected guide. Each framework can use a different CSS entry.
