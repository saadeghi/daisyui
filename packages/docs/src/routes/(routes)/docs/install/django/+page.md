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

### 3. Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable for your OS. And put it in `myapp/static/css/` folder.

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
curl -sLo myapp\static\css\tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make the file executable (For Linux and MacOS):

```sh:Terminal
chmod +x myapp/static/css/tailwindcss
```

### 4. Get daisyUI bundled JS file

Run this code to download the latest version of daisyUI as a single js file. It puts the file at `myapp/static/css/` next to the Tailwind CSS executable.

```sh:Terminal
curl -sLo myapp/static/css/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
curl -sLo myapp/static/css/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js
```

### 5. Create an input.css file

Create a file `myapp/static/css/input.css` and add the following code:

```css:myapp/static/css/input.css
@import "tailwindcss" source(none);
@plugin "./daisyui.js";
@source "../../templates";
```

### 6. Run the Tailwind CSS executable to generate output.css

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
