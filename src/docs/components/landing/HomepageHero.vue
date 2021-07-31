<template>
  <div class="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-primary to-secondary text-primary-content">
    <div class="inline-block w-full transform scale-125 opacity-5 -rotate-12 text-neutral" v-html="svgLogoSolid"></div>
    <div class="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
      <h1 class="py-4 mb-2 font-extrabold text-center font-title lg:py-10 lg:py-0">
        <div class="mb-2 text-5xl lg:text-7xl">
          daisyUI
        </div>
        <div class="text-4xl lg:text-5xl">
          Tailwind CSS Components
        </div>
      </h1>

      <div class="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
        <div class="flex-1 w-full max-w-xs text-left bg-transparent border-2 text-primary-content border-opacity-40 border-primary-content mockup-code lg:mx-0">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
        <div class="max-w-sm my-2 text-left">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Clean HTML with component classes
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Customizable and themeable
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Pure CSS, No dependencies
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-1 mt-4 space-x-2 lg:mt-12 lg:justify-start">
        <NuxtLink to="/components/button" class="lg:btn-lg btn btn-ghost">
          <span class="hidden md:inline">See</span>&nbsp; components
        </NuxtLink>
        <NuxtLink to="/docs/install" class="shadow-2xl lg:btn-lg btn">
          How to use?
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      svgLogoSolid() {
        return require(`~/static/logo.svg?raw`);
      }
    },
  };

</script>
