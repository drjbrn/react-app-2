import{r as a,R as E,a as se}from"./index-c6dae603.js";var Me=Object.defineProperty,je=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t,n)=>(je(e,typeof t!="symbol"?t+"":t,n),n);let Ie=class{constructor(){z(this,"current",this.detect()),z(this,"handoffState","pending"),z(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},A=new Ie,x=(e,t)=>{A.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function $(e){let t=a.useRef(e);return x(()=>{t.current=e},[e]),t}let y=function(e){let t=$(e);return E.useCallback((...n)=>t.current(...n),[t])};function ke(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function R(){let e=[],t={addEventListener(n,r,u,l){return n.addEventListener(r,u,l),t.add(()=>n.removeEventListener(r,u,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ke(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,u){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:u}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=R();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let u of e.splice(r,1))u()}},dispose(){for(let n of e.splice(0))n()}};return t}function ge(){let[e]=a.useState(R);return a.useEffect(()=>()=>e.dispose(),[e]),e}function He(){let e=typeof document>"u";return"useSyncExternalStore"in se?(t=>t.useSyncExternalStore)(se)(()=>()=>{},()=>!1,()=>!e):!1}function ne(){let e=He(),[t,n]=a.useState(A.isHandoffComplete);return t&&A.isHandoffComplete===!1&&n(!1),a.useEffect(()=>{t!==!0&&n(!0)},[t]),a.useEffect(()=>A.handoff(),[]),e?!1:t}var ce;let Nt=(ce=E.useId)!=null?ce:function(){let e=ne(),[t,n]=E.useState(e?()=>A.nextId():null);return x(()=>{t===null&&n(A.nextId())},[t]),t!=null?""+t:void 0};function w(e,t,...n){if(e in t){let u=t[e];return typeof u=="function"?u(...n):u}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}function be(e){return A.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ee=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ue=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ue||{}),qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(qe||{}),Be=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Be||{});function Ee(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ee)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var we=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(we||{});function ye(e,t=0){var n;return e===((n=be(e))==null?void 0:n.body)?!1:w(t,{0(){return e.matches(ee)},1(){let r=e;for(;r!==null;){if(r.matches(ee))return!0;r=r.parentElement}return!1}})}function $t(e){let t=be(e);R().nextFrame(()=>{t&&!ye(t.activeElement,0)&&Ve(e)})}var _e=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(_e||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Ve(e){e==null||e.focus({preventScroll:!0})}let Ke=["textarea","input"].join(",");function Ge(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ke))!=null?n:!1}function We(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),l=t(r);if(u===null||l===null)return 0;let i=u.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function xt(e,t){return Xe(Ee(),t,{relativeTo:e})}function Xe(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?We(e):e:Ee(e);u.length>0&&i.length>1&&(i=i.filter(v=>!u.includes(v))),r=r??l.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},s=0,d=i.length,h;do{if(s>=d||s+d<=0)return 0;let v=o+s;if(t&16)v=(v+d)%d;else{if(v<0)return 3;if(v>=d)return 1}h=i[v],h==null||h.focus(c),s+=f}while(h!==l.activeElement);return t&6&&Ge(h)&&h.select(),2}function Ye(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ze(){return/Android/gi.test(window.navigator.userAgent)}function Qe(){return Ye()||ze()}function U(e,t,n){let r=$(t);a.useEffect(()=>{function u(l){r.current(l)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function Je(e,t,n){let r=$(t);a.useEffect(()=>{function u(l){r.current(l)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}function Lt(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(i,f){if(!r.current||i.defaultPrevented)return;let o=f(i);if(o===null||!o.getRootNode().contains(o)||!o.isConnected)return;let c=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of c){if(s===null)continue;let d=s instanceof HTMLElement?s:s.current;if(d!=null&&d.contains(o)||i.composed&&i.composedPath().includes(d))return}return!ye(o,we.Loose)&&o.tabIndex!==-1&&i.preventDefault(),t(i,o)}let l=a.useRef(null);U("pointerdown",i=>{var f,o;r.current&&(l.current=((o=(f=i.composedPath)==null?void 0:f.call(i))==null?void 0:o[0])||i.target)},!0),U("mousedown",i=>{var f,o;r.current&&(l.current=((o=(f=i.composedPath)==null?void 0:f.call(i))==null?void 0:o[0])||i.target)},!0),U("click",i=>{Qe()||l.current&&(u(i,()=>l.current),l.current=null)},!0),U("touchend",i=>u(i,()=>i.target instanceof HTMLElement?i.target:null),!0),Je("blur",i=>u(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function fe(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Ot(e,t){let[n,r]=a.useState(()=>fe(e));return x(()=>{r(fe(e))},[e.type,e.as]),x(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let Ze=Symbol();function Fe(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=y(r=>{for(let u of t.current)u!=null&&(typeof u=="function"?u(r):u.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Ze]))?void 0:n}function de(e){return[e.screenX,e.screenY]}function At(){let e=a.useRef([-1,-1]);return{wasMoved(t){let n=de(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=de(t)}}}function B(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var Te=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Te||{}),N=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(N||{});function Se({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:l=!0,name:i,mergeRefs:f}){f=f??et;let o=Ne(t,e);if(l)return q(o,n,r,i,f);let c=u??0;if(c&2){let{static:s=!1,...d}=o;if(s)return q(d,n,r,i,f)}if(c&1){let{unmount:s=!0,...d}=o;return w(s?0:1,{0(){return null},1(){return q({...d,hidden:!0,style:{display:"none"}},n,r,i,f)}})}return q(o,n,r,i,f)}function q(e,t={},n,r,u){let{as:l=n,children:i,refName:f="ref",...o}=Q(e,["unmount","static"]),c=e.ref!==void 0?{[f]:e.ref}:{},s=typeof i=="function"?i(t):i;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let d={};if(t){let h=!1,v=[];for(let[p,g]of Object.entries(t))typeof g=="boolean"&&(h=!0),g===!0&&v.push(p);h&&(d["data-headlessui-state"]=v.join(" "))}if(l===a.Fragment&&Object.keys(me(o)).length>0){if(!a.isValidElement(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let h=s.props,v=typeof(h==null?void 0:h.className)=="function"?(...g)=>B(h==null?void 0:h.className(...g),o.className):B(h==null?void 0:h.className,o.className),p=v?{className:v}:{};return a.cloneElement(s,Object.assign({},Ne(s.props,me(Q(o,["ref"]))),d,c,{ref:u(s.ref,c.ref)},p))}return a.createElement(l,Object.assign({},Q(o,["ref"]),l!==a.Fragment&&c,l!==a.Fragment&&d),s)}function et(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function Ne(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let u in r)u.startsWith("on")&&typeof r[u]=="function"?(n[u]!=null||(n[u]=[]),n[u].push(r[u])):t[u]=r[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](u,...l){let i=n[r];for(let f of i){if((u instanceof Event||(u==null?void 0:u.nativeEvent)instanceof Event)&&u.defaultPrevented)return;f(u,...l)}}});return t}function re(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function me(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Q(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let le=a.createContext(null);le.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function $e(){return a.useContext(le)}function tt({value:e,children:t}){return E.createElement(le.Provider,{value:e},t)}function Pt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&nt(n)?!1:r}function nt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function rt(e){throw new Error("Unexpected object: "+e)}var lt=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(lt||{});function Ct(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),u=r??-1;switch(e.focus){case 0:{for(let l=0;l<n.length;++l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 1:{for(let l=u-1;l>=0;--l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 2:{for(let l=u+1;l<n.length;++l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 3:{for(let l=n.length-1;l>=0;--l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 4:{for(let l=0;l<n.length;++l)if(t.resolveId(n[l],l,n)===e.id)return l;return r}case 5:return null;default:rt(e)}}var ut=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ut||{});function ue(){let e=a.useRef(!1);return x(()=>(e.current=!0,()=>{e.current=!1}),[]),e}let ve=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function pe(e){var t,n;let r=(t=e.innerText)!=null?t:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return r;let l=!1;for(let f of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),l=!0;let i=l?(n=u.innerText)!=null?n:"":r;return ve.test(i)&&(i=i.replace(ve,"")),i}function it(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(u=>{let l=document.getElementById(u);if(l){let i=l.getAttribute("aria-label");return typeof i=="string"?i.trim():pe(l).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return pe(e).trim()}function Dt(e){let t=a.useRef(""),n=a.useRef("");return y(()=>{let r=e.current;if(!r)return"";let u=r.innerText;if(t.current===u)return n.current;let l=it(r).trim().toLowerCase();return t.current=u,n.current=l,l})}function ot(e=0){let[t,n]=a.useState(e),r=ue(),u=a.useCallback(o=>{r.current&&n(c=>c|o)},[t,r]),l=a.useCallback(o=>!!(t&o),[t]),i=a.useCallback(o=>{r.current&&n(c=>c&~o)},[n,r]),f=a.useCallback(o=>{r.current&&n(c=>c^o)},[n]);return{flags:t,addFlag:u,hasFlag:l,removeFlag:i,toggleFlag:f}}function at(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function Z(e,...t){e&&t.length>0&&e.classList.remove(...t)}function st(e,t){let n=R();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[l,i]=[r,u].map(o=>{let[c=0]=o.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return c}),f=l+i;if(f!==0){n.group(c=>{c.setTimeout(()=>{t(),c.dispose()},f),c.addEventListener(e,"transitionrun",s=>{s.target===s.currentTarget&&c.dispose()})});let o=n.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),o())})}else t();return n.add(()=>t()),n.dispose}function ct(e,t,n,r){let u=n?"enter":"leave",l=R(),i=r!==void 0?at(r):()=>{};u==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let f=w(u,{enter:()=>t.enter,leave:()=>t.leave}),o=w(u,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=w(u,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Z(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...t.base,...f,...c),l.nextFrame(()=>{Z(e,...t.base,...f,...c),J(e,...t.base,...f,...o),st(e,()=>(Z(e,...t.base,...f),J(e,...t.base,...t.entered),i()))}),l.dispose}function ft({immediate:e,container:t,direction:n,classes:r,onStart:u,onStop:l}){let i=ue(),f=ge(),o=$(n);x(()=>{e&&(o.current="enter")},[e]),x(()=>{let c=R();f.add(c.dispose);let s=t.current;if(s&&o.current!=="idle"&&i.current)return c.dispose(),u.current(o.current),c.add(ct(s,r.current,o.current==="enter",()=>{c.dispose(),l.current(o.current)})),c.dispose},[n])}function S(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let _=a.createContext(null);_.displayName="TransitionContext";var dt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(dt||{});function mt(){let e=a.useContext(_);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function vt(){let e=a.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let V=a.createContext(null);V.displayName="NestingContext";function K(e){return"children"in e?K(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function xe(e,t){let n=$(e),r=a.useRef([]),u=ue(),l=ge(),i=y((v,p=N.Hidden)=>{let g=r.current.findIndex(({el:m})=>m===v);g!==-1&&(w(p,{[N.Unmount](){r.current.splice(g,1)},[N.Hidden](){r.current[g].state="hidden"}}),l.microTask(()=>{var m;!K(r)&&u.current&&((m=n.current)==null||m.call(n))}))}),f=y(v=>{let p=r.current.find(({el:g})=>g===v);return p?p.state!=="visible"&&(p.state="visible"):r.current.push({el:v,state:"visible"}),()=>i(v,N.Unmount)}),o=a.useRef([]),c=a.useRef(Promise.resolve()),s=a.useRef({enter:[],leave:[],idle:[]}),d=y((v,p,g)=>{o.current.splice(0),t&&(t.chains.current[p]=t.chains.current[p].filter(([m])=>m!==v)),t==null||t.chains.current[p].push([v,new Promise(m=>{o.current.push(m)})]),t==null||t.chains.current[p].push([v,new Promise(m=>{Promise.all(s.current[p].map(([P,C])=>C)).then(()=>m())})]),p==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(p)):g(p)}),h=y((v,p,g)=>{Promise.all(s.current[p].splice(0).map(([m,P])=>P)).then(()=>{var m;(m=o.current.shift())==null||m()}).then(()=>g(p))});return a.useMemo(()=>({children:r,register:f,unregister:i,onStart:d,onStop:h,wait:c,chains:s}),[f,i,r,d,h,s,c])}function pt(){}let ht=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function he(e){var t;let n={};for(let r of ht)n[r]=(t=e[r])!=null?t:pt;return n}function gt(e){let t=a.useRef(he(e));return a.useEffect(()=>{t.current=he(e)},[e]),t}let bt="div",Le=Te.RenderStrategy;function Et(e,t){var n,r;let{beforeEnter:u,afterEnter:l,beforeLeave:i,afterLeave:f,enter:o,enterFrom:c,enterTo:s,entered:d,leave:h,leaveFrom:v,leaveTo:p,...g}=e,m=a.useRef(null),P=Fe(m,t),C=(n=g.unmount)==null||n?N.Unmount:N.Hidden,{show:b,appear:L,initial:ie}=mt(),[O,G]=a.useState(b?"visible":"hidden"),oe=vt(),{register:j,unregister:I}=oe;a.useEffect(()=>j(m),[j,m]),a.useEffect(()=>{if(C===N.Hidden&&m.current){if(b&&O!=="visible"){G("visible");return}return w(O,{hidden:()=>I(m),visible:()=>j(m)})}},[O,m,j,I,b,C]);let W=$({base:S(g.className),enter:S(o),enterFrom:S(c),enterTo:S(s),entered:S(d),leave:S(h),leaveFrom:S(v),leaveTo:S(p)}),k=gt({beforeEnter:u,afterEnter:l,beforeLeave:i,afterLeave:f}),X=ne();a.useEffect(()=>{if(X&&O==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,O,X]);let Ae=ie&&!L,ae=L&&b&&ie,Pe=(()=>!X||Ae?"idle":b?"enter":"leave")(),M=ot(0),Ce=y(T=>w(T,{enter:()=>{M.addFlag(F.Opening),k.current.beforeEnter()},leave:()=>{M.addFlag(F.Closing),k.current.beforeLeave()},idle:()=>{}})),De=y(T=>w(T,{enter:()=>{M.removeFlag(F.Opening),k.current.afterEnter()},leave:()=>{M.removeFlag(F.Closing),k.current.afterLeave()},idle:()=>{}})),H=xe(()=>{G("hidden"),I(m)},oe),Y=a.useRef(!1);ft({immediate:ae,container:m,classes:W,direction:Pe,onStart:$(T=>{Y.current=!0,H.onStart(m,T,Ce)}),onStop:$(T=>{Y.current=!1,H.onStop(m,T,De),T==="leave"&&!K(H)&&(G("hidden"),I(m))})});let D=g,Re={ref:P};return ae?D={...D,className:B(g.className,...W.current.enter,...W.current.enterFrom)}:Y.current&&(D.className=B(g.className,(r=m.current)==null?void 0:r.className),D.className===""&&delete D.className),E.createElement(V.Provider,{value:H},E.createElement(tt,{value:w(O,{visible:F.Open,hidden:F.Closed})|M.flags},Se({ourProps:Re,theirProps:D,defaultTag:bt,features:Le,visible:O==="visible",name:"Transition.Child"})))}function wt(e,t){let{show:n,appear:r=!1,unmount:u=!0,...l}=e,i=a.useRef(null),f=Fe(i,t);ne();let o=$e();if(n===void 0&&o!==null&&(n=(o&F.Open)===F.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,s]=a.useState(n?"visible":"hidden"),d=xe(()=>{s("hidden")}),[h,v]=a.useState(!0),p=a.useRef([n]);x(()=>{h!==!1&&p.current[p.current.length-1]!==n&&(p.current.push(n),v(!1))},[p,n]);let g=a.useMemo(()=>({show:n,appear:r,initial:h}),[n,r,h]);a.useEffect(()=>{if(n)s("visible");else if(!K(d))s("hidden");else{let b=i.current;if(!b)return;let L=b.getBoundingClientRect();L.x===0&&L.y===0&&L.width===0&&L.height===0&&s("hidden")}},[n,d]);let m={unmount:u},P=y(()=>{var b;h&&v(!1),(b=e.beforeEnter)==null||b.call(e)}),C=y(()=>{var b;h&&v(!1),(b=e.beforeLeave)==null||b.call(e)});return E.createElement(V.Provider,{value:d},E.createElement(_.Provider,{value:g},Se({ourProps:{...m,as:a.Fragment,children:E.createElement(Oe,{ref:f,...m,...l,beforeEnter:P,beforeLeave:C})},theirProps:{},defaultTag:a.Fragment,features:Le,visible:c==="visible",name:"Transition"})))}function yt(e,t){let n=a.useContext(_)!==null,r=$e()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(te,{ref:t,...e}):E.createElement(Oe,{ref:t,...e}))}let te=re(wt),Oe=re(Et),Ft=re(yt),Rt=Object.assign(te,{Child:Ft,Root:te});export{Se as C,$t as D,Nt as I,Ue as M,Te as O,Ot as T,re as U,xt as _,Lt as a,y as b,$e as c,F as d,Dt as e,At as f,we as g,ye as h,ut as i,lt as j,R as k,x as l,Ct as m,We as n,be as o,ge as p,Rt as q,Pt as r,tt as s,$ as t,w as u,me as x,Fe as y};
