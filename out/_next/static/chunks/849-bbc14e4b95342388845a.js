(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{2167:function(e,a,s){"use strict";var r=s(3848);a.default=void 0;var t,n=(t=s(7294))&&t.__esModule?t:{default:t},l=s(1063),i=s(4651),c=s(7426);var o={};function d(e,a,s,r){if(e&&l.isLocalURL(a)){e.prefetch(a,s,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[a+"%"+s+(t?"%"+t:"")]=!0}}var h=function(e){var a,s=!1!==e.prefetch,t=i.useRouter(),h=n.default.useMemo((function(){var a=l.resolveHref(t,e.href,!0),s=r(a,2),n=s[0],i=s[1];return{href:n,as:e.as?l.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),x=h.href,f=h.as,u=e.children,m=e.replace,p=e.shallow,g=e.scroll,j=e.locale;"string"===typeof u&&(u=n.default.createElement("a",null,u));var v=(a=n.default.Children.only(u))&&"object"===typeof a&&a.ref,y=c.useIntersection({rootMargin:"200px"}),N=r(y,2),b=N[0],w=N[1],k=n.default.useCallback((function(e){b(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,b]);n.default.useEffect((function(){var e=w&&s&&l.isLocalURL(x),a="undefined"!==typeof j?j:t&&t.locale,r=o[x+"%"+f+(a?"%"+a:"")];e&&!r&&d(t,x,f,{locale:a})}),[f,x,w,j,s,t]);var M={ref:k,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,s,r,t,n,i,c){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(s))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),a[t?"replace":"push"](s,r,{shallow:n,locale:c,scroll:i}))}(e,t,x,f,m,p,g,j)},onMouseEnter:function(e){l.isLocalURL(x)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(t,x,f,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var L="undefined"!==typeof j?j:t&&t.locale,C=t&&t.isLocaleDomain&&l.getDomainLocale(f,L,t&&t.locales,t&&t.domainLocales);M.href=C||l.addBasePath(l.addLocale(f,L,t&&t.defaultLocale))}return n.default.cloneElement(a,M)};a.default=h},7426:function(e,a,s){"use strict";var r=s(3848);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,s=e.disabled||!l,c=t.useRef(),o=t.useState(!1),d=r(o,2),h=d[0],x=d[1],f=t.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||h||e&&e.tagName&&(c.current=function(e,a,s){var r=function(e){var a=e.rootMargin||"",s=i.get(a);if(s)return s;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var a=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;a&&s&&a(s)}))}),e);return i.set(a,s={id:a,observer:t,elements:r}),s}(s),t=r.id,n=r.observer,l=r.elements;return l.set(e,a),n.observe(e),function(){l.delete(e),n.unobserve(e),0===l.size&&(n.disconnect(),i.delete(t))}}(e,(function(e){return e&&x(e)}),{rootMargin:a}))}),[s,a,h]);return t.useEffect((function(){if(!l&&!h){var e=n.requestIdleCallback((function(){return x(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[h]),[f,h]};var t=s(7294),n=s(3447),l="undefined"!==typeof IntersectionObserver;var i=new Map},849:function(e,a,s){"use strict";s.d(a,{Z:function(){return i}});s(7294);var r=s(5893);var t=function(){return(0,r.jsx)("header",{className:"navbar white bg-cover bg-center bg-no-repeat",style:{backgroundColor:"#000000"},children:(0,r.jsx)("div",{className:"relative mx-auto container",children:(0,r.jsxs)("nav",{className:"flex justify-between text-white ",children:[(0,r.jsxs)("div",{className:"px-5 xl:px-12 py-6 flex w-full items-center ",children:[(0,r.jsx)("a",{className:"text-3xl font-bold font-heading",href:"/",children:(0,r.jsx)("img",{src:"/images/sando-logo.png",alt:"sando logo image"})}),(0,r.jsxs)("ul",{className:"hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/sale",children:"Tokensale"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/buy",children:"Buy"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/staking",children:"Staking"})})]}),(0,r.jsx)("div",{className:"flex flex-col md:flex-row mt-5 md:mt-0 items-end md:items-center md:justify-end",children:(0,r.jsx)("button",{type:"submit",className:"block px-4 text-sm text-white font-medium rounded-md py-2 disabled:bg-none btn-connect",children:"Connect Wallet"})})]}),(0,r.jsxs)("a",{className:"xl:hidden flex mr-6 items-center",href:"/",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hover:text-gray-200",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),(0,r.jsxs)("span",{className:"flex absolute -mt-5 ml-4",children:[(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-pink-500"})]})]}),(0,r.jsx)("a",{className:"navbar-burger self-center mr-12 xl:hidden",href:"/",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hover:text-gray-200",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})})})},n=s(1664),l=function(){return(0,r.jsx)("footer",{className:"bg-cover bg-no-repeat bg-black",children:(0,r.jsxs)("div",{className:"relative mx-auto container pb-5",children:[(0,r.jsxs)("div",{className:"grid grid-rows-2 mx-10 pt-10 pb-5",children:[(0,r.jsxs)("div",{className:"grid grid-cols-4 gap-2",children:[(0,r.jsxs)("div",{className:"col-span-3 ",children:[(0,r.jsx)("img",{src:"/images/sando-logo.png",alt:"sando logo image"}),(0,r.jsxs)("p",{className:"text-white",children:["Currency used for our partners platforms ",(0,r.jsx)("br",{})," Sandora, Oceansky, Metasando"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"mt-5 mb-3 font-bold text-white",children:"Join the community"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/FB.png",alt:"facebook"})})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Twitter.png",alt:"Twitter"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Instagram.png",alt:"Instagram"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Youtube.png",alt:"Youtube"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Discord.png",alt:"Discord"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/TikTok.png",alt:"TikTok"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Telegram.png",alt:"Telegram"})}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"h-10 w-10 opacity-75 hover:opacity-100",src:"/images/social_media/Linkedin.png",alt:"Linkedin"})})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-4 gap-2 mb-5",children:[(0,r.jsxs)("div",{className:" text-white",children:[(0,r.jsx)("h5",{className:"text-white font-bold pb-5",children:"Resources"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Partners"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Whitepaper"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Gas Fee Marketplace"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Subscription"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Newsletter"})})]})]}),(0,r.jsxs)("div",{className:"text-white",children:[(0,r.jsx)("h5",{className:"text-white font-bold pb-5",children:"Token"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Sando"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Store"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Swap"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Staking"})})]})]}),(0,r.jsxs)("div",{className:"text-white",children:[(0,r.jsx)("h5",{className:"text-white font-bold pb-5",children:"About"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Company"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Contact us"})})]})]}),(0,r.jsxs)("div",{className:"text-white",children:[(0,r.jsx)("h5",{className:"text-white font-bold pb-5",children:"Support"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-gray-200",href:"/",children:"Help Centre"})})})]})]})]}),(0,r.jsx)("div",{className:"text-white mx-10",children:(0,r.jsx)("span",{children:"Copyright \xa9 2022 Sando, All rights reserved"})})]})})};var i=function(e){var a=e.children;return(0,r.jsxs)("div",{className:"wraper",children:[(0,r.jsx)(t,{}),a,(0,r.jsx)(l,{})]})}},1664:function(e,a,s){e.exports=s(2167)}}]);