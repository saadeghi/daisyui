---
title: Install daisyUI for Dioxus
desc: How to install Tailwind CSS and daisyUI in a Dioxus project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Dioxus project

[Install Rust, WebAssembly Target and Dioxus CLI](https://dioxuslabs.com/learn/0.6/getting_started/) if you haven't already.

Create a new Dioxus project in the current directory

```sh:Terminal
dx new ./
```

### 2. Install Tailwind CSS CLI and daisyUI

Initialize a new Node project.  
And install Tailwind CSS CLI and daisyUI.


> :INFO:
>
> If you don't want to use Node.js, try [Tailwind CSS and daisyUI standalone](/docs/install/standalone/) files instead.


```sh:Terminal
npm init -y
npm install tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

Create a new css file `tailwind.css` at root directory

```postcss:tailwind.css
@source "./src/**/*.{rs,html,css}";
@import "tailwindcss";
@plugin "daisyui";
```

### 3. Setup `src/main.rs`

Put a css file and a button to `src/main.rs` (and remove old code)

```rust:src/main.rs
use dioxus::prelude::*;

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Stylesheet {href: asset!("/assets/main.css")}
        button { class: "btn", "Hello daisyUI" }
    }
}
```

### 4. Run the dev server

Run the Tailwind CLI
```sh:Terminal
npx @tailwindcss/cli -i ./tailwind.css -o ./assets/main.css --watch
```

In another terminal, run the Dioxus server

```sh:Terminal
dx serve
``` 



