define("media/appmsg_list_v2.js",["common/wx/media/appmsg.js","common/wx/pagebar.js","common/wx/top.js","common/wx/tooltip.js","common/wx/popover.js","common/wx/time.js","common/wx/Tips.js","media/media_cgi.js","biz_web/ui/checkbox.js","biz_web/ui/dropdown.js","common/wx/dialog.js","common/wx/Cgi.js","common/wx/progress.js","media/appmsg_temp_url.js","common/qq/jquery.plugin/btn.js","common/wx/popup.js","biz_common/moment.js","common/wx/searchInput.js"],function(e){
"use strict";
function i(i){
for(var t=[],n={
2:"原创功能",
3:"赞赏功能"
},a=0,s=i.length;s>a;a++){
var c=i[a].func_id;
if(n[c]){
var o=i[a].unlock_time,p=i[a].ban_time,r=e("biz_common/moment.js"),m=o?o==p?"永久屏蔽"+n[c]:"屏蔽"+n[c]+"至"+r.unix(o).format("YYYY年MM月DD日 HH:mm"):"";
m&&t.push({
info:m
});
}
}
t.length>0&&$("#js_forbit_warn").html(template.render("tpl_forbit",{
list:t
}));
}
function t(e){
if(q.length<=0)return void $("#js_empty").show();
switch(e){
case"card":
a();
break;

case"list":
n();
break;

default:
a();
}
c(),s(),o();
}
function n(){
z=$("#js_list");
var e="";
template.helper("timeFormat",function(e){
return _.timeFormat(e);
}),e=template.render("tpl_list",{
list:q
}),z.html(e).show(),b(z,".js_title");
}
function a(){
z=$("#js_card");
var e=[$("#js_col1"),$("#js_col2"),$("#js_col3")];
$.each(q,function(i,t){
var t=q[i],n=t.app_id||"";
e[i%3].append('<div id="appmsg%s" class="js_appmsgitem"></div>'.sprintf(n)),new r({
container:"#appmsg"+n,
data:t,
showEdit:!0,
type:v
});
}),z.show();
}
function s(){
new d({
dom:z.find(".js_tooltip"),
position:{
x:0,
y:-4
}
});
}
function c(){
var e=new Date;
e.setYear(2016),e.setMonth(7),e.setDate(28),(new Date).getTime()<e.getTime()&&$("#js_preview_tips").show();
}
function o(){
z.on("click",".js_del",function(){
var e=$(this),i=e.data("id");
$(".popover").hide(),new u({
dom:this,
content:"确定删除此素材？",
place:"bottom",
margin:"center",
buttons:[{
text:"确定",
click:function(){
{
var t=this;
t.$pop.find(".jsPopoverBt").eq(0).btn(!1);
}
w.appmsg.del(i,function(){
e.closest(".js_appmsgitem").slideUp(function(){
$(this).remove(),t.remove();
});
});
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}]
});
});
}
function p(){
if(10==wx.cgiData.type){
$("#searchDiv").show();
var i=e("common/wx/searchInput.js");
new i({
id:"#searchDiv",
value:wx.cgiData.key,
placeholder:"标题/作者/摘要",
click:function(e){
e.length>0?window.location=wx.url("/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&action=list_%s&type=10&query=%s".sprintf(wx.cgiData.view,encodeURIComponent(e))):g.err("请输入搜索关键词");
}
}),wx.cgiData.key&&($(".js_title>a").each(function(e,i){
$(i).text().match(/<script>/g)||$(i).html($(i).html().replace(new RegExp(wx.cgiData.key,"g"),'<span class="highlight">'+wx.cgiData.key+"</span>"));
}),$(".jsCreate").hide()),$("#reload").click(function(){
window.location=wx.url("/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&action=list_%s&type=10".sprintf(wx.cgiData.view));
});
}
}
var r=e("common/wx/media/appmsg.js"),m=e("common/wx/pagebar.js"),l=e("common/wx/top.js"),d=e("common/wx/tooltip.js"),u=e("common/wx/popover.js"),_=e("common/wx/time.js"),g=e("common/wx/Tips.js"),w=e("media/media_cgi.js"),f=(e("biz_web/ui/checkbox.js"),
e("biz_web/ui/dropdown.js")),h=e("common/wx/dialog.js"),j=e("common/wx/Cgi.js"),b=(e("common/wx/progress.js"),
e("media/appmsg_temp_url.js"));
e("common/qq/jquery.plugin/btn.js"),e("common/wx/popup.js");
var x=wx.cgiData,v=x.type,k=wx.cgiData.view,y=x.file_cnt,D=$("#query_tips").html(),q=x.item||[];
new l("#topTab",l.DATA.media).selected("media"+v);
var z;
t(wx.cgiData.view),i(wx.cgiData.forbit),$("#js_cardview").on("click",function(){
var e="/cgi-bin/appmsg?begin=%s&count=10&t=media/appmsg_list2&type=10&action=list_card".sprintf(wx.cgiData.begin);
e=wx.cgiData.key?e+"&query="+wx.cgiData.key:e,location.href=wx.url(e);
}),$("#js_listview").on("click",function(){
var e="/cgi-bin/appmsg?begin=%s&count=10&t=media/appmsg_list2&type=10&action=list_list".sprintf(wx.cgiData.begin);
e=wx.cgiData.key?e+"&query="+wx.cgiData.key:e,location.href=wx.url(e);
});
var T=0;
if(wx.cgiData.key?(T=wx.cgiData.search_cnt,0==T&&($("#js_list").hide(),$("#js_card").hide(),
$("#js_empty").hide(),$("#js_search_empty").show())):T=y.app_msg_cnt,$("#js_count").html(T),
$("#page_title").css("zoom",1).css("zoom",""),$("#query_tips").html(wx.cgiData.key?"在所有素材":D),
T>0){
var P=x.count,Y=x.begin,C=Y/P+1;
new m({
container:"#js_pagebar",
perPage:P,
first:!1,
last:!1,
isSimple:!0,
initShowPage:C,
totalItemsNum:T,
callback:function(e){
var i=e.currentPage;
if(i!=C)return i--,location.href=wx.url(wx.cgiData.key?"/cgi-bin/appmsg?begin=%s&count=%s&t=media/appmsg_list2&type=10&action=list_%s&query=%s".sprintf(P*i,P,k,wx.cgiData.key):"/cgi-bin/appmsg?begin=%s&count=%s&t=media/appmsg_list2&type=10&action=list_%s".sprintf(P*i,P,k)),
!1;
}
});
}
p(),function(){
function e(){
var e=[];
a.find("input:checked").each(function(){
e.push($(this).data("id"));
}),j.post({
url:"/cgi-bin/modifyfile",
data:{
oper:"cleanimg",
monthago:s.value,
groupidlist:e.join(",")
},
mask:!1
},function(e){
if(!e||!e.base_resp)return g.err("系统错误，请稍后重试"),void n.popup("remove");
var i=1*e.base_resp.ret;
switch(i){
case 0:
n.popup("remove"),h.show({
title:"清理图片",
type:"succ",
msg:"已清理%s的图片，合计%s张|当前图库图片总数：%s张".sprintf(s.name,o,e.new_total_count),
buttons:[{
text:"确定",
click:function(){
this.hide(),location.reload();
}
}]
});
break;

default:
n.popup("remove"),g.err("系统错误，请稍后重试");
}
});
}
function i(e){
e?(n.find("button[data-index=0]").parent().enable(),c&&c.setall(!0),s&&s.enable()):(n.find("button[data-index=0]").parent().disable(),
c&&c.setall(!1),s&&s.disable(),$(".js_pic_clear_num").text("-"));
}
function t(){
o=0,a.find("input:checked").each(function(){
o+=$(this).data("cnt");
}),n.find(".js_pic_clear_num").text(o),0==o?n.find(".js_btn_p").eq(0).disable():n.find(".js_btn_p").eq(0).enable();
}
var n=null,a=null,s=null,c=null,o=0,p=null;
$("#js_pic_clear_a").click(function(){
var r=1;
n=$("#js_pic_clear_tpl").popup({
title:"清理图片",
className:"clear_dialog_wrp",
width:566,
buttons:[{
text:"开始清理",
click:function(){
s.name?0===a.find("input:checked").length?g.err("请至少选择一个分组"):(this.$dialogWrp.find(".js_btn_p").eq(0).btn(!1),
c.disabled("disabled"),s.disable(),e()):g.err("请选择一个时间段");
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onHide:function(){
this.remove();
}
}),s=new f({
container:".js_pic_clear_drop",
data:[{
name:"一个月以前上传",
value:1
},{
name:"三个月以前上传",
value:3
},{
name:"六个月以前上传",
value:6
},{
name:"一年以前上传",
value:12
}],
search:!1,
callback:function(e){
i(!1),j.get({
url:"/cgi-bin/filepage?action=getimggroups&monthago="+e+"&click="+r,
mask:!1
},function(e){
if(!e||!e.base_resp)return void g.err("系统错误，请稍后重试");
var s=1*e.base_resp.ret;
switch(s){
case 0:
p=e.file_group,a=n.find(".js_pic_clear_list").empty();
for(var r=0;r<p.length;r++)p[r].name&&p[r].name.length>0&&$(template.render("js_pic_clear_checkbox_tpl",{
name:p[r].name,
cnt:p[r].count,
id:p[r].id
})).appendTo(a);
c=a.find("input").checkbox(),a.find("input").click(t),n.popup("resetPosition"),i(!0),
n.find(".js_pic_clear_num").text(0),a.find('input[data-id="1"]').length>0?(a.find('input[data-id="1"]').trigger("click"),
n.find(".js_btn_p").eq(0).enable()):(o=0,n.find(".js_btn_p").eq(0).disable());
break;

default:
g.err("系统错误，请稍后重试"),i(!0),n.find(".js_pic_clear_num").text(0);
}
}),r=0;
}
}),s.selected(1);
}),x.file_cnt.img_cnt>=3e3&&$("#js_pic_clear").show();
}();
});