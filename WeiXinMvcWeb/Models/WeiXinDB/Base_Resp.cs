//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;

    public partial class Base_Resp
    {
        public Base_Resp()
        {
            this.Nav = new HashSet<Nav_Items>();
        }
    
        public int Cgi_ID { get; set; }
        public int Ret { get; set; }
        public string Err_Msg { get; set; }
        public int Svr_Time { get; set; }
        public string Token { get; set; }
        public string Media_Ticket { get; set; }
        public string Master_Ticket { get; set; }
        public string Master_Ticket_ID { get; set; }
        public int Sp_Login { get; set; }

      
        public virtual ICollection<Nav_Items> Nav { get; set; }
    }
}
