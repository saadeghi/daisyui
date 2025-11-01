---
title: Install daisyUI for Deno Fresh
desc: How to install Tailwind CSS and daisyUI in a Deno Fresh project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Fresh project

Use `jsr` to initialize a new Fresh project in the current directory

```bash
deno run -Ar jsr:@fresh/init ./ --tailwind --vscode
```

### 2. Install daisyUI

Add daisyUI

```bash
deno i -D npm:daisyui@latest
```

Add daisyUI to your CSS file (and remove old styles)

```css:assets/styles.css
@import "tailwindcss";
@plugin "daisyui";
```

Now you can use daisyUI class names!

Run the dev server

```bash
deno task dev
```
