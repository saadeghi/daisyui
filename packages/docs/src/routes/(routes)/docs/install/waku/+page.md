---
title: Install duskmoonUI for Waku
desc: How to install duskmoonUI in a Waku project
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

### 2. Install duskmoonUI

```sh:Terminal
npm i duskmoonui
```

Put duskmoonUI in your CSS file (and remove old styles)

```diff:src/styles.css
  @import "tailwindcss";
+ @plugin "duskmoonui";
```

Now you can use duskmoonUI class names!
