<script>
  import ThemeChange from '@components/ThemeChange.svelte'
</script>
<div class="h-16">
  <div class="fixed z-30 flex justify-center w-full h-16 bg-base-100 bg-opacity-90 backdrop-blur">
    <nav class="w-full navbar">
      <div class="flex flex-1 gap-2">
        <a href="/" aria-current="page" aria-label="Homepage" class="px-2 flex-0 btn btn-ghost md:px-4 active nuxt-link-active">
          <div class="inline-flex text-3xl font-title text-primary">
            <span class="lowercase">daisy</span>
            <span class="uppercase text-base-content">UI</span>
          </div>
        </a>
        <a href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md" target="_blank" rel="nofollow" class="font-mono text-xs text-opacity-50">
          <div data-tip="Changelog" class="tooltip tooltip-bottom">
            1.25.3
          </div>
        </a>
      </div>
      <div class="flex-0">
        <ThemeChange/>
        <div title="Github ↗︎" class="items-center flex-none">
          <a aria-label="Github" target="_blank" href="https://github.com/saadeghi/daisyui" rel="noopener" class="normal-case btn btn-ghost drawer-button btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block w-6 h-6 fill-current"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>