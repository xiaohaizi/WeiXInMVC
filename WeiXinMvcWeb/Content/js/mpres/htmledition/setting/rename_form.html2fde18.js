define("tpl/setting/rename_form.html.js",[],function(){
return'<form class="rename_content_step">\n	<div class="frm_control_group">\n	    <label class="frm_label">帐号名称</label>\n	    <div class="frm_controls">\n	    	<span class="frm_input_box">\n                <input name="name" type="text" placeholder="" value="{name}" class="frm_input">\n            </span>\n            <p class="frm_tips">名称长度为3-30个字符，不能含有特殊字符及“微信”等保留字</p>\n	    </div>\n    </div>\n</form>\n<div class="dialog_ft">\n    <a href="javascript:;" class="btn btn_default js_btn_pre">上一步</a>\n    <a href="javascript:;" class="btn btn_primary js_btn_next">确定</a>\n</div>';
});