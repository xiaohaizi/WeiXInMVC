using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("NewsNotice")]
    public class NewsNotice
    {
        [Key]
        public int ID { get; set; }
        public string Title { get; set; }
        public DateTime ref_date { get; set; }
        public int is_new { get; set; }
    }
}