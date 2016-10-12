define("tpl/qrcheck.html.js",[],function(){
return'<div class="qrcode_wrp qrcode_scan qrcode_scan_light">\n    <div class="qrcode_loading js_qrcheck_img_loading">\n        <div class="loading_qrcode"></div>\n        <div class="gif_loading"></div>\n    </div>\n    <img class="js_qrcheck_img qrcode" style="display:none"/>\n    <div class="js_qrcheck_tips qrcode_tips">\n        <div class="js_qrcheck_content qrcheck_content">\n        </div>\n        <div class="js_qrcheck_ret_0 js_qrcheck_tpl">\n            <div class="page_msg small small_gap">\n                <p class="desc">为了验证你的身份，请用绑定了{name}本人银行卡的微信扫描二维码。本验证方式不扣除任何费用。</p>\n                <p class="desc">若微信没有绑定银行卡，请先绑定。<a target="_blank" href="http://kf.qq.com/faq/120911VrYVrA141111MFVVvU.html">如何绑定</a></p>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_fail js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>二维码获取失败</h4>\n                    <p>请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_login js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>登录超时</h4>\n                    <p>需要<a href="/">重新登录</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_1 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan succ"></i>\n                <div class="status_txt">\n                    <h4>身份验证成功</h4>\n                    <p>{name}将作为该公众号的{name_title}</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_1 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请更换{name_title}</h4>\n                    <p>该{name_title}已经绑定了5个普通公众号，不可继续绑定，请更换{name_title}。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_5 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>身份验证失败</h4>\n                    <p>该微信号已作为多个公众号{name_title}，无法再次作为{name_title}绑定公众平台。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_6 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>该银行卡已被使用</h4>\n                    <p>该银行卡已被使用注册公众帐号，不可继续注册。</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_101 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>姓名不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_102 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>身份证不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_103 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>姓名、身份证不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_116 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_117 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请重新绑卡</h4>\n                    <p>请尝试将银行卡解除绑定后重新绑定，并<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码再试。<a href="http://kf.qq.com/faq/120911VrYVrA141201zeU3Ij.html" target="_blank">如何解绑</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_118 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请重新绑卡</h4>\n                    <p>当前绑定的银行卡暂不支持实名验证，请尝试绑定其他银行的银行卡，并<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码后重试。<a href="http://kf.qq.com/faq/130807me2YZf130807BJBBNr.html" target="_blank">如何绑定</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_119 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证身份</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_120 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_121 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>\n                        与开通微信支付时注册的身份证号码不一致，请点击手机上的提示链接将身份证信息更新后再试。                        <a href="javascript:;" class="js_qrcheck_reloading">刷新</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_3 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>二维码已过期</h4>\n                    <p>请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码，并重新扫描</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
});