namespace WeiXinMvcWeb.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Base_Resp",
                c => new
                    {
                        cgi_id = c.Int(nullable: false, identity: true),
                        ret = c.Int(nullable: false),
                        err_msg = c.String(),
                        svr_time = c.Int(nullable: false),
                        token = c.String(),
                        media_ticket = c.String(),
                        master_ticket = c.String(),
                        master_ticket_id = c.String(),
                        sp_login = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.cgi_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Base_Resp");
        }
    }
}
