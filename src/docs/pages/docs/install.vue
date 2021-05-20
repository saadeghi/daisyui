<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Method 1: </span>
      <span>install with Node.js</span>
    </h2>
    <Wrapper nocode>

      <p class="prose text-base-content">
        You need
        <a target="_blank" href="https://nodejs.org/en/download/">Node.js</a> and
        <a target="_blank" href="https://tailwindcss.com/docs/installation">Tailwind CSS</a> installed.
      </p>

      <p class="my-4">
        1.Install DaisyUI:
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
        <pre><code>module.exports = {

      plugins: [
        <span class="badge badge-primary">require('daisyui'),</span>
      ],

    }</code></pre>
        </div>
      </div>


  <div class="collapse max-w-xl rounded-box border border-base-300 collapse-arrow">
    <input type="checkbox">
    <div class="collapse-title">
      <Icon glyph="info" class="inline-block w-5 h-5 mr-2 stroke-current" />
      If you use WindiCSS, make these changes to
      <span class="badge badge-outline">tailwind.config.js</span>
    </div>
    <div class="collapse-content">
      <div class="w-full max-w-4xl my-2">
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
    </div>
  </div>


      <h2 class="mt-20 text-5xl font-bold">
        <span class="text-primary">Method 2: </span>
        <span>Use CDN file</span>
      </h2>

      <p class="mt-4 prose text-base-content">
        You don't need to install anything. Just add the CSS file to your &lt;head&gt; tag.
        <br>However, these files are large for production and you can't purge unused styles.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/tailwindcss@2.1/dist/tailwind.min.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/full.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>

</code></pre>
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
