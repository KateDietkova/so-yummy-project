"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{243:function(n,e,t){t.d(e,{U:function(){return m}});var r,o,i,c,s,a=t(168),l=t(4313),u=l.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n"]))),d=l.ZP.h1(o||(o=(0,a.Z)(["\n  margin-top: 35px;\n  padding-bottom: 72px;\n  font-family: PoppinsSemiBold;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 54px;\n    padding-bottom: 100px;\n    font-size: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-top: 84px;\n    font-size: 44px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),p=l.ZP.span(i||(i=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: -27px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -32px;\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: -47px;\n    left: 228px;\n  }\n"])),(function(n){return n.theme.colors.accent})),f=l.ZP.span(c||(c=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  left: 231px;\n  top: 27px;\n  width: 6px;\n  height: 6px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: 19px;\n    left: 405px;\n    width: 12px;\n    height: 12px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 36px;\n    left: 707px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),h=l.ZP.span(s||(s=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: 0px;\n  left: 333px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -38px;\n    left: 694px;\n    width: 14px;\n    height: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 34px;\n    left: 1150px;\n  }\n"])),(function(n){return n.theme.colors.accent})),x=t(184),m=function(n){var e=n.text;return(0,x.jsxs)(u,{children:[(0,x.jsx)(p,{}),(0,x.jsx)(f,{}),(0,x.jsx)(h,{}),(0,x.jsx)(d,{children:e})]})}},1533:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r=t(3241),o=t(243),i=t(1413),c=t(2791),s="undefined"!==typeof window?c.useLayoutEffect:c.useEffect;function a(n,e){var t,r,o,i,a=void 0===e?{}:e,l=a.decayRate,u=void 0===l?.95:l,d=a.safeDisplacement,p=void 0===d?10:d,f=a.applyRubberBandEffect,h=void 0!==f&&f,x=a.activeMouseButton,m=void 0===x?"Left":x,g=a.isMounted,w=void 0===g||g,v=(0,c.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),b=!1,M=!1,y=0,X=0,Y=1/60*1e3;s((function(){w&&(b="scroll"===window.getComputedStyle(n.current).overflowX,M="scroll"===window.getComputedStyle(n.current).overflowY,y=n.current.scrollWidth-n.current.clientWidth,X=n.current.scrollHeight-n.current.clientHeight,t=window.getComputedStyle(n.current).cursor,r=[],o=[],i=[],n.current.childNodes.forEach((function(n){r.push(window.getComputedStyle(n).cursor),o.push("none"===window.getComputedStyle(n).transform?"":window.getComputedStyle(n).transform),i.push("none"===window.getComputedStyle(n).transition?"":window.getComputedStyle(n).transition)})))}),[w]);var Z,S,k,E=function(){var e=v.current.scrollSpeedX*Y,t=v.current.scrollSpeedY*Y,r=n.current.scrollLeft+e,o=n.current.scrollTop+t;n.current.scrollLeft=r,n.current.scrollTop=o,v.current.lastScrollX=r,v.current.lastScrollY=o},j=function(){n.current.childNodes.forEach((function(n,e){n.style.transform=o[e],n.style.transition=i[e]}))},D=function(n){n.preventDefault(),n.stopImmediatePropagation()},L=function(e){var o=v.current.isDraggingX||v.current.isDraggingY,i=v.current.initialMouseX-e.clientX,c=v.current.initialMouseY-e.clientY,s=Math.abs(i)>p||Math.abs(c)>p,a=o&&s;a?n.current.childNodes.forEach((function(n){n.addEventListener("click",D)})):n.current.childNodes.forEach((function(n){n.removeEventListener("click",D)})),v.current.isMouseDown=!1,v.current.lastMouseX=0,v.current.lastMouseY=0,n.current.style.cursor=t,n.current.childNodes.forEach((function(n,e){n.style.cursor=r[e]})),a&&(S=setInterval((function(){var e=v.current.scrollSpeedX*u;v.current.scrollSpeedX=e;var t=n.current.scrollLeft<=0,r=n.current.scrollLeft>=y,o=t||r;E(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedX=0,clearInterval(S))}),Y),k=setInterval((function(){var e=v.current.scrollSpeedY*u;v.current.scrollSpeedY=e;var t=n.current.scrollTop<=0,r=n.current.scrollTop>=X,o=t||r;E(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedY=0,clearInterval(k))}),Y),v.current.isDraggingX=!1,v.current.isDraggingY=!1,h&&(n.current.childNodes.forEach((function(n){n.style.transform="translate3d(0px, 0px, 0px)",n.style.transition="transform 250ms"})),Z=setTimeout(j,250)))},P=function(e){if(v.current.isMouseDown){e.preventDefault();var t=v.current.lastMouseX-e.clientX;v.current.lastMouseX=e.clientX,v.current.scrollSpeedX=t/Y,v.current.isDraggingX=!0;var r=v.current.lastMouseY-e.clientY;v.current.lastMouseY=e.clientY,v.current.scrollSpeedY=r/Y,v.current.isDraggingY=!0,n.current.style.cursor="grabbing",n.current.childNodes.forEach((function(n){n.style.cursor="grabbing"}));var o=n.current.scrollLeft<=0&&b,i=n.current.scrollLeft>=y&&b,c=n.current.scrollTop<=0&&M,s=n.current.scrollTop>=X&&M;(o||i||c||s)&&h&&function(e){var t=e.clientX-v.current.initialMouseX,r=e.clientY-v.current.initialMouseY,o=n.current,i=o.clientWidth,c=o.clientHeight,s=0,a=0;b&&M?(s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i),a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)):b?s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i):M&&(a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)),n.current.childNodes.forEach((function(n){n.style.transform="translate3d("+s+"px, "+a+"px, 0px)",n.style.transition="transform 0ms"}))}(e),E()}},C=function(){y=n.current.scrollWidth-n.current.clientWidth,X=n.current.scrollHeight-n.current.clientHeight};return(0,c.useEffect)((function(){return w&&(window.addEventListener("mouseup",L),window.addEventListener("mousemove",P),window.addEventListener("resize",C)),function(){window.removeEventListener("mouseup",L),window.removeEventListener("mousemove",P),window.removeEventListener("resize",C),clearInterval(S),clearInterval(k),clearTimeout(Z)}}),[w]),{events:{onMouseDown:function(n){var e;e=n.buttons,("Left"===m&&1===e||"Middle"===m&&4===e||"Right"===m&&2===e)&&(v.current.isMouseDown=!0,v.current.lastMouseX=n.clientX,v.current.lastMouseY=n.clientY,v.current.initialMouseX=n.clientX,v.current.initialMouseY=n.clientY)}}}}var l,u,d,p,f,h,x,m,g=t(168),w=t(4313),v=t(1087),b=w.ZP.ul(l||(l=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  margin-bottom: 32px;\n  padding: 0 29px;\n  gap: 28px;\n  border-bottom: ",";\n  border-color: #e0e0e0;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 55px;\n    margin-bottom: 50px;\n    padding: 0 30px;\n    border-width: 1px;\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n"])),(function(n){return n.theme.borders.normal})),M=(0,w.ZP)(v.OL)(u||(u=(0,g.Z)(["\n  text-decoration: none;\n  position: relative;\n  display: block;\n  padding: 10px 0 32px;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1;\n  color: #e0e0e0;\n  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n  &::after {\n    position: absolute;\n    content: '';\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background-color: transparent;\n  }\n  &.active {\n    color: ",";\n    &::after {\n      background-color: ",";\n    }\n  }\n  &.active {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    padding-bottom: 28px;\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),y=function(n){return n.categories},X=function(n){return n.categories.recipesByCategory},Y=t(9434),Z=t(4994),S=t(184),k=function(){var n=(0,Y.v9)(y).categories,e=(0,Y.I0)();(0,c.useEffect)((function(){e((0,Z.b)())}),[e]);var t=(0,c.useRef)(),r=a(t).events;return(0,S.jsx)(b,(0,i.Z)((0,i.Z)({},r),{},{ref:t,children:n.length>0&&n.map((function(n){return(0,S.jsx)(M,{to:"/categories/".concat(n.toLowerCase()),children:n},n)}))}))},E=t(7689),j=w.ZP.ul(d||(d=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),D=w.ZP.li(p||(p=(0,g.Z)(["\n  overflow: hidden;\n  border-radius: 8px;\n  padding: 0;\n"]))),L=w.ZP.div(f||(f=(0,g.Z)(["\n  position: relative;\n"]))),P=w.ZP.div(h||(h=(0,g.Z)(["\n  position: absolute;\n  left: 18px;\n  bottom: 24px;\n  padding: 16px;\n  width: 307px;\n  background: #ffffff;\n  color: #3e4462;\n  border-radius: 8px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    left: 16px;\n    width: 300px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 268px;\n  }\n  p {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.25;\n    letter-spacing: -0.24px;\n    text-align: left;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m})),C=w.ZP.img(x||(x=(0,g.Z)(["\n  width: 343px;\n  height: 323px;\n  object-fit: cover;\n  transition: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 299px;\n    gap: 14px;\n  }\n"])),(function(n){return n.theme.effects.mainEffect})),T=(0,w.ZP)(v.OL)(m||(m=(0,g.Z)(["\n  text-decoration: none;\n"]))),z=function(n){var e=n.recipes;return(0,S.jsx)(j,{children:e&&e.map((function(n){var e=n._id,t=n.title,r=n.thumb;return(0,S.jsx)(D,{children:(0,S.jsx)(T,{to:"/recipe/".concat(e),children:(0,S.jsxs)(L,{children:[(0,S.jsx)(P,{children:(0,S.jsx)("p",{children:t})}),(0,S.jsx)(C,{src:r,alt:t})]})})},e)}))})},W=function(){var n=(0,Y.v9)(X),e=(0,Y.I0)(),t=(0,E.UO)().categoryName;return(0,c.useEffect)((function(){e((0,Z.H)(t))}),[e,t]),(0,S.jsx)(S.Fragment,{children:n.length>0&&(0,S.jsx)(z,{recipes:n})})},I=function(){return(0,S.jsxs)(r.W,{children:[(0,S.jsx)(o.U,{text:"Categories"}),(0,S.jsx)(k,{}),(0,S.jsx)(W,{})]})}}}]);
//# sourceMappingURL=7.5883c7c1.chunk.js.map