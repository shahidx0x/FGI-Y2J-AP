import{r as l,u as I,a as ie,f as ue,e as he,d as M,j as e,l as xe,m as u,I as _,k as A,T as me,n as R,o as ge,p as B,R as je,M as E,_ as pe,A as fe}from"./index-c17470c6.js";import{g as K,d as ye}from"./CategoryService-1f9c498a.js";function Ie(){var w,L,H;l.useState(!1);const[j,Ce]=l.useState(!0);l.useState(!0);const[T,be]=l.useState(!1),[h,p]=l.useState(1);l.useState(!0),l.useState(!0);const[P,ke]=l.useState(!1);l.useState(!0);const x=I(t=>t.user.user),[W,$]=l.useState(""),[O,f]=l.useState(!1);l.useState(!1);const y=ie(),C=ue(),{Column:q,HeaderCell:b,Cell:o}=B,F=t=>e.jsx(o,{...t,style:{padding:4}}),G=t=>e.jsx(b,{...t,style:{padding:4},children:e.jsx("div",{className:"flex justify-center font-bold",children:t.children})}),{data:r,status:V,refetch:d}=he(["category",h,x.jwt],K,{cacheTime:0}),[Q,m]=l.useState(!1),[z,J]=l.useState(null),U=()=>{m(!0)},X=M(ye),Y=()=>{X.mutate({deleteId:z,token:x.jwt},{onSuccess:t=>{y.push(e.jsx(E,{type:"success",children:"Category deleted successfully"})),d(),m(!1)},onError:t=>{console.log(t.response),y.push(e.jsx(E,{type:"error",children:"Category delete failed !"}))}}),d()},k=()=>m(!1),v=({content:t,...s})=>e.jsx(o,{...s,children:e.jsx("p",{className:"flex justify-center items-center",children:t})}),g=[{key:"image",label:"Brand Image",cellRenderer:({rowData:t,...s})=>e.jsx(o,{...s,children:e.jsx("div",{className:"flex justify-center -mt-2",children:e.jsx(fe,{src:(t==null?void 0:t.image)||"https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png",alt:"P"})})}),width:100},{key:"category_label",label:"Brand Name",cellRenderer:({rowData:t,...s})=>{const c=()=>{C(`/dashbord/subcategory/list/${t==null?void 0:t.category_label}/${t==null?void 0:t._id}`,{state:{rowData:t}})};return e.jsx(o,{...s,children:e.jsx("p",{onClick:c,className:"flex justify-center items-center text-blue-500 underline cursor-pointer font-bold hover:underline hover:cursor-pointer",children:t==null?void 0:t.category_label})})},width:200},{key:"product_count",label:"Product Count",cellRenderer:({content:t,rowData:s,...c})=>e.jsx(o,{...c,children:e.jsx("p",{className:"flex justify-center items-center font-bold",children:s.productCount})}),width:200},{key:"category_label",label:"Category Count",cellRenderer:t=>{var s;return e.jsx(v,{...t,content:((s=t.rowData)==null?void 0:s.subCategories.length)||0,className:"font-bold"})},width:150},{key:"brand_name",label:"Company Name",cellRenderer:t=>{var s;return e.jsx(v,{...t,content:(s=t.rowData)==null?void 0:s.brand_name})},width:250},{key:"actions",label:"Actions",cellRenderer:({rowData:t,...s})=>{const c=()=>{U(),J(t._id)},i=()=>{C("/dashbord/category/edit",{state:{myData:t}})};return e.jsx(o,{...s,children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{type:"button",className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:i,children:"Edit"}),e.jsx("button",{type:"button",className:"text-red-500 border px-3 py-2 -mt-1 rounded-lg hover:text-white hover:bg-red-500",onClick:c,children:"Delete"})]})})},width:200}],a=M(K),Z=t=>{$(t),t===""&&(d(),f(!1))},D=()=>{f(!0),pe.promise(a.mutateAsync({queryKey:["user_search",h,x.jwt,W]}),{loading:"Searching...",success:e.jsx("b",{children:"Category found!"}),error:e.jsx("b",{children:"Category not found in the database!"})})},ee=O&&((w=a==null?void 0:a.data)!=null&&w.data[0])?[(L=a==null?void 0:a.data)==null?void 0:L.data[0]]:r==null?void 0:r.data,[N,te]=l.useState(g.map(t=>t.key)),se=g.filter(t=>N.some(s=>s===t.key)),le=j?F:o,ne=j?G:b,re=()=>{p(t=>{var s;return t<((s=r==null?void 0:r.meta)==null?void 0:s.total_pages)?t+1:t}),d()},oe=()=>{p(t=>Math.max(t-1,1)),d()},[ae,S]=l.useState(!1),ce=t=>{t.target.value==="confirm"?S(!0):S(!1)},n=I(t=>t.settings);return e.jsxs("div",{children:[e.jsx(xe,{}),e.jsxs(u,{open:Q,onClose:k,children:[e.jsxs(u.Header,{className:"p-5",children:[e.jsx(u.Title,{className:"font-bold font-mono",children:"Are you sure ?"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"All subcategory and product under this category will be deleted !"}),e.jsx(_,{className:"border-red-300",onChange:(t,s)=>ce(s),placeholder:"Type 'confirm' to delete"})]})]}),e.jsxs(u.Footer,{children:[e.jsx(A,{disabled:!ae,onClick:Y,className:"bg-blue-500 w-20",appearance:"primary",children:"Confirm"}),e.jsx(A,{className:" bg-red-500 text-white",onClick:k,children:"Cancel"})]})]}),e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-3 2xl:justify-between",children:[e.jsx("div",{className:"",children:e.jsx(me,{className:"h-12",data:g,labelKey:"label",valueKey:"key",value:N,onChange:te,cleanable:!1})}),e.jsx("div",{children:e.jsx("div",{className:" ",children:e.jsxs(R,{children:[e.jsx(_,{placeholder:"Search by Category Name",onChange:t=>Z(t)}),e.jsx(R.Button,{onClick:()=>D(),tabIndex:-1,children:e.jsx(ge,{className:"text-indigo-500 font-bold"})})]})})})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"mt-5 ml-4",style:{height:n.autoHeight?"auto":400},children:[e.jsx(B,{loading:V==="loading",height:300,hover:n.hover,fillHeight:P,showHeader:n.header,autoHeight:n.autoHeight,data:T?[]:ee,bordered:n.bordered,cellBordered:n.bordered,headerHeight:n.compact?40:30,rowHeight:n.compact?56:30,children:se.map(t=>{const{key:s,label:c,cellRenderer:i,...de}=t;return l.createElement(q,{...de,key:s},e.jsx(ne,{children:c}),i?je.createElement(i,{dataKey:s}):e.jsx(le,{dataKey:s}))})}),e.jsx("div",{className:"border-b",children:e.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:e.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("p",{onClick:oe,className:`text-sm ml-3 font-medium leading-none ${n.theme==="dark"&&"text-white"} `,children:"Previous"})]}),e.jsx("div",{className:"sm:flex hidden",children:e.jsxs("p",{className:`text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${n.theme==="dark"&&"text-white"}`,children:["pages : ",h,"/",(H=r==null?void 0:r.meta)==null?void 0:H.total_pages]})}),e.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[e.jsx("p",{onClick:re,className:`text-sm font-medium leading-none mr-3 ${n.theme==="dark"&&"text-white"}`,children:"Next"}),e.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{Ie as default};