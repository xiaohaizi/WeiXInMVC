define("media/picture_preview.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = $("div.picture_preview_mask:eq(0)"), s = i.find("div.picture_preview_container:eq(0)"), o = s.find("a.check_origin:eq(0)"), u = s.find("a.download:eq(0)"), a = $(new Image), f = s.find("img.preview"), l = i.find("img.loading:eq(0)"), c = s.find(".switch-up:eq(0)"), h = s.find(".switch-down:eq(0)"), p = 300, d = wx.cgiData.file_item, v = wx.data.t, m = {}, g = null, y = !1, b = !1, w = 37, E = 39, S = 27;
x();
function x() {
T(), N(), C(), k(), A(), D(), P();
}
function T() {
$.each(d, function(e, t) {
m["" + t.file_id] = e;
});
}
function N() {
c.click(j), h.click(F);
}
function C() {
$(document).on("keydown", function(e) {
e.keyCode === S && _();
if (!y || b) return;
e.keyCode === w && (e.preventDefault(), j()), e.keyCode === E && (e.preventDefault(), F());
});
}
function k() {
$(document).on("click", "a.media_img", null, function(e) {
e.preventDefault();
var t = $(e.currentTarget).attr("href");
g = t.match(/fileId=\d+/)[0].replace("fileId=", "");
var n = m[g];
I(n), L(t);
});
}
function L(e) {
O(e), M();
}
function A() {
i.on("click", function(e) {
$(e.target).hasClass("picture_preview_mask") && _();
});
}
function O(e) {
e && (a.attr("src") != e ? (a.attr("src", e), H(), b = !0) : f.show());
}
function M() {
y = !0, i.fadeIn(p);
}
function _() {
y = !1, b = !1, s.hide(), i.fadeOut(p, function() {
f.hide();
});
}
function D() {
a.on("load", function() {
b = !1, B();
var e = $(window), t = 80, n = e.width() - t, r = e.height() - t, i = a[0].width, l = a[0].height, c = 1, h = a.attr("src");
while (i * c >= n || l * c >= r) c -= .1;
s.width(i * c), s.height(l * c), s.fadeIn(p), f.attr("src", h), f.show(), u.attr("href", "/cgi-bin/downloadfile?token=" + v + "&fileid=" + g), o.attr("href", h);
});
}
function P() {
console.log("auto resize");
}
function H() {
l.show();
}
function B() {
l.hide();
}
function j() {
if (b) return;
var e = m[g];
if (e === 0) return;
e--, I(e), g = d[e].file_id;
var t = W(g);
O(t);
}
function F() {
if (b) return;
var e = m[g];
if (e === d.length - 1) return;
e++, I(e), g = d[e].file_id;
var t = W(g);
O(t);
}
function I(e) {
e === 0 ? q() : U(), e === d.length - 1 ? R() : z();
}
function q() {
c.addClass("disable");
}
function R() {
h.addClass("disable");
}
function U() {
c.removeClass("disable");
}
function z() {
h.removeClass("disable");
}
function W(e) {
return "/cgi-bin/getimgdata?token=" + v + "&msgid=&mode=large&source=file&fileId=" + e + "&ow=-1";
}
} catch (X) {
wx.jslog({
src: "media/picture_preview.js"
}, X);
}
});