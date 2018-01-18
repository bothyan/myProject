<template>
  <div class="dash-content" id="dash-content">
    <p class="title">仪表盘</p>
    <ul class="dash-head" id="dash-head">
      <li class="li1">  
      </li> 
      <li class="li2">
      </li> 
      <li class="li3">
      </li> 
      <li class="li4">
      </li> 
    </ul> 
    <div class="con1">
      <div class="left">
        <div class="box box1" id="dash-box1" _index="1">
          <p class="ti">调用量<em>当月总数</em></p>
          <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
          <p class="today timer" data-speed="1000" data-from="0" data-to="">0</p>
          <p class="totips">今天增长</p>
          <img src="images/line2.png" />
        </div>
        <div class="box box2" id="dash-box2" _index="2">
          <p class="ti">分享量</p>
          <div class="data2" id="data2"></div>
          <div class="table">
            <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
            <p class="tips">当月总数</p>
          </div>
        </div>
        <div class="box box3" id="dash-box3" _index="3">
          <p class="ti">用户量</p>
          <div class="data3" id="data3"></div>
          <div class="table">
            <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
            <p class="tips">当月总数</p>
          </div>
        </div>
        <div class="box box4" id="dash-box4" _index="4">
          <p class="ti">来电量</p>
          <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
          <p class="tips">当月总数</p>
          <img src="images/line1.png" />
        </div>
      </div>
      <div class="right box box5" id="dash-box5" _index="5">
        <p class="ti">浏览量</p>
        <p class="box5-nav" id="box5-nav">
          <em _type="year">年</em>
          <em _type="month" class="select">月</em>
          <em _type="week">周</em>
          <em _type="day">日</em>
        </p>
        <div class="amount">
          <div class="p1">
            <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
            <p class="tips">当前总数</p>
          </div>
          <div class="p2">
            <p class="num timer" data-speed="1000" data-from="0" data-to="">0</p>
            <p class="tips">上月总数</p>
          </div>
        </div>
        <div class="data5" id="data5"></div>
      </div>
    </div>
    <div class="con2">
      <div class="left box box6" _index="6">
        <p class="ti">位置</p>
        <img src="images/location.png" />
        <div class="tips">朝阳区</div>
      </div>
      <div class="right">
        <div class="box box7"  _index="7">
          <p class="ti">转化率（来电量和IP）</p>
          <div class="data7" id="data7"></div>
        </div>
        <div class="box box8" _index="8">
          <p class="ti">数据统计</p>
          <div class="data8" id="data8"></div>
        </div>
        <div class="box box9" _index="9">
          <p class="ti">转化率（分享量和IP）</p>
          <div class="data9" id="data9"></div>
        </div>
        <div class="box box10">
          <p class="ti">联系我们</p>
          <p class="tips">遇到什么问题，及时联系我们哦</p>
          <span class="send">发送文件</span>
        </div>
      </div>
    </div>
  </div>
  <div class="dashpop" id="dashpop">
    <span class="close">X</span>  
    <ul class="pop-head" id="pop-head">
      <li class="li1">  
      </li> 
      <li class="li2">
      </li> 
      <li class="li3">
      </li> 
      <li class="li4">
      </li> 
    </ul> 
    <div class="select-box">
      <select class="form-control" id="dashselect" name="name"></select>
      <select class="form-control" id="select-time" name="time">
        <option value="year">按年统计</option>
        <option value="month">按月统计</option>
        <option value="week">按周统计</option>
        <option value="day">按日统计</option>
      </select>
    </div>
    <div id="popdata" class="popdata"></div>
  </div>
</template>
<script>
export default {
  mounted:function(){
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
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周二",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周三",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周四",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周五",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周六",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
            },
            {
              "time":"周日",
              "num1":"420", //调用量
              "num2":"420", //浏览量
              "num3":"420", //分享量
              "num4":"420", //用户量
              "num5":"420", //来电量
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
        $.each(person,function(k,v){
          var $option = $('<option value="'+v.id+'">'+v.name+'</option>');
          $("#dashselect").append($option);
        });
        
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
            $("#dashselect")[0].options[0].selected = true;
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
          var id = $('#dashselect').val();
          that.ajaxData(time,index,id);*/

          //that.loadData(index);
          $('#pop-head .timer').each(function(){
              $(this).countTo();
          });
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
          var tooltip = {
                trigger: 'axis'
            };
            var symbol = "circle" ;
            var symbolC = "#bb73e2";
        }
        if(tag == 1){
          var show = false;
          var grid = {
                width:"自适应",
                height:"自适应",
                x:0,
                y:0
            };
            var tooltip = {
              trigger:""
            };
            var symbol = "none";
            var symbolC = "#fff";
        }
        var option = {
          tooltip : tooltip,
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
                    symbol:symbol,
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
                          color:symbolC
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
      }
    }
    mainFun.init();
  }
}
</script>
<style scoped>
  body {
    line-height: 1.5;
    font-family: arial, "宋体";
    background: #ffffff;
    font-size: 12px;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  button,
  textarea,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var,
  optgroup {
    font-style: normal;
  }
  input,
  button,
  select,
  optgroup,
  option {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    *font-size: 100%;
  }
  fieldset,
  img,
  a img,
  :link img,
  :visited img {
    border: 0;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  :focus {
    outline: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  caption,
  th {
    text-align: left;
  }
  sup,
  sub {
    font-size: 100%;
    vertical-align: baseline;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  .clear,
  .clearfix:after {
    clear: both;
    height: 0;
    overflow: hidden;
    display: block;
  }
  .clearfix:after {
    visibility: hidden;
    content: ".";
  }
  .clearfix {
    *zoom: 1;
  }
  body,
  html,
  div,
  ul,
  li,
  p {
    padding: 0px;
    margin: 0px;
  }
  .dash-content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
  }
  .dash-content .box {
    -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
  }
  .dash-content .box .ti {
    color: #bebcd9;
    font-size: 18px;
    text-indent: 20px;
    margin: 10px 0;
  }
  .title {
    color: #585858;
    font-size: 24px;
    height: 55px;
    text-indent: 80px;
    background: #fafafa url(../images/icon.png) no-repeat 30px center;
    line-height: 55px;
    border-bottom: 1px solid #f0f3f8;
  }
  .dash-head {
    width: 96%;
    height: 144px;
    margin: 25px auto 0;
  }
  .dash-head li {
    height: 144px;
    float: left;
    width: 23%;
    border-radius: 5px;
    margin-right: 2.66%;
    color: #fff;
  }
  .dash-head li .num {
    text-indent: 30px;
    font-size: 48px;
    margin-top: 15px;
  }
  .dash-head li .type {
    text-indent: 35px;
    font-size: 24px;
  }
  .dash-head .li1 {
    background: #e64d43 url(../images/box1.png) no-repeat center center;
  }
  .dash-head .li2 {
    background: #29bb9c url(../images/box2.png) no-repeat center center;
  }
  .dash-head .li3 {
    background: #3b99d8 url(../images/box3.png) no-repeat center center;
  }
  .dash-head .li4 {
    background: #995cb3 url(../images/box4.png) no-repeat center center;
    margin-right: 0;
  }
  .con1 {
    width: 96%;
    margin: 25px auto 0;
    height: 339px;
  }
  .con1 .left {
    width: 58%;
    float: left;
    height: 339px;
  }
  .con1 .left .box {
    height: 157px;
    float: left;
  }
  .con1 .right {
    width: 40%;
    margin-left: 2%;
    float: left;
    height: 339px;
  }
  .con1 .right .box5-nav {
    text-indent: 20px;
    font-size: 18px;
    color: #cbcae1;
  }
  .con1 .right .box5-nav em {
    margin-right: 40px;
    cursor: pointer;
  }
  .con1 .right .box5-nav em:hover {
    color: #514aa3;
    font-weight: bold;
  }
  .con1 .right .box5-nav em.select {
    color: #514aa3;
    font-weight: bold;
  }
  .con1 .right .amount {
    height: 80px;
    padding: 0 20px;
    margin-top: -10px;
  }
  .con1 .right .amount .p1,
  .con1 .right .amount .p2 {
    height: 80px;
    display: inline-block;
    text-align: left;
  }
  .con1 .right .amount .p1 {
    float: left;
  }
  .con1 .right .amount .p2 {
    float: right;
  }
  .con1 .right .amount .num {
    color: #b96fe1;
    font-size: 33px;
    margin-top: 10px;
  }
  .con1 .right .amount .tips {
    color: #c5c3dd;
    font-size: 14px;
    margin-top: -5px;
  }
  .con1 .right .data5 {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0px;
    height: 190px;
  }
  .con1 .box1 {
    width: 39%;
  }
  .con1 .box1 .num {
    color: #514aa3;
    font-size: 50px;
    text-indent: 15px;
    margin-top: -15px;
  }
  .con1 .box1 .totips {
    color: #c5c3dd;
    text-indent: 20px;
    font-size: 14px;
    margin-top: -5px;
  }
  .con1 .box1 img {
    width: 28%;
    position: absolute;
    bottom: 25px;
    right: 15px;
  }
  .con1 .box1 .ti em {
    color: #c5c3dd;
    font-size: 13px;
    margin-left: 5px;
  }
  .con1 .box1 .today {
    color: #514aa3;
    text-indent: 20px;
    font-size: 24px;
    margin-top: -12px;
  }
  .con1 .box2 {
    width: 57%;
    margin-left: 4%;
  }
  .con1 .box2 .table {
    width: 40%;
    height: 130px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .con1 .box2 .num {
    color: #514aa3;
    font-size: 50px;
    margin-top: 10px;
  }
  .con1 .box2 .tips {
    color: #c5c3dd;
    font-size: 14px;
  }
  .con1 .box2 .data2 {
    position: absolute;
    left: 20px;
    bottom: 10px;
    height: 100px;
    width: 50%;
  }
  .con1 .box3 {
    width: 57%;
    margin-top: 25px;
  }
  .con1 .box3 .table {
    width: 30%;
    height: 130px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .con1 .box3 .num {
    color: #514aa3;
    font-size: 50px;
    margin-top: 10px;
  }
  .con1 .box3 .tips {
    color: #c5c3dd;
    font-size: 14px;
  }
  .con1 .box3 .data3 {
    position: absolute;
    left: 20px;
    bottom: 10px;
    height: 100px;
    width: 60%;
  }
  .con1 .box4 {
    width: 39%;
    margin-left: 4%;
    margin-top: 25px;
  }
  .con1 .box4 .num {
    color: #53e9ea;
    font-size: 50px;
    text-indent: 15px;
    margin-top: -5px;
  }
  .con1 .box4 .tips {
    color: #c5c3dd;
    text-indent: 20px;
    font-size: 14px;
  }
  .con1 .box4 img {
    width: 45%;
    position: absolute;
    bottom: 30px;
    right: 15px;
  }
  .con2 {
    width: 96%;
    margin: 25px auto;
    height: 495px;
  }
  .con2 .left {
    width: 40%;
    float: left;
    height: 495px;
  }
  .con2 .left img {
    position: absolute;
    width: 90%;
    top: 130px;
    left: 5%;
  }
  .con2 .left .ti {
    text-align: center;
  }
  .con2 .left .tips {
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #c5c3dd;
    font-size: 14px;
  }
  .con2 .right {
    width: 58%;
    margin-left: 2%;
    float: left;
    height: 495px;
  }
  .con2 .right .box {
    height: 235px;
    float: left;
  }
  .con2 .box7 {
    width: 39%;
  }
  .con2 .box7 .types {
    position: absolute;
    width: 80%;
    left: 10%;
    bottom: 10px;
  }
  .con2 .box7 p {
    display: inline-block;
  }
  .con2 .box7 p em {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    display: inline-block;
    margin-right: 10px;
  }
  .con2 .box7 .p1 {
    float: left;
    color: #bb73e3;
    font-size: 14px;
  }
  .con2 .box7 .p1 em {
    background: #bb73e3;
  }
  .con2 .box7 .p2 {
    float: right;
    color: #d7d9db;
    font-size: 14px;
  }
  .con2 .box7 .p2 em {
    background: #d7d9db;
  }
  .con2 .box7 .data7 {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 10px;
    height: 185px;
  }
  .con2 .box8 {
    width: 57%;
    margin-left: 4%;
  }
  .con2 .box8 .ti {
    text-align: center;
  }
  .con2 .box8 .data8 {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 10px;
    height: 185px;
  }
  .con2 .box9 {
    width: 57%;
    margin-top: 25px;
  }
  .con2 .box9 .types {
    width: 40%;
    position: absolute;
    left: 60%;
    top: 50px;
    height: 170px;
  }
  .con2 .box9 .types em {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    display: inline-block;
    margin-right: 10px;
  }
  .con2 .box9 .types .p1 {
    color: #44eee9;
    font-size: 18px;
    margin-top: 10px;
    margin-top: 45px;
  }
  .con2 .box9 .types .p1 em {
    background: #44eee9;
  }
  .con2 .box9 .types .p2 {
    color: #bb73e3;
    font-size: 18px;
    margin-top: 10px;
  }
  .con2 .box9 .types .p2 em {
    background: #bb73e3;
  }
  .con2 .box9 .data9 {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 10px;
    height: 185px;
  }
  .con2 .box10 {
    width: 39%;
    margin-left: 4%;
    margin-top: 25px;
  }
  .con2 .box10 .ti {
    color: #bb73e3;
    text-align: center;
    font-size: 22px;
  }
  .con2 .box10 .tips {
    width: 60%;
    padding-left: 25px;
    background: url(../images/brella.png) no-repeat 0 0;
    margin: 0 auto;
    color: #cbcae1;
    font-size: 15px;
  }
  .con2 .box10 .send {
    width: 60%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #bb73e3;
    color: #fff;
    font-size: 18px;
    margin: 15px auto 0;
    border-radius: 20px;
    display: block;
  }
  .dashpop {
    position: fixed;
    display: none;
    z-index: 200;
    background: #fff;
    box-shadow: inset 0px 0px 10px #CCC;
    -webkit-box-shadow: inset 0px 0px 10px #CCC;
  }
  .dashpop .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 40px;
    color: #ccc;
    width: 50px;
    height: 50px;
    display: block;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .dashpop .pop-head {
    width: 96%;
    height: 144px;
    margin: 50px auto 0;
  }
  .dashpop .pop-head li {
    height: 144px;
    float: left;
    width: 23%;
    border-radius: 5px;
    margin-right: 2.66%;
    color: #fff;
  }
  .dashpop .pop-head li .num {
    text-indent: 30px;
    font-size: 48px;
    margin-top: 15px;
  }
  .dashpop .pop-head li .type {
    text-indent: 35px;
    font-size: 24px;
  }
  .dashpop .pop-head .li1 {
    background: #e64d43 url(../images/box1.png) no-repeat center center;
  }
  .dashpop .pop-head .li2 {
    background: #29bb9c url(../images/box2.png) no-repeat center center;
  }
  .dashpop .pop-head .li3 {
    background: #3b99d8 url(../images/box3.png) no-repeat center center;
  }
  .dashpop .pop-head .li4 {
    background: #995cb3 url(../images/box4.png) no-repeat center center;
    margin-right: 0;
  }
  .dashpop .select-box {
    height: 36px;
    width: 96%;
    margin: 20px auto 0;
  }
  .dashpop .form-control {
    height: 36px;
    width: 23%;
    float: left;
    margin-right: 2%;
  }
  .dashpop .popdata {
    width: 90%;
    margin: 0px auto 0;
  }
</style>