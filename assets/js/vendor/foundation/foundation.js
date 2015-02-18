!function(t,e,n,i){"use strict";function a(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var s=function(e){for(var n=e.length,i=t("head");n--;)0===i.has("."+e[n]).length&&i.append('<meta class="'+e[n]+'" />')};s(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var r=function(e,i){if("string"==typeof e){if(i){var a;if(i.jquery){if(a=i[0],!a)return i}else a=i;return t(a.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},o=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},u=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},l=function(e,n){var i=this,a=!r(this).data(this.attr_name(!0));return r(this.scope).is("["+this.attr_name()+"]")?(r(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,n||e,this.data_options(r(this.scope)))),a&&this.events(this.scope)):r("["+this.attr_name()+"]",this.scope).each(function(){var a=!r(this).data(i.attr_name(!0)+"-init");r(this).data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(r(this)))),a&&i.events(this)}),"string"==typeof e?this[e].call(this,n):void 0},c=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?n():i.call(t)):void n()};e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,a=t.createElement("body"),s=t.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(s),function(t){return s.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(a,i),e=42===s.offsetWidth,n.removeChild(a),{matches:e,media:t}}}(n),function(){function t(){n&&(s(t),o&&jQuery.fx.tick())}for(var n,i=0,a=["webkit","moz"],s=e.requestAnimationFrame,r=e.cancelAnimationFrame,o="undefined"!=typeof jQuery.fx;i<a.length&&!s;i++)s=e[a[i]+"RequestAnimationFrame"],r=r||e[a[i]+"CancelAnimationFrame"]||e[a[i]+"CancelRequestAnimationFrame"];s?(e.requestAnimationFrame=s,e.cancelAnimationFrame=r,o&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,t())},jQuery.fx.stop=function(){n=!1})):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+a)},a);return i=n+a,s},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"{{VERSION}}",media_queries:{small:r(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:r(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:r(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:r(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:r(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(t,n,i,a,s){var o=[t,i,a,s],u=[];if(this.rtl=/rtl/i.test(r("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&u.push(this.init_lib(n,o));else for(var l in this.libs)u.push(this.init_lib(l,n));return r(e).load(function(){r(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,n){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),n&&n.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,n[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,n[e]),this.libs[e].init.apply(this.libs[e],[this.scope,n[e]])):(n=n instanceof Array?n:new Array(n),this.libs[e].init.apply(this.libs[e],n))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=o,t.add_namespace=u,t.bindings=l,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=this.global.namespace===i?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===i||/false/i.test(e)?"":e},libs:{},utils:{S:r,throttle:function(t,e){var n=null;return function(){var i=this,a=arguments;null==n&&(n=setTimeout(function(){t.apply(i,a),n=null},e))}},debounce:function(t,e,n){var i,a;return function(){var s=this,r=arguments,o=function(){i=null,n||(a=t.apply(s,r))},u=n&&!i;return clearTimeout(i),i=setTimeout(o,e),u&&(a=t.apply(s,r)),a}},data_options:function(e,n){function i(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function a(e){return"string"==typeof e?t.trim(e):e}n=n||"options";var s,r,o,u={},l=function(t){var e=Foundation.global.namespace;return t.data(e.length>0?e+"-"+n:n)},c=l(e);if("object"==typeof c)return c;for(o=(c||":").split(";"),s=o.length;s--;)r=o[s].split(":"),r=[r[0],r.slice(1).join(":")],/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),i(r[1])&&(r[1]=-1===r[1].indexOf(".")?parseInt(r[1],10):parseFloat(r[1])),2===r.length&&r[0].length>0&&(u[a(r[0])]=a(r[1]));return u},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[e]=a(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;0===i&&e(t),t.each(function(){c(n.S(this),function(){i-=1,0===i&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document);