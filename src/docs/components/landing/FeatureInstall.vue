<template>
  <div class="max-w-md min-h-screen mx-auto hero bg-base-100 text-base-content md:max-w-full">
    <div class="text-center hero-content">
      <div class="w-full max-w-md">
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Install daisyUI
        </h2>
        <p class="w-full max-w-lg mx-auto mt-5">
          No dependencies, pure CSS. Can be used as a Tailwind CSS plugin or as
          an independent CSS library
        </p>
        <p class="w-full max-w-lg mx-auto mt-5 text-left">
          1. Install daisyUI as a Node package:
        </p>

        <div class="w-full max-w-md mx-auto my-2">
          <div class="w-full max-w-xs mx-auto text-left shadow-lg mockup-code sm:max-w-none">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
          </div>
          <p class="w-full max-w-lg mx-auto mt-5 text-left">
            2. Add daisyUI to Tailwind CSS as a plugin
          </p>

          <div class="w-full max-w-4xl my-2">
            <div class="w-full max-w-xs mx-auto text-sm text-left shadow-lg mockup-code sm:max-w-none">
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
