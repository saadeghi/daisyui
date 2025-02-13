---
title: Use daisyUI in a Bun fullstack dev server
desc: How to use Tailwind CSS and daisyUI in a Bun fullstack dev server
---

Using Bun 1.2 you can serve HTML and CSS files directly in a [fullstack dev server](https://bun.sh/docs/bundler/fullstack). Here's how to setup daisyUI for it.

### 1. Create a new Bun project

Create a new Bun project in the current directory

```sh:Terminal
bun init -y
```

### 2. Install bun-plugin-tailwind and daisyUI

```sh:Terminal
npm install bun-plugin-tailwind daisyui@beta
```

Create a `bunfig.toml` file at root and add bun-plugin-tailwind as a plugin

```toml:bunfig.toml
[serve.static]
plugins = ["bun-plugin-tailwind"]
```

### 3. Add HTML and CSS files

Create `src/index.html`

```html:src/index.html
<!doctype html>
<html>
  <head>
    <title>Home</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <button class="btn">daisyUI Button</button>
  </body>
</html>
```

Create `src/style.css` and add Tailwind CSS and daisyUI

```postcss:src/style.css
@import "tailwindcss";
@plugin "daisyui";
```

##  Add a server file

Create a `index.ts` file at root and serve the HTML file.
```ts:index.ts
import type { Server } from "bun";
import homepage from "./src/index.html";

const server: Server = Bun.serve({
  static: {
    "/": homepage,
  },
  async fetch(req: Request): Promise<Response> {
    return new Response("Not Found", { status: 404 });
  },
});
console.log(`Listening on ${server.url}`);
```

Run the server

```sh:Terminal
bun index.ts
```

Now you can use daisyUI class names!
