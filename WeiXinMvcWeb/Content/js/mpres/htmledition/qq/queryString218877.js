define("common/qq/queryString.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
function i(e) {
this.url = e || location.href;
}
i.prototype = {
constructor: i,
add: function(e, t) {
if (typeof t == "undefined") return this;
var n = this.url.indexOf("?"), r = this.url.indexOf("#"), i, s = this.url, o = "";
return i = (n >= 0 ? "&" : "?") + e + "=" + t, r >= 0 && (s = this.url.substring(0, r), o = this.url.substring(r)), this.url = s + i + o, this;
},
replace: function(e, t) {
return typeof t == "undefined" ? this : (this.remove(e), this.add(e, t), this);
},
replaceAll: function(e) {
if (typeof e != "object" || e == null) return this;
for (var t in e) e.hasOwnProperty(t) && this.replace(t, encodeURIComponent(e[t]));
return this;
},
remove: function(e) {
var t = new RegExp("([?&])" + e + "=[^&#]*([&#])?");
return this.url = this.url.replace(t, function(e, t, n) {
return t === "?" ? t : n || "";
}), this;
},
getUrl: function() {
return this.url;
}
}, i.replace = function(e, t, n) {
var r = new i(e);
return r.replace(t, n), r.getUrl();
}, n.exports = i;
} catch (s) {
wx.jslog({
src: "common/qq/queryString.js"
}, s);
}
});