---
title: Install daisyUI for Vite
desc: How to install Tailwind CSS and daisyUI in a Vite project
---

### 1. Create a new Vite project

```
npm create vite@latest
```

### 2. Install Tailwind CSS and daisyUI

```
npm install tailwindcss@next @tailwindcss/vite@next daisyui@alpha
```

Add Tailwind CSS to Vite config

```diff:vite.config.js
  import { defineConfig } from 'vite';
+ import tailwindcss from '@tailwindcss/vite';

  export default defineConfig({
    plugins: [
+    tailwindcss()
    ],
  });
```

Add Tailwind and daisyUI to your CSS file
  
```postcss:app.css
@import "tailwindcss";
@plugin "daisyui";
```
