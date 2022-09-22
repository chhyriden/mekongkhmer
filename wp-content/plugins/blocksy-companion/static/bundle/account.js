!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.ctEvents,r=e.n(t),o=window.ctFrontend;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var i=function(e){c(e.querySelectorAll(".g-recaptcha, .anr_captcha_field")).map((function(e){e.classList.contains("anr_captcha_field")?grecaptcha.reset(parseFloat(e.firstElementChild.id.replace("anr_captcha_field_",""))-1):grecaptcha.reset(e.gID)}))},l=function(e){return new Promise((function(t){(function(e,t){return!(!window.WFLSVars||!parseInt(WFLSVars.useCAPTCHA)||(function(e,t){var r=function(e){var t=jQuery();return c(e.querySelectorAll("input")).map((function(e){t=t.add(e)})),t}(t);if("object"===("undefined"==typeof grecaptcha?"undefined":n(grecaptcha)))grecaptcha.ready((function(){grecaptcha.execute(WFLSVars.recaptchasitekey,{action:"login"}).then((function(t){var o=jQuery("#wfls-captcha-token");o.length?o.val(t):r.length&&((o=jQuery('<input type="hidden" name="wfls-captcha-token" id="wfls-captcha-token" />')).val(t),r.parent().append(o)),"function"==typeof e&&e(!0)}))}));else{var o=jQuery("#wfls-captcha-token");o.length?o.val("grecaptcha-missing"):r.length&&((o=jQuery('<input type="hidden" name="wfls-captcha-token" id="wfls-captcha-token" />')).val("grecaptcha-missing"),r.parent().append(o)),"function"==typeof e&&e(!0)}}((function(){return e()}),t),0))})(t,e)||t()}))},s=function(e){var t=e.querySelector('[name*="submit"]');t&&t.classList.add("ct-loading")},u=function(e){var t=e.querySelector('[name*="submit"]');t&&t.classList.remove("ct-loading")},f=function(e,t){var r=t.screen,o=void 0===r?"login":r;e.querySelector(".ct-".concat(o,"-form"))||(o="login"),e.querySelector("ul")&&e.querySelector("ul .ct-".concat(o))&&(e.querySelector("ul .active").classList.remove("active"),e.querySelector("ul .ct-".concat(o)).classList.add("active")),e.querySelector('[class*="-form"].active').classList.remove("active"),e.querySelector(".ct-".concat(o,"-form")).classList.add("active"),e.querySelector(".ct-".concat(o,"-form form"))&&e.querySelector(".ct-".concat(o,"-form form")).reset(),e.querySelector(".ct-account-form").classList.remove("ct-error");var n=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-form-notification");n&&n.remove();var a=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-form-notification-error");a&&a.remove(),function(e){c(e.querySelectorAll(".g-recaptcha, .anr_captcha_field")).map((function(e){e.innerHTML="",grecaptcha.render(e)}))}(e)},d=function(e,t){var r=e.querySelector(".ct-form-notification-error");r&&r.remove(),e.closest(".ct-account-form").classList.remove("ct-error"),t&&(e.insertAdjacentHTML("afterbegin",'<div class="ct-form-notification-error">'.concat(t,"</div>")),requestAnimationFrame((function(){e.closest(".ct-account-form").classList.add("ct-error")})))},m=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=r.querySelector("#login_error"),n="";return o&&(n=o.innerHTML),d(e,n),{hasError:!!o,doc:r}},p=function(e,t){var r=e.querySelector(".ct-form-notification");r&&r.remove(),e.closest(".ct-account-form").classList.remove("ct-error"),t&&e.insertAdjacentHTML("afterbegin",'<div class="ct-form-notification">'.concat(t,"</div>"))},y=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=r.querySelector(".message"),n="";return o&&(n=o.innerHTML),p(e,n),{doc:r}},h="";(0,o.registerDynamicChunk)("blocksy_account",{mount:function(e,t){var n=t.event;if(n.preventDefault(),!h){var c=document.querySelector("#account-modal");if(!c)return void(location=document.querySelector('[data-id="account"]')?document.querySelector('[data-id="account"]').href:e.href);h=c.innerHTML,c.remove()}var a=document.querySelector(".ct-drawer-canvas").lastElementChild;a.id="account-modal";var v=ct_localizations.dynamic_styles_selectors.find((function(e){return a.matches(e.selector)})),g=function(){a.innerHTML=h,function(e){if(e&&!e.hasListeners){e.hasListeners=!0;var t=e.querySelector('[name="loginform"]'),o=e.querySelector('[name="registerform"]'),n=e.querySelector('[name="lostpasswordform"]');e.addEventListener("click",(function(r){r.target.href&&r.target.href.indexOf("lostpassword")>-1&&(f(e,{screen:"forgot-password"}),r.preventDefault()),r.target.href&&r.target.classList.contains("showlogin")&&(f(e,{screen:"login"}),r.preventDefault()),r.target.href&&(r.target.href.indexOf("wp-login")>-1||t&&r.target.href===t.action)&&-1===r.target.href.indexOf("lostpassword")&&(f(e,{screen:"login"}),r.preventDefault())}),!0),t&&t.addEventListener("submit",(function(e){if(e.preventDefault(),!window.ct_customizer_localizations){s(t);var r=new FormData(t),o="".concat(ct_localizations.ajax_url,"?action=blc_implement_user_login");if(window.WFLSVars&&!t.loginProceed)return r.append("action","wordfence_ls_authenticate"),o=WFLSVars.ajaxurl,void l(t).then((function(){fetch(o,{method:t.method,body:r}).then((function(e){return e.json()})).then((function(e){u(t);var r=!!e.error,o=t.closest(".ct-login-form"),n=t.closest(".ct-login-form").querySelector("form");if(r&&d(o,e.error),e.message&&p(n,e.message),e.login)if(e.jwt){if(!jQuery("#wfls-token").length){var c=jQuery('<div id="wfls-prompt-overlay-blocksy"></div>'),a=jQuery('<div id="wfls-prompt-wrapper"></div>'),l=jQuery('<label for="wfls-token">2FA Code <a href="javascript:void(0)" class="wfls-2fa-code-help wfls-tooltip-trigger" title="The 2FA Code can be found within the authenticator app you used when first activating two-factor authentication. You may also use one of your recovery codes."><i class="dashicons dashicons-editor-help"></i></a></label>'),s=jQuery('<input type="text" name="wfls-token" id="wfls-token" aria-describedby="wfls-token-error" class="input" value="" size="6" autocomplete="off"/>'),f=jQuery('<label for="wfls-remember-device"><input name="wfls-remember-device" type="checkbox" id="wfls-remember-device" class="ct-checkbox" value="1" /> Remember for 30 days</label>');a.append(l),a.append(s),parseInt(WFLSVars.allowremember)&&a.append(f),c.append(a),jQuery(n).prepend(c),new jQuery.Zebra_Tooltips(jQuery(".wfls-tooltip-trigger"))}var m=jQuery("#wfls-token-jwt");m.length||(m=jQuery('<input type="hidden" name="wfls-token-jwt" id="wfls-token-jwt" value=""/>'),jQuery("#wfls-prompt-overlay-blocksy").append(m)),jQuery("#wfls-token-jwt").val(e.jwt)}else fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_login"),{method:t.method,body:new FormData(t)}).then((function(e){return e.text()})).then((function(e){location=t.querySelector('[name="redirect_to"]').value}));e.combined&&(t.loginProceed=!0,fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_login"),{method:t.method,body:new FormData(t)}).then((function(e){return e.text()})).then((function(e){location=t.querySelector('[name="redirect_to"]').value}))),(!r||r&&-1===t.closest(".ct-login-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&i(t.closest(".ct-login-form"))}))}));l(t).then((function(){fetch(o,{method:t.method,body:r}).then((function(e){return e.text()})).then((function(e){u(t);var r=m(t.closest(".ct-login-form"),e),o=(r.doc,r.hasError);o||setTimeout((function(){location=t.querySelector('[name="redirect_to"]').value}),2e3),(!o||o&&-1===t.closest(".ct-login-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&i(t.closest(".ct-login-form"))}))}))}})),o&&o.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||(s(o),l(o).then((function(){return fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_registration"),{method:o.method,body:new FormData(o)}).then((function(e){return e.text()})).then((function(e){var t=m(o.closest(".ct-register-form"),e),n=(t.doc,t.hasError);u(o),n||y(o.closest(".ct-register-form"),e),r().trigger("blocksy:account:register:".concat(n?"error":"success")),(!n||n&&-1===o.closest(".ct-register-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&i(o.closest(".ct-register-form"))}))})))})),n&&n.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||(s(n),fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_lostpassword"),{method:n.method,body:new FormData(n)}).then((function(e){return e.text()})).then((function(e){var t=m(n.closest(".ct-forgot-password-form"),e),r=(t.doc,t.hasError);u(n),r||y(n.closest(".ct-forgot-password-form"),e),(!r||r&&-1===n.closest(".ct-forgot-password-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&i(n.closest(".ct-forgot-password-form"))})))})),["login","register","forgot-password"].map((function(t){Array.from(e.querySelectorAll(".ct-".concat(t))).map((function(r){r.addEventListener("click",(function(r){r.preventDefault(),f(e,{screen:t})})),r.addEventListener("keyup",(function(r){13===r.keyCode&&(r.preventDefault(),f(e,{screen:t}))}))}))}))}}(a),f(a,{screen:e.dataset.view||"login"}),window.anr_onloadCallback&&window.anr_onloadCallback(),r().trigger("ct:overlay:handle-click",{e:n,href:"#account-modal",options:{openStrategy:"skip",isModal:!0}})};v?(0,o.loadStyle)(v.url).then((function(){g()})):g()}}),r().on("ct:modal:closed",(function(e){e.closest("#account-modal")&&e.remove()}))}();