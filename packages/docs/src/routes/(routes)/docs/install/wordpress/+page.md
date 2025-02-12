---
title: Install daisyUI for WordPress
desc: How to install Tailwind CSS and daisyUI in a WordPress project
---

### 1. Create a new WordPress project

Install WordPress according to the [official WordPress guide](https://wordpress.org/download/).

### 2. Install a WordPress plugin

In this guide, we will use the [WindPress](https://wind.press) plugin to install Tailwind CSS and daisyUI in a WordPress project.

Navigate to the `Plugins → Add New Plugin` sub-menu.

<img class="mx-auto rounded-box" src="https://wind.press/_ipx/s_2880x1732/img/content/docs/installation/screenshot-1.png" alt="WordPress Plugins Add New screen">

Search for the WordPress plugin by typing `WindPress` in the search bar.

<img class="mx-auto rounded-box" src="https://wind.press/_ipx/s_2880x1732/img/content/docs/installation/screenshot-2.png" alt="WordPress Plugins search bar">

Click the `Install Now` button to install the WordPress plugin.

<img class="mx-auto rounded-box" src="https://wind.press/_ipx/s_2880x1732/img/content/docs/installation/screenshot-3.png" alt="WordPress Plugins result screen">

Once the plugin is installed, click the `Activate` button to activate the WindPress plugin.

<img class="mx-auto rounded-box" src="https://wind.press/_ipx/s_2880x1732/img/content/docs/installation/screenshot-4.png" alt="Activate the WordPress plugin">

### 3. Install daisyUI

Navigate to the WindPress dashboard by clicking the `WindPress` menu item in the WordPress admin sidebar.
Then, click the `main.css` file on the explorer sidebar to open the file editor.

<img class="mx-auto rounded-box" src="https://wind.press/_ipx/s_2880x1732/img/content/docs/configuration/file-main-css/screenshot-1.png" alt="WindPress dashboard">

Put daisyUI in `main.css` file

```postcss:main.css
@plugin "daisyui@beta";
```

Now you can use daisyUI class names!