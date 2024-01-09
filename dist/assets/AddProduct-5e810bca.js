import{R as b,t as ke,y as Ee,v as $e,z as Ue,r,K as Y,D as Be,I as Pe,w as ve,E as De,F as me,G as ye,k as ae,H as Me,J as Re,x as n,n as Ae,O as Le,u as we,a as Te,e as J,c as Fe,d as Ve,j as a,B as j,L as X,U as Ce,g as _e,M as ie,h as Oe,i as Z,C as ue,Q as ze,V as He}from"./index-9a22797f.js";import{R as Se,t as We}from"./toolbar.config-25f27fc3.js";import{g as qe}from"./BrandServices-d03dfbb8.js";import{a as Ke}from"./CategoryService-6c7c104a.js";import{g as Ge}from"./SubCategoryServices-20d6ff85.js";var Qe=function(c){return/(^-?|^\+?|^\d?)\d*\.\d+$/.test(c+"")};function Ye(t){return Qe(t)?t.toString().split(".")[1].length:0}function Ie(){for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];var v=c.map(Ye);return Math.max.apply(Math,v)}function Je(t,c){return me(t)?!1:+t>=c}function Xe(t,c){return me(t)?!1:+t<=c}var pe=b.forwardRef(function(t,c){var i=t.as,v=i===void 0?Ae:i,H=t.className,S=t.classPrefix,se=S===void 0?"input-number":S,g=t.disabled,y=t.readOnly,I=t.plaintext,M=t.value,te=t.defaultValue,R=t.size,W=t.prefix,A=t.postfix,q=t.step,x=q===void 0?1:q,P=t.buttonAppearance,k=P===void 0?"subtle":P,h=t.min,w=t.max,le=t.scrollable,L=le===void 0?!0:le,E=t.onChange,$=t.onWheel,xe=ke(t,["as","className","classPrefix","disabled","readOnly","plaintext","value","defaultValue","size","prefix","postfix","step","buttonAppearance","min","max","scrollable","onChange","onWheel"]),U=h??-1/0,B=w??1/0,T=Ee(M,te),m=T[0],K=T[1],p=$e(se),F=p.withClassPrefix,fe=p.merge,V=p.prefix,he=fe(H,F()),G=Ue(xe),D=G[0],re=G[1],O=r.useRef(),u=r.useCallback(function(s,l){s!==m&&(K(s),E==null||E(s,l))},[E,K,m]),f=r.useCallback(function(s){return Number.isNaN(s)?s="":(+s>B&&(s=B),+s<U&&(s=U)),s.toString()},[B,U]),C=r.useCallback(function(s){var l=+(m||0),o=Ie(l,x);u(f((l+x).toFixed(o)),s)},[f,u,x,m]),_=r.useCallback(function(s){var l=+(m||0),o=Ie(l,x);u(f((l-x).toFixed(o)),s)},[f,u,x,m]),ne=g||y||Je(m,B),z=g||y||Xe(m,U),oe=r.useCallback(function(s){switch(s.key){case Y.UP:s.preventDefault(),C(s);break;case Y.DOWN:s.preventDefault(),_(s);break;case Y.HOME:typeof h<"u"&&(s.preventDefault(),u(f(h),s));break;case Y.END:typeof w<"u"&&(s.preventDefault(),u(f(w),s));break}},[C,_,h,w,u,f]),Q=r.useCallback(function(s){if(!L){s.preventDefault();return}if(!g&&!y&&s.target===document.activeElement){s.preventDefault();var l=s.wheelDelta||-s.deltaY||-(s==null?void 0:s.detail);l>0&&_(s),l<0&&C(s)}$==null||$(s)},[g,_,C,$,y,L]),be=r.useCallback(function(s,l){!/^-?(?:\d+)?(\.)?\d*$/.test(s)&&s!==""||u(s,l)},[u]),ce=r.useCallback(function(s){var l,o=Number.parseFloat((l=s.target)===null||l===void 0?void 0:l.value);u(f(o),s)},[f,u]);r.useEffect(function(){var s;return O.current&&(s=Be(O.current,"wheel",Q,{passive:!1})),function(){var l;(l=s)===null||l===void 0||l.off()}},[Q,L]);var de=b.createElement(Pe,ve({},D,{type:"number",autoComplete:"off",step:x,inputRef:O,onChange:be,onBlur:De(ce,D==null?void 0:D.onBlur),value:me(m)?"":""+m,disabled:g,readOnly:y,plaintext:I,ref:I?c:void 0,onKeyDown:oe}));return I?de:b.createElement(v,ve({},re,{ref:c,className:he,disabled:g,size:R}),W&&b.createElement(ye,null,W),de,b.createElement("span",{className:V("btn-group-vertical")},b.createElement(ae,{tabIndex:-1,appearance:k,className:V("touchspin-up"),onClick:C,disabled:ne,"aria-label":"Increment"},b.createElement(Me,null)),b.createElement(ae,{tabIndex:-1,appearance:k,className:V("touchspin-down"),onClick:_,disabled:z,"aria-label":"Decrement"},b.createElement(Re,null))),A&&b.createElement(ye,null,A))});pe.displayName="InputNumber";pe.propTypes={className:n.string,classPrefix:n.string,min:n.number,max:n.number,step:n.number,value:n.oneOfType([n.number,n.string]),defaultValue:n.oneOfType([n.number,n.string]),prefix:n.node,postfix:n.node,disabled:n.bool,readOnly:n.bool,plaintext:n.bool,scrollable:n.bool,size:n.oneOf(["lg","md","sm","xs"]),buttonAppearance:n.oneOf(["default","primary","link","subtle","ghost"]),onWheel:n.func,onChange:n.func};const ee=pe,Ze=Le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function ea(t,c){const i=new FileReader;i.onloadend=()=>{c(i.result)},i.readAsDataURL(t)}function na(){var ge,Ne,je;const t=we(e=>e.user.user),c=Te(),[i,v]=r.useState(!1),[H,S]=r.useState({product_image:""}),[se,g]=r.useState([]),[y,I]=r.useState(null),[M,te]=r.useState("brand"),[R,W]=r.useState(""),[A,q]=r.useState(""),{data:x}=J(["brandsIdName",t.jwt],qe),{data:P}=J(["categoryIdName","",t.jwt,M.split(",")[0],-1],Ke),{data:k}=J(["subCategoryIdName","",t.jwt,R.split(",")[0],-1],Ge),{data:h,status:w,refetch:le}=J(["unit-info",t.jwt],ze,{cacheTime:0}),L=[{label:"Pices",value:"Pices"},...((h==null?void 0:h.data)||[]).map(e=>({label:e.quantity+"/"+e.label,value:e.label+"/"+e.quantity}))],E=(ge=P==null?void 0:P.data)==null?void 0:ge.map(e=>({label:e==null?void 0:e.category_label,value:e._id,slug:e.category_slug})),$=(Ne=k==null?void 0:k.data)==null?void 0:Ne.map(e=>({label:e==null?void 0:e.subcategory_name,value:e._id+","+e.subcategory_slug})),U=[...((je=x==null?void 0:x.data)==null?void 0:je.map(e=>({label:e==null?void 0:e.name,value:e.id,slug:e.slug})))||["loading"]].map(e=>({label:e==null?void 0:e.label,value:(e==null?void 0:e.value)+","+(e==null?void 0:e.slug)})),B=[...E||[{label:"No Category",value:"no-category"}]].map(e=>({label:e==null?void 0:e.label,value:(e==null?void 0:e.value)+","+(e==null?void 0:e.slug)})),[T,m]=r.useState(Se.createEmptyValue()),K=e=>{e&&m(e)},{register:p,control:F,reset:fe,handleSubmit:V,formState:{errors:he}}=Fe({}),G=Ve(He),[D,re]=r.useState("No Brand"),[O,u]=r.useState("No Category"),[f,C]=r.useState("No Sub Category"),_=a.jsx(ie,{showIcon:!0,type:"success",closable:!0,children:"Success : Product Added Successfully."}),ne=a.jsx(ie,{showIcon:!0,type:"error",closable:!0,children:"Error : Product Added Failed !."}),[z,oe]=r.useState("Pices"),Q=e=>{const d=T.toString("html");e.brand_id=M.split(",")[0],e.subcategory_id=A.split(",")[0],e.category_id=R.split(",")[0],e.fet_image=[...se],e.product_image=y,e.product_unit_type=z.split("/")[0],e.product_unit_quantity=Number(z.split("/")[1])||1,e.brand_name=D,e.category_name=O,e.subcategory_name=f,e.product_information=d,e.brand_slug=M.split(",")[1],e.category_slug=R.split(",")[1],e.subcategory_slug=A.split(",")[1],z==="Pices"?e.unit_flag=1:e.unit_flag=0,G.mutate({data:e,token:t.jwt},{onSuccess:N=>{c.push(_,{placement:"bottomStart",duration:2e3}),S(null),I(null),g(null)},onError:N=>{c.push(ne,{placement:"bottomStart",duration:3e3})}}),setTimeout(()=>{window.location.reload()},1500)},[be,ce]=r.useState(""),[de,s]=r.useState(null),l=e=>{/^\d*$/.test(e)?(ce(e),s("")):s("Only numeric values are allowed")},o=we(e=>e.settings);return a.jsx(a.Fragment,{children:a.jsx("section",{className:"p-6 bg-base-100 text-gray-900 h-screen ",children:a.jsxs("form",{onSubmit:V(Q),className:"container flex flex-col mx-auto space-y-12 ",children:[a.jsxs("fieldset",{className:" grid grid-cols-4 gap-6 p-24 border-l-8 border-l-indigo-400 border-b-2 border-t hover:shadow-md rounded-md shadow-sm bg-base-50",children:[a.jsxs("div",{className:"space-y-2 col-span-full lg:col-span-1",children:[a.jsxs(j,{className:"text-sm",children:[a.jsx(j.Item,{as:X,to:"/dashbord",children:"Home"}),a.jsx(j.Item,{as:X,to:"/dashbord/product/list",children:"product-list"}),a.jsx(j.Item,{active:!0,className:"text-blue-400",children:"product-creation"})]}),a.jsx("p",{className:`font-thin text-3xl ${o.theme==="dark"&&"text-white"} `,children:"Product & Feature Images"})]}),a.jsx("div",{className:"flex  flex-col flex-wrap gap-4 col-span-full lg:col-span-3",children:a.jsxs("div",{className:"flex flex-col 2xl:flex-row gap-10",children:[a.jsxs("div",{className:"col-span-full sm:col-span-3",children:[a.jsx("p",{className:`font-thin text-sm underline ${o.theme==="dark"&&"text-white"} `,children:"Upload Product Image"}),a.jsx(Ce,{fileListVisible:!1,listType:"picture",action:`${_e.endpoints.host}/upload`,onUpload:e=>{v(!0),ea(e.blobFile,d=>{S(N=>({...N,product_image:d}))})},onSuccess:(e,d)=>{v(!1),I(e.fileUrl)},onError:()=>{S(null),v(!1),c.push(a.jsx(ie,{type:"error",children:"Upload failed"}))},children:a.jsxs("button",{type:"button",style:{width:150,height:150},children:[i&&a.jsx(Oe,{backdrop:!0,center:!0}),H?a.jsx("img",{src:H.product_image,width:"100%",height:"150%",alt:"product_picture"}):a.jsx("img",{src:"https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",alt:"product_picture"})]})})]}),a.jsxs("div",{className:"col-span-full",children:[a.jsx("p",{className:`font-thin text-sm underline ${o.theme==="dark"&&"text-white"} `,children:"Upload Product Feature Image"}),a.jsx(Ce,{multiple:!0,listType:"picture",action:`${_e.endpoints.host}/upload`,onSuccess:e=>g(d=>[...d,e.fileUrl]),children:a.jsx("button",{type:"button",children:a.jsx(Ze,{})})})]})]})})]}),a.jsxs("fieldset",{className:"  grid grid-cols-4 gap-6 px-16 2xl:px-24 py-5 border-l-8 border-l-indigo-400 border-b-2 border-t hover:shadow-md rounded-md shadow-sm bg-base-50",children:[a.jsxs("div",{className:"space-y-2 col-span-full lg:col-span-1",children:[a.jsxs(j,{className:"text-sm",children:[a.jsx(j.Item,{as:X,to:"/dashbord",children:"Home"}),a.jsx(j.Item,{as:X,to:"/dashbord/product/list",children:"product-list"}),a.jsx(j.Item,{active:!0,className:"text-blue-400",children:"product-creation"})]}),a.jsx("p",{className:`font-thin text-3xl  ${o.theme==="dark"&&"text-white"} `,children:"Product Inormation"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4 col-span-full lg:col-span-3",children:[a.jsxs("div",{className:"col-span-full sm:col-span-3 flex flex-col gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Product Name"}),a.jsx(Pe,{required:!0,className:"w-[12rem] 2xl:w-[14.5rem]",...p("name")}),a.jsx("div",{"data-lastpass-icon-root":"true"})]}),a.jsxs("div",{className:"col-span-full sm:col-span-3 flex flex-col gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Product Unit Type"}),a.jsx(Z,{className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(e,d)=>oe(e),searchable:!1,data:L}),a.jsx("div",{"data-lastpass-icon-root":"true"})]}),a.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-3 gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Select Company"}),a.jsx(ue,{name:"brand_id",...p("brand_id"),control:F,render:({field:e})=>a.jsx(Z,{searchable:!0,...e,size:"md",data:U,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(d,N)=>{e.onChange(d),te(d),re(N.target.innerHTML)},onBlur:()=>e.onBlur()})})]}),a.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-3 gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Select Brand"}),a.jsx(ue,{name:"category_id",...p("category_id"),control:F,render:({field:e})=>a.jsx(Z,{searchable:!0,...e,size:"md",data:B,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(d,N)=>{e.onChange(d),u(N.target.innerHTML),W(d)},onBlur:()=>e.onBlur()})})]}),a.jsxs("div",{className:"col-span-full flex flex-col gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Select Category"}),a.jsx(ue,{name:"sub_category_id",...p("subcategory_id"),control:F,render:({field:e})=>a.jsx(Z,{searchable:!0,...e,size:"md",data:$,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(d,N)=>{C(N.target.innerHTML),e.onChange(d),q(d)},onBlur:()=>e.onBlur()})})]}),a.jsxs("div",{className:"flex flex-col col-span-full sm:col-span-2 gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Price"}),a.jsx(ee,{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 ",required:!0,...p("price"),onChange:l})]}),a.jsxs("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Minimum Purchase"}),a.jsx(ee,{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 ",defaultValue:0,...p("min_purchease"),onChange:l})]}),a.jsxs("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:[a.jsx("label",{htmlFor:"zip",className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Maximum Purchase"}),a.jsx(ee,{className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200 ",defaultValue:0,...p("max_purchease"),onChange:l})]}),a.jsxs("div",{className:"flex flex-col mt-1",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Discount"}),a.jsx(ee,{defaultValue:0,className:"w-[12rem] 2xl:w-[14.5rem] h-[2.24rem] rounded-md border border-gray-200",...p("discount"),onChange:l})]}),a.jsx("div",{className:"col-span-full sm:col-span-2 flex flex-col gap-1",children:a.jsx("div",{className:"flex flex-col gap-5",children:a.jsxs("div",{className:"2xl:w-[100vh]",children:[a.jsx("label",{className:`font-bold text-sm  ${o.theme==="dark"&&"text-white"} `,children:"Product Information"}),a.jsx(Se,{className:"mt-2",toolbarConfig:We,value:T,onChange:K}),a.jsxs("div",{className:"flex gap-2 mt-10",children:[a.jsx(ae,{className:"2xl:w-[10rem]",appearance:"ghost",children:"Cancel"}),a.jsx(ae,{type:"submit","aria-required":!0,appearance:"primary",className:"bg-blue-600 font-bold 2xl:h-[3rem] 2xl:w-[10rem] ",children:"Add Product"})]})]})})})]})]})]})})})}export{na as default};