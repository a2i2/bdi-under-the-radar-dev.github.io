import{z as u,B as f}from"./index.512d7c78.js";function p(c){const n=u({}),t=u({});return{getFn:e=>n[e],cacheFn:async(e,l,o=!1)=>{const s=t[e];if(s)if(o)await s;else return s;let a=n[e];if(!a||o){const i=c(e,l);t[e]=i;try{a=await i,n[e]=a}finally{delete t[e]}}return a}}}function m(){const c=f();async function n(){let t;try{t=await c.getAccessTokenSilently()}catch(r){console.warn("Failed to get access token",r)}return t||(await c.logout(),await c.loginWithRedirect({appState:{target:"/user-home"}})),t}return{...c,getAccessTokenOrRedirect:n}}export{p as a,m as u};
