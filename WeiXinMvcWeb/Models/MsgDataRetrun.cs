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
      //  public string regions = "";
        public List<MM1> regions = new List<MM1>();
        public List<Platform> platforms = new List<Platform>();
        public List<Device> devices = new List<Device>();


    }

    public class MM1{
        public MM2 region = new MM2();
        public int user_count = 0;
    }
    public class MM2 {
        public string region_id;
        public string region_name;
        public string parent_region_id;
    }
}