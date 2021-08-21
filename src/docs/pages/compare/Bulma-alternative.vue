<template>
  <div>

  <div class="hero">
    <div class="text-center hero-content">
      <div class="py-20">
        <p class="mb-5 font-bold text-primary">
          Comparing Bulma to daisyUI
        </p>
        <h2 class="mb-5 text-5xl font-bold">
          Bulma Alternative?
        </h2>
        <p class="mt-5">
          Bulma is a CSS framework but how does it benefit <span class="font-bold">you</span> compared to daisyUI?
        </p>
      </div>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>daisyUI</th>
          <th>Bulma</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Cost</th>
          <td>Free</td>
          <td>Free</td>
        </tr>
        <tr>
          <th>Open source</th>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th>License</th>
          <td><a class="link" href="https://github.com/saadeghi/daisyui/blob/master/LICENSE" rel="nofollow" target="_blank">MIT</a></td>
          <td><a class="link" href="https://github.com/twbs/Bulma/blob/main/LICENSE" rel="nofollow" target="_blank">MIT</a></td>        </tr>
        <tr>
          <th>Themes</th>
          <td class="text-success">Multiple themes + custom themes</td>
          <td class="text-error">No themes</td>
        </tr>
        <tr>
          <th>Enviroment</th>
          <td>Pure CSS. Works everywhere</td>
          <td>Pure CSS. Works everywhere</td>
        </tr>
        <tr>
          <th>How to install</th>
          <td><code class="font-mono badge badge-ghost">npm install daisyui</code></td>
          <td><code class="font-mono badge badge-ghost">npm install bulma</code></td>
        </tr>
        <tr>
          <th>How to use</th>
          <td>class names for each component</td>
          <td>class names for each component</td>
        </tr>
        <tr>
          <th>How to customize</th>
          <td>
            <div class="text-success">Add/remove utility classes</div>
            <div class="text-success">Also customizable from config file</div>
            <div class="text-success">Also customizable using <span class="badge badge-success">@apply</span></div>
          </td>
          <td>Customizable Sass variables or add a <br/>custom CSS files to overwrite default style</td>
        </tr>
        <tr>
          <th>Dependencies</th>
          <td class="text-success">No dependencies</td>
          <td class="text-error">No dependencies but you need to write <br/>your own JS to change classnames</td>
        </tr>
        <tr>
          <th>Components</th>
          <td class="text-success">40</td>
          <td class="text-error">10</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-20 hero bg-neutral text-neutral-content rounded-box">
    <div class="text-center hero-content">
      <div class="py-20">
        <h3 class="mb-5 text-5xl font-bold">
          Try daisyUI now!
        </h3>
        <div class="flex justify-center flex-1 mt-10 space-x-2">
          <NuxtLink to="/components/button" class="btn btn-ghost">
            <span class="hidden md:inline">See</span>&nbsp; components
          </NuxtLink>
          <NuxtLink to="/docs/install" class="btn btn-primary">
            How to use?
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>

  export default {
    layout: "compare",
    head() {
      return {
        title: "Bulma alternative",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Bulma alternative - Compare Bulma vs daisyUI'
          }
        ]
      }
    }
  }
</script>
