<template>
  <div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Layout</span>
    </h2>

    <div class="tabs mb-10">
      <NuxtLink to="/core/layout" class="tab tab-lifted tab-lg tab-active"><Icon glyph="template" class="inline-block w-4 h-4 lg:w-6 w-4 h-4 lg:h-6 mr-2 stroke-current" />Layout</NuxtLink>
      <NuxtLink to="/core/typography" class="tab tab-lifted tab-lg"><Icon glyph="text" class="inline-block w-4 h-4 lg:w-6 w-4 h-4 lg:h-6 mr-2 fill-current" />Typography</NuxtLink>
      <span class="tab tab-lifted tab-lg flex-grow cursor-default hidden sm:block"></span>
    </div>

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
