using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class MessageanalysisReturn:BaseReturncs
    {
        public string[] list = { };

        public string[] dist_list = { };

        public string[] compare_list = { };
        public int load_done = 1;
        public int dist_load_done = 1;
    }
}