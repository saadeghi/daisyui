---
title: Install daisyUI for Vike
desc: How to install Tailwind CSS and daisyUI in a Vike project
---

### 1. Create a new Vike project

Create a new Vike project in the current directory

```:Terminal
npm create vike
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss @tailwindcss/vite daisyui@beta
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

Put Tailwind and daisyUI to your CSS file (and remove old styles)

```postcss:renderer/Layout.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
