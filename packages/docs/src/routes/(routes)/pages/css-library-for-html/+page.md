---
title: CSS Library for HTML
desc: Why you need a CSS component library that's framework-agnostic, portable, and gives you both the speed of Bootstrap and the customizability of Tailwind CSS
layout: contentLanding
keywords: css library for html, component library, framework agnostic, tailwind css components, html css library, css only library
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Building websites is more complicated than it should be. You write HTML, style it with CSS, and somehow it never looks quite right. The spacing is off, colors clash, and making everything responsive takes forever. This is why CSS component libraries exist, but picking the right one matters more than you think.

## Why you need a CSS component library

Writing CSS from scratch for every project is time-consuming and error-prone. Here's what happens without a component library:

### Reinventing the wheel

Every project starts the same way:

```css
/* Writing button styles... again */
.button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.button:hover {
  background: #f0f0f0;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* And that's just a basic button */
```

Then you need to write styles for cards, modals, alerts, forms, navigation, dropdowns, and dozens of other components. Most of this code is identical across projects, yet developers keep rewriting it.

### Inconsistent design

Without a system, your styles drift:

```html
<!-- Page 1 -->
<button style="padding: 10px 20px; background: blue; border-radius: 4px;">
  Click me
</button>

<!-- Page 2 -->
<button style="padding: 8px 16px; background: #0066cc; border-radius: 3px;">
  Submit
</button>

<!-- Page 3 -->
<button style="padding: 12px 24px; background: darkblue; border-radius: 5px;">
  Send
</button>
```

Each button looks different. Colors don't match, spacing varies, and the overall design feels disconnected. A component library enforces consistency automatically.

### Accessibility problems

Building accessible components takes expertise:

```html
<!-- Looks simple, but it's not accessible -->
<div class="modal" style="display: none;">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>Modal content...</p>
  </div>
</div>
```

Where's the keyboard navigation? What about screen readers? How do users close it? Focus management? Proper ARIA attributes? Getting these details right requires deep knowledge that most developers don't have.

### Responsive design headaches

Making things work on different screen sizes is tedious:

```css
/* Desktop styles */
.card {
  width: 400px;
  padding: 24px;
  display: flex;
}

/* Tablet */
@media (max-width: 768px) {
  .card {
    width: 100%;
    padding: 16px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .card {
    padding: 12px;
    display: block;
  }
}
```

Writing this for every component gets old fast. Component libraries handle responsive design for you.

### Time wasted on styling

Most web projects spend 40-60% of development time on styling. That's time not spent on features, performance, or user experience. A good component library cuts styling time dramatically, letting you focus on what makes your project unique.

## Why it must be CSS-only and framework-agnostic

Many component libraries tie you to a specific JavaScript framework. This creates serious problems:

### Framework lock-in

React-only libraries force you to use React:

```jsx
// Material-UI (React only)
import { Button, Card, TextField } from '@mui/material';

function MyComponent() {
  return (
    <Card>
      <TextField label="Email" />
      <Button variant="contained">Submit</Button>
    </Card>
  );
}
```

Want to use Vue next year? Svelte? Plain HTML? Too bad. Your entire UI is locked to React. If React falls out of favor or your team wants to switch frameworks, you're rewriting everything from scratch.

### Dependency hell

Framework-specific libraries come with baggage:

```json
{
  "dependencies": {
    "@mui/material": "^5.10.9",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/base": "^5.0.0-beta.8",
    "@mui/system": "^5.10.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

That's 7+ packages just for basic components. Each one can break, needs updates, and adds bundle size. Security vulnerabilities in any dependency compromise your entire app.

### Poor portability

Framework-tied components don't transfer between projects:

```jsx
// React component - useless in Vue projects
<Button variant="primary" size="large" onClick={handleClick}>
  Submit
</Button>

// Have to rewrite for Vue
<v-btn color="primary" size="large" @click="handleClick">
  Submit
</v-btn>
```

Your knowledge and markup don't transfer. Every framework switch means learning a new component API and rewriting your UI.

### CSS-only libraries work everywhere

Pure CSS libraries have none of these problems:

```html
<!-- Works in React -->
<button className="btn btn-primary">Submit</button>

<!-- Works in Vue -->
<button class="btn btn-primary">Submit</button>

<!-- Works in Svelte -->
<button class="btn btn-primary">Submit</button>

<!-- Works in plain HTML -->
<button class="btn btn-primary">Submit</button>
```

Same markup, same result, everywhere. Your skills and code are portable. When frameworks change, your UI stays the same.

## Why Tailwind CSS beats Bootstrap

Bootstrap was the standard for years, but it has fundamental limitations that Tailwind CSS solves:

### Bootstrap locks you into a design

Bootstrap sites look like Bootstrap sites:

```html
<!-- Bootstrap -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Card content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

This looks fine, but it looks like every other Bootstrap site. Customizing the design means fighting against Bootstrap's opinions. Want different spacing? Override Bootstrap. Different colors? Override Bootstrap. Different shadows? Override Bootstrap. You end up writing more CSS to undo Bootstrap than if you'd started from scratch.

### Limited customization

Bootstrap customization happens at build time with variables:

```css
// You can change colors...
$primary: #007bff;
$secondary: #6c757d;

// But you can't easily change spacing, borders, etc.
// without writing custom CSS to override Bootstrap
```

Want a button with 6px padding instead of Bootstrap's default? Write custom CSS. Want a specific shadow? Custom CSS. Want a unique border radius? More custom CSS. At some point, you're not using Bootstrap anymore, you're fighting it.

### Tailwind CSS gives you complete control

Tailwind CSS is a design system, not a pre-made design:

```html
<!-- Full control over every aspect -->
<div class="bg-white rounded-lg shadow-xl p-6">
  <h2 class="text-2xl font-bold text-gray-900">Card title</h2>
  <p class="text-gray-600 mt-2">Card content.</p>
  <button class="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700">
    Go somewhere
  </button>
</div>
```

Every spacing value, color, size, and effect is yours to choose. Your design can be unique without fighting a framework.

### Theme customization is effortless

With Tailwind CSS, your design system lives in your CSS:

```css
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --radius-lg: 12px;
  --spacing-card: 24px;
}
```

Change these values and your entire site updates. No preprocessor variables, no build-time configuration, just CSS custom properties that work everywhere.

## The Tailwind CSS problem

Tailwind CSS solves Bootstrap's customization issues, but it creates a new problem: development speed.

### Utility class overload

Real Tailwind CSS components become unreadable:

```html
<!-- A simple card component -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-3 hover:shadow-xl transition-shadow duration-300">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="Album">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card title</a>
      <p class="mt-2 text-slate-500">Card description goes here...</p>
    </div>
  </div>
</div>
```

This is painful to write, hard to read, and impossible to maintain. Finding the one class you need to change is like searching for a needle in a haystack.

### Repetition everywhere

Need three buttons? Copy all those classes three times:

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 1
</button>

<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 2
</button>

<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 3
</button>
```

Need to change the button style? Find and update every single instance. This is the same maintenance nightmare that CSS was invented to solve.

### Steep learning curve

You need to memorize hundreds of utility classes:

- Layout: `flex`, `grid`, `block`, `inline-block`, `hidden`
- Spacing: `p-4`, `m-2`, `space-y-4`, `gap-6`
- Typography: `text-lg`, `font-semibold`, `leading-6`, `tracking-wide`
- Colors: `bg-blue-600`, `text-white`, `border-gray-300`
- Effects: `shadow-lg`, `rounded-xl`, `transition-all`
- Responsive: `md:flex`, `lg:grid-cols-3`, `xl:w-1/2`
- States: `hover:bg-blue-700`, `focus:ring-2`, `disabled:opacity-50`

New developers get overwhelmed. Even experienced developers spend time looking up class names.

### Slow development

Building even simple components takes time:

```html
<!-- 10 minutes to write and debug this modal -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <h3 class="text-xl font-bold text-gray-900 mb-4">Modal Title</h3>
    <p class="text-gray-600 mb-6">Modal content goes here.</p>
    <div class="flex justify-end space-x-3">
      <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
        Cancel
      </button>
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

That's a lot of classes for a basic modal. Multiply this by dozens of components and development slows to a crawl.

## daisyUI: Best of both worlds

daisyUI solves all these problems. It gives you Bootstrap's development speed with Tailwind CSS's customizability.

### Fast development like Bootstrap

Write semantic class names, not utility soup:

```html
<!-- Instead of 20+ utility classes -->
<button class="btn btn-primary">Submit</button>

<!-- Instead of this mess -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="photo.jpg" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Card description goes here.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Your HTML is readable. Development is fast. No memorizing hundreds of class names.

### Full customizability like Tailwind CSS

daisyUI uses CSS custom properties for theming:

```css
[data-theme="mytheme"] {
  --primary: #3b82f6;
  --primary-content: #ffffff;
  --secondary: #8b5cf6;
  --accent: #f59e0b;
  --neutral: #374151;
  --base-100: #ffffff;
}
```

Change these values and every component updates automatically. You have complete control over colors, spacing, borders, shadows, and everything else.

### Tailwind CSS utilities when you need them

Combine daisyUI components with Tailwind CSS utilities:

```html
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure class="lg:w-1/3">
    <img src="photo.jpg" alt="Album" class="w-full h-full object-cover" />
  </figure>
  <div class="card-body lg:w-2/3">
    <h2 class="card-title text-2xl lg:text-3xl">Card title</h2>
    <p class="opacity-70">Card description.</p>
    <div class="card-actions justify-end mt-4">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Semantic components for structure, utilities for fine-tuning. You get both productivity and control.

### CSS-only, framework-agnostic

daisyUI is pure CSS. It works everywhere:

```html
<!-- React -->
<div className="modal modal-open">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Modal Title</h3>
    <p className="py-4">Modal content.</p>
    <div className="modal-action">
      <button className="btn">Close</button>
    </div>
  </div>
</div>

<!-- Vue -->
<div class="modal modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>

<!-- Plain HTML -->
<div class="modal modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>
```

Same markup, same result. Your knowledge transfers between frameworks and projects.

### Professional design system

daisyUI includes 35+ built-in themes:

```html
<!-- Light theme -->
<html data-theme="light">
  <button class="btn btn-primary">Button</button>
</html>

<!-- Dark theme -->
<html data-theme="dark">
  <button class="btn btn-primary">Button</button>
</html>

<!-- Any other theme -->
<html data-theme="cyberpunk">
  <button class="btn btn-primary">Button</button>
</html>
```

Switch themes with one attribute change. Each theme is professionally designed with cohesive colors, proper contrast, and consistent spacing.

### Easy maintenance

Update styles in one place:

```css
/* Customize all buttons globally */
.btn {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Or specific variants */
.btn-primary {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

Every button in your app updates automatically. No find-and-replace across hundreds of files.

## Compare the approaches

❌ Without daisyUI, you'd write all this for a button:

```html
<button
  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold
   text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
   focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Click Me
</button>
```

✅ With daisyUI, you just write this:

```html
<button class="btn">Click Me</button>
```

- daisyUI follows a design system approach, making it easy to create consistent UIs
- daisyUI button is less code, more readable and easier to maintain
- daisyUI button is easier to customize among multiple files
- daisyUI button has built-in states like hover, focus, and disabled that work out of the box, which are required for accessibility
- daisyUI has light and dark themes built-in plus unlimited custom themes
- daisyUI buttons are consistent across your app without extra effort

## Get started

Install daisyUI in your Tailwind CSS project:

```bash
npm i -D daisyui
```

Add it to your CSS:

```css
@import "tailwindcss";
@plugin "daisyui";
```

Start using components:

```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
```

For more details, check the [daisyUI installation guide](/docs/install/).

## Why daisyUI is the best CSS Library for HTML

- **Framework-agnostic**: Pure CSS works everywhere
- **Development speed**: Semantic components like Bootstrap
- **Customizability**: Full control like Tailwind CSS
- **No dependencies**: Zero JavaScript, no framework lock-in
- **Professional themes**: 35+ ready-to-use themes
- **Easy maintenance**: Update styles globally
- **Small bundle size**: Highly optimized CSS
- **Great documentation**: Clear examples and guides

You don't have to choose between speed and flexibility anymore. daisyUI gives you both.

[Start building with daisyUI](/docs/install/) and experience what HTML and CSS should be: fast to write, easy to maintain, and beautiful by default.
