---
title: Install daisyUI for Django
desc: How to install Tailwind CSS and daisyUI in a Django project, without Node.js
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new Django project

Install Python according to the [official Python docs](https://www.python.org/)

Install Django

```sh:Terminal
python -m pip install Django
```

Create a new Django project called `myapp` and navigate into the project directory

```sh:Terminal
django-admin startproject myapp
cd myapp
```

### 2. Create a homepage in Django

Create a template file

```html:myapp/templates/index.html
<!DOCTYPE html>
<html>
<head>
    <title>My Django App</title>
    {% load static %}
    <link href="{% static 'css/output.css' %}" rel="stylesheet" type="text/css" />
</head>
<body>
    <button class="btn btn-primary">Hello daisyUI</button>
</body>
</html>
```

Create a myapp/views.py file

```py:myapp/views.py
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
```

Add the view to the myapp/urls.py file

```diff:myapp/urls.py
  from django.contrib import admin
  from django.urls import path
+ from . import views

  urlpatterns = [
      path("admin/", admin.site.urls),
+     path("", views.home, name="home"),
  ]
```

Add the app name to myapp/settings.py

```diff:myapp/settings.py
  INSTALLED_APPS = [
      "django.contrib.admin",
      "django.contrib.auth",
      "django.contrib.contenttypes",
      "django.contrib.sessions",
      "django.contrib.messages",
      "django.contrib.staticfiles",
+     "myapp",
  ]
```

### 3. Add Tailwind CSS and daisyUI

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
cd myapp/static/css && curl -sL daisyui.com/fast | bash
```

**Windows**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast.ps1))

```sh:PowerShell
cd myapp/static/css && powershell -c "irm daisyui.com/fast.ps1 | iex"
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

#### Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable for your OS.

For example:

```sh:Terminal
# Run the corresponding command for your OS

# Linux
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64-musl
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64-musl

# MacOS
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64

# Windows
curl -sLo myapp/static/css/tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make the file executable (For Linux and MacOS):

```sh:Terminal
chmod +x myapp/static/css/tailwindcss
```

#### Get daisyUI bundle JS file

Run this code to download latest version of daisyUI as a single js file and put it next to Tailwind's executable file.

```sh:Terminal
curl -sLO myapp/static/css/daisyui.mjs https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.mjs
curl -sLO myapp/static/css/daisyui-theme.mjs https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.mjs
```

#### Add Tailwind CSS and daisyUI

Add Tailwind CSS and daisyUI to your CSS file.  
Address your HTML and other markup files in the `source` function.

```postcss:myapp/static/css/input.css
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

### 4. Run the Tailwind CSS executable to generate output.css

Using `--watch` will automatically update the output.css file when you change the input.css file.  
For CI/CD, run the command without `--watch` to generate the output.css file once.

```sh:Terminal
myapp/static/css/tailwindcss -i myapp/static/css/input.css -o myapp/static/css/output.css --watch
# For Windows
myapp\static\css\tailwindcss.exe -i myapp/static/css/input.css -o myapp/static/css/output.css --watch
```

### 7. Run the Django server

Run the Django server on another terminal tab

```sh:Terminal
python manage.py runserver
```

Now you can use daisyUI class names!
