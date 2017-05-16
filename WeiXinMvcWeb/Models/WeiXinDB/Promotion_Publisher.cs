using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    public class Promotion_Publisher
    {
        public Msg1 base_resp = new Msg1();
        public CostList cost_list = new CostList();
    }
    public class CostList
    {
        public List<Cost> cost { get; set; }
    }

    public class Msg1
    {
        public int ret = 0;
        public string err_msg = "ok";
    }
}