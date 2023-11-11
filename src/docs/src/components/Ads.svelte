<script>
  import { onMount } from "svelte"
  import { readEnv } from "$lib/util"
  export let slot
  import Sponsors from "$components/Sponsors.svelte"
</script>

{#if slot === "adesense-1"}
  <div class="mx-auto mb-6 flex h-[100px] w-[300px] items-center justify-center md:hidden">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-300-100 -->
      <ins
        class="adsbygoogle"
        style="display:inline-block;width:300px;height:100px"
        data-ad-client="ca-pub-4812562253949561"
        data-ad-slot="6427020085" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-2"}
  <div class="mx-auto mb-6 hidden h-[90px] w-[728px] items-center justify-center md:flex lg:hidden">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-728-90 -->
      <ins
        class="adsbygoogle"
        style="display:inline-block;width:728px;height:90px"
        data-ad-client="ca-pub-4812562253949561"
        data-ad-slot="1141251424" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-3"}
  <div class="mx-auto mb-6 hidden h-[90px] w-[468px] items-center justify-center lg:flex xl:hidden">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-468-90 -->
      <ins
        class="adsbygoogle"
        style="display:inline-block;width:468px;height:90px"
        data-ad-client="ca-pub-4812562253949561"
        data-ad-slot="9789998609" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-4"}
  <div>
    <div class="sticky top-24 mt-32">
      <div
        class="mx-auto hidden h-[600px] w-[160px] items-center justify-center xl:flex 2xl:hidden">
        {#if readEnv("VITE_ADS") == "true"}
          <!-- daisyui-160-600 -->
          <ins
            class="adsbygoogle"
            style="display:inline-block;width:160px;height:600px"
            data-ad-client="ca-pub-4812562253949561"
            data-ad-slot="8476916933" />
          <script>
            ;(adsbygoogle = window.adsbygoogle || []).push({})
          </script>
        {/if}
      </div>
    </div>
  </div>
{:else if slot === "adesense-5"}
  <div>
    <div class="sticky top-24 mt-32">
      <div class="mx-auto hidden h-[600px] w-[300px] items-center justify-center 2xl:flex">
        {#if readEnv("VITE_ADS") == "true"}
          <!-- daisyui-300-600 -->
          <ins
            class="adsbygoogle"
            style="display:inline-block;width:300px;height:600px"
            data-ad-client="ca-pub-4812562253949561"
            data-ad-slot="7163835260" />
          <script>
            ;(adsbygoogle = window.adsbygoogle || []).push({})
          </script>
        {/if}
      </div>
    </div>
  </div>
{:else if slot === "carbon1"}
  <div class="pointer-events-auto h-[100px] w-full min-w-[330px] max-w-[350px]">
    {#if onMount}
      <script
        async
        type="text/javascript"
        src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom"
        id="_carbonads_js"></script>
    {/if}
  </div>
{:else if slot === "carbon2"}
  <div>
    <div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
      <div class="hidden xl:block">
        <Sponsors />
      </div>
      <div class="h-6" />
      <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center">
        {#if onMount}
          <script
            async
            type="text/javascript"
            src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom"
            id="_carbonads_js"></script>
        {/if}
      </div>
    </div>
  </div>
{/if}
