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
    using System.Runtime.Serialization;

    public partial class Nav_Items
    {
        public Nav_Items()
        {
            this.Nav_Item = new HashSet<Nav_Item>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
        public string Logo_Url { get; set; }
        public int New_Flag { get; set; }
        public int Is_Can_Click { get; set; }
        public int New_Seq { get; set; }
        public int Base_RespCgi_ID { get; set; }

       
        public virtual ICollection<Nav_Item> Nav_Item { get; set; }
        [JsonIgnore]
        public virtual Base_Resp Base_Resp { get; set; }
    }
}
