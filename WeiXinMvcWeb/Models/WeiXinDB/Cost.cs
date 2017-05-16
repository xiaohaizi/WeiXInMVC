using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    /// <summary>
    /// 流量宝
    /// </summary>
    [Table("Cost")]
    public class Cost
    {
        [Key, JsonIgnore]
        public int ID { get; set; }
        public DateTime start_time { get; set; }
        public int view_count { get; set; }
        public int click_count { get; set; }
        public int cost { get; set; }
        public int follow_count { get; set; }
        public int pos_type { get; set; }
        public decimal cost_money { get; set; }
       
    }
}