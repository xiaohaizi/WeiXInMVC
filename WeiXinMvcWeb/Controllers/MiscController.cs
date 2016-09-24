using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeiXinMvcWeb.Models;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Controllers
{
    public class MiscController : Controller
    {
        WeiXinModelDB weiXin = new WeiXinModelDB();
        IsoDateTimeConverter iso = new Newtonsoft.Json.Converters.IsoDateTimeConverter();
        public MiscController()
        {
            iso.DateTimeFormat = "yyyy-MM-dd";
        }

        // GET: Misc
        public ActionResult Index()
        {
            return View();
        }



        public ActionResult Useranalysis()
        {
            ViewBag.Title = "用户分析";
            return View();
        }


        public ActionResult Useranalysis_Attr()
        {
            ViewBag.Title = "用户分析";
            return View();
        }


        [HttpGet]
        public string UseranalysisAction(int ajax, DateTime begin_date, DateTime end_date, string f, string lang, string random, string source, string token)
        {
            ViewBag.Title = "用户分析";
            string s = "";
            UserReturnModel returnModel = new UserReturnModel();

            var baseModel = weiXin.Base_Resps.FirstOrDefault();
            baseModel.nav = new Nav();
            baseModel.nav.nav_items = weiXin.Nav_Itemes.Include("nav_item").Where(x => x.Base_Respid == baseModel.cgi_id).ToList();
            returnModel.base_resp = baseModel;


            var userInfo = weiXin.User_Infos.Include("wb_info").FirstOrDefault();
            returnModel.user_info = userInfo;

            returnModel.category_list = new List<CategoryList>();
            //returnModel.category_list.list = new List<User_ScoureList>();
            CategoryList catlist = new CategoryList();
            CategoryList catlist1 = new CategoryList();
            catlist.list = new List<User_SourceItem>();
            // User_ScoureList userscoucreList = new User_ScoureList();
            catlist.list = weiXin.User_SourceItems.ToList();
            catlist1.list = weiXin.User_SourceItems.ToList();
            // catlist.list.Add(userscoucreList);
            returnModel.category_list.Add(catlist);
            returnModel.category_list.Add(catlist1);
            s = JsonConvert.SerializeObject(returnModel, iso);

            return s;

        }

        //id=10001&key=2&uin=3083055985&cost_time=197&token=798083537&lang=zh_CN
        [HttpGet]
        public string Fdevreport(string id, string key, string uin, string cost_time, string token, string lang)
        {

            Dictionary<string, int> dic = new Dictionary<string, int>();
            Dictionary<string, string> dic1 = new Dictionary<string, string>();
            Dictionary<string, FdevreportReturn> dic2 = new Dictionary<string, FdevreportReturn>();
            dic.Add("ret", 0);
            dic1.Add("err_msg", "ok");
            FdevreportReturn f = new FdevreportReturn();
            dic2.Add("base_resp", f);
            string s = JsonConvert.SerializeObject(dic2, iso);
            return s;

        }

        public ActionResult Appmsganalysis()
        {
            ViewBag.Title = "图文分析";
            return View();
        }
        //?action=all&begin_date=2016-09-18&end_date=2016-09-21&order_by=1&order_direction=2&token=798083537&lang=zh_CN&f=json&ajax=1&random=0.03687752467231431
        [HttpGet]
        public string AppmsganalysisAction(string action, DateTime begin_date, DateTime end_date, string order_by, string order_direction, string token, string lang, string f, string ajax, string random)
        {
            string s = "";
            AppmsganalysisRetrun appModel = new AppmsganalysisRetrun();

            var baseModel = weiXin.Base_Resps.FirstOrDefault();
            var userInfo = weiXin.User_Infos.Include("wb_info").FirstOrDefault();
            appModel.base_resp = baseModel;
            appModel.user_info = userInfo;
            s = JsonConvert.SerializeObject(appModel, iso);
            return s;
        }


        public ActionResult Appmsganalysis_Report()
        {
            ViewBag.Title = "图文分析";
            return View();
        }
        public string AppmsganalysisAction_Report()
        {
            string s = "";
            var baseModel = weiXin.Base_Resps.FirstOrDefault();
            var userInfo = weiXin.User_Infos.Include("wb_info").FirstOrDefault();



            AppmsganalysisReportRetrun appreportModdel = new AppmsganalysisReportRetrun();
            appreportModdel.base_resp = baseModel;
            appreportModdel.user_info = userInfo;
            appreportModdel.item = weiXin.AppmsgItems.ToList();
            //  appreportModdel.item
            s = JsonConvert.SerializeObject(appreportModdel, iso);
            return s;
        }

        public ActionResult Menuanalysis()
        {
            ViewBag.Title = "菜单分析";
            return View();
        }

        //begin_date=2016-09-12&end_date=2016-09-16&f=json&token=444349084&lang=zh_CN&token=444349084&lang=zh_CN&f=json&ajax=1&random=0.8303892144346972
        [HttpGet]
        public string MenuanalysisAction(DateTime begin_date, DateTime end_date, string f, string token, string lang, string ajax, string random)
        {
            string s = "";
            Menu_SummaryList menuList = new Menu_SummaryList();
            MenuanalysisReturn menuReturn = new MenuanalysisReturn();
            menuReturn.InitBaseInfo();

            menuList.list = weiXin.Menu_Summares.ToList();
            menuReturn.menu_summary = menuList;
            s = JsonConvert.SerializeObject(menuReturn, iso);
            return s;
        }


        public ActionResult Messageanalysis()
        {
            ViewBag.Title = "消息分析";
            return View();
        }
        //type=daily&begin_date=2016-09-16&end_date=2016-09-20&token=444349084&lang=zh_CN&token=444349084&lang=zh_CN&f=json&ajax=1&random=0.7852470562930663          
        [HttpGet]
        public string MessageanalysisAction(string type, DateTime begin_date, DateTime end_date, string token, string lang, string f, string ajax, string random)
        {
            string s = "";
            MessageanalysisReturn messageModel = new MessageanalysisReturn();
            messageModel.InitBaseInfo();
            s = JsonConvert.SerializeObject(messageModel);
            return s;
        }


        public ActionResult Interfaceanalysis()
        {
            ViewBag.Title = "接口分析";
            return View();
        }
        //&begin_date=2016-09-11&end_date=2016-09-22&type=daily&token=444349084&lang=zh_CN&token=444349084&lang=zh_CN&token=444349084&lang=zh_CN&f=json&ajax=1&random=0.09787506112876643
        [HttpGet]
        public string InterfaceanalysisAction(DateTime begin_date, DateTime end_date, string type, string token, string lang, string f, string random)
        {
            string s = "";
            
            InterfaceanalysisReturn interModel = new InterfaceanalysisReturn();
            interModel.InitBaseInfo();
            interModel.daily_list = weiXin.Dailes.ToList();
            s = JsonConvert.SerializeObject(interModel, iso);
            return s;
        }

        public ActionResult Webpageanalysis()
        {
            ViewBag.Title = "网页分析";
            return View();
        }

        //action=listintfstat&begin_date=20160912&end_date=20160923&func_name=config&order_key=0&order_direction=2&begin=0&count=14&token=444349084&lang=zh_CN&f=json&ajax=1&random=0.472395747566426
        [HttpGet]
        public string WebpageanalysisAction(string action,string  begin_date,string end_date,string func_name,string order_key,string order_direction,int  begin,int count,string token,string lang,string f,int ajax,string random)
        {
            string s = "";
            WebpageanalysisRetrun webModel = new WebpageanalysisRetrun();
            webModel.InitBaseInfo();

            webModel.one_intf_stat_list= weiXin.Intf_Stats.Where(x => x.name == "config").ToList();
            webModel.all_intf_stat_list= weiXin.Intf_Stats.Where(x => x.name == "getNetworkType").ToList();
            webModel.total = webModel.one_intf_stat_list.Count;
            s = JsonConvert.SerializeObject(webModel,iso);
            return s;
        }


    }
}