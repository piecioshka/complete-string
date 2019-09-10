!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CompleteString=t():e.CompleteString=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";
/**
 * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl)
 * @name complete-string
 * @description Complete string by any char. This repo is some kind of polyfill for ES2017 padStart.
 * @version 2.2.3
 * @license MIT
 * @example
 * CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
 * @example
 * var date = new Date();
 * CompleteString.withZero(date.getMonth(), 2) // => '05'
 */var n={withChar:function(e,t,r){if(e=String(e),t=Number(t),r=String(r),e.length>t)return e;!function(e,t){if(!e)throw new Error(t)}(1===r.length,"CompleteString: char is not a single char.");var n=t-e.length;return new Array(n+1).join(r)+e},withZero:function(e,t){return this.withChar(e,t,"0")}};e.exports=n}])}));
//# sourceMappingURL=complete-string.js.map