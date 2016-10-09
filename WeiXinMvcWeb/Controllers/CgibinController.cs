﻿using System;
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
                base_resp.redirect_url = "/misc/useranalysis?token=1493886297&lang=zh_CN";
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
    }
}