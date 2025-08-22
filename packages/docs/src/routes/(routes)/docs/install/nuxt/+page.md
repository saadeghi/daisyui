---
title: Install duskmoonUI for Nuxt
desc: How to install Tailwind CSS and duskmoonUI in a Nuxt project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Nuxt project

Create a new Nuxt project in the current directory

```sh:Terminal
npx nuxi@latest init
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest duskmoonui@latest
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

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:assets/app.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
