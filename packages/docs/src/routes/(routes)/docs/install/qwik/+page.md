---
title: Install duskmoonUI for Qwik
desc: How to install Tailwind CSS and duskmoonUI in a Qwik project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Qwik project

Create a new Qwik project in the current directory

```sh:Terminal
npm create qwik@latest empty ./
```

### 2. Install Tailwind CSS and duskmoonUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest duskmoonui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import tailwindcss from "@tailwindcss/vite";
//...
export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [tailwindcss(), qwikCity(), qwikVite(), tsconfigPaths()],
    // ...
  };
});
```

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:src/index.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
