using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Class1
    {


        public class Rootobject
        {
            public Class1a[] Property1 { get; set; }
        }

        public class Class1a
        {
            public string date { get; set; }
            public Device[] devices { get; set; }
            public Gender[] genders { get; set; }
            public Lang[] langs { get; set; }
            public Platform[] platforms { get; set; }
            public Region[] regions { get; set; }
        }

        public class Device
        {
            public string value { get; set; }
            public int count { get; set; }
        }

        public class Gender
        {
            public string name { get; set; }
            public string value { get; set; }
            public int count { get; set; }
        }

        public class Lang
        {
            public string name { get; set; }
            public string value { get; set; }
            public int count { get; set; }
        }

        public class Platform
        {
            public string name { get; set; }
            public string value { get; set; }
            public int count { get; set; }
        }

        public class Region
        {
            public Region1 region { get; set; }
            public int count { get; set; }
        }

        public class Region1
        {
            public string parent_region_id { get; set; }
            public string region_id { get; set; }
            public string region_name { get; set; }
        }




    }
}