---
title: daisyUI 5 upgrade guide
desc: This guide helps you how to update your project to Tailwind CSS 4 and daisyUI 5. 
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<div class="w-full rounded-box overflow-hidden" style="aspect-ratio: 1920/1080;"><iframe class="w-full h-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/bYznFmzL820?mute=0&amp;autoplay=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;playlist=bYznFmzL820" title="Nexus Dashboard 2.0"></iframe></div>


> :INFO:
>
> Before upgrading your project, read about:  
> 1 - [Tailwind CSS 4 breaking changes](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3)  
> 2 - [daisyUI 5 release notes](/docs/v5/)  
> 3 - [daisyUI 5 breaking changes](/docs/upgrade#changes-from-v4)


### 1. Update Tailwind CSS

Tailwind CSS provides a CLI tool for automatic upgrade. It automatically applies the new Tailwind CSS changes to your project.  

1. First, remove daisyUI and plugins from your `tailwind.config.js` file, so Tailwind CSS upgrade tool can safely replace it with the CSS file.  

```diff:tailwind.config.js
module.exports = {
   content: ['./your-files/**/*.{html,js}'],
   // other stuff...
-  daisyui: {
-    themes: ['light', 'dark', 'cupcake'],
-  },
- plugins: [require("daisyui")],
}
```

2. Run the [official Tailwind CSS upgrade tool](https://tailwindcss.com/docs/upgrade-guide):

```bash:Terminal
npx @tailwindcss/upgrade
```

### 2. Update daisyUI

1. Install daisyUI 5

```bash:Terminal
npm i -D daisyui@latest
```
3. Add daisyUI to your CSS file
  
```postcss:app.css
@import "tailwindcss";
@plugin "daisyui";
```

OR if you want [enable a built-in theme](/docs/themes/#enable-a-built-in-theme) in [config](/docs/config/):  

```postcss:app.css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```

Now everything should work as expected. If you're facing any challenges, you can ask for help on [daisyUI Discord server](/discord/) so you can get help from the community.

---

## Changes from v4

These are all the HTML changes from daisyUI 4 to 5. There are ~15 changes in total but you won't need to do all of them, only the ones you're using.  
- To read about new features in daisyUI 5 go to [release notes page](/docs/v5/)
- For more detailed changelog go to [changelogs page](/docs/changelog/)

### Artboard

- Removed all `artboard` and `phone-*` classes. These classes were simply setting the width and height of the div. Use Tailwind CSS `w-*` and `h-*` classes instead.

| Before | After |
| --- | --- |
| `artboard phone-1` | `w-[320px] h-[568px]` |
| `artboard phone-2` | `w-[375px] h-[667px]` |
| `artboard phone-3` | `w-[414px] h-[736px]` |
| `artboard phone-4` | `w-[375px] h-[812px]` |
| `artboard phone-5` | `w-[414px] h-[896px]` |
| `artboard phone-6` | `w-[320px] h-[1024px]` |
| `artboard artboard-horizontal phone-1` | `w-[568px] h-[320px]` |
| `artboard artboard-horizontal phone-2` | `w-[667px] h-[375px]` |
| `artboard artboard-horizontal phone-3` | `w-[736px] h-[414px]` |
| `artboard artboard-horizontal phone-4` | `w-[812px] h-[375px]` |
| `artboard artboard-horizontal phone-5` | `w-[896px] h-[414px]` |
| `artboard artboard-horizontal phone-6` | `w-[1024px] h-[320px]` |

Example: 
```diff:page.html
- <div class="artboard phone-1">
+ <div class="w-[320px] h-[568px]">
```

### Avatar

- Renamed `online` class to `avatar-online`, `offline` to `avatar-offline`, and `placeholder` to `avatar-placeholder`.

```diff:page.html
- <div class="avatar online">
+ <div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
```diff:page.html
- <div class="avatar offline">
+ <div class="avatar avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```

### Bottom Navigation

- Removed `bottom-nav` component. Use [`dock`](/components/dock/) component instead.
- Removed `btm-nav-xs`, `btm-nav-sm`, `btm-nav-md`, `btm-nav-lg`. Use `dock-xs`, `dock-sm`, `dock-md`, `dock-lg` instead.
- Removed `btm-nav-active`. Use `dock-active` instead.
- Removed `disabled` class of `bottom-nav`. Use `aria-disabled="true"` attribute or `disabled` attribute if it's a button. This is for better accessibility.

```diff:page.html
- <div class="btm-nav btm-nav-sm">
+ <div class="dock dock-sm">
  <button>🏠</button>
-   <button class="active">🍿</button>
+   <button class="dock-active">🍿</button>
  <button>⚙️</button>
</div>
```

### Card

- `card-bordered` is renamed to `card-border`.

```diff:page.html
- <div class="card card-bordered">
+ <div class="card card-border">
```

- Removed `card-compact`. Use `card-sm` instead.

```diff:page.html
- <div class="card card-compact">
+ <div class="card card-sm">
```

### FileInput

- File input now has border by default. Use `file-input-ghost` if you want to remove the border.
- Removed `file-input-bordered`. File input has a border by default now. Use `file-input-ghost` if you want to remove the border.

```diff:page.html
- <input type="file" class="file-input file-input-bordered">
+ <input type="file" class="file-input">
```

### Footer

- Footer is now vertical by default. Use `footer-horizontal` to make it horizontal at the screen size you want.

```diff:page.html
- <footer class="footer">
+ <footer class="footer md:footer-horizontal">
```

### Input

- Input now has a default width of 20rem, no need for adding `w-full max-w-xs`.
- Removed `input-border`.Input has a border by default now. Use `input-ghost` if you want to remove the border.
- Removed `input-bordered` class (not needed anymore).

<div class="before-after">

```html:before
<!-- Input with border -->
<input class="input input-bordered"/>

<!-- Input without border -->
<input class="input"/>

<!-- Input with 20rem width -->
<input class="input w-full max-w-xs"/>
```

```html:after
<!-- Input with border -->
<input class="input"/>

<!-- Input without border -->
<input class="input input-ghost"/>

<!-- Input with consistent width -->
<input class="input"/>
```

</div>

### Label

- Label has been refactored to be more compatible with form elements. See [label docs](/components/label/) for more information.

### Mask

- Removed `mask-parallelogram`, `mask-parallelogram-2`, `mask-parallelogram-3`, and `mask-parallelogram-4`. These mask styles are no longer included in the library. If you need them, [manually use the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/mask.css#L23)

### Menu

- vertical menu is not `w-full` anymore. Use `w-full` if you want it to be full width.
- Renamed `disabled` class of menu item to `menu-disabled`.
- Renamed `active` class of menu item to `menu-active`.
- Renamed `focus` class of menu item to `menu-focus`.

```diff:page.html
- <ul class="menu">
+ <ul class="menu w-full">

-   <li class="disabled"><a>disabled item</a></li>
+   <li class="menu-disabled"><a>disabled item</a></li>

-   <li class="active"><a>active item</a></li>
+   <li class="menu-active"><a>active item</a></li>

-   <li class="focus"><a>focus item</a></li>
+   <li class="menu-focus"><a>focus item</a></li>
</ul>
```

### Mockup

- Rename `camera` class in mockup-phone to `mockup-phone-camera`.
- Rename `display` class in mockup-phone to `mockup-phone-display`.
- `mockup-phone-display`

```diff:page.html
<div class="mockup-phone">
-  <div class="camera"></div>
+  <div class="mockup-phone-camera"></div>

-    <div class="display">
+    <div class="mockup-phone-display">

-    <div class="artboard artboard-demo phone-1">Hi.</div>
+    <div class="w-[320px] h-[568px]">Hi.</div>
  </div>
</div>
```

### Select

- Select now has a default width of 20rem, no need for adding `w-full max-w-xs`. `max-w-none` class.

- Removed `select-border`. Select has a border by default now. Use `select-ghost` if you want to remove the border.

<div class="before-after">

```html:before
<!-- Select with border -->
<select class="select select-bordered">

<!-- Select without border -->
<select class="select">

<!-- Select with consistent width -->
<select class="select w-full max-w-xs">
```

```html:after
<!-- Select with border -->
<select class="select">

<!-- Select without border -->
<select class="select select-ghost">

<!-- Select with consistent width -->
<select class="select">
```

</div>

### Stack

- Instead of setting the width and height of the stack items, use width and height for the stack itself.

```diff:page.html
- <div class="stack">
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
+ <div class="stack w-36 h-32">
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
</div>
```


### Stat

- `stats` background color is now transparent. Use `bg-base-100` if you need a background color.

### Tab

- Renamed `tabs-bordered` to `tabs-border`.

```diff:page.html
- <div class="tabs tabs-bordered">
+ <div class="tabs tabs-border">
```

- Renamed `tabs-lifted` to `tabs-lift`.

```diff:page.html
- <div class="tabs tabs-lifted">
+ <div class="tabs tabs-lift">
```

- Renamed `tabs-boxed` to `tabs-box`.

```diff:page.html
- <div class="tabs tabs-boxed">
+ <div class="tabs tabs-box">
```

### Table

- Removed `hover` class. Use `hover:bg-base-300` (or any other color) instead.

```diff:page.html
- <tr class="hover">
+ <tr class="hover:bg-base-300">
```

### Textarea

- Removed `textarea-border`. Textarea has a border by default now. Use `textarea-ghost` if you want to remove the border.

### Other removals

- Remove form-control, label-text, label-text-alt

You can still use the same HTML still, but class names don't exist anymore and won't apply color, font-size, flex, etc.  
I suggest using the newly added class names for `fieldset` and `legend` elements for better accessibility.

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  Login
  <div class="label">
    <span class="label-text">Name</span>
  </div>
  <input class="input" placeholder="Name" />
</label>
```

```html:after
<fieldset class="fieldset">
  <legend>Login</legend>
  <label class="label" for="name">Name</label>
  <input id="name" class="input" placeholder="Name" />
</fieldset>
```

</div>

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Bottom Left label</span>
    <span class="label-text-alt">Bottom Right label</span>
  </div>
</label>
```

```html:after
<fieldset class="fieldset max-w-xs">
  <label class="label flex justify-between" for="name">
    <span>What is your name?</span>
    <span>Top Right label</span>
  </label>
  <input id="name" class="input" placeholder="Name" />
  <label class="label flex justify-between" for="name">
    <span>Bottom Left label</span>
    <span>Bottom Right label</span>
  </label>
</fieldset>
```

</div>

- Remove btn-group and input-group

btn-group, input-group were deprecated a year ago and now finally removed.  
If you've been using btn-group or input-group, you can use `join` instead

<div class="before-after">

```html:before
<div class="btn-group">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>
```

```html:after
<div class="join">
  <button class="btn join-item">Button 1</button>
  <button class="btn join-item">Button 2</button>
</div>
```

</div>
