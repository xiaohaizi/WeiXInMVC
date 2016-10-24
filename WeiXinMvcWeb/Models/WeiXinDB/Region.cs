using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Region")]
    public class Region
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(50)]
        public string Parent_Region_Id { get; set; }
        [MaxLength(50)]
        public string Region_Id { get; set; }
        [MaxLength(50)]
        public string Region_Name { get; set; }
        public DateTime DTime { get; set; }
        public int UserID { get; set; }
        public int RegionCount { get; set; }
        [MaxLength(100)]
        public string msgid { get; set; }
        public int attr_type { get; set; }
    }
}