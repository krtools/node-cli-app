!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";console.log(t(1).green("Hello"))},function(e,r,t){"use strict";function n(e){this.enabled=e&&void 0!==e.enabled?e.enabled:p}function o(e){var r=function(){return s.apply(r,arguments)};return r._styles=e,r.enabled=this.enabled,r.__proto__=b,r}function s(){var e=arguments,r=e.length,t=0!==r&&String(arguments[0]);if(r>1)for(var n=1;n<r;n++)t+=" "+e[n];if(!this.enabled||!t)return t;var o=this._styles,s=o.length,c=l.dim.open;for(!d||o.indexOf("gray")===-1&&o.indexOf("grey")===-1||(l.dim.open="");s--;){var i=l[o[s]];t=i.open+t.replace(i.closeRe,i.open)+i.close}return l.dim.open=c,t}function c(){var e={};return Object.keys(g).forEach(function(r){e[r]={get:function(){return o.call(this,[r])}}}),e}var i=t(2),l=t(3),u=t(5),a=t(7),p=t(8),f=Object.defineProperties,d="win32"===process.platform&&!/^xterm/i.test(process.env.TERM);d&&(l.blue.open="[94m");var g=function(){var e={};return Object.keys(l).forEach(function(r){l[r].closeRe=new RegExp(i(l[r].close),"g"),e[r]={get:function(){return o.call(this,this._styles.concat(r))}}}),e}(),b=f(function(){},g);f(n.prototype,c()),e.exports=new n,e.exports.styles=l,e.exports.hasColor=a,e.exports.stripColor=u,e.exports.supportsColor=p},function(e,r){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},function(e,r,t){(function(e){"use strict";function r(){var e={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};return e.colors.grey=e.colors.gray,Object.keys(e).forEach(function(r){var t=e[r];Object.keys(t).forEach(function(r){var n=t[r];e[r]=t[r]={open:"["+n[0]+"m",close:"["+n[1]+"m"}}),Object.defineProperty(e,r,{value:t,enumerable:!1})}),e}Object.defineProperty(e,"exports",{enumerable:!0,get:r})}).call(r,t(4)(e))},function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,r,t){"use strict";var n=t(6)();e.exports=function(e){return"string"==typeof e?e.replace(n,""):e}},function(e,r){"use strict";e.exports=function(){return/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g}},function(e,r,t){"use strict";var n=t(6),o=new RegExp(n().source);e.exports=o.test.bind(o)},function(e,r){"use strict";var t=process.argv,n=t.indexOf("--"),o=function(e){e="--"+e;var r=t.indexOf(e);return r!==-1&&(n===-1||r<n)};e.exports=function(){return"FORCE_COLOR"in process.env||!(o("no-color")||o("no-colors")||o("color=false"))&&(!!(o("color")||o("colors")||o("color=true")||o("color=always"))||!(process.stdout&&!process.stdout.isTTY)&&("win32"===process.platform||("COLORTERM"in process.env||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM))))}()}]));
//# sourceMappingURL=main.dist.js.map