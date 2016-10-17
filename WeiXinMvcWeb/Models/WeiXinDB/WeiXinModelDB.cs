namespace WeiXinMvcWeb.Models.WeiXinDB
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class WeiXinModelDB : DbContext
    {
        //您的上下文已配置为从您的应用程序的配置文件(App.config 或 Web.config)
        //使用“WeiXinModelDB”连接字符串。默认情况下，此连接字符串针对您的 LocalDb 实例上的
        //“WeiXinMvcWeb.Models.WeiXinDB.WeiXinModelDB”数据库。
        // 
        //如果您想要针对其他数据库和/或数据库提供程序，请在应用程序配置文件中修改“WeiXinModelDB”
        //连接字符串。
        public WeiXinModelDB()
            : base("name=WeiXinModelDB")
        {
        }

        //为您要在模型中包含的每种实体类型都添加 DbSet。有关配置和使用 Code First  模型
        //的详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=390109。

        public virtual DbSet<Base_Resp> Base_Resps { get; set; }
        public virtual DbSet<Nav_Item> Nav_Items { get; set; }
        public virtual DbSet<Nav_Items> Nav_Itemes { get; set; }
        public virtual DbSet<User_Info> User_Infos { get; set; }
        public virtual DbSet<Wb_Info> Wb_Infos { get; set; }
        public virtual DbSet<User_SourceItem> User_SourceItems { get; set; }
        public virtual DbSet<AppmsgItem> AppmsgItems { get; set; }
        public virtual DbSet<Menu_Summary> Menu_Summares { get; set; }
        public virtual DbSet<Daily> Dailes { get; set; }
        public virtual DbSet<Intf_Stat> Intf_Stats { get; set; }
        public virtual DbSet<Device> Devices { get; set; }
        public virtual DbSet<Region> Regions { get; set; }
        public virtual DbSet<Platform> Platforms { get; set; }
        public virtual DbSet<Lang> Langs { get; set; }
        public virtual DbSet<Gender> Genders { get; set; }
        public virtual DbSet<MsgData> MsgDatas { get; set; }

        









        // public virtual DbSet<MyEntity> MyEntities { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}