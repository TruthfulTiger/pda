!function t(e,a,r){function n(u,o){if(!a[u]){if(!e[u]){var l="function"==typeof require&&require;if(!o&&l)return l(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var d=a[u]={exports:{}};e[u][0].call(d.exports,function(t){var a=e[u][1][t];return n(a||t)},d,d.exports,t,e,a,r)}return a[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)n(r[u]);return n}({1:[function(t,e,a){"use strict";var r=t("./validator");if("undefined"==typeof jQuery)throw new Error("jQuery Simple Validator 1.0.0 requires jQuery 3.3.1 or higher");$(function(){(0,r.validateForms)()})},{"./validator":3}],2:[function(t,e,a){"use strict";function r(t){return t.endsWith("kb")?1024*parseInt(t):t.endsWith("mb")?1024*parseInt(t)*1024:t.endsWith("gb")?1024*parseInt(t)*1024*1024:void 0}Object.defineProperty(a,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};a.validationFn={required:function(t){return!!t.value},email:function(t){return!!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t.value)},url:function(t){return!!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(t.value)},mobile:function(t){return!!/^\d{10}$/.test(t.value)},pattern:function(t){return!!new RegExp($(t.input).attr("pattern")).test(t.value)},match:function(t){return $($(t.input).attr("data-match-field")).prop(t.property)==t.value},fileTypes:function(t){var e=t.input.files,a=$(t.input).attr("data-file-types").split(","),r=!1;return Object.values(e).forEach(function(t){"object"!=(void 0===t?"undefined":n(t))||(r=a.find(function(e){return t.type==e}))}),r},fileMaxSize:function(t){var e=t.input.files,a=$(t.input).attr("data-file-max-size").toLowerCase(),i=0,u=!0;return i=r(a),Object.values(e).forEach(function(t){"object"==(void 0===t?"undefined":n(t))&&t.size>i&&(u=!1)}),u},fileMinSize:function(t){var e=t.input.files,a=$(t.input).attr("data-file-min-size").toLowerCase(),i=0,u=!0;return i=r(a),Object.values(e).forEach(function(t){"object"==(void 0===t?"undefined":n(t))&&t.size<i&&(u=!1)}),u},isNumber:function(t){return!!$.isNumeric(t.value)},max:function(t){var e=parseInt($(t.input).attr("max"));return t.value<=e},min:function(t){var e=parseInt($(t.input).attr("min"));return t.value>=e},maxLength:function(t){var e=parseInt($(t.input).attr("maxlength"));return t.value.length<=e},minLength:function(t){var e=parseInt($(t.input).attr("minlength"));return t.value.length>=e}}},{}],3:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.validateForms=void 0;var r=t("./validations"),n=(a.validateForms=function(){$("form[validate=true]").toArray().forEach(function(t,e){$(t).attr("novalidate",!0),$(t).attr("data-uid","form-"+e),n(t)})},function(t){var e=$(t).find("input, textarea, select").toArray();i(e),$(t).on("submit",function(t){var a=!1;e.forEach(function(e){u(e)||(a||($(e).focus(),a=!0),t.preventDefault())})})}),i=function(t){t.forEach(function(t,e){var a=$(t).parent("form").attr("data-uid"),r="blur";$(t).attr("data-uid",a+"-field-"+e),"file"==$(t).attr("type")&&(r="change"),$(t).on(r,function(e){u(t)})})},u=function(t){var e=!0;if($(t).attr("required")&&(e="checkbox"==$(t).attr("type")?e?o(t,"checked",r.validationFn.required,"You need to check this"):e:e?o(t,"value",r.validationFn.required,"This field is required"):e),"email"==$(t).attr("type")&&(e=e?o(t,"value",r.validationFn.email,"The email is invalid"):e),"url"==$(t).attr("type")&&(e=e?o(t,"value",r.validationFn.url,"The url is invalid"):e),"mobile"==$(t).attr("type")&&(e=e?o(t,"value",r.validationFn.mobile,"The mobile number is invalid"):e),$(t).attr("pattern")&&(e=e?o(t,"value",r.validationFn.pattern,"Please match the requested pattern"):e),$(t).attr("data-match-field")&&(e=e?o(t,"value",r.validationFn.match,$(t).attr("data-match")+" fields does not match"):e),"file"==$(t).attr("type")){if($(t).attr("data-file-types")&&(e=e?o(t,"",r.validationFn.fileTypes,"Invalid file type selected"):e),$(t).attr("data-file-max-size")){var a=$(t).attr("data-file-max-size");e=e?o(t,"",r.validationFn.fileMaxSize,"File size must be < "+a):e}if($(t).attr("data-file-min-size")){var n=$(t).attr("data-file-min-size");e=e?o(t,"",r.validationFn.fileMinSize,"File size must be > "+n):e}}if("number"==$(t).attr("type")){if(e=e?o(t,"value",r.validationFn.isNumber,"This is not a number"):e,$(t).attr("max")){var i=$(t).attr("max");e=e?o(t,"value",r.validationFn.max,"This should be < "+i):e}if($(t).attr("min")){var u=$(t).attr("min");e=e?o(t,"value",r.validationFn.min,"This should be > "+u):e}}if($(t).attr("maxlength")){var l=$(t).attr("maxlength");e=e?o(t,"value",r.validationFn.maxLength,"This should be less than "+l+" character(s)"):e}if($(t).attr("minlength")){var f=$(t).attr("minlength");e=e?o(t,"value",r.validationFn.minLength,"This should be at least "+f+" character(s)"):e}return e},o=function(t,e,a,r){var n=l(t);return r=$(t).attr("data-error")||r,a({input:t,property:e,value:$(t).prop(e)})?($(t).addClass("no-error"),$(t).removeClass("error"),n.remove(),!0):($(t).addClass("error"),$(t).removeClass("no-error"),n.innerHTML=r,!1)},l=function(t){var e=$(t).attr("data-uid")+"-error",a=void 0;return 0==$("#"+e).length?((a=document.createElement("div")).setAttribute("id",e),a.className="error-field",$(t).after(a)):a=document.getElementById(e),a}},{"./validations":2}]},{},[1]);;
;
;
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});
