using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("SendMsg")]
    public class SendMsg
    {
        [Key]
        public int ID { get; set; }

        public string Title { get; set; }
        public DateTime Dtime { get; set; }
        public int ReadCount { get; set; }
        public int GoodCount { get; set; }
        [MaxLength(600)]
        public string ImgUrl { get; set; }
        public int MsgStatus { get; set; }
    }
}