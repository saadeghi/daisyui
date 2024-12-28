---
title: Install daisyUI for Nuxt
desc: How to install Tailwind CSS and daisyUI in a Nuxt project
---

### 1. Create a new Nuxt project

```:Terminal
npx nuxi@latest init
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss@next @tailwindcss/vite@next daisyui@alpha
```

Add Tailwind CSS to Vite config

```nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
});
```

Put Tailwind and daisyUI to your CSS file
  
```postcss:assets/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
