!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,o=r(1),u=(n=o)&&n.__esModule?n:{default:n};(0,u.default)(document).ready((function(){(0,u.default)("a.scroll").click((function(){return(0,u.default)("html, body").animate({scrollTop:(0,u.default)((0,u.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,u.default)(".phone").length>0&&(0,u.default)(".phone").inputmask({mask:"8 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,u.default)(this).closest("form").addClass("error-phone"),(0,u.default)(this).addClass("error"),(0,u.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,u.default)(this).closest("form").removeClass("error-phone"),(0,u.default)(this).removeClass("error"),(0,u.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,u.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,u.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,u.default)(this).blur(),!1}))}))},function(e,t){e.exports=jQuery}]);