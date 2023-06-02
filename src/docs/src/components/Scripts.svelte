<script>
  import { readEnv } from "$lib/util"
</script>

<svelte:head>
  {#if readEnv("VITE_ADS") == "true"}
    <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4812562253949561" crossorigin="anonymous"></script> -->
  {/if}

  {#if readEnv("VITE_GTM") == "true"}
    <script>
      ;(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ "gtm.start": new Date().getTime(), "event": "gtm.js" })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, "script", "dataLayer", "G-5N0NM9KW6D")
    </script>
  {/if}
</svelte:head>

{#if readEnv("VITE_GTM") == "true"}
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe
      title="GTM"
      src="https://www.googletagmanager.com/ns.html?id=G-5N0NM9KW6D"
      height="0"
      width="0"
      style="display:none;visibility:hidden" />
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
{/if}
