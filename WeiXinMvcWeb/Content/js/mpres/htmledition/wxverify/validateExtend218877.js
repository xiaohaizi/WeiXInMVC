define("wxverify/validateExtend.js", [ "biz_common/jquery.validate.js", "common/qq/prototype.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("biz_common/jquery.validate.js"), s = i.rules, o = e("common/qq/prototype.js"), u = {
timeDelta: function(e) {
var t = new Date;
return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()) - t) / 1e3 / 24 / 3600);
},
newDate: function(e) {
var t = e.split("-");
return new Date(t[0], parseInt(t[1], 10) - 1, t[2]);
}
};
$.validator.addMethod("rangelen", function(e, t, n) {
e = $.trim(e) + "";
var r = n[0], i = n[1];
return e.len() >= r && e.len() <= i;
}, "字数必须在{0}到{1}之间"), $.validator.addMethod("trimemail", function(e, t, n) {
return e = $.trim(e), this.optional(t) || s.email(e, n);
}, "请输入正确的邮箱格式"), $.validator.addMethod("verifycode", function(e, t) {
return e = $.trim(e), /^\d{6}$/.test(e);
}, "验证码应为6位数字"), $.validator.addMethod("postcode", function(e, t) {
return e = $.trim(e), /^\d{6}$/.test(e);
}, "请输入正确的邮编格式"), $.validator.addMethod("orgcode", function(e, t) {
return e = $.trim(e), /^[\d|A-Z]{8,8}-[\d|A-Z]{1,1}$/.test(e);
}, "请输入正确的组织机构代码。示例：12345678-9。"), $.validator.addMethod("foundationdate", function(e, t) {
var n;
return e = $.trim(e), n = !/^\d{4,4}-\d{2,2}-\d{2,2}$/.test(e) || u.timeDelta(u.newDate(e)) > 0, !n;
}, "成立日期有误，请重新填写"), $.validator.addMethod("deadline", function(e, t) {
var n;
return e = $.trim(e), n = !$("#long_date").is(":checked") && (!/^\d{4}-\d{2}-\d{2}$/.test(e) || u.timeDelta(u.newDate(e)) < 0), !n;
}, "营业期限已过，请重新填写"), $.validator.addMethod("nickname", function(e, t) {
return e = $.trim(e), e.bytes() <= 50;
}, "公众号名称过长"), $.validator.addMethod("realname", function(e, t) {
return e = $.trim(e), /^[\u4e00-\u9fa5]+$/.test(e) || /^[a-zA-Z][a-zA-Z\s]*$/.test(e);
}, "人名只能是中文或者英文");
} catch (a) {
wx.jslog({
src: "wxverify/validateExtend.js"
}, a);
}
});