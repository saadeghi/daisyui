---
title: Install daisyUI for Elixir Phoenix
desc: How to install Tailwind CSS and daisyUI in a Elixir Phoenix project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> :SUCCESS:
> 
> Elixir Phoenix `1.8.0-rc.0` and later comes with Tailwind CSS 4 and daisyUI 5 out of the box!

### 1. Create a new Phoenix project

Install Elixir according to the [official Elixir documentation](https://elixir-lang.org/install.html)

Create a new Phoenix project in the current directory.  

```sh:Terminal
mix phx.new ./ --no-ecto
```
Here we are using the `--no-ecto` flag to skip the database setup, just for demonstration purposes.


### 2. Run your project

Run your Phoenix project

```sh:Terminal
mix phx.server
```

Now you can use daisyUI class names!
