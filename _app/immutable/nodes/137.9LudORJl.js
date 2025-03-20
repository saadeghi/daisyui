import{t as K,a as Z}from"../chunks/LFhyL0Oe.js";import"../chunks/gclTb0SW.js";import{f as z,s as a,c as s,r as t}from"../chunks/C4PvZKYF.js";import{h as o}from"../chunks/wz55X6qA.js";import{l as L,s as M}from"../chunks/D6tDoBIA.js";import{L as P}from"../chunks/cKUsDtCU.js";import{T as n}from"../chunks/BMNrV7vn.js";const x={title:"Install daisyUI for SvelteKit",desc:"How to install Tailwind CSS and daisyUI in a SvelteKit project"},{title:X,desc:Y}=x;var N=K('<h3 id="1-create-a-new-sveltekit-project"><a href="#1-create-a-new-sveltekit-project" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="1. Create a new SvelteKit project"><!></span></h3> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-and-daisyui"><a href="#2-install-tailwind-css-and-daisyui" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="2. Install Tailwind CSS and daisyUI"><!></span></h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">vite.config.js</div><!></div> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">src/style.css</div><!></div> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">src/routes/+page.svelte</div><!></div> <p><!></p>',1);function aa(F,w){const f=L(w,["children","$$slots","$$events","$$legacy"]);P(F,M(()=>f,x,{children:(_,q)=>{var m=N(),e=z(m),k=a(s(e)),C=s(k);n(C,{text:"1. Create a new SvelteKit project"}),t(k),t(e);var i=a(e,2),D=s(i);n(D,{text:"Create a new SvelteKit project in the current directory"}),t(i);var l=a(i,2),A=a(s(l));o(A,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npx</span><span style="color:var(--shiki-attr-value)"> sv</span><span style="color:var(--shiki-attr-value)"> create</span><span style="color:var(--shiki-attr-value)"> ./</span></span></code></pre>'),t(l);var r=a(l,2),g=a(s(r)),S=s(g);n(S,{text:"2. Install Tailwind CSS and daisyUI"}),t(g),t(r);var p=a(r,2),V=a(s(p));o(V,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> tailwindcss@latest</span><span style="color:var(--shiki-attr-value)"> @tailwindcss/vite@latest</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>'),t(p);var c=a(p,2),H=s(c);n(H,{text:"Add Tailwind CSS to Vite config"}),t(c);var v=a(c,2),B=a(s(v));o(B,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#7DCFFF">import</span><span style="color:#0DB9D7"> tailwindcss</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">@tailwindcss/vite</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#9ABDF5"> &#123; </span><span style="color:#0DB9D7">sveltekit</span><span style="color:#9ABDF5"> &#125;</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">@sveltejs/kit/vite</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#9ABDF5"> &#123; </span><span style="color:#0DB9D7">defineConfig</span><span style="color:#9ABDF5"> &#125;</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">vite</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7DCFFF">export</span><span style="color:#7DCFFF"> default</span><span style="color:#7AA2F7"> defineConfig</span><span style="color:#9ABDF5">(&#123;</span></span>
<span class="line"><span style="color:#73DACA">  plugins</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span><span style="color:#7AA2F7">tailwindcss</span><span style="color:#9ABDF5">()</span><span style="color:var(--shiki-punctuation)">, </span><span style="color:#7AA2F7">sveltekit</span><span style="color:#9ABDF5">()]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">&#125;)</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"></span></code></pre>`),t(v);var d=a(v,2),$=s(d);n($,{text:"Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)"}),t(d);var h=a(d,2),I=a(s(h));o(I,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(h);var y=a(h,2),T=s(y);n(T,{text:"Import the CSS file in your Svelte page (or layout)"}),t(y);var u=a(y,2),j=a(s(u));o(j,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;script></span></span>
<span class="line"><span style="color:#7DCFFF">  import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">../style.css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/script></span></span></code></pre>`),t(u);var b=a(u,2),U=s(b);n(U,{text:"Now you can use daisyUI class names!"}),t(b),Z(_,m)},$$slots:{default:!0}}))}export{aa as component};
