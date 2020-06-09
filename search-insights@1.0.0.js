!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AlgoliaAnalytics=t()}(this,function(){"use strict";var e=function(e){return void 0===e},t=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e},n=function(e){return"function"==typeof e};function o(o,i){if(!this._userHasOptedOut){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(!t(i.index))throw TypeError("expected required parameter `index` to be a string");if(!t(i.eventName))throw TypeError("expected required parameter `eventName` to be a string");if(!e(i.userToken)&&!t(i.userToken))throw TypeError("expected optional parameter `userToken` to be a string");var s={eventType:o,eventName:i.eventName,userToken:i.userToken||this._userToken,index:i.index};if(!e(i.timestamp)){if(!r(i.timestamp))throw TypeError("expected optional parameter `timestamp` to be a number");s.timestamp=i.timestamp}if(!e(i.queryID)){if(!t(i.queryID))throw TypeError("expected optional parameter `queryID` to be a string");s.queryID=i.queryID}if(!e(i.objectIDs)){if(!Array.isArray(i.objectIDs))throw TypeError("expected optional parameter `objectIDs` to be an array");s.objectIDs=i.objectIDs}if(!e(i.positions)){if(!Array.isArray(i.positions))throw TypeError("expected optional parameter `positions` to be an array");if(e(i.objectIDs))throw new Error("cannot use `positions` without providing `objectIDs`");if(i.objectIDs.length!==i.positions.length)throw new Error("objectIDs and positions need to be of the same size");s.positions=i.positions}if(!e(i.filters)){if(!e(i.objectIDs))throw new Error("cannot use `objectIDs` and `filters` for the same event");if(!Array.isArray(i.filters))throw TypeError("expected optional parameter `filters` to be an array");s.filters=i.filters}if(e(i.objectIDs)&&e(i.filters))throw new Error("expected either `objectIDs` or `filters` to be provided");!function(e,t,r,o){var i=r+"/1/events?X-Algolia-Application-Id="+e+"&X-Algolia-API-Key="+t,s=navigator&&n(navigator.sendBeacon),a={events:o};if(s)navigator.sendBeacon(i,JSON.stringify(a));else{var c=new XMLHttpRequest;c.open("POST",i),c.send(JSON.stringify(a))}}(this._appId,this._apiKey,this._endpointOrigin,[s])}}var i=function(){var e=this;if(this.storeClick=function(t,r){var n=JSON.parse(localStorage.getItem("insights-store"))||{};n[t]={queryID:r,eventTimestamp:(new Date).getTime()},localStorage.setItem(e._storageKey,JSON.stringify(n))},this.getConversionObjectID=function(t){var r=e.getStorageData()[t];if(r&&r.queryID)return r.queryID},this.cleanOldStorage=function(e,t){var r=Object.keys(t);return r.length>0?r.reduce(function(r,n){var o=t[n];return Math.abs(e-o.eventTimestamp)/36e5<=6&&(r[n]=o),r},{}):{}},this.getStorageData=function(){return JSON.parse(localStorage.getItem("insights-store"))||{}},!function(e){try{var t=window[e],r="__storage_test__";return t.setItem(r,r),t.removeItem(r),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==storage.length}}("localStorage"))throw new Error("LocalStorage is not available");this._storageKey="insights-store";var t=(new Date).getTime(),r=this.getStorageData(),n=this.cleanOldStorage(t,r);localStorage.setItem(this._storageKey,JSON.stringify(n))},s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e,t){return e(t={exports:{}},t.exports),t.exports}var c=function(e){return e instanceof Buffer},u=a(function(e){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}),p=a(function(e,t){var r=/%[sdj%]/g;t.format=function(e){var t=arguments;if(!b(e)){for(var n=[],o=0;o<arguments.length;o++)n.push(i(t[o]));return n.join(" ")}o=1;for(var s=arguments,a=s.length,c=String(e).replace(r,function(e){if("%%"===e)return"%";if(o>=a)return e;switch(e){case"%s":return String(s[o++]);case"%d":return Number(s[o++]);case"%j":try{return JSON.stringify(s[o++])}catch(e){return"[Circular]"}default:return e}}),u=s[o];o<a;u=s[++o])g(u)||!D(u)?c+=" "+u:c+=" "+i(u);return c},t.deprecate=function(e,r){if(v(s.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var n=!1;return function(){if(!n){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),n=!0}return e.apply(this,arguments)}};var n,o={};function i(e,r){var n={seen:[],stylize:p};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&t._extend(n,r),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),l(n,e,n.depth)}function a(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function p(e,t){return e}function l(e,r,n){if(e.customInspect&&r&&O(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return b(o)||(o=l(e,o,n)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(b(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(w(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,r);if(i)return i;var s=Object.keys(r),a=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),I(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(r);if(0===s.length){if(O(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(m(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(E(r))return e.stylize(Date.prototype.toString.call(r),"date");if(I(r))return f(r)}var u,p="",D=!1,j=["{","}"];(d(r)&&(D=!0,j=["[","]"]),O(r))&&(p=" [Function"+(r.name?": "+r.name:"")+"]");return m(r)&&(p=" "+RegExp.prototype.toString.call(r)),E(r)&&(p=" "+Date.prototype.toUTCString.call(r)),I(r)&&(p=" "+f(r)),0!==s.length||D&&0!=r.length?n<0?m(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),u=D?function(e,t,r,n,o){for(var i=[],s=0,a=t.length;s<a;++s)k(t,String(s))?i.push(h(e,t,r,n,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(h(e,t,r,n,o,!0))}),i}(e,r,n,a,s):s.map(function(t){return h(e,r,n,a,t,D)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(u,p,j)):j[0]+p+j[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,r,n,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),k(n,o)||(s="["+o+"]"),a||(e.seen.indexOf(c.value)<0?(a=g(r)?l(e,c.value,null):l(e,c.value,r-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),v(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function d(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function g(e){return null===e}function w(e){return"number"==typeof e}function b(e){return"string"==typeof e}function v(e){return void 0===e}function m(e){return D(e)&&"[object RegExp]"===j(e)}function D(e){return"object"==typeof e&&null!==e}function E(e){return D(e)&&"[object Date]"===j(e)}function I(e){return D(e)&&("[object Error]"===j(e)||e instanceof Error)}function O(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(n)&&(n=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(n)){var r=process.pid;o[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else o[e]=function(){};return o[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=y,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=w,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=m,t.isObject=D,t.isDate=E,t.isError=I,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=c;var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,r;console.log("%s - %s",(e=new Date,r=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":"),[e.getDate(),S[e.getMonth()],r].join(" ")),t.format.apply(t,arguments))},t.inherits=u,t._extend=function(e,t){if(!t||!D(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}),l=(p.format,p.deprecate,p.debuglog,p.inspect,p.isArray,p.isBoolean,p.isNull,p.isNullOrUndefined,p.isNumber),f=(p.isString,p.isSymbol,p.isUndefined,p.isRegExp,p.isObject,p.isDate,p.isError,p.isFunction,p.isPrimitive,p.isBuffer,p.log,p.inherits,p._extend,["de","us"]),h=2592e6;var d,y,g,w,b=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},v="_ALGOLIA",m=function(e,t,r){var n=new Date;n.setTime(n.getTime()+r);var o="expires="+n.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"},D=function(e){for(var t=e+"=",r=decodeURIComponent(document.cookie).split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},E="ANONYMOUS_USER_TOKEN";Object.keys||(Object.keys=(d=Object.prototype.hasOwnProperty,y=!{toString:null}.propertyIsEnumerable("toString"),w=(g=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(e){if("function"!=typeof e&&("object"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var t,r,n=[];for(t in e)d.call(e,t)&&n.push(t);if(y)for(r=0;r<w;r++)d.call(e,g[r])&&n.push(g[r]);return n})),"function"!=typeof Object.assign&&(Object.assign=function(e,t){var r=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=r[o];if(null!=i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n});return new function(r){if(this._hasCredentials=!1,!document.addEventListener||!window)throw new Error("Browser does not support eventlistener or there is no window object.");this.storageManager=new i,this.processQueue=function(){var e=this,t=window.AlgoliaAnalyticsObject;t&&((window[t].queue||[]).forEach(function(t){var r=t[0],n=t[1];r&&"function"==typeof e[r]&&e[r](n)}),window[t]=function(t,r){e[t](r)})}.bind(this),this.sendEvent=o.bind(this),this.init=function(r){if(!r)throw new Error("Init function should be called with an object argument containing your apiKey and appId");if(e(r.apiKey)||!t(r.apiKey))throw new Error("apiKey is missing, please provide it so we can authenticate the application");if(e(r.appId)||!t(r.appId))throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");if(!e(r.region)&&-1===f.indexOf(r.region))throw new Error("optional region is incorrect, please provide either one of: "+f.join(", ")+".");if(!(e(r.cookieDuration)||l(r.cookieDuration)&&isFinite(r.cookieDuration)&&Math.floor(r.cookieDuration)===r.cookieDuration))throw new Error("optional cookieDuration is incorrect, expected an integer");this._apiKey=r.apiKey,this._appId=r.appId,this._userHasOptedOut=!!r.userHasOptedOut,this._region=r.region,this._endpointOrigin=r.region?"https://insights."+r.region+".algolia.io":"https://insights.algolia.io",this._cookieDuration=r.cookieDuration?r.cookieDuration:6*h,this._hasCredentials=!0}.bind(this),this.initSearch=function(e){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(!e)throw new Error("initSearch function requires an argument with getQueryID and hitsContainer arguments");if(!e.getQueryID||"function"!=typeof e.getQueryID)throw new Error("getQueryID must be a function that returns the queryID of the last search operation");this.getQueryID=e.getQueryID}.bind(this),this.ANONYMOUS_USER_TOKEN=E,this.setUserToken=function(e){if(e===E){var t=D(v);t&&""!==t&&t.startsWith("anonymous-")?this._userToken=t:(this._userToken="anonymous-"+b(),m(v,this._userToken,this._cookieDuration))}else this._userToken=e}.bind(this),this.getUserToken=function(){return this._userToken}.bind(this),this.clickedObjectIDsAfterSearch=function(e){if(!e)throw new Error("No params were sent to clickedObjectIDsAfterSearch function, please provide `queryID`,  `objectIDs` and `positions` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, click event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, click event can not be properly sent without");if(!e.positions)throw new Error("required positions parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.clickedObjectIDs=function(e){if(!e)throw new Error("No params were sent to clickedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required `objectIDs` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.clickedFilters=function(e){if(!e)throw new Error("No params were sent to clickedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required `filters` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}.bind(this),this.convertedObjectIDsAfterSearch=function(e){if(!e)throw new Error("No params were sent to convertedObjectIDsAfterSearch function, please provide `queryID` and `objectIDs` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, conversion event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.convertedObjectIDs=function(e){if(!e)throw new Error("No params were sent to convertedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.convertedFilters=function(e){if(!e)throw new Error("No params were sent to convertedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}.bind(this),this.viewedObjectIDs=function(e){if(!e)throw new Error("No params were sent to viewedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}.bind(this),this.viewedFilters=function(e){if(!e)throw new Error("No params were sent to viewedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}.bind(this),this.setUserToken(this.ANONYMOUS_USER_TOKEN),this.processQueue()}});
