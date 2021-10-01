<template>
  <div class="min-h-screen hero bg-neutral text-neutral-content">
    <div class="max-w-md mx-auto text-center hero-content md:max-w-full">
      <div>
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Highly customizable
        </h2>
        <h3 class="mb-5 text-3xl font-bold">
          using Tailwind's utility classes
        </h3>
        <p class="max-w-lg mx-auto mb-5">
          daisyUI is based on Tailwind's utility classes and all components have
          low specificity so you can customize everything using utility classes.
          <br />You can even
          <NuxtLink to="/docs/customize" class="link">use @apply</NuxtLink> to
          add your custom styles to components or you can
          <NuxtLink to="/docs/add-themes" class="link">change colors and other design decisions</NuxtLink>
          using CSS variables.
        </p>

        <div class="flex flex-col my-20">
          <div class="w-full max-w-xs mx-auto text-left shadow-lg mockup-code bg-neutral-focus sm:max-w-none">
            <pre><code>&#x3C;a class=&#x22;<span class="text-info">btn btn-primary</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
          </div>

          <div class="divider text-neutral-content text-opacity-30">
            ↓
          </div>

          <div class="w-full max-w-xs mx-auto text-left shadow-lg mockup-code bg-neutral-focus sm:max-w-none">
            <pre><code>&#x3C;a class=&#x22;<span class="text-info">btn btn-primary</span> <span class="text-success">rounded-full</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
