---
title: Install Tailwind CSS and duskmoonUI for Zola
desc: How to install Tailwind CSS and duskmoonUI in a Zola project, without Node.js
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Zola project

Install Zole according to the [Zola docs](https://www.getzola.org/documentation/getting-started/installation/).

Create a new Zola project in called `myblog` and navigate to it:

```sh:Terminal
zola init myblog
cd myblog
```

### 2. Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable for your OS.

For example:

```sh:Terminal
# Run the corresponding command for your OS

# Linux
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64-musl
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64-musl

# MacOS
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
curl -sLo static/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64

# Windows
curl -sLo static\tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make the file executable (For Linux and MacOS):

```sh:Terminal
chmod +x static/tailwindcss
```

### 3. Get duskmoonUI bundled JS file

Run this code to download latest version of duskmoonUI as a single js file and put it next to Tailwind's executable file.

```sh:Terminal
curl -sLo static/duskmoonui.js https://github.com/duskmoon-dev/duskmoon-ui/releases/latest/download/duskmoonui.js
curl -sLo static/duskmoonui-theme.js https://github.com/duskmoon-dev/duskmoon-ui/releases/latest/download/duskmoonui-theme.js
```

### 4. Add Tailwind CSS and duskmoonUI

Add Tailwind CSS and duskmoonUI to your CSS file.
Address your HTML and other markup files in the `source` function.

```postcss:input.css
@import "tailwindcss" source(none);
@source "../templates/*.{html,md}";
@source "../content/*.{html,md}";
@plugin "./duskmoonui.js";

/* Optional for custom themes – Docs: https://duskmoonui.com/docs/themes/#how-to-add-a-new-custom-theme */
@plugin "./duskmoonui-theme.js"{
  /* custom theme here */
}
```

### 4. Build CSS

Run this command to build the CSS file using Tailwind CSS executable.  
Using `--watch` will automatically update the output.css file when you change the input.css file.  
For CI/CD, run the command without `--watch` to generate the output.css file once.

```sh:Terminal
./static/tailwindcss -i static/input.css -o static/output.css --watch
# For Windows
static\tailwindcss.exe -i static\\input.css -o static\\output.css --watch
```

### 5. Run the Zola server

Run the Zola server on another terminal tab

```
zola serve
```

Now you can use duskmoonUI class names!
