const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-BWpfl9-U.js","assets/gsap-C8pce-KX.js","assets/Navbar-D2VDSpOR.js","assets/react-three-CpmzfqPx.js","assets/three-CK1TgFD4.js","assets/ScrollTrigger-D1XJUMov.js","assets/Navbar-wB6fHtnG.css","assets/index-BenEfMd9.js","assets/MainContainer-BRzUIBSp.js","assets/MainContainer-B8TDLkc-.css"])))=>i.map(i=>d[i]);
import{r as o,_ as q,j as e,c as Y}from"./react-three-CpmzfqPx.js";import"./three-CK1TgFD4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();var $={};function Z(r){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}Object.defineProperty($,"__esModule",{value:!0});var s=o;function J(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var h=J(s);Z(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Q=s.forwardRef(function({style:t={},className:i="",autoFill:c=!1,play:n=!0,pauseOnHover:a=!1,pauseOnClick:f=!1,direction:d="left",speed:x=50,delay:l=0,loop:m=0,gradient:E=!1,gradientColor:N="white",gradientWidth:y=200,onFinish:z,onCycleComplete:k,onMount:P,children:_},G){const[S,W]=s.useState(0),[b,X]=s.useState(0),[M,C]=s.useState(1),[L,B]=s.useState(!1),F=s.useRef(null),v=G||F,j=s.useRef(null),w=s.useCallback(()=>{if(j.current&&v.current){const u=v.current.getBoundingClientRect(),I=j.current.getBoundingClientRect();let p=u.width,g=I.width;(d==="up"||d==="down")&&(p=u.height,g=I.height),C(c&&p&&g&&g<p?Math.ceil(p/g):1),W(p),X(g)}},[c,v,d]);s.useEffect(()=>{if(L&&(w(),j.current&&v.current)){const u=new ResizeObserver(()=>w());return u.observe(v.current),u.observe(j.current),()=>{u&&u.disconnect()}}},[w,v,L]),s.useEffect(()=>{w()},[w,_]),s.useEffect(()=>{B(!0)},[]),s.useEffect(()=>{typeof P=="function"&&P()},[]);const A=s.useMemo(()=>c?b*M/x:b<S?S/x:b/x,[c,S,b,M,x]),V=s.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!n||a?"paused":"running","--pause-on-click":!n||a&&!f||f?"paused":"running","--width":d==="up"||d==="down"?"100vh":"100%","--transform":d==="up"?"rotate(-90deg)":d==="down"?"rotate(90deg)":"none"}),[t,n,a,f,d]),K=s.useMemo(()=>({"--gradient-color":N,"--gradient-width":typeof y=="number"?`${y}px`:y}),[N,y]),O=s.useMemo(()=>({"--play":n?"running":"paused","--direction":d==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${l}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":c?"auto":"100%"}),[n,d,A,l,m,c]),R=s.useMemo(()=>({"--transform":d==="up"?"rotate(90deg)":d==="down"?"rotate(-90deg)":"none"}),[d]),T=s.useCallback(u=>[...Array(Number.isFinite(u)&&u>=0?u:0)].map((I,p)=>h.default.createElement(s.Fragment,{key:p},s.Children.map(_,g=>h.default.createElement("div",{style:R,className:"rfm-child"},g)))),[R,_]);return L?h.default.createElement("div",{ref:v,style:V,className:"rfm-marquee-container "+i},E&&h.default.createElement("div",{style:K,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:O,onAnimationIteration:k,onAnimationEnd:z},h.default.createElement("div",{className:"rfm-initial-child-container",ref:j},s.Children.map(_,u=>h.default.createElement("div",{style:R,className:"rfm-child"},u))),T(M-1)),h.default.createElement("div",{className:"rfm-marquee",style:O},T(M))):null});var U=$.default=Q;const H=({percent:r})=>{const{setIsLoading:t}=te(),[i,c]=o.useState(!1),[n,a]=o.useState(!1),[f,d]=o.useState(!1);o.useEffect(()=>{if(r>=100&&!i){const l=setTimeout(()=>{c(!0)},600);return()=>clearTimeout(l)}},[r,i]),o.useEffect(()=>{if(i&&!n){const l=setTimeout(()=>{a(!0)},1e3);return()=>clearTimeout(l)}},[i,n]),o.useEffect(()=>{n&&q(()=>import("./initialFX-BWpfl9-U.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(l=>{d(!0),setTimeout(()=>{l.initialFX&&l.initialFX(),t(!1)},900)})},[n,t]);function x(l){const{currentTarget:m}=l,E=m.getBoundingClientRect(),N=l.clientX-E.left,y=l.clientY-E.top;m.style.setProperty("--mouse-x",`${N}px`),m.style.setProperty("--mouse-y",`${y}px`)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"loading-header",children:[e.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"DK"}),e.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:e.jsxs("div",{className:"loaderGame-container",children:[e.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((l,m)=>e.jsx("div",{className:"loaderGame-line"},m))}),e.jsx("div",{className:"loaderGame-ball"})]})})]}),e.jsxs("div",{className:"loading-screen",children:[e.jsx("div",{className:"loading-marquee",children:e.jsxs(U,{children:[e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"}),e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"})]})}),e.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:l=>x(l),children:[e.jsx("div",{className:"loading-hover"}),e.jsxs("div",{className:`loading-button ${i&&"loading-complete"}`,children:[e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-content",children:e.jsxs("div",{className:"loading-content-in",children:["Loading ",e.jsxs("span",{children:[r,"%"]})]})}),e.jsx("div",{className:"loading-box"})]}),e.jsx("div",{className:"loading-content2",children:e.jsx("span",{children:"Welcome"})})]})]})]})]})},oe=r=>{let t=0,i=setInterval(()=>{if(t<=50){let a=Math.round(Math.random()*5);t=t+a,r(t)}else clearInterval(i),i=setInterval(()=>{t=t+Math.round(Math.random()),r(t),t>91&&clearInterval(i)},2e3)},100);function c(){clearInterval(i),r(100)}function n(){return new Promise(a=>{clearInterval(i),i=setInterval(()=>{t<100?(t++,r(t)):(a(t),clearInterval(i))},2)})}return{loaded:n,percent:t,clear:c}},D=o.createContext(null),ee=({children:r})=>{const[t,i]=o.useState(!0),[c,n]=o.useState(0),a=o.useMemo(()=>({isLoading:t,setIsLoading:i,setLoading:n}),[t]);return e.jsxs(D.Provider,{value:a,children:[t&&e.jsx(H,{percent:c}),e.jsx("main",{className:"main-body",children:r})]})},te=()=>{const r=o.useContext(D);if(!r)throw new Error("useLoading must be used within a LoadingProvider");return r},ne=o.lazy(()=>q(()=>import("./index-BenEfMd9.js"),__vite__mapDeps([7,3,4,1,5]))),re=o.lazy(()=>q(()=>import("./MainContainer-BRzUIBSp.js").then(r=>r.M),__vite__mapDeps([8,3,4,2,5,1,6,9]))),ae=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{children:e.jsx(o.Suspense,{children:e.jsx(re,{children:e.jsx(o.Suspense,{children:e.jsx(ne,{})})})})})});Y(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(ae,{})}));export{oe as s,te as u};
