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
