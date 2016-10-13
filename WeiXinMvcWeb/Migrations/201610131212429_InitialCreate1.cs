namespace WeiXinMvcWeb.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AppmsgItem",
                c => new
                    {
                        Msg_ID = c.Int(nullable: false, identity: true),
                        ref_date = c.DateTime(nullable: false),
                        user_source = c.Int(nullable: false),
                        int_page_read_user = c.Int(nullable: false),
                        int_page_read_count = c.Int(nullable: false),
                        ori_page_read_user = c.Int(nullable: false),
                        ori_page_read_count = c.Int(nullable: false),
                        share_user = c.Int(nullable: false),
                        share_count = c.Int(nullable: false),
                        add_to_fav_user = c.Int(nullable: false),
                        add_to_fav_count = c.Int(nullable: false),
                        total_online_time = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Msg_ID);
            
            CreateTable(
                "dbo.Daily",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        date = c.DateTime(nullable: false),
                        callback_count = c.Int(nullable: false),
                        fail_count = c.Int(nullable: false),
                        total_time_cost = c.Int(nullable: false),
                        max_time_cost = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Intf_Stat",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        date = c.DateTime(nullable: false),
                        name = c.String(maxLength: 100),
                        pv = c.Int(nullable: false),
                        uv = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Menu_Summary",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ref_date = c.DateTime(nullable: false),
                        version = c.Int(nullable: false),
                        parent_button_id = c.Int(nullable: false),
                        parent_button_key = c.String(maxLength: 50),
                        button_id = c.Int(nullable: false),
                        button_key = c.String(maxLength: 50),
                        primary_menu_name = c.String(maxLength: 50),
                        secondary_menu_name = c.String(maxLength: 50),
                        clk_uv = c.Int(nullable: false),
                        clk_pv = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.User_Info",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        nick_name = c.String(maxLength: 50),
                        fake_id = c.Long(nullable: false),
                        user_role = c.Int(nullable: false),
                        mass_send_left = c.Int(nullable: false),
                        alias = c.String(maxLength: 100),
                        sys_notify_cnt = c.Int(nullable: false),
                        service_type = c.Int(nullable: false),
                        notify_msg = c.String(maxLength: 300),
                        user_name = c.String(maxLength: 100),
                        pwd = c.String(maxLength: 100),
                        is_wx_verify = c.Int(nullable: false),
                        realname_status = c.Int(nullable: false),
                        realname_type = c.Int(nullable: false),
                        is_vip = c.Int(nullable: false),
                        is_dev_user = c.Int(nullable: false),
                        have_package = c.Int(nullable: false),
                        is_verify_on = c.Int(nullable: false),
                        fake_id_base64 = c.String(maxLength: 400),
                        is_qverify = c.Int(nullable: false),
                        account_version = c.Int(nullable: false),
                        bank_verify_status = c.Int(nullable: false),
                        bank_deadline = c.Int(nullable: false),
                        remit_code_prefix = c.String(maxLength: 200),
                        register_type = c.Int(nullable: false),
                        can_modify_nickname = c.Int(nullable: false),
                        show_verify_warning = c.Int(nullable: false),
                        verify_deadline = c.Int(nullable: false),
                        nickname_invade = c.Int(nullable: false),
                        force_remit_verify = c.Int(nullable: false),
                        registered_country = c.Int(nullable: false),
                        is_overseas = c.Int(nullable: false),
                        nickname_check_status = c.Int(nullable: false),
                        disable_head_box = c.Int(nullable: false),
                        is_remit_reg = c.Int(nullable: false),
                        remit_reg_deadline = c.Int(nullable: false),
                        wb_info_ID = c.Int(),
                    })
                .PrimaryKey(t => t.UserID)
                .ForeignKey("dbo.Wb_Info", t => t.wb_info_ID)
                .Index(t => t.wb_info_ID);
            
            CreateTable(
                "dbo.Wb_Info",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        src = c.String(maxLength: 300),
                        verify_flag = c.Int(nullable: false),
                        verify_info = c.String(maxLength: 300),
                        nick_name = c.String(maxLength: 100),
                        head_img_url = c.String(maxLength: 300),
                        verify_code = c.String(maxLength: 300),
                        manual_review = c.Int(nullable: false),
                        can_sync = c.Int(nullable: false),
                        verify_status = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.User_SourceItem",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        date = c.DateTime(nullable: false),
                        new_user = c.Int(nullable: false),
                        cancel_user = c.Int(nullable: false),
                        netgain_user = c.Int(nullable: false),
                        cumulate_user = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            DropColumn("dbo.Nav_Items", "Nav_Itemid");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Nav_Items", "Nav_Itemid", c => c.Int(nullable: false));
            DropForeignKey("dbo.User_Info", "wb_info_ID", "dbo.Wb_Info");
            DropIndex("dbo.User_Info", new[] { "wb_info_ID" });
            DropTable("dbo.User_SourceItem");
            DropTable("dbo.Wb_Info");
            DropTable("dbo.User_Info");
            DropTable("dbo.Menu_Summary");
            DropTable("dbo.Intf_Stat");
            DropTable("dbo.Daily");
            DropTable("dbo.AppmsgItem");
        }
    }
}
