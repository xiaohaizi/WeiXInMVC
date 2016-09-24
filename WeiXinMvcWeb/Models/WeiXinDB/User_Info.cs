using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WeiXinMvcWeb.Models.WeiXinDB
{
    [Table("User_Info")]
    public partial class User_Info
    {
        [Key]
        public int UserID { get; set; }
        [StringLength(50)]
        public string nick_name { get; set; }
        public long fake_id { get; set; }
        public int user_role { get; set; }
        public int mass_send_left { get; set; }
        [StringLength(100)]
        public string alias { get; set; }
        public int sys_notify_cnt { get; set; }
        public int service_type { get; set; }
        [StringLength(300)]
        public string notify_msg { get; set; }
        [StringLength(100)]
        public string user_name { get; set; }
        public int is_wx_verify { get; set; }
        public int realname_status { get; set; }
        public int realname_type { get; set; }
        public int is_vip { get; set; }
        public int is_dev_user { get; set; }
        public int have_package { get; set; }
        public Wb_Info wb_info { get; set; }
        public int is_verify_on { get; set; }
        [StringLength(400)]
        public string fake_id_base64 { get; set; }
        public int is_qverify { get; set; }
        public int account_version { get; set; }
        public int bank_verify_status { get; set; }
        public int bank_deadline { get; set; }
        [StringLength(200)]
        public string remit_code_prefix { get; set; }
        public int register_type { get; set; }
        public int can_modify_nickname { get; set; }
        public int show_verify_warning { get; set; }
        public int verify_deadline { get; set; }
        public int nickname_invade { get; set; }
        public int force_remit_verify { get; set; }
        public int registered_country { get; set; }
        public int is_overseas { get; set; }
        public int nickname_check_status { get; set; }
        public int disable_head_box { get; set; }
        public int is_remit_reg { get; set; }
        public int remit_reg_deadline { get; set; }
    }
}