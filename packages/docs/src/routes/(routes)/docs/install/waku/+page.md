---
title: Install daisyUI for Waku
desc: How to install daisyUI in a Waku project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Waku project

Create a new Waku project in called `myapp` and navigate to it:

```sh:Terminal
npm create waku@latest -- --project-name=myapp
cd myapp
```

### 2. Install daisyUI

```sh:Terminal
npm i daisyui
```

Put daisyUI in your CSS file (and remove old styles)

```diff:src/styles.css
  @import "tailwindcss";
+ @plugin "daisyui";
```

Now you can use daisyUI class names!
