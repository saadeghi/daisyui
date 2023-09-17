import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="hero not-prose min-h-screen"><div class="hero-content text-center"><div class="max-w-md"><h1 class="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">${escape($page.status)}</h1> <p class="mb-5">${escape($page.message)}</p> <a class="btn" href="/" data-svelte-h="svelte-kaknrv">Go back</a></div></div></div>`;
});
export {
  Error as default
};
