---
title: Install daisyUI for WordPress
desc: How to install Tailwind CSS and daisyUI in a WordPress project
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Create a new WordPress project

Install WordPress according to the [Official WordPress guide](https://wordpress.org/download/).

### 2. Install the WindPress plugin

In this guide, we will use the [WindPress](https://wind.press) plugin to install Tailwind CSS and daisyUI in a WordPress project.

Navigate to the `Plugins → Add New Plugin` sub-menu.

<img class="mx-auto rounded-box" src="https://img.daisyui.com/images/docs/install/windpress/screenshot-1.webp" alt="WordPress Plugins Add New screen">

Search for the WordPress plugin by typing `WindPress` in the search bar.

<img class="mx-auto rounded-box" src="https://img.daisyui.com/images/docs/install/windpress/screenshot-2.webp" alt="WordPress Plugins search bar">

Click the `Install Now` button to install the WordPress plugin.

<img class="mx-auto rounded-box" src="https://img.daisyui.com/images/docs/install/windpress/screenshot-3.webp" alt="WordPress Plugins result screen">

Once the plugin is installed, click the `Activate` button to activate the WindPress plugin.

<img class="mx-auto rounded-box" src="https://img.daisyui.com/images/docs/install/windpress/screenshot-4.webp" alt="Activate the WordPress plugin">

### 3. Install daisyUI

Navigate to the WindPress dashboard by clicking the `WindPress` menu item in the WordPress admin sidebar.
Then, click the `main.css` file on the explorer sidebar to open the file editor.

<img class="mx-auto rounded-box" src="https://img.daisyui.com/images/docs/install/windpress/screenshot-5.webp" alt="WindPress dashboard">

Add daisyUI at the end of code in the `main.css` file

```postcss:main.css
@plugin "daisyui";
```

Now you can use daisyUI class names!
