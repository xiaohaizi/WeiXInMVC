using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    [Table("Device")]
    public class Device
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(100)]
        public string DeviceValue { get; set; }
        public int DeviceCount { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
    }
}