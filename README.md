# DaisyUI 🌼

Styled (and unstyled) UI Components for Tailwind CSS users


# Install  

```
npm i daisyui
```

## Add plugin and preset to `tailwind.config.js`
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
