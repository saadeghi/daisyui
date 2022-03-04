<script>
  let cleanHtmlMeme = false
</script>

<div class="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
  <div class="hero-content px-4 text-center md:px-0">
    <div>
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">Clean HTML</h2>
      <h3 class="mb-5 text-3xl font-bold">with component classes</h3>
      <p class="mx-auto mb-5 w-full max-w-lg">
        Your HTML doesn't need to be messy. daisyUI adds component classes to Tailwind CSS. Classes like
        <span class="badge badge-outline">btn</span>
        ,
        <span class="badge badge-outline">card</span>
        , etc... No need to deal with hundreds of utility classes.
      </p>
      <p class="mx-auto mt-20 w-full max-w-lg" />
      <div class="font-bold">Creating a button</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="mt-10 mb-20 flex flex-col lg:flex-row">
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
            <pre><code>&lt;a class="<span class="text-amber-400">inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out bg-indigo-600 
    rounded-md cursor-pointer
    hover:bg-indigo-700</span>"&gt;Button&lt;/a&gt;</code></pre>
          </div>
          <div class="mt-4 flex h-16 items-start justify-center"><button class="inline-block cursor-pointer rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-indigo-700">Button</button></div>
        </div>
        <div class="divider text-base-content/50 lg:divider-horizontal">VS</div>
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md"><pre><code>&lt;a class="<span class="text-teal-500">btn btn-primary</span>"&gt;Button&lt;/a&gt;</code></pre></div>
          <div class="mt-4 flex h-16 items-start justify-center"><button class="btn btn-primary">Button</button></div>
        </div>
      </div>
      <p class="mx-auto mt-20 w-full max-w-lg" />
      <div class="font-bold">Creating a toggle</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="mt-10 mb-20 flex flex-col lg:flex-row">
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
            <pre><code>&lt;div class="<span class="text-amber-400">relative</span>"&gt;
    &lt;input type="checkbox" class="<span class="text-amber-400">peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6</span>"/&gt;
    &lt;span class="<span class="text-amber-400">peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300</span>"&gt;&lt;/span&gt;
  &lt;/div&gt;</code></pre>
          </div>
          <div class="mt-4 flex h-16 items-start justify-center">
            <div class="relative">
              <input aria-label="Toggle" type="checkbox" checked="checked" class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-gray-900" />
              <span class="pointer-events-none absolute top-1 left-1 block h-4 w-4 rounded-full bg-gray-300 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
            </div>
          </div>
        </div>
        <div class="divider text-base-content/50 lg:divider-horizontal">VS</div>
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code relative mx-auto w-full max-w-xs flex-grow overflow-hidden shadow-lg sm:max-w-md">
            <pre><code>&lt;input type="checkbox" class="<span class="text-teal-500">toggle</span>"/&gt;</code></pre>
            <img loading="lazy" width="666" height="375" class="pointer-events-none absolute bottom-0 right-[-6.1em] hidden -rotate-90 transition duration-1000 lg:block" class:translate-x-60={!cleanHtmlMeme} class:translate-x-0={cleanHtmlMeme} src="/thats-quiet-big.png" alt="That's quiet big" />
          </div>
          <div class="mt-4 flex h-16 items-start justify-center">
            <div>
              <input aria-label="Toggle" type="checkbox" checked="checked" class="toggle" on:click={() => (cleanHtmlMeme = true)} />
            </div>
          </div>
        </div>
      </div>
      <p class="mx-auto w-full max-w-lg" />
      <div class="font-bold">Creating a menu component</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="mt-10 mb-20 flex flex-col lg:flex-row">
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
            <pre><code>&lt;ul class="py-3 bg-gray-100 rounded-xl"&gt;
    &lt;li&gt;
      &lt;span class="<span class="text-amber-400">block px-5 py-1 text-xs text-gray-400 font-bold</span>"&gt;Menu Title&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-amber-400">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-pointer</span>"&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-amber-400">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-pointer</span>"&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-amber-400">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-pointer</span>"&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</code></pre>
          </div>
          <div class="mt-4 flex items-start justify-center overflow-hidden">
            <ul class="rounded-xl bg-gray-100 p-3">
              <li><span class="block px-5 py-1 text-xs font-bold text-gray-400">Menu Title</span></li>
              <li><a href="/" class="block cursor-pointer rounded-lg px-5 py-3 text-gray-900 outline-none hover:bg-gray-200 active:bg-indigo-600 active:text-white">First Menu Item</a></li>
              <li><a href="/" class="block cursor-pointer rounded-lg px-5 py-3 text-gray-900 outline-none hover:bg-gray-200 active:bg-indigo-600 active:text-white">Second Menu Item</a></li>
              <li><a href="/" class="block cursor-pointer rounded-lg px-5 py-3 text-gray-900 outline-none hover:bg-gray-200 active:bg-indigo-600 active:text-white">Third Menu Item</a></li>
            </ul>
          </div>
        </div>
        <div class="divider text-base-content/50 lg:divider-horizontal">VS</div>
        <div class="flex w-full flex-col text-left">
          <div class="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
            <pre class="pr-4"><code>&lt;ul class="<span class="text-teal-500">menu</span> p-3 bg-base-200 rounded-xl"&gt;
    &lt;li class="<span class="text-teal-500">menu-title</span>"&gt;
      &lt;span&gt;Menu Title&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</code></pre>
          </div>
          <div class="mt-4 flex items-start justify-center">
            <ul class="menu bg-base-200 rounded-xl p-3">
              <li class="menu-title"><span>Menu Title</span></li>
              <li><a href="/">First Menu Item</a></li>
              <li><a href="/">Second Menu Item</a></li>
              <li><a href="/">Third Menu Item</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-6 mb-10 flex w-full justify-center"><a href="/components" class="btn btn-primary btn-wide">See All Components</a></div>
    </div>
  </div>
</div>
