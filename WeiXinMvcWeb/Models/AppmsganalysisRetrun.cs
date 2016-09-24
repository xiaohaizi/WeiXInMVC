using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class AppmsganalysisRetrun:BaseReturncs
    {
       
        public  string total_article_data = "{\"list\":[]}";
      public  string  article_summary_data="{\"list\":[]}";
      public  int load_done = 1;
      public  int can_use_copyright = 0;
    }
}