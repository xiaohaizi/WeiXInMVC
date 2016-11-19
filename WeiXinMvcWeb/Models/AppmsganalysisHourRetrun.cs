using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class AppmsganalysisHourRetrun : BaseReturncs
    {
        public List<AppmsgItemHour> item = new List<AppmsgItemHour>();
        public string[] share_item = { };
        public int load_done = 1;
    }
}