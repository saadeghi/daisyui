<template>
  <div class="min-h-screen hero bg-gradient-to-br from-primary to-accent text-primary-content">
    <div class="max-w-md mx-auto text-center hero-content md:max-w-full">
      <div>
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Powerful theming
        </h2>
        <h3 class="mb-5 text-3xl font-bold">
          Apply your own design decisions
        </h3>
        <p class="w-full max-w-lg mx-auto mb-5">
          daisyUI adds a set of semantic color names to Tailwind. So instead of
          using generic color names like
          <span class="badge badge-ghost">bg-blue-500</span>, we can use
          semantic role names like
          <span class="badge badge-ghost">bg-primary</span> or
          <span class="badge badge-ghost">bg-success</span>. <br />All colors
          are CSS variables so you easily add dark mode by changing a few CSS
          variables. Try daisyUI
          <NuxtLink to="/docs/default-themes" class="link">default themes</NuxtLink>
          or
          <NuxtLink to="/docs/add-themes" class="link">create your own theme</NuxtLink>
          in less than a minute!
        </p>

        <div class="flex flex-col w-full my-20 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
          <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="luxury">
            <h3 class="text-sm font-bold">Luxury Theme</h3>
            <div class="flex flex-col mt-2 space-y-2">
              <progress class="progress" value="40" max="100"></progress>
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-sm btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <label class="label" aria-label="toggle">
                  <Toggle /></label>
                <label class="label" aria-label="Checkbox">
                  <Checkbox /></label>
              </div>
              <button class="btn btn-block btn-sm btn-primary">
                Primary
              </button>
              <button class="btn btn-block btn-sm btn-secondary">
                Secondary
              </button>
              <button class="btn btn-block btn-sm btn-outline">
                Outline
              </button>
            </div>
          </div>

          <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="cupcake">
            <h3 class="text-sm font-bold">Cupcake Theme</h3>
            <div class="flex flex-col mt-2 space-y-2">
              <progress class="progress" value="40" max="100"></progress>
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-sm btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <label class="label" aria-label="toggle">
                  <Toggle /></label>
                <label class="label" aria-label="Checkbox">
                  <Checkbox /></label>
              </div>
              <button class="btn btn-block btn-sm btn-primary">
                Primary
              </button>
              <button class="btn btn-block btn-sm btn-secondary">
                Secondary
              </button>
              <button class="btn btn-block btn-sm btn-outline">
                Outline
              </button>
            </div>
          </div>

          <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="cyberpunk">
            <h3 class="text-sm font-bold">Cyberpunk Theme</h3>
            <div class="flex flex-col mt-2 space-y-2">
              <progress class="progress" value="40" max="100"></progress>
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-sm btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <label class="label" aria-label="toggle">
                  <Toggle /></label>
                <label class="label" aria-label="Checkbox">
                  <Checkbox /></label>
              </div>
              <button class="btn btn-block btn-sm btn-primary">
                Primary
              </button>
              <button class="btn btn-block btn-sm btn-secondary">
                Secondary
              </button>
              <button class="btn btn-block btn-sm btn-outline">
                Outline
              </button>
            </div>
          </div>
        </div>
        <NuxtLink to="/docs/default-themes" class="mb-20 btn btn-ghost btn-sm">Read more about themes</NuxtLink>
        <div></div>
      </div>
    </div>
  </div>
</template>
