import{q as g,r as x,W as N,j as e,Y as y}from"./app-jgsP0YoB.js";import{B as C,S as F}from"./index-BlrP6Rs_.js";import{C as w,H as k,T as B,B as S,a as E,b as L,c as h,d as _,e as T}from"./index-DKE9zGZR.js";import{A as z}from"./AuthenticatedLayout-52tQb9jq.js";import{m as A,a as H,b as P,c as D,u as d}from"./mask-BEZxBgSq.js";import{d as I}from"./index-DMtN-iMa.js";import"./index-a43cm8_n.js";import"./ApplicationLogo-DLAwNFmx.js";import"./index-BiMitVXP.js";const K=({companies:c})=>{const{auth:p}=g().props,[i,m]=x.useState([]),{data:a,setData:t,post:u,progress:M,processing:O,errors:l}=N({company_id:"",corpreason:"",altername:"",cliente:"",subnumber:"",subname:"",address:"",number:"",cep:"",county:"",state:"",neighborhood:"",cnpj:"",statereg:"",telephone:"",whatsapp:"",observation:""});function j(s){if(s.preventDefault(),(a==null?void 0:a.cnpj)!==""||(a==null?void 0:a.statereg)!=""){const o=d(a==null?void 0:a.cnpj),r=d(a==null?void 0:a.statereg);t(n=>({...n,cnpj:o})),t(n=>({...n,statereg:r}))}u(route("companies.store"))}const b=s=>{const o=s.toLowerCase(),r=c==null?void 0:c.filter(n=>n.corpreason.toLowerCase().includes(o));m(r)};x.useEffect(()=>{a.cliente===""&&m([])},[a]);const f=(s,o)=>{t(r=>({...r,company_id:s})),t(r=>({...r,cliente:o})),m([])},v=s=>{const o=d(s);fetch(`https://viacep.com.br/ws/${o}/json/`).then(r=>r.json()).then(r=>{t(n=>({...n,state:r.uf})),t(n=>({...n,county:r.localidade})),t(n=>({...n,neighborhood:r.bairro})),t(n=>({...n,address:r.logradouro}))}).catch(r=>console.error(r))};return e.jsxs(z,{children:[e.jsx(y,{title:"Dashboard"}),e.jsx("main",{className:"",children:e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsxs(B,{children:[e.jsx(I,{size:30}),e.jsx("span",{className:"ml-2",children:"Filiais"})]}),e.jsx(S,{links:[{url:"/companies",label:"Filiais"},{url:null,label:"Adicionar cliente"}]})]}),e.jsxs(E,{children:[e.jsxs(L,{children:[e.jsx(h,{children:e.jsx(C,{url:"/companies",label:"Voltar"})}),e.jsx(h,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:j,autoComplete:"off",children:[e.jsx(_,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"corpreason",children:"Razão social"}),e.jsx("input",{id:"corpreason",type:"text",value:a.corpreason,onChange:s=>{t("corpreason",s.target.value)},className:"input-form"}),l.corpreason&&e.jsx("div",{className:"text-sm text-red-500",children:l.corpreason})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"altername",children:"Nome alternativo"}),e.jsx("input",{id:"altername",type:"text",value:a.altername,onChange:s=>{t("altername",s.target.value)},className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Cliente",children:"Empresa raiz"}),e.jsx("input",{type:"text",value:a.company_id,onChange:s=>t("company_id",s.target.value),className:"hidden"}),e.jsx("input",{id:"cliente",type:"text",value:a.cliente,onChange:s=>{t("cliente",s.target.value),b(s.target.value)},className:"input-form",readOnly:p.user.company_id!==null}),i.length>0&&e.jsx("div",{className:"absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:i.map((s,o)=>e.jsx("li",{className:`flex items-center justify-normal ${o<i.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>f(s.id,s.corpreason),children:s.corpreason})},o))})}),l.company_id&&e.jsx("div",{className:"text-sm text-red-500",children:l.company_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-6 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"subnumber",children:"Nº Filial"}),e.jsx("input",{id:"subnumber",type:"text",value:a.subnumber,onChange:s=>t("subnumber",s.target.value),className:"input-form"}),l.subnumber&&e.jsx("div",{className:"text-sm text-red-500",children:l.subnumber})]}),e.jsxs("div",{className:"flex flex-col md:md:col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"subname",children:"Nome filial"}),e.jsx("input",{id:"subname",type:"text",value:a.subname,onChange:s=>t("subname",s.target.value),className:"input-form"}),l.subname&&e.jsx("div",{className:"text-sm text-red-500",children:l.subname})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:A(a.cep),onChange:s=>t("cep",s.target.value),onBlur:s=>v(s.target.value),className:"input-form",maxLength:9}),l.cep&&e.jsx("div",{className:"text-sm text-red-500",children:l.cep})]}),e.jsxs("div",{className:"flex flex-col md:col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"address",children:"Endereço"}),e.jsx("input",{id:"address",type:"text",value:a.address,onChange:s=>t("address",s.target.value),className:"input-form"}),l.address&&e.jsx("div",{className:"text-sm text-red-500",children:l.address})]})]}),e.jsxs("div",{className:"grid md:grid-cols-6 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"number",children:"Número"}),e.jsx("input",{id:"number",type:"text",value:a.number,onChange:s=>t("number",s.target.value),className:"input-form"}),l.number&&e.jsx("div",{className:"text-sm text-red-500",children:l.number})]}),e.jsxs("div",{className:"flex flex-col md:col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"county",children:"Municipio"}),e.jsx("input",{id:"county",type:"text",value:a.county,onChange:s=>t("county",s.target.value),className:"input-form"}),l.county&&e.jsx("div",{className:"text-sm text-red-500",children:l.county})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"state",children:"UF"}),e.jsx("input",{id:"state",type:"text",value:a.state,onChange:s=>t("state",s.target.value),className:"input-form"}),l.state&&e.jsx("div",{className:"text-sm text-red-500",children:l.state})]}),e.jsxs("div",{className:"flex flex-col md:col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"neighborhood",children:"Bairro"}),e.jsx("input",{id:"neighborhood",type:"text",value:a.neighborhood,onChange:s=>t("neighborhood",s.target.value),className:"input-form"}),l.neighborhood&&e.jsx("div",{className:"text-sm text-red-500",children:l.neighborhood})]})]}),e.jsxs("div",{className:"grid md:grid-cols-4 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cnpj",children:"CNPJ"}),e.jsx("input",{id:"cnpj",type:"text",value:H(a.cnpj),onChange:s=>t("cnpj",s.target.value),className:"input-form",maxLength:18}),l.cnpj&&e.jsx("div",{className:"text-sm text-red-500",children:l.cnpj})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"statereg",children:"Inscrição"}),e.jsx("input",{id:"statereg",type:"text",value:P(a.statereg),onChange:s=>t("statereg",s.target.value),className:"input-form",maxLength:10}),l.statereg&&e.jsx("div",{className:"text-sm text-red-500",children:l.statereg})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telephone",children:"Telefone"}),e.jsx("input",{id:"telephone",type:"text",value:D(a.telephone),onChange:s=>t("telephone",s.target.value),className:"input-form",maxLength:15}),l.telephone&&e.jsx("div",{className:"text-sm text-red-500",children:l.telephone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp(Ex.: 5551985471163)"}),e.jsx("input",{id:"whatsapp",type:"text",value:a.whatsapp,onChange:s=>t("whatsapp",s.target.value),className:"input-form",maxLength:13})]})]}),e.jsx("div",{className:"md:mt-6 mt-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"observation",children:"Observação"}),e.jsx("textarea",{id:"observation",value:a.observation,onChange:s=>t("observation",s.target.value),className:"input-form"})]})})]})}),e.jsx(T,{children:e.jsx(F,{})})]})]})]})})]})};export{K as default};