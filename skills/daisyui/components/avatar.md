### avatar
Avatars are used to show a thumbnail

[avatar docs](https://daisyui.com/components/avatar/)

#### Class names
- component: `avatar`, `avatar-group`
- modifier: `avatar-online`, `avatar-offline`, `avatar-placeholder`

#### Syntax
```html
<div class="avatar {MODIFIER}">
  <div>
    <img src="{image-url}" />
  </div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- Use `avatar-group` for containing multiple avatars
- You can set custom sizes using `w-*` and `h-*`
- You can use mask classes such as `mask-squircle`, `mask-hexagon`, `mask-triangle`
