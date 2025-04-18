---
title: Install daisyUI for Deno Fresh
desc: How to install Tailwind CSS and daisyUI in a Deno Fresh project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Fresh project

Install Deno, according to the [official Deno docs](https://docs.deno.com/runtime/)

Create a new Fresh project called `myapp` and navigate to it

```sh:Terminal
deno run -A -r https://fresh.deno.dev myapp --tailwind=false --vscode=false
cd myapp
```

Add `"nodeModulesDir": "auto",` to `deno.json` file

```diff:deno.json
{
+ "nodeModulesDir": "auto",
  "lock": false,

  //...rest of the file

}
```

### 2. Add Tailwind CSS and daisyUI

Install Tailwind CSS, daisyUI and fresh-plugin-tailwindcss

```sh:Terminal
deno i -D npm:tailwindcss@latest npm:daisyui@latest jsr:@pakornv/fresh-plugin-tailwindcss
```

Add Tailwind CSS and daisyUI to your CSS file

```postcss:static/styles.css
@import "tailwindcss";
@plugin "daisyui";
```

Add these lines to `fresh.config.ts` file

```diff:fresh.config.ts
  import { defineConfig } from "$fresh/server.ts";
+ import tailwind from "@pakornv/fresh-plugin-tailwindcss";

  export default defineConfig({
+   plugins: [tailwind()],
  });
```

### 3. Run the server

Run the Deno server with the following command

```sh:Terminal
deno task start
```

Now you can use daisyUI class names!
