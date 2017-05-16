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
           // WeiXinMvcWeb.Models.Class1.jiami();

            string str = "";
            //  Newtonsoft
            List<Base_Resp> Base_RespList = new List<Base_Resp>();
            List<Nav_Items> navItemsList = new List<Nav_Items>();
          
                ViewBag.ss = str;
            return View();
        }
    }
}