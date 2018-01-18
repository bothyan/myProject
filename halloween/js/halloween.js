(function($){
	var startevent = 'touchstart' in document.documentElement ? "touchstart" : "mousedown";
    var endevent = 'touchend' in document.documentElement ? "touchend" : "mouseup";	

    var shareMsg = {
    	title:"万圣节，我误入恐怖片片场，结果......",
    	des:"以下画面可能会引起不适，胆小误入",
    	imgUrl:"http://e.h5designer.com/zhihu/images/shareicon.jpg",
    	link:window.location.href
    };

    /*  预加载资源
	** initTag   是否已加载
    ** imgDomin  加载资源域名
    ** loadCount 初始加载资源数0  
	*/

	function preLoadimg(options){
		this.initTag = true;
		this.loadCount = 0;
		this.imgDomin = "images/";
		this.preLoadingImgData = options.preLoadingImgData;
		this.button = options.button;
		this.callback = options.callback || function(){};
	}
	preLoadimg.prototype.init = function(){
		var that = this;
		that.initTag = false;
		that.preLoadingImgData = that.preLoadingImgData.map(function(item,index){
			return that.imgDomin + item;
		});
		this.preLoading(0);
	}
	preLoadimg.prototype.preLoading = function(i){
		var that = this;
		var _img = new Image();
		var isloaded=false;
		_img.src=this.preLoadingImgData[i];
		this.loadCount++;
		var count = this.loadCount,imglength = this.preLoadingImgData.length;
		var percent=parseInt(count/imglength*100);
		// 显示百分比
	 	this.button.html(percent);
		if(count==imglength){
			// loading结束
			$("#loading-img").remove();	
			//this.button.html("");		
			window.setTimeout(function(){
				that.callback();
			},100)				
		}
		$("#loading-img").append($(_img));
		var timer=null;
		timer=setInterval(function(){
			if($(_img).height()){
				$("#loading-img").html("");	
				clearInterval(timer);
				if(count<imglength){
					that.preLoading(count);
				}
			}
		},10);	
	};

	/*  音乐转动
	** dom   音乐转动dom
    ** bgm   音乐资源dom
	*/
	var musicRotate = {
		dom:$("#music"),
		bgm:$("#bgm"),
		musicTnter:null,
		angle:0,
		rotateTag:true,
		init:function(){
			var that = this;
			that.bgm[0].play();
			that.dom.bind(startevent,function(){
				if(that.rotateTag){
					window.clearInterval(that.musicTnter);
					that.bgm[0].pause();
					that.rotateTag = false;
				}else{
					that.animate();
					that.bgm[0].play();
					that.rotateTag = true;
				}
			});
			that.animate();
		},
		animate:function(){
			var that = this;
			that.musicTnter = setInterval(function(){
			    that.angle +=3;
			    that.dom.rotate(that.angle);
			}, 50);
		}
	}

	var mainFun = {
		music:true,
		score:0,
		index:0,
		init:function(){
			var wheight = $(window).height();
			if(wheight>1206){
				var scale =  wheight/1206;
			}else{
				var scale = wheight/1206;
			}
			var scaleStyle='scale('+scale+')',marginTop = (wheight-1206)/2;
			$('.page,.loading,.pop,sharetips').css({
				'-moz-transform':scaleStyle,
				'-webkit-transform':scaleStyle,
				'-ms-transform':scaleStyle,
				'transform':scaleStyle,
				'margin-top':marginTop+"px"
			});
			this.handle();
			this.initMusic();
			this.load();
			this.weixinshare();
		},
		load:function(){
			var that = this;
			var imgArrr = [
					'bg0.png',
					'bg01.jpg',
					'bg02.png',
					'bg03.png',
				    'bg11.jpg',
				    'bg12.png',
				    'bg13.png',
				    'bg14.png',
				    'bg21.jpg',
				    'bg22.png',
				    'bg23.png',
				    'bg31.png',
				    'bg32.png',
				    'bg33.png',
				    'bg34.png',
				    'bg41.png',
				    'bg42.png',
				    'bg43.png',
				    'bg44.png',
				    'bg51.jpg',
				    'bg52.png',
				    'bg53.png',
				    'bg61.png',
				    'bg62.png',
				    'bg71.jpg',
				    'bg72.png',
				    'bg81.png',
				    'bg82.png',
				    'miao.png',
				    'go.png',
				    'kuang.png',
				    'logo.png',
				    'music.png',
				    'popbg.png',
				    'theme.png',
				    'tips.png',
				    'button.png'
				];
			var options = {
				preLoadingImgData:imgArrr,
				button:$("#percent em"),
				callback:function(){	
					$("#loading").remove();
					$(".music,.page0").show();	
					that.start();
					
				}
			};
			new preLoadimg(options).init();
		},
		weixinshare:function(){
			$.ajax({
				url:"http://e.h5designer.com/WxApi/getSignPackage",
				type:"get",
				dataType: "json",
				success:function(res){
					var sharedata = res.data;
					wx.config({
				        debug: false,
				        appId: sharedata.appId,
				        timestamp: sharedata.timestamp,
				        nonceStr: sharedata.nonceStr,
				        signature: sharedata.signature,
				        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
				    });	
				    wx.ready(function () {
				    	wx.onMenuShareTimeline({
		                    title: shareMsg.title,
		                    link: shareMsg.link,
		                    imgUrl: shareMsg.imgUrl,
		                    success: function () {
		                    }
		                });
		                wx.onMenuShareAppMessage({
		                    title: shareMsg.title,
		                    desc: shareMsg.des,
		                    link: shareMsg.link,
		                    imgUrl: shareMsg.imgUrl,
		                    type: "",
		                    dataUrl: "",
		                    success: function () {
		                    }
		                });
		                wx.onMenuShareQQ({
		                    title: shareMsg.title,
		                    desc: shareMsg.des,
		                    link: shareMsg.link,
		                    imgUrl: shareMsg.imgUrl,
		                    success: function () {
		                    }
		                });
		                wx.onMenuShareWeibo({
		                    title: shareMsg.title,
		                    desc: shareMsg.des,
		                    link: shareMsg.link,
		                    imgUrl: shareMsg.imgUrl,
		                    success: function () {
		                    }
		                });
		                wx.onMenuShareQZone({
		                    title: shareMsg.title,
		                    desc: shareMsg.des,
		                    link: shareMsg.link,
		                    imgUrl: shareMsg.imgUrl,
		                    success: function () {
		                    }
		                })
					});
				}
			})
		},
		editweixinshare:function(){
			wx.ready(function () {
				wx.onMenuShareTimeline({
	                title: shareMsg.title,
	                link: shareMsg.link,
	                imgUrl: shareMsg.imgUrl,
	                success: function () {
	                }
	            });
	            wx.onMenuShareAppMessage({
	                title: shareMsg.title,
	                desc: shareMsg.des,
	                link: shareMsg.link,
	                imgUrl: shareMsg.imgUrl,
	                type: "",
	                dataUrl: "",
	                success: function () {
	                }
	            });
	            wx.onMenuShareQQ({
	                title: shareMsg.title,
	                desc: shareMsg.des,
	                link: shareMsg.link,
	                imgUrl: shareMsg.imgUrl,
	                success: function () {
	                }
	            });
	            wx.onMenuShareWeibo({
	                title: shareMsg.title,
	                desc: shareMsg.des,
	                link: shareMsg.link,
	                imgUrl: shareMsg.imgUrl,
	                success: function () {
	                }
	            });
	            wx.onMenuShareQZone({
	                title: shareMsg.title,
	                desc: shareMsg.des,
	                link: shareMsg.link,
	                imgUrl: shareMsg.imgUrl,
	                success: function () {
	                }
	            })
	        });
		},
		start:function(){
			musicRotate.init();
			this.audioAutoPlay('bgm');	
			window.setTimeout(function(){
				$(".go").addClass("goAni1");
			},1000);
			window.setTimeout(function(){
				$(".go").css({"opacity":1});
				$(".go").removeClass("goAni1").addClass("goAni");
			},1500);
		},
		shicha:function(id){
			var scene = document.getElementById(id);
			var parallax = new Parallax(scene);
		},
		handle:function(){
			var that = this;
			$("body").bind("touchmove",function(e){
				e.preventDefault();		
			});
			$("#restart").bind(endevent,function(){
				window.location.reload();
			});
			$("#enter").bind(endevent,function(){
				$("#page0").fadeOut();
				$("#page1").fadeIn();
				$("#bgm1")[0].play();
				$("#buttonm")[0].play();
			});
			$("#confirm").bind(endevent,function(){
				$("#buttonm")[0].play();
				$("#pop").fadeOut();
				$("#page8").show();	
				$("#bgm8")[0].play();
				$(".result0").hide();
				$(".result1").show();
			});
			$("#rechoose").bind(endevent,function(){
				$("#buttonm")[0].play();
				$("#pop").fadeOut();
			});
			$("#share").bind(endevent,function(){
				$("#buttonm")[0].play();
				$("#sharetips").fadeIn();
			});
			$("#sharetips").bind(endevent,function(){
				$("#sharetips").hide();
			});
			$(".question li").bind(endevent,function(){
				var index = parseInt($(this).closest("ul").attr("_index"))+1;
				var score = parseInt($(this).attr("_score"));
				$("#buttonm")[0].play();
				if(score == "-1"){
					$("#pop").fadeIn();
				}else{
					that.score+=score;
					$(".page"+index).show();					
					$("#bgm"+index)[0].play();
					if(index == 8){
						that.funResult();
					}
				}
			});
		},
		funResult:function(){
			var that = this;
			var score = this.score;	
			window.setTimeout(function(){
				if(score>=6 && score<=7){
					$(".result2").show();
					shareMsg.title = "我刚出演了一部万圣节恐怖大片，我就是主角本人，你也来试试！";
					that.editweixinshare();
				}
				if(score>=8 && score<=10){
					$(".result3").show();
					shareMsg.title = "万圣节，我误入恐怖片片场，差点儿成为主角，你也来试试！";
					that.editweixinshare();
				}
				if(score>=11 && score<=13){
					$(".result4").show();
					shareMsg.title = "万圣节，我误入恐怖片片场，获得最佳配角，你也来试试！";
					that.editweixinshare();
				}
				if(score>=14 && score<=16){
					$(".result5").show();
					shareMsg.title = "万圣节，我误入恐怖片片场，半小时后被 KO，你也来试试！";
					that.editweixinshare();
				}
				if(score>=17 && score<=18){
					$(".result6").show();
					shareMsg.title = "万圣节，我误入恐怖片片场，结果只活了 10 分钟，你也来试试！";
					that.editweixinshare();
				}
			},3500)
			window.setTimeout(function(){
				$(".result0").hide();
			},4500);
		},
		audioAutoPlay:function(id){
			var audio = document.getElementById(id),
		        play = function(){
		        	audio.play();
		        	document.removeEventListener("touchstart",play, false);
		    	};
		    audio.play();
		    document.addEventListener("WeixinJSBridgeReady", function () {
		        play();
		    }, false);
		    document.addEventListener("touchstart",play, false);
		},
		initMusic:function(){
			document.addEventListener("WeixinJSBridgeReady", function () {
				$("#bgm")[0].play();
	            $("#buttonm")[0].pause();
	            $("#bgm1")[0].pause();
	            $("#bgm2")[0].pause();
	            $("#bgm3")[0].pause();
	            $("#bgm4")[0].pause();
	            $("#bgm5")[0].pause();
	            $("#bgm6")[0].pause();
	            $("#bgm7")[0].pause();
	            $("#bgm8")[0].pause();
	        }, false);
		},
		parallaxFun:function(id){
			var scene = document.getElementById(id);
            var parallaxs = new Parallax(scene, {
				calibrateX: false,
				calibrateY: true,
				invertX: false,
				invertY: false,
				limitX: false,
				limitY: 0
            });
		}
	};

	mainFun.init();		
	
 })(jQuery);  
