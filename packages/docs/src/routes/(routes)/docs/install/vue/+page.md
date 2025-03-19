---
title: Install daisyUI for Vue
desc: How to install Tailwind CSS and daisyUI in a Vue project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Vue project

Create a new Vite Vue project in the current directory

```sh:Terminal
npm create vite@latest ./ -- --template vue
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [tailwindcss(), vue()],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
