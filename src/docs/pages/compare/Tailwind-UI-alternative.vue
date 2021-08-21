<template>
  <div>

  <div class="hero">
    <div class="text-center hero-content">
      <div class="py-20">
        <p class="mb-5 font-bold text-primary">
          Comparing Tailwind UI to daisyUI
        </p>
        <h2 class="mb-5 text-5xl font-bold">
          Tailwind UI free Alternative?
        </h2>
        <p class="mt-5">
          Tailwind UI is a great library but how does it benefit <span class="font-bold">you</span> compared to daisyUI?
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
          <th>Tailwind UI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Cost</th>
          <td class="text-success">Free forever</td>
          <td class="text-error">From €153 to €284</td>
        </tr>
        <tr>
          <th>Open source</th>
          <td class="text-success">Yes</td>
          <td class="text-error">No</td>
        </tr>
        <tr>
          <th>License</th>
          <td class="text-success"><a class="link" href="https://github.com/saadeghi/daisyui/blob/master/LICENSE" rel="nofollow" target="_blank">MIT</a></td>
          <td class="text-error"><a class="link" href="https://tailwindui.com/license" rel="nofollow" target="_blank">Limited users and limited distribution</a></td>
        </tr>
        <tr>
          <th>Themes</th>
          <td class="text-success">Multiple themes + custom themes</td>
          <td class="text-error">No themes included but you can customize class names</td>
        </tr>
        <tr>
          <th>Enviroment</th>
          <td class="text-success">Pure CSS. Works everywhere</td>
          <td class="text-error">Many components have JS dependencies (Vue and React)</td>
        </tr>
        <tr>
          <th>How to install</th>
          <td><code class="font-mono badge badge-ghost">npm install daisyui</code></td>
          <td>—</td>
        </tr>
        <tr>
          <th>How to use</th>
          <td class="text-success">One class name for each component</td>
          <td class="text-error">Copy/paste HTML with many class names</td>
        </tr>
        <tr>
          <th>How to customize</th>
          <td>
            <div class="text-success">Add/remove utility classes</div>
            <div class="text-success">Also customizable from config file</div>
            <div class="text-success">Also customizable using <span class="badge badge-success">@apply</span></div>
          </td>
          <td class="text-success">Add/remove utility classes</td>
        </tr>
        <tr>
          <th>Dependencies</th>
          <td class="text-success">No dependencies</td>
          <td class="text-error">Headless UI, Hero Icons, Vue or React</td>
        </tr>
        <tr>
          <th>Works without <br/>Tailwind CSS?</th>
          <td>
            <div class="text-success">Yes. As a component library</div>
            <div class="text-success">Also works with other utility-first libraries</div>
          </td>
          <td class="text-error">Needs Tailwind CSS</td>
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
        title: "Tailwind UI free alternative",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Tailwind UI alternative - Compare Tailwind UI vs daisyUI'
          }
        ]
      }
    }
  }
</script>
