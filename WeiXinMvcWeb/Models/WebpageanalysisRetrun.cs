using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Models
{
    public class WebpageanalysisRetrun:BaseReturncs
    {
        public List<Intf_Stat> one_intf_stat_list = new List<Intf_Stat>();
        public List<Intf_Stat> all_intf_stat_list = new List<Intf_Stat>();
        public int total = 0;



    }
}