import{Y as re,u as te,a as oe,r as l,d as f,c as ne,j as e,L as i,f as U,M as j,g as ce,I as de,B as M}from"./index-1d21582a.js";import{u as me,C as N}from"./index.esm-fa3ac2fb.js";import{R as F,t as ue}from"./toolbar.config-03c6c1ff.js";import{g as ie}from"./BrandServices-9cf2baa5.js";import{a as pe}from"./CategoryService-c77fd249.js";import{c as xe}from"./ProductService-a55892ea.js";import{g as be}from"./SubCategoryServices-1d46ec96.js";import{B as o}from"./Breadcrumb-9cc0fb94.js";import{U as E}from"./Uploader-b1297e61.js";import{S as y}from"./SelectPicker-e5f92bb7.js";const ge=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function he(n,c){const d=new FileReader;d.onloadend=()=>{c(d.result)},d.readAsDataURL(n)}function Ee(){var I,B,P;const n=te(s=>s.user.user),c=oe(),[d,p]=l.useState(!1),[w,x]=l.useState({product_image:""}),[L,S]=l.useState([]),[R,v]=l.useState(null),[T,k]=l.useState("brand"),[A,q]=l.useState(""),{data:b}=f(["brandsIdName",n.jwt],ie),{data:m}=f(["categoryIdName","",n.jwt,T,-1],pe);console.log(m);const{data:g}=f(["subCategoryIdName","",n.jwt,A,-1],be),H=(I=m==null?void 0:m.data)==null?void 0:I.map(s=>({label:s==null?void 0:s.category_label,value:s._id})),z=(B=g==null?void 0:g.data)==null?void 0:B.map(s=>({label:s==null?void 0:s.subcategory_name,value:s._id})),V=[...((P=b==null?void 0:b.data)==null?void 0:P.map(s=>({label:s==null?void 0:s.name,value:s.id})))||["loading"]].map(s=>({label:s==null?void 0:s.label,value:s==null?void 0:s.value})),$=[...H||[{label:"No Category",value:"no-category"}]].map(s=>({label:s==null?void 0:s.label,value:s==null?void 0:s.value})),[C,D]=l.useState(F.createEmptyValue()),O=s=>{s&&D(s)},{register:t,control:h,reset:je,handleSubmit:Q,formState:{errors:Ne}}=me({}),Y=ne(xe),[G,J]=l.useState("No Brand"),[K,W]=l.useState("No Category"),[X,Z]=l.useState("No Sub Category"),ee=e.jsx(j,{showIcon:!0,type:"success",closable:!0,children:"Success : Product Added Successfully."}),se=e.jsx(j,{showIcon:!0,type:"error",closable:!0,children:"Error : Product Added Failed !."}),ae=s=>{const a=C.toString("html");s.fet_image=[...L],s.product_image=R,s.brand_name=G,s.category_name=K,s.subcategory_name=X,s.product_information=a,Y.mutate({data:s,token:n.jwt},{onSuccess:r=>{c.push(ee,{placement:"bottomStart",duration:2e3}),x(null),v(null),S(null)},onError:r=>{c.push(se,{placement:"bottomStart",duration:3e3})}}),setTimeout(()=>{window.location.reload()},1500)},[ye,le]=l.useState(""),[we,_]=l.useState(null),u=s=>{/^\d*$/.test(s)?(le(s),_("")):_("Only numeric values are allowed")};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-6 bg-base-100 text-gray-900 h-screen ",children:e.jsxs("form",{onSubmit:Q(ae),className:"container flex flex-col mx-auto space-y-12 ",children:[e.jsxs("fieldset",{className:" grid grid-cols-4 gap-6 p-24 border-l-8 border-l-indigo-400 border-b-2 border-t hover:shadow-md rounded-md shadow-sm bg-base-50",children:[e.jsxs("div",{className:"space-y-2 col-span-full lg:col-span-1",children:[e.jsxs(o,{className:"text-sm",children:[e.jsx(o.Item,{as:i,to:"/dashbord",children:"Home"}),e.jsx(o.Item,{as:i,to:"/dashbord/product/list",children:"product-list"}),e.jsx(o.Item,{active:!0,className:"text-blue-400",children:"product-creation"})]}),e.jsx("p",{className:"font-thin text-3xl",children:"Product & Feature Images"})]}),e.jsx("div",{className:"flex  flex-col flex-wrap gap-4 col-span-full lg:col-span-3",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-10",children:[e.jsxs("div",{className:"col-span-full sm:col-span-3",children:[e.jsx("p",{className:"font-bold font-mono text-sm underline",children:"Upload Product Image"}),e.jsx(E,{fileListVisible:!1,listType:"picture",action:`${U.endpoints.host}/upload`,onUpload:s=>{p(!0),he(s.blobFile,a=>{x(r=>({...r,product_image:a}))})},onSuccess:(s,a)=>{p(!1),v(s.fileUrl)},onError:()=>{x(null),p(!1),c.push(e.jsx(j,{type:"error",children:"Upload failed"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[d&&e.jsx(ce,{backdrop:!0,center:!0}),w?e.jsx("img",{src:w.product_image,width:"100%",height:"150%",alt:"product_picture"}):e.jsx("img",{src:"https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",alt:"product_picture"})]})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("p",{className:"font-bold font-mono text-sm underline",children:"Upload Product Feature Image"}),e.jsx(E,{multiple:!0,listType:"picture",action:`${U.endpoints.host}/upload`,onSuccess:s=>S(a=>[...a,s.fileUrl]),children:e.jsx("button",{type:"button",children:e.jsx(ge,{})})})]})]})})]}),e.jsxs("fieldset",{className:"  grid grid-cols-4 gap-6 px-16 2xl:px-24 py-5 border-l-8 border-l-indigo-400 border-b-2 border-t hover:shadow-md rounded-md shadow-sm bg-base-50",children:[e.jsxs("div",{className:"space-y-2 col-span-full lg:col-span-1",children:[e.jsxs(o,{className:"text-sm",children:[e.jsx(o.Item,{as:i,to:"/dashbord",children:"Home"}),e.jsx(o.Item,{as:i,to:"/dashbord/product/list",children:"product-list"}),e.jsx(o.Item,{active:!0,className:"text-blue-400",children:"product-creation"})]}),e.jsx("p",{className:"font-thin  text-3xl",children:"Product Inormation"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 col-span-full lg:col-span-3",children:[e.jsxs("div",{className:"col-span-full sm:col-span-3 flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Product Name"}),e.jsx(de,{required:!0,className:"w-[12rem] 2xl:w-[14.5rem]",...t("name")}),e.jsx("div",{"data-lastpass-icon-root":"true"})]}),e.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-3 gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Select Company"}),e.jsx(N,{name:"brand_id",...t("brand_id"),control:h,render:({field:s})=>e.jsx(y,{searchable:!0,...s,size:"md",data:V,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(a,r)=>{s.onChange(a),k(a),J(r.target.innerHTML)},onBlur:()=>s.onBlur()})})]}),e.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-3 gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Category"}),e.jsx(N,{name:"category_id",...t("category_id"),control:h,render:({field:s})=>e.jsx(y,{searchable:!0,...s,size:"md",data:$,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(a,r)=>{s.onChange(a),W(r.target.innerHTML),q(a)},onBlur:()=>s.onBlur()})})]}),e.jsxs("div",{className:"col-span-full flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Subcategory"}),e.jsx(N,{name:"sub_category_id",...t("subcategory_id"),control:h,render:({field:s})=>e.jsx(y,{searchable:!0,...s,size:"md",data:z,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(a,r)=>{Z(r.target.innerHTML),s.onChange(a)},onBlur:()=>s.onBlur()})})]}),e.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-2 gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Price"}),e.jsx("input",{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 p-3",required:!0,type:"number",...t("price"),onChange:u})]}),e.jsxs("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-bold",children:"Minimum Purchase"}),e.jsx("input",{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 p-3",type:"number",...t("min_purchease"),onChange:u})]}),e.jsxs("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"zip",className:"text-sm font-bold",children:"Maximum Purchase"}),e.jsx("input",{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 p-3",required:!0,type:"number",...t("max_purchease"),onChange:u})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-sm font-bold",children:"Discount"}),e.jsx("input",{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 p-3",required:!0,type:"number",...t("discount"),onChange:u})]}),e.jsx("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:e.jsx("div",{className:"flex flex-col gap-5",children:e.jsxs("div",{className:"2xl:w-[100vh]",children:[e.jsx("label",{className:"text-sm font-bold",children:"Product Information"}),e.jsx(F,{className:"mt-2",toolbarConfig:ue,value:C,onChange:O}),e.jsxs("div",{className:"flex gap-2 mt-10",children:[e.jsx(M,{className:"2xl:w-[10rem]",appearance:"ghost",children:"Cancel"}),e.jsx(M,{type:"submit","aria-required":!0,appearance:"primary",className:"bg-blue-600 font-bold 2xl:h-[3rem] 2xl:w-[10rem] ",children:"Add Product"})]})]})})})]})]})]})})})}export{Ee as default};
