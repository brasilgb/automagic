import{j as e,h as c}from"./app-CAKEj4Q-.js";import{M as l,V as t}from"./index-BedyCMF9.js";import{T as m,d as x,b as i,e as a,a as h,c as r,P as j}from"./index-Dk1YvKAH.js";import{f as o}from"./index-Dg3sTWX6.js";const u=({data:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(m,{className:"bg-megb-blue-secundary rounded-t-md w-full",children:[e.jsx(x,{children:e.jsxs(i,{children:[e.jsx(a,{children:"#"}),e.jsx(a,{children:"Associação"}),e.jsx(a,{children:"Desc. Associação"}),e.jsx(a,{children:"Data venda"}),e.jsx(a,{children:"Meta"}),e.jsx(a,{children:"Venda"}),e.jsx(a,{children:"Margem"}),e.jsx(a,{children:"Representa"})]})}),e.jsx(x,{children:n.data.filter(s=>s.assoc=="XX").map((s,d)=>e.jsxs(i,{className:`${d%2===0?"bg-gray-500":"bg-gray-100"}`,children:[e.jsx(a,{children:"Total"}),e.jsx(a,{children:s.assoc}),e.jsx(a,{children:s.descassoc}),e.jsx(a,{children:c(s.dtvenda).format("DD/MM/YYYY")}),e.jsx(a,{children:l(s.valmeta)}),e.jsx(a,{children:l(s.valvenda)}),e.jsx(a,{children:l(s.margem)}),e.jsx(a,{children:t(s.representa)})]}))}),e.jsx(h,{children:n.data.filter(s=>s.assoc!="XX").map((s,d)=>e.jsxs(i,{className:`${d%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(r,{children:s.id}),e.jsx(r,{children:s.assoc}),e.jsx(r,{children:s.descassoc}),e.jsx(r,{children:c(s.dtvenda).format("DD/MM/YYYY")}),e.jsx(r,{children:l(s.valmeta)}),e.jsx(r,{children:l(s.valvenda)}),e.jsx(r,{children:l(s.margem)}),e.jsx(r,{children:t(s.representa)})]}))})]}),n.length=="0"&&e.jsxs("div",{className:"bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3",children:[e.jsx(o,{size:25}),e.jsx("span",{className:"text-sm ml-2",children:"Não há dados a serem mostrados no momento"})]}),e.jsx(j,{data:n,analise:"associacao"})]});export{u as default};
