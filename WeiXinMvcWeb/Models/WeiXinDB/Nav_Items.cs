using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Nav_Items")]
    public partial class Nav_Items
    {
        [StringLength(100)]
        public string name { get; set; }
        [StringLength(200)]
        public string logo_url { get; set; }
        public int new_flag { get; set; }
       
        public int is_can_click { get; set; }
        public int new_seq { get; set; }
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        [StringLength(220)]
        public string url { get; set; }

      
        public int Base_Respid { get; set; }
        public virtual List<Nav_Item> nav_item { get; set; }
    }
}