using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("BaseInfo")]
    public class BaseInfo
    {
        public int ID { get; set; }
        public int new_msg { set; get; }

        public int newuser { set; get; }
        public int totaluser { set; get; }
    }
}