### Text rotate
Text rotate can show a maximum of six text lines, one line at a time. It uses a continuous loop animation. The default animation time is 10 seconds. The animation pauses when the pointer is on the text.

[Text rotate documentation](https://daisyui.com/components/text-rotate/)

#### Class names
- component: `text-rotate`

#### Syntax
```html
<span class="text-rotate">
  <span>
    <span>Word 1</span>
    <span>Word 2</span>
    <span>Word 3</span>
    <span>Word 4</span>
    <span>Word 5</span>
    <span>Word 6</span>
  </span>
</span>
```
Example with a large font that is horizontally centered:
```html
<span class="text-rotate max-md:text-3xl text-7xl font-title">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>
```
Words that change in a sentence, with a different color for each word:
```html
<span>
  Providing AI Agents for 
  <span class="text-rotate">
    <span>
      <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span class="bg-red-400 text-red-800 px-2">Developers</span>
      <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </span>
</span>
```
Custom line height for a tall font or more vertical space between lines:
```html
<span class="text-rotate max-md:text-3xl text-7xl font-title leading-[2]">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>
```

#### Rules
- `text-rotate` must contain one `<span>` or `<div>`. This child must contain two to six `<span>` or `<div>` elements, one for each text line.
- The default total loop time is 10000 milliseconds.
- To set a custom time, use the `duration-{value}` utility class. The value is in milliseconds. For example, use `duration-12000` for 12 seconds.
