---
title: Install daisyUI for Astro
desc: How to install Tailwind CSS and daisyUI in a Astro project
---

### 1. Create a new Astro project

```:Terminal
npm create astro@latest
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss@next @tailwindcss/vite@next daisyui@alpha
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

Put Tailwind and daisyUI to your CSS file
  
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
