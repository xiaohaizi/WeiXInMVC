using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WeiXinMvcWeb.Controllers
{
    public class MerchantController : Controller
    {
        // GET: Merchant
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Ad_Host_Index()
        {
            return View();
        }

        public ActionResult Store()
        {
            return View();
        }

    }
}