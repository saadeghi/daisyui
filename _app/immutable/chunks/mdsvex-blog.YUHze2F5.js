import{a as n,t as d,s as a,f as O,b as e}from"./disclose-version.BHiWwTRW.js";import{p as K,t as i,a as N,u as P}from"./runtime.DHikSq-X.js";import{s as Q,a as l}from"./render.Cx-P3-qZ.js";import{i as m}from"./111.BHM-jdHH.js";import{e as R,i as U}from"./each.DBvx4lzR.js";import{s as u,f as V,a as W,h as X}from"./i18n.ByaPm13V.js";import{u as Y,i as Z,s as $}from"./store.CbGhC5cO.js";import{d as aa}from"./misc.DVzoKCSM.js";import{p as v}from"./props.D81dtI1e.js";import{p as ta}from"./stores.C699UuvJ.js";import{S as ra}from"./SEO.CPWUFiD8.js";var ea=d('<figure class="w-full"><img loading="lazy" class="border-base-content bg-base-300 rounded-box border border-opacity-5"></figure>'),sa=d("by <span> </span>",1),oa=d("<h1> </h1>"),ia=d("<p> </p>"),na=d('<a class="link"> </a>'),va=d('<div class="mb-2 flex flex-wrap gap-2 text-xs opacity-60"><span>Tags:</span> <!></div>'),da=d('<!> <div class="prose prose-sm md:prose-base mx-auto"><!> <div><div class="text-base-content/60 mb-2 text-xs"><span class="italic"> </span> <!></div> <!> <!> <!></div> <!></div>',1);function wa(T,s){K(s,!1);const x={};Y(x);const j=()=>$(ta,"$page",x);let p=v(s,"title"),_=v(s,"desc"),h=v(s,"date"),y=v(s,"author"),w=v(s,"tags"),f=v(s,"thumbnail"),q=v(s,"published");j().url.pathname.split("/").at(-2),Z();var k=da(),z=O(k);ra(z,{get title(){return p()},get desc(){return _()},get img(){return f()}});var A=a(a(z,!0)),M=e(A);m(M,f,o=>{var t=ea(),r=e(t);i(()=>{u(r,"src",f()),u(r,"alt",p())}),X(r),n(o,t)});var S=a(a(M,!0)),C=e(S),c=e(C);i(()=>u(c,"title",V(h())));var B=e(c);i(()=>l(B,`Published ${W(h())??""}`));var F=a(a(c,!0));m(F,y,o=>{var t=sa(),r=a(O(t,!0)),g=e(r);i(()=>l(g,y())),n(o,t)});var D=a(a(C,!0));m(D,p,o=>{var t=oa(),r=e(t);i(()=>l(r,p())),n(o,t)});var E=a(a(D,!0));m(E,_,o=>{var t=ia(),r=e(t);i(()=>l(r,_())),n(o,t)});var G=a(a(E,!0));Q(G,aa(s),{},null);var H=a(a(S,!0));m(H,()=>q()&&w(),o=>{var t=va(),r=e(t),g=a(a(r,!0));R(g,1,w,U,(I,L,la)=>{var b=na();i(()=>u(b,"href",`/blog/tag/${P(L).replace(/ /g,"-").toLowerCase()}`));var J=e(b);i(()=>l(J,P(L))),n(I,b)}),n(o,t)}),n(T,k),N()}export{wa as M};
