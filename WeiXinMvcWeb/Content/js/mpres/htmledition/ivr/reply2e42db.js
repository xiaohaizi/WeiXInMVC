define("ivr/reply.js",["common/wx/popup.js","ivr/ivr_cgi.js","common/wx/Cgi.js","common/wx/dialog.js","common/wx/richEditor/msgSender.js","common/wx/popover.js","common/wx/time.js","common/wx/ban.js","common/wx/Tips.js","cardticket/parse_data.js"],function(t){
"use strict";
function e(){
var t;
y&&8==y.type?x.getCardData(y.content,function(e){
e.type=16,t=new l($("#js_msgSender"),{
data:e,
acl:{
can_text_msg:1,
can_image_msg:1,
can_voice_msg:1,
can_video_msg:1,
can_card_msg:wx.acl.msg_acl.can_card_msg
}
});
}):t=new l($("#js_msgSender"),{
data:y,
acl:{
can_text_msg:1,
can_image_msg:1,
can_voice_msg:1,
can_video_msg:1,
can_card_msg:wx.acl.msg_acl.can_card_msg
}
}),$("#js_save").click(function(){
var e=$(this);
if(!e.hasClass("btn_disabled")){
var a=t.getData(),n={};
a.error||(a=a.data,n.type=j[a.type]||a.type,n.appmsgid=a.app_id,n.fileid=a.file_id,
n.content=a.content,n.ruleid=b,n.iswork=h,n.replytype=w,a.cardid&&(n.content=a.cardid,
n.type=8),e.disable("btn_disabled").removeClass("btn_primary"),d.replySave(n,function(){
e.enable("btn_disabled").addClass("btn_primary"),$("#js_del").enable("btn_disabled").addClass("btn_default");
}));
}
}),$("#js_del").click(function(){
var e=$(this);
$(this).hasClass("btn_disabled")||new p({
dom:e,
content:"删除后，关注该公众号的用户将不再接收该回复，确定删除？",
place:"bottom",
margin:"right",
hover:!0,
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
d.replyDel(b,w,function(){
t.clear(),b=h="",$("#js_del").disable("btn_disabled");
}),this.hide();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
},
type:"default"
}]
});
}),$("#div_stop .btn_primary").click(function(){
i(!0);
}),$("#div_start .btn_warn").click(function(){
i(!1);
}),$("#icon_temp").mouseover(function(){
new p({
dom:$("#icon_temp"),
content:$("#pop_desc").html(),
hover:!0
});
}),$(window).on("keyup",function(){
$(".js_warn").hide();
}),a();
}
function a(){
$(".detail_desc").click(function(){
$("#detail_pop").popup({
buttons:[{
text:"我知道了",
click:function(){
this.hide();
},
type:"primary"
}],
title:"提示"
});
});
}
function n(){
b||$("#js_del").disable("btn_disabled"),r.is.autoReply?($("#div_start").show(),$("#div_stop").hide(),
$("#div_replyContent").show()):($("#div_start").hide(),$("#div_stop").show(),$("#div_replyContent").hide()),
r.is.isOpen||($("#div_replyContent").hide(),$("#div_alertTips").show(),$("#btn_start").removeClass("btn_primary").addClass("btn_disabled"),
$("#btn_stop").removeClass("btn_warn").addClass("btn_disabled"));
}
function i(t){
var e,a={
type:"POST",
url:"/misc/skeyform?form=advancedswitchform&lang=zh_CN",
dataType:"json"
},i=t?1:0,s=4,o=["关闭自动回复之后，将立即对所有用户生效。确认关闭？","开启自动回复之后，将立即对所有用户生效。确认开启？"];
_.show({
type:"warn",
msg:"操作确认|"+o[i?1:0],
buttons:[{
text:"确定",
click:function(){
e=$.extend(!0,{},a,{
data:{
flag:i,
type:s,
token:wx.data.t
},
success:function(t){
0==t.base_resp.ret?(v.suc("操作成功"),replyData.is.autoReply=i,n()):v.err("系统发生错误，请稍后重试");
}
}),$.ajax(e),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
}
function s(){
var t="";
if("1"==wx.cgiData.authrized){
var e=wx.cgiData.auth_info;
e&&e.length>0?$.each(e,function(e,a){
t.length>0&&(t+="、"),t+=a.component_name;
}):t="未知",$(".js_authorized").show().find(".js_auth_name").text(t);
}
}
function o(){
s(),n(),e(),f(c.func_ban_info,"reply");
}
t("common/wx/popup.js");
var c=wx.cgiData,r=replyData||{},d=(template.render,t("ivr/ivr_cgi.js")),m=t("common/wx/Cgi.js"),_=t("common/wx/dialog.js"),l=t("common/wx/richEditor/msgSender.js"),p=t("common/wx/popover.js"),u=t("common/wx/time.js"),f=t("common/wx/ban.js"),v=t("common/wx/Tips.js"),g=t("cardticket/parse_data.js");
c.data&&c.data.time&&(c.data.time=u.timeFormat(c.data.time));
var b=c.rule_id,h=c.iswork,w=c.replytype,y=c.data;
y&&6==y.type&&(y=null);
var j={
15:7,
21:9
},x=function(){
function t(t,a){
e[t]&&a&&a(e[t]),m.get("/merchant/electroniccardmgr?action=get&card_id="+t,function(n){
if(0==n.base_resp.ret&&n.card_detail){
var i=$.parseJSON(n.card_detail);
i=g.parse_cardticket(i),e[t]=i,a&&a(i);
}
});
}
var e={};
return{
getCardData:t
};
}();
o();
});