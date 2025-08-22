---
title: Install duskmoonUI for Astro
desc: How to install Tailwind CSS and duskmoonUI in a Astro project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Astro project

Create a new Astro project in the current directory

```sh:Terminal
npm create astro@latest ./
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest duskmoonui@latest
```

Add Tailwind CSS to Astro config

```js:astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:src/assets/app.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Import the CSS file on top of your astro Layout file
```js:src/layouts/Layout.astro
---
import "../assets/app.css";
---
```

Now you can use duskmoonUI class names!
