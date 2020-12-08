# DaisyUI 🌼

[![logo](https://user-images.githubusercontent.com/7342023/101421491-a0313380-3909-11eb-8dd6-6037753af051.png)](#)


Unstyled *(and styled)* UI component library for [Tailwind CSS](https://tailwindcss.com/) users
  
<details>
<summary>
  Why do I need it?
</summary>

> [↗︎ Utility first](https://tailwindcss.com/docs/utility-first) is fast and scalable but developing a scalable design system with utility first is messy, time consuming hard to manage. So why not put all basic skeleton of your UI components in one place and use it on all your design systems then use the power of utility first everywhere?  
  
</details>
  
<details>
<summary>
  How does it work?
</summary>

> **DaisyUI** provides basic and unstyled component classes that you can use for almost all design systems. It also has an optional style that you can use if you don't want to fully design your components.  
> It's all based on tailwind so you can customize everything with utility classes and [↗︎ purge](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) all unused class names.  
  
</details>
  
<details>
<summary>
  What's included?
</summary>
 
> When you add **DaisyUI** as a Tailwind CSS plugin, it gives you ready-to-use UI component classes to use. Like `btn`, `card`, `alert`, etc...  
> If you use the unstyled version, it has no color or visual style so you can fully style the components with Tailwind utility classes. If you use styled version, you get something pre-designed (like Bootstrap) but you can still customize it with Tailwind classes.  
  
</details>
  
<details>
<summary>
  Concepts
</summary>

> - **Typography, spacing, layout** You will handle these with tailwind classes. We suggest using the official [↗︎ Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin
> - **Colors and theming** You should ditch Tailwind's default and multi-purpose color set and set your custom set of colors for a DaisyUI project. ([↗︎ Theming guide](docs/theming.md))
> - **Components** (like button, card, etc...) DaisyUI will handle this  
  
</details>
  
<details>
<summary>
  What is "preset"
</summary>

```
module.exports = {
  // ...
  presets: [
    require('daisyui/preset')
  ],
}

```
> When you add DaisyUI preset it will replaces default tailwind colors with a set of semantic color set that is themeable and can be configed with CSS variables.  
> `daisyui/preset` also adds a few `borderRadius` that is used in components. They are also configurable with CSS variables.

</details>
  

## 1. Install  

```
npm i daisyui
```

#### then add plugin and preset to `tailwind.config.js`
```
module.exports = {
  plugins: [
    require('daisyui/styled'), // 🌼 for styled UI
    // require('daisyui'), // for base UI only
  ],
  presets: [
    require('daisyui/preset')
  ],
}

```
<details>
<summary>
  Or use a CDN
</summary>
  
- 🌼 styled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/styled.min.css" />
```
- unstyled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/base.min.css" />
```
</details>

### 2. Set up the colors for your design system (optional)
  
If you want to use your custom colors, you need to define the color values in your css. Colors must be themeable so we're using CSS Variables.  
[↗︎ Theming guide](docs/theming.md)

# Components  
- [x] Accordion
- [x] Alert
- [ ] App bar
- [x] Avatar
- [ ] Avatar group
- [x] Badge
- [ ] Banner
- [ ] Breadcrumb
- [x] [Button](docs/button.md)
- [x] Button group
- [x] Card
- [ ] Chat bubble
- [ ] Comment
- [ ] Divider
- [ ] Empty placeholder
- [ ] Form
  - [ ] Dropdown
  - [ ] Select
  - [x] Text input
  - [ ] Text area
  - [ ] Checkbox
  - [ ] Radio
  - [ ] Range slider
  - [ ] Switch
  - [ ] Upload
- [ ] Loading
- [x] Menu
- [ ] Navbar
- [ ] Modal
- [x] Pagination
- [ ] Progress
- [ ] Progress indicator
- [ ] Skeleton placeholder
- [ ] Statistic
- [ ] Steps
- [ ] Tag
- [ ] Tabs
- [ ] Timeline
- [ ] Toast
- [ ] Tooltip

# Todo
- [ ] Add all components
- [ ] Complete documents
- [ ] Add demo for components
