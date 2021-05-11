$(document).ready(function () {
	// header
	function autoheader(){
		if($(window).scrollTop() > 0){
			//$(".header").removeClass("dark").addClass("light");
			$(".ld-header").removeClass("showdiv");
			$(".fix-body").addClass("showdiv");
		}
		else{
			//$(".header").addClass("dark").removeClass("light");
			$(".fix-body").removeClass("showdiv");
			$(".ld-header").addClass("showdiv");
		}
	}
	$(window).scroll(function () {
		autoheader();
	})
	autoheader();


	// banner
	$('.banner-wrap').slick({
		dots: true,
		adaptiveHeight: true
	});


	// wow动画
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 200,
			mobile: false,
			live: true
		});
		wow.init();
	};
});


$(function () {
	$(window).bind('mousewheel', function (event, delta, deltaX, deltaY) {
		var scrollTop = $(window).scrollTop();
		if (scrollTop == 0 && $('.fix-top').hasClass('fixed') && deltaY >= 0) {
			$('.fix-top').removeClass('fixed');
			$('body').removeClass('fixedok');
			setTimeout(function () {
				$(window).scrollTop(0);
				$('body').removeClass('fixed');
			}, 300);
		}
		if (!$('.fix-top').hasClass('fixed') && deltaY < 0) {
			$('.fix-top').addClass('fixed');
			$('body').addClass('fixed');
			setTimeout(function () {
				$(window).scrollTop(5);
				$('body').removeClass('fixed');
				$(window).scrollTop(0);
			}, 300);
			setTimeout(function () {
				$('body').addClass('fixedok');
			}, 800);
		}
	});
	$(window).scrollTop(0);
});

