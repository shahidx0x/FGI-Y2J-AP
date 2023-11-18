import{r as n,u as fe,a as pe,e as Ce,d as ye,c as B,j as e,h as be,i as x,I as ke,B as R,T as ve,D as o,k as Ne,l as h,m as T,R as Se,M as E,_ as we,A as He}from"./index-1d21582a.js";import{g as K,d as Le}from"./CategoryService-c77fd249.js";function Te(){var A,M,_;n.useState(!1);const[d,W]=n.useState(!0),[m,P]=n.useState(!0),[F,Ie]=n.useState(!1),[j,y]=n.useState(1),[b,V]=n.useState(!0),[g,$]=n.useState(!0),[q,Oe]=n.useState(!1),[k,G]=n.useState(!0),f=fe(s=>s.user.user),[Q,z]=n.useState(""),[J,v]=n.useState(!1);n.useState(!1);const N=pe(),S=Ce(),{Column:U,HeaderCell:w,Cell:a}=T,X=s=>e.jsx(a,{...s,style:{padding:4}}),Y=s=>e.jsx(w,{...s,style:{padding:4},children:e.jsx("div",{className:"flex justify-center font-bold",children:s.children})}),{data:l,status:Z,refetch:c}=ye(["category",j,f.jwt],K,{cacheTime:0}),[D,p]=n.useState(!1),[ee,se]=n.useState(null),te=()=>{p(!0)},ne=B(Le),le=()=>{ne.mutate({deleteId:ee,token:f.jwt},{onSuccess:s=>{N.push(e.jsx(E,{type:"success",children:"Category deleted successfully"})),c(),p(!1)},onError:s=>{console.log(s.response),N.push(e.jsx(E,{type:"error",children:"Category delete failed !"}))}}),c()},H=()=>p(!1),L=({content:s,...t})=>e.jsx(a,{...t,children:e.jsx("p",{className:"flex justify-center items-center",children:s})}),C=[{key:"image",label:"Category Image",cellRenderer:({rowData:s,...t})=>e.jsx(a,{...t,children:e.jsx("div",{className:"flex justify-center -mt-2",children:e.jsx(He,{src:(s==null?void 0:s.image)||"https://avatars.githubusercontent.com/u/12592949",alt:"P"})})}),width:100},{key:"category_label",label:"Category Name",cellRenderer:({rowData:s,...t})=>{const i=()=>{S(`/dashbord/subcategory/list/${s==null?void 0:s.category_label}/${s==null?void 0:s._id}`,{state:{rowData:s}})};return e.jsx(a,{...t,children:e.jsx("p",{onClick:i,className:"flex justify-center items-center text-blue-500 font-bold hover:underline hover:cursor-pointer",children:s==null?void 0:s.category_label})})},width:200},{key:"category_label",label:"Sub Category Count",cellRenderer:s=>{var t;return e.jsx(L,{...s,content:((t=s.rowData)==null?void 0:t.subCategories.length)||0,className:"font-bold"})},width:150},{key:"brand_name",label:"Brand Name",cellRenderer:s=>{var t;return e.jsx(L,{...s,content:(t=s.rowData)==null?void 0:t.brand_name})},width:150},{key:"actions",label:"Actions",cellRenderer:({rowData:s,...t})=>{const i=()=>{te(),se(s._id)},u=()=>{S("/dashbord/category/edit",{state:{myData:s}})};return e.jsx(a,{...t,children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{type:"button",className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:u,children:"Edit"}),e.jsx("button",{type:"button",className:"text-red-500 border px-3 py-2 -mt-1 rounded-lg hover:text-white hover:bg-red-500",onClick:i,children:"Delete"})]})})},width:200}],r=B(K),re=s=>{const t=s.target.value;z(t),t===""&&(c(),v(!1))},ae=()=>{v(!0),we.promise(r.mutateAsync({queryKey:["user_search",j,f.jwt,Q]}),{loading:"Searching...",success:e.jsx("b",{children:"Category found!"}),error:e.jsx("b",{children:"Category not found in the database!"})})},oe=J&&((A=r==null?void 0:r.data)!=null&&A.data[0])?[(M=r==null?void 0:r.data)==null?void 0:M.data[0]]:l==null?void 0:l.data,[I,de]=n.useState(C.map(s=>s.key)),ce=C.filter(s=>I.some(t=>t===s.key)),ie=d?X:a,he=d?Y:w,ue=()=>{y(s=>{var t;return s<((t=l==null?void 0:l.meta)==null?void 0:t.total_page)?s+1:s}),c()},xe=()=>{y(s=>Math.max(s-1,1)),c()},[me,O]=n.useState(!1),je=s=>{s.target.value==="confirm"?O(!0):O(!1)};return e.jsxs("div",{children:[e.jsx(be,{}),e.jsxs(x,{open:D,onClose:H,children:[e.jsxs(x.Header,{className:"p-5",children:[e.jsx(x.Title,{className:"font-bold font-mono",children:"Are you sure ?"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"All subcategory and product under this category will be deleted !"}),e.jsx(ke,{className:"border-red-300",onChange:(s,t)=>je(t),placeholder:"Type 'confirm' to delete"})]})]}),e.jsxs(x.Footer,{children:[e.jsx(R,{disabled:!me,onClick:le,className:"bg-blue-500 w-20",appearance:"primary",children:"Confirm"}),e.jsx(R,{className:" bg-red-500 text-white",onClick:H,children:"Cancel"})]})]}),e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-3 2xl:justify-between",children:[e.jsxs("div",{className:"",children:[e.jsx(ve,{className:"h-12",data:C,labelKey:"label",valueKey:"key",value:I,onChange:de,cleanable:!1}),e.jsxs(o,{className:"",icon:e.jsx(Ne,{}),children:[e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Compact："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:d,onChange:W})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Bordered："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:m,onChange:P})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Show Header：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:b,onChange:V})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Hover：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:k,onChange:G})]})}),e.jsx(o.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Auto Height：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:g,onChange:$})]})})]})]}),e.jsx("div",{children:e.jsx("div",{className:" ",children:e.jsx("div",{className:"flex space-x-4 rounded-md",children:e.jsxs("div",{className:"flex rounded-md overflow-hidden h-12 w-full",children:[e.jsx("input",{onChange:s=>re(s),type:"text",className:"w-[20rem] border-2 p-3 text-lg  rounded-md rounded-r-none"}),e.jsx("button",{onClick:ae,className:"bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md",children:"Search"})]})})})})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"mt-5 ml-4",style:{height:g?"auto":400},children:[e.jsx(T,{loading:Z==="loading",height:300,hover:k,fillHeight:q,showHeader:b,autoHeight:g,data:F?[]:oe,bordered:m,cellBordered:m,headerHeight:d?40:30,rowHeight:d?56:30,children:ce.map(s=>{const{key:t,label:i,cellRenderer:u,...ge}=s;return n.createElement(U,{...ge,key:t},e.jsx(he,{children:i}),u?Se.createElement(u,{dataKey:t}):e.jsx(ie,{dataKey:t}))})}),e.jsx("div",{className:"border-b",children:e.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:e.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("p",{onClick:xe,className:"text-sm ml-3 font-medium leading-none ",children:"Previous"})]}),e.jsx("div",{className:"sm:flex hidden",children:e.jsxs("p",{className:"text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2",children:["pages : ",j,"/",(_=l==null?void 0:l.meta)==null?void 0:_.total_page]})}),e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsx("p",{onClick:ue,className:"text-sm font-medium leading-none mr-3",children:"Next"}),e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{Te as default};
