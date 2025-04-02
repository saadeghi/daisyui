---
title: Install daisyUI for Eleventy
desc: How to install Tailwind CSS and daisyUI in a Eleventy project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Initialize a new Node project and add dev and build scripts

```sh:Terminal
npm init -y
npm pkg set scripts.dev="eleventy --serve"
npm pkg set scripts.build="eleventy"
```

### 2. Install 11ty, PostCSS, Tailwind CSS, Tailwind CSS Typography plugin, and daisyUI

```sh:Terminal
npm install @11ty/eleventy postcss tailwindcss@latest @tailwindcss/postcss@latest @tailwindcss/typography@latest daisyui@latest
```

### 3. Create a layout template

```md:src/_includes/layouts/default.njk
---
title: My Blog
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/styles/index.css">
  </head>
  <body class="prose">
    {{ content | safe }}
  </body>
</html>
```

### 4. Create a markdown homepage

```md:src/index.md
---
layout: layouts/default.njk
---

# Markdown heading 1

## Markdown heading 2

### Markdown heading 3

<div class="not-prose">
  <button class="btn">daisyUI Button</button>
</div>
```

### 5. Create a CSS file

```postcss:src/styles/index.css
@import 'tailwindcss';
@plugin "@tailwindcss/typography";
@plugin "daisyui";
```

### 6. Create a eleventy.config.mjs file at root

```js:eleventy.config.mjs
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/styles/index.css');
    const tailwindOutputPath = './dist/styles/index.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await postcss([tailwindcss()]).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  return {
    dir: { input: 'src', output: 'dist' },
  };
}
```

### 6. Run the project
  
```sh:Terminal
npm run dev
```

Now you can use daisyUI class names!
