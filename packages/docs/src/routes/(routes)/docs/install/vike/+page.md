---
title: Install daisyUI for Vike
desc: How to install Tailwind CSS and daisyUI in a Vike project
---

### 1. Create a new Vike project

Create a new Vike project in the current directory

```:Terminal
# React
npm create bati --- --react
# OR Vue
npm create bati --- --vue
# OR SolidJS
npm create bati --- --solid
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
  
```postcss:layouts/tailwind.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file in your Vike page (or layout)
```tsx:layouts/+LayoutDefault.tsx
import "./tailwind.css";
```

Now you can use daisyUI class names!
