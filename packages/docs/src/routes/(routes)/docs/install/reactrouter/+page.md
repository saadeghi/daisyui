---
title: Install daisyUI for React Router
desc: How to install daisyUI in a React Router project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new React Router project

Create a new React Router project in the current directory

```sh:Terminal
npm create react-router@latest ./
```

### 2. Install daisyUI

```sh:Terminal
npm install daisyui@latest
```

### 3. Add daisyUI

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/app.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!
