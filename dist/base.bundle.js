(()=>{"use strict";var r,e={511:(r,e,t)=>{var n=t(540);function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function a(){var r,e,t=(r=(0,n.useState)(0),e=2,function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,a,l,u=[],i=!0,c=!1;try{if(a=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==e);i=!0);}catch(r){c=!0,o=r}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(r,e)||function(r,e){if(r){if("string"==typeof r)return o(r,e);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=t[0],l=t[1];return n.createElement(n.Fragment,null," ",n.createElement("div",null,a),n.createElement("button",{onClick:function(){l((function(r){return r+1}))}},"+"),n.createElement("button",{onClick:function(){l((function(r){return r-1}))}},"-"))}t(961).hydrate(n.createElement(a,null),document.getElementById("root"))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,r=[],n.O=(e,t,o,a)=>{if(!t){var l=1/0;for(f=0;f<r.length;f++){for(var[t,o,a]=r[f],u=!0,i=0;i<t.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((r=>n.O[r](t[i])))?t.splice(i--,1):(u=!1,a<l&&(l=a));if(u){r.splice(f--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var f=r.length;f>0&&r[f-1][2]>a;f--)r[f]=r[f-1];r[f]=[t,o,a]},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.j=152,(()=>{var r={152:0};n.O.j=e=>0===r[e];var e=(e,t)=>{var o,a,[l,u,i]=t,c=0;if(l.some((e=>0!==r[e]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var f=i(n)}for(e&&e(t);c<l.length;c++)a=l[c],n.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return n.O(f)},t=self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var o=n.O(void 0,[121],(()=>n(511)));o=n.O(o)})();