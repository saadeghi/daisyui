---
title: Install Tailwind CSS with Vite
desc: Step-by-step guide to set up Tailwind CSS in a Vite project, with a daisyUI card example
layout: contentLanding
keywords: vite and tailwindcss
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

This Tutorial uses [Tailwind CSS 4](https://tailwindcss.com) and [Vite 6](https://vitejs.dev).

## Why Tailwind CSS and Vite?

You want your site to look sharp and load fast. Tailwind CSS gives you utility classes to style anything, while Vite makes your development lightning quick. No more waiting for slow builds or wrestling with clunky CSS files. You get instant feedback and total control over your design.

Tailwind CSS works great with Vite because both are designed for speed and flexibility. Vite’s hot module replacement means you see your Tailwind changes instantly. No more waiting for a full rebuild. You can tweak your design and see the results right away.

## How to install Tailwind CSS with Vite?

### 1. Create a new Vite project

```sh:Terminal
npm create vite@latest ./ -- --template vanilla
```

### 2. Install Tailwind CSS

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest
```

### 3. Add Tailwind to your Vite config

```js:vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
```

### 4. Set up your CSS file

Create `src/style.css` and add:

```postcss:src/style.css
@import "tailwindcss";
```

Remove any old styles from your project.

### 5. Start your app

```sh:Terminal
npm run dev
```

Now you can use Tailwind CSS class names in your HTML!

## Example: Card Component with Tailwind CSS

Here’s a card with all the bells and whistles—light and dark support, hover, focus, and active states:

```html
<div class="max-w-sm rounded-lg bg-white shadow-md transition-colors dark:bg-gray-800">
  <img class="h-auto w-full rounded-t-lg object-cover" src="https://placehold.co/400x200" alt="Card image" />
  <div class="px-4 py-2">
    <h2 class="mb-2 text-xl leading-tight font-semibold tracking-tight 
      text-gray-900 dark:text-white">Tailwind Card</h2>
    <p class="mb-3 leading-relaxed font-normal text-sm text-gray-700 
      dark:text-gray-400">This card uses Tailwind utility classes.</p>
    <div class="flex justify-end">
      <a href="#" class="inline-flex items-center justify-center rounded-lg 
        bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white 
        transition-transform duration-200 ease-in-out hover:bg-blue-800 
        focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:outline-none 
        active:translate-y-0.25 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus-visible:ring-blue-800"> Read more </a>
    </div>
  </div>
</div>
```

Run your app locally with:

```sh:Terminal
npm run dev
```

## Too many class names? Use daisyUI!

You might notice the card above has a long list of class names. It works, but it’s hard to read and even harder to maintain. If you want to tweak the style, you have to hunt through every class. That’s where daisyUI comes in.

daisyUI gives you ready-made component classes, so you can build beautiful UIs with fewer class names. Here’s how to add it to your project:

### 1. Install daisyUI

```sh:Terminal
npm install daisyui@latest
```

### 2. Add daisyUI in your CSS

Edit your `src/style.css`:

```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

### 3. Use daisyUI classes for your card

Now you can write the same card with just a few class names:

```html
<div class="card w-96">
  <figure><img src="https://placehold.co/400x200" alt="Card image" /></figure>
  <div class="card-body">
    <h2 class="card-title">daisyUI Card</h2>
    <p>This card uses daisyUI component classes.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Read more</button>
    </div>
  </div>
</div>
```

You get a clean, maintainable UI with less effort. That’s the power of daisyUI.
