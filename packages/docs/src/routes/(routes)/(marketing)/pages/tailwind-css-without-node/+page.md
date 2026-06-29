---
title: Tailwind CSS without Node
desc: How to use Tailwind CSS without Node.js and NPM
layout: contentLanding
keywords: standalone tailwindcss, tailwindcss without node, tailwindcss executable, daisyui without node.js
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Tailwind CSS runs in many setups. Most guides assume a Node toolchain. That works well for Vite and PostCSS projects. But adding Node just to build CSS can be heavy when your app runs on Rails, Go, Rust, PHP, or another server side environment.

### Common ways to use Tailwind CSS

- Vite plugin — a fast dev server experience. It needs Node and Vite config.
- PostCSS plugin — integrates into many build pipelines; still requires Node tooling.
- CDN file — great for quick prototypes; it loads prebuilt styles and has limitations for production.

Each method has tradeoffs. Vite and PostCSS give full feature parity. They need Node. The CDN needs no build step; it limits customization and content scanning for unused classes.

### Why adding Node for Tailwind can be inefficient

If your project already runs on Rails, Go, Rust, or PHP, adding Node just to run Tailwind creates extra complexity. You must install Node on developer machines and CI. You must keep Node deps up to date. That adds maintenance and build steps that are unrelated to your primary stack.

For simple sites or server side apps, you want a small, dependable way to produce CSS without introducing a separate toolchain.

### Tailwind CSS standalone executable

Tailwind provides a single-file standalone CLI. It runs without Node. You download the executable for your OS and run it to process CSS. It does the same content scanning and plugin support as the Node version.

1. Get the executable. Follow Tailwind's guide or run one of these commands for your OS.

```sh:Terminal
# Run the corresponding command for your OS

# Linux
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64-musl
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64-musl

# MacOS
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64

# Windows
curl -sLo tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make it executable on Linux and macOS:

```sh:Terminal
chmod +x tailwindcss
```

2. Create an input CSS file with Tailwind directives. Address your HTML and templates in the `--content` or `--scan` option when building.

```postcss:input.css
@import "tailwindcss";
```

3. Build the CSS. Use `--watch` during development and omit it for CI.

```sh:Terminal
./tailwindcss -i input.css -o output.css --watch
# Windows
tailwindcss.exe -i input.css -o output.css --watch
```

### Use daisyUI with the standalone CLI

daisyUI ships a small ESM bundle you can use with the standalone CLI. Download the bundle and add it as a plugin in your `input.css` file.

1. Download daisyUI bundle files next to the Tailwind executable:

```sh:Terminal
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.mjs
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.mjs
```

2. Update `input.css` to load Tailwind and daisyUI as plugins.

```postcss:input.css
@import "tailwindcss";

@source not "./tailwindcss";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";

/* Optional: load custom theme bundle */
@plugin "./daisyui-theme.mjs" {
  /* custom theme settings */
}
```

3. Build as shown earlier. The output CSS will include daisyUI utilities and components.

### Update:  

daisyUI now has a fast way to automate the setup of Tailwind CSS standalone with daisyUI for various environments. It's a shell script that installs everything you need in one step.

The command below,
- Downloads latest version of Tailwind CSS Standalone executable file for your OS, [from GitHub](https://github.com/tailwindlabs/tailwindcss/releases/latest)
- Downloads latest version of daisyUI bundle file [from GitHub](https://github.com/saadeghi/daisyui/releases/latest)
- Creates `input.css` file with Tailwind CSS and daisyUI
- Generates `output.css` file for the first time

**Linux** or **MacOS**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast))

```sh:Terminal
cd myapp/static/css && curl -sL daisyui.com/fast | bash
```

**Windows**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast.ps1))

```sh:PowerShell
cd myapp/static/css && powershell -c "irm daisyui.com/fast.ps1 | iex"
```
