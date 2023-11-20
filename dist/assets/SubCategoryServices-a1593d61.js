import{a0 as a,g as n}from"./index-53bfec98.js";async function y(e){const r={"Cache-Control":"no-cache",Authorization:`Bearer ${e.queryKey[2]}`};try{const s=await a.get(n.endpoints.host+`/get/all/subcat/${e.queryKey[3]}?limit=${e.queryKey[4]||8}&page=${e.queryKey[1]}`,{headers:r});if(s.status===404)throw new Error("sub category not found");return s.data}catch(s){throw s.response&&s.response.status===404?new Error("sub category not found"):s}}async function u(e){let r;const s={"Cache-Control":"no-cache",Authorization:`Bearer ${e.queryKey[2]}`};e.queryKey[4]?r=n.endpoints.host+`/get/all/subcat/${e.queryKey[3]}?limit=8&page=${e.queryKey[1]}&search=${e.queryKey[4]}`:r=n.endpoints.host+`/get/all/subcat/${e.queryKey[3]}?limit=8&page=${e.queryKey[1]}`;try{return(await a.get(r,{headers:s})).data}catch(o){throw console.error("Error fetching category:",o.response?o.response.data:o.message),o}}async function p({data:e,token:r,id:s}){try{const o={Authorization:`Bearer ${r}`,"Content-Type":"application/json"};return await a.post(n.endpoints.host+`/create/subcategory/${s}`,e,{headers:o})}catch(o){throw o.response?console.error("Server Error:",o.response.data):o.request?console.error("No response received from the server."):console.error("Error:",o.message),o}}async function h(e){try{const r={Authorization:`Bearer ${e==null?void 0:e.token}`,"Content-Type":"application/json"};return(await a.delete(n.endpoints.host+`/subcategory/${e.category_id}/${e.subcategory_id}`,{headers:r})).data}catch(r){throw r.response?console.error("Server Error:",r.response.data):r.request?console.error("No response received from the server."):console.error("Error:",r.message),r}}async function l({data:e,token:r,cat_id:s,sub_cat_id:o}){try{const t={Authorization:`Bearer ${r}`,"Content-Type":"application/json"},c=await a.patch(n.endpoints.host+`/subcategory/${s}/${o}`,e,{headers:t});if(c.status!==200)throw new Error("Error updating category");return c.data}catch(t){throw t.response?console.error("Server Error:",t.response.data):t.request?console.error("No response received from the server."):console.error("Error:",t.message),t}}export{p as C,h as D,l as U,u as a,y as g};
