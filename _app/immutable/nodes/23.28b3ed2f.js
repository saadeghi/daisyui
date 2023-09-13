import{s as de,N as te,z as ce,S as se,a as b,f as h,H as pe,K as re,c as $,g as f,A as P,h as g,F as ue,d,L as ne,j as u,i as m,x as M,y as X,l as G,m as Q,X as U,E as W}from"../chunks/scheduler.cc1ce551.js";import{S as me,i as he,b as H,d as E,m as C,a as D,t as L,e as N}from"../chunks/index.ffedd617.js";import{g as fe,a as oe}from"../chunks/spread.8a54911c.js";import{M as we,p as ve,C as be,a as K,r as Z}from"../chunks/ClassTable.0c8891b2.js";import{T as $e}from"../chunks/Translate.1fd63f20.js";function ge(p){let e,n='<input id="my-drawer" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-awdj8m"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function _e(p){let e,n=`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function xe(p){let e,n='<input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1a79wez"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer lg:drawer-open h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function ye(p){let e,n=`<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function ke(p){let e,n='<input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-lwhdi2"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function Ie(p){let e,n=`<div class="$$drawer">
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
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Se(p){let e,n='<input id="my-drawer-4" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-4" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-jxi3fu"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer drawer-end h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function Me(p){let e,n=`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Te(p){let e,n,a,s='<a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure',r,c,l,o=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    └── <span class="token comment">// footer</span>
  └── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       └── <span class="token comment">// Sidebar content (menu or anything)</span></code>`,R,w,v,_,ee,z,T,B,x,ae='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div>',q,y,A,k,F,I,Y,S,J;return e=new be({props:{data:[{type:"component",class:"drawer",desc:"The root container"},{type:"component",class:"drawer-toggle",desc:"For the hidden checkbox that controls the drawer"},{type:"component",class:"drawer-content",desc:"Container for all page content"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"},{type:"responsive",class:"drawer-open",desc:"Forces the drawer to be open"}]}}),T=new $e({props:{text:"Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)"}}),y=new K({props:{title:"Drawer",$$slots:{html:[_e],default:[ge]},$$scope:{ctx:p}}}),k=new K({props:{title:"Responsive",desc:"Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class",$$slots:{html:[ye],default:[xe]},$$scope:{ctx:p}}}),I=new K({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Ie],default:[ke]},$$scope:{ctx:p}}}),S=new K({props:{title:"Drawer that opens from right side of page",$$slots:{html:[Me],default:[Se]},$$scope:{ctx:p}}}),{c(){H(e.$$.fragment),n=b(),a=h("h3"),a.innerHTML=s,r=b(),c=h("pre"),l=new pe(!1),R=b(),w=h("div"),v=re("svg"),_=re("path"),ee=b(),z=h("div"),H(T.$$.fragment),B=b(),x=h("div"),x.innerHTML=ae,q=b(),H(y.$$.fragment),A=b(),H(k.$$.fragment),F=b(),H(I.$$.fragment),Y=b(),H(S.$$.fragment),this.h()},l(t){E(e.$$.fragment,t),n=$(t),a=f(t,"H3",{id:!0,"data-svelte-h":!0}),P(a)!=="svelte-64q3i8"&&(a.innerHTML=s),r=$(t),c=f(t,"PRE",{class:!0});var i=g(c);l=ue(i,!1),i.forEach(d),R=$(t),w=f(t,"DIV",{class:!0});var j=g(w);v=ne(j,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var V=g(v);_=ne(V,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(_).forEach(d),V.forEach(d),ee=$(j),z=f(j,"DIV",{});var O=g(z);E(T.$$.fragment,O),O.forEach(d),j.forEach(d),B=$(t),x=f(t,"DIV",{class:!0,"data-svelte-h":!0}),P(x)!=="svelte-1gaknfc"&&(x.innerHTML=ae),q=$(t),E(y.$$.fragment,t),A=$(t),E(k.$$.fragment,t),F=$(t),E(I.$$.fragment,t),Y=$(t),E(S.$$.fragment,t),this.h()},h(){u(a,"id","drawer-tags-structure"),l.a=null,u(c,"class","language-js"),u(_,"stroke-linecap","round"),u(_,"stroke-linejoin","round"),u(_,"stroke-width","2"),u(_,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),u(v,"xmlns","http://www.w3.org/2000/svg"),u(v,"fill","none"),u(v,"viewBox","0 0 24 24"),u(v,"class","stroke-current shrink-0 w-6 h-6"),u(w,"class","alert text-sm mt-4"),u(x,"class","alert text-sm mt-4")},m(t,i){C(e,t,i),m(t,n,i),m(t,a,i),m(t,r,i),m(t,c,i),l.m(o,c),m(t,R,i),m(t,w,i),M(w,v),M(v,_),M(w,ee),M(w,z),C(T,z,null),m(t,B,i),m(t,x,i),m(t,q,i),C(y,t,i),m(t,A,i),C(k,t,i),m(t,F,i),C(I,t,i),m(t,Y,i),C(S,t,i),J=!0},p(t,i){const j={};i&5&&(j.$$scope={dirty:i,ctx:t}),y.$set(j);const V={};i&5&&(V.$$scope={dirty:i,ctx:t}),k.$set(V);const O={};i&5&&(O.$$scope={dirty:i,ctx:t}),I.$set(O);const le={};i&5&&(le.$$scope={dirty:i,ctx:t}),S.$set(le)},i(t){J||(D(e.$$.fragment,t),D(T.$$.fragment,t),D(y.$$.fragment,t),D(k.$$.fragment,t),D(I.$$.fragment,t),D(S.$$.fragment,t),J=!0)},o(t){L(e.$$.fragment,t),L(T.$$.fragment,t),L(y.$$.fragment,t),L(k.$$.fragment,t),L(I.$$.fragment,t),L(S.$$.fragment,t),J=!1},d(t){t&&(d(n),d(a),d(r),d(c),d(R),d(w),d(B),d(x),d(q),d(A),d(F),d(Y)),N(e,t),N(T),N(y,t),N(k,t),N(I,t),N(S,t)}}}function je(p){let e,n;const a=[p[1],ie];let s={$$slots:{default:[Te]},$$scope:{ctx:p}};for(let r=0;r<a.length;r+=1)s=te(s,a[r]);return e=new we({props:s}),{c(){H(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,c){C(e,r,c),n=!0},p(r,[c]){const l=c&2?fe(a,[c&2&&oe(r[1]),c&0&&oe(ie)]):{};c&5&&(l.$$scope={dirty:c,ctx:r}),e.$set(l)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}const ie={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0,layout:"components"};function He(p,e,n){let a;return ce(p,ve,s=>n(0,a=s)),p.$$set=s=>{n(1,e=te(te({},e),se(s)))},e=se(e),[a,e]}class Pe extends me{constructor(e){super(),he(this,e,He,je,de,{})}}export{Pe as component};
