var BJ_WRAP=function(a){if(a.BJ_REPORT){var b,c=function(b){a.BJ_REPORT.report(b)},d=a.BJ_REPORT.tryJs=function(a){return a&&(c=a),d},e=function(a,b){var c;for(c in b)a[c]=b[c]},f=function(a){return"function"==typeof a},g=function(d,e){return function(){try{return d.apply(this,e||arguments)}catch(f){if(c(f),f.stack&&console&&console.error&&console.error("[BJ-REPORT]",f.stack),!b){var g=a.onerror;a.onerror=function(){},b=setTimeout(function(){a.onerror=g,b=null},50)}throw f}}},h=function(a){return function(){for(var b,c=[],d=0,e=arguments.length;e>d;d++)b=arguments[d],f(b)&&(b=g(b)),c.push(b);return a.apply(this,c)}},i=function(a){return function(b,c){if("string"==typeof b)try{b=new Function(b)}catch(d){throw d}var e=[].slice.call(arguments,2);return b=g(b,e.length&&e),a(b,c)}},j=function(a,b){return function(){for(var c,d,e=[],h=0,i=arguments.length;i>h;h++)c=arguments[h],f(c)&&(d=g(c))&&(c.tryWrap=d)&&(c=d),e.push(c);return a.apply(b||this,e)}},k=function(a){var b,c;for(b in a)c=a[b],f(c)&&(a[b]=g(c));return a};d.spyJquery=function(){var b=a.$;if(!b||!b.event)return d;var c=b.event.add,e=b.ajax,g=b.event.remove;if(c&&(b.event.add=j(c),b.event.remove=function(){for(var a,b=[],c=0,d=arguments.length;d>c;c++)a=arguments[c],f(a)&&(a=a.tryWrap),b.push(a);return g.apply(this,b)}),e&&(b.ajax=function(a,c){return c||(c=a,a=void 0),k(c),a?e.call(b,a,c):e.call(b,c)}),$.zepto){var h=b.fn.on,i=b.fn.off;b.fn.on=j(h),b.fn.off=function(){for(var a,b=[],c=0,d=arguments.length;d>c;c++)a=arguments[c],f(a)&&(a=a.tryWrap),b.push(a);return i.apply(this,b)}}return d},d.spyModules=function(){var b=a.require,c=a.define;return c&&c.amd&&b&&(a.require=h(b),e(a.require,b),a.define=h(c),e(a.define,c)),a.seajs&&c&&(a.define=function(){for(var a,b=[],d=0,e=arguments.length;e>d;d++)a=arguments[d],f(a)&&(a=g(a),a.toString=function(a){return function(){return a.toString()}}(arguments[d])),b.push(a);return c.apply(this,b)},a.seajs.use=h(a.seajs.use),e(a.define,c)),d},d.spySystem=function(){return a.setTimeout=i(a.setTimeout),a.setInterval=i(a.setInterval),d},d.spyCustom=function(a){return f(a)?g(a):k(a)},d.spyAll=function(){return d.spyJquery().spyModules().spySystem(),d}}};"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=BJ_WRAP),exports.BJ_WRAP=BJ_WRAP);