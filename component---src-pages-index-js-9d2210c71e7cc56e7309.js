(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=n("bWLx"),o=n("viY9"),l=(n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("bWfx"),n("wx14")),u=(n("SRfc"),n("rePB"));function c(t){return String(parseFloat(t)).length===String(t).length}function s(t){return parseFloat(t)}function f(t){return function(e,n){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;var i=s(e);if("px"!==r)if("em"===r)i=s(e)*s(t);else if("rem"===r)return i=s(e)*s(t),e;var a=i;if("px"!==n)if("em"===n)a=i/s(t);else{if("rem"!==n)return e;a=i/s(t)}return parseFloat(a.toFixed(5))+n}}function h(t){var e=t.size,n=t.grid,r=e-e%n,i=r+n;return e-r<i-e?r:i}function p(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function m(t){var e=t.cssProperty,n=t.min,r=t.max,i=t.unit,a=void 0===i?"rem":i,o=t.breakpoints,l=void 0===o?[600,960,1280]:o,c=t.transform,s=void 0===c?null:c,f=Object(u.a)({},e,"".concat(n).concat(a)),h=(r-n)/l[l.length-1];return l.forEach((function(t){var r=n+h*t;null!==s&&(r=s(r)),f["@media (min-width:".concat(t,"px)")]=Object(u.a)({},e,"".concat(Math.round(1e4*r)/1e4).concat(a))})),f}var v=Object(o.a)(),d=v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.breakpoints,r=void 0===n?["sm","md","lg"]:n,i=e.disableAlign,a=void 0!==i&&i,o=e.factor,u=void 0===o?2:o,s=e.variants,v=void 0===s?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:s,d=Object(l.a)({},t);d.typography=Object(l.a)({},d.typography);var g=d.typography,b=f(g.htmlFontSize),w=r.map((function(t){return d.breakpoints.values[t]}));return v.forEach((function(t){var e=g[t],n=parseFloat(b(e.fontSize,"rem"));if(!(n<=1)){var r=n,i=1+(r-1)/u,o=e.lineHeight;if(!c(o)&&!a)throw new Error(["Material-UI: unsupported non-unitless line height with grid alignment.","Use unitless line heights instead."].join("\n"));c(o)||(o=parseFloat(b(o,"rem"))/parseFloat(n));var s=null;a||(s=function(t){return h({size:t,grid:p({pixels:4,lineHeight:o,htmlFontSize:g.htmlFontSize})})}),g[t]=Object(l.a)({},e,{},m({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:w,transform:s}))}})),d}(v),g=n("3moH"),b=n("7oih");e.default=function(){return i.a.createElement(a.a,{theme:d},i.a.createElement(b.a,null,i.a.createElement(g.default,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9d2210c71e7cc56e7309.js.map