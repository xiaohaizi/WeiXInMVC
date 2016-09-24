using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Intf_Stat")]
    public class Intf_Stat
    {
        [Key, JsonIgnore]
        public int ID { get; set; }
        public DateTime date { get; set; }
        [StringLength(100)]
        public string name { get; set; }
        public int pv { get; set; }
        public int uv { get; set; }
    }
}