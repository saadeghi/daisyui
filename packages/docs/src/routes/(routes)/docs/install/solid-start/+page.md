---
title: Install daisyUI for Solid Start
desc: How to install Tailwind CSS and daisyUI in a Solid Start project
---

### 1. Create a new Solid Start project

Create a new Solid Start project in the current directory

```:Terminal
npm init solid@latest ./
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss @tailwindcss/vite daisyui@beta
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

Put Tailwind and daisyUI to your CSS file (and remove old styles)
  
```postcss:src/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
