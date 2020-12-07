# DaisyUI 🌼

Unstyled *(or styled)* UI component library for [Tailwind CSS](https://tailwindcss.com/) users

### Why?
[Utility first](https://tailwindcss.com/docs/utility-first) is fast and scalable but developing a scalable design system with utility first is messy, time consuming hard to manage. So why not put all basic skeleton of your UI components in one place and use it on all your design systems then use the power of utility first everywhere?  
### How?
**DaisyUI** provides basic and unstyled component classes that you can use for almost all design systems. It also has an optional style that you can use if you don't want to fully design your components.  
It's all based on tailwind so you can customize everything with utility classes and [purge](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options) all unused class names.
### What's included?
When you add **DaisyUI** as a Tailwind CSS plugin, it gives you ready-to-use UI component classes to use. Like `btn`, `card`, `alert`, etc...  
If you use the unstyled version, it has no color or visual style so you can fully style the components with Tailwind utility classes. If you use styled version, you get something pre-designed (like Bootstrap) but you can still customize it with Tailwind classes.  
### Concepts
- **Typography, spacing, layout** You will handle these with tailwind classes.
- **Colors and theming** You should ditch Tailwind's default and multi-purpose color set and set your custom set of colors for a DaisyUI project. ([Color guide - will be added soon](#))
- **Components** (like button, card, etc...) DaisyUI will handle this

# Install  

```
npm i daisyui
```

### Add plugin and preset to `tailwind.config.js`
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

# Or use a CDN
🌼 styled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/styled.min.css" />
```
unstyled version
```
<link rel="stylesheet" href="https://unpkg.com/daisyui@latest/dist/base.min.css" />
```


# Components  
- [x] Accordion
- [x] Alert
- [ ] App bar
- [ ] Avatar
- [ ] Avatar group
- [x] Badge
- [ ] Banner
- [ ] Breadcrumb
- [x] Button
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
- [ ] Pagination
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
