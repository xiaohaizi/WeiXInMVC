using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("AppmsgItemHour")]
    public class AppmsgItemHour
    {
        [Key,JsonIgnore]
        public int Msg_ID { get; set; }
        public DateTime ref_date { get; set; }
        public int ref_hour { get; set; }
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