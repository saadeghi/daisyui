---
title: Install daisyUI for Vite
desc: How to install Tailwind CSS and daisyUI in a Vite project
---

### 1. Create a new Vite project

```:Terminal
npm create vite@latest
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss@next @tailwindcss/vite@next daisyui@beta
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

Put Tailwind and daisyUI to your CSS file
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
