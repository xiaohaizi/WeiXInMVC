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
            string begin_date = Request.Params["begin_date"];
            string end_date = Request.Params["end_date"];
            DateTime bdate = Convert.ToDateTime(begin_date);
            DateTime edate = Convert.ToDateTime(end_date);
            var DeviceList = weiXin.Devices.Where(x => x.DTime >= bdate && x.DTime <= edate).ToList();
            var GendersList = weiXin.Genders.Where(x => x.DTime >= bdate && x.DTime <= edate).ToList();
            var LangList = weiXin.Langs.Where(x => x.DTime >= bdate && x.DTime <= edate).ToList();
            var PlatformList = weiXin.Platforms.Where(x => x.DTime >= bdate && x.DTime <= edate).ToList();
            var RegionList = weiXin.Regions.Where(x => x.DTime >= bdate && x.DTime <= edate).ToList();
            string temp = " name: \"{0}\",value: \"{1}\", count: +(\"{2}\") || 0";
            string temp1 = " name: \"{0}\"||\"未知\",value: \"{1}\", count: +(\"{2}\") || 0";
            string temp2 = "region: $1 parent_region_id: \"{0}\", region_id: \"{1}\", region_name: \"{2}\"   $2,count: +(\"{3}\") || 0"; 
            string date = "[   { date: \"" + begin_date + "\",";
            if (DeviceList.Count <= 0 && PlatformList.Count <= 0 && RegionList.Count <= 0)
            {
                date = "[]";
            }
            else
            {
               
                date = date + "devices:[";

                foreach (var dItem in DeviceList)
                {

                    date += "{value:\"" + dItem.DeviceValue + "\",count:+(\"" + dItem.DeviceCount + "\")||0},";
                }
                date = date.TrimEnd(',');
                date = date + "],  genders: [";

                foreach (var rItem in GendersList)
                {
                    string rt = "{" + string.Format(temp, rItem.GenderName, rItem.GenderValue, rItem.GenderCount) + "}";
                    date = date + rt + ",";


                }
                date = date.TrimEnd(',');
                date = date + "],    langs: [";

                foreach (var lItem in LangList)
                {
                    string rt = "{" + string.Format(temp, lItem.LangName, lItem.LangValue, lItem.LangCount) + "}";
                    date = date + rt + ",";


                }
                date = date.TrimEnd(',');
                date = date + "],    platforms: [";

                foreach (var lItem in PlatformList)
                {
                    string rt = "{" + string.Format(temp1, lItem.PlatformName, lItem.PlatformValue, lItem.PlatformCount) + "}";
                    date = date + rt + ",";
                }

                date = date.TrimEnd(',');
                date = date + "],    regions: [";
                foreach (var lItem in RegionList)
                {
                    string s1 = string.Format(temp2, lItem.Parent_Region_Id, lItem.Region_Id, lItem.Region_Name, lItem.RegionCount);
                    string rt = "{" + s1.Replace("$1", "{").Replace("$2", "}") + "}";
                    date = date + rt + ",";
                }
                date = date + "{region: {  parent_region_id: \"-1\", region_id: \"all\", region_name: \"全国\"}, count: +(\"0\") || 0 }" + ",";
                //end
                date = date.TrimEnd(',');
                date = date + "]          }                 ]";
            }
            ViewBag.cgiData = date;
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
            catlist.list = weiXin.User_SourceItems.Where(x => x.date >= begin_date && x.date <= end_date).ToList();
            catlist1.list = weiXin.User_SourceItems.Where(x => x.date >= begin_date && x.date <= end_date).ToList();
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
        public string Appmsganalysisd()
        {
            /// string s = "{\"base_resp\":{\"ret\":0,\"err_msg\":\"ok\"},\"detail_data\":\"{/\"portrait/\":{/\"ref_date/\":/\"2016-10-16/\",/\"msgid/\":/\"2652324501_1/\",/\"genders/\":[{/\"attr_type/\":1,/\"attr_value/\":/\"2/\",/\"attr_name/\":/\"女/\",/\"user_count/\":4229},{/\"attr_type/\":1,/\"attr_value/\":/\"1/\",/\"attr_name/\":/\"男/\",/\"user_count/\":415},{/\"attr_type/\":1,/\"attr_value/\":/\"0/\",/\"attr_name/\":/\"未知/\",/\"user_count/\":356}],/\"regions/\":[{/\"region/\":{/\"region_id/\":/\"26/\",/\"region_name/\":/\"江西省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":3817},{/\"region/\":{/\"region_id/\":/\"22/\",/\"region_name/\":/\"江苏省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":598},{/\"region/\":{/\"region_id/\":/\"null/\",/\"region_name/\":/\"未知地域/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":343},{/\"region/\":{/\"region_id/\":/\"29/\",/\"region_name/\":/\"湖北省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":44},{/\"region/\":{/\"region_id/\":/\"23/\",/\"region_name/\":/\"浙江省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":40},{/\"region/\":{/\"region_id/\":/\"34/\",/\"region_name/\":/\"四川省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":34},{/\"region/\":{/\"region_id/\":/\"11/\",/\"region_name/\":/\"上海/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":33},{/\"region/\":{/\"region_id/\":/\"27/\",/\"region_name/\":/\"山东省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":27},{/\"region/\":{/\"region_id/\":/\"10/\",/\"region_name/\":/\"北京/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":20},{/\"region/\":{/\"region_id/\":/\"24/\",/\"region_name/\":/\"安徽省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":17},{/\"region/\":{/\"region_id/\":/\"30/\",/\"region_name/\":/\"湖南省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":5},{/\"region/\":{/\"region_id/\":/\"38/\",/\"region_name/\":/\"陕西省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":4},{/\"region/\":{/\"region_id/\":/\"42/\",/\"region_name/\":/\"新疆/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":2},{/\"region/\":{/\"region_id/\":/\"41/\",/\"region_name/\":/\"宁夏省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":2},{/\"region/\":{/\"region_id/\":/\"32/\",/\"region_name/\":/\"广西省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":2},{/\"region/\":{/\"region_id/\":/\"28/\",/\"region_name/\":/\"河南省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":2},{/\"region/\":{/\"region_id/\":/\"14/\",/\"region_name/\":/\"香港/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"31/\",/\"region_name/\":/\"广东省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"17/\",/\"region_name/\":/\"山西省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"33/\",/\"region_name/\":/\"海南省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"12/\",/\"region_name/\":/\"天津/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"36/\",/\"region_name/\":/\"云南省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"19/\",/\"region_name/\":/\"辽宁省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"39/\",/\"region_name/\":/\"甘肃省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"25/\",/\"region_name/\":/\"福建省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{/\"region_id/\":/\"21/\",/\"region_name/\":/\"黑龙江省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":1},{/\"region/\":{},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"13/\",/\"region_name/\":/\"重庆/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"15/\",/\"region_name/\":/\"澳门/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"16/\",/\"region_name/\":/\"河北省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"18/\",/\"region_name/\":/\"内蒙古/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"20/\",/\"region_name/\":/\"吉林省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"35/\",/\"region_name/\":/\"贵州省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"37/\",/\"region_name/\":/\"西藏/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"40/\",/\"region_name/\":/\"青海省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"43/\",/\"region_name/\":/\"台湾省/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0},{/\"region/\":{/\"region_id/\":/\"all/\",/\"region_name/\":/\"全国/\",/\"parent_region_id/\":/\"-1/\"},/\"user_count/\":0}],/\"platforms/\":[{/\"attr_type/\":3,/\"attr_value/\":/\"2/\",/\"attr_name/\":/\"Android/\",/\"user_count/\":4459},{/\"attr_type/\":3,/\"attr_value/\":/\"0/\",/\"attr_name/\":/\"/\",/\"user_count/\":333},{/\"attr_type/\":3 ,/\"attr_value/\":/\"1/\",/\"attr_name/\":/\"iPhone/\",/\"user_count/\":208}],/\"devices/\":[{/\"attr_type/\":4,/\"attr_value     /\":/\"0/\",/\"user_count/\":4470},{/\"attr_type/\":4,/\"attr_value/\":/\"samsung-GALAXY A8armeabi-v8a/\",/\"user_count     /\":75},{/\"attr_type/\":4,/\"attr_value/\":/\"OPPO-OPPO R7 Plusarmeabi-v8a/\",/\"user_count/\":59},{/\"attr_type/\":4,/\"attr_value/\":/\"TCL-TCL P560Marmeabi-v8a/\",/\"user_count/\":58},{/\"attr_type/\":4,/\"attr_value/\":/\"Coolpad-Coolpad Y90armeabi-v8a/\",/\"user_count/\":57},{/\"attr_type/\":4,/\"attr_value/\":/\"samsung-GALAXYS6 Edgearmeabi-v8a/\",/\"user_count/\":57},{/\"attr_type/\":4,/\"attr_value/\":/\"vivo-vivo X5Larmeabi-v8a/\",/\"user_count/\":57},{/\"attr_type/\":4,/\"attr_value/\":/\"vivo-vivo X5Marmeabi-v8a/\",/\"user_count/\":57},{/\"attr_type/\":4,/\"attr_value/\":/\"Huawei-HUAWEI P8armeabi-v8a/\",/\"user_count/\":56},{/\"attr_type/\":4,/\"attr_value/\":/\"TCL-TCL idol3armeabi-v8a/\",/\"user_count/\":54}]}}\",\"load_done\":1}";

            MsgDetail msg = new MsgDetail();

         
            msg.detail_data = "{\"portrait\":{\"ref_date\":\"2016-10-16\",\"msgid\":\"2652324501_1\",\"genders\":[{\"attr_type\":1,\"attr_value\":\"2\",\"attr_name\":\"女\",\"user_count\":4229},{\"attr_type\":1,\"attr_value\":\"1\",\"attr_name\":\"男\",\"user_count\":415},{\"attr_type\":1,\"attr_value\":\"0\",\"attr_name\":\"未知\",\"user_count\":356}],\"regions\":[{\"region\":{\"region_id\":\"26\",\"region_name\":\"江西省\",\"parent_region_id\":\"-1\"},\"user_count\":3817},{\"region\":{\"region_id\":\"22\",\"region_name\":\"江苏省\",\"parent_region_id\":\"-1\"},\"user_count\":598},{\"region\":{\"region_id\":\"null\",\"region_name\":\"未知地域\",\"parent_region_id\":\"-1\"},\"user_count\":343},{\"region\":{\"region_id\":\"29\",\"region_name\":\"湖北省\",\"parent_region_id\":\"-1\"},\"user_count\":44},{\"region\":{\"region_id\":\"23\",\"region_name\":\"浙江省\",\"parent_region_id\":\"-1\"},\"user_count\":40},{\"region\":{\"region_id\":\"34\",\"region_name\":\"四川省\",\"parent_region_id\":\"-1\"},\"user_count\":34},{\"region\":{\"region_id\":\"11\",\"region_name\":\"上海\",\"parent_region_id\":\"-1\"},\"user_count\":33},{\"region\":{\"region_id\":\"27\",\"region_name\":\"山东省\",\"parent_region_id\":\"-1\"},\"user_count\":27},{\"region\":{\"region_id\":\"10\",\"region_name\":\"北京\",\"parent_region_id\":\"-1\"},\"user_count\":20},{\"region\":{\"region_id\":\"24\",\"region_name\":\"安徽省\",\"parent_region_id\":\"-1\"},\"user_count\":17},{\"region\":{\"region_id\":\"30\",\"region_name\":\"湖南省\",\"parent_region_id\":\"-1\"},\"user_count\":5},{\"region\":{\"region_id\":\"38\",\"region_name\":\"陕西省\",\"parent_region_id\":\"-1\"},\"user_count\":4},{\"region\":{\"region_id\":\"42\",\"region_name\":\"新疆\",\"parent_region_id\":\"-1\"},\"user_count\":2},{\"region\":{\"region_id\":\"41\",\"region_name\":\"宁夏省\",\"parent_region_id\":\"-1\"},\"user_count\":2},{\"region\":{\"region_id\":\"32\",\"region_name\":\"广西省\",\"parent_region_id\":\"-1\"},\"user_count\":2},{\"region\":{\"region_id\":\"28\",\"region_name\":\"河南省\",\"parent_region_id\":\"-1\"},\"user_count\":2},{\"region\":{\"region_id\":\"14\",\"region_name\":\"香港\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"31\",\"region_name\":\"广东省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"17\",\"region_name\":\"山西省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"33\",\"region_name\":\"海南省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"12\",\"region_name\":\"天津\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"36\",\"region_name\":\"云南省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"19\",\"region_name\":\"辽宁省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"39\",\"region_name\":\"甘肃省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"25\",\"region_name\":\"福建省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{\"region_id\":\"21\",\"region_name\":\"黑龙江省\",\"parent_region_id\":\"-1\"},\"user_count\":1},{\"region\":{},\"user_count\":0},{\"region\":{\"region_id\":\"13\",\"region_name\":\"重庆\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"15\",\"region_name\":\"澳门\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"16\",\"region_name\":\"河北省\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"18\",\"region_name\":\"内蒙古\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"20\",\"region_name\":\"吉林省\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"35\",\"region_name\":\"贵州省\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"37\",\"region_name\":\"西藏\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"40\",\"region_name\":\"青海省\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"43\",\"region_name\":\"台湾省\",\"parent_region_id\":\"-1\"},\"user_count\":0},{\"region\":{\"region_id\":\"all\",\"region_name\":\"全国\",\"parent_region_id\":\"-1\"},\"user_count\":0}],\"platforms\":[{\"attr_type\":3,\"attr_value\":\"2\",\"attr_name\":\"Android\",\"user_count\":4459},{\"attr_type\":3,\"attr_value\":\"0\",\"attr_name\":\"\",\"user_count\":333},{\"attr_type\":3,\"attr_value\":\"1\",\"attr_name\":\"iPhone\",\"user_count\":208}],\"devices\":[{\"attr_type\":4,\"attr_value\":\"0\",\"user_count\":4470},{\"attr_type\":4,\"attr_value\":\"samsung-GALAXY A8armeabi-v8a\",\"user_count\":75},{\"attr_type\":4,\"attr_value\":\"OPPO-OPPO R7 Plusarmeabi-v8a\",\"user_count\":59},{\"attr_type\":4,\"attr_value\":\"TCL-TCL P560Marmeabi-v8a\",\"user_count\":58},{\"attr_type\":4,\"attr_value\":\"Coolpad-Coolpad Y90armeabi-v8a\",\"user_count\":57},{\"attr_type\":4,\"attr_value\":\"samsung-GALAXYS6 Edgearmeabi-v8a\",\"user_count\":57},{\"attr_type\":4,\"attr_value\":\"vivo-vivo X5Larmeabi-v8a\",\"user_count\":57},{\"attr_type\":4,\"attr_value\":\"vivo-vivo X5Marmeabi-v8a\",\"user_count\":57},{\"attr_type\":4,\"attr_value\":\"Huawei-HUAWEI P8armeabi-v8a\",\"user_count\":56},{\"attr_type\":4,\"attr_value\":\"TCL-TCL idol3armeabi-v8a\",\"user_count\":54}]}}";
            return  JsonConvert.SerializeObject(msg, iso); ;
        }

        public string faq()
        {
            string str = "{ \"base_resp\":{ \"ret\":1000,\"err_msg\":\"default\",\"assistant\":{ \"problem\":{ \"guide_list\":[] }}}}";
            return str;
        }

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

            menuList.list = weiXin.Menu_Summares.Where(x => x.ref_date >= begin_date && x.ref_date <= end_date).ToList();
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
            interModel.daily_list = weiXin.Dailes.Where(x => x.date >= begin_date && x.date <= end_date).ToList();
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
        public string WebpageanalysisAction(string action, string begin_date, string end_date, string func_name, string order_key, string order_direction, int begin, int count, string token, string lang, string f, int ajax, string random)
        {
            string s = "";
            //20160911
            string by = begin_date.Substring(0, 4);
            string bm = begin_date.Substring(4, 2);
            string bd = begin_date.Substring(6, 2);
            string ey = end_date.Substring(0, 4);
            string em = end_date.Substring(4, 2);
            string ed = end_date.Substring(6, 2);
            DateTime beginTime = Convert.ToDateTime(by + "-" + bm + "-" + bd);
            DateTime endTime = Convert.ToDateTime(ey + "-" + em + "-" + ed);

            WebpageanalysisRetrun webModel = new WebpageanalysisRetrun();
            webModel.InitBaseInfo();

            webModel.one_intf_stat_list = weiXin.Intf_Stats.Where(x => x.name == "config").ToList();
            webModel.all_intf_stat_list = weiXin.Intf_Stats.Where(x => x.name == "getNetworkType").ToList();
            webModel.total = webModel.one_intf_stat_list.Count;
            s = JsonConvert.SerializeObject(webModel, iso);
            return s;
        }


    }
}