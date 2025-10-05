---
title: Install daisyUI for Ember
desc: How to install Tailwind CSS and daisyUI in a Ember project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Ember project

Create a new Ember project using vite in the current directory

```sh:Terminal
npx ember-cli@latest init --blueprint @ember/app-blueprint
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Add Tailwind CSS to Vite config

```diff:vite.config.mjs
  import { defineConfig } from 'vite';
  import { extensions, classicEmberSupport, ember } from '@embroider/vite';
  import { babel } from '@rollup/plugin-babel';
+ import tailwindcss from '@tailwindcss/vite';

  export default defineConfig({
    plugins: [
+     tailwindcss(),
      classicEmberSupport(),
      ember(),
      // extra plugins here
      babel({
        babelHelpers: 'runtime',
        extensions,
      }),
    ],
  });
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/styles/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Import the CSS file in your index.html 
```diff:index.html
<head>
+  <script type="module">
+    import "./app/styles.css";
+  </script>
  <!-- the rest -->
</head>
```

Now you can use daisyUI class names!
