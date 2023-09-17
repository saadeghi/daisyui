import * as server from '../entries/pages/(docs)/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(docs)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(docs)/+page.server.js";
export const imports = ["_app/immutable/nodes/5.fddbce64.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/inline-svg.action.efcbb656.js","_app/immutable/chunks/SEO.800680f2.js","_app/immutable/chunks/i18n.24cc095c.js","_app/immutable/chunks/index.3e418aa1.js","_app/immutable/chunks/Ads.450358cd.js","_app/immutable/chunks/Footer.b91edc65.js"];
export const stylesheets = ["_app/immutable/assets/Ads.8aacc2b2.css"];
export const fonts = [];
