---
title: Nexus - Client and Admin Dashboard
desc: A flexible admin dashboard template built for easy customization and smooth integration
published: true
date: 2025-01-30
author: Denish Navadiya
thumbnail: https://img.daisyui.com/images/blog/nexus-dashboard-template-thumbnail.webp
tags:
  - Templates
---

Building admin dashboards isn’t easy. Developers need designs that are responsive and work across frameworks, while buyers look for simplicity, flexibility, and customization. Finding the right balance can be tricky.

## Introducing Nexus

We redesigned the Nexus Admin Dashboard to make things easier. Built with DaisyUI, it helps developers create responsive, great-looking dashboards while giving buyers a flexible and customizable solution.

Purchase the [Nexus Dashboard](https://www.daisyui.com/store) from the daisyUI store and follow these steps to set it up.

## Installation

Nexus supports all Node.js versions above 18 and has been thoroughly tested. It also works seamlessly with all package managers (npm, yarn, bun), so you can use your preferred one.

Install project dependencies:

```bash
npm install
```

Start the development server (This will run your project in development mode):

```bash
npm run dev
``` 

Build for production:

```bash
npm run build
``` 

Preview the production build:

```bash
npm run preview
``` 

## Customization

### Logo

To change the logo, replace the following images with your own.

- `/public/images/logo/logo-light.png`  
- `/public/images/logo/logo-dark.png`

### Tailwind CSS Specific

`/styles/tailwind.css` includes base variants and utilities (like dark mode, container, etc.). You can add or modify this file for your specific needs.

```css
@import "tailwindcss";

@variant dark {
    /* variant: dark */
}

@utility container {
    /* utility: container */    
}

/* add: your tailwindcss specific things  */
```
### Theme

`/styles/daisyui.css` contains the DaisyUI plugin and themes. You can add or modify themes and their options, including layout colors (background, sidebar, and topbar).

```css
@plugin "daisyui" {
    /* daisyUI options */
}

@plugin "daisyui/theme" {
    name: "light";

    /* update: primary */
    --color-primary: #167bff;
    --color-primary-content: #ffffff;
    /* ... */

    /* update: layout */
    --layout-background: #fafbfc;
    --layout-sidebar-background: #ffffff;
    --layout-topbar-background: #ffffff;
}

/* add: new theme here */
```

### Typography

`/styles/typography.css` contains all typography-related styles. We use Google Fonts (@import url('...')) for the font family, which you can change to your preference.

```css
/* update: font family url */
@import url("https://..."); 

@theme {
    /* update: font family variable */
    --font-body: "DM Sans", sans-serif;
    
     /* update: font size */
    --text-sm: 14px;       
    --text-base: 16px;
    
    /* add: more options related to font  */
}
```

### Layout    

`/styles/custom/layout.css` contains the layout CSS, where you can modify all aspects related to the admin layout, including the sidebar, topbar, rightbar, and content area.  

```css
:root {
    /* update: sidebar width,as you want */
    --layout-sidebar-width: 256px;
}

/* update: layout related styles ... */
```

### Custom CSS

Inside `/styles/custom/**` folder:

- `animation.css` includes all animation keyframes and utilities.
- `components.css` contains slight overrides to DaisyUI components. you can remove this file if you don't need any overrides.
- `plugins.css` handles plugin overrides, ensuring compatibility with other plugins' themes, matching Nexus and DaisyUI styles.
- `iconify.js` is the plugin for Iconify, allowing you to add additional [icon sets](https://icon-sets.iconify.design/).


For more detailed information on specific topics such as dependencies, framework integration, roadmap, changelog, and more, visit our [Nexus documentation](https://nexus.daisyui.com/docs/)  

## Built by a Developer, for Developers


Nexus, built with DaisyUI, makes dashboard creation simple and efficient. It’s easy to customize, integrates smoothly, and saves you valuable time. Try it today!

We value your feedback! Share your thoughts by filling out [feedback form](https://forms.gle/byxiWEUw6SM84AXA9)  

## Need help?

Have questions or need help? Join our [Discord community](https://daisyui.com/discord/) for support and troubleshooting.
