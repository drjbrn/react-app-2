import{j as I}from"./jsx-runtime-ed146b25.js";import{r as u,R as Q}from"./index-c6dae603.js";import{t as ee,l as E,b,U as C,C as D,O as _,y as j,u as P,a as he,h as ye,g as Oe,p as H,s as Re,d as z,x as Se,I as V,T as Le,c as we,o as Ie,e as Te,f as $e,j as L,i as m,r as ke,k as Z,m as Pe,n as Ce,q as De}from"./transition-349f38e8.js";function te(e,r){let[t,o]=u.useState(e),a=ee(e);return E(()=>o(a.current),[a,o,...r]),t}function Ee(e,r,t){let[o,a]=u.useState(t),s=e!==void 0,n=u.useRef(s),i=u.useRef(!1),d=u.useRef(!1);return s&&!n.current&&!i.current?(i.current=!0,n.current=s,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!s&&n.current&&!d.current&&(d.current=!0,n.current=s,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[s?e:o,b(p=>(s||a(p),r==null?void 0:r(p)))]}let je="div";var re=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(re||{});function Ne(e,r){var t;let{features:o=1,...a}=e,s={ref:r,"aria-hidden":(o&2)===2?!0:(t=a["aria-hidden"])!=null?t:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return D({ourProps:s,theirProps:a,slot:{},defaultTag:je,name:"Hidden"})}let Ae=C(Ne);function ne(e={},r=null,t=[]){for(let[o,a]of Object.entries(e))ae(t,oe(r,o),a);return t}function oe(e,r){return e?e+"["+r+"]":r}function ae(e,r,t){if(Array.isArray(t))for(let[o,a]of t.entries())ae(e,oe(r,o.toString()),a);else t instanceof Date?e.push([r,t.toISOString()]):typeof t=="boolean"?e.push([r,t?"1":"0"]):typeof t=="string"?e.push([r,t]):typeof t=="number"?e.push([r,`${t}`]):t==null?e.push([r,""]):ne(t,r,e)}var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),Fe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Fe||{}),qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(qe||{}),Ue=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ue||{});function K(e,r=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=Ce(r(e.options.slice()),s=>s.dataRef.current.domRef.current),a=t?o.indexOf(t):null;return a===-1&&(a=null),{options:o,activeOptionIndex:a}}let Qe={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,o=e.options.findIndex(a=>t(a.dataRef.current.value));return o!==-1&&(r=o),{...e,listboxState:0,activeOptionIndex:r}},2(e,r){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=K(e),a=Pe(r,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:a,activationTrigger:(t=r.trigger)!=null?t:1}},3:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,o=e.searchQuery+r.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(n=>{var i;return!n.dataRef.current.disabled&&((i=n.dataRef.current.textValue)==null?void 0:i.startsWith(o))}),s=a?e.options.indexOf(a):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,r)=>{let t={id:r.id,dataRef:r.dataRef},o=K(e,a=>[...a,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(t)),{...e,...o}},6:(e,r)=>{let t=K(e,o=>{let a=o.findIndex(s=>s.id===r.id);return a!==-1&&o.splice(a,1),o});return{...e,...t,activationTrigger:1}},7:(e,r)=>({...e,labelId:r.id})},J=u.createContext(null);J.displayName="ListboxActionsContext";function N(e){let r=u.useContext(J);if(r===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return r}let X=u.createContext(null);X.displayName="ListboxDataContext";function A(e){let r=u.useContext(X);if(r===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return r}function Be(e,r){return P(r.type,Qe,e,r)}let He=u.Fragment;function ze(e,r){let{value:t,defaultValue:o,form:a,name:s,onChange:n,by:i=(c,f)=>c===f,disabled:d=!1,horizontal:p=!1,multiple:h=!1,...w}=e;const k=p?"horizontal":"vertical";let T=j(r),[y=h?[]:void 0,S]=Ee(t,n,o),[x,l]=u.useReducer(Be,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),g=u.useRef({static:!1,hold:!1}),M=u.useRef(null),F=u.useRef(null),W=u.useRef(null),O=b(typeof i=="string"?(c,f)=>{let R=i;return(c==null?void 0:c[R])===(f==null?void 0:f[R])}:i),$=u.useCallback(c=>P(v.mode,{1:()=>y.some(f=>O(f,c)),0:()=>O(y,c)}),[y]),v=u.useMemo(()=>({...x,value:y,disabled:d,mode:h?1:0,orientation:k,compare:O,isSelected:$,optionsPropsRef:g,labelRef:M,buttonRef:F,optionsRef:W}),[y,d,h,x]);E(()=>{x.dataRef.current=v},[v]),he([v.buttonRef,v.optionsRef],(c,f)=>{var R;l({type:1}),ye(f,Oe.Loose)||(c.preventDefault(),(R=v.buttonRef.current)==null||R.focus())},v.listboxState===0);let ie=u.useMemo(()=>({open:v.listboxState===0,disabled:d,value:y}),[v,d,y]),le=b(c=>{let f=v.options.find(R=>R.id===c);f&&G(f.dataRef.current.value)}),se=b(()=>{if(v.activeOptionIndex!==null){let{dataRef:c,id:f}=v.options[v.activeOptionIndex];G(c.current.value),l({type:2,focus:L.Specific,id:f})}}),ue=b(()=>l({type:0})),de=b(()=>l({type:1})),ce=b((c,f,R)=>c===L.Specific?l({type:2,focus:L.Specific,id:f,trigger:R}):l({type:2,focus:c,trigger:R})),pe=b((c,f)=>(l({type:5,id:c,dataRef:f}),()=>l({type:6,id:c}))),fe=b(c=>(l({type:7,id:c}),()=>l({type:7,id:null}))),G=b(c=>P(v.mode,{0(){return S==null?void 0:S(c)},1(){let f=v.value.slice(),R=f.findIndex(U=>O(U,c));return R===-1?f.push(c):f.splice(R,1),S==null?void 0:S(f)}})),be=b(c=>l({type:3,value:c})),ve=b(()=>l({type:4})),xe=u.useMemo(()=>({onChange:G,registerOption:pe,registerLabel:fe,goToOption:ce,closeListbox:de,openListbox:ue,selectActiveOption:se,selectOption:le,search:be,clearSearch:ve}),[]),ge={ref:T},q=u.useRef(null),me=H();return u.useEffect(()=>{q.current&&o!==void 0&&me.addEventListener(q.current,"reset",()=>{S==null||S(o)})},[q,S]),Q.createElement(J.Provider,{value:xe},Q.createElement(X.Provider,{value:v},Q.createElement(Re,{value:P(v.listboxState,{0:z.Open,1:z.Closed})},s!=null&&y!=null&&ne({[s]:y}).map(([c,f],R)=>Q.createElement(Ae,{features:re.Hidden,ref:R===0?U=>{var Y;q.current=(Y=U==null?void 0:U.closest("form"))!=null?Y:null}:void 0,...Se({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:c,value:f})})),D({ourProps:ge,theirProps:w,slot:ie,defaultTag:He,name:"Listbox"}))))}let Ve="button";function We(e,r){var t;let o=V(),{id:a=`headlessui-listbox-button-${o}`,...s}=e,n=A("Listbox.Button"),i=N("Listbox.Button"),d=j(n.buttonRef,r),p=H(),h=b(x=>{switch(x.key){case m.Space:case m.Enter:case m.ArrowDown:x.preventDefault(),i.openListbox(),p.nextFrame(()=>{n.value||i.goToOption(L.First)});break;case m.ArrowUp:x.preventDefault(),i.openListbox(),p.nextFrame(()=>{n.value||i.goToOption(L.Last)});break}}),w=b(x=>{switch(x.key){case m.Space:x.preventDefault();break}}),k=b(x=>{if(ke(x.currentTarget))return x.preventDefault();n.listboxState===0?(i.closeListbox(),p.nextFrame(()=>{var l;return(l=n.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(x.preventDefault(),i.openListbox())}),T=te(()=>{if(n.labelId)return[n.labelId,a].join(" ")},[n.labelId,a]),y=u.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled,value:n.value}),[n]),S={ref:d,id:a,type:Le(e,n.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=n.optionsRef.current)==null?void 0:t.id,"aria-expanded":n.listboxState===0,"aria-labelledby":T,disabled:n.disabled,onKeyDown:h,onKeyUp:w,onClick:k};return D({ourProps:S,theirProps:s,slot:y,defaultTag:Ve,name:"Listbox.Button"})}let Ge="label";function Ke(e,r){let t=V(),{id:o=`headlessui-listbox-label-${t}`,...a}=e,s=A("Listbox.Label"),n=N("Listbox.Label"),i=j(s.labelRef,r);E(()=>n.registerLabel(o),[o]);let d=b(()=>{var h;return(h=s.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),p=u.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return D({ourProps:{ref:i,id:o,onClick:d},theirProps:a,slot:p,defaultTag:Ge,name:"Listbox.Label"})}let Ze="ul",Je=_.RenderStrategy|_.Static;function Xe(e,r){var t;let o=V(),{id:a=`headlessui-listbox-options-${o}`,...s}=e,n=A("Listbox.Options"),i=N("Listbox.Options"),d=j(n.optionsRef,r),p=H(),h=H(),w=we(),k=(()=>w!==null?(w&z.Open)===z.Open:n.listboxState===0)();u.useEffect(()=>{var l;let g=n.optionsRef.current;g&&n.listboxState===0&&g!==((l=Ie(g))==null?void 0:l.activeElement)&&g.focus({preventScroll:!0})},[n.listboxState,n.optionsRef]);let T=b(l=>{switch(h.dispose(),l.key){case m.Space:if(n.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),i.search(l.key);case m.Enter:if(l.preventDefault(),l.stopPropagation(),n.activeOptionIndex!==null){let{dataRef:g}=n.options[n.activeOptionIndex];i.onChange(g.current.value)}n.mode===0&&(i.closeListbox(),Z().nextFrame(()=>{var g;return(g=n.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})}));break;case P(n.orientation,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return l.preventDefault(),l.stopPropagation(),i.goToOption(L.Next);case P(n.orientation,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),i.goToOption(L.Previous);case m.Home:case m.PageUp:return l.preventDefault(),l.stopPropagation(),i.goToOption(L.First);case m.End:case m.PageDown:return l.preventDefault(),l.stopPropagation(),i.goToOption(L.Last);case m.Escape:return l.preventDefault(),l.stopPropagation(),i.closeListbox(),p.nextFrame(()=>{var g;return(g=n.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})});case m.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(i.search(l.key),h.setTimeout(()=>i.clearSearch(),350));break}}),y=te(()=>{var l;return(l=n.buttonRef.current)==null?void 0:l.id},[n.buttonRef.current]),S=u.useMemo(()=>({open:n.listboxState===0}),[n]),x={"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":n.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":n.orientation,id:a,onKeyDown:T,role:"listbox",tabIndex:0,ref:d};return D({ourProps:x,theirProps:s,slot:S,defaultTag:Ze,features:Je,visible:k,name:"Listbox.Options"})}let Ye="li";function _e(e,r){let t=V(),{id:o=`headlessui-listbox-option-${t}`,disabled:a=!1,value:s,...n}=e,i=A("Listbox.Option"),d=N("Listbox.Option"),p=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===o:!1,h=i.isSelected(s),w=u.useRef(null),k=Te(w),T=ee({disabled:a,value:s,domRef:w,get textValue(){return k()}}),y=j(r,w);E(()=>{if(i.listboxState!==0||!p||i.activationTrigger===0)return;let O=Z();return O.requestAnimationFrame(()=>{var $,v;(v=($=w.current)==null?void 0:$.scrollIntoView)==null||v.call($,{block:"nearest"})}),O.dispose},[w,p,i.listboxState,i.activationTrigger,i.activeOptionIndex]),E(()=>d.registerOption(o,T),[T,o]);let S=b(O=>{if(a)return O.preventDefault();d.onChange(s),i.mode===0&&(d.closeListbox(),Z().nextFrame(()=>{var $;return($=i.buttonRef.current)==null?void 0:$.focus({preventScroll:!0})}))}),x=b(()=>{if(a)return d.goToOption(L.Nothing);d.goToOption(L.Specific,o)}),l=$e(),g=b(O=>l.update(O)),M=b(O=>{l.wasMoved(O)&&(a||p||d.goToOption(L.Specific,o,0))}),F=b(O=>{l.wasMoved(O)&&(a||p&&d.goToOption(L.Nothing))}),W=u.useMemo(()=>({active:p,selected:h,disabled:a}),[p,h,a]);return D({ourProps:{id:o,ref:y,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:S,onFocus:x,onPointerEnter:g,onMouseEnter:g,onPointerMove:M,onMouseMove:M,onPointerLeave:F,onMouseLeave:F},theirProps:n,slot:W,defaultTag:Ye,name:"Listbox.Option"})}let et=C(ze),tt=C(We),rt=C(Ke),nt=C(Xe),ot=C(_e),B=Object.assign(et,{Button:tt,Label:rt,Options:nt,Option:ot});function at({title:e,titleId:r,...t},o){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},t),e?u.createElement("title",{id:r},e):null,u.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}const it=u.forwardRef(at),lt=it,st=({list:e,placeholder:r="",onOptionSelect:t,className:o=""})=>{const[a,s]=u.useState(null),n=(i,d)=>{const p={id:i,value:d};s(p),t&&t(p)};return I.jsx("div",{className:"",children:I.jsx(B,{value:(a==null?void 0:a.value)||"",onChange:i=>{const d=e.find(p=>p.value===i);d&&n(d.id,d.value)},children:I.jsxs("div",{className:"relative",children:[I.jsxs(B.Button,{className:`relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 sm:text-sm rounded border-2 border-solid border-[#eeeeee] ${o}`,children:[I.jsx("span",{className:"block truncate",children:(a==null?void 0:a.value)||r}),I.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:I.jsx(lt,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),I.jsx(De,{as:I.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:I.jsx(B.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[9] rounded border-2 border-solid border-[#eee]",children:e.map(({id:i,value:d})=>I.jsx(B.Option,{className:({active:p})=>`relative cursor-default select-none py-2 pl-4 pr-4 ${p?"bg-amber-100 text-amber-900":"text-gray-900"}`,value:d,onClick:()=>n(i,d),children:({selected:p})=>I.jsx("span",{className:`block truncate ${p?"font-medium":"font-normal"}`,children:d})},i))})})]})})})};st.__docgenInfo={description:"",methods:[],displayName:"Select",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: number,\r
  value: string,\r
  label: string,\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`{\r
  id: number,\r
  value: string,\r
  label: string,\r
}[]`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: { id: number, value: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ id: number, value: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{st as S};
