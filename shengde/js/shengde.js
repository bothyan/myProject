(function($){
	var startevent = 'touchstart' in document.documentElement ? "touchstart" : "mousedown";
    var endevent = 'touchend' in document.documentElement ? "touchend" : "mouseup";	

	var mainFun = {
		modeltag:2,
		name:"",
		wHeight:0,
		wWidth:760,
		ctx:$("#canvas")[0].getContext('2d'),
		text1:{
			color1:"#d20a27",
			color2:"#1f1611",
			zuobiao1:[464,831],
			zuobiao2:[323,1053]
		},
		text2:{
			color1:"#fff",
			color2:"#fff",
			zuobiao1:[464,841],
			zuobiao2:[340,1043]
		},
		init:function(){	
			var wheight = $(window).height()
			this.wHeight = wheight;
			$("canvas").css({"height":wheight+"px"});
			$("canvas").attr("width",760);
			$("canvas").attr("height",wheight);
			this.handle();
			this.drawpic();
		},
		start:function(){

		},
		handle:function(){
			var that = this;
			$("body").bind("touchmove",function(e){
				e.preventDefault();		
			});
			$(".changecon").bind(startevent,function(e){
				if(that.modeltag == 1){
					$(".content1").hide();
					$(".content2").show();
					that.modeltag = 2;
				}else{
					$(".content1").show();
					$(".content2").hide();
					that.modeltag = 1;
				}
				that.drawpic();
			});
			$(".confirm").bind(startevent,function(e){
				that.name = $("#name").val();
				that.drawpic1();
			});	
			$(".changepic").bind(startevent,function(e){
				$("#upimage").trigger("click");
			});
			$(".upload").bind(startevent,function(e){
				$("#upimage").trigger("click");
			});	
			compressImg('upimage','showimage',500,function(src){
				$(".imgbox").show();
				$("#showimage").hide();
	    		window.setTimeout(function(){
	    			var width = $("#showimage").width(),height = $("#showimage").height();
			    	var c_height = (295-height)/2;
			    	$("#showimage").css({"margin-top":c_height+"px"});
			    	$("#showimage").show();
			    	that.start();            	
	            },100); 
			});	
		},
		drawpic:function(){
			var that = this;
		    var	ctx = that.ctx;
		    ctx.clearRect(0,0,760,that.wHeight);  
			var image = new Image();
		    image.onload = function() {
		        ctx.drawImage(this, 0, 0,this.width,this.height,0,0,760,that.wHeight);	       
		    };
		    if(that.modeltag == 1){
		    	var src = "images/canvas1.jpg";
		    }
			 if(that.modeltag == 2){
		    	var src = "images/canvas2.jpg";
		    }
		    image.src = src;//合成背景图
		    image.setAttribute('crossOrigin', 'anonymous');	  
		},
		drawpic1:function(){
			var that = this;
			var heightpic = 450*that.wHeight/1334;
			ctx = that.ctx;
			var image = new Image();
		    image.onload = function() {
		    	var r1 = this.width/this.height;
		    	var r2 = 760/heightpic;
		    	if(r1<r2){
		    		var widths = heightpic * this.width/this.height ;
		    		var sw = (760 - widths)/2;
		    		ctx.drawImage(this, 0, 0,this.width,this.height,sw,0,widths,heightpic);
		    	}else{
		    		var heights = 760 * this.height/this.width;
		    		ctx.drawImage(this, 0, 0,this.width,this.height,0,0,760,heights);
		    	}
		    	/*var height = 760 * this.height/this.width;
		    	if(height<=heightpic){
		    		ctx.drawImage(this, 0, 0,this.width,this.height,0,0,760,height);
		    	}else{
		    		var y = (heightpic-height)/2;
		    		var sy = y*this.width/760;
		    		var sheight = this.height - sy;
		    		ctx.drawImage(this, 0, 0,this.width,sheight,0,y,760,height);
		    	}*/
		        
		       // $("canvas").css("z-index",200);
	    		that.drawtext();
		    };
		    image.src = $("#showimage").attr("src");//合成背景图
		    image.setAttribute('crossOrigin', 'anonymous');	  
		},
		drawtext:function(){
			var that = this;
		    var	ctx = that.ctx;
		    if(that.modeltag == 1){
		    	var text = that.text1;
		    }
			if(that.modeltag == 2){
		    	var text = that.text2;
		    }
		    var name = that.name;
		    //var num = 10000 + Math.floor(Math.random() * 10000);
 			var textH = text.zuobiao2[1]*that.wHeight/1334;
			var textH2 = text.zuobiao1[1]*that.wHeight/1334;
			/*ctx.font = "italic 32px 黑体";  
	        ctx.textAlign="center";
            ctx.fillStyle = text.color2;  
            ctx.fillText(num,text.zuobiao2[0],textH,110); */
            var ctx1 = $("#canvas")[0].getContext('2d');
            ctx1.font = "italic 32px 黑体";  
	        ctx1.textAlign="center";
            ctx1.fillStyle = text.color1;  
         	ctx1.translate(text.zuobiao1[0],textH2);
       		ctx1.rotate( -17* Math.PI/180);
            ctx1.fillText(name,0,0,220);
            var distSrc = canvas.toDataURL('image/jpeg');  		
	    	$('#result').attr('src', distSrc);
	    	$('#result').fadeIn();
	    	//$('p.tips').fadeIn();
		}
	};

	mainFun.init();		
 })(jQuery);  