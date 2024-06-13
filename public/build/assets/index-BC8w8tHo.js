import{j as e,a as n,r as x,W as u}from"./app-CAKEj4Q-.js";import{G as m,o as h,p as f,q as g,r as j,s as b}from"./index-Dg3sTWX6.js";import{a as p}from"./index-CypuG92r.js";function y(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"},child:[]},{tag:"path",attr:{d:"M16 5l3 3"},child:[]}]})(t)}const k=({onclick:t,label:s,active:a})=>e.jsx("button",{onClick:t,className:`px-3 py-1.5 w-48 text-xs uppercase font-bold shadow border border-white ${a?"text-gray-50 bg-automa-green-secundary":"bg-automa-green-primary/60 text-gray-50"} hover:bg-automa-green-secundary hover:text-gray-50 rounded-md transition-colors duration-300`,children:s}),C=({url:t,label:s})=>e.jsxs(n,{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",children:[e.jsx(h,{size:18}),e.jsx("span",{children:s})]}),z=({url:t,label:s})=>e.jsxs(n,{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",children:[e.jsx(f,{size:18}),e.jsx("span",{children:s})]}),B=({url:t,param:s})=>e.jsx(n,{className:"flex items-center justify-center bg-orange-600 hover:bg-orange-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",title:"Editar registro",data:{page:s},children:e.jsx(y,{size:18})}),E=({identify:t,param:s,url:a})=>{const[o,r]=x.useState(!1),{delete:l}=u();function d(c){c.preventDefault(),l(route(a,s)),r(!1)}const i=()=>e.jsx("div",{onClick:()=>r(!1),className:"fixed z-20 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-40",children:e.jsxs("div",{className:"md:w-1/4 w-full mx-2 bg-gray-50 rounded-md shadow-md border border-white",children:[e.jsx("div",{className:"text-gray-400 flex justify-end pt-0.5 pr-0.5",children:e.jsx("button",{onClick:()=>r(!1),children:e.jsx(b,{size:18})})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-red-500 pb-2",children:e.jsx(p,{size:40})}),e.jsx("div",{className:"text-xl",children:"Excluir registro"})]})}),e.jsxs("div",{className:"my-2 flex flex-col items-center justify-center",children:[e.jsxs("h2",{className:"text-base text-center",children:["Você realmente deseja excluir ",t,"?"]}),e.jsx("h2",{className:"test-sm mt-1",children:"Esta operação não pode ser desfeita."})]}),e.jsxs("div",{className:"flex items-center justify-end gap-3 p-3 mt-2",children:[e.jsx("button",{onClick:()=>r(!1),className:"py-2 px-3 flex-1 bg-zinc-600 hover:bg-zinc-700 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Cancelar"})}),e.jsx("button",{onClick:d,className:"py-2 px-3 flex-1 bg-red-500 hover:bg-red-600 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Excluir"})})]})]})});return e.jsxs(e.Fragment,{children:[o&&e.jsx(i,{}),e.jsx("button",{className:"flex items-center justify-center bg-red-600 hover:bg-red-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",onClick:()=>r(!0),title:`Deletar registro ${s}`,children:e.jsx(g,{size:18})})]})},I=({processing:t,value:s="Salvar"})=>e.jsx("div",{className:"flex justify-end",children:e.jsxs("button",{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",disabled:t,type:"submit",children:[e.jsx(j,{size:18}),e.jsx("span",{className:"ml-1",children:s})]})});export{C as A,z as B,E as D,B as E,I as S,k as a};