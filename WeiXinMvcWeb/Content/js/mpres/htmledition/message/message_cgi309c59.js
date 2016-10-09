define("message/message_cgi.js",["common/wx/Tips.js","common/wx/Cgi.js","common/wx/dialog.js","resp_types/base_resp.rt.js"],function(e,s,r){
"use strict";
var n={
masssend:"/cgi-bin/masssend?t=ajax-response",
massdel:"/cgi-bin/masssendpage?action=delete",
star:"/cgi-bin/setstarmessage?t=ajax-setstarmessage&only_cdn=0",
save:"/cgi-bin/savemsgtofile?t=ajax-response&only_cdn=0",
sendMsg:"/cgi-bin/singlesend?t=ajax-response&f=json",
getNewMsg:"/cgi-bin/singlesendpage?tofakeid=%s&f=json&action=sync&lastmsgfromfakeid=%s&lastmsgid=%s&createtime=%s",
getNewMsgCount:"/cgi-bin/getnewmsgnum?f=json&t=ajax-getmsgnum&lastmsgid=",
pageNav:"/cgi-bin/message?f=json&offset=%s&day=%s&keyword=%s&action=%s&frommsgid=%s&count=%s",
searchMsgByKeyword:"/cgi-bin/getmessage?t=ajax-message&count=10&keyword=",
checkcopyright:"/cgi-bin/masssend?action=get_appmsg_copyright_stat",
checkSponsorAd:"/cgi-bin/masssend?action=check_ad"
},t=e("common/wx/Tips.js"),i=e("common/wx/Cgi.js"),o=e("common/wx/dialog.js"),a=e("resp_types/base_resp.rt.js");
r.exports={
masssend:function(e,s,r){
i.post({
url:wx.url(n.masssend),
data:e,
rtDesc:$.extend({},a,{
month_max_count:"number",
month_cur_count:"number",
pub_product_count:"number"
}),
error:function(){
t.err("发送失败"),r&&r();
}
},function(e){
if(!e||!e.base_resp)return t.err("发送失败"),void(r&&r(e));
var n=e.base_resp.ret;
if("0"==n)return t.suc("发送成功"),void(s&&s(e));
if("64004"==n)t.err("今天的群发数量已到，无法群发");else if("67008"==n)t.err("消息中可能含有具备安全风险的链接，请检查");else if("200008"==n)t.err("请输入验证码");else if("14002"==n)t.err("没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行卡券投放。");else if("200001"==n)t.err("文章包含的语音已被删除，请重新添加。");else if("14003"==n)t.err("投放用户缺少测试权限，请先设置白名单");else if("67010"==n);else if("155001"==n){
var a=e.month_cur_count>=e.month_max_count?"本月发表付费文章已达10篇|每个月发送的付费文章最多10篇，本月你已超过限制数量，不能再发送付费文章":"本月发表付费文章已达10篇|每个月发送的付费文章最多10篇，本月你还可以发送"+(e.month_max_count-e.month_cur_count)+"篇付费文章，请重新设置。";
o.show({
type:"warn",
msg:a,
buttons:[{
text:"关闭",
click:function(){
this.remove();
}
}]
});
}else"1530505"!=n&&i.handleRet(e,{
id:64462,
key:48,
url:"/cgi-bin/masssend",
msg:"发送失败"
});
r&&r(e);
});
},
checkCopyright:function(e,s,r){
return i.post({
url:wx.url(n.checkcopyright),
data:e,
rtDesc:$.extend({},a,{
list:"string"
}),
error:function(e,s){
r&&r(s);
}
},function(e){
return e&&e.base_resp?void(s&&s(e)):(i.handleRet(e,{
id:64462,
key:49,
url:"/cgi-bin/masssend?action=get_appmsg_copyright_stat",
showMsg:!1
}),void(r&&r(e)));
});
},
checkSponsorAd:function(e,s,r){
return i.post({
url:wx.url(n.checkSponsorAd),
data:e,
error:function(e,s){
s&&s(status);
}
},function(e){
return e&&e.base_resp?void(s&&s(e)):void(r&&r(e));
});
},
massdel:function(e,s,r,o){
i.post({
url:wx.url(n.massdel),
data:{
id:e,
idx:o
},
error:function(){
t.err("删除失败");
}
},function(e){
return e&&e.base_resp&&0==e.base_resp.ret?(t.suc("删除成功"),void(s&&s(e))):(i.handleRet(e,{
id:64462,
key:50,
url:"/cgi-bin/masssendpage?action=delete",
msg:"删除失败"
}),void(r&&r(e)));
});
},
getNewMsg:function(e,s,r,t,o,a){
i.get({
url:wx.url(n.getNewMsg.sprintf(e,s,r,t)),
mask:!1,
handlerTimeout:!0,
error:a
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?o&&o(e.page_info.msg_items.msg_item):i.handleRet(e,{
id:64462,
key:51,
url:"/cgi-bin/singlesendpage?action=sync",
showMsg:!1
});
});
},
saveVoice:function(e,s,r,o){
i.post({
mask:!1,
url:wx.url(n.save),
data:{
msgid:e,
title:s,
filename:s,
voice_cagtegory:r
},
error:function(){
t.err("保存语音失败");
}
},function(e){
if(!e||!e.base_resp)return void t.err("保存语音失败");
var s=e.base_resp.ret;
"0"==s?(t.suc("保存语音成功"),"function"==typeof o&&o(e)):i.handleRet(e,{
id:64462,
key:52,
url:"/cgi-bin/savemsgtofile",
msg:"保存语音失败"
});
});
},
save:function(e,s,r,o,a){
"function"==typeof r&&(o=r,r=""),i.post({
mask:!1,
url:wx.url(n.save),
data:{
msgid:e,
filename:s,
digest:r,
scene:a
},
error:function(){
t.err("保存素材失败");
}
},function(e){
if(!e||!e.base_resp)return void t.err("保存素材失败");
var s=e.base_resp.ret;
"0"==s?(t.suc("保存素材成功"),"function"==typeof o&&o(e)):i.handleRet(e,{
id:64462,
key:53,
url:"/cgi-bin/savemsgtofile",
msg:"保存素材失败"
});
});
},
star:function(e,s,r){
i.post({
mask:!1,
url:wx.url(n.star),
data:{
msgid:e,
value:1==s?0:1
},
error:function(){
t.err(1==s?"取消收藏失败":"收藏消息失败");
}
},function(e){
if(!e||!e.base_resp)return void t.err(1==s?"取消收藏失败":"收藏消息失败");
var n=e.base_resp.ret;
0!=n?i.handleRet(e,{
id:64462,
key:54,
url:"/cgi-bin/setstarmessage",
msg:1==s?"取消收藏失败":"收藏消息失败"
}):(t.suc(1==s?"已取消收藏":"已收藏"),"function"==typeof r&&r(e));
});
},
sendMsg:function(e,s,r){
i.post({
url:wx.url(n.sendMsg),
data:e,
error:function(){
t.err("发送失败"),r&&r();
}
},function(e){
if(!e||!e.base_resp)return t.err("发送失败"),void(r&&r(e));
var n=e.base_resp.ret;
return 0==n?(t.suc("回复成功"),void("function"==typeof s&&s(e))):(10703==n?t.err("对方关闭了接收消息"):10700==n?t.err("该用户已经取消关注，你无法再给他发送消息。"):10701==n?t.err("该用户已被加入黑名单，无法向其发送消息"):62752==n?t.err("消息中可能含有具备安全风险的链接，请检查"):10704==n?t.err("该素材已被删除"):10705==n?t.err("该素材已被删除"):10706==n?t.err("由于该用户48小时未与你互动，你不能再主动发消息给他。直到用户下次主动发消息给你才可以对其进行回复。"):200008==n?t.err("请输入验证码"):1530500!=n&&i.handleRet(e,{
id:64462,
key:55,
url:"/cgi-bin/singlesend",
msg:"发送失败"
}),void(r&&r(e)));
});
},
getNewMsgCount:function(e,s,r){
i.post({
mask:!1,
handlerTimeout:!0,
url:wx.url(n.getNewMsgCount+e),
error:r
},function(e){
"function"==typeof s&&s(e),e&&e.base_resp&&e.base_resp.ret&&i.handleRet(e,{
id:64462,
key:56,
url:"/cgi-bin/getnewmsgnum",
showMsg:!1
});
});
},
quickReply:function(e,s,r){
this.sendMsg({
mask:!1,
tofakeid:e.toFakeId,
imgcode:e.imgcode,
type:1,
content:e.content,
out_trade_no:e.out_trade_no,
appmsg:e.appmsg||"",
quickreplyid:e.quickReplyId
},s,r);
},
pageNav:function(e,s,r){
var t=n.pageNav.sprintf((e.page-1)*e.count,e.day||"",e.keyword||"",e.action||"",e.frommsgid||"",e.count||"");
i.post({
dataType:"json",
url:wx.url(t),
mask:!1,
data:{},
error:r
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?"function"==typeof s&&s(e.msg_items.msg_item):i.handleRet(e,{
id:64462,
key:57,
url:"/cgi-bin/message",
showMsg:!1
});
});
},
searchMsgByKeyword:function(e,s,r){
i.post({
dataType:"html",
mask:!1,
url:wx.url(url.searchMsgByKeyword+e),
error:function(){
t.err("系统发生异常，请刷新页面重试"),r&&r({});
}
},function(e){
"function"==typeof s&&s($.parseJSON(e)),e&&e.base_resp&&e.base_resp.ret&&i.handleRet(e,{
id:64462,
key:58,
url:"/cgi-bin/getmessage",
showMsg:!1
});
});
}
};
});