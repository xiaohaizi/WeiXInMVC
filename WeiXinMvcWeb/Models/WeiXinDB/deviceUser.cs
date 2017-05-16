using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    [Table("DeviceUser")]
    public class DeviceUser
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(100)]
        public string DeviceValue { get; set; }
        public int DeviceCount { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
        [MaxLength(100)]
        public string msgid { get; set; }
        public int attr_type { get; set; }
    }
}