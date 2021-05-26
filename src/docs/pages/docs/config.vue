<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Config</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4">
        DaisyUI can be configed from your <span class="badge badge-outline">tailwind.config.js</span> file
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>module.exports = {

      <span class="text-neutral-content text-opacity-20">// add DaisyUI plugin</span>
      plugins: [
        require('daisyui'),
      ],

      <span class="text-neutral-content text-opacity-20">// config (optional)</span>
      daisyui: {
        styled: true,
        themes: true,
        resets: true,
        utils: true,
        logs: true,
        rtl: false,
      },

    }</code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Config values explained:</span>
      </h2>
      <p class="my-4">
        You can add a `daisyUI` object and change default config:
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>styled</span>
      </h2>
      <p class="badge badge-outline">
        default: true
      </p>
      <p class="my-4">
        If it's true, components will have colors and style so you won't need to design anything.
        <br>
        If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>themes</span>
      </h2>
      <p class="badge badge-outline">
        default: true
      </p>
      <p class="my-4">
        If it's true, all themes will be included.
        <br>If it's false, only default (light) theme will be available.
        <br>Can also be an array of theme names:

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-20">// emerald will be the default theme</span>
    daisyui: {
      themes: ['emerald','dark','forest','synthwave'],
    },</code></pre>
        </div>
      </div>
        <br>The first item of array will be the default theme.
        <br>if no theme is chosen on <span class="badge badge-outline">&lt;html data-theme="THEME_NAME"&gt;</span> and <span class="badge badge-outline">dark</span> theme is in themes config, default theme and dark theme will be enabled based on operatig system prefrences.
        <br>
        <NuxtLink to="/docs/default-themes" class="link">read more about default themes</NuxtLink>
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>resets</span>
      </h2>
      <p class="badge badge-outline">
        default: true
      </p>
      <p class="my-4">
        If it's true, <a target="_blank" class="link" href="https://github.com/saadeghi/daisyui/blob/master/src/resets">a very small reset style</a> will be added
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>utils</span>
      </h2>
      <p class="badge badge-outline">
        default: true
      </p>
      <p class="my-4">
        If it's true, <a target="_blank" class="link" href="https://github.com/saadeghi/daisyui/tree/master/src/utilities">a few utility classes</a> will be added
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>logs</span>
      </h2>
      <p class="badge badge-outline">
        default: true
      </p>
      <p class="my-4">
        If it's true, DaisyUI shows logs in terminal while CSS is building
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>rtl</span>
      </h2>
      <p class="badge badge-outline">
        default: false
      </p>
      <p class="my-4">
        If it's true, your theme will be right-to-left. You need to add <span class="badge badge-outline">dir="rtl"</span> to your body tag. If you're using DaisyUI with RTL option, I also suggest using <a class="link" href="https://github.com/cvrajeesh/tailwindcss-flip" target="_blank">tailwindcss-flip</a> plugin. It flips all your tailwind utilities automatically.
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
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
    }
  }
}
</script>
