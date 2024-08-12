import{f as m,u as S,h as s,c as x,e as a,k as t,l as u,m as b,v as f,j as y,o as i,A as h,n as v,_ as w,y as E}from"./index.941b8afc.js";const z="/assets/error-401.24a7967e.svg",B="/assets/error-404.dbedda7c.svg",H="/assets/error-generic.5b6be1b1.svg",L={class:"error-page"},P={class:"ep-container"},W=["src","alt"],C={class:"ep-text-box"},V={key:0},A={class:"ep-button-row"},I=m({__name:"ErrorPage",props:{error:null},setup(c){const p=c;v(e=>({"5e66077e":t(_).layout,"0f80c98b":t(_).alignContent,"4f11dbc8":t(k),71668636:t(d),"6e95a4e5":t(l).fontSize,"26535e5c":t(l).fontWeight,"335b40f0":t(l).lineHeight,"4d8836bf":t(g).fontSize,"12e8e1b6":t(g).fontWeight,"1ff0c44a":t(g).lineHeight}));const n=S(),o=s(()=>{let e={heading:"Oops!",subHeading:"Something went wrong!",src:H,alt:"An Error Occurred",text:"",loginLink:!1};switch(p.error){case"401":e.src=z,e.alt="Login Required",e.subHeading="You need to log in to access this page.",e.loginLink=!0;break;case"404":e.src=B,e.alt="Page not found",e.text="I can't seem to find the page you were looking for";break}return e}),d=s(()=>{switch(n.breakpoint){case"mobile":return"80%";case"small":return"300px";case"xl":return"480px";case"xxl":return"580px"}throw new Error(`Unknown breakpoint: ${n.breakpoint}`)}),k=s(()=>n.breakpoint==="mobile"?"30%":d.value),_=s(()=>{let e='"image text"',r="center";return n.breakpoint==="mobile"&&(e='"image" "text"',r="start"),{layout:e,alignContent:r}}),l=s(()=>{let e="48px",r="54px";switch(n.textSize){case"medium":e="64px",r="72px";break;case"large":e="96px",r="108px";break}return{fontSize:e,lineHeight:r,fontWeight:700}}),g=s(()=>{let e="28px",r="32px";switch(n.textSize){case"medium":e="36px",r="42px";break;case"large":e="41px",r="48px";break}return{fontSize:e,lineHeight:r,fontWeight:400}});return(e,r)=>(i(),x("article",L,[a("div",P,[a("img",{class:"ep-image",src:t(o).src,alt:t(o).alt,draggable:"false"},null,8,W),a("div",C,[a("h2",null,u(t(o).heading),1),a("p",null,u(t(o).subHeading),1),t(o).text?(i(),x("p",V,u(t(o).text),1)):b("",!0),a("div",A,[t(o).loginLink?(i(),f(h,{key:0,label:"Log In",icon:"lock",link:"/login"})):b("",!0),y(h,{label:"Return to home",icon:"home",link:"/"})])])])]))}});const N=w(I,[["__scopeId","data-v-cd760e25"]]),O=m({__name:"ErrorView",props:{error:null},setup(c){return E().setPageTitle(""),(n,o)=>(i(),f(N,{error:c.error},null,8,["error"]))}});export{O as default};
