import{u as w,a as U,r as u,f as k,a9 as A,c as F,d as R,j as e,S as _,L as g,g as L,M as n,h as B,I as b,B as j}from"./index-c0d1311f.js";import{C as E}from"./SubCategoryServices-0529f563.js";import{B as a}from"./Breadcrumb-dfe0da73.js";import{P}from"./Panel-a2d414b4.js";import{U as M}from"./Uploader-000e8d2c.js";function T(l,t){const r=new FileReader;r.onloadend=()=>{t(r.result)},r.readAsDataURL(l)}function G(){const l=w(s=>s.user.user),t=U(),[r,i]=u.useState(!1),[c,m]=u.useState(null),[x,y]=u.useState({fileUrl:""}),h=k(),d=A(),{register:p,handleSubmit:S,reset:N,formState:{errors:D}}=F(),C=R(E),v=s=>{x.fileUrl!==""?s.image=x.fileUrl:s.image="",s.brand_id=d.brand_id,s.category_id=d.category_id;let o=d.category_id;C.mutate({data:s,token:l.jwt,id:o},{onSuccess:f=>{t.push(e.jsx(n,{type:"success",children:"Sub Category added successfully"}))},onError:f=>{console.log(f),t.push(e.jsx(n,{type:"error",children:"Sub Category Add failed ! Try Again."}))}}),N()};function I(){h(-1)}return e.jsx(e.Fragment,{children:e.jsxs(_,{justifyContent:"center",alignItems:"center",direction:"column",className:"mt-20 2xl:mt-[-3rem] ",style:{height:"100vh"},children:[e.jsxs(a,{className:"text-xl font-mono ",children:[e.jsx(a.Item,{as:g,to:"/dashbord",children:"Home"}),e.jsx(a.Item,{as:g,to:"/dashbord/all-company",children:"category-list"}),e.jsx(a.Item,{className:"cursor-pointer hover:text-blue-500",onClick:()=>{h(-1)},children:"sub-category-list"}),e.jsx(a.Item,{active:!0,className:"text-blue-400",children:"sub-category-creation"})]}),e.jsx(P,{bordered:!0,className:"shadow-sm w-[50rem] border-gray-300",style:{background:"#fff"},header:e.jsx("h3",{className:"font-bold bg-indigo-500 p-8 text-2xl text-white rounded-lg",children:"Add Sub Category Information"}),children:e.jsxs("form",{onSubmit:S(v),children:[e.jsx("div",{className:"flex justify-center items-center mb-10 ",children:e.jsx(M,{fileListVisible:!1,listType:"picture",action:`${L.endpoints.host}/upload`,onUpload:s=>{i(!0),T(s.blobFile,o=>{m(o)})},onSuccess:(s,o)=>{i(!1),t.push(e.jsx(n,{type:"success"})),y(s)},onError:()=>{m(null),i(!1),t.push(e.jsx(n,{type:"error"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[r&&e.jsx(B,{backdrop:!0,center:!0}),c?e.jsx("img",{src:c,width:"100%",height:"150%"}):e.jsx("img",{src:c,alt:"Category Profile"})]})})}),e.jsx("div",{className:"flex  gap-5 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Name"}),e.jsx(b,{...p("subcategory_name"),className:"w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sub Category Information"}),e.jsx(b,{...p("description"),as:"textarea",rows:3})]}),e.jsxs("div",{className:"2xl:mb-4 flex gap-2",children:[e.jsx(j,{appearance:"ghost",onClick:()=>I(),children:"Cancel"}),e.jsx(j,{type:"submit",appearance:"primary",className:"bg-blue-600",children:"Add Sub Category"})]})]})})]})})]})})}export{G as default};