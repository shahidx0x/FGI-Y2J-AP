import{r as A,u as St,f as $t,e as Pe,d as nt,j as o,l as qt,m as je,k as Nt,T as Zt,n as Ct,I as Qt,o as Jt,i as ot,p as Rt,R as en,Z as Lt,M as wt,_ as Dt,A as tn,$ as nn,a0 as on,a1 as an,a2 as rn}from"./index-81f43a68.js";import{g as sn}from"./BrandServices-a99371d6.js";import{a as ln}from"./CategoryService-dfd0d97c.js";import{g as cn}from"./SubCategoryServices-fca28743.js";/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Ut,setPrototypeOf:kt,isFrozen:un,getPrototypeOf:dn,getOwnPropertyDescriptor:Ft}=Object;let{freeze:S,seal:U,create:Ht}=Object,{apply:ct,construct:ut}=typeof Reflect<"u"&&Reflect;S||(S=function(s){return s});U||(U=function(s){return s});ct||(ct=function(s,u,c){return s.apply(u,c)});ut||(ut=function(s,u){return new s(...u)});const Ue=j(Array.prototype.forEach),It=j(Array.prototype.pop),Ae=j(Array.prototype.push),ze=j(String.prototype.toLowerCase),at=j(String.prototype.toString),fn=j(String.prototype.match),xe=j(String.prototype.replace),mn=j(String.prototype.indexOf),pn=j(String.prototype.trim),I=j(RegExp.prototype.test),ye=hn(TypeError);function j(l){return function(s){for(var u=arguments.length,c=new Array(u>1?u-1:0),T=1;T<u;T++)c[T-1]=arguments[T];return ct(l,s,c)}}function hn(l){return function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return ut(l,u)}}function i(l,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ze;kt&&kt(l,null);let c=s.length;for(;c--;){let T=s[c];if(typeof T=="string"){const O=u(T);O!==T&&(un(s)||(s[c]=O),T=O)}l[T]=!0}return l}function se(l){const s=Ht(null);for(const[u,c]of Ut(l))Ft(l,u)!==void 0&&(s[u]=c);return s}function Fe(l,s){for(;l!==null;){const c=Ft(l,s);if(c){if(c.get)return j(c.get);if(typeof c.value=="function")return j(c.value)}l=dn(l)}function u(c){return console.warn("fallback value for",c),null}return u}const Ot=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),rt=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),st=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gn=S(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),it=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Tn=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mt=S(["#text"]),vt=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),lt=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pt=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),He=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),_n=U(/\{\{[\w\W]*|[\w\W]*\}\}/gm),En=U(/<%[\w\W]*|[\w\W]*%>/gm),An=U(/\${[\w\W]*}/gm),xn=U(/^data-[\-\w.\u00B7-\uFFFF]/),yn=U(/^aria-[\-\w]+$/),zt=U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bn=U(/^(?:\w+script|data):/i),Sn=U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=U(/^html$/i);var jt=Object.freeze({__proto__:null,MUSTACHE_EXPR:_n,ERB_EXPR:En,TMPLIT_EXPR:An,DATA_ATTR:xn,ARIA_ATTR:yn,IS_ALLOWED_URI:zt,IS_SCRIPT_OR_DATA:bn,ATTR_WHITESPACE:Sn,DOCTYPE_NAME:Wt});const Nn=function(){return typeof window>"u"?null:window},Cn=function(s,u){if(typeof s!="object"||typeof s.createPolicy!="function")return null;let c=null;const T="data-tt-policy-suffix";u&&u.hasAttribute(T)&&(c=u.getAttribute(T));const O="dompurify"+(c?"#"+c:"");try{return s.createPolicy(O,{createHTML(Y){return Y},createScriptURL(Y){return Y}})}catch{return console.warn("TrustedTypes policy "+O+" could not be created."),null}};function Bt(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nn();const s=r=>Bt(r);if(s.version="3.0.6",s.removed=[],!l||!l.document||l.document.nodeType!==9)return s.isSupported=!1,s;let{document:u}=l;const c=u,T=c.currentScript,{DocumentFragment:O,HTMLTemplateElement:Y,Node:be,Element:F,NodeFilter:ie,NamedNodeMap:We=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:Be,DOMParser:Se,trustedTypes:ee}=l,K=F.prototype,Ge=Fe(K,"cloneNode"),Ye=Fe(K,"nextSibling"),Ke=Fe(K,"childNodes"),D=Fe(K,"parentNode");if(typeof Y=="function"){const r=u.createElement("template");r.content&&r.content.ownerDocument&&(u=r.content.ownerDocument)}let _,M="";const{implementation:le,createNodeIterator:dt,createDocumentFragment:Ve,getElementsByTagName:ce}=u,{importNode:ue}=c;let N={};s.isSupported=typeof Ut=="function"&&typeof D=="function"&&le&&le.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:de,ERB_EXPR:fe,TMPLIT_EXPR:Ne,DATA_ATTR:Xe,ARIA_ATTR:$e,IS_SCRIPT_OR_DATA:qe,ATTR_WHITESPACE:me}=jt;let{IS_ALLOWED_URI:W}=jt,g=null;const Ce=i({},[...Ot,...rt,...st,...it,...Mt]);let m=null;const Ze=i({},[...vt,...lt,...Pt,...He]);let h=Object.seal(Ht(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),te=null,$=null,pe=!0,he=!0,Re=!1,Le=!0,V=!1,E=!1,ge=!1,C=!1,q=!1,ne=!1,oe=!1,we=!0,H=!1;const Qe="user-content-";let Te=!0,v=!1,z={},X=null;const De=i({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ke=null;const Ie=i({},["audio","video","img","source","image","track"]);let _e=null;const Oe=i({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Z="http://www.w3.org/1998/Math/MathML",x="http://www.w3.org/2000/svg",P="http://www.w3.org/1999/xhtml";let B=P,ae=!1,re=null;const Me=i({},[Z,x,P],at);let t=null;const d=["application/xhtml+xml","text/html"],R="text/html";let p=null,k=null;const Gt=u.createElement("form"),ft=function(e){return e instanceof RegExp||e instanceof Function},Je=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(k&&k===e)){if((!e||typeof e!="object")&&(e={}),e=se(e),t=d.indexOf(e.PARSER_MEDIA_TYPE)===-1?t=R:t=e.PARSER_MEDIA_TYPE,p=t==="application/xhtml+xml"?at:ze,g="ALLOWED_TAGS"in e?i({},e.ALLOWED_TAGS,p):Ce,m="ALLOWED_ATTR"in e?i({},e.ALLOWED_ATTR,p):Ze,re="ALLOWED_NAMESPACES"in e?i({},e.ALLOWED_NAMESPACES,at):Me,_e="ADD_URI_SAFE_ATTR"in e?i(se(Oe),e.ADD_URI_SAFE_ATTR,p):Oe,ke="ADD_DATA_URI_TAGS"in e?i(se(Ie),e.ADD_DATA_URI_TAGS,p):Ie,X="FORBID_CONTENTS"in e?i({},e.FORBID_CONTENTS,p):De,te="FORBID_TAGS"in e?i({},e.FORBID_TAGS,p):{},$="FORBID_ATTR"in e?i({},e.FORBID_ATTR,p):{},z="USE_PROFILES"in e?e.USE_PROFILES:!1,pe=e.ALLOW_ARIA_ATTR!==!1,he=e.ALLOW_DATA_ATTR!==!1,Re=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,V=e.SAFE_FOR_TEMPLATES||!1,E=e.WHOLE_DOCUMENT||!1,q=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,C=e.FORCE_BODY||!1,we=e.SANITIZE_DOM!==!1,H=e.SANITIZE_NAMED_PROPS||!1,Te=e.KEEP_CONTENT!==!1,v=e.IN_PLACE||!1,W=e.ALLOWED_URI_REGEXP||zt,B=e.NAMESPACE||P,h=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ft(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(h.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ft(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(h.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(h.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),V&&(he=!1),ne&&(q=!0),z&&(g=i({},[...Mt]),m=[],z.html===!0&&(i(g,Ot),i(m,vt)),z.svg===!0&&(i(g,rt),i(m,lt),i(m,He)),z.svgFilters===!0&&(i(g,st),i(m,lt),i(m,He)),z.mathMl===!0&&(i(g,it),i(m,Pt),i(m,He))),e.ADD_TAGS&&(g===Ce&&(g=se(g)),i(g,e.ADD_TAGS,p)),e.ADD_ATTR&&(m===Ze&&(m=se(m)),i(m,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&i(_e,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(X===De&&(X=se(X)),i(X,e.FORBID_CONTENTS,p)),Te&&(g["#text"]=!0),E&&i(g,["html","head","body"]),g.table&&(i(g,["tbody"]),delete te.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=e.TRUSTED_TYPES_POLICY,M=_.createHTML("")}else _===void 0&&(_=Cn(ee,T)),_!==null&&typeof M=="string"&&(M=_.createHTML(""));S&&S(e),k=e}},mt=i({},["mi","mo","mn","ms","mtext"]),pt=i({},["foreignobject","desc","title","annotation-xml"]),Yt=i({},["title","style","font","a","script"]),ve=i({},rt);i(ve,st),i(ve,gn);const et=i({},it);i(et,Tn);const Kt=function(e){let n=D(e);(!n||!n.tagName)&&(n={namespaceURI:B,tagName:"template"});const a=ze(e.tagName),f=ze(n.tagName);return re[e.namespaceURI]?e.namespaceURI===x?n.namespaceURI===P?a==="svg":n.namespaceURI===Z?a==="svg"&&(f==="annotation-xml"||mt[f]):!!ve[a]:e.namespaceURI===Z?n.namespaceURI===P?a==="math":n.namespaceURI===x?a==="math"&&pt[f]:!!et[a]:e.namespaceURI===P?n.namespaceURI===x&&!pt[f]||n.namespaceURI===Z&&!mt[f]?!1:!et[a]&&(Yt[a]||!ve[a]):!!(t==="application/xhtml+xml"&&re[e.namespaceURI]):!1},Q=function(e){Ae(s.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},tt=function(e,n){try{Ae(s.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Ae(s.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e==="is"&&!m[e])if(q||ne)try{Q(n)}catch{}else try{n.setAttribute(e,"")}catch{}},ht=function(e){let n=null,a=null;if(C)e="<remove></remove>"+e;else{const b=fn(e,/^[\r\n\t ]+/);a=b&&b[0]}t==="application/xhtml+xml"&&B===P&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const f=_?_.createHTML(e):e;if(B===P)try{n=new Se().parseFromString(f,t)}catch{}if(!n||!n.documentElement){n=le.createDocument(B,"template",null);try{n.documentElement.innerHTML=ae?M:f}catch{}}const y=n.body||n.documentElement;return e&&a&&y.insertBefore(u.createTextNode(a),y.childNodes[0]||null),B===P?ce.call(n,E?"html":"body")[0]:E?n.documentElement:y},gt=function(e){return dt.call(e.ownerDocument||e,e,ie.SHOW_ELEMENT|ie.SHOW_COMMENT|ie.SHOW_TEXT,null)},Vt=function(e){return e instanceof Be&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof We)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Tt=function(e){return typeof be=="function"&&e instanceof be},G=function(e,n,a){N[e]&&Ue(N[e],f=>{f.call(s,n,a,k)})},_t=function(e){let n=null;if(G("beforeSanitizeElements",e,null),Vt(e))return Q(e),!0;const a=p(e.nodeName);if(G("uponSanitizeElement",e,{tagName:a,allowedTags:g}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&I(/<[/\w]/g,e.innerHTML)&&I(/<[/\w]/g,e.textContent))return Q(e),!0;if(!g[a]||te[a]){if(!te[a]&&At(a)&&(h.tagNameCheck instanceof RegExp&&I(h.tagNameCheck,a)||h.tagNameCheck instanceof Function&&h.tagNameCheck(a)))return!1;if(Te&&!X[a]){const f=D(e)||e.parentNode,y=Ke(e)||e.childNodes;if(y&&f){const b=y.length;for(let L=b-1;L>=0;--L)f.insertBefore(Ge(y[L],!0),Ye(e))}}return Q(e),!0}return e instanceof F&&!Kt(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&I(/<\/no(script|embed|frames)/i,e.innerHTML)?(Q(e),!0):(V&&e.nodeType===3&&(n=e.textContent,Ue([de,fe,Ne],f=>{n=xe(n,f," ")}),e.textContent!==n&&(Ae(s.removed,{element:e.cloneNode()}),e.textContent=n)),G("afterSanitizeElements",e,null),!1)},Et=function(e,n,a){if(we&&(n==="id"||n==="name")&&(a in u||a in Gt))return!1;if(!(he&&!$[n]&&I(Xe,n))){if(!(pe&&I($e,n))){if(!m[n]||$[n]){if(!(At(e)&&(h.tagNameCheck instanceof RegExp&&I(h.tagNameCheck,e)||h.tagNameCheck instanceof Function&&h.tagNameCheck(e))&&(h.attributeNameCheck instanceof RegExp&&I(h.attributeNameCheck,n)||h.attributeNameCheck instanceof Function&&h.attributeNameCheck(n))||n==="is"&&h.allowCustomizedBuiltInElements&&(h.tagNameCheck instanceof RegExp&&I(h.tagNameCheck,a)||h.tagNameCheck instanceof Function&&h.tagNameCheck(a))))return!1}else if(!_e[n]){if(!I(W,xe(a,me,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&mn(a,"data:")===0&&ke[e])){if(!(Re&&!I(qe,xe(a,me,"")))){if(a)return!1}}}}}}return!0},At=function(e){return e.indexOf("-")>0},xt=function(e){G("beforeSanitizeAttributes",e,null);const{attributes:n}=e;if(!n)return;const a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};let f=n.length;for(;f--;){const y=n[f],{name:b,namespaceURI:L,value:J}=y,Ee=p(b);let w=b==="value"?J:pn(J);if(a.attrName=Ee,a.attrValue=w,a.keepAttr=!0,a.forceKeepAttr=void 0,G("uponSanitizeAttribute",e,a),w=a.attrValue,a.forceKeepAttr||(tt(b,e),!a.keepAttr))continue;if(!Le&&I(/\/>/i,w)){tt(b,e);continue}V&&Ue([de,fe,Ne],bt=>{w=xe(w,bt," ")});const yt=p(e.nodeName);if(Et(yt,Ee,w)){if(H&&(Ee==="id"||Ee==="name")&&(tt(b,e),w=Qe+w),_&&typeof ee=="object"&&typeof ee.getAttributeType=="function"&&!L)switch(ee.getAttributeType(yt,Ee)){case"TrustedHTML":{w=_.createHTML(w);break}case"TrustedScriptURL":{w=_.createScriptURL(w);break}}try{L?e.setAttributeNS(L,b,w):e.setAttribute(b,w),It(s.removed)}catch{}}}G("afterSanitizeAttributes",e,null)},Xt=function r(e){let n=null;const a=gt(e);for(G("beforeSanitizeShadowDOM",e,null);n=a.nextNode();)G("uponSanitizeShadowNode",n,null),!_t(n)&&(n.content instanceof O&&r(n.content),xt(n));G("afterSanitizeShadowDOM",e,null)};return s.sanitize=function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,a=null,f=null,y=null;if(ae=!r,ae&&(r="<!-->"),typeof r!="string"&&!Tt(r))if(typeof r.toString=="function"){if(r=r.toString(),typeof r!="string")throw ye("dirty is not a string, aborting")}else throw ye("toString is not a function");if(!s.isSupported)return r;if(ge||Je(e),s.removed=[],typeof r=="string"&&(v=!1),v){if(r.nodeName){const J=p(r.nodeName);if(!g[J]||te[J])throw ye("root node is forbidden and cannot be sanitized in-place")}}else if(r instanceof be)n=ht("<!---->"),a=n.ownerDocument.importNode(r,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?n=a:n.appendChild(a);else{if(!q&&!V&&!E&&r.indexOf("<")===-1)return _&&oe?_.createHTML(r):r;if(n=ht(r),!n)return q?null:oe?M:""}n&&C&&Q(n.firstChild);const b=gt(v?r:n);for(;f=b.nextNode();)_t(f)||(f.content instanceof O&&Xt(f.content),xt(f));if(v)return r;if(q){if(ne)for(y=Ve.call(n.ownerDocument);n.firstChild;)y.appendChild(n.firstChild);else y=n;return(m.shadowroot||m.shadowrootmode)&&(y=ue.call(c,y,!0)),y}let L=E?n.outerHTML:n.innerHTML;return E&&g["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&I(Wt,n.ownerDocument.doctype.name)&&(L="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+L),V&&Ue([de,fe,Ne],J=>{L=xe(L,J," ")}),_&&oe?_.createHTML(L):L},s.setConfig=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Je(r),ge=!0},s.clearConfig=function(){k=null,ge=!1},s.isValidAttribute=function(r,e,n){k||Je({});const a=p(r),f=p(e);return Et(a,f,n)},s.addHook=function(r,e){typeof e=="function"&&(N[r]=N[r]||[],Ae(N[r],e))},s.removeHook=function(r){if(N[r])return It(N[r])},s.removeHooks=function(r){N[r]&&(N[r]=[])},s.removeAllHooks=function(){N={}},s}Bt();function kn(){var P,B,ae,re,Me;const[l,s]=A.useState(!0);A.useState(!0);const[u,c]=A.useState(!1),[T,O]=A.useState(1);A.useState(!0),A.useState(!0);const[Y,be]=A.useState(!1);A.useState(!0);const F=St(t=>t.user.user),[ie,We]=A.useState(""),[Be,Se]=A.useState(!1),[ee,K]=A.useState(!1),[Ge,Ye]=A.useState(null),Ke=$t(),[D,_]=A.useState("brand"),[M,le]=A.useState(""),[dt,Ve]=A.useState(""),{data:ce}=Pe(["brandsIdName",F.jwt],sn),{data:ue}=Pe(["categoryIdName","",F.jwt,D==null?void 0:D.split(",")[0],-1],ln),{data:N}=Pe(["subCategoryIdName","",F.jwt,M==null?void 0:M.split(",")[0],-1],cn),de=(P=ue==null?void 0:ue.data)==null?void 0:P.map(t=>({label:t==null?void 0:t.category_label,value:t._id+","+t.category_slug})),fe=(B=N==null?void 0:N.data)==null?void 0:B.map(t=>({label:t==null?void 0:t.subcategory_name,value:t._id})),Xe=[...((ae=ce==null?void 0:ce.data)==null?void 0:ae.map(t=>({label:t==null?void 0:t.name,value:t.id+","+t.slug})))||[]].map(t=>({label:t==null?void 0:t.label,value:t==null?void 0:t.value})),$e=[...de||[{label:"No Category",value:"no-category"}]].map(t=>({label:t==null?void 0:t.label,value:t==null?void 0:t.value})),{Column:qe,HeaderCell:me,Cell:W}=Rt,g=t=>o.jsx(W,{...t,style:{padding:4}}),Ce=t=>o.jsx(me,{...t,style:{padding:4},children:o.jsx("div",{className:"flex justify-center font-bold",children:t.children})}),m=({rowData:t,icon:d,dataKey:R,...p})=>{let k="";return d&&(k=d),o.jsx(W,{...p,children:o.jsx("p",{className:k?"flex justify-center items-center  font-mono font-bold":"flex justify-center items-center",children:R==="discount"?t[R]+" "+k:k+" "+t[R]})})},$=[{key:"product_image",label:"Product Image",cellRenderer:({rowData:t,dataKey:d,...R})=>o.jsx(W,{...R,children:o.jsx("div",{className:"flex justify-center -mt-2",children:o.jsx(tn,{className:"",src:(t==null?void 0:t.product_image)||"https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png",alt:"P"})})}),width:90},{key:"name",label:"Name",cellRenderer:({rowData:t,...d})=>o.jsx(W,{...d,children:o.jsx("p",{className:"flex justify-center items-center",children:t.name})}),width:190},{key:"brand_name",label:"Brand Name",cellRenderer:t=>o.jsx(m,{...t,dataKey:"brand_name"}),width:150},{key:"category_name",label:"Category",cellRenderer:t=>o.jsx(m,{...t,dataKey:"category_name"}),width:150},{key:"subcategory_name",label:"Sub Category",cellRenderer:t=>o.jsx(m,{...t,dataKey:"subcategory_name"}),width:150},{key:"price",label:"Price",cellRenderer:t=>o.jsx(m,{...t,dataKey:"price",icon:"$"}),width:100},{key:"discount",label:"Discount",cellRenderer:t=>o.jsx(m,{...t,dataKey:"discount",icon:"%"}),width:100},{key:"after_discount",label:"After Discount",cellRenderer:t=>o.jsx(m,{...t,dataKey:"afterDiscount",icon:"$"}),width:150},{key:"actions",label:"Actions",cellRenderer:({rowData:t,...d})=>{const R=()=>{Ke("/dashbord/product/edit",{state:{myData:t}})},p=()=>{ne(),Ye(t._id)};return o.jsx(W,{...d,children:o.jsxs("div",{className:"flex justify-center gap-3",children:[o.jsx("button",{className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:R,children:"Edit"}),o.jsx("button",{className:"text-red-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-red-500 rounded-lg",onClick:p,children:"Delete"})]})})},width:200}],[pe,he]=A.useState($.map(t=>t.key)),Re=$.filter(t=>pe.some(d=>d===t.key)),Le=l?g:W,V=l?Ce:me,{data:E,status:ge,refetch:C,error:q}=Pe(["products",T,F.jwt],nn,{cacheTime:0}),ne=()=>{K(!0)},oe=nt(on),we=()=>{oe.mutate({id:Ge,token:F.jwt},{onSuccess:t=>{Lt.push(o.jsx(wt,{type:"success",children:"Product deleted successfully"})),C()},onError:t=>{Lt.push(o.jsx(wt,{type:"error",children:"Product delete failed !"}))}}),K(!1),C()},H=nt(an),Qe=t=>{We(t),t===""&&(C(),Se(!1))},Te=()=>{Se(!0),Dt.promise(H.mutateAsync({queryKey:["product_search",ie,F.jwt]}),{loading:"Searching...",success:o.jsx("b",{children:"Product found!"}),error:o.jsx("b",{children:"Product not found in the database!"})})},v=nt(rn),z=(t="",d="",R="")=>{if(t===""&&d===""&&R===""){C();return}Dt.promise(v.mutateAsync({queryKey:["filter",F.jwt,t,d,R]}),{loading:"loading...",error:o.jsx("b",{children:"Something went wrong !"})})},X=t=>{if(t===""||t===null){v.reset(),C();return}const d=t===""||t===null?"":t.split(",")[1];z(d)},De=t=>{if(t===""||t===null){v.reset(),C();return}const d=t===""||t===null?"":t.split(",")[1];z(D==null?void 0:D.split(",")[1],d)},ke=t=>{if(t===""||t===null){v.reset(),C();return}const d=t;z(D==null?void 0:D.split(",")[1],M==null?void 0:M.split(",")[1],d)},Ie=v.data?[...v.data.data]:Be&&(H!=null&&H.data)?[...((re=H==null?void 0:H.data)==null?void 0:re.data)||[]]:(E==null?void 0:E.data)||[],_e=()=>{O(t=>{var d;return t<((d=E==null?void 0:E.meta)==null?void 0:d.total_pages)?t+1:t}),C()},Oe=()=>{O(t=>Math.max(t-1,1)),C()},Z=()=>K(!1);C();const x=St(t=>t.settings);return o.jsxs("div",{children:[o.jsx(qt,{}),o.jsxs(je,{open:ee,onClose:Z,children:[o.jsx(je.Header,{className:"p-5",children:o.jsx(je.Title,{children:"Are you sure you want delete this product ?"})}),o.jsxs(je.Footer,{children:[o.jsx(Nt,{onClick:we,className:"bg-blue-500 w-20",appearance:"primary",children:"Confirm"}),o.jsx(Nt,{className:" bg-red-500 text-white",onClick:Z,children:"Cancel"})]})]}),o.jsxs("div",{children:[o.jsx("div",{className:"p-5",children:o.jsxs("div",{className:"flex gap-3 flex-col 2xl:flex-row 2xl:justify-between",children:[o.jsx("div",{className:"",children:o.jsx(Zt,{className:"h-12",data:$,labelKey:"label",valueKey:"key",value:pe,onChange:he,cleanable:!0})}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("div",{className:" ",children:o.jsxs(Ct,{children:[o.jsx(Qt,{placeholder:"Search by Product Name",onChange:t=>Qe(t)}),o.jsx(Ct.Button,{onClick:()=>Te(),tabIndex:-1,children:o.jsx(Jt,{className:"text-indigo-500 font-bold"})})]})}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(ot,{placeholder:"filter by brand",searchable:!0,size:"md",data:Xe,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,d)=>{_(t),X(t)}}),o.jsx(ot,{placeholder:"filter by category",searchable:!0,size:"md",data:$e,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,d)=>{le(t),De(t)}}),o.jsx(ot,{placeholder:"filter by subcategory",searchable:!0,size:"md",data:fe,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,d)=>{Ve(t),ke(d.target.innerHTML)}})]})]})]})}),o.jsxs("div",{className:"mt-5 ml-5",style:{height:x.autoHeight?"auto":400},children:[o.jsx(Rt,{loading:ge==="loading",height:300,hover:x.hover,fillHeight:Y,showHeader:x.header,autoHeight:x.autoHeight,data:u?[]:Ie,bordered:x.bordered,cellBordered:x.bordered,headerHeight:x.compact?40:30,rowHeight:x.compact?56:30,children:Re.map(t=>{const{key:d,label:R,cellRenderer:p,...k}=t;return A.createElement(qe,{...k,key:d},o.jsx(V,{children:R}),p?en.createElement(p,{dataKey:d}):o.jsx(Le,{dataKey:d}))})}),o.jsx("div",{className:"border-b",children:o.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:o.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[o.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[o.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx("p",{onClick:Oe,className:`text-sm ml-3 font-medium leading-none ${x.theme==="dark"&&"text-white"} `,children:"Previous"})]}),o.jsx("div",{className:"sm:flex hidden",children:o.jsxs("p",{className:`text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${x.theme==="dark"&&"text-white"}`,children:["pages : ",T,"/",(Me=E==null?void 0:E.meta)==null?void 0:Me.total_pages]})}),o.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[o.jsx("p",{onClick:_e,className:`text-sm font-medium leading-none mr-3 ${x.theme==="dark"&&"text-white"}`,children:"Next"}),o.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{kn as default};
