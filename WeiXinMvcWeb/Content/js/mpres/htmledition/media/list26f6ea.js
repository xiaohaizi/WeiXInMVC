define("media/list.js",["common/wx/Cgi.js","common/qq/mask.js","common/wx/Tips.js","common/wx/pagebar.js","common/wx/media/audio.js","common/wx/media/video.js","common/wx/time.js","common/wx/media/img.js","common/wx/top.js","media/media_cgi.js","media/picture_preview.js","common/wx/popover.js","common/wx/tooltip.js","common/qq/jquery.plugin/btn.js"],function(e){
"use strict";
{
var i=e("common/wx/Cgi.js"),o=wx.cgiData,t=o.type,n=(e("common/qq/mask.js"),e("common/wx/Tips.js")),m=e("common/wx/pagebar.js"),a=e("common/wx/media/audio.js"),c=e("common/wx/media/video.js"),r=e("common/wx/time.js"),s=e("common/wx/media/img.js"),d=e("common/wx/top.js"),l=(e("media/media_cgi.js"),
e("media/picture_preview.js"),o.file_cnt),p=o.file_item,f=e("common/wx/popover.js"),u=e("common/wx/tooltip.js");
template.render;
}
e("common/qq/jquery.plugin/btn.js"),new d("#topTab",d.DATA.media).selected("media"+t);
var w={
2:"img_cnt",
3:"voice_cnt",
4:"video_cnt"
};
$("#media_tip_"+t).show(),$("#media_opr_"+t).show(),function(){
if(!p)return!1;
var e=template.render,o={
2:function(e,i){
return new s({
container:$("#"+e.attr("id")),
file_id:i.file_id,
source:"file",
fakeid:i.fakeid
});
},
3:function(e,i){
var o=i;
return o.selector="#"+e.attr("id"),o.id=o.voice_encode_fileid,o.showTime=!0,o.update_time="创建于："+r.timeFormat(o.create_time),
o.qqmusicurl="https://res.wx.qq.com/voice/getvoice?mediaid="+o.voice_encode_fileid,
new a(o);
},
4:function(e,i){
var o=i;
return o.selector="#"+e.attr("id"),o.id=o.file_id,o.source="file",new c(o);
}
},m={};
template.helper("mediaInit",function(e){
return e.file_id?(m[e.file_id]=e,""):"";
});
var d=$("#filelist").html(e("t_filelist",{
token:wx.data.t,
list:p
}));
$(".file_wrp",d).each(function(){
var e=$(this),i=e.data("id"),n=m[i];
n&&t&&o[t]&&o[t](e,n);
}),new u({
dom:d.find(".js_tooltip"),
position:{
x:0,
y:10
}
}),d.on("click",".js_del",function(){
var e=$(this),o=e.data("id"),t=(e.data("type"),e.data("voice_encode_fileid"));
$(".popover").hide(),new f({
dom:this,
content:$("#js_deleteHtml").html(),
place:"bottom",
margin:"center",
buttons:[{
text:"确定",
click:function(){
{
var e=this;
e.$pop.find(".jsPopoverBt").eq(0).btn(!1);
}
i.post({
mask:!1,
url:wx.url("/cgi-bin/operate_voice?oper=delvoice"),
data:{
fileid:t
},
error:function(){
n.err("删除失败");
}
},function(i){
i.base_resp&&0==i.base_resp.ret?$("#fileItem"+o).fadeOut(function(){
$(this).remove(),e.remove(),0==$("#filelist > .media_card").length&&location.reload();
}):n.err("删除失败");
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
}();
var j=l[w[t]];
!function(e){
{
var i=o.count,n=o.begin,a=n/i+1;
new m({
container:".pageNavigator",
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:a,
totalItemsNum:e,
callback:function(e){
var o=e.currentPage;
if(o!=a)return o--,location.href=wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&t=media/list".sprintf(t,i*o,i)),
!1;
}
});
}
}(j);
});