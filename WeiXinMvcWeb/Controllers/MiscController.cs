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
        public  MiscController()
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
            return View();
        }



        [HttpGet]
        public string UseranalysisAction(int ajax, DateTime begin_date, DateTime end_date, string f, string lang, string random, string source, string token)
        {

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
            return View();
        }
        //?action=all&begin_date=2016-09-18&end_date=2016-09-21&order_by=1&order_direction=2&token=798083537&lang=zh_CN&f=json&ajax=1&random=0.03687752467231431
        [HttpGet]
        public string AppmsganalysisAction(string action, string begin_date, string end_date, string order_by, string order_direction, string token, string lang, string f, string ajax, string random)
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
            s = JsonConvert.SerializeObject(appreportModdel,iso);
            return s;
        }






    }
}