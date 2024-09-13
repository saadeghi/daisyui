<svelte:head>
<title>Loading…</title>
<meta name="robots" content="noindex">
<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
<script>
const urlParams = new URLSearchParams(window.location.search)
window.lemonSqueezyAffiliateConfig = {
  store: "daisyui",
  onTrack: (e) => {
    const desc = urlParams.get("desc") === "0" ? "&desc=0" : "";
    window.location.href = `https://daisyui.lemonsqueezy.com/checkout/buy/${urlParams.get("product")}?aff_ref=${e.click}${desc}`;
  },
}
</script>
<script src="https://lmsqueezy.com/affiliate.js" defer></script>
</svelte:head>
