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
    using System;
    using System.Collections.Generic;
    
    public partial class User_Info
    {
        public User_Info()
        {
            this.Wb_Info = new HashSet<Wb_Info>();
        }
    
        public int UserID { get; set; }
        public string Nick_Name { get; set; }
        public int Fake_ID { get; set; }
        public int User_Role { get; set; }
        public int Mass_Send_Left { get; set; }
        public string Alias { get; set; }
        public int Sys_Notify_Cnt { get; set; }
        public int Service_Type { get; set; }
        public string Notify_Msg { get; set; }
        public string User_Name { get; set; }
        public int Is_Wx_Verify { get; set; }
        public int RealName_Status { get; set; }
        public int RealName_Type { get; set; }
        public int Is_Vip { get; set; }
        public int Is_Dev_User { get; set; }
        public int Have_Package { get; set; }
        public int Is_Verify_On { get; set; }
        public string Fake_Id_BBase64 { get; set; }
        public int Is_Qverify { get; set; }
        public int Account_Version { get; set; }
        public int Bank_Verify_Status { get; set; }
        public int Bank_Deadline { get; set; }
        public string Remit_Code_Prefix { get; set; }
        public int Register_Type { get; set; }
        public int Can_Modify_Nickname { get; set; }
        public int Show_Verify_Warning { get; set; }
        public int Verify_Deadline { get; set; }
        public int Nickname_Invade { get; set; }
        public int Force_Remit_Verify { get; set; }
        public int Registered_Country { get; set; }
        public int Is_Overseas { get; set; }
        public int Nickname_Check_Status { get; set; }
        public int Disable_Head_Box { get; set; }
        public int Is_Remit_Reg { get; set; }
        public int Remit_Reg_DeadLine { get; set; }
    
        public virtual ICollection<Wb_Info> Wb_Info { get; set; }
    }
}
