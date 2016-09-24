using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Models
{
    public class InterfaceanalysisReturn : BaseReturncs
    {
        public string[] hour_list = { };
        public List<Daily> daily_list = new List<Daily>();
        public string[] hour_compare_list = { };

        public string[] daily_compare_list = { };

        public int load_done = 1;
    }
}