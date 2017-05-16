using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("ShareItem")]
    public class ShareItem
    {
        [Key, JsonIgnore]
        public int ID { get; set; }
        public DateTime ref_date { get; set; }
        public int user_source { get; set; }
        public int share_scene { get; set; }
        public int share_count { get; set; }
        public int share_user { get; set; }
    }
}