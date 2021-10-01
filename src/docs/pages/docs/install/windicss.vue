<template>
  <div>

    <TabHandler/>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Install as WindiCSS plugin</span>
    </h2>

    <Wrapper nocode>

      <div class="mb-6 alert alert-warning">
        <div class="items-center flex-1">
          <Icon glyph="warning" class="w-6 h-6 mx-2 stroke-current" />
          <label>
            <div class="font-bold">
              Experimental
            </div>
            <div class="text-sm">
              WindiCSS generates plugin styles differently. There might be some bugs.
            </div>
          </label>
        </div>
      </div>

      <p class="prose text-base-content">
        You need
        <a target="_blank" href="https://nodejs.org/en/download/">Node.js</a> and
        <a target="_blank" href="https://windicss.org/guide/installation.html">WindiCSS</a> installed.
      </p>

      <p class="my-4">
        1. Install daisyUI:
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="shadow-lg mockup-code">
          <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
        </div>
      </div>

      <p class="my-4">
        2. Then add daisyUI to your <span class="badge badge-outline">windi.config.js</span>
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="text-sm shadow-lg mockup-code">
        <pre><code><span class="badge badge-primary">const { transform } = require('windicss/helpers')</span>

    module.exports = {

      plugins: [
        <span class="badge badge-primary">transform('daisyui'),</span>
      ],

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
  },
  head() {
    return {
      title: "daisyUI — Install Windi CSS plugin",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Install daisyUI as a plugin for Windi CSS'
        }
      ]
    }
  }
}
</script>
