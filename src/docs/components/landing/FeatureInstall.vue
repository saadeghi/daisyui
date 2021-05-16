<template>
  <div class="min-h-screen hero bg-base-100 text-base-content max-w-md md:max-w-full mx-auto">
    <div class="text-center hero-content">
      <div class="w-full max-w-md">
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Install DaisyUI
        </h2>
        <p class="w-full mx-auto mt-5 max-w-lg">
          No dependencies, pure CSS. Can be used as a Tailwind CSS plugin or as
          an independent CSS library
        </p>
        <p class="w-full mx-auto mt-5 text-left max-w-lg">
          1. Install DaisyUI as a Node package:
        </p>

        <div class="w-full max-w-md mx-auto my-2">
          <div class="text-left shadow-lg mockup-code mx-auto max-w-xs sm:max-w-none w-full">
            <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
          </div>
          <p class="w-full mx-auto mt-5 text-left max-w-lg">
            2. Add DaisyUI to Tailwind CSS as a plugin
          </p>

          <div class="w-full max-w-4xl my-2">
            <div class="text-sm text-left shadow-lg mockup-code mx-auto max-w-xs sm:max-w-none w-full">
              <pre><code><span class="text-neutral-content text-opacity-40">// tailwind.config.js</span>
    module.exports = {
      plugins: [
        <span class="badge badge-secondary">require('daisyui'),</span>
      ],
    }</code></pre>
            </div>
          </div>

          <NuxtLink to="/docs/install" class="mt-4 mb-20 shadow-lg btn-wide btn-primary btn">
            Install guide
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
