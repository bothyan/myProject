(function($){
    var monthNow,hourNow;
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
                from:            parseFloat($(this).attr('data-from')),
                to:              parseFloat($(this).attr('data-to')),
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
    function indexOf(arr, item) {
      if (Array.prototype.indexOf){
          return arr.indexOf(item);
      } else {
          for (var i = 0; i < arr.length; i++){
              if (arr[i] === item){
                  return i;
              }
          }
      }     
      return -1;
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
            this.ajaxtime();
            this.tabledata();
            window.setInterval(function(){
                mainFun.tabledata();
            },20000)
            this.counttoday();
            window.setInterval(function(){
                mainFun.counttoday();
            },10000);
		},
        counttoday:function(){
            $.ajax({
                url:HOST+"/dashboard/countToday",
                dataType:"json",
                type:"get",
                success:function(res){
                    var resdata = res.data;
                    $(".amount").attr('data-to',resdata.amount);
                    $(".totalnum").attr('data-to',resdata.totalNum);
                    $(".invoicenum").attr('data-to',resdata.invoiceNum);
                    $(".adnum").attr('data-to',resdata.adNum);
                    $('.timer').each(function(){
                        $(this).countTo();
                    });
                    window.setTimeout(function(){
                        $(".amount").attr('data-from',resdata.amount);
                        $(".totalnum").attr('data-from',resdata.totalNum);
                        $(".invoicenum").attr('data-from',resdata.invoiceNum);
                        $(".adnum").attr('data-from',resdata.adNum);
                    },2000)
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
        ajaxtime:function(){
            var that = this;
            window.setInterval(function(){
                var date = new Date();
                var month =date.getMonth() + 1;
                var hour = date.getHours(); 
                if(month != monthNow && hour>5){
                    $("#charts1").remove();
                    var $charts1 = $('<div class="charts charts1" id="charts1"></div>');
                    $(".data1").append($charts1);
                    $("#charts2").remove();
                    var $charts2 = $('<div class="charts charts2" id="charts2"></div>');
                    $(".data2").append($charts2);
                    $("#charts3").remove();
                    var $charts3 = $('<div class="charts charts3" id="charts3"></div>');
                    $(".data3").append($charts3);
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
                    monthNow = month;
                }
            },3600000);

            window.setInterval(function(){
                var date = new Date();
                var hour = date.getHours();
                var minutes = new Date().getMinutes();
                if(hour != hourNow && minutes>29){
                    $("#charts4").remove();
                    var $charts4 = $('<div class="charts charts4" id="charts4"></div>');
                    $(".data4").append($charts4);
                    $("#charts5").remove();
                    var $charts5 = $('<div class="charts charts5" id="charts5"></div>');
                    $(".data5").append($charts5);
                    $("#charts6").remove();
                    var $charts6 = $('<div class="charts charts6" id="charts6"></div>');
                    $(".data6").append($charts6);
                    $("#charts7").remove();
                    var $charts7 = $('<div class="charts charts7" id="charts7"></div>');
                    $(".data7").append($charts7);
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
                    hourNow = hour;
                }
            },300000);
        },
		datas:function(){		
            var date = new Date();
            monthNow = date.getMonth() + 1;
            hourNow = date.getHours();
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
            for(var i=0;i<x.length;i++){
                var num = x[i]/10000;
                x[i] = num.toFixed(2);
            }
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
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
            for(var i=0;i<x.length;i++){
                var num = x[i]/10000;
                x[i] = num.toFixed(2);
            }
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
                        interval:0,
                        textStyle:{
                            fontSize:15
                        }
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
                    name : '笔数(万)',
                    splitLine:{show: false}, 
                    type : 'value',
                    axisLabel:{
                        interval:0,
                        textStyle:{
                            fontSize:15
                        }
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
                    smooth:true, 
                    itemStyle: {
                      normal: {
                        color:'#64b9fa',
                        areaStyle:{
                          type: 'default',
                          color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
            for(var i=0;i<x.length;i++){
                x[i] = parseInt(x[i]);
            }
            var xdata = [0,x[0],x[0]+x[1],x[0]+x[1]+x[2],x[0]+x[1]+x[2]+x[3],x[0]+x[1]+x[2]+x[3]+x[4]];
            var xdis = x;
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
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
                        name : '',
                        splitLine:{show: false}, 
                        type : 'value',
                        axisLabel:{
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
            var max = 0;
            $.each(data,function(k,v){
                var dataobj = {};
                dataobj.name = v.name;
                dataobj.value = v.value;
                max = Math.max(max,v.value);
                data1.push(dataobj);
                databoj1[v.name] = v.position;
            });
            var option = {
                dataRange: {
                    x:"5%",
                    y:"480",
                    itemWidth:40,
                    min : 0,
                    max : max,
                    splitNumber: 0,
                    text:['最大','最小'],
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
                                    color:'#1456ce',
                                    borderWidth:2,//省份的边框宽度
                                    borderColor:'#42d2ff'
                                }
                            },
                        markPoint : {
                            symbol:'circle',
                            symbolSize : 5,     // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                            itemStyle: {
                                normal: {
                                    label: {  
                                        show: true,  
                                        textStyle: {  
                                            color: '#fff' ,
                                            fontSize:0 
                                        }  
                                    } 
                                },
                                emphasis: {
                                   label: {  
                                        show: true,  
                                        textStyle: {  
                                            color: '#fff' ,
                                            fontSize:0 
                                        }  
                                    } 
                                }
                            },
                            data:data1
                        },
                        geoCoord:databoj1
                    },
                    {
                        name: 'Top',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markPoint : {
                            symbol:'circle',
                            symbolSize : function (v){
                                return 15
                            },
                            effect : {
                                show: true,
                                shadowBlur : 0,
			        period: 5	    
                            },
                            itemStyle:{
                                normal:{
                                    label: {  
                                        show: true,  
                                        textStyle: {  
                                            color: '#fff',
                                            fontSize:0   
                                        },
                                        areaStyle:{
                                            color:"fff"
                                        }  
                                    }  
                                },
                                emphasis: {
                                    label: {  
                                        show: true,  
                                        textStyle: {  
                                            color: '#fff',
                                            fontSize:0   
                                        }  
                                    }  
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
                    trigger: 'axis',
                    formatter: '{c}%'
                },
                grid:{
                    x:"17%",
                    width:"70%",
                    height:"80%",
                    y:"10%"
                },
                xAxis : [
                    {
                        show:false,
                        splitLine:{show: false},
                        type : 'value',
                        data : ["100","90","70","60","50","40"],
                        axisLabel:{
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
                            interval:0,
                            textStyle:{
                                fontSize:15
                            }
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
                        data:datay,
                        itemStyle : { normal: {label : {show: true, position: 'right',formatter: "{c}%",textStyle:{fontSize:15,color:"#8894c4"}}}},

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
            var datax = [],datay = [];
            var total = 0;
            var dataA = [data[0],data[3],data[1],data[4],data[2]];
            $.each(dataA,function(k,v){
                datax.push(v.name);
                datay.push(v.value);
                total+= parseInt(v.value);
            });
            var option = {
                tooltip : {
                    trigger: 'item'
                },
                grid:{
                    y:"20%",
                    width:"70%"
                },
                legend: {
                    orient: 'horizontal',
                    x: 'left',
                    data:datax,
                    itemGap:5,
                    padding:[0,0,-10,0],
                    itemWidth:10,
                    itemHeight:10,
                    textStyle:{fontSize:13,color:"#8894c4"},
                    formatter: function(name) {
                        var num = datay[indexOf(datax,name)];
                        num = (num*100/total).toFixed(2);
                        return name + ":"+num+"%";
                    }
                },
                color:['#24ff00', '#00f6ff','#ff01cc','#ff0000','#fffc00'],  
                series : [
                    {
                        name:'交易来源',
                        type:'pie',
                        radius: ['40%', '60%'],
                        center : ['50%', '60%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                    /*formatter: "{b}\n{d}%",
                                    position:'outer',
                                    textStyle:{fontSize:12,color:"#8894c4"}*/
                                },
                                labelLine : {
                                    show : true
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
            var datax = [],datay = [];
            var total = 0;
            $.each(data,function(k,v){
                datax.push(v.name);
                datay.push(v.value);
                total+= parseInt(v.value);
            });
            var option = {
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'horizontal',
                    x: 'left',
                    data:datax,
                    itemGap:5,
                    padding:[0,0,-10,0],
                    itemWidth:10,
                    itemHeight:10,
                    textStyle:{fontSize:13,color:"#8894c4"},
                    formatter: function(name) {
                        var num = datay[indexOf(datax,name)];
                        num = (num*100/total).toFixed(2);
                        return name + ":"+num+"%";
                    }
                },
                color:['#24ff00', '#00f6ff','#ff01cc','#ff0000','#fffc00'],  
                calculable : true,
                series : [
                    {
                        name:'支付方式',
                        type:'pie',
                        radius: ['40%', '60%'],
                        center : ['50%', '60%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                    /*formatter: "{b}({d}%)",
                                    position:'inner',
                                    textStyle:{fontSize:12,fontWeight : 'bold',color:"#8894c4"}*/
                                },
                                labelLine : {
                                    show : true
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
