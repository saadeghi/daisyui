<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Add Themes</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4 text-base-content text-opacity-60">
        DaisyUI uses HSL color system for better theming.
      </p>
      <p class="mb-4 prose">
        You can set up 3 values of H,S,L (hue, saturation, lightness) for each color in your CSS file. It can be your main Tailwind CSS file or a file you @import to your main CSS file.
        <br>You can easily do this on <NuxtLink to="/core/colors">DaisyUI Color Generator</NuxtLink>
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>:root {

      <img src="https://via.placeholder.com/15/793ef9/000000?text=+" class="inline-block rounded"> --p: 340 82% 62%; <span class="text-neutral-content text-opacity-20">/* Primary color */</span>
      <img src="https://via.placeholder.com/15/570df8/000000?text=+" class="inline-block rounded"> --pf: 340 82% 52%; <span class="text-neutral-content text-opacity-20">/* Primary color - focused */</span>
      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --pc: 0 0% 100%; <span class="text-neutral-content text-opacity-20">/* Foreground content color to use on primary color */</span>

      <img src="https://via.placeholder.com/15/ff24cc/000000?text=+" class="inline-block rounded"> --s: 262 52% 56%; <span class="text-neutral-content text-opacity-20">/* Secondary color */</span>
      <img src="https://via.placeholder.com/15/f000b8/000000?text=+" class="inline-block rounded"> --sf: 262 52% 46%; <span class="text-neutral-content text-opacity-20">/* Secondary color - focused */</span>
      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --sc: 0 0% 100%; <span class="text-neutral-content text-opacity-20">/* Foreground content color to use on secondary color */</span>

      <img src="https://via.placeholder.com/15/60d7cb/000000?text=+" class="inline-block rounded"> --a: 199 98% 58%; <span class="text-neutral-content text-opacity-20">/* Accent color */</span>
      <img src="https://via.placeholder.com/15/37cdbe/000000?text=+" class="inline-block rounded"> --af: 199 98% 48%; <span class="text-neutral-content text-opacity-20">/* Accent color - focused */</span>
      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --ac: 0 0% 100%; <span class="text-neutral-content text-opacity-20">/* Foreground content color to use on accent color */</span>

      <img src="https://via.placeholder.com/15/1f2937/000000?text=+" class="inline-block rounded"> --n: 215 28% 17%; <span class="text-neutral-content text-opacity-20">/* Neutral color */</span>
      <img src="https://via.placeholder.com/15/111827/000000?text=+" class="inline-block rounded"> --nf: 221 39% 11%; <span class="text-neutral-content text-opacity-20">/* Neutral color - focused */</span>
      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --nc: 0 0% 100%; <span class="text-neutral-content text-opacity-20">/* Foreground content color to use on neutral color */</span>

      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --b1: 0 0% 100%; <span class="text-neutral-content text-opacity-20">/* Base color of page, used for blank backgrounds */</span>
      <img src="https://via.placeholder.com/15/f9fafb/000000?text=+" class="inline-block rounded"> --b2: 210 20% 98%; <span class="text-neutral-content text-opacity-20">/* Base color, a little darker */</span>
      <img src="https://via.placeholder.com/15/d1d5db/000000?text=+" class="inline-block rounded"> --b3: 216 12% 84%; <span class="text-neutral-content text-opacity-20">/* Base color, even more darker */</span>
      <img src="https://via.placeholder.com/15/1f2937/000000?text=+" class="inline-block rounded"> --bc: 215 28% 17%; <span class="text-neutral-content text-opacity-20">/* Foreground content color to use on base color */</span>

      <img src="https://via.placeholder.com/15/2094f3/000000?text=+" class="inline-block rounded"> --in: 207 90% 54%; <span class="text-neutral-content text-opacity-20">/* Info */</span>
      <img src="https://via.placeholder.com/15/009485/000000?text=+" class="inline-block rounded"> --su: 174 100% 29%; <span class="text-neutral-content text-opacity-20">/* Success */</span>
      <img src="https://via.placeholder.com/15/ff9900/000000?text=+" class="inline-block rounded"> --wa: 36 100% 50%; <span class="text-neutral-content text-opacity-20">/* Warning */</span>
      <img src="https://via.placeholder.com/15/ff5724/000000?text=+" class="inline-block rounded"> --er: 14 100% 57%; <span class="text-neutral-content text-opacity-20">/* Error */</span>
    }

    <span class="text-neutral-content text-opacity-20">/* Let's add a second theme */</span>
    [data-theme='dark'] {
      <img src="https://via.placeholder.com/15/3d4451/000000?text=+" class="inline-block rounded"> --b1: 219 14% 28%;
      <img src="https://via.placeholder.com/15/2a2e37/000000?text=+" class="inline-block rounded"> --b2: 222 13% 19%;
      <img src="https://via.placeholder.com/15/16181d/000000?text=+" class="inline-block rounded"> --b3: 223 14% 10%;
      <img src="https://via.placeholder.com/15/ebecf0/000000?text=+" class="inline-block rounded"> --bc: 228 14% 93%;

      <img src="https://via.placeholder.com/15/2a2e37/000000?text=+" class="inline-block rounded"> --n: 222 13% 19%%;
      <img src="https://via.placeholder.com/15/16181d/000000?text=+" class="inline-block rounded"> --nf: 223 14% 10%%;
      <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --nc: 0 0% 100%%;

      <img src="https://via.placeholder.com/15/793ef9/000000?text=+" class="inline-block rounded"> --p: 259 94% 61%;
      <img src="https://via.placeholder.com/15/570df8/000000?text=+" class="inline-block rounded"> --pf: 259 94% 51%;
    }</code></pre>
        </div>
      </div>

      <p class="mb-4 prose">
        As you can see, we are not overwriting all colors for dark theme we changed base colors to dark colors, then we made neutral colors darker and we made primary colors lighter so it fits on dark base color.
      </p>
      <p class="my-4 font-bold">
        You can add more themes
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>[data-theme='retro'] {
      <img src="https://via.placeholder.com/15/ef9995/000000?text=+" class="inline-block rounded"> --p: 3 74% 76%;
      <img src="https://via.placeholder.com/15/e86f68/000000?text=+" class="inline-block rounded"> --pf: 3 74% 66%;
      <img src="https://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --pc: 345 5% 15%;

      <img src="https://via.placeholder.com/15/a4cbb4/000000?text=+" class="inline-block rounded"> --s: 145 27% 72%;
      <img src="https://via.placeholder.com/15/84b89a/000000?text=+" class="inline-block rounded"> --sf: 145 27% 62%;
      <img src="https://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --sc: 345 5% 15%;

      <img src="https://via.placeholder.com/15/ebdc99/000000?text=+" class="inline-block rounded"> --a: 49 67% 76%;
      <img src="https://via.placeholder.com/15/e2cd6e/000000?text=+" class="inline-block rounded"> --af: 49 67% 66%;
      <img src="https://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --ac: 345 5% 15%;

      <img src="https://via.placeholder.com/15/7d7259/000000?text=+" class="inline-block rounded"> --n: 42 17% 42%;
      <img src="https://via.placeholder.com/15/454035/000000?text=+" class="inline-block rounded"> --nf: 41 13% 24%;
      <img src="https://via.placeholder.com/15/e4d8b4/000000?text=+" class="inline-block rounded"> --nc: 45 47% 80%;

      <img src="https://via.placeholder.com/15/e4d8b4/000000?text=+" class="inline-block rounded"> --b1: 45 47% 80%;
      <img src="https://via.placeholder.com/15/d2c59d/000000?text=+" class="inline-block rounded"> --b2: 45 37% 72%;
      <img src="https://via.placeholder.com/15/c6b386/000000?text=+" class="inline-block rounded"> --b3: 42 36% 65%;
      <img src="https://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --bc: 345 5% 15%;

      <img src="https://via.placeholder.com/15/2094f3/000000?text=+" class="inline-block rounded"> --in: 207 90% 54%;
      <img src="https://via.placeholder.com/15/009485/000000?text=+" class="inline-block rounded"> --su: 174 100% 29%;
      <img src="https://via.placeholder.com/15/ff9900/000000?text=+" class="inline-block rounded"> --wa: 36 100% 50%;
      <img src="https://via.placeholder.com/15/ff5724/000000?text=+" class="inline-block rounded"> --er: 14 100% 57%;
    }</code></pre>
        </div>
      </div>




      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Other variables</span>
      </h2>

      <p class="my-4 text-lg">
        You can also set more variables to customize your theme.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>--rounded-box: 1rem; <span class="text-neutral-content text-opacity-20">/* border-radius for cards and other big elements */</span>
    --rounded-btn: 0.5rem; <span class="text-neutral-content text-opacity-20">/* border-radius for buttons and similar elements */</span>
    --rounded-badge: 9999px; <span class="text-neutral-content text-opacity-20">/* border-radius for badge and other small elements */</span>

    --animation-btn: 0.25s; <span class="text-neutral-content text-opacity-20">/* bounce animation time for button */</span>
    --animation-input: .4s; <span class="text-neutral-content text-opacity-20">/* bounce animation time for checkbox, toggle, etc */</span>

    --padding-card: 2rem; <span class="text-neutral-content text-opacity-20">/* default card-body padding */</span>

    --btn-text-case: uppercase; <span class="text-neutral-content text-opacity-20">/* default text case for buttons */</span>
    --navbar-padding: .5rem; <span class="text-neutral-content text-opacity-20">/* default padding for navbar */</span>
    --border-btn: 1px; <span class="text-neutral-content text-opacity-20">/* default border size for button */</span>
    --focus-ring: 2px; <span class="text-neutral-content text-opacity-20">/* focus ring size for button and inputs */</span>
    --focus-ring-offset: 2px; <span class="text-neutral-content text-opacity-20">/* focus ring offset size for button and inputs */</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Respecting OS color scheme</span>
      </h2>

      <p class="my-4 text-lg">
        If you want to show dark mode for people who are using a dark mode on their OS:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>@media (prefers-color-scheme: dark){
      :root{
        --d: 223 14% 10%;
        <span class="text-neutral-content text-opacity-20">/* ...rest of colors */</span>
      }
    }</code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">How to enable/change themes?</span>
      </h2>

      <p class="my-4 text-lg prose">
        You just need to add <span class="badge badge-outline">data-theme="dark"</span> to your <span class="badge badge-outline">&lt;html&gt;</span> tag. Easiest way to handle it with JavaScript is to this tiny library: <a href="https://github.com/saadeghi/theme-change" target="_blank">them-change</a>
      </p>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Force a specific theme for a section</span>
      </h2>
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
        <span class="text-primary">PurgeCSS Whitelist</span>
      </h2>
      <p class="my-4 text-lg prose">
        If you're using Purge CSS, you might need to safe list your CSS using the comments below because your secondary themes will be purged.
      </p>
      <p class="my-4 text-lg font-bold">
        Add this to your PurgeCSS config:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>options: {
      safelist: [
        <span class="badge badge-primary">/data-theme$/,</span>
      ],
    },</code></pre>
        </div>
      </div>

      <p class="my-4 text-lg font-bold">
        Or use CSS comments:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code><span class="badge badge-primary">/*! purgecss start ignore */</span>
    [data-theme='dark'] {
      <span class="text-neutral-content text-opacity-20">...</span>
    }
    <span class="badge badge-primary">/*! purgecss end ignore */</span></code></pre>
        </div>
      </div>


    </Wrapper>






    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/features" class="text-xs btn-lg btn lg:text-lg">
        Next: features
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
  }
}
</script>
