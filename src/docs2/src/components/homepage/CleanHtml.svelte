<div class="max-w-md min-h-screen mx-auto hero bg-base-100 text-base-content md:max-w-full">
  <div class="px-4 text-center md:px-0 hero-content">
    <div>
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">Clean HTML</h2>
      <h3 class="mb-5 text-3xl font-bold">with component classes</h3>
      <p class="w-full max-w-lg mx-auto mb-5">
        Your HTML doesn't need to be messy. daisyUI adds component classes to Tailwind CSS. Classes like
        <span class="badge badge-outline">btn</span>,
        <span class="badge badge-outline">card</span>, etc... No need to deal with hundreds of utility classes.
      </p>
      <p class="w-full max-w-lg mx-auto mt-20" />
      <div class="font-bold">Creating a button</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="flex flex-col mt-10 mb-20 lg:flex-row">
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md">
            <pre><code
                >&lt;a class="<span class="text-warning"
                  >inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-600 rounded-md
    cursor-pointer
    hover:bg-indigo-700</span
                >"&gt;Button&lt;/a&gt;</code></pre>
          </div>
          <div class="flex items-start justify-center h-16 mt-4"><button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"> Button </button></div>
        </div>
        <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">VS</div>
        <div class="divider lg:hidden text-base-content text-opacity-30">VS</div>
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md"><pre><code>&lt;a class="<span class="text-info">btn btn-primary</span>"&gt;Button&lt;/a&gt;</code></pre></div>
          <div class="flex items-start justify-center h-16 mt-4"><button class="btn btn-primary"> Button </button></div>
        </div>
      </div>
      <p class="w-full max-w-lg mx-auto mt-20" />
      <div class="font-bold">Creating a toggle</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="flex flex-col mt-10 mb-20 lg:flex-row">
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md">
            <pre><code
                >&lt;div class="<span class="text-warning">relative</span>"&gt;
    &lt;input type="checkbox" class="<span class="text-warning"
                      >peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6</span
                    >"/&gt;
    &lt;span class="<span class="text-warning"
                      >peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300</span
                    >"&gt;&lt;/span&gt;
  &lt;/div&gt;</code></pre>
          </div>
          <div class="flex items-start justify-center h-16 mt-4">
            <div class="relative">
              <input type="checkbox" checked="checked" class="w-12 h-6 border border-gray-300 rounded-full appearance-none cursor-pointer peer checked:border-gray-900" />
              <span class="absolute block w-4 h-4 transition-all duration-200 bg-gray-300 rounded-full pointer-events-none peer-checked:left-7 peer-checked:bg-gray-900 top-1 left-1" />
            </div>
          </div>
        </div>
        <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">VS</div>
        <div class="divider lg:hidden text-base-content text-opacity-30">VS</div>
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md"><pre><code>&lt;input type="checkbox" class="<span class="text-info">toggle</span>"/&gt;</code></pre></div>
          <div class="flex items-start justify-center h-16 mt-4"><input type="checkbox" checked="checked" class="toggle" /></div>
        </div>
      </div>
      <p class="w-full max-w-lg mx-auto" />
      <div class="font-bold">Creating a menu component</div>
      using only utility classes vs using daisyUI component classes
      <p />
      <div class="flex flex-col mt-10 mb-20 lg:flex-row">
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md">
            <pre><code
                >&lt;ul class="py-3 bg-gray-100 rounded-xl"&gt;
    &lt;li&gt;
      &lt;span class="<span class="text-warning">block px-5 py-1 text-xs text-gray-400 font-bold</span>"&gt;Menu Title&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>"&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>"&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>"&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</code></pre>
          </div>
          <div class="flex items-start justify-center mt-4 overflow-hidden">
            <ul class="p-3 bg-gray-100 rounded-xl">
              <li><span class="block px-5 py-1 text-xs font-bold text-gray-400">Menu Title</span></li>
              <li><a href="/" class="block px-5 py-3 text-gray-900 rounded-lg outline-none cursor-pointer hover:bg-gray-200 focus:bg-indigo-500 focus:text-white">First Menu Item</a></li>
              <li><a href="/" class="block px-5 py-3 text-gray-900 rounded-lg outline-none cursor-pointer hover:bg-gray-200 focus:bg-indigo-500 focus:text-white">Second Menu Item</a></li>
              <li><a href="/" class="block px-5 py-3 text-gray-900 rounded-lg outline-none cursor-pointer hover:bg-gray-200 focus:bg-indigo-500 focus:text-white">Third Menu Item</a></li>
            </ul>
          </div>
        </div>
        <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">VS</div>
        <div class="divider lg:hidden text-base-content text-opacity-30">VS</div>
        <div class="flex flex-col w-full text-left">
          <div class="flex-grow w-full max-w-xs mx-auto shadow-lg mockup-code sm:max-w-md">
            <pre class="pr-4"><code
                >&lt;ul class="<span class="text-info">menu</span> p-3 bg-base-200 rounded-xl"&gt;
    &lt;li class="<span class="text-info">menu-title</span>"&gt;
      &lt;span&gt;Menu Title&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</code></pre>
          </div>
          <div class="flex items-start justify-center mt-4">
            <ul class="p-3 menu bg-base-200 rounded-xl">
              <li class="menu-title"><span>Menu Title</span></li>
              <li><a href="/">First Menu Item</a></li>
              <li><a href="/">Second Menu Item</a></li>
              <li><a href="/">Third Menu Item</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full mt-6 mb-10"><a href="/components/button" class="btn btn-primary btn-wide"> See All Components </a></div>
    </div>
  </div>
</div>
