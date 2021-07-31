<template>
  <div>

    <div class="mb-10 tabs">
      <NuxtLink to="/core/layout" class="tab tab-lifted tab-lg tab-active"><Icon glyph="template" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Layout</NuxtLink>
      <NuxtLink to="/core/typography" class="tab tab-lifted tab-lg"><Icon glyph="text" class="inline-block w-4 h-4 mr-2 fill-current lg:w-6 lg:h-6" />Typography</NuxtLink>
      <span class="flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"></span>
    </div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Layout</span>
    </h2>

    <Wrapper nocode class="prose text-base-content">
      <p>Layout, sizing, grids, spacing, etc... all will be handled by Tailwind CSS's utility classes</p>
      <p>
        Read more about:
        <ul>
          <li><a target="_blank" href="https://tailwindcss.com/docs/container">Layout</a></li>
          <li><a target="_blank" href="https://tailwindcss.com/docs/width">Sizing</a></li>
          <li><a target="_blank" href="https://tailwindcss.com/docs/flex">Flexbox</a></li>
          <li><a target="_blank" href="https://tailwindcss.com/docs/grid-template-columns">Grid</a></li>
          <li><a target="_blank" href="https://tailwindcss.com/docs/justify-content">Box alignment</a></li>
          <li><a target="_blank" href="https://tailwindcss.com/docs/padding">Spacing</a></li>
        </ul>
      </p>
    </Wrapper>


    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/core/typography" class="text-xs btn-lg btn lg:text-lg">
        Next: typography
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Layout",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'daisyUI CSS Layout - Tailwind CSS Layout'
        }
      ]
    }
  }
}
</script>
