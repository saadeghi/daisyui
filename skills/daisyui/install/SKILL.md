---
name: daisyui-install
description: Installation notes for daisyUI 5
---

## daisyUI 5 install notes
[install guide](https://daisyui.com/docs/install/)
1. daisyUI 5 requires Tailwind CSS 4
2. `tailwind.config.js` file is deprecated in Tailwind CSS v4. Do not use `tailwind.config.js`. Tailwind CSS v4 only needs `@import "tailwindcss";` in the CSS file if it's a node dependency.
3. daisyUI 5 can be installed using `npm i -D daisyui@latest` and then adding `@plugin "daisyui";` to the CSS file
4. daisyUI is suggested to be installed as a dependency but if you really want to use it from CDN, you can use Tailwind CSS and daisyUI CDN files:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```
5. A CSS file with Tailwind CSS and daisyUI looks like this (if it's a node dependency)
```css
@import "tailwindcss";
@plugin "daisyui";
```

### CDN

For a no-install browser setup, load the precompiled daisyUI CSS and Tailwind's browser build:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

The main CDN file includes the light and dark themes. Load every built-in theme with:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
```

Individual daisyUI CSS modules can also be combined from the CDN. The `is-drawer-open:` and `is-drawer-close:` variants are not included in CDN files.

### Standalone and framework-specific setup

- Use the [standalone guide](https://daisyui.com/docs/install/standalone/) when using the Tailwind CSS standalone executable without Node.js.
- Otherwise select the guide that matches the existing framework or build tool:
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

Follow the selected guide's file paths and integration steps instead of assuming every framework uses the same CSS entry.
