---
title: Use daisyUI with Tailwind CSS Standalone CLI
desc: How to run daisyUI with Tailwind CSS Standalone CLI without Node.js
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<div class="tabs tabs-lift lg:tabs-xl max-sm:tabs-sm">
  <label class="tab">
    <input type="radio" name="install_options" checked="checked" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-5 me-2 inline-block">
      <path d="m8.597,16.41l5.872-8.265c.118-.166,0-.395-.204-.395h-5.016l.604-5.98c.037-.26-.299-.394-.451-.18L3.531,9.855c-.118.166,0,.395.204.395h5.016l-.604,5.98c-.037.26.299.394.451.18Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
  </svg>
  Fast install
  </label>
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3 ps-16">

The command below,
- Downloads latest version of Tailwind CSS Standalone executable file for your OS, [from GitHub](https://github.com/tailwindlabs/tailwindcss/releases/latest)
- Downloads latest version of daisyUI bundle file [from GitHub](https://github.com/saadeghi/daisyui/releases/latest)
- Creates `input.css` file with Tailwind CSS and daisyUI
- Generates `output.css` file for the first time

**Linux** or **MacOS**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast))

```sh:Terminal
curl -sL daisyui.com/fast | bash
```

**Windows**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast.ps1))

```sh:PowerShell
powershell -c "irm daisyui.com/fast.ps1 | iex"
```

  </div>

  <label class="tab">
    <input type="radio" name="install_options"  />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-5 me-2 inline-block">
      <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M11 6l9 0"></path>
        <path d="M11 12l9 0"></path>
        <path d="M11 18l9 0"></path>
      </g>
    </svg>
    Manual install
  </label>
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3 ps-16">

### 1. Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable for your OS.

For example:

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

Make the file executable (For Linux and MacOS):

```sh:Terminal
chmod +x tailwindcss
```

### 2. Get daisyUI bundle JS file

Run this code to download latest version of daisyUI as a single js file and put it next to Tailwind's executable file.

```sh:Terminal
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.mjs
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.mjs
```

### 3. Add Tailwind CSS and daisyUI

Add Tailwind CSS and daisyUI to your CSS file.  
Address your HTML and other markup files in the `source` function.

```postcss:input.css
@import "tailwindcss";

@source not "./tailwindcss";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";

/* Optional for custom themes – Docs: https://daisyui.com/docs/themes/#how-to-add-a-new-custom-theme */
@plugin "./daisyui-theme.mjs"{
  /* custom theme here */
}
```

</div>
</div>

### Build CSS

Run this command to build the CSS file using Tailwind CSS executable.  
Using `--watch` will automatically update the output.css file when you change the input.css file.  
For CI/CD, run the command without `--watch` to generate the output.css file once.

```sh:Terminal
./tailwindcss -i input.css -o output.css --watch
# For Windows
tailwindcss.exe -i input.css -o output.css --watch
```

Now you can use daisyUI class names!
