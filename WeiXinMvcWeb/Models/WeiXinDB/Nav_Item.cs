using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Nav_Item")]
    public class Nav_Item
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [StringLength(100)]
        public string name { get; set; }
        [StringLength(200)]
        public string url { get; set; }
        public int new_flag { get; set; }
        public int new_seq { get; set; }
        public int selected_flag { get; set; }
      
    }
}