import{d as x,u as f,e as a,c as d,b as c,g as t,t as b,h as S,f as k,o as p,A as y,p as w,a as v,i as E,_ as z,m as B,k as P}from"./index.201fb880.js";const W="/assets/error-404.dbedda7c.svg",C="/assets/error-generic.5b6be1b1.svg",h=o=>(w("data-v-62674943"),o=o(),v(),o),I={class:"error-page"},V={class:"ep-container"},H=["src","alt"],A={class:"ep-text-box"},N=h(()=>c("h2",null,"Oops!",-1)),F=h(()=>c("p",null,"Something went wrong!",-1)),L={key:0},O=x({__name:"ErrorPage",props:{error:null},setup(o){const u=o;E(e=>({"2ca4a018":t(g).layout,"19a41fbc":t(g).alignContent,"3f0aecdf":t(m),"160b763f":t(_),"8842aba4":t(i).fontSize,45703565:t(i).fontWeight,"527817f9":t(i).lineHeight,ec563754:t(l).fontSize,"6ec0858d":t(l).fontWeight,"7bc86821":t(l).lineHeight}));const s=f(),n=a(()=>{let e={src:C,alt:"An Error Occurred",text:""};switch(u.error){case"404":e.src=W,e.alt="Page not found",e.text="I can't seem to find the page you were looking for";break}return e}),_=a(()=>{switch(s.breakpoint){case"mobile":return"80%";case"small":return"300px";case"xl":return"480px";case"xxl":return"580px"}throw new Error(`Unknown breakpoint: ${s.breakpoint}`)}),m=a(()=>s.breakpoint==="mobile"?"30%":_.value),g=a(()=>{let e='"image text"',r="center";return s.breakpoint==="mobile"&&(e='"image" "text"',r="start"),{layout:e,alignContent:r}}),i=a(()=>{let e="48px",r="54px";switch(s.textSize){case"medium":e="64px",r="72px";break;case"large":e="96px",r="108px";break}return{fontSize:e,lineHeight:r,fontWeight:700}}),l=a(()=>{let e="28px",r="32px";switch(s.textSize){case"medium":e="36px",r="42px";break;case"large":e="41px",r="48px";break}return{fontSize:e,lineHeight:r,fontWeight:400}});return(e,r)=>(p(),d("article",I,[c("div",V,[c("img",{class:"ep-image",src:t(n).src,alt:t(n).alt,draggable:"false"},null,8,H),c("div",A,[N,F,t(n).text?(p(),d("p",L,b(t(n).text),1)):S("",!0),k(y,{label:"Return to home",icon:"home",link:"/"})])])]))}});const $=z(O,[["__scopeId","data-v-62674943"]]),G=x({__name:"ErrorView",props:{error:null},setup(o){return B().setPageTitle(""),(s,n)=>(p(),P($,{error:o.error},null,8,["error"]))}});export{G as default};
