using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeiXinMvcWeb.Models.WeiXinDB;
using Newtonsoft.Json;
namespace WeiXinMvcWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            string str = "";
          //  Newtonsoft
           
            using (WeiXinEntities weixin = new WeiXinEntities()) {
                var s = weixin.Base_Resp.Include("Nav").ToList();


                str= JsonConvert.SerializeObject(s);

            }
            ViewBag.ss = str;
            return View();
        }
    }
}