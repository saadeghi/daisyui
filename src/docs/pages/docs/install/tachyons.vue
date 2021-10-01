<template>
  <div>

    <TabHandler/>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Use with Tachyons</span>
    </h2>

    <Wrapper nocode>

      <p class="prose text-base-content opacity-60">
        daisyUI works best with Tailwind CSS but you can use it as a component library with other utility-first libraries such as Tachyons.
      </p>
      <p class="mt-4 prose text-base-content">
        Add the CSS file to your &lt;head&gt; tag.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/tachyons@latest/css/tachyons.min.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>
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
  },
  head() {
    return {
      title: "daisyUI — Use with Tachyons",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Use daisyUI components with Tachyons CSS'
        }
      ]
    }
  }
}
</script>
