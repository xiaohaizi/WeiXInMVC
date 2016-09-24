using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class MenuanalysisReturn:BaseReturncs
    {
        public Menu_SummaryList menu_summary =new Menu_SummaryList();
    }



    public class Menu_SummaryList
    {
        public List<Menu_Summary> list { get; set; }
    }
}