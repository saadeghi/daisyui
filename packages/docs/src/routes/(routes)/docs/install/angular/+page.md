---
title: Install duskmoonUI for Angular
desc: How to install Tailwind CSS and duskmoonUI in a Angular project
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

### 2. Install Tailwind CSS, PostCSS, and duskmoonUI

```sh:Terminal
npm install duskmoonui@latest tailwindcss@latest @tailwindcss/postcss@latest postcss@latest --force
```

Add Tailwind CSS plugin for PostCSS to a new `.postcssrc.json` file at root

```json:.postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:src/styles.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Run the Angular development server
```sh:Terminal
ng serve
```

Now you can use duskmoonUI class names!
