using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class MsgDetail
    {
        public Msg1 base_resp = new Msg1();
        public string detail_data { get; set; }
        public int load_done = 1;
    }
    public class Msg1 {
        public int ret = 0;
        public string err_msg ="ok";
    }
}