using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("LangUser")]
    public class LangUser
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(50)]
        public string LangName { get; set; }

        public int LangValue { get; set; }
        public int LangCount { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
        [MaxLength(100)]
        public string msgid { get; set; }
    }
}