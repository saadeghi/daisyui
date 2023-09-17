import * as server from '../entries/pages/blog/_page.server.js';

export const index = 73;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/73.8fb22ae3.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SEO.800680f2.js","_app/immutable/chunks/i18n.24cc095c.js","_app/immutable/chunks/index.3e418aa1.js"];
export const stylesheets = [];
export const fonts = [];
