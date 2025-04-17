---
title: Install daisyUI for Elysia
desc: How to install Tailwind CSS and daisyUI in a Elysia project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Elysia project

Install Bun, according to the [official Bun docs](https://bun.sh/docs/installation)

Create a new Elysia project

```sh:Terminal
bun create elysia myapp
cd myapp
```

Install `@elysiajs/static`

```sh:Terminal
bun install @elysiajs/static
```

### 2. Install Tailwind CSS and daisyUI

```sh:Terminal
bun install tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

Add Tailwind CSS and daisyUI to your CSS file

```postcss:src/app.css
@import "tailwindcss" source(none);
@source "../public";
@plugin "daisyui";
```

### 3. Setup server file

Create a server file at `src/index.ts` with functions to build CSS and watch for changes

```ts:src/index.ts
import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'
import { exec } from 'child_process'
import { watch } from 'fs'

const buildCSS = () =>
  new Promise(resolve =>
    exec('tailwindcss -i ./src/app.css -o ./public/output.css',
      (_error, _stdout, stderr) => {
        console.log(stderr);
        resolve(null);
      })
  );

await buildCSS();

const watcher = watch('./public', { recursive: true },
  async () => {
    await buildCSS();
  }
);

process.on('SIGINT', () => {
  watcher.close();
  process.exit(0);
});

const app = new Elysia()
	.use(
		staticPlugin({
			assets: "public",
      prefix: "",
		}),
	)
	.listen(3000, ({ hostname, port }) => {
		console.log(`Server started http://${hostname}:${port}`);
	});
```

### 4. Add a index.html file

Create a `public/index.html` file with the following content

```html:public/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/output.css">
  </head>
  <body>
    <button class="btn btn-primary">Hello daisyUI</button>
  </body>
</html>
```

Run the server

```sh:Terminal
bun run dev
```

Now you can use daisyUI class names!
