<template>
  <div class="min-h-screen hero bg-base-100 text-base-content">
    <div class="w-full max-w-xs text-center md:max-w-5xl hero-content">
      <div class="w-full">
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Clean HTML
        </h2>
        <h3 class="mb-5 text-3xl font-bold">with component classes</h3>
        <p class="w-full mx-auto mb-5 md:max-w-lg">
          Your HTML doesn't need to be messy. DaisyUI adds component classes to
          Tailwind CSS. Classes like
          <span class="badge badge-outline">btn</span>,
          <span class="badge badge-outline">card</span>, etc... No need to deal
          with hundreds of utility classes.
        </p>

        <div class="flex flex-col w-full my-20 lg:flex-row">
          <div class="flex-1 w-full max-w-xl mx-auto text-left shadow-lg mockup-code">
            <pre><code>&#x3C;a class=&#x22;<span class="text-warning">inline-block px-4 py-3
      text-sm font-semibold text-center
      text-white uppercase transition
      duration-200 ease-in-out bg-indigo-500
      rounded-md cursor-pointer
      hover:bg-indigo-600</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
          </div>

          <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">
            VS
          </div>
          <div class="divider lg:hidden text-base-content text-opacity-30">
            VS
          </div>

          <div class="flex-1 w-full max-w-xl mx-auto text-left shadow-lg mockup-code">
            <pre><code>&#x3C;a class=&#x22;<span class="text-success">btn btn-primary</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
