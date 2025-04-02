<script>
  let { data, children } = $props()
  import { page } from "$app/stores"
</script>

{#if data.frameworks.find((item) => item.path === $page.url.pathname)}
  <div
    class="rounded-box from-base-content/5 mt-4 flex max-w-[56rem] gap-4 bg-gradient-to-br p-6 sm:mb-4 sm:gap-10 sm:p-10 lg:ms-8 lg:max-w-[54rem]"
  >
    <div class="mt-2 size-10 shrink-0 *:size-full sm:size-20">
      {@html data.frameworks.find((item) => item.path === $page.url.pathname).logo}
    </div>
    <div>
      <div class="ms-2 mb-0.5 text-sm font-bold tracking-wide sm:mb-2 sm:text-lg">
        {data.frameworks.find((item) => item.path === $page.url.pathname).name}
      </div>
      <div class="text-base-content/70 ms-2 mb-0.5 text-[0.625rem] sm:mb-2 sm:text-sm">
        {data.frameworks.find((item) => item.path === $page.url.pathname).desc}
      </div>
      <div>
        <a
          rel="nofollow, noreferrer"
          target="_blank"
          class="btn btn-ghost btn-xs"
          href={data.frameworks.find((item) => item.path === $page.url.pathname).site}
        >
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor"> </circle>
              <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor"> </ellipse>
              <path d="M2 12H22" stroke="currentColor"> </path>
            </g>
          </svg>
          Website
        </a>
        <a
          rel="nofollow, noreferrer"
          target="_blank"
          class="btn btn-ghost btn-xs"
          href={data.frameworks.find((item) => item.path === $page.url.pathname).github}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              ></path></g
            ></svg
          >
          GitHub
        </a>
      </div>
    </div>
  </div>
{/if}

{@render children?.()}
