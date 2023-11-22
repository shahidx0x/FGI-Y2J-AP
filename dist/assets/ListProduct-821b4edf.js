import{r as T,u as qt,f as $t,e as We,d as Nt,j as n,k as Zt,l as Ge,i as Rt,T as Qt,D as ue,m as Jt,n as Re,o as Lt,I as en,p as tn,q as wt,R as nn,a9 as kt,M as It,_ as an,A as on,aa as rn,ab as sn,ac as ln}from"./index-3c763a15.js";import{g as cn}from"./BrandServices-1fccebf5.js";import{a as un}from"./CategoryService-a9b087eb.js";import{g as dn}from"./SubCategoryServices-906a8e5c.js";import{S as st}from"./SelectPicker-ddc4f8f1.js";/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Ht,setPrototypeOf:Ot,isFrozen:fn,getPrototypeOf:mn,getOwnPropertyDescriptor:Ft}=Object;let{freeze:y,seal:O,create:Bt}=Object,{apply:ft,construct:mt}=typeof Reflect<"u"&&Reflect;y||(y=function(s){return s});O||(O=function(s){return s});ft||(ft=function(s,u,d){return s.apply(u,d)});mt||(mt=function(s,u){return new s(...u)});const Ye=R(Array.prototype.forEach),Dt=R(Array.prototype.pop),Le=R(Array.prototype.push),Xe=R(String.prototype.toLowerCase),it=R(String.prototype.toString),pn=R(String.prototype.match),we=R(String.prototype.replace),hn=R(String.prototype.indexOf),gn=R(String.prototype.trim),C=R(RegExp.prototype.test),ke=_n(TypeError);function R(c){return function(s){for(var u=arguments.length,d=new Array(u>1?u-1:0),g=1;g<u;g++)d[g-1]=arguments[g];return ft(c,s,d)}}function _n(c){return function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return mt(c,u)}}function i(c,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xe;Ot&&Ot(c,null);let d=s.length;for(;d--;){let g=s[d];if(typeof g=="string"){const D=u(g);D!==g&&(fn(s)||(s[d]=D),g=D)}c[g]=!0}return c}function de(c){const s=Bt(null);for(const[u,d]of Ht(c))Ft(c,u)!==void 0&&(s[u]=d);return s}function Ke(c,s){for(;c!==null;){const d=Ft(c,s);if(d){if(d.get)return R(d.get);if(typeof d.value=="function")return R(d.value)}c=mn(c)}function u(d){return console.warn("fallback value for",d),null}return u}const Mt=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),lt=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ct=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Tn=y(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ut=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),En=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),vt=y(["#text"]),jt=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),dt=y(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pt=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ve=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xn=O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),An=O(/<%[\w\W]*|[\w\W]*%>/gm),yn=O(/\${[\w\W]*}/gm),bn=O(/^data-[\-\w.\u00B7-\uFFFF]/),Sn=O(/^aria-[\-\w]+$/),zt=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cn=O(/^(?:\w+script|data):/i),Nn=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=O(/^html$/i);var Ut=Object.freeze({__proto__:null,MUSTACHE_EXPR:xn,ERB_EXPR:An,TMPLIT_EXPR:yn,DATA_ATTR:bn,ARIA_ATTR:Sn,IS_ALLOWED_URI:zt,IS_SCRIPT_OR_DATA:Cn,ATTR_WHITESPACE:Nn,DOCTYPE_NAME:Wt});const Rn=function(){return typeof window>"u"?null:window},Ln=function(s,u){if(typeof s!="object"||typeof s.createPolicy!="function")return null;let d=null;const g="data-tt-policy-suffix";u&&u.hasAttribute(g)&&(d=u.getAttribute(g));const D="dompurify"+(d?"#"+d:"");try{return s.createPolicy(D,{createHTML(j){return j},createScriptURL(j){return j}})}catch{return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function Gt(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rn();const s=r=>Gt(r);if(s.version="3.0.6",s.removed=[],!c||!c.document||c.document.nodeType!==9)return s.isSupported=!1,s;let{document:u}=c;const d=u,g=d.currentScript,{DocumentFragment:D,HTMLTemplateElement:j,Node:te,Element:fe,NodeFilter:me,NamedNodeMap:pe=c.NamedNodeMap||c.MozNamedAttrMap,HTMLFormElement:qe,DOMParser:$e,trustedTypes:he}=c,V=fe.prototype,Ze=Ke(V,"cloneNode"),z=Ke(V,"nextSibling"),Qe=Ke(V,"childNodes"),ge=Ke(V,"parentNode");if(typeof j=="function"){const r=u.createElement("template");r.content&&r.content.ownerDocument&&(u=r.content.ownerDocument)}let _,W="";const{implementation:_e,createNodeIterator:Te,createDocumentFragment:Je,getElementsByTagName:et}=u,{importNode:tt}=d;let N={};s.isSupported=typeof Ht=="function"&&typeof ge=="function"&&_e&&_e.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Ee,ERB_EXPR:xe,TMPLIT_EXPR:Ae,DATA_ATTR:pt,ARIA_ATTR:nt,IS_SCRIPT_OR_DATA:ye,ATTR_WHITESPACE:X}=Ut;let{IS_ALLOWED_URI:ne}=Ut,p=null;const Ie=i({},[...Mt,...lt,...ct,...ut,...vt]);let h=null;const Oe=i({},[...jt,...dt,...Pt,...Ve]);let m=Object.seal(Bt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,ae=null,P=!0,be=!0,De=!1,L=!0,$=!1,G=!1,Me=!1,Z=!1,U=!1,oe=!1,re=!1,ve=!0,je=!1;const w="user-content-";let Se=!0,k=!1,Q={},Y=null;const Pe=i({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ue=null;const M=i({},["audio","video","img","source","image","track"]);let Ce=null;const He=i({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),se="http://www.w3.org/1998/Math/MathML",ie="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xhtml";let H=I,le=!1,ce=null;const Fe=i({},[se,ie,I],it);let v=null;const Be=["application/xhtml+xml","text/html"],t="text/html";let l=null,E=null;const K=u.createElement("form"),F=function(e){return e instanceof RegExp||e instanceof Function},at=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(E&&E===e)){if((!e||typeof e!="object")&&(e={}),e=de(e),v=Be.indexOf(e.PARSER_MEDIA_TYPE)===-1?v=t:v=e.PARSER_MEDIA_TYPE,l=v==="application/xhtml+xml"?it:Xe,p="ALLOWED_TAGS"in e?i({},e.ALLOWED_TAGS,l):Ie,h="ALLOWED_ATTR"in e?i({},e.ALLOWED_ATTR,l):Oe,ce="ALLOWED_NAMESPACES"in e?i({},e.ALLOWED_NAMESPACES,it):Fe,Ce="ADD_URI_SAFE_ATTR"in e?i(de(He),e.ADD_URI_SAFE_ATTR,l):He,Ue="ADD_DATA_URI_TAGS"in e?i(de(M),e.ADD_DATA_URI_TAGS,l):M,Y="FORBID_CONTENTS"in e?i({},e.FORBID_CONTENTS,l):Pe,q="FORBID_TAGS"in e?i({},e.FORBID_TAGS,l):{},ae="FORBID_ATTR"in e?i({},e.FORBID_ATTR,l):{},Q="USE_PROFILES"in e?e.USE_PROFILES:!1,P=e.ALLOW_ARIA_ATTR!==!1,be=e.ALLOW_DATA_ATTR!==!1,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,L=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$=e.SAFE_FOR_TEMPLATES||!1,G=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,oe=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,Z=e.FORCE_BODY||!1,ve=e.SANITIZE_DOM!==!1,je=e.SANITIZE_NAMED_PROPS||!1,Se=e.KEEP_CONTENT!==!1,k=e.IN_PLACE||!1,ne=e.ALLOWED_URI_REGEXP||zt,H=e.NAMESPACE||I,m=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&F(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(m.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&F(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(m.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(m.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$&&(be=!1),oe&&(U=!0),Q&&(p=i({},[...vt]),h=[],Q.html===!0&&(i(p,Mt),i(h,jt)),Q.svg===!0&&(i(p,lt),i(h,dt),i(h,Ve)),Q.svgFilters===!0&&(i(p,ct),i(h,dt),i(h,Ve)),Q.mathMl===!0&&(i(p,ut),i(h,Pt),i(h,Ve))),e.ADD_TAGS&&(p===Ie&&(p=de(p)),i(p,e.ADD_TAGS,l)),e.ADD_ATTR&&(h===Oe&&(h=de(h)),i(h,e.ADD_ATTR,l)),e.ADD_URI_SAFE_ATTR&&i(Ce,e.ADD_URI_SAFE_ATTR,l),e.FORBID_CONTENTS&&(Y===Pe&&(Y=de(Y)),i(Y,e.FORBID_CONTENTS,l)),Se&&(p["#text"]=!0),G&&i(p,["html","head","body"]),p.table&&(i(p,["tbody"]),delete q.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw ke('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ke('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=e.TRUSTED_TYPES_POLICY,W=_.createHTML("")}else _===void 0&&(_=Ln(he,g)),_!==null&&typeof W=="string"&&(W=_.createHTML(""));y&&y(e),E=e}},ht=i({},["mi","mo","mn","ms","mtext"]),gt=i({},["foreignobject","desc","title","annotation-xml"]),Yt=i({},["title","style","font","a","script"]),ze=i({},lt);i(ze,ct),i(ze,Tn);const ot=i({},ut);i(ot,En);const Kt=function(e){let a=ge(e);(!a||!a.tagName)&&(a={namespaceURI:H,tagName:"template"});const o=Xe(e.tagName),f=Xe(a.tagName);return ce[e.namespaceURI]?e.namespaceURI===ie?a.namespaceURI===I?o==="svg":a.namespaceURI===se?o==="svg"&&(f==="annotation-xml"||ht[f]):!!ze[o]:e.namespaceURI===se?a.namespaceURI===I?o==="math":a.namespaceURI===ie?o==="math"&&gt[f]:!!ot[o]:e.namespaceURI===I?a.namespaceURI===ie&&!gt[f]||a.namespaceURI===se&&!ht[f]?!1:!ot[o]&&(Yt[o]||!ze[o]):!!(v==="application/xhtml+xml"&&ce[e.namespaceURI]):!1},J=function(e){Le(s.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},rt=function(e,a){try{Le(s.removed,{attribute:a.getAttributeNode(e),from:a})}catch{Le(s.removed,{attribute:null,from:a})}if(a.removeAttribute(e),e==="is"&&!h[e])if(U||oe)try{J(a)}catch{}else try{a.setAttribute(e,"")}catch{}},_t=function(e){let a=null,o=null;if(Z)e="<remove></remove>"+e;else{const A=pn(e,/^[\r\n\t ]+/);o=A&&A[0]}v==="application/xhtml+xml"&&H===I&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const f=_?_.createHTML(e):e;if(H===I)try{a=new $e().parseFromString(f,v)}catch{}if(!a||!a.documentElement){a=_e.createDocument(H,"template",null);try{a.documentElement.innerHTML=le?W:f}catch{}}const x=a.body||a.documentElement;return e&&o&&x.insertBefore(u.createTextNode(o),x.childNodes[0]||null),H===I?et.call(a,G?"html":"body")[0]:G?a.documentElement:x},Tt=function(e){return Te.call(e.ownerDocument||e,e,me.SHOW_ELEMENT|me.SHOW_COMMENT|me.SHOW_TEXT,null)},Vt=function(e){return e instanceof qe&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof pe)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Et=function(e){return typeof te=="function"&&e instanceof te},B=function(e,a,o){N[e]&&Ye(N[e],f=>{f.call(s,a,o,E)})},xt=function(e){let a=null;if(B("beforeSanitizeElements",e,null),Vt(e))return J(e),!0;const o=l(e.nodeName);if(B("uponSanitizeElement",e,{tagName:o,allowedTags:p}),e.hasChildNodes()&&!Et(e.firstElementChild)&&C(/<[/\w]/g,e.innerHTML)&&C(/<[/\w]/g,e.textContent))return J(e),!0;if(!p[o]||q[o]){if(!q[o]&&yt(o)&&(m.tagNameCheck instanceof RegExp&&C(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o)))return!1;if(Se&&!Y[o]){const f=ge(e)||e.parentNode,x=Qe(e)||e.childNodes;if(x&&f){const A=x.length;for(let b=A-1;b>=0;--b)f.insertBefore(Ze(x[b],!0),z(e))}}return J(e),!0}return e instanceof fe&&!Kt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&C(/<\/no(script|embed|frames)/i,e.innerHTML)?(J(e),!0):($&&e.nodeType===3&&(a=e.textContent,Ye([Ee,xe,Ae],f=>{a=we(a,f," ")}),e.textContent!==a&&(Le(s.removed,{element:e.cloneNode()}),e.textContent=a)),B("afterSanitizeElements",e,null),!1)},At=function(e,a,o){if(ve&&(a==="id"||a==="name")&&(o in u||o in K))return!1;if(!(be&&!ae[a]&&C(pt,a))){if(!(P&&C(nt,a))){if(!h[a]||ae[a]){if(!(yt(e)&&(m.tagNameCheck instanceof RegExp&&C(m.tagNameCheck,e)||m.tagNameCheck instanceof Function&&m.tagNameCheck(e))&&(m.attributeNameCheck instanceof RegExp&&C(m.attributeNameCheck,a)||m.attributeNameCheck instanceof Function&&m.attributeNameCheck(a))||a==="is"&&m.allowCustomizedBuiltInElements&&(m.tagNameCheck instanceof RegExp&&C(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o))))return!1}else if(!Ce[a]){if(!C(ne,we(o,X,""))){if(!((a==="src"||a==="xlink:href"||a==="href")&&e!=="script"&&hn(o,"data:")===0&&Ue[e])){if(!(De&&!C(ye,we(o,X,"")))){if(o)return!1}}}}}}return!0},yt=function(e){return e.indexOf("-")>0},bt=function(e){B("beforeSanitizeAttributes",e,null);const{attributes:a}=e;if(!a)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:h};let f=a.length;for(;f--;){const x=a[f],{name:A,namespaceURI:b,value:ee}=x,Ne=l(A);let S=A==="value"?ee:gn(ee);if(o.attrName=Ne,o.attrValue=S,o.keepAttr=!0,o.forceKeepAttr=void 0,B("uponSanitizeAttribute",e,o),S=o.attrValue,o.forceKeepAttr||(rt(A,e),!o.keepAttr))continue;if(!L&&C(/\/>/i,S)){rt(A,e);continue}$&&Ye([Ee,xe,Ae],Ct=>{S=we(S,Ct," ")});const St=l(e.nodeName);if(At(St,Ne,S)){if(je&&(Ne==="id"||Ne==="name")&&(rt(A,e),S=w+S),_&&typeof he=="object"&&typeof he.getAttributeType=="function"&&!b)switch(he.getAttributeType(St,Ne)){case"TrustedHTML":{S=_.createHTML(S);break}case"TrustedScriptURL":{S=_.createScriptURL(S);break}}try{b?e.setAttributeNS(b,A,S):e.setAttribute(A,S),Dt(s.removed)}catch{}}}B("afterSanitizeAttributes",e,null)},Xt=function r(e){let a=null;const o=Tt(e);for(B("beforeSanitizeShadowDOM",e,null);a=o.nextNode();)B("uponSanitizeShadowNode",a,null),!xt(a)&&(a.content instanceof D&&r(a.content),bt(a));B("afterSanitizeShadowDOM",e,null)};return s.sanitize=function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=null,o=null,f=null,x=null;if(le=!r,le&&(r="<!-->"),typeof r!="string"&&!Et(r))if(typeof r.toString=="function"){if(r=r.toString(),typeof r!="string")throw ke("dirty is not a string, aborting")}else throw ke("toString is not a function");if(!s.isSupported)return r;if(Me||at(e),s.removed=[],typeof r=="string"&&(k=!1),k){if(r.nodeName){const ee=l(r.nodeName);if(!p[ee]||q[ee])throw ke("root node is forbidden and cannot be sanitized in-place")}}else if(r instanceof te)a=_t("<!---->"),o=a.ownerDocument.importNode(r,!0),o.nodeType===1&&o.nodeName==="BODY"||o.nodeName==="HTML"?a=o:a.appendChild(o);else{if(!U&&!$&&!G&&r.indexOf("<")===-1)return _&&re?_.createHTML(r):r;if(a=_t(r),!a)return U?null:re?W:""}a&&Z&&J(a.firstChild);const A=Tt(k?r:a);for(;f=A.nextNode();)xt(f)||(f.content instanceof D&&Xt(f.content),bt(f));if(k)return r;if(U){if(oe)for(x=Je.call(a.ownerDocument);a.firstChild;)x.appendChild(a.firstChild);else x=a;return(h.shadowroot||h.shadowrootmode)&&(x=tt.call(d,x,!0)),x}let b=G?a.outerHTML:a.innerHTML;return G&&p["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&C(Wt,a.ownerDocument.doctype.name)&&(b="<!DOCTYPE "+a.ownerDocument.doctype.name+`>
`+b),$&&Ye([Ee,xe,Ae],ee=>{b=we(b,ee," ")}),_&&re?_.createHTML(b):b},s.setConfig=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};at(r),Me=!0},s.clearConfig=function(){E=null,Me=!1},s.isValidAttribute=function(r,e,a){E||at({});const o=l(r),f=l(e);return At(o,f,a)},s.addHook=function(r,e){typeof e=="function"&&(N[r]=N[r]||[],Le(N[r],e))},s.removeHook=function(r){if(N[r])return Dt(N[r])},s.removeHooks=function(r){N[r]&&(N[r]=[])},s.removeAllHooks=function(){N={}},s}Gt();function Mn(){var le,ce,Fe,v,Be;const[c,s]=T.useState(!0),[u,d]=T.useState(!0),[g,D]=T.useState(!1),[j,te]=T.useState(1),[fe,me]=T.useState(!0),[pe,qe]=T.useState(!0),[$e,he]=T.useState(!1),[V,Ze]=T.useState(!0),z=qt(t=>t.user.user),[Qe,ge]=T.useState(""),[_,W]=T.useState(!1),[_e,Te]=T.useState(!1),[Je,et]=T.useState(null),tt=$t(),[N,Ee]=T.useState("brand"),[xe,Ae]=T.useState(""),[pt,nt]=T.useState(""),{data:ye}=We(["brandsIdName",z.jwt],cn),{data:X}=We(["categoryIdName","",z.jwt,N,-1],un);console.log(X);const{data:ne}=We(["subCategoryIdName","",z.jwt,xe,-1],dn),p=(le=X==null?void 0:X.data)==null?void 0:le.map(t=>({label:t==null?void 0:t.category_label,value:t._id})),Ie=(ce=ne==null?void 0:ne.data)==null?void 0:ce.map(t=>({label:t==null?void 0:t.subcategory_name,value:t._id})),Oe=[...((Fe=ye==null?void 0:ye.data)==null?void 0:Fe.map(t=>({label:t==null?void 0:t.name,value:t.id})))||["loading"]].map(t=>({label:t==null?void 0:t.label,value:t==null?void 0:t.value})),m=[...p||[{label:"No Category",value:"no-category"}]].map(t=>({label:t==null?void 0:t.label,value:t==null?void 0:t.value})),{Column:q,HeaderCell:ae,Cell:P}=wt,be=t=>n.jsx(P,{...t,style:{padding:4}}),De=t=>n.jsx(ae,{...t,style:{padding:4},children:n.jsx("div",{className:"flex justify-center font-bold",children:t.children})}),L=({rowData:t,icon:l,dataKey:E,...K})=>{let F="";return l&&(F=l),n.jsx(P,{...K,children:n.jsx("p",{className:F?"flex justify-center items-center  font-mono font-bold":"flex justify-center items-center",children:E==="discount"?t[E]+" "+F:F+" "+t[E]})})},Z=[{key:"product_image",label:"Product Image",cellRenderer:({rowData:t,dataKey:l,...E})=>n.jsx(P,{...E,children:n.jsx("div",{className:"flex justify-center -mt-2",children:n.jsx(on,{className:"",src:(t==null?void 0:t.product_image)||"https://avatars.githubusercontent.com/u/12592949",alt:"P"})})}),width:90},{key:"name",label:"Name",cellRenderer:({rowData:t,...l})=>n.jsx(P,{...l,children:n.jsx("p",{className:"flex justify-center items-center",children:t.name})}),width:190},{key:"brand_name",label:"Brand Name",cellRenderer:t=>n.jsx(L,{...t,dataKey:"brand_name"}),width:150},{key:"category_name",label:"Category",cellRenderer:t=>n.jsx(L,{...t,dataKey:"category_name"}),width:150},{key:"subcategory_name",label:"Sub Category",cellRenderer:t=>n.jsx(L,{...t,dataKey:"subcategory_name"}),width:150},{key:"price",label:"Price",cellRenderer:t=>n.jsx(L,{...t,dataKey:"price",icon:"$"}),width:100},{key:"discount",label:"Discount",cellRenderer:t=>n.jsx(L,{...t,dataKey:"discount",icon:"%"}),width:100},{key:"after_discount",label:"After Discount",cellRenderer:t=>n.jsx(L,{...t,dataKey:"afterDiscount",icon:"$"}),width:150},{key:"min_purchease",label:"Min Purchase",cellRenderer:t=>n.jsx(L,{...t,dataKey:"min_purchease"}),width:100},{key:"max_purchease",label:"Max Purchase",cellRenderer:t=>n.jsx(L,{...t,dataKey:"max_purchease"}),width:100},{key:"actions",label:"Actions",cellRenderer:({rowData:t,...l})=>{const E=()=>{tt("/dashbord/product/edit",{state:{myData:t}})},K=()=>{Y(),et(t._id)};return n.jsx(P,{...l,children:n.jsxs("div",{className:"flex justify-center gap-3",children:[n.jsx("button",{className:"text-blue-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-indigo-500 rounded-lg",onClick:E,children:"Edit"}),n.jsx("button",{className:"text-red-500 border px-3 py-2 -mt-1 hover:text-white hover:bg-red-500 rounded-lg",onClick:K,children:"Delete"})]})})},width:200}],[U,oe]=T.useState(Z.map(t=>t.key)),re=Z.filter(t=>U.some(l=>l===t.key)),ve=c?be:P,je=c?De:ae,{data:w,status:Se,refetch:k,error:Q}=We(["products",j,z.jwt],rn,{cacheTime:0}),Y=()=>{Te(!0)},Pe=Nt(sn),Ue=()=>{Pe.mutate({id:Je,token:z.jwt},{onSuccess:t=>{kt.push(n.jsx(It,{type:"success",children:"Product deleted successfully"})),k()},onError:t=>{kt.push(n.jsx(It,{type:"error",children:"Product delete failed !"}))}}),Te(!1),k()},M=Nt(ln),Ce=t=>{ge(t),t===""&&(k(),W(!1))},He=()=>{W(!0),an.promise(M.mutateAsync({queryKey:["product_search",Qe,z.jwt]}),{loading:"Searching...",success:n.jsx("b",{children:"Product found!"}),error:n.jsx("b",{children:"Product not found in the database!"})})},se=_&&(M!=null&&M.data)?[...((v=M==null?void 0:M.data)==null?void 0:v.data)||[]]:(w==null?void 0:w.data)||[],ie=()=>{te(t=>{var l;return t<((l=w==null?void 0:w.meta)==null?void 0:l.total_pages)?t+1:t}),k()},I=()=>{te(t=>Math.max(t-1,1)),k()},H=()=>Te(!1);return n.jsxs("div",{children:[n.jsx(Zt,{}),n.jsxs(Ge,{open:_e,onClose:H,children:[n.jsx(Ge.Header,{className:"p-5",children:n.jsx(Ge.Title,{children:"Are you sure you want delete this product ?"})}),n.jsxs(Ge.Footer,{children:[n.jsx(Rt,{onClick:Ue,className:"bg-blue-500 w-20",appearance:"primary",children:"Confirm"}),n.jsx(Rt,{className:" bg-red-500 text-white",onClick:H,children:"Cancel"})]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"p-5",children:n.jsxs("div",{className:"flex gap-3 flex-col 2xl:flex-row 2xl:justify-between",children:[n.jsxs("div",{className:"",children:[n.jsx(Qt,{className:"h-12",data:Z,labelKey:"label",valueKey:"key",value:U,onChange:oe,cleanable:!1}),n.jsxs(ue,{className:"",icon:n.jsx(Jt,{}),children:[n.jsx(ue.Item,{children:n.jsxs("span",{className:"flex justify-between",children:[n.jsx("p",{children:"Compact："}),n.jsx(Re,{checkedChildren:"On",unCheckedChildren:"Off",checked:c,onChange:s})]})}),n.jsx(ue.Item,{children:n.jsxs("span",{className:"flex justify-between",children:[n.jsx("p",{children:"Bordered："}),n.jsx(Re,{checkedChildren:"On",unCheckedChildren:"Off",checked:u,onChange:d})]})}),n.jsx(ue.Item,{children:n.jsxs("span",{className:"flex justify-between",children:["Show Header：",n.jsx(Re,{checkedChildren:"On",unCheckedChildren:"Off",checked:fe,onChange:me})]})}),n.jsx(ue.Item,{children:n.jsxs("span",{className:"flex justify-between",children:["Hover：",n.jsx(Re,{checkedChildren:"On",unCheckedChildren:"Off",checked:V,onChange:Ze})]})}),n.jsx(ue.Item,{children:n.jsxs("span",{className:"flex justify-between",children:["Auto Height：",n.jsx(Re,{checkedChildren:"On",unCheckedChildren:"Off",checked:pe,onChange:qe})]})})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("div",{className:" ",children:n.jsxs(Lt,{children:[n.jsx(en,{placeholder:"Search by Product Name",onChange:t=>Ce(t)}),n.jsx(Lt.Button,{onClick:()=>He(),tabIndex:-1,children:n.jsx(tn,{className:"text-indigo-500 font-bold"})})]})}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx(st,{placeholder:"filter by brand",searchable:!0,size:"md",data:Oe,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,l)=>{Ee(t)}}),n.jsx(st,{placeholder:"filter by category",searchable:!0,size:"md",data:m,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,l)=>{Ae(t)}}),n.jsx(st,{placeholder:"filter by subcategory",searchable:!0,size:"md",data:Ie,className:"w-[12rem] 2xl:w-[14.5rem]",onChange:(t,l)=>{nt(t)}})]})]})]})}),n.jsxs("div",{className:"mt-5 ml-5",style:{height:pe?"auto":400},children:[n.jsx(wt,{loading:Se==="loading",height:300,hover:V,fillHeight:$e,showHeader:fe,autoHeight:pe,data:g?[]:se,bordered:u,cellBordered:u,headerHeight:c?40:30,rowHeight:c?56:30,children:re.map(t=>{const{key:l,label:E,cellRenderer:K,...F}=t;return T.createElement(q,{...F,key:l},n.jsx(je,{children:E}),K?nn.createElement(K,{dataKey:l}):n.jsx(ve,{dataKey:l}))})}),n.jsx("div",{className:"border-b",children:n.jsx("div",{className:"flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4",children:n.jsxs("div",{className:"lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200",children:[n.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[n.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M1.1665 4L4.49984 7.33333",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M1.1665 4.00002L4.49984 0.666687",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),n.jsx("p",{onClick:I,className:"text-sm ml-3 font-medium leading-none ",children:"Previous"})]}),n.jsx("div",{className:"sm:flex hidden",children:n.jsxs("p",{className:"text-sm font-bold leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2",children:["pages : ",j,"/",(Be=w==null?void 0:w.meta)==null?void 0:Be.total_pages]})}),n.jsxs("div",{className:"flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer",children:[n.jsx("p",{onClick:ie,className:"text-sm font-medium leading-none mr-3",children:"Next"}),n.jsxs("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.1665 4H12.8332",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9.5 7.33333L12.8333 4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M9.5 0.666687L12.8333 4.00002",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})})})]})]})]})}export{Mn as default};