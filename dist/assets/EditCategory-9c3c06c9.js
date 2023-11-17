import{u as R,r as n,a as V,b as M,c as P,d as A,j as e,S as H,L as y,e as z,M as c,f as Q,I as f,B as N}from"./index-5ccc964f.js";import{u as $,C as q}from"./index.esm-a48af042.js";import{g as G}from"./BrandServices-3275ca36.js";import{u as J}from"./CategoryService-013ec7ca.js";import{u as K}from"./useToaster-f36faecc.js";import{B as u}from"./Breadcrumb-5b051a16.js";import{P as O}from"./Panel-7e2340e0.js";import{U as W}from"./Uploader-a8f11f84.js";import{S as X}from"./SelectPicker-962a459d.js";function Y(l,r){const o=new FileReader;o.onloadend=()=>{r(o.result)},o.readAsDataURL(l)}function ue(){var b,j;const l=R(s=>s.user.user),r=K(),[o,p]=n.useState(!1),[g,x]=n.useState(null),[h,S]=n.useState({fileUrl:""}),a=(b=V().state)==null?void 0:b.myData,{register:d,control:C,handleSubmit:_,reset:v,formState:{errors:D}}=$(),I=M(J),[w,U]=n.useState(null),[B,k]=n.useState(null),L=s=>{h.fileUrl!==""?s.image=h.fileUrl:s.image="",s.brand_id=w,s.brand_name=B,s.id=a==null?void 0:a._id;let t=a==null?void 0:a._id;I.mutate({data:s,token:l.jwt,id:t},{onSuccess:i=>{r.push(e.jsx(c,{type:"success",children:"Category updated successfully"}))},onError:i=>{console.log(i),r.push(e.jsx(c,{type:"error",children:"Category update failed ! Try Again."}))}}),v()},{data:m,status:ee}=P(["brandsIdName",l.jwt],G),E=[...((j=m==null?void 0:m.data)==null?void 0:j.map(s=>({label:s==null?void 0:s.name,value:s.id})))||["loading"]].map(s=>({label:s==null?void 0:s.label,value:s==null?void 0:s.value})),F=A();function T(){F("/dashbord/category/all")}return e.jsx(e.Fragment,{children:e.jsxs(H,{justifyContent:"center",alignItems:"center",direction:"column",className:"-mt-10",style:{height:"100vh"},children:[e.jsxs(u,{className:"text-xl font-mono ",children:[e.jsx(u.Item,{as:y,to:"/dashbord",children:"Home"}),e.jsx(u.Item,{as:y,to:"/dashbord/category/all",children:"category-list"}),e.jsx(u.Item,{active:!0,className:"text-blue-400",children:"category-update"})]}),e.jsx(O,{bordered:!0,className:"shadow-md w-[40rem] border-gray-400",style:{background:"#fff"},header:e.jsx("h3",{className:"font-bold bg-indigo-500 text-white p-3 rounded-md text-2xl ",children:"Edit Category Information"}),children:e.jsxs("form",{onSubmit:_(L),children:[e.jsx("div",{className:"flex justify-center items-center mb-8",children:e.jsx(W,{fileListVisible:!1,listType:"picture",action:`${z.endpoints.host}/upload`,onUpload:s=>{p(!0),Y(s.blobFile,t=>{x(t)})},onSuccess:(s,t)=>{p(!1),r.push(e.jsx(c,{type:"success"})),S(s)},onError:()=>{x(null),p(!1),r.push(e.jsx(c,{type:"error"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[o&&e.jsx(Q,{backdrop:!0,center:!0}),g?e.jsx("img",{src:g,width:"100%",height:"150%"}):e.jsx("img",{src:a==null?void 0:a.image,alt:"Category Profile"})]})})}),e.jsx("div",{className:"flex gap-5 justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Select Company"}),e.jsx(q,{name:"brand_id",...d("brand_id"),control:C,defaultValue:a==null?void 0:a.brand_name,render:({field:s})=>e.jsx(X,{searchable:!0,...s,size:"md",data:E,className:"w-96",onChange:(t,i)=>{s.onChange(t),k(i.target.innerHTML),U(t)},onBlur:()=>s.onBlur()})})]})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Category Name"}),e.jsx(f,{...d("category_label"),defaultValue:a==null?void 0:a.category_label,className:"w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Category Type"}),e.jsx(f,{...d("category_type"),defaultValue:a==null?void 0:a.category_type,className:"w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Category Information"}),e.jsx(f,{defaultValue:a==null?void 0:a.category_description,...d("category_description"),as:"textarea",rows:3})]}),e.jsxs("div",{className:" flex gap-2 mb-9",children:[e.jsx(N,{appearance:"ghost",onClick:()=>T(),children:"Cancel"}),e.jsx(N,{type:"submit",appearance:"primary",className:"bg-blue-600",children:"Update Category"})]})]})})]})})]})})}export{ue as default};