---
title: Install daisyUI for SvelteKit
desc: How to install Tailwind CSS and daisyUI in a SvelteKit project
---

### 1. Create a new SvelteKit project

```:Terminal
npx sv create
```

### 2. Install Tailwind CSS and daisyUI

```:Terminal
npm install tailwindcss@next @tailwindcss/vite@next daisyui@alpha
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

Put Tailwind and daisyUI to your CSS file
  
```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file in your Svelte page (or layout)
```svelte:src/routes/+page.svelte
<script>
  import "../style.css";
</script>
```

Now you can use daisyUI class names!
