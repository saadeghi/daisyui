<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Features</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4 text-4xl font-bold">
        1. Component classes
      </p>
      <p class="mb-4 prose">
        This is how you usually design a normal button with Tailwind CSS:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-warning">inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600</span>&#x22;&#x3E;Tailwind Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>
      <div class="w-full my-2">
        <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Tailwind Button</button>
      </div>

      <p class="mb-4 prose">
        With daisyUI, you can use component classes:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-success">btn btn-primary</span>&#x22;&#x3E;daisyUI Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>
      <div class="w-full my-2">
        <button class="btn btn-primary">daisyUI Button</button>
      </div>

      <p class="mb-4 prose">
        And still use utility classes for customization:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-success">btn btn-primary</span> <span class="text-info">rounded-full</span>&#x22;&#x3E;daisyUI Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>
      <div class="w-full my-2">
        <button class="rounded-full btn btn-primary">daisyUI Button</button>
      </div>

      <div class="py-6 mb-4 text-opacity-50 text-base-content">
        <p class="prose">
          Repeating all those low-level classes all over your code base makes it hard to manage, hard to edit and hard to scale.
          <br>
          If you decide to change the padding of every button on your project, you need to find all your buttons and edit the class names. You will never know if all your buttons are using the the exact same style because a class might have changed in a file and that button might not have hover style for instance.
          <br>
          If you use daisyUI, you will be focusing on your design system only, not tons of class names you need on every project.
          <br>
          Instead of using lots of utility classes for all elements, use component classes like <span class="badge badge-outline">btn</span>, <span class="badge badge-outline">card</span>, <span class="badge badge-outline">navbar</span>, etc... for your common elements to make sure all your elements use same style.
        </p>
      </div>

      <div class="mt-4 prose">
        <blockquote>- But I'm using a templating system (vue, blade, hbs, ...) <br>and I use one component for all my buttons.</blockquote>
      </div>

      <div class="py-6 mb-4 text-opacity-50 text-base-content">
        <p class="prose">
          Yes, That might be solution in some cases but then again, you need to define every variant for your component by mixing design decisions inside your logic code. You need diffrent variants of almost all your components, that can be handled in CSS (unless you want to make your job harder)
          <br>
          You just need to use a <span class="badge badge-outline">btn</span> or a <span class="badge badge-outline">btn-primary</span> for a variant.
        </p>
      </div>



      <p class="mb-4 text-4xl font-bold">
        2. Tailwind CSS plugin
      </p>
      <p class="mb-4 prose">
        daisyUI is a Tailwind CSS plugin so you can simply add it to your <span class="badge badge-outline">tailwind.config.js</span> file.
      </p>



      <p class="mb-4 text-4xl font-bold">
        3. Based on design system
      </p>
      <p class="mb-4 prose">
        daisyUI applies design system concepts to Tailwind CSS. Every component on your page is committed to a single design system.
      </p>





      <p class="mb-4 text-4xl font-bold">
        4. Customizable
      </p>
      <p class="mb-4 prose">
        You can customize the design of components with Tailwind utility classes and CSS variables.
      </p>





      <p class="mb-4 text-4xl font-bold">
        5. Semantic color names
      </p>
      <p class="mb-4 prose">
      Tailwind CSS provides a wide range of colors and it won't limit your choice when you're styling your page. daisyUI however, is focusing on design system concepts and if you're creating a design system, you need to define your brand colors and create your layout committed to that color palette.
      <br>
        Instead of using general-purpose color names like <span class="badge badge-warning">blue-600</span> or <span class="badge badge-warning">gray-100</span> use semantic role names like <span class="badge badge-success">primary</span>, <span class="badge badge-success">neutral-300</span> or <span class="badge badge-success">info</span>. This way, you can change primary color of your whole project using a single CSS variable. No need to replace all color classes in all files. You can also define multiple themes (not just dark-mode) using CSS variables.
      </p>



      <p class="mb-4 text-4xl font-bold">
        6. RTL support
      </p>
      <p class="mb-4 prose">
        Enable <span class="badge badge-outline">rtl</span> config for right to left layouts.
      </p>


      <p class="mb-4 text-4xl font-bold">
        7. Themeable
      </p>
      <p class="mb-4 prose">
        Using semantic color names and CSS variables makes theming easy and fun. Every theme is just a set of CSS variables so you can add multiple themes (not just light/dark) and you can change the colors by changing a CSS variable.
        <br>
        You can also use daisyUI default themes if you enabe <span class="badge badge-outline">themes</span> config.
      </p>



      <p class="mb-4 text-4xl font-bold">
        8. Designer-friendly
      </p>
      <p class="mb-4 prose">
        daisyUI separated the skeleton style of every component from its visual style. You can disable <span class="badge badge-outline">styled</span> config and components won't have visual style. Now you can set colors or other visual styles based on a skeleton.
      </p>



      <p class="mb-4 text-4xl font-bold">
        9. No striction on layout or typography
      </p>
      <p class="mb-4 prose">
        Tailwind utility classes gives you ultimate flexibility for spacing and layout It's easy to create any layout with flexbox or grid. Also for spacing (margins, paddings, etc...), Tailwind classes are perfect.
        <br>
        So, there is no grid system or strict layout rules. You can create any layout with <span class="badge badge-outline">flexbox</span> or <span class="badge badge-outline">CSS gird</span> using Tailwind's utility classes.
        <br>
        For typography, you should use the official <a href="https://twitter.com/Saadeghi" target="_blank">Tailwind Typography plugin ↗︎</a>.
      </p>




















    </Wrapper>




    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/whats-included" class="text-xs btn-lg btn lg:text-lg">
        Next: What's included?
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>

  </div>
</template>



<script>
export default {
  head() {
    return {
      title: "daisyUI — Features",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS plugin - daisyUI features'
        }
      ]
    }
  }
}
</script>
