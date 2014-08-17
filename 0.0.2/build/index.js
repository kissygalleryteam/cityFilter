/*
combined files : 

kg/cityfilter/0.0.1/citylist
kg/cityfilter/0.0.1/index

*/
/**
 * @fileoverview citylist.
 * @author 辟蹊
 * 
 */
KISSY.add('kg/cityfilter/0.0.1/citylist',function (S, Node) {

    //初始化各个城
    var Citylist = [
        ['640000','宁夏','ningxia','nx'],
        ['640100','银川','yinchuan','yc'],
        ['640200','石嘴山','shizuishan','szs'],
        ['640300','吴忠','wuzhong','wz'],
        ['640400','固原','guyuan','gy'],
        ['640500','中卫','zhongwei','zw'],

        ['340000','安徽','anhui','ah'],
        ['341100','滁州','chuzhou','cz'],
        ['340700','铜陵','tongling','tl'],
        ['341800','宣城','xuancheng','xc'],
        ['340800','安庆','anqing','aq'],
        ['340600','淮北','huaibei','hb'],
        ['340100','合肥','hefei','hf'],
        ['341700','池州','chizhou','cz'],
        ['341200','阜阳','fuyang','fy'],
        ['341600','亳州','bozhou','bz'],
        ['341500','六安','liuan','la'],
        ['340300','蚌埠','bangbu','bb'],
        ['340200','芜湖','wuhu','wh'],
        ['341300','宿州','suzhou','sz'],
        ['340500','马鞍山','maanshan','mas'],
        ['340400','淮南','huainan','hn'],
        ['341000','黄山','huangshan','hs'],

        ['150000','内蒙古','neimenggu','nmg'],
        ['150100','呼和浩特','huhehaote','hhht'],
        ['152200','兴安盟','xinganmeng','xam'],
        ['150200','包头','baotou','bt'],
        ['150300','乌海','wuhai','wh'],
        ['150400','赤峰','chifeng','cf'],
        ['150500','通辽','tongliao','tl'],
        ['150600','鄂尔多斯','eerduosi','eeds'],
        ['150700','呼伦贝尔','hulunbeier','hlbe'],
        ['152900','阿拉善盟','alashanmeng','alsm'],
        ['150800','巴彦淖尔','bayannaoer','byne'],
        ['150900','乌兰察布','wulanchabu','wlcb'],

        ['220000','吉林','jilin','jl'],
        ['220100','长春','changchun','cc'],
        ['222400','延边','yanbian','yb'],
        ['220300','四平','siping','sp'],
        ['220800','白城','baicheng','bc'],
        ['220700','松原','songyuan','sy'],
        ['220600','白山','baishan','bs'],
        ['220500','通化','tonghua','th'],
        ['220400','辽源','liaoyuan','ly'],

        ['430000','湖南','hunan','hn'],
        ['430100','长沙','changsha','cs'],
        ['430800','张家界','zhangjiajie','zjj'],
        ['431200','怀化','huaihua','hh'],
        ['431100','永州','yongzhou','yz'],
        ['430900','益阳','yiyang','yy'],
        ['430600','岳阳','yueyang','yy'],
        ['431300','娄底','loudi','ld'],
        ['430700','常德','changde','cd'],
        ['430400','衡阳','hengyang','hy'],
        ['430500','邵阳','shaoyang','sy'],
        ['433100','湘西','xiangxi','xx'],
        ['431000','郴州','chengzhou','cz'],
        ['430200','株洲','zhuzhou','zz'],
        ['430300','湘潭','xiangtan','xt'],

        ['540000','西藏','xizang','xz'],
        ['540100','拉萨','lasa','ls'],
        ['542300','日喀则','rikaze','rkz'],
        ['542200','山南','shannan','sn'],
        ['542100','昌都','changdu','cd'],
        ['542600','林芝','linzhi','lz'],
        ['542500','阿里','ali','al'],
        ['542400','那曲','naqu','nq'],

        ['460000','海南','hainan','hn'],
        ['460100','海口','haikou','hk'],
        ['460300','三沙','sansha','ss'],
        ['460200','三亚','sanya','sy'],

        ['650000','新疆','xinjiang','xj'],
        ['650100','乌鲁木齐','wulumuqi','wlmq'],
        ['653100','喀什地区','kashidiqu','ksdq'],
        ['654200','塔城地区','tachengdiqu','tcdq'],
        ['654300','阿勒泰','aletai','alt'],
        ['653200','和田','hetian','ht'],
        ['652700','博尔塔拉','boertala','betl'],
        ['653000','克孜','kezi','kz'],
        ['654000','伊犁','yili','yl'],
        ['652800','巴音','bayin','by'],
        ['652100','吐鲁番','tulufan','tlf'],
        ['652900','阿克苏','akesu','aks'],
        ['652200','哈密','hami','hm'],
        ['652300','昌吉','changji','cj'],
        ['650200','克拉玛依','kelamayi','klmy'],

        ['120000','天津','tianjin','tj'],

        ['500000','重庆','chongqing','cq'],

        ['450000','广西','guangxi','gx'],
        ['451300','来宾','laibin','lb'],
        ['450800','贵港','guigang','gg'],
        ['451400','崇左','suizuo','sz'],
        ['450900','玉林','yulin','yl'],
        ['451100','贺州','hezhou','hz'],
        ['450700','钦州','qinzhou','qz'],
        ['450600','防城港','fangchenggang','fcg'],
        ['451200','河池','hechi','hc'],
        ['450100','南宁','nanning','nn'],
        ['450200','柳州','liuzhou','lz'],
        ['450300','桂林','guilin','gl'],
        ['451000','百色','baise','bs'],
        ['450400','梧州','wuzhou','wz'],
        ['450500','北海','beihai','bh'],

        ['510000','四川','sichuan','sc'],
        ['511700','达州','dazhou','dz'],
        ['510300','自贡','zigong','zg'],
        ['511800','雅安','yaan','ya'],
        ['510100','成都','chengdu','cd'],
        ['511900','巴中','bazhong','bz'],
        ['511000','内江','neijiang','nj'],
        ['511100','乐山','leshan','ls'],
        ['510700','绵阳','mianyang','my'],
        ['510900','遂宁','suining','sn'],
        ['512000','资阳','ziyang','zy'],
        ['511400','眉山','meishan','ms'],
        ['511300','南充','nanchong','nc'],
        ['510800','广元','guangyuan','gy'],
        ['510600','德阳','deyang','dy'],
        ['511500','宜宾','yibin','yb'],
        ['510500','泸州','luzhou','lz'],
        ['511600','广安','guangan','ga'],
        ['510400','攀枝花','panzhihua','pzh'],

        ['520000','贵州','guizhou','gz'],
        ['522600','黔东','qiandong','qd'],
        ['520600','铜仁','tongren','tr'],
        ['522700','黔南','qiannan','qn'],
        ['520100','贵阳','guiyang','gy'],
        ['522300','黔西','qianxi','qx'],
        ['520300','遵义','zunyi','zy'],
        ['520200','六盘水','liupanshui','lps'],
        ['520500','毕节','bijie','bj'],
        ['520400','安顺','anshun','as'],

        ['230000','黑龙江','heilongjiang','hlj'],
        ['232700','大兴安岭','daxinganling','dxal'],
        ['230600','大庆','daqing','dq'],
        ['231200','绥化','suihua','sh'],
        ['231100','黑河','heihe','hh'],
        ['230700','伊春','yichun','yc'],
        ['230800','佳木斯','jiamusi','jms'],
        ['230900','七台河','qitaihe','qth'],
        ['230100','哈尔滨','haerb','heb'],
        ['230200','齐齐哈尔','qiqihaer','qqhe'],
        ['230300','鸡西','jixi','jx'],
        ['231000','牡丹江','mudanjiang','mdj'],
        ['230400','鹤岗','hegang','hg'],
        ['230500','双鸭山','shuangyashan','sys'],

        ['130000','河北','hebei','hb'],
        ['131000','廊坊','langfang','lf'],
        ['130300','秦皇岛','qinhuangdao','qhd'],
        ['130200','唐山','tangshan','ts'],
        ['130900','沧州','cangzhou','cz'],
        ['130100','石家庄','shijiazhuang','sjz'],
        ['131100','衡水','hengshui','hs'],
        ['130700','张家口','zhangjiakou','zjk'],
        ['130800','承德','chengde','cd'],
        ['130400','邯郸','handan','hd'],
        ['130500','邢台','xingtai','xt'],
        ['130600','保定','baoding','bd'],

        ['210000','辽宁','liaoning','ln'],
        ['211400','葫芦岛','huludao','hld'],
        ['210700','锦州','jinzhou','jz'],
        ['211300','朝阳','chaoyang','cy'],
        ['210600','丹东','dandong','dd'],
        ['210100','沈阳','shenyang','sy'],
        ['210900','阜新','fuxin','fx'],
        ['211200','铁岭','tieling','tl'],
        ['210800','营口','yingkou','yk'],
        ['211100','盘锦','panjin','pj'],
        ['210300','鞍山','anshan','as'],
        ['211000','辽阳','liaoyang','ly'],
        ['210200','大连','dalian','dl'],
        ['210500','本溪','benxi','bx'],
        ['210400','抚顺','fushun','fs'],

        ['370000','山东','shandong','sd'],
        ['370500','东营','dongying','dy'],
        ['371600','滨州','binzhou','bz'],
        ['370600','烟台','yantai','yt'],
        ['371700','菏泽','heze','hz'],
        ['371300','临沂','linyi','ly'],
        ['370700','潍坊','weifang','wf'],
        ['371400','德州','dezhou','dz'],
        ['370800','济宁','jining','jn'],
        ['371500','聊城','liaocheng','lc'],
        ['370900','泰安','taian','ta'],
        ['371200','莱芜','laiwu','lw'],
        ['370200','青岛','qingdao','qd'],
        ['370100','济南','jinan','jn'],
        ['371100','日照','rizhao','rz'],
        ['370300','淄博','zibo','zb'],
        ['371000','威海','weihai','wh'],
        ['370400','枣庄','zaozhuang','zz'],

        ['330000','浙江','zhejiang','zj'],
        ['330500','湖州','huzhou','hz'],
        ['330400','嘉兴','jiaxing','jx'],
        ['331100','丽水','lishui','ls'],
        ['330700','金华','jinhua','jh'],
        ['331000','台州','taizhou','tz'],
        ['330600','绍兴','shaoxing','xs'],
        ['330100','杭州','hangzhou','hz'],
        ['330800','衢州','quzhou','qz'],
        ['330300','温州','wenzhou','wz'],
        ['330900','舟山','zhoushan','zs'],
        ['330200','宁波','ningbo','nb'],
        
        ['140000','山西','shanxi','sx'],
        ['140600','朔州','shuozhou','sz'],
        ['141100','吕梁','lvliang','ll'],
        ['140500','晋城','jincheng','jc'],
        ['140400','长治','changzhi','cz'],
        ['140200','大同','datong','dt'],
        ['140300','阳泉','yangquan','yq'],
        ['140100','太原','taiyuan','ty'],
        ['140900','忻州','xinzhou','xz'],
        ['140800','运城','yuncheng','yc'],
        ['141000','临汾','linfen','lf'],
        ['140700','晋中','jinzhong','jz'],

        ['610000','陕西','shanxi','sx'],
        ['611000','商洛','shangluo','sl'],
        ['610400','咸阳','xianyang','xy'],
        ['610300','宝鸡','baoji','bj'],
        ['610200','铜川','tongchuan','tc'],
        ['610100','西安','xian','xa'],
        ['610900','安康','ankang','ak'],
        ['610800','榆林','yulin','yl'],
        ['610700','汉中','hanzhong','hz'],
        ['610600','延安','yanan','ya'],
        ['610500','渭南','weinan','wn'],

        ['630000','青海','qinghai','qh'],
        ['632600','果洛','guoluo','gl'],
        ['632700','玉树','yushu','ys'],
        ['632300','黄南','huangnan','hn'],
        ['632100','海东','haidong','hd'],
        ['630100','西宁','xining','xn'],
        ['632200','海北','haibei','hb'],
        ['632800','海西','haixi','hx'],

        ['440000','广东','guangdong','gd'],
        ['440500','汕头','shantou','st'],
        ['441200','肇庆','zhaoqing','zq'],
        ['441900','东莞','dongguan','dg'],
        ['440400','珠海','zhuhai','zh'],
        ['445100','潮州','chaozhou','cz'],
        ['441800','清远','qingyuan','qy'],
        ['440700','江门','jiangmen','jm'],
        ['445200','揭阳','jieyang','jy'],
        ['440600','佛山','foshan','fs'],
        ['441700','阳江','yangjiang','yj'],
        ['441600','河源','heyuan','hy'],
        ['440900','茂名','maoming','mm'],
        ['440100','广州','guangzhou','gz'],
        ['441500','汕尾','shanwei','sw'],
        ['445300','云浮','yunfu','yf'],
        ['440800','湛江','zhanjiang','zj'],
        ['442000','中山','zhongshan','zs'],
        ['441400','梅州','meizhou','mz'],
        ['440300','深圳','shenzhen','sz'],
        ['440200','韶关','shaoguan','sg'],
        ['441300','惠州','huizhou','hz'],

        ['320000','江苏','jiangsu','js'],
        ['320200','无锡','wuxi','wx'],
        ['321000','扬州','yangzhou','yz'],
        ['320300','徐州','xuzhou','xz'],
        ['320400','常州','changzhou','cz'],
        ['320500','苏州','suzhou','sz'],
        ['321300','宿迁','suqian','sq'],
        ['320600','南通','nantong','nt'],
        ['320700','连云港','lianyungang','lyg'],
        ['320800','淮安','huaian','ha'],
        ['321100','镇江','zhenjiang','zj'],
        ['320100','南京','nanjing','nj'],
        ['320900','盐城','yanchen','yc'],
        ['321200','泰州','taizhou','tz'],

        ['530000','云南','yunnan','yn'],
        ['533400','迪庆','diqing','dq'],
        ['530600','昭通','zhaotong','zt'],
        ['532800','西双版纳','xishuangbanna','xsbn'],
        ['533300','怒江','nujiang','nj'],
        ['530700','丽江','lijiang','lj'],
        ['532900','大理','dali','dl'],
        ['530400','玉溪','yuxi','yx'],
        ['533100','德宏','dehong','dh'],
        ['532600','文山','wenshan','ws'],
        ['530500','保山','baoshan','bs'],
        ['530300','曲靖','qujing','qj'],
        ['532500','红河','honghe','hh'],
        ['530800','普洱','puer','pe'],
        ['530100','昆明','kunming','km'],
        ['530900','临沧','lincang','lc'],
        ['532300','楚雄','chuxiong','cx'],

        ['110000','北京','beijing','bj'],

        ['310000','上海','shanghai','sh'],

        ['360000','江西','jiangxi','jx'],
        ['360200','景德镇','jingdezhen','jdz'],
        ['360400','九江','jiujiang','jj'],
        ['360300','萍乡','pingxiang','px'],
        ['361100','上饶','shangrao','sr'],
        ['360500','新余','xinyu','xy'],
        ['360600','鹰潭','yingtan','yt'],
        ['360800','吉安','jian','ja'],
        ['360700','赣州','ganzhou','gz'],
        ['361000','抚州','fuzhou','fz'],
        ['360900','宜春','yichun','yc'],
        ['360100','南昌','nanchang','nc'],

        ['420000','湖北','hubei','hb'],
        ['420600','襄阳','xiangyang','xy'],
        ['420700','鄂州','ezhou','ez'],
        ['421000','荆州','jingzhou','jz'],
        ['421100','黄冈','huanggang','hg'],
        ['422800','恩施','enshi','es'],
        ['421200','咸宁','xianning','xn'],
        ['420500','宜昌','yichang','yc'],
        ['421300','随州','suizhou','sz'],
        ['420200','黄石','huangshi','hs'],
        ['420300','十堰','shiyan','sy'],
        ['420900','孝感','xiaogan','xg'],
        ['420800','荆门','jingmen','jm'],
        ['420100','武汉','wuhan','wh'],

        ['410000','河南','henan','hn'],
        ['410300','洛阳','luoyang','ly'],
        ['410200','开封','kaifeng','kf'],
        ['411700','驻马店','zhumadian','zmd'],
        ['410500','安阳','anyang','ay'],
        ['411600','周口','zhoukou','zk'],
        ['411500','信阳','xinyang','xy'],
        ['410400','平顶山','pingdinshan','pds'],
        ['419000','直辖县','zhixiaxian','zxx'],
        ['411400','商丘','shangqiu','sq'],
        ['410700','新乡','xinxiang','xx'],
        ['411300','南阳','nanyang','ny'],
        ['410600','鹤壁','hebi','hb'],
        ['410900','濮阳','puyang','py'],
        ['410100','郑州','zhengzhou','zz'],
        ['411200','三门峡','sanmenxia','smx'],
        ['411100','漯河','luohe','lh'],
        ['411000','许昌','xuchang','xc'],
        ['410800','焦作','jiaozuo','jz'],

        ['350000','福建','fujian','fj'],
        ['350800','龙岩','longyan','ly'],
        ['350700','南平','nanping','np'],
        ['350600','漳州','zhangzhou','zz'],
        ['350500','泉州','quanzhou','qz'],
        ['350400','三明','sanming','sm'],
        ['350300','莆田','putian','pt'],
        ['350200','厦门','xiamen','xm'],
        ['350100','福州','fuzhou','fz'],
        ['350900','宁德','ningde','nd'],

        ['620000','甘肃','gansu','gs'],
        ['621200','陇南','longnan','ln'],
        ['620600','武威','wuwei','ww'],
        ['622900','临夏','linxia','lx'],
        ['620700','张掖','zhangye','zy'],
        ['620400','白银','baiyin','by'],
        ['620500','天水','tianshui','ts'],
        ['623000','甘南','gannan','gn'],

        ['620100','兰州','lanzhou','lz'],
        ['620300','金昌','jinchang','jc'],
        ['620200','嘉峪关','jiayuguan','jyg'],
        ['621000','庆阳','qingyang','qy'],
        ['620800','平凉','pingliang','pl'],
        ['621100','定西','dingxi','dx'],
        ['620900','酒泉','jiuquan','jq']

    ];

    return Citylist;

}, {requires:['node']});
/**
 * @fileoverview
 * @author
 * @module cityfilter
 **/
KISSY.add('kg/cityfilter/0.0.1/index',function (S, Node, Base, Citylist) {
    var EMPTY = '';
    var $ = Node.all;


    //组件默认配置
    var defaultConfig = {
        trigger : '',         //触发元素
        width : 105,
        lists : [
            ['110000','北京'],
            ['310000','上海'],
            ['440100','广州'],
            ['440300','深圳'],
            ['330100','杭州']
        ]
    };

    /**
     * 
     * @class CityFilter
     * @constructor
     * @extends Base
     */
    var CityFilter = function ( comConfig ) {
        var self = this;
        //调用父类构造函数
        CityFilter.superclass.constructor.call(self, comConfig);
        self.init(comConfig);
    };

    S.extend(CityFilter, Base, {

        init : function(config) {
            var self = this;
            self.config = S.merge({}, defaultConfig, config);

            //渲染页面
            this._render();

            //初次绑定事件，选择框打开与消失
            this._bindEvent();
        },

        selectValue : '',

        /**
         * 渲染select
         */
        _render : function() {
            var self = this,
                config = self.config;
                
            this.$input = $(config.trigger);

            //宽度默认为100px
            var width = config.width;

            this.$p = $('<p>').addClass('tbc-city-tip').text('中文|拼音|首拼');
            this.$list = $('<ul>').addClass('tbc-city-list');
            this.$more = $('<p>').addClass('tbc-city-more').text('更多选项请搜索');

            this.$tbcCity = $('<div class="tbc-city">').css('width', width + 'px').appendTo('body');

            this.$tbcCity.append(this.$p).append(this.$list).append(this.$more);


            for (var i = 0, items = config.lists, len = items.length; i < len; i++) {
                var item = items[i];
                $('<li _value="' + item[0] + '">' + item[1] + '</li>').appendTo(self.$list);
            }


            //绑定事件
            $('li', this.$list).on('click', function(){
                var me = S.one(this),
                    value = me.attr('_value'),
                    text = me.text();

                self.$tbcCity.slideToggle(0.2);
                //选中状态
                self.setValue(value);
                self.setInput(text);
            });
        },

        /**
         * 获取要渲染的元素所在的绝对位置
         */
        _position : function(obj) {
            //循环每个父级的偏移，得到绝对偏移位置
            for (var pos = {
                x : 0,
                y : 0
            }; obj; obj = obj.offsetParent) {
                pos.x += obj.offsetLeft;
                pos.y += obj.offsetTop;
            }
            return {
                left : pos.x,
                top : pos.y
            };
        },

        /**
         *设置位置
         */
        _setPosition : function() {
            //找到元素的绝对偏移位置
            var self = this,
                renderTo = $(self.config.trigger),
                pos = self._position(renderTo[0]);

            //找到当前元素的高度，宽度
            var left = parseInt(pos.left, 10),
                top = parseInt(pos.top, 10);

            //bottom-left
            top = top + renderTo.outerHeight();

            self.$tbcCity.css({
                'left' : left,
                'top' : top
            });

        },

        /**
         * 绑定点击事件
         * @return
         */
        _bindEvent: function() {
            var self = this;

            self.$input.on('focus', function() {
                self._setPosition();
                self.$tbcCity.css('display', 'block');
            });

            self.$input.on('keyup', function() {
                self.query();
            });

            self.$input.on('mouseenter', function(){
                self.isblank = false;
            }).on('mouseleave', function(){
                self.isblank = true;
            });

            //点击空白隐藏
            $(document.body).on('click', function(){
                if(self.isblank){
                    self.$tbcCity.slideUp(0.2);
                }
            });

        },

        /**
         * 根据输入框输入的值进行搜索
         */
        query : function() {
            var self = this,
                isHave = false,
                value = self.$input.val().toLowerCase();
                
            if( value.length === 0){
                return;
            }

            var _tmp = [];
            //进行查找
            for(var item in Citylist){          
                var _data = Citylist[item];     
                if(typeof (_data) !== 'undefined'){
                    if(_data[2].indexOf(value) === 0 || _data[3].indexOf(value) === 0 || _data[1].indexOf(value) === 0){                                       
                        isHave = true;
                        _tmp.push([_data[0], _data[1]]);
                    }
                }
            }

            //找到数据，渲染到页面上
            if(isHave){
                self.$list.html('');

                for(var i in _tmp){
                    var city = _tmp[i];
                    $('<li _value="' + city[0] + '">' + city[1] + '</li>').appendTo(self.$list);
                    //只取出前面的5个
                    if(i>=4) {
                        break;
                    }
                }


                //绑定事件
                $('li', self.$list).detach('click');
                $('li', self.$list).on('click', function(){
                    var me = S.one(this),
                        value = me.attr('_value'),
                        text = me.text();

                    self.$tbcCity.slideToggle(0.2);
                    //选中状态
                    self.setValue(value);
                    self.setInput(text);
                });
            }

        },

        /**
         * 设置input中的值
         * @param {[type]} value [description]
         */
        setInput : function (value) {
            this.$input.val(value);
        },

        /**
         * 获取选择的值
         * @param {Object} value
         */
        setValue : function (value) {
            this.$input.attr('_val', value);
            this.selectValue = value;

        },

        /**
         * 获取当前选择的值
         * @return {[type]} [description]
         */
        getValue : function (){
            return this.selectValue;
        }

    });

    return CityFilter;

}, {requires:['node', 'base', './citylist', './index.css']});




