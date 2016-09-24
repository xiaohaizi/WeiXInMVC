using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models
{
    public class UserAclList
    {
      public    Base_Acl base_acl = new Base_Acl();
        public Msg_Acl msg_acl = new Msg_Acl();
        public Ivr_Acl ivr_acl = new Ivr_Acl();
        public Merchant_Acl merchant_acl = new Merchant_Acl();
        public Region_Acl region_acl = new Region_Acl();
        public Single_Msg_Acl single_msg_acl = new Single_Msg_Acl();
        public Material_Acl material_acl = new Material_Acl();

    }
}