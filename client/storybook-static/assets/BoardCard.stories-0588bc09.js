import{j as e}from"./jsx-runtime-ed146b25.js";import{u as M,a as S}from"./Button-65c196bc.js";import{u as A,e as _,o as E,P as O,d as $}from"./axios.api-b23b7fa1.js";/* empty css              */import{B as q}from"./react-toastify.esm-fa44d8c4.js";import{g as x,d as P,a as R}from"./boardThunks-6a9384cc.js";import{g as L}from"./taskColumnThunks-1145476d.js";import{D as j,q as w}from"./DropdownMenu-134c1456.js";import{F as N,A as y}from"./FolderOpenIcon-ec5f9f57.js";import{P as k}from"./PencilSquareIcon-3728169b.js";import"./index-c6dae603.js";import"./Input-73fe76b1.js";import"./Select-93b2da57.js";import"./transition-349f38e8.js";const I=({setSelectedBoard:n})=>{const l=M(),a=A(),r=_(t=>t.board.allData),o=async t=>{await a(x(t)),a(L(t)),l(`/board/${t}`)},d=async t=>{n&&n(t),await a(x(t)),a(E(`editBoard_${t}`))},c=async t=>{await a(P(t)),q.warning("Board successfully deleted."),a(R())},p=[{buttonId:1,icon:e.jsx(N,{className:"h-4 w-4","aria-hidden":"true"}),label:"Open",onClick:t=>o(t)},{buttonId:2,icon:e.jsx(k,{className:"h-4 w-4","aria-hidden":"true"}),label:"Edit",onClick:t=>d(t)},{buttonId:3,icon:e.jsx(y,{className:"h-4 w-4","aria-hidden":"true"}),label:"Remove",onClick:t=>c(t)}];return e.jsx("section",{children:e.jsx("ul",{className:"flex gap-4 flex-wrap",children:r.map(({id:t,title:v,column:u})=>e.jsxs("li",{className:"font-montserrat max-w-[300px] w-full grid gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-4",children:[e.jsx("button",{type:"button",onClick:()=>o(t),className:"font-medium text-[18px]",children:v}),e.jsx(j,{children:e.jsx("div",{className:"flex flex-col items-start gap-2 px-3 py-2",children:p.map(({buttonId:s,icon:m,label:B,onClick:C},D)=>e.jsx(w.Item,{children:e.jsxs("button",{type:"button",onClick:()=>C(t),className:`flex items-center gap-2 ${D===p.length-1?"text-red-600":""}`,children:[m,B]})},s))})})]}),e.jsxs("p",{className:"text-sm flex items-center gap-2",children:["Number of tasks:",e.jsx("span",{className:"font-medium",children:u&&u.map(({tasks:s})=>(s==null?void 0:s.length)??0).reduce((s,m)=>s+m,0)})]})]},t))})})};I.__docgenInfo={description:"",methods:[],displayName:"BoardCard",props:{setSelectedBoard:{required:!1,tsType:{name:"signature",type:"function",raw:"(arg: number) => void",signature:{arguments:[{type:{name:"number"},name:"arg"}],return:{name:"void"}}},description:""}}};const F=({children:n})=>e.jsx(O,{store:$,children:e.jsx(S,{children:n})}),ae={title:"Components/BoardCard",component:I,parameters:{layout:"centered"}},f=[{buttonId:1,icon:e.jsx(N,{className:"h-4 w-4","aria-hidden":"true"}),label:"Open"},{buttonId:2,icon:e.jsx(k,{className:"h-4 w-4","aria-hidden":"true"}),label:"Edit"},{buttonId:3,icon:e.jsx(y,{className:"h-4 w-4","aria-hidden":"true"}),label:"Remove"}],T=[{id:1,title:"New tasks",column:[{id:2,title:"To Do",tasks:[{id:44,title:"Create new task",description:"Some desc about task",priority:"Low",dueDate:"30.04.2024"},{id:45,title:"Create new task 2",description:"Some desc about task",priority:"Low",dueDate:"30.04.2024"}]}]}],i={render:()=>e.jsx(F,{children:e.jsx("section",{children:e.jsx("ul",{className:"flex gap-4 flex-wrap",children:T.map(({id:n,title:l,column:a})=>e.jsxs("li",{className:"font-montserrat w-[300px] grid gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-4",children:[e.jsx("h4",{className:"font-medium text-[18px]",children:l}),e.jsx(j,{children:e.jsx("div",{className:"flex flex-col items-start gap-2 px-3 py-2",children:f.map(({buttonId:r,icon:o,label:d},c)=>e.jsx(w.Item,{children:e.jsxs("button",{type:"button",className:`flex items-center gap-2 ${c===f.length-1?"text-red-600":""}`,children:[o,d]})},r))})})]}),e.jsxs("p",{className:"text-sm flex items-center gap-2",children:["Number of tasks:",e.jsx("span",{className:"font-medium",children:a.map(({tasks:r})=>r.length).reduce((r,o)=>r+o,0)})]})]},n))})})})};var h,b,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <MockedStore>\r
      <section>\r
        <ul className='flex gap-4 flex-wrap'>\r
          {board.map(({
          id,
          title,
          column
        }) => <li key={id} className='font-montserrat w-[300px] grid gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-white'>\r
              <div className='flex justify-between items-center flex-wrap gap-4'>\r
                <h4 className='font-medium text-[18px]'>{title}</h4>\r
                <DropdownMenu>\r
                  <div className='flex flex-col items-start gap-2 px-3 py-2'>\r
                    {items.map(({
                  buttonId,
                  icon,
                  label
                }, index) => <Menu.Item key={buttonId}>\r
                        <button type='button' className={\`flex items-center gap-2 \${index === items.length - 1 ? 'text-red-600' : ''}\`}>\r
                          {icon}\r
                          {label}\r
                        </button>\r
                      </Menu.Item>)}\r
                  </div>\r
                </DropdownMenu>\r
              </div>\r
              <p className='text-sm flex items-center gap-2'>\r
                Number of tasks:\r
                <span className='font-medium'>\r
                  {column.map(({
                tasks
              }) => tasks.length).reduce((acc, currentValue) => acc + currentValue, 0)}\r
                </span>\r
              </p>\r
            </li>)}\r
        </ul>\r
      </section>\r
    </MockedStore>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const re=["Default"];export{i as Default,re as __namedExportsOrder,ae as default};
