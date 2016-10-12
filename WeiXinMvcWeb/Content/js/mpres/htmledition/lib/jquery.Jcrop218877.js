(function(e) {
e.Jcrop = function(t, n) {
function r(e) {
return Math.round(e) + "px";
}
function i(e) {
return P.baseClass + "-" + e;
}
function s() {
return e.fx.step.hasOwnProperty("backgroundColor");
}
function o(t) {
var n = e(t).offset();
return [ n.left, n.top ];
}
function u(e) {
return [ e.pageX - H[0], e.pageY - H[1] ];
}
function a(t) {
typeof t != "object" && (t = {}), P = e.extend(P, t), e.each([ "onChange", "onSelect", "onRelease", "onDblClick" ], function(e, t) {
typeof P[t] != "function" && (P[t] = function() {});
});
}
function f(e, t, n) {
H = o(z), vt.setCursor(e === "move" ? e : e + "-resize");
if (e === "move") return vt.activateHandlers(c(t), m, n);
var r = ht.getFixed(), i = h(e), s = ht.getCorner(h(i));
ht.setPressed(ht.getCorner(i)), ht.setCurrent(s), vt.activateHandlers(l(e, r), m, n);
}
function l(e, t) {
return function(n) {
if (!P.aspectRatio) switch (e) {
case "e":
n[1] = t.y2;
break;
case "w":
n[1] = t.y2;
break;
case "n":
n[0] = t.x2;
break;
case "s":
n[0] = t.x2;
} else switch (e) {
case "e":
n[1] = t.y + 1;
break;
case "w":
n[1] = t.y + 1;
break;
case "n":
n[0] = t.x + 1;
break;
case "s":
n[0] = t.x + 1;
}
ht.setCurrent(n), dt.update();
};
}
function c(e) {
var t = e;
return mt.watchKeys(), function(e) {
ht.moveOffset([ e[0] - t[0], e[1] - t[1] ]), t = e, dt.update();
};
}
function h(e) {
switch (e) {
case "n":
return "sw";
case "s":
return "nw";
case "e":
return "nw";
case "w":
return "ne";
case "ne":
return "sw";
case "nw":
return "se";
case "se":
return "nw";
case "sw":
return "ne";
}
}
function p(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(t)), t.stopPropagation(), t.preventDefault(), !1);
};
}
function d(e, t, n) {
var r = e.width(), i = e.height();
r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), st = e.width() / r, ot = e.height() / i, e.width(r).height(i);
}
function v(e) {
return {
x: e.x * st,
y: e.y * ot,
x2: e.x2 * st,
y2: e.y2 * ot,
w: e.w * st,
h: e.h * ot
};
}
function m(e) {
var t = ht.getFixed();
t.w > P.minSelect[0] && t.h > P.minSelect[1] ? (dt.enableHandles(), dt.done()) : dt.release(), vt.setCursor(P.allowSelect ? "crosshair" : "default");
}
function g(e) {
if (P.disabled) return !1;
if (!P.allowSelect) return !1;
at = !0, H = o(z), dt.disableHandles(), vt.setCursor("crosshair");
var t = u(e);
return ht.setPressed(t), dt.update(), vt.activateHandlers(y, m, e.type.substring(0, 5) === "touch"), mt.watchKeys(), e.stopPropagation(), e.preventDefault(), !1;
}
function y(e) {
ht.setCurrent(e), dt.update();
}
function b() {
var t = e("<div></div>").addClass(i("tracker"));
return j && t.css({
opacity: 0,
backgroundColor: "white"
}), t;
}
function w(e) {
V.removeClass().addClass(i("holder")).addClass(e);
}
function E(e, t) {
function n() {
window.setTimeout(b, c);
}
var r = e[0] / st, i = e[1] / ot, s = e[2] / st, o = e[3] / ot;
if (ft) return;
var u = ht.flipCoords(r, i, s, o), a = ht.getFixed(), f = [ a.x, a.y, a.x2, a.y2 ], l = f, c = P.animationDelay, h = u[0] - f[0], p = u[1] - f[1], d = u[2] - f[2], v = u[3] - f[3], m = 0, g = P.swingSpeed;
r = l[0], i = l[1], s = l[2], o = l[3], dt.animMode(!0);
var y, b = function() {
return function() {
m += (100 - m) / g, l[0] = Math.round(r + m / 100 * h), l[1] = Math.round(i + m / 100 * p), l[2] = Math.round(s + m / 100 * d), l[3] = Math.round(o + m / 100 * v), m >= 99.8 && (m = 100), m < 100 ? (x(l), n()) : (dt.done(), dt.animMode(!1), typeof t == "function" && t.call(gt));
};
}();
n();
}
function S(e) {
x([ e[0] / st, e[1] / ot, e[2] / st, e[3] / ot ]), P.onSelect.call(gt, v(ht.getFixed())), dt.enableHandles();
}
function x(e) {
ht.setPressed([ e[0], e[1] ]), ht.setCurrent([ e[2], e[3] ]), dt.update();
}
function T() {
return v(ht.getFixed());
}
function N() {
return ht.getFixed();
}
function C(e) {
a(e), D();
}
function k() {
P.disabled = !0, dt.disableHandles(), dt.setCursor("default"), vt.setCursor("default");
}
function L() {
P.disabled = !1, D();
}
function A() {
dt.done(), vt.activateHandlers(null, null);
}
function O() {
V.remove(), q.show(), q.css("visibility", "visible"), e(t).removeData("Jcrop");
}
function M(e, t) {
dt.release(), k();
var n = new Image;
n.onload = function() {
var r = n.width, i = n.height, s = P.boxWidth, o = P.boxHeight;
z.width(r).height(i), z.attr("src", e), $.attr("src", e), d(z, s, o), W = z.width(), X = z.height(), $.width(W).height(X), Y.width(W + G * 2).height(X + G * 2), V.width(W).height(X), pt.resize(W, X), L(), typeof t == "function" && t.call(gt);
}, n.src = e;
}
function _(e, t, n) {
var r = t || P.bgColor;
P.bgFade && s() && P.fadeTime && !n ? e.animate({
backgroundColor: r
}, {
queue: !1,
duration: P.fadeTime
}) : e.css("backgroundColor", r);
}
function D(e) {
P.allowResize ? e ? dt.enableOnly() : dt.enableHandles() : dt.disableHandles(), vt.setCursor(P.allowSelect ? "crosshair" : "default"), dt.setCursor(P.allowMove ? "move" : "default"), P.hasOwnProperty("trueSize") && (st = P.trueSize[0] / W, ot = P.trueSize[1] / X), P.hasOwnProperty("setSelect") && (S(P.setSelect), dt.done(), delete P.setSelect), pt.refresh(), P.bgColor != Z && (_(P.shade ? pt.getShades() : V, P.shade ? P.shadeColor || P.bgColor : P.bgColor), Z = P.bgColor), et != P.bgOpacity && (et = P.bgOpacity, P.shade ? pt.refresh() : dt.setBgOpacity(et)), tt = P.maxSize[0] || 0, nt = P.maxSize[1] || 0, rt = P.minSize[0] || 0, it = P.minSize[1] || 0, P.hasOwnProperty("outerImage") && (z.attr("src", P.outerImage), delete P.outerImage), dt.refresh();
}
var P = e.extend({}, e.Jcrop.defaults), H, B = navigator.userAgent.toLowerCase(), j = /msie/.test(B), F = /msie [1-6]\./.test(B);
typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), a(n);
var I = {
border: "none",
visibility: "visible",
margin: 0,
padding: 0,
position: "absolute",
top: 0,
left: 0
}, q = e(t), R = !0;
if (t.tagName == "IMG") {
if (q[0].width != 0 && q[0].height != 0) q.width(q[0].width), q.height(q[0].height); else {
var U = new Image;
U.src = q[0].src, q.width(U.width), q.height(U.height);
}
var z = q.clone().removeAttr("id").css(I).show();
z.width(q.width()), z.height(q.height()), q.after(z).hide();
} else z = q.css(I).show(), R = !1, P.shade === null && (P.shade = !0);
d(z, P.boxWidth, P.boxHeight);
var W = z.width(), X = z.height(), V = e("<div />").width(W).height(X).addClass(i("holder")).css({
position: "relative",
backgroundColor: P.bgColor
}).insertAfter(q).append(z);
P.addClass && V.addClass(P.addClass);
var $ = e("<div />"), J = e("<div />").width("100%").height("100%").css({
zIndex: 310,
position: "absolute",
overflow: "hidden"
}), K = e("<div />").width("100%").height("100%").css("zIndex", 320), Q = e("<div />").css({
position: "absolute",
zIndex: 600
}).dblclick(function() {
var e = ht.getFixed();
P.onDblClick.call(gt, e);
}).insertBefore(z).append(J, K);
R && ($ = e("<img />").attr("src", z.attr("src")).css(I).width(W).height(X), J.append($)), F && Q.css({
overflowY: "hidden"
});
var G = P.boundary, Y = b().width(W + G * 2).height(X + G * 2).css({
position: "absolute",
top: r(-G),
left: r(-G),
zIndex: 290
}).mousedown(g), Z = P.bgColor, et = P.bgOpacity, tt, nt, rt, it, st, ot, ut = !0, at, ft, lt;
H = o(z);
var ct = function() {
function e() {
var e = {}, t = [ "touchstart", "touchmove", "touchend" ], n = document.createElement("div"), r;
try {
for (r = 0; r < t.length; r++) {
var i = t[r];
i = "on" + i;
var s = i in n;
s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s;
}
return e.touchstart && e.touchend && e.touchmove;
} catch (o) {
return !1;
}
}
function t() {
return P.touchSupport === !0 || P.touchSupport === !1 ? P.touchSupport : e();
}
return {
createDragger: function(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(ct.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1);
};
},
newSelection: function(e) {
return g(ct.cfilter(e));
},
cfilter: function(e) {
return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e;
},
isSupported: e,
support: t()
};
}(), ht = function() {
function e(e) {
e = o(e), h = l = e[0], p = c = e[1];
}
function t(e) {
e = o(e), d = e[0] - h, v = e[1] - p, h = e[0], p = e[1];
}
function n() {
return [ d, v ];
}
function r(e) {
var t = e[0], n = e[1];
0 > l + t && (t -= t + l), 0 > c + n && (n -= n + c), X < p + n && (n += X - (p + n)), W < h + t && (t += W - (h + t)), l += t, h += t, c += n, p += n;
}
function i(e) {
var t = s();
switch (e) {
case "ne":
return [ t.x2, t.y ];
case "nw":
return [ t.x, t.y ];
case "se":
return [ t.x2, t.y2 ];
case "sw":
return [ t.x, t.y2 ];
}
}
function s() {
if (!P.aspectRatio) return a();
var e = P.aspectRatio, t = P.minSize[0] / st, n = P.maxSize[0] / st, r = P.maxSize[1] / ot, i = h - l, s = p - c, o = Math.abs(i), d = Math.abs(s), v = o / d, m, g, y, b;
return n === 0 && (n = W * 10), r === 0 && (r = X * 10), v < e ? (g = p, y = d * e, m = i < 0 ? l - y : y + l, m < 0 ? (m = 0, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c) : m > W && (m = W, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c)) : (m = h, b = o / e, g = s < 0 ? c - b : c + b, g < 0 ? (g = 0, y = Math.abs((g - c) * e), m = i < 0 ? l - y : y + l) : g > X && (g = X, y = Math.abs(g - c) * e, m = i < 0 ? l - y : y + l)), m > l ? (m - l < t ? m = l + t : m - l > n && (m = l + n), g > c ? g = c + (m - l) / e : g = c - (m - l) / e) : m < l && (l - m < t ? m = l - t : l - m > n && (m = l - n), g > c ? g = c + (l - m) / e : g = c - (l - m) / e), m < 0 ? (l -= m, m = 0) : m > W && (l -= m - W, m = W), g < 0 ? (c -= g, g = 0) : g > X && (c -= g - X, g = X), f(u(l, c, m, g));
}
function o(e) {
return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > W && (e[0] = W), e[1] > X && (e[1] = X), [ Math.round(e[0]), Math.round(e[1]) ];
}
function u(e, t, n, r) {
var i = e, s = n, o = t, u = r;
return n < e && (i = n, s = e), r < t && (o = r, u = t), [ i, o, s, u ];
}
function a() {
var e = h - l, t = p - c, n;
return tt && Math.abs(e) > tt && (h = e > 0 ? l + tt : l - tt), nt && Math.abs(t) > nt && (p = t > 0 ? c + nt : c - nt), it / ot && Math.abs(t) < it / ot && (p = t > 0 ? c + it / ot : c - it / ot), rt / st && Math.abs(e) < rt / st && (h = e > 0 ? l + rt / st : l - rt / st), l < 0 && (h -= l, l -= l), c < 0 && (p -= c, c -= c), h < 0 && (l -= h, h -= h), p < 0 && (c -= p, p -= p), h > W && (n = h - W, l -= n, h -= n), p > X && (n = p - X, c -= n, p -= n), l > W && (n = l - X, p -= n, c -= n), c > X && (n = c - X, p -= n, c -= n), f(u(l, c, h, p));
}
function f(e) {
return {
x: e[0],
y: e[1],
x2: e[2],
y2: e[3],
w: e[2] - e[0],
h: e[3] - e[1]
};
}
var l = 0, c = 0, h = 0, p = 0, d, v;
return {
flipCoords: u,
setPressed: e,
setCurrent: t,
getOffset: n,
moveOffset: r,
getCorner: i,
getFixed: s
};
}(), pt = function() {
function t(e, t) {
d.left.css({
height: r(t)
}), d.right.css({
height: r(t)
});
}
function n() {
return i(ht.getFixed());
}
function i(e) {
d.top.css({
left: r(e.x),
width: r(e.w),
height: r(e.y)
}), d.bottom.css({
top: r(e.y2),
left: r(e.x),
width: r(e.w),
height: r(X - e.y2)
}), d.right.css({
left: r(e.x2),
width: r(W - e.x2)
}), d.left.css({
width: r(e.x)
});
}
function s() {
return e("<div />").css({
position: "absolute",
backgroundColor: P.shadeColor || P.bgColor
}).appendTo(p);
}
function o() {
h || (h = !0, p.insertBefore(z), n(), dt.setBgOpacity(1, 0, 1), $.hide(), u(P.shadeColor || P.bgColor, 1), dt.isAwake() ? f(P.bgOpacity, 1) : f(1, 1));
}
function u(e, t) {
_(c(), e, t);
}
function a() {
h && (p.remove(), $.show(), h = !1, dt.isAwake() ? dt.setBgOpacity(P.bgOpacity, 1, 1) : (dt.setBgOpacity(1, 1, 1), dt.disableHandles()), _(V, 0, 1));
}
function f(e, t) {
h && (P.bgFade && !t ? p.animate({
opacity: 1 - e
}, {
queue: !1,
duration: P.fadeTime
}) : p.css({
opacity: 1 - e
}));
}
function l() {
P.shade ? o() : a(), dt.isAwake() && f(P.bgOpacity);
}
function c() {
return p.children();
}
var h = !1, p = e("<div />").css({
position: "absolute",
zIndex: 240,
opacity: 0
}), d = {
top: s(),
left: s().height(X),
right: s().height(X),
bottom: s()
};
return {
update: n,
updateRaw: i,
getShades: c,
setBgColor: u,
enable: o,
disable: a,
resize: t,
refresh: l,
opacity: f
};
}(), dt = function() {
function t(t) {
var n = e("<div />").css({
position: "absolute",
opacity: P.borderOpacity
}).addClass(i(t));
return J.append(n), n;
}
function n(t, n) {
var r = e("<div />").mousedown(p(t)).css({
cursor: t + "-resize",
position: "absolute",
zIndex: n
}).addClass("ord-" + t);
return ct.support && r.bind("touchstart.jcrop", ct.createDragger(t)), K.append(r), r;
}
function s(e) {
var t = P.handleSize, r = n(e, k++).css({
opacity: P.handleOpacity
}).addClass(i("handle"));
return t && r.width(t).height(t), r;
}
function o(e) {
return n(e, k++).addClass("jcrop-dragbar");
}
function u(e) {
var t;
for (t = 0; t < e.length; t++) O[e[t]] = o(e[t]);
}
function a(e) {
var n, r;
for (r = 0; r < e.length; r++) {
switch (e[r]) {
case "n":
n = "hline";
break;
case "s":
n = "hline bottom";
break;
case "e":
n = "vline right";
break;
case "w":
n = "vline";
}
L[e[r]] = t(n);
}
}
function f(e) {
var t;
for (t = 0; t < e.length; t++) A[e[t]] = s(e[t]);
}
function l(e, t) {
P.shade || $.css({
top: r(-t),
left: r(-e)
}), Q.css({
top: r(t),
left: r(e)
});
}
function c(e, t) {
Q.width(Math.round(e)).height(Math.round(t));
}
function h() {
var e = ht.getFixed();
ht.setPressed([ e.x, e.y ]), ht.setCurrent([ e.x2, e.y2 ]), d();
}
function d(e) {
if (C) return m(e);
}
function m(e) {
var t = ht.getFixed();
c(t.w, t.h), l(t.x, t.y), P.shade && pt.updateRaw(t), C || y(), e ? P.onSelect.call(gt, v(t)) : P.onChange.call(gt, v(t));
}
function g(e, t, n) {
if (!C && !t) return;
P.bgFade && !n ? z.animate({
opacity: e
}, {
queue: !1,
duration: P.fadeTime
}) : z.css("opacity", e);
}
function y() {
Q.show(), P.shade ? pt.opacity(et) : g(et, !0), C = !0;
}
function w() {
x(), Q.hide(), P.shade ? pt.opacity(1) : g(1), C = !1, P.onRelease.call(gt);
}
function E() {
M && K.show();
}
function S() {
M = !0;
if (P.allowResize) return K.show(), !0;
}
function x() {
M = !1, K.hide();
}
function T(e) {
e ? (ft = !0, x()) : (ft = !1, S());
}
function N() {
T(!1), h();
}
var C, k = 370, L = {}, A = {}, O = {}, M = !1;
P.dragEdges && e.isArray(P.createDragbars) && u(P.createDragbars), e.isArray(P.createHandles) && f(P.createHandles), P.drawBorders && e.isArray(P.createBorders) && a(P.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation();
});
var _ = b().mousedown(p("move")).css({
cursor: "move",
position: "absolute",
zIndex: 360
});
return ct.support && _.bind("touchstart.jcrop", ct.createDragger("move")), J.append(_), x(), {
updateVisible: d,
update: m,
release: w,
refresh: h,
isAwake: function() {
return C;
},
setCursor: function(e) {
_.css("cursor", e);
},
enableHandles: S,
enableOnly: function() {
M = !0;
},
showHandles: E,
disableHandles: x,
animMode: T,
setBgOpacity: g,
done: N
};
}(), vt = function() {
function t(t) {
Y.css({
zIndex: 450
}), t ? e(document).bind("touchmove.jcrop", o).bind("touchend.jcrop", a) : h && e(document).bind("mousemove.jcrop", r).bind("mouseup.jcrop", i);
}
function n() {
Y.css({
zIndex: 290
}), e(document).unbind(".jcrop");
}
function r(e) {
return l(u(e)), !1;
}
function i(e) {
return e.preventDefault(), e.stopPropagation(), at && (at = !1, c(u(e)), dt.isAwake() && P.onSelect.call(gt, v(ht.getFixed())), n(), l = function() {}, c = function() {}), !1;
}
function s(e, n, r) {
return at = !0, l = e, c = n, t(r), !1;
}
function o(e) {
return l(u(ct.cfilter(e))), !1;
}
function a(e) {
return i(ct.cfilter(e));
}
function f(e) {
Y.css("cursor", e);
}
var l = function() {}, c = function() {}, h = P.trackDocument;
return h || Y.mousemove(r).mouseup(i).mouseout(i), z.before(Y), {
activateHandlers: s,
setCursor: f
};
}(), mt = function() {
function t() {
P.keySupport && (s.show(), s.focus());
}
function n(e) {
s.hide();
}
function r(e, t, n) {
P.allowMove && (ht.moveOffset([ t, n ]), dt.updateVisible(!0)), e.preventDefault(), e.stopPropagation();
}
function i(e) {
if (e.ctrlKey || e.metaKey) return !0;
lt = e.shiftKey ? !0 : !1;
var t = lt ? 10 : 1;
switch (e.keyCode) {
case 37:
r(e, -t, 0);
break;
case 39:
r(e, t, 0);
break;
case 38:
r(e, 0, -t);
break;
case 40:
r(e, 0, t);
break;
case 27:
P.allowSelect && dt.release();
break;
case 9:
return !0;
}
return !1;
}
var s = e('<input type="radio" />').css({
position: "fixed",
left: "-120px",
width: "12px"
}).addClass("jcrop-keymgr"), o = e("<div />").css({
position: "absolute",
overflow: "hidden"
}).append(s);
return P.keySupport && (s.keydown(i).blur(n), F || !P.fixedSupport ? (s.css({
position: "absolute",
left: "-20px"
}), o.append(s).insertBefore(z)) : s.insertBefore(z)), {
watchKeys: t
};
}();
ct.support && Y.bind("touchstart.jcrop", ct.newSelection), K.hide(), D(!0);
var gt = {
setImage: M,
animateTo: E,
setSelect: S,
setOptions: C,
tellSelect: T,
tellScaled: N,
setClass: w,
disable: k,
enable: L,
cancel: A,
release: dt.release,
destroy: O,
focus: mt.watchKeys,
getBounds: function() {
return [ W * st, X * ot ];
},
getWidgetSize: function() {
return [ W, X ];
},
getScaleFactor: function() {
return [ st, ot ];
},
getOptions: function() {
return P;
},
ui: {
holder: V,
selection: Q
}
};
return j && V.bind("selectstart", function() {
return !1;
}), q.data("Jcrop", gt), gt;
}, e.fn.Jcrop = function(t, n) {
var r;
return this.each(function() {
if (e(this).data("Jcrop")) {
if (t === "api") return e(this).data("Jcrop");
e(this).data("Jcrop").setOptions(t);
} else this.tagName == "IMG" ? e.Jcrop.Loader(this, function() {
e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r);
}) : (e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r));
}), this;
}, e.Jcrop.Loader = function(t, n, r) {
function i() {
o.complete ? (s.unbind(".jcloader"), e.isFunction(n) && n.call(o)) : window.setTimeout(i, 50);
}
var s = e(t), o = s[0];
s.bind("load.jcloader", i).bind("error.jcloader", function(t) {
s.unbind(".jcloader"), e.isFunction(r) && r.call(o);
}), o.complete && e.isFunction(n) && (s.unbind(".jcloader"), n.call(o));
}, e.Jcrop.defaults = {
allowSelect: !0,
allowMove: !0,
allowResize: !0,
trackDocument: !0,
baseClass: "jcrop",
addClass: null,
bgColor: "black",
bgOpacity: .6,
bgFade: !1,
borderOpacity: .4,
handleOpacity: .5,
handleSize: null,
aspectRatio: 0,
keySupport: !0,
createHandles: [ "n", "s", "e", "w", "nw", "ne", "se", "sw" ],
createDragbars: [ "n", "s", "e", "w" ],
createBorders: [ "n", "s", "e", "w" ],
drawBorders: !0,
dragEdges: !0,
fixedSupport: !0,
touchSupport: null,
shade: null,
boxWidth: 0,
boxHeight: 0,
boundary: 2,
fadeTime: 400,
animationDelay: 20,
swingSpeed: 3,
minSelect: [ 0, 0 ],
maxSize: [ 0, 0 ],
minSize: [ 0, 0 ],
onChange: function() {},
onSelect: function() {},
onDblClick: function() {},
onRelease: function() {}
};
})(jQuery);