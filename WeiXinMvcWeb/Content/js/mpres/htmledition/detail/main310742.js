define("statistics/article/detail/detail/main.js",["statistics/components/tab-bar2.js","statistics/common.js","common/wx/Cgi.js","statistics/article/detail/state.js","statistics/article/detail/detail/multimedia/main.js","statistics/article/detail/detail/pies.js","statistics/article/detail/detail/overview.js","statistics/article/detail/detail/province.js","statistics/article/detail/detail/trend.js"],function(t,e){
"use strict";
function i(t){
return"detail"===t?0:1;
}
function a(t){
$("#js_appmsg_title").text(t.title),$("#js_detail span.appmsg_date").text(t.publish_date);
}
function s(){
x=new p({
tabs:[{
text:"图文详情",
page:"detail"
},{
text:"多媒体详情",
page:"mul-media"
}]
}),IS_SHOW_OLD_VERSION||v("#js_page_seletions").append(x.$el),x.on("tab-selected",function(t,i){
"detail"===i.page?($("#js_detail_content").show(),$("#js_video_content").hide(),
e.render(),j.vtTable.show()):($("#js_detail_content").hide(),$("#js_video_content").show(),
j.vtTable.hide(),A.render(j.detailArticle));
});
}
function n(){
b=new p({
name:"详细数据",
tabs:[{
text:"全部渠道",
source:"int_page_read"
},{
text:"公众号会话",
source:"int_page_from_session_read"
},{
text:"好友转发",
source:"int_page_from_friends_read"
},{
text:"朋友圈",
source:"int_page_from_feed_read"
},{
text:"历史消息",
source:"int_page_from_hist_msg_read"
},{
text:"其他",
source:"int_page_from_other_read"
}]
}),b.$el.find("div.sub_menu").remove(),v("#js_detail_tabbar").prepend(b.$el),d();
}
function d(){
b.on("tab-selected",function(t,e){
h!==e.source&&(h=e.source,E.render(w,h));
});
}
function r(){
_();
var t=+new Date;
f.get({
url:l(),
success:function(e){
var i=+new Date-t,a=m.reportKeys.LOAD_ARTICLE_DETAIL_AJAX_KEY;
if(m.ajaxReport(a,i,wx.data.uin),0!==e.base_resp.ret)return u(),void f.handleRet(e,{
id:"64527",
key:"4"
});
var e=v.parseJSON(e.detail_data);
e=c(e),O.render(e),y.render(e),u();
}
});
}
function c(t){
return t;
}
function l(){
var t="/misc/appmsganalysisd?action=detail&msgid=%s&publish_date=%s&type=%s";
return t=wx.url(t.sprintf(w.msgid,w.publish_date,"int"));
}
function o(){
g.find("div.page_msg.no-article").hide(),g.find("div.js_content").show();
}
function _(){
v("div.wrp_loading:eq(0)").show();
}
function u(){
v("div.wrp_loading:eq(0)").hide();
}
var p=t("statistics/components/tab-bar2.js"),m=t("statistics/common.js"),f=t("common/wx/Cgi.js"),j=t("statistics/article/detail/state.js"),v=jQuery,e={},g=v("div.js_tab_content.detail"),h="int_page_read",w=null,b=null,x=null,A=t("statistics/article/detail/detail/multimedia/main.js"),y=t("statistics/article/detail/detail/pies.js"),D=t("statistics/article/detail/detail/overview.js"),O=t("statistics/article/detail/detail/province.js"),E=t("statistics/article/detail/detail/trend.js");
return e.init=function(){
g.append(v("#js_detail")),v("#js_detail").show(),s(),n();
},e.render=function(){
w!==j.detailArticle&&(w=j.detailArticle,o(),r(),D.render(w),E.render(w,h));
},e.activate=function(t){
a(j.detailArticle),x.activate(i(t));
},e.show=function(){
g.show();
},e.hide=function(){
g.hide();
},e;
});