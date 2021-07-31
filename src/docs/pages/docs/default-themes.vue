<template>
  <div>

    <div class="mb-10 tabs">
      <NuxtLink to="/docs/default-themes" class="tab tab-lifted tab-lg tab-active"><Icon glyph="color-swatch" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Use themes</NuxtLink>
      <NuxtLink to="/docs/add-themes" class="tab tab-lifted tab-lg"><Icon glyph="document-add" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Add theme</NuxtLink>
      <span class="flex-grow hidden cursor-default tab tab-lifted tab-lg md:block"></span>
    </div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Use Themes</span>
    </h2>



    <h2 class="mt-20 mb-6 text-3xl font-bold">
      <span>
        How to use a theme?
      </span>
    </h2>


    <p class="mb-4 text-lg">
      Add <span class="badge badge-outline">data-theme="THEME_NAME"</span> to &lt;html&gt; tag.
    </p>
    <p class="my-4 text-lg prose">
      I suggest using <a href="https://github.com/saadeghi/theme-change" target="_blank">theme-change</a>, so you can switch themes and save selected theme in local storage.
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="shadow-lg mockup-code">
        <pre><code><span class="text-opacity-50 text-neutral-content">&lt;html</span> data-theme="cupcake"<span class="text-opacity-50 text-neutral-content">&gt;</span></code></pre>
      </div>
    </div>


    <p class="my-4 text-lg font-bold">
      List of themes:
    </p>
    <div class="w-full max-w-lg my-2">
      <div class="text-sm shadow-lg mockup-code">
        <pre><code>  light (default)</code>
      <code>dark</code>
      <code>cupcake</code>
      <code>bumblebee</code>
      <code>emerald</code>
      <code>corporate</code>
      <code>synthwave</code>
      <code>retro</code>
      <code>cyberpunk</code>
      <code>valentine</code>
      <code>halloween</code>
      <code>garden</code>
      <code>forest</code>
      <code>aqua</code>
      <code>lofi</code>
      <code>pastel</code>
      <code>fantasy</code>
      <code>wireframe</code>
      <code>black</code>
      <code>luxury</code>
      <code>dracula</code></pre>
      </div>
    </div>

    <p class="my-4 text-lg">
      The default theme is <span class="badge badge-outline">light</span> but you can change it from <NuxtLink to="/docs/config" class="link">config</NuxtLink>.
    </p>
    <p class="my-4 text-lg">
      To make your own theme, please see
      <NuxtLink to="/docs/add-themes" class="link">
        add themes
      </NuxtLink>
      page
    </p>


    <h2 class="mt-20 mb-6 text-3xl font-bold">
      <span>
        If you're not using Tailwind JIT
        <a target="_blank" class="text-info" href="https://tailwindcss.com/docs/just-in-time-mode">
          <Icon glyph="info" class="inline w-5 h-5 stroke-current" />
        </a>
      </span>
    </h2>
    <p class="my-4 text-lg">
      You need to safelist <span class="badge badge-outline">data-theme</span> attribute so PurgeCSS doesn't purge it
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-40">module.exports = {</span>

      purge: {
        content: ['yourfiles/**/*.html'],
        options: {
          safelist: [
            <span class="badge badge-primary">/data-theme$/,</span>
          ]
        },
      },

    <span class="text-neutral-content text-opacity-40">}</span></code></pre>
      </div>
    </div>


    <h2 class="mt-20 mb-6 text-3xl font-bold">
      <span>How to disable themes</span>
    </h2>

    <p class="my-4 text-lg">
      If you don't want to include themes, you need to disable <span class="badge badge-outline">themes</span> config.
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-40">module.exports = {</span>

      daisyui: {
        styled: true,
        <span class="badge badge-primary">themes: false,</span>
        rtl: false,
      },

    <span class="text-neutral-content text-opacity-40">}</span></code></pre>
      </div>
    </div>


    <h2 class="mt-20 mb-6 text-3xl font-bold">
      <span>How to use a theme only for a section of page?</span>
    </h2>

    <p class="my-4 text-lg prose">
      Add <span class="badge badge-outline">data-theme="THEME_NAME"</span> to any element and everything inside will have your theme. you can nest themes and there is no limit!
    </p>

    <p class="my-4 text-lg prose">
      You can force a section of your HTML to only use a specific theme.
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="shadow-lg mockup-code">
        <pre><code>&lt;html <span class="badge badge-primary">data-theme="dark"</span>&gt;

      &lt;div <span class="badge badge-primary">data-theme="light"</span>&gt;
        This div will always use light theme
          &lt;span <span class="badge badge-primary">data-theme="retro"</span>&gt;
            This span will always use retro theme!
          &lt;/span&gt;
      &lt;/div&gt;

    &lt;/html&gt;</code></pre>
      </div>
    </div>




    <h2 class="my-6 text-3xl font-bold">
      <span>Using themes from CDN</span>
    </h2>

    <p class="my-4 text-lg">
      Load all themes from CDN:
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="text-sm shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/themes.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
      </div>
    </div>







    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/add-themes" class="text-xs btn-lg btn lg:text-lg">
        Next: Add themes
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
      title: "daisyUI — Use Themes",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS multiple themes - Tailwind CSS dark mode'
        }
      ]
    }
  }
}
</script>
