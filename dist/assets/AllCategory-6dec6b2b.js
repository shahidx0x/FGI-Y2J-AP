import{r as n,u as B,a as be,f as ke,e as Ne,d as T,j as e,k as ve,l as x,I as E,i as K,T as Se,D as c,m as we,n as h,o as P,p as He,q as W,R as Ie,M as $,_ as Le,A as Oe}from"./index-7665bfbb.js";import{g as q,d as Ae}from"./CategoryService-28768536.js";function We(){var M,_,R;n.useState(!1);const[d,F]=n.useState(!0),[m,G]=n.useState(!0),[V,Me]=n.useState(!1),[j,b]=n.useState(1),[k,Q]=n.useState(!0),[g,z]=n.useState(!0),[J,_e]=n.useState(!1),[N,U]=n.useState(!0),f=B(t=>t.user.user),[X,Y]=n.useState(""),[Z,v]=n.useState(!1);n.useState(!1);const S=be(),w=ke(),{Column:D,HeaderCell:H,Cell:r}=W,ee=t=>e.jsx(r,{...t,style:{padding:4}}),te=t=>e.jsx(H,{...t,style:{padding:4},children:e.jsx("div",{className:"flex justify-center font-bold",children:t.children})}),{data:l,status:se,refetch:i}=Ne(["category",j,f.jwt],q,{cacheTime:0}),[ne,p]=n.useState(!1),[le,re]=n.useState(null),ae=()=>{p(!0)},oe=T(Ae),ce=()=>{oe.mutate({deleteId:le,token:f.jwt},{onSuccess:t=>{S.push(e.jsx($,{type:"success",children:"Category deleted successfully"})),i(),p(!1)},onError:t=>{console.log(t.response),S.push(e.jsx($,{type:"error",children:"Category delete failed !"}))}}),i()},I=()=>p(!1),L=({content:t,...s})=>e.jsx(r,{...s,children:e.jsx("p",{className:"flex justify-center items-center",children:t})}),C=[{key:"image",label:"Category Image",cellRenderer:({rowData:t,...s})=>e.jsx(r,{...s,children:e.jsx("div",{className:"flex justify-center -mt-2",children:e.jsx(Oe,{src:(t==null?void 0:t.image)||"https://avatars.githubusercontent.com/u/12592949",alt:"P"})})}),width:100},{key:"category_label",label:"Category Name",cellRenderer:({rowData:t,...s})=>{const o=()=>{w(`/dashbord/subcategory/list/${t==null?void 0:t.category_label}/${t==null?void 0:t._id}`,{state:{rowData:t}})};return e.jsx(r,{...s,children:e.jsx("p",{onClick:o,className:"flex justify-center items-center text-blue-500 underline cursor-pointer font-bold hover:underline hover:cursor-pointer",children:t==null?void 0:t.category_label})})},width:200},{key:"product_count",label:"Product Count",cellRenderer:({content:t,rowData:s,...o})=>e.jsx(r,{...o,children:e.jsx("p",{className:"flex justify-center items-center font-bold",children:s.productCount})}),width:200},{key:"category_label",label:"Sub Category Count",cellRenderer:t=>{var s;return e.jsx(L,{...t,content:((s=t.rowData)==null?void 0:s.subCategories.length)||0,className:"font-bold"})},width:150},{key:"brand_name",label:"Brand Name",cellRenderer:t=>{var s;return e.jsx(L,{...t,content:(s=t.rowData)==null?void 0:s.brand_name})},width:250},{key:"actions",label:"Actions",cellRenderer:({rowData:t,...s})=>{const o=()=>{ae(),re(t._id)},u=()=>{w("/dashbord/category/edit",{state:{myData:t}})};return e.jsx(r,{...s,children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{type:"button",className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:u,children:"Edit"}),e.jsx("button",{type:"button",className:"text-red-500 border px-3 py-2 -mt-1 rounded-lg hover:text-white hover:bg-red-500",onClick:o,children:"Delete"})]})})},width:200}],a=T(q),de=t=>{Y(t),t===""&&(i(),v(!1))},ie=()=>{v(!0),Le.promise(a.mutateAsync({queryKey:["user_search",j,f.jwt,X]}),{loading:"Searching...",success:e.jsx("b",{children:"Category found!"}),error:e.jsx("b",{children:"Category not found in the database!"})})},he=Z&&((M=a==null?void 0:a.data)!=null&&M.data[0])?[(_=a==null?void 0:a.data)==null?void 0:_.data[0]]:l==null?void 0:l.data,[O,ue]=n.useState(C.map(t=>t.key)),xe=C.filter(t=>O.some(s=>s===t.key)),me=d?ee:r,je=d?te:H,ge=()=>{b(t=>{var s;return t<((s=l==null?void 0:l.meta)==null?void 0:s.total_pages)?t+1:t}),i()},fe=()=>{b(t=>Math.max(t-1,1)),i()},[pe,A]=n.useState(!1),Ce=t=>{t.target.value==="confirm"?A(!0):A(!1)},y=B(t=>t.settings);return e.jsxs("div",{children:[e.jsx(ve,{}),e.jsxs(x,{open:ne,onClose:I,children:[e.jsxs(x.Header,{className:"p-5",children:[e.jsx(x.Title,{className:"font-bold font-mono",children:"Are you sure ?"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"All subcategory and product under this category will be deleted !"}),e.jsx(E,{className:"border-red-300",onChange:(t,s)=>Ce(s),placeholder:"Type 'confirm' to delete"})]})]}),e.jsxs(x.Footer,{children:[e.jsx(K,{disabled:!pe,onClick:ce,className:"bg-blue-500 w-20",appearance:"primary",children:"Confirm"}),e.jsx(K,{className:" bg-red-500 text-white",onClick:I,children:"Cancel"})]})]}),e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-3 2xl:justify-between",children:[e.jsxs("div",{className:"",children:[e.jsx(Se,{className:"h-12",data:C,labelKey:"label",valueKey:"key",value:O,onChange:ue,cleanable:!1}),e.jsxs(c,{className:"",icon:e.jsx(we,{}),children:[e.jsx(c.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Compact："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:d,onChange:F})]})}),e.jsx(c.Item,{children:e.jsxs("span",{className:"flex justify-between",children:[e.jsx("p",{children:"Bordered："}),e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:m,onChange:G})]})}),e.jsx(c.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Show Header：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:k,onChange:Q})]})}),e.jsx(c.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Hover：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:N,onChange:U})]})}),e.jsx(c.Item,{children:e.jsxs("span",{className:"flex justify-between",children:["Auto Height：",e.jsx(h,{checkedChildren:"On",unCheckedChildren:"Off",checked:g,onChange:z})]})})]})]}),e.jsx("div",{children:e.jsx("div",{className:" ",children:e.jsxs(P,{children:[e.jsx(E,{placeholder:"Search by Category Name",onChange:t=>de(t)}),e.jsx(P.Button,{onClick:()=>ie(),tabIndex:-1,children:e.jsx(He,{className:"text-indigo-500 font-bold"})})]})})})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"mt-5 ml-4",style:{height:g?"auto":400},children:[e.jsx(W,{loading:se==="loading",height:300,hover:N,fillHeight:J,showHeader:k,autoHeight:g,data:V?[]:he,bordered:m,cellBordered:m,headerHeight:d?40:30,rowHeight:d?56:30,children:xe.map(t=>{const{key:s,label:o,cellRenderer:u,...ye}=t;return n.createElement(D,{...ye,key:s},e.jsx(je,{children:o}),u?Ie.createElement(u,{dataKey:s}):e.jsx(me,{dataKey:s}))})}),e.jsx("div",{className:"border-b",children:e.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:e.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("p",{onClick:fe,className:`text-sm ml-3 font-medium leading-none ${y.theme==="dark"&&"text-white"} `,children:"Previous"})]}),e.jsx("div",{className:"sm:flex hidden",children:e.jsxs("p",{className:`text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${y.theme==="dark"&&"text-white"}`,children:["pages : ",j,"/",(R=l==null?void 0:l.meta)==null?void 0:R.total_pages]})}),e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsx("p",{onClick:ge,className:`text-sm font-medium leading-none mr-3 ${y.theme==="dark"&&"text-white"}`,children:"Next"}),e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{We as default};
