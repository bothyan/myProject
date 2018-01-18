(function($){
	var personId = ""; //个人账号的个人id，用来请求个人数据用的。
	var person = [ // 下拉选择，第一项为公司总数据，后面是公司下的人物
			{
				id:0,
				name:"总体"
			},
			{
				id:1,
				name:"张三"
			},
			{
				id:2,
				name:"李四"
			},
			{
				id:3,
				name:"王五"
			}
		];
	var dataAll = {  //页面数据
		dataHeader : [  //头部四个数据，展示名称和数字
			{
				name:"浏览量",
				num:180
			},{
				name:"分享量",
				num:180
			},{
				name:"调用量",
				num:180
			},{
				name:"来电量",
				num:180
			}
		],
		data1:{  //调用量
			monthData:180,//当月总数
			dayData:50,//今天增长
			data:[  // 数组，time横轴，num对应的纵轴
				{
					"time":"周一",
					"num":"420"
				},
				{
					"time":"周二",
					"num":"520"
				},
				{
					"time":"周三",
					"num":"620"
				},
				{
					"time":"周四",
					"num":"720"
				},
				{
					"time":"周五",
					"num":"820"
				},
				{
					"time":"周六",
					"num":"920"
				},
				{
					"time":"周日",
					"num":"1020"
				}
			]
		},
		data2:{  //分享量
			monthData:180,//当月总数
			data:[  // 数组，time横轴，num对应的纵轴
				{
					"time":"周一",
					"num":"420"
				},
				{
					"time":"周二",
					"num":"520"
				},
				{
					"time":"周三",
					"num":"620"
				},
				{
					"time":"周四",
					"num":"720"
				},
				{
					"time":"周五",
					"num":"820"
				},
				{
					"time":"周六",
					"num":"920"
				},
				{
					"time":"周日",
					"num":"1020"
				},
				{
					"time":"周一",
					"num":"420"
				},
				{
					"time":"周二",
					"num":"520"
				},
				{
					"time":"周三",
					"num":"620"
				},
				{
					"time":"周四",
					"num":"720"
				},
				{
					"time":"周五",
					"num":"820"
				},
				{
					"time":"周六",
					"num":"920"
				},
				{
					"time":"周日",
					"num":"1020"
				}
			]
		},
		data3:{  //用户量
			monthData:180,//当月总数
			data:[  // 数组，time横轴，num对应的纵轴
				{
					"time":"周一",
					"num1":"420", //总量
					"num2":100 //增长量
				},
				{
					"time":"周二",
					"num1":"520", //总量
					"num2":100 //增长量
				},
				{
					"time":"周三",
					"num1":"620", //总量
					"num2":100 //增长量
				},
				{
					"time":"周四",
					"num1":"720", //总量
					"num2":100 //增长量
				},
				{
					"time":"周五",
					"num1":"820", //总量
					"num2":100 //增长量
				},
				{
					"time":"周六",
					"num1":"920", //总量
					"num2":100 //增长量
				},
				{
					"time":"周日",
					"num1":"1020", //总量
					"num2":100 //增长量
				}
			]
		},
		data4:{ //来电量
			monthData:180,//当月总数
			data:[  // 数组，time横轴，num对应的纵轴
				{
					"time":"周一",
					"num":"420"
				},
				{
					"time":"周二",
					"num":"520"
				},
				{
					"time":"周三",
					"num":"620"
				},
				{
					"time":"周四",
					"num":"720"
				},
				{
					"time":"周五",
					"num":"820"
				},
				{
					"time":"周六",
					"num":"920"
				},
				{
					"time":"周日",
					"num":"1020"
				}
			]
		},
		data5:{ //浏览量
			dataTotal:3000,
			monthData:3000,//上月总数
			data:[  // 数组，time横轴，num对应的纵轴
				{
					"time":"周一",
					"num":"420"
				},
				{
					"time":"周二",
					"num":"520"
				},
				{
					"time":"周三",
					"num":"620"
				},
				{
					"time":"周四",
					"num":"720"
				},
				{
					"time":"周五",
					"num":"820"
				},
				{
					"time":"周六",
					"num":"920"
				},
				{
					"time":"周日",
					"num":"1020"
				}
			]
		},
		data6:{},
		data7:{ //来电转化率 
			data:{
				data1:100,//来电量
				data2:200//用户量
			}	
		},
		data8:{ //统计数据
			data:{
				dataType:['调用量','浏览量','分享量','用户量','来电量'],
				dataArr:[  // 数组，time横轴，num对应的纵轴
					{
						"time":"周一",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周二",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周三",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周四",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周五",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周六",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					},
					{
						"time":"周日",
						"num1":"120", //调用量
						"num2":"320", //浏览量
						"num3":"420", //分享量
						"num4":"220", //用户量
						"num5":"520", //来电量
					}
				]
			}
		},
		data9:{ //分享转化率
			data:{
				data1:100,//分享量
				data2:200//浏览量
			}
		}
	};	
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
            return value.toFixed(settings.decimals);
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
                decimals:        $(this).data('decimals')
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
		popdataH:0,
		dataStat:null,//记录统计数据
		init:function(){
			this.doms();
			this.datas();
			this.handle();
			this.funData2($("#data2"),1,dataAll.data2.data);
			this.funData3($("#data3"),1,dataAll.data3.data);
			this.funData5($("#data5"),1,dataAll.data5.data);
			this.funData7($("#data7"),1,dataAll.data7.data);
			this.funData8($("#data8"),1,dataAll.data8.data);
			this.funData9($("#data9"),1,dataAll.data9.data);
			//this.funData5($("#popdata"),2);
		},
		doms:function(){
			var wHeight = $(window).height(),
				wWidth = $(window).width(),
				top = $("#dash-content").offset().top,
				left = $("#dash-content").offset().left,
				width  = $("#dash-content").width(),
				height = wHeight - top;
			this.popdataH = height - 240;	
			$("#dashpop").css({"top":top+"px","left":left+"px","width":width+"px","height":height+"px"});
			$("#popdata").css({"height":this.popdataH+"px"});
		},
		datas:function(){		
			if(person.length == 0){
        		$("#dashselect").remove();
        	}else{
        		$.each(person,function(k,v){
		            var $option = $('<option value="'+v.id+'">'+v.name+'</option>');
		            $("#dashselect").append($option);
		        });
        	}
			$.each(dataAll.dataHeader,function(k,v){
				var $lis = $('<p class="num timer" data-speed="1000" data-from="0" data-to="'+v.num+'">0</p><p class="type">'+v.name+'</p>');
				$("#dash-head").find("li").eq(k).append($lis);
			});

			$("#dash-box1").find(".num").attr("data-to",dataAll.data1.monthData);
			$("#dash-box1").find(".today").attr("data-to",dataAll.data1.dayData);
			$("#dash-box2").find(".num").attr("data-to",dataAll.data2.monthData);
			$("#dash-box3").find(".num").attr("data-to",dataAll.data3.monthData);
			$("#dash-box4").find(".num").attr("data-to",dataAll.data4.monthData);
			$("#dash-box5").find(".p1 .num").attr("data-to",dataAll.data5.dataTotal);
			$("#dash-box5").find(".p2 .num").attr("data-to",dataAll.data5.monthData);
			$('#dash-content .timer').each(function(){
			    $(this).countTo();
			});
		},
		handle:function(){
			var that = this;
			$(window).bind("resize",function(){
				$.each(that.myCharts,function(k,v){
					v.resize();
				});
			});
			$("div.box").bind("click",function(){
				$.each(dataAll.dataHeader,function(k,v){
					var $lis = $('<p class="num timer" data-speed="1000" data-from="0" data-to="'+v.num+'">0</p><p class="type">'+v.name+'</p>');
					$("#pop-head").find('li').eq(k).append($lis);
				});
				$('#pop-head .timer').each(function(){
				    $(this).countTo();
				});
				var index = $(this).attr("_index");
				if(index == 8){ //只在数据统计出，弹出选择切换图形下拉框
					that.dataStat = dataAll.data8.data;
					$("select[name=imagetype]").show();
				}
				var $box = $(this),$dash = $("#dash-content");
				var wHeight = $(window).height(),wWidth = $(window).width();
				var top1    = $dash.offset().top,
					left1   = $dash.offset().left,
					width1  = $("#dash-content").width(),
					height1 = wHeight - top1,
					top2    = $box.offset().top,
					left2   = $box.offset().left,
					width2  = $box.width(),
					height2 = $box.height();

				var $div = $("<div class='pops' id='pops'></div>");	
				$("body").append($div);	
				$div.css({"position":"fixed","top":top2+"px","left":left2+"px","width":width2+"px","height":height2+"px","z-index":"190","background":"#fff","box-shadow":"inset 0px 0px 10px #CCC"});
				$div.animate({
					top: top1+"px",
					left:left1+"px",
					width:width1+"px",
					height:height1+"px"
				},500,function(){
					$("#dashpop").attr("_index",index);
					$("#dashpop").attr("_top1",top1);
					$("#dashpop").attr("_left1",left1);
					$("#dashpop").attr("_width1",width1);
					$("#dashpop").attr("_height1",height1);
					$("#dashpop").attr("_top2",top2);
					$("#dashpop").attr("_left2",left2);
					$("#dashpop").attr("_width2",width2);
					$("#dashpop").attr("_height2",height2);
					$("#dashpop").fadeIn(200,function(){
						that.loadData1(index);
						$div.remove();
					});
				})	
			});
			$("body").on("click","#dashpop span.close",function(){
				$("#dashpop").hide();
				$("select[name=imagetype]").hide();
				$("select[name=imagetype]")[0].options[0].selected = true;
				var $dashpop = $("#dashpop");
				var top1    = $dashpop.attr("_top1"),
					left1   = $dashpop.attr("_left1"),
					width1  = $dashpop.attr("_width1"),
					height1 = $dashpop.attr("_height1"),
					top2    = $dashpop.attr("_top2"),
					left2   = $dashpop.attr("_left2"),
					width2  = $dashpop.attr("_width2"),
					height2 = $dashpop.attr("_height2");
				var $div = $("<div class='pops' id='pops'></div>");	
				$("body").append($div);	
				$div.css({"position":"fixed","top":top1+"px","left":left1+"px","width":width1+"px","height":height1+"px","z-index":"190","background":"#fff","box-shadow":"inset 0px 0px 10px #CCC"});
				$div.animate({
					top: top2+"px",
					left:left2+"px",
					width:width2+"px",
					height:height2+"px"
				},500,function(){
					$div.remove();
					$("#popdata").remove();
					var $popdata = $('<div id="popdata" class="popdata"></div>');
					if(person.length > 0){
						$("#dashselect")[0].options[0].selected = true;
					}	
					$("#dashpop").append($popdata);
					$("#popdata").css({"height":that.popdataH+"px"});
				});	
			});
			$("#box5-nav em").bind("click",function(e){
				e.stopPropagation();
				$("#box5-nav em").removeClass("select");
				var _type = $(this).attr("_type");
				$(this).addClass("select");
				$("#data5").remove();
				var $data5 = $('<div id="data5" class="data5"></div>');
				$(".box5").append($data5);

				//that.ajaxData(_type,5,person[0].id);
				that.funData5($("#data5"),1,dataAll.data5.data); 
			});
			$("body").on("change","#dashselect",function(){
				$("#popdata").remove();
				var index = $("#dashpop").attr("_index");
				var $popdata = $('<div id="popdata" class="popdata"></div>');
				$("#dashpop").append($popdata);
				$("#popdata").css({"height":that.popdataH+"px"});

				/*var id = $(this).val();
				var time = $('#select-time').val();
				that.ajaxData(time,index,id);*/

				//that.loadData(index);
				$('#pop-head .timer').each(function(){
				    $(this).countTo();
				});
			});
			$("body").on("change","#select-time",function(){
				$("#popdata").remove();
				var index = $("#dashpop").attr("_index");
				var $popdata = $('<div id="popdata" class="popdata"></div>');
				$("#dashpop").append($popdata);
				$("#popdata").css({"height":that.popdataH+"px"});
				/*var time = $(this).val();
				if(person.length == 0){
					var id = $('#dashselect').val();
				}else{
					var id = personId;
				}
				that.ajaxData(time,index,id);*/
				//that.loadData(index);
				$('#pop-head .timer').each(function(){
				    $(this).countTo();
				});
			}); 
			$("body").on("change","select[name=imagetype]",function(){
				var imagetype = $(this).val();
				that.dataStatistics(imagetype);
			});
		},
		/**
			请求数据
			time：year/month/week/day  什么时间段的数据
			type：数据类型  1调用量，2分享量，3用户量，4来电量，5浏览量，6位置，7来电转化率，8统计数据，9分享转化率
			id： person数据下的id，是谁的数据，总数据or张三or李四？
		**/
		ajaxData:function(time,type,id){
			if(id == person[0].id){
				that.funData5($("#data5"),1,dataAll.data5.data);
			}else{
				$.ajax({
					url:"",
					type:"get",
					data:{
	                    time:time,  
	                    type:type, 
	                    id:id 
					},
					success:function(data){
						that.loadData(type,data);
						that.funData5($("#data5"),1,data);
					}
				});
			}	
		},
		loadData:function(index,data){
			if(index == 1){
				mainFun.funData1($('#popdata'),2,data);
			}
			if(index == 2){
				mainFun.funData2($('#popdata'),2,data);
			}
			if(index == 3){
				mainFun.funData3($('#popdata'),2,data);
			}
			if(index == 4){
				mainFun.funData4($('#popdata'),2,data);
			}
			if(index == 5){
				mainFun.funData5($('#popdata'),2,data);
			}
			if(index == 6){
				
			}
			if(index == 7){
				mainFun.funData7($('#popdata'),2,data);
			}
			if(index == 8){
				mainFun.funData8($('#popdata'),2,data);
			}
			if(index == 9){
				mainFun.funData9($('#popdata'),2,data);
			}
		},
		loadData1:function(index){
			if(index == 1){
				mainFun.funData1($('#popdata'),2,dataAll.data1.data);
			}
			if(index == 2){
				mainFun.funData2($('#popdata'),2,dataAll.data2.data);
			}
			if(index == 3){
				mainFun.funData3($('#popdata'),2,dataAll.data3.data);
			}
			if(index == 4){
				mainFun.funData4($('#popdata'),2,dataAll.data4.data);
			}
			if(index == 5){
				mainFun.funData5($('#popdata'),2,dataAll.data5.data);
			}
			if(index == 6){
				
			}
			if(index == 7){
				mainFun.funData7($('#popdata'),2,dataAll.data7.data);
			}
			if(index == 8){
				mainFun.funData8($('#popdata'),2,dataAll.data8.data);
			}
			if(index == 9){
				mainFun.funData9($('#popdata'),2,dataAll.data9.data);
			}
		},
		funData1:function($dom,tag,data){  //调用量
			var datax = [],datay = [];
			$.each(data,function(k,v){
				datax.push(v.time);
				datay.push(v.num);
			});

			var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : datax
			            /*axisLine:{
			            	lineStyle:{
				            	color:"#3E98C5"
				            }
			            }*/
			            
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'调用量',
			            type:'line',
			            data:datay,
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#60a7dd'
					        }
					    }
			        }
			    ]
			};
			var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true);   
			this.myCharts.push(myChart);   
		},
		funData2:function($dom,tag,data){  //分享量
			var datax = [],datay = [];
			$.each(data,function(k,v){
				datax.push(v.time);
				datay.push(v.num);
			});
			if(tag == 2){
				var show = true;
				var grid = {
					left: '5%',
			        right: '4%',
			        bottom: '10%',
				};
			}
			if(tag == 1){
				var show = false;
				var grid = {
			        width:"自适应",
			        height:"自适应",
			        x:0,
			        y:0
			    };
			}
			var option = {
				tooltip : {
			        trigger: 'axis'
			    },
				xAxis : [
						{
							show:show,
							type : 'category',
							data : datax
						}
					],
				grid: grid,	
				yAxis : [
						{
							show:show,
							type : 'value'
						}
					],
				series : [
					{
						name:'分享量',
						type:'bar',
						data:datay
					}
				],
				itemStyle:{
			        normal:{
			        	barBorderRadius:[5, 5, 5, 5],
			            color:'#af7bd0'
			        }
			    }
			};
            var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true);   
			this.myCharts.push(myChart);   
		},
		funData3:function($dom,tag,data){ //用户量
			var datax = [],datay1 = [],datay2 = [];
			$.each(data,function(k,v){
				datax.push(v.time);
				datay1.push(v.num1);
				datay2.push(v.num2);
			});
			if(tag == 2){
				var show = true;
				var grid = {
					left: '5%',
			        right: '4%',
			        bottom: '10%',
				};
			}
			if(tag == 1){
				var show = false;
				var grid = {
			        width:"自适应",
			        height:"自适应",
			        x:0,
			        y:0
			    };
			}
			var option = {
				grid: grid,
				tooltip : {
			        trigger: 'axis'
			    },
			    xAxis : [
			        {
			            type : 'category',
			            show:show,
			            data : datax
			        }
			    ],
			    yAxis : [
			        {
			        	show:show,
			            type : 'value'		            
			        }
			    ],
			    series : [
			        {
			            name:'当前总量',
			            type:'bar',
			            stack: '用户量',
			            data:datay1,
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#bb6fdc'
					        }
					    }
			        },
			        {
			            name:'新增用户',
			            type:'bar',
			            stack: '用户量',
			            data:datay2,
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#3af3e5'
					        }
					    }
			        }
			    ]
			};   
			var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true);    
			this.myCharts.push(myChart);        
		},
		funData4:function($dom,tag,data){ //来电量
			var datax = [],datay = [];
			$.each(data,function(k,v){
				datax.push(v.time);
				datay.push(v.num);
			});
			var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : datax
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'来电量',
			            type:'line',
			            data:datay,
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#60a7dd'
					        }
					    }
			        }
			    ]
			};
			var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true);   
			this.myCharts.push(myChart); 
		},
		funData5:function($dom,tag,data){ //浏览量
          var datax = [],datay = [];
          $.each(data,function(k,v){
            datax.push(v.time);
            datay.push(v.num);
          });
          if(tag == 2){
            var show = true;
            var grid = {
              left: '5%',
              right: '4%',
              bottom: '10%',
            };
          }
          if(tag == 1){
            var show = false;
            var grid = {
              width:"自适应",
              height:"自适应",
              x:0,
              y:0
            };
          }
          var option = {
            tooltip : {
              trigger: 'axis'
            },
            grid: grid,
            xAxis : [
              {
                show:show,
                type : 'category',
                boundaryGap : false,
                data : datax
              }
            ],
            yAxis : [
              {
                show:show,
                type : 'value'
              }
            ],
            series : [
              {
                name:'浏览量',
                type:'line',
                symbol:"circle",
                itemStyle: {
                  normal: {
                    color:'#bb73e2',
                    areaStyle:{
                      type: 'default',
                      color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#bb73e2'
                      }, {
                        offset: 1,
                        color: '#33e4e6'
                      }])
                    },
                    lineStyle:{
                      color:"#bb73e2"
                    }
                  }
                },
                data:datay
              }
            ]
          };
          var dom = $dom[0];
          var myChart = echarts.init(dom);
          myChart.setOption(option, true);
          this.myCharts.push(myChart);
        },
		funData6:function($dom,tag,data){ //位置
		},
		funData7:function($dom,tag,data){ //来电转化率
			var data1 = data.data1,data2 = data.data2-data.data1;
			var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        x: 'center',
			        y: 'bottom',
			        data:['来电量转化率','未转化率']
			    },
			    graphic:{
			    	type:'text',
			    	left:'40%',
			    	top:'33%',
			    	z:2,
			    	zlevel:200,
			    	style:{
			    		text:"转化率",
			    		fill:'#bb6fdc',
			    		fontSize:"16"
			    	}
			    },
			    series: [
			        {
			            name:'来电转化率',
			            type:'pie',
			            radius: ['50%', '70%'],
			            center : ['50%', '40%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: false,
			                    textStyle: {
			                        fontSize: '15',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            data:[
			                {value:data1, name:'来电量转化率',itemStyle:{
						        normal:{
						            color:'#bb6fdc'
						        }
						    }},
			                {value:data2, name:'未转化率',itemStyle:{
						        normal:{
						            color:'#ddd'
						        }
						    }}
			            ]
			        }
			    ]
			};  
			var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
			this.myCharts.push(myChart);     
		},
		funData8:function($dom,tag,data){ //总 数据统计
			var datax = [],datay1 = [],datay2 = [],datay3 = [],datay4 = [],datay5 = [];
			$.each(data.dataArr,function(k,v){
				datax.push(v.time);
				datay1.push(v.num1);
				datay2.push(v.num2);
				datay3.push(v.num3);
				datay4.push(v.num4);
				datay5.push(v.num5);
			});
			if(tag == 2){
				var showX = true;
				var showY = true;
				var grid = {
					left: '5%',
			        right: '4%',
			        bottom: '10%',
				};
			}
			if(tag == 1){
				var showX = false;
				var showY = true;
				var grid = {
			        width:"自适应",
			        height:"自适应",
			        x:0,
			        y:"30px",
			        left: '10%',
			        bottom: '5%',
			    };
			}
			var option = {
				tooltip:{
			        trigger: 'axis'
			    },
			    legend: {
			        data:data.dataType,
			        itemWidth:15,
			        itemHeight:5,
			        itemGap:5,
			        x:"right"
			    },
			    grid: grid,	
			    xAxis : [
			        {
			        	show:showX,
			            type : 'category',
			            data : datax
			        }
			    ],
			    yAxis : [
			        {
			        	show:showY,
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:data.dataType[0],
			            type:'bar',
			            data:datay1,
			        	itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#60a7dd'
					        }
					    }
			        },
			        {
			            name:data.dataType[1],
			            type:'bar',
			            data:datay2,
			        	itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#e25043'
					        }
					    }
			        },
			        {
			            name:data.dataType[2],
			            type:'bar',
			            data:datay3,
			        	itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#35b497'
					        }
					    }
			        },
			        {
			            name:data.dataType[3],
			            type:'bar',
			            data:datay4,
			        	itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#47ece6'
					        }
					    }
			        },
			        {
			            name:data.dataType[4],
			            type:'bar',
			            data:datay5,
			        	itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5],
					            color:'#a277af'
					        }
					    }
			        }
			    ]
			};
            var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true);
			this.myCharts.push(myChart);                    
		},
		funData9:function($dom,tag,data){ //分享转化率
			var data1 = data.data1,data2 = data.data2-data.data1;
			var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			    	orient: 'vertical',
			        x: '60%',
			        y: 'center',
			        data:['分享量转化率','未转化率']
			    },
			    graphic:{
			    	type:'text',
			    	left:'23%',
			    	top:'center',
			    	z:2,
			    	zlevel:200,
			    	style:{
			    		text:"转化率",
			    		fill:'#47e9ec',
			    		fontSize:"16"
			    	}
			    },
			    series: [
			        {
			            name:'分享转化率',
			            type:'pie',
			            radius: ['50%', '70%'],
			            center : ['30%', '50%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: false,
			                    textStyle: {
			                        fontSize: '15',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            data:[
			                {value:data1, name:'分享量转化率',itemStyle:{
						        normal:{
						            color:'#47e9ec'
						        }
						    }},
			                {value:data2, name:'未转化率',itemStyle:{
						        normal:{
						            color:'#ddd'
						        }
						    }}
			            ]
			        }
			    ]
			};  
			var dom = $dom[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
			this.myCharts.push(myChart);   
		},
		dataStatistics:function(imagetype){ //数据统计切换图形类型
			var data = mainFun.dataStat;
			if(imagetype == "bar"){
				mainFun.funData8($('#popdata'),2,dataAll.data8.data);
			}
			if(imagetype == "line"){
				var datax = [],datay1 = [],datay2 = [],datay3 = [],datay4 = [],datay5 = [];
				$.each(data.dataArr,function(k,v){
					datax.push(v.time);
					datay1.push(v.num1);
					datay2.push(v.num2);
					datay3.push(v.num3);
					datay4.push(v.num4);
					datay5.push(v.num5);
				});
				var option = {
					tooltip:{
				        trigger: 'axis'
				    },
				    legend: {
				        data:data.dataType,
				        itemWidth:15,
				        itemHeight:5,
				        itemGap:5,
				        x:"right"
				    },
				    grid: {
						left: '5%',
				        right: '4%',
				        bottom: '10%',
					},	
				    xAxis : [
				        {
				        	show:true,
				            type : 'category',
				            data : datax
				        }
				    ],
				    yAxis : [
				        {
				        	show:true,
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:data.dataType[0],
				            type:imagetype,
				            data:datay1,
				        	itemStyle:{
						        normal:{
						        	barBorderRadius:[5, 5, 5, 5],
						            color:'#60a7dd'
						        }
						    }
				        },
				        {
				            name:data.dataType[1],
				            type:imagetype,
				            data:datay2,
				        	itemStyle:{
						        normal:{
						        	barBorderRadius:[5, 5, 5, 5],
						            color:'#e25043'
						        }
						    }
				        },
				        {
				            name:data.dataType[2],
				            type:imagetype,
				            data:datay3,
				        	itemStyle:{
						        normal:{
						        	barBorderRadius:[5, 5, 5, 5],
						            color:'#35b497'
						        }
						    }
				        },
				        {
				            name:data.dataType[3],
				            type:imagetype,
				            data:datay4,
				        	itemStyle:{
						        normal:{
						        	barBorderRadius:[5, 5, 5, 5],
						            color:'#47ece6'
						        }
						    }
				        },
				        {
				            name:data.dataType[4],
				            type:imagetype,
				            data:datay5,
				        	itemStyle:{
						        normal:{
						        	barBorderRadius:[5, 5, 5, 5],
						            color:'#a277af'
						        }
						    }
				        }
				    ]
				};
	            var dom = $('#popdata')[0];
				var myChart = echarts.init(dom); 
				myChart.setOption(option, true);
				this.myCharts.push(myChart); 	
			}
			if(imagetype == "area"){
				var datax = [],datay1 = [],datay2 = [],datay3 = [],datay4 = [],datay5 = [];
				$.each(data.dataArr,function(k,v){
					datax.push(v.time);
					datay1.push(v.num1);
					datay2.push(v.num2);
					datay3.push(v.num3);
					datay4.push(v.num4);
					datay5.push(v.num5);
				});
				var option = {
					tooltip:{
				        trigger: 'axis'
				    },
				    legend: {
				        data:data.dataType,
				        itemWidth:15,
				        itemHeight:5,
				        itemGap:5,
				        x:"right"
				    },
				    grid: {
						left: '5%',
				        right: '4%',
				        bottom: '10%',
					},	
				    xAxis : [
				        {
				        	show:true,
				            type : 'category',
				            data : datax
				        }
				    ],
				    yAxis : [
				        {
				        	show:true,
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:data.dataType[0],
				            type:imagetype,
				            data:datay1,
				            type:'line',
                			symbol:"circle",
				        	itemStyle:{
						        normal: {
				                    color:'#60a7dd',
				                    areaStyle:{
				                      type: 'default',
				                      color:'#60a7dd'
				                    },
				                    lineStyle:{
				                      color:"#60a7dd"
				                    }
				                }
						    }
				        },
				        {
				            name:data.dataType[1],
				            type:imagetype,
				            data:datay2,
				            type:'line',
                			symbol:"circle",
				        	itemStyle:{
						        normal: {
				                    color:'#e25043',
				                    areaStyle:{
				                      type: 'default',
				                      color:'#e25043'
				                    },
				                    lineStyle:{
				                      color:"#e25043"
				                    }
				                }
						    }
				        },
				        {
				            name:data.dataType[2],
				            type:imagetype,
				            data:datay3,
				            type:'line',
                			symbol:"circle",
				        	itemStyle:{
						        normal: {
				                    color:'#35b497',
				                    areaStyle:{
				                      type: 'default',
				                      color:'#35b497'
				                    },
				                    lineStyle:{
				                      color:"#35b497"
				                    }
				                }
						    }
				        },
				        {
				            name:data.dataType[3],
				            type:imagetype,
				            data:datay4,
				            type:'line',
                			symbol:"circle",
				        	itemStyle:{
						        normal: {
				                    color:'#47ece6',
				                    areaStyle:{
				                      type: 'default',
				                      color:'#47ece6'
				                    },
				                    lineStyle:{
				                      color:"#47ece6"
				                    }
				                }
						    }
				        },
				        {
				            name:data.dataType[4],
				            type:imagetype,
				            data:datay5,
				            type:'line',
                			symbol:"circle",
				        	itemStyle:{
						        normal: {
				                    color:'#a277af',
				                    areaStyle:{
				                      type: 'default',
				                      color:'#a277af'
				                    },
				                    lineStyle:{
				                      color:"#a277af"
				                    }
				                }
						    }
				        }
				    ]
				};
	            var dom = $('#popdata')[0];
				var myChart = echarts.init(dom); 
				myChart.setOption(option, true);
				this.myCharts.push(myChart); 	
			}
		}
	}
	mainFun.init();
 })(jQuery);  