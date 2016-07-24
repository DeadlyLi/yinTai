//详情页
$(function(){
	//移进显示导航
	var $fen_Lie = $('.nav .menu');
	$fen_Lie.on('mouseenter',function(){
		$(this).find('ol').show();
	}).on('mouseleave',function(){
		$(this).find('ol').hide();
	});
	
	//Tab切换
	//获取页面元素
	var $leftTop = $('.box .det_left .left_top');
	var $topUl = $leftTop.find('ul');
	var $leftDt = $('.box .det_left dl dt');
	//绑定点击事件 点击时 添加Class，并且切换Tab
	$topUl.on('click','li',function(){
		$(this).addClass('tab').siblings().removeClass('tab');
		//获取点击时对应的索引值
		var index = $(this).index();
		$leftDt.eq(index).show().siblings().hide();
	})
	//显示/隐藏
	//获取页面元素
	var $hover = $leftTop.find('.s_dan');
	$hover.on('mouseenter',function(){
		$(this).find('.gongZH').show();
	}).on('mouseleave',function(){
		$(this).find('.gongZH').hide();
	})
	
	
	//返回顶部
	//获取页面元素
	var $go_Top = $('.go_Top');
	var $top = $leftTop.offset().top;
	$(window).on('scroll',function(){
		//滚动过的距离
		var scrollTop = $(window).scrollTop();
		//判断滚动条大于1000时 top键出现 小1000则隐藏
		if(scrollTop>1000){
			$go_Top.show();
		}else{
			$go_Top.hide();
		}
		//判断导航栏一直显示
		if(scrollTop >= $top){
			$leftTop.css({top:scrollTop})
		}
		
	})
	//点击top键时 返回顶部
	$go_Top.on('click',function(){
		$('html,body').animate({scrollTop:0});
	})
})
