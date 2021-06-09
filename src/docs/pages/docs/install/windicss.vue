<template>
  <div>

    <TabHandler/>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Install as WindiCSS plugin</span>
    </h2>

    <Wrapper nocode>

      <p class="prose text-base-content">
        You need
        <a target="_blank" href="https://nodejs.org/en/download/">Node.js</a> and
        <a target="_blank" href="https://windicss.org/guide/installation.html">WindiCSS</a> installed.
      </p>

      <p class="my-4">
        1. Install DaisyUI:
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="shadow-lg mockup-code">
          <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
        </div>
      </div>

      <p class="my-4">
        2. Then add DaisyUI to your <span class="badge badge-outline">tailwind.config.js</span>
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="text-sm shadow-lg mockup-code">
        <pre><code><span class="badge badge-primary">const { transform } = require('windicss/helpers')</span>

    module.exports = {

      plugins: [
        <span class="badge badge-primary">transform('daisyui'),</span>
      ],

      <span class="text-neutral-content text-opacity-40">// OPTIONAL: if you want to use DaisyUI colors everywhere</span>
      theme: {
        extend: {
          <span class="badge badge-primary">colors: require('daisyui/colors/windi'),</span>
        },
      },

    }</code></pre>
        </div>
      </div>





    </Wrapper>


    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/use" class="text-xs btn-lg btn lg:text-lg">
        Next: How to use
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
    }
  }
}
</script>
