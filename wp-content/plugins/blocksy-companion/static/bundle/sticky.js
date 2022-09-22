!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.ctEvents,n=t.n(e),r=window.ctFrontend,i=function(t,e,n){return Math.max(t,Math.min(e,n))},o=function(t,e,n){return e[0]+(e[1]-e[0])/(t[1]-t[0])*(n-t[0])},a=function(t){if(t.blcInitialHeight)return t.blcInitialHeight;var e=t.firstElementChild;t.firstElementChild.firstElementChild&&(e=t.firstElementChild.firstElementChild);var n=e.getBoundingClientRect().height;return t.blcInitialHeight=n,n},c=function(t){if(t.blcStickyHeight)return t.blcStickyHeight;var e=a(t),n=getComputedStyle(t),r=getComputedStyle(t.firstElementChild);if(t.closest('[data-sticky*="yes"]')){var i=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),o=t.getBoundingClientRect().height-i;if(o!==e)return t.blcStickyHeight=t.getBoundingClientRect().height,o}var c=100;return t.dataset.row.includes("middle")&&(c=n.getPropertyValue("--sticky-shrink")),c&&(e*=parseFloat(c)/100),e},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return 0},e=document.querySelector(".ct-floating-bar");e&&e.style.setProperty("--header-sticky-height-animated",t())};function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=null,d=function(){u=null},y=function(t){var e,n=t.stickyContainer,r=t.startPosition;(e=n.querySelectorAll('[data-row*="middle"]'),function(t){if(Array.isArray(t))return l(t)}(e)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){if(t.querySelector('[data-id="logo"] .site-logo-container')){var e=t.querySelector('[data-id="logo"] .site-logo-container'),n=function(t){var e=t.logo,n=t.row;if(u)return u;var r=parseFloat(getComputedStyle(e).getPropertyValue("--logo-max-height")||50),i=parseFloat(getComputedStyle(e).getPropertyValue("--logo-sticky-shrink").toString().replace(",",".")||1),o=a(n),s=c(n);return u={initialHeight:r,stickyShrink:i,rowInitialHeight:o,rowStickyHeight:s}}({logo:e,row:t}),s=n.initialHeight,l=n.stickyShrink,d=n.rowInitialHeight,y=n.rowStickyHeight,f=s*l;1!==l&&e.style.setProperty("--logo-shrink-height","".concat(o([r,r+Math.abs(d===y?s-f:d-y)],[1,l],i(r,r+Math.abs(d===y?s-f:d-y),scrollY))*s,"px"))}}))},f=null,h=function(){f=null},m=function(t){var e=t.stickyContainer,n=(t.containerInitialHeight,t.startPosition);e.querySelector('[data-row*="middle"]')&&[e.querySelector('[data-row*="middle"]')].map((function(t){var e=function(t){var e=t.row;if(f)return f;var n=a(e),r=c(e);return f={rowInitialHeight:n,rowStickyHeight:r}}({row:t}),r=e.rowInitialHeight,s=e.rowStickyHeight;if(r!==s){var l;l=o([n,n+Math.abs(r-s)],[r,s],i(n,n+Math.abs(r-s),scrollY)),t.style.setProperty("--shrink-height","".concat(l,"px"))}}))};function p(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function(t){var e=t.stickyContainer,n=k(e.querySelectorAll("[data-row]")).reduce((function(t,e){return t+c(e)}),0);return{stickyContainerHeight:n,stickyContainerHeightAbsolute:n+parseFloat(getComputedStyle(e).top)}},w=null;function S(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yes";Array.from(t.querySelectorAll("[data-row][data-transparent-row]")).map((function(t){t.dataset.transparentRow=e}))},I=null,j=null,H=null,P=null;n().on("blocksy:sticky:compute",(function(){setTimeout((function(){h(),d(),I=null,j=null,H=null,P=null,Y=null,q()}),100)})),window.wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(t){setTimeout((function(){h(),d(),I=null,j=null,H=null,P=null,Y=null,q()}),500)}));var Y=null,q=function(){if(Y!==scrollY){var t=document.querySelector('[data-device="'.concat((0,r.getCurrentScreen)(),'"] [data-sticky]'));if(t){var e=j;e||(e=j=Array.from(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+e.getBoundingClientRect().height}),0),t.parentNode.style.height="".concat(e,"px"));var n=I;null===n&&(n=function(t){if(-1===t.dataset.sticky.indexOf("shrink")&&-1===t.dataset.sticky.indexOf("auto-hide"))return t.parentNode.getBoundingClientRect().height+200;var e=t.closest("header").getBoundingClientRect().top+scrollY;if(e>0){var n=document.elementFromPoint(0,3);n&&function(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}(n).map((function(t){return getComputedStyle(t).position})).indexOf("fixed")>-1&&(e-=n.getBoundingClientRect().height)}var r=t.parentNode,i=getComputedStyle(document.body),o=parseFloat(i.getPropertyValue("--header-sticky-offset")||0);if(o+=parseFloat(i.getPropertyValue("--frame-size"))||0,1===r.parentNode.children.length||r.parentNode.children[0].classList.contains("ct-sticky-container"))return e>0?e-o:e;var a=Array.from(r.parentNode.children).reduce((function(t,e,n){return t.indexOf(0)>-1||!e.dataset.row?[].concat(C(t),[0]):[].concat(C(t),[e.classList.contains("ct-sticky-container")?0:e.getBoundingClientRect().height])}),[]).reduce((function(t,e){return t+e}),e);return a>0?a-o:a}(t),I=n);var i=H;null===i&&(i=t.closest("[data-device]").getBoundingClientRect().height,H=i);var o=P,a=t.dataset.sticky.split(":").filter((function(t){return"yes"!==t&&"no"!==t&&"fixed"!==t}));o||(o=parseInt(t.getBoundingClientRect().height),P=parseInt(o),s((function(){return-1===a.indexOf("auto-hide")?"".concat(C(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+c(e)}),0),"px"):"0px"})));var l=n>0&&Math.abs(window.scrollY-n)<5||window.scrollY>n;a.indexOf("shrink")>-1&&(l=n>0?window.scrollY>=n:window.scrollY>0),setTimeout((function(){l&&-1===document.body.dataset.header.indexOf("shrink")&&(document.body.dataset.header="".concat(document.body.dataset.header,":shrink")),!l&&document.body.dataset.header.indexOf("shrink")>-1&&(document.body.dataset.header=document.body.dataset.header.replace(":shrink",""))}),300);var u=scrollY;a.indexOf("shrink")>-1&&function(t){var e=t.containerInitialHeight,n=t.stickyContainer,r=t.isSticky,i=t.startPosition,o=t.stickyComponents;if(0===i&&0===window.scrollY&&(n.dataset.sticky=["fixed"].concat(p(o)).join(":")),r){if(o.indexOf("yes")>-1)return;-1===n.dataset.sticky.indexOf("yes")&&(x(n,"no"),n.dataset.sticky=["yes"].concat(p(o)).join(":")),y({stickyContainer:n,startPosition:i}),m({stickyContainer:n,containerInitialHeight:e,startPosition:i})}else Array.from(n.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),Array.from(n.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t){return t.removeAttribute("style")})),x(n,"yes"),0===i&&window.scrollY<=0?n.dataset.sticky=["fixed"].concat(p(o)).join(":"):n.dataset.sticky=o.join(":")}({stickyContainer:t,stickyContainerHeight:o,containerInitialHeight:e,isSticky:l,startPosition:n,stickyComponents:a}),a.indexOf("auto-hide")>-1&&function(t){var e=t.currentScrollY,n=t.stickyContainer,r=t.containerInitialHeight,i=t.headerInitialHeight,o=t.startPosition,a=t.isSticky,c=t.stickyComponents;a&&e-t.prevScrollY==0&&s((function(){return"0px"})),a?-1===n.dataset.sticky.indexOf("yes")&&e>2*i+o&&(n.dataset.sticky=["yes"].concat(k(c)).join(":"),y({stickyContainer:n,startPosition:o}),m({stickyContainer:n,containerInitialHeight:r,startPosition:o}),x(n,"no"),document.body.removeAttribute("style")):(Array.from(n.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),Array.from(n.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t){return t.removeAttribute("style")})),n.dataset.sticky=k(c).join(":"),x(n,"yes"),s((function(){return"0px"})),w=null),null===w&&(w=1e3);var l=w+t.prevScrollY-e,u=0;if(e>2*i+o||n.dataset.sticky.indexOf("yes")>-1){if(e<=o)u=0;else if(e>t.prevScrollY){var d=v({stickyContainer:n}).stickyContainerHeightAbsolute;u=Math.abs(l)>d?-d:l}else u=l>0?0:l;n.style.transform="translateY(".concat(u,"px)"),w=u}else n.removeAttribute("style");n.dataset.sticky.indexOf("yes")>-1&&(e<=o||e>t.prevScrollY||(y({stickyContainer:n,startPosition:o}),m({stickyContainer:n,containerInitialHeight:r,startPosition:o}))),s((function(){var t=v({stickyContainer:n}).stickyContainerHeight;return"".concat(t-Math.abs(u),"px")}))}({stickyContainer:t,isSticky:l,startPosition:n,stickyComponents:a,containerInitialHeight:e,stickyContainerHeight:o,headerInitialHeight:i,currentScrollY:u,prevScrollY:Y}),(a.indexOf("slide")>-1||a.indexOf("fade")>-1)&&function(t){var e=t.stickyContainer,n=t.startPosition,r=t.stickyComponents;t.isSticky?(-1===e.dataset.sticky.indexOf("yes")&&(e.dataset.sticky=["yes-start"].concat(S(r)).join(":"),setTimeout((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-end","yes")}),200)}),1)),x(e,"no")):-1===e.dataset.sticky.indexOf("yes-hide")&&e.dataset.sticky.indexOf("yes:")>-1&&(Math.abs(window.scrollY-n)>10?(e.dataset.sticky=r.join(":"),setTimeout((function(){Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),x(e,"yes")):(e.dataset.sticky=["yes-hide-start"].concat(S(r)).join(":"),requestAnimationFrame((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){e.dataset.sticky=r.join(":"),setTimeout((function(){Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),x(e,"yes")}),200)}))))}({stickyContainer:t,isSticky:l,startPosition:n,stickyComponents:a}),Y=u}}},E=function(){document.querySelector("header [data-sticky]")&&(window.addEventListener("resize",(function(t){q(t),n().trigger("ct:header:update")}),!1),window.addEventListener("orientationchange",(function(t){q(t),n().trigger("ct:header:update")})),window.addEventListener("scroll",q,!1),window.addEventListener("load",q,!1),q())};document.body.className.indexOf("e-preview")>-1?setTimeout((function(){E()}),500):E(),(0,r.registerDynamicChunk)("blocksy_sticky_header",{mount:function(t){}})}();