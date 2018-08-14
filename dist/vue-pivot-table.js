!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t.default=o.a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(6));function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={props:["data","rowFields","colFields","reducer"],data:function(){return{values:{}}},computed:{cols:function(){var e=this,t=[];return this.colFields.length>0?function r(i,a){var s=e.colFields[i].getter,u=e.colFields[i].sort||n.default;o(new Set(e.filteredData({data:e.data,colFilters:a}).map(function(e){return s(e)}))).sort(u).forEach(function(n){var o=Object.assign({},a);o[i]=n,i+1<e.colFields.length?r(i+1,o):t.push(o)})}(0,{}):t.push({}),t},rows:function(){var e=this,t=[];return this.rowFields.length>0?function r(i,a){var s=e.rowFields[i].getter,u=e.rowFields[i].sort||n.default;o(new Set(e.filteredData({data:e.data,rowFilters:a}).map(function(e){return s(e)}))).sort(u).forEach(function(n){var o=Object.assign({},a);o[i]=n,i+1<e.rowFields.length?r(i+1,o):t.push(o)})}(0,{}):t.push({}),t},colsAndRows:function(){return[this.cols,this.rows]}},methods:{filteredData:function(e){var t=e.data,r=void 0===t?[]:t,n=e.colFilters,o=void 0===n?{}:n,i=e.rowFilters,a=void 0===i?{}:i,s={},u={};for(var l in o)s[l]=this.colFields[l].getter;for(var c in a)u[c]=this.rowFields[c].getter;return r.filter(function(e){var t=!0;for(var r in o)if(s[r](e)!==o[r]){t=!1;break}if(t)for(var n in a)if(u[n](e)!==a[n]){t=!1;break}return t})},spanSize:function(e,t,r){if(r>0&&e[r-1][t]===e[r][t]&&(0===t||0===this.spanSize(e,t-1,r)))return 0;for(var n=1,o=r;o+1<e.length&&e[o+1][t]===e[o][t]&&(0===t||o+1<e.length&&0===this.spanSize(e,t-1,o+1));)o++,n++;return n},computeValues:function(){var e=this;this.values={},this.rows.forEach(function(t){var r=e.filteredData({data:e.data,rowFilters:t});e.cols.forEach(function(n){var o=e.filteredData({data:r,colFilters:n}),i=JSON.stringify({col:n,row:t}),a=o.reduce(e.reducer,0);e.values[i]=a})})}},watch:{colsAndRows:function(){this.computeValues()}},created:function(){this.computeValues()}};t.default=i},function(e,t,r){var n=r(8);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(10).default)("7e05f16a",n,!0,{})},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered"},[r("thead",e._l(e.colFields,function(t,n){return r("tr",{key:t.key},[0===n&&e.rowFields.length>0?r("th",{attrs:{colspan:e.rowFields.length,rowspan:e.colFields.length}}):e._e(),e._v(" "),e._l(e.cols,function(o,i){return 0!==e.spanSize(e.cols,n,i)?r("th",{key:JSON.stringify(o),attrs:{colspan:e.spanSize(e.cols,n,i)}},[t.headerSlotName?e._t(t.headerSlotName,[e._v('\n            Undefined slot "'+e._s(t.headerSlotName)+'"\n          ')],{value:o[n]}):[e._v("\n            "+e._s(o[n])+"\n          ")]],2):e._e()})],2)})),e._v(" "),r("tbody",e._l(e.rows,function(t,n){return r("tr",{key:JSON.stringify(t)},[e._l(e.rowFields,function(o,i){return 0!==e.spanSize(e.rows,i,n)?r("td",{key:o.key,staticClass:"font-weight-bold",attrs:{rowspan:e.spanSize(e.rows,i,n)}},[o.headerSlotName?e._t(o.headerSlotName,[e._v('\n            Undefined slot "'+e._s(o.headerSlotName)+'"\n          ')],{value:t[i]}):[e._v("\n            "+e._s(t[i])+"\n          ")]],2):e._e()}),e._v(" "),e._l(e.cols,function(n){return r("td",{key:JSON.stringify(n),staticClass:"text-right"},[e.$scopedSlots.value?e._t("value",null,{value:e.values[JSON.stringify({col:n,row:t})]}):[e._v(e._s(e.values[JSON.stringify({col:n,row:t})]))]],2)})],2)}))])])},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,s){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:l}}r.d(t,"a",function(){return n})},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(0);for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);r(7);var a=r(4),s=Object(a.a)(o.default,n.a,n.b,!1,null,"4b379f9c",null);t.default=s.exports},function(e,t){e.exports=function e(t,r){"use strict";var n,o,i=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,a=/(^[ ]*|[ ]*$)/g,s=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,u=/^0x[0-9a-f]+$/i,l=/^0/,c=function(t){return e.insensitive&&(""+t).toLowerCase()||""+t},f=c(t).replace(a,"")||"",d=c(r).replace(a,"")||"",p=f.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),v=d.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),h=parseInt(f.match(u),16)||1!==p.length&&f.match(s)&&Date.parse(f),g=parseInt(d.match(u),16)||h&&d.match(s)&&Date.parse(d)||null;if(g){if(h<g)return-1;if(h>g)return 1}for(var m=0,y=Math.max(p.length,v.length);m<y;m++){if(n=!(p[m]||"").match(l)&&parseFloat(p[m])||p[m]||0,o=!(v[m]||"").match(l)&&parseFloat(v[m])||v[m]||0,isNaN(n)!==isNaN(o))return isNaN(n)?1:-1;if(typeof n!=typeof o&&(n+="",o+=""),n<o)return-1;if(n>o)return 1}return 0}},function(e,t,r){"use strict";var n=r(2);r.n(n).a},function(e,t,r){(e.exports=r(9)(!1)).push([e.i,"td[data-v-4b379f9c]{min-width:100px}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}r.r(t),r.d(t,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,o){l=r,f=o||{};var a=n(e,t);return h(a),function(t){for(var r=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,r.push(u)}t?h(a=n(e,t)):a=[];for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(m(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(p){var o=u++;n=s||(s=g()),t=b.bind(null,n,o,!1),r=b.bind(null,n,o,!0)}else n=g(),t=function(e,t){var r=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);f.ssrId&&e.setAttribute(d,t.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function b(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}])});