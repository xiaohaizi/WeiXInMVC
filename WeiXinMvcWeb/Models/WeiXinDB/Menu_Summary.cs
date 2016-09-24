using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Menu_Summary")]
    public class Menu_Summary
    {
        [Key, JsonIgnore]
        public int ID { get; set; }
       
        public DateTime ref_date { get; set; }
        public int version { get; set; }
        public int parent_button_id { get; set; }
        [StringLength(50)]
        public string parent_button_key { get; set; }
        public int button_id { get; set; }
        [StringLength(50)]
        public string button_key { get; set; }
        [StringLength(50)]
        public string primary_menu_name { get; set; }
        [StringLength(50)]
        public string secondary_menu_name { get; set; }
        public int clk_uv { get; set; }
        public int clk_pv { get; set; }
    }
}