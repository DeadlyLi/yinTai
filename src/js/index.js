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
	$ul.on('mouseover',function(){
		clearInterval(timer);
		$prev.show();
		$next.show();
		//鼠标移出，轮播继续，两按键消失
	}).on('mouseleave',function(){
		timer = setInterval(fnNext,3000);
		$prev.hide();
		$next.hide();
	})
	//鼠标移进按键，按键背景颜色改变
	//点击左右键，图片向左/右播放
	//左键
	$prev.on('mouseenter',function(){
		$(this).css('background','#de014e');
	}).on('mouseleave',function(){
		$(this).css('background','#000');
	}).on('click',function(e){
		index--;
		fnChange();
		e.preventDefault();
	})
	//右键
	$next.on('mouseenter',function(){
		$(this).css('background','#de014e');
	}).on('mouseleave',function(){
		$(this).css('background','#000');
	}).on('click',function(e){
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
	$baiLi.on('mouseenter',function(){
		var now = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$baiTab.eq(now).show().siblings('.bai_Tab').hide();
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
		var Left = parseInt($ul_pic.css('left'));
		if(-Left>($width*3)){
			Left = -$width;
			$ul_pic.css({'left':-$width})
		}
		console.log(Left)
//		console.log($left)
		$ul_pic.animate({
			left:-$width+Left
		})
	})
	$prev.on('click',function(){
		//获取元素的每一次的left值
		var Left = parseInt($ul_pic.css('left'));
		if(Left>0){
			Left = -$width*5;
			$ul_pic.css({'left':-$width*5})
		}
		console.log(Left)
//		console.log($left)
		$ul_pic.animate({
			left:$width+Left
		})
	})	
})
