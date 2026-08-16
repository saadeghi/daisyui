### Code mockup
Use a code mockup to show code in a box with the style of a code editor.

[Code mockup documentation](https://daisyui.com/components/mockup-code/)

#### Class names
- component: `mockup-code`

#### Syntax
```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

#### Rules
- Use `<pre data-prefix="{prefix}">` to show a prefix before each line.
- Use the `<code>` tag to add code syntax highlighting. Another library is necessary for this feature.
- To make a line easy to see, add a background color or text color.
