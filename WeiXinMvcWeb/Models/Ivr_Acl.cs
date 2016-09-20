using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Ivr_Acl
    {

        public int can_text_msg = 1;
        public int can_image_msg = 1;
        public int can_voice_msg = 1;
        public int can_video_msg = 1;
        public int can_app_msg = 1;
        public int can_app_msg_activity = 1;
        public int can_app_msg_comm = 1;
        public int can_app_msg_single = 1;
        public int can_app_msg_multi = 1;
        public int can_commodity_app_msg = 0;
    }
}