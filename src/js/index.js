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
})
