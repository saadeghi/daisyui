### Hover gallery
A hover gallery is a container for images. The first image is visible by default. When the pointer moves horizontally on it, the other images appear. Use a hover gallery for product cards, e-commerce sites, portfolios, or image galleries. A hover gallery can contain a maximum of 10 images.

[Hover gallery documentation](https://daisyui.com/components/hover-gallery/)

#### Class names
- component: `hover-gallery`

#### Syntax
```html
<figure class="hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>
```

#### Rules
- The hover gallery can be a `<div>` or a `<figure>` element.
- The hover gallery can contain a maximum of 10 images.
- Set a maximum width for the hover gallery. If you do not set it, the hover gallery fills the container width.
- All images must have the same dimensions. This gives correct alignment.
