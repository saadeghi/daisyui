### Avatar
Use an avatar to show a thumbnail image.

[Avatar documentation](https://daisyui.com/components/avatar/)

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
- `{MODIFIER}` is optional. It can be one of the modifier class names.
- Use `avatar-group` as a container for more than one avatar.
- To set a custom size, use `w-*` and `h-*`.
- To change the avatar shape, use mask classes such as `mask-squircle`, `mask-hexagon`, and `mask-triangle`.
