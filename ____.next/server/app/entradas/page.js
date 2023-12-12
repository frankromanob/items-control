(()=>{var e={};e.id=409,e.ids=[409],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},39035:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>l});var s=r(67096),i=r(16132),a=r(37284),n=r.n(a),o=r(32564),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["entradas",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,82346)),"/Users/altice/RomApps/items-control/src/app/entradas/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9414)),"/Users/altice/RomApps/items-control/src/app/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,68056)),"/Users/altice/RomApps/items-control/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/altice/RomApps/items-control/src/app/entradas/page.tsx"],u="/entradas/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/entradas/page",pathname:"/entradas",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},97468:(e,t,r)=>{Promise.resolve().then(r.bind(r,22105)),Promise.resolve().then(r.bind(r,58037)),Promise.resolve().then(r.bind(r,73544))},73544:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EntriesListGrid:()=>u,default:()=>p});var s=r(53854),i=r(24319),a=r(62690),n=r(21703),o=r(27470),d=r(75548),l=r.n(d);let c=[{field:"id",headerName:"Id Entrada",width:100,headerAlign:"center",renderCell:({row:e})=>s.jsx(l(),{href:`/admin/entradas/${e.id}`,passHref:!0,legacyBehavior:!0,children:s.jsx(i.Z,{underline:"always",children:e.id})})},{field:"productImage",headerName:"Foto",headerAlign:"center",width:100,renderCell:({row:e})=>s.jsx(a.Z,{component:"img",className:"fadeIn",image:`${e.productImage}`,height:"50",width:"100"})},{field:"productName",headerName:"Producto",width:200,headerAlign:"center",renderCell:({row:e})=>s.jsx(l(),{href:`/admin/productos/${e.productSlug}`,passHref:!0,legacyBehavior:!0,children:s.jsx(i.Z,{underline:"always",children:e.productName})})},{field:"quantity",headerName:"Cantidad",width:100},{field:"status",headerName:"Estado",width:100},{field:"date",headerName:"Fecha",width:200}],u=({entries:e})=>{let t=e.map(e=>({id:e._id,product:e.product,quantity:e.quantity,status:e.status,date:new Date(e.createdAt).toLocaleDateString(),productName:e.productName,productImage:e.productImage,productSlug:e.productSlug}));return s.jsx(s.Fragment,{children:s.jsx(n.ZP,{container:!0,className:"fadeIn",children:s.jsx(n.ZP,{item:!0,lg:12,xs:12,sx:{height:650,width:"100%"},children:s.jsx(o._$,{sx:{boxShadow:2,border:1,borderColor:"#F5F256",color:"secondary.main","& .MuiDataGrid-cell:hover":{color:"primary.main"}},rows:t,columns:c,autoPageSize:!0})})})})},p=u},82346:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(4656),i=r(78948),a=r(95153);let n=(0,a.createProxy)(String.raw`/Users/altice/RomApps/items-control/src/components/EntriesListGrid.tsx`),{__esModule:o,$$typeof:d}=n,l=n.default;(0,a.createProxy)(String.raw`/Users/altice/RomApps/items-control/src/components/EntriesListGrid.tsx#EntriesListGrid`);let c=async()=>{let{data:e,statusText:t}=await (0,i.Z)("/entries");return e||"OK"===t?s.jsx(l,{entries:e}):(0,s.jsxs)(s.Fragment,{children:[" ",t]})};var u=r(32275),p=r(17718);function x(){return(0,s.jsxs)(p.Box,{sx:{display:"flex",flexDirection:"column"},children:[s.jsx(p.Box,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"}},children:s.jsx(p.Button,{size:"small",sx:{height:"20px",width:"200px",mb:1},startIcon:s.jsx(u.ZP,{}),color:"secondary",href:"/admin/entradas/nuevo",children:"Dar entrada"})}),s.jsx(c,{})]})}},78948:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(40700);let i=s.Z.create({baseURL:"http://localhost:3000/api"}),a=i},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(31323);let i=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,697,700,323,760,314,15],()=>r(39035));module.exports=s})();