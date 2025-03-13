import{h as d,a as r,t as m,$ as f,f as p,s as e,d as u}from"../chunks/disclose-version.CEbLymSa.js";var h=u(`<meta name="robots" content="noindex"> <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> <script>
const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("product");
const desc = urlParams.get("desc") === "0" ? "&desc=0" : "";
const baseUrl = \`https://daisyui.lemonsqueezy.com/checkout/buy/\${productId}\`;
window.lemonSqueezyAffiliateConfig = {
  store: "daisyui",
  onTrack: (e) => {
    window.location.href = \`\${baseUrl}?aff_ref=\${e.click}\${desc}\`;
  },
}
setTimeout(() => {
  if (typeof window.createLemonSqueezyAffiliate === 'undefined') {
    console.log('script not loaded. refreshing...');
    window.location.reload();
  }
}, 10000);
<\/script> <script src="https://lmsqueezy.com/affiliate.js" defer=""><\/script> <style>html,body {
    color-scheme: light dark;
    margin: 0;
    padding: 0;
  }</style>`,1),g=m('<div style="display: grid; place-items: center; height: 100vh; font-family: sans-serif;"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"></circle><path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="currentColor" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></div>');function v(a){var o=g();d(i=>{var t=h();f.title="Loading...";var s=p(t),n=e(e(s,!0)),c=e(e(n,!0)),l=e(e(c,!0)),w=e(e(l,!0));r(i,t)}),r(a,o)}export{v as component};
