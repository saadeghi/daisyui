---
title: Install daisyUI for SvelteKit
desc: How to install Tailwind CSS and daisyUI in a SvelteKit project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new SvelteKit project

Create a new SvelteKit project in the current directory

```sh:Terminal
npx sv create ./
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
});

```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file in your Svelte page (or layout)
```html:src/routes/+page.svelte
<script>
  import "../style.css";
</script>
```

Now you can use daisyUI class names!
