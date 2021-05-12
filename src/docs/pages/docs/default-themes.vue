<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Included Themes</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4 text-base-content text-opacity-60">
        DaisyUI is themeable, powered by CSS variables.
      </p>
      <p class="mb-4 text-lg font-bold">
        List of included themes
      </p>
      <div class="prose">
        <ul>
          <li class="h-6">aqua</li>
          <li class="h-6">black</li>
          <li class="h-6">bumblebee</li>
          <li class="h-6">cupcake</li>
          <li class="h-6">cyberpunk</li>
          <li class="h-6">dark</li>
          <li class="h-6">dracula</li>
          <li class="h-6">fantasy</li>
          <li class="h-6">forest</li>
          <li class="h-6">garden</li>
          <li class="h-6">halloween</li>
          <li class="h-6">light (default)</li>
          <li class="h-6">luxury</li>
          <li class="h-6">pastel</li>
          <li class="h-6">retro</li>
          <li class="h-6">synthwave</li>
          <li class="h-6">valentine</li>
        </ul>
      </div>

      <p class="my-4 text-lg">
        The default theme is <span class="badge badge-outline">light</span> theme and it's included in DaisyUI even if you disable the <span class="badge badge-outline">themes</span> config.
      </p>
      <p class="my-4 text-lg">
        You can also use the <span class="badge badge-outline">themes.css</span> file from CDN.
      </p>
      <p class="my-4 text-lg">
        If you don't want to include themes, you need to disable <span class="badge badge-outline">themes</span> config.
      </p>
      <p class="my-4 text-lg">
        To use your own theme, please see
        <NuxtLink to="/docs/add-themes" class="inline-block btn btn-sm">
          add themes
        </NuxtLink>
        page
      </p>


      <h2 class="my-6 text-3xl font-bold">
        <span>Enable themes</span>
      </h2>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Mehtod 1:</span>
        <span>Config file</span>
      </h2>

      <p class="my-4 text-lg">
        <span class="badge badge-outline">themes</span> config is enabled by default. you just need to safelist <span class="badge badge-outline">/data-theme$/</span> for purge options on your <span class="badge badge-outline">tailwind.config.js</span> file.
      </p>
      <p class="my-4 text-lg">
        You don't need to do anything if you're using Tailwind's <span class="badge badge-outline">mode: 'jit'</span> config.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-20">module.exports = {</span>
    <span class="text-neutral-content text-opacity-20">...</span>

      purge: {
        content: ['yourfiles/**/*.html'],
        options: {
          safelist: [
            <span class="badge badge-primary">/data-theme$/,</span>
          ]
        },
      },

      daisyui: {
        styled: true,
        <span class="badge badge-primary">themes: true,</span>
        rtl: false,
      },

    <span class="text-neutral-content text-opacity-20">...</span>
    <span class="text-neutral-content text-opacity-20">}</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Mehtod 2:</span>
        <span>Using CDN</span>
      </h2>

      <p class="my-4 text-lg">
        Alternatively you can load included themes from CDN:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/themes.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span>How to use themes?</span>
      </h2>

      <p class="my-4 text-lg">
        And you need to add <span class="badge badge-outline">data-theme="THEME_NAME"</span> to &lt;html&gt; tag.
      </p>
      <p class="my-4 text-lg prose">
        I suggest using <a href="https://github.com/saadeghi/theme-change" target="_blank">them-change</a> for this, so you can switch themes and save selected theme in local storage.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;html</span> data-theme="dark"<span class="text-neutral-content text-opacity-20">&gt;</span></code></pre>
        </div>
      </div>

    </Wrapper>





    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/add-themes" class="text-xs btn-lg btn lg:text-lg">
        Next: Add themes
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
