$(document).ready(function () {
	// header
	function autoheader(){
		if( $(window).scrollTop() > 0 ){
			$(".ld-header").removeClass("showdiv");
			$(".fix-body").addClass("showdiv");
		}
		else{
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
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 4000
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

	// 浏览器兼容性判断
	if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) <= 9) {
		document.getElementById('browser-modal').style.display = 'block';
		console.log("您的浏览器版本过低，请使用IE10以上版本");
	}
});
