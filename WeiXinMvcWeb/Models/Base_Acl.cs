using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Base_Acl
    {
        public int can_mass_send=1;


        public int can_public_channel=1;


        public int can_verify_apply=1;


        public int can_use_advanced_func=1;


        public int can_use_biz_menu=1;


        public int can_use_biz_ivr=1;


        public int can_dev_apply=0;


        public int can_use_merchant=1;


        public int can_use_customer=0;


        public int can_use_dev_reply=1;


        public int can_access_merchant=1;


        public int can_access_tmplmsg=0;


        public int can_use_device_func=0;


        public int can_use_selfmenu=1;


        public int can_modify_info=1;


        public int can_modify_ivr=1;


        public int can_modify_biz_menu=1;


        public int can_use_shortvideo=1;


        public int can_use_comment=0;


        public int can_use_reward=0;


        public int can_use_homepage_template=0;


        public int can_use_reprintapply_list=0;


        public int can_use_img_copyright=0;


        public int can_use_ori_video=0;
    }
}