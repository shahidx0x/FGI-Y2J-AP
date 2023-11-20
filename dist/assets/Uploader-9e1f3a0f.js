import{r as d,aa as Be,ab as ze,x as Ve,R as c,q as Fe,s as Ee,t as T,v as t,aJ as na,aK as ia,B as oa,aq as ua,aL as da,aM as sa,aN as He,aO as ca}from"./index-c795e9e3.js";function fa(e){var a=e.responseText||e.response;if(!a)return a;try{return JSON.parse(a)}catch{return a}}function va(e){var a=e.name,l=e.timeout,i=e.headers,s=i===void 0?{}:i,h=e.data,E=h===void 0?{}:h,o=e.method,R=o===void 0?"POST":o,r=e.onError,u=e.onSuccess,n=e.onProgress,P=e.file,m=e.url,w=e.withCredentials,C=e.disableMultipart,f=new XMLHttpRequest,_;if(f.open(R,m,!0),C)_=P;else{_=new FormData,_.append(a,P,P.name);for(var L in E)_.append(L,E[L])}return Object.keys(s).forEach(function(b){s[b]!==null&&f.setRequestHeader(b,s[b])}),s["X-Requested-With"]!==null&&f.setRequestHeader("X-Requested-With","XMLHttpRequest"),l&&(f.timeout=l,f.ontimeout=function(b){r==null||r({type:"timeout"},b,f)}),w&&"withCredentials"in f&&(f.withCredentials=!0),f.onload=function(b){var N=fa(f);if(f.status<200||f.status>=300){r==null||r({type:"server_error",response:N},b,f);return}u==null||u(N,b,f)},f.upload&&(f.upload.onprogress=function(b){var N=0;b.lengthComputable&&(N=b.loaded/b.total*100),n==null||n(N,b,f)}),f.onerror=function(b){r==null||r({type:"xhr_error"},b,f)},f.send(_),{xhr:f,data:_}}var ma=["image/apng","image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"];function pa(e){return ma.includes(e==null?void 0:e.type)}const ga=function(e,a){if(!pa(e))return a(null);var l=new FileReader;l.onloadend=function(){a(l.result)},l.readAsDataURL(e)};var Qe={},_e={exports:{}},we={},Ke;function ha(){return Ke||(Ke=1,function(e){function a(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(n){return typeof n}:a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(d);function i(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return i=function(){return r},r}function s(r){if(r&&r.__esModule)return r;if(r===null||a(r)!=="object"&&typeof r!="function")return{default:r};var u=i();if(u&&u.has(r))return u.get(r);var n={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(Object.prototype.hasOwnProperty.call(r,m)){var w=P?Object.getOwnPropertyDescriptor(r,m):null;w&&(w.get||w.set)?Object.defineProperty(n,m,w):n[m]=r[m]}return n.default=r,u&&u.set(r,n),n}function h(){return h=Object.assign||function(r){for(var u=1;u<arguments.length;u++){var n=arguments[u];for(var P in n)Object.prototype.hasOwnProperty.call(n,P)&&(r[P]=n[P])}return r},h.apply(this,arguments)}function E(r,u){return l.createElement("svg",h({width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",ref:u},r),l.createElement("path",{d:"M7.875 2.625a1.75 1.75 0 00-3.5 0V10.5a2.625 2.625 0 105.25 0V4.375h.875V10.5a3.5 3.5 0 11-7 0V2.625a2.625 2.625 0 115.25 0v7a1.75 1.75 0 01-3.5 0v-5.25h.875v5.25a.875.875 0 001.75 0v-7z"}))}var o=l.forwardRef(E),R=o;e.default=R}(we)),we}(function(e,a){var l=ze;a.__esModule=!0,a.default=void 0;var i=l(Be()),s=l(ha()),h=(0,i.default)({as:s.default,ariaLabel:"attachment",category:"legacy",displayName:"Attachment"}),E=h;a.default=E,e.exports=a.default})(_e,_e.exports);var ba=_e.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}});var a=l(ba);function l(i){return i&&i.__esModule?i:{default:i}}})(Qe);const Ae=Ve(Qe);var Xe={},xe={exports:{}},Ce={},We;function ya(){return We||(We=1,function(e){function a(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(n){return typeof n}:a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(d);function i(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return i=function(){return r},r}function s(r){if(r&&r.__esModule)return r;if(r===null||a(r)!=="object"&&typeof r!="function")return{default:r};var u=i();if(u&&u.has(r))return u.get(r);var n={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(Object.prototype.hasOwnProperty.call(r,m)){var w=P?Object.getOwnPropertyDescriptor(r,m):null;w&&(w.get||w.set)?Object.defineProperty(n,m,w):n[m]=r[m]}return n.default=r,u&&u.set(r,n),n}function h(){return h=Object.assign||function(r){for(var u=1;u<arguments.length;u++){var n=arguments[u];for(var P in n)Object.prototype.hasOwnProperty.call(n,P)&&(r[P]=n[P])}return r},h.apply(this,arguments)}function E(r,u){return l.createElement("svg",h({width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:u},r),l.createElement("path",{d:"M10.5 5a.5.5 0 010-1h2.691a6.5 6.5 0 10.647 8.21.5.5 0 01.821.571 7.5 7.5 0 11-.658-9.379L14 .5a.5.5 0 011 0v4a.5.5 0 01-.41.492L14.5 5h-4z"}))}var o=l.forwardRef(E),R=o;e.default=R}(Ce)),Ce}(function(e,a){var l=ze;a.__esModule=!0,a.default=void 0;var i=l(Be()),s=l(ya()),h=(0,i.default)({as:s.default,ariaLabel:"reload",category:"action",displayName:"Reload"}),E=h;a.default=E,e.exports=a.default})(xe,xe.exports);var Ra=xe.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}});var a=l(Ra);function l(i){return i&&i.__esModule?i:{default:i}}})(Xe);const Pa=Ve(Xe);var wa=function(a){a===void 0&&(a=0);var l=1024,i=1024*1024,s=1024*1024*1024;return a>s?(a/s).toFixed(2)+"GB":a>i?(a/i).toFixed(2)+"MB":a>l?(a/l).toFixed(2)+"KB":a+"B"},Oe=c.forwardRef(function(e,a){var l=e.as,i=l===void 0?"div":l,s=e.disabled,h=e.allowReupload,E=h===void 0?!0:h,o=e.file,R=e.classPrefix,r=R===void 0?"uploader-file-item":R,u=e.listType,n=u===void 0?"text":u,P=e.className,m=e.removable,w=m===void 0?!0:m,C=e.maxPreviewFileSize,f=C===void 0?1024*1024*5:C,_=e.locale,L=e.renderFileInfo,b=e.renderThumbnail,N=e.onPreview,M=e.onCancel,I=e.onReupload,q=Fe(e,["as","disabled","allowReupload","file","classPrefix","listType","className","removable","maxPreviewFileSize","locale","renderFileInfo","renderThumbnail","onPreview","onCancel","onReupload"]),$=Ee(r),W=$.merge,H=$.withClassPrefix,x=$.prefix,Q=W(P,H(n,{disabled:s,"has-error":o.status==="error"})),j=d.useState(o.url?o.url:null),ee=j[0],ae=j[1],X=d.useCallback(function(F){var y;~["picture-text","picture"].indexOf(n)&&(!o.blobFile||(o==null||(y=o.blobFile)===null||y===void 0?void 0:y.size)>f||ga(o.blobFile,F))},[o,n,f]);d.useEffect(function(){o.url||X(function(F){ae(F)})},[o.url,X]);var G=d.useCallback(function(F){s||N==null||N(o,F)},[s,o,N]),re=d.useCallback(function(F){s||M==null||M(o.fileKey,F)},[s,o.fileKey,M]),te=d.useCallback(function(F){s||I==null||I(o,F)},[s,o,I]),J=function(){var y=o.progress,K=y===void 0?0:y,le=o.status,ue=!s&&le==="uploading",ge=ue?"visible":"hidden",he={visibility:ge},be={width:K+"%"};return c.createElement("div",{className:x("progress"),style:he},c.createElement("div",{className:x("progress-bar"),style:be}))},Y=function(){var y=ee?c.createElement("img",{role:"presentation",src:ee,alt:o.name,onClick:G}):c.createElement(Ae,{className:x("icon")});return c.createElement("div",{className:x("preview")},b?b(o,y):y)},U=function(){var y=o.status==="uploading",K=x("icon-wrapper",{"icon-loading":y});return y?c.createElement("div",{className:K},c.createElement("i",{className:x("icon")})):n==="picture"||n==="picture-text"?null:c.createElement("div",{className:K},c.createElement(Ae,{className:x("icon")}))},B=function(){return w?c.createElement(na,{className:x("btn-remove"),onClick:re}):null},g=function(){return o.status==="error"?c.createElement("div",{className:x("status")},c.createElement("span",null,_==null?void 0:_.error),E&&c.createElement("a",{role:"button",tabIndex:-1,onClick:te},c.createElement(Pa,{className:x("icon-reupload")}))):null},z=function(){if(o.status!=="error"&&o.blobFile){var y;return c.createElement("span",{className:x("size")},wa(o==null||(y=o.blobFile)===null||y===void 0?void 0:y.size))}return null},k=function(){var y=c.createElement("div",{className:x("title"),onClick:G},o.name);return c.createElement("div",{className:x("panel")},c.createElement("div",{className:x("content")},L?L(o,y):y,g(),z()))};return n==="picture"?c.createElement(i,T({},q,{ref:a,className:Q}),U(),Y(),g(),B()):n==="picture-text"?c.createElement(i,T({},q,{ref:a,className:Q}),U(),Y(),k(),J(),B()):c.createElement(i,T({},q,{ref:a,className:Q}),U(),k(),J(),B())});Oe.displayName="UploadFileItem";Oe.propTypes={locale:t.any,file:t.object.isRequired,listType:t.oneOf(["text","picture-text","picture"]),disabled:t.bool,className:t.string,maxPreviewFileSize:t.number,classPrefix:t.string,removable:t.bool,allowReupload:t.bool,renderFileInfo:t.func,renderThumbnail:t.func,onCancel:t.func,onPreview:t.func,onReupload:t.func};const Ca=Oe;var Se=c.forwardRef(function(e,a){var l=e.as,i=l===void 0?oa:l,s=e.name,h=e.accept,E=e.multiple,o=e.disabled,R=e.readOnly,r=e.children,u=e.classPrefix,n=u===void 0?"uploader-trigger":u,P=e.className,m=e.draggable,w=e.locale,C=e.onChange,f=e.onDragEnter,_=e.onDragLeave,L=e.onDragOver,b=e.onDrop,N=Fe(e,["as","name","accept","multiple","disabled","readOnly","children","classPrefix","className","draggable","locale","onChange","onDragEnter","onDragLeave","onDragOver","onDrop"]),M=d.useRef(null),I=d.useState(!1),q=I[0],$=I[1],W=d.useRef(null),H=Ee(n),x=H.merge,Q=H.withClassPrefix,j=H.prefix,ee=x(P,Q({disabled:o,customize:r,"drag-over":q})),ae=d.useCallback(function(){var g;(g=W.current)===null||g===void 0||g.click()},[]),X=d.useCallback(function(){W.current&&(W.current.value="")},[]),G=d.useCallback(function(g){m&&(g.preventDefault(),$(!0)),f==null||f(g)},[m,f]),re=d.useCallback(function(g){m&&(g.preventDefault(),$(!1)),_==null||_(g)},[m,_]),te=d.useCallback(function(g){m&&g.preventDefault(),L==null||L(g)},[m,L]),J=d.useCallback(function(g){m&&(g.preventDefault(),$(!1),C==null||C(g)),b==null||b(g)},[m,C,b]),Y=d.useCallback(function(g){if(ia()){var z,k;((z=g.target)===null||z===void 0||(k=z.files)===null||k===void 0?void 0:k.length)>0&&(C==null||C(g));return}C==null||C(g)},[C]);d.useImperativeHandle(a,function(){return{root:M.current,clearInput:X}});var U=T({},N,{disabled:o,className:j("btn")});!o&&!R&&(U.onClick=ae,U.onDragEnter=G,U.onDragLeave=re,U.onDragOver=te,U.onDrop=J);var B=r?c.cloneElement(c.Children.only(r),U):c.createElement(i,U,w==null?void 0:w.upload);return c.createElement("div",{ref:M,className:ee},c.createElement("input",{type:"file",name:s,multiple:E,disabled:o,readOnly:R,accept:h,ref:W,onChange:Y}),B)});Se.displayName="UploadTrigger";Se.propTypes={locale:t.any,name:t.string,multiple:t.bool,disabled:t.bool,readOnly:t.bool,accept:t.string,onChange:t.func,classPrefix:t.string,className:t.string,children:t.node,draggable:t.bool,onDragEnter:t.func,onDragLeave:t.func,onDragOver:t.func,onDrop:t.func};const _a=Se;var xa=function(a){if(typeof(a==null?void 0:a.dataTransfer)=="object"){var l;return a==null||(l=a.dataTransfer)===null||l===void 0?void 0:l.files}return a.target?a.target.files:[]},Ge=function(a){var l=a.fileKey;return T({},a,{fileKey:l||He(),progress:0})};function Fa(e,a){var l;switch(a.type){case"push":return[].concat(e,a.files);case"remove":return e.filter(function(i){return i.fileKey!==a.fileKey});case"updateFile":return e.map(function(i){return i.fileKey===a.file.fileKey?a.file:i});case"init":return((l=a.files)===null||l===void 0?void 0:l.map(function(i){return e.find(function(s){return s.fileKey===i.fileKey})||Ge(i)}))||[];default:throw new Error}}var Ea=function(a){a===void 0&&(a=[]);var l=d.useRef(a.map(Ge)),i=d.useRef(),s=d.useReducer(Fa,l.current),h=s[0],E=s[1];l.current=h,d.useEffect(function(){var R;(R=i.current)===null||R===void 0||R.call(i,h),i.current=null},[h]),sa(function(){i.current=null});var o=d.useCallback(function(R,r){E(R),i.current=r},[]);return[l,o]},Ne=c.forwardRef(function(e,a){var l=e.as,i=l===void 0?"div":l,s=e.classPrefix,h=s===void 0?"uploader":s,E=e.className,o=e.listType,R=o===void 0?"text":o,r=e.defaultFileList,u=e.fileList,n=e.fileListVisible,P=n===void 0?!0:n,m=e.locale,w=e.style,C=e.draggable,f=e.name,_=f===void 0?"file":f,L=e.multiple,b=L===void 0?!1:L,N=e.disabled,M=N===void 0?!1:N,I=e.readOnly,q=e.plaintext,$=e.accept,W=e.children,H=e.toggleAs,x=e.removable,Q=x===void 0?!0:x,j=e.disabledFileItem,ee=e.maxPreviewFileSize,ae=e.method,X=ae===void 0?"POST":ae,G=e.autoUpload,re=G===void 0?!0:G,te=e.action,J=e.headers,Y=e.withCredentials,U=Y===void 0?!1:Y,B=e.disableMultipart,g=e.timeout,z=g===void 0?0:g,k=e.data,F=k===void 0?{}:k,y=e.onRemove,K=e.onUpload,le=e.shouldUpload,ue=e.shouldQueueUpdate,ge=e.renderFileInfo,he=e.renderThumbnail,be=e.onPreview,ne=e.onChange,ce=e.onSuccess,fe=e.onError,ve=e.onProgress,ye=e.onReupload,Je=Fe(e,["as","classPrefix","className","listType","defaultFileList","fileList","fileListVisible","locale","style","draggable","name","multiple","disabled","readOnly","plaintext","accept","children","toggleAs","removable","disabledFileItem","maxPreviewFileSize","method","autoUpload","action","headers","withCredentials","disableMultipart","timeout","data","onRemove","onUpload","shouldUpload","shouldQueueUpdate","renderFileInfo","renderThumbnail","onPreview","onChange","onSuccess","onError","onProgress","onReupload"]),Re=Ee(h),Ye=Re.merge,De=Re.withClassPrefix,Ze=Re.prefix,je=Ye(E,De(R,{draggable:C})),ea=ua("Uploader",m),Ue=ea.locale,Le=d.useRef(),Pe=d.useRef({}),Ie=d.useRef(),Te=Ea(u||r),Z=Te[0],ie=Te[1];d.useEffect(function(){typeof u<"u"&&ie({type:"init",files:u})},[ie,u]);var V=d.useCallback(function(v){ie({type:"updateFile",file:v})},[ie]),me=d.useCallback(function(){var v;(v=Ie.current)===null||v===void 0||v.clearInput()},[]),Me=d.useCallback(function(v,p,O,S){var D=T({},v,{status:"finished",progress:100});V(D),ce==null||ce(p,D,O,S)},[ce,V]),qe=d.useCallback(function(v,p,O,S){var D=T({},v,{status:"error"});V(D),fe==null||fe(p,D,O,S)},[fe,V]),$e=d.useCallback(function(v,p,O,S){var D=T({},v,{status:"uploading",progress:p});V(D),ve==null||ve(p,D,O,S)},[ve,V]),de=d.useCallback(function(v){var p=va({name:_,timeout:z,headers:J,data:F,method:X,withCredentials:U,disableMultipart:B,file:v.blobFile,url:te,onError:qe.bind(null,v),onSuccess:Me.bind(null,v),onProgress:$e.bind(null,v)}),O=p.xhr,S=p.data;V(T({},v,{status:"uploading"})),v.fileKey&&(Pe.current[v.fileKey]=O),K==null||K(v,S,O)},[_,z,J,F,X,U,B,te,qe,Me,$e,V,K]),ke=d.useCallback(function(){Z.current.forEach(function(v){var p=le==null?void 0:le(v);if(p instanceof Promise){p.then(function(O){O&&de(v)});return}else if(p===!1)return;v.status==="inited"&&de(v)}),me()},[me,Z,de,le]),aa=function(p){var O=xa(p),S=[];Array.from(O).forEach(function(A){S.push({blobFile:A,name:A.name,status:"inited",fileKey:He()})});var D=[].concat(Z.current,S),se=ue==null?void 0:ue(D,S);if(se===!1){me();return}var oe=function(){ne==null||ne(D),ie({type:"push",files:S},function(){re&&ke()})};if(se instanceof Promise){se.then(function(A){A&&oe()});return}oe()},ra=function(p){var O,S,D=ca(Z.current,function(A){return A.fileKey===p}),se=Z.current.filter(function(A){return A.fileKey!==p});if(((O=Pe.current)===null||O===void 0||(S=O[D.fileKey])===null||S===void 0?void 0:S.readyState)!==4){var oe;(oe=Pe.current[D.fileKey])===null||oe===void 0||oe.abort()}ie({type:"remove",fileKey:p}),y==null||y(D),ne==null||ne(se),me()},ta=function(p){re&&de(p),ye==null||ye(p)},la=function(p){if(p){de(p);return}ke()};d.useImperativeHandle(a,function(){return{root:Le.current,start:la}});var pe=[c.createElement(_a,T({},Je,{locale:Ue,name:_,key:"trigger",multiple:b,draggable:C,disabled:M,readOnly:I,accept:$,ref:Ie,onChange:aa,as:H}),W)];return P&&pe.push(c.createElement("div",{key:"items",className:Ze("file-items")},Z.current.map(function(v,p){return c.createElement(Ca,{locale:Ue,key:v.fileKey||p,file:v,maxPreviewFileSize:ee,listType:R,disabled:j,onPreview:be,onReupload:ta,onCancel:ra,renderFileInfo:ge,renderThumbnail:he,removable:Q&&!I&&!q,allowReupload:!I&&!q})}))),q?c.createElement(da,{localeKey:"notUploaded",className:De(R)},Z.current.length?pe[1]:null):(R==="picture"&&pe.reverse(),c.createElement(i,{ref:Le,className:je,style:w},pe))});Ne.displayName="Uploader";Ne.propTypes={action:t.string.isRequired,accept:t.string,autoUpload:t.bool,children:t.node,className:t.string,classPrefix:t.string,defaultFileList:t.array,fileList:t.array,data:t.object,multiple:t.bool,disabled:t.bool,disabledFileItem:t.bool,name:t.string,timeout:t.number,withCredentials:t.bool,headers:t.object,locale:t.any,listType:t.oneOf(["text","picture-text","picture"]),shouldQueueUpdate:t.func,shouldUpload:t.func,onChange:t.func,onUpload:t.func,onReupload:t.func,onPreview:t.func,onError:t.func,onSuccess:t.func,onProgress:t.func,onRemove:t.func,maxPreviewFileSize:t.number,method:t.string,style:t.object,renderFileInfo:t.func,renderThumbnail:t.func,removable:t.bool,fileListVisible:t.bool,draggable:t.bool,disableMultipart:t.bool};const Sa=Ne;export{Sa as U};