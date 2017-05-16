using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Controllers
{
    public class PromotionController : Controller
    {
        WeiXinModelDB weiXin = new WeiXinModelDB();
        IsoDateTimeConverter iso = new Newtonsoft.Json.Converters.IsoDateTimeConverter();

        public ActionResult Index()
        {
            return View();
        }
        // GET: Promotion
        public ActionResult Readtemplate()
        {
            return View();
        }

        public ActionResult Readtemplate_t()
        {
            string btime = DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd");
            string etime = DateTime.Now.ToString("yyyy-MM-dd");
            DateTime begin_date = Convert.ToDateTime(btime);
            DateTime end_date = Convert.ToDateTime(etime);
            var list = weiXin.Costs.Where(x => x.start_time >= begin_date && x.start_time <= end_date).ToList();
            ViewBag.costList = list;
            return View();
        }

        public ActionResult Readtemplate_t1()
        {
            string btime = DateTime.Now.AddMonths(-3).ToString("yyyy-MM-dd");
            string etime = DateTime.Now.ToString("yyyy-MM-dd");
            DateTime begin_date = Convert.ToDateTime(btime);
            DateTime end_date = Convert.ToDateTime(etime);
            var list = weiXin.Costs.Where(x => x.start_time >= begin_date && x.start_time <= end_date&&x.pos_type==1).ToList();
            var list1 = weiXin.Costs.Where(x => x.start_time >= begin_date && x.start_time <= end_date && x.pos_type == 0).ToList();
          var  costMoney=  list.Select(x => x.cost_money).Sum();
            var costMoney1 = list1.Select(x => x.cost_money).Sum();
            ViewBag.costMoney = costMoney;
            ViewBag.costMoney1 = costMoney1;
            return View();
        }


        public ActionResult readtemplate_1()
        {
            return View();
        }
    }
}