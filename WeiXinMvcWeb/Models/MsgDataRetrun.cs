using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;
namespace WeiXinMvcWeb.Models
{
    public class MsgDataRetrun
    {
        public List<Gender> genders = new List<Gender>();
        public List<MM1> regions = new List<MM1>();
        public List<Platform> platforms = new List<Platform>();
        public List<Device> devices = new List<Device>();


    }

    public class MM1{
      public  Region region = new Region();
    }
}