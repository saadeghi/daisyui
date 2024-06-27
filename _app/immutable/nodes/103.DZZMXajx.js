import{h as s,$ as c,f as n,s as a,a as m,d as l}from"../chunks/disclose-version.BHiWwTRW.js";var f=l(`<meta name="robots" content="noindex"> <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> <script>
const urlParams = new URLSearchParams(window.location.search)
window.lemonSqueezyAffiliateConfig = {
  store: "daisyui",
  trackOnLoad: false,
  onReady: (e) => {
    e.Track(urlParams.get("ref"))
  },
  onTrack: (e) => {
    window.location.href = \`https://daisyui.lemonsqueezy.com/checkout/buy/\${urlParams.get("product")}?aff_ref=\${e.click}\`
  },
}
<\/script> <script src="https://lmsqueezy.com/affiliate.js" defer=""><\/script>`,1);function h(p){s(t=>{var e=f();c.title="Loading…";var r=n(e),i=a(a(r,!0)),o=a(a(i,!0)),d=a(a(o,!0));m(t,e)})}export{h as component};
