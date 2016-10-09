define("message/renderList.js",["common/qq/emoji.js","common/wx/simplePopup.js","common/qq/Class.js","common/wx/media/img.js","common/wx/media/audio.js","common/wx/media/video.js","common/wx/media/idCard.js","tpl/msgListItem.html.js","common/wx/remark.js","common/wx/media/simpleAppmsg.js","common/qq/events.js","message/message_cgi.js","common/wx/time.js","common/wx/Tips.js","common/wx/ban.js","common/wx/Cgi.js","common/wx/preview.js","common/wx/popup.js","biz_web/ui/checkbox.js","tpl/message/video_popup.html.js","common/wx/RichBuddy_tag.js","common/wx/RichBuddy.js","common/wx/richEditor/emotionEditor.js","common/wx/verifycode.js"],function(e){
"use strict";
function t(e){
var t=new I;
$(".avatar",e).mouseover(function(){
var e=$(this),n=e.attr("data-fakeid"),i=parseInt(e.attr("data-id"),10),a=e.offset(),s=e.width();
if(n!=wx.data.uin){
var o;
o=1==wx.cgiData.new_user_tag?{
id:n
}:{
fakeId:n,
tmpmsgid:i
},o.position={
left:a.left+s+2,
top:a.top
},t.show(o);
}
}).mouseout(function(){
t.hide();
});
}
function n(e){
$(".js_changeRemark",e).unbind("click").click(function(){
var t=$(this),n=(t.closest("li.msgListItem"),t.attr("data-fakeid")),i=$(".nickname[data-fakeid="+n+"]",e),a=$(".remark_name[data-fakeid="+n+"]",e),s=""==$.trim(i.html())?"":a.html();
g.show(n,s);
}),_.on("Remark:changed",function(t,n){
var i,a,s,o;
i=$(".nickname[data-fakeid="+t+"]",e),a=$(".remark_name[data-fakeid="+t+"]",e),s=""==$.trim(i.html())?"":a.html(),
o=""==s?a.html():i.find("strong").html(),""==n&&""!=s?(i.html(""),a.html(o)):""!=n&&""==s?(a.html(n),
i.html("(<strong>{nickName}</strong>)".format({
nickName:o
}))):""!=n&&""!=s&&a.html(n);
});
}
function i(e){
$(e).off("click",".js_save").on("click",".js_save",function(){
var e=$(this),t=e.attr("idx"),n=e.attr("data-type");
if(4==n)$(q).popup({
title:"保存为视频消息",
onOK:function(){
var e=this.get().find(".title").val(),n=this.get().find(".digest").val();
return e.length<1||e.length>64?(k.err("请输入1到64个字的标题"),!0):""!=n&&n.length>120?(k.err("简介字数不能超过120字"),
!0):void j.save(t,e,n,function(){});
},
onCancel:function(){
this.hide();
},
onHide:function(){
this.remove();
}
});else if(3==n){
{
$("#saveTpl").popup({
title:"保存素材",
buttons:[{
text:"确定",
type:"primary",
click:function(){
$(".jsSaveInput").val().length>0?$(".jsTypeInput[checked=checked]").length>0?a(t,$(".jsSaveInput").val(),$(".jsTypeInput[checked=checked]").data("value"),this):k.err("请选择分类"):k.err("标题不能为空");
}
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
}
$(".jsTypeInput").checkbox(),$(".jsSaveInput").placeholder();
}else new d(2==n?{
title:"填写素材名字",
callback:function(e){
j.save(t,e,function(){},"",4);
},
rule:function(e){
var t=$.trim(e);
return""!=t&&t.length<=50&&-1==t.indexOf(" ");
},
msg:"素材名必须为1到50个字符，并且素材名不能包含空格"
}:{
title:"填写素材名字",
callback:function(e){
j.save(t,e,function(){});
},
rule:function(e){
var t=$.trim(e);
return""!=t&&t.length<=50&&-1==t.indexOf(" ");
},
msg:"素材名必须为1到50个字符，并且素材名不能包含空格"
});
});
}
function a(e,t,n,i){
j.saveVoice(e,t,n,function(){
i.remove();
});
}
function s(e){
e.off("click",".js_star").on("click",".js_star",function(){
var e=$(this),t=e.attr("idx"),n=e.attr("action"),i=e.attr("starred");
j.star(t,i,function(){
1==i?(e.removeClass("star_orange").addClass("star_gray"),e.attr("starred",0)):(e.removeClass("star_gray").addClass("star_orange"),
e.attr("starred",1)),e.attr("title",1==i?"收藏消息":"取消收藏"),"star"==n&&1==i&&$("#msgListItem"+t).fadeOut();
});
});
}
function o(e){
var t=!b(wx.cgiData.func_ban_info,"single-send",function(){
$(".js_reply_OK").btn(!1,"btn_disabled"),$("#js_submit").btn(!1,"btn_disabled"),
$(".tab_panel").find(".js_editorArea:visible").removeAttr("contenteditable").parent().parent(".js_editor").addClass("disabled");
});
e.off("click",".js_reply").on("click",".js_reply",function(){
var n=$(this),i=n.data("id"),a=$("#msgListItem"+i).toggleClass("replying");
$("#msgListItem"+i).hasClass("replying")&&y.get({
url:"/cgi-bin/singlesend?action=check",
data:{
tofakeid:$(this).data("tofakeid")
}
}).callback(function(e){
0==e.base_resp.ret||(10700==e.base_resp.ret?k.err("该用户已经取消关注，你无法再给他发送消息。"):10701==e.base_resp.ret?k.err("该用户已被加入黑名单，无法向其发送消息"):10706==e.base_resp.ret?k.err("由于该用户48小时未与你互动，你不能再主动发消息给他。直到用户下次主动发消息给你才可以对其进行回复。"):cgi.handleRet(data,{
id:64462,
key:47,
url:"/cgi-bin/singlesend?action=check",
showMsg:!1
})),0!=e.base_resp.ret||t?($("#msgListItem"+i).find(".js_editorArea:visible").removeAttr("contenteditable").parent().parent(".js_editor").addClass("disabled"),
$("#msgListItem"+i).find(".js_reply_OK").btn(!1,"btn_disabled")):($("#msgListItem"+i).find(".js_editorArea:visible").attr("contenteditable","true").focus().parent().parent(".js_editor").removeClass("disabled"),
$("#msgListItem"+i).find(".js_reply_OK").btn(!0,"btn_disabled"));
}),$(".replying",e).each(function(){
var e=$(this),t=e.data("id");
t!=i&&e.removeClass("replying");
}),a.data("hasClickQuickReply")||(r(a.find(".js_quick_reply_box"),a),a.data("hasClickQuickReply",!0));
});
}
function r(t,n){
var i=600,a=$(".js_editor",t),s=new T(a,{
wordlimit:i,
isHTML:!0
}),o=$(".js_reply_OK",t),r=$(".js_reply_pickup",t);
r.unbind("click").click(function(){
var e=$(this).data("id");
$("#msgListItem"+e).removeClass("replying");
}),t.keydown(function(e){
return wx.isHotkey(e,"enter")?(o.click(),!1):void 0;
});
{
var c=null,d=$(".verifyCode",t);
e("common/wx/verifycode.js");
}
o.unbind("click").click(function(){
var e=$(this),t=e.data("id"),a=e.data("fakeid"),o=s.getContent();
if(!e.find(".js_reply_OK").hasClass("disabled")){
if(o.length<=0||o.length>i)return void k.err("快捷回复的内容必须为1到600个字符");
if(null!=c&&c.getCode().trim().length<=0)return k.err("请输入验证码"),void c.focus();
k.suc("回复中...请稍候"),e.btn(!1),j.quickReply({
toFakeId:a,
content:o,
quickReplyId:t,
imgcode:c&&c.getCode().trim()
},function(){
s.setContent(""),d.html("").addClass("dn"),c=null,n.addClass("replyed"),e.btn(!0);
},function(t){
e.btn(!0),t&&t.base_resp&&200008==t.base_resp.ret?(c=d.html("").removeClass("dn").verifycode().data("verifycode"),
c.focus()):t&&t.base_resp&&1530500==t.base_resp.ret&&$(".js_warn").show();
});
}
}),$(window).on("keyup",function(){
$(".js_warn").hide();
});
}
function c(e){
e.on("click",".simple_img a",function(){
var t=$(this),n=[],i=0;
return e.find(".simple_img a").each(function(e,a){
a===t[0]&&(i=n.length);
var s=$(a).attr("href")||"";
s&&n.push({
imgsrc:s,
downsrc:$(a).closest(".message_item").find(".download_gray").attr("href")
});
}),n.length>0&&C.show({
imgdata:n,
current:i
}),!1;
});
}
e("common/qq/emoji.js");
var d=e("common/wx/simplePopup.js"),m=(e("common/qq/Class.js"),e("common/wx/media/img.js")),l=e("common/wx/media/audio.js"),u=e("common/wx/media/video.js"),f=e("common/wx/media/idCard.js"),p=e("tpl/msgListItem.html.js"),g=e("common/wx/remark.js"),h=e("common/wx/media/simpleAppmsg.js"),v=e("common/qq/events.js"),_=v(!0),j=e("message/message_cgi.js"),w=e("common/wx/time.js"),k=e("common/wx/Tips.js"),b=e("common/wx/ban.js"),x=w.timeFormat,y=e("common/wx/Cgi.js"),C=e("common/wx/preview.js");
e("common/wx/popup.js"),e("biz_web/ui/checkbox.js");
var I,q=e("tpl/message/video_popup.html.js"),L=!1;
I=e(1==wx.cgiData.new_user_tag?"common/wx/RichBuddy_tag.js":"common/wx/RichBuddy.js");
var R={
1:function(e,t){
return e.html(t.content.emoji());
},
2:function(e,t){
return new m({
container:$("#"+e.attr("id")),
file_id:0,
msgid:t.id,
source:t.source,
fakeid:t.fakeid
});
},
3:function(e,t){
var n=t;
return n.selector="#"+e.attr("id"),n.qqmusictpl=!0,new l(n);
},
4:function(e,t){
var n=t;
return n.selector="#"+e.attr("id"),n.ff_must_flash=!0,new u(n);
},
42:function(e,t){
var n=t;
return n.container="#"+e.attr("id"),new f(n);
},
10:function(e,t){
var n=t;
return n.container="#"+e.attr("id"),new h(n);
},
15:function(e,t){
var n=t;
return n.selector=e,n.tpl="videomsg",n.id=1e5*Math.random()|0,new u(n);
},
62:function(e,t){
var n=t;
return n.selector="#"+e.attr("id"),n.ff_must_flash=!0,"star"==e.closest("li").find(".js_star").attr("action")&&(n.video_url=t.cdn_video_url,
n.video_thumb_url=t.cdn_video_thumb_url),new u(n);
}
},T=e("common/wx/richEditor/emotionEditor.js"),A=function(){
console.log("initImg"),$(".avatar img").each(function(){
var e=$(this);
e.data("src")&&(e.attr("src",e.data("src")),e.removeAttr("data-src"));
});
},O=function(e){
if(console.log(e),e.list){
{
var a=e.list,r={};
a.length;
}
template.helper("mediaInit",function(e){
return e.id?(r[e.id]=e,""):"";
}),template.helper("timeFormat",function(e){
return x(e.date_time);
}),template.helper("id2singleURL",function(e){
return wx.url("/cgi-bin/singlesendpage?tofakeid=%s&t=message/send&action=index&quickReplyId=%s".sprintf(e.fakeid,e.id));
}),a.each(function(e){
e.video_url&&(e.type=15),e.type={
5:10,
6:10,
11:10,
16:15
}[e.type]||e.type;
var t={
1:0,
2:11,
3:11,
4:1,
10:0,
15:11,
42:11,
62:wx.acl.msg_acl.can_use_shortvideo?10:0
}[e.type];
t="undefined"==typeof t?111:t,e.btnsave=2==(2&t),e.btndown=1==(1&t);
});
var d=$(e.container),m=$(wx.T(p,{
token:wx.data.t,
list:a,
uin:wx.data.uin,
action:e.action
}).trim());
e.preAppend?m.prependTo(d):m.appendTo(d),"star"==e.action&&$(".empty_tips").text("暂未收藏消息，已收藏的消息，会被永久保存。"),
L?A():(L=!0,console.log("before bind load"),$(window).on("load",function(){
console.log("window onload"),A();
})),$(".wxMsg",m).each(function(){
var e=$(this),t=e.data("id"),n=r[t];
if(n){
var i=n.type;
i&&R[i]&&R[i](e,n);
}
}),t(d),n(d),i(d),s(d),o(d),c(d);
}
};
return O;
});