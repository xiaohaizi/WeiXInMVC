define("home/index.js",["common/wx/Cgi.js","common/wx/dialog.js","biz_common/moment.js","biz_common/cookie.js","common/wx/pagebar.js","common/wx/popup.js","common/wx/Tips.js","common/wx/upload.js","common/wx/popover.js","safe/Scan.js","common/wx/ban.js","biz_common/utils/wxgspeedsdk.js"],function(e){
"use strict";
var t=template.render,n=e("common/wx/Cgi.js"),i=e("common/wx/dialog.js"),c=e("biz_common/moment.js"),o=e("biz_common/cookie.js"),a=e("common/wx/pagebar.js"),s=(e("common/wx/popup.js"),
e("common/wx/Tips.js")),r=(e("common/wx/upload.js"),e("common/wx/popover.js")),_=wx.cgiData,f=(e("safe/Scan.js"),
e("common/wx/ban.js"));
!function(){
var e,c,o,a,f,u=$("#js_div_bank_verify"),d=new Date(1e3*wx.cgiData.bank_deadline),l=d.getMonth()+1+"月"+d.getDate()+"日";
$("#js_div_bank_deadline").html(l),o=$("#js_btn_show_remit_code");
var m,p=!0;
if(o.length>0){
m=new r({
dom:o,
content:t("tpl_bank_verify",{}),
place:"bottom",
margin:"center",
hover:!1,
addCls:"js_pop_remit_code"
}),m.hide(),e=$("#js_btn_remit_code_submit"),c=$("#js_btn_remit_code_cancel"),f=$(".js_input_remit_code"),
a=$(".js_txt_remit_code_prefix"),o.on("click",function(){
p?(m.show(),f.eq(0).focus()):m.hide(),p=!p;
}),c.on("click",function(){
m.hide(),p=!0;
});
var h=_.remit_code_prefix.split("");
if(0==h.length)a.remove(),f.parents(".js_pop_remit_code").width("auto"),m.resetPosition();else for(var g=0;g<h.length;g++)a.eq(g).html(h[g]);
var k=f.length;
f.each(function(e){
$(this).data("index",e).data("oldvalue",""),$(this).on("keyup",function(e){
var t=$(this).val(),n=$(this).data("oldvalue"),i=1*$(this).data("index");
8==e.keyCode&&""==n&&""==t?i>0&&f.eq(i-1).focus().select():""!=t&&k-1>i&&f.eq(i+1).focus(),
$(this).data("oldvalue",t);
});
}),f.on("focus",function(){
$(this).select();
}),e.click(function(){
var t="";
return f.each(function(){
t+=$(this).val();
}),""==t?(s.err("请输入验证码"),!1):0==/\d{6}/.test(t)?(s.err("验证码为6位数字"),!1):(e.btn(!1),
void n.post({
url:"/acct/bankacctinfo",
data:{
action:"verify",
code:t
},
mask:!1
},function(t){
e.btn(!0);
var i=5;
0==t.base_resp.ret?1==t.success?(s.suc("验证成功，可正常使用公众平台"),m.remove(),u.hide()):s.err("验证码输入错误，你还有"+t.left_times+"次机会填写，3次错误帐号将被冻结",i):91==t.base_resp.ret?s.suc("你已经成功验证过打款的备注码，请勿重复验证",i):200072==t.base_resp.ret?s.suc("你已成功验证过打款备注码，请勿重复验证",i):200073==t.base_resp.ret?s.err("该帐号已经无法进行此操作",i):63==t.base_resp.ret?s.err("您已经用完3次填写机会，帐号将被冻结",i):62==t.base_resp.ret?s.err("您已经多次重填失败，无法再次提交对公帐号信息，帐号将被冻结",i):61==t.base_resp.ret?s.err("已经过期，无法提交对公帐号信息，帐号将被冻结",i):(n.handleRet(t,{
id:64462,
key:20,
url:"/acct/bankacctinfo?action=verify"
}),s.err("系统错误，请重试"));
}));
});
}
1==wx.cgiData.force_remit_verify&&0==wx.cgiData.bank_verify_status&&i.show({
type:"info",
title:"注意",
msg:"注意|帐号需补充对公账户打款身份验证流程。请在%s前完成，否则公众号将被冻结。".sprintf(l),
buttons:[{
text:"去验证",
type:"primary",
click:function(){
location.href=wx.url("/acct/bankacctinfo?action=get");
}
}]
});
}(),function(){
if(1==_.show_verify_warning){
var e=new Date(1e3*_.verify_deadline),t="%s年%s月%s日".sprintf(e.getFullYear(),e.getMonth()+1,e.getDate()),n="认证提醒|由于未验证主体真实性，暂时无法使用公众平台群发功能和高级功能，请尽快申请微信认证。如果在%s之前未申请微信认证，该公众帐号将被注销。".sprintf(t);
1==wx.cgiData.nickname_invade&&(n+="你申请的公众帐号名称需要进一步提交相应资料，你可在认证流程中完成名称修改。");
{
i.show({
type:"info",
title:"提醒",
msg:n,
buttons:[{
text:"去认证",
click:function(){
location.href=wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});
}
_.exist_appsecret_danger=0;
}
}(),function(){
var e=o.get("annual_review_dialog");
if(1==_.wxverify_annual_review&&!e){
o.set("annual_review_dialog",1,1,{
domain:"mp.weixin.qq.com"
});
var t;
t=1e3*_.wxverify_expired_time>+new Date?"你的微信认证即将到期，请尽快进行年审|你好，你的微信认证将于%s到期，请尽快进行认证年审，否则将失去认证标识和相关接口权限——订阅号将无法使用自定义菜单，服务号的高级接口、多客服接口及微信支付接口将被停用。".sprintf("<span class='mini_tips warn'>"+c.unix(_.wxverify_expired_time).format("YYYY年MM月DD日")+"</span>"):"你的微信认证即将到期，请尽快进行年审|你好，请尽快进行认证年审，否则将失去认证标识和相关接口权限——订阅号将无法使用自定义菜单，服务号的高级接口、多客服接口及微信支付接口将被停用。";
{
i.show({
type:"info",
title:"微信认证提示",
msg:t,
buttons:[{
text:"去认证",
click:function(){
location.href=wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});
}
_.exist_appsecret_danger=0;
}
}(),function(){
if(_.exist_appsecret_danger){
i.show({
type:"info",
title:"提示",
msg:"你的公众号存在安全风险，开发者AppSecret已泄露|你的公众号存在安全风险，开发者AppSecret已泄露，可能在你不知情的情况下进行群发。请前往开发者中心重置AppSecret，并通过公众号登录授权安全地接入正规的公众号第三方平台。",
buttons:[{
text:"去修改",
type:"primary",
click:function(){
location.href=wx.url("/advanced/advanced?action=dev&t=advanced/dev");
}
},{
text:"知道了，暂不处理",
type:"normal",
click:function(){
this.remove();
}
}]
});
}
}(),function(){
var e=o.get("noticeLoginFlag");
seajs.use("biz_web/lib/store.js",function(){
"0"!=e&&e&&n.get({
mask:!1,
url:wx.url("/cgi-bin/sysnotify?f=json&begin=0&count=5")
},function(e){
if(e&&e.base_resp&&0==e.base_resp.ret&&e.Count){
for(var t=[],i=e.List,c=e.Count,a=function(e,t){
var n={
1:"你的群发",
2:"你的开发者申请",
3:"你的头像更改",
4:"你的昵称修改",
5:"你的功能介绍更改",
6:"你的信息登记",
7:"你的信息登记",
8:"你的信息登记",
9:"你的信息登记",
10:"你的信息登记",
11:"你的自定义菜单申请",
12:"你的商户功能权限申请",
14:"微信支付",
15:"微信支付",
16:"微信支付",
18:"微信认证",
19:"微信认证",
22:"商户功能初审",
23:"模板消息申请",
24:"商品购买测试链接",
26:"修改商户功能设置"
},i="";
return 3==t?i="已经通过审核":2==t&&(i="审核不通过"),"undefined"!=typeof n[e]?n[e]+i:"";
},s=0;c>s;++s){
var r=i[s];
t.push({
text:1==r.NotifyMsgType?a(r.CheckType,r.CheckStatus):r.Title,
url:wx.url("/cgi-bin/frame?t=notification/index_frame&selectid="+r.Id),
level:r.Level
});
}
seajs.use("common/wx/noticeBox",function(e){
new e({
container:"#accountArea",
list:t
}),$("#accountArea .jsNoticeClose").click(function(){
o.set("noticeLoginFlag",0,null,{
path:"/"
}),$("#accountArea").unbind("mouseover").removeClass("on").find(".account_message_box").remove();
});
});
}
e&&e.base_resp&&0!=e.base_resp.ret&&n.handleRet(e,{
id:64462,
key:21,
url:"/cgi-bin/sysnotify"
});
});
});
}(),function(){
{
var e=wx.cgiData.total_count,t=wx.cgiData.count,n=wx.cgiData.begin;
new a({
container:".pageNavigator",
perPage:t,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:e,
callback:function(e){
var t=e.currentPage;
if(t!=n)return t--,location.href=wx.url("/cgi-bin/home?t=home/index&start="+(t+1)),
!1;
}
});
}
}(),function(){
for(var e=_.func_ban_info,n={},i=0;i<e.length;i++)n[e[i].reason_id]||(n[e[i].reason_id]=[]),
n[e[i].reason_id].push({
func_id:e[i].func_id,
ban_time:e[i].ban_time,
unlock_time:e[i].unlock_time
});
var c=f.getReason("default");
for(var o in n){
for(var a,s=f.getReason(o),r='你的帐号<a href="'+(s.pc_url?s.pc_url:c.pc_url)+'">'+s.reason_description+"</a>，",i=0,u=n[o].length;u>i;i++)n[o][i].ban_time===n[o][i].unlock_time?r+="已被永久屏蔽"+f.getTypeName(n[o][i].func_id):(a=new Date(1e3*n[o][i].unlock_time),
r+="已被屏蔽",r+=f.getTypeName(n[o][i].func_id),r+="至",r+=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()),
r+=i==u-1?"。":"；";
var d=$(t("js_ban_tpl",{
banid:o,
wording:r
})).prependTo($(".col_main"));
d.find("span.js_ban_wording").height()>40&&d.find(".mini_tips").css("line-height","1.6").css("height","auto").css("min-height","40px");
}
}(),function(){
function e(){
function t(){
$(".js_force_check_loading").show(),$(".js_force_check_scanning").hide(),$(".js_force_check_done").hide();
}
function i(){
$(".js_force_check_loading").hide(),$(".js_force_check_scanning").show(),$(".js_force_check_done").hide();
}
function a(){
$(".js_force_check_loading").hide(),$(".js_force_check_scanning").hide(),$(".js_force_check_done").show();
}
function r(){
n.post({
url:wx.url("/misc/safeassistant"),
data:{
action:"get_ticket"
}
},function(e){
return e&&e.base_resp&&0==e.base_resp.ret?void _(e.ticket):void s.err("系统错误，请稍后重试");
});
}
function _(e){
n.post({
url:"/safe/safeqrconnect",
mask:!1,
data:{
action:"check",
type:"force_check",
appid:"wx3a432d2dbe2442ce",
scope:"snsapi_contact",
state:0,
redirect_uri:"https://mp.weixin.qq.com"
}
},function(t){
return t&&t.uuid?void f(e,t.uuid):void s.err("系统错误，请稍后重试");
});
}
function f(e,t){
var o="https://mp.weixin.qq.com/safe/safeqrcode?action=check&type=force_check&auth=ticket&ticket=%s&uuid=%s".sprintf(e,t);
$(".js_force_check_qrcode").attr("src",o).show(),i(),c=setInterval(function(){
n.get({
url:"/safe/safeuuid?timespam="+(new Date).valueOf()+"&uuid="+t,
mask:!1
},function(e){
if(!e||!e.errcode)return void clearInterval(c);
switch(1*e.errcode){
case 401:
break;

case 403:
u();
break;

case 404:
600==e.check_status?d():601==e.check_status?l():602==e.check_status&&l();
break;

case 405:
m();
break;

default:
s.err("扫码超时，请刷新重试"),clearInterval(c);
}
});
},1e3);
}
function u(){}
function d(){}
function l(){
$(".js_force_check_before").hide(),$(".js_force_check_fail").show(),e();
}
function m(){
a(),$(".js_force_check_before").hide(),$(".js_force_check_success").show(),clearInterval(c),
o.find(".js_btn").click(function(){
$(this).btn(!1),setTimeout(function(){
location.reload();
},500);
});
}
t(),clearInterval(c),r();
}
function t(e){
var t=new Date(1e3*e);
return t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日";
}
function i(){
o=$("#tpl_force_check").popup({
title:"验证主体身份",
width:960,
data:$.extend(!0,{},_.force_check_info,{
status:!0
}),
buttons:[{
text:"确定",
type:"primary",
click:function(){
this.hide();
}
}],
onShow:function(){
this.$dialogWrp.addClass("index_confirm_dialog"),e();
},
onHide:function(){
clearInterval(c),this.remove();
}
});
}
var c,o;
if(_.force_check_info.is_force_check){
if($(".js_force_check").show().find(".js_force_check_date").text(t(_.force_check_info.expire_time)),
_.force_check_info.expire_time_str=t(_.force_check_info.expire_time),1==_.force_check_info.check_status)return void $(".js_force_check").find(".js_force_check_btn").text("审核中").css("color","#aaa").disable();
i(),$(".js_force_check_btn").click(function(){
i();
});
}
}();
var u=e("biz_common/utils/wxgspeedsdk.js");
u.setBasicTime({
uin:wx&&wx.data&&wx.data.uin||0,
pid:35
}),u.send();
});