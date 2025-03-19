---
title: Install daisyUI for Solid
desc: How to install Tailwind CSS and daisyUI in a Solid project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Solid project

Create a new Solid project in the current directory

```sh:Terminal
npx degit solidjs/templates/js
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [tailwindcss(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/index.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
