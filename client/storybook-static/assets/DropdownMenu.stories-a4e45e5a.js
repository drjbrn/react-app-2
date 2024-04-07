import{j as e}from"./jsx-runtime-ed146b25.js";import{D as s,q as d}from"./DropdownMenu-134c1456.js";/* empty css              */import{F as p,A as u}from"./FolderOpenIcon-ec5f9f57.js";import{P as x}from"./PencilSquareIcon-3728169b.js";import"./index-c6dae603.js";import"./transition-349f38e8.js";const D={title:"Components/UI/DropdownMenu",component:s,parameters:{layout:"centered"}},n=[{buttonId:1,icon:e.jsx(p,{className:"h-4 w-4","aria-hidden":"true"}),label:"Open"},{buttonId:2,icon:e.jsx(x,{className:"h-4 w-4","aria-hidden":"true"}),label:"Edit"},{buttonId:3,icon:e.jsx(u,{className:"h-4 w-4","aria-hidden":"true"}),label:"Remove"}],t={render:()=>e.jsx(s,{children:e.jsx("div",{className:"flex flex-col items-start gap-2 px-3 py-2",children:n.map(({buttonId:i,icon:m,label:l},c)=>e.jsx(d.Item,{children:e.jsxs("button",{type:"button",className:`flex items-center gap-2 ${c===n.length-1?"text-red-600":""}`,children:[m,l]})},i))})})};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
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
    </DropdownMenu>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,D as default};
