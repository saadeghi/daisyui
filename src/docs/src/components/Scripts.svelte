<svelte:head>
  {#if process.env.NODE_ENV === "production"}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4812562253949561" crossorigin="anonymous"></script>
  {/if}

  {#if process.env.NODE_ENV === "production"}
    <!-- Google Tag Manager -->
    <script>
      ;(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, "script", "dataLayer", "GTM-WJ8HL28")
    </script>
    <!-- End Google Tag Manager -->
  {/if}
</svelte:head>

{#if process.env.NODE_ENV === "production"}
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe title="GTM" src="https://www.googletagmanager.com/ns.html?id=GTM-WJ8HL28" height="0" width="0" style="display:none;visibility:hidden" /></noscript>
  <!-- End Google Tag Manager (noscript) -->
{/if}
