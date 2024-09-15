import{h as o,$ as c,f as n,s as e,a as m,d}from"../chunks/disclose-version.vS8Cq8Jh.js";var l=d(`<meta name="robots" content="noindex"> <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> <script>
const urlParams = new URLSearchParams(window.location.search)
window.lemonSqueezyAffiliateConfig = {
  store: "daisyui",
  onTrack: (e) => {
    const desc = urlParams.get("desc") === "0" ? "&desc=0" : "";
    window.location.href = \`https://daisyui.lemonsqueezy.com/checkout/buy/\${urlParams.get("product")}?aff_ref=\${e.click}\${desc}\`;
  },
}
<\/script> <script src="https://lmsqueezy.com/affiliate.js" defer=""><\/script>`,1);function h(p){o(t=>{var a=l();c.title="Loading…";var r=n(a),i=e(e(r,!0)),s=e(e(i,!0)),u=e(e(s,!0));m(t,a)})}export{h as component};
