define("tpl/cardticket/select_sub_merchant_table.html.js",[],function(){
return'{if loading}<i class="icon_loading_small white"></i>\n{else}\n<div class="sub_title_bar">\n    <span class="frm_input_box search append l">\n        <a href="javascript:void(0);" class="js_search_btn frm_input_append">\n            <i class="icon16_common search_gray">\n                搜索\n            </i>\n            &nbsp;\n        </a>\n        <input type="text" placeholder="请输入商户名" value="{param.keyword}" class="frm_input js_search_input">\n    </span>\n    <div class="tr">\n        <a class="btn btn_primary r" href="{wx_url \'/merchant/cardhelpmakesend?action=addpage\'}" target="_blank"><i class="icon14_common add_white"></i>添加子商户</a>\n    </div>\n</div>\n<div class="in_bd">\n	{if !data.length}\n	<div class="account_list empty js_empty">\n		{if param.keyword}\n		你输入的名称未搜索到，请确认否输入正确或未添加该子商户。		{else}\n		您还没有添加子商户，请点击右上角按钮添加子商户		{/if}\n		<!-- 抱歉，未找到符合公众号 -->\n	</div>\n	{else}\n	<ul class="account_list js_merchant_item_p">\n		{each data as sub i}\n		<li class="list_item js_merchant_item{if check_remain_quota && (sub.remain_quota==0||sub.can_not_use_sns_card)} js_merchant_disabled disabled{/if}" data-id="{sub.Id}">\n	        <div class="inner_list_item">\n	            <img class="pic" src="{http2https sub.Logo}" width="100px">\n				<div class="item_txt">\n					<p class="nick_name">{sub.BrandName}</p>\n                    {if check_remain_quota}{if max_card===0}<p>账号违规，暂停制券</p>{else}{if sub.remain_quota==0}<p>已超出制券量</p>{else if sub.can_not_use_sns_card}<p>该商户类目不可创建朋友的券</p>{/if}{/if}{/if}\n				</div>\n			</div>\n			<a href="javascript:;" class="account_selected"></a>\n			<div class="list_mask"></div>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="js_pager"></div>\n	{/if}\n	<!-- <div class="loading_box empty dn" id="js_loading">\n		<img src="<%@GetResFullName($images_comm_path$icon/common/icon32_loading_light.gif)%>">\n		<p>加载中，请稍候</p>\n	</div> -->\n</div>\n{/if}\n';
});