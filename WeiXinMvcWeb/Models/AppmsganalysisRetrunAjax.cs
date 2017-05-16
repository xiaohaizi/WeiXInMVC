using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class AppmsganalysisRetrunAjax
    {
        public Base_Resp base_resp;
        public Base_Acl user_acl;
        public User_Info user_info;
        public string total_article_data = "{\"list\":[]}";
        //public string article_summary_data = "{\"list\":[]}";
        public string article_summary_data;
        //public List<MsgDataDay> article_summary_data = new List<MsgDataDay>();
        public int load_done = 1;
        public int can_use_copyright = 0;
    }
}