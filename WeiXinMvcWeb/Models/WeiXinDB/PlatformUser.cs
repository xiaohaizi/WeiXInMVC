using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("PlatformUser")]
    public class PlatformUser
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(50)]
        public string PlatformName { get; set; }

        public int PlatformValue { get; set; }
        public int PlatformCount { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
        [MaxLength(50)]
        public string msgid { get; set; }
        public int attr_type { get; set; }
    }
}