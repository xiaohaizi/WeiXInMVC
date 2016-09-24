using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Wb_Info")]
    public class Wb_Info
    {
        [Key]
        public int ID { get; set; }
        [StringLength(300)]
        public string src { get; set; }
        public int verify_flag { get; set; }
        [StringLength(300)]
        public string verify_info { get; set; }
        [StringLength(100)]
        public string nick_name { get; set; }
        [StringLength(300)]
        public string head_img_url { get; set; }
        [StringLength(300)]
        public string verify_code { get; set; }
        public int manual_review { get; set; }
        public int can_sync { get; set; }
        public int verify_status { get; set; }
    }
}