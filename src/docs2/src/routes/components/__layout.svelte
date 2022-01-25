<script context="module">
  export async function load({ page, fetch }) {
    const post = await fetch(`${page.path}.json`).then((res) => res.json());

    if (page.path != "/components" && (!post || !post.published)) {
      return {
        status: 404,
        error: new Error("Post could not be found"),
      };
    }
    return {
      props: {
        path: page.path,
        post,
      },
    };
  }
</script>

<script>
  import { page } from "$app/stores";
  import SEO from "@components/SEO.svelte";
  export let post;
  export let path;
</script>

{#key $page.path}
  <SEO title={post.title} desc={post.desc} />
{/key}
{#if path == "/components"}
  <slot />
{:else}
  <div class="bg-base-100 drawer drawer-mobile h-[calc(100vh-4rem)]">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <a class="btn" href="/components">back</a>
      <div class="my-10 prose">
        <h1>{post.title ? post.title : ""}</h1>
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="drawer" class="drawer-overlay" />
      <aside class="w-80 bg-base-200">
        <ul class="flex flex-col p-4 pt-2 menu compact">
          <li class="mt-4 menu-title"><span> Docs </span></li>
          <li>
            <a href="/docs/install" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
              </svg>
              install
            </a>
          </li>
          <li>
            <a href="/docs/use" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              use
            </a>
          </li>
          <li>
            <a href="/docs/customize" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              customize components
            </a>
          </li>
          <li>
            <a href="/docs/default-themes" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Themes
            </a>
          </li>
          <li>
            <a href="/docs/config" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              config
            </a>
          </li>
          <li>
            <a href="/core/colors" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 fill-current">
                <path
                  d="M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"
                /></svg
              >
              Colors
            </a>
          </li>
          <li>
            <a href="/core/layout" class="capitalize"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 fill-current">
                <path
                  d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"
                />
              </svg>
              Layout &amp; Typography
            </a>
          </li>
        </ul>
        <ul class="flex flex-col p-4 pt-0 menu compact">
          <li class="menu-title"><span> Components </span></li>
          <li class="">
            <a href="/components/alert" class="justify-between capitalize"> alert </a>
          </li>
          <li class="">
            <a href="/components/artboard" class="justify-between capitalize"> artboard </a>
          </li>
          <li class="">
            <a href="/components/avatar" class="justify-between capitalize"> avatar </a>
          </li>
          <li class="">
            <a href="/components/badge" class="justify-between capitalize"> badge </a>
          </li>
          <li class="">
            <a href="/components/breadcrumbs" class="justify-between capitalize"> breadcrumbs </a>
          </li>
          <li class="">
            <a href="/components/button" class="justify-between capitalize"> button </a>
          </li>
          <li class="">
            <a href="/components/button-group" class="justify-between capitalize"> button-group </a>
          </li>
          <li class="">
            <a href="/components/card" class="justify-between capitalize"> card </a>
          </li>
          <li class="">
            <a href="/components/carousel" class="justify-between capitalize"> carousel </a>
          </li>
          <li class="">
            <a href="/components/collapse" class="justify-between capitalize"> collapse </a>
          </li>
          <li class="">
            <a href="/components/countdown" class="justify-between capitalize"> countdown </a>
          </li>
          <li class="">
            <a href="/components/divider" class="justify-between capitalize"> divider </a>
          </li>
          <li class="">
            <a href="/components/drawer" class="justify-between capitalize active nuxt-link-active" aria-current="page"> drawer </a>
          </li>
          <li class="">
            <a href="/components/dropdown" class="justify-between capitalize"> dropdown </a>
          </li>
          <li class="">
            <a href="/components/footer" class="justify-between capitalize"> footer </a>
          </li>
          <li class="">
            <a href="/components/hero" class="justify-between capitalize"> hero </a>
          </li>
          <li class="">
            <a href="/components/indicator" class="justify-between capitalize">
              indicator
              <span class="lowercase badge badge-sm">new</span>
            </a>
          </li>
          <li class="">
            <a href="/components/kbd" class="justify-between capitalize"> kbd </a>
          </li>
          <li class="">
            <a href="/components/link" class="justify-between capitalize"> link </a>
          </li>
          <li class="">
            <a href="/components/mask" class="justify-between capitalize"> mask </a>
          </li>
          <li class="">
            <a href="/components/menu" class="justify-between capitalize"> menu </a>
          </li>
          <li class="">
            <a href="/components/modal" class="justify-between capitalize"> modal </a>
          </li>
          <li class="">
            <a href="/components/navbar" class="justify-between capitalize"> navbar </a>
          </li>
          <li class="">
            <a href="/components/pagination" class="justify-between capitalize"> pagination </a>
          </li>
          <li class="">
            <a href="/components/progress" class="justify-between capitalize"> progress </a>
          </li>
          <li class="">
            <a href="/components/rating" class="justify-between capitalize"> rating </a>
          </li>
          <li class="">
            <a href="/components/stack" class="justify-between capitalize">
              stack
              <span class="lowercase badge badge-sm">new</span>
            </a>
          </li>
          <li class="">
            <a href="/components/stat" class="justify-between capitalize"> stat </a>
          </li>
          <li class="">
            <a href="/components/steps" class="justify-between capitalize">
              steps
              <span class="lowercase badge badge-sm">updated</span></a
            >
          </li>
          <li class="">
            <a href="/components/tab" class="justify-between capitalize"> tab </a>
          </li>
          <li class="">
            <a href="/components/table" class="justify-between capitalize"> table </a>
          </li>
          <li class="">
            <a href="/components/tooltip" class="justify-between capitalize"> tooltip </a>
          </li>
          <li class="">
            <a href="/components/form/checkbox" class="justify-between capitalize"> form-checkbox </a>
          </li>
          <li class="">
            <a href="/components/form/input" class="justify-between capitalize">
              form-input
              <span class="lowercase badge badge-sm">updated</span></a
            >
          </li>
          <li class="">
            <a href="/components/form/radio" class="justify-between capitalize"> form-radio </a>
          </li>
          <li class="">
            <a href="/components/form/range" class="justify-between capitalize"> form-range </a>
          </li>
          <li class="">
            <a href="/components/form/select" class="justify-between capitalize"> form-select </a>
          </li>
          <li class="">
            <a href="/components/form/textarea" class="justify-between capitalize"> form-textarea </a>
          </li>
          <li class="">
            <a href="/components/form/toggle" class="justify-between capitalize"> form-toggle </a>
          </li>
          <li class="">
            <a href="/components/mockup/code" class="justify-between capitalize"> mockup-code </a>
          </li>
          <li class="">
            <a href="/components/mockup/phone" class="justify-between capitalize"> mockup-phone </a>
          </li>
          <li class="">
            <a href="/components/mockup/window" class="justify-between capitalize"> mockup-window </a>
          </li>
          <li class="mt-4 menu-title"><span> Demos </span></li>
          <li class=""><a href="/demos/cards" class="capitalize"> cards </a></li>
          <li class=""><a href="/demos/mobile-screen" class="capitalize"> mobile-screen </a></li>
          <li class=""><a href="/demos/style-guide" class="capitalize"> style-guide </a></li>
        </ul>
      </aside>
    </div>
  </div>
{/if}
