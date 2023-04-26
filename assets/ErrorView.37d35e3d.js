import{d as m,u as f,e as a,c as b,b as c,g as t,t as S,h as k,f as v,A as y,o as g,p as w,a as E,i as z,_ as B,m as C,k as P,s as W}from"./index.99933a87.js";const H="/assets/error-404.dbedda7c.svg",I="/assets/error-generic.5b6be1b1.svg",h=r=>(w("data-v-2bb73b18"),r=r(),E(),r),V={class:"error-page"},$={class:"ep-container"},A=["src","alt"],N={class:"ep-text-box"},F=h(()=>c("h2",null,"Oops!",-1)),L=h(()=>c("p",null,"Something went wrong!",-1)),O={key:0},R=m({__name:"ErrorPage",props:{error:null},emits:["home"],setup(r,{emit:l}){const p=r;z(e=>({"0bf66ec4":t(x).layout,"3b59c7b0":t(x).alignContent,"00851c36":t(_),56113879:t(i),cd974e30:t(u).fontSize,"24151d9f":t(u).fontWeight,"311d0033":t(u).lineHeight,"17dd1348":t(d).fontSize,"3c20ae13":t(d).fontWeight,"492890a7":t(d).lineHeight}));const s=f(),n=a(()=>{let e={src:I,alt:"An Error Occurred",text:""};switch(p.error){case"404":e.src=H,e.alt="Page not found",e.text="I can't seem to find the page you were looking for";break}return e}),i=a(()=>{switch(s.breakpoint){case"mobile":return"80%";case"small":return"300px";case"xl":return"480px";case"xxl":return"580px"}throw new Error(`Unknown breakpoint: ${s.breakpoint}`)}),_=a(()=>s.breakpoint==="mobile"?"30%":i.value),x=a(()=>{let e='"image text"',o="center";return s.breakpoint==="mobile"&&(e='"image" "text"',o="start"),{layout:e,alignContent:o}}),u=a(()=>{let e="48px",o="54px";switch(s.textSize){case"medium":e="64px",o="72px";break;case"large":e="96px",o="108px";break}return{fontSize:e,lineHeight:o,fontWeight:700}}),d=a(()=>{let e="28px",o="32px";switch(s.textSize){case"medium":e="36px",o="42px";break;case"large":e="41px",o="48px";break}return{fontSize:e,lineHeight:o,fontWeight:400}});return(e,o)=>(g(),b("article",V,[c("div",$,[c("img",{class:"ep-image",src:t(n).src,alt:t(n).alt,draggable:"false"},null,8,A),c("div",N,[F,L,t(n).text?(g(),b("p",O,S(t(n).text),1)):k("",!0),v(y,{label:"Return to home",icon:"home",onClick:o[0]||(o[0]=D=>l("home"))})])])]))}});const T=B(R,[["__scopeId","data-v-2bb73b18"]]),U=m({__name:"ErrorView",props:{error:null},setup(r){const l=W();function p(n){l.push(n)}return C().setPageTitle(""),(n,i)=>(g(),P(T,{error:r.error,onHome:i[0]||(i[0]=_=>p("/"))},null,8,["error"]))}});export{U as default};