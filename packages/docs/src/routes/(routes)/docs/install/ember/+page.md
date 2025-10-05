---
title: Install daisyUI for Ember
desc: How to install Tailwind CSS and daisyUI in a Ember project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Ember project

Create a new Ember project using vite

```sh:Terminal
npx ember-cli@latest new my-app-name \
  --blueprint @ember/app-blueprint
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```js:vite.config.js
import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    tailwindcss(),

    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});

```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/styles.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file in your index.html 
```html:index.html
<script type="module">
  import "./app/styles.css";
</script>
```

Now you can use daisyUI class names!
