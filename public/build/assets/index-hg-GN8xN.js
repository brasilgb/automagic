import{u as x,r as h,y as j,h as d,j as e}from"./app-BIldeIxV.js";import{M as i,V as f}from"./index-BEbeHuCS.js";import{T as u,d as b,b as c,e as s,a as Y,c as r}from"./index-Bvo_EUo3.js";const y=({data:o})=>{const{selectedRange:t,dataInicial:n,dataFinal:l}=x();return h.useEffect(()=>{t.to&&t.from&&j.post("filtersale",{dtini:d(n).format("YYYYMMDD"),dtfim:d(l).format("YYYYMMDD")})},[n,l,t]),e.jsxs(u,{className:"bg-megb-blue-secundary rounded-t-md w-full",children:[e.jsx(b,{children:e.jsxs(c,{children:[e.jsx(s,{children:"#"}),e.jsx(s,{children:"Data venda"}),e.jsx(s,{children:"Venda"}),e.jsx(s,{children:"Margem"}),e.jsx(s,{children:"Representa"})]})}),e.jsx(Y,{children:o.map((a,m)=>e.jsxs(c,{className:`${m%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(r,{children:a.id}),e.jsx(r,{children:d(a.dtvenda).format("DD/MM/YYYY")}),e.jsx(r,{children:i(a.valvenda)}),e.jsx(r,{children:i(a.margem)}),e.jsx(r,{children:f(a.representa)})]}))})]})};export{y as default};