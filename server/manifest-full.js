export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ads.txt","card.png","favicon.ico","images/blog/daisyui-semantic-colors.jpg","images/blog/daisyui-stars.jpg","images/blog/daisyui-vs-tailwindui.jpg","images/blog/mary-ui-form.jpg","images/blog/mary-ui.jpg","images/blog/semantic-colors.jpg","images/blog/tailwind-mistake.jpg","images/components/accordion.jpg","images/components/alert.jpg","images/components/artboard.jpg","images/components/avatar.jpg","images/components/badge.jpg","images/components/bottom-navigation.jpg","images/components/breadcrumbs.jpg","images/components/button-group.jpg","images/components/button.jpg","images/components/card.jpg","images/components/carousel.jpg","images/components/chat.jpg","images/components/checkbox.jpg","images/components/collapse.jpg","images/components/countdown.jpg","images/components/divider.jpg","images/components/drawer.jpg","images/components/dropdown.jpg","images/components/file-input.jpg","images/components/footer.jpg","images/components/hero.jpg","images/components/indicator.jpg","images/components/input-group.jpg","images/components/input.jpg","images/components/join.jpg","images/components/kbd.jpg","images/components/link.jpg","images/components/loading.jpg","images/components/mask.jpg","images/components/menu.jpg","images/components/mockup-browser.jpg","images/components/mockup-code.jpg","images/components/mockup-phone.jpg","images/components/mockup-window.jpg","images/components/modal.jpg","images/components/navbar.jpg","images/components/pagination.jpg","images/components/progress.jpg","images/components/radial-progress.jpg","images/components/radio.jpg","images/components/range.jpg","images/components/rating.jpg","images/components/select.jpg","images/components/stack.jpg","images/components/stat.jpg","images/components/steps.jpg","images/components/swap.jpg","images/components/tab.jpg","images/components/table.jpg","images/components/textarea.jpg","images/components/toast.jpg","images/components/toggle.jpg","images/components/tooltip.jpg","images/daisyui-logo/daisyui-logomark-1024-1024.png","images/daisyui-logo/daisyui-logomark.svg","images/daisyui-logo/daisyui-logotype-3600-1024.png","images/daisyui-logo/daisyui-logotype.svg","images/daisyui-logo/favicon-1024.png","images/daisyui-logo/favicon-120.png","images/daisyui-logo/favicon-128.png","images/daisyui-logo/favicon-16.png","images/daisyui-logo/favicon-180.png","images/daisyui-logo/favicon-192.png","images/daisyui-logo/favicon-196.png","images/daisyui-logo/favicon-228.png","images/daisyui-logo/favicon-32.png","images/daisyui-logo/favicon-512.png","images/daisyui-logo/favicon-57.png","images/daisyui-logo/favicon-76.png","images/daisyui-logo/favicon-96.png","images/default.jpg","images/docs/cdn.jpg","images/docs/colors.jpg","images/docs/config.jpg","images/docs/customize.jpg","images/docs/install.jpg","images/docs/layout-and-typography.jpg","images/docs/themes.jpg","images/docs/use.jpg","images/emoji/heart-on-fire.png","images/emoji/heart-on-fire.webp","images/emoji/heart-on-fire@80.png","images/emoji/heart-on-fire@80.webp","images/emoji/smiling-face-with-sunglasses.png","images/emoji/smiling-face-with-sunglasses.webp","images/emoji/smiling-face-with-sunglasses@80.png","images/emoji/smiling-face-with-sunglasses@80.webp","images/emoji/yawning-face.png","images/emoji/yawning-face.webp","images/emoji/yawning-face@80.png","images/emoji/yawning-face@80.webp","images/stock/photo-1414694762283-acccc27bca85.jpg","images/stock/photo-1481026469463-66327c86e544.jpg","images/stock/photo-1494232410401-ad00d5433cfa.jpg","images/stock/photo-1494253109108-2e30c049369b.jpg","images/stock/photo-1494625927555-6ec4433b1571.jpg","images/stock/photo-1507358522600-9f71e620c44e.jpg","images/stock/photo-1534528741775-53994a69daeb.jpg","images/stock/photo-1550258987-190a2d41a8ba.jpg","images/stock/photo-1559181567-c3190ca9959b.jpg","images/stock/photo-1559703248-dcaaec9fab78.jpg","images/stock/photo-1560717789-0ac7c58ac90a.jpg","images/stock/photo-1565098772267-60af42b81ef2.jpg","images/stock/photo-1567653418876-5bb0e566e1c2.jpg","images/stock/photo-1572635148818-ef6fd45eb394.jpg","images/stock/photo-1601004890684-d8cbf643f5f2.jpg","images/stock/photo-1606107557195-0e29a4b5b4aa.jpg","images/stock/photo-1609621838510-5ad474b7d25d.jpg","images/stock/photo-1625726411847-8cbb60cc71e6.jpg","images/stock/photo-1635805737707-575885ab0820.jpg","images/stock/photo-1665553365602-b2fb8e5d1707.jpg","images/theme-generator.jpg","logo.svg","logos/11ty.svg","logos/angular.svg","logos/astro.svg","logos/cra.svg","logos/elm.svg","logos/jsdelivr.svg","logos/laravel.svg","logos/lit.svg","logos/nextjs.svg","logos/nuxtjs.svg","logos/phoenix.svg","logos/postcss.svg","logos/preact.svg","logos/qwik.svg","logos/react.svg","logos/remix.svg","logos/rollup.svg","logos/snowpack.svg","logos/solidjs.svg","logos/svelte.svg","logos/vite.svg","logos/vue.svg","logos/webpack.svg","pouya-saadeghi.jpg","robots.txt","tailwind-css-component-card-1.jpg","tailwind-css-component-card-1.png","tailwind-css-component-profile-1@40w.png","tailwind-css-component-profile-1@56w.png","tailwind-css-component-profile-1@94w.jpg","tailwind-css-component-profile-1@94w.png","tailwind-css-component-profile-2@40w.png","tailwind-css-component-profile-2@56w.png","tailwind-css-component-profile-2@94w.png","tailwind-css-component-profile-3@40w.png","tailwind-css-component-profile-3@56w.png","tailwind-css-component-profile-3@94w.png","tailwind-css-component-profile-4@40w.png","tailwind-css-component-profile-4@56w.png","tailwind-css-component-profile-4@94w.png","tailwind-css-component-profile-5@40w.png","tailwind-css-component-profile-5@56w.png","tailwind-css-component-profile-5@94w.png","tailwind-css-component-profile-image@40w.png","tailwind-css-component-profile-image@56w.png","tailwind-css-component-profile-image@94w.png","thats-quiet-big.png","twitter-profile-pics/Brslv.jpg","twitter-profile-pics/ChristopheAnfry.jpg","twitter-profile-pics/EseMonday1.jpg","twitter-profile-pics/Maz_Ipan.jpg","twitter-profile-pics/NikkitaFTW.jpg","twitter-profile-pics/SedRicKCZ.jpg","twitter-profile-pics/The_GreatBonnie.jpg","twitter-profile-pics/TiiaAurora.jpg","twitter-profile-pics/danielkelly_io.jpg","twitter-profile-pics/developedbyed.jpg","twitter-profile-pics/dragonmantank.jpg","twitter-profile-pics/loftwah.jpg","twitter-profile-pics/marc_louvion.jpg","twitter-profile-pics/olliethedev.jpg","twitter-profile-pics/remkim_.jpg","twitter-profile-pics/spences10.jpg","twitter-profile-pics/sudo_overflow.jpg"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.32af7ff2.js","app":"_app/immutable/entry/app.2c210120.js","imports":["_app/immutable/entry/start.32af7ff2.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/singletons.98825737.js","_app/immutable/chunks/index.3e418aa1.js","_app/immutable/entry/app.2c210120.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js')),
			__memo(() => import('./nodes/53.js')),
			__memo(() => import('./nodes/54.js')),
			__memo(() => import('./nodes/55.js')),
			__memo(() => import('./nodes/56.js')),
			__memo(() => import('./nodes/57.js')),
			__memo(() => import('./nodes/58.js')),
			__memo(() => import('./nodes/59.js')),
			__memo(() => import('./nodes/60.js')),
			__memo(() => import('./nodes/61.js')),
			__memo(() => import('./nodes/62.js')),
			__memo(() => import('./nodes/63.js')),
			__memo(() => import('./nodes/64.js')),
			__memo(() => import('./nodes/65.js')),
			__memo(() => import('./nodes/66.js')),
			__memo(() => import('./nodes/67.js')),
			__memo(() => import('./nodes/68.js')),
			__memo(() => import('./nodes/69.js')),
			__memo(() => import('./nodes/70.js')),
			__memo(() => import('./nodes/71.js')),
			__memo(() => import('./nodes/72.js')),
			__memo(() => import('./nodes/73.js')),
			__memo(() => import('./nodes/74.js')),
			__memo(() => import('./nodes/75.js')),
			__memo(() => import('./nodes/76.js')),
			__memo(() => import('./nodes/77.js')),
			__memo(() => import('./nodes/78.js')),
			__memo(() => import('./nodes/79.js'))
		],
		routes: [
			{
				id: "/(docs)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/blog/(posts)/daisyui-colors-and-themes",
				pattern: /^\/blog\/daisyui-colors-and-themes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/blog/(posts)/daisyui-vs-tailwindui",
				pattern: /^\/blog\/daisyui-vs-tailwindui\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/blog/(posts)/mary-ui",
				pattern: /^\/blog\/mary-ui\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/blog/(posts)/most-common-mistake-when-using-tailwind-css",
				pattern: /^\/blog\/most-common-mistake-when-using-tailwind-css\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/blog/tag/[tag]",
				pattern: /^\/blog\/tag\/([^/]+?)\/?$/,
				params: [{"name":"tag","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/blog/(posts)/what-is-daisyui",
				pattern: /^\/blog\/what-is-daisyui\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(redirects)/codepen",
				pattern: /^\/codepen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(docs)/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(docs)/components/accordion",
				pattern: /^\/components\/accordion\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(docs)/components/alert",
				pattern: /^\/components\/alert\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(docs)/components/artboard",
				pattern: /^\/components\/artboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(docs)/components/avatar",
				pattern: /^\/components\/avatar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(docs)/components/badge",
				pattern: /^\/components\/badge\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(docs)/components/bottom-navigation",
				pattern: /^\/components\/bottom-navigation\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(docs)/components/breadcrumbs",
				pattern: /^\/components\/breadcrumbs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(docs)/components/button-group",
				pattern: /^\/components\/button-group\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(docs)/components/button",
				pattern: /^\/components\/button\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(docs)/components/card",
				pattern: /^\/components\/card\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(docs)/components/carousel",
				pattern: /^\/components\/carousel\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(docs)/components/chat",
				pattern: /^\/components\/chat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(docs)/components/checkbox",
				pattern: /^\/components\/checkbox\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(docs)/components/collapse",
				pattern: /^\/components\/collapse\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(docs)/components/countdown",
				pattern: /^\/components\/countdown\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(docs)/components/divider",
				pattern: /^\/components\/divider\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(docs)/components/drawer",
				pattern: /^\/components\/drawer\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(docs)/components/dropdown",
				pattern: /^\/components\/dropdown\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(docs)/components/file-input",
				pattern: /^\/components\/file-input\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(docs)/components/footer",
				pattern: /^\/components\/footer\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(docs)/components/hero",
				pattern: /^\/components\/hero\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(docs)/components/indicator",
				pattern: /^\/components\/indicator\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(docs)/components/input-group",
				pattern: /^\/components\/input-group\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(docs)/components/input",
				pattern: /^\/components\/input\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(docs)/components/join",
				pattern: /^\/components\/join\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(docs)/components/kbd",
				pattern: /^\/components\/kbd\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(docs)/components/link",
				pattern: /^\/components\/link\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(docs)/components/loading",
				pattern: /^\/components\/loading\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(docs)/components/mask",
				pattern: /^\/components\/mask\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(docs)/components/menu",
				pattern: /^\/components\/menu\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(docs)/components/mockup-browser",
				pattern: /^\/components\/mockup-browser\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(docs)/components/mockup-code",
				pattern: /^\/components\/mockup-code\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(docs)/components/mockup-phone",
				pattern: /^\/components\/mockup-phone\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(docs)/components/mockup-window",
				pattern: /^\/components\/mockup-window\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(docs)/components/modal",
				pattern: /^\/components\/modal\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(docs)/components/navbar",
				pattern: /^\/components\/navbar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(docs)/components/pagination",
				pattern: /^\/components\/pagination\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(docs)/components/progress",
				pattern: /^\/components\/progress\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(docs)/components/radial-progress",
				pattern: /^\/components\/radial-progress\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(docs)/components/radio",
				pattern: /^\/components\/radio\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(docs)/components/range",
				pattern: /^\/components\/range\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(docs)/components/rating",
				pattern: /^\/components\/rating\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(docs)/components/select",
				pattern: /^\/components\/select\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(docs)/components/stack",
				pattern: /^\/components\/stack\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(docs)/components/stat",
				pattern: /^\/components\/stat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(docs)/components/steps",
				pattern: /^\/components\/steps\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(docs)/components/swap",
				pattern: /^\/components\/swap\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(docs)/components/table",
				pattern: /^\/components\/table\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(docs)/components/tab",
				pattern: /^\/components\/tab\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(docs)/components/textarea",
				pattern: /^\/components\/textarea\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(docs)/components/toast",
				pattern: /^\/components\/toast\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(docs)/components/toggle",
				pattern: /^\/components\/toggle\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(docs)/components/tooltip",
				pattern: /^\/components\/tooltip\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(docs)/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/cdn",
				pattern: /^\/docs\/cdn\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/changelog",
				pattern: /^\/docs\/changelog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/colors",
				pattern: /^\/docs\/colors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/config",
				pattern: /^\/docs\/config\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/customize",
				pattern: /^\/docs\/customize\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/install",
				pattern: /^\/docs\/install\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/layout-and-typography",
				pattern: /^\/docs\/layout-and-typography\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/themes",
				pattern: /^\/docs\/themes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(docs)/docs/use",
				pattern: /^\/docs\/use\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(redirects)/tailwindplay",
				pattern: /^\/tailwindplay\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(docs)/theme-generator",
				pattern: /^\/theme-generator\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 70 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
