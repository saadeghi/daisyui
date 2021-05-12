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
      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
        <pre><code>module.exports = {

      plugins: [
        <span class="badge badge-primary">require('daisyui'),</span>
      ],

    }</code></pre>
        </div>
      </div>

      <p class="my-4 mt-10">
        If you are using <a target="_blank" class="link" href="https://windicss.org/">windicss</a>, make these changes to
        <span class="badge badge-outline">tailwind.config.js</span>
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
        <pre><code><span class="badge badge-primary">const { transform } = require('windicss/helpers')</span>

    module.exports = {

      plugins: [
        <span class="badge badge-primary">transform('daisyui'),</span>
      ],

      <span class="text-neutral-content text-opacity-20">// OPTIONAL: if you want to use DaisyUI colors everywhere</span>
      theme: {
        extend: {
          <span class="badge badge-primary">colors: require('daisyui/colors/windi'),</span>
        },
      },

    }</code></pre>
        </div>
      </div>

      <h2 class="mt-20 text-5xl font-bold">
        <span class="text-primary">Method 2: </span>
        <span>Use a CDN</span>
      </h2>

      <p class="mt-4 prose text-base-content">
        You don't need to install anything. You can just add the CSS file. However, you can't customize anything and you can't purge unused styles.
      </p>
      <p class="mt-4 font-bold text-primary">
        You have 3 options:
      </p>

      <div class="mt-10 text-base-content">
        <h2 class="text-2xl font-bold">1. Base version</h2>
        <p class="prose">
          <ul>
            <li>Unstyled UI components (skeleton only)</li>
            <li>No color, no visual style</li>
            <li>You need to style elements yourself</li>
            <li>You need to add Tailwind CSS Separately</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/base.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>


      <div class="mt-10 text-base-content">
        <h2 class="text-2xl font-bold">2. Styled version</h2>
        <p class="prose">
          <ul>
            <li>Ready-to-use styled UI components</li>
            <li>You can't use DaisyUI colors (like primary, secondary, etc...) on other elements</li>
            <li>You need to add Tailwind CSS Separately</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/styled.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>



      <div class="mt-10 text-base-content">
        <h2 class="text-2xl font-bold">3. Full version</h2>
        <p class="prose">
          <ul>
            <li>Ready-to-use styled UI components</li>
            <li>Tailwind's default style included</li>
            <li>You can use DaisyUI colors on all elements</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/full.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
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
