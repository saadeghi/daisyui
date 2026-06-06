### hover-3d
Hover 3D is a wrapper component that adds a 3D hover effect to its content. When we hover over the component, it tilts and rotates based on the mouse position, creating an interactive 3D effect. 

`hover-3d` works by placing 8 hover zones on top of the content. Each zone detects mouse movement and applies a slight rotation to the content based on the mouse position within that zone. The combined effect of all 8 zones creates a smooth and responsive 3D tilt effect as the user moves their mouse over the component.

Only use non-interactive content inside the `hover-3d` wrapper. If you want to make the entire card clickable, use a link for the whole `hover-3d` component instead of putting interactive elements like buttons or links inside it.

[hover-3d docs](https://daisyui.com/components/hover-3d/)

#### Class names
- component: `hover-3d`

#### Syntax
```html
<div class="hover-3d my-12 mx-2">
  <figure class="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="Tailwind CSS 3D card" />
  </figure>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Rules
- hover-3d can be a `<div>` or a `<a>`
- hover-3d must have exactly 9 direct children where the first child is the main content and the other 8 children are empty `<div>`s for hover zones
- content inside hover-3d should be non-interactive (no buttons, links, inputs, etc)
