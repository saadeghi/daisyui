<template>
  <div>
    <div class="bg-base-200 text-base-content">
      <footer class="max-w-6xl px-4 py-20 mx-auto footer">
        <div>
          <div class="inline-block text-3xl font-title">
            <span class="lowercase text-primary">daisy</span><span class="uppercase text-base-content">UI</span>
          </div>
          <p class="opacity-50">Free Components library <br/>for utility first CSS frameworks</p>
        </div>
        <div>
          <span class="footer-title">Guides</span>
          <NuxtLink to="/docs/install" class="link link-hover">How to install</NuxtLink>
          <NuxtLink to="/docs/use" class="link link-hover">How to use components</NuxtLink>
          <NuxtLink to="/docs/customize" class="link link-hover">How to customize</NuxtLink>
          <NuxtLink to="/docs/default-themes" class="link link-hover">How to use themes</NuxtLink>
          <NuxtLink to="/core/colors" class="link link-hover">Color system</NuxtLink>
          <NuxtLink to="/docs/config" class="link link-hover">Config</NuxtLink>
        </div>
        <div>
          <span class="footer-title">Links</span>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui">
            Github
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md">
            Changelog
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui/blob/master/LICENSE">
            License
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md">
            Contributing
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <NuxtLink to="/compare/Bootstrap-alternative" class="link link-hover">Alternatives</NuxtLink>
        </div>
        <div>
          <span class="footer-title">Available on</span>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://www.npmjs.com/package/daisyui">
            NPM
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://unpkg.com/browse/daisyui/">
            Unpkg CDN
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://www.jsdelivr.com/package/npm/daisyui">
            JSdeliver CDN
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
        </div>
        <div>
          <span class="footer-title">Try online</span>
          <NuxtLink to="/tailwindplay" class="group link link-hover" target="_blank" rel="noopener">
            Tailwind Play
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </NuxtLink>
          <a class="group link link-hover" target="_blank" rel="noopener" href="https://codepen.io/saadeghi/pen/gOwWKvv">
            Codepen
            <svg class="inline-block w-4 opacity-0 fill-current group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"/></svg>
          </a>
        </div>
      </footer>
    </div>
    <footer class="px-4 py-10 border-t footer bg-base-200 border-base-300 text-base-content footer-center">
      <div>
        <a href="https://twitter.com/Saadeghi" rel="noopener" target="_blank" class="inline-flex items-center justify-center hover:opacity-90">
          <div class="mr-3 avatar">
            <div class="p-px w-14 h-14 mask mask-squircle bg-neutral">
              <img src="https://github.com/saadeghi.png" class="mask mask-squircle" alt="Pouya Saadeghi" />
            </div>
          </div>
          <div class="text-left">
            <p class="text-xs text-opacity-50 text-base-content">
              Designed and developed by
            </p>
            <h2 class="text-lg font-bold text-base-content">
              Pouya Saadeghi
            </h2>
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>
