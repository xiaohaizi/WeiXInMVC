using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WeiXinMvcWeb.Models.WeiXinDB;

namespace WeiXinMvcWeb.Models
{
    public class UserReturnModel
    {
    
        public  User_Info user_info;
        public Base_Resp base_resp;
        public UserAclList user_acl = new UserAclList();

        public List<CategoryList> category_list;
        public int load_done = 1;
    }
}