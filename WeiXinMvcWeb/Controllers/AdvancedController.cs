using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WeiXinMvcWeb.Controllers
{
    public class AdvancedController : Controller
    {
        // GET: Advanced
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Autoreply()
        {
           
            ViewBag.MenuItem = "autoreply";
            return View();
        }

        public ActionResult Selfmenu()
        {
            return View();
        }

    }
}