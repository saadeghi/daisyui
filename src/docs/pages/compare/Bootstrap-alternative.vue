<template>
  <div>

  <div class="hero">
    <div class="text-center hero-content">
      <div class="py-20">
        <p class="mb-5 font-bold text-primary">
          Comparing Bootstrap to daisyUI
        </p>
        <h2 class="mb-5 text-5xl font-bold">
          Bootstrap Alternative?
        </h2>
        <p class="mt-5">
          Bootstrap is a popular and old component library but how does it benefit <span class="font-bold">you</span> compared to daisyUI?
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
          <th>Bootstrap</th>
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
          <td><a class="link" href="https://github.com/twbs/bootstrap/blob/main/LICENSE" rel="nofollow" target="_blank">MIT</a></td>        </tr>
        <tr>
          <th>Themes</th>
          <td class="text-success">Multiple themes + custom themes</td>
          <td class="text-error">Paid themes starting at $39</td>
        </tr>
        <tr>
          <th>Enviroment</th>
          <td class="text-success">Pure CSS. Works everywhere</td>
          <td class="text-error">Many components have JS dependencies</td>
        </tr>
        <tr>
          <th>How to install</th>
          <td><code class="font-mono badge badge-ghost">npm install daisyui</code></td>
          <td><code class="font-mono badge badge-ghost">npm install bootstrap</code></td>
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
          <td class="text-error">A 23KB JS file</td>
        </tr>
        <tr>
          <th>Components</th>
          <td class="text-success">40</td>
          <td class="text-error">25</td>
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
        title: "Bootstrap alternative",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Bootstrap alternative - Compare Bootstrap vs daisyUI'
          }
        ]
      }
    }
  }
</script>
