using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Models
{
    public class AppmsganalysisReportRetrun:BaseReturncs
    {
        public List<AppmsgItem> item=new List<AppmsgItem>();
        public string[] share_item = { };
        public int load_done = 1;
    }
}