"use strict";(()=>{var e={};e.id=707,e.ids=[707],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},74197:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>S,originalPathname:()=>v,patchFetch:()=>w,requestAsyncStorage:()=>m,routeModule:()=>p,serverHooks:()=>y,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>f});var r={};a.r(r),a.d(r,{GET:()=>l});var n=a(10884),i=a(16132),o=a(21040),s=a(25999),u=a(59471),d=a(90644),c=a(38562);async function l(){await s.db.connect();let e=(await c.Z.countDocuments()).valueOf(),t=(await c.Z.countDocuments({status:"Completado"})).valueOf(),a=(await d.Z.countDocuments()).valueOf(),r=(await u.Z.countDocuments()).valueOf(),n=(await u.Z.countDocuments({inStock:0})).valueOf(),i=(await u.Z.countDocuments({inStock:{$lte:10}})).valueOf();return await s.db.disconnect(),Response.json({totalOrders:e,completedOrders:t,pendingOrders:e-t,totalClients:a,totalProducts:r,productosWithoutInventory:n,lowInventory:i})}let p=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/dashboard/route",pathname:"/api/dashboard",filename:"route",bundlePath:"app/api/dashboard/route"},resolvedPagePath:"/Users/altice/RomApps/items-control/src/app/api/dashboard/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:y,headerHooks:S,staticGenerationBailout:f}=p,v="/api/dashboard/route";function w(){return(0,o.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:g})}},25999:(e,t,a)=>{a.d(t,{db:()=>r,rx:()=>i,N2:()=>n});var r={};a.r(r),a.d(r,{connect:()=>d,disconnect:()=>c});var n={};a.r(n),a.d(n,{i:()=>m});var i={};a.r(i),a.d(i,{decreaseProductQuantity:()=>f,getAllProducts:()=>y,getProductBySlug:()=>S,increaseProductQuantity:()=>v});var o=a(11185),s=a.n(o);let u={isConnected:0},d=async()=>{if(!u.isConnected){if(s().connections.length>0){if(u.isConnected=s().connections[0].readyState,1===u.isConnected)return;await s().disconnect()}await s().connect(process.env.MONGO_URL||""),u.isConnected=1,console.log("Conectado a MongoDB:",process.env.MONGO_URL)}},c=async()=>{0!==u.isConnected&&(await s().disconnect(),u.isConnected=0)};var l=a(62421),p=a.n(l);let m={users:[{name:"Francisco Romano",email:"fromano@google.com",password:p().hashSync("123456"),role:"admin"},{name:"Betilio Romano",email:"bromano@google.com",password:p().hashSync("654321"),role:"client"}]};a(90644);var g=a(59471);let y=async()=>{await d();let e=await g.Z.find().select(" -_id").lean();await c();let t=e.map(e=>(e.images=e.images.map(e=>e.includes("http")?e:`${process.env.HOST_NAME}/${e}`),e));return JSON.parse(JSON.stringify(t))},S=async e=>{await d();let t=await g.Z.findOne({slug:e}).lean();return(await c(),t)?(t.images=t.images.map(e=>e.includes("http")?e:`${process.env.HOST_NAME}/${e}`),JSON.parse(JSON.stringify(t))):null},f=async e=>{await d();try{e.map(async(e,t)=>{let a=await g.Z.findById({_id:e.product});a&&(a.inStock-=Number(e.quantity)),await a.save({validateBeforeSave:!0})})}catch(e){return console.log(e),new Response("Error al rebajar inventario",{status:500})}await c()},v=async(e,t)=>{await d();try{let a=await g.Z.findById({_id:e});a&&(a.inStock+=Number(t),await a.save({validateBeforeSave:!0}))}catch(e){return console.log(e),new Response("Error al incrementar inventario",{status:500})}await c()}},90644:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(11185),n=a.n(r);let i=new r.Schema({firstName:{type:String,required:!0,default:""},lastName:{type:String,required:!0,default:""},phone:{type:String,required:!0,default:""},email:{type:String,default:""}},{timestamps:!0});i.index({firstName:"text",email:"text"});let o=n().models.Customers||(0,r.model)("Customers",i),s=o},38562:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(11185),n=a.n(r);let i=new r.Schema({customer:{type:String,required:!0},customerName:{type:String,required:!0},customerEmail:{type:String,required:!0},customerPhone:{type:String,required:!0},orderItems:[{id:{type:String,required:!0},quantity:{type:Number,required:!0},status:{type:String,required:!0},product:{type:String,required:!0},productName:{type:String,required:!0},productImage:{type:String,required:!0},productSlug:{type:String,required:!0}},{timestamps:!0}],status:{type:String}},{timestamps:!0}),o=n().models.Order||(0,r.model)("Order",i),s=o},59471:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(11185),n=a.n(r);let i=new r.Schema({description:{type:String,default:""},images:[{type:String}],default:["",""],inStock:{type:Number,default:0},costo:{type:Number,required:!0,default:0},pv:{type:Number,default:0},bv:{type:Number,default:0},ibo:{type:Number,default:0},slug:{type:String,required:!0,default:"",unique:!0},tags:[{type:String,default:["",""]}],title:{type:String,required:!0},type:{type:String,default:""},sizes:{type:String,default:""}},{timestamps:!0});i.index({title:"text",tags:"text",slug:"text"});let o=n().models.Product||(0,r.model)("Product",i),s=o}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,444],()=>a(74197));module.exports=r})();