import{t as ue,a as xe}from"../chunks/LFhyL0Oe.js";import"../chunks/gclTb0SW.js";import{f as fe,s as e,c as a,r as o,b as _e}from"../chunks/C4PvZKYF.js";import{l as ye,s as Ve}from"../chunks/D6tDoBIA.js";import{L as He}from"../chunks/BLQDrl5f.js";import{T as t}from"../chunks/BMNrV7vn.js";const E={title:"How to make a bidirectional site using Tailwind CSS and daisyUI",desc:"Learn how to use CSS logical properties to make a bidirectional website using Tailwind CSS and daisyUI",published:!0,date:"2024-03-01T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/bidirectional.webp",tags:["Guides"]},{title:Fe,desc:Ue,published:ze,date:Be,author:Me,thumbnail:Re,tags:Pe}=E;var Se=ue(`<p><!></p> <h2 id="css-logical-properties"><a href="#css-logical-properties" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="CSS Logical Properties"><!></span></h2> <p><a href="https://web.dev/learn/css/logical-properties" rel="nofollow" target="_blank">CSS logical properties</a><!></p> <p><!><code>margin-left</code><!><code>margin-inline-start</code><!></p> <h2 id="its-even-easier-with-tailwind-css-and-daisyui"><a href="#its-even-easier-with-tailwind-css-and-daisyui" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="It's even easier with Tailwind CSS and daisyUI"><!></span></h2> <p><a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS (3.3+) already supports CSS logical properties</a><!></p> <p><!><a href="https://github.com/saadeghi/daisyui/discussions/2507" rel="nofollow" target="_blank">daisyUI 4</a><!></p> <p><!><code>left</code><!><code>right</code><!><code>start</code><!><code>end</code><!></p> <h2 id="step-1"><a href="#step-1" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="Step 1"><!></span></h2> <p><!> <!></p> <table><thead><tr><th><!></th><th><!></th></tr></thead><tbody><tr><td><code>left-*</code></td><td><code>start-*</code></td></tr><tr><td><code>right-*</code></td><td><code>end-*</code></td></tr><tr><td><code>ml-*</code></td><td><code>ms-*</code></td></tr><tr><td><code>mr-*</code></td><td><code>me-*</code></td></tr><tr><td><code>pl-*</code></td><td><code>ps-*</code></td></tr><tr><td><code>pr-*</code></td><td><code>pe-*</code></td></tr></tbody></table> <p><!><a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS blog</a><!></p> <h2 id="step-2"><a href="#step-2" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="Step 2"><!></span></h2> <p><!><code>dir=rtl</code><!></p> <h2 id="step-3"><a href="#step-3" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="Step 3"><!></span></h2> <p><!></p> <h2 id="conclusion"><a href="#conclusion" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="Conclusion"><!></span></h2> <p><!> <!><code>ps-4</code><!><code>ms-4</code><!><code>pl-4</code><!><code>ml-4</code><!></p>`,1);function Ae(J,K){const O=ye(K,["children","$$slots","$$events","$$legacy"]);He(J,Ve(()=>O,E,{children:(Q,Ce)=>{var y=Se(),r=fe(y),X=a(r);t(X,{text:"For years, making a bidirectional website was a pain. We had to make a LTR style first, then we had to override all the directional styles to make it RTL. But with the introduction of CSS logical properties, it's now easier than ever to make a bidirectional website."}),o(r);var s=e(r,2),V=e(a(s)),ee=a(V);t(ee,{text:"CSS Logical Properties"}),o(V),o(s);var n=e(s,2),te=e(a(n));t(te,{text:"are a set of properties that are used to define the logical direction of the content, rather than the physical direction."}),o(n);var i=e(n,2),H=a(i);t(H,{text:"To use CSS logical properties, you just need to replace directional properties with logical properties. For example, instead of using"});var S=e(H,2);t(S,{text:", you can use"});var ae=e(S,2);t(ae,{text:". This way, the margin will be on the start side of the content, regardless of the direction of the content."}),o(i);var d=e(i,2),C=e(a(d)),oe=a(C);t(oe,{text:"It's even easier with Tailwind CSS and daisyUI"}),o(C),o(d);var l=e(d,2),re=e(a(l));t(re,{text:". This means that you can use logical properties in your Tailwind CSS classes."}),o(l);var h=e(l,2),k=a(h);t(k,{text:"And"});var se=e(k,2);t(se,{text:"fully adapts to the logical properties and makes it even easier to make a bidirectional website."}),o(h);var c=e(h,2),T=a(c);t(T,{text:"All daisyUI components are now bidirectional by default. It means we don't use"});var Z=e(T,2);t(Z,{text:"or"});var $=e(Z,2);t($,{text:"anymore, we use"});var I=e($,2);t(I,{text:"and"});var ne=e(I,2);t(ne,{text:"instead and it will automatically adapt to the direction of the content."}),o(c);var p=e(c,2),L=e(a(p)),ie=a(L);t(ie,{text:"Step 1"}),o(L),o(p);var v=e(p,2),F=a(v);t(F,{text:"You need to use Tailwind CSS logical class names instead of directional class names."});var de=e(F,2);t(de,{text:"Here's a list of some of the most common logical class names."}),o(v);var g=e(v,2),U=a(g),z=a(U),m=a(z),le=a(m);t(le,{text:"❌ Don't use"}),o(m);var B=e(m),he=a(B);t(he,{text:"✅ Use"}),o(B),o(z),o(U),_e(),o(g);var b=e(g,2),M=a(b);t(M,{text:"You can find the full list in the"});var ce=e(M,2);t(ce,{text:"."}),o(b);var w=e(b,2),R=e(a(w)),pe=a(R);t(pe,{text:"Step 2"}),o(R),o(w);var u=e(w,2),P=a(u);t(P,{text:"Add"});var ve=e(P,2);t(ve,{text:"to the root element of your website for RTL languages. This will automatically change the direction of the content based on the language of the content."}),o(u);var x=e(u,2),A=e(a(x)),ge=a(A);t(ge,{text:"Step 3"}),o(A),o(x);var f=e(x,2),me=a(f);t(me,{text:"That's it! Now whenever your website is RTL, all spacing and alignments will be automatically adjusted to the RTL direction. daisyUI components are bidirectional by default, so you don't need to do anything else."}),o(f);var _=e(f,2),j=e(a(_)),be=a(j);t(be,{text:"Conclusion"}),o(j),o(_);var Y=e(_,2),D=a(Y);t(D,{text:"Making a bidirectional website is now easier than ever."});var G=e(D,2);t(G,{text:"Try to make it a habit to use logical class names (like"});var N=e(G,2);t(N,{text:","});var W=e(N,2);t(W,{text:",…) instead of directional class names (like"});var q=e(W,2);t(q,{text:","});var we=e(q,2);t(we,{text:",… ) in your CSS and you'll see how easy it is to make a bidirectional website."}),o(Y),xe(Q,y)},$$slots:{default:!0}}))}export{Ae as component};
