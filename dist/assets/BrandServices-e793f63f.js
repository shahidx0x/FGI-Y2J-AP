import{a0 as s,g as n}from"./index-53bfec98.js";async function i(r){const o={"Cache-Control":"no-cache",Authorization:`Bearer ${r.queryKey[2]}`};try{return await s.get(n.endpoints.brands+`?limit=8&page=${r.queryKey[1]}`,{headers:o})}catch(e){throw console.error("Error fetching users:",e.response?e.response.data:e.message),e}}async function p(r){const o={"Cache-Control":"no-cache",Authorization:`Bearer ${r.queryKey[2]}`};try{return(await s.get(n.endpoints.brand_search+`?brandName=${r.queryKey[1]}`,{headers:o})).data}catch(e){throw console.error("Error fetching users:",e.response?e.response.data:e.message),e}}async function h(r){const o={"Cache-Control":"no-cache",Authorization:`Bearer ${r.queryKey[1]}`};try{return(await s.get(n.endpoints.get_all_brand_id_and_name,{headers:o})).data}catch(e){throw console.error("Error fetching users:",e.response?e.response.data:e.message),e}}async function d({data:r,token:o}){try{const e={Authorization:`Bearer ${o}`,"Content-Type":"application/json"};return await s.post(n.endpoints.brand_create,r,{headers:e})}catch(e){throw e.response?console.error("Server Error:",e.response.data):e.request?console.error("No response received from the server."):console.error("Error:",e.message),e}}async function u(r){try{const o={Authorization:`Bearer ${r==null?void 0:r.token}`,"Content-Type":"application/json"};return await s.delete(n.endpoints.host+`/delete/brands/by/${r==null?void 0:r.deleteId}`,{headers:o})}catch(o){throw o.response?console.error("Server Error:",o.response.data):o.request?console.error("No response received from the server."):console.error("Error:",o.message),o}}async function l({data:r,token:o,id:e}){const t={Authorization:`Bearer ${o}`,"Content-Type":"application/json"},a=await s.patch(n.endpoints.host+`/update/brands/by/${e}`,r,{headers:t});if(a.status!==200)throw new Error("Error updating user");return a.data}export{i as a,p as b,d as c,u as d,h as g,l as u};
