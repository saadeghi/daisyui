---
title: Install daisyUI for Vue
desc: How to install Tailwind CSS and daisyUI in a Vue project
---

### 1. Create a new Vue project

Create a new Vite Vue project in the current directory

```:Terminal
npm create vite@latest ./ -- --template vue
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss @tailwindcss/vite daisyui@beta
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

Put Tailwind and daisyUI to your CSS file (and remove old styles)
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
