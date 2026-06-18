---
title: Install daisyUI for Angular
desc: How to install Tailwind CSS and daisyUI in a Angular project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Angular project

Install Angular CLI globally

```sh:Terminal
npm install -g @angular/cli@latest
```

Create a new Angular project called `my-project` and navigate to it

```sh:Terminal
ng new my-project --style css
cd my-project
```

### 2. Install Tailwind CSS, PostCSS, and daisyUI

```sh:Terminal
npm install daisyui@latest tailwindcss@latest @tailwindcss/postcss@latest postcss@latest --force
```

Add Tailwind CSS plugin for PostCSS to a new `.postcssrc.json` file at root

```json:.postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:src/styles.css
@import "tailwindcss";
@plugin "daisyui";
```

Run the Angular development server
```sh:Terminal
ng serve
```

Now you can use daisyUI class names!

### Note about modern CSS support

Angular builds CSS for an old list of browsers by default, so modern CSS features like `color-mix()` (used by some daisyUI colors) can render differently than on daisyui.com.

To fix this, tell the build to target modern browsers by adding a `browserslist` to your `package.json`:

```sh:Terminal
npm pkg set browserslist="> 1%"
```

This tells Angular's CSS optimizer (Lightning CSS) to keep modern CSS instead of polyfilling it for outdated browsers — the same fix used in the [Next.js guide](/docs/install/nextjs/). daisyUI and Tailwind CSS target modern browsers, so this doesn't drop any supported browser.

Alternatively, you can run Tailwind's own optimization step in `.postcssrc.json`:

```json:.postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {
      "optimize": true
    }
  }
}
```

Use `"optimize": { "minify": false }` if you'd rather keep the development CSS unminified.
