import{j as e,h as c}from"./app-CscJIlEl.js";import{M as d,V as x}from"./index-BedyCMF9.js";import{T as h,d as j,b as l,e as a,a as o,c as r}from"./index-CevA7BJZ.js";const p=({data:n})=>e.jsxs(h,{className:"bg-megb-blue-secundary rounded-t-md w-full",children:[e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(a,{children:"#"}),e.jsx(a,{children:"Associação"}),e.jsx(a,{children:"Desc. Associação"}),e.jsx(a,{children:"Data venda"}),e.jsx(a,{children:"Venda"}),e.jsx(a,{children:"Margem"}),e.jsx(a,{children:"Representa"})]})}),e.jsx(o,{children:n.map((s,i)=>e.jsxs(l,{className:`${i%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(r,{children:s.id}),e.jsx(r,{children:s.assoc}),e.jsx(r,{children:s.descassoc}),e.jsx(r,{children:c(s.dtvenda).format("DD/MM/YYYY")}),e.jsx(r,{children:d(s.valvenda)}),e.jsx(r,{children:d(s.margem)}),e.jsx(r,{children:x(s.representa)})]}))})]});export{p as default};
