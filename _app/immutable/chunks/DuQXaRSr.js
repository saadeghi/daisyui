var Mn=Array.isArray,Jt=Array.prototype.indexOf,Ln=Array.from,qn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,Hn=Array.prototype,Xt=Object.getPrototypeOf;function jn(t){return typeof t=="function"}const Bn=()=>{};function Un(t){return typeof(t==null?void 0:t.then)=="function"}function Vn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,mt=4,X=8,it=16,I=32,P=64,G=128,w=256,K=512,v=1024,S=2048,N=4096,b=8192,tt=16384,tn=32768,At=65536,Gn=1<<17,nn=1<<19,xt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function It(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Xn(){nt=!0}const tr=1,nr=2,rr=4,er=8,ar=16,lr=1,sr=2,ur=4,fr=8,or=16,ir=4,_r=1,cr=2,on="[",_n="[!",cn="]",St={},vr=Symbol(),pr="http://www.w3.org/1999/xhtml",hr="http://www.w3.org/2000/svg";function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let o=null;function Et(t){o=t}function dr(t,n=!1,r){var e=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};nt&&!n&&(o.l={s:null,u:null,r1:[],r2:_t(!1)}),gn(()=>{e.d=!0})}function Er(t){const n=o;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Lt(a.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return t||{}}function rt(){return!nt||o!==null&&o.l===null}const q=new Map;function _t(t,n){var r={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return r}function wr(t){return Dt(_t(t))}function vn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),nt&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function yr(t,n=!1){return Dt(vn(t,n))}function Dt(t){return u!==null&&!y&&(u.f&g)!==0&&(x===null?Rn([t]):x.push(t)),t}function gr(t,n){return ct(t,zt(()=>st(t))),n}function ct(t,n){return u!==null&&!y&&rt()&&(u.f&(g|it))!==0&&(x===null||!x.includes(t))&&fn(),pn(t,n)}function pn(t,n){if(!t.equals(n)){var r=t.v;B?q.set(t,n):q.set(t,r),t.v=n,t.wv=Kt(),Ot(t,S),rt()&&f!==null&&(f.f&v)!==0&&(f.f&(I|P))===0&&(E===null?Sn([t]):E.push(t))}return n}function Tr(t,n=1){var r=st(t),e=n===1?r++:r--;return ct(t,r),e}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&S)===0&&(!e&&s===f||(m(s,n),(i&(v|w))!==0&&((i&g)!==0?Ot(s,N):lt(s))))}}let D=!1;function mr(t){D=t}let T;function Y(t){if(t===null)throw kt(),St;return T=t}function Ar(){return Y(C(T))}function xr(t){if(D){if(C(T)!==null)throw kt(),St;T=t}}function Ir(t=1){if(D){for(var n=t,r=T;n--;)r=C(r);T=r}}function Rr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===on||r===_n)&&(t+=1)}var e=C(n);n.remove(),n=e}}var wt,hn,dn,Nt,Ct;function Sr(){if(wt===void 0){wt=window,hn=document,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Nt=ht(n,"firstChild").get,Ct=ht(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function ut(t=""){return document.createTextNode(t)}function ft(t){return Nt.call(t)}function C(t){return Ct.call(t)}function kr(t,n){if(!D)return ft(t);var r=ft(T);if(r===null)r=T.appendChild(ut());else if(n&&r.nodeType!==3){var e=ut();return r==null||r.before(e),Y(e),e}return Y(r),r}function Dr(t,n){if(!D){var r=ft(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function Or(t,n=1,r=!1){let e=D?T:t;for(var l;n--;)l=e,e=C(e);if(!D)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=ut();return e===null?l==null||l.after(s):e.before(s),Y(s),s}return Y(e),e}function Nr(t){t.textContent=""}function bt(t){var n=g|S,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=xt,{ctx:o,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Cr(t){const n=bt(t);return n.equals=Rt,n}function Pt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function wn(t){var n,r=f;z(En(t));try{Pt(t),n=Wt(t)}finally{z(r)}return n}function Ft(t){var n=wn(t),r=(R||(t.f&w)!==0)&&t.deps!==null?N:v;m(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Mt(t){f===null&&u===null&&ln(),u!==null&&(u.f&w)!==0&&f===null&&an(),B&&en()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{at(a),a.f|=tn}catch(_){throw O(a),_}else n!==null&&lt(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(xt|G))===0;if(!s&&e&&(l!==null&&yn(a,l),u!==null&&(u.f&g)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function gn(t){const n=F(X,null,!1);return m(n,v),n.teardown=t,n}function br(t){Mt();var n=f!==null&&(f.f&I)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function Pr(t){return Mt(),vt(t)}function Fr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Lt(t){return F(mt,t,!1)}function Mr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=vt(()=>{t(),!e.ran&&(e.ran=!0,ct(r.l.r2,!0),zt(n))})}function Lr(){var t=o;vt(()=>{if(st(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&m(r,N),M(r)&&at(r),n.ran=!1}t.l.r2.v=!1}})}function vt(t){return F(X,t,!0)}function qr(t,n=[],r=bt){const e=n.map(r);return Tn(()=>t(...e.map(st)))}function Tn(t,n=0){return F(X|it|n,t,!0)}function Yr(t,n=!0){return F(X|I,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=B,e=u;gt(!0),Z(null);try{n.call(null)}finally{gt(r),Z(e)}}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:O(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&I)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&nn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}Yt(t,n&&!r),Q(t,0),m(t,tt);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];jt(t,r,!0),xn(r,()=>{O(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function jt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&At)!==0||(e.f&I)!==0;jt(e,n,a?r:!1),e=l}}}function Hr(t){Bt(t,!0)}function Bt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&v)===0&&(t.f^=v),M(t)&&(m(t,S),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&At)!==0||(r.f&I)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const In=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let H=[],j=[];function Ut(){var t=H;H=[],Tt(t)}function Vt(){var t=j;j=[],Tt(t)}function jr(t){H.length===0&&queueMicrotask(Ut),H.push(t)}function Br(t){j.length===0&&In(Vt),j.push(t)}function yt(){H.length>0&&Ut(),j.length>0&&Vt()}let V=!1,$=!1,W=null,k=!1,B=!1;function gt(t){B=t}let L=[];let u=null,y=!1;function Z(t){u=t}let f=null;function z(t){f=t}let x=null;function Rn(t){x=t}let c=null,d=0,E=null;function Sn(t){E=t}let Gt=1,J=0,R=!1;function Kt(){return++Gt}function M(t){var p;var n=t.f;if((n&S)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&K)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var A=t,U=A.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(A)))&&(a.reactions??(a.reactions=[])).push(A);s&&(A.f^=K),i&&U!==null&&(U.f&w)===0&&(A.f^=w)}for(l=0;l<_;l++)if(a=r[l],M(a)&&Ft(a),a.wv>t.wv)return!0}(!e||f!==null&&!R)&&m(t,v)}return!1}function kn(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw V=!1,t}function Dn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&G)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),Dn(n))throw t;return}r!==null&&(V=!0);{kn(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?$t(a,n,!1):n===a&&(r?m(a,S):(a.f&v)!==0&&m(a,N),lt(a))}}function Wt(t){var pt;var n=c,r=d,e=E,l=u,a=R,s=x,i=o,_=y,A=t.f;c=null,d=0,E=null,R=(A&w)!==0&&(y||!k||u===null),u=(A&(I|P))===0?t:null,x=null,Et(t.ctx),y=!1,J++;try{var U=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(Q(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!R)for(h=d;h<p.length;h++)((pt=p[h]).reactions??(pt.reactions=[])).push(t)}else p!==null&&d<p.length&&(Q(t,d),p.length=d);if(rt()&&E!==null&&!y&&p!==null&&(t.f&(g|N|S))===0)for(h=0;h<E.length;h++)$t(E[h],t);return l!==null&&(J++,E!==null&&(e===null?e=E:e.push(...E))),U}finally{c=n,d=r,E=e,u=l,R=a,x=s,Et(i),y=_}}function On(t,n){let r=n.reactions;if(r!==null){var e=Jt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(m(n,N),(n.f&(w|K))===0&&(n.f^=K),Pt(n),Q(n,0))}function Q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function at(t){var n=t.f;if((n&tt)===0){m(t,v);var r=f,e=o,l=k;f=t,k=!0;try{(n&it)!==0?mn(t):Yt(t),qt(t);var a=Wt(t);t.teardown=typeof a=="function"?a:null,t.wv=Gt;var s=t.deps,i}catch(_){et(_,t,r,e||t.ctx)}finally{k=l,f=r}}}function Nn(){try{sn()}catch(t){if(W!==null)et(t,W,null);else throw t}}function Zt(){var t=k;try{var n=0;for(k=!0;L.length>0;){n++>1e3&&Nn();var r=L,e=r.length;L=[];for(var l=0;l<e;l++){var a=bn(r[l]);Cn(a)}}}finally{$=!1,k=t,W=null,q.clear()}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(tt|b))===0)try{M(e)&&(at(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function lt(t){$||($=!0,queueMicrotask(Zt));for(var n=W=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|I))!==0){if((r&v)===0)return;n.f^=v}}L.push(n)}function bn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(I|P))!==0,a=l&&(e&v)!==0;if(!a&&(e&b)===0){if((e&mt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,M(r)&&at(r)}catch(A){et(A,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Pn(t){var n;for(yt();L.length>0;)$=!0,Zt(),yt();return n}async function Ur(){await Promise.resolve(),Pn()}function st(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){x!==null&&x.includes(t)&&un();var e=u.deps;t.rv<J&&(t.rv=J,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&w)===0&&(l.f^=w)}return r&&(l=t,M(l)&&Ft(l)),B&&q.has(t)?q.get(t):t.v}function zt(t){var n=y;try{return y=!0,t()}finally{y=n}}const Fn=-7169;function m(t,n){t.f=t.f&Fn|n}function Vr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ot(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ot(r)}}}function ot(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ot(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Vn as $,Ln as A,Fr as B,ut as C,Yr as D,D as E,o as F,f as G,on as H,Tn as I,At as J,_n as K,Rr as L,Hr as M,An as N,zt as O,jr as P,nn as Q,vn as R,dt as S,ct as T,vr as U,qn as V,O as W,Xn as X,Pr as Y,br as Z,Tt as _,Er as a,Vr as a0,bt as a1,rt as a2,Un as a3,pn as a4,_t as a5,z as a6,Z as a7,Et as a8,Pn as a9,fr as aA,Kn as aB,sr as aC,lr as aD,jn as aE,or as aF,$n as aG,pr as aH,Qt as aI,Br as aJ,dn as aK,_r as aL,cr as aM,u as aN,Ur as aO,gr as aP,it as aQ,tn as aR,ir as aS,Mr as aT,Lr as aU,wt as aV,hr as aW,rr as aa,b as ab,tr as ac,nr as ad,Mn as ae,er as af,jt as ag,xn as ah,ar as ai,hn as aj,wr as ak,yr as al,Tr as am,nt as an,Zn as ao,rn as ap,Yn as aq,Hn as ar,Qn as as,ht as at,Jn as au,Xt as av,zn as aw,Gn as ax,ur as ay,Rt as az,Ir as b,kr as c,vt as d,Lt as e,Dr as f,st as g,gn as h,Cr as i,Sr as j,ft as k,C as l,St as m,Bn as n,mr as o,dr as p,Y as q,xr as r,Or as s,qr as t,Ar as u,T as v,cn as w,kt as x,Wn as y,Nr as z};
