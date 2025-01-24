---
title: Install daisyUI for Vike
desc: How to install Tailwind CSS and daisyUI in a Vike project
---

You can use [Bâti](https://batijs.dev) to create a scaffold of a new Vike project with Tailwind CSS and daisyUI.

> To customize your scaffold, see [Bâti](https://batijs.dev) website.

You have these alternatives:
- A. Create a new project with Tailwind CSS and daisyUI
- B. Add Tailwind CSS and daisyUI in a Vike project

## A. Create a new Vike project with Tailwind CSS and daisyUI

In the current directory, create a new Vike project with Tailwind CSS and daisyUI

```:Terminal
# React
npm create bati --- --react --daisyui
# OR Vue
npm create bati --- --vue --daisyui
# OR SolidJS
npm create bati --- --solid --daisyui
```

## B. Add Tailwind CSS and daisyUI in a Vike project

### 1. (Optional) Create a new Vike project

If you don't have a Vike project, you can create a new Vike project in the current directory

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
