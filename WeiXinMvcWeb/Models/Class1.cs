using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Class1
    {



        public class Rootobject1
        {
            public int ret { get; set; }
            public string err_msg { get; set; }
        }





        public class Rootobject
        {
            public string publish_date { get; set; }
            public int user_source { get; set; }
            public string msgid { get; set; }
            public string title { get; set; }
            public int target_user { get; set; }
            public int int_page_read_user { get; set; }
            public int int_page_read_count { get; set; }
            public int ori_page_read_user { get; set; }
            public int ori_page_read_count { get; set; }
            public int share_user { get; set; }
            public int share_count { get; set; }
            public int add_to_fav_user { get; set; }
            public int add_to_fav_count { get; set; }
            public int total_online_time { get; set; }
            public int int_page_from_session_total_read_user { get; set; }
            public int int_page_from_session_total_read_count { get; set; }
            public int int_page_from_session_read_user { get; set; }
            public int int_page_from_session_read_count { get; set; }
            public int int_page_from_hist_msg_read_user { get; set; }
            public int int_page_from_hist_msg_read_count { get; set; }
            public int int_page_from_feed_read_user { get; set; }
            public int int_page_from_feed_read_count { get; set; }
            public int int_page_from_friends_read_user { get; set; }
            public int int_page_from_friends_read_count { get; set; }
            public int int_page_from_other_read_user { get; set; }
            public int int_page_from_other_read_count { get; set; }
            public int feed_share_from_session_user { get; set; }
            public int feed_share_from_session_cnt { get; set; }
            public int feed_share_from_feed_user { get; set; }
            public int feed_share_from_feed_cnt { get; set; }
            public int feed_share_from_other_user { get; set; }
            public int feed_share_from_other_cnt { get; set; }
            public object[] media_data_list { get; set; }
        }

    }
}