### Hover 3D
The hover 3D component is a wrapper that adds a 3D effect to its content. When the pointer is on the component, the component tilts and turns in relation to the pointer position.

The `hover-3d` component puts eight hover zones above the content. Each zone detects pointer movement and turns the content by a small angle. The angle changes with the pointer position in the zone. Together, the eight zones make a continuous 3D tilt effect.

Use only noninteractive content in the `hover-3d` wrapper. To make the complete card clickable, use a link for the complete `hover-3d` component. Do not put interactive elements in the wrapper.

[Hover 3D documentation](https://daisyui.com/components/hover-3d/)

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
- The hover 3D component can be a `<div>` or an `<a>` element.
- The hover 3D component must have exactly nine direct children. The first child is the main content. The other eight children are empty `<div>` elements for the hover zones.
- Do not put interactive content in the hover 3D component. Interactive content includes buttons, links, and inputs.
