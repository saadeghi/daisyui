<template>
  <div>

    <TabHandler/>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Use CDN file</span>
    </h2>

    <Wrapper nocode>

      <p class="prose text-base-content">
        You don't need to install anything. Just add the CSS file to your &lt;head&gt; tag.
        <br>However, these files are large for production and you can't purge unused styles.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/full.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>

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
  },
  head() {
    return {
      title: "daisyUI — Use CDN file",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Use Tailwind CSS and daisyUI from CDN'
        }
      ]
    }
  }
}
</script>
