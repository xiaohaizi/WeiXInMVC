using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("User_SourceItem")]
    public class User_SourceItem
    {
        [Key]
        public int ID { get; set; }
        public DateTime date { get; set; }
     
        /// <summary>
        /// 新增人数
        /// </summary>
        public int new_user { get; set; } 
        /// <summary>
        /// 取消人数
        /// </summary>
        public int cancel_user { get; set; }
        /// <summary>
        /// 静增人数
        /// </summary>
        public int netgain_user { get; set; }
        /// <summary>
        /// 累计人数
        /// </summary>
        public int cumulate_user { get; set; }


       

    }
}