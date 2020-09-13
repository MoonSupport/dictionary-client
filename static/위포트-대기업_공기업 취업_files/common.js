$(document).ready(function(){
	$(".tab-layout1 > ul >li").click(function(){
		$(this).parents('.tab-layout1').find('div').hide();
		$(this).parents('.tab-layout1').find('li').removeClass("on");
		var n = $(this).parents('.tab-layout1').find('li').index($(this));
		$(this).parents('.tab-layout1').find('div').eq(n).show();
		$(this).parents('.tab-layout1').find('li').eq(n).addClass("on");
	});

	$(".header-layout .MyMenu").click(function(){
		$('.myMenuLayer').show();
		$('.amjun').show();
	});
	$(".amjun").click(function(){
		$('.myMenuLayer').hide();
		$('.amjun').hide();
	});


	$(".lecture-navi .depth1 ul > li").click(function(){
		TabCommon($(".lecture-navi ul > li"),$(".lecture-navi ul > li").index(this),$('.lecture-navi .depth2'));
	});

	function TabWidth(){
		for(var j=0; j<4; j++){
			var ul_width = 0;
			var li_width = $(".lecture-navi .depth2").eq(j).find("ul > li");
			$.each(li_width,function(i){
				ul_width += li_width.eq(i).outerWidth();
				i++;
			});
			$(".lecture-navi .depth2").eq(j).find("ul").css({"width":(ul_width+2)+"px"});
		}
		var depth_Li =$(".lecture-navi .depth2.on").find("ul li");
		$.each(depth_Li,function(i){
			if(depth_Li.eq(i).hasClass("on")){
				var depth_Li_on = $(this).index();
				var depth_ul_posX = (65*depth_Li_on) - 130;
				if(depth_Li_on > 4){
					$(".lecture-navi .depth2.on").scrollLeft(depth_ul_posX);
				}
			}
		});
	}

	function TabCommon(a,b,c){
		var cnt = 0;
		$(".lecture-navi .depth1 li").removeClass("on");
		$(".lecture-navi .depth2").removeClass("on");
		a.each(function(){
			if(cnt==b){
				a.eq(cnt).addClass("on");
				c.eq(cnt).addClass("on");
				var ul_width = 0;
				var li_width = $(".lecture-navi .depth2.on > ul > li");
				$.each(li_width,function(i){
					ul_width += li_width.eq(i).outerWidth();
					i++;
				});
				$(".lecture-navi .depth2.on > ul").css({"width":(ul_width+2)+"px"});
			} else {
				a.eq(cnt).removeClass("on");
				c.eq(cnt).removeClass("on");
			}
			cnt++;
		});
	}

	$(".lecture-navi .depth2 > ul > li").bind("click",function(){
		var ul_width = $(this).parent().width();
		$(this).parent().css({"width":ul_width});
	});
	
	$('#offlineMap li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('#offlineMap li').removeClass('on');
		$('#iframeOfflineMap').attr('src', $(this).attr('data-src'));
		$(this).addClass('on');
		$("#"+tab_id).addClass('on');
	})


	var teacher_LI = $(".teacher-layout li").length;
	var teacher_LI_width = $(".teacher-layout li").outerWidth();
	var bookList_LI = $(".bookList-layout li").length;
	var location_LI = $(".location-menu li") .length;
	teacher_LI_width += 1;
	$(".teacher-layout ul").css({"width":(teacher_LI*teacher_LI_width)/2});
	$(".bookList-layout ul").css({"width":bookList_LI*150});
	$(".location-menu ul").css({"width":location_LI*100});


	$(".location-menu ul li").bind("click",function(){
		$(".mapConten").hide();
		$(".location-menu ul li").removeClass("on");
		$(".mapConten").eq($(this).index()).show();
		$(this).addClass("on");
	});
	$(".location-menu ul li").first().click();


	TabWidth();

	$(".layout").find("select").on("change", function(){

		$(this).css({"color":"#605f5f"});
	});


});
