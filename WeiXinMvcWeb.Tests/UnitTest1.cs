using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;
using WeiXinMvcWeb.Models;
using WeiXinMvcWeb.Models.WeiXinDB;
using System.Text.RegularExpressions;

namespace WeiXinMvcWeb.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            using (WeiXinModelDB db = new WeiXinModelDB())
            {
                //db.Regions.ToList();
                string s = @"{//2016-10-13
                                                                    region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3103',
                                                                        region_name: '深圳'
                                                                    },
                                                                    count: +('42') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '10',
                                                                        region_name: '北京'
                                                                    },
                                                                    count: +('25') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2901',
                                                                        region_name: '武汉'
                                                                    },
                                                                    count: +('23') || 0
                                                                }
                                                                , {//2016-10-13
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '11',
                                                                        region_name: '上海'
                                                                    },
                                                                    count: +('21') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3102',
                                                                        region_name: '广州'
                                                                    },
                                                                    count: +('17') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '13',
                                                                        region_name: '重庆'
                                                                    },
                                                                    count: +('16') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3801',
                                                                        region_name: '西安'
                                                                    },
                                                                    count: +('14') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3105',
                                                                        region_name: '东莞'
                                                                    },
                                                                    count: +('14') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2323',
                                                                        region_name: '金华'
                                                                    },
                                                                    count: +('12') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2202',
                                                                        region_name: '苏州'
                                                                    },
                                                                    count: +('11') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2320',
                                                                        region_name: '嘉兴'
                                                                    },
                                                                    count: +('10') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3602',
                                                                        region_name: '昆明'
                                                                    },
                                                                    count: +('9') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2301',
                                                                        region_name: '杭州'
                                                                    },
                                                                    count: +('9') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3106',
                                                                        region_name: '佛山'
                                                                    },
                                                                    count: +('8') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2302',
                                                                        region_name: '宁波'
                                                                    },
                                                                    count: +('8') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2710',
                                                                        region_name: '菏泽'
                                                                    },
                                                                    count: +('8') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2815',
                                                                        region_name: '南阳'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2701',
                                                                        region_name: '济南'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2709',
                                                                        region_name: '聊城'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2101',
                                                                        region_name: '哈尔滨'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2801',
                                                                        region_name: '郑州'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3401',
                                                                        region_name: '成都'
                                                                    },
                                                                    count: +('7') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2711',
                                                                        region_name: '济宁'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3111',
                                                                        region_name: '中山'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3112',
                                                                        region_name: '惠州'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2503',
                                                                        region_name: '泉州'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2303',
                                                                        region_name: '温州'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3901',
                                                                        region_name: '兰州'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1601',
                                                                        region_name: '石家庄'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2201',
                                                                        region_name: '南京'
                                                                    },
                                                                    count: +('6') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2806',
                                                                        region_name: '开封'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2501',
                                                                        region_name: '福州'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3503',
                                                                        region_name: '遵义'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3804',
                                                                        region_name: '咸阳'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2214',
                                                                        region_name: '盐城'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4201',
                                                                        region_name: '乌鲁木齐'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1708',
                                                                        region_name: '忻州'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1901',
                                                                        region_name: '沈阳'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1606',
                                                                        region_name: '保定'
                                                                    },
                                                                    count: +('5') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3405',
                                                                        region_name: '宜宾'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2502',
                                                                        region_name: '厦门'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2601',
                                                                        region_name: '南昌'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2602',
                                                                        region_name: '九江'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2401',
                                                                        region_name: '合肥'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2706',
                                                                        region_name: '德州'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1709',
                                                                        region_name: '运城'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3805',
                                                                        region_name: '渭南'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2207',
                                                                        region_name: '连云港'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2809',
                                                                        region_name: '驻马店'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2204',
                                                                        region_name: '无锡'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2817',
                                                                        region_name: '平顶山'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2906',
                                                                        region_name: '荆州'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3505',
                                                                        region_name: '铜仁'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3122',
                                                                        region_name: '揭阳'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3001',
                                                                        region_name: '长沙'
                                                                    },
                                                                    count: +('4') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3117',
                                                                        region_name: '江门'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2714',
                                                                        region_name: '泰安'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1610',
                                                                        region_name: '张家口'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1710',
                                                                        region_name: '晋中'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2707',
                                                                        region_name: '滨州'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1607',
                                                                        region_name: '廊坊'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2703',
                                                                        region_name: '烟台'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2608',
                                                                        region_name: '宜春'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1701',
                                                                        region_name: '太原'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2607',
                                                                        region_name: '吉安'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3404',
                                                                        region_name: '绵阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2506',
                                                                        region_name: '莆田'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2505',
                                                                        region_name: '三明'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1802',
                                                                        region_name: '包头'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1907',
                                                                        region_name: '铁岭'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2909',
                                                                        region_name: '孝感'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3104',
                                                                        region_name: '珠海'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2802',
                                                                        region_name: '安阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1707',
                                                                        region_name: '晋城'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1605',
                                                                        region_name: '唐山'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3011',
                                                                        region_name: '益阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3008',
                                                                        region_name: '邵阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2811',
                                                                        region_name: '新乡'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2814',
                                                                        region_name: '周口'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2816',
                                                                        region_name: '洛阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3607',
                                                                        region_name: '保山'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '29',
                                                                        region_name: '湖北省'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2902',
                                                                        region_name: '十堰'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2903',
                                                                        region_name: '宜昌'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2910',
                                                                        region_name: '黄冈'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3907',
                                                                        region_name: '平凉'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2206',
                                                                        region_name: '常州'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2203',
                                                                        region_name: '扬州'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '12',
                                                                        region_name: '天津'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2211',
                                                                        region_name: '宿迁'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4208',
                                                                        region_name: '喀什'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1809',
                                                                        region_name: '通辽'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2319',
                                                                        region_name: '台州'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1805',
                                                                        region_name: '呼伦贝尔'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '41',
                                                                        region_id: '4102',
                                                                        region_name: '石嘴山'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2004',
                                                                        region_name: '吉林'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2001',
                                                                        region_name: '长春'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '40',
                                                                        region_id: '4001',
                                                                        region_name: '西宁'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2411',
                                                                        region_name: '阜阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2407',
                                                                        region_name: '淮北'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3909',
                                                                        region_name: '庆阳'
                                                                    },
                                                                    count: +('3') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2904',
                                                                        region_name: '黄石'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4215',
                                                                        region_name: '阿克苏'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4209',
                                                                        region_name: '昌吉'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3209',
                                                                        region_name: '桂林'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2107',
                                                                        region_name: '佳木斯'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2111',
                                                                        region_name: '齐齐哈尔'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3208',
                                                                        region_name: '河池'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2113',
                                                                        region_name: '绥化'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1608',
                                                                        region_name: '邢台'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1902',
                                                                        region_name: '大连'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1908',
                                                                        region_name: '丹东'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3906',
                                                                        region_name: '张掖'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2205',
                                                                        region_name: '南通'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4217',
                                                                        region_name: '伊犁'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4220',
                                                                        region_name: '塔城'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3512',
                                                                        region_name: '黔西南'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3501',
                                                                        region_name: '贵阳'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1910',
                                                                        region_name: '营口'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3506',
                                                                        region_name: '毕节'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1703',
                                                                        region_name: '大同'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1702',
                                                                        region_name: '长治'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3502',
                                                                        region_name: '六盘水'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1611',
                                                                        region_name: '邯郸'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3109',
                                                                        region_name: '汕头'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1609',
                                                                        region_name: '衡水'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3116',
                                                                        region_name: '汕尾'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3119',
                                                                        region_name: '茂名'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3120',
                                                                        region_name: '肇庆'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '41',
                                                                        region_id: '4101',
                                                                        region_name: '银川'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1803',
                                                                        region_name: '赤峰'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3908',
                                                                        region_name: '酒泉'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2509',
                                                                        region_name: '宁德'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2603',
                                                                        region_name: '赣州'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2604',
                                                                        region_name: '景德镇'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '40',
                                                                        region_id: '4002',
                                                                        region_name: '海东'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1804',
                                                                        region_name: '鄂尔多斯'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '26',
                                                                        region_id: '2609',
                                                                        region_name: '抚州'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1602',
                                                                        region_name: '沧州'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3810',
                                                                        region_name: '商洛'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2702',
                                                                        region_name: '青岛'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2810',
                                                                        region_name: '商丘'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2705',
                                                                        region_name: '潍坊'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2708',
                                                                        region_name: '东营'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2208',
                                                                        region_name: '徐州'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '22',
                                                                        region_id: '2209',
                                                                        region_name: '镇江'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2808',
                                                                        region_name: '三门峡'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3802',
                                                                        region_name: '宝鸡'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '16',
                                                                        region_id: '1603',
                                                                        region_name: '承德'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2804',
                                                                        region_name: '鹤壁'
                                                                    },
                                                                    count: +('2') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3912',
                                                                        region_name: '临夏'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3615',
                                                                        region_name: '德宏'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3902',
                                                                        region_name: '白银'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3903',
                                                                        region_name: '天水'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3423',
                                                                        region_name: '凉山'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3419',
                                                                        region_name: '雅安'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3418',
                                                                        region_name: '巴中'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1905',
                                                                        region_name: '葫芦岛'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '39',
                                                                        region_id: '3905',
                                                                        region_name: '武威'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3414',
                                                                        region_name: '遂宁'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3413',
                                                                        region_name: '广元'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3412',
                                                                        region_name: '南充'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3411',
                                                                        region_name: '德阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3617',
                                                                        region_name: '红河'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3409',
                                                                        region_name: '资阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '37',
                                                                        region_id: '3703',
                                                                        region_name: '那曲'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: 'gw293',
                                                                        region_name: '新加坡'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3610',
                                                                        region_name: '临沧'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3608',
                                                                        region_name: '昭通'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3806',
                                                                        region_name: '延安'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3606',
                                                                        region_name: '玉溪'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3807',
                                                                        region_name: '汉中'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3605',
                                                                        region_name: '曲靖'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '41',
                                                                        region_id: '4103',
                                                                        region_name: '吴忠'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4218',
                                                                        region_name: '克孜勒苏柯'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3808',
                                                                        region_name: '榆林'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '35',
                                                                        region_id: '3511',
                                                                        region_name: '黔南'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: 'null',
                                                                        region_name: '未知地域'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '38',
                                                                        region_id: '3809',
                                                                        region_name: '安康'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '41',
                                                                        region_id: '4105',
                                                                        region_name: '中卫'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '43',
                                                                        region_name: '台湾省'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '42',
                                                                        region_id: '4206',
                                                                        region_name: '哈密'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: 'gw219',
                                                                        region_name: '韩国'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '36',
                                                                        region_id: '3612',
                                                                        region_name: '文山'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '41',
                                                                        region_id: '4104',
                                                                        region_name: '固原'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '42',
                                                                        region_name: '新疆'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2310',
                                                                        region_name: '舟山'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2704',
                                                                        region_name: '威海'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1801',
                                                                        region_name: '呼和浩特'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '27',
                                                                        region_name: '山东省'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2508',
                                                                        region_name: '龙岩'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2507',
                                                                        region_name: '南平'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '25',
                                                                        region_id: '2504',
                                                                        region_name: '漳州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2416',
                                                                        region_name: '池州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2415',
                                                                        region_name: '亳州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2414',
                                                                        region_name: '六安'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2413',
                                                                        region_name: '巢湖'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2409',
                                                                        region_name: '安庆'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2404',
                                                                        region_name: '蚌埠'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '24',
                                                                        region_id: '2403',
                                                                        region_name: '芜湖'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2322',
                                                                        region_name: '衢州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '23',
                                                                        region_id: '2321',
                                                                        region_name: '湖州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1711',
                                                                        region_name: '吕梁'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1814',
                                                                        region_name: '兴安盟'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '18',
                                                                        region_id: '1816',
                                                                        region_name: '锡林郭勒盟'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1903',
                                                                        region_name: '本溪'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '22',
                                                                        region_name: '江苏省'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2112',
                                                                        region_name: '伊春'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2103',
                                                                        region_name: '大兴安岭'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '21',
                                                                        region_id: '2102',
                                                                        region_name: '大庆'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1904',
                                                                        region_name: '阜新'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '21',
                                                                        region_name: '黑龙江省'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2008',
                                                                        region_name: '松原'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2006',
                                                                        region_name: '四平'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2003',
                                                                        region_name: '白山'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '20',
                                                                        region_id: '2002',
                                                                        region_name: '白城'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1914',
                                                                        region_name: '朝阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '19',
                                                                        region_id: '1911',
                                                                        region_name: '鞍山'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3003',
                                                                        region_name: '株洲'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '33',
                                                                        region_id: '3312',
                                                                        region_name: '定安县'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '33',
                                                                        region_id: '3305',
                                                                        region_name: '儋州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3213',
                                                                        region_name: '来宾'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3211',
                                                                        region_name: '防城港'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3207',
                                                                        region_name: '玉林'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3206',
                                                                        region_name: '贺州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3203',
                                                                        region_name: '北海'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '32',
                                                                        region_id: '3201',
                                                                        region_name: '南宁'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3121',
                                                                        region_name: '清远'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3115',
                                                                        region_name: '梅州'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3110',
                                                                        region_name: '湛江'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '31',
                                                                        region_id: '3101',
                                                                        region_name: '云浮'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '31',
                                                                        region_name: '广东省'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3013',
                                                                        region_name: '怀化'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '30',
                                                                        region_id: '3009',
                                                                        region_name: '岳阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '34',
                                                                        region_id: '3402',
                                                                        region_name: '内江'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2917',
                                                                        region_name: '神农架林区'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2915',
                                                                        region_name: '天门'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2913',
                                                                        region_name: '恩施'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '29',
                                                                        region_id: '2907',
                                                                        region_name: '荆门'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1704',
                                                                        region_name: '阳泉'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '17',
                                                                        region_id: '1706',
                                                                        region_name: '临汾'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2813',
                                                                        region_name: '许昌'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2812',
                                                                        region_name: '信阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2807',
                                                                        region_name: '濮阳'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '28',
                                                                        region_id: '2805',
                                                                        region_name: '焦作'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2716',
                                                                        region_name: '日照'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2715',
                                                                        region_name: '枣庄'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2713',
                                                                        region_name: '淄博'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '27',
                                                                        region_id: '2712',
                                                                        region_name: '临沂'
                                                                    },
                                                                    count: +('1') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '14',
                                                                        region_name: '香港'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '15',
                                                                        region_name: '澳门'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '16',
                                                                        region_name: '河北省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '17',
                                                                        region_name: '山西省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '18',
                                                                        region_name: '内蒙古'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '19',
                                                                        region_name: '辽宁省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '20',
                                                                        region_name: '吉林省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '23',
                                                                        region_name: '浙江省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '24',
                                                                        region_name: '安徽省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '25',
                                                                        region_name: '福建省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '26',
                                                                        region_name: '江西省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '28',
                                                                        region_name: '河南省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '30',
                                                                        region_name: '湖南省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '32',
                                                                        region_name: '广西省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '33',
                                                                        region_name: '海南省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '34',
                                                                        region_name: '四川省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '35',
                                                                        region_name: '贵州省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '36',
                                                                        region_name: '云南省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '37',
                                                                        region_name: '西藏'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '38',
                                                                        region_name: '陕西省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '39',
                                                                        region_name: '甘肃省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                , {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: '40',
                                                                        region_name: '青海省'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                                ,  {
                region:
                {
                    parent_region_id: '-1',
                                                                        region_id: 'all',
                                                                        region_name: '全国'
                                                                    },
                                                                    count: +('0') || 0
                                                                }
                                                        ]

                                                    }";
                s = s.Replace("\n\r", "").Replace("\r", "").Replace("\n", "").Replace(" ", "");
                string [] sArr= s.Split(new string[] { "region:" }, StringSplitOptions.RemoveEmptyEntries);
                Regex reg = new Regex(@"(parent_region_id:'\d{0,9}'|parent_region_id:'-1')");
                Regex reg1 = new Regex(@"(,region_id:'\d{0,20}'|,region_id:'[a-z]{0,20}'|,region_id:'[a-z,0-9]{0,20}')");
                Regex reg2 = new Regex(@"(region_name:'.{0,12}')");
                Regex reg3 = new Regex("(count:\\+\\('\\d{0,20}'\\))");
                //  MatchCollection mc = null;
                List<Dictionary<string, string>> list = new List<Dictionary<string, string>>();
              
               
                foreach (var s1 in sArr) {
                    Match mth = reg.Match(s1);
                    Match mth1 = reg1.Match(s1);
                    Match mth2 = reg2.Match(s1);
                    Match mth3 = reg3.Match(s1);
                    Dictionary<string, string> dic = null;
                    if (mth.Success) {
                        //if (dic == null)
                        dic= dic??new Dictionary<string, string>();
                        dic.Add("parent_region_id", mth.Value);
                    }
                    if (mth1.Success)
                    {
                        dic = dic ?? new Dictionary<string, string>();
                        dic.Add("region_id", mth1.Value);
                    }
                    if (mth2.Success)
                    {
                        dic = dic ?? new Dictionary<string, string>();
                        dic.Add("region_name", mth2.Value);
                    }
                    if (mth3.Success)
                    {
                        dic = dic ?? new Dictionary<string, string>();
                        dic.Add("count", mth3.Value);
                    }
                    if(dic!=null)
                    list.Add(dic);

                }

                foreach (var d in list)
                {
                    Region model = new Region();
                    model.DTime = Convert.ToDateTime("2016-10-13");
                    model.Parent_Region_Id = d["parent_region_id"].Replace("'", "").Replace("parent_region_id:", "");
                    model.Region_Id = d["region_id"].Replace("'", "").Replace(",region_id:", "");
                    model.RegionCount = int.Parse(d["count"].Replace("'", "").Replace("(", "").Replace(")", "").Replace("count:+", ""));
                    model.Region_Name = d["region_name"].Replace("'", "").Replace("region_name:", "");
                    db.Regions.Add(model);
                }

                db.SaveChanges();

            }
           
        }
    }
}
