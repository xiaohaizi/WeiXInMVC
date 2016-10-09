define("tpl/user/userlist_tag.html.js",[],function(){
return'{if (friendsList.length > 0)}\n{each friendsList as item}\n<tr>\n    <td class="table_cell user">\n        <div class="user_info">  <!--个人信息区-->\n            {if item.remark_name}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.remark_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}">(<strong>{item.nick_name}</strong>)</span>\n            {else}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.nick_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}"></span>\n            {/if}\n            <a target="_blank" href="{item.link}" class="avatar">\n                <img src="{item.img}" data-id="{item.id}" class="js_msgSenderAvatar">\n            </a>\n            <label for="check{item.id}" class="frm_checkbox_label {if item.is_black}disabled{/if}"><i class="icon_checkbox"></i><input class="frm_checkbox js_select" type="checkbox" value="{item.id}" id="check{item.id}" {if item.is_black}disabled="true"{/if}></label> \n            \n            <div class="js_tags user_tag_area">\n                {if item.is_black}\n                <span class="js_tags_list user_tag_list"><span class="js_user_tags user_tag black" data-id="黑名单">黑名单</span> </span>\n                {else}\n                <span class="js_tags_list user_tag_list">{if item.tags == \'\'}无标签{else}{=item.tags}{/if} </span>\n                <span class="js_tags_btn dropdown_switch_area dropdown_closed" data-id="{item.id}">\n                    <span class="icon_dropdown_switch">\n                        <i class="arrow arrow_up"></i>\n                        <i class="arrow arrow_down"></i>\n                    </span>\n                </span> \n                {/if}\n            </div>\n        </div>\n    </td>\n    <td class="table_cell user_opr tr">\n        {if isBlack!=1||item.user_is_fans==1}\n        <div id="selectArea{item.id}" class="js_selectArea" data-gid="{item.group_id}" data-fid="{item.id}"></div>\n        <a class="btn remark js_msgSenderRemark" data-fakeid="{item.id}">修改备注</a>\n        {/if}\n    </td>\n</tr>\n{/each}\n{else}\n<tr class="empty_item"><td colspan="2" class="empty_tips">暂无用户</td></tr>\n{/if}\n';
});