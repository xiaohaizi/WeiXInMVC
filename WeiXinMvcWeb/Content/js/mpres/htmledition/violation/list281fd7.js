define("violation/list.js",["common/wx/top.js","common/wx/Cgi.js","common/wx/Tips.js","common/wx/pagebar.js","biz_common/moment.js"],function(t){
"use strict";
function e(){
var t=[];
if(wx.cgiData.list.each(function(e){
$.extend(e,{
type:e.illegal_type_desc,
time:o.unix(e.create_timestamp).format("YYYY-MM-DD")
}),e.title&&(e.title=e.title.html(!0)),e.content&&(e.content=e.content.html(!0)),
a(e),t.push(e);
}),$("#list").html(template.render("tpl",{
list:t
})),0!=t.length){
var e=c.page;
new n({
container:"#page",
perPage:c.count,
first:!1,
last:!1,
isSimple:!0,
initShowPage:e,
totalItemsNum:c.total_count,
callback:function(t){
var a=t.currentPage;
if(a!=e)return location.href=wx.url("/cgi-bin/illegalrecord?t=violation/list&page=%s&count=%s".sprintf(a,c.count)),
!1;
}
});
}
}
function a(t){
switch(t.content_type){
case 1:
case 11:
t.html=t.title?'<a href="{content}" target="_blank">{title}</a>'.format(t):t.content;
break;

case 2:
t.html='<a href="{content}" target="_blank">{title}</a>'.format(t);
break;

case 4:
t.html="名称:"+t.content;
break;

case 5:
t.html='头像：<a href="{content}" target="_blank">查看详情</a>'.format(t);
break;

case 6:
t.html="功能介绍:"+t.content;
break;

case 7:
case 9:
case 10:
case 12:
case 13:
t.html='<a href="{content}" target="_blank">查看详情</a>'.format(t);
break;

case 8:
t.html='视频：<a href="{content}" target="_blank">查看详情</a>'.format(t);
break;

default:
t.html=t.title?'<a href="{content}" target="_blank">{title}</a>'.format(t):t.content;
}
return t.html;
}
var n=(t("common/wx/top.js"),t("common/wx/Cgi.js"),t("common/wx/Tips.js"),t("common/wx/pagebar.js")),o=t("biz_common/moment.js"),c=wx.cgiData;
e();
});