import { c as create_ssr_component } from "../../../../chunks/ssr.js";
async function load() {
  return { status: 302, redirect: "/docs/install/" };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export {
  Page as default,
  load
};
