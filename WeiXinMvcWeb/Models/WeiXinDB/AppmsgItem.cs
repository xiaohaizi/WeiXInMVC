using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("AppmsgItem")]
    public class AppmsgItem
    {
        [Key,JsonIgnore]
        public int Msg_ID { get; set; }
        public DateTime ref_date { get; set; }
      
        public long user_source { get; set; }
        public long int_page_read_user { get; set; }
        public long int_page_read_count { get; set; }
        public long ori_page_read_user { get; set; }
        public long ori_page_read_count { get; set; }
      
        public long share_user { get; set; }
        public long share_count { get; set; }
        public long add_to_fav_user { get; set; }
        public long add_to_fav_count { get; set; }
        public long total_online_time { get; set; }
    }
}