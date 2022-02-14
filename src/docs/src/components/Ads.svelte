<script>
  export let size = 1
</script>

{#if size === 1}
  <div class="mx-auto mb-6 flex h-[100px] w-[300px] items-center justify-center md:hidden">
    <!-- daisyui-300-100 -->
    <ins class="adsbygoogle" style="display:inline-block;width:300px;height:100px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="6427020085" />
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
  </div>
{:else if size === 2}
  <div class="md:flex mb-6 lg:hidden hidden justify-center h-[90px] w-[728px] items-center mx-auto">
    <!-- daisyui-728-90 -->
    <ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="1141251424" />
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
  </div>
{:else if size === 3}
  <div class="lg:flex mb-6 xl:hidden hidden justify-center h-[90px] w-[468px] items-center mx-auto">
    <!-- daisyui-468-90 -->
    <ins class="adsbygoogle" style="display:inline-block;width:468px;height:90px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="9789998609" />
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
  </div>
{:else if size === 4}
  <div class="hidden h-[600px] w-[160px] items-center justify-center xl:flex 2xl:hidden mx-auto">
    <!-- daisyui-160-600 -->
    <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="8476916933" />
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
  </div>
{:else if size === 5}
  <div class="hidden h-[600px] w-[300px] items-center justify-center 2xl:flex mx-auto">
    <!-- daisyui-300-600 -->
    <ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4812562253949561" data-ad-slot="7163835260" />
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
  </div>
{/if}
