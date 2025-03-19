---
title: Install daisyUI for Nuxt
desc: How to install Tailwind CSS and daisyUI in a Nuxt project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Nuxt project

Create a new Nuxt project in the current directory

```sh:Terminal
npx nuxi@latest init
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:assets/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
