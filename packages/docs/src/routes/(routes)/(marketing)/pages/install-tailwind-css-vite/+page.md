---
title: Install Tailwind CSS with Vite
desc: Install Tailwind CSS with Vite, add daisyUI, and build a small card example with the current Tailwind CSS 4 setup.
layout: contentLanding
keywords: install Tailwind CSS Vite, Tailwind CSS Vite, @tailwindcss/vite, daisyUI Vite
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## Install Tailwind CSS with Vite when you want a real build setup

Vite is a good match for [Tailwind CSS](/pages/tailwind-css/) because it gives you a fast development server and a simple plugin setup. Tailwind CSS 4 uses the `@tailwindcss/vite` plugin in Vite projects.

If you also want [component classes](/pages/tailwind-ui-components/), install daisyUI in the same project and load it from your CSS file.

## 1. Create a Vite project

```sh
npm create vite@latest ./ -- --template vanilla
```

## 2. Install Tailwind CSS and daisyUI

```sh
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

## 3. Add Tailwind CSS to Vite

```js
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss()],
})
```

## 4. Import Tailwind CSS and load daisyUI

```css
@import "tailwindcss";
@plugin "daisyui";
```

## 5. Use Tailwind utilities and daisyUI components together

```html
<main class="min-h-screen grid place-items-center bg-base-200 p-6">
  <section class="card bg-base-100 shadow-sm max-w-sm">
    <div class="card-body">
      <h1 class="card-title">Vite + Tailwind CSS</h1>
      <p>Tailwind handles layout. daisyUI gives repeated UI parts clear names.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Continue</button>
      </div>
    </div>
  </section>
</main>
```

## Why add daisyUI during setup?

Tailwind CSS gives you control over every visual detail. daisyUI gives you ready component classes for the parts you will use repeatedly. Starting with both keeps the project flexible without forcing every button, card, input, and alert to start from zero.
