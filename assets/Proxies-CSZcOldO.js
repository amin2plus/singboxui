import{ap as Oe,o as Pe,aq as Be,ar as Ae,as as he,L as Re,at as je,A as ie,N as Se,u as ne,d as e,au as He,i as l,ac as I,av as Fe,aw as ze,D as w,ax as We,ay as Ye,F as B,az as Ke,aA as Ve,aB as Qe,aC as Xe,aD as K,aE as Ze,aF as qe,g as y,aG as Je,aH as Ge,aI as et,aJ as ae,aK as Te,aL as Ne,aM as te,aN as re,aO as ce,Q as tt,t as m,aP as rt,aQ as me,S as P,aR as D,aS as Le,aT as de,Z as V,Y as Ue,a9 as Ee,H as oe,E as nt,W as lt,aU as st,K as it,b as at,y as ct,R as ot,T as dt,B as q,a0 as ut,aV as gt,aW as fe,aX as vt,aY as be,aZ as pe,l as ht}from"./index-ymcFu3FS.js";import{D as mt}from"./DocumentTitle-DkC38u8H.js";import{f as ft}from"./time-DoqS8IFv.js";import{I as xe}from"./IconReload-BUdJ5_O9.js";function ye(n){const r={...n},s={...n},i={},d=c=>{let h=i[c];if(!h){if(!je())return r[c];i[c]=h=ie(r[c],{internal:!0}),delete r[c]}return h[0]()};for(const c in n)Object.defineProperty(s,c,{get:()=>d(c),enumerable:!0});const a=(c,h)=>{const o=i[c];if(o)return o[1](h);c in r&&(r[c]=he(h,[r[c]]))};return[s,(c,h)=>{if(Be(c)){const o=Ae(()=>Object.entries(he(c,s)));Re(()=>{for(const[S,p]of o)a(S,()=>p)})}else a(c,h);return s}]}function bt(n,r){if(Oe.context){const[s,i]=ye(n);return Pe(()=>i(r())),[s,i]}return ye(r())}/**
 * @license @tabler/icons-solidjs v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var we=Se("outline","brand-speedtest","IconBrandSpeedtest",[["path",{d:"M5.636 19.364a9 9 0 1 1 12.728 0"}],["path",{d:"M16 9l-4 4"}]]);/**
 * @license @tabler/icons-solidjs v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pt=Se("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6"}]]),xt=m('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full"></select></div><div><input type=number class="input input-bordered w-full"><input type=number class="input input-bordered w-full">'),yt=m('<option class="flex items-center gap-2">'),wt=m("<option>");const $t=n=>{const[r]=ne();return e(tt,{ref:s=>{var i;return(i=n.ref)==null?void 0:i.call(n,s)},get icon(){return e(He,{size:24})},get title(){return r("proxiesSettings")},get children(){var s=xt(),i=s.firstChild,d=i.firstChild,a=d.firstChild,c=i.nextSibling,h=c.firstChild,o=c.nextSibling,S=o.firstChild,p=o.nextSibling,$=p.firstChild,T=p.nextSibling,M=T.firstChild,x=M.firstChild,N=T.nextSibling,k=N.firstChild,_=k.firstChild,U=N.nextSibling,A=U.firstChild,Q=U.nextSibling,F=Q.firstChild,X=F.nextSibling;return l(i,e(I,{withDivider:!0,get children(){return r("autoCloseConns")}}),d),a.addEventListener("change",g=>Fe(g.target.checked)),l(c,e(I,{withDivider:!0,get children(){return r("urlForLatencyTest")}}),h),h.addEventListener("change",g=>ze(g.target.value)),l(o,e(I,{withDivider:!0,get children(){return[w(()=>r("latencyTestTimeoutDuration"))," (",w(()=>r("ms")),")"]}}),S),S.addEventListener("change",g=>We(Number(g.target.value))),l(p,e(I,{withDivider:!0,get children(){return r("proxiesSorting")}}),$),$.addEventListener("change",g=>Ye(g.target.value)),l($,e(B,{get each(){return Object.values(Ke)},children:g=>(()=>{var E=yt();return E.value=g,l(E,()=>r(g)),E})()})),l(T,e(I,{withDivider:!0,get children(){return r("hideUnavailableProxies")}}),M),x.addEventListener("change",g=>Ve(g.target.checked)),l(N,e(I,{withDivider:!0,get children(){return r("renderInTwoColumns")}}),k),_.addEventListener("change",g=>Qe(g.target.checked)),l(U,e(I,{withDivider:!0,get children(){return r("proxiesPreviewType")}}),A),A.addEventListener("change",g=>Xe(g.target.value)),l(A,e(B,{get each(){return Object.values(K)},children:g=>(()=>{var E=wt();return E.value=g,l(E,()=>r(g)),E})()})),l(Q,e(I,{withDivider:!0,get children(){return r("iconHeight")}}),F),F.addEventListener("change",g=>Ze(Number(g.target.value))),l(Q,e(I,{withDivider:!0,get children(){return r("iconMarginRight")}}),X),X.addEventListener("change",g=>qe(Number(g.target.value))),y(()=>a.checked=Je()),y(()=>h.value=Ge()),y(()=>S.value=et()),y(()=>$.value=ae()),y(()=>x.checked=Te()),y(()=>_.checked=Ne()),y(()=>A.value=te()),y(()=>F.value=re()),y(()=>X.value=ce()),s}})},$e=n=>{const r=()=>te()===K.OFF,s=w(()=>n.proxyNameList.length<=10),i=w(()=>{const a=te();return a===K.BAR||a===K.Auto&&!s()}),d=w(()=>{const a=te();return a===K.DOTS||a===K.Auto&&s()});return e(P,{get when(){return!r()},get children(){return e(rt,{get children(){return[e(me,{get when(){return i()},get children(){return e(Ct,{get proxyNameList(){return n.proxyNameList},get testUrl(){return n.testUrl},get now(){return n.now}})}}),e(me,{get when(){return d()},get children(){return e(Nt,{get proxyNameList(){return n.proxyNameList},get testUrl(){return n.testUrl},get now(){return n.now}})}})]}})}})};var _t=m('<div class="flex items-center gap-2"><div class="my-1 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-green-600></div><div class=bg-yellow-500></div><div class=bg-red-500></div><div class=bg-neutral>');const Ct=n=>{const{getLatencyByName:r}=de(),s=w(()=>n.proxyNameList.map(o=>r(o,n.testUrl))),i=w(()=>s().length),d=w(()=>s().filter(o=>o>D().NOT_CONNECTED&&o<=D().MEDIUM).length),a=w(()=>s().filter(o=>o>D().MEDIUM&&o<=D().HIGH).length),c=w(()=>s().filter(o=>o>D().HIGH).length),h=w(()=>s().filter(o=>o===D().NOT_CONNECTED).length);return(()=>{var o=_t(),S=o.firstChild,p=S.firstChild,$=p.nextSibling,T=$.nextSibling,M=T.nextSibling;return l(o,e(P,{get when(){return n.now},get children(){return e(Le,{get proxyName(){return n.now},get testUrl(){return n.testUrl}})}}),null),y(x=>{var N=`${d()*100/i()}%`,k=`${a()*100/i()}%`,_=`${c()*100/i()}%`,U=`${h()*100/i()}%`;return N!==x.e&&((x.e=N)!=null?p.style.setProperty("width",N):p.style.removeProperty("width")),k!==x.t&&((x.t=k)!=null?$.style.setProperty("width",k):$.style.removeProperty("width")),_!==x.a&&((x.a=_)!=null?T.style.setProperty("width",_):T.style.removeProperty("width")),U!==x.o&&((x.o=U)!=null?M.style.setProperty("width",U):M.style.removeProperty("width")),x},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()};var Pt=m("<div>"),St=m('<div class="flex items-center gap-2"><div class="flex flex-1 flex-wrap items-center gap-1">');const Tt=n=>{let r=n.selected?"bg-white border-4 border-green-600":"bg-green-600";return typeof n.latency!="number"||n.latency===D().NOT_CONNECTED?r=n.selected?"bg-white border-4 border-neutral":"bg-neutral":n.latency>D().HIGH?r=n.selected?"bg-white border-4 border-red-500":"bg-red-500":n.latency>D().MEDIUM&&(r=n.selected?"bg-white border-4 border-yellow-500":"bg-yellow-500"),(()=>{var s=Pt();return y(i=>{var d=V("h-4 w-4 rounded-full",r),a=n.name;return d!==i.e&&Ue(s,i.e=d),a!==i.t&&Ee(s,"title",i.t=a),i},{e:void 0,t:void 0}),s})()},Nt=n=>{const{getLatencyByName:r}=de();return(()=>{var s=St(),i=s.firstChild;return l(i,e(B,{get each(){return n.proxyNameList.map(d=>[d,r(d,n.testUrl)])},children:([d,a])=>e(Tt,{name:d,latency:a,get selected(){return n.now===d}})})),l(s,e(P,{get when(){return n.now},get children(){return e(Le,{get proxyName(){return n.now},get testUrl(){return n.testUrl}})}}),null),s})()};var Lt=m('<div class="flex items-center gap-2 pt-1"><progress class=progress max=100></progress><div class="badge badge-secondary badge-sm">%'),Ut=m('<div class="flex flex-wrap items-center justify-between"><div class="text-sm text-slate-500"> / </div><div class="text-sm text-slate-500">: ');const Et=n=>{const{Download:r=0,Upload:s=0,Total:i=0,Expire:d=0}=n,a=oe(i,{units:"iec"}),c=oe(r+s,{units:"iec"}),h=Math.min(nt.toFinite(((r+s)/i*100).toFixed(1)),999);return{total:a,used:c,percentage:h,expirePrefix:()=>{const[p]=ne();return p("expire")},expireStr:()=>{const[p]=ne();return d===0?p("noExpire"):lt(d*1e3).format("YYYY-MM-DD")}}},It=n=>{if(!n.subscriptionInfo)return;const r=Et(n.subscriptionInfo);return[(()=>{var s=Lt(),i=s.firstChild,d=i.nextSibling,a=d.firstChild;return l(d,()=>r.percentage,a),y(()=>i.value=r.percentage),s})(),(()=>{var s=Ut(),i=s.firstChild,d=i.firstChild,a=i.nextSibling,c=a.firstChild;return l(i,()=>`${r.used}`,d),l(i,()=>`${r.total}`,null),l(a,()=>r.expirePrefix(),c),l(a,()=>r.expireStr(),null),s})()]};var Dt={width:0,height:0};function _e(){return{width:window.innerWidth,height:window.innerHeight}}function Mt(){const[n,r]=bt(Dt,_e);return st(window,"resize",()=>r(_e())),n}var kt=m("<div class=mb-2>"),Ot=m('<div class="flex gap-2"><div class=flex-1></div><div class=flex-1>'),Bt=m('<div class="grid grid-cols-1 place-items-start gap-2">');const Ce=n=>{const r=Mt(),s=w(()=>r.width>480);return()=>{const i=it(()=>n.children),d=a=>{var c;return(c=i())==null?void 0:c.filter((h,o)=>o%2===a).map(h=>(()=>{var o=kt();return l(o,h),o})())};return Ne()&&s()?(()=>{var a=Ot(),c=a.firstChild,h=c.nextSibling;return l(c,()=>d(0)),l(h,()=>d(1)),a})():(()=>{var a=Bt();return l(a,i),a})()}};var At=m('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),Rt=m('<button><span></span><div class="badge badge-sm">'),jt=m("<div>"),Ht=m("<span class=whitespace-nowrap>"),Ft=m('<div class=space-y-2><div class="flex items-center justify-between pr-8"><div class="flex items-center"><span></span><div class="badge badge-sm ml-2"></div></div></div><div class="flex flex-wrap items-center justify-between gap-2"><div class="badge badge-primary badge-sm"><span class=font-bold></span></div><div class="badge badge-secondary badge-sm">/s'),zt=m("<img>"),Wt=m('<div class="flex items-center justify-between pr-8"><div class="flex flex-wrap items-center gap-1"><span class="line-clamp-1 break-all"></span><div class="badge badge-sm"></div><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),Yt=m('<div class="text-sm text-slate-500"> ');const Zt=()=>{const n=at();if(!ct())return n("/setup",{replace:!0}),null;let r;const[s]=ne(),{fetchProxies:i,proxies:d,selectProxyInGroup:a,proxyProviders:c,updateProviderByProviderName:h,updateAllProvider:o,proxyGroupLatencyTest:S,proxyProviderLatencyTest:p,proxyGroupLatencyTestingMap:$,proxyProviderLatencyTestingMap:T,isAllProviderUpdating:M,updatingMap:x}=de(),N=w(()=>d().filter(f=>!f.hidden)),{speedGroupByName:k}=ot(),[_,U]=dt(ie({}),{name:"collapsedMap",storage:localStorage}),A=(f,C)=>{U(G=>({...G,[f]:C}))};Pe(i);const Q=async(f,C)=>{f.stopPropagation(),S(C)},F=f=>f.replace("<svg",~f.indexOf("xmlns")?"<svg":'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/\{/g,"%7B").replace(/\}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E"),X=(f,C)=>{f.stopPropagation(),p(C)},g=(f,C)=>{f.stopPropagation(),h(C)},E=async f=>{f.stopPropagation(),o()},[J,Ie]=ie("proxies"),De=()=>[{type:"proxies",name:s("proxies"),count:N().length},{type:"proxyProviders",name:s("proxyProviders"),count:c().length}];return[e(mt,{get children(){return s("proxies")}}),(()=>{var f=At(),C=f.firstChild,G=C.firstChild,ue=G.nextSibling,ge=C.nextSibling;return l(G,e(B,{get each(){return De()},children:t=>(()=>{var L=Rt(),z=L.firstChild,v=z.nextSibling;return L.$$click=()=>Ie(t.type),l(z,()=>t.name),l(v,()=>t.count),y(()=>Ue(L,V(J()===t.type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),L})()})),l(C,e(P,{get when(){return J()==="proxyProviders"},get children(){return e(q,{class:"btn btn-circle btn-sm",get disabled(){return M()},onClick:t=>E(t),get icon(){return e(xe,{get class(){return V(M()&&"animate-spin text-success")}})}})}}),ue),l(ue,e(q,{class:"btn-circle btn-primary btn-sm",onClick:()=>r==null?void 0:r.showModal(),get icon(){return e(ut,{})}})),l(ge,e(P,{get when(){return J()==="proxies"},get children(){return e(Ce,{get children(){return e(B,{get each(){return N()},children:t=>{const L=w(()=>gt({proxyNames:fe({proxyNames:t.all??[],orderingType:ae(),testUrl:t.testUrl||null}),enabled:Te(),testUrl:t.testUrl||null})),z=(()=>{var v=Ft(),O=v.firstChild,Z=O.firstChild,W=Z.firstChild,le=W.nextSibling,ee=O.nextSibling,R=ee.firstChild,Me=R.firstChild,ve=R.nextSibling,ke=ve.firstChild;return l(Z,e(P,{get when(){return t.icon},get children(){return e(P,{get when(){return t.icon.startsWith("data:image/svg+xml")},get fallback(){return(()=>{var u=zt();return y(b=>{var Y=t.icon,j=`${re()}px`,H=`${ce()}px`;return Y!==b.e&&Ee(u,"src",b.e=Y),j!==b.t&&((b.t=j)!=null?u.style.setProperty("height",j):u.style.removeProperty("height")),H!==b.a&&((b.a=H)!=null?u.style.setProperty("margin-right",H):u.style.removeProperty("margin-right")),b},{e:void 0,t:void 0,a:void 0}),u})()},get children(){var u=jt();return u.style.setProperty("color","oklch(var(--p) / var(--tw-bg-opacity))"),u.style.setProperty("background-color","currentColor"),u.style.setProperty("mask-size","100% 100%"),y(b=>{var Y=`${re()}px`,j=`${re()}px`,H=`${ce()}px`,se=`url("${F(t.icon)}")`;return Y!==b.e&&((b.e=Y)!=null?u.style.setProperty("height",Y):u.style.removeProperty("height")),j!==b.t&&((b.t=j)!=null?u.style.setProperty("width",j):u.style.removeProperty("width")),H!==b.a&&((b.a=H)!=null?u.style.setProperty("margin-right",H):u.style.removeProperty("margin-right")),se!==b.o&&((b.o=se)!=null?u.style.setProperty("mask-image",se):u.style.removeProperty("mask-image")),b},{e:void 0,t:void 0,a:void 0,o:void 0}),u}})}}),W),l(W,()=>t.name),l(le,()=>{var u;return(u=t.all)==null?void 0:u.length}),l(O,e(q,{class:"btn-circle btn-sm",get disabled(){return $()[t.name]},onClick:u=>Q(u,t.name),get icon(){return e(we,{get class(){return V($()[t.name]&&"animate-pulse text-success")}})}}),null),l(Me,()=>vt(t.type)),l(R,e(P,{get when(){var u;return((u=t.now)==null?void 0:u.length)>0},get children(){return[e(pt,{size:18}),(()=>{var u=Ht();return l(u,()=>t.now),u})()]}}),null),l(ve,()=>oe(k()[t.name]??0).toString(),ke),l(v,e(P,{get when(){return!_()[t.name]},get children(){return e($e,{get proxyNameList(){return L()},get now(){return t.now},get testUrl(){return t.testUrl||null}})}}),null),v})();return e(be,{get isOpen(){return _()[t.name]},title:z,onCollapse:v=>A(t.name,v),get children(){return e(B,{get each(){return L()},children:v=>e(pe,{proxyName:v,get testUrl(){return t.testUrl||null},get timeout(){return t.timeout??null},get isSelected(){return t.now===v},onClick:()=>void a(t,v)})})}})}})}})}}),null),l(ge,e(P,{get when(){return J()==="proxyProviders"},get children(){return e(Ce,{get children(){return e(B,{get each(){return c()},children:t=>{const L=w(()=>fe({orderingType:ae(),proxyNames:t.proxies.map(v=>v.name)??[],testUrl:t.testUrl})),z=[(()=>{var v=Wt(),O=v.firstChild,Z=O.firstChild,W=Z.nextSibling,le=W.nextSibling,ee=O.nextSibling;return l(Z,()=>t.name),l(W,()=>t.proxies.length),l(le,()=>t.vehicleType),l(ee,e(q,{class:"btn btn-circle btn-sm",get disabled(){return x()[t.name]},onClick:R=>g(R,t.name),get icon(){return e(xe,{get class(){return V(x()[t.name]&&"animate-spin text-success")}})}}),null),l(ee,e(q,{class:"btn btn-circle btn-sm",get disabled(){return T()[t.name]},onClick:R=>X(R,t.name),get icon(){return e(we,{get class(){return V(T()[t.name]&&"animate-pulse text-success")}})}}),null),v})(),e(It,{get subscriptionInfo(){return t.subscriptionInfo}}),(()=>{var v=Yt(),O=v.firstChild;return l(v,()=>s("updated"),O),l(v,()=>ft(t.updatedAt),null),v})(),e(P,{get when(){return!_()[t.name]},get children(){return e($e,{get proxyNameList(){return L()},get testUrl(){return t.testUrl}})}})];return e(be,{get isOpen(){return _()[t.name]},title:z,onCollapse:v=>A(t.name,v),get children(){return e(B,{get each(){return L()},children:v=>e(pe,{proxyName:v,get testUrl(){return t.testUrl},get timeout(){return t.timeout??null}})})}})}})}})}}),null),l(f,e($t,{ref:t=>r=t}),null),f})()]};ht(["click"]);export{Zt as default};
