<script>
  import { readEnv } from "$lib/util"
  export let slot
  import Sponsors from "@components/Sponsors.svelte"
</script>

{#if slot === "adesense-1"}
  <div class="mx-auto mb-6 flex h-[100px] w-[300px] items-center justify-center md:hidden">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-300-100 -->
      <ins class="adsbygoogle" style="display:inline-block;width:300px;height:100px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="6427020085" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-2"}
  <div class="md:flex mb-6 lg:hidden hidden justify-center h-[90px] w-[728px] items-center mx-auto">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-728-90 -->
      <ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="1141251424" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-3"}
  <div class="lg:flex mb-6 xl:hidden hidden justify-center h-[90px] w-[468px] items-center mx-auto">
    {#if readEnv("VITE_ADS") == "true"}
      <!-- daisyui-468-90 -->
      <ins class="adsbygoogle" style="display:inline-block;width:468px;height:90px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="9789998609" />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    {/if}
  </div>
{:else if slot === "adesense-4"}
  <div>
    <div class="sticky top-24 mt-32">
      <div class="hidden h-[600px] w-[160px] items-center justify-center xl:flex 2xl:hidden mx-auto">
        {#if readEnv("VITE_ADS") == "true"}
          <!-- daisyui-160-600 -->
          <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="8476916933" />
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
      <div class="hidden h-[600px] w-[300px] items-center justify-center 2xl:flex mx-auto">
        {#if readEnv("VITE_ADS") == "true"}
          <!-- daisyui-300-600 -->
          <ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="7163835260" />
          <script>
            ;(adsbygoogle = window.adsbygoogle || []).push({})
          </script>
        {/if}
      </div>
    </div>
  </div>
{:else if slot === "carbon1"}
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom" id="_carbonads_js"></script>
{:else if slot === "carbon2"}
  <div>
    <div class="sticky top-24 xl:mt-32 my-6 xl:my-0">
      <div class="mx-auto items-center carbonads-responsive flex justify-center">
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom" id="_carbonads_js"></script>
      </div>

      <div class="hidden xl:block ">
        <Sponsors />
      </div>
    </div>
  </div>
{/if}

<style global>
  #carbonads * {
    margin: initial;
    padding: initial;
  }
  #carbonads {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  #carbonads {
    display: flex;
    max-width: 330px;
    color: hsla(var(--bc));
    background-color: hsla(var(--b2));
    box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
    z-index: 100;
    border-radius: 4px;
    overflow: hidden;
  }
  #carbonads a {
    color: inherit;
    text-decoration: none;
  }
  #carbonads a:hover {
    color: inherit;
  }
  #carbonads span {
    position: relative;
    display: block;
    overflow: hidden;
  }
  #carbonads .carbon-wrap {
    display: flex;
  }
  #carbonads .carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
  }
  #carbonads .carbon-img img {
    display: block;
  }
  #carbonads .carbon-text {
    font-size: 13px;
    padding: 10px;
    margin-bottom: 16px;
    line-height: 1.5;
    text-align: left;
  }
  #carbonads .carbon-poweredby {
    display: block;
    padding: 6px 8px;
    background: hsla(var(--b3));
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 8px;
    line-height: 1;
    border-top-left-radius: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media only screen and (min-width: 1280px) {
    .carbon-text {
      font-size: 12px;
      padding: 8px 10px 4px 10px;
    }
    .carbonads-responsive #carbonads {
      max-width: 130px;
    }
    .carbonads-responsive #carbonads .carbon-wrap {
      flex-direction: column;
    }
    .carbonads-responsive #carbonads .carbon-poweredby {
      position: absolute;
      right: 0;
      bottom: 0;
      text-align: center;
      border-radius: 0;
      border-top-left-radius: 3px;
    }
  }
</style>
