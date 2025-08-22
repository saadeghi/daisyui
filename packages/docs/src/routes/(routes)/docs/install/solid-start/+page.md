---
title: Install duskmoonUI for Solid Start
desc: How to install Tailwind CSS and duskmoonUI in a Solid Start project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Solid Start project

Create a new Solid Start project in the current directory

```sh:Terminal
npm init solid@latest ./
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest duskmoonui@latest
```

Add Tailwind CSS to Vite config

```js:app.config.ts
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:src/app.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
