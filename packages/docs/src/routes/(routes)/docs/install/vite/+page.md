---
title: Install daisyUI for Vite
desc: How to install Tailwind CSS and daisyUI in a Vite project
---

### 1. Create a new Vite project

Create a new Vite project in the current directory

```:Terminal
npm create vite@latest ./ -- --template vanilla
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss @tailwindcss/vite daisyui@beta
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
```

Put Tailwind and daisyUI to your CSS file (and remove old styles)
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
