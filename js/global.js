function autoheader() {
	if ( $(window).scrollTop() > $(".banner").height() - $(".ld-header").height()) {
			$(".ld-header").addClass("showdiv");
		}
		else {
			$(".ld-header").removeClass("showdiv");
		}
}
$(window).scroll(function(){
	autoheader();	
})
autoheader();