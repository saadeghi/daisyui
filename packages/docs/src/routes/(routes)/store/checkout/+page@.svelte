<svelte:head>
  <title>Loading...</title>
  <meta name="robots" content="noindex" />
  <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
  <script>
    console.log(
      "If this page is not loading, please disable ad blockers or software that blocks scripts. We do not track your IP address or personal information. This script is required to assigne affiliate ID required for the purchase.",
    )
    const urlParams = new URLSearchParams(window.location.search)
    const productId = urlParams.get("product")
    const desc = urlParams.get("desc") === "0" ? "&desc=0" : ""
    const baseUrl = `https://daisyui.lemonsqueezy.com/checkout/buy/${productId}`
    window.lemonSqueezyAffiliateConfig = {
      store: "daisyui",
      onTrack: (e) => {
        window.location.href = `${baseUrl}?aff_ref=${e.click}${desc}`
      },
    }
    setTimeout(() => {
      if (typeof window.createLemonSqueezyAffiliate === "undefined") {
        console.log("script not loaded. refreshing...")
        window.location.reload()
      }
    }, 10000)
  </script>
  <script src="https://lmsqueezy.com/affiliate.js" defer></script>
  <style>
    html,
    body {
      color-scheme: light dark;
      margin: 0;
      padding: 0;
    }
  </style>
</svelte:head>
<div style="display: grid; place-items: center; height: 100vh; font-family: sans-serif;">
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      opacity="0.2"
    />
    <path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="currentColor" stroke-width="2">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</div>
<div
  style="position: absolute; bottom: 2rem; left: 2rem; font-size: 11px; opacity: 0.3; font-family: sans-serif;"
>
  If this is not loading, <br />please disable Ad Blockers.
</div>
