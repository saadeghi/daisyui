import{s as ae,E as J,y as le,O as Z,a as x,f as m,c as y,g as h,z as k,h as C,d as c,j as f,i as u,w as R,l as V,m as q,v as B,Y as A,U as Y}from"../chunks/scheduler.e71eccdd.js";import{S as se,i as re,b as M,d as I,m as S,a as T,t as H,e as j}from"../chunks/index.445ee094.js";import{g as ne,a as ee}from"../chunks/index.18b79e66.js";import{M as oe}from"../chunks/mdsvex.a7a8a710.js";import{p as ie,C as de,a as O,r as F}from"../chunks/ClassTable.d8ef1d45.js";function ce(p){let e,r='<input id="my-drawer" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=r,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-zs8c7v"&&(e.innerHTML=r),this.h()},h(){f(e,"class","drawer h-56 rounded overflow-hidden")},m(a,l){u(a,e,l)},p:R,d(a){a&&c(e)}}}function pe(p){let e,r=`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,a,l,s,d;return{c(){e=m("pre"),a=V(r),this.h()},l(n){e=h(n,"PRE",{slot:!0});var o=C(e);a=q(o,r),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(n,o){u(n,e,o),B(e,a),s||(d=A(l=F.call(null,e,{to:p[0]})),s=!0)},p(n,o){l&&Y(l.update)&&o&1&&l.update.call(null,{to:n[0]})},d(n){n&&c(e),s=!1,d()}}}function ue(p){let e,r='<input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=r,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-rzx13o"&&(e.innerHTML=r),this.h()},h(){f(e,"class","drawer lg:drawer-open h-56 rounded overflow-hidden")},m(a,l){u(a,e,l)},p:R,d(a){a&&c(e)}}}function me(p){let e,r=`<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,a,l,s,d;return{c(){e=m("pre"),a=V(r),this.h()},l(n){e=h(n,"PRE",{slot:!0});var o=C(e);a=q(o,r),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(n,o){u(n,e,o),B(e,a),s||(d=A(l=F.call(null,e,{to:p[0]})),s=!0)},p(n,o){l&&Y(l.update)&&o&1&&l.update.call(null,{to:n[0]})},d(n){n&&c(e),s=!1,d()}}}function he(p){let e,r='<input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=r,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1g0pyjb"&&(e.innerHTML=r),this.h()},h(){f(e,"class","drawer h-56 rounded overflow-hidden")},m(a,l){u(a,e,l)},p:R,d(a){a&&c(e)}}}function fe(p){let e,r=`<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" /> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>`,a,l,s,d;return{c(){e=m("pre"),a=V(r),this.h()},l(n){e=h(n,"PRE",{slot:!0});var o=C(e);a=q(o,r),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(n,o){u(n,e,o),B(e,a),s||(d=A(l=F.call(null,e,{to:p[0]})),s=!0)},p(n,o){l&&Y(l.update)&&o&1&&l.update.call(null,{to:n[0]})},d(n){n&&c(e),s=!1,d()}}}function we(p){let e,r='<input id="my-drawer-4" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-4" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=r,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1mjpfmp"&&(e.innerHTML=r),this.h()},h(){f(e,"class","drawer drawer-end h-56 rounded overflow-hidden")},m(a,l){u(a,e,l)},p:R,d(a){a&&c(e)}}}function be(p){let e,r=`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,l,s,d;return{c(){e=m("pre"),a=V(r),this.h()},l(n){e=h(n,"PRE",{slot:!0});var o=C(e);a=q(o,r),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(n,o){u(n,e,o),B(e,a),s||(d=A(l=F.call(null,e,{to:p[0]})),s=!0)},p(n,o){l&&Y(l.update)&&o&1&&l.update.call(null,{to:n[0]})},d(n){n&&c(e),s=!1,d()}}}function ve(p){let e,r,a,l='<a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure',s,d,n=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    └── <span class="token comment">// footer</span>
  └── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       └── <span class="token comment">// Sidebar content (menu or anything)</span></code>`,o,w,U='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)</div>',L,b,G='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div>',D,v,E,$,P,g,N,_,z;return e=new de({props:{data:[{type:"component",class:"drawer",desc:"The root container"},{type:"component",class:"drawer-toggle",desc:"For the hidden checkbox that controls the drawer"},{type:"component",class:"drawer-content",desc:"Container for all page content"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"},{type:"responsive",class:"drawer-open",desc:"Forces the drawer to be open"}]}}),v=new O({props:{title:"Drawer",$$slots:{html:[pe],default:[ce]},$$scope:{ctx:p}}}),$=new O({props:{title:"Responsive",desc:"Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class",$$slots:{html:[me],default:[ue]},$$scope:{ctx:p}}}),g=new O({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[fe],default:[he]},$$scope:{ctx:p}}}),_=new O({props:{title:"Drawer that opens from right side of page",$$slots:{html:[be],default:[we]},$$scope:{ctx:p}}}),{c(){M(e.$$.fragment),r=x(),a=m("h3"),a.innerHTML=l,s=x(),d=m("pre"),o=x(),w=m("div"),w.innerHTML=U,L=x(),b=m("div"),b.innerHTML=G,D=x(),M(v.$$.fragment),E=x(),M($.$$.fragment),P=x(),M(g.$$.fragment),N=x(),M(_.$$.fragment),this.h()},l(t){I(e.$$.fragment,t),r=y(t),a=h(t,"H3",{id:!0,"data-svelte-h":!0}),k(a)!=="svelte-64q3i8"&&(a.innerHTML=l),s=y(t),d=h(t,"PRE",{class:!0});var i=C(d);i.forEach(c),o=y(t),w=h(t,"DIV",{class:!0,"data-svelte-h":!0}),k(w)!=="svelte-193enih"&&(w.innerHTML=U),L=y(t),b=h(t,"DIV",{class:!0,"data-svelte-h":!0}),k(b)!=="svelte-1gaknfc"&&(b.innerHTML=G),D=y(t),I(v.$$.fragment,t),E=y(t),I($.$$.fragment,t),P=y(t),I(g.$$.fragment,t),N=y(t),I(_.$$.fragment,t),this.h()},h(){f(a,"id","drawer-tags-structure"),f(d,"class","language-js"),f(w,"class","alert text-sm mt-4"),f(b,"class","alert text-sm mt-4")},m(t,i){S(e,t,i),u(t,r,i),u(t,a,i),u(t,s,i),u(t,d,i),d.innerHTML=n,u(t,o,i),u(t,w,i),u(t,L,i),u(t,b,i),u(t,D,i),S(v,t,i),u(t,E,i),S($,t,i),u(t,P,i),S(g,t,i),u(t,N,i),S(_,t,i),z=!0},p(t,i){const K={};i&5&&(K.$$scope={dirty:i,ctx:t}),v.$set(K);const Q={};i&5&&(Q.$$scope={dirty:i,ctx:t}),$.$set(Q);const W={};i&5&&(W.$$scope={dirty:i,ctx:t}),g.$set(W);const X={};i&5&&(X.$$scope={dirty:i,ctx:t}),_.$set(X)},i(t){z||(T(e.$$.fragment,t),T(v.$$.fragment,t),T($.$$.fragment,t),T(g.$$.fragment,t),T(_.$$.fragment,t),z=!0)},o(t){H(e.$$.fragment,t),H(v.$$.fragment,t),H($.$$.fragment,t),H(g.$$.fragment,t),H(_.$$.fragment,t),z=!1},d(t){t&&(c(r),c(a),c(s),c(d),c(o),c(w),c(L),c(b),c(D),c(E),c(P),c(N)),j(e,t),j(v,t),j($,t),j(g,t),j(_,t)}}}function $e(p){let e,r;const a=[p[1],te];let l={$$slots:{default:[ve]},$$scope:{ctx:p}};for(let s=0;s<a.length;s+=1)l=J(l,a[s]);return e=new oe({props:l}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,d){S(e,s,d),r=!0},p(s,[d]){const n=d&2?ne(a,[d&2&&ee(s[1]),d&0&&ee(te)]):{};d&5&&(n.$$scope={dirty:d,ctx:s}),e.$set(n)},i(s){r||(T(e.$$.fragment,s),r=!0)},o(s){H(e.$$.fragment,s),r=!1},d(s){j(e,s)}}}const te={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0};function ge(p,e,r){let a;return le(p,ie,l=>r(0,a=l)),p.$$set=l=>{r(1,e=J(J({},e),Z(l)))},e=Z(e),[a,e]}class Ie extends se{constructor(e){super(),re(this,e,ge,$e,ae,{})}}export{Ie as component};
