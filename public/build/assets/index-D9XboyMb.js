import{u as j,r as h,h as d,j as e,Y}from"./app-BIldeIxV.js";import{C as y,d as D}from"./index-B1a03wwQ.js";import{H as u,T as x}from"./index-pHJP0zfH.js";import{A as C,a as M}from"./AuthenticatedLayout-CqolB-Y_.js";import g from"./index-hg-GN8xN.js";import{a as p}from"./index-s6K9Brej.js";import A from"./index-F4xMvIzt.js";import{_ as b,C as v}from"./LocaleCalendar-Db_GOLxA.js";import"./ApplicationLogo-rwIMa80R.js";import"./index-ACI_mgvf.js";import"./index-CU1iFGgR.js";import"./index-BEbeHuCS.js";import"./index-Bvo_EUo3.js";import"./index-uEaWIAf9.js";const N=()=>{const{setDataInicial:o,setDataFinal:r,selectedRange:t,setSelectedRange:c}=j(),f=()=>{var a,s,n,m,i,l;return!(t!=null&&t.from)||!(t!=null&&t.to)?"":`${("0"+((a=t.from)==null?void 0:a.day)).slice(-2)+"/"+("0"+((s=t.from)==null?void 0:s.month)).slice(-2)+"/"+((n=t.from)==null?void 0:n.year)+" - "+("0"+((m=t.to)==null?void 0:m.day)).slice(-2)+"/"+("0"+((i=t.to)==null?void 0:i.month)).slice(-2)+"/"+((l=t.to)==null?void 0:l.year)}`};return h.useEffect(()=>{var a,s,n,m,i,l;t.from!=null&&(o(d(((a=t.from)==null?void 0:a.year)+"-"+((s=t.from)==null?void 0:s.month)+"-"+((n=t.from)==null?void 0:n.day),"YYYY-MM-DD").toDate()),r(d(((m=t.to)==null?void 0:m.year)+"-"+((i=t.to)==null?void 0:i.month)+"-"+((l=t.to)==null?void 0:l.day),"YYYY-MM-DD").toDate()))},[t,o,r]),e.jsx(b,{value:t,onChange:c,inputPlaceholder:`${d().format("DD/MM/YYYY")} - ${d().format("DD/MM/YYYY")}`,formatInputText:f,inputClassName:"px-3 !py-1 !text-sm !font-bold !bg-gray-50 !rounded-md !shadow-md !border !border-white !text-gray-500",calendarClassName:"responsive-calendar",shouldHighlightWeekends:!0,locale:v})},_=({sales:o,association:r})=>{const[t,c]=h.useState("faturamento"),f=r==null?void 0:r.data,a=o==null?void 0:o.data;return e.jsxs(C,{children:[e.jsx(Y,{title:"Vendas"}),e.jsxs(y,{children:[e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(M,{size:30}),e.jsx("span",{className:"ml-2",children:"Vendas"})]}),e.jsx(x,{})]}),e.jsx(u,{children:e.jsxs("div",{className:"flex items-center justify-between gap-6 w-full",children:[e.jsx(N,{}),e.jsxs("div",{className:"flex items-center justify-center gap-6 flex-1",children:[e.jsx(p,{label:"Faturamento",onclick:()=>c("faturamento"),active:t==="faturamento"}),e.jsx(p,{label:"Associação",onclick:()=>c("associacao"),active:t==="associacao"})]})]})}),e.jsxs(D,{className:"rounded-md p-1",children:[t==="faturamento"&&e.jsx(g,{data:a}),t==="associacao"&&e.jsx(A,{data:f})]})]})]})};export{_ as default};