<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Add component classes</span>
      <span>to your HTML: </span>
    </h2>

    <Wrapper nocode>
      <p class="prose text-base-content">
        Once you <NuxtLink to="/docs/install">installed</NuxtLink> daisyUI, you can use component classes like <span class="badge badge-outline">btn</span>, <span class="badge badge-outline">card</span>, etc...
      </p>

      <p class="my-4">
        So instead of making a button like this:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-warning">inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600</span>&#x22;&#x3E;Tailwind Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Tailwind Button</button>
      </div>

      <p class="my-4">
        You just need this:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-success">btn btn-primary</span>&#x22;&#x3E;daisyUI Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="btn btn-primary">daisyUI Button</button>
      </div>

      <p class="max-w-4xl my-4">
        As you can see: cleaner code, better animations, better accessibility, and more importantly, easily themeable.
      </p>

    </Wrapper>



    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/customize" class="text-xs btn-lg btn lg:text-lg">
        Next: Customize components
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — How to use",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'How to use daisyUI component classes in Tailwind CSS?'
        }
      ]
    }
  }
}
</script>
