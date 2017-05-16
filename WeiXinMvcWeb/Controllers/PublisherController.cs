using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Controllers
{
    public class PublisherController : Controller
    {
        // GET: Publisher
        WeiXinModelDB weiXin = new WeiXinModelDB();
        IsoDateTimeConverter iso = new Newtonsoft.Json.Converters.IsoDateTimeConverter();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Readtemplate()
        {

            string btime = DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd");
            string oldtime = DateTime.Now.AddDays(-1).ToString("yyyy-MM-dd");
            string etime = DateTime.Now.ToString("yyyy-MM-dd");
            DateTime begin_date = Convert.ToDateTime(btime);
            DateTime end_date = Convert.ToDateTime(etime);
            DateTime old_time= Convert.ToDateTime(oldtime);
            var list = weiXin.Costs.Where(x => x.start_time >= begin_date && x.start_time <= end_date).ToList();
            //string s = JsonConvert.SerializeObject(list, iso);
            List<int> view_list = new List<int>();
            List<string> time_list = new List<string>();
            foreach (var c in list)
            {
                view_list.Add(c.view_count);
                time_list.Add(c.start_time.ToString("MM-dd"));
            }

            string sv = JsonConvert.SerializeObject(view_list);
            string st = JsonConvert.SerializeObject(time_list);
            ViewBag.viewList = sv;
            ViewBag.timeList = st;
            ViewBag.costList = list;
            ViewBag.viewCountSum = list.Select(x => x.view_count).Sum();
            ViewBag.clickCountSum = list.Select(x => x.click_count).Sum();
            ViewBag.costMoney = list.Select(x => x.cost_money).Sum();
            
            return View();
          
        }

        public string Readtemplatejson()
        {
            string btime = DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd");
            string oldtime = DateTime.Now.AddDays(-1).ToString("yyyy-MM-dd");
            string etime = DateTime.Now.ToString("yyyy-MM-dd");
            int ty = 0;
            ty=int.Parse(Request.Params["type"]);
            DateTime begin_date = Convert.ToDateTime(btime);
            DateTime end_date = Convert.ToDateTime(etime);
            DateTime old_time = Convert.ToDateTime(oldtime);
            var list = weiXin.Costs.Where(x => x.start_time >= begin_date && x.start_time <= end_date).ToList();
            //string s = JsonConvert.SerializeObject(list, iso);
            List<int> view_list = new List<int>(); //曝光量
            List<int> click_list = new List<int>(); //点击量
            List<int> money_list = new List<int>(); //总收入
            List<int> click_list1 = new List<int>(); //总收率
            List<string> time_list = new List<string>();
            foreach (var c in list)
            {
                view_list.Add(c.view_count);
                click_list.Add(c.click_count);
                click_list1.Add(c.click_count / c.view_count);
                money_list.Add(Convert.ToInt32(c.cost_money));
                time_list.Add(c.start_time.ToString("MM-dd"));
            }
            
            string sv = JsonConvert.SerializeObject(view_list);
            switch (ty)
            {
                case 0:
                    sv = JsonConvert.SerializeObject(click_list);
                    break;
                case 1:
                    sv = JsonConvert.SerializeObject(click_list1);
                    break;
                case 2:
                    sv = JsonConvert.SerializeObject(money_list);
                    break;
                case 3:
                    break;
            }

            return sv;

        }
    }
}