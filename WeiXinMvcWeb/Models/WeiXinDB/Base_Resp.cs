using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("Base_Resp")]
    public partial class Base_Resp
    {
        public int ret { get; set; }
        public string err_msg { get; set; }
        public int svr_time { get; set; }
        public string token { get; set; }

        [NotMapped]
        public virtual Nav nav { get; set; }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int cgi_id { get; set; }
        [StringLength(100)]
        public string media_ticket { get; set; }
        [StringLength(100)]
        public string master_ticket { get; set; }
        [StringLength(100)]
        public string master_ticket_id { get; set; }
        public int sp_login { get; set; }
        [NotMapped]
        public Func_Ban_Info func_ban_info = new Func_Ban_Info();
        [NotMapped]
        public string[] red_dot = new string[] { };
    }
}