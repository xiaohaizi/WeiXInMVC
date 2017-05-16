using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class Class1
    {


       
        public class Class1aa
        {
            public string ref_date { get; set; }
            public int user_source { get; set; }
            public int share_scene { get; set; }
            public int share_count { get; set; }
            public int share_user { get; set; }
        }

        public static void jiami()
        {
                string myMacAddress = Computer.MacAddress.ToLower().Replace("-",":");
                string CpuId = Computer.CpuID.ToLower();
                string allowedAddress = "7c:c7:09:59:a8:35,60:ee:5c:07:21:30,00:16:3e:02:fe:76,24:05:0f:88:35:24,60:ee:5c:07:18:8e,94:de:80:61:f7:e3,94:de:80:62:d1:01,94:de:80:62:f9:e2,94:de:80:a4:a8:09,94:de:80:62:f9:e2,94:de:80:61:d2:a0,90:2b:34:90:b6:7f,6c:f0:49:b6:04:b3";
                string allowedCpu = "bfebfbff000306d4,bfebfbff000006fd,bfebfbff0001067a,bfebfbff000206a7,bfebfbff000306a9,0f8bfbff000306e4,178bfbff00100f63";
                if (allowedAddress.IndexOf(myMacAddress)==-1 || allowedCpu.IndexOf(CpuId)==-1 ) // 未授权
                {
                        System.Web.HttpContext.Current.Response.Redirect("http://www.qq.com");
                }
            }
        }


    }