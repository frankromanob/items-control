(()=>{var e={};e.id=619,e.ids=[619],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},54516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d});var s=r(67096),a=r(16132),i=r(37284),o=r.n(i),n=r(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["admin",{children:["entradas",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,99865)),"/Users/altice/RomApps/items-control/src/app/admin/entradas/[id]/page.tsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9414)),"/Users/altice/RomApps/items-control/src/app/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,68056)),"/Users/altice/RomApps/items-control/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/altice/RomApps/items-control/src/app/admin/entradas/[id]/page.tsx"],c="/admin/entradas/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/entradas/[id]/page",pathname:"/admin/entradas/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},36092:(e,t,r)=>{Promise.resolve().then(r.bind(r,58037)),Promise.resolve().then(r.bind(r,81582))},70346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(43058),a=r(53854);let i=(0,s.Z)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},83285:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(43058),a=r(53854);let i=(0,s.Z)((0,a.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"}),"SaveOutlined")},663:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(83847);let a=s.Z.create({baseURL:"http://localhost:3000/api"}),i=a},81582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(53854),a=r(34218),i=r(70346),o=r(83285),n=r(43958),l=r(21703),d=r(38770),u=r(62690),c=r(91494),p=r(91437),x=r(93072),m=r(92747),h=r(90509),f=r(30505),g=r(51018),y=r(663);function v({entry:e}){let{register:t,handleSubmit:r,formState:{errors:v},getValues:q,setValue:j,watch:b}=(0,m.cI)({defaultValues:e}),[Z,P]=(0,a.useState)(void 0),[w,E]=(0,a.useState)(!1),[_,S]=(0,a.useState)(!1),C=(0,g.useRouter)();(0,a.useEffect)(()=>{let e=async()=>{let{data:e}=await (0,y.Z)("/products");P(e)};e()},[]),(0,a.useEffect)(()=>{Z&&S(!0)},[Z]);let T=async e=>{E(!0);try{console.log(e);let t=await (0,y.Z)({method:e._id?"PUT":"POST",url:"/entries",data:JSON.stringify(e),headers:{"Content-Type":"multipart/form-data; "}});if(E(!1),"OK"!==t.statusText)throw Error(t.statusText);alert("Entrada guardada correctamente."),C.replace("/entradas"),C.refresh()}catch(e){E(!1),alert("Ha ocurrido un error. "+e),console.log(e)}},A=async e=>{try{let t=await (0,y.Z)("/entries",{method:"DELETE",data:JSON.stringify(e)});if("OK"!==t.statusText)throw Error(t.statusText);alert("Entrada eliminada correctamente. Nota: esto no rebaja la existencia"),C.replace("/entradas"),C.refresh()}catch(e){E(!1),console.log(e)}},I=e=>{let t=Z.filter(t=>t._id==e);j("productName",t[0].title,{shouldValidate:!0}),j("productSlug",t[0].slug,{shouldValidate:!0}),j("productImage",t[0].images[0],{shouldValidate:!0})};return _?s.jsx(h.Z,{sx:{display:"flex",flexDirection:"column",m:1},children:s.jsx("form",{name:"entryForm",onSubmit:r(T),children:s.jsx(l.ZP,{container:!0,spacing:2,mt:1,children:(0,s.jsxs)(l.ZP,{item:!0,xs:12,children:[s.jsx(l.ZP,{item:!0,xs:6,sm:3,mb:2,children:s.jsx(d.Z,{sx:{width:"110px"},children:s.jsx(u.Z,{component:"img",className:"fadeIn",width:"200",height:"100%",image:`${q("productImage")}`,alt:q("productName")})})},q("product")),s.jsx(h.Z,{sx:{display:"flex",flexDirection:"row",width:"50",height:"30",mb:1},children:s.jsx(c.Z,{select:!0,fullWidth:!0,id:"Producto",disabled:"Completada"==q("status"),defaultValue:e.product,label:"Producto",...t("product",{required:"Este campo es requerido"}),error:!!v.product,helperText:v.product?.message,onChange:e=>I(e.target.value),children:Z.map(e=>(0,s.jsxs)(p.Z,{value:e._id,sx:{display:"flex",flexDirection:"row"},children:[s.jsx(h.Z,{sx:{width:"20px",mr:1},children:s.jsx(u.Z,{component:"img",image:e.images[0],alt:e.title})}),e.title]},e._id))})}),s.jsx(c.Z,{label:"Cantidad",variant:"outlined",fullWidth:!0,type:"number",disabled:"Completada"==q("status"),autoComplete:"false",id:"quantity",name:"quantity",sx:{mb:1},...t("quantity",{required:"Este campo es requerido",validate:e=>e<1?"No puede ser menor a 1":void 0}),error:!!v.quantity,helperText:v.quantity?.message}),s.jsx(c.Z,{label:"Estado",variant:"outlined",fullWidth:!0,autoComplete:"false",id:"status",name:"status",value:q("status"),sx:{mb:1},...t("status",{}),error:!!v.status}),s.jsx(x.Z,{sx:{my:1}}),(0,s.jsxs)(h.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",sx:{mb:1},children:[s.jsx(f.Z,{color:"error",startIcon:s.jsx(i.Z,{}),sx:{width:"100px",height:"30px",marginInlineEnd:"20px"},type:"button",onClick:()=>A(q("_id")),children:"Eliminar"}),s.jsx(f.Z,{color:"secondary",startIcon:s.jsx(o.Z,{}),sx:{width:"150px",height:"30px"},type:"submit",disabled:w||"Completada"==q("status"),children:"Guardar"})]})]})})})}):s.jsx(n.Z,{marginInlineStart:"5px",fontWeight:"bold",color:"secondary",children:"Cargando productos..."})}},99865:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(4656),a=r(17718),i=r(95153);let o=(0,i.createProxy)(String.raw`/Users/altice/RomApps/items-control/src/components/EntriesForm.tsx`),{__esModule:n,$$typeof:l}=o,d=o.default;var u=r(78948);async function c({entryId:e}){let t;let{data:r,statusText:a}=await (0,u.Z)(`/entries/${"nuevo"===e?"":e}`);if("nuevo"!==e){if(!r&&"OK"!==a)return s.jsx(s.Fragment,{children:a});t=r}else t={_id:"",product:"",productImage:"",productName:"",productSlug:"",status:"En proceso",quantity:0,createdAt:"",updatedAt:""};return s.jsx(d,{entry:t})}function p({params:e}){return(0,s.jsxs)(a.Box,{sx:{display:"flex",flexDirection:"column"},children:[s.jsx(a.Box,{display:"flex",marginInlineStart:"5px",justifyContent:"space-between",children:(0,s.jsxs)(a.Typography,{color:"secondary",children:["Entrada: ",e.id]})}),s.jsx(c,{entryId:e.id})]})}},78948:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(40700);let a=s.Z.create({baseURL:"http://localhost:3000/api"}),i=a},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(31323);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,697,700,323,79,15],()=>r(54516));module.exports=s})();