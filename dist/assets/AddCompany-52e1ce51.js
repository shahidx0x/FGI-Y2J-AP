import{u as L,a as R,r,b as A,c as F,e as B,j as e,L as h,f as T,M as n,g as V,I as k,B as b}from"./index-fe852a89.js";import{u as M}from"./index.esm-612242e9.js";import{R as j,t as P}from"./toolbar.config-4db7dd5b.js";import{c as _}from"./BrandServices-8f678188.js";import{B as c}from"./Breadcrumb-0bbc4126.js";import{U as H}from"./Uploader-3f996cb0.js";function $(i,a){const l=new FileReader;l.onloadend=()=>{a(l.result)},l.readAsDataURL(i)}function Y(){var f;const i=L(s=>s.user.user),a=R(),[l,d]=r.useState(!1),[p,m]=r.useState(null),[u,x]=r.useState({fileUrl:""}),o=(f=A().state)==null?void 0:f.myData,{register:g,control:z,handleSubmit:y,reset:N,formState:{errors:G}}=M(),v=F(_),C=s=>{u.fileUrl!==""?s.brand_image=u.fileUrl:s.brand_image="",v.mutate({data:s,token:i.jwt},{onSuccess:t=>{a.push(e.jsx(n,{type:"success",children:"Company added successfully"})),N(),m(null),x(null)},onError:t=>{a.push(e.jsx(n,{type:"error",children:"Company Add failed ! Try Again."}))}})},S=B();function U(){S("/dashbord/all-company")}const[w,I]=r.useState(j.createEmptyValue()),E=s=>{s&&I(s)};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-6 bg-base-100 text-gray-900 h-screen",children:e.jsx("form",{onSubmit:y(C),className:"container flex flex-col mx-auto space-y-12 ",children:e.jsxs("fieldset",{className:" grid grid-cols-4 gap-6 p-24 border-l-8 border-l-indigo-400 border-b-2 border-t hover:shadow-md rounded-md shadow-sm bg-base-50",children:[e.jsxs("div",{className:"space-y-2 col-span-full lg:col-span-1",children:[e.jsxs(c,{className:"text-sm  font-mono",children:[e.jsx(c.Item,{as:h,to:"/dashbord",children:"Home"}),e.jsx(c.Item,{as:h,to:"/dashbord/all-company",children:"company-list"}),e.jsx(c.Item,{active:!0,className:"text-blue-400",children:"company-creation"})]}),e.jsx("p",{className:"font-thin text-3xl",children:"Add Company"})]}),e.jsx("div",{className:"flex  flex-col flex-wrap gap-4 col-span-full lg:col-span-3",children:e.jsx("div",{className:"flex gap-10",children:e.jsxs("div",{className:"col-span-full sm:col-span-3",children:[e.jsx("p",{className:"font-bold font-mono text-sm underline",children:"Upload Company Logo"}),e.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-10",children:[e.jsx(H,{className:"mt-3",fileListVisible:!1,listType:"picture",action:`${T.endpoints.host}/upload`,onUpload:s=>{d(!0),$(s.blobFile,t=>{m(t)})},onSuccess:(s,t)=>{d(!1),a.push(e.jsx(n,{type:"success"})),x(s)},onError:()=>{m(null),d(!1),a.push(e.jsx(n,{type:"error"}))},children:e.jsxs("button",{type:"button",style:{width:150,height:150},children:[l&&e.jsx(V,{backdrop:!0,center:!0}),p?e.jsx("img",{src:p,width:"100%",height:"150%"}):e.jsx("img",{src:o==null?void 0:o.profilePicture,alt:"Company Profile"})]})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Company Name"}),e.jsx(k,{...g("brand_label"),defaultValue:o==null?void 0:o.firstName,className:"2xl:w-96"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Product Information"}),e.jsx(j,{className:"mt-2",toolbarConfig:P,value:w,onChange:E})]}),e.jsxs("div",{className:" flex gap-2",children:[e.jsx(b,{appearance:"ghost",className:"font-bold",onClick:()=>U(),children:"Cancel"}),e.jsx(b,{type:"submit",appearance:"primary",className:"bg-blue-600 font-bold",children:"Add Company"})]})]})]}),e.jsx("div",{"data-lastpass-icon-root":"true"})]})})})]})})})})}export{Y as default};