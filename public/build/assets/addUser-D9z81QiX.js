import{q as _,r as d,W as S,j as e,Y as F}from"./app-DIQKnT_4.js";import{B,S as k}from"./index-sEf77by8.js";import{C as z,a as E,b as P,c as h,d as U,e as H}from"./index-DLO63JHN.js";import{H as I,T,B as A}from"./index-Bc9iwaYs.js";import{A as D}from"./AuthenticatedLayout-BYh34Ct0.js";import{r as L,s as O}from"./dataSelect-CT4zu1a9.js";import{d as R,e as f,f as j}from"./index-BpW1zpzZ.js";import"./index-bQJK_d4_.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-D6Q0hULq.js";import"./index-lAfHCAfY.js";const ee=({companies:t})=>{const{auth:n}=_().props,[x,v]=d.useState(!1),[u,N]=d.useState(!1),[c,m]=d.useState([]),p=t==null?void 0:t.filter(s=>s.id===n.user.company_id).map(s=>({id:s.id,descricao:s.corpreason})),{data:l,setData:r,post:g,processing:q,errors:a}=S({company_id:n.user.company_id===null?"":p[0].id,company:n.user.company_id===null?"":p[0].corpreason,name:"",email:"",password:"",roles:"",status:"",password_confirmation:""});function y(s){s.preventDefault(),g(route("users.store"))}const b=s=>{const i=s.toLowerCase(),o=t==null?void 0:t.filter(C=>C.corpreason.toLowerCase().includes(i));m(o)};d.useEffect(()=>{l.company===""&&m([])},[l]);const w=(s,i)=>{r(o=>({...o,company_id:s})),r(o=>({...o,company:i})),m([])};return e.jsxs(D,{children:[e.jsx(F,{title:"Dashboard"}),e.jsx("main",{className:"animate__animated animate__fadeIn",children:e.jsxs(z,{children:[e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsx(R,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(A,{links:[{url:"/users",label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsx(h,{children:e.jsx(B,{url:"/users",label:"Voltar"})}),e.jsx(h,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:y,autoComplete:"off",children:[e.jsx(U,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Cliente",children:"Cliente"}),e.jsx("input",{type:"text",value:l.company_id,onChange:s=>r("company_id",s.target.value),className:"hidden"}),e.jsx("input",{id:"company",type:"text",value:l.company,onChange:s=>{r("company",s.target.value),b(s.target.value)},className:"input-form",readOnly:n.user.company_id!==null}),c.length>0&&e.jsx("div",{className:"absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:c.map((s,i)=>e.jsx("li",{className:`flex items-center justify-normal ${i<c.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>w(s.id,s.corpreason),children:s.corpreason})},i))})}),a.company_id&&e.jsx("div",{className:"text-sm text-red-500",children:a.company_id})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:l.name,onChange:s=>r("name",s.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:s=>r("email",s.target.value),className:"input-form"}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:x?"text":"password",value:l.password,onChange:s=>r("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>v(s=>!s),children:x?e.jsx(f,{size:24}):e.jsx(j,{size:24})})]}),a.password&&e.jsx("div",{className:"text-sm text-red-500",children:a.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:u?"text":"password",value:l.password_confirmation,onChange:s=>r("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>N(s=>!s),children:u?e.jsx(f,{size:24}):e.jsx(j,{size:24})})]}),a.password_confirmation&&e.jsx("div",{className:"text-red-500",children:a.password_confirmation})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"roles",children:"Função"}),e.jsxs("select",{id:"roles",value:l.roles,onChange:s=>r("roles",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),L.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.roles&&e.jsx("div",{className:"text-sm text-red-500",children:a.roles})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsxs("select",{id:"status",value:l.status,onChange:s=>r("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),O.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.status&&e.jsx("div",{className:"text-red-500",children:a.status})]})]})]})}),e.jsx(H,{children:e.jsx(k,{})})]})]})]})})]})};export{ee as default};