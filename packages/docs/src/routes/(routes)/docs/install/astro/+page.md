---
title: Install daisyUI for Astro
desc: How to install Tailwind CSS and daisyUI in a Astro project
---

### 1. Create a new Astro project

Create a new Astro project in the current directory

```:Terminal
npm create astro@latest ./
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss @tailwindcss/vite daisyui@beta
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

Put Tailwind and daisyUI to your CSS file (and remove old styles)
  
```postcss:src/assets/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file on top of your astro Layout file
```js:src/layouts/Layout.astro
---
import "../assets/app.css";
---
```

Now you can use daisyUI class names!
