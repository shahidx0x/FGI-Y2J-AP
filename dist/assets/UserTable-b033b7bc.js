import{r,u as Z,b as D,j as e,R as ee,A as te}from"./index-7a4b52c0.js";import{I as se,_ as re}from"./index-41dc17ca.js";import{u as ne}from"./find-44380040.js";import{u as le}from"./useQuery-c2d7020f.js";import{a as ie,g as ae}from"./UserServices-9cf198d2.js";import{T as de,D as o,S as oe,a as S}from"./settings-9f7702db.js";import{T as h}from"./Toggle-5e78f7a9.js";import"./utils-0507c293.js";import"./api.config-794b2f63.js";import"./propTypes-30668e49.js";import"./isArrayLikeObject-825ea09d.js";import"./AngleDown-b9e9e21b.js";import"./merge-d457b989.js";import"./createLucideIcon-ccf26206.js";function Ie(){var v;const[c,L]=r.useState(!0),[u,H]=r.useState(!0),[K,ce]=r.useState(!1),[p,f]=r.useState(1),[g,R]=r.useState(!0),[x,I]=r.useState(!0),[A,he]=r.useState(!1),[y,O]=r.useState(!0),C=Z(t=>t.user.user),[M,E]=r.useState(""),[T,b]=r.useState(!1),{Column:B,HeaderCell:k,Cell:l}=S,P=D(),W=t=>e.jsx(l,{...t,style:{padding:4}}),U=t=>e.jsx(k,{...t,style:{padding:4},children:e.jsx("div",{className:"flex justify-center font-bold",children:t.children})}),i=({rowData:t,dataKey:s,...n})=>e.jsx(l,{...n,children:e.jsx("p",{className:"flex justify-center items-center",children:t[s]})}),m=[{key:"profilePicture",label:"Profile Image",cellRenderer:({rowData:t,dataKey:s,...n})=>e.jsx(l,{...n,children:e.jsx("div",{className:"flex justify-center -mt-2",children:e.jsx(te,{className:"",src:(t==null?void 0:t.profilePicture)||"https://avatars.githubusercontent.com/u/12592949",alt:"P"})})}),width:90},{key:"name",label:"Name",cellRenderer:({rowData:t,...s})=>{const n=t!=null&&t.firstName&&(t!=null&&t.lastName)?`${t.firstName} ${t.lastName}`:"";return e.jsx(l,{...s,children:e.jsx("p",{className:"flex justify-center items-center",children:n})})},width:190},{key:"cartNumber",label:"Carts",cellRenderer:t=>e.jsx(i,{...t,dataKey:"cartNumber"}),width:130},{key:"company",label:"Company",cellRenderer:t=>e.jsx(i,{...t,dataKey:"company"}),width:140},{key:"phoneNumber",label:"Contact",cellRenderer:t=>e.jsx(i,{...t,dataKey:"phoneNumber"}),width:150},{key:"email",label:"Email",cellRenderer:t=>e.jsx(i,{...t,dataKey:"email"}),width:200},{key:"subscription",label:"Subscription",cellRenderer:t=>e.jsx(i,{...t,dataKey:"subscription"}),width:150},{key:"location",label:"Location",cellRenderer:t=>e.jsx(i,{...t,dataKey:"location"}),width:150},{key:"role",label:"Role",cellRenderer:t=>e.jsx(i,{...t,dataKey:"role"}),width:150},{key:"status",label:"Status",cellRenderer:({rowData:t,dataKey:s,...n})=>e.jsx(l,{...n,children:e.jsx("p",{className:"flex justify-center items-center",children:t!=null&&t.isAccountActive?e.jsx("p",{className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",children:"Active"}):e.jsx("p",{className:"text-red-600 border border-red-400 px-2 py-2 -mt-1 hover:text-white hover:bg-red-500 rounded-lg",children:"Not Active"})})}),width:100},{key:"actions",label:"Actions",cellRenderer:({rowData:t,...s})=>{const n=()=>{P("edit",{state:{myData:t}})};return e.jsx(l,{...s,children:e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:n,children:"Edit"})})})},width:100}],{data:a,status:V,refetch:j,error:pe}=le(["users",p,C.jwt],ie,{cacheTime:0}),d=ne(ae),_=t=>{const s=t.target.value;E(s),s===""&&(j(),b(!1))},$=()=>{b(!0),re.promise(d.mutateAsync({queryKey:["user_search",M,C.jwt]}),{loading:"Searching...",success:e.jsx("b",{children:"User found!"}),error:e.jsx("b",{children:"User not found in the database!"})})},q=T&&(d!=null&&d.data)?[d==null?void 0:d.data]:a==null?void 0:a.data,[N,F]=r.useState(m.map(t=>t.key)),Q=m.filter(t=>N.some(s=>s===t.key)),z=c?W:l,G=c?U:k,J=()=>{f(t=>{var s;return t<((s=a.meta)==null?void 0:s.total_page)?t+1:t}),j()},X=()=>{f(t=>Math.max(t-1,1)),j()};return e.jsxs("div",{children:[e.jsx(se,{}),e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"flex gap-3 flex-col 2xl:flex-row 2xl:justify-between",children:[e.jsxs("div",{className:"",children:[e.jsx(de,{className:"h-12",data:m,labelKey:"label",valueKey:"key",value:N,onChange:F,cleanable:!1}),e.jsxs(o,{className:"",icon:e.jsx(oe,{}),children:[e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Compact："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:c,onChange:L})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Bordered："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:u,onChange:H})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Show Header：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:g,onChange:R})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Hover：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:y,onChange:O})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Auto Height：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:x,onChange:I})]})})]})]}),e.jsx("div",{children:e.jsx("div",{className:" ",children:e.jsx("div",{className:"flex space-x-4  rounded-md",children:e.jsxs("div",{className:"flex rounded-md overflow-hidden h-12 w-full",children:[e.jsx("input",{onChange:t=>_(t),type:"text",className:"w-[20rem] border-2 text-md p-2 text-xl  rounded-md rounded-r-none"}),e.jsx("button",{onClick:$,className:"bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md",children:"Search"})]})})})})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"mt-5",style:{height:x?"auto":400},children:[e.jsx(S,{loading:V==="loading",height:300,hover:y,fillHeight:A,showHeader:g,autoHeight:x,data:K?[]:q,bordered:u,cellBordered:u,headerHeight:c?40:30,rowHeight:c?56:30,children:Q.map(t=>{const{key:s,label:n,cellRenderer:w,...Y}=t;return r.createElement(B,{...Y,key:s},e.jsx(G,{children:n}),w?ee.createElement(w,{dataKey:s}):e.jsx(z,{dataKey:s}))})}),e.jsx("div",{className:"border-b",children:e.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:e.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("p",{onClick:X,className:"text-sm ml-3 font-medium leading-none ",children:"Previous"})]}),e.jsx("div",{className:"sm:flex hidden",children:e.jsxs("p",{className:"text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2",children:["pages : ",p,"/",(v=a==null?void 0:a.meta)==null?void 0:v.total_page]})}),e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsx("p",{onClick:J,className:"text-sm font-medium leading-none mr-3",children:"Next"}),e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{Ie as default};
