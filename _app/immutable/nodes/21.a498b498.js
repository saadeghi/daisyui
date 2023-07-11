import{s as le,E as U,y as se,O as ee,a as x,f as m,S as re,c as y,g as h,z as k,h as C,T as ne,d as c,j as f,i as u,w as V,l as q,m as B,v as A,Y,U as F}from"../chunks/scheduler.e5ccafd2.js";import{S as oe,i as ie,b as S,d as I,m as M,a as T,t as H,e as j}from"../chunks/index.fb4b3a7b.js";import{g as de,a as te}from"../chunks/index.18b79e66.js";import{M as ce}from"../chunks/mdsvex.aa94c70e.js";import{p as pe,C as ue,a as R,r as J}from"../chunks/ClassTable.d4e2fb37.js";function me(p){let e,n='<input id="my-drawer" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-zs8c7v"&&(e.innerHTML=n),this.h()},h(){f(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){u(a,e,s)},p:V,d(a){a&&c(e)}}}function he(p){let e,n=`<div class="$$drawer">
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
</div>`,a,s,r,d;return{c(){e=m("pre"),a=q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=C(e);a=B(o,n),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(l,o){u(l,e,o),A(e,a),r||(d=Y(s=J.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&F(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&c(e),r=!1,d()}}}function fe(p){let e,n='<input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-rzx13o"&&(e.innerHTML=n),this.h()},h(){f(e,"class","drawer lg:drawer-open h-56 rounded overflow-hidden")},m(a,s){u(a,e,s)},p:V,d(a){a&&c(e)}}}function we(p){let e,n=`<div class="$$drawer lg:$$drawer-open">
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
</div>`,a,s,r,d;return{c(){e=m("pre"),a=q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=C(e);a=B(o,n),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(l,o){u(l,e,o),A(e,a),r||(d=Y(s=J.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&F(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&c(e),r=!1,d()}}}function be(p){let e,n='<input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1g0pyjb"&&(e.innerHTML=n),this.h()},h(){f(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){u(a,e,s)},p:V,d(a){a&&c(e)}}}function ve(p){let e,n=`<div class="$$drawer">
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
</div>`,a,s,r,d;return{c(){e=m("pre"),a=q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=C(e);a=B(o,n),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(l,o){u(l,e,o),A(e,a),r||(d=Y(s=J.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&F(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&c(e),r=!1,d()}}}function $e(p){let e,n='<input id="my-drawer-4" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-4" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1mjpfmp"&&(e.innerHTML=n),this.h()},h(){f(e,"class","drawer drawer-end h-56 rounded overflow-hidden")},m(a,s){u(a,e,s)},p:V,d(a){a&&c(e)}}}function ge(p){let e,n=`<div class="$$drawer $$drawer-end">
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
</div>`,a,s,r,d;return{c(){e=m("pre"),a=q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=C(e);a=B(o,n),o.forEach(c),this.h()},h(){f(e,"slot","html")},m(l,o){u(l,e,o),A(e,a),r||(d=Y(s=J.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&F(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&c(e),r=!1,d()}}}function _e(p){let e,n,a,s='<a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure',r,d,l,o=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    └── <span class="token comment">// footer</span>
  └── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       └── <span class="token comment">// Sidebar content (menu or anything)</span></code>`,L,w,G='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)</div>',D,b,K='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div>',E,v,P,$,N,g,z,_,O;return e=new ue({props:{data:[{type:"component",class:"drawer",desc:"The root container"},{type:"component",class:"drawer-toggle",desc:"For the hidden checkbox that controls the drawer"},{type:"component",class:"drawer-content",desc:"Container for all page content"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"},{type:"responsive",class:"drawer-open",desc:"Forces the drawer to be open"}]}}),v=new R({props:{title:"Drawer",$$slots:{html:[he],default:[me]},$$scope:{ctx:p}}}),$=new R({props:{title:"Responsive",desc:"Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class",$$slots:{html:[we],default:[fe]},$$scope:{ctx:p}}}),g=new R({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[ve],default:[be]},$$scope:{ctx:p}}}),_=new R({props:{title:"Drawer that opens from right side of page",$$slots:{html:[ge],default:[$e]},$$scope:{ctx:p}}}),{c(){S(e.$$.fragment),n=x(),a=m("h3"),a.innerHTML=s,r=x(),d=m("pre"),l=new re(!1),L=x(),w=m("div"),w.innerHTML=G,D=x(),b=m("div"),b.innerHTML=K,E=x(),S(v.$$.fragment),P=x(),S($.$$.fragment),N=x(),S(g.$$.fragment),z=x(),S(_.$$.fragment),this.h()},l(t){I(e.$$.fragment,t),n=y(t),a=h(t,"H3",{id:!0,"data-svelte-h":!0}),k(a)!=="svelte-64q3i8"&&(a.innerHTML=s),r=y(t),d=h(t,"PRE",{class:!0});var i=C(d);l=ne(i,!1),i.forEach(c),L=y(t),w=h(t,"DIV",{class:!0,"data-svelte-h":!0}),k(w)!=="svelte-193enih"&&(w.innerHTML=G),D=y(t),b=h(t,"DIV",{class:!0,"data-svelte-h":!0}),k(b)!=="svelte-1gaknfc"&&(b.innerHTML=K),E=y(t),I(v.$$.fragment,t),P=y(t),I($.$$.fragment,t),N=y(t),I(g.$$.fragment,t),z=y(t),I(_.$$.fragment,t),this.h()},h(){f(a,"id","drawer-tags-structure"),l.a=null,f(d,"class","language-js"),f(w,"class","alert text-sm mt-4"),f(b,"class","alert text-sm mt-4")},m(t,i){M(e,t,i),u(t,n,i),u(t,a,i),u(t,r,i),u(t,d,i),l.m(o,d),u(t,L,i),u(t,w,i),u(t,D,i),u(t,b,i),u(t,E,i),M(v,t,i),u(t,P,i),M($,t,i),u(t,N,i),M(g,t,i),u(t,z,i),M(_,t,i),O=!0},p(t,i){const Q={};i&5&&(Q.$$scope={dirty:i,ctx:t}),v.$set(Q);const W={};i&5&&(W.$$scope={dirty:i,ctx:t}),$.$set(W);const X={};i&5&&(X.$$scope={dirty:i,ctx:t}),g.$set(X);const Z={};i&5&&(Z.$$scope={dirty:i,ctx:t}),_.$set(Z)},i(t){O||(T(e.$$.fragment,t),T(v.$$.fragment,t),T($.$$.fragment,t),T(g.$$.fragment,t),T(_.$$.fragment,t),O=!0)},o(t){H(e.$$.fragment,t),H(v.$$.fragment,t),H($.$$.fragment,t),H(g.$$.fragment,t),H(_.$$.fragment,t),O=!1},d(t){t&&(c(n),c(a),c(r),c(d),c(L),c(w),c(D),c(b),c(E),c(P),c(N),c(z)),j(e,t),j(v,t),j($,t),j(g,t),j(_,t)}}}function xe(p){let e,n;const a=[p[1],ae];let s={$$slots:{default:[_e]},$$scope:{ctx:p}};for(let r=0;r<a.length;r+=1)s=U(s,a[r]);return e=new ce({props:s}),{c(){S(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,d){M(e,r,d),n=!0},p(r,[d]){const l=d&2?de(a,[d&2&&te(r[1]),d&0&&te(ae)]):{};d&5&&(l.$$scope={dirty:d,ctx:r}),e.$set(l)},i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){H(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}const ae={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0};function ye(p,e,n){let a;return se(p,pe,s=>n(0,a=s)),p.$$set=s=>{n(1,e=U(U({},e),ee(s)))},e=ee(e),[a,e]}class He extends oe{constructor(e){super(),ie(this,e,ye,xe,le,{})}}export{He as component};
