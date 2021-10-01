<template>
  <div>

    <TabHandler/>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Install as Tailwind CSS plugin</span>
    </h2>

    <Wrapper nocode>

      <p class="prose text-base-content opacity-60">
        You need
        <a target="_blank" href="https://nodejs.org/en/download/">Node.js</a> and
        <a target="_blank" href="https://tailwindcss.com/docs/installation">Tailwind CSS</a> installed.
      </p>

      <p class="my-4">
        1. Install daisyUI:
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="shadow-lg mockup-code">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
      </div>

      <p class="my-4">
        2. Then add daisyUI to your <span class="badge badge-outline">tailwind.config.js</span>
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
  head() {
    return {
      title: "daisyUI — Install Tailwind CSS plugin",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS plugin for components - daisyUI'
        }
      ]
    }
  }
}
</script>
