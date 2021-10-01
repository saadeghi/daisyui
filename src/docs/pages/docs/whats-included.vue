<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">What's included?</span>
    </h2>
    <Wrapper nocode>

      <h3 class="flex items-center mb-4 text-4xl font-bold">
        1. Components
      </h3>
      <p class="mb-4 prose">
        Common UI components that you'll need for your interface.
        <ul>
          <li>Components are CSS/HTML and they don't depend on any Javascript framework, so you can use them anywhere.</li>
          <li>Components are made with Tailwind CSS but the output is a CSS file, so you can use the CSS file from CDN even if you're not using Tailwind CSS on your project.</li>
          <li>You can see the list of all components here on this site.</li>
        </ul>
        Every component's CSS source code is separated in 2 files: <a href="https://github.com/saadeghi/daisyui/tree/master/src/base/components" target="_blank">base</a> and <a href="https://github.com/saadeghi/daisyui/tree/master/src/styled/components" target="_blank">styled</a>.
        This allows you to skip using pre-designed components and use your own design if you want.
        See <NuxtLink to="/docs/config">config document</NuxtLink> for more info.
        <ul>
          <li>`base` is the skeleton of components, no colors, no design decisions included.</li>
          <li>`styled` includes all the colors, spacing and design decisions</li>
        </ul>
      </p>

      <h3 class="flex items-center mb-4 text-4xl font-bold">
        2. Utility Classes
      </h3>
      <p class="mb-4 prose">
        daisyUI adds a few extra utility classes to Tailwind CSS. They are being used inside components.
        <br>
        You can see the available utilities on <a href="https://github.com/saadeghi/daisyui/tree/master/src/utilities" target="_blank">github</a>
      </p>

      <h3 class="flex items-center mb-4 text-4xl font-bold">
        3. Resets
      </h3>
      <p class="mb-4 prose">
        daisyUI adds a tiny style reset to Tailwind's @base reset style.
        <br>
        You can see it on <a href="https://github.com/saadeghi/daisyui/tree/master/src/resets" target="_blank">github</a>
      </p>

      <h3 class="flex items-center mb-4 text-4xl font-bold">
        4. Themes <span class="mx-2 badge badge-outline badge-sm">optional</span>
      </h3>
      <p class="mb-4 prose">
        You can see all available themes on this site.
        <ul>
          <li>Default themes are available on <a :href="`https://cdn.jsdelivr.net/npm/daisyui@` + DAISYUI_VERSION + `/dist/themes.css`" target="_blank">CDN</a>.</li>
          <li>You can disable it from <NuxtLink to="/docs/config">config file</NuxtLink>.</li>
          <li>You can see the source for each theme on <a href="https://github.com/saadeghi/daisyui/tree/master/src/themes" target="_blank">github</a>.</li>
          <li>You can <NuxtLink to="/docs/add-themes">add your own theme</NuxtLink> if you want.</li>
        </ul>
      </p>

      <h3 class="flex items-center mb-4 text-4xl font-bold">
        5. full.css file <span class="mx-2 badge badge-outline badge-sm">available on CDN</span>
      </h3>
      <p class="mb-4 prose">
        This file includes a generated CSS including Tailwind CSS and daisyUI.
        <ul>
          <li>It's useful if you want to quickly use Tailwind CSS and daisyUI without installing anything.</li>
          <li>It's not recommended to use this file on production because it's a large CSS file and nothing is purged.</li>
          <li>full.css is available on <a :href="`https://cdn.jsdelivr.net/npm/daisyui@` + DAISYUI_VERSION + `/dist/full.css`" target="_blank">CDN</a></li>
        </ul>
      </p>

    </Wrapper>




    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/core/colors" class="text-xs btn-lg btn lg:text-lg">
        Next: Colors
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
      title: "daisyUI — What's included",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Tailwind CSS daisyUI plugin what's included"
        }
      ]
    }
  }
}
</script>
