import{u as ue,a as me,b as ge,r,e as y,c as pe,d as he,f as be,j as a,S as xe,P as fe,U as $,g as c,M as S,h as je,I as i,C as N,i as C,k as M,x as T,W as _e}from"./index-bccdd863.js";import{g as ye}from"./BrandServices-5ef86149.js";import{a as Se}from"./CategoryService-247dc81c.js";import{g as Ne}from"./SubCategoryServices-e4f0676d.js";import{R as k,t as Ce}from"./toolbar.config-c6511029.js";function ve(l,d){const u=new FileReader;u.onloadend=()=>{d(u.result)},u.readAsDataURL(l)}function Fe(){var E,F,L;const l=ue(e=>e.user.user),d=me(),s=ge().state.myData,[z,m]=r.useState(!1),[g,p]=r.useState({product_image:s==null?void 0:s.product_image}),[H,v]=r.useState([]),[q,I]=r.useState(null),[h,A]=r.useState(s.brand_id||""),[b,w]=r.useState(s.category_id||""),[Ie,P]=r.useState(s.subcategory_id||""),[K,Q]=r.useState(s.categoryName),[W,B]=r.useState(s.subCategoryName);r.useEffect(()=>{h!==s.brand_id&&(Q("Select Category"),w(""),P(""),B("Select Subcategory"))},[h,s.brand_id]),r.useEffect(()=>{b!==s.category_id&&(P(""),B("Select Subcategory"),U("Not Sub Category"))},[b,s.category_id]);const{data:x}=y(["brandsIdName",l.jwt],ye),{data:f}=y(["categoryIdName","",l.jwt,h,-1],Se),{data:j}=y(["subCategoryIdName","",l.jwt,b,-1],Ne),G=(E=f==null?void 0:f.data)==null?void 0:E.map(e=>({label:e==null?void 0:e.category_label,value:e._id})),J=(F=j==null?void 0:j.data)==null?void 0:F.map(e=>({label:e==null?void 0:e.subcategory_name,value:e._id})),O=[...((L=x==null?void 0:x.data)==null?void 0:L.map(e=>({label:e==null?void 0:e.name,value:e.id})))||["loading"]].map(e=>({label:e==null?void 0:e.label,value:e==null?void 0:e.value})),X=[...G||[{label:"No Category",value:"no-category"}]].map(e=>({label:e==null?void 0:e.label,value:e==null?void 0:e.value})),{register:n,control:_,reset:Y,handleSubmit:Z,formState:{errors:Pe}}=pe({defaultValues:{brand_id:s.brand_id,category_id:s.category_id,subcategory_id:s.subcategory_id,brand_name:s.brand_name}}),D=he(_e),[ee,ae]=r.useState(s.brand_name),[se,te]=r.useState(s.category_name),[re,U]=r.useState(s.subcategory_name);console.log(s.product_information);const[V,oe]=r.useState(k.createValueFromString(s.product_information,"html")),ne=e=>{e&&oe(e)},le=e=>{const t=V.toString("html");e.fet_image=[...H],e.product_image=q||g.product_image,e.brand_name=ee,e.category_name=se,e.subcategory_name=re,e.product_information=t;let o=s._id;D.mutate({data:e,token:l.jwt,id:o},{onSuccess:ie=>{d.push(a.jsx(S,{type:"success",children:"Product updated successfully"})),p(null),I(null),v(null),R(-1)},onError:ie=>{d.push(a.jsx(S,{type:"error",children:"Product update failed !"}))}}),Y()},de=s.fet_image.map((e,t)=>({name:`${t}.png`,fileKey:t+1,url:e})),R=be();r.useState(null);const ce=e=>{T.delete(`${c.endpoints.host}/delete-image/${e}`).then(t=>T.patch(`${c.endpoints.host}/update/products/fet-img/${s._id}?imageUrl=${c.endpoints.host}/uploads/${e}`).then(o=>console.log("image deleted from product",o)).catch(o=>console.log(o))).catch(t=>console.log(t))};return a.jsx(a.Fragment,{children:a.jsx(xe,{justifyContent:"center",alignItems:"center",direction:"column",className:"mt-28 2xl:mt-5 ",style:{height:"100vh"},children:a.jsx(fe,{bordered:!0,className:"shadow-sm w-[48.5rem]",header:a.jsx("h3",{className:"font-bold bg-indigo-700 p-8 text-2xl text-white rounded-lg",children:"Upadte Product Information"}),children:a.jsx("form",{onSubmit:Z(le),children:a.jsxs("div",{children:[a.jsx("div",{className:"flex justify-center items-center mb-5 ",children:a.jsx($,{fileListVisible:!1,listType:"picture",action:`${c.endpoints.host}/upload`,onUpload:e=>{m(!0),ve(e.blobFile,t=>{p(o=>({...o,product_image:t}))})},onSuccess:(e,t)=>{m(!1),I(e.fileUrl)},onError:()=>{p(null),m(!1),d.push(a.jsx(S,{type:"error",children:"Upload failed"}))},children:a.jsxs("button",{type:"button",style:{width:150,height:150},children:[z&&a.jsx(je,{backdrop:!0,center:!0}),g?a.jsx("img",{src:g.product_image,width:"100%",height:"150%",alt:"product_picture"}):a.jsx("img",{src:s==null?void 0:s.product_image,alt:"product_picture"})]})})}),a.jsx("div",{className:"mt-3",children:a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Feature Image"}),a.jsx("div",{className:"flex",children:a.jsx($,{disabled:!1,listType:"picture",defaultFileList:de,action:`${c.endpoints.host}/upload`,onSuccess:e=>v(t=>[...t,e.fileUrl]),onRemove:e=>{ce(e.url.split("/")[4])}})})]})}),a.jsxs("div",{className:"flex gap-5 mt-3",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Product Name"}),a.jsx(i,{required:!0,defaultValue:s.name,className:"w-[14.5rem]",...n("name")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Select Company"}),a.jsx(N,{name:"brand_id",...n("brand_id"),control:_,defaultValue:s.brand_id,render:({field:e})=>a.jsx(C,{searchable:!0,...e,placeholder:s.brand_name,size:"md",data:O,className:"w-[14.5rem]",onChange:(t,o)=>{e.onChange(t),A(t),ae(o.target.innerHTML)},onBlur:()=>e.onBlur()})})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Select Category"}),a.jsx(N,{name:"category_id",...n("category_id"),control:_,defaultValue:s.category_id,render:({field:e})=>a.jsx(C,{searchable:!0,...e,size:"md",placeholder:K,data:X,className:"w-[14.5rem]",onChange:(t,o)=>{e.onChange(t),te(o.target.innerHTML),w(t)},onBlur:()=>e.onBlur()})})]})]}),a.jsxs("div",{className:"flex gap-5 mt-3",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Select Sub Category"}),a.jsx(N,{name:"sub_category_id",...n("subcategory_id"),control:_,defaultValue:s.subcategory_id,render:({field:e})=>a.jsx(C,{loading:!1,searchable:!0,...e,placeholder:W,size:"md",data:J,className:"w-[14.5rem]",onChange:(t,o)=>{U(o.target.innerHTML),e.onChange(t)},onBlur:()=>e.onBlur()})})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Price"}),a.jsx(i,{className:"w-[14.5rem]",defaultValue:s==null?void 0:s.price,...n("price")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Minimum Purchase"}),a.jsx(i,{className:"w-[14.5rem]",defaultValue:s==null?void 0:s.min_purchease,...n("min_purchease")})]})]}),a.jsxs("div",{className:"flex gap-5  mt-3 ",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Maximum Purchase"}),a.jsx(i,{className:"w-[14.5rem]",defaultValue:s==null?void 0:s.max_purchease,...n("max_purchease")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Discount"}),a.jsx(i,{className:"w-[14.5rem]",defaultValue:s==null?void 0:s.discount,...n("discount")})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold mt-3",children:"Description"}),a.jsx(k,{className:"mt-2",toolbarConfig:Ce,value:V,onChange:ne})]}),a.jsxs("div",{className:"mt-10 flex gap-2",children:[a.jsx(M,{onClick:()=>R(-1),appearance:"ghost",children:"Cancel"}),a.jsx(M,{type:"submit","aria-required":!0,appearance:"primary",className:"bg-blue-600 font-bold",children:"Update Product"})]})]})})})})})}export{Fe as default};