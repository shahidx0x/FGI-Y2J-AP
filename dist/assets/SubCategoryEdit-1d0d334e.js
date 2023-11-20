import{u as w,a as k,r as d,f as D,aa as _,b as E,c as F,d as L,j as e,S as R,L as g,P as B,g as P,M as n,h as M,I as b,B as y}from"./index-53bfec98.js";import{U as T}from"./SubCategoryServices-a1593d61.js";import{B as o}from"./Breadcrumb-0e13797f.js";import{U as V}from"./Uploader-84ef8d41.js";function A(i,t){const r=new FileReader;r.onloadend=()=>{t(r.result)},r.readAsDataURL(i)}function J(){const i=w(s=>s.user.user),t=k(),[r,c]=d.useState(!1),[m,p]=d.useState(null),[x,j]=d.useState({fileUrl:""}),u=D();_();const a=E();console.log(a.state.myData);const{register:h,handleSubmit:S,reset:N,formState:{errors:H}}=F(),C=L(T),v=s=>{x.fileUrl!==""?s.image=x.fileUrl:s.image="";let l=a.state.myData.category_id,I=a.state.myData._id;C.mutate({data:s,token:i.jwt,cat_id:l,sub_cat_id:I},{onSuccess:f=>{t.push(e.jsx(n,{type:"success",children:"Sub Category updated successfully"})),u(-1)},onError:f=>{console.log(f),t.push(e.jsx(n,{type:"error",children:"Sub Category update failed ! Try Again."}))}}),N()};function U(){u(-1)}return e.jsx(e.Fragment,{children:e.jsxs(R,{justifyContent:"center",alignItems:"center",direction:"column",className:"mt-20 2xl:mt-[-3rem] ",style:{height:"100vh"},children:[e.jsxs(o,{className:"text-xl font-mono ",children:[e.jsx(o.Item,{as:g,to:"/dashbord",children:"Home"}),e.jsx(o.Item,{as:g,to:"/dashbord/all-company",children:"category-list"}),e.jsx(o.Item,{className:"cursor-pointer hover:text-blue-500",onClick:()=>{u(-1)},children:"sub-category-list"}),e.jsx(o.Item,{active:!0,className:"text-blue-400",children:"sub-category-update"})]}),e.jsx(B,{bordered:!0,className:"shadow-sm w-[50rem] border-gray-300",style:{background:"#fff"},header:e.jsx("h3",{className:"font-bold bg-indigo-500 p-8 text-2xl text-white rounded-lg",children:"Edit Sub Category Information"}),children:e.jsxs("form",{onSubmit:S(v),children:[e.jsx("div",{className:"flex justify-center items-center mb-10 ",children:e.jsx(V,{fileListVisible:!1,listType:"picture",action:`${P.endpoints.host}/upload`,onUpload:s=>{c(!0),A(s.blobFile,l=>{p(l)})},onSuccess:(s,l)=>{c(!1),t.push(e.jsx(n,{type:"success"})),j(s)},onError:()=>{p(null),c(!1),t.push(e.jsx(n,{type:"error"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[r&&e.jsx(M,{backdrop:!0,center:!0}),m?e.jsx("img",{src:m,width:"100%",height:"150%"}):e.jsx("img",{src:a.state.myData.image,alt:"Category Profile"})]})})}),e.jsx("div",{className:"flex  gap-5 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Name"}),e.jsx(b,{defaultValue:a.state.myData.subcategory_name,...h("subcategory_name"),className:"w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Information"}),e.jsx(b,{defaultValue:a.state.myData.description,...h("description"),as:"textarea",rows:3})]}),e.jsxs("div",{className:"2xl:mb-4 flex gap-2",children:[e.jsx(y,{appearance:"ghost",onClick:()=>U(),children:"Cancel"}),e.jsx(y,{type:"submit",appearance:"primary",className:"bg-blue-600",children:"Update Sub Category"})]})]})})]})})]})})}export{J as default};
