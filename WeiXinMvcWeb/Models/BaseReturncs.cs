using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class BaseReturncs
    {
        public User_Info user_info;
        public Base_Resp base_resp;
        public UserAclList user_acl = new UserAclList();
    }
}