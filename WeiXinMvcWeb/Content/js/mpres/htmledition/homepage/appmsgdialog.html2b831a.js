define("tpl/homepage/appmsgdialog.html.js",[],function(){
return'<script type="text/html" id="appmsgdialogtpl" >\n    <div class="title_tab">\n        <ul class="tab_navs title_tab">\n            <li class="tab_nav js_mass_tab selected first">\n                <a href="javascript:;">已发送</a>\n            </li>\n            <li class="tab_nav js_appmsg_tab">\n                <a href="javascript:;">素材库</a>\n            </li>\n        </ul>\n    </div>\n    <div class="select_list_container js_appmsg_container" style="display:none;">\n        <div class="select_list_hd global_mod float_layout">\n            <div class="global_info">\n                <span class="frm_input_box search append">\n                    <a href="javascript:;" class="frm_input_append js_a_search"><i class="icon16_common search_gray">搜索</i>&nbsp; </a>\n                    <input type="text" placeholder="搜索相关文章" value="" class="frm_input js_search">\n                </span>\n            </div>\n            <div class="global_extra">你还可以勾选<span class=\'js_remaincnt\'></span>篇文章                <!--<a href="javascript:;" class="btn btn_add btn_primary">-->\n                    <!--<i class="icon14_common add_white"></i>新建文章-->\n                <!--</a>-->\n            </div>\n        </div>\n        <div class="select_list_bd">\n            <!--BEGIN loading-->\n            <div class="loading_area js_loading" >\n                <span class="vm_box"></span>\n                <i class="icon_loading_small white"></i>\n            </div><!--END loading-->\n            <div class=\'js_listContainer\' style="display: none;">\n            </div>\n        </div>\n        <div class="select_list_ft">\n            <div class="pagination_wrp js_pager">\n\n            </div>\n        </div>\n    </div>\n    <div class="select_list_container js_mass_container">\n        <div class="select_list_hd global_mod float_layout">\n            <div class="global_extra">你还可以勾选<span class=\'js_remaincnt\'></span>篇文章            </div>\n        </div>\n        <div class="select_list_bd">\n            <!--BEGIN loading-->\n            <div class="loading_area js_mass_loading" >\n                <span class="vm_box"></span>\n                <i class="icon_loading_small white"></i>\n            </div><!--END loading-->\n            <div class=\'js_masslistContainer\' style="display: none;">\n            </div>\n        </div>\n        <div class="select_list_ft">\n            <div class="pagination_wrp js_masspager">\n\n            </div>\n        </div>\n    </div>\n\n</script>\n';
});