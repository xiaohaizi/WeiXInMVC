define("tpl/statistics/tab-bar.html.js",[],function(){
return'<div>\n<div class="info_hd">\n    <strong class="lable time_lable">{name}</strong>\n    <div class="tabs">\n        {each tabs as tab}\n\n        {if $index === 0}\n        <a class="first" href="javascript:;">{tab.text}</a>\n        {else if $index === tabs.length - 1}\n        <a class="last" href="javascript:;">{tab.text}</a>\n        {else}\n        <a href="javascript:;">{tab.text}</a>\n        {/if}\n\n        {/each}\n    </div>                                  \n</div>\n\n<div class="sub_menu"> </div>\n<div>\n';
});