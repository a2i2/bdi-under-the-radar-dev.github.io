import{z as o}from"./index.a00d700c.js";function m(i){const n=o({}),c=o({});return{getFn:e=>n[e],cacheFn:async(e,f,r=!1)=>{const s=c[e];if(s)if(r)await s;else return s;let t=n[e];if(!t||r){const a=i(e,f);c[e]=a;try{t=await a,n[e]=t}finally{delete c[e]}}return t}}}export{m as u};
