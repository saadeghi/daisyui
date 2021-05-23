<template>
  <div class="min-h-screen hero bg-base-100 text-base-content max-w-md md:max-w-full mx-auto">
    <div class="px-0 text-center hero-content">
      <div>

        <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
          Clean HTML
        </h2>
        <h3 class="mb-5 text-3xl font-bold">with component classes</h3>
        <p class="w-full mx-auto mb-5 max-w-lg">
          Your HTML doesn't need to be messy. DaisyUI adds component classes to
          Tailwind CSS. Classes like
          <span class="badge badge-outline">btn</span>,
          <span class="badge badge-outline">card</span>, etc... No need to deal
          with hundreds of utility classes.
        </p>


        <p class="w-full mx-auto max-w-lg mt-20">
          Creating a button <br>using only utility classes vs using DaisyUI component classes
        </p>

        <div class="flex flex-col mt-10 mb-20 lg:flex-row">
          <div class="text-left flex flex-col w-full">
            <div class="shadow-lg mockup-code flex-grow max-w-xs sm:max-w-md w-full mx-auto">
              <pre><code>&#x3C;a class=&#x22;<span class="text-warning">inline-block px-4 py-3
      text-sm font-semibold text-center
      text-white uppercase transition
      duration-200 ease-in-out
      bg-indigo-500 rounded-md
      cursor-pointer
      hover:bg-indigo-600</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>
            <div class="flex justify-center items-start mt-4 h-16">
              <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
                Button
              </button>
            </div>
          </div>

          <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">
            VS
          </div>
          <div class="divider lg:hidden text-base-content text-opacity-30">
            VS
          </div>
          <div class="text-left flex flex-col w-full">
            <div class="shadow-lg mockup-code flex-grow max-w-xs sm:max-w-md w-full mx-auto">
              <pre><code>&#x3C;a class=&#x22;<span class="text-info">btn btn-primary</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>
            <div class="flex justify-center items-start mt-4 h-16">
              <button class="btn btn-primary">
                Button
              </button>
            </div>
          </div>
        </div>



        <p class="w-full mx-auto max-w-lg">
          Creating a menu component <br>using only utility classes vs using DaisyUI component classes
        </p>


        <div class="flex flex-col mt-10 mb-20 lg:flex-row">
          <div class="text-left flex flex-col w-full">
            <div class="shadow-lg mockup-code flex-grow max-w-xs sm:max-w-md w-full mx-auto">
              <pre><code>&lt;ul class=&quot;py-3 bg-gray-100 rounded-xl&quot;&gt;
      &lt;li&gt;
        &lt;span class=&quot;<span class="text-warning">block px-5 p-3 text-xs text-gray-400</span>&quot;&gt;Menu Title&lt;/span&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;a class=&quot;<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>&quot;&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class=&quot;<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>&quot;&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class=&quot;<span class="text-warning">block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer</span>&quot;&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;</code></pre>
            </div>
            <div class="flex justify-center items-start mt-4 overflow-hidden">
              <ul class="p-3 bg-gray-100 rounded-xl">
                <li>
                  <span class="block px-5 py-1 text-xs text-gray-400">Menu Title</span>
                </li>
                <li><a href="#" v-on:click.stop.prevent class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer">First Menu Item</a></li>
                <li><a href="#" v-on:click.stop.prevent class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer">Second Menu Item</a></li>
                <li><a href="#" v-on:click.stop.prevent class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white outline-none cursor-pointer">Third Menu Item</a></li>
              </ul>
            </div>
          </div>

          <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">
            VS
          </div>
          <div class="divider lg:hidden text-base-content text-opacity-30">
            VS
          </div>
          <div class="text-left flex flex-col w-full">
            <div class="shadow-lg mockup-code flex-grow max-w-xs sm:max-w-md w-full mx-auto">
              <pre><code>&lt;ul class=&quot;<span class="text-info">menu</span> p-3 bg-base-200 rounded-xl&quot;&gt;
      &lt;li class=&quot;<span class="text-info">menu-title</span>&quot;&gt;
        &lt;span&gt;Menu Title&lt;/span&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;a&gt;First Menu Item&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a&gt;Second Menu Item&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a&gt;Third Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;</code></pre>
            </div>
            <div class="flex justify-center items-start mt-4">
              <ul class="menu p-3 bg-base-200 rounded-xl">
                <li class="menu-title"><span>Menu Title</span></li>
                <li><a href="#" v-on:click.stop.prevent>First Menu Item</a></li>
                <li><a href="#" v-on:click.stop.prevent>Second Menu Item</a></li>
                <li><a href="#" v-on:click.stop.prevent>Third Menu Item</a></li>
              </ul>
            </div>
          </div>
        </div>







      </div>
    </div>
  </div>
</template>
