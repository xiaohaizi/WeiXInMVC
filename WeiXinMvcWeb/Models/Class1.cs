using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Class1
    {


        public class Rootobject
        {
            public string ref_date { get; set; }
            public int user_source { get; set; }
            public int int_page_read_user { get; set; }
            public int int_page_read_count { get; set; }
            public int ori_page_read_user { get; set; }
            public int ori_page_read_count { get; set; }
            public int share_user { get; set; }
            public int share_count { get; set; }
            public int add_to_fav_user { get; set; }
            public int add_to_fav_count { get; set; }
            public int total_online_time { get; set; }
        }

    }
}