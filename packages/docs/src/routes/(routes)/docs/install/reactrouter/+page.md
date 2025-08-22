---
title: Install duskmoonUI for React Router
desc: How to install duskmoonUI in a React Router project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new React Router project

Create a new React Router project in the current directory

```sh:Terminal
npm create react-router@latest ./
```

### 2. Install duskmoonUI

```sh:Terminal
npm install duskmoonui@latest
```

### 3. Add duskmoonUI

Put Tailwind CSS and duskmoonUI in your CSS file (and remove old styles)
  
```postcss:app/app.css
@import "tailwindcss";
@plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
