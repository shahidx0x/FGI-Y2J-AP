import{u as w,r as u,d as U,$ as k,b as A,j as e,S as F,L as g,e as R,M as n,f as _,I as b,B as j}from"./index-5ccc964f.js";import{u as L}from"./index.esm-a48af042.js";import{C as B}from"./SubCategoryServices-3c568209.js";import{u as E}from"./useToaster-f36faecc.js";import{B as a}from"./Breadcrumb-5b051a16.js";import{P}from"./Panel-7e2340e0.js";import{U as M}from"./Uploader-a8f11f84.js";function T(i,t){const r=new FileReader;r.onloadend=()=>{t(r.result)},r.readAsDataURL(i)}function K(){const i=w(s=>s.user.user),t=E(),[r,l]=u.useState(!1),[c,m]=u.useState(null),[p,y]=u.useState({fileUrl:""}),x=U(),d=k(),{register:f,handleSubmit:S,reset:N,formState:{errors:$}}=L(),C=A(B),v=s=>{p.fileUrl!==""?s.image=p.fileUrl:s.image="",s.brand_id=d.brand_id,s.category_id=d.category_id;let o=d.category_id;C.mutate({data:s,token:i.jwt,id:o},{onSuccess:h=>{t.push(e.jsx(n,{type:"success",children:"Sub Category added successfully"}))},onError:h=>{console.log(h),t.push(e.jsx(n,{type:"error",children:"Sub Category Add failed ! Try Again."}))}}),N()};function I(){x(-1)}return e.jsx(e.Fragment,{children:e.jsxs(F,{justifyContent:"center",alignItems:"center",direction:"column",className:"mt-20 2xl:mt-[-3rem] ",style:{height:"100vh"},children:[e.jsxs(a,{className:"text-xl font-mono ",children:[e.jsx(a.Item,{as:g,to:"/dashbord",children:"Home"}),e.jsx(a.Item,{as:g,to:"/dashbord/all-company",children:"category-list"}),e.jsx(a.Item,{className:"cursor-pointer hover:text-blue-500",onClick:()=>{x(-1)},children:"sub-category-list"}),e.jsx(a.Item,{active:!0,className:"text-blue-400",children:"sub-category-creation"})]}),e.jsx(P,{bordered:!0,className:"shadow-sm w-[50rem] border-gray-300",style:{background:"#fff"},header:e.jsx("h3",{className:"font-bold bg-indigo-500 p-8 text-2xl text-white rounded-lg",children:"Add Sub Category Information"}),children:e.jsxs("form",{onSubmit:S(v),children:[e.jsx("div",{className:"flex justify-center items-center mb-10 ",children:e.jsx(M,{fileListVisible:!1,listType:"picture",action:`${R.endpoints.host}/upload`,onUpload:s=>{l(!0),T(s.blobFile,o=>{m(o)})},onSuccess:(s,o)=>{l(!1),t.push(e.jsx(n,{type:"success"})),y(s)},onError:()=>{m(null),l(!1),t.push(e.jsx(n,{type:"error"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[r&&e.jsx(_,{backdrop:!0,center:!0}),c?e.jsx("img",{src:c,width:"100%",height:"150%"}):e.jsx("img",{src:c,alt:"Category Profile"})]})})}),e.jsx("div",{className:"flex  gap-5 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Name"}),e.jsx(b,{...f("subcategory_name"),className:"w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Information"}),e.jsx(b,{...f("description"),as:"textarea",rows:3})]}),e.jsxs("div",{className:"2xl:mb-4 flex gap-2",children:[e.jsx(j,{appearance:"ghost",onClick:()=>I(),children:"Cancel"}),e.jsx(j,{type:"submit",appearance:"primary",className:"bg-blue-600",children:"Add Sub Category"})]})]})})]})})]})})}export{K as default};