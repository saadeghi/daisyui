import{a as s,t as o,f as B,s as t,b as r}from"../chunks/disclose-version.BHiWwTRW.js";import{m as C,g as u,t as h,u as e}from"../chunks/runtime.DHikSq-X.js";import{a as _}from"../chunks/render.Cx-P3-qZ.js";import{i as x}from"../chunks/111.BHM-jdHH.js";import{e as E,i as O}from"../chunks/each.DBvx4lzR.js";import{s as l,h as q}from"../chunks/i18n.ByaPm13V.js";import{p as A}from"../chunks/props.D81dtI1e.js";import{S as D}from"../chunks/SEO.CPWUFiD8.js";var F=o('<div class="border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border"><h1 class="text-base-content/30">Coming soon</h1></div>'),G=o('<figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"><img loading="lazy" class="border-base-content bg-base-300 rounded-btn border border-opacity-5"></figure>'),H=o('<a class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"><!> <div class="card-body"><h2 class="card-title"> </h2> <p class="text-xs opacity-60"> </p></div></a>'),J=o('<!> <!> <div class="grid justify-items-stretch gap-6"></div>',1);function X(y,w){let j=A(w,"data")(),c=C(j.posts);var n=J(),p=B(n);D(p,{title:"daisyUI Blog",desc:"daisyUI blog - Updates, ideas and resources",img:"https://img.daisyui.com/images/blog.jpg"});var v=t(t(p,!0));x(v,()=>u(c).length===0,i=>{var a=F();s(i,a)});var U=t(t(v,!0));E(U,9,()=>u(c),O,(i,a,L)=>{var d=H(),g=r(d);x(g,()=>e(a).thumbnail,k=>{var f=G(),m=r(f);h(()=>{l(m,"src",e(a).thumbnail),l(m,"alt",e(a).title)}),q(m),s(k,f)});var $=t(t(g,!0)),b=r($),z=r(b),I=t(t(b,!0)),S=r(I);h(()=>{l(d,"href",`/blog/${e(a).slug}`),_(z,e(a).title),_(S,e(a).desc)}),s(i,d)}),s(y,n)}export{X as component};
