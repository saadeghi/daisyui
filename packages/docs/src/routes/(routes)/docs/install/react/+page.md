---
title: Install daisyUI for React
desc: How to install Tailwind CSS and daisyUI in a React project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new React project

Create a new Vite React project in the current directory

```sh:Terminal
npm create vite@latest ./ -- --template react
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/App.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
