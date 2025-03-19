---
title: Install daisyUI for Vike
desc: How to install Tailwind CSS and daisyUI in a Vike project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Vike project

Create a new Vike project in the current directory

```sh:Terminal
npm create vike ./
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```ts:vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), vike()],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)

```postcss:renderer/Layout.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
