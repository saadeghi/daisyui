import * as server from '../entries/pages/blog/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.48f138ee.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.a46eee4e.js","_app/immutable/chunks/singletons.98825737.js","_app/immutable/chunks/index.3e418aa1.js","_app/immutable/chunks/Scripts.da30512e.js","_app/immutable/chunks/i18n.24cc095c.js","_app/immutable/chunks/index.f5a69ea7.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/Footer.b91edc65.js","_app/immutable/chunks/Ads.450358cd.js"];
export const stylesheets = ["_app/immutable/assets/Scripts.d00a0994.css","_app/immutable/assets/Ads.8aacc2b2.css"];
export const fonts = [];
