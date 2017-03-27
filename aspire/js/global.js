var oldtab = 'tab_1';
$(document).ready(function() {
	$("."+oldtab).slideDown();
	if($(document).width()< 765){
		$(".topBanner").css({'height':'auto'});
	}else {
		$(".topBanner").css({'height':$(window).height()});
	}
	/*if($(document).width()<= 1024){
		$('#cmn-video-demo3__container').css({'height':'auto'});
	}else {
		$('#cmn-video-demo3__container').css({'height':$(window).height()-170});
	}*/
	/*if($(document).width()> 990){
		$(".subNav").css({'height':$(window).height()});
	}else {
		$(".subNav").css({'height':'auto'});
	}*/
	$('.html5lightbox').click(function(){
		$("video").each(function(){
			$(this).get(0).pause();
		});
	});
	$(document).on("click","#html5-close img",function() {
		$("video").each(function(){
			$(this).get(0).play();
		});
    });
});

window.onload=function(){
	$('.pageDesc .pageDescWrap:last-child').css({'min-height':$(window).height()-100});
	//$("body").append("<div id='mobileLinks' class='mobileNav'>"+$("nav .navLinks").html()+"</div>" );
	//$( "#mobileLinks" ).prepend($(".userWrap").clone());
	
	
	/*$('html, body').stop().animate({
		scrollTop:0
	}, 1500,'easeInOutExpo',function(){
		
	});*/
	//$('.subNav li').eq(1).trigger('click');
//	$('.pageTab span:first-child').addClass('active');
	$('.subNav li').eq(1).addClass('active');
	$('.'+oldtab+' .setTab').each(function(index, element) {
		var offset = $(this).offset();
		$(this).attr('offsettop',(offset.top-100));
		$('.'+oldtab+' .pageTab span:first-child').addClass('active');
	});
	
	sliderInit();

};
$(window).resize(function() {
	
	$('.pageDesc .pageDescWrap:last-child').css({'min-height':$(window).height()-100});
	
	if($(document).width()< 765){
		$(".topBanner").css({'height':'auto'});
	}else {
		$(".topBanner").css({'height':$(window).height()});
	}
	/*if($(document).width()<= 1024){
		$('#cmn-video-demo3__container').css({'height':'auto'});
	}else {
		$('#cmn-video-demo3__container').css({'height':$(window).height()-170});
	}*/


	/*if($(document).width()> 990){
		$(".subNav").css({'height':$(window).height()});
	}else {
		$(".subNav").css({'height':'auto'});
	}*/

	/*if($(document).width()< 765){
	}else {
		if(!$(".menuIcon").hasClass('openNav')){
			$(".menuIcon").trigger('click');
		}
	}*/
	
	
	if($(window).scrollTop() > $(window).height()){
		$(".go_to_top").show();
	}else {
		$(".go_to_top").hide();
	}
	if($(window).scrollTop() >= $(window).height()){
		$(".subNav, .subTabWrap").addClass('sticky');
	}else {
		$(".subNav, .subTabWrap").removeClass('sticky');
	}
	
	$('.'+oldtab).slideDown(1000,function(){
		$('.'+oldtab+' .setTab').each(function(index, element) {
			var offset = $(this).offset();
			$(this).attr('offsettop',(offset.top-80));
		});
	});
	
	sliderInit();
	
});

$(".menuIcon").click(function(){
	var thisIcon = $(this);
	if($(document).width()< 765){
		if(thisIcon.hasClass('openNav')){
			$("body").css({'position':'absolute','width':$(document).width()});
			$("body").animate({
			right: 220,
			}, 200, function() {
			// Animation complete.
			});
			$("header").css({'width':'100%', 'left':'auto'});
			$("header").animate({
			paddingRight: 220,
			}, 200, function() {
			// Animation complete.
			});
			$(".go_to_top").animate({
			right: 235,
			}, 200, function() {
			// Animation complete.
			});
			$(".mobileNav").css({'display':'block'});
			$(".mobileNav").animate({
			right: 0,
			}, 200, function() {
			// Animation complete.
				$(".menuIcon").removeClass('openNav')
			});	
		}else {
			$("body").css({'position':'absolute','width':$(document).width()});
			$("body").animate({
			right: 0,
			}, 200, function() {
			// Animation complete.
				$(this).removeAttr('style');
			});
			$(".go_to_top").animate({
			right: 20,
			}, 200, function() {
			// Animation complete.
			});
			$("header").animate({
			paddingRight: 0,
			}, 200, function() {
			// Animation complete.
				$("header").css({'width':'auto', 'left':'0'});
			});
			$(".mobileNav").animate({
			right: '-220',
			}, 200, function() {
			// Animation complete.
				//$(this).css({'display':'none'});
				$(".menuIcon").addClass('openNav')
			});
				
					}
	}else {
		if(thisIcon.hasClass('openNav')){
			$('nav').animate({
				marginTop: 0,
			}, 500, function() {
			// Animation complete.
				$(".menuIcon").removeClass('openNav')
			});
		}else {
			$('nav').animate({
				marginTop: -71,
			}, 500, function() {
			// Animation complete.
				$(".menuIcon").addClass('openNav')
			});
		}
	}
});
//$(window).height()
$(window).scroll(function() {
	if($(window).scrollTop() > $(window).height()-10){
		$(".go_to_top").show();
	}else {
		$(".go_to_top").hide();
	}
	if($(window).scrollTop() > $(window).height()){
		$(".subNav, .subTabWrap").addClass('sticky');
	}else {
		$(".subNav, .subTabWrap").removeClass('sticky');
	}
	
	setTabAction();
	
});
$(".go_to_top").click(function(){
	$('html, body').stop().animate({
		scrollTop:0
	}, 1500,'easeInOutExpo',function(){
		$(".go_to_top").hide();
	});
});

$(".down_arrow").click(function(){
	$('html, body').stop().animate({
		scrollTop:$(window).height(),
	}, 1500,'easeInOutExpo',function(){
		
	});
});
$('.videoSmall').click(function(){
	$(".videoPlayerExpert").empty();
});
$(".videoThumb").click(function(){
	$(".videoPlayerExpert").empty();
	$(this).parents('.rightDesc').find('.videoPlayerExpert').html('<video controls loop autobuffer autoplay preload="auto" class="fullVideo margin_t_20" ><source src="'+$(this).attr('rel')+'" type="video/mp4" />  <p>THIS VIDEO IS NOT SUPPORTING IN YOUR BROWSER</p></video><div class="closeBtn">Close</div>');
	if($(document).width()< 765){
		$(this).parents('.rightDesc').find('.videoPlayerExpert').css({'bottom':0});
	}
});

$( document ).delegate( ".videoPlayerExpert .closeBtn", "click", function() {
	$(".videoPlayerExpert").empty().css({'bottom':'auto'});; 
});

$('.subNav li').click(function(){
	var thisRel = $(this).attr('rel');
	if(!$(this).hasClass('active') && !$(this).hasClass('homeSocial')){
		$('.subNav li').removeClass('active');
		$(this).addClass('active');
		$('.'+oldtab).slideUp(1000,function(){
			$('.'+oldtab+' .pageTab span').removeClass('active');
		});
		$('.'+thisRel).slideDown(1000,function(){
			$('.'+thisRel+' .setTab').each(function(index, element) {
				var offset = $(this).offset();
				$(this).attr('offsettop',(offset.top-100));
				$('.'+thisRel+' .pageTab span:first-child').trigger('click').addClass('active');
			});
			
			
		});
		//$('.'+thisRel+' .pageTab span').eq(0).trigger('click');
		/*$('html, body').stop().animate({
			scrollTop:$('.'+thisRel+' .pageTab span').attr('rel'),
		}, 1500,'easeInOutExpo',function(){
			
		});*/
		sliderInit();
		oldtab = $(this).attr('rel');
	}
});

$('.pageTab span').click(function(){
	//alert($(this).index());
	$('html, body').stop().animate({
		scrollTop:$("."+oldtab+" .setTab").eq($(this).index()).attr('offsettop'),	
	}, 1500,'easeInOutExpo',function(){
		
	});
	
});
function setTabAction(){
	var scrollEnd = ($('#mainWrap').height()-$(window).height());
	var setTop = $(window).scrollTop();
	$("."+oldtab+" .setTab").each(function(index, element) {
		if(setTop >= ($(this).attr('offsettop')-20)){
			$('.'+oldtab+' .pageTab span').removeClass('active');
			$('.'+oldtab+' .pageTab span').eq( $(this).attr('rel') ).addClass('active');
		}
		/*if(setTop >= scrollEnd){
			$('.'+oldtab+' .pageTab span').removeClass('active');
			$('.'+oldtab+' .pageTab span:last-child').addClass('active');
		}*/
	});
}

function sliderInit(){
	$('.blogSlider').cycle('destroy');
	$('.blogSlider li').removeAttr('style');
	$('.blogSlider li').each(function(index, element) {
		newWidth = $(this).parent().width();
		$(this).width(newWidth);
	});
	
	
	$('.blogSlider').each(function(){
        var nextBtn=$(this).parent().find('.blogSliderNext');
		var prevBtn=$(this).parent().find('.blogSliderPrev');
		if($(this).find('li').length == 1){
			$(this).parent().find('.blogSliderPrev').addClass('disable');
			$(this).parent().find('.blogSliderNext').addClass('disable');
			
			//console.log();
			$(this).animate({height: $(this).find('li').height()});
			$(this).parent().animate({height: $(this).find('li').height()});
		}
        $(this).cycle({ 
			fx:     'scrollHorz',
			timeout: 0, 
			nowrap: 1,
            next: nextBtn,
			prev: prevBtn,
			before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				var container = $(this).parent();
				container.css('height', Math.max(container.height(), $(nextSlideElement).height()));
				$(this).parent().animate({height: $(nextSlideElement).height()});
				$(this).parent().parent().animate({height: $(nextSlideElement).height()});
//				console.log(options.currSlide+'                        '+options.nextSlide);
				if(options.currSlide == 0){
					$(this).parent().parent().find('.blogSliderPrev').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderPrev').removeClass('disable');
				}
			},
			after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				if(options.currSlide == 0){
					$(this).parent().parent().find('.blogSliderPrev').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderPrev').removeClass('disable');
				}
				if(options.nextSlide == 0){
					$(this).parent().parent().find('.blogSliderNext').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderNext').removeClass('disable');
				}
			},
        });

    });
}
