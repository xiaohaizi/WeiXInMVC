using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Region_Acl
    {
        public int can_use_js_trust_domain = 1;
        public int can_use_js_api_domain = 1;
        public int can_use_appmsg_source_url = 1;
        public int can_use_menu_outer_url = 1;
        public int can_use_appmsg_outer_url = 1;
        public int can_use_menu_url = 1;
        public int can_use_friend_ivr = 1;
        public int can_use_auto_ivr = 1;
        public int can_use_keyword_ivr = 1;
    }
}