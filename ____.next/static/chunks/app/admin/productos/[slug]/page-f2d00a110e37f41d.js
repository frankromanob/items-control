(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{91122:function(e,t,l){"use strict";var i=l(38173),s=l(57437);t.Z=(0,i.Z)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},76712:function(e,t,l){"use strict";var i=l(38173),s=l(57437);t.Z=(0,i.Z)((0,s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"}),"SaveOutlined")},24589:function(e,t,l){Promise.resolve().then(l.bind(l,29899)),Promise.resolve().then(l.bind(l,51013))},86447:function(e,t,l){"use strict";var i=l(92173);let s=i.Z.create({baseURL:"".concat("http://localhost:3000","/api")});t.Z=s},51013:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return j}});var i=l(57437),s=l(2265),a=(0,l(38173).Z)((0,i.jsx)("path",{d:"M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"}),"UploadOutlined"),r=l(91122),o=l(76712),n=l(38939),d=l(14172),u=l(65984),c=l(76182),m=l(34293),p=l(86836),x=l(67248),h=l(54986),v=l(61865),f=l(96507),g=l(49600),b=l(24033),Z=l(86447);function j(e){var t,l,j,y,C,w,E,T;let{producto:k}=e,z=(0,b.useRouter)(),{register:S,handleSubmit:q,formState:{errors:V},getValues:W,setValue:N,watch:D}=(0,v.cI)({defaultValues:k}),O=(0,s.useRef)(null),[P,H]=(0,s.useState)(!1),[L,_]=(0,s.useState)("");(0,s.useEffect)(()=>{let e=D((e,t)=>{let{name:l,type:i}=t;if("title"===l){var s;let t=(null===(s=e.title)||void 0===s?void 0:s.trim().replaceAll(" ","_").replaceAll("'","").toLocaleLowerCase())||"";N("slug",t,{shouldValidate:!0})}});return()=>e.unsubscribe()},[D,N]);let I=async e=>{let t=W("images");N("images",t.filter(t=>t!==e),{shouldValidate:!0})},M=async e=>{let{target:t}=e;if(t.files&&0!==t.files.length)try{for(let e of t.files){let t=new FormData;t.append("file",e);let{data:l}=await Z.Z.post("/uploads",t);N("images",[...W("images"),l.secure_url],{shouldValidate:!0})}}catch(e){console.log(e)}},K=e=>{let t=W("tags");if(t.includes(e))return N("tags",t.filter(t=>t!==e),{shouldValidate:!0})},B=e=>{_("");let t=W("tags");t.includes(e.trim().toLowerCase())||N("tags",[...t,e.trim().toLowerCase()])},R=async e=>{if(e.images.length<1)return alert("Se requiere al menos 1 imagen");H(!0);try{let t=await (0,Z.Z)("/products",{method:e._id?"PUT":"POST",data:JSON.stringify(e)});if(H(!1),"OK"!==t.statusText)throw Error(t.statusText);alert("Producto guardado correctamente."),z.replace("/productos")}catch(e){H(!1),alert("Ha ocurrido un error. "+e),console.log(e)}},U=async(e,t)=>{try{let l=await (0,Z.Z)("/products",{method:"DELETE",data:JSON.stringify({productId:e,images:t})});if("OK"!==l.statusText&&"OK"!==l.statusText)throw Error(l.statusText);alert("Producto eliminado correctamente"),z.replace("/productos"),z.refresh()}catch(e){H(!1),console.log(e)}};return(0,i.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",m:1},children:(0,i.jsx)("form",{name:"productForm",onSubmit:q(R),children:(0,i.jsx)(n.ZP,{container:!0,spacing:2,mb:1,children:(0,i.jsxs)(n.ZP,{item:!0,xs:12,sm:6,children:[(0,i.jsxs)(f.Z,{display:"flex",flexDirection:"column",children:[(0,i.jsx)(d.Z,{sx:{mb:1},children:"Im\xe1genes: "}),(0,i.jsx)(n.ZP,{container:!0,spacing:2,children:W("images").map(e=>(0,i.jsx)(n.ZP,{item:!0,xs:6,sm:3,children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(c.Z,{component:"img",className:"fadeIn",width:"200",height:"100%",image:"".concat(e),alt:e}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(g.Z,{fullWidth:!0,color:"error",style:{height:"20px",marginTop:"10px"},onClick:()=>I(e),children:"Borrar"})})]})},e))}),(0,i.jsx)(g.Z,{color:"secondary",fullWidth:!0,startIcon:(0,i.jsx)(a,{}),sx:{mb:3,mt:1},onClick:()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.click()},children:"Cargar imagen"}),(0,i.jsx)(p.Z,{label:"Es necesario al menos 1 imagen",color:"error",variant:"outlined",sx:{mb:1,display:W("images").length<1?"flex":"none"}}),(0,i.jsx)("input",{ref:O,type:"file",multiple:!0,accept:"image/png, image/gif, image/jpeg, image/webp",style:{display:"none"},onChange:M})]}),(0,i.jsxs)(f.Z,{display:"flex",flexDirection:"row",children:[(0,i.jsxs)(f.Z,{display:"block",flexDirection:"column",marginInlineEnd:"5px",children:[(0,i.jsx)(x.Z,{label:"Nombre",variant:"outlined",fullWidth:!0,id:"title",name:"title",autoComplete:"false",sx:{mb:1},...S("title",{required:"Se requiere el nombre del producto.",minLength:{value:2,message:"M\xednimo 2 caracteres"}}),error:!!V.title,helperText:null===(t=V.title)||void 0===t?void 0:t.message}),(0,i.jsx)(x.Z,{label:"Slug",variant:"outlined",fullWidth:!0,value:W("slug"),id:"slug",name:"slug",autoComplete:"false",sx:{mb:1},...S("slug",{validate:e=>e.trim().includes(" ")?"No puede tener espacios en blanco":void 0}),error:!!V.slug,helperText:null===(l=V.slug)||void 0===l?void 0:l.message}),(0,i.jsx)(x.Z,{label:"PV",variant:"outlined",fullWidth:!0,autoComplete:"false",id:"pv",name:"pv",sx:{mb:1},...S("pv",{required:"Este campo es requerido",validate:e=>e<1?"No puede ser menor a 1":void 0}),error:!!V.pv,helperText:null===(j=V.pv)||void 0===j?void 0:j.message}),(0,i.jsx)(x.Z,{label:"BV",variant:"outlined",fullWidth:!0,autoComplete:"false",id:"bv",name:"bv",sx:{mb:1},...S("bv",{required:"Este campo es requerido",validate:e=>e<1?"No puede ser menor a 1":void 0}),error:!!V.bv,helperText:null===(y=V.bv)||void 0===y?void 0:y.message}),(0,i.jsx)(x.Z,{label:"IBO",variant:"outlined",fullWidth:!0,autoComplete:"false",id:"ibo",name:"ibo",sx:{mb:1},...S("ibo",{required:"Este campo es requerido",validate:e=>e<1?"No puede ser menor a 1":void 0}),error:!!V.ibo,helperText:null===(C=V.ibo)||void 0===C?void 0:C.message})]}),(0,i.jsxs)(f.Z,{display:"block",flexDirection:"column",children:[(0,i.jsx)(x.Z,{label:"Existencia",variant:"outlined",fullWidth:!0,autoComplete:"false",id:"instock",name:"instock",sx:{mb:1},...S("inStock",{required:"Este campo es requerido",validate:e=>e<0?"No puede ser menor a 0":void 0}),error:!!V.inStock,helperText:null===(w=V.inStock)||void 0===w?void 0:w.message}),(0,i.jsx)(x.Z,{label:"Tipo",variant:"outlined",autoComplete:"false",id:"type",name:"type",fullWidth:!0,sx:{mb:1},...S("type"),error:!!V.type}),(0,i.jsx)(x.Z,{label:"Tama\xf1o",variant:"outlined",autoComplete:"false",id:"sizes",name:"sizes",fullWidth:!0,sx:{mb:1},...S("sizes"),error:!!V.sizes}),(0,i.jsx)(x.Z,{label:"Costo",variant:"outlined",autoComplete:"false",id:"costo",name:"costo",fullWidth:!0,sx:{mb:1},...S("costo",{required:"Este campo es requerido",validate:e=>e<0?"No puede ser menor a 0":void 0}),error:!!V.costo,helperText:null===(E=V.costo)||void 0===E?void 0:E.message})]})]}),(0,i.jsx)(x.Z,{label:"Etiquetas",variant:"outlined",fullWidth:!0,sx:{mb:1},value:L,helperText:"Presiona [spacebar] para agregar",onChange:e=>{_(e.target.value)},onKeyDown:e=>{" "===e.key&&B(L)}}),(0,i.jsx)(f.Z,{sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:0,m:0},component:"ul",children:W("tags").map(e=>(0,i.jsx)(p.Z,{label:e,onDelete:()=>K(e),color:"primary",size:"small",sx:{ml:1,mt:1}},e))}),(0,i.jsx)(x.Z,{label:"Descripcion",variant:"outlined",autoComplete:"false",id:"description",name:"description",multiline:!0,fullWidth:!0,sx:{mb:1,mt:2},...S("description"),error:!!V.description,helperText:null===(T=V.description)||void 0===T?void 0:T.message}),(0,i.jsx)(h.Z,{sx:{my:1}}),(0,i.jsxs)(f.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",sx:{mb:1},children:[(0,i.jsx)(g.Z,{color:"error",startIcon:(0,i.jsx)(r.Z,{}),sx:{width:"100px",height:"30px",marginInlineEnd:"20px"},type:"button",onClick:()=>U(W("_id"),W("images")),children:"Eliminar"}),(0,i.jsx)(g.Z,{color:"secondary",startIcon:(0,i.jsx)(o.Z,{}),sx:{width:"150px",height:"30px"},type:"submit",disabled:P,children:"Guardar"})]})]})})})})}}},function(e){e.O(0,[869,899,604,971,472,744],function(){return e(e.s=24589)}),_N_E=e.O()}]);