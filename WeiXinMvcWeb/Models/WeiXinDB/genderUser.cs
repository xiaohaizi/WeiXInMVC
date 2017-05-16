using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("GenderUser")]
    public class GenderUser
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(50)]
        public string GenderName { get; set; }

        public int GenderValue { get; set; }
        public int GenderCount { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
        [MaxLength(100)]
        public string msgid { get; set; }
        public int attr_type { get; set; }
    }
}