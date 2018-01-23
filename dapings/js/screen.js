(function($){
require(  
    [   
      'echarts',   
      'echarts/chart/map'
    ], function(ec) {  
	$.fn.countTo = function (options) {
        options = options || {};
        $.fn.countTo.defaults = {
            from: 0,               // 开始数据
            to: 0,                 // 结束数据
            speed: 1000,           // 过渡时间
            refreshInterval: 100,  // 刷新时间
            decimals: 0,           // 小数点位数
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };
        function formatter(value, settings) {
            return parseFloat(value).toFixed(settings.decimals);
        }    
        return $(this).each(function () 
        {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, 
            {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals'),
                onComplete:null
            }, options);
            
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            


            $self.data('countTo', data);


            
            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }

            data.interval = setInterval(updateTimer, settings.refreshInterval);

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
            
            function updateTimer() 
            {
                value += increment;
                loopCount++;
                
                render(value);
                
                if (typeof(settings.onUpdate) == 'function'){
                    settings.onUpdate.call(self, value);
                }
                
                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            
            // initialize the element with the starting value
            render(value);
        });
 	}
	var mainFun = {
        myCharts:[],
        scrolltag :true,
        startTime:1516270800,
		init:function(){
			var wWidth = $(window).width(),wHeight = $(window).height();
			var scaleY = wHeight/1080;
			var bWidth = wWidth/scaleY;
			var scaleStyle='scale('+scaleY+')';
			$('.box').css({
				'-moz-transform':scaleStyle,
				'-webkit-transform':scaleStyle,
				'-ms-transform':scaleStyle,
				'transform':scaleStyle,
				'width':bWidth+'px'
			}); 
			this.handle();
            this.datas();
            this.tabledata();
            window.setInterval(function(){
                mainFun.tabledata();
            },20000)
            mainFun.counttoday();

		},
        counttoday:function(){
            $.ajax({
                url:HOST+"/dashboard/countToday",
                dataType:"json",
                type:"get",
                success:function(res){
                    var resdata = res.data;
                    $(".amount").data('to',resdata.amount);
                    $(".totalnum").data('to',resdata.totalNum);
                    $(".invoicenum").data('to',resdata.invoiceNum);
                    $(".adnum").data('to',resdata.adNum);
                    $('.timer').each(function(){
                        $(this).countTo({
                        });
                        window.setTimeout(function(){
                            $(".amount").data('from',resdata.amount);
                            $(".totalnum").data('from',resdata.totalNum);
                            $(".invoicenum").data('from',resdata.invoiceNum);
                            $(".adnum").data('from',resdata.adNum);
                        },1200)
                    });
                }
            })
        },
		tabledata:function(){	
            var that = this;
            $.ajax({
                url:HOST+"/dashboard/invoice?time="+mainFun.startTime,
                dataType:"json",
                type:"get",
                success:function(res){
                    var length = res.data.length-1;
                    console.log(length);
                    $.each(res.data,function(k,v){
                        var $td = $("<li><span>"+v.buyerName+"</span><span>"+v.amount+"</span></li>")
                        $("ul#invoice").append($td);
                    })
                    mainFun.startTime = res.data[length].ctime;
                    if(mainFun.scrolltag){
                        that.ulscroll();
                    }
                    
                }
            }); 
		},
        ulscroll:function(){
            mainFun.scrolltag = false;
            window.setInterval(function(){
                var height = ($("ul#invoice").find("li").length - 6) *34;
                var scrollTop = $("ul#invoice").scrollTop();
                if(scrollTop < height){
                    var scrollTops = scrollTop+1;
                    $("ul#invoice").scrollTop(scrollTops);
                }
            },20)

        },
		datas:function(){		
            var that = this;
            $.ajax({
                url:HOST+"/dashboard/countMonth",
                dataType:"json",
                type:"get",
                success:function(res){
                    that.data1(res.data.amount,res.data.time);
                    that.data2(res.data.num,res.data.time);
                    that.data3(res.data.ad,res.data.time);
                }
            });
            $.ajax({
                url:HOST+"/dashboard/todayCountry",
                dataType:"json",
                type:"get",
                success:function(res){
                    that.data4(res.data);
                }
            });
            $.ajax({
                url:HOST+"/dashboard/countOther",
                dataType:"json",
                type:"get",
                success:function(res){
                    that.data5(res.data.ic);
                    that.data6(res.data.ts);
                    that.data7(res.data.pt);
                }
            })    
		},
		handle:function(){
            var that = this;
			$(window).bind("resize",function(){
                $.each(that.myCharts,function(k,v){
                    v.resize();
                });
				var wWidth = $(window).width(),wHeight = $(window).height();
				var scaleY = wHeight/1080;
				var bWidth = wWidth/scaleY;
				var scaleStyle='scale('+scaleY+')';
				$('.box').css({
					'-moz-transform':scaleStyle,
					'-webkit-transform':scaleStyle,
					'-ms-transform':scaleStyle,
					'transform':scaleStyle,
					'width':bWidth+'px'
				});
			});
		},
        data1:function(x,y){
            var option = {
                
                tooltip : {
                    trigger: 'axis'
                },
                grid:{
                    x:"17%"
                },
                xAxis : [
                    {
                        splitLine:{show: false},
                        type : 'category',
                        data : y,
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4" 
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        name : '金额(万)',
                        splitLine:{show: false}, 
                        type : 'value',
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4"
                            }
                        }
                    }
                ],
                series : [
                    {
                        barWidth:"60%",
                        symbol:"arrow",
                        name:'交易总金额',
                        type:'bar',
                        data:x
                    }
                ],
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#77defd'
                        }, {
                            offset: 1,
                            color: '#0e5ce1'
                        }])
                    }
                }
            };
            var dom = $("#charts1")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart); 
        },
        data2:function(x,y){
            var option = {
                tooltip : {
                  trigger: 'axis'
                },
                grid:{
                    x:"17%"
                },
                xAxis : [
                  {
                    splitLine:{show: false},
                    type : 'category',
                    boundaryGap : false,
                    data : y,
                    axisLabel:{
                        interval:0
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#8894c4" 
                        }
                    }
                  }
                ],
                yAxis : [
                  {
                    name : '金额(万)',
                    splitLine:{show: false}, 
                    type : 'value',
                    axisLabel:{
                        interval:0
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#8894c4"
                        }
                    }
                  }
                ],
                series : [
                  {
                    name:'交易总笔数',
                    type:'line',
                    symbol:"circle",
                    itemStyle: {
                      normal: {
                        color:'#64b9fa',
                        areaStyle:{
                          type: 'default',
                          color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#77defd'
                          }, {
                            offset: 1,
                            color: '#0e5ce1'
                          }])
                        },
                        lineStyle:{
                          color:"#64b9fa"
                        }
                      }
                    },
                    data:x
                  }
                ]
              };
            var dom = $("#charts2")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true); 
            this.myCharts.push(myChart);  
        },
        data3:function(x,y){
            var xdata = [0,x[0],x[1],x[2],x[3],x[4]];
            var xdis = [x[0],x[1]-x[0],x[2]-x[1],x[3]-x[2],x[4]-x[3],x[5]-x[4]];
            var option = {
                tooltip : {
                  trigger: 'axis'
                },
                grid:{
                    x:"17%"
                },
                xAxis : [
                    {
                        splitLine:{show: false},
                        type : 'category',
                        splitLine: {show:false},
                        data :  y,
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4" 
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        name : '金额(万)',
                        splitLine:{show: false}, 
                        type : 'value',
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4"
                            }
                        }
                    }
                ],
                series : [
                    {
                        type:'bar',
                        stack: '总量',
                        itemStyle:{
                            normal:{
                                barBorderColor:'rgba(0,0,0,0)',
                                color:'rgba(0,0,0,0)'
                            },
                            emphasis:{
                                barBorderColor:'rgba(0,0,0,0)',
                                color:'rgba(0,0,0,0)'
                            }
                        },
                        data:xdata
                    },
                    {
                        type:'bar',
                        stack: '总量',
                        barWidth:"60%",
                        itemStyle : { 
                            normal:{
                                label : {show: false, position: 'top'},
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#77defd'
                                }, {
                                    offset: 1,
                                    color: '#0e5ce1'
                                }])
                            }
                        },
                        textStyle:{
                            color:"#8894c4"
                        },
                       data:xdis
                    }
                ]
            };
            var dom = $("#charts3")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart);   
        },
        data4:function(data){
            var data1 = [],databoj1 = {};
            $.each(data,function(k,v){
                var dataobj = {};
                dataobj.name = v.name;
                dataobj.value = v.value;
                data1.push(dataobj);
                databoj1[v.name] = v.position;
            });
            var option = {
                dataRange: {
                    x:"5%",
                    y:"480",
                    itemWidth:40,
                    min : 0,
                    max : 500,
                    splitNumber: 0,
                    text:['百万','零'],
                    textStyle:{color:"#756192"},
                    color: ['#6c3d3e','#fb080d']
                },
                series : [
                    {
                        name: 'pm2.5',
                        type: 'map',
                        mapType: 'china',
                        hoverable: false,
                        roam:true,
                        data : [],
                        itemStyle:{
                                normal:{
                                    color:'#1456ce'
                                }
                            },
                        markPoint : {
                            symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    }
                                }
                            },
                           /* data : [
                                {name: "海门", value: 9},
                                {name: "鄂尔多斯", value: 12},
                                {name: "招远", value: 12},
                                {name: "舟山", value: 12},
                                {name: "齐齐哈尔", value: 14},
                                {name: "盐城", value: 15},
                                {name: "赤峰", value: 16},
                                {name: "青岛", value: 18},
                                {name: "乳山", value: 18},
                                {name: "金昌", value: 19},
                                {name: "泉州", value: 21},
                                {name: "莱西", value: 21},
                                {name: "日照", value: 21},
                                {name: "胶南", value: 22},
                                {name: "南通", value: 23},
                                {name: "拉萨", value: 24},
                                {name: "云浮", value: 24},
                                {name: "梅州", value: 25},
                                {name: "文登", value: 25},
                                {name: "上海", value: 25}   
                            ]*/
                            data:data1
                        },
                        /*geoCoord: {
                            "海门":[121.15,31.89],
                            "鄂尔多斯":[109.781327,39.608266],
                            "招远":[120.38,37.35],
                            "舟山":[122.207216,29.985295],
                            "齐齐哈尔":[123.97,47.33],
                            "盐城":[120.13,33.38],
                            "赤峰":[118.87,42.28],
                            "青岛":[120.33,36.07],
                            "乳山":[121.52,36.89],
                            "金昌":[102.188043,38.520089],
                            "泉州":[118.58,24.93],
                            "莱西":[120.53,36.86],
                            "日照":[119.46,35.42],
                            "胶南":[119.97,35.88],
                            "南通":[121.05,32.08],
                            "拉萨":[91.11,29.97],
                            "云浮":[112.02,22.93],
                            "梅州":[116.1,24.55],
                            "文登":[122.05,37.2],
                            "上海":[121.48,31.22]
                        }*/
                        geoCoord:databoj1
                    },
                    {
                        name: 'Top5',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markPoint : {
                            symbol:'circle',
                            symbolSize : function (v){
                                return 10 + v/100
                            },
                            effect : {
                                show: true,
                                shadowBlur : 0
                            },
                            itemStyle:{
                                normal:{
                                    label:{show:false}
                                }
                            },
                            data : data1
                        }
                    }
                ]
            };  
            var dom = $("#charts4")[0];
            var myChart = ec.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart);        
        },
        data5:function(data){
            var datax = [],datay = [];
            $.each(data,function(k,v){
                datax.push(v.name);
                datay.push(v.value);
            });
            var option = {
                
                tooltip : {
                    trigger: 'axis'
                },
                grid:{
                    x:"17%"
                },
                xAxis : [
                    {
                        show:false,
                        splitLine:{show: false},
                        type : 'value',
                        data : ["1000","900","700","600","500","400"],
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4" 
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        
                        type : 'category',
                        data : datax,
                        splitLine:{show: false}, 
                        axisLabel:{
                            interval:0
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#8894c4"
                            }
                        }
                    }
                ],
                series : [
                    {
                        barWidth:"60%",
                        symbol:"arrow",
                        name:'交易总金额',
                        type:'bar',
                        data:datay
                    }
                ],
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#0e5ce1'
                        }, {
                            offset: 1,
                            color: '#77defd'
                        }])
                    }
                }
            };
            var dom = $("#charts5")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart); 
        },
        data6:function(data){
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                /*calculable : true,
                    legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['收款机','收银厂商','商户app','收银插件','POS机']
                },*/
                series : [
                    {
                        name:'交易来源',
                        type:'pie',
                        radius : ['60%', '80%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : false,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:data
                    }
                ]
            };
            var dom = $("#charts6")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart);           
        },
        data7:function(data){
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                calculable : true,
               /* legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['微信','支付宝','云闪付','银联','其它']
                },*/
                series : [
                    {
                        name:'支付方式',
                        type:'pie',
                        radius : ['60%', '80%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : false,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:data
                    }
                ]
            };
            var dom = $("#charts7")[0];
            var myChart = echarts.init(dom); 
            myChart.setOption(option, true);  
            this.myCharts.push(myChart);           
        }
	}
	mainFun.init();
});      
 })(jQuery);  