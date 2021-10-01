<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Customize components</span>
      <span>with utility classes</span>
    </h2>
    <Wrapper nocode>
      <p class="max-w-4xl mb-4">
        daisyUI components comes with many variants necessary for design systems and you won't usually need to customize anything but you can still add Tailwind's utility classes to customize components.
      </p>

      <p class="my-4">
        Let's say, you wanna customize this button:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-info">btn btn-primary</span>&#x22;&#x3E;daisyUI Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="btn btn-primary">daisyUI Button</button>
      </div>

      <p class="max-w-4xl my-4">
        You just need to add Tailwind's utility classes:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>&#x3C;button class=&#x22;<span class="text-info">btn btn-primary</span> <span class="text-success">rounded-full</span>&#x22;&#x3E;daisyUI Button customized&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="rounded-full btn btn-primary">daisyUI Button customized</button>
      </div>

      <p class="max-w-4xl my-4">
        You can also customize components on your CSS file, using Tailwind's <span class="badge badge-outline">@apply</span> directive.
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code>.btn {
      <span class="text-success">@apply rounded-full</span>;
    }</code></pre>
        </div>
      </div>

      <h2 class="mt-20 text-5xl font-bold">
        <span class="text-primary">Design components</span>
        <span>from scratch</span>
      </h2>

      <p class="max-w-4xl my-4">
        If you want to design everything and apply your very own style, you can use daisyUI <span class="badge badge-outline">base</span> (unstyled UI) version. It has no colors and no visual style but components will have a skeleton style which makes your job easier.
      </p>

      <p class="max-w-4xl my-4">
        On your <span class="badge badge-outline">tailwind.config.js</span> file, you just need to set <span class="badge badge-outline">styled: false</span>.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>module.exports = {

      plugins: [
        require('daisyui'),
      ],
      daisyui: {
        <span class="badge badge-primary">styled: false,</span>
      },

    }</code></pre>
        </div>
      </div>

      <p class="max-w-4xl my-4">
        Or use <span class="badge badge-outline">base.css</span> from CDN:
      </p>


      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/base.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" /&gt;</span></code></pre>
        </div>
      </div>

    </Wrapper>





    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/default-themes" class="text-xs btn-lg btn lg:text-lg">
        Next: Themes
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
    }
  },
  head() {
    return {
      title: "daisyUI — Customize components",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'How to customize daisyUI Tailwind CSS components'
        }
      ]
    }
  }
}
</script>
