---
title: Install daisyUI for Rails
desc: How to install Tailwind CSS and daisyUI in a Rails project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Rails project

Install Ruby on Rails according to the [official Rails guide](https://guides.rubyonrails.org/getting_started.html).

Create a new Rails project

```sh:Terminal
rails new my-app
cd my-app
```

### 2. Install Tailwind CSS for Rails

Install [Tailwind CSS 4 gem](https://github.com/rails/tailwindcss-rails) for Rails

```sh:Terminal
./bin/bundle add tailwindcss-rails
./bin/rails tailwindcss:install
```

### 3. Add daisyUI

There are 3 ways to add daisyUI to your Rails project

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="my_tabs_3" class="tab" aria-label="Node dependency" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">

This method is recommended if are already using Node.js.  
This works as a Tailwind CSS plugin so only the class names you need will be added to your CSS file.

Initialize a package.json (if you don't have one) and install daisyUI

```sh:Terminal
npm init -y
npm install daisyui@latest
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/assets/tailwind/application.css
@import "tailwindcss" source(none);
@source "../../../public/*.html";
@source "../../../app/helpers/**/*.rb";
@source "../../../app/javascript/**/*.js";
@source "../../../app/views/**/*";

@plugin "daisyui";
```

  </div>

  <input type="radio" name="my_tabs_3" class="tab" aria-label="Bundle file" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">


This method is recommended if you are not using Node.js.  
This works as a Tailwind CSS plugin so only the class names you need will be added to your CSS file.

Run this code to download latest version of daisyUI as a single js file

```sh:Terminal
curl -sLo app/assets/tailwind/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
curl -sLo app/assets/tailwind/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)

```postcss:app/assets/tailwind/application.css
@import "tailwindcss" source(none);
@source "../../../public/*.html";
@source "../../../app/helpers/**/*.rb";
@source "../../../app/javascript/**/*.js";
@source "../../../app/views/**/*";

@plugin "./daisyui.js";

/* Optional for custom themes – Docs: https://daisyui.com/docs/themes/#how-to-add-a-new-custom-theme */
@plugin "./daisyui-theme.js"{
  /* custom theme here */
}
```
  
  </div>

  <input type="radio" name="my_tabs_3" class="tab" aria-label="CDN" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">
  

This method is recommended if you want to quickly add daisyUI without adding any file.

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/assets/tailwind/application.css
@import "tailwindcss" source(none);
@source "../../../public/*.html";
@source "../../../app/helpers/**/*.rb";
@source "../../../app/javascript/**/*.js";
@source "../../../app/views/**/*";

@import "https://cdn.jsdelivr.net/npm/daisyui@5";
```

- You can [choose the parts you need](/docs/cdn/)
- You can [import small CSS files separately](https://cdn.jsdelivr.net/npm/daisyui@5/chunks.css)
- You can [import all themes](https://cdn.jsdelivr.net/npm/daisyui@5/themes.css) or [specific themes](https://cdn.jsdelivr.net/npm/daisyui@5/theme/light.css)


</div>
</div>


### 4. Create a homepage in Rails

Now you can use daisyUI class names! Let's create a simple page and try a button

```rb:app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def home
  end
end
```

```rb:config/routes.rb
Rails.application.routes.draw do
  root to: 'pages#home'
end
```

```erb:app/views/pages/home.html.erb
<button class="btn btn-primary">Hello daisyUI!</button>
```

### 5. Start Rails

```sh:Terminal
./bin/dev
```
