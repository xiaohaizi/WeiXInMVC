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
            using (WeiXinModelDB weixin = new WeiXinModelDB())
            {
                msgList = weixin.SendMsgs.Take(8).ToList();
            }
            ViewBag.MsgList = msgList;
                return View();
        }
    }
}
