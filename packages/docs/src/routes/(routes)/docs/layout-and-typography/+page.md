---
title: Layout and Typography
desc: How to use layouts and typography in daisyUI
layout: components
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### Layout

Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes.  
Read more at Tailwind CSS documentation:  
[Layout](https://tailwindcss.com/docs/container), [Sizing](https://tailwindcss.com/docs/width), [Flexbox](https://tailwindcss.com/docs/flex), [Grid](https://tailwindcss.com/docs/grid-template-columns), [Box alignment](https://tailwindcss.com/docs/justify-content), [Spacing](https://tailwindcss.com/docs/padding)

### Typography

daisyUI supports the [TailwindCSS Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography)  
All parts are compatible with daisyUI themes.  

---

Here's a demo text to demonstrate the Tailwind CSS Typography plugin in combination with daisyUI colors:

<div class="max-w-3xl my-20">

# Tailwind CSS Typography plugin demo

This is a demo of the Tailwind CSS Typography plugin in action. The plugin provides a set of prose classes that can be used to style your HTML content with minimal effort. When combined with daisyUI, you get access to a variety of themes that are fully compatible with the Typography plugin.

## Headers: Making a Statement

Headers are essential for structuring your content and making it easy to read. With Tailwind CSS Typography and daisyUI, you can create headers that stand out and match your chosen theme.

# The Big Heading, for the Page Title
## Second Heading, for the Page Subtitle
### Third Heading, usually for the Section Title
#### Fourth Heading, usually for the Subsection Title
##### Fifth Heading, for the Subsubsection Title
###### Sixth Heading, for the Paragraph Title

## Text Formatting: Adding Emphasis

Text formatting is crucial for emphasizing important information. Tailwind CSS Typography makes it simple to apply bold, italic, and other text styles.

### Bold and Italic

- **Bold** text is perfect for highlighting key points.
- *Italic* text is great for emphasizing specific words.
- ***Bold and Italic*** text can be used for extra emphasis.

### Blockquotes

Blockquotes are an excellent way to highlight quotes or important information. They are styled beautifully with the Typography plugin.

> "This is a blockquote. It stands out and draws attention to important information. In HTML, blockquotes are created using the `<blockquote>` tag. When used with the Typography plugin and daisyUI, blockquotes receive special styling that includes indentation and a different background color - making quoted text visually distinct from the rest of the content. This styling helps create clear visual hierarchy and improves readability while maintaining semantic HTML markup."

## Lists: Organizing Information

Lists are a great way to organize information in a structured manner. Tailwind CSS Typography makes it easy to create both unordered and ordered lists.

### Unordered Lists

Unordered lists use bullet points to list items. They are perfect for listing items without a specific order.

- First item
- Second item
  - Subitem one
  - Subitem two

### Ordered Lists

Ordered lists use numbers to list items. They are ideal for steps or items that need to be in a specific order.

1. Step one
2. Step two
   1. Substep one
   2. Substep two

## Links and Images: Adding Interactivity

### Links

Links are essential for navigation and adding interactivity to your content. Tailwind CSS Typography ensures that links are styled consistently.

[Visit daisyUI](https://daisyui.com)

### Images

Images are a great way to enhance your content visually. The Typography plugin makes sure they are displayed beautifully.

![Daisy flowers](https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp)

## Code: Showcasing Your Work

Code snippets are crucial for technical content. Tailwind CSS Typography provides excellent styling for both inline code and code blocks.

### Inline Code

Inline code is perfect for highlighting small pieces of code within a sentence.

Here is an example of inline code: `console.log('Hello, world!');`

### Code Blocks

Code blocks are ideal for displaying larger pieces of code. You can use Shiki, Prism or other libraries for code highlighting.

```javascript
function greet() {
  console.log('Hello, world!');
}
```

## Tables: Organizing Data

Tables are essential for organizing data in rows and columns. Tailwind CSS Typography ensures that tables are styled consistently and look great.

| Feature       | Description                         | Status   |
|---------------|-------------------------------------|----------|
| Tailwind CSS  | Utility-first CSS framework         | Active   |
| daisyUI       | Tailwind CSS component library      | Active   |
| Typography    | Tailwind CSS plugin for styling HTML| Active   |
| Markdown      | Lightweight markup language         | Popular  |
| Themes        | Various themes for styling          | Available|

## Colors: Adding Vibrancy

daisyUI provides various color schemes that you can use to add vibrancy to your content. Here are some examples:

- <span class="text-primary">Primary text</span>
- <span class="text-secondary">Secondary text</span>
- <span class="text-accent">Accent text</span>
- <span class="text-info">Info text</span>
- <span class="text-success">Success text</span>
- <span class="text-warning">Warning text</span>
- <span class="text-error">Error text</span>

## Conclusion

Styling your Markdown-generated HTML has never been easier, thanks to the Tailwind CSS Typography plugin and daisyUI themes. By using headers, text formatting, lists, links, images, code snippets, tables, and colors, you can create rich and visually appealing content with minimal effort. Experiment with these elements and see how they look with different daisyUI themes. Happy styling!

</div>

<style>
  .heading-anchorlink-icon{display:none}
</style>
