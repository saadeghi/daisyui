<template>
  <div>

    <div class="mb-10 tabs">
      <NuxtLink to="/docs/default-themes" class="tab tab-lifted tab-lg"><Icon glyph="color-swatch" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Use themes</NuxtLink>
      <NuxtLink to="/docs/add-themes" class="tab tab-lifted tab-lg tab-active"><Icon glyph="document-add" class="inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6" />Add theme</NuxtLink>
      <span class="flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"></span>
    </div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Add theme</span>
    </h2>

      <br>Add your custom themes in tailwind.config.js:
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code>daisyui: {
      themes: [
        {
          'mytheme': { <span class="text-neutral-content text-opacity-30">                         /* your theme name */</span>
            <img src="https://via.placeholder.com/15/a991f7/000000?text=+" class="inline-block rounded"> 'primary' : '#a991f7',<span class="text-neutral-content text-opacity-30">           /* Primary color */</span>
            <img src="https://via.placeholder.com/15/8462f4/000000?text=+" class="inline-block rounded"> 'primary-focus' : '#8462f4',<span class="text-neutral-content text-opacity-30">     /* Primary color - focused */</span>
            <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> 'primary-content' : '#ffffff',<span class="text-neutral-content text-opacity-30">   /* Foreground content color to use on primary color */</span>

            <img src="https://via.placeholder.com/15/f6d860/000000?text=+" class="inline-block rounded"> 'secondary' : '#f6d860',<span class="text-neutral-content text-opacity-30">         /* Secondary color */</span>
            <img src="https://via.placeholder.com/15/f3cc30/000000?text=+" class="inline-block rounded"> 'secondary-focus' : '#f3cc30',<span class="text-neutral-content text-opacity-30">   /* Secondary color - focused */</span>
            <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> 'secondary-content' : '#ffffff',<span class="text-neutral-content text-opacity-30"> /* Foreground content color to use on secondary color */</span>

            <img src="https://via.placeholder.com/15/37cdbe/000000?text=+" class="inline-block rounded"> 'accent' : '#37cdbe',<span class="text-neutral-content text-opacity-30">            /* Accent color */</span>
            <img src="https://via.placeholder.com/15/2aa79b/000000?text=+" class="inline-block rounded"> 'accent-focus' : '#2aa79b',<span class="text-neutral-content text-opacity-30">      /* Accent color - focused */</span>
            <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> 'accent-content' : '#ffffff',<span class="text-neutral-content text-opacity-30">    /* Foreground content color to use on accent color */</span>

            <img src="https://via.placeholder.com/15/3d4451/000000?text=+" class="inline-block rounded"> 'neutral' : '#3d4451',<span class="text-neutral-content text-opacity-30">           /* Neutral color */</span>
            <img src="https://via.placeholder.com/15/2a2e37/000000?text=+" class="inline-block rounded"> 'neutral-focus' : '#2a2e37',<span class="text-neutral-content text-opacity-30">     /* Neutral color - focused */</span>
            <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> 'neutral-content' : '#ffffff',<span class="text-neutral-content text-opacity-30">   /* Foreground content color to use on neutral color */</span>

            <img src="https://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> 'base-100' : '#ffffff',<span class="text-neutral-content text-opacity-30">          /* Base color of page, used for blank backgrounds */</span>
            <img src="https://via.placeholder.com/15/f9fafb/000000?text=+" class="inline-block rounded"> 'base-200' : '#f9fafb',<span class="text-neutral-content text-opacity-30">          /* Base color, a little darker */</span>
            <img src="https://via.placeholder.com/15/d1d5db/000000?text=+" class="inline-block rounded"> 'base-300' : '#d1d5db',<span class="text-neutral-content text-opacity-30">          /* Base color, even more darker */</span>
            <img src="https://via.placeholder.com/15/1f2937/000000?text=+" class="inline-block rounded"> 'base-content' : '#1f2937',<span class="text-neutral-content text-opacity-30">      /* Foreground content color to use on base color */</span>

            <img src="https://via.placeholder.com/15/2094f3/000000?text=+" class="inline-block rounded"> 'info' : '#2094f3',<span class="text-neutral-content text-opacity-30">              /* Info */</span>
            <img src="https://via.placeholder.com/15/009485/000000?text=+" class="inline-block rounded"> 'success' : '#009485',<span class="text-neutral-content text-opacity-30">           /* Success */</span>
            <img src="https://via.placeholder.com/15/ff9900/000000?text=+" class="inline-block rounded"> 'warning' : '#ff9900',<span class="text-neutral-content text-opacity-30">           /* Warning */</span>
            <img src="https://via.placeholder.com/15/ff5724/000000?text=+" class="inline-block rounded"> 'error' : '#ff5724',<span class="text-neutral-content text-opacity-30">             /* Error */</span>
          },
        },
      ],
    },</code></pre>
        </div>
      </div>

    <h2 class="my-6 text-2xl font-bold">
      <span>CSS variables you can use in themes</span>
    </h2>

    <p class="my-4 text-lg">
      You can also set more variables to customize your theme.
    </p>

    <div class="w-full max-w-4xl my-2">
      <div class="shadow-lg mockup-code">
        <pre><code>'--rounded-box': '1rem',        <span class="text-neutral-content text-opacity-20">/* border-radius for cards and other big elements */</span>
    '--rounded-btn': '0.5rem',      <span class="text-neutral-content text-opacity-20">/* border-radius for buttons and similar elements */</span>
    '--rounded-badge': '1.9rem',    <span class="text-neutral-content text-opacity-20">/* border-radius for badge and other small elements */</span>

    '--animation-btn': '0.25s',     <span class="text-neutral-content text-opacity-20">/* bounce animation time for button */</span>
    '--animation-input': '.2s',     <span class="text-neutral-content text-opacity-20">/* bounce animation time for checkbox, toggle, etc */</span>

    '--padding-card': '2rem',       <span class="text-neutral-content text-opacity-20">/* default card-body padding */</span>

    '--btn-text-case': 'uppercase', <span class="text-neutral-content text-opacity-20">/* default text case for buttons */</span>
    '--navbar-padding': '.5rem',    <span class="text-neutral-content text-opacity-20">/* default padding for navbar */</span>
    '--border-btn': '1px',          <span class="text-neutral-content text-opacity-20">/* default border size for button */</span></code></pre>
      </div>
    </div>




    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/config" class="text-xs btn-lg btn lg:text-lg">
        Next: Config
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
      title: "daisyUI — Add Themes",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'How to create new daisyUI theme? How to add new custom theme to daisyUI'
        }
      ]
    }
  }
}
</script>
