using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WeiXinMvcWeb.Views.Part
{
    public class PartController : Controller
    {
        // GET: Part
        public PartialViewResult Menu()
        {
            return PartialView();
        }
    }
}