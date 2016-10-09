define("vote/list.js",["common/wx/popup.js","common/wx/dialog.js","common/wx/popover.js","common/wx/Tips.js","common/wx/pagebar.js"],function(t){
"use strict";
function e(){
var t=wx.cgiData.list;
t&&t.super_vote_info&&t.super_vote_info.each(function(t){
t.title=t.title.html(!1);
}),t&&$(".js_list_body").html(template.render("list_tpl",t));
}
function n(){
$(".js_search_btn").on("click",function(){
var t=$(".js_search_content").val();
t&&(location.href=wx.url("/cgi-bin/newoperatevote?action=list&query="+t));
}),$(".delete").click(function(t){
var e=$(t.target),n=e.attr("supervoteid");
new a({
dom:this,
content:$("#js_deleteHtml").html(),
place:"bottom",
margin:"center",
buttons:[{
text:"确定",
click:function(){
$.ajax({
url:wx.url("/cgi-bin/newoperatevote?action=del"),
dataType:"json",
data:{
action:"del",
supervoteid:n
},
type:"post",
success:function(t){
"0"==t.base_resp.ret?(r.suc("删除成功"),location.reload()):r.err(t.base_resp.err_msg);
},
error:function(){}
}),this.hide();
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
function o(t){
var e=arguments[1]||window.location.search,n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=e.substr(e.indexOf("?")+1).match(n);
return null!=o?o[2]:"";
}
function i(){
{
var t=wx.cgiData.list.total_count,e=o("count")?o("count"):10,n=o("begin")>0?Math.floor(o("begin")/e)+1:1;
new c({
container:".pageNavigator",
perPage:e,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:t,
callback:function(t){
var o=t.currentPage;
if(o!=n)return o--,location.href=wx.url("/cgi-bin/newoperatevote?action=list&begin=%s&count=%s".sprintf(o*e,e)),
!1;
}
});
}
}
t("common/wx/popup.js");
var a=(t("common/wx/dialog.js"),t("common/wx/popover.js")),r=t("common/wx/Tips.js"),c=t("common/wx/pagebar.js");
template.helper("datestring",function(t){
var e=new Date(t),n="%s-%s-%s".sprintf(e.getFullYear(),e.getMonth()+1,e.getDate());
return n;
}),function(){
e(),i(),n();
}();
});