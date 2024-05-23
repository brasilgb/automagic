import{q as u,W as p,j as e,Y as j}from"./app-B24FlwIl.js";import{C as b,a as f,b as v,c,B as g,d as N,e as C,S as y}from"./index-UvR54mSr.js";import{F}from"./index-DHfoX9qV.js";import{H as B,T as _,B as k}from"./index-Cw1C9epw.js";import{A as w}from"./AuthenticatedLayout-CEGvsGB6.js";import{m as E,a as S,b as L,c as T,u as H}from"./mask-BEZxBgSq.js";import{b as I}from"./index-DNtldiYn.js";import"./iconBase-BCUdHUQL.js";import"./moment-C5S46NFB.js";import"./index-CxRr90cW.js";const Y=({companies:t})=>{const{flash:i}=u().props;console.log(i);const{data:r,setData:l,patch:m,progress:P,processing:z,errors:s}=p({company_id:t.company_id,corpreason:t.corpreason,altername:t.altername,cliente:t.companies,subnumber:t.subnumber,subname:t.subname,address:t.address,number:t.number,cep:t.cep,county:t.county,state:t.state,neighborhood:t.neighborhood,cnpj:t.cnpj,statereg:t.statereg,telephone:t.telephone,whatsapp:t.whatsapp,observation:t.observation});function d(a){a.preventDefault(),m(route("companies.update",t.id))}const x=a=>{const h=H(a);fetch(`https://viacep.com.br/ws/${h}/json/`).then(n=>n.json()).then(n=>{l(o=>({...o,state:n.uf})),l(o=>({...o,county:n.localidade})),l(o=>({...o,neighborhood:n.bairro})),l(o=>({...o,address:n.logradouro}))}).catch(n=>console.error(n))};return e.jsxs(w,{children:[e.jsx(j,{title:"Dashboard"}),e.jsx("main",{className:"animate__animated animate__fadeIn",children:e.jsxs(b,{children:[e.jsxs(B,{children:[e.jsxs(_,{children:[e.jsx(I,{size:30}),e.jsx("span",{className:"ml-2",children:"Clientes"})]}),e.jsx(k,{links:[{url:"/companies",label:"Clientes"},{url:null,label:"Adicionar cliente"}]})]}),e.jsxs(f,{children:[e.jsx(F,{message:i}),e.jsxs(v,{children:[e.jsx(c,{children:e.jsx(g,{url:"/companies",label:"Voltar"})}),e.jsx(c,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:d,autoComplete:"off",children:[e.jsx(N,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"corpreason",children:"Razão social"}),e.jsx("input",{id:"corpreason",type:"text",value:r.corpreason,onChange:a=>{l("corpreason",a.target.value)},className:"input-form"}),s.corpreason&&e.jsx("div",{className:"text-sm text-red-500",children:s.corpreason})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"altername",children:"Nome alternativo"}),e.jsx("input",{id:"altername",type:"text",value:r.altername,onChange:a=>{l("altername",a.target.value)},className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Cliente",children:"Empresa raiz"}),e.jsx("input",{type:"text",value:r.company_id,onChange:a=>l("company_id",a.target.value),className:"hidden"}),e.jsx("input",{id:"cliente",type:"text",value:r.cliente,onChange:a=>l("cliente",a.target.value),className:"input-form",readOnly:!0})]})]}),e.jsxs("div",{className:"grid md:grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"subnumber",children:"Nº Filial"}),e.jsx("input",{id:"subnumber",type:"text",value:r.subnumber,onChange:a=>l("subnumber",a.target.value),className:"input-form"}),s.subnumber&&e.jsx("div",{className:"text-sm text-red-500",children:s.subnumber})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"subname",children:"Nome filial"}),e.jsx("input",{id:"subname",type:"text",value:r.subname,onChange:a=>l("subname",a.target.value),className:"input-form"}),s.subname&&e.jsx("div",{className:"text-sm text-red-500",children:s.subname})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:E(r.cep),onChange:a=>l("cep",a.target.value),onBlur:a=>x(a.target.value),className:"input-form",maxLength:9}),s.cep&&e.jsx("div",{className:"text-sm text-red-500",children:s.cep})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"address",children:"Endereço"}),e.jsx("input",{id:"address",type:"text",value:r.address,onChange:a=>l("address",a.target.value),className:"input-form"}),s.address&&e.jsx("div",{className:"text-sm text-red-500",children:s.address})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"number",children:"Número"}),e.jsx("input",{id:"number",type:"text",value:r.number,onChange:a=>l("number",a.target.value),className:"input-form"}),s.number&&e.jsx("div",{className:"text-sm text-red-500",children:s.number})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"county",children:"Municipio"}),e.jsx("input",{id:"county",type:"text",value:r.county,onChange:a=>l("county",a.target.value),className:"input-form"}),s.county&&e.jsx("div",{className:"text-sm text-red-500",children:s.county})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"state",children:"UF"}),e.jsx("input",{id:"state",type:"text",value:r.state,onChange:a=>l("state",a.target.value),className:"input-form"}),s.state&&e.jsx("div",{className:"text-sm text-red-500",children:s.state})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"neighborhood",children:"Bairro"}),e.jsx("input",{id:"neighborhood",type:"text",value:r.neighborhood,onChange:a=>l("neighborhood",a.target.value),className:"input-form"}),s.neighborhood&&e.jsx("div",{className:"text-sm text-red-500",children:s.neighborhood})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cnpj",children:"CNPJ"}),e.jsx("input",{id:"cnpj",type:"text",value:S(r.cnpj.toString()),onChange:a=>l("cnpj",a.target.value),className:"input-form",maxLength:18}),s.cnpj&&e.jsx("div",{className:"text-sm text-red-500",children:s.cnpj})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"statereg",children:"Inscrição"}),e.jsx("input",{id:"statereg",type:"text",value:L(r.statereg.toString()),onChange:a=>l("statereg",a.target.value),className:"input-form",maxLength:10}),s.statereg&&e.jsx("div",{className:"text-sm text-red-500",children:s.statereg})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telephone",children:"Telefone"}),e.jsx("input",{id:"telephone",type:"text",value:T(r.telephone),onChange:a=>l("telephone",a.target.value),className:"input-form",maxLength:15}),s.telephone&&e.jsx("div",{className:"text-sm text-red-500",children:s.telephone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp(Ex.: 5551985471163)"}),e.jsx("input",{id:"whatsapp",type:"text",value:r.whatsapp,onChange:a=>l("whatsapp",a.target.value),className:"input-form",maxLength:13})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"observation",children:"Observação"}),e.jsx("textarea",{id:"observation",value:r.observation,onChange:a=>l("observation",a.target.value),className:"input-form"})]})})]})}),e.jsx(C,{children:e.jsx(y,{})})]})]})]})})]})};export{Y as default};
