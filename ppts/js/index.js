(function($){


	var youshis = {
		"hongguansiwei":"擅长对具体工作和事务的整体筹划。思考问题比较全面、深入而且客观。具有较强的抽象思维能力，喜欢动脑解决问题。具体而言，适合从事一些需要产生理念、口号、整体思路和发展规划的工作。比如经营策略、产品规划、市场规划等具有一定长期性、较为宏观的工作的起草、构思和参谋建议，也适合主持公司各种体系、制度、规范的起草制定和优化工作。",
		"xinxifenxi":"对于信息比较敏感，关注各项信息和数据。擅长以数据作为理性思考的依据。能够将信息作为汇报个各项决策的依据。实事求是，以业绩说话。具体而言，在收集和分析汽车产品信息参数、法律法规、生产过程中人机料的数据监控和分析、财务数据分析、销售数据的统计分析等工作方面，具有一定的优势和潜质。",
		"caozuojingyan":"喜欢且擅长承担在操作现场的工作。适合开展与各项设备、建筑设施打交道的工作。具体而言，适合从事生产一线的问题解决、研发过程中需要动手、操作、修改、测试等方面的工作，以及解决客户问题等需要经常“走出去”“动手”的工作。",
		"zhixingjihua":"喜欢且倾向于亲自动手，通过行为而不是反复思考来解决实际问题。具体而言，适合从事各种需要快速反应和按照既定的规则制度严格执行的工作，包括财务、物流、安全、行政总务等。",
		"tuidongtaren":"具有影响他人的能力和意愿，能够推动他人协助自己或者与自己一起完成任务。具体而言，适合监督和推进合作伙伴或者整合资源相关的工作，比如渠道和客户服务网点的销售推进和服务监督，或者对外部零配件供应商、物流服务商等沟通和管理督促，以及公司内部一些跨部门小组或者类矩阵式机构的牵头管理工作。",
		"renjijiaowang":"喜欢且擅长从推进工作的目的出发与别人进行交往和建立良好的关系。具体而言，适合市场拓展和公共关系等类型的工作。比如渠道拓展、大客户销售的推进等销售相关的工作，以及市场宣传、公共关系、政府关系等相关工作。",
		"renjilijie":"具有较高的同理心和服务精神，能够感同身受地帮助别人解决问题。具体而言，适合从事客户服务和技术支持等需要与终端客户直接打交道的工作，以及公司内部人力资源、行政等对内部客户进行服务的工作。",
		"zhidaotaren":"对自己擅长的工作领域有一定的经验总结，开放性较强，乐于与人分享经验和自己对问题的思考，这种指导主要停留在参谋和给出建议的层面。具体而言，适合从事起草内部规章制度，对工作和流程改进提出意见和建议，内部培训和分享、渠道商和维修网点的培训等相关工作。"
	};

	var fazhans = {
		"hongguansiwei":"平时对政策、理念、趋势和潮流等宏观的或者看上去比较“虚”的事务关注和理解不足，思考问题容易陷入对自己负责的领域和细节之中。在思考工作时，需要站在更高的角度，全面思考自己的决策和行为对于各个部门之间、业务上下游之间、保长客和合作伙伴之间等工作推进的影响。注意工作中的制度构建和优化。",
		"xinxifenxi":"对于数据、信息等的重视程度可能不足，对关键的数据记忆不深刻，可能缺少收集数据和分析数据的工作习惯。需要重视对信息的收集和分析工作，建立良好的信息收集和分析习惯。在进行理性思考和决策的时候，以数据分析的结果作为理性思考的依据。",
		"caozuojingyan":"可能不大喜欢与各项设备、建筑设施打交道的工作。需要提升自己“走出去”、“动手”的操作体验，需要通过多参与具体的操作、修改、测试等，更加深入了解一线的工作，以及解决客户问题等需要经常“走出去”“动手”的工作。",
		"zhixingjihua":"对于如何达到目标的行动规划可能不足，将目标有效分解和组织执行方面不足。缺少设置关键节点和对节点进度进行检查的意识。具体而言，在担任某些在工作或者项目的第一负责人时，需要特别强调对计划的分解和执行的关注。需要更高层的管理者和同事经常协助和提醒对计划进度的检查。",
		"tuidongtaren":"有不愿意麻烦别人，过于事事亲力亲为的倾向。特别是自己没有直接管辖权的同事和外部合作伙伴，推动他们配合自己工作的技能有待提升。不很擅长获得领导的关注和争取资源。具体而言，在管理工作中可能使得团队忙闲不均，工作分配不很科学。需要特别注意提升自己通过各种方式和手段协同他人，引导别人一同完成目标的技能。",
		"renjijiaowang":"可能比较内向，在人际交往中不是特别的积极。需要加强以工作为目的的社交能力。多参加公司内部、合作伙伴等的非正式活动和聚会等。在各种车展、专业展览、会议和培训中建立社交关系。",
		"renjilijie":"对于他人的内心想法、诉求等重视程度不足或者感受能力不足。需要培养自己的同理心和服务精神，多站在他人的角度思考，根据他人的感受和利益诉求做出相适应的行为和反应。",
		"zhidaotaren":"对于培养下属或者培养他人的能力不足，可能对自己擅长的领域有一定的积累，但是没有形成可以传播的经验总结。需要加强开放性，通过承担内部培训或者外部培训的工作提升自己传播经验的能力。关注下属的职业发展状况，并给予适当的帮助。"
	};

	/*var suzhidivs = [
		'<div class="tables1"><p class="title">指导与监控</p><p class="des"><em>[建议管理实践]</em>给与领导跨部门小组等项目制、临时性小组的机会以观察和积累对下属指导和监控的技能;通过内部师徒制度，委任对实习生、新加入员工的引领和代管职责，观察和锻炼督导实习生、新加入员工融入公司顺利开展工作的情况。</p><p class="des"><em>[推荐阅读书籍]</em>《教导型组织》，作者：侯志奎 著，出版社：机械工业出版社;《未来的领导者》，德鲁克基金会主编，作者：弗朗西斯.赫赛尔本、马歇尔.戈德史密斯、理查德.贝克哈德著，方海萍等译，中国人民大学出版社。</p><p class="des"><em>[建议参加培训]</em>非人力资源经理的人力资源管理；绩效反馈与辅导。</p></div>',
		'<div class="tables1"><p class="title">激励</p><p class="des"><em>[建议管理实践]</em>给与临时项目组、跨部门协调小组的管理机会，观察和锻炼在没有获得官方的行政职权和激励手段（发奖金、评优等）情况下，通过贯彻理念、培养团队精神、个人魅力等方式推进他人的工作和协同；委任公司非正式活动（比如文体活动等）的组织工作，观察和锻炼通过激励和鼓舞推进他人协同开展工作的能力。</p><p class="des"><em>[推荐阅读书籍]</em>《如何激励员工》作者：帕特里克·福赛思 东北财经大学出版社 。</p><p class="des"><em>[建议参加培训]</em>非人力资源经理的人力资源管理；绩效反馈与辅导。</p></div>',
		'<div class="tables1"><p class="title">培养他人</p><p class="des"><em>[建议管理实践]</em>担任内部讲师，负责内部培训的某些课程制做和讲授，观察和锻炼将自身经验进行提炼萃取，并向他人进行传递的能力；参与人力资源部人才评估、发展和培训部的相关工作，配合自身板块处室的HRBP开展相关工作，提升人才发展的知识、技能，丰富其人才管理策略；负责部门内部的人力资源规划，和与人力资源部对接整体人力资源规划的工作，锻炼团队评价、构建的相关能力和经验。</p><p class="des"><em>[推荐阅读书籍]</em>《人力资源管理》 作者： 加里·德斯勒。 清华大学出版社</p><p class="des"><em>[建议参加培训]</em>非人力资源经理的人力资源管理；员工职业生涯发展规划和辅导</p></div>',
		'<div class="tables1"><p class="title">沟通协调</p><p class="des"><em>[建议管理实践]</em>委任跨部门项目的协调管理工作，锻炼观察在沟通方面的主动性和开放度，以及冲突协调的策略与技巧；委任对政府部门的公关，以及对外部供应商、客户、合作伙伴的关系维护和冲突处理工作。</p><p class="des"><em>[推荐阅读书籍]</em>《管理大师阿代尔系列/人际沟通》，作者：（英）阿代尔，出版社：海南出版社；《组织中的人际沟通技巧（第二版）--EMBA经典译丛》，作者：时启亮，孙相云 译，出版社：中国人民大学出版社；《卡内基沟通与人际关系》，作者：（美）戴尔·卡内基 著，出版社：中信出版社年</p><p class="des"><em>[建议参加培训]</em>人际沟通专项培训；客户拓展和公共关系专项培训</p></div>',
		'<div class="tables1"><p class="title">制度构建与优化</p><p class="des"><em>[建议管理实践]</em>牵头负责公司某些关键业务或者支持业务的流程的梳理、标准制订、标准优化和执行贯彻检查等工作，观察和锻炼在制度构建和优化方面的能力。</p><p class="des"><em>[推荐阅读书籍]</em>《埃森哲顾问教你做流程管理》，作者：彼得·弗朗茨 马赛厄斯·柯克莫 出版社：机械工业出版社，出版时间：2008年01月。</p><p class="des"><em>[建议参加培训]</em>管理体系和标准贯彻培训；流程梳理和相关工具使用培训。</p></div>',
		'<div class="tables1"><p class="title">全局观念</p><p class="des"><em>[建议管理实践]</em>委任临时性、更高级的管理权限，比如在更高级的管理者不在岗期间，短时期全面负责相关工作。锻炼和观察站在超越自身管理职责的高度，考虑整体的利益和布局，以及配合和照顾工作上有往来的其它部门工作的能力；通过轮岗和实习临时承担需要同时处理多项工作的岗位。锻炼和观察是否能够合理分配精力和资源，同时照顾到若干个处在不同阶段的工作目标，或者解决若干个不同类型问题的能力；参与公司战略制定和研讨的会议，协助提供决策信息和起草决议，深入了解公司战略发展规划，培养战略能力。</p><p class="des"><em>[推荐阅读书籍]</em>《思维：国际级企业和企业家战略思维》，作者：郎咸平 等著；《输掉战役赢得战争：驾驭全局的策略》，作者：朱红 主编，出版社：海天出版社</p><p class="des"><em>[建议参加培训]</em>-</p></div>'
	];*/

	var suzhidivs = [];
	$("#jianyi1 .tables1").each(function(){
		suzhidivs.push($(this));
	});
	$("#jianyi2 .tables1").each(function(){
		suzhidivs.push($(this));
	});
	$("#jianyi1").html("");$("#jianyi2").html("");
	function isFloat(n){
		return /^-?\d*\.\d+$/.test(n);
	}
	Number.prototype.toPercent = function(){
		return (Math.round(this * 10000)/100).toFixed(2) + '%';
	}

	var lastindex = window.location.search.lastIndexOf("?");
	var po = lastindex+1;
	var id = window.location.search.substring(po).split("=")[1];
	var data = null;
	var mainFun = {
		init:function(){	
			this.ajaxData();	
		},
		start:function(){
			//this.initdoms();
			if(data.interval == 1){
				data.intervaldes = "业绩表现出色；个人能力、经验和素质完全胜任当前工作的要求，具有较高的发展潜质。";
			}
			if(data.interval == 2){
				data.intervaldes = "能够做出让人满意的业绩；个人能力、经验和素质能够胜任当下工作的各项要求。";
			}
			if(data.interval == 3){
				data.intervaldes = "业绩表现处于中等水平；个人能力、经验和素质能够基本胜任当下工作的各项要求。";
			}
			if(data.interval == 4){
				data.intervaldes = "业绩表现让人满意；个人能力、经验和素质并不能完全胜任当下工作的各项要求。需要从宏观环境因素、管理因素和个人努力因素进一步了解业绩与能力不匹配的原因。";
			}
			if(data.interval == 5){
				data.intervaldes = "业绩表现不能令人满意；能力、经验和素质水平较高，需要从宏观环境因素、管理因素和个人努力因素进一步了解业绩不佳的原因。";
			}
			if(data.interval == 6){
				data.intervaldes = "业绩表现不能令人满意；能力、经验和素质水平处于中等以下。";
			}

			$.each(data,function(k,v){
				if(isFloat(v)){
					data[k] = parseFloat(v).toFixed(2);
				}
			});
			if(data.shengrenliRanking){
				data.shengrenliRanking = parseInt(data.shengrenliRanking*100) +"%";
			}	
			if(data.shengrenliRanking == 0){
				data.shengrenliRanking = "0%";
			}	
			if(data.potentialRanking){
				data.potentialRanking = parseInt(data.potentialRanking*100) +"%";
			}
			if(data.potentialRanking == 0){
				data.potentialRanking = "0%";
			}				
			if(data.potentialReserveRanking){
				data.potentialReserveRanking = parseInt(data.potentialReserveRanking*100) +"%";
			}
			if(data.potentialReserveRanking == 0){
				data.potentialReserveRanking = "0%";
			}
			data.workYears = parseInt(data.workYears);
			data.industryYears = parseInt(data.industryYears);
			data.professionalYears = parseInt(data.professionalYears);
			data.managementYears = parseInt(data.managementYears);
			console.log(data);
			this.templateDom();
		},
		ajaxData:function(){
			$.ajax({
				url:"http://121.43.117.76:8888/excel_report/get/"+id,
				type:"get",
				dataType:"jsonp",
				jsonp: "jsonpCallback",
				success:function(res){
					data = res;
					mainFun.start();
				}
			});
		},
		templateDom:function(){
			if(data.position !== "ReserveCadres"){
				var template1 = $("#template1").html();
				var ret = template("template1", data);
				$("body").append($(ret));
			}else{
				var template2 = $("#template2").html();
				var ret = template("template2", data);
				$("body").append($(ret));
			}

		    window.setTimeout(function(){
		    	mainFun.initdoms();
		    },1000);
		},
		initdoms:function(){			
			$(".page.zysz"+data.sequence).show();
			$(".page").each(function(k,v){
				if($(this).css("display") == "none"){
					$(this).remove();
				}
			});
			$(".page.zysz").each(function(k,v){
				var $page = $(this);
				if(k == 0){
					var str1 = "shichangdaoxiang"
				}
				if(k == 1){
					var str1 = "goutongxietiao"
				}
				if(k == 2){
					var str1 = "qianyanzhuizong"
				}
				if(k == 3){
					var str1 = "xitongsiwei"
				}
				$page.find("span.score").each(function(i,j){
					if(i == 0){
						var str2 = str1+"a"
					}
					if(i == 1){
						var str2 = str1+"b"
					}
					if(i == 2){
						var str2 = str1+"c"
					}
					if(i == 3){
						var str2 = str1+"d"
					}
					var scores = data[str2];
					$(this).text(scores);
				});
			});
			if(data.sequence == 1){
				$("td#zhuangye1").html("市场导向");
				$("td#zhuangye2").html("沟通协调");	
				$("td#zhuangye3").html("前沿追踪");	
				$("td#zhuangye4").html("系统思维");		
			}
			if(data.sequence == 2){
				$("td#zhuangye1").html("分析判断");
				$("td#zhuangye2").html("学习发展");	
				$("td#zhuangye3").html("关注细节");	
				$("td#zhuangye4").html("行动力");		
			}
			if(data.sequence == 3){
				$("td#zhuangye1").html("分析判断");
				$("td#zhuangye2").html("客户导向");	
				$("td#zhuangye3").html("服务精神");	
				$("td#zhuangye4").html("人际交往");		
			}
			if(data.sequence == 4){
				$("td#zhuangye1").html("分析判断");
				$("td#zhuangye2").html("责任心");	
				$("td#zhuangye3").html("条理性");	
				$("td#zhuangye4").html("执行");		
			}
			if(data.sequence == 5){
				$("td#zhuangye1").html("市场导向");
				$("td#zhuangye2").html("人际交往");	
				$("td#zhuangye3").html("关系建立");	
				$("td#zhuangye4").html("资源整合");		
			}
			if(data.sequence == 6){
				$("td#zhuangye1").html("绩效导向");
				$("td#zhuangye2").html("行动力");	
				$("td#zhuangye3").html("关系建立");	
				$("td#zhuangye4").html("资源整合");		
			}
			if(data.sequence == 7){
				$("td#zhuangye1").html("市场导向");
				$("td#zhuangye2").html("成就导向");	
				$("td#zhuangye3").html("学习发展");	
				$("td#zhuangye4").html("前沿追踪");		
			}
			if(data.sequence == 8){
				$("td#zhuangye1").html("关注细节");
				$("td#zhuangye2").html("分析判断");	
				$("td#zhuangye3").html("责任心");	
				$("td#zhuangye4").html("行动力");		
			}
			if(data.sequence == 9){
				$("td#zhuangye1").html("客户导向");
				$("td#zhuangye2").html("服务精神");	
				$("td#zhuangye3").html("沟通协调");	
				$("td#zhuangye4").html("专业化");		
			}
			if(data.sequence == 10){
				$("td#zhuangye1").html("分析判断");
				$("td#zhuangye2").html("责任心");	
				$("td#zhuangye3").html("条理性");	
				$("td#zhuangye4").html("执行");		
			}
			if(data.sequence == 11){
				$("td#zhuangye1").html("分析判断");
				$("td#zhuangye2").html("沟通协调");	
				$("td#zhuangye3").html("影响能力");	
				$("td#zhuangye4").html("执行");		
			}
			var value1 = parseFloat($('#radialIndicators1').attr("_score")) * 100;
			$('#radialIndicators1').radialIndicator({
				radius:33,
		        barColor: '#4781f4',
		        barWidth: 4,
		        initValue: value1,
		        roundCorner: true,
		        percentage: true,
		        fontWeight: 'normal',
		        fontSize:"18"
		    });
		    var value2 = parseFloat($('#radialIndicators2').attr("_score")) * 100;
		    $('#radialIndicators2').radialIndicator({
				radius:33,
		        barColor: '#4781f4',
		        barWidth: 4,
		        initValue: value2,
		        roundCorner: true,
		        percentage: true,
		        fontWeight: 'normal',
		        fontSize:"18"
		    });
		    var value3 = parseFloat($('#radialIndicators3').attr("_score")) * 100;
		    $('#radialIndicators3').radialIndicator({
				radius:33,
		        barColor: '#4781f4',
		        barWidth: 4,
		        initValue: value3,
		        roundCorner: true,
		        percentage: true,
		        fontWeight: 'normal',
		        fontSize:"18"
		    });
		    if(data.position == "ReserveCadres"){
		    	this.echartdata4();
		    	//this.echartdata5();
		    }else{
			    this.echartdata1();
			    if(data.position == "FirstLineManager"){
			    	this.echartdata2();
			    }
			    if(data.position == "MiddleManager"){
			    	this.echartdata3();
			    }
		    }

		    var youshiArr = [],youshitag = [];
		    var fazhanArr = [],fazhantag = [];

		    $("td.tdyoushi").each(function(){
		    	var tag = $(this).closest("tr").attr("_tag");
		    	var text = $(this).closest("tr").find("td").eq(0).text();
		    	youshiArr.push(text);
		    	youshitag.push(tag);
		    });
		    $("td.tdfazhan").each(function(){
		    	var tag = $(this).closest("tr").attr("_tag");
		    	var text = $(this).closest("tr").find("td").eq(0).text();
		    	fazhanArr.push(text);
		    	fazhantag.push(tag)
		    });
		    if(youshiArr.length>0){
		    	var youshiStr = youshiArr.join("、");
		    	$("#youshispan").append(youshiStr);
		    }else{
		    	$("#youship").html(data.name+"无明显优势项目。");
		    }
		    if(fazhanArr.length>0){
		    	var fazhanStr = fazhanArr.join("、");
		    	$("#fazhanspan").append(fazhanStr);
		    }else{
		    	$("#fazhanp").html(data.name+"无待发展项目。");
		    }
		    //if((youshiArr.length + fazhanArr.length)<6){
		    	$.each(youshitag,function(k,v){
		    		if(k<6){
		    			var text = youshiArr[k];
			    		var title = fazhans[v];
			    		var $p = $('<p class="title4">'+text+'</p><p class="style5">'+title+'</p>');
			    		$("#youshidiv").append($p);
		    		}	    		
		    	});

		    var l1 = youshitag.length>6?6:youshitag.length;
		    var l2 = 6 - l1;	

	    	$.each(fazhantag,function(k,v){
	    		if(k<l2){
		    		var text = fazhanArr[k];
		    		var title = fazhans[v];
		    		var $p = $('<p class="title4">'+text+'</p><p class="style5">'+title+'</p>');
		    		$("#fazhandiv").append($p);
		    	}	
	    	});
	    	//$("#pagefazhan").remove();
		    //}

		    var suzhiArr = [];
		    var suzhidiv = [];
		    $("td.suzhitd").each(function(){
		    	var index = $(this).closest("tr").index();
		    	suzhidiv.push(suzhidivs[index]);
		    	var text = $(this).closest("tr").find("td.suzhiname").eq(0).text();
		    	suzhiArr.push(text);
		    });
		    if(suzhiArr.length>0){
		    	var suzhiStr = suzhiArr.join("、");
		    	$("#suzhifazhanspan").append(suzhiStr);

		    	if(suzhiArr.length<4){
		    		$.each(suzhiArr,function(k,v){
		    			$("#jianyi1").append(suzhidiv[k]);
		    		});
		    		$("#jianyi2").closest(".page").remove();
		    	}else{
		    		$.each(suzhiArr,function(k,v){
		    			if(k<3){
		    				$("#jianyi1").append(suzhidiv[k]);
		    			}else{
		    				$("#jianyi2").append(suzhidiv[k]);
		    			}
		    			
		    		});
		    	}

		    }else{
		    	$("#suzhifazhanp").html("在管理素质方面，"+data.name+"无特别需要关注的素质项");
		    }

		    var pageNum = $(".page").length;
			$(".page").each(function(k,v){
				var index = k+1;
				$(this).find("span.h-num").eq(1).html(index+"/"+pageNum);
			});
		},
		echartdata1:function(){
			var option1 = {
			    title : {
			        subtext: '通用素质'
			    },
			    polar : [
			       {
			           indicator : [
			               { text: '敬业', max: 10},
			               { text: '执行', max: 10},
			               { text: '客户导向', max: 10},
			               { text: '制度意识', max: 10},
			            ]
			        }
			    ],
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    series : [
			        {
			            type: 'radar',
			            data : [
			                {
			                    value : [data.jingye, data.zhixing, data.kehudaoxiang, data.zhiduyishi],
			                    name : '得分'
			                },
			                 {
			                    value : [data.jingyeAverage, data.zhixingAverage, data.kehudaoxiangAverage, data.zhiduyishiAverage],
			                    name : '平均分'
			                }
			            ]
			        }
			    ]
			};       
            var dom = $("#echarts1")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option1, true); 
			var option2 = {
			    title : {
			        subtext: '专业素质'
			    },
			    polar : [
			       {
			           indicator : [
			               { text: $("td#zhuangye1").html(), max: 10},
			               { text: $("td#zhuangye2").html(), max: 10},
			               { text: $("td#zhuangye3").html(), max: 10},
			               { text: $("td#zhuangye4").html(), max: 10},
			            ]
			        }
			    ],
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    series : [
			        {
			            type: 'radar',
			            data : [
			                {
			                    value : [data.shichangdaoxiang, data.goutongxietiao, data.qianyanzhuizong, data.xitongsiwei],
			                    name : '得分'
			                },
			                 {
			                    value : [data.shichangdaoxiangAverage, data.goutongxietiaoAverage, data.qianyanzhuizongAverage, data.xitongsiweiAverage],
			                    name : '平均分'
			                }
			            ]
			        }
			    ]
			};      
            var dom = $("#echarts2")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option2, true);            
		},
		echartdata2:function(){
			var $div = $('<div class="echarts3" id="echarts3"></div>');
			$("#echarts").append($div);
			var option = {
			    title : {
			        subtext: '管理素质'
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['指导与监控','激励']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'得分',
			            type:'bar',
			            data:[data.zhidaoyujiankong, data.jili],
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5]
					        }
					    }
			        },
			        {
			            name:'平均分',
			            type:'bar',
			            data:[data.zhidaoyujiankongAverage, data.jiliAverage],
			            itemStyle:{
					        normal:{
					        	barBorderRadius:[5, 5, 5, 5]
					        }
					    }
			        }
			    ]
			};
                        
            var dom = $("#echarts3")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
		},
		echartdata3:function(){
			var $div = $('<div class="echarts3" id="echarts3"></div>');
			$("#echarts").append($div);
			var option = {
			    title : {
			        subtext: '管理素质'
			    },
			    polar : [
			       {
			           indicator : [
			               { text: '培养他人', max: 10},
			               { text: '沟通协调', max: 10},
			               { text: '制度构建与优化', max: 10},
			               { text: '全局概念', max: 10},
			            ]
			        }
			    ],
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    series : [
			        {
			            type: 'radar',
			            data : [
			                {
			                    value : [data.peiyangtaren, data.toutongxietiao,data.zhidugoujianyouhua, data.quanjuguannian],
			                    name : '得分'
			                },
			                 {
			                    value : [data.peiyangtarenAverage, data.toutongxietiaoAverage,data.zhidugoujianyuyouhuaAverage, data.quanjuguannianAverage],
			                    name : '平均分'
			                }
			            ]
			        }
			    ]
			};  
           
            var dom = $("#echarts3")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
		},
		echartdata4:function(){
			var option = {
			    title : {
			        subtext: '素质倾向潜质分析'
			    },
			    polar : [
			       {
			           indicator : [
			               { text: '宏观思维', max: 10},
			               { text: '信息分析', max: 10},
			               { text: '操作经验', max: 10},
			               { text: '执行计划', max: 10},
			               { text: '推动他人', max: 10},
			               { text: '人际交往', max: 10},
			               { text: '人际理解', max: 10},
			               { text: '指导他人', max: 10}
			            ]
			        }
			    ],
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    series : [
			        {
			            type: 'radar',
			            data : [
			                {
			                    value : [data.hongguansiwei, data.xinxifenxi, data.caozuojingyan, data.zhixingjihua,data.tuidongtaren, data.renjijiaowang, data.renjilijie, data.zhidaotaren],
			                    name : '得分'
			                },
			                 {
			                 	value : [data.hongguansiweiAverage, data.xinxifenxiAverage, data.caozuojingyanAverage, data.zhixingjihuaAverage,data.tuidongtarenAverage, data.renjijiaowangAverage, data.renjilijieAverage, data.zhidaotarenAverage],
			                    name : '平均分'
			                }
			            ]
			        }
			    ]
			};       
            var dom = $("#echarts4")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
		},
		echartdata5:function(){
			var option = {
			    title : {
			        subtext: '管理素质'
			    },
			    polar : [
			       {
			           indicator : [
			               { text: '指导与监控', max: 10},
			               { text: '激励', max: 10},
			               { text: '培养他人', max: 10},
			               { text: '沟通协调', max: 10},
			               { text: '制度构建与优化', max: 10},
			               { text: '全局观念', max: 10}
			            ]
			        }
			    ],
			    color:["#4c5ee4","#6d006d"],
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['得分','平均分']
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    series : [
			        {
			            type: 'radar',
			            data : [
			                {
			                    value : [data.zhidaoyujiankongyoushi, data.jili, data.peiyangtaren, data.goutongxietiao,data.zhidugoujianyouhua, data.quanjuguannian],
			                    name : '得分'
			                },
			                 {
			                 	value : [data.zhidaoyujiankongyoushiAverage, data.jiliAverage, data.peiyangtarenAverage, data.goutongxietiaoAverage,data.zhidugoujianyouhuaAverage, data.quanjuguannianAverage],
			                    name : '平均分'
			                }
			            ]
			        }
			    ]
			};       
            var dom = $("#echarts5")[0];
			var myChart = echarts.init(dom); 
			myChart.setOption(option, true); 
		},
		handle:function(){
			var that = this;	
		}
	}
	
	mainFun.init();
 })(jQuery);  