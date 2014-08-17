/*
combined files : 

kg/cityfilter/0.0.1/index

*/
/**
 * @fileoverview
 * @author
 * @module cityfilter
 **/
KISSY.add('kg/cityfilter/0.0.1/index',['node', 'base'], function (S, Node, Base, Citylist) {
    var EMPTY = '';
    var $ = Node.all;

    //加载组件所依赖的模块
    var $ = require('node').all,
        Base = require('base');


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




