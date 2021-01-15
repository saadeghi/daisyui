# FAQ


## Why do I need DaisyUI?

- ### Component classes  
  This is how you usually design a normal button with Tailwind CSS:  
  ```html
  <a class="px-6 py-2 text-sm text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-700">
    Button
  </a>
  ```
  All these classes to for simple blue button and its hover style. You need to add even more classes for `focus` state and a11y.  
  Repeating all these low-level classes all over your code base makes it hard to manage, hard to edit and hard to scale.  
  If you decide to change the padding of every button on your project, you need to find all your buttons and edit the class names. You will never know if all your buttons are using the the exact same style because a class might have changed in a file and that button might not have hover style for instance.  

  Tailwind utility classes are awesome for designing the elements but there is also a fact: Almost every design system share similar gudelines at their core. If you ignore the colors and sizing, almost every design system define 3 or 4 button sizes, they define `hover`, `focus`,... states. They all put the text in the center of button. Almost all design systems define `primary`, `secondary`,... buttons.  
  
  As you can see, there are shared rules. If you design 20 different websites with Tailwind CSS and look back at the class names you used for buttons, you can see a lot or classes that you're using on all your projects.  
  > DaisyUI is trying to use the *design system* concepts with Tailwind CSS power.

  If you use DaisyUI, you will be focusing on your design system only, not tons of class names you need on every project.  
  Instead of using lots of utility classes for all elements, use component classes like `.btn`, `.card`, `.navbar`, etc... for your common elements to make sure all your elements use same style.  
  ##### *- But I'm using a templating system (vue, blade, hbs, ...)* and I use one component for all my buttons.
  Yes, That might be solution in some cases but then again, you need to define every variant for your component by mixing design decisions inside your logic code. You need diffrent variants of almost all your components, that can be handled in CSS (unless you want to make your job harder)  
  You just need to use a `btn` or a `btn-primary`.

- ### Semantic color names
  Instead of using general-purpose color names like `blue-600` or `gray-100` use semantic role names like `primary`, `content-300` or `info`. This way, you can change primary color of your whole project using a single CSS variable. No need to replace all color classes in all files. You can also define multiple themes (not just dark-mode) using CSS variables.  
- ### Designer-friendly
  DaisyUI has 2 versions:  
  - **Styled**: Beatiful UI library, no need to design elements.  
  - **Base**: Only skeleton of components. No style, no colors.  
  
  You might think DaisyUI is a component library like Bootstrap but that's not true. If you want to customize the design of a bootstrap button, basically you need to write some css with higher specificity to overwrite the default style, so you're actually fighting the framework instead of using it because Bootstrap is a fully-designed component library at its core.  
  DaisyUI on the otherhand separated the skeleton style of every component from its visual style. You can use `base` version of DaisyUI and it has no visual style *OR* you can use the `styled` version, which gives you a pre-designed UI.
  ***- How?***
  See, these are the "skeleton" classes for a button:
  ```
  text-center cursor-pointer select-none transition duration-200 ease-in-out
  ```
  This can be used for every design system because it has no spacing, no color, and no visual style. If you use `base` version of DaisyUI, You get this styles when you use a `.btn` class. To apply your custom design, just write some custom CSS or add your CSS style using Tailwind's `@apply` directive:
  ```postcss
  .btn{
    @apply px-10 py-2 bg-primary;
  }
  ```
  So you're just styling the "visual" part of the button. the sizing, positioning, disable state and every non-visual part will be handled by DaisyUI's `base` version
  
- ### Scalable  
  You know all your components are sharing the same style.  
  You'll have cleaner code (less class names) and even if your codebase grows 100x larger, you'll still have design system approach for your components and you don't need to manage thousands of class names.
- ### Customizable
  DaisyUI is written with low-level css classes like Tailwind's utility classes, so you can always customize components with Tailwind's classes.
  ```html
  <div class="p-10 shadow-lg btn">
  ```
  You can also use `@apply` directive or custom CSS styles to add or overwrite styles for a component:
  ```postcss
  .btn{
    @apply p-10 shadow-lg;
  }
  ```
- ### Themeable
  Using semantic color names and CSS variables makes theming easy and fun. Every theme is just a set of CSS varuable values so you can add multiple themes (not just light/dark) and you can change the colors by changing a CSS variable.
  [ Checkout 📘 [Theming guide][theming-url] ]


## What's included in DaisyUI?

 

When you include `daisyui` as a Tailwind CSS plugin, it gives you ready-to-use UI component classes to use. Like `.btn`, `.card`, `.alert`, etc...  

If you use styled version, you get something pre-designed (like Bootstrap) but you can still customize it with Tailwind utility classes.  

If you use the disable `styled` config, all colors and visual style will be removed so you can fully style the components with Tailwind utility classes or Tailwind's `@apply` directive. 
  

  


## How to handle spacing, layout and typography

Tailwind utility classes gives you ultimate flexibility for spacing and layout It's easy to create any layout with flexbox or grid. Also for spacing (margins, paddings, etc...), Tailwind classes are perfect.  
For typography, I suggest using the official [Tailwind Typography ↗︎](https://github.com/tailwindlabs/tailwindcss-typography) plugin.  


## Why we're not using default colors?
`Tailwind CSS` provides a wide range of colors and it won't limit your choice when you're styling your page but DaisyUI is about focusing on design systems and if you're creating a design system, you need to define your brand colors, set a design guideline and only use the chosen colors.  
Instead of using tailwind's general-purpose colors like `blue-600`, `green-200` or `gray-100` we use semantic role names like `primary`, `content-300` or `info`. This way, we can assign a color value to each role, then use the role name in our markup (like `<div class='bg-primary'>`). Your markup doesn't care what color is `primary` and you can change primary color of your whole project using a CSS variable.  
This gives us the opportunity to create multiple themes using a few CSS variables.




[theming-url]: https://daisyui.netlify.app/docs/add-themes
