//轮播图
$(function(){
	//获取页面元素
	var $ul = $('.banner ul');
	var $li = $ul.find('li');
	var $prev = $ul.find('.prev');
	var $next = $ul.find('.next');
	var $doc = $('.doc').find('em');
	//设置索引值
	var index = 0;
	//通过定时器设置图片轮播
	var timer = setInterval(fnNext,3000);
	//鼠标移进轮播停止，两个点击键出现
	$ul.on('mouseenter',function(){
		clearInterval(timer);
		$(this).find("span").show();
		//鼠标移出，轮播继续，两按键消失
	}).on('mouseleave',function(){
		timer = setInterval(fnNext,3000);
		$(this).find("span").hide();
	})
	//鼠标移进按键，按键背景颜色改变
	//点击左右键，图片向左/右播放
	//左键
	$prev
//	.on('mouseenter',function(){
//		$(this).css('background','#de014e');
//	}).on('mouseleave',function(){
//		$(this).css('background','#000');
//	})
	.on('click',function(e){
		index--;
		fnChange();
		e.preventDefault();
	})
	//右键
	$next
//	.on('mouseenter',function(){
//		$(this).css('background','#de014e');
//	}).on('mouseleave',function(){
//		$(this).css('background','#000');
//	})
	.on('click',function(e){
		index++;
		fnChange();
		e.preventDefault();
	})
	//小图标
	$doc.on('mouseenter',function(){
		index = $(this).index();
		fnChange()
	})
	//封装图片定时轮播
	function fnNext(){
		index++;
		fnChange();
	}
	function fnChange(){
		
		if(index>$li.length-1){
			index = 0;
		}
		if(index<0){
			index = $li.length-1;
		}
		$li.eq(index).show().siblings('li').hide();
		$doc.removeClass('select').eq(index).addClass('select');
	}
	
	//鼠标移进轮播图上的图片 向左动
	var $bg = $('.banner .lunboBg');
	$bg.on('mouseenter',function(){
		$(this).stop(true).animate({'right':42});
	}).on('mouseleave',function(){
		$(this).stop(true).animate({'right':30});
	})
	
	//main上的效果
	//鼠标移进Tab切换
	//获取页面元素
	var $mainTop = $('.main .top_topL');
	var $mainTopLi = $mainTop.find('ul li');
	var $topL_bom = $mainTop.find('.topL_bom');
	//初始化
	$mainTopLi.eq(2).addClass('hover').siblings().removeClass('hover');
	$topL_bom.eq(2).show();
	//鼠标移进添加className切换Tab
	$mainTopLi.on('mouseenter',function(){
		var index = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$topL_bom.eq(index).show().siblings('.topL_bom').hide();
	})
	
	//main上超值特买的边框运动效果
	//获取页面元素
	var $mainDiv = $topL_bom.find('.bom_tu');
	fnMove($mainDiv,220,260);
	
	//main上银泰百货专柜中本周推荐的边框运动效果
	//获取页面元素
	var $bai_H = $('.main_BaiH .big_box ');
	var $tui_j = $bai_H.find('.bai_Tab ul li');
	fnMove($tui_j,200,250);
	
	//封装边框运动效果
	//思路：通过改变4个div的宽高实现运动效果
	function fnMove($obj,$width,$height){
		//鼠标移进改变宽高
		$obj.on('mouseenter',function(){
			$(this).find('.border_top').stop(true).animate({width:$width});
			$(this).find('.border_left').stop(true).animate({height:$height});
			$(this).find('.border_right').stop(true).animate({height:$height});
			$(this).find('.border_bottom').stop(true).animate({width:$width});
		}).on('mouseleave',function(){
		//鼠标移除恢复原来宽高
			$(this).find('.border_top').stop(true).animate({width:0});
			$(this).find('.border_left').stop(true).animate({height:0});
			$(this).find('.border_right').stop(true).animate({height:0});
			$(this).find('.border_bottom').stop(true).animate({width:0});
		})
	}
	//main上银泰百货专柜中Tab切换
	//获取页面元素
	var $baiTab = $bai_H.find('.bai_Tab');
	var $baiLi = $bai_H.find('.ul li');
	$baiTab.eq(0).show().siblings('.bai_Tab').hide();
	$baiLi.on('mouseenter',function(){
		var now = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$baiTab.eq(now).show().siblings('.bai_Tab').hide();
	})
	
	//鼠标移进改变透明度
	var $a = $baiTab.find('.Tab_a a');
	$a.on('mouseenter',function(){
		$(this).css({opacity:0.7});
	}).on('mouseleave',function(){
		$(this).css({opacity:1});
	})
	
	
	//通过改变left值的小轮播图(无缝轮播)
	//获取页面元素
	var $small_pic = $('.same .small_pic');
	var $prev = $small_pic.find('.prev');
	var $next = $small_pic.find('.next');
	var Spic_w = $small_pic.find('.ul_pic li');
	var $ul_pic = $small_pic.find('ul');
	var $width = Spic_w.width();
	//点击next按钮，$ul_pic的left值改变
	//获取元素的宽度
		
//		console.log($width)
	$next.on('click',function(){
		//获取元素的每一次的left值
		var Left = parseInt($(this).parent('.small_pic').find('ul').css('left'));
		if(-Left>($width*3)){
			Left = -$width;
			$(this).parent('.small_pic').find('ul').css({'left':-$width})
		}
//		console.log(Left)
//		console.log($left)
		$(this).parent('.small_pic').find('ul').stop(true).animate({
			left:-$width+Left
		})
	})
	$prev.on('click',function(){
		//获取元素的每一次的left值
		var Left = parseInt($(this).parent('.small_pic').find('ul').css('left'));
		if(Left>=0){
			Left = -$width*3;
			$(this).closest('.small_pic').find('ul').css({'left':-$width*3})
		}
//		console.log(Left)
//		console.log($left)
		$(this).closest('.small_pic').find('ul').stop(true).animate({
			left:$width+Left
		})
	})	
	
	//简单点击切换图
	//获取页面元素
	var $min_M = $('.same .min_min');
	var $min_Li = $min_M.find('li');
	var $min_Left = $min_M.find('.left');
	var $min_Right = $min_M.find('.right');
	var $dod = $min_M.find('em');
	var i = 0;
	//初始化
	$min_Li.eq(0).show().siblings().hide();
	//鼠标移进两按键显示，移出两按键隐藏
	$min_M.on('mouseenter',function(){
		$(this).find('span').stop(true).animate({width:30},100);
	}).on('mouseleave',function(){
		$(this).find('span').stop(true).animate({width:0},100);
	})
	
	//点击左键
	$min_Left.on('click',function(){
		i--;
		fnTab();
		$(this).closest('.min_min').find('li').eq(i).show().siblings().hide();
		$(this).closest('.min_min').find('em').eq(i).addClass('cctv').siblings().removeClass('cctv');
	})
	//点击右键
	$min_Right.on('click',function(){
		i++;
		fnTab();
		$(this).closest('.min_min').find('li').eq(i).show().siblings().hide();
		$(this).closest('.min_min').find('em').eq(i).addClass('cctv').siblings().removeClass('cctv');
	})
	//点击小圆点切换
	$dod.on('click',function(){
		i = $(this).index();
		fnTab();
		$(this).closest('.min_min').find('li').eq(i).show().siblings().hide();
		$(this).addClass('cctv').siblings().removeClass('cctv');
	})
	//封装切换状态
	function fnTab(){
		if(i>1){
			i=0;
		}
		if(i<0){
			i=1;
		}

	}
	//边框运动
	//获取页面元素
	var $yan_Y = $('.fashion .min_right ol');
	fnMove($yan_Y,271,181);
	
	//楼梯
	/*
		思路：
			1、给window绑定scroll事件
				1）当滚动到一定距离时，显示导航条
				2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
			2、点击导航条，滚动到相应的楼层
			3、返回顶部
	 */
		var $nav = $('.setp');
		var $floor = $('.same .fashion');
		
		// 1、给window绑定scroll事件
		$(window).on('scroll',function(){
			// 获取滚动过的距离
			var scrollTop = $(window).scrollTop();
	
			// 1）当滚动到一定距离时，显示导航条
			if(scrollTop >= 1200){
				$nav.fadeIn();
			}else if(scrollTop < 1200){
				$nav.fadeOut();
			}
			if(scrollTop < $floor.eq(0).offset().top-100){
				$nav.find('a').removeClass('nav');
			}
	
			// 2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
			// 目的：获得index值
			$floor.each(function(idx,ele){
				if(scrollTop >= $(ele).offset().top-20&& scrollTop <=$(ele).offset().top + $(ele).outerHeight()/2-10){
					$nav.find('a').removeClass('nav').eq(idx).addClass('nav');
					return false;
				}
			});
		});
	
		// 2、点击导航条，滚动到相应的楼层
		$nav.on('click','a',function(){
			// 3、返回顶部
			if($(this).hasClass('last')){
				// $(window).scrollTop(0);
				$('html,body').animate({scrollTop:0});
				return;
			}
			var index = $(this).closest('li').index();
			var scrollTop = $floor.eq(index).offset().top;
			// $(window).scrollTop(scrollTop);
			$('html,body').animate({scrollTop:scrollTop});
		});
})
