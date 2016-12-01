using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using WeiXinMvcWeb.Models;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Controllers
{
    public class CgibinController : Controller
    {
        // GET: Cgibin
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            int start = 1;
            if (Request.QueryString["start"] != null)
            {
                start = int.Parse(Request.QueryString["start"]);
            }
            int count = 0;
            using (WeiXinModelDB wxDb=new WeiXinModelDB()) {
                count= wxDb.NewsNotices.Count();
              var newsList= wxDb.NewsNotices.OrderByDescending(x => x.ID).Skip((start-1)*27).Take(27).ToList();
                ViewBag.NewsList = newsList;
                ViewBag.BaseInfo=  wxDb.BaseInfos.FirstOrDefault();
            }
            int pages =(int)Math.Ceiling(Convert.ToDecimal(count)/Convert.ToDecimal("27"));
            ViewBag.PageCount = pages;
            ViewBag.Page = start;
            return View();
        }

        [HttpPost]
        public string Login(string username,string pwd,string f)
        {
            string s = "";  
            Dictionary<string, LoginReturn> dic = new Dictionary<string, LoginReturn>();
            LoginReturn base_resp = new LoginReturn();
            base_resp.err_msg = "acct/password error";
            base_resp.ret = 200023;
            using (WeiXinModelDB weixin=new WeiXinModelDB())
            {
              var user=  weixin.User_Infos.Where(x => x.user_name == username && x.pwd == pwd).FirstOrDefault();
                  base_resp.ret  = 0;
                base_resp.redirect_url = "/cgibin/home?t=home/index&lang=zh_CN&token=1941453980";
                // redirect_url
            }
           
            dic.Add("base_resp", base_resp);
            s =JsonConvert.SerializeObject(dic);
            return s;
        }

        public ActionResult Masssendpage()
        {
            return View();
        }

        public ActionResult Newoperatevote()
        {
            ViewBag.ClassBody = "screen_small";
             return View();
        }


        public ActionResult Message()
        {
            return View();
        }

        public ActionResult Messages()
        {
            return View();
        }

        public ActionResult User_Tag()
        {
            return View();
        }


        public ActionResult Appmsg()
        {
            return View();
        }

        public ActionResult Filepage()
        {
            return View();
        }

        public ActionResult Filepage3()
        {
            return View();
        }

        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult Frame1()
        {
            return View();
        }

        public ActionResult Settingpage()
        {
            return View();
        }

        public ActionResult Safecenterstatus()
        {
            return View();
        }

        public ActionResult Illegalrecord()
        {
            return View();
        }

        public ActionResult Masssendpage_t()
        {
            List<SendMsg> msgList = new List<SendMsg>();
            int Count = 0;
           int p= int.Parse(Request.QueryString["begin"]);
            using (WeiXinModelDB weixin = new WeiXinModelDB())
            {
                Count = weixin.SendMsgs.Count();
                msgList = weixin.SendMsgs.OrderByDescending(x=>x.ID).Skip(p*10).Take(10).ToList();
            }
            ViewBag.Count = Count;
            ViewBag.begin = p+1;
         
            ViewBag.pages = (int)Math.Ceiling(Convert.ToDecimal(Count) / 10);
            ViewBag.MsgList = msgList;
                return View();
        }

        public string masssendpage_del()
        {
            string s = "";
            int n = 0;
            string id = Request.QueryString["id"];
            using (WeiXinModelDB weixin = new WeiXinModelDB())
            {
               var msgModel= weixin.SendMsgs.Find(int.Parse(id));
                msgModel.MsgStatus = 1;
               n= weixin.SaveChanges();

            }
            Dictionary<string, string> dic = new Dictionary<string, string>();
            if (n > 0)
            {
                dic.Add("status", "200");
            }
            else
            {
                dic.Add("status", "300");
            }
           s= JsonConvert.SerializeObject(dic);
                return s;
        }
    }
}
