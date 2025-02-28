---
title: Install daisyUI for Rails
desc: How to install Tailwind CSS and daisyUI in a Rails project
---

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
./bin/bundle add tailwindcss-rails --version "4.0.0"
./bin/rails tailwindcss:install
```

### 3. Add daisyUI

#### Option A. Install daisyUI as a Node dependency

Initialize a package.json (if you don't have one) and install daisyUI

```sh:Terminal
npm init -y
npm install daisyui@latest
```

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/assets/tailwind/application.css
@import "tailwindcss";
@plugin "daisyui";
```

#### Option B. Use daisyUI from CDN

Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
  
```postcss:app/assets/tailwind/application.css
@import "tailwindcss";
@import "https://cdn.jsdelivr.net/npm/daisyui@latest/daisyui.css";
```

- You can [choose the parts you need](/docs/cdn/)
- You can [import small CSS files separately](https://cdn.jsdelivr.net/npm/daisyui@latest/chunks.css)
- You can [import all themes](https://cdn.jsdelivr.net/npm/daisyui@latest/themes.css) or [specific themes](https://cdn.jsdelivr.net/npm/daisyui@latest/theme/light.css)

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
